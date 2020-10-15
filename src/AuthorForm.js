import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { postAuthor } from "./redux/actions";

const AuthorForm = props => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    imageUrl: "",
    books: []
  });

  const submitAuthor = event => {
    event.preventDefault();
    props.postAuthor(form, props.closeModal);
  };

  const onTextchange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitAuthor}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">First Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="first_name"
            onChange={onTextchange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Last Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="last_name"
            onChange={onTextchange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Image URL</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            onChange={onTextchange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postAuthor: (newAuthor, closeModal) =>
      dispatch(postAuthor(newAuthor, closeModal))
  };
};

export default connect(null, mapDispatchToProps)(AuthorForm);
