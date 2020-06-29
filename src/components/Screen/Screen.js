import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Screen.module.css';


const screen = (props) => (
    <Aux>
        <div className={classes.calc_screen}>
            <div className={classes.calc_operation}>{props.operation} </div>
            <div className={classes.calc_typed}>{props.value}</div>
          </div>
    </Aux>
);


                // if (option.value === '.'){
                //     if (this.state.firstValue === ''){
                //         this.setState({firstValue: '0.'});
                //     }else{
                //         if (this.state.firstValue.indexOf('.') === -1){
                //             this.setState((prevState, props) => {
                //                 return {
                //                     firstValue: prevState.firstValue + option.value
                //                 }
                //             });
                //         }
                //     }
                // } else if (option.value === '0') {
                //     if (this.state.firstValue !== '') {
                //         this.setState((prevState, props) => {
                //             return {
                //                 firstValue: prevState.firstValue +  option.value
                //             }
                //         });
                //     }
                // } else {
                //     this.setState((prevState, props) => {
                //         return {
                //             firstValue: prevState.firstValue +  option.value
                //         }
                //     });
                // }

export default screen;