import React from 'react';
import Display from './Display';
import * as API from '../APIs/API';

class Device extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            leftOperand: "",
            rightOperand: "",
            operation: "",
            displayText:"",
            isOp: false,
        };
    }


    handleClick(i){
        const currentText = this.state.displayText;
        var leftOperand = this.state.leftOperand;
        var rightOperand= this.state.rightOperand;
        var operation= this.state.operation;
        var isOp = this.state.isOp;



        if(i === '+' || i === '-' || i === '*' || i === '/'){
            if(isOp) {
                document.getElementById("error").innerHTML = "Invalid Expression";
            }
            isOp = true;
            leftOperand = currentText;
            operation = i;
 //           console.log(`Left Operand: ${leftOperand}`);
//          console.log(`Operation: ${operation}`);

        } else if(i === '='){
            if(isOp) {
                document.getElementById("error").innerHTML = "Invalid Expression";
            }
            isOp = false;
            leftOperand = leftOperand.toString();
            rightOperand = currentText.slice(leftOperand.length + 1);
  //          console.log(`Right Operand: ${rightOperand}`);
            API.calculate(leftOperand, rightOperand, operation, this);

        } else if(i === 'AC'){
            this.setState({
                leftOperand: "",
                rightOperand: "",
                operation: "",
                displayText:"",
            });

            document.getElementById("error").innerHTML = "";
            return;

        } else {
            isOp = false;
        }
        var displayText = currentText+i;
        this.setState({
            displayText : displayText,
            leftOperand: leftOperand,
            rightOperand: rightOperand,
            operation: operation,
            isOp: isOp,
        });
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
                {this.renderBtn(1)}    {this.renderBtn(2)} {this.renderBtn(3)} {this.renderBtn('+')} 
                </div>
                <div className="button-row"> 
                {this.renderBtn(4)}    {this.renderBtn(5)} {this.renderBtn(6)} {this.renderBtn('-')}
                </div>
                <div className="button-row"> 
                {this.renderBtn(7)}    {this.renderBtn(8)} {this.renderBtn(9)} {this.renderBtn('*')}
                </div>
                <div className="button-row"> 
                {this.renderBtn('AC')} {this.renderBtn(0)} {this.renderBtn('=')} {this.renderBtn('/')}
                </div>
                <div id="error"> </div>
            </div>
        );
    }
}

export default Device;