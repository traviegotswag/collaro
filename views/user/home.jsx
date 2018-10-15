var React = require("react");
var Layout = require('../layout/default')

class userHome extends React.Component {

    render() {
        var userQuestionsArray = this.props.questions;
        var username = this.props.username;
        var editUserProfile = "/users/" + username + "/edit"
        var userProfilePath = "/users/" + username + "/upload"

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

        var picturesArray = this.props.pictures;
        let userPictures = picturesArray.map(array => {
            var picturesUrl = "/uploads/"
            return <div>
                    <img src={picturesUrl+array.filename}/>
            </div>
        });
// {picturesUrl} alt="fit pictures" className=""/>

    return (

        <layout>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">

              <a class="navbar-brand" href="#">
                <img src="/images/" width="30" height="30" class="d-inline-block align-top"/>
                Collaro Classic Menswear
                </a>

            </nav>


            <button name="Edit Profile"><a href={editUserProfile}>Edit Profile</a></button>
            <form className="user-form" method="POST" action="/users/logout">
                <input type="submit" value="Logout"/>
            </form>


            <div>
                <h3>User Profile</h3>
                </div>

            <div>
                <h4>Your Preferences</h4>
                    <ul>{userQuestions}</ul>
                </div>

            <div>
                <h4>Current Measurements (in inches)</h4>
                    <ul>{userMeasurements}</ul>
                    <p>If you would like to be physically measured, all your measurements will be indicated as 0 for now.</p>
            </div>

            <div>
                <h4>Current Fit Pictures</h4>
                    <ul>{userPictures}</ul>
            </div>

                <form action={userProfilePath} method="POST" encType="multipart/form-data">
                    <label for='file'>Select your image:</label>
                      <input type="file" name="image" accept='image/*' multiple/>
                      <input className="button" type="submit" value="Upload Image" />
                    <span className="hint"> Upload up to 4 images</span>
                </form>

        </layout>
    )};
}

module.exports = userHome;


//consider adding a function which allows users to convert to cm? [WIP]
// const convert = (data) => {
//     return (data * 2.5);
// }
            // <li key={array.id}>{array.filename}</li>
            // <img src={avatarUrl} alt="profile photo" className="card-img-top" />


 // <a class="navbar-brand" href="#">Navbar</a>
              // <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              //   <span class="navbar-toggler-icon"></span>
              // </button>
              // <div class="collapse navbar-collapse" id="navbarNav">
              //   <ul class="navbar-nav">
              //     <li class="nav-item active">
              //       <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              //     </li>
              //     <li class="nav-item">
              //       <a class="nav-link" href="#">Features</a>
              //     </li>
              //     <li class="nav-item">
              //       <a class="nav-link" href="#">Pricing</a>
              //     </li>
              //     <li class="nav-item">
              //       <a class="nav-link disabled" href="#">Disabled</a>
              //     </li>
              //   </ul>
              // </div>