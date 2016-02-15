var own = {}.hasOwnProperty
function cartesian(a,b, selectorP, res, i, j) {
  res = []
  for (j in b) if(own.call(b, j))
    for (i in a) if(own.call(a, i))
      res.push(a[i] + b[j])
  return res
}

var plugin = {
  prefix: function(val, vendors) {
    return cartesian(
          vendors.map(function(p){return '-' + p + '-'}).concat(['']),
          [val]
        )
  }
}
var style = getComputedStyle(document.documentElement, null)
if(!('animation' in style) && '-webkit-animation' in style) {
  plugin.$filter = function(next, inline) {
    var depth = 0
    var res = {
      x: next.x ,
      d: function(prop, col, value, semi) {
        if (depth || /^(?:animation(?:-property)?)|transition$/.test(prop)) {
          next.d('-webkit-'+prop, col, value, semi)
        }
        if (depth || !/^(?:animation(?:-property)?)|transition$/.test(prop)) {
          next.d(prop, col, value, semi)
        }
      }
    }
    if (!inline) {
      res.a = function(rule, space, params, term) {
        if (rule === '@keyframes') {
          depth++
          rule = '@-webkit-keyframes'
        }
        next.a(rule, space, params, term)
      }
      res.c = function() {
        depth && depth--
        next.c.apply(next, arguments)
      }
      res.s = function() {
        depth && depth ++
        next.s.apply(next, arguments)
      }

    }
    return res
  }
}
export default plugin