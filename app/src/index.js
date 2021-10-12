import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UsersPageContainer from './Pages/UsersPage/conteiners/UsersPageContainer';
import Routes from './routes/Routes';
import {BrowserRouter} from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'

ReactDOM.render(

    <BrowserRouter>
      <MainLayout>
          <Routes/>
      </MainLayout>
    </BrowserRouter>,

  document.getElementById('root')
);
reportWebVitals();
