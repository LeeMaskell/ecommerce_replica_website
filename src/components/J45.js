import '../styles/models.css';
import React from 'react';
import { useState } from 'react';
import { J45Acoustic } from '../containers/Data';
import AddButton from './AddButton.js';
import { useDispatch } from 'react-redux';
import { add } from '../containers/globalSlice.js';

export default function J45() {
    const [initialState, setInitialState] = useState(J45Acoustic);
    const dispatch = useDispatch();
    return (
        <div className="models">
            <div className="models__flex">
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
        </div>
    )
}
