var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path='../typings/react/react.d.ts' />
var React = require('react');
var ReactDOM = require('react-dom');
var Goal = (function (_super) {
    __extends(Goal, _super);
    function Goal() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            complete: false
        };
        this._toggleCompletion = function () {
            _this.setState({ complete: !_this.state.complete });
        };
    }
    Goal.prototype.render = function () {
        var status = 'Status: ' + (this.state.complete ? 'complete' : 'incomplete');
        return (React.createElement("div", null, React.createElement("div", null, status), React.createElement("button", {"onClick": this._toggleCompletion}, "Toggle completion")));
    };
    return Goal;
})(React.Component);
ReactDOM.render(React.createElement(Goal, {"name": "Learn React and TypeScript"}), document.getElementById('react'));
