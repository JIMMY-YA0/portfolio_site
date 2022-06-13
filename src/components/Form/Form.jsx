import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form className="form" onSubmit={submitHandle}>
      <div className="form_input">
        <input
          type="text"
          placeholder="Your Name"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />
      </div>
      <div className="form_input">
        <input
          type="email"
          placeholder="Your Email"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
      </div>

      <div className="form_input">
        <textarea
          row="10"
          placeholder="Write Message"
          value={enteredMessage}
          onChange={(e) => setEnteredMessage(e.target.value)}
        ></textarea>
      </div>

      <button className="submit_btn" type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
