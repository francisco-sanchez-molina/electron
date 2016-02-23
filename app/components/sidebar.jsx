import React from "react"
import { Pane, NavGroup, NavTitle, NavGroupItem } from "react-photonkit"

class Sidebar extends React.Component {

  render() {
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup activeKey='1' onSelect={this.onSelect}>
          <NavTitle>Sidebar!</NavTitle>
          <NavGroupItem href="#/home" eventKey={1} glyph="home" text="Home" />
          <NavGroupItem href="#/component/pane1" eventKey={2} glyph="download" text="Pane 1" />
          <NavGroupItem href="#/component/pane2" eventKey={3} glyph="download" text="Pane 2" />
        </NavGroup>
      </Pane>
    );
  }

}

export default Sidebar;
