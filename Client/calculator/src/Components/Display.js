import React from 'react';

class Display extends React.Component {
    render() {
        let btnType;
        switch(this.props.value){
            case '=':
                btnType = "submit";
                break;
            default:
                btnType = "button";
                break;
        }
        return (
            <button className="display" type={btnType} ref= {this.props.value} onClick={this.props.onClick}>
            {this.props.value}
            </button>
        );
    }
  }

  export default Display;