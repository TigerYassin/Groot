import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbo.css'

export const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <div class="jumbotron">
        <video id="video-background" preload muted autoplay loop>
          <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
        </video>
        </div>
      </Jumbotron>
    </div>
  );
};
