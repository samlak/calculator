import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Screen.module.css';

const screen = (props) => (
    <Aux>
        <div className={classes.calc_screen}>
            <div className={classes.calc_operation}>2536 + 419 + </div>
            <div className={classes.calc_typed}>2955<span className={classes.blink_me}>_</span></div>
          </div>
    </Aux>
);

export default screen;