import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr'
import AppContainer from "./modules/App/container/AppContainer";
import {store} from "./modules/Shared/store";
import {TostrConfigurations} from "./modules/Shared/constants/TostrConfigurations";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer/>
            </BrowserRouter>
            <ReduxToastr {...TostrConfigurations}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);