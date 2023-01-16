import React, { useState, useEffect } from 'react'

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { set, useForm } from "react-hook-form";

import LeftArrow from '../../../commons/assets/leftArrow.png'

import {ArrowImg, ActionButton, ErrorMessage} from '../../../commons/styles/styles'

import {Input, Form, FormContainer} from './styles'

const FormNewTeam = ({onClickBack, onSubmitTeam, onSubmitEditTeam, teamToEdit}) => {

  const isFromEdit = Object.keys(teamToEdit).length > 0

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
      if(!isFromEdit)
      {
        onSubmitTeam(data)
      }
      else{
        onSubmitEditTeam(data,teamToEdit.escudo)
      }
  }; 

  useEffect(() => {
    if(isFromEdit){
      let defaultValues = {};
      defaultValues.nombre = teamToEdit.nombre;
      defaultValues.categoria = teamToEdit.categoria;
      reset({ ...defaultValues });
    }
  }, []);

  console.log(errors,"errors")
  
  return (
    <FormContainer>
      <ActionButton onClick={onClickBack}><ArrowImg src={LeftArrow}/>Atras</ActionButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cargar Equipo</h2>
        
        <div>Nombre</div>
        <Input type="text" id="nombre" name="nombre" {...register("nombre",{required:true})}/>
        <ErrorMessage>{errors.nombre?.message}</ErrorMessage> 
        <div>Categoria</div>
        <Input type="text" name="categoria" {...register("categoria")}/>
        <ErrorMessage>{errors.categoria?.message}</ErrorMessage> 
        <div>Escudo</div>
        <Input type="file" name="escudo" {...register("escudo")} />
        <div>{teamToEdit.escudo && 'escudo guardado: ' + teamToEdit.escudo}</div>
        <button>Enviar</button>

       
      </Form>
    </FormContainer>


  );
};

export default FormNewTeam;