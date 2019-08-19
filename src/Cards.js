import React from 'react';
import Card from './Card';

const Cards = (props) => {

    const data = props.list.hooks;

    // const cards = data.map((item) => <Card key={item.id} />);


    return (
        <div>
            {data.map((item) => <Card key={item.id} />)}
        </div>
    );
};

export default Cards;
