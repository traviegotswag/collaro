var React = require("react");
var Layout = require('./layout/default')


class Home extends React.Component {
  render() {
    return (

        <Layout>
                <div className="login">
                    <button name="login"><a href='/users/login'>Existing user? Login here</a></button>
                </div>

                <div className="create-account">
                    <button name="create-account"><a href='/users/new'>New to Collaro? Create an account</a></button>
                </div>
        </Layout>

    );
  }
}

module.exports = Home;
