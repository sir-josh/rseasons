import React from "react";

const seasonConfig = {
    winter: {
        screenText: "Burr, it is chilly",
        iconName: "snowflakes"
    },
    summer: {
        screenText: "Let's hit the beach",
        iconName: "sun"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter': 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { screenText, iconName} = seasonConfig[season];

    return (
        <div>
            <i className={`massive ${iconName} icon`}></i>
            <h1>{screenText}</h1>
            <i className={`massive ${iconName} icon`}></i>   
        </div>
    );
}

export default SeasonDisplay;