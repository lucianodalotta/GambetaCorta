import React, { useState, useEffect } from 'react'

import LeftArrow from '../../../commons/assets/leftArrow.png'

import {ArrowImg, ActionButton, ErrorMessage} from '../../../commons/styles/styles'
import {Input, Form, FormContainer, RadioButtonRow} from './styles'

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useForm } from "react-hook-form";

const CreateTournamentView = ({onClickBack, onSubmitTournament, onSubmitEditTournament, searchedTournament, isFromEdit, onSubmitState}) => {

  const schema = Yup.object().shape({
    nombre: Yup.string().min(2, 'Invalid').max(50, 'Ingrese un nombre valido').required('Required'),
    categoria: Yup.string().min(2, 'Invalid').max(50, 'Ingrese una categoria valida').required('Required'),
  })


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({mode: 'onBlur', resolver: yupResolver(schema),});

  const onSubmit = (data) => {
    !isFromEdit ? onSubmitTournament(data) : 
    data = {
      ...data, 
      id: searchedTournament._id,
      equipos: searchedTournament.equipos
      
    }
    onSubmitEditTournament(data)
  }; 

  useEffect(() => {
    if(searchedTournament){
      let defaultValues = {};
      defaultValues.nombre = searchedTournament.nombre;
      defaultValues.categoria = searchedTournament.categoria;
      defaultValues.hayFixtureDisponible = searchedTournament.hayFixtureDisponible  ? 'true' : 'false';;
      defaultValues.numeroUltimaFecha = searchedTournament.numeroUltimaFecha
      reset({ ...defaultValues });
    }
  }, []);


 
  return (
    
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ActionButton onClick={onClickBack}><ArrowImg src={LeftArrow}/>Volver al menu de torneos</ActionButton>
        <div>Nuevo torneo</div>
        <div>
           <div>Nombre del torneo</div>
           <Input type="text" name="nombre" {...register("nombre",{required:true})}/> 
           <ErrorMessage>{errors.nombre?.message}</ErrorMessage> 
        </div> 

        <div>Categoria</div>
        <Input type="text" name="categoria" {...register("categoria")}/>
        <ErrorMessage>{errors.categoria?.message}</ErrorMessage>
        <div>Numero ultima fecha</div>
        <Input type="text" name="numeroUltimaFecha" {...register("numeroUltimaFecha")}/>
        <div>Hay Fixture Disponible</div>
        <RadioButtonRow>
          <input type="radio" id="true" name="hayFixtureDisponible" value="true"  {...register("hayFixtureDisponible")}/>
          <label for="true">Si</label><br/>
        </RadioButtonRow>
        <RadioButtonRow>
           <input type="radio" id="false" name="hayFixtureDisponible" value="false" {...register("hayFixtureDisponible")}/>
        <label for="false">No</label><br></br>
        </RadioButtonRow>
        <button>Submit </button>

      </Form>
    </FormContainer>


  );
};

export default CreateTournamentView;