import React, { useState, useEffect } from 'react'

import {
  Link,
  useParams
} from "react-router-dom";

import {ViewContainer} from '../../../commons/styles/styles'

import Player1 from './assets/player1.svg'
import Player2 from './assets/player2.svg'
import Player3 from './assets/player3.svg'

import TestLogo from './assets/Shield2.svg'
import TestLogo2 from './assets/shield1.svg'

import StatLogo1 from './assets/statLogo1.svg'
import StatLogo2 from './assets/statLogo2.svg'
import StatLogo3 from './assets/statLogo3.svg'
import StatLogo4 from './assets/statLogo4.svg'

import { MOBILE_380 } from '../../../commons/constants/sizes';
import Arrow from './assets/Arrow.svg'
import BallLottie from './assets/ballLottie.json'
import Footer from '../../components/Footer/Footer';


import {NextMatchDate, DateCountSection, NextMatches, DateCountTitle, DateCountImages, DateCountImage, CountSection,
   PageContainer, PositionTableSection, PositionHeader, PositionTable, PositionTableTitle,
   Table, DatesHistorySection, DateHistoryTitleSection, DateHistoryTitle, ResultsDatesSection, ResultsDatesRow,
   TeamLogo, ResultsDatesInfo, ResultsDatesInfoText, MatchResult, StatsSection, StatLogo, Stat, StatTitle, StatNumber,
   SelectDateSection, DateNumber, LogoTable,
   MatchResultDate, MatchResultContentDate, Body, TeamName, MatchResultContent, TableTeamName, LogoAndName, Shield
  } from './styles'

const HomeView = ({loading, tournamentCategory, tournamentName, positionTable, searchedMatchesFirstPanel, dateNumber, matches, lastDateNumber, hasFixture, onClickDateNumber}) => {
  const [numberDates, setNumberDates] = useState([]);

  useEffect(() => {
    setNumberDates(Array(lastDateNumber).fill(''));
  }, [lastDateNumber, matches, positionTable]);

  

  const displayResultsDates = () => {
    return(
      matches.map((match)=>{
        console.log(match,"matchhhhhhhhhhhhhhhhh")
        return(
                <MatchResultDate>
                  <MatchResultContentDate>
                      <TeamLogo src={match.equipo1?.escudo != "undefined" ? match.equipo1?.escudo : TestLogo}/>
                      <ResultsDatesInfo>
                        <ResultsDatesInfoText>{match.equipo1?.goles}-{match.equipo2?.goles}</ResultsDatesInfoText>
                        <ResultsDatesInfoText>{match.equipo1?.nombre}</ResultsDatesInfoText>
                        <ResultsDatesInfoText>VS</ResultsDatesInfoText>
                        <ResultsDatesInfoText>{match.equipo2?.nombre}</ResultsDatesInfoText>
                      </ResultsDatesInfo>
                      <TeamLogo src={match.equipo2?.escudo != "undefined" ? match.equipo2?.escudo : TestLogo}/>
                    </MatchResultContentDate>
                </MatchResultDate>
        )
      })
    )
  } 

  const displayNextMatches = () => {
      return(   
        searchedMatchesFirstPanel.map((match)=>{
          return(
            
              <MatchResult>
                <MatchResultContent>
                  <LogoAndName>
                    <Shield alt="escudo" src={match.equipo1?.escudo != "undefined" ? match.equipo1?.escudo : TestLogo}/>
                    <TeamName>{match.equipo1?.nombre}</TeamName> 
                  </LogoAndName>
                  <ResultsDatesInfo>
                    {match.numeroFecha !== 0 ? 
                      <ResultsDatesInfoText>{match.equipo1?.goles}-{match.equipo2?.goles}</ResultsDatesInfoText>
                    :
                      <ResultsDatesInfoText>VS</ResultsDatesInfoText>
                    }
                  </ResultsDatesInfo>
                  <LogoAndName>
                    <Shield alt="escudo" src={match.equipo2?.escudo != "undefined" ? match.equipo2?.escudo : TestLogo }/>
                    <TeamName>{match.equipo2?.nombre}</TeamName>
                  </LogoAndName>
                </MatchResultContent>
              </MatchResult>
            
          )
        })
      )
  } 

  const displayNumberOfDates = () => {
    return(   
      numberDates.map((item,index)=>{
        return(
          <DateNumber onClick={()=>onClickDateNumber(index+1)} >
          {index+1}
          </DateNumber>
        )
      })
    )
} 

const displayPositionTable = () => {
  return(   
    positionTable.map((team,index)=>{
      console.log(team,"team")
      return(
        <tr>
          <TableTeamName>{index + 1}°</TableTeamName>
          <td>{<LogoTable src={team.escudo != "undefined" ? team.escudo : TestLogo}/>}</td>
          <TableTeamName>{team.nombre}</TableTeamName>
          <td>{team.puntos}</td>
          <td>{team.partidosEmpatados + team.partidosGanados + team.partidosPerdidos}</td>
          <td>{team.partidosGanados}</td>
          <td>{team.partidosEmpatados}</td>
          <td>{team.partidosPerdidos}</td>
          <td>{team.golesAFavor}</td>
          <td>{team.golesEnContra}</td>
          <td>{team.golesAFavor-team.golesEnContra}</td>
        </tr>
      )
    })
  )
} 
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
  window.addEventListener('resize', setDimension);
  return(() => {
      window.removeEventListener('resize', setDimension);
  })
}, [screenSize])

  const mobile = screenSize.dynamicWidth < MOBILE_380;

  return (
    <Body>
    <ViewContainer>
      <PageContainer> 
        {/* <TournamentSelectSection>
          <TournamentSelect>
            <TournamentSelectOption value="volvo" selected="caca">Volvo</TournamentSelectOption>
            <TournamentSelectOption value="saab">Saab</TournamentSelectOption>
          </TournamentSelect>
          <SeeTournamentSection>
             <Lottie animationData={BallLottie} loop={true} />
            <div>Ver Torneo</div>
            <ArrowIcon src={Arrow}/>
          </SeeTournamentSection>
        </TournamentSelectSection> */}
        {/* <BackgroundShape2 /> */}
        <NextMatchDate>
          <DateCountSection>
              <DateCountTitle>
               { hasFixture ? 'PRÓXIMA FECHA' : 'RESULTADOS ÚLTIMA FECHA'}
               {!hasFixture && '('+lastDateNumber+')'}
              </DateCountTitle>
              <DateCountImages>
                <DateCountImage src={Player1}/>
                <DateCountImage src={Player2}/>
                <DateCountImage src={Player3}/>
              </DateCountImages>
            {/* {hasFixture && 
              <CountSection>
                7 DÍAS <Spacing> : </Spacing> 3 HORAS <Spacing> : </Spacing> 20 MIN
              </CountSection>
            } */}
          </DateCountSection>
          <NextMatches>
            {!loading.searchedMatchesFirstPanel &&  displayNextMatches()}
          </NextMatches>
        </NextMatchDate>
        <PositionTableSection>
          <PositionHeader>
            POSICIONES
          </PositionHeader>
          <PositionTable>
            <PositionTableTitle>{tournamentName+" "+tournamentCategory}</PositionTableTitle>
            <Table>
             
                <tr>
                    <th>Pos</th>
                    <th></th>
                    <th>Equipo</th>
                    <th>Pts</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>DG</th>
                </tr>
                {!loading.searchedPositionTable && displayPositionTable()}
            </Table>
          </PositionTable>
          {mobile && <p>*desliza hacia la izquierda para ver más</p> }
        </PositionTableSection>
        <DatesHistorySection>
          <DateHistoryTitleSection>
            <DateHistoryTitle>
              RESULTADO FECHA: {dateNumber ? dateNumber : lastDateNumber}
            </DateHistoryTitle>
          </DateHistoryTitleSection>
          <ResultsDatesSection>
            {!loading.searchedMatches && displayResultsDates()}
          </ResultsDatesSection>
        </DatesHistorySection>
        <SelectDateSection>
            <DateNumber>
              Fechas:
            </DateNumber>
            {displayNumberOfDates()}
        </SelectDateSection>
        {/* <StatsSection>
          <Stat>
            <StatLogo src={StatLogo1}/>
            <StatNumber>
              0000
            </StatNumber>
            <StatTitle>
              Goles
            </StatTitle>
          </Stat>
          <Stat>
            <StatLogo src={StatLogo2}/>
            <StatNumber>
              0000
            </StatNumber>
            <StatTitle>
              Partidos jugados
            </StatTitle>
          </Stat>
          <Stat>
            <StatLogo src={StatLogo3}/>
            <StatNumber>
              0000
            </StatNumber>
            <StatTitle>
              Partidos jugados
            </StatTitle>
          </Stat>
          <Stat>
            <StatLogo src={StatLogo4}/>
            <StatNumber>
              0000
            </StatNumber>
            <StatTitle>
              Partidos jugados
            </StatTitle>
          </Stat>
        </StatsSection> */}
       </PageContainer>
    </ViewContainer>
  </Body>
  );
};

export default HomeView;