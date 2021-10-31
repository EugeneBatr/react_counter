import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import Routes from './routes/Routes';
import MainLayout from './components/MainLayout/MainLayout'
import reportWebVitals from './reportWebVitals';
import { configureStore } from './store/configureStore';

const store = configureStore();

ReactDOM.render(

    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <Routes/>
        </MainLayout>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
