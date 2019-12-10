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
import { Panel, Table } from '../';

let data = {
    header: ["Heading 1","Heading 2","Heading 3","Heading 4","Heading 5","Heading 6","Heading 7","Heading 8"],
    footer: ["Footer 1","Footer 2","Footer 3","Footer 4","Footer 5","Footer 6","Footer 7","Footer 8"],
    body: [
        ["Data 1","Data 2","Data 3","Data 4","Data 5","Data 6","Data 7","Data 8"],
        ["Data 1","Data 2","Data 3","Data 4","Data 5","Data 6","Data 7","Data 8"],
        ["Data 1","Data 2","Data 3","Data 4","Data 5","Data 6","Data 7","Data 8"]
    ]
};


<React.Fragment>
    <Panel overflowAuto heightSmall>
        <Table data={data} />
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
            <CodeBlock resizeVertical language="xml">
{`
<!-- Resize vertically -->
<Grid>
    <Panel width="1-2">...</Panel>
    <Panel width="1-2">...</Panel>
</Grid>

<Grid childWidth="1-2">
    <Panel></Panel>
    <Panel></Panel>
</Grid>
`}
            </CodeBlock>
        </Panel>
        <Panel>
            <CodeBlock resize language="xml">
{`
<!-- Resize vertically -->
<Grid>
    <Panel width="1-2">...</Panel>
    <Panel width="1-2">...</Panel>
</Grid>

<Grid childWidth="1-2">
    <Panel></Panel>
    <Panel></Panel>
</Grid>
`}
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
        <Image src="https://getuikit.com/docs/images/photo.jpg" width={300} height={0} alt="" />
        <Panel positionMedium positionCover overlay overlayDefault flex flexCenter flexMiddle>Overlay</Panel>
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
    <Image borderRounded src="https://getuikit.com/docs/images/avatar.jpg" width={200} height={200} alt="Border rounded" />
    <Image borderCircle src="https://getuikit.com/docs/images/avatar.jpg" width={200} height={200} alt="Border circle" />
    <Image borderPill src="https://getuikit.com/docs/images/avatar.jpg" width={200} height={200} alt="Border pill" />
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

#### Box Shadow Bottom
To apply a box shadow at the bottom of an element so that appears to be hovering, add the boxShadowBottom prop.
This can also be combined with one of the other boxShadow* modifiers.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">boxShadowBottom</span> | To apply a box shadow at the bottom of an element so that appears to be hovering. |

```jsx
import { Panel } from '../';

<React.Fragment>
    <Panel boxShadowBottom boxShadowSmall widthSmall="1-2" textCenter>
        <Panel backgroundDefault paddingLarge>Box Shadow Bottom</Panel>
    </Panel>
</React.Fragment>
```

#### Box Shadow Hover
To apply a box shadow on hover, add one of the following props.
This can also be used to modify the shadow size on hover. To do so, just combine them with one of the props above.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">boxShadowHoverSmall</span> | Add this prop to apply a small box shadow on hover. |
| <span style="color:salmon">boxShadowHoverMedium</span> | Add this prop to apply a medium box shadow on hover. |
| <span style="color:salmon">boxShadowHoverLarge</span> | Add this prop to apply a large box shadow on hover. |
| <span style="color:salmon">boxShadowHoverXLarge</span> | Add this prop to apply a extra large box shadow on hover. |

```jsx
import { Grid, Panel } from '../';

<React.Fragment>
    <Grid childWidthSmall="1-2" textCenter>
        <Panel>
            <Panel boxShadowHoverSmall padding>Hover Small</Panel>
        </Panel>
        <Panel>
            <Panel boxShadowHoverXLarge padding>Hover X-Large</Panel>
        </Panel>
        <Panel>
            <Panel boxShadowSmall boxShadowHoverLarge padding>Small Shadow + Hover Large</Panel>
        </Panel>
        <Panel>
            <Panel boxShadowXLarge boxShadowHoverMedium padding>X-Large Shadow + Hover Medium</Panel>
        </Panel>
    </Grid>
</React.Fragment>
```

<br /><br /><hr />

### Drop Cap
https://getuikit.com/docs/utility#drop-cap

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">dropcap</span> | With the dropcap prop you can achieve a drop cap in a paragraph |

```jsx
import { Paragraph } from '../';
<React.Fragment>
    <Paragraph dropcap>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
</React.Fragment>
```

<br /><br /><hr />

### Logo
https://getuikit.com/docs/utility#logo

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">logo</span> | With the logo prop you can easily define your logo, for example within your navbar. |

```jsx
import { Link, Panel } from '../';

<React.Fragment>
    <Link logo href="#">Logo</Link>
</React.Fragment>
```

```jsx
import { Link, Panel } from '../';

<React.Fragment>
    <Panel panel padding backgroundSecondary light>
        <Link logo href="#">Logo</Link>
    </Panel>
</React.Fragment>
```

#### Logo Image
You can also use an <img> element, for example an SVG, as a logo.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">logoInverse</span> | You can even automatically display alternative logos for light and dark backgrounds by using the Inverse component. |

```jsx
import { Grid, Panel, Link, Image } from '../';

<React.Fragment>
    <Grid childWidthExpandSmall="1-2">
        <Panel>
            <Panel panel padding backgroundMuted>
                <Link logo href="#">
                    <Image src="https://getuikit.com/docs/images/logo-placeholder.svg" alt="" />
                    <Image logoInverse src="https://getuikit.com/docs/images/logo-placeholder-light.svg" alt="" />
                </Link>
            </Panel>
        </Panel>
        <Panel>
            <Panel panel padding backgroundSecondary light>
                <Link logo href="#">
                    <Image src="https://getuikit.com/docs/images/logo-placeholder.svg" alt="" />
                    <Image logoInverse src="https://getuikit.com/docs/images/logo-placeholder-light.svg" alt="" />
                </Link>
            </Panel>
        </Panel>
    </Grid>
</React.Fragment>
```

<br /><br /><hr />

### Blend Modes
https://getuikit.com/docs/utility#blend-modes

Add one of the following props to apply different blend modes to your backgrounds, for example when placing them on images.
You can combine these with the Overlay component.
For a better understanding of how background blend modes work, take a look at this CSS Tricks article.


| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">blendMultiply</span> | This class sets the blend mode to multiply. |
| <span style="color:salmon">blendScreen</span> | This class sets the blend mode to screen. |
| <span style="color:salmon">blendOverlay</span> | This class sets the blend mode to overlay. |
| <span style="color:salmon">blendDarken</span> | This class sets the blend mode to darken. |
| <span style="color:salmon">blendLighten</span> | This class sets the blend mode to lighten. |
| <span style="color:salmon">blendColorDodge</span> | This class sets the blend mode to color dodge. |
| <span style="color:salmon">blendColorBurn</span> | This class sets the blend mode to color burn. |
| <span style="color:salmon">blendHardLight</span> | This class sets the blend mode to hard light. |
| <span style="color:salmon">blendSoftLight</span> | This class sets the blend mode to soft light. |
| <span style="color:salmon">blendDifference</span> | This class sets the blend mode to difference. |
| <span style="color:salmon">blendExclusion</span> | This class sets the blend mode to exclusion. |
| <span style="color:salmon">blendHue</span> | This class sets the blend mode to hue. |
| <span style="color:salmon">blendSaturation</span> | This class sets the blend mode to saturation. |
| <span style="color:salmon">blendColor</span> | This class sets the blend mode to color. |
| <span style="color:salmon">blendLuminosity</span> | This class sets the blend mode to luminosity. |

```jsx
import { Grid, Image, Panel, Paragraph } from '../';

<React.Fragment>
    <Grid childWidth="1-2" childWidthSmall="1-3" small light>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendMultiply src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Multiply" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Multiply</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendScreen src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Screen" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Screen</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendOverlay src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Overlay" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Overlay</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendDarken src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Darken" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Darken</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendLighten src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Lighten" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Lighten</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendColorDodge src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Color Dodge" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Color Dodge</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendColorBurn src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Color Burn" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Color Burn</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendHardLight src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Hard Light" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Hard Light</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendSoftLight src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Soft Light" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Soft Light</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendDifference src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Difference" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Difference</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendExclusion src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Exclusion" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Exclusion</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendHue src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Hue" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Hue</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendSaturation src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Saturation" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Saturation</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendColor src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Color" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Color</Paragraph>
                </Panel>
            </Panel>
        </Panel>
        <Panel>
            <Panel inline backgroundPrimary>
                <Image blendLuminosity src="https://getuikit.com/docs/images/dark.jpg" alt="Blend Luminosity" />
                <Panel positionCenter>
                    <Paragraph marginRemove>Luminosity</Paragraph>
                </Panel>
            </Panel>
        </Panel>
    </Grid>
</React.Fragment>
```

<br /><br /><hr />

### Transform Center
https://getuikit.com/docs/utility#transform-center

You can apply different box shadows to elements. Just add one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">xxxxxxxx</span> |  |

```jsx
import { Image } from '../';

<React.Fragment>

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

<br /><br /><hr />

### Disabled
https://getuikit.com/docs/utility#disabled

You can apply different box shadows to elements. Just add one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">xxxxxxxx</span> |  |

```jsx
import { Image } from '../';

<React.Fragment>

</React.Fragment>
```

<br /><br /><hr />

### Drag
https://getuikit.com/docs/utility#drag

You can apply different box shadows to elements. Just add one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">xxxxxxxx</span> |  |

```jsx
import { Image } from '../';

<React.Fragment>

</React.Fragment>
```
