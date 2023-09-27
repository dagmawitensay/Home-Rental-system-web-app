import React from "react";
import "./popup.css";
import { useNavigate } from "react-router";
import ReactModal from "react-modal";

export default function Popup(props) {
  const navigate = useNavigate();
  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => props.setIsOpen(false)}
        className="Modal"
      >
        <p className="message">
          {props.text}
        </p>

        <button
          onClick={() => {
            props.setIsOpen(false);
            navigate("/admin");
          }}
          className="btn btn-primary"
        >
          OK
        </button>
      </ReactModal>
    </div>
  );
}
