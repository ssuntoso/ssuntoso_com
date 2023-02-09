import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const measurement_id = process.env.REACT_APP_MEASUREMENT_ID
console.log(measurement_id)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurement_id}}`}></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${measurement_id}", {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
    <App />
  </React.StrictMode>
);
