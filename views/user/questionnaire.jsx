var React = require("react");

class questionnaire extends React.Component {
  render() {

    return (
      <html>
        <head />
          <body>
            <form className="user-form" method="POST" action="/users/questionnaire">

            <h4>For us to recommend you the right style and size of your custom shirt, simply answer 10 simple questions below. </h4>
              <div className="questions" required>
                What size of Uniqlo shirts do you usually wear?
                <select className="shirt-size" name="existingsize">
                  <option value="XS">XS</option>
                  <option value="S" selected>S</option>
                  <option value="M" >M</option>
                  <option value="L" >L</option>
                  <option value="XL" >XL</option>
                </select>
              </div><br/>

              <div className="questions">
                What is your height in metres (exclude units)?<input name="height" type="text" required/>
              </div><br/>

              <div className="questions">
                What is your weight in kilograms? (exclude units)<input name="weight" type="text" required/>
              </div><br/>

              <div className="questions" required>
                What best describes your mid-section?
                <select className="belly" name="belly">
                  <option value="No belly" selected>No Belly</option>
                  <option value="Slight belly">Slight Belly</option>
                </select>
              </div><br/>

              <div className="questions" required>
              Do you like your shirts to fit slim or relaxed?
                <select className="shirt-fit" name="fit">
                  <option value="Slim">Slim</option>
                  <option value="Relaxed" selected>Relaxed</option>
                </select>
              </div><br/>

              <div className="questions" required>
                What collar do you like best on your shirts?
                <select className="shirt-collar" name="collar">
                  <option value="Classic" selected>Classic</option>
                  <option value="Buttondown">Buttondown</option>
                  <option value="Spread" >Spread</option>
                </select>
              </div><br/>

              <div className="questions" required>
                What front do you like best on your shirts?
                <select className="shirt-front" name="front">
                  <option value="Clean" selected>Clean</option>
                  <option value="Placket">Placket</option>
                  <option value="Concealed" >Concealed</option>
                </select>
              </div><br/>

            <div className="questions" required>
                What cuff do you like best on your shirts?
                <select className="shirt-cuff" name="cuff">
                  <option value="Rounded" selected>Barrel</option>
                  <option value="Angled">Angled</option>
                  <option value="French" >French</option>
                </select>
            </div><br/>

            <div className="questions" required>
                How do you want your shirt size to be generated?<br/>
                    <input type="radio" name="customersize" value="Algorithm-generated smart size" selected /> Algorithm-generated smart size<br/>
                    <input type="radio" name="customersize" value="Be physically measured in person"/> Be physically measured in person
            </div><br/>

              <input name="submit" type="submit"/>

            </form>
        </body>
      </html>
    );
  }
}

module.exports = questionnaire;


