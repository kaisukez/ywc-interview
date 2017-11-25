import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render((
//   <div>
//     <Helmet>
//       <meta property="og:url" content="https://kaisukez.github.io/ywc-interview" />
//       <meta property="og:type" content="website" />
//       <meta property="og:title" content="ประกาศผล YWC15" />
//       <meta property="og:description" content="ยินดีด้วย คุณติดรอบสัมภาษณ์" />
//       <meta property="og:image" content="http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg" />
//     </Helmet>
//   </div>
// ), document.getElementById('meta'));
registerServiceWorker();
