import { Component } from 'react'
import quizQuestion from "./quizQuestion.json"

export default class Quiz extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }

    handleCount = (value) => {
        value == "left" ? this.state.count != 0 ? this.setState({count:this.state.count - 1}) : this.setState({count: quizQuestion.length - 1}):this.state.count == quizQuestion.length - 1 ? this.setState({count:0}) : this.setState({count:this.state.count+1})
    }


    render() {
        return (
        <div id='quiz'>
            <h1>Question</h1>
            <p id='question-number'>{this.state.count + 1} of 15</p>
            <p>{quizQuestion[this.state.count].question}</p>
            <div className='options'>
                <button>{quizQuestion[this.state.count].optionA}</button>
                <button>{quizQuestion[this.state.count].optionB}</button>
                <button>{quizQuestion[this.state.count].optionC}</button>
                <button>{quizQuestion[this.state.count].optionD}</button>
            </div>
            <div className='navigation'>
                <button id='prevBtn' onClick={() => {this.handleCount("left")}}>Previous</button>
                <button id='nextBtn' onClick={() => {this.handleCount("right")}}>Next</button>
                <button id='quitBtn'onClick={() => {confirm("Are you sure you want to quit?")}}>Quit</button>
            </div>
        </div>
        )
    }
}
