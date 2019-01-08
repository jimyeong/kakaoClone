import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './assets/scss/style.scss';


const Root = (
    <BrowserRouter basename="/kakao-study1/">
        <App/>
    </BrowserRouter>
)
ReactDOM.render(Root,document.getElementById('root'));