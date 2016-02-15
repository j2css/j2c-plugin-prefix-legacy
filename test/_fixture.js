Object.prototype.BADBAD = 5

var fs = require('fs')
  expect = require('expect.js'),
  minifySelectors = require('postcss-minify-selectors'),
  minifyParams = require('postcss-minify-params'),
  perfectionist = require('perfectionist'),
  postcss = require('postcss')([perfectionist({format:'compressed'}), minifySelectors(), minifyParams()])

var own = {}.hasOwnProperty

function normalize(s) { return postcss.process(s).css }

function check(result, expected){
  result = normalize(result)
  expect(normalize(expected)).to.be(result)
}

module. exports = function(scenario) {
  clearCache: while (true) {
    for(var path in require.cache) if (own.call(require.cache, path)) {delete require.cache[path]}
    for(var path in require.cache) if (own.call(require.cache, path)) {continue clearCache}
    break
  }

  scenario.init()

  var plugin = require(scenario.plugin)

  suite(scenario.title)

  var cases = fs.readdirSync('test/expected/' + scenario.expected)
  cases.forEach(function(Case) {
      var j2c = require('j2c')().use(plugin)
      // var j2c = require('j2c')().use( logger('before'), plugin, logger('after'))
      var method = Case.match(/^([a-z]+)/)[1]
      var name = Case.replace(/_/g, ' ').replace('.js', '')
      test(name, function(){
          check(
              j2c[method](require('./source/' + Case)),
              require('./expected/' + scenario.expected + '/' + Case)(j2c)
          )
      })
  })


    test('j2c.prefix 1 x 1', function() {
      var prod = require('j2c')().use(plugin).prefix('foo', ['o'])
      expect(prod[0]).to.be('-o-foo')
      expect(prod[1]).to.be('foo')
    })

    test('j2c.prefix 2 x 1', function() {
      var prod = require('j2c')().use(plugin).prefix('foo', ['o', 'p'])
      expect(prod[0]).to.be('-o-foo')
      expect(prod[1]).to.be('-p-foo')
      expect(prod[2]).to.be('foo')
    })



}