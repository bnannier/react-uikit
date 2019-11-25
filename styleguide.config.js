module.exports = {
    styleguideDir: "docs",
    components: 'src/components/**/[A-Z]*.js',
    pagePerSection: true,
    sortProps: props => props,
    skipComponentsWithoutExample: true,
    getExampleFilename(componentPath) {
        return componentPath.replace(/\.js?$/, '.md')
    }
}
