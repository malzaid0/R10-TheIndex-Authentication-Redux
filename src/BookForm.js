import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { postBook } from "./redux/actions";

const BookForm = props => {
  const [form, setForm] = useState({
    title: "",
    color: "",
    authors: [props.authorID]
  });

  const onTextChange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    props.postBook(form, props.closeModal);
  };

  const colorOptions = [
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "grey",
    "purple"
  ].map(color => (
    <option key={color} value={color}>
      {color}
    </option>
  ));

  return (
    <div className="mt-5 p-2">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={onTextChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Color</span>
          </div>
          <select name="color" className="form-control" onChange={onTextChange}>
            <option value="">----</option>
            {colorOptions}
          </select>
        </div>
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (book, closeModal) => dispatch(postBook(book, closeModal))
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
