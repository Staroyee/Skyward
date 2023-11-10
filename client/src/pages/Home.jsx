import { Container, Row, Col } from "react-bootstrap";

const styles = {
  textStyle: {
    color: 'white',
    textAlign: 'left',
  },
  containerStyle: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '75vh', // Ensure the container takes the full height of the viewport
  },
}

function Home() {
  return (
    <>
      <Container style={styles.containerStyle}>
        <Row>
          <Col xs={6} style={styles.textStyle}>
            <h1>SKYWARD</h1>
            <h3>Look to the sky and see the satellites above, track their movements and get notified when they are visible!</h3>
          </Col>
          <Col xs={6} style={styles.textStyle}></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;
