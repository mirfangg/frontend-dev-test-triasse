import React from "react";
import "../assets/css/FormGroup.css";

function FormGroup({ label, image, id, location }) {
  return (
    <div className="form-group col">
      <label className="font-sm">{label}</label>
      <div className="custom-select-input-group">
        <span className="custom-select-input-group__icon">
          <img src={image} alt="" />
        </span>
        <select className="form-control" id={id}>
          <option>{location}</option>
        </select>
      </div>
    </div>
  );
}

export default FormGroup;
