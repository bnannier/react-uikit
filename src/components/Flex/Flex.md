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
import { Card, Panel } from '../';

<React.Fragment>
    <Panel flex>
        <Card default body>Item 1</Card>
        <Card default body marginLeft>Item 2</Card>
        <Card default body marginLeft>Item 3</Card>
    </Panel>
</React.Fragment>
```

### Horizontal Alignment
These props define the horizontal alignment of flex items and distribute the space between them.
Add one or more of them to the flex container in order to configure the alignments of the flex items.
By default, flex items are aligned to the left as does the flexLeft props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flexLeft</span> | Add this prop to align flex items to the left. |
| <span style="color:salmon">flexCenter</span> | Add this prop to center flex items along the main axis. |
| <span style="color:salmon">flexRight</span> | Add this prop to align flex items to the right. |
| <span style="color:salmon">flexBetween</span> | Add this prop to distribute items evenly, with equal space between the items along the main axis. |
| <span style="color:salmon">flexAround</span> | Add this prop to distribute items evenly with equal space on both sides of each item. |

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Panel flex flexCenter>
        <Card default body>Item 1</Card>
        <Card default body marginLeft>Item 2</Card>
        <Card default body marginLeft>Item 3</Card>
    </Panel>
</React.Fragment>
```

### Responsive Flex
React-uikit provides a number of responsive flex props for horizontal alignment.
Basically, they work just like the usual flex alignment props, except that they have suffixes that represent the breakpoint from which they come to effect.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flexLeftSmall</span><br /><span style="color:salmon">flexCenterSmall</span><br /><span style="color:salmon">flexRightSmall</span><br /><span style="color:salmon">flexBetweenSmall</span><br /><span style="color:salmon">flexAroundSmall</span><br /> | Only affects device widths of <span style="color:salmon">640px</span> and higher.
| <span style="color:salmon">flexLeftMedium</span><br /><span style="color:salmon">flexCenterMedium</span><br /><span style="color:salmon">flexRightMedium</span><br /><span style="color:salmon">flexBetweenMedium</span><br /><span style="color:salmon">flexAroundMedium</span><br /> | Only affects device widths of <span style="color:salmon">640px</span> and higher.
| <span style="color:salmon">flexLeftLarge</span><br /><span style="color:salmon">flexCenterLarge</span><br /><span style="color:salmon">flexRightLarge</span><br /><span style="color:salmon">flexBetweenLarge</span><br /><span style="color:salmon">flexAroundLarge</span><br /> | Only affects device widths of <span style="color:salmon">640px</span> and higher.
| <span style="color:salmon">flexLeftXLarge</span><br /><span style="color:salmon">flexCenterXLarge</span><br /><span style="color:salmon">flexRightXLarge</span><br /><span style="color:salmon">flexBetweenXLarge</span><br /><span style="color:salmon">flexAroundXLarge</span><br /> | Only affects device widths of <span style="color:salmon">640px</span> and higher.

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Panel flex flexCenterMedium flexRightLarge>
        <Card default body>Item 1</Card>
        <Card default body marginLeft>Item 2</Card>
        <Card default body marginLeft>Item 3</Card>
    </Panel>
</React.Fragment>
```

### Vertical alignment
These props define the vertical alignment of flex items.
By default, flex items fill the height of their container as does the flexStretch props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flexStretch</span> | Add this prop to expand flex items to fill the height of their parent. |
| <span style="color:salmon">flexTop</span> | Add this prop to align flex items to the top. |
| <span style="color:salmon">flexMiddle</span> | Add this prop to center flex items along the cross axis. |
| <span style="color:salmon">flexBottom</span> | Add this prop to align flex items to the bottom. |

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Panel flex flexMiddle textCenter>
        <Card default body>Item 1</Card>
        <Card default body marginLeft>Item 2 <br />...</Card>
        <Card default body marginLeft>Item 3 <br />... <br />...</Card>
    </Panel>
</React.Fragment>
```

### Direction modifiers
These props define the axis that flex items are placed on and their direction.
By default, items run horizontally from left to right as does the flexRow prop.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flexRow</span> | Add this prop to lay out flex items as horizontal rows |
| <span style="color:salmon">flexRowReverse</span> | Add this prop to lay out flex items from right to left. |
| <span style="color:salmon">flexColumn</span> | Add this prop to lay out flex items as vertical columns. |
| <span style="color:salmon">flexColumnReverse</span> | Add this prop to lay out flex items from bottom to top. |

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Panel flex flexColumn width="1-3">
        <Card default body>Item 1</Card>
        <Card default body marginTop>Item 2</Card>
        <Card default body marginTop>Item 3</Card>
    </Panel>
</React.Fragment>
```

### Wrap Modifiers
By default, flex items are fit into one line and run from left to right.
Add one of these props to modify the behavior of wrapping flex items.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flexWrap</span> | Add this prop to make flex items wrap into another line when they no longer fit their container. |
| <span style="color:salmon">flexWrapReverse</span> | Add this prop to change the items' direction so that they run from right to left. |
| <span style="color:salmon">flexNoWrap</span> | Add this prop to force the flex items into one line. This is the default behavior. |

The following props modify the alignment of wrapping flex items.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flexWrapStretch</span> | Add this prop, so that item lines stretch to take up the remaining space |
| <span style="color:salmon">flexWrapBetween</span> | Add this prop to distribute item lines evenly, with the first row at the top and last row at the bottom of the container. |
| <span style="color:salmon">flexWrapAround</span> | Add this prop to distribute lines evenly with equal space at the top and bottom of each row. |
| <span style="color:salmon">flexWrapTop</span> | Add this prop to align multiline flex items to the top. |
| <span style="color:salmon">flexWrapMiddle</span> | Add this prop to vertically center multirow flex items. |
| <span style="color:salmon">flexWrapBottom</span> | Add this prop to align multiline flex items to the bottom. |


```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Panel flex flexWrap flexWrapAround backgroundMuted heightMedium textCenter>
        <Card default body small width="1-3">Item 1</Card>
        <Card default body small width="1-2" marginLeft>Item 2</Card>
        
        <Card default body small width="1-3">Item 3</Card>
        <Card default body small width="1-3" marginLeft>Item 4</Card>
        
        <Card default body small width="1-2">Item 5</Card>
        <Card default body small width="1-3" marginLeft>Item 6</Card>
    </Panel>
</React.Fragment>
```

### Item order
By default, flex items are laid out according to the source order.
To display a certain item as the first or last one, just add one of these props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flexFirst</span> | Displays the item as the first one. |
| <span style="color:salmon">flexLast</span> | Displays the item as the last one. |
| <span style="color:salmon">flexFirstSmall</span><br /><span style="color:salmon">flexLastSmall</span> | Affects device widths of <span style="color:salmon">640px</span> and higher. |
| <span style="color:salmon">flexFirstMedium</span><br /><span style="color:salmon">flexLastMedium</span> | Affects device widths of <span style="color:salmon">960px</span> and higher. |
| <span style="color:salmon">flexFirstLarge</span><br /><span style="color:salmon">flexLastLarge</span> | Affects device widths of <span style="color:salmon">1200px</span> and higher. |
| <span style="color:salmon">flexFirstXLarge</span><br /><span style="color:salmon">flexLastXLarge</span> | Affects device widths of <span style="color:salmon">1600px</span> and higher. |

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Panel flex>
        <Card default body flexLast marginLeft>Item 1</Card>
        <Card default body flexFirst marginLeft>Item 2</Card>
        <Card default body marginLeft>Item 3</Card>
    </Panel>
</React.Fragment>
```

### Item dimensions
To determine how much space a flex item should take up, add one of the following props to the item.
By default, items determine their size by their content, but are allowed to shrink.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">flexNone</span> | The box's size is determined by its content. |
| <span style="color:salmon">flexAuto</span> | The space is allocated considering the item's content. |
| <span style="color:salmon">flex1</span> | The space is allocated solely based on flex. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid flexMiddle>
        <Panel widthMedium="2-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </Panel>
        <Panel widthMedium="1-3" flexFirst>
       
       //TODO: Image Component needs to be created
            <img src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
        
        </Panel>
    </Grid>
</React.Fragment>
```