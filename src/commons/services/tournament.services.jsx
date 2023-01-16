import axios,{ AxiosResponse } from 'axios';

import { SortTable } from '../helper/tableHelper';

import { apiRoute } from '../config';

//import { get } from 'services/api';

export async function GetTournaments() {
  try {
    const response = await axios.get(apiRoute +'/torneos');
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function GetTournamentById(id) {
  try {
    const response = await axios.get(apiRoute +'/torneos',{params:{id:id}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}
export async function GetPositionsTable(id) {
  try {
    const response = await axios.get(apiRoute +'/torneos/Tabla',{params:{id:id}});
    return SortTable(response.data);
  } catch (error) {
    console.error(error,"error");
  }
}

export async function UpdatePositionsTable(id) {
  try {
    const response = await axios.put(apiRoute +'/torneos/Tabla',{params:{torneoID:id}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function NewTournament(tournament) {
  try {
    const response = await axios.post(apiRoute +'/torneos',{params:{tournament:tournament}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function AssignTeamTournament(torneoId, equipoId) {
  try {
    const response = await axios.put(apiRoute +'/torneos/inscribir',{params:{torneoID:torneoId, equipoID:equipoId}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function EditTournament(tournament) {
  try {
    const response = await axios.put(apiRoute +'/torneos',{params:{tournament:tournament}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function DeleteTournament(id) {
  try {
    const response = await axios.delete(apiRoute +'/torneos',{params:{id:id}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}