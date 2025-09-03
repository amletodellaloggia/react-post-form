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
      [name]: type === "radio" ? (value === "true") : value,
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
    <div className="container-fluid m-5">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">Create New Post</h2>

            <div className="row">
              <div className="col">
                <label htmlFor="author" className="form-label">
                  Author Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert author's name.."
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>

              <div className="col mb-3">
                <label htmlFor="title" className="form-label">
                  Post Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert post title.."
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="body" className="form-label">
                  Post Content
                </label>
                <textarea
                  className="form-control"
                  placeholder="Type here.."
                  id="body"
                  name="body"
                  rows="3"
                  value={formData.body}
                  onChange={handleChange}
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
                    name="public"
                    id="publicYes"
                    value="true"
                    checked={formData.public === true}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="publicYes">
                    Yes
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="public"
                    id="publicNo"
                    value="false"
                    checked={formData.public === false}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="publicNo">
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
  );
};

export default PostForm;
