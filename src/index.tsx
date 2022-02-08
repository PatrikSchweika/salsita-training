import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './modules/root/components/root';
import {rootReducer} from "./modules/root/root-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import createRouter from 'router5';
import {rootSaga} from "./modules/root/root-saga";
import {router5Middleware} from "redux-router5";
import {routes} from "./modules/router/routes";
import browserPlugin from 'router5-plugin-browser';

const router = createRouter(routes);
router.usePlugin(browserPlugin());

const routerMiddleware = router5Middleware(router);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, routerMiddleware]
});

sagaMiddleware.run(rootSaga);
router.start();

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);