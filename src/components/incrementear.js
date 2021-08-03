import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 0 };
  }
  cambiarNumero() {
    this.setState({ text: this.state.text + 1 });
  }
  render() {
    return (
      <div>
        <h1>Hola Coders!</h1>
        <button onClick={this.cambiarNumero.bind(this)}>Increase</button>
        <p> {this.state.text}</p>
      </div>
    );
  }
}

export default App;
