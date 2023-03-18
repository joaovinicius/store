'use strict'
const { argv } = require('node:process')
const { exec } = require('child_process')
const contexts = ['Authentication', 'Store', 'Admin']
const flagOptions = contexts.map(item => `--${item.toLowerCase()}`)
let commandArgs = []
let flags = []
let paramName = ''

function execute(command) {
  return exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return
    }
    console.log(`stdout: ${stdout}`)
  })
}

function executeFirst() {
  const current = commandArgs.shift()
  console.log(commands[current] ? commands[current].description : current)

  if (commands[current] && typeof commands[current].command === 'function') {
    commands[current].command()
    return
  }

  if (commands[current] && typeof commands[current].command === 'string') {
    const result = execute(commands[current].command)

    result.on('close', code => {
      const successAndQueued = code === 0 && commandArgs.length
      const errorWithSkipAndQueued = code === 1
        && commandArgs.length
        && commands[current]?.skip === true
      if (successAndQueued || errorWithSkipAndQueued) {
        executeFirst()
      }
    });
    return
  }

  if (!commands[current]) {
    const result = execute(current)

    result.on('close', code => {
      const successAndQueued = code === 0 && commandArgs.length
      if (successAndQueued) {
        executeFirst()
      }
    });
    return
  }
}

function knexCommand(command, context, name = '') {
  return `knex ${command} ${name} --knexfile src/Infrastructure/Knex/${context}/knexfile.ts`
}

const commands = {
  help: {
    description: 'List all commands',
    command: () => {
      console.log('\nUsage: yarn nake [options] [--flag]\n\n', 'Commands:\n')
      for (const [key, value] of Object.entries(commands)) {
        console.log(` - ${key}: ${value.description}`);
      }
      console.log('\n Flag options:\n')
      contexts.forEach(item => {
        console.log(` --${item.toLowerCase()}`);
      })
      console.log('\nDocumentation can be found at ./nake.js\n')
    }
  },
  'create-volume-folder': {
    description: 'Create volume folder',
    command: 'mkdir ~/.store',
    skip: true
  },
  'check-docker-exist': {
    description: 'Check docker exist',
    command: 'docker -v',
    skip: false
  },
  'create-network': {
    description: 'Create docker network',
    command: 'docker network create store',
    skip: true
  },
  up: {
    description: 'Up docker services',
    command: 'docker compose up',
    skip: true
  },
  restart: {
    description: 'Restart docker services',
    command: 'docker compose restart'
  },
  stop: {
    description: 'Stop docker services',
    command: 'docker compose stop'
  },
  'create-database': {
    description: 'Create store database',
    command: 'PGPASSWORD=development createdb -U root -h localhost store && PGPASSWORD=development createdb -U root -h localhost admin && PGPASSWORD=development createdb -U root -h localhost authentication'
  },
  migrate: {
    description: 'Run all migrations (default) or especify the contexts with a flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? contexts.filter(item => flagOptions.includes(`--${item.toLowerCase()}`))
        : contexts

      commandArgs = contextToRun.map(item => knexCommand('migrate:latest', item))

      executeFirst()
    }
  },
  'migrate:make': {
    description: 'Create a migration flag option is required',
    command: () => {
      const contextToRun = (flags.length)
        ? contexts.filter(item => flagOptions.includes(`--${item.toLowerCase()}`))
        : contexts

      commandArgs = contextToRun
        .map(item => knexCommand('migrate:make', item, paramName.join('')))

      executeFirst()
    }
  },
  'migrate:rollback': {
    description: 'Run all migratios or context especified by flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? contexts.filter(item => flagOptions.includes(`--${item.toLowerCase()}`))
        : contexts
      commandArgs = contextToRun
        .map(item => knexCommand('migrate:rollback', item, paramName.join('')))

      executeFirst()
    }
  },
  'migrate:up': {
    description: 'Run all migratios or context especified by flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? contexts.filter(item => flagOptions.includes(`--${item.toLowerCase()}`))
        : contexts
      commandArgs = contextToRun
        .map(item => knexCommand('migrate:up', item, paramName.join('')))

      executeFirst()
    }
  },
  'migrate:down': {
    description: 'Run all migratios or context especified by flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? contexts.filter(item => flagOptions.includes(`--${item.toLowerCase()}`))
        : contexts
      commandArgs = contextToRun
        .map(item => knexCommand('migrate:down', item, paramName.join('')))

      executeFirst()
    }
  },
  'migrate:list': {
    description: 'Run all migratios or context especified by flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? contexts.filter(item => flagOptions.includes(`--${item.toLowerCase()}`))
        : contexts
      commandArgs = contextToRun.map(item => knexCommand('migrate:list', item))

      executeFirst()
    }
  },
  setup: {
    description: 'Run full setup',
    command: () => {
      commandArgs = [
        'check-docker-exist',
        'create-network',
        'create-volume-folder',
        'create-database',
        'up'
      ]
      executeFirst()
    }
  },
}

const commandOptions = Object.keys(commands)
commandArgs = argv.filter(item => commandOptions.includes(item))
flags = argv.filter(item => flagOptions.includes(item))
paramName = argv
  .filter(
    item => !commandOptions.includes(item)
      && !flagOptions.includes(item)
      && !item.includes('node')
      && !item.includes('nake.js')
  )

if (commandArgs.length) {
  executeFirst()
} else {
  commands.help.command()
}
