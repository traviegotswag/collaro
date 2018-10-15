var React = require("react");
var Layout = require('../layout/default')

class Login extends React.Component {
  render() {

    return (

        <Layout>
                <form className="user-form" method="POST" action="/users/login">

                <div>
                    <img src="/images/2.jpg" className="img-fluid"/>
                </div>

                  <div className ="whitebox">
                        <h1>Welcome back. </h1>
                        <div className="login-username">
                          Name: <input className="login-username-input" name="username" type="text" required/>
                        </div>

                        <div className="login-password">
                          Password: <input className="login-password-input" name="password" type="text" required/>
                        </div>

                        <input className= "loginSubmitButton img-fluid" name="submit" type="submit"/>

                        <div className="login-createaccount">
                            <a href='/users/new'>New to Collaro? Create an account</a>
                        </div>
                </div>

                </form>

        </Layout>

    );
  }
}

module.exports = Login;
