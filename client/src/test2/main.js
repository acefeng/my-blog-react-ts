import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from '../common/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
