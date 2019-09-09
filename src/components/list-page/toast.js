import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toast extends Component {
  constructor(props){
    super(props);
    if(this.props.showToast)
      
  }
  notify = () => toast("Wow so easy !");

  render(){
    return (
      <div>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
}

export default Toast;