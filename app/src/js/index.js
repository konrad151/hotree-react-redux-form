import React from 'react';
import ReactDom from 'react-dom';

import { store } from "./store";
import { Provider } from "react-redux";
import { AppContainer } from './app';

ReactDom.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);