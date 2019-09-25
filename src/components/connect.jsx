import React, { Component } from 'react';
import ConnectForm from './connectForm'
import '../css/connect.css'

class Connect extends Component {
    state = { 
        isConnectOpen: false,
    }
    toggleConnect = () => {
        this.setState(prevState => ({
            isConnectOpen: !prevState.isConnectOpen
        }))
    }
    render() { 
        const { isConnectOpen  } = this.state
        return ( 
            <React.Fragment>
            {!isConnectOpen && <div onClick={this.toggleConnect} className={this.props.atTop ? "hidden": null} id="connectBtn">CONNECT</div>}
            {isConnectOpen && <ConnectForm toggleConnect={this.toggleConnect}/>}
            </React.Fragment>
        );
    }
}

export default Connect;
