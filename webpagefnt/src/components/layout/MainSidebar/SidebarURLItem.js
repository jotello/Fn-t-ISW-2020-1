import React from "react";
import PropTypes from "prop-types";
import { NavItem} from "shards-react";


const SidebarURLItem = ({ item }) => (
  <NavItem>
    <a href={item.to} className="NavLink">
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {item.title && <span>{item.title}</span>}
      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </a>
  </NavItem>
);

SidebarURLItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};



export default SidebarURLItem;