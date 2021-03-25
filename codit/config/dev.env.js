'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TOKEN: '"6a1ecaa18cd203a325661894aa606a7f6dd5d9ac"'
})
