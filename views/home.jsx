var React = require("react");
// var Default = require('./layout/default');

class Home extends React.Component {
  render() {

    return (

      <html>
        <head />
          <title>Login to Collaro</title>

        <body>
            <div className="background-image">

            </div>

            <div className="create-account">
              <button class="home-button" type="button">
                <a href='/users/new'>
                  New User?
                </a>
              </button>
            </div>

            <div className="login">
              <button class="home-button" type="button">
                <a href='/users/login'>
                  Login
                </a>
              </button>
            </div>

        </body>

      </html>
    );
  }
}

module.exports = Home;