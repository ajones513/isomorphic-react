requirejs.config({
    paths: {
        react: 'https://unpkg.com/react@15.3.2/dist/react.min',
        'react-dom': 'https://unpkg.com/react-dom@15.3.2/dist/react-dom.min'
    }
});

/////////// END OF BORING STUFF //////////////

require(['react', 'react-dom', '/static/football-table.js'], function (React, ReactDom, FootballTableComponent) {
    
    // Initialise the component on the client side
    ReactDom.render(
        React.createElement(FootballTableComponent, window.dataUsedForServerRendering),
        document.getElementById('ft-1')
    );
    
    setTimeout(function () {
        // Simulating new pushed data
        window.dataUsedForServerRendering.rows.push('Liverpool');
        ReactDom.render(
            React.createElement(FootballTableComponent, window.dataUsedForServerRendering),
            document.getElementById('ft-1')
        );
    }, 2500);

});

