### Link
https://getuikit.com/docs/link

#### Define different styles to integrate links into specific content.

### Muted Modifier
The Base component determines the default link color.
If you want the link to a apply a muted style instead, just add the muted prop to the anchor element.
You can also add the prop to a parent element and it will be applied to all <Link> components inside it.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">href</span> | URL to be passed in |

```jsx
import { Link, Paragraph } from '../';
<React.Fragment>
    <Link muted href="#">Link</Link>
    <Paragraph>Lorem ipsum <Link muted href="#">dolor sit</Link> amet, consectetur adipiscing elit, sed do <Link muted href="#">eiusmod</Link> tempor incididunt ut <Link muted href="#">labore et</Link> dolore magna aliqua.</Paragraph>
</React.Fragment>
```

<br /><br /> <hr />

### Text Modifier
To make a link appear like body text and apply a hover effect, add the text prop to the anchor element.
You can also add the prop to a parent element and it will be applied to all <Link> components inside it.
This is useful for link lists in the page footer.

| PROPS  | DESCRIPTION |
| ----- | ----------- |
| <span style="color:salmon">href</span> | URL to be passed in |

```jsx
import { Link, Paragraph } from '../';
<React.Fragment>
    <Link muted href="#">Link</Link>
    <Paragraph>Lorem ipsum <Link muted href="#">dolor sit</Link> amet, consectetur adipiscing elit, sed do <Link muted href="#">eiusmod</Link> tempor incididunt ut <Link muted href="#">labore et</Link> dolore magna aliqua.</Paragraph>
</React.Fragment>
```
