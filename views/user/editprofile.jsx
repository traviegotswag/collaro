var React = require("react");
//consider adding a function which allows users to convert to cm? [WIP]
// const convert = (data) => {
//     return (data * 2.5);
// }

//PASS IN THE SAME OBJECT AS THE ONE IN USERHOME

class editProfile extends React.Component {

  render() {
    var userQuestions = this.props.questions[0];
    var userMeasurements = this.props.measurements[0];
    var username = this.props.username;
    var actionPathEditProfile = "/users/"+ username + "?_method=PUT";
    return (

      <html>
        <head/>
        <body>
            <div>
            <form className="edit-profile-form" method="POST" action={actionPathEditProfile}>

                <h3>User Profile</h3>
                    <br></br>
                            <h4>Your Preferences</h4>
                                <ul>
                                    <li>Existing Shirt Size: <input name="existingsize" type="text" defaultValue={userQuestions.existingsize}/></li>
                                    <li>Height: <input name="height" type="integer" defaultValue={userQuestions.height}/></li>
                                    <li>Weight: <input name="weight" type="integer" defaultValue={userQuestions.weight}/></li>
                                    <li>Belly: <input name="belly" type="integer" defaultValue={userQuestions.belly}/></li>
                                    <li>Shirt Fit Preference: <input name="fit" type="integer" defaultValue={userQuestions.fit}/></li>
                                    <li>Collar: <input name="collar" type="integer" defaultValue={userQuestions.collar}/></li>
                                    <li>Preferred Shirt Front: <input name="front" type="integer" defaultValue={userQuestions.front}/></li>
                                    <li>Preferred Shirt Cuff: <input name="cuff" type="integer" defaultValue={userQuestions.cuff}/></li>
                                    <li>How your measurements are generated: <input name="customersize" type="integer" defaultValue={userQuestions.customersize}/></li>
                                </ul>
                    <br></br>

                        <h4>Current Measurements (in inches)</h4>
                              <ul>
                                    <li>Shoulder: <input name="shoulder" type="text" defaultValue={userMeasurements.shoulder}/></li>
                                    <li>Chest: <input name="chest" type="integer" defaultValue={userMeasurements.chest}/></li>
                                    <li>Waist: <input name="waist" type="integer" defaultValue={userMeasurements.waist}/></li>
                                    <li>Hips: <input name="hips" type="integer" defaultValue={userMeasurements.hips}/></li>
                                    <li>Shirt Length: <input name="shirtlength" type="integer" defaultValue={userMeasurements.shirtlength}/></li>
                                    <li>Sleeve Length: <input name="sleevelength" type="integer" defaultValue={userMeasurements.sleevelength}/></li>
                                    <li>Elbow: <input name="elbow" type="integer" defaultValue={userMeasurements.elbow}/></li>
                                    <li>Left Cuff Width: <input name="leftcuff" type="integer" defaultValue={userMeasurements.leftcuff}/></li>
                                    <li>Right Cuff Width: <input name="rightcuff" type="integer" defaultValue={userMeasurements.rightcuff}/></li>
                                    <li>Cuff Length: <input name="cufflength" type="integer" defaultValue={userMeasurements.cufflength}/></li>
                                    <li>Collar Width: <input name="collarwidth" type="integer" defaultValue={userMeasurements.collarwidth}/></li>
                              </ul>
                <input type="submit" value="Update Profile"/>

            </form>
            </div>
        </body>


      </html>
    );
    }
}

module.exports = editProfile;


