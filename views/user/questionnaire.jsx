var React = require("react");

class Login extends React.Component {
  render() {

    return (
      <html>
        <head />
          <body>
            <form className="user-form" method="POST" action="/users/login">

              <div className="questions">
                What size of shirts do you usually wear?
                <select className="shirt-size">
                  <option value="xs">XS</option>
                  <option value="s" selected>S</option>
                  <option value="m" >M</option>
                  <option value="l" >L</option>
                  <option value="xl" >XL</option>
                  <option value="xxl" >XXL</option>
                </select>
              </div>

              <div className="questions">
                What is your height in metres?<input name="height" type="text" />
              </div>

              <div className="questions">
                What is your weight in kilograms?<input name="weight" type="text" />
              </div>

              <div className="questions">
                What best describes your mid-section?
                <select className="mid-section">
                  <option value="no belly" selected>No Belly</option>
                  <option value="small belly">Slight Belly</option>
                  <option value="medium belly" ></option>
                  <option value="big belly" >Loose</option>
                </select>
              </div>

              <div className="questions">
              Do you like your shirts to fit slim, normal or loose?
                <select className="shirt-fit">
                  <option value="slim">Slim</option>
                  <option value="normal" selected>Normal</option>
                  <option value="loose" >Loose</option>
                </select>
              </div>

              <div className="questions">
                What collar do you like best on your shirts?<input name="name" type="text" />
              </div>

              <div className="questions">
                What cuff do you like best on your shirts?<input name="name" type="text" />
              </div>

              <div className="questions">
                What front do you like best on your shirts?
              </div>

              <input name="submit" type="submit"/>

            </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;


