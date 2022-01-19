import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import AppContainer from "./modules/App/container/AppContainer";
import {store} from "./modules/Shared/store";
import {AuthenticateProvider} from "./modules/Shared/utils/AuthenticateContext";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AuthenticateProvider>
                    <AppContainer/>
                </AuthenticateProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);