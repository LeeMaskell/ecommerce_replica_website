import React from 'react';
import { useState } from 'react';
import { murphyLab } from '../containers/Data';
import AddButton from './AddButton.js';
import { useDispatch } from 'react-redux';
import { add } from '../containers/globalSlice.js';

export default function MurphyLab() {
    const [initialState, setInitialState] = useState(murphyLab);
    const dispatch = useDispatch();
    return (
        <div className="models">
            {initialState.map((item) => (
                <div className="model-card">
                    <div className="model-card__flex-container">
                        <h4 className="model-card__name">{item.name}</h4>
                        <h4 className="model-card__price">${item.price}</h4>
                    </div>
                    <img src={item.image} className="model-card__img"></img>
                    <AddButton onClickHandler={() => dispatch(add(item))}>Add to Cart</AddButton>
                </div>
            ))}
        </div>
    )
}