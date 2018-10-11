var React = require("react");

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
            <li>How your unique size is generated: {array.customersize}</li>
        </div>
    });

    //display list of artists using JSX
    return (

      <html>
        <head/>
        <body>
        <h4>User Profile</h4>
          <ul>
            {userQuestions}
          </ul>
        </body>
      </html>

    );
    }
}

module.exports = UserHome;


// <img style= {{height: 200}} src={item.photo_url}/>
