import React ,{Component} from "react";
import '../css/Player.css';

export default class Player extends Component {
  constructor(props){ 
    super(props);
    this.memory ;
    this.info = <div className="AudioPlayer__info"></div>;
    this.track = null;
    this.controls =<div>select a track</div>

    //create audio element
  }
  createPlayer(){
    this.controls = 
    (<div>
      <button className="AudioPlayer__reload" onClick={this.removeTime.bind(this)}><i  className="icon-fast-bw"></i></button>
      <button className="AudioPlayer__pause" onClick={this.onPause.bind(this)}><i className="icon-pause"></i></button>
      <button className="AudioPlayer__play" onClick={this.onPlay.bind(this)}><i className="icon-play"></i></button>
      <button className="AudioPlayer__reload" onClick={this.onReload.bind(this)}><i  className="icon-spin3"></i></button>
      <button className="AudioPlayer__reload" onClick={this.addTime.bind(this)}><i  className="icon-fast-fw"></i></button>
      <progress className="AudioPlayer__progress"></progress>
    </div>);
    this.track.setAttribute("preload", "auto" );
    this.track.addEventListener("timeupdate", this.onTimeUpdate.bind(this) );
    //this.track.addEventListener("loadeddata", this.onCanPlay.bind(this) );
  }
  createInfo(){
    this.info =
    (<div className="AudioPlayer__info">
      <img alt={this.props.current.name} src={this.props.current.image}/>
      <div className="AudioPlayer__content">{this.props.current.name}</div>
    </div>);
  }
  onPlay(e){
    this.track.play();
  }
  onPause(e){
    this.track.pause();
  }
  onCanPlay(e){
    this.track.currentTime = 30;
  }
  onReload(e){
    this.track.load();
  }
  addTime(e){
    this.track.currentTime += 5;
  }
  removeTime(e){
    this.track.currentTime -= 5;
  }
  onTimeUpdate(e){
    console.log(this.track.currentTime);

    //console.log(document.querySelector(".AudioPlayer__progress").value);
    document.querySelector(".AudioPlayer__progress").value = this.track.currentTime / this.track.duration;
  }
  render(){
    if(!this.props.current){
      return (
          <div>
          </div>
      )
    }
    else{
      //if first time
      if(!this.track){
        this.track = new Audio(this.props.current.audiodownload);
        this.createPlayer();
        this.createInfo();
        this.memory = this.props.current;
        this.track.currentTime = 30;
        this.track.play();
        
        //this.track.play();
      }
      //else second time 
      else if(this.memory !== this.props.current ){
        this.createInfo();
        this.track.setAttribute('src',this.props.current.audiodownload );
        this.memory = this.props.current;
        this.track.currentTime = 30;

        this.track.play();
      }
      //if no change
      else{
        //do nothing
      }      
    }
    return (
        <div className="AudioPlayer" >
            {this.info}
            {this.controls}
        </div>
    )
  }
}