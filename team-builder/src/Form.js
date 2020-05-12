import React, { useState } from "react";

const studentForm = props => {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    position: ""
  });

  const changeHandler = event => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.addStudent(card);

        //this is resetting the form values
        setStudent({ name: "", email: "", position: "" });
      }}
    >
      <label htmlFor="title">Name</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Email"
        value={card.title}
        onChange={changeHandler}
      />
      <label htmlFor="body">Email</label>
      <textarea
        id="body"
        name="body"
        value={card.body}
        placeholder="Type your note here"
        onChange={changeHandler}
      />

<label htmlFor="body">Position</label>
      <textarea
        id="body"
        name="body"
        value={card.body}
        placeholder="Type your note here"
        onChange={changeHandler}
      />
      <button type="submit">Click to Submit!</button>
    </form>
  );
};

export default studentForm;
