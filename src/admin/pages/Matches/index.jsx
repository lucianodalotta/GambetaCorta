import React, { useState, useEffect } from 'react'
import {
  Link,
  useParams
} from "react-router-dom";

import {ViewContainer, Table,ArrowImg, ActionButton, ActionMessage} from '../../../commons/styles/styles'

import LeftArrow from '../../../commons/assets/leftArrow.png'

import {OptionsSection, Button} from './styles'

const HomeView = ({id, matches,actionMessage, onClickNewMatch, onClickEdit, onClickDelete}) => {
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  console.log(isMessageVisible,"isMessageVisible")

  useEffect(() => {
    setIsMessageVisible(true)
    setTimeout(function () {
      setIsMessageVisible(false);
    }, 5000);
  }, [matches]);

  return (
    <ViewContainer>
       <ActionButton><ArrowImg src={LeftArrow}/><Link to={`/_admin/tournament/${id}`}>Volver al menu del torneo</Link></ActionButton>
        <OptionsSection>
            <h1>Partidos del torneo con id {id}</h1>
          <Button onClick={onClickNewMatch} > Cargar partido</Button>
        </OptionsSection>
      <ActionMessage isVisible={isMessageVisible}>{actionMessage}</ActionMessage>
        <Table id="customers">
              <tr>
                  <th>id Equipo 1</th>
                  <th>nombre Equipo 1</th>
                  <th>Goles 1</th>
                  <th>id Equipo 2</th>
                  <th>nombre Equipo 2</th>
                  <th>Goles 2</th>
                  <th>Numero de fecha</th>
                  <th></th>
                  <th></th>
              </tr>
              {
                matches.map((match) => (
                  <tr>
                  <td>{match.equipo1.id}</td>
                  <td>{match.equipo1.nombre}</td>
                  <td>{match.equipo1.goles}</td>
                  <td>{match.equipo2.id}</td>
                  <td>{match.equipo2.nombre}</td>
                  <td>{match.equipo2.goles}</td>
                  <td>{match.numeroFecha}</td>
                  <td><ActionButton onClick={()=>onClickEdit(match._id)}>Editar</ActionButton></td>
                  <td><ActionButton onClick={()=>onClickDelete(match._id)}>Eliminar</ActionButton></td>
                </tr>
                ))
              }
        </Table>
    </ViewContainer>

  );
};

export default HomeView;