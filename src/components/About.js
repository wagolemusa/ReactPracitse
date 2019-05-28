import React, { Component } from 'react';
import Colaps from '../renders/Colaps'
import '../index.css'
import icons from '../images/icons.png'

class About extends Component{

    // intaital state of the app
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            contacts: []
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    } 

    componentWillMount(){
        localStorage.getItem('contacts') && this.setState({
            contacts: JSON.parse(localStorage.getItem('contacts')),
            isLoading: false
        })
    }
    
    componentDidMount(){
        if(!localStorage.getItem('contacts')){
            this.fetchData();
        } else{
            console.log('Using data from localstorage')
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
        localStorage.setItem('contactsDate', Date.now());
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
        <div className="container">
        <div className="card1">
        <header>
            <img src={icons} /> 
            <h3>Fetching Data <button className="btn btn-sm-danger">Fetch Now</button> </h3>
        </header>                                                                                             
        <div className={`content ${isLoading ? `is_loading` : ''}`}>
        <div className="panel-group">

            {
                !isLoading && contacts.length > 0 ? contacts.map(contact =>{
                    const {username, name, email, location} = contact
                    return <Colaps key={contact.username} title={name}>
                    <p>{email}<br/> {location}</p>
                    <br/>
                    
                    </Colaps>
        
                }) : null
            }
        </div>
     <div className="loader">
            <div className="icon">
            </div>
        </div>
    </div>
</div>
</div>

    )
    }
}
export default About