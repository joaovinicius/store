'use strict'
const { argv } = require('node:process')
const { exec } = require('child_process')
const contexts = {
  '--authentication' : 'Authentication',
  '--store' :  'Store', 
  '--admin' :  'Admin'
} 

const flagOptions = Object.keys(contexts)
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
      for (const [flag,context] of Object.entries(contexts)){
        console.log(` - ${context} ${flag}`);
      }
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
    command: 'docker compose up -d',
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
  migrate: {
    description: 'Run all migrations (default) or especify the contexts with a flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? flags
        : flagOptions

      commandArgs = contextToRun.map(item => knexCommand('migrate:latest', contexts[item]))

      executeFirst()
    }
  },
  'seed:make': {
    description: 'Create a seed flag option is required',
    command: () => {
      const contextToRun = (flags.length)
        ? flags
        : flagOptions
      commandArgs = contextToRun
        .map(item => knexCommand('seed:make', contexts[item], paramName.join('')))

      executeFirst()
    }
  },
  'migrate:make': {
    description: 'Create a migration flag option is required',
    command: () => {
      const contextToRun = (flags.length)
        ? flags
        : flagOptions
      commandArgs = contextToRun
        .map(item => knexCommand('migrate:make', contexts[item], paramName.join('')))

      executeFirst()
    }
  },
  'migrate:rollback': {
    description: 'Run all migratios or context especified by flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? flags
        : flagOptions
      commandArgs = contextToRun
        .map(item => knexCommand('migrate:rollback', contexts[item], paramName.join('')))

      executeFirst()
    }
  },
  'migrate:up': {
    description: 'Run all migratios or context especified by flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? flags
        : flagOptions
      commandArgs = contextToRun
        .map(item => knexCommand('migrate:up', contexts[item], paramName.join('')))

      executeFirst()
    }
  },
  'migrate:down': {
    description: 'Run all migratios or context especified by flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? flags
        : flagOptions
      commandArgs = contextToRun
        .map(item => knexCommand('migrate:down', contexts[item], paramName.join('')))

      executeFirst()
    }
  },
  'migrate:list': {
    description: 'Run all migratios or context especified by flag option',
    command: () => {
      const contextToRun = (flags.length)
        ? flags
        : flagOptions
      commandArgs = contextToRun.map(item => knexCommand('migrate:list', contexts[item]))

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
        'up',
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
