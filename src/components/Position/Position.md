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
import { Card, Grid, Image, Panel } from '../';

<React.Fragment>
    <Panel inline margin>
        <Image src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        <Panel positionTop overlay>Top</Panel>

    </Panel>
</React.Fragment>
```
