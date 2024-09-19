import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        This is the homepage.

        <Button variant="btn btn-success" onClick={() => ('/home')}>Click button to view products
        </Button>
      </div>
    )
  }
}
export default Home;