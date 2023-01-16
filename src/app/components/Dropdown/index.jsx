
import React from 'react';
import { Container, Item, LinkTo } from './styles';

const Dropdown = ({ submenus, dropdown }) => {
  
  return (
    <>
      {dropdown &&
        <Container>
        {submenus.map((item, index) => {
          return (
            <Item key={index}>
              <LinkTo 
                href={`/Torneo/${item._id}`}
                target="_blank"
                >
                { item.nombre.substring(0,20)  }
              </LinkTo>
            </Item>
          );
        })}
      </Container>
      }
    </>
  );
}

export default Dropdown;