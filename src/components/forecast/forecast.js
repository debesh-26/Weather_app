import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const weekdays = [
  "Monday",
  "Tuseday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  console.log(data);
  const dayIAWeek = new Date().getDay();
  const foreCastDays = weekdays
    .slice(dayIAWeek, weekdays.length)
    .concat(weekdays.slice(0, dayIAWeek));
  return (
    <>
      <label className="titel">Forecast+</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-forecast">
                  <img
                    alt="weather"
                    className="icon"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{foreCastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C/
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details">
                <div className="daily-details-item">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-item">
                  <label>pressure</label>
                  <label>{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-item">
                  <label>sea_level</label>
                  <label>{item.main.sea_level}hPa</label>
                </div>
                <div className="daily-details-item">
                  <label>clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-item">
                  <label>wind speed</label>
                  <label>{item.wind.speed}m/s</label>
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
