import React from 'react';

const image_uri = 'www.testdomain.com/images/';

const Card = (props) => {

    return (
        <div key={props.item.id}>
            <div className="card">
                <img src={image_uri + props.item.imageType} alt="#"/>

                <div className="content">
                    <h3 className="title">{props.item.title}</h3>
                    <p className="body">
                        {props.item.body}
                    </p>
                </div>

                <div className="cta-wrapper">
                    <button type="button">{props.item.buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
