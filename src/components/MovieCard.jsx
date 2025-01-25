import React from "react";
import { FaTrashCan } from "react-icons/fa6";

function MovieCard() {
  return (
    <div className="col-6 m-5">
      <div className="card bg-bone-white text-dark">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
        <div className="card-body d-flex justify-content-between">
          <h3 className="card-title m-0">Card</h3>
          <div className="text-danger">
            <FaTrashCan />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
