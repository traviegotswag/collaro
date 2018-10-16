var React = require("react");
var Layout = require('./layout/default')


class Home extends React.Component {
  render() {
    return (

    <Layout>

          <div>
            <div class='row no-gutters'>
              <div id='test' class='col-12 col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <div class='text-header'><a href="/users/new" className="redirect">Click here for new users</a></div>
                        <p class='text-content'></p>
                  </div>
                </div>
              </div>

              <div class='col-12 col-md-6'>
                <img class='img-fluid square' src="/images/3.jpg"/>
              </div>
            </div>

            <div class='row no-gutters'>
              <div class='order-last col-12 order-md-first col-md-6'>
                <img class='img-fluid' src="/images/root.jpg"/>
              </div>

              <div class='order-first col-12 order-md-last col-md-6 text-container'>
                <div class='row no-gutters h-100 justify-content-center align-items-center'>
                  <div class='col-10 col-md-9 col-lg-8 col-xl-7'>
                    <p class='text-header'><a href='/users/login' className="redirect">And here, for our existing users.</a></p>
                  </div>
                </div>
              </div>
            </div>

        </div>

    </Layout>


    );
  }
}

module.exports = Home;