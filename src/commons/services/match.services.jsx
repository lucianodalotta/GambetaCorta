import axios,{ AxiosResponse } from 'axios';

import { apiRoute } from '../config';
//import { get } from 'services/api';

export async function GetMatchesByTournamentId(tournamentId) {
  try {
    const response = await axios.get(apiRoute +'/partidos',{params:{tournamentId:tournamentId}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function GetMatchById(id) {
  try {
    const response = await axios.get(apiRoute +'/partidos/id',{params:{id:id}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function SubmitMatch(match) {
  try {
    const response = await axios.post(apiRoute +'/partidos',{params:{match:match}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function GetMatchesByDate(tournamentId, dateNumber) {
  try {
    const response = await axios.get(apiRoute +'/partidos',{params:{tournamentId:tournamentId, dateNumber: dateNumber}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function EditMatch(match) {
  try {
    const response = await axios.put(apiRoute +'/partidos',{params:{match:match}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function DeleteMatch(id) {
  try {
    const response = await axios.delete(apiRoute +'/partidos',{params:{id:id}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}