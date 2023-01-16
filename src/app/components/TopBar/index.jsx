import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoGambetaBlanco from './assets/LogoGambetaBlanco.png'
import {TopNav, ItemsSection, TopNavContent, Logo, MenuSection, MobileDrop } from './styles'
import MenuItems from '../MenuItems';
import { ReactComponent as HamburgerMenu } from './assets/bars-solid.svg'
import { ReactComponent as ExitMenu } from './assets/ep_close.svg'
import { MOBILE_575 } from '../../../commons/constants/sizes';
import { GetTournaments } from '../../../commons/services/tournament.services'



const TopBar = () => {
  const [open, setOpen] = useState(false);
  const [tournaments, setTournaments] = useState([]);

  const fetchTournaments = async () => {
    const fetchedTournaments = await GetTournaments();
    setTournaments(fetchedTournaments);
  };

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    fetchTournaments();
    window.addEventListener('resize', setDimension);
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  
  const desktop = screenSize.dynamicWidth > MOBILE_575;
  const mobile = screenSize.dynamicWidth < MOBILE_575;

  const menu = [
    {
      title: 'Quienes Somos',
      path: '/AboutUs',
    }, 
    {
      title: 'Torneos',
      path: '/torneo/0',
      submenu: tournaments,
    }     
  ];
  
  return (
    <>
    <TopNav>
      <TopNavContent>
        <Link to='/'>
          <Logo src={LogoGambetaBlanco}/>
        </Link>
        {desktop &&
          <ItemsSection>
            {menu.map((item, index) => { 
              return <MenuItems items={item} key={index} />;
            })};
          </ItemsSection> 
        }
        {mobile &&
          <MenuSection onClick={() => setOpen((prev) => !prev)}>
            {open ? <ExitMenu/> : <HamburgerMenu /> }           
          </MenuSection>
        }  
        {open &&
          <MobileDrop>
             {menu.map((item, index) => { 
               return <MenuItems items={item} key={index} />;
             })};
          </MobileDrop> }
      </TopNavContent>
    </TopNav>
    </>
  );
};


export default TopBar;