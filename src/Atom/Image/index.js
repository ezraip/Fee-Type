import React from 'react';

export default class Image extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <img
                src={this.props.author.avatarUrl}
                alt={this.props.author.name}
                width="200px"
            />
        )
    }
}