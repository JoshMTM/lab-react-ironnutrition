import React from 'react';

function NewForm(props) {
  const { btnSubmit } = props;

  return (
    <div>
      <h1>Add an item</h1>
      <form onSubmit={btnSubmit}>
        <div class="field">
          <label className="label">Name</label>
          <div class="control">
            <input
              name="name"
              class="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>

        <div class="field">
          <label className="label">Calories</label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="calories"
              class="input is-success"
              type="text"
              placeholder="Enter Calories"
            />
          </div>
        </div>
        <div class="field">
          <label className="label">Image</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="image"
              class="input is-success"
              type="text"
              placeholder="Enter image"
            />
          </div>
        </div>
        <div class="field">
          <label className="label">Quantity</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="quantity"
              class="input is-success"
              type="number"
              placeholder="Eenter Quantity"
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default NewForm;
