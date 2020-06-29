import React, {Component} from 'react';

import classes from './Calculator.module.css';
import Aux from '../hoc/Aux';
import Buttons from '../components/Buttons/Buttons';
import Screen from '../components/Screen/Screen';

class Calculator extends Component {
    state = {
        firstValue: '',
        secondValue: '',
        operator: null,
        result: null
    }

    clickHandler = (option) => {
        const paramFunction = (option, param) => {
            const updateState = (option, param) => {
                this.setState((prevState, props) => {
                    return {
                        [param]: prevState[param] + option.value
                    }
                });
            }

            if (option.value === '.'){
                if (this.state[param] === ''){
                    this.setState({[param]: '0.'});
                }else{
                    if (this.state[param].indexOf('.') === -1){
                        updateState(option, param);
                    }
                }
            } else if (option.value === '0') {
                if (this.state[param] !== '') {
                    updateState(option, param);
                }
            } else {
                updateState(option, param);
            }
        }

        const updateOperator = (operator) => {
            this.setState({operator});
        }

        const calculation = (firstValue, secondValue, operator) => {
            // let result = 0;
            if(secondValue !== null){
                let result = eval(Number(firstValue) + operator + Number(secondValue));
                console.log(result); 
            }
        }

        if(option.type === 'number'){
            if(this.state.operator === null && this.state.result === null){
                paramFunction(option, "firstValue") 
            } else {
                paramFunction(option, "secondValue") 
            } 
        }else if (option.type === 'control') {
            if (option.value === 'ac') {
                this.setState({
                    firstValue: '',
                    secondValue: '',
                    operator: null,
                    result: null
                });
            } else if (option.value === 'c') {
                if(this.state.operator === null) {
                    this.setState({firstValue: '', result: null});
                } else {
                    this.setState({secondValue: '', result: null});
                }
            } else if (this.state.firstValue !== '') {
                if (option.value === '=') {
                    if (this.state.operator !== null && this.state.secondValue !== '') {
                        calculation(this.state.firstValue, this.state.secondValue, this.state.operator)
                    }
                } else if (option.value === 'x2') {
                    updateOperator(option.value);
                } else {
                    updateOperator(option.value);
                }
            }
        }
    }

    render() {
        let operation = `${this.state.firstValue} ${this.state.operator} ${this.state.secondValue}`;
        return (
            <Aux>
                <div className={classes.container}>
                    <div className={classes.calc_body}>
                        <Screen 
                            operation={operation} 
                            value={this.state.firstValue}   
                        />
                        <Buttons
                            clicked={this.clickHandler}
                        />
                    </div>
                </div>
            </Aux>
        );
    } 
}

export default Calculator;
