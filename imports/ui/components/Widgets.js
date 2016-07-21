import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { $ } from 'meteor/jquery';

class Widgets extends Component {
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.tooltip)).tooltip();
  }

  render() {
    return (
      <button ref="tooltip" data-placement="bottom" title="This is a tooltip!">
        Click Me!
      </button>
    );
  }
}

export { Widgets };
