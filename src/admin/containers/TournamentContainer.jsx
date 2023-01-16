import React, { useState, useEffect } from 'react'
import LayoutContainer from './LayoutContainer'
import Tournament from '../pages/Tournament'
import {useParams} from "react-router-dom"
import { DownloadTableExcel } from 'react-export-table-to-excel';



import { GetTournamentById, UpdatePositionsTable, GetPositionsTable, AssignTeamTournament } from '../../commons/services/tournament.services'
import { GetTeams, GetTeamsNotAssigned } from '../../commons/services/teams.services'

//busqueda de nombre y escudo para la tabla

const TournamentContainer = () => {
    const {id} = useParams();

    const [searchedTournament, setSearchedTournament] = useState(false);
    const [searchedTabla, setSearchedTabla] = useState({});
    const [assignTeamResponse, setAssignTeamResponse] = useState({});
    const [addNewTeam, setAddNewTeam] = useState(false);
    const [allTeams, setAllTeams] = useState([]);

    const [actionMessage, setActionMessage] = useState("");

    const [loadingTable, setLoadingTable] = useState(true);
  
    const searchTournament = async () => {
      const fetchedTournament = await GetTournamentById(id);
      setSearchedTournament(fetchedTournament);
    };

    const onClickCalcularTabla = async () => {
      await UpdatePositionsTable(id);
      setActionMessage("Tabla actualizada correctamente")
      getTabla();
    };

    const getTabla = async () => {
      const fetchedTabla = await GetPositionsTable(id);
      fetchedTabla && setSearchedTabla(fetchedTabla);
      setLoadingTable(false)
    };

    //ejecutar solo cuando se apreta agregar equipo
    const getAllTeams = async () => {
      const fetchedTeams = await GetTeamsNotAssigned(id);
      setAllTeams(fetchedTeams);
    };

    const assignTeamTournament = async ({equipoId}) => {
  
      const assignTeam = await AssignTeamTournament(id,equipoId);
      setAssignTeamResponse(assignTeam)
      setAddNewTeam(false)
      setActionMessage("El equipo se cargo al torneo exitosamente")
    };
    const addNewTeamButton = () => {
      setAddNewTeam(true)
      setActionMessage('')
    } 

    useEffect(() => {
      searchTournament();
      getTabla();
      getAllTeams();
    }, [assignTeamResponse]);
    
    useEffect(() => {
      getAllTeams();
    }, [addNewTeam]);

  return (
      <LayoutContainer>
        <Tournament 
          id={id}
          tournament={searchedTournament}
          actionMessage={actionMessage}
          onClickCalcularTabla= {()=>onClickCalcularTabla()}
          positionTable={searchedTabla}
          addNewTeam={addNewTeam}
          onClickAddNewTeam={()=>addNewTeamButton()}
          onClickBackAddNewTeam={()=>setAddNewTeam(false)}
          allTeams={allTeams}
          onSubmitAssignTeamTournament={assignTeamTournament}
          loadingTable={loadingTable}
        />
      </LayoutContainer>
  );
};

export default TournamentContainer;
