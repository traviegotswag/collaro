var React = require("react");

class Home extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <div className="login">
                <button name="login"><a href='/users/login'>Existing user? Login here</a></button>
            </div>

            <div className="create-account">
                <button name="create-account"><a href='/users/new'>New to Collaro? Create an account</a></button>
            </div>

        </body>
      </html>
    );
  }
}

module.exports = Home;
