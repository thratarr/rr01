import React, { Component } from 'react';
class Form extends Component {
    render() {
      return (
        <form>
          <h1>Search deck</h1>
          <p>Enter keyword:</p>
          <input
            type="text"
            /*onChange=""*/
          />
        </form>
      );
    }
  }
  export default Form
  //ReactDOM.render(<MyForm />, document.getElementById('root'));