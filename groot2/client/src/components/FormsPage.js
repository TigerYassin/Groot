import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter, Modal, ModalHeader } from 'mdbreact';


export class FormsPage extends React.Component  {

    constructor(props){
        super(props);
        this.state = ({
            modal: false,
            user : '',
            pass:'',
            name: '',
            num: ''
        });

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange(event) {
        this.setState({
            user: event.target.value
            
        });

    }

    handlePassChange(event){
        this.setState({
            pass: event.target.value
        });
    }


    handleNameChange(event){
      this.setState({
          name: event.target.value
      });
  }


  handleNumChange(event){
    this.setState({
        num: event.target.value
    });
}


    handleSubmit(e)  {

      var dashboard = "dashboard";
      window.location.href ="http://localhost:3000/"+dashboard;
      // window.open("http://localhost:3000/dashboard");
        
        // alert('A user was submitted '+ this.state.user +' and pass: '+ this.state.pass + ' and name is '+ this.state.name+ ' and number is ' + this.state.num);
        e.preventDefault();
    }

  render() {
    return(
      <Container>
        {/* <DashJumbo user = {this.state.user} onChange = {this.handleChange}/> */}
          <li onClick = {this.toggle}>Sign Up</li>
          <Modal isOpen = {this.state.modal} toggle = {this.toggle}>
          
          
        <section className="form-dark">
          <Row>
            <Col md="5">
              <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)', width: '35rem'}}>
                <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                  <div className="text-center">
                    <h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a className="green-text font-weight-bold"><strong> UP</strong></a></h3>
                  </div>
                  <Input label = "Your Name" type = "text" value = {this.state.name} onChange = {this.handleNameChange} />
                  <Input label = "Your Number" type = "text" value = {this.state.num} onChange = {this.handleNumChange} />
                  <Input label="Your email"   type="text" value = {this.state.user} onChange = {this.handleChange}  />
                  <Input label="Your password"  type="password" value ={this.state.pass} onChange = {this.handlePassChange} />
                  <div className="md-form pb-3">
                    <div className="form-check my-4">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />
                      <label className="form-check-label white-text" htmlFor="defaultCheck17">Accept the<a href="#" className="green-text font-weight-bold"> Terms and Conditions</a></label>
                    </div>
                  </div>
                  <Row className="d-flex align-items-center mb-4">
                    <div className="text-center mb-3 col-md-12">
                      <Button color="success" rounded type="button" className="btn-block z-depth-1" onClick={this.handleSubmit} ><Route path="/dashboard" component={Dashboard}/>Submit</Button>
                    </div>
                  </Row>
                  <Col md="12">
                    <p className="font-small white-text d-flex justify-content-end">Already have an account? <a href="#" className="green-text ml-1 font-weight-bold"> Sign In</a></p>
                  </Col>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
        </Modal>
        
      </Container>
    );
  }
};

export default FormsPage;