'use strict'
const { argv } = require('node:process')
const { exec } = require('child_process')

let commandArgs = []

function execute(key) {
  return exec(commands[key].command, (error, stdout, stderr) => {
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
  console.log(commands[current].description)

  if (typeof commands[current].command === 'function') {
    commands[current].command()
    return
  }

  if (typeof commands[current].command === 'string') {
    const result = execute(current)

    result.on('close', code => {
      const successAndQueued = code === 0 && commandArgs.length
      const errorWithSkipAndQueued = code === 1 && commandArgs.length && commands[current]?.skip === true
      if (successAndQueued || errorWithSkipAndQueued) {
        executeFirst()
      }
    });
  }
}

const commands = {
  help: {
    description: 'List all commands',
    command: () => {
      console.log('\nUsage: yarn nake [options]\n\n', 'Options:\n')
      for (const [key, value] of Object.entries(commands)) {
        console.log(` - ${key}: ${value.description}`);
      }
      console.log('\nDocumentation can be found at ./nake.js\n')
    }
  },
  checkDockerExist: {
    description: 'Check docker exist',
    command: 'docker -v',
    skip: false
  },
  createDockerNetwork: {
    description: 'Create docker network',
    command: 'docker network create store',
    skip: true
  },
  createVolumeFolder: {
    description: 'Create volume folder',
    command: 'mkdir ~/.store',
    skip: true
  },
  dockerComposeUp: {
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
  // createDatabase: {
  //   description: 'Create store database',
  //   command: 'PGPASSWORD=development createdb -U root -h localhost abler'
  // },
  // indexElasticSearch
  // generate swagger
  // generate storybook
  // run migrations
  setup: {
    description: 'Run full setup',
    command: () => {
      commandArgs = [
        'install',
        'checkDockerExist',
        'createDockerNetwork',
        'createVolumeFolder',
        'dockerComposeUp'
      ]
      executeFirst()
    }
  },
}

const commandOptions = Object.keys(commands)
commandArgs = argv.filter(item => commandOptions.includes(item))

if (commandArgs.length) {
  executeFirst()
} else {
  commands.help.command()
}
