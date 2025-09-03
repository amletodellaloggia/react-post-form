function App() {
  return (
    <>
      <div className="main">
        <div className="container-fluid m-5">
          <div className="row">
            <div className="col">
              <form>
                <h2 className="mb-3">Create New Post</h2>
                <div class="row">
                  <div class="col">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Author Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Insert author's name.."
                      aria-label="Author Name"
                    />
                  </div>
                  <div class="col mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Post Title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Insert post title.."
                      aria-label="Post Title"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Post Content
                    </label>
                    <textarea
                      class="form-control"
                      placeholder="Type here.."
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">
                    Public
                  </legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="option1"
                        checked
                      />
                      <label className="form-check-label" for="gridRadios1">
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
                      <label className="form-check-label" for="gridRadios2">
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
