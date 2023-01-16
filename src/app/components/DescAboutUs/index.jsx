import React from 'react';
import {Column, Row, Image, Text, Title,Body, Content, TextContainer} from './styles'

import imgEdit1 from'../../../commons/resources/imgEdit1.png'
import imgEdit2 from'../../../commons/resources/imgEdit2.png'
import imgEdit3 from'../../../commons/resources/imgEdit3.png'



const ItemList = () => {
  return (
    <Body> 
   <br/>
      <Content>
        <TextContainer>
          <Text >
          <Title >Quienes somos</Title>
          No te pierdas la oportunidad de jugar en el torneo con más crecimiento de toda la Capital Federal y de gambetear con nosotros.
          <br/>
          <br/>
        Contamos con experiencia en la realización de torneos de fútbol de todas las categorías tanto masculino como femenino.
        Nos distinguimos y destacamos por la atención dedicada con cada uno de los equipos para que puedan disfrutar al máximo de cada fecha del torneo.
          <br/>
          <br/>
        También nos hace diferentes nuestra cultura de tener siempre los mejores precios ya que nuestra ideología es que nadie se quede afuera del torneo por motivos económicos.
          No te quedes afuera!
          </Text>
        </TextContainer>

        <Column>
          <Row>
            <Image
              src={imgEdit1}
              alt="vector"
            />
            <Text>
              El campeón y el subcampeón tendrán la inscripción gratuita para el próximo torneo junto con importantes premios y las tan esperadas copas de Gambeta Corta, además entregaremos un reconocimiento al jugador del partido en todos los encuentros.
            </Text>
          </Row>
          <Row>
            <Image
              src={imgEdit2}
              alt="vector"
            />
            <Text>
            Domingos en Open Gallo (Gallo 241) 
            </Text>
          </Row>
          <Row>
            <Image
              src={imgEdit3}
              alt="vector"
            />
            <Text>
              Tabla de posiciones, fixture actualizado, fotos de los partidos y más contenido en nuestras redes sociales.
            </Text>
          </Row>
  
        </Column>
      </Content>
     < br />
      
    </Body>
  );
};

 export default ItemList;