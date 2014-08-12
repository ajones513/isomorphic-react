var express = require('express');
var React = require('react');
var requirejs = require('requirejs');

requirejs.config({nodeRequire: require});

var httpServer = express();
httpServer.listen(4000);
httpServer.use('/static', express.static('static'));

/////////// END OF BORING STUFF //////////////

httpServer.get('/', function (request, response) {
    
    requirejs(['static/football-table.js'], function(FootballTableComponent) {
        
        var output = '<link href="/static/styles.css" rel="stylesheet">';
        
        // Getting data
        var footballTableData = {entries: ['Arsenal', 'Man Utd', 'Man City', 'Sunderland']};
        
        // Server side HTML rendering
        output += '<div id="ft-1">';
        output += React.renderComponentToString(
                      FootballTableComponent(footballTableData)
                  );
        output += '</div>';
        
        // Output the data in the HTML too
        output += ('<script>window.dataUsedForServerRendering = ' + JSON.stringify(footballTableData) + ';</script>');
        
        // Client side initialisation <script>
        output += '<script src="http://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.11/require.min.js"></script>';
        output += '<script src="/static/client.js"></script>';
        
        // Sending the server response
        response.send(output);
        
    });
});
