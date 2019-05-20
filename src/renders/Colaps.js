import React, {Component } from 'react';
import PropTypes from  'prop-types'

class Colaps extends Component{

    constructor(props){
        super(props)

        this.state = {
            isExpanded: false
        }
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
    }


    render(){
        const { title, children } = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
         return (

            <div className={`panel ${isExpanded ? 'is-expanded': ''}`} onClick={(e) => this.handleToggle(e)}>
                <div className="panel-heading">
                    <h2>{ title }</h2>
                
                </div>
                <div className="panel-collaspe" style={{ height: currentHeight+'px'}}>
                    <div className="panel-body" ref="inner">
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