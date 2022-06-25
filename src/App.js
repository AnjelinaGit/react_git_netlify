import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Weather-App_Wrapper">
          <div className="Weather-App">
            <form className="mb-3">
              <div class="row">
                <div className="search_engine">
                  <input
                    type="search"
                    placeholder="Search City"
                    class="form-control"
                    autoComplete="off"
                  />

                  <input
                    type="Submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>

            <hr />
            <div class="overview">
              <h1> Sydney</h1>
              <ul>
                <li>Friday 05:00</li>
                <li>Clear</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-8">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="Cloudy"
                  className="float-left"
                />

                <div className="float-left">
                  <strong>12</strong>

                  <span class="units">
                    {" "}
                    °C | <a href="/"> °F </a>
                  </span>
                </div>
              </div>
              <div className="col-4">
                <Weather />
              </div>
              <div className="footer">
                <small>
                  This project was coded by Anjelina Kabul and is
                  <a
                    href="https://github.com/AnjelinaGit/react_git_netlify"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    open-sourced{" "}
                  </a>
                  and{" "}
                  <a
                    href="https://beamish-sundae-701e56.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    hosted on Netlify
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
