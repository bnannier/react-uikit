https://getuikit.com/docs/card

### Usage
The Card component consists of the card itself, the card body and an optional card title.
Typically, cards are arranged in grid columns from the Grid component.

| PROP  | DESCRIPTION |
| ----- | ----------- |
| body  | Add this prop to a Card component to define the Card component. |

```jsx
<React.Fragment>
    <Card body default>
        <Card.Title>Default</Card.Title>
        <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Card>
</React.Fragment>
```

### Style modifiers
UIkit includes a number of modifiers that can be used to add a specific style to cards.

| PROP  | DESCRIPTION |
| ----- | ----------- |
| default  | Add this prop to create a visually styled box. |
| primary  | Add this prop to modify the card and emphasize it with a primary color. |
| secondary  | Add this prop to modify the card and give it a secondary background color. |

```jsx
<React.Fragment>
    <Card body default>
        <Card.Title>Default</Card.Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
    <Card body primary>
        <Card.Title>Primary</Card.Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
    <Card body secondary>
        <Card.Title>Secondary</Card.Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
</React.Fragment>
```
