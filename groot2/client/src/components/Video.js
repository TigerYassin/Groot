import React, {Component} from 'react';
import { Container } from 'reactstrap';
import peopleWalkingCropped from './peopleWalkingCropped.mp4';

export class Video extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: peopleWalkingCropped
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }
};
