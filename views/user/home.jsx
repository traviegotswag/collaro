var React = require("react")
var Layout = require('../layout/default')

class userHome extends React.Component {

    render() {
        var userQuestionsArray = this.props.questions;
        var username = this.props.username;
        var editUserProfile = "/users/" + username + "/edit"
        var userProfilePath = "/users/" + username + "/upload"

        let userQuestions = userQuestionsArray.map(array => {
            return <div>
                <li><span class="questionsArray">Size: </span>{array.existingsize}</li>
                <li><span class="questionsArray">Height: </span>{array.height}</li>
                <li><span class="questionsArray">Weight: </span>{array.weight}</li>
                <li><span class="questionsArray">Belly: </span>{array.belly}</li>
                <li><span class="questionsArray">Preferred Fit: </span>{array.fit}</li>
                <li><span class="questionsArray">Preferred Collar: </span>{array.collar}</li>
                <li><span class="questionsArray">Preferred Shirt Front: </span>{array.front}</li>
                <li><span class="questionsArray">Preferred Shirt Cuff: </span>{array.cuff}</li>
                <li><span class="questionsArray">How your measurements are generated: </span>{array.customersize}</li>
            </div>

        });

        var userMeasurementsArray = this.props.measurements;
        let userMeasurements = userMeasurementsArray.map(array => {
            return <div>
                <li><span class="measurementsArray">Shoulder: </span>{array.shoulder}</li>
                <li><span class="measurementsArray">Chest: </span>{array.chest}</li>
                <li><span class="measurementsArray">Waist: </span>{array.waist}</li>
                <li><span class="measurementsArray">Hips: </span>{array.hips}</li>
                <li><span class="measurementsArray">Shirt Length: </span>{array.shirtlength}</li>
                <li><span class="measurementsArray">Sleeve Length: </span>{array.sleevelength}</li>
                <li><span class="measurementsArray">Elbow: </span>{array.elbow}</li>
                <li><span class="measurementsArray">Left Cuff Width: </span>{array.leftcuff}</li>
                <li><span class="measurementsArray">Right Cuff Width: </span>{array.rightcuff}</li>
                <li><span class="measurementsArray">Cuff Length: </span>{array.cufflength}</li>
                <li><span class="measurementsArray">Collar Width: </span>{array.collarwidth}</li>
            </div>
        });

        var picturesArray = this.props.pictures;
        let userPictures = picturesArray.map(array => {
            var picturesUrl = "/uploads/"
            return <img src={picturesUrl+array.filename} class="renderedfitpicture col-3 img-fluid"/>

        });
// {picturesUrl} alt="fit pictures" className=""/>

    return (

        <Layout>
            <nav class="defaultnavbar navbar navbar-expand-lg navbar-light fixed-top">
            <img src="/images/logo.png" width="117" height="30" class="navbarlogo"/>
                <a class="navbar-brand nav-link" href="http://www.collaro.co/shop/">Browse Fabrics</a>
                <a class="navbar-brand nav-link" href="/aboutus/">About us</a>
                <a class="navbar-brand nav-link" href={editUserProfile}>Edit Profile</a>
                <a class="navbar-brand nav-link" href="/">
                    <form className="user-form form-inline" method="POST" action="/users/logout">
                        <input type="submit" value="Logout"/>
                    </form>
                </a>
            </nav>

                <div>
                    <h2>User Profile</h2>
                    <hr></hr>
                </div>

            <div class='row'>
                <div class='col-6'>
                    <h3>Your Preferences</h3>
                        <ul>{userQuestions}</ul>
                    </div>

                <div class='col-6'>
                    <h3>Current Measurements (in inches)</h3>
                        <ul>{userMeasurements}</ul>
                        <p>If you'd like to be measured, all your measurements will be indicated as 0 for now.</p>
                </div>
            </div>

            <div class="fitpictures">
                <h3>Current Fit Pictures</h3>
                    <hr></hr>
                    <div class="userpictures">{userPictures}</div>
            </div>

                <form action={userProfilePath} method="POST" encType="multipart/form-data">
                    <label className="label" for='file'>Upload up to 6 fit pictures, and we'll get back to you on how your fit can be improved.</label>
                    <br></br>
                      <input className="addfilesbutton" type="file" name="image" accept='image/*' multiple/>
                      <br></br>
                      <input className="uploadbutton" type="submit" value="Upload" />
                </form>


        </Layout>
    )};
}

module.exports = userHome;


//consider adding a function which allows users to convert to cm? [WIP]
// const convert = (data) => {
//     return (data * 2.5);
// }
            // <li key={array.id}>{array.filename}</li>
            // <img src={avatarUrl} alt="profile photo" className="card-img-top" />

