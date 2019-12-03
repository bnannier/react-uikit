https://getuikit.com/docs/height

#### Utilize the power of flexbox to create a wide range of layouts.
Define the height of elements depending on the viewport or match the heights of different elements.
UIkit's Height component offers three options to set heights: using simple fixed height utility classes, depending on the viewport or by matching the heights of different elements.

### Usage
React UIkit provides a number of useful classes to alter an element's height.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <div style="color:salmon">height1_1</div> | This port applies a height of 100%. This only works if the parent element has a set height. |
| <div style="color:salmon">heightSmall</div><div style="color:salmon">heightMaxSmall</div> | These prop apply a height or max-height of <span style="color:salmon">150px</span>. |
| <div style="color:salmon">heightMedium</div><div style="color:salmon">heightMaxMedium</div> | These prop apply a height or max-height of <span style="color:salmon">300px</span>. |
| <div style="color:salmon">heightLarge</div><div style="color:salmon">heightMaxLarge</div> | These prop apply a height or max-height of <span style="color:salmon">450px</span>. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-3" >
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
Add the <span style="color:salmon">heightViewport</span> property to create a container that fills the height of the entire viewport. You can change the height behavior by adding the offset-top, offset-bottom or expand option to the attribute. Learn more

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <div style="color:salmon">height1_1</div> | This port applies a height of 100%. This only works if the parent element has a set height. |
| <div style="color:salmon">heightSmall</div><div style="color:salmon">heightMaxSmall</div> | These prop apply a height or max-height of <span style="color:salmon">150px</span>. |
| <div style="color:salmon">heightMedium</div><div style="color:salmon">heightMaxMedium</div> | These prop apply a height or max-height of <span style="color:salmon">300px</span>. |
| <div style="color:salmon">heightLarge</div><div style="color:salmon">heightMaxLarge</div> | These prop apply a height or max-height of <span style="color:salmon">450px</span>. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-3" >
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
