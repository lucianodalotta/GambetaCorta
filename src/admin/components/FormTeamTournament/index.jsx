import React from 'react';

import LeftArrow from '../../../commons/assets/leftArrow.png'

import {ArrowImg, ActionButton} from '../../../commons/styles/styles'

import {Input, Form, FormContainer, Select} from './styles'

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useForm } from "react-hook-form";

const FormNewTeam = ({allTeams, onClickBackAddNewTeam, onSubmitAssignTeamTournament}) => {

  const schema = Yup.object().shape({
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode: 'onBlur', resolver: yupResolver(schema),});

  const onSubmit = (data) => {
    onSubmitAssignTeamTournament(data)
  }; 

  return (
    <FormContainer>
      <ActionButton onClick={onClickBackAddNewTeam}><ArrowImg src={LeftArrow}/>Atras</ActionButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Agregar Equipo</h2>
        <Select type="select" name="equipoId" {...register("equipoId")}>
          {allTeams.map((data) => {
              return (
                <option key={data._id} value={data._id}>
                  {data.nombre}
                </option>
              );
          })}
        </Select>
        {/* <button onClick={() => {alert('Equipo agregado con exito');    }} >Agregar </button> */}
        <button>Agregar </button>
      </Form>
    </FormContainer>


  );
};

export default FormNewTeam;