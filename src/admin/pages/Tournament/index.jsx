import React, { useState, useEffect , useRef} from 'react'
import {
  Link,
  useParams
} from "react-router-dom";

import {SortTable} from '../../../commons/helper/tableHelper'

import {ViewContainer, Table, ActionMessage} from '../../../commons/styles/styles'

import FormAssignTeamTournament from '../../components/FormTeamTournament'

import {OptionsSection, Button} from './styles'

import { DownloadTableExcel } from 'react-export-table-to-excel'



const HomeView = ({id,loadingTable, tournament, onClickCalcularTabla, positionTable, addNewTeam, onClickAddNewTeam, allTeams,
                    onSubmitAssignTeamTournament, actionMessage, onClickBackAddNewTeam}) => {
  const tableRef = useRef(null);    
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  console.log(isMessageVisible,"isMessageVisible")

  useEffect(() => {
    setIsMessageVisible(true)
    setTimeout(function () {
      setIsMessageVisible(false);
    }, 5000);
  }, [tournament, actionMessage]);

  return (
    <ViewContainer>
       { !addNewTeam ?
        <>
          <OptionsSection>
                <h1>Torneo {tournament.nombre} con id {id}</h1>
                <Button onClick={onClickCalcularTabla}>Calcular Tabla</Button>
                <Button><Link to={`/_admin/matches/${id}`}>Partidos</Link></Button>
                <Button onClick={onClickAddNewTeam}>Agregar Equipo</Button>
            </OptionsSection>
            <ActionMessage isVisible={isMessageVisible}>{actionMessage}</ActionMessage>


          
<div>
            

            <Table id="customers"  ref={tableRef}>
                <tr>
                    <th>posicion</th>
                    <th>id equipo</th>
                    <th>nombre</th>
                    <th>puntos</th>
                    <th>pj</th>
                    <th>pg</th>
                    <th>pe</th>
                    <th>pp</th>
                    <th>gf</th>
                    <th>gc</th>
                    <th>df</th>
                </tr>
                
                {!loadingTable && positionTable?.map((team, index)=>{
                    return(
                      <tr>
                         <td>{index+1}°</td>
                        <td>{team.idEquipo}</td>
                        <td>{team.nombre}</td>
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
                })}
            </Table>

            <DownloadTableExcel
                    filename="Tournament table"
                    sheet="Tournaments"
                    Table="customers"
                    currentTableRef={tableRef.current}
                >
                   <button > Export excel </button>
                   </DownloadTableExcel>
           
            </div>
           

          </>
        :
            <FormAssignTeamTournament 
              allTeams={allTeams}
              onSubmitAssignTeamTournament={onSubmitAssignTeamTournament}
              onClickBackAddNewTeam={onClickBackAddNewTeam}
            />
        }
    </ViewContainer>

  );
};

export default HomeView;