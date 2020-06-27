import React from 'react';

import classes from './Buttons.module.css';
import Aux from '../../hoc/Aux';
import Button from '../Button/Button';

const buttons = (props) => (
    <Aux>
        <div className={classes.calc_button_row}>
            <Button classList="button c">C</Button>
            <Button classList="button l">≠</Button>
            <Button classList="button l">%</Button>
            <Button classList="button l">/</Button>
        </div>
        <div className={classes.calc_button_row}>
            <Button classList="button">7</Button>
            <Button classList="button">8</Button>
            <Button classList="button">9</Button>
            <Button classList="button l">x</Button>
        </div>
        <div className={classes.calc_button_row}>
            <Button classList="button">4</Button>
            <Button classList="button">5</Button>
            <Button classList="button">6</Button>
            <Button classList="button l">-</Button>
        </div>
        <div className={classes.calc_button_row}>
            <Button classList="button">1</Button>
            <Button classList="button">2</Button>
            <Button classList="button">3</Button>
            <Button classList="button l">+</Button>
        </div>
        <div className={classes.calc_button_row}>
            <Button classList="button">.</Button>
            <Button classList="button">0</Button>
            <Button classList="button">g</Button>
            <Button classList="button l">=</Button>
        </div>
    </Aux>
);

export default buttons;