var React = require("react");
var Layout = require('../layout/default')

class aboutUs extends React.Component {

    render() {

        var username = this.props.username;
        var editUserProfile = "/users/" + username + "/edit"

      return (

        <Layout>

            <nav class="defaultnavbar navbar navbar-expand-lg navbar-light fixed-top">
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
            <img class='img-fluid bannerpicture' src="/images/1.jpg"/>
          </div>
          <div>
            <div class='row no-gutters'>
              <div id='test' class='col-12 col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <div class='text-header'>Welcome to Collaro. </div>
                        <p class='text-content'>To get you started, we have prepared a coupon code "welcome15" for your first purchase. Enjoy 15% off with this code, and receive your custom shirt within 2 weeks.</p>
                  </div>
                </div>
              </div>

              <div class='col-12 col-md-6'>
                <img class='img-fluid square' src="/images/2.jpg"/>
              </div>
            </div>

            <div class='row no-gutters'>
              <div class='order-last col-12 order-md-first col-md-6'>
                <img class='img-fluid' src="/images/3.jpg"/>
              </div>
              <div class='order-first col-12 order-md-last col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <p class='text-header'>Tailored shirts, fair prices.</p>
                    <p>Traditional tailor made shirts tend to be costly, while off the rack shirts do not cater to the nuances of your body and lack customisable options.</p>
                    <p>We founded Collaro to fill this gap - to provide quality, tailored shirts at fair prices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class='row no-gutters'>
              <div class='col-12 col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <p class='text-header'>Lower overheads, lower mark-ups.</p>
                    <p>Without a physical storefront, we keep our overheads lower and pass our cost savings to you.</p>
                    <p>No exorbitant mark-ups, just a relentless focus on creating quality and well-fitting shirts.</p>
                  </div>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-12'>
                    <img class='img-fluid graph-img' src="/images/4.png"/>
                  </div>
                </div>
              </div>
            </div>
            <div class='row no-gutters'>
              <div class='order-last col-12 order-md-first col-md-6'>
                <img class='img-fluid' src="/images/5.jpg"/>
              </div>
              <div class='order-first col-12 order-md-last col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <p class='text-header'>3 steps to create your perfect shirt.</p>
                    <p class='text-content'>Without anyone to rush you through this process, simply:</p>
                    <p class='text-content'>a. Select your fabric</p>
                    <p class='text-content'>b. Design your shirt</p>
                    <p class='text-content'>c. Get your smart-size or be physically measured by us</p>
                  </div>
                </div>
              </div>
            </div>

            <div class='row no-gutters'>
              <div class='col-12 col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <p class='text-header'>Fit Guarantee Policy</p>
                    <p>We know the importance of a well-fitting shirt.</p>
                    <p>If you’re dissatisfied with the fit of your Collaro shirt, we offer free alterations or remake.</p>
                  </div>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <img class='img-fluid' src="/images/6.jpg"/>
              </div>
            </div>

            <div class='row no-gutters'>
              <div class='order-last col-12 order-md-first col-md-6'>
                <img class='img-fluid' src="/images/7.jpg"/>
              </div>
              <div class='order-first col-12 order-md-last col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <p class='text-header'>52 steps, 15,000 stitches, 1 shirt.</p>
                    <p>Collaro shirts are meticulously crafted in Singapore by a small workshop with decades of tailoring experience.</p>
                    <p>Together, we are committed to creating classic, timeless, and quality shirts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class='row no-gutters'>
              <div class='col-12 col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <div class='text-header'>We care about the details.</div>
                        <li class='text-content'>Every Collaro shirt comes with:</li>
                        <li class='text-content'>Thick mother of pearl buttons</li>
                        <li class='text-content'>Hand-cut patterns based on your measurements</li>
                        <li class='text-content'>Quality fabrics</li>
                  </div>
                </div>
              </div>
              <div class='col-12 col-md-6'>
                <img class='img-fluid' src="/images/8.jpg"/>
              </div>
            </div>

          </div>

        </Layout>

    )
    };
}

module.exports = aboutUs;