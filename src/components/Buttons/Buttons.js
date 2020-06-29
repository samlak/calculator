import React from 'react';
import parse from 'html-react-parser';

import classes from './Buttons.module.css';
import Aux from '../../hoc/Aux';
import Button from '../Button/Button';

const buttons = (props) => {
    const buttonValue = [
        {classList: "button c", value:"ac", label:"AC", type:"control"},
        {classList: "button l", value:"x2", label:"x<sup>2</sup>", type:"control"},
        {classList: "button l", value:"%", label:"%", type:"control"},
        {classList: "button l", value:"/", label:"/", type:"control"},
        {classList: "button", value:"7", label:"7", type:"number"},
        {classList: "button", value:"8", label:"8", type:"number"},
        {classList: "button", value:"9", label:"9", type:"number"},
        {classList: "button l", value:"*", label:"*", type:"control"},
        {classList: "button", value:"4", label:"4", type:"number"},
        {classList: "button", value:"5", label:"5", type:"number"},
        {classList: "button", value:"6", label:"6", type:"number"},
        {classList: "button l", value:"-", label:"-", type:"control"},
        {classList: "button", value:"1", label:"1", type:"number"},
        {classList: "button", value:"2", label:"2", type:"number"},
        {classList: "button", value:"3", label:"3", type:"number"},
        {classList: "button l", value:"+", label:"+", type:"control"},
        {classList: "button c", value:"c", label:"C", type:"control"},
        {classList: "button", value:"0", label:"0", type:"number"},
        {classList: "button", value:".", label:".", type:"number"},
        {classList: "button l", value:"=", label:"=", type:"control"},
    ];

    const buttonRow = (initial, end) => {
        let buttonList = [];
        for (let i = initial; i < end; i++) {
            const option = {
                value: buttonValue[i].value,
                type: buttonValue[i].type
            }
            buttonList.push(
                <Button 
                    key={i}
                    classList={buttonValue[i].classList} 
                    value={buttonValue[i].value} 
                    type={buttonValue[i].type}
                    clicked={() => props.clicked(option)}
                >
                    {parse(buttonValue[i].label)}
                </Button>
            )
        }
        return buttonList;
    }
    return (
        <Aux>
            <div className={classes.calc_button_row}>
                {buttonRow(0, 4)}
            </div>
            <div className={classes.calc_button_row}>
                {buttonRow(4, 8)}
            </div>
            <div className={classes.calc_button_row}>
                {buttonRow(8, 12)}
            </div>
            <div className={classes.calc_button_row}>
                {buttonRow(12, 16)}
            </div>
            <div className={classes.calc_button_row}>
                {buttonRow(16, 20)}
            </div>
        </Aux>
    )
};

export default buttons;