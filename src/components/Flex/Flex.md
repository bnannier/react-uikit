#### Utilize the power of flexbox to create a wide range of layouts.
The Flex component has an essential role in building layouts in react-uikit.
A lot of components, for example the Grid as well as horizontal navigations,
like the Navbar, Subnav, Breadcrumb, Pagination, Tab and Dotnav are built with 
flexbox and can be used together with the utility props from this component.

### Usage
To apply the flexbox layout model, use one of the following props.
By default, all flex items are aligned to the left, as wide as their content and matched in height.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flex</span> | Create the flex container and behave like a block element. |
| <span style="color:salmon">flexInline</span> | Create the flex container and behave like an inline element. |


```jsx
import { Card } from '../';

<React.Fragment>
    <Panel flex>
        <Card default body>Item 1</Card>
        <Card default body marginLeft>Item 1</Card>
        <Card default body marginLeft>Item 1</Card>
    </Panel>
</React.Fragment>
```