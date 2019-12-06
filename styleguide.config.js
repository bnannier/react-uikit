const path = require('path');

module.exports = {
    styleguideDir: "docs",
    components: 'src/components/**/[A-Z]*.js',
    pagePerSection: true,
    sortProps: props => props,
    skipComponentsWithoutExample: true,
    getExampleFilename(componentPath) {
        return componentPath.replace(/\.js?$/, '.md')
    },
    template: {
        head: {
            scripts: [
                {src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js'},
                {src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit-icons.min.js"}
            ]
        }
    },
    require: [
        path.join(__dirname, 'styles.css')
    ]
};
