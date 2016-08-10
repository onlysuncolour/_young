// import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        //JSX here!
        return (
          <div className="container">
            <section className="jumbotron">
              <h3 className="jumbotron-heading">Hello World</h3>
            </section>
          </div>
        )
    }
};

// var App = React.createClass({
//     getInitialState: function() {
//         return null;
//     },
//     render: function() {
//       return (
//         <div className="container">
//           <section className="jumbotron">
//             <h3 className="jumbotron-heading">Search Github Users</h3>
//           </section>
//         </div>
//       )
//     }
// });

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
