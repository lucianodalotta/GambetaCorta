import React from 'react';
import {Column, Row, Image, Text, Title,Body} from './styles'
import vector1 from '../../../commons/resources/vector1.svg'
import vector2 from '../../../commons/resources/vector2.svg'
import vector3 from '../../../commons/resources/vector3.svg'
import vector4 from '../../../commons/resources/vector4.svg'

const ItemList = () => {
  return (
    <Body>
      <Column>
        <Title>PORQUÉ ELEGIRNOS</Title>
        <Row>
          <Image
            src={vector1}
            alt="vector"
          />
          <Text>
            El torneo se realizará los Domingos en Open Gallo (Gallo 241) un complejo de primer nivel con excelente ubicación y acceso
          </Text>
        </Row>
        <Row>
          <Image
            src={vector2}
            alt="vector"
          />
          <Text>
            El campeón y el subcampeón tendrán la inscripción gratuita para el próximo torneo junto con importantes premios y las tan esperadas copas de Gambeta Corta, además entregaremos un reconocimiento al jugador del partido en todos los encuentros
          </Text>
        </Row>
        <Row>
          <Image
            src={vector3}
            alt="vector"
          />
          <Text>
            Tendrás acceso a la tabla de posiciones, fixture actualizado, fotos de los partidos y más contenido en nuestras redes sociales
          </Text>
        </Row>
        <Row>
          <Image
            src={vector4}
            alt="vector"
          />
          <Text>
            Nos distinguimos y destacamos por la atención dedicada con cada uno de los equipos para que puedan disfrutar al máximo de cada fecha del torneo.
          </Text>
        </Row>
      </Column>
    </Body>
  );
};

 export default ItemList;