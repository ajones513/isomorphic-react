define(function(require) {
    var React = require('react');
    var TeamRow = require('./team-row.js');

    return React.createClass({
        displayName: 'FootballTable',
        render: function () {
            return (
                <div className='football-table'>
                    <h3>{this.props.title}</h3>
                    
                    <ul>
                    {this.props.rows.map(function(entry) {
                        return <TeamRow name={entry}/>;
                    })}
                    </ul>
                </div>
            );
        }
    });
});
