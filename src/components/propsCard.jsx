import React from 'react';

const Card = (props) => {
    return (
        <div className="border card m-3" style={{ minWidth: 300, width: '30%' }} onClick={() => props.onClick(props.pet)}>
            <img
                src={props.pet.src}
                className="card-img-top"
                alt={`рисунок ${props.pet.type}`}
                style={{ height: '60%', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title">{props.pet.type}</h5>
                <p className="card-text"><strong>ID:</strong> {props.pet.id}</p>
                <p className="card-text"><strong>Описание:</strong> {props.pet.description}</p>
                <p className="card-text"><strong>Номер чипа:</strong> {props.pet.chip}</p>
                <p className="card-text"><strong>Район:</strong> {props.pet.district}</p>
                <p className="card-text"><strong>Дата:</strong> {props.pet.date}</p>
            </div>
        </div>
    );
};

export default Card;
