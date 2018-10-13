var React = require("react");
//consider adding a function which allows users to convert to cm? [WIP]
// const convert = (data) => {
//     return (data * 2.5);
// }

class userHome extends React.Component {

  render() {
    var userQuestionsArray = this.props.questions;
    var username = this.props.username;
    var editUserProfile = "/users/" + username + "/edit"

    let userQuestions = userQuestionsArray.map(array => {
        return <div>
            <li>Size: {array.existingsize}</li>
            <li>Height: {array.height}</li>
            <li>Weight: {array.weight}</li>
            <li>Belly: {array.belly}</li>
            <li>Shirt Fit Preference: {array.fit}</li>
            <li>Collar: {array.collar}</li>
            <li>Preferred Shirt Front: {array.front}</li>
            <li>Preferred Shirt Cuff: {array.cuff}</li>
            <li>How your measurements are generated: {array.customersize}</li>
        </div>
    });

    var userMeasurementsArray = this.props.measurements;
    let userMeasurements = userMeasurementsArray.map(array => {
        return <div>
            <li>Shoulder: {array.shoulder}</li>
            <li>Chest: {array.chest}</li>
            <li>Waist: {array.waist}</li>
            <li>Hips: {array.hips}</li>
            <li>Shirt Length: {array.shirtlength}</li>
            <li>Sleeve Length: {array.sleevelength}</li>
            <li>Elbow: {array.elbow}</li>
            <li>Left Cuff Width: {array.leftcuff}</li>
            <li>Right Cuff Width: {array.rightcuff}</li>
            <li>Cuff Length: {array.cufflength}</li>
            <li>Collar Width: {array.collarwidth}</li>
        </div>
    });

    return (

      <html>

        <head/>

        <body>

            <div>
                <h3>User Profile</h3>
                    <br></br>
                        <h4>Your Preferences</h4>
                          <ul>
                            {userQuestions}
                          </ul>
            </div>
                <br></br>

            <div>
                    <h4>Current Measurements (in inches)</h4>
                          <ul>
                            {userMeasurements}
                          </ul>
                    <p>If you would like to be physically measured, all your measurements will be indicated as 0 for now.
                    </p>
            </div>

            <form className="user-form" method="POST" action="/users/logout">
                <input type="submit" value="Logout"/>
            </form>

                <button name="Edit Profile"><a href={editUserProfile}>Edit Profile</a></button>

        </body>


      </html>
    );
    }
}

module.exports = userHome;



