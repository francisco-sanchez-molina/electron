import React from "react";
import {Pane} from "react-photonkit";

import ServiceStore from "../stores/ServiceStore";

class Component extends React.Component {

  constructor(props) {
      super(props);
      this.state = ServiceStore.getState();
      this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
      ServiceStore.listen(this._onChange);
  }

  componentWillUnmount() {
      ServiceStore.unlisten(this._onChange);
  }

  _onChange() {
      this.setState(ServiceStore.getState());
  }

  render() { return (
    <div>Component {this.props.params.id}
        <ul>
        {
        this.state.services.map((todo) => {
          return (
            <li>{todo.name}</li>
          );
        })

        }
        </ul>
    </div>
    )
  }
}

Component.title = 'Component'
Component.path = '/component/*'

export default Component;
