import React, { useState } from "react";
import Dropdown from "../Dropdown";
import { Container, Btn, LinkTo } from "./styles";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return(
    <Container>
      {items.submenu ? (
        <>
        <Btn 
          onClick={() => setDropdown((prev) => !prev)}
          aria-expanded={dropdown ? "true" : "false"}
        >
          {items.title}{' '}
        </Btn>
        <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <LinkTo to={items.path}>{items.title}</LinkTo>
      )
    }
    </Container>

  )
};

export default MenuItems;