import React from 'react';
import vectorWts from '../../../commons/resources/vectorWts.svg'
import vectorIg from '../../../commons/resources/vectorIg.svg'
import {Body, Head, Image,Subtitle, Box, Title, Row, ButtonWts, ButtonIg} from './styles'

const Contact = () => {
  const handleClick = (myLink) => {
    window.location.href=myLink;
  }
  return (
    <Body>
      <Box>
        <Head>
          <Title>¿Qué estas esperando?</Title>
          <Subtitle>¡Sumate ahora!</Subtitle>
        </Head>
        <Row>
          <ButtonIg onClick = {() => handleClick('https://www.instagram.com/torneogambetacorta/')}>
          <Image
            src={vectorIg}
            alt="vector"
          />
          ESCRIBINOS</ButtonIg>
        </Row>
      </Box>
    </Body>
  );
};

 export default Contact;