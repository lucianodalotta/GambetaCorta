import React, { useState, useEffect } from 'react'
import LayoutContainer from './LayoutContainer'
import TournamentPage from '../pages/Tournament';
import {useParams} from "react-router-dom"

import { GetMatchesByDate } from '../../commons/services/match.services'
import { GetTournamentById, GetPositionsTable } from '../../commons/services/tournament.services'

import {SortDates} from '../helpers/matchesHelper'

const HomeContainer = () => {
  const {id} = useParams();

  const [searchedMatches, setSearchedMatches] = useState([]);

  const [searchedMatchesFirstPanel, setSearchedMatchesFirstPanel] = useState([]);

  const [searchedPositionTable, setSearchedPositionTable] = useState({});

  const [lastDateNumber, setLastDateNumber] = useState();

  const [dateNumber, setDateNumber] = useState();

  const [tournamentData, setTournamentData] = useState();

  const [loading, setLoading] = useState(
    {
      tournamentData: true,
      searchedMatches: true,
      searchedPositionTable: true,
      searchedMatchesFirstPanel: true
    }
  );

  const searchMatches = async (lastDateNumber) => {
    let fetchedMatches;
    if(lastDateNumber){
      fetchedMatches = await GetMatchesByDate(id,lastDateNumber);
    }
    else{
      fetchedMatches = await GetMatchesByDate(id,dateNumber);
    }
    
    setSearchedMatches(fetchedMatches);
    setLoading(prevState => ({ ...prevState, searchedMatches: false }));
  };

  const searchMatchesFirstPanel = async (dateNumber) => {
    const fetchedMatches = await GetMatchesByDate(id,dateNumber);
    setSearchedMatchesFirstPanel(fetchedMatches);
    setLoading(prevState => ({ ...prevState, searchedMatchesFirstPanel: false }));
  };

  const getTournamentData = async () => {
    const fetchedTournament = await GetTournamentById(id);
    setTournamentData(fetchedTournament);

    if(!fetchedTournament.hayFixtureDisponible) { 
      console.log(fetchedTournament.hayFixtureDisponible,"hay fixture disponible")
      searchMatchesFirstPanel(fetchedTournament.numeroUltimaFecha)
    }

    else{
      setDateNumber(fetchedTournament.numeroUltimaFecha);
      searchMatchesFirstPanel(0);
    }

    searchMatches(fetchedTournament.numeroUltimaFecha)
    setLoading(prevState => ({ ...prevState, tournamentData: false }));
  };

  const getPositionTable = async () => {
    const fetchedPositionTable = await GetPositionsTable(id);

    setSearchedPositionTable(fetchedPositionTable);
    setLoading(prevState => ({ ...prevState, searchedPositionTable: false }));
  };



  useEffect(() => {
    getTournamentData();
    getPositionTable();
  }, []);

  useEffect(() => {
    searchMatches();
  }, [dateNumber]);

  

  return (  
      <LayoutContainer>
        <TournamentPage 
          matches={searchedMatches}
          tournamentName={tournamentData?.nombre}
          tournamentCategory={tournamentData?.categoria}
          lastDateNumber={tournamentData?.numeroUltimaFecha}
          hasFixture={tournamentData?.hayFixtureDisponible}
          onClickDateNumber={setDateNumber}
          searchedMatchesFirstPanel={searchedMatchesFirstPanel}
          dateNumber={dateNumber}
          positionTable={searchedPositionTable}
          loading={loading}
        />
        
      </LayoutContainer>
  );
};

export default HomeContainer;
