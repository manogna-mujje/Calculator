import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Display extends React.Component {
    render() {
        let btnType;
        switch(this.props.value){
            case 'AC':
                btnType = "reset";
                break;
            case '=':
                btnType = "submit";
                break;
            default:
                btnType = "button";
                break;
        }
        return (
            <button className="display" type={btnType} onClick={this.props.onClick}>
            {this.props.value}
            </button>
        );
    }
  }

class Device extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayText: " ",
        };
    }

    handleClick(i){
        const currentText = this.state.displayText;
        if(currentText[currentText.length-1] === '='){
            return;
        }
        const displayText = currentText+i;
        this.setState({
            displayText : displayText,
        })
    }

    renderBtn(i){
        return(
            <Display 
                value = {i}
                onClick = {() => this.handleClick(i)}
            />
        );   
    }

    render(){
        return (
            <div className="device"> 
                <div className="screen"> {this.state.displayText}</div>
                <div className="button-row"> 
                {this.renderBtn(1)}{this.renderBtn(2)}{this.renderBtn(3)}{this.renderBtn('+')} 
                </div>
                <div className="button-row"> 
                {this.renderBtn(4)}{this.renderBtn(5)}{this.renderBtn(6)}{this.renderBtn('-')}
                </div>
                <div className="button-row"> 
                {this.renderBtn(7)}{this.renderBtn(8)}{this.renderBtn(9)}{this.renderBtn('*')}
                </div>
                <div className="button-row"> 
                {this.renderBtn('AC')}{this.renderBtn(0)}{this.renderBtn('=')}{this.renderBtn('/')}
                </div>
            </div>
        );
    }
}

class Calculator extends React.Component {
render(){
    return (
        <div className="calculator">
        <Device />
        </div>
    );
}
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );
  