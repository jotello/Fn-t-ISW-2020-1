import React from "react";
import { Nav } from "shards-react";

import SidebarURLItem from "./SidebarURLItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      urlItems: Store.getSidebarURLItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      urlItems: Store.getSidebarURLItems()
    });
  }

  render() {
    const { urlItems: tems} = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {tems.map((item, idx) => (
            <SidebarURLItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
