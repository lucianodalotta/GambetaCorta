import styled from 'styled-components';
import Shape2 from './assets/backgroundShape2.png'
import background from '../../../commons/resources/rectangle.svg'

import { DESKTOP_1920, TABLET_768, TABLET_740 } from '../../../commons/constants/sizes'


export const NextMatchDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;
  border-radius: 5px 5px 5px 5px;
  border: 1px solid #FFFFFF;
  margin-bottom: 49px;

  @media (max-width: ${TABLET_768}px) {
    overflow-x: hidden !important;
    flex-direction: column;
  }
`;


export const CountTitle = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 90px 0;
`;

export const DateCountSection = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 70px 0;
  @media (max-width: ${TABLET_768}px) {
    width: 100%;
  }
`;

export const DateCountTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: #000654;
  margin-bottom: 50px;
`;

export const DateCountImages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const DateCountImage = styled.img`
 
`;

export const CountSection = styled.p`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: rgba(77, 141, 242, 0.36);
  border: 1px solid #4D8DF2;
  justify-content: center;
  padding: 13px 0;
  margin-top: 50px;
  color: #000654;
  font-weight: 400;
  line-height: 36px;
  font-size: 30px;
  text-align: center;
  align-items: center;
`;

export const Spacing = styled.p`
  color: #FFCC33;
  padding: 0px 10px 0px 10px;
  margin-top: 10px;
`;

export const NextMatches = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #000654;
  border-radius: 5px;
  justify-content: center;
  @media (max-width: ${TABLET_768}px) {
    width: 100%;
  }
`;


export const PageContainer = styled.div`
  width: 100%;
`;

export const NextMatch = styled.div`
  width: 100%;
  align-items: center;
  flex: 1;
  height: auto;
  background:#000654;
  border: 1px solid #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MatchData = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;
  color: #FFFFFF;
  padding: 13px 0;
`;


export const Shield = styled.img`
  height: 29px;
  border-radius: 0px 5px 5px 0px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const PositionTableSection = styled.div`
  width: 100%;
  //border: 1px solid #FFFFFF;
`;

export const PositionHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #000654;
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  color: white;
  margin-bottom: 10px;
  font-size: 24px; 
  width: 100%;
  border: 1px solid #FFFFFF;
`;

export const PositionTable = styled.div`
  width: 100%;
  background: #000654;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  overflow-x: auto;
`;

export const PositionTableTitle = styled.div`
  width: 100%;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 13px 0 13px 26px;
`;

export const DatesHistorySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const DateHistoryTitleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  margin-bottom: 10px;
  background: #000654;
`;

export const DateHistoryTitle = styled.div`
  color: white;
  font-weight: bold;
`;

export const ResultsDatesSection = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 10px 40px;
 align-items: center;
 @media (max-width: ${TABLET_768}px) {
  display: table-column;
}
`;

export const ResultsDatesRow = styled.div`
 display: flex;
 flex-direction: row;
 //column-gap: 20px;
 //border: 1px solid #FFFFFF;
 margin-top: 15px;
 border-radius: 5px;
 width: 100%;
 justify-content: space-around;
 @media (max-width: ${TABLET_768}px) {
  flex-direction: row;
}
`;

export const MatchResult = styled.div`
 border: 1px solid #FFFFFF;
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 background-color: #010954;
 @media (max-width: ${TABLET_768}px) {
  width: 100%;
}
`;

export const MatchResultDate = styled.div`
 border: 1px solid #FFFFFF;
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 background-color: #010954;
 padding: 23px 0;
 @media (max-width: ${TABLET_768}px) {
  width: 100%;
  flex-direction: column;
}
`;


export const MatchResultContentDate = styled.div`
  //max-width: 400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
`;

export const ResultsDatesInfo = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-weight: bold;
 text-transform: uppercase;
`;

export const ResultsDatesInfoText = styled.div`
  color: white;
  text-align: center;
`;


export const TeamLogo = styled.img`
  width: 80px;
  height: 80px;
  justify-self: center;
  align-self: center;
`;

export const StatsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  @media (max-width: ${TABLET_768}px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
`;

export const StatTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: white;
`;

export const StatNumber = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: white;
`;

export const StatLogo = styled.img`
  width: 85.95px;
  height: 80.92px;
`;

export const SelectDateSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 7px 0;
`;

export const DateNumber = styled.div`
  color: white;
  width: auto;
  margin-right: 8px;
  cursor: pointer;
`;

export const TournamentSelectSection = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 40px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  //max-height: 100px;
`;

export const TournamentSelect = styled.select`
 width: 35%;
 font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  border: none;
  background-color: white;
  color: #000654;
  border-bottom: 1px solid black !important;
`;

export const TournamentSelectOption = styled.option`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;

  color: #000654;
`;

export const SeeTournamentSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  div{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
  }
`;

export const ArrowIcon = styled.img`
  width: 15px;
  height: 10px;
`;

export const BackgroundShape2 = styled.div`
  position: absolute;
  background-image: url(${Shape2});
  width: 100%;
  height: 100%;
`;

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td,th{
    //border: 1px solid #ddd;
    padding: 8px;
    color: white;
    text-align: center;
  }
  tr{
    background-color: #010954;
    border-top: 1px solid white;
    text-align: center;
  }

  tr td:first-child{
    border-right: 1px solid white;
  }

  th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #000654;
    color: white;
    text-align: center;
  }
`;


export const Body = styled.div`
  background-image: url(${background});
  background-position: top;
  background-color: #000654;
`

export const TeamName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-top: 6px;
`

export const MatchResultContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 15px 15px;
  //max-width: 300px;
`

export const TableTeamName = styled.td`
  text-transform: uppercase;
  font-weight: bolder;
  font-style: normal;
`
export const LogoTable = styled.img`
  width: 35px;
  height: 35px;
  justify-self: center;
`

export const LogoAndName = styled.div`
 align-items: center;
 justify-content: center;
 text-align: center;
 display: flex;
 flex-direction: column;

 img{
  width: 35px;
  height: 35px;
  justify-self: center;
  align-self: center;
  margin-right: 10px;
 }
`
