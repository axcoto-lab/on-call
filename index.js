var config = require('config')
    , oncall = require('lib/oncall')

config.load('config.hjson')
  .then(function(pain) {
    console.log("Load config", pain)
    oncall(pain)
  })
