import React, { useState, useEffect } from 'react'
import {ViewContainer, Table, ActionButton, ActionMessage} from '../../../commons/styles/styles'
import FormNewTeam from '../../components/FormNewTeam'
import {OptionsSection, Button} from './styles'

const HomeView = ({deleteTeam, teams, teamToEdit, onClickEditTeam, onClickNewTeam, onClickBack, addNewTeam, onSubmitTeam, onSubmitEditTeam, actionMessage}) => {
  console.log(addNewTeam,"addNewTeam")

  const [isMessageVisible, setIsMessageVisible] = useState(true);

  console.log(isMessageVisible,"isMessageVisible")

  useEffect(() => {
    setIsMessageVisible(true)
    setTimeout(function () {
      setIsMessageVisible(false);
    }, 7000);
  }, [teams]);

  return (
    <ViewContainer>
   {!addNewTeam ?
    <>
      <OptionsSection>
          <h1>Equipos</h1>
            <Button onClick={onClickNewTeam}> Cargar Equipo</Button>
      </OptionsSection>
      <ActionMessage isVisible={isMessageVisible}>{actionMessage}</ActionMessage>
      <Table id="customers">
        <tr>
          <th>Nombre</th>
          <th>Categoria</th>
          {/* <th>Escudo</th> */}
          <th>Id Torneos</th>
          <th></th>
          <th></th>
        </tr>
        { teams.map((team)=>{
                    return(
                      <tr>
                        <td>{team.nombre}</td>
                        <td>{team.categoria}</td>
                        <td>{team.torneos.join(", ")}</td>
                        <td><ActionButton onClick={()=>onClickEditTeam(team._id)}>Editar</ActionButton></td>
                        <td><ActionButton onClick={()=>deleteTeam(team)}>Eliminar</ActionButton></td>
                      </tr>
                    )
                })}
      </Table>
    </>
    :
      <FormNewTeam onSubmitTeam={onSubmitTeam} onClickBack={onClickBack} teamToEdit={teamToEdit} onSubmitEditTeam={onSubmitEditTeam}/>
    }
    </ViewContainer>

  );
};

export default HomeView;