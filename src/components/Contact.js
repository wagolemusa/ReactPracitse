import React, { Component } from 'react';
import icons from '../images/icons.png'

class Contact extends Component{

    // intaital state of the app
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            constacts: []
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    } 
    
    componentDidMount(){
        this.fetchData();
    }
   

    fetchData(){
        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.results.map(user => (
            {
                name: `${user.name.first} ${user.name.last}`,
                username: `${user.login.username}`,
                email: `${user.email}`,
                location: `${user.location.street}, ${user.location.city}`
            }

        )))
        .then(contacts => this.setState({
            contacts,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))

    }

    render(){
        const {isLoading, contacts} = this.state;
    return (        
        <div>
        <header>
            <img src={icons} /> 
            <h1>Fetching Data <button className="btn btn-sm-danger">Fetch Now</button> </h1>
        </header>                                                                                             
        <div className={`content ${isLoading ? `is_loading` : ''}`}>
        <div className="panel-group">

            {
                !isLoading && contacts.length > 0 ? contacts.map(contact =>{
                    const {username, name, email, location} = contact
                    return <p key={contact.username}>
                    <p>{name}</p>
                    <p>{username}</p>
                    <p>{email}<br/>{location}</p>

                    </p>
        
                }) : null
            }
        </div>
     <div className="loader">
            <div className="icon">
            </div>
        </div>
    </div>
</div>
    )
    }
}
export default Contact