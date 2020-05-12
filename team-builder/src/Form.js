import React, { useState } from "react";

const StudentCard = props => {

  const [card, setCard] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setCard({
      ...card,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.addCard(card);

        setCard({ name: "", email: "", role: "" });
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Full Name"
        value={card.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={card.email}
        placeholder="Email Address"
        onChange={changeHandler}
      />

<label htmlFor="role">Which role?
      <select
        id="role"
        name="role"
        value={card.position}
        placeholder=""
        onChange={changeHandler}

        >
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Designer">Designer</option>
          <option value="Web Developer">Web Developer</option>
          <option value="iOS">iOS</option>
          <option value="Data Science">Data Science</option>
      </select></label>
      <button type="submit">Click to Submit!</button>
    </form>
  );
};

export default StudentCard;
