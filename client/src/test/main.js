import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from '../common/publicComponents/Nav';
import registerServiceWorker from '../common/registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('app'));
registerServiceWorker();
