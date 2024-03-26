import Boot from '../../src/Infrastructure/Server/boot.js'

new Boot()
  .setConfig()
  .setRoutes()
  .build()
