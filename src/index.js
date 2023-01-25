import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from './components/Class.js';
import Context from './context'
import TableFunc from './components/TableFunc'

// ReactDOM.render(
//   <React.StrictMode>
//       <Context>
//         <TableFunc />
//       </Context>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Table />,
  document.getElementById('root')
);
