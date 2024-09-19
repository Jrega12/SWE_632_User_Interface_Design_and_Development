import React, { Component } from 'react';
import '../styles/Resume.scss';
import RightContent from './RightContent';
import LeftContent from './LeftContent';


class Resume extends Component {
  render() {
    return (
      <div className='resume' id='resume'>
        <LeftContent data={this.props.data} color={this.props.color} />
      <RightContent data={this.props.data} color={this.props.color} />
      
   
      </div>
    );
  }
}

export default Resume;
