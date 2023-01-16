import React, { useState, useEffect } from 'react'
import {
  Link,
  useParams
} from "react-router-dom";

import {ViewContainer, Table, ActionButton, ActionMessage} from '../../../commons/styles/styles'

import { OptionsSection, Button } from './styles';

const HomeView = ({onClickNewTournament, onClickEditTournament, tournaments, deleteTournament, actionMessage}) => {
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  console.log(isMessageVisible,"isMessageVisible")

  useEffect(() => {
    setIsMessageVisible(true)
    setTimeout(function () {
      setIsMessageVisible(false);
    }, 5000);
  }, [tournaments]);

  return (
    <ViewContainer>
      <OptionsSection>
        <h1>Torneos activos</h1>
        <Button onClick={onClickNewTournament}>Crear Torneo</Button>
      </OptionsSection>
      <ActionMessage isVisible={isMessageVisible}>{actionMessage}</ActionMessage>
      <Table id="customers">
        <tr>
          <th>Nombre</th>
          <th>id</th>
          <th>Categoria</th>
          <th>N° Ultima Fecha</th>
          <th>Fixture Disponible</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        {
          tournaments?.map((tournament) => (
            <tr>
            <td>{tournament.nombre}</td>
            <td>{tournament._id}</td>
            <td>{tournament.categoria}</td>
            <td>{tournament.numeroUltimaFecha}</td>
            <td>{tournament.hayFixtureDisponible ? 'si' : 'no' }</td>
            <Link to={`/_admin/tournament/${tournament._id}`}>Ir al torneo</Link>
            <td><ActionButton onClick={()=>onClickEditTournament(parseInt(tournament._id))}>Editar</ActionButton></td>
            <td><ActionButton onClick={()=>deleteTournament(tournament._id)}>Eliminar</ActionButton></td>
          </tr>
          ))
        }
      </Table>
    </ViewContainer>

  );
};

export default HomeView;