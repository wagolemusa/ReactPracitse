import React, {Component } from 'react';
import PropTypes from  'prop-types'

class Colaps extends Component{

    constructor(props){
        super(props)
    }
    render(){
        const { title, children } = this.props;
        return (

            <div className="panel">
                <div className="panel-heading">
                    <h2>{ title }</h2>
                
                </div>
                <div className="panel-collape">
                    <div className="pane-body">
                        { children }
                    </div>
                
                </div>
            </div>
        )
    }
}

Colaps.propTypes = {
    title: PropTypes.string,
};

export default Colaps