/// <reference path='../typings/react/react.d.ts' />
import React = require('react');

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

React.render(<Goal name="Learn React and TypeScript" />, document.getElementById('react'));
