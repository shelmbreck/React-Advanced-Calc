import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    answer: '0',
    error: '',
    storedNum: '',
    currentNum: '',
    operator: ''
  }

  clear = () => {
    this.setState({
      answer: '0',
      error: '',
      storedNum: '',
      currentNum: '',
      operator: ''
    })
  }

  setOp = (e) => {
    if(this.state.operator) {
      if(this.state.storedNum && !this.state.currentNum) {
        this.setState({operator: e.target.value, error: ''})
      } else if (this.state.storedNum && this.state.currentNum && this.state.currentNum === ''{
        this.getAnswer()
      } else {
        this.setState({error: 'Operator was already set'})
      }
    } else if(!this.state.currentNum && e.target.value === '-') {
      this.setState({error: '', currentNum: e.target.value })
    } else if(!this.state.currentNum) {
      this.setState({error: 'A numerical value must be set first'})
    } else {
      this,setState({
        operator: e.target.value,
        storedNum: this.state.currentNum,
        currentNum: '',
        error: ''
      })
    }
  }

  setNum = (e) => {
    if(e.target.value !== '0' || this.state.currentNum !== '') {
      this.setState({ currentNum: this.state.currentNum + e.target.value })
    }
  }

  setDot = () => {
    if(!this.state.currentNum || this.state.currentNum === '-') {
      this.setState({currentNum: this.state.currentNum + '0.1'})
    } else if(this.state.currentNum.indexOf('.') === -1) {
      this.setState({currentNum: this.state.currentNum + '.'})
    }
  }

  pm = () => {
    console.log(plus/minus)
  }

  getAnswer = () => {
    let answer = this.calculate() 
    if(typeof answer === 'number') {
      this.setState({
        error: '',
        answer: answer,
        storedNum: '',
        currentNum: 'answer',
        operator: ''
      })
    }
  }


  calculate = () => {
    console.log("calculate and set answer")
    if(!state.storedNum || !this.state.operator) {
      this.setState({error: 'Please add a valid expression'})
    } else if(!this.state.currentNum) {
      this.setState({error: 'Please provide a second number'})
    }
    else {
      let answer = ''
      let num1 = Number(this.state.storedNum)
      let num2 = Number(this.state.currentNum)
      console.log(typeof num1)

      if(typeof num1 === 'number' && typeof num2 === 'number') {
        switch(this.state.operator) {
          case '+': return num1 + num2
          case '-': return num1 - num2
          case '*': return num1 * num2
          case '/': return num1 / num2
          case '%': return num1 % num2
          }
        } else {
          this.setState({
            return 'Invalid expression'
          })
        }
      }

  render () {
    return (
      <div className="calc">
        <div>
          History: 
          {this.state.storedNum || this.state.currentNum } 
          {this.state.operator}
          {this.state.operator ? this.state.currentNum : ''}
        </div>
        <div className="calc-row">
          <div className="calc-disp">
            {this.state.answer}
          </div>
        </div>
        <div className="calc-row">
          <button className="btn num top-row"onClick={this.clear}>C</button>
          <button className="btn num top-row"onClick={this.pm}>+/-</button>
          <button className="btn num top-row"onClick={this.setOp} value="%">%</button>
          <button className="btn orange" onClick={this.setOp} value="/">/</button>
        </div>
        <div className="calc-row">
          <button className="btn num" onClick={this.setNum} value="7">7</button>
          <button className="btn num" onClick={this.setNum} value="8">8</button>
          <button className="btn num" onClick={this.setNum} value="9">9</button>
          <button className="btn orange" onClick={this.setOp} value="*">*</button>
        </div>
        <div className="calc-row">
          <button className="btn num" onClick={this.setNum} value="4">4</button>
          <button className="btn num" onClick={this.setNum} value="5">5</button>
          <button className="btn num" onClick={this.setNum} value="6">6</button>
          <button className="btn orange" onClick={this.setOp} value="-">-</button>
        </div>
        <div className="calc-row">
          <button className="btn num" onClick={this.setNum} value="1">1</button>
          <button className="btn num" onClick={this.setNum} value="2">2</button>
          <button className="btn num" onClick={this.setNum} value="3">3</button>
          <button className="btn orange" onClick={this.setOp} value="+">+</button>
        </div>
        <div className="calc-row">
          <button className="btn num" onClick={this.setNum} value="0">0</button>
          <button className="btn num" onClick={this.setDot} value=".">.</button>
          <button className="btn orange end" onClick={this.getAnswer} value="=">=</button>
        </div>
      </div>
    )
  }
}

export default App;