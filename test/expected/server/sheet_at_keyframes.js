module.exports = function (j2c) {
    return  '' +
        '@-webkit-keyframes ' + j2c.names.foo + ' { ' +
            'from {-webkit-color:blue; color:blue}' +
            'to {-webkit-color:red; color:red}' +
        '}' +
        '@keyframes ' + j2c.names.foo + ' {' + 
            'from {color:blue}' +
            'to {color:red}' +
        '}'
}

