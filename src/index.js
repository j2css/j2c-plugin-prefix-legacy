var own = {}.hasOwnProperty
function cartesian(a,b, selectorP, res, i, j) {
  res = []
  for (j in b) if(own.call(b, j))
    for (i in a) if(own.call(a, i))
      res.push(a[i] + b[j])
  return res
}


module.exports = {
  $filter: function(next, inline) {
    var depth = 0
    var normalHandlers = {
      x: function(raw){
        return next.x(raw)
      },
      d: function(prop, col, value, semi) {
        if (depth || /^(?:animation(?:-property)?)|transition$/.test(prop)) {
            next.d('-webkit-'+prop, col, value, semi)
          }
        next.d(prop, col, value, semi)
      }
    }
    if (inline) return normalHandlers

    var handlers = normalHandlers
    var error = false
    var acc
    normalHandlers.a = function (rule, space, param, term) {
      if (rule == '@keyframes') {
        depth++
        acc = [['a', [].slice.call(arguments)]]
        handlers = keyframesHandlers
      } else {
        next.a(rule, space, param, term)
      }
    }
    normalHandlers.c = next.c
    normalHandlers.s = next.s

    var flushHandlers = Object.assign({}, normalHandlers, {
      a: function (rule, space, param, term) {
        next.a(rule, space, param, term)
      }
    })

    var keyframesHandlers = {
      a: function(rule,_2,_3, term) {
        if (rule == '@keyframes') {
            next.a('@-error-nested', ' ', '@keyframes', ';')
            error = true
          }
        if (/\{/.test(term)) depth++

        acc.push['a', [].slice(arguments)]
      },
      c: function(close) {
        acc.push(['c', [close]])
        if (depth === 1 && !error) {
            handlers = flushHandlers
            acc[0][1][0] = '@-webkit-keyframes'
            acc.forEach(function(l){
                handlers[l[0]].apply(next, l[1])
              })
            depth--
            acc[0][1][0] = '@keyframes'
            acc.forEach(function(l){
                handlers[l[0]].apply(next, l[1])
              })
            handlers = normalHandlers
          } else {
            depth--
          }
      },
      d: function() {
        acc.push(['d', [].slice.call(arguments)])
      },
      s: function() {
        depth ++
        acc.push(['s', [].slice.call(arguments)])
      }
    }
    return {
      a: function() {
        handlers.a.apply(next, arguments)
      },
      c: function() {
        handlers.c.apply(next, arguments)
      },
      d: function() {
        handlers.d.apply(next, arguments)
      },
      s: function() {
        handlers.s.apply(next, arguments)
      },
      x: normalHandlers.x
    }

  },
  prefix: function(val, vendors) {
    return cartesian(
          vendors.map(function(p){return '-' + p + '-'}).concat(['']),
          [val]
        )
  }
}
