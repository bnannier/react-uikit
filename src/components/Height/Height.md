https://getuikit.com/docs/height

#### Utilize the power of flexbox to create a wide range of layouts.
Define the height of elements depending on the viewport or match the heights of different elements.
React UIkit's <a href='#/Height' target='blank'>Height component</a> offers three ways to set heights: using simple fixed height utility props, depending on the viewport or by matching the heights of different elements.

### Usage
React UIkit provides a number of useful props to alter an element's height.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <div style="color:salmon">height1_1</div> | This port applies a height of 100%. This only works if the parent element has a set height. |
| <div style="color:salmon">heightSmall</div><div style="color:salmon">heightMaxSmall</div> | These prop apply a height or max-height of <span style="color:salmon">150px</span>. |
| <div style="color:salmon">heightMedium</div><div style="color:salmon">heightMaxMedium</div> | These prop apply a height or max-height of <span style="color:salmon">300px</span>. |
| <div style="color:salmon">heightLarge</div><div style="color:salmon">heightMaxLarge</div> | These prop apply a height or max-height of <span style="color:salmon">450px</span>. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-3">
        <Panel>
            <Card heightSmall default body flex flexCenter flexMiddle>Small</Card>
        </Panel>
        <Panel>
            <Card heightMedium default body flex flexCenter flexMiddle>Medium</Card>
        </Panel>
        <Panel>
           <Card heightLarge default body flex flexCenter flexMiddle>Large</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

### Viewport height
Add the <span style="color:salmon">heightViewport</span> property to create a container that fills the height of the entire viewport.
You can change the height behavior by adding the <span style="color:salmon">heightViewportOffsetTop</span>,
<span style="color:salmon">heightViewportOffsetBottom</span> or <span style="color:salmon">heightViewportExpand</span> prop.
<a href="https://getuikit.com/docs/javascript#component-configuration">Learn more</a>

| PROPS  |  VALUE  | DEFAULT |    DESCRIPTION    |
| ------ | ------- | ------- | ----------------- |
| <div style="color:salmon">offset-top</div> | Boolean | <div style="color:salmon">false</div> | Subtracts the element's top offset from its height. |
| <div style="color:salmon">offset-bottom</div> | Boolean, Number, Pixel | <div style="color:salmon">false</div> | Subtracts the height (true) of the sibling that immediately follows the element, the given percentage (Number), Pixel (px) value from element's own height or the given element's height. |
| <div style="color:salmon">expand</div> | Boolean | <div style="color:salmon">false</div> | Expands the element's height to make a short page fill the viewport. |
| <div style="color:salmon">min-height</div> | Number | <div style="color:salmon">0</div> | Sets a minimum height. Useful if all children are positioned absolute. |

```html static
<Card heightViewport></Card>

<Card heightViewportOffsetTop="true"></Card>

<Card heightViewportOffsetBottom="20"></Card>

<Card heightViewportExpand="true"></Card>

<Card heightViewportMinHeight="300"></Card>
```
You can view examples in the tests for <a href="https://getuikit.com/assets/uikit/tests/height-viewport.html">Height Viewport</a>
and <a href="https://getuikit.com/assets/uikit/tests/height-expand.html">Height Expand</a>.

------

### Match height

To expand all children of a container to the same height regardless of their content, for example inside a grid, add the <span style="color:salmon">heightMatch</span> prop.
You can change the height matching behavior by setting the <span style="color:salmon">heightMatchTarget</span> or <span style="color:salmon">heightMatchRow</span> prop.
<a href="https://getuikit.com/docs/javascript#component-configuration">Learn more</a>

| PROPS  |  VALUE  | DEFAULT |    DESCRIPTION    |
| ------ | ------- | ------- | ----------------- |
| <div style="color:salmon">heightMatchTarget</div> | String | <div style="color:salmon">> *</div> | Elements that should match. |
| <div style="color:salmon">heightMatchRow</div> | Boolean | <div style="color:salmon">true</div> | By default only items in the same row will be matched. For example, once grid columns extend to a width of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports. |

```html static
<Panel heightMatch>
    <Card></Card>
    <Card></Card>
</Panel>
```
You can view examples in the tests for <a href="https://getuikit.com/assets/uikit/tests/height-viewport.html">Height Viewport</a>
and <a href="https://getuikit.com/assets/uikit/tests/height-expand.html">Height Expand</a>.

------

#### Match cards

You can also target and match specific elements inside the container, like cards.
Just add the <span style="color:salmon">heightMatchTarget="SELECTOR"</span> prop.

```html static
<Grid heightMatchTarget="SELECTOR">...</Grid>
```
```jsx
import { Card, Grid, Panel } from '../';
<React.Fragment>
    <Grid childWidthSmall="1-2" heightMatchTarget=" > Panel > Card">
        <Panel>
            <Card default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
        </Panel>
        <Panel>
            <Card default body>Lorem Ipsum</Card>
        </Panel>
        <Panel>
            <Card default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
        </Panel>
        <Panel>
            <Card default body>Lorem Ipsum</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

#### Match all

!TODO! Update, once margin and first-column fixed
If your grid wraps into multiple rows, only grid columns within the same row are matched.
To match grid columns across all rows, just add the <span style="color:salmon">heightMatchRow="false"</span> prop.

```html static
<Grid heightMatchRow="false">...</Grid>
```
```jsx
import { Card, Grid, Panel } from '../';
<React.Fragment>
    <Grid childWidthSmall="1-2" heightMatchTarget=" > Panel > Card" heightMatchRow="false">
        <Panel class="uk-first-column">
            <Card default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
        </Panel>
        <Panel>
            <Card default body>Lorem Ipsum</Card>
        </Panel>
        <Panel class="uk-grid-margin uk-first-column">
            <Card default body>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
        </Panel>
        <Panel class="uk-grid-margin">
            <Card default body>Lorem Ipsum</Card>
        </Panel>
    </Grid>
</React.Fragment>
```

------

### Component options

The table below lists the available settings of the <span style="color:salmon">heightMatch</span> prop.
<a href="https://getuikit.com/docs/javascript#component-configuration">Learn more</a>

| PROPS  |  VALUE  | DEFAULT |    DESCRIPTION    |
| ------ | ------- | ------- | ----------------- |
| <div style="color:salmon">heightMatchTarget</div> | CSS selector | <div style="color:salmon">> *</div> | Elements that should match. By default, direct children will match. |
| <div style="color:salmon">heightMatchRow</div> | Boolean | <div style="color:salmon">true</div> | If your targets wrap into multiple rows, only grid columns within the same row are matched. |
