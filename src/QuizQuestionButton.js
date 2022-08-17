import React, { Component } from "react";

class QuizQuestionButton extends Component{
    constructor(props){
        super(props)
    }
    handleClick(){
      this.props.clickHandler(this.props.b)
    }
  render(){
    return(
        <ul>
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        </ul>
    )
  }
}

export default QuizQuestionButton;