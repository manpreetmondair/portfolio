import React, { Component } from 'react';
import {Link } from 'react-router';

class WorkSample extends Component {

  render(){
      return <div className="left">
            <div className="row">
                <div className="column"> 
                 <div className="panel panel-danger col-sm-5">
                    <div className="panel-heading row">
                        <h3 className="panel-title "><center>Chirp</center></h3>
                            </div>
                            <div className="panel-body">
                                <img src= "./img/Chirp.png" alt="Smiley face" height="20" width="20"/>
                                </div>
                            </div>
                            <div className="col-sm-4 col-sm-offset-1">
                                <br/>
                                <h3 className="fonting">Chirp</h3>
                                
                                <p>This project is just like another social apps, where you can add users into a users list and follow or unfollow the users and also can send messages to them.</p>
                        <p> 
                            Click <a href="https://manpreetmondair.github.io/w5-weekend-assignment">
                            here 
                            </a> to view the project live or go straight on code on
                            <a href="https://github.com/manpreetmondair/w5-weekend-assignment"> GitHub</a>
                            </p>
                            <h3>Build Summary</h3>
                            <p>HTML, CSS, Javascript, Bootstrap</p>

                                         </div>
                                    </div>
                                </div>
                            <br/>


                        <div className="row">
                            <div className="column"> 
                                <div className="panel panel-danger col-sm-5">
                                    <div className="panel-heading row">
                                    <h3 className="panel-title"><center>Etsy</center></h3>
                                        </div>
                                        <div className="panel-body">
                                        <img  className="chirp" src= "./img/etsy.png" alt="Smiley face" height="20" width="20"/>
                                        </div>
                                    </div>
                                <div className="col-sm-5 col-sm-offset-1">
                            <br/>
                                    <h3 className="fonting">Etsy</h3>
                                    <p>Etsy is a commerce platform. It's' mission is to reimagine commerce in ways that build a more fulfilling and lasting world.
                                    </p>
                                   
                                    <p> 
                            Click <a href="https://manpreetmondair.github.io/Remake-etsy/">
                          here </a> to view the project live or go straight on code on 
                        <a href="https://github.com/manpreetmondair/Remake-etsy"> GitHub</a>
                            </p>
                             <h3>Build Summary</h3>
                            <p>HTML, CSS, Javascript, Bootstrap</p>
                                    </div>
                                </div>
                            </div>


                        <div className="row">
                            <div className="column"> 
                                <div className="panel panel-danger col-sm-5">
                                    <div className="panel-heading row">
                                     <h3 className="panel-title"><center>Lensflare</center></h3>
                                    </div>
                                    <div className="panel-body">
                                    <img  className="chirp" src= "./img/lensflare.png" alt="Smiley face" height="20" width="20"/>
                                        </div>
                                            </div>
                                    <div className="col-sm-5 col-sm-offset-1">
                                    <br/>
                                        <h3 className="fonting">LensFlare(My Final Project)</h3>
                                        <p>LensFlare is an application that arose out of the need to organize photo shoots for publishing editors, authors, and photographers. Users are able to create projects, add assets, upload sample images, upload photo shoot results, and make selections. They are able to invite collaborators so that everyone has access to the same information. LensFlare aims to consolidate the entire process into a single location. </p>

                                        <p> 
                            Click &nbsp;<a href="https://lensflare.herokuapp.com/">
                             here 
                            </a> to view the project live or go straight on code on
                            <a href="https://github.com/RagensFantabulousIdea"> GitHub</a>
                            </p>
                            <h3>Build Summary</h3>
                            <p>HTML, CSS, React, Bootstrap</p>

                                        </div>
                                    </div>
                                </div>
                         </div>
        
    };

}

export default WorkSample;


// <div class="panel panel-default">
//   <div class="panel-heading">
//     <h3 class="panel-title">Panel title</h3>
//   </div>
//   <div class="panel-body">
//     Panel content
//   </div>
// </div>


// return <div className="column" onMouseEnter={() => this.setState({style: 'notification', currentView: 'sample-hover'})} onMouseLeave={() => this.setState({style: '', currentView: 'sample-view'})}>
        
//             {this.state.currentView === 'sample-view' ? <div className="section">
//             <h2 className="text-center headingstyle">{this.props.heading}</h2>
//             <p>{this.props.explanation}</p>
//               <div className= "sampletitle">
//                 <b> <a href={this.props.link}>{this.props.title}</a></b></div>  <br/>
//                  <p className={this.state.style}>
//                     <img className="screen" src={this.props.screenshot} alt="project"/>
//                 </p>
               
//             </div> : <div className="section">
//               <div className="sampletitle">
//                 <b> <a href={this.props.link}>{this.props.title}</a></b></div>  <br/>
//                  <p style={{height: '518px', backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url(${this.props.screenshot})`, backgroundSize: 'cover'}}>
//                     <a href={this.props.link}><h3>Click here to see it</h3></a>
//                 </p>
//             </div> }


//         </div>
    


