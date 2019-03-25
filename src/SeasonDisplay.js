import React from 'react';

const SeasonDisplay = (props) => {
    console.log(props.lat);
    console.log(props.long);
    return <div>Season Display {props.lat}, {props.long}</div>
}

export default SeasonDisplay;