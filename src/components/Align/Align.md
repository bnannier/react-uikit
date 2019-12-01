https://getuikit.com/docs/align

#### Control the alignment of inline elements depending on the viewport size.

### Usage
To align images or other elements with spacing between the text and the element, add one of these classes.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">alignLeft</span> | Floats the element to the left and creates right and bottom margin. |
| <span style="color:salmon">alignCenter</span> | Floats the element to the right and creates left and bottom margin. |
| <span style="color:salmon">alignRight</span> | Centers the element and creates bottom margin. |

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel>
        <Image alignLeft marginRemoveAdjacent width="225" height="150" src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Panel>
</React.Fragment>
```

### Responsive Align
React-uikit provides a number of responsive alignment props.
Basically, they work just like the usual alignment props, except that they have suffixes that represent the breakpoint from which they come to effect.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">alignLeftSmall</span><br /><span style="color:salmon">alignRightSmall</span> | Only affects device widths of <span style="color:salmon">640px</span> and higher. |
| <span style="color:salmon">alignLeftMedium</span><br /><span style="color:salmon">alignRightMedium</span> | Only affects device widths of <span style="color:salmon">960px</span> and higher. |
| <span style="color:salmon">alignLeftLarge</span><br /><span style="color:salmon">alignRightLarge</span> | Only affects device widths of <span style="color:salmon">1200px</span> and higher. |
| <span style="color:salmon">alignLeftXLarge</span><br /><span style="color:salmon">alignRightXLarge</span> | Only affects device widths of <span style="color:salmon">1600px</span> and higher. |

```jsx
import { Image, Panel } from '../';

<React.Fragment>
    <Panel>
        <Image alignCenter alignRightMedium marginRemoveAdjacent width="225" height="150" src="https://getuikit.com/docs/images/light.jpg" alt="Image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Panel>
</React.Fragment>
```