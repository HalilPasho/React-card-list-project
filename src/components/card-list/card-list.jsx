import React from 'react';
import './card-list.css';
import Card from '../card/card'

const cardList = (props) => {
    return (
        <div className='card-list'>
            { props.monster.map(item => <Card key={item.id} item={item}/> )}
        </div>
    )
}

export default cardList;
