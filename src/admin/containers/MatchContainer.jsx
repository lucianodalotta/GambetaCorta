import React, { useState, useEffect } from 'react'
import LayoutContainer from './LayoutContainer'
import Matches from '../pages/Matches'
import MatchForm from '../components/MatchForm'
import {useParams} from "react-router-dom"

import { GetMatchesByTournamentId, SubmitMatch, EditMatch, GetMatchById, DeleteMatch } from '../../commons/services/match.services'
import { GetTeamsByTournamentId } from '../../commons/services/teams.services'

const MatchContainer = () => {
    const {id} = useParams();

    const [searchedMatches, setSearchedMatches] = useState([]);
    const [searchedTeams, setSearchedTeams] = useState([]);
    const [isClickedNewMatch, setIsClickedNewMatch] = useState(false);
    const [matchToEdit, setMatchToEdit] = useState({});
    const [idEditMatch, setIdEditMatch] = useState();
    const [onSubmitState, setOnSubmitState] = useState();
    const [actionMessage, setActionMessage] = useState("");

    const searchMatches = async () => {
      const fetchedMatches = await GetMatchesByTournamentId(id);
      setSearchedMatches(fetchedMatches);
    };

    const searchTeams = async () => {
      console.log("entro a la carga de equipos")
      const fetchedTeams = await GetTeamsByTournamentId(id);
      setSearchedTeams(fetchedTeams);
    };

    const editMatch = async (id) => {
      const fetchedMatch = await GetMatchById(id);
      console.log(fetchedMatch,"fetchedMatch")
      setMatchToEdit(fetchedMatch)
      setIsClickedNewMatch(true);
      setIdEditMatch(id)
    };

    const deleteMatch = async (id) => {
      const fetchedTournament = await DeleteMatch(id);
      setActionMessage("El partido se elimino exitosamente")
      setOnSubmitState(!onSubmitState)
      setIsClickedNewMatch(false)
    };

    const onSubmitEditMatch = async (data) => {
      const match ={
        ...data,
        id: idEditMatch,
        idTorneo: id
      }
      const submitMatch = await EditMatch(match);
      setActionMessage("El partido se edito exitosamente")
      setOnSubmitState(!onSubmitState)
      setIsClickedNewMatch(false)
    };

    const onSubmitMatch = async (data) => {
      const match ={
        ...data,
        idTorneo: id
      }
      const submitMatch = await SubmitMatch(match);
      setActionMessage("El partido se cargo exitosamente")
      setOnSubmitState(!onSubmitState)
      setIsClickedNewMatch(false)
    };

    const onClickBack = async () => {
      setIsClickedNewMatch(false)
      setActionMessage("")
    };

    const onClickNewMatch = async () => {
      setMatchToEdit({})
      setIsClickedNewMatch(true)
    };

    useEffect(() => {
      searchMatches();
    }, [onSubmitState]);

    useEffect(() => {
      searchTeams();
    }, [isClickedNewMatch]);

  return (
      <LayoutContainer>
       { !isClickedNewMatch ? 
       <Matches 
          id={id}
          matches={searchedMatches}
          onClickNewMatch={()=>onClickNewMatch()}
          onClickEdit={editMatch}
          onClickDelete={deleteMatch}
          actionMessage={actionMessage}
        />:
          <MatchForm 
            onClickBack  = { () => onClickBack()}
            searchedTeams={searchedTeams}
            onSubmitMatch={onSubmitMatch}
            matchToEdit={matchToEdit}
            onSubmitEditMatch={onSubmitEditMatch}
          />
        }
      </LayoutContainer>
  );
};

export default MatchContainer;
