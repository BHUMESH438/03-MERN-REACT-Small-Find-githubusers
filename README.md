## Starter Project

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from 'react-icons/fi';
<FiUsers className='nameOfTheClass'> </FiUsers>;
```

## React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

## Deployment

[Netlify](https://www.netlify.com/)

## Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)

### query quest????

- use of ::before in css
- use of transform:transition(-100) in css
- switch routerv5
- objectname property are same then no need of giving obj:value => objval
- default value to obj while destructuring
- map(),usecontext(),
- json to js obj conversion json.parse(), converter
- backend req/sec limitor
- styled componenet
- react proppassing
- reduce method
- Dynamic obj keys
- || and null
- await and then use any one
- fetch and axios
- async
  [use this gpt link for query](https://chat.openai.com/share/7325b207-d0f9-4954-8171-7bf3744fdeaf)

```js
let languages = repos.reduce((acc, crr) => {
  if (crr['language']) {
    acc[crr['language']] = acc[crr['language']] + 1 || 1;
  }
  return acc;
}, {});
console.log(languages);
```

### Reduce

```js
const chartData = [
  {
    label: 'html',
    value: '290'
  },
  {
    label: 'js',
    value: '260'
  },
  {
    label: 'js',
    value: '180'
  },
  {
    label: 'ts',
    value: '140'
  }
];
const data = chartData.reduce((acc, crr) => {
  acc[crr['label']] = 1; // {html: 1, js: 1, ts: 1}
  acc[crr['label']] = acc[crr['label']]; //{html: undefined, js: undefined, ts: undefined}
  acc[crr['label']] = acc[crr['label']] + 1 || 1; //{html: 1, js: 2, ts: 1}
  return acc;
}, {});
```

Let's break down the code step by step and explain each part in simple terms:

1. **Initialization:**

   ```javascript
   const data = chartData.reduce((acc, crr) => {
     acc[crr['label']] = 1; // Initialize each label count to 1
     // Other code will follow here
     return acc;
   }, {});
   ```

   - The `reduce` function is called on `chartData`, starting with an empty object as the initial accumulator.
   - For each label in `chartData`, it sets the count for that label to `1`.

2. **Accumulator Update (Duplicate Assignment):**

   ```javascript
   acc[crr['label']] = acc[crr['label']];
   ```

   - This line doesn't change anything. It's assigning the current value of the label (which is `undefined` initially) to itself. It's like saying, "Set the value to what it already is."

3. **Accumulator Update and Counting:**
   ```javascript
   acc[crr['label']] = acc[crr['label']] + 1 || 1;
   ```
   - This line updates the count for the label by incrementing its current value by 1. If the current value is `undefined`, it defaults to `1`.
   - For example:
     - In the first iteration, 'html' count becomes `1`.
     - In the second iteration, 'js' count becomes `undefined + 1 || 1`, which results in `1` because `undefined + 1` is `NaN`, and `NaN` is falsy, so it defaults to `1`.
     - In the third iteration, 'js' count becomes `1 + 1 || 1`, which results in `2`.
     - In the fourth iteration, 'ts' count becomes `undefined + 1 || 1`, which results in `1`.

Summary:

- The initial setting of count to `1` for each label is overwritten by the duplicate assignment (`acc[crr['label']] = acc[crr['label']];`), but this line has no practical effect.
- The actual counting of occurrences happens in the last assignment (`acc[crr['label']] = acc[crr['label']] + 1 || 1;`), where each label's count is correctly incremented, and if it was initially `undefined`, it defaults to `1`.

The code doesn't correctly count occurrences because of the duplicate assignment that doesn't change anything, and it's the last assignment that actually counts the occurrences, which explains why 'js' is totaled as `2`.

so========================>
Yes, you're correct. The expression `acc[crr['label']]` is used to access the count or occurrences associated with the specific label (`crr['label']`) in the `acc` object. It's used to keep track of how many times a particular label appears in the `chartData` array.

In the provided code:

```javascript
acc[crr['label']] = acc[crr['label']] + 1 || 1;
```

This line is responsible for incrementing the count (occurrences) for each label. If the label has been encountered before (meaning it already exists in the `acc` object), it increments the count by 1. If the label is encountered for the first time (resulting in `undefined` because it wasn't in `acc` before), it defaults the count to `1` for that label.

So, `acc[crr['label']]` effectively keeps track of how many times each label has been encountered, giving you the occurrences of each label in the `chartData` array.
