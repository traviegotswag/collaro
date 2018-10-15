var React = require("react");
var Layout = require('../layout/default')

class NewUser extends React.Component {
  render() {

    return (

            <Layout>

                  <form className="user-form" method="POST" action="/users/new">
                    <div>
                        <img src="/images/newuser.jpg" className="img-fluid"/>
                    </div>

                  <div className ="whitebox">
                    <h1>No more ill-fitting shirts. </h1>
                    <h3>Create an account, and get 15% off your first order. </h3>

                        <div className="newuser-email">
                            Email: <input className="newuser-email-input" name="email" type="email" required/>
                        </div>

                        <div className="newuser-username">
                            Username: <input className="newuser-username-input" name="username" type="text" required/>
                        </div>

                        <div className="newuser-password">
                            Password: <input className="newuser-password-input" name="password" type="text" required/>
                        </div>

                        <input className= "newUserSubmitButton img-fluid" name="submit" type="submit"/>
                </div>


                </form>

            </Layout>

    );
  }
}

module.exports = NewUser;
// <img src='/images/login.jpg' responsive />