import React from 'react';
import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingridientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        });

    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingridientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanselled}>CANSEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;