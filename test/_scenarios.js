module.exports = {
    server: {
      title: 'server-side plugin:',
      plugin: '../',
      init: function() {},
      expected: 'server'
    },
    oldWebkit: {
      title: 'client-side plugin, old webkit:',
      plugin: '../dist/j2c-plugin-prefix-legacy',
      init: function() {
        global.document = {}
        global.getComputedStyle = function () {
          return {'-webkit-animation': 1}
        }
      },
      expected: 'old_webkit'
    },
    oldNonWebkit: {
      title: 'client-side plugin, old non-webkit:',
      plugin: '../dist/j2c-plugin-prefix-legacy',
      init: function() {
        global.document = {}
        global.getComputedStyle = function () {
          return {}
        }
      },
      expected: 'non-old_webkit'
    },
    modernWebkit: {
      title: 'client-side plugin, modern webkit:',
      plugin: '../dist/j2c-plugin-prefix-legacy',
      init: function() {
        global.document = {}
        global.getComputedStyle = function () {
          return {animation: 1, '-webkit-animation': 1}
        }
      },
      expected: 'non-old_webkit'
    },
    modernNonWebkit: {
      title: 'client-side plugin, modern non-webkit:',
      plugin: '../dist/j2c-plugin-prefix-legacy',
      init: function() {
        global.document = {}
        global.getComputedStyle = function () {
          return {animation: 1}
        }
      },
      expected: 'non-old_webkit'
    }
}