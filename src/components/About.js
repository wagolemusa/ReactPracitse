import React, { Component } from 'react';


class About extends Component{
    render(){
        return (
            <div className="container">
                <h4 className="center">About</h4>
                <p>The email confirmation should contain a unique URL that a user simply needs to click in order to confirm his/her account. Ideally, the URL should look something like this - http://yourapp.com/confirm/ The key here is the id We are going to encode the user email (along with a timestamp) in the id using the itsdangerous package.</p>
             </div>
        )
    }
}
export default About