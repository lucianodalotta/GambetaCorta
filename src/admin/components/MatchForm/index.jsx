import React, { useState, useEffect } from 'react'

import LeftArrow from '../../../commons/assets/leftArrow.png'

import {ArrowImg, ActionButton, ErrorMessage} from '../../../commons/styles/styles'

import {Input, Form, FormContainer, Select, RadioButtonRow} from './styles'

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useForm } from "react-hook-form";

const HomeView = ({onClickBack, searchedTeams, onSubmitMatch, matchToEdit, onSubmitEditMatch}) => {

  const [selectTeams1, setSelectTeams1] = useState(searchedTeams);
  const [selectTeams2, setSelectTeams2] = useState(searchedTeams);
  const [errorSameTeamMessage, setErrorSameTeamMessage] = useState('');

  const isFromEdit = Object.keys(matchToEdit).length > 0

  const schema = Yup.object().shape({
    numeroFecha: Yup.number().typeError("Ingrese numero de fecha valido").moreThan(-1,"ingrese numero de fecha valido").integer('Ingrese numero de fecha valido').required('Ingrese numero de fecha valido'),
    idEquipo1: Yup.string().min(1, 'Ingrese un equipo valido').max(50, 'Ingrese un equipo valido').required('Required'),
    idEquipo2: Yup.string().min(1, 'Ingrese un equipo valido').max(50, 'Ingrese un nombre valido').required('Required'),
    golesEquipo1: Yup.number().typeError("Ingrese goles validos").moreThan(-1,"ingrese goles validos").integer('Ingrese goles validos').required('Ingrese goles validos'),
    golesEquipo2: Yup.number().typeError("Ingrese goles validos").moreThan(-1,"ingrese goles validos").integer('Ingrese goles validos').required('Ingrese goles validos'),

  })

  //console.log(searchedTeams,"searchedTeams")

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({mode: 'onBlur', resolver: yupResolver(schema),});

  const onSubmit = (data) => {
    console.log(data,"dataaa")
    if(data.idEquipo1 == data.idEquipo2){
      setErrorSameTeamMessage("seleccione equipos distintos")
    }
    else{
      if(!isFromEdit){
          onSubmitMatch(data);
      }
      else{
        onSubmitEditMatch(data)
      }
    }
  }; 


const putTeamFirst = (id) => {
  var sortedArray = searchedTeams

  if(id){
    sortedArray = [
      ...searchedTeams.filter(team => team._id == id), 
      ...searchedTeams.filter(team => team._id != id)
    ];
  }
  return sortedArray
}

  console.log(errors,"errors")

  useEffect(() => {
    if(isFromEdit){
      let defaultValues = {};
      defaultValues.numeroFecha = matchToEdit.numeroFecha;

      defaultValues.golesEquipo1 = matchToEdit.equipo1.goles;
      defaultValues.sePresentoEquipo1 = matchToEdit.equipo1.sePresento  ? 'true' : 'false';;
      setSelectTeams1(putTeamFirst(matchToEdit.equipo1.id))


      defaultValues.golesEquipo2 = matchToEdit.equipo2.goles;
      defaultValues.sePresentoEquipo2 = matchToEdit.equipo2.sePresento ? 'true' : 'false';
      setSelectTeams2(putTeamFirst(matchToEdit.equipo2.id))

      reset({ ...defaultValues });
    }
  }, [matchToEdit]);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ActionButton onClick={onClickBack}><ArrowImg src={LeftArrow}/>Volver</ActionButton>
        <h2>Cargar Partido</h2>

        <div>Numero de Fecha</div>
        <Input type="text" name="numeroFecha" {...register("numeroFecha")}/>
        <ErrorMessage>{errors.numeroFecha?.message}</ErrorMessage> 

        <div>equipo 1</div>
        <Select type="select" name="idEquipo1" {...register("idEquipo1")}>
           {!isFromEdit && 
            <option key={''} value={''}>
              Seleccione un equipo
            </option>}
          {
          putTeamFirst(matchToEdit?.equipo1?.id).map((data) => {
              return (
                <option key={data._id} value={data._id}>
                  {data.nombre}
                </option>
              );
          })}
        </Select>
        <ErrorMessage>{errors.idEquipo1?.message}</ErrorMessage> 
        <div>Goles equipo 1</div>
        <Input type="text" name="golesEquipo1" {...register("golesEquipo1")}/>
        <ErrorMessage>{errors.golesEquipo1?.message}</ErrorMessage> 
        <div>Se Presento</div>
        {/* <Input type="boolean" name="sePresentoEquipo1" {...register("sePresentoEquipo1")}/> */}

          <RadioButtonRow>
                <input type="radio" id="true" name="sePresentoEquipo1" value="true"  {...register("sePresentoEquipo1")}/>
                <label for="true">Si</label><br/>
              </RadioButtonRow>
              <RadioButtonRow>
                 <input type="radio" id="false" name="sePresentoEquipo1" value="false" {...register("sePresentoEquipo1")}/>
              <label for="false">No</label><br></br>
          </RadioButtonRow>

         <div>---------------------------------------------------</div>
            <div>equipo 2</div>
            <Select type="select" name="idEquipo2" {...register("idEquipo2")}>
              {!isFromEdit && <option key={''} value={''}>
                Seleccione un equipo
              </option>}
              {putTeamFirst(matchToEdit?.equipo2?.id).map((data) => {
                  return (
                    <option key={data._id} value={data._id}>
                      {data.nombre}
                    </option>
                  );
              })}
            </Select>
            <ErrorMessage>{errors.idEquipo2?.message}</ErrorMessage> 
            <div>Goles equipo 2</div>
            <Input type="text" name="golesEquipo2" {...register("golesEquipo2")}/>
            <ErrorMessage>{errors.golesEquipo2?.message}</ErrorMessage> 
            <div>Se Presento</div>
            {/* <Input type="boolean" name="sePresentoEquipo2" {...register("sePresentoEquipo2")}/>    */}


            <RadioButtonRow>
              <input type="radio" id="true" name="sePresentoEquipo2" value="true"  {...register("sePresentoEquipo2")}/>
              <label for="true">Si</label><br/>
            </RadioButtonRow>
            <RadioButtonRow>
               <input type="radio" id="false" name="sePresentoEquipo2" value="false" {...register("sePresentoEquipo2")}/>
            <label for="false">No</label><br></br>
            </RadioButtonRow>


          <ErrorMessage>{errorSameTeamMessage && errorSameTeamMessage}</ErrorMessage> 
        {/* <button onClick={() => {alert('Partido agregado con exito!');    }} >Submit</button> */}
        <button>Enviar</button>
      </Form>
    </FormContainer>


  );
};

export default HomeView;