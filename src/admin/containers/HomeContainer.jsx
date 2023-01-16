import React, { useState, useEffect } from 'react'
import LayoutContainer from './LayoutContainer'
import HomeView from '../pages/TournamentsHome';
import CreateTournamentView from '../pages/CreateTournamentView';


import { GetTournaments, GetTournamentById, NewTournament, EditTournament, DeleteTournament } from '../../commons/services/tournament.services'

const HomeContainer = () => {
  const [isClickedNewTournament, setIsClickedNewTournament] = useState(false);
  const [searchedTournament, setSearchedTournament] = useState(false);
  const [clickedEditTournament, ClickedEditTournament] = useState(false);
  const [onSubmitState, setOnSubmitState] = useState();
  const [tournaments, setTournaments] = useState([]);
  const [actionMessage, setActionMessage] = useState("");

  const fetchTournaments = async () => {
    const fetchedTournaments = await GetTournaments();
    setTournaments(fetchedTournaments);
  };

  const onSubmitTournament = async (tournament) => {
    const newTournament = await NewTournament(tournament); 
    setOnSubmitState(!onSubmitState)
    console.log(newTournament,"newTournament")
    setIsClickedNewTournament(false)
    setActionMessage("el torneo se cargo exitosamente")
  };

  const onSubmitEditTournament = async (tournament) => {
    const newTournament = await EditTournament(tournament);
    setOnSubmitState(!onSubmitState)
    setIsClickedNewTournament(false)
    setActionMessage("el torneo se edito exitosamente")
  };

  const editTournament = async () => {
    console.log(clickedEditTournament,"clickedEditTournament")
    const fetchedTournament = await GetTournamentById(clickedEditTournament);
    setSearchedTournament(fetchedTournament);
    setIsClickedNewTournament(true)
  };

  const deleteTournament = async (id) => {
    const fetchedTournament = await DeleteTournament(id);
    setOnSubmitState(!onSubmitState)
    setIsClickedNewTournament(false)
    setActionMessage("el torneo se elimino exitosamente")
  };

  const onClickNewTournament = async () => {
    setSearchedTournament(false)
    setIsClickedNewTournament(true)
  };

  useEffect(() => {
    fetchTournaments();
  }, [onSubmitState]);

  useEffect(() => {
    clickedEditTournament && editTournament();
  }, [clickedEditTournament]);

  return (
      <LayoutContainer>
       {
         !isClickedNewTournament ?
         <HomeView 
          onClickNewTournament = { () => onClickNewTournament()}
          onClickEditTournament = {ClickedEditTournament}
          tournaments={tournaments}
          deleteTournament={deleteTournament}
          actionMessage={actionMessage}
         /> 
         : <CreateTournamentView 
            onClickBack  = { () => setIsClickedNewTournament(false)}
            onSubmitTournament = {onSubmitTournament}
            onSubmitEditTournament={onSubmitEditTournament}
            searchedTournament={searchedTournament}
            isFromEdit={clickedEditTournament != 0}
          />
        }
      </LayoutContainer>
  );
};

export default HomeContainer;