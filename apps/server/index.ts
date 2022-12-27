import Boot from '../../src/Infrastructure/Express/boot'

new Boot()
  .setConfig()
  .setRoutes()
  .build()