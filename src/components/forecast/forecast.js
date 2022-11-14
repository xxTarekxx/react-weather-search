import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data }) => {
    const dayInAweek = new Date().getDay();
    const foreCastDays = WEEK_DAYS.slice(dayInAweek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAweek),
    );
    return (
        <>
            <label className='title'> Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img
                                        className='icon-small'
                                        src={`icons/${item.weather[0].icon}.png`}
                                        alt='weather'
                                    />
                                    <label className='day'>{foreCastDays[idx]}</label>
                                    <label className='description'>
                                        {item.weather[0].description}
                                    </label>
                                    <label className='min-max'>
                                        {Math.round(item.main.temp_max)}°
                                        {Math.round(item.main.temp_min)}°
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind Speed:</label>
                                    <label>{item.wind.speed} MPH</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level} M</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels Like:</label>
                                    <label>{Math.round(item.main.feels_like)}° M</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};
export default Forecast;
