import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <App />
  {/*<Provider store={store}>
    
    </Provider>*/}
</React.StrictMode>,
  document.getElementById('root')
);
