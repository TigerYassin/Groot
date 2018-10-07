import React, { Component } from 'react';
import {Jumbotron, Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';
// import ahmed from '.img/ahmed.jpg';
import yassin from './img/yassin.jpg';
import amman from './img/amman.jpeg';
import basu from './img/basu.jpg';
import sami from './img/sami.jpg';
import zako from './img/zako.jpg';
import ahmed from './img/ahmed.jpg';


import './WhoWeAre.css'

export class WhoWeAre extends Component {
    render() {
        return( 
            <div className='container'>

                 {/*Our Mission Jumbotron*/}
                 <div id="jumboT">
                    <Jumbotron>
                        <h1 id='bioTitle'>OUR MISSION</h1>
                        <hr className="my-2"/>
                        <p id='bioBody'>
                            We provide an efficient grocery shopping service that optimizes our customers time. Our service allows our customers to select and purchase their items in advance. 
                            We then take those customer selected items and find them at the cheapest prices at the closest stores.
                            By doing so, we are able to save both our customers’ time & money!
                        </p>
                        {/* <Button color="primary" size="lg">Learn more</Button> */}
                    </Jumbotron>
                 </div>

                
                <div id="firstRow">
                                    {/* A group of 3 profiles in one row */}
                    <CardGroup deck>

                        <Card>
                            <CardImage src={yassin} alt="Card image cap" top hover overlay="white-slight"/>
                            <CardBody>
                            <CardTitle tag="h5">Yassin Alsahlani</CardTitle>
                            <CardText>Scrum Master/Project Manager</CardText>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImage src={amman} alt="Card image cap" top hover overlay="white-slight"/>
                            <CardBody>
                            <CardTitle tag="h5">Ammanuel Getenet</CardTitle>
                            <CardText>Lead FrontEnd</CardText>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImage src={sami} alt="Card image cap" top hover overlay="white-slight"/>
                            <CardBody>
                            <CardTitle tag="h5">Samira Ali</CardTitle>
                            <CardText>FrontEnd and UI Designer</CardText>
                            </CardBody>
                        </Card>

                    </CardGroup>

                </div>


                <div id='secondRow'>
                     {/* A group of 3 profiles in one row */}

                    <CardGroup deck>

                        <Card>
                            <CardImage src={basu} alt="Card image cap" top hover overlay="white-slight"/>
                            <CardBody>
                            <CardTitle tag="h5">Basuamlak Woldatsadik</CardTitle>
                            <CardText>Lead FrontEnd and BackEnd</CardText>
     
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImage src={zako} alt="Card image cap" top hover overlay="white-slight"/>
                            <CardBody>
                            <CardTitle tag="h5">Abdirizaq Hussein</CardTitle>
                            <CardText>FrontEnd Developer</CardText>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImage src={ahmed} alt="Card image cap" top hover overlay="white-slight"/>
                            <CardBody>
                            <CardTitle tag="h5">Ahmed Gedi</CardTitle>
                            <CardText>TechLead and BackEnd</CardText>
                            </CardBody>
                        </Card>

                    </CardGroup>
                </div>
            </div>

            );
    }

}
export default WhoWeAre;