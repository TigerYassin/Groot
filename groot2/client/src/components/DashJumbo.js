import React from 'react';
import './DashJumbo.css'
import { Jumbotron, Container, Progress, Row, Col, InputGroup, InputGroupAddon, Button, Input  } from 'reactstrap';
import {FormsPage} from './FormsPage';



// export class DashJumbo extends React.Component {
export const DashJumbo = (props) => {
    // const user = this.props.user;
  return (
    <div className="dash">
      <Jumbotron fluid>
        <Container fluid>
        <div class="profile">
          <img src="http://www.yassinit.me/img/IMG5_2.JPG"/>
        </div>
        <div class="userWelcome">
          <h1 className="display-3">Your Dashboard, User</h1>
        </div>
        </Container>
      </Jumbotron>
      <Container>
        <div className="text-center"><Progress color="success" value="25" /></div>
      </Container>

      <Container>
        <h2>25% Until Goal of 100 Points</h2>
      </Container>

    </div>
  );
};

// <div>
// <Row>
//   <Col xs="10">
//     <InputGroup>
//       <InputGroupAddon addonType="prepend">
//       <Button>To the Left!</Button>
//       </InputGroupAddon>
//     <Input />
//     </InputGroup>
//   </Col>
//   <Col xs="2"><Button color="secondary">Send</Button></Col>
// </Row>
// </div>

// export default DashJumbo;