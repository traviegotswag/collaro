var React = require("react");
//consider adding a function which allows users to convert to cm? [WIP]
// const convert = (data) => {
//     return (data * 2.5);
// }

class UserHome extends React.Component {

  render() {
    var userQuestionsArray = this.props.questions;

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
            <li>Collar Width: {array.collar}</li>
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
                    <div>If you opted to be physically measured, all your measurements will be indicated as 0 for now.
                    </div>
            </div>

            <form className="user-form" method="POST" action="/users/logout">
                <input type="submit" value="Logout"/>
            </form>

        </body>




      </html>
    );
    }
}

module.exports = UserHome;



             //  <form className="user-form" method="POST" action="/users/new">
             //    <input type="submit" value="Edit preferences"/>
             // </form>

             //  <form className="user-form" method="POST" action="/users/new">
             //
            // </form>

                 //            <form className="edit-measurements-form" method="POST" action={actionPathEditMeasurements}>
                 //    <input type="submit" value="Edit measurements"/>
                 // </form>

// <img style= {{height: 200}} src={item.photo_url}/>
// {userMeasurements}

