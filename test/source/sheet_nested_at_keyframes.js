module.exports = {
    '@keyframes foo': {
        // This is silly, invalid CSS only present to cover the case if 
        // it ever was possible to have a non-block at-rule nested at this
        // level.
        '@import': '"other.css"',
        from: {'@keyframes bar': {color:'blue'}},
        to: {color:'red'}
    }
}