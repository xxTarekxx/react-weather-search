import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Egypt</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img src="icons/01d.png" alt="weather" className="weather-icon" />
            </div>
            <div className="bottom">
                <p className="temprature">18°</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">20°</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">10 MPH</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">pressure</span>
                        <span className="parameter-value">15 hpa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather;