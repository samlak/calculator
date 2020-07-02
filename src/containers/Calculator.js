/* eslint no-eval: 0 */
import React, {Component} from 'react';

import classes from './Calculator.module.css';
import Aux from '../hoc/Aux';
import Buttons from '../components/Buttons/Buttons';
import Screen from '../components/Screen/Screen';

class Calculator extends Component {
    state = {
        firstValue: '',
        secondValue: '',
        operator: '',
        result: null,
        isCalculated: false
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
            let result = 0;
            if(secondValue !== null){
                result = eval(Number(firstValue) + operator + Number(secondValue));
            } else{
                result = Number(firstValue) ** 2;
            }
            this.setState({
                result,
                isCalculated: true
            }); 
        }

        if(option.type === 'number'){
            if(this.state.operator === '' && this.state.result === null){
                paramFunction(option, "firstValue") 
            } else if (this.state.operator === 'x2') {
                // this.setState((prevState, props) => {
                //     return {
                //         firstValue: prevState.result,
                //         secondValue: '',
                //         // operator: '',
                //         result: null,
                //         isCalculated: false
                //     }
                // });
                // paramFunction(option, "secondValue") 
            } else {
                paramFunction(option, "secondValue") 
            } 
        }else if (option.type === 'control') {
            if (option.value === 'ac') {
                this.setState({
                    firstValue: '',
                    secondValue: '',
                    operator: '',
                    isCalculated: false,
                    result: null
                });
            } else if (option.value === 'c') {
                if(this.state.operator === '') {
                    this.setState({firstValue: '', isCalculated: false, result: null});
                } else {
                    this.setState({secondValue: '', isCalculated: false, result: null});
                }
            } else {
                if (this.state.firstValue !== '' && this.state.secondValue === '') {
                    if (option.value === '=') {
                        if (this.state.operator !== '' && this.state.secondValue !== '') {
                            calculation(this.state.firstValue, this.state.secondValue, this.state.operator)
                        }
                    } else if (option.value === 'x2') {
                        updateOperator(option.value);
                        calculation(this.state.firstValue, null, null);
                        this.setState((prevState, props) => {
                            return {
                                firstValue: prevState.firstValue,
                                isCalculated: true
                            }
                        });
                    } else {
                        updateOperator(option.value);
                    }
                } else if (this.state.operator !== '') {
                    if (option.value === '=') {
                        if (this.state.operator !== '' && this.state.secondValue !== '') {
                            calculation(this.state.firstValue, this.state.secondValue, this.state.operator)
                        }
                    } else if (option.value === 'x2') {
                        updateOperator(option.value);
                        calculation(this.state.firstValue, null, null);
                        this.setState((prevState, props) => {
                            return {
                                firstValue: prevState.result,
                                secondValue: '',
                                isCalculated: true
                            }
                        });
                    } else if (option.value !== '=') {
                        calculation(this.state.firstValue, this.state.secondValue, this.state.operator)
                        this.setState((prevState, props) => {
                            return {
                                firstValue: prevState.result,
                                secondValue: '',
                                operator: option.value,
                                result: null,
                                isCalculated: false
                            }
                        });
                    }
                }
            }
        }
    }

    render() {
        let operation = `${this.state.firstValue} ${this.state.operator} ${this.state.secondValue}`;
        let value = 0;
        if(this.state.isCalculated === false){
            if(this.state.firstValue !== '' && this.state.secondValue === ''){
                value = this.state.firstValue;
            }
            if(this.state.secondValue !== ''){
                value = this.state.secondValue;
            }
        }
        if(this.state.isCalculated){
            value = this.state.result;
        }
        let screenClass = "initial";
        if ((this.state.firstValue).length > 10 || (this.state.secondValue).length > 10) {
            screenClass = "modified";
        }
        return (
            <Aux>
                <div className={classes.container}>
                    <div className={classes.calc_body}>
                        <Screen 
                            classes={screenClass}
                            operation={operation} 
                            value={value}   
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
