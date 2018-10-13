// var React = require("react");
// // var Default = require('./layout/default');

// class Home extends React.Component {
//   render() {

//     return (

//       <html>
//         <head />
//           <title>Login to Collaro</title>

//         <body>
//             <div className="background-image">

//             </div>

//             <div className="create-account">
//               <button class="home-button" type="button">
//                 <a href='/users/new'>
//                   New User?
//                 </a>
//               </button>
//             </div>

//             <div className="login">
//               <button class="home-button" type="button">
//                 <a href='/users/login'>
//                   Login
//                 </a>
//               </button>
//             </div>

//         </body>

//       </html>
//     );
//   }
// }

// module.exports = Home;


var React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h4>Editing: {this.props.pokemon.name}</h4>
          <form className="pokemon-form" method="POST" action={"/pokemon/"+ this.props.pokemon.id + "?_method=PUT"}>


            <div className="pokemon-attribute">
              name:<input name="name" type="text" defaultValue={this.props.pokemon.name}/>
            </div>
            <div className="pokemon-attribute">
              img:<input
                name="img"
                type="text"
                defaultValue={this.props.pokemon.img}
              />
            </div>
            <div className="pokemon-attribute">
              height:<input
                name="height"
                type="text"
                defaultValue={this.props.pokemon.height}
              />
            </div>
            <div className="pokemon-attribute">
              weight:<input
                name="weight"
                type="text"
                defaultValue={this.props.pokemon.weight}
              />
            </div>

            <input name="submit" type="submit" />


          </form>
        </body>
      </html>
    );
  }
}

module.exports = Edit;





             //  <form className="user-form" method="POST" action="/users/new">
             //    <input type="submit" value="Edit preferences"/>
             // </form>

             //  <form className="user-form" method="POST" action="/users/new">
             //
            // </form>

                 //<form className="edit-measurements-form" method="POST" action={actionPathEditMeasurements}>
                 //    <input type="submit" value="Edit measurements"/>
                 // </form>

// <img style= {{height: 200}} src={item.photo_url}/>
// {userMeasurements}










