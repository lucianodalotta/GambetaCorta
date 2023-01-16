import React, { useState, useEffect } from 'react'
import LayoutContainer from './LayoutContainer'
import {GetTeams, NewTeam, GetTeamById, EditTeam, DeleteTeam} from '../../commons/services/teams.services'
import TeamsView from '../pages/Teams';

const HomeContainer = () => {

    const [teams, setTeam] = useState([]);
    const [addNewTeam, setAddNewTeam] = useState(false);
    const [teamToEdit, setTeamToEdit] = useState({});
    const [idEditTeam, setIdEditTeam] = useState();
    const [onSubmitState, setOnSubmitState] = useState();

    const [actionMessage, setActionMessage] = useState("");

    const fetchTeams = async () => {
      const fetchedTeams = await GetTeams();
      setTeam(fetchedTeams);
    };

    const onSubmitTeam = async (team) => {
      const newTeam = await NewTeam(team);
      setActionMessage("El equipo se cargo exitosamente")
      setAddNewTeam(false)
      setOnSubmitState(!onSubmitState)
    };

    const editTeam = async (id) => {
      const fetchedTeam = await GetTeamById(id);
      setTeamToEdit(fetchedTeam)
      setAddNewTeam(true);
      setIdEditTeam(id)
    };

    const deleteTeam = async (team) => {
      const fetchedTournament = await DeleteTeam(team);
      setActionMessage("El equipo se elimino exitosamente")
      setOnSubmitState(!onSubmitState)
    };

    const onSubmitEditTeam = async (team) => {
      const teamForEdit = {
        nombre: team.nombre,
        categoria: team.categoria,
        escudo: team.escudo,
        escudoAnterior: team.escudoAnterior,
        id: idEditTeam,
        torneos: teamToEdit.torneos
      }
      const newTeam = await EditTeam(teamForEdit);
      setActionMessage("El equipo se edito exitosamente")
      setAddNewTeam(false)
      setOnSubmitState(!onSubmitState)
    };

    const onClickNewTeam = async () => {
      setAddNewTeam(true)
      setTeamToEdit({})
    };

    useEffect(() => {
      fetchTeams();
    }, [onSubmitState]);

  return (
      <LayoutContainer>
        <TeamsView 
          teams={teams}
          onClickNewTeam={()=>onClickNewTeam()}
          onClickBack={()=>setAddNewTeam(false)}
          onClickEditTeam={editTeam}
          addNewTeam={addNewTeam}
          onSubmitTeam={onSubmitTeam}
          onSubmitEditTeam={onSubmitEditTeam}
          teamToEdit={teamToEdit}
          deleteTeam={deleteTeam}
          actionMessage={actionMessage}
        />
      </LayoutContainer>
  );
};

export default HomeContainer;
