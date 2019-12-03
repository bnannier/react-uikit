https://getuikit.com/docs/padding

#### A collection of utility props to add spacing between elements and their content.

### Usage
To apply this component, add one of the following props to a block element.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">padding</span> |  |
| <span style="color:salmon">paddingSmall</span> |  |
| <span style="color:salmon">paddingLarge</span> |  |

```jsx
import { Panel } from '../';

<React.Fragment>
    <Panel padding backgroundMuted widthSmall="1-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Panel>
</React.Fragment>
```
<br /><br /><hr />

### Remove Padding
In some cases you want to remove padding from an element, rather than adding it.
To do so, apply one of the following props.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">paddingRemove</span> | Removes all padding from an element. |
| <span style="color:salmon">paddingRemoveTop</span> | Removes top padding from an element. |
| <span style="color:salmon">paddingRemoveBottom</span> | Removes bottom padding from an element. |
| <span style="color:salmon">paddingRemoveLeft</span> | Removes left padding from an element. |
| <span style="color:salmon">paddingRemoveRight</span> | Removes right padding from an element. |
| <span style="color:salmon">paddingRemoveVerticle</span> | Removes top and bottom padding from an element. |
| <span style="color:salmon">paddingRemoveHorizontal</span> | Removes left and right padding from an element. |
