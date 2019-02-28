const ghpages = require('gh-pages')
const path = require('path')

ghpages.publish(path.join(__dirname, '../dist'), {
    user: {
        name: 'Javier Asperilla',
        email: 'javierasperilla@gmail.com'
    },
    message: 'Auto-generated commit',
    repo: 'https://github.com/javierasperilla/javierasperilla.github.io.git',
    branch: 'master',
    logger: function(message) {
        console.log(message);
    }
}, (err) => {
    err && console.log(err);
})
