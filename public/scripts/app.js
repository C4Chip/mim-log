'use strict';

var app = {
    options: []
};

var whenClick = function whenClick(e) {
    e.preventDefault();

    var option = e.target.elements.myinput.value;

    if (option) {

        app.options.push(option);
        e.target.elements.myinput.value = '';
        render();
    }
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            { onSubmit: whenClick },
            React.createElement('input', { type: 'text', name: 'myinput' }),
            React.createElement(
                'button',
                null,
                'Click to Submit'
            )
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                var d = new Date().toLocaleString();

                return React.createElement(
                    'li',
                    { key: option },
                    d,
                    ': ',
                    option
                );
            })
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
