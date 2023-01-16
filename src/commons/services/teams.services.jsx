import axios,{ AxiosResponse } from 'axios';

import { apiRoute } from '../config';

//import { get } from 'services/api';

export async function GetTeams() {
  try {
    const response = await axios.get(apiRoute +'/equipos');
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function GetTeamById(id) {
  try {
    const response = await axios.get(apiRoute +'/equipos',{params:{id:id}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function GetTeamsByTournamentId(torneoID) {
  try {
    const response = await axios.get(apiRoute +'/equipos/torneo',{params:{torneoID:torneoID}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function GetTeamsNotAssigned(torneoID) {
  try {
    const response = await axios.get(apiRoute +'/equipos/torneoNoAsignado',{params:{torneoID:torneoID}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function NewTeam(team) {
  console.log(team,"teammm")
  const formData = new FormData();
  formData.append("escudo",team.escudo[0])
  formData.append("nombre",team.nombre)
  formData.append("categoria",team.categoria)

  try {
    const response = await axios.post(apiRoute + '/equipos',formData,{headers: { "Content-Type": "multipart/form-data" }});
    //const response = await axios.post(apiRoute +'/equipos',{params:{team:team}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function EditTeam(team, escudoAnterior) {

  const formData = new FormData();
  if(team.escudo[0]){
    formData.append("escudo",team.escudo[0])
  }else{
    formData.append("escudo",team.escudoAnterior)
  }
  formData.append("nombre",team.nombre)
  formData.append("categoria",team.categoria)
  formData.append("id",team.id)
  formData.append("torneos",team.torneos)

  try {
    const response = await axios.put(apiRoute + '/equipos',formData,{headers: { "Content-Type": "multipart/form-data" }});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}

export async function DeleteTeam(team) {
  try {
    const response = await axios.delete(apiRoute +'/equipos',{params:{id:team._id, torneos:team.torneos}});
    return response.data;
  } catch (error) {
    console.error(error,"error");
  }
}