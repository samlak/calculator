import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Button.module.css';

const button = (props) => {
    const classList = props.classList.split(" ");
    const modifiedList = [];
    for (let i = 0; i < classList.length; i++) {
        modifiedList.push(classes[classList[i]])
    }
    return (
        <Aux>
            <div 
                className={modifiedList.join(" ")} 
                value={props.value} 
                type={props.type}
                onClick={props.clicked}
            >
                {props.children}
            </div>
        </Aux>
    );
};

export default button;