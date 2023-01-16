import React from 'react';

import { Box, Body, Title, Line, Text, LinkTo } from './styles'


const TextBox = () => {

  return (
    <Body>
        <Box>
          <Title>Quiénes somos</Title>
          <Line />
          <Text>
          Torneo de fútbol 5 Gambeta Corta.
          <br/>
          <br/>
          No te pierdas la oportunidad de jugar en el torneo con más crecimiento de toda la Capital Federal y de gambetear con nosotros.
          <br/>
          <br/>
          Arma ya tu equipo!! Para la inscripción o consultas escribinos por mensaje privado.
          Domingo a puro fútbol, amigos y gambetas.
          <br/>
          <br/>
          #EstoEsGambetaCorta
          </Text>
          <LinkTo to="/AboutUs">Ver mas</LinkTo>
        </Box>
    </Body>
  );
};

 export default TextBox;