### Inline
https://getuikit.com/docs/position

#### A collection of utility classes to position content.
To apply this component, add one of the position* props to a block element.
When using this component to place content on top of an image, add the inline props from the Utility component to a container element around the image and the element to create a position context.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">positionTop</span> | Positions the element at the top. |
| <span style="color:salmon">positionBottom</span> | Positions the element at the bottom. |
| <span style="color:salmon">positionLeft</span> | Positions the element at the left. |
| <span style="color:salmon">positionRight</span> | Positions the element at the right. |

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel inline margin>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel positionTop overlay overlayDefault textCenter>Top</Panel>
        <Panel positionBottom overlay overlayDefault textCenter>Top</Panel>
        <Panel positionLeft overlay overlayDefault flex flexMiddle>Top</Panel>
        <Panel positionRight overlay overlayDefault flex flexMiddle>Top</Panel>
    </Panel>
</React.Fragment>
```

### X and Y directions
You can also apply more specific positions that won't spread over one side of the parent container by adding one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">positionTopLeft</span> | Positions the element at the top left. |
| <span style="color:salmon">positionTopCenter</span> | Positions the element at the top center. |
| <span style="color:salmon">positionTopRight</span> | Positions the element at the top right. |
| <span style="color:salmon">positionCenterLeft</span> | Positions the element vertically centered on the left. |
| <span style="color:salmon">positionCenter</span> | Positions the element vertically centered in the middle. |
| <span style="color:salmon">positionCenterRight</span> | Positions the element vertically centered on the right. |
| <span style="color:salmon">positionBottomLeft</span> | Positions the element at the bottom left. |
| <span style="color:salmon">positionBottomCenter</span> | Positions the element at the bottom center. |
| <span style="color:salmon">positionBottomRight</span> | Positions the element at the bottom right. |

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel inline>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />

        <Panel positionTopLeft overlay overlayDefault>Top Left</Panel>
        <Panel positionTopCenter overlay overlayDefault>Top Center</Panel>
        <Panel positionTopRight overlay overlayDefault>Top Right</Panel>
        <Panel positionCenterLeft overlay overlayDefault>Center Left</Panel>
        <Panel positionCenter overlay overlayDefault>Center</Panel>
        <Panel positionCenterRight overlay overlayDefault>Center Right</Panel>
        <Panel positionBottomLeft overlay overlayDefault>Bottom Left</Panel>
        <Panel positionBottomCenter overlay overlayDefault>Bottom Center</Panel>
        <Panel positionBottomRight overlay overlayDefault>Bottom Right</Panel>
    </Panel>
</React.Fragment>
```

### Cover
If you want a position element to cover its container, just add the positionCover prop.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">positionCover</span> | If you want a position element to cover its container. |

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel inline>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel positionCover overlay overlayDefault flex flexCenter flexMiddle>Cover</Panel>
    </Panel>
</React.Fragment>
```

### Outside
There are two props to center elements outside on the left and right of the parent container.
This is useful to position the Slidenav component outside of an Slideshow or Slider component.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">positionCenterLeftOut</span> | Positions the element vertically centered outside on the left. |
| <span style="color:salmon">positionCenterRightOut</span> | Positions the element vertically centered outside on the right. |

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel inline>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel positionCenterLeftOut overlay overlayPrimary visibleSmall>Out</Panel>
        <Panel positionCenterRightOut overlay overlayPrimary visibleSmall>Out</Panel>
    </Panel>
</React.Fragment>
```

### Size Modifier
To apply a small margin to positioned elements, add the positionSmall prop.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">positionSmall</span> | To apply a small margin to positioned elements, add the positionSmall prop. |

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel inline margin>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel positionSmall positionTopLeft overlay overlayDefault>Top Left</Panel>
        <Panel positionSmall positionTopCenter overlay overlayDefault>Top Center</Panel>
        <Panel positionSmall positionTopRight overlay overlayDefault>Top Right</Panel>
        <Panel positionSmall positionCenterLeft overlay overlayDefault>Center Left</Panel>
        <Panel positionSmall positionCenter overlay overlayDefault>Center</Panel>
        <Panel positionSmall positionCenterRight overlay overlayDefault>Center Right</Panel>
        <Panel positionSmall positionBottomLeft overlay overlayDefault>Bottom Left</Panel>
        <Panel positionSmall positionBottomCenter overlay overlayDefault>Bottom Center</Panel>
        <Panel positionSmall positionBottomRight overlay overlayDefault>Bottom Right</Panel>
    </Panel>
</React.Fragment>
```

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel inline margin>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel positionSmall positionTop overlay overlayDefault textCenter>Top</Panel>
        <Panel positionSmall positionBottom overlay overlayDefault textCenter>Bottom</Panel>
        <Panel positionSmall positionLeft overlay overlayDefault flex flexMiddle>Left</Panel>
        <Panel positionSmall positionRight overlay overlayDefault flex flexMiddle>Right</Panel>
    </Panel>
</React.Fragment>
```

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel inline margin>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel positionSmall positionCover overlay overlayDefault flex flexCenter flexMiddle>Cover</Panel>
    </Panel>
</React.Fragment>
```

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel inline margin>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel positionSmall positionCenterLeftOut overlay overlayPrimary visibleSmall>Out</Panel>
        <Panel positionSmall positionCenterRightOut overlay overlayPrimary visibleSmall>Out</Panel>
    </Panel>
</React.Fragment>
```

### Utility Classes
This component features a number of general position utility props:

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">positionRelative</span> | Add this prop to apply relative positioning. |
| <span style="color:salmon">positionAbsolute</span> | Add this prop to apply absolute positioning. |
| <span style="color:salmon">positionFixed</span> | Add this prop to apply fixed positioning. |
| <span style="color:salmon">positionZIndex</span> | Add this prop to apply a z-index of 1. |
