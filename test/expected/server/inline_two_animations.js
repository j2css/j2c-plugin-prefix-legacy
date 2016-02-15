module.exports = function (j2c) {
    return ''
        + '-webkit-animation: ' + j2c.names.foo + ' 1sec,' + j2c.names.bar + ' 2sec;'
        + 'animation: ' + j2c.names.foo + ' 1sec,' + j2c.names.bar + ' 2sec;'
}