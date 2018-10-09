var React = require("react");
var Default = require('../layout/default');

class NewUser extends React.Component {
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

          <form className="user-form" method="POST" action="/users/new">
            <div className="background-image">

            </div>

            <div className="user-attribute">
              Username: <input name="username" type="text" />
            </div>
            <div className="user-attribute">
              Password: <input name="password" type="text" />
            </div>
            <input name="submit" type="submit"/>

          </form>

        </body>

      </html>
    );
  }
}

module.exports = NewUser;
// <img src='/images/login.jpg' responsive />