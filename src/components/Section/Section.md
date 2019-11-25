https://getuikit.com/docs/section

### Usage
Sections are used to separate the content of a page into differently styled blocks. To apply this component, just add the style modifier props to a container element. You can place a container from the Sample component to modify the width of the content inside sections and add horizontal padding. Note that the padding of a nested container will be reset.

### Style modifiers
To apply different background colors and paddings, add one of the following classes.

```jsx
<React.Fragment>
    <Section>Default</Section>
    <Section muted>Muted</Section>
    <Section primary>Primary</Section>
    <Section secondary>Secondary</Section>
    <Section secondary image="https://camo.githubusercontent.com/a3dde86ab1e0f8ea7a7222188481b136520f3226/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f2d494b336f6a4e4c416641492f5552524f717063752d53492f41414141414141414c44382f42476478644339753270492f73323536302f50657363616465726f42656e63682e6a7067">Secondary with image background</Section>
</React.Fragment>
```
By default, a section is blank. That is why it is important to add a modifier class for styling. In our example we are using the muted props.

### Size modifiers
You can add different paddings to each section or remove it altogether.

```jsx
<React.Fragment>
    <Section primary>Default size modifier</Section>
    <Section secondary xsmall>Decrease a section's padding to a minimum using the xsmall size modifier</Section>
    <Section primary small>Decrease a section's padding using the small size modifier</Section>
    <Section secondary large>Increase a section's padding using the large size modifier</Section>
    <Section primary xlarge>Increase a section's padding to a maximum using the xlarge size modifier</Section>
    <Section secondary removeVertical>Remove a section's padding using the removeVertical size modifier</Section>
</React.Fragment>
```
