
Basic button:

<Button>Push Me</Button>
Big pink button:

<Button size="large" color="deeppink">Lick Me</Button>
And you can use any Markdown here.

Fenced code blocks with js, jsx or javascript languages are rendered as a interactive playgrounds:

<Button>Push Me</Button>
You can add a custom props to an example wrapper (```js { "props": { "className": "checks" } }):

<Button>I’m transparent!</Button>
Or disable an editor by passing a noeditor modifier (```js noeditor):

<Button>Push Me</Button>
To render an example as highlighted source code add a static modifier: (```js static):

import React from 'react';
Fenced blocks with other languages are rendered as highlighted code:

<h1>Hello world</h1>

You can add a custom props to an example wrapper:


```jsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Button size="large">Push Me</Button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.

/**
 * Component is described here.
 *
 * @example ./extra.examples.md
 */
export default class Button extends React.Component {
  // ...
}