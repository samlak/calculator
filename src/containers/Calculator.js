import React, {Component} from 'react';

import classes from './Calculator.module.css';
import Aux from '../hoc/Aux';
import Buttons from '../components/Buttons/Buttons';
import Screen from '../components/Screen/Screen';


class Calculator extends Component {
    state = {
    }

    render() {
        return (
            <Aux>
                <div className={classes.container}>
                    <div className={classes.calc_body}>
                        <Screen/>
                        <Buttons/>
                    </div>
                </div>
            </Aux>
        );
    } 
}

export default Calculator;
