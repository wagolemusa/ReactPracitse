import React, {Component } from 'react';
import Form from '../renders/Form'

// Component to corvert the list of card componets
const  CardList = (props) =>(
    <div>
        {props.profiles.map(profile => <Card key={profile.id}{...profile}/>)}
    </div>
)


// Renders information about github profile
class Card extends React.Component {
    render(){
        const profile = this.props;
        return(
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.login}</div>
                    <div className="name">{profile.name}</div>
                    <div className="name">{profile.email}</div>
                    <div className="company">{profile.company}  </div>
                </div>
            </div>
        )
    }
}


//  To read input from the user
class Fetch extends Component{

    state = {
        profiles: [],
    }

    addNewProfile = (profileData) =>{
        this.setState(prevState =>({
            profiles: [...prevState.profiles, profileData]

        }));
    }
    render(){
        
        return(
            <div className="container">
                <h3>Fetch Github users by using username</h3>
                <Form onSubmit={this.addNewProfile}/>
                <br/>
                <CardList profiles={this.state.profiles} />
            </div>
        )
    }
}

export default Fetch
