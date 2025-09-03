import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: true,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((resp) => {
        console.log("Dati inviati con successo:", resp.data);
        setFormData(initialFormData);
      });
  };

  return (
    <div>
      <div className="container-fluid m-5">
        <div className="row">
          <div className="col">
            <form>
              <h2 className="mb-3">Create New Post</h2>
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Author Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Insert author's name.."
                    aria-label="Author Name"
                  />
                </div>
                <div className="col mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea2"
                    className="form-label"
                  >
                    Post Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Insert post title.."
                    aria-label="Post Title"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea3"
                    className="form-label"
                  >
                    Post Content
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Type here.."
                    id="exampleFormControlTextarea3"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Public</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-primary">
                Submit Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
