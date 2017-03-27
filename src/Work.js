import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {
  render() {
    return <div className="columns">
            <WorkSample title="Click here to see this project" link="https://manpreetmondair.github.io/d1-use-gulp-sass/" screenshot="./img/screenshot1.1.png"/>
            <WorkSample title="Click here to see this project" link="https://manpreetmondair.github.io/d2-recreate-responsive-blog/"
            screenshot="./img/image2.2.jpg" />
            <WorkSample title="Click here to see this project" link="https://manpreetmondair.github.io/Sample-Note/" screenshot="./img/screenshot3.png" />
        </div>;
        
  }
}

export default Work;

        