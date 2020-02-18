import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"


//Funciones en JS (const, let: cambian)
const Facts = () => {
  return (
    //Este es el contenedor mundial
    <>
      <Container id="sabiasQue">
        <Row>
          <Col md={12}>
            <h2>¿Sabías esto?</h2>
            <h5>Aquí encontrarás algunos datos curiosos que quizá nunca te habías preguntado antes</h5>
          </Col>
          <Col md={4}>

          </Col>
          <Col md={8}>
            <div class="contenido-sq">
              <div>
                <h3>¿Por qué el jabón hace espuma?</h3>
                <p>Contenido</p>
                <Button variant="primary">Leer más</Button>
              </div>
              <div>
                <h3>¿Es la espuma realmente importante?</h3>
                <p>Contenido</p>
                <Button variant="primary">Leer más</Button>
              </div>
              <div>
                <h3>¿Qué pasa en las plantas de tratamiento de aguas residuales?</h3>
                <p>Contenido</p>
                <Button variant="primary">Leer más</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Facts;
