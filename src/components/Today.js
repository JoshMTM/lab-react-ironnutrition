import React from 'react';

function Today(props) {
  const { addFood } = props;
  const total = addFood.reduce((sum, elem) => {
    return sum + elem.quantity * elem.calories;
  }, 0);

  return (
    <div>
      <h1>Today's Treats</h1>
      {addFood.map((elem) => {
        return (
          <div>
            <h1>All Food</h1>
            <ul>
              <li>
                {elem.quantity} {elem.name} = {elem.calories * elem.quantity}{' '}
                Calories
              </li>
            </ul>
          </div>
        );
      })}
      <h1>Total: {Math.floor(total)} Calories</h1>
    </div>
  );
}

export default Today;
