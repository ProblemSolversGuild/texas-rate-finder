import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom";
// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import NavBar from './NavBar'
import Landing from './Landing';
import FinderMain from './FinderMain';
import UsageMain from './UsageMain';
import SignUp from './components/SignUp';
import reportWebVitals from './reportWebVitals';
import LogRocket from 'logrocket';

// ReactDOM.render(
//   <React.StrictMode>
//     <Finder />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const uri = process.env.REACT_APP_URI;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
if (uri!='https://kbird-desktop:7576') {
  LogRocket.init('dcw8xd/texas-rate-finder');
}
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <NavBar />
        <Routes>
          <Route path="/app" element={<FinderMain />} />
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/usage" element={<UsageMain />} />
        </Routes>
      </Auth0Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
