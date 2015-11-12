/// <reference path='../typings/react/react.d.ts' />
import React = require('react');
import ReactDOM = require('react-dom');

interface P {
  name?: string;
}

interface S {
  complete?: boolean;
}

class Goal extends React.Component<P, S> {
  state: S = {
    complete: false
  }

  private _toggleCompletion = () => {
    this.setState({complete: !this.state.complete});
  }

  render() {
    var status = 'Status: ' + (this.state.complete ? 'complete' : 'incomplete');
    return (
      <div>
        <div>{ status }</div >
        <button onClick={this._toggleCompletion}>Toggle completion</button>
      </div>
    );
  }
}

ReactDOM.render(<Goal name="Learn React and TypeScript" />, document.getElementById('react'));
