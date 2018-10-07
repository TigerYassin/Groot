import React, {Component} from 'react';
import Cooking from './Cooking.mp4';
import { Container, Row, Col } from 'reactstrap';
import './Video.css'

export class Video extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: Cooking
        }
    }

    render () {
        return (
          <div>
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay-desc">
              <Row className="left">
                <Col><h1 className="white-text font-bold">GROOT</h1></Col>
              </Row>
              <Row className="below">
                <Col><p className="px-5 pb-4">Optimized Shooping for the Savvy Shopper</p></Col>
              </Row>
              <Row className="last">
                <Col><button type="button" className="btn btn-lg btn-rounded hover" >Sign Up</button></Col>
              </Row>
            </div>
          </div>
        )
    }
};
