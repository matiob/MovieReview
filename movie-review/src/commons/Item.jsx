import React from "react";

const Item = ({ data }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{data.title || data.name}</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">
          Detalles
        </a>
      </div>
    </div>
  );
};

export default Item;
