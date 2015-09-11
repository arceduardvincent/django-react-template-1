window.jQuery = window.$ = require("jquery");

require("bootstrap");

require("../less/site.less");

var React = require("react");

var Timer = require("./timer.jsx");

var Countdown = require("./countdown.jsx");

window.homepage = function () {
    React.render(
        <Timer />,
        document.getElementById("timer")
    );

    React.render(
        <Countdown end={new Date(2015, 8, 10, 14, 24, 34)} />,
        document.getElementById("countdown")
    );
}
