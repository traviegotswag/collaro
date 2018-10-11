var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form className="user-form" method="POST" action="/users/login">
            <div className="user-attribute">
              name<input name="username" type="text" required/>
            </div>
            <div className="user-attribute">
              password:<input name="password" type="text" required/>
            </div>
            <input name="submit" type="submit"/>

            <div className="create-account">
                <a href='/users/new'>New to Collaro? Create an account</a>
            </div>


          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
