import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Screen.module.css';


const screen = (props) => {
    let operationClass = classes.calc_operation;
    let typeClass = classes.calc_typed;
    let screenClass = classes.calc_screen;
    if (props.classes === 'modified') {
        operationClass = classes.calc_operation_modified;
        typeClass = classes.calc_typed_modified;
        screenClass = classes.calc_screen_modified;
    }
    return (
        <Aux>
            <div className={screenClass}>
                <div className={operationClass}>{props.operation} </div>
                <div className={typeClass}>{props.value}</div>
            </div>
        </Aux>
    )
};
export default screen;