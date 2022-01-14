import React, { Component } from "react";
import "./Styles/UserBox.css";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";

export default class UserBox extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name);
    let {
      name,
      email,
      bio,
      headline,
      githublink,
      twitterlink,
      instagramlink,
      linkedinlink,
      imagelink,
    } = this.props;
    this.state = {
      name,
      email,
      bio,
      headline,
      githublink,
      twitterlink,
      instagramlink,
      linkedinlink,
      imagelink,
    };
    console.log(this.state.imagelink);
  }
  render() {
    return (
      <div className="user-box">
        <div className="img-box">
          <img
            src={this.state.imagelink}
            alt="img"
            className="propic"
          ></img>
        </div>
        <div className="content-box">
          <p className="name">{this.state.name.toUpperCase()}</p>
          <p className="headline">{this.state.headline}</p>
          <div className="socialbox">
            <a href={this.state.twitterlink} target='_blank' rel="noopener noreferrer"><img src={twitter} alt="" /></a>
            <a href={this.state.githublink} target='_blank' rel="noopener noreferrer"><img src={github} alt="" /></a>
            <a href={this.state.linkedinlink} target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
            <a href={this.state.instagramlink} target='_blank' rel="noopener noreferrer"><img src={instagram} alt="" /></a>
          </div>
          <p className="bio">{this.state.bio}</p>
        </div>
      </div>
    );
  }
}