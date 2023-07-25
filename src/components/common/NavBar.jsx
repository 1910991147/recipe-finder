import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { logo } from "../../constants/constant";

// this is the navbar of webpage which has logo and title
const NavBar = () => {
  const menuItemStyle = {
    color: "#f15025",
    fontWeight: "bold",
    fontSize: "30px",
  };

  return (
    <Menu className="ui massive menu" borderless>
      <Menu.Item>
        <img src={logo} alt="logo" style={{ width: 80, height: 70 }} />
      </Menu.Item>

      <Menu.Item
        name="DISH DISCOVER"
        header
        as={Link}
        to="/"
        style={menuItemStyle}
      />
    </Menu>
  );
};

export default NavBar;
