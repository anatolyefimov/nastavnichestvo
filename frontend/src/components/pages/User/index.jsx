import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username
        }
    }
    render() {
        return <h1>hi, {this.state.username}</h1>
    }
}

export default User;