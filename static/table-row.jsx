/** @jsx React.DOM */
define(function(require) {
    var React = require('react');

    return React.createClass({
        render: function () {
            return (
                <div className='table-row'>
                    Team name: {this.props.teamName}
                </div>
            );
        }
    });
});
