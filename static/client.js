requirejs.config({
    'paths': {
        'react': 'http://fb.me/react-0.11.1'           
    }
});

/////////// END OF BORING STUFF //////////////

require(['react', '/static/football-table.js'], function (React, FootballTableComponent) {
    
    // Initialise the component on the client side
    window.renderedFootballTableComponent =
        React.renderComponent(
            FootballTableComponent(window.dataUsedForServerRendering),
            document.getElementById('ft-1')
        );
    
});

setTimeout(function () {
    // Simulating new pushed data
    window.dataUsedForServerRendering.entries.push('Liverpool');
    window.renderedFootballTableComponent.setProps(window.dataUsedForServerRendering);
}, 2500);

