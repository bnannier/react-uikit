### Clearing and Floating
https://getuikit.com/docs/utility#overflow

Floating elements are taken from the document flow and aligned to the left or right side of their container.
It is important to clear floats or in the worst case, you might end up with a scrambled site.
The following classes will help you to set up basic layouts.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">floatLeft</span> | Add this prop to float the element to the left. |
| <span style="color:salmon">floatRight</span> | Add this prop to float the element to the right. |
| <span style="color:salmon">clearFix</span> | Add this class to a parent container to clear floats. Alternatively, you can create a new block format context, e.g. by adding the <span style="color:salmon">overflowHidden</span> prop. |

```jsx
import { Card, Panel } from '../';

<React.Fragment>
    <Panel clearFix>
        <Panel floatRight>
            <Card default body>Right</Card>
        </Panel>
        <Panel floatLeft>
            <Card default body>Left</Card>
        </Panel>
    </Panel>
</React.Fragment>
```

<br /><br /><hr />

### Overflow
https://getuikit.com/docs/utility#overflow

These utilities provide different classes to modify an element's overflow behavior.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">overflowHidden</span> | Add this prop to clip content that exceeds the dimensions of its container. |
| <span style="color:salmon">overflowAuto</span> | Add this prop to create a container that provides a horizontal or vertical scrollbar whenever the elements content it are wider or higher than the container itself. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
// TODO: table

</React.Fragment>
```

Add the overflowAuto attribute to expand an element's height to make it fill the remaining height of a parent container.
It provides a vertical scrollbar if its content is higher than the expanded height.

```jsx
import { Grid, Panel } from '../';

<React.Fragment>
    <Panel heightMedium>
        <p>Some content before the overflow auto container.</p>
        <Panel >
            // TODO: js-wrapper
        </Panel>
        <p>Some content after the overflow auto container.</p>
    </Panel>
</React.Fragment>
```

<br /><br /><hr />

### Resize
https://getuikit.com/docs/utility#resize

These utilities provide different props for resizing elements.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">resize</span> | Add this prop to enable horizontal and vertical resizing. |
| <span style="color:salmon">resizeVertical</span> | Add this prop to enable only vertical resizing. |

```jsx
import { CodeBlock, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-2">
        <Panel>
// TODO: Codeblock
            <CodeBlock resizeVertical>
                &lt;!-- Resize vertically --&gt;
                &lt;div uk-grid&gt;
                    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
                    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
                &lt;/div&gt;
                
                &lt;div class="uk-child-width-1-2" uk-grid&gt;
                    &lt;div&gt;&lt;/div&gt;
                    &lt;div&gt;&lt;/div&gt;
                &lt;/div&gt;
            </CodeBlock>
        </Panel>
        <Panel>
            <CodeBlock resize>
                &lt;!-- Resize vertically --&gt;
                &lt;div uk-grid&gt;
                    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
                    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
                &lt;/div&gt;
                
                &lt;div class="uk-child-width-1-2" uk-grid&gt;
                    &lt;div&gt;&lt;/div&gt;
                    &lt;div&gt;&lt;/div&gt;
                &lt;/div&gt;
            </CodeBlock>
        </Panel>
    </Grid>
</React.Fragment>
```

<br /><br /><hr />

### Display
https://getuikit.com/docs/utility#display

Add one of these props to change the display properties of an element.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">displayBlock</span> | Forces the element to behave like a block element. |
| <span style="color:salmon">displayInline</span> | Forces the element to behave like an inline element. |
| <span style="color:salmon">displayInlineBlock</span> | Forces the element to behave like an inline-block element. |

<br /><br /><hr />

### Inline
https://getuikit.com/docs/utility#inline

These props are often used to create a position context on containers with an image as a child.
The container keeps the same size as the image as well as the responsive behavior.
That way content that is placed on top of the image with the <a href="#/Position">Position component</a> will not flow out of the image dimensions.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">inline</span> | Add this prop to apply inline-block behavior to an element, add a max-width of 100% and to create a position context. |
| <span style="color:salmon">inlineClip</span> | Same as <span style="color:salmon">inline</span>, it but also clips overflowing child elements. |

```jsx
import { Card, Grid, Image, Panel } from '../';

<React.Fragment>
    <Panel inline>
        <Image src="https://getuikit.com/docs/images/photo.jpg" width="300" alt="" />
        // TODO: Overlay
    </Panel>
</React.Fragment>
```

<br /><br /><hr />

### Responsive Objects
https://getuikit.com/docs/utility#responsive-objects

In react-uikit image, canvas, audio and video elements adapt to the width of their parent container by default.
To apply responsive behavior to iframes, add the responsive attribute.
For other elements or to apply a different behavior, just add one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">responsiveWidth</span> | Add this prop to apply the same responsive behavior to any other element. It adjusts the object's width according to its parent's width, keeping the original aspect ratio. |
| <span style="color:salmon">responsiveHeight</span> | Add this prop to adjust the object's height (instead of its width) according to its parent's height, keeping the original aspect ratio. |
| <span style="color:salmon">preserveWidth</span> | Add this prop to avoid the default responsive behavior and preserve the original image dimensions. You can also add the prop to a parent element and it will be applied to all relevant elements content it. If you are embedding Google Maps into your site, you may need this to fix the map's images. |

<br /><br /><hr />

### Border Radius
https://getuikit.com/docs/utility#border-radius

To modify the border radius of an element, like an image, add one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">borderRounded</span> | Add this prop to apply rounded corners. |
| <span style="color:salmon">borderCircle</span> | Add this prop to apply a circled shape. |
| <span style="color:salmon">borderPill</span> | Add this prop to apply a pill shape. |

```jsx
import { Image } from '../';

<React.Fragment>
    <Image borderRounded src="https://getuikit.com/docs/images/avatar.jpg" width="200" height="200" alt="Border rounded" />
    <Image borderCircle src="https://getuikit.com/docs/images/avatar.jpg" width="200" height="200" alt="Border circle" />
    <Image borderPill src="https://getuikit.com/docs/images/avatar.jpg" width="200" height="200" alt="Border pill" />
</React.Fragment>
```

<br /><br /><hr />

### Box Shadow
https://getuikit.com/docs/utility#box-shadow

You can apply different box shadows to elements. Just add one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">boxShadowSmall</span> | Add this class to apply a small box shadow. |
| <span style="color:salmon">boxShadowMedium</span> | Add this class to apply a medium box shadow. |
| <span style="color:salmon">boxShadowLarge</span> | Add this class to apply a large box shadow. |
| <span style="color:salmon">boxShadowXLarge</span> | Add this class to apply a very large box shadow. |

```jsx
import { Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-2" textCenter>
        <Panel>
            <Panel boxShadowSmall padding>Small</Panel>
        </Panel>
        <Panel>
            <Panel boxShadowMedium padding>Medium</Panel>
        </Panel>
        <Panel>
            <Panel boxShadowLarge padding>Large</Panel>
        </Panel>
        <Panel>
            <Panel boxShadowXLarge padding>XLarge</Panel>
        </Panel>
    </Grid>
</React.Fragment>
```

<br /><br /><hr />
























### Transform Origin
https://getuikit.com/docs/utility#transform-origin

To modify the origin of an animation, like scaling, add one of the transformOrigin* props.
This can be combined with the <a href="#/Animation">Animation component</a>.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">transformOriginTopLeft</span> | The transition originates from the top left. |
| <span style="color:salmon">transformOriginTopCenter</span> | The transition originates from the top. |
| <span style="color:salmon">transformOriginTopRight</span> | The transition originates from the top right. |
| <span style="color:salmon">transformOriginCenterLeft</span> | The transition originates from the left. |
| <span style="color:salmon">transformOriginCenterRight</span> | The transition originates from the right. |
| <span style="color:salmon">transformOriginBottomLeft</span> | The transition originates from the bottom left. |
| <span style="color:salmon">transformOriginBottomCenter</span> | The transition originates from the bottom. |
| <span style="color:salmon">transformOriginBottomRight</span> | The transition originates from the bottom right. |

```jsx
import { Card, Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthMedium="1-3">
        <Panel animationToggle>
            <Card default body animationScaleUp transformOriginBottomRight>Bottom Right</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationScaleUp transformOriginTopCenter>Top Center</Card>
        </Panel>
        <Panel animationToggle>
            <Card default body animationScaleUp transformOriginBottomCenter>Bottom Center</Card>
        </Panel>
    </Grid>
</React.Fragment>
```
