import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './__fixtures__/app';

ReactDOM.render(
    <App text="5" />,
    document.querySelector("#root")
)