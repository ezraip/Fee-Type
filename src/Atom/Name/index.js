import React from 'react';

export default class Name extends React.Component {
    render() {
        return (
            <div>{this.props.author.name}</div>
        )
    }
}