https://getuikit.com/docs/section

### Create horizontal layout sections with different background colors and styles.

## Usage
Sections are used to separate the content of a page into differently styled blocks. To apply this component, just add the style modifier props to a container element. You can place a container from the Container component to modify the width of the content inside sections and add horizontal padding. Note that the padding of a nested container will be reset.

### Style modifiers
```js
<React.Fragment>
    <Section>Default</Section>
    <Section muted>Muted</Section>
    <Section primary>Primary</Section>
    <Section secondary>Secondary</Section>
</React.Fragment>
```
By default, a section is blank. That is why it is important to add a modifier class for styling. In our example we are using the muted props.
