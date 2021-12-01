import React from 'react';
import { useState } from 'react';

function FoodBox(props) {
  const { food, btnFood } = props;
  const [qty, setQty] = useState(0);
  function handleQty(event) {
    setQty(event.target.value);
  }

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt="img" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={handleQty}
                  className="input"
                  type="number"
                  value={qty}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    btnFood(food, qty);
                  }}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodBox;
