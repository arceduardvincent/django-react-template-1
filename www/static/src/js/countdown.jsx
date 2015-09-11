var React = require("react");

module.exports = React.createClass({
    getInitialState: function() {
        return {millisecondsRemaining: (this.props.end - (new Date()))};
    },
    tick: function() {
        this.setState({millisecondsRemaining: (this.props.end - (new Date()))});
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function() {
        var seconds = this.state.millisecondsRemaining / 1000;
        var hours = Math.floor(seconds / 60 / 60);
        var minutes = Math.floor((seconds - hours * 60 * 60) / 60);
        seconds -= hours * 60 * 60 + minutes * 60;
        seconds = Math.floor(seconds);

        if (hours < 10) {
            hours = '0' + hours.toString();
        }

        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }

        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }

        return <div>Time Remaining: {hours}:{minutes}:{seconds}</div>;
    }
});
