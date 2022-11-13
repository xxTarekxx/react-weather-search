import "./current-weather.css";

const CurrentWeather = ({ data }) => {
	return (
		<div className='weather'>
			<div className='top'>
				<div>
					<p className='city'>{data.city}</p>
					<p className='weather-description'>{data.weather[0].description}</p>
				</div>
				<img
					src={`icons/${data.weather[0].icon}.png`}
					alt='weather'
					className='weather-icon'
				/>
			</div>
			<div className='bottom'>
				<p className='temprature'>{Math.round(data.main.temp)}°</p>
				<div className='details'>
					<div className='parameter-row'>
						<span className='parameter-label top'>Details</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Feels Like</span>
						<span className='parameter-value'>
							{Math.round(data.main.feels_like)}
						</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Wind</span>
						<span className='parameter-value'>
							{Math.round(data.wind.speed)} MPH
						</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Humidity</span>
						<span className='parameter-value'>
							{Math.round(data.main.humidity)}%
						</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>pressure</span>
						<span className='parameter-value'>
							{Math.round(data.main.pressure)} hpa
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CurrentWeather;
