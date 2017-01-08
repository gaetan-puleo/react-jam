import React ,{Component} from "react";
import '../css/Player.css';

export default class Player extends Component {
  constructor(props){ 
    super(props);
    this.memory ;
    this.track = null;
    this.controls =<div>select a track</div>

    //create audio element
  }
  createPlayer(){
    this.controls = 
    (<div >
      <button className="AudioPlayer__play" onClick={this.onPlay.bind(this)}><i className="icon-play"></i></button>
      <button className="AudioPlayer__pause" onClick={this.onPause.bind(this)}><i className="icon-pause"></i></button>
      <button className="AudioPlayer__reload" onClick={this.onReload.bind(this)}><i  className="icon-spin3"></i></button>
    {/* <progress className="AudioPlayer__progress"></progress>*/}
    </div>);
    this.track.addEventListener("timeupdate", this.onTimeUpdate.bind(this) );
  }
  onPlay(e){
    this.track.play();
  }
  onPause(e){
    this.track.pause();
  }
  onReload(e){
    this.track.load();
  }
  onTimeUpdate(e){
    document.querySelector(".AudioPlayer__progress").value = this.track.currentTime / this.track.duration;
  }
  render(){
    if(!this.props.current){
    }
    else{
      //if first time
      if(!this.track){
        this.track = new Audio(this.props.current.audiodownload);
        this.createPlayer();
        this.memory = this.props.current;
        this.track.play();
      }
      //else second time 
      else if(this.memory !== this.props.current ){
        this.track.setAttribute('src',this.props.current.audiodownload);
        this.memory = this.props.current;
        this.track.play();
        
      }
      else{
        //do nothing
      }
            
    }
    return (
        <div className="AudioPlayer">
            {this.controls}
        </div>
    )
  }
}