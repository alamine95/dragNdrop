import React from 'react'
import './Card.scss';

const Card = (props) => {
  const { card } = props
  return (
    <>
        <div className="card-item">
          {card.image &&
            <img className="card-cover" src={card.image} alt=""
              onMouseDown={event => event.preventDefault()}
            />
          }
            <h6>{card.title}</h6>
            <p>{card.description}</p>
        </div>
    </>
  )
}

export default Card