import { Menu } from "semantic-ui-react";
import { logo } from "../../constants/constant";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menuItemStyle = {
    color: "#f15025",
    fontWeight: "bold",
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Add this line to center align vertically
  };

  return (
    <Menu className="ui massive menu" borderless>
      <Menu.Item>
        <img src={logo} alt="logo" style={{ width: 80, height: 70 }} />
      </Menu.Item>

      <Menu.Item name="DISH DISCOVER" header as={Link} to="/recipes" style={menuItemStyle} />
    </Menu>
  );
};

export default NavBar;
