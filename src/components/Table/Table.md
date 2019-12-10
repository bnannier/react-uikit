
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
    <Panel>
        <Table data={data} />
    </Panel>
</React.Fragment>
```
