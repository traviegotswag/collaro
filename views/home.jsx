var React = require("react");
var Default = require('./layout/default');

class Home extends React.Component {
  render() {

    return (

      <html>

        <head />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <title>Login to Collaro</title>

        <body>
            <div className="background-image">

            </div>

            <div className="logo">

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