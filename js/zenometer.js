const React = require('react');
const SunCalc = require('suncalc');

const Zenometer = React.createClass({
  render() {
    const {time} = this.props;
    const sunPosition = SunCalc.getPosition(time.date,  37, -122);

    const width = 64;
    const height = 512;

    const pinPosition = 256 - sunPosition.altitude / (Math.PI / 2) * 256;

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
           viewBox={`0 0 ${width} ${height}`}
           width={width}
           height={height}
           className="zenometer">
        <rect className="area above-horizon" x={0} y={0} width={width} height={height/2} />
        <rect className="area below-horizon" x={0} y={height/2} width={width} height={height/2} />

        <path className="pin" d={`M ${0} ${pinPosition} L ${width} ${pinPosition}`}> </path>
      </svg>
    );
  }
});

export default Zenometer;