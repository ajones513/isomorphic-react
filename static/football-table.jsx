/** @jsx React.DOM */
define(function(require) {
    var React = require('react');
    var TableRow = require('./table-row.js');

    return React.createClass({
        render: function () {
            var reactTableRows = [];
            
            this.props.entries.forEach(function (entry) {
                reactTableRows.push(
                    <TableRow teamName={entry}/>
                );
            });
            
            return (
                <div className='football-table'>
                    <h3>This is a football table</h3>
                    
                    {reactTableRows}
                </div>
            );
        }
    });
});
