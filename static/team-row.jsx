define(function(require) {
    var React = require('react');

    return React.createClass({
        displayName: 'TeamRow',
        render: function () {
            return (
                <li className='team-row'>
                    Team name: {this.props.name}
                </li>
            );
        }
    });
});
