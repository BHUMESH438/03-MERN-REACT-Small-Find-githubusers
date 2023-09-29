import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GitHubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-mb40oudze6mddx0h.us.auth0.com'
    clientId='QInTvvdUPIhIaj0LfUSIJjNGLEwfUEaG'
    cacheLocation='localstorage' //save the social login in LS
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <GitHubProvider>
      <App />
    </GitHubProvider>
  </Auth0Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
