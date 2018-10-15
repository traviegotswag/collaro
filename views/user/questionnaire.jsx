var React = require("react");
var Layout = require('../layout/default')

class questionnaire extends React.Component {
  render() {

    return (

        <Layout>

        <img src="/images/logo.png" width="117" height="30" className="questionnaireLogo"/>
        <div class='row'>

            <div class='col-2'></div>

            <div class='col-8'>
                <form className="user-form" method="POST" action="/users/questionnaire">
                    <h4>To recommend you the right style and size of your custom shirt, we'll need your help to answer 9 questions below. </h4>
                      <br></br>

                      <div className="questions" required>
                        1. What size do you usually wear for your Uniqlo shirts?
                        <select className="shirt-size" name="existingsize">
                          <option value="XS">XS</option>
                          <option value="S" selected>S</option>
                          <option value="M" >M</option>
                          <option value="L" >L</option>
                          <option value="XL" >XL</option>
                        </select>
                      </div><br/>

                      <div className="questions">
                        2. What is your height in metres? Please exclude units.<input className="questionHeight" name="height" type="text" required/>
                      </div><br/>

                      <div className="questions">
                        3. What is your weight in kilograms? Please exclude units.<input className="questionWeight" name="weight" type="text" required/>
                      </div><br/>

                      <div className="questions" required>
                        4. What best describes your mid-section?
                        <select className="belly" name="belly">
                          <option value="No belly" selected>No Belly</option>
                          <option value="Slight belly">Slight Belly</option>
                        </select>
                      </div><br/>

                      <div className="questions" required>
                        5. Do you like your shirts to fit slim or relaxed?
                        <select className="shirt-fit" name="fit">
                          <option value="Slim">Slim</option>
                          <option value="Relaxed" selected>Relaxed</option>
                        </select>
                      </div><br/>

                      <div className="questions" required>
                        6. What collar do you like best on your shirts?
                        <select className="shirt-collar" name="collar">
                          <option value="Classic" selected>Classic</option>
                          <option value="Buttondown">Buttondown</option>
                          <option value="Spread" >Spread</option>
                        </select>
                      </div><br/>

                      <div className="questions" required>
                        7. What front do you like best on your shirts?
                            <select className="shirt-front" name="front">
                                <option value="Clean" selected>Clean</option>
                                <option value="Placket">Placket</option>
                                <option value="Concealed" >Concealed</option>
                            </select>
                      </div><br/>

                    <div className="questions" required>
                        8. What cuff do you like best on your shirts?
                        <select className="shirt-cuff" name="cuff">
                          <option value="Rounded" selected>Barrel</option>
                          <option value="Angled">Angled</option>
                          <option value="French" >French</option>
                        </select>
                    </div><br/>

                    <div className="questions" required>
                        9. How do you want your shirt size to be generated?<br/>
                            <input type="radio" className="radio" name="customersize" value="Algorithm-generated smart size" selected /> Algorithm-generated smart size<br/>
                            <input type="radio" className="radio" name="customersize" value="Be physically measured in person"/> Be physically measured by the Collaro team
                    </div><br/>

                      <input className="questionnaireSubmitButton" name="submit" type="submit"/>
                </form>
            </div>

            <div class='col-2'></div>

    </div>

    </Layout>
    );
  }
}

module.exports = questionnaire;


