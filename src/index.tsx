import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

//AWS Amplify
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import {ThemeProvider} from "@aws-amplify/ui-react";

import awsconfig from './aws-exports';
import studioTheme from './ui-components/studioTheme';

Amplify.configure(awsconfig);



const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
//Amplify
<ThemeProvider theme={studioTheme}>
    <App />
</ThemeProvider>
//Amplify
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
