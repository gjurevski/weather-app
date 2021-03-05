const weatherData = {
  tempUnit: 'C',
  windSpeedUnit: 'm/s',
  days: [
    {
      day: 'Monday',
      temp: 22,
      windDirection: 'north-east',
      windSpeed: 10,
      type: 'sunny'
    },
    {
      day: 'Tuesday',
      temp: 17,
      windDirection: 'east',
      windSpeed: 22,
      type: 'windy'
    },
    {
      day: 'Wednesday',
      temp: 15,
      windDirection: 'north-west',
      windSpeed: 7,
      type: 'cloudy'
    },
    {
      day: 'Thursday',
      temp: 12,
      windDirection: 'north',
      windSpeed: 14,
      type: 'rainy'
    }
  ]
};

const mainSection = document.getElementById('main');

weatherData.days.forEach(day => {
  mainSection.appendChild(cardGenerator(day));
});

function cardGenerator(dayDetails) {
  // Creation of elements
  const dayCard = document.createElement('article');
  const seeDetailsBtn = document.createElement('button');
  const cardTitle = document.createElement('h3');
  const weatherInfo = document.createElement('p');

  // Assignment of data
  weatherInfo.innerText = 'Temperature: ' + dayDetails.temp + ' degrees';
  dayCard.className = 'card day-card';
  cardTitle.innerText = dayDetails.day;
  seeDetailsBtn.className = 'btn';
  seeDetailsBtn.innerText = 'See More';

  // Adding the click listener to the see more button
  seeDetailsBtn.addEventListener('click', () => {
    openWidget(dayDetails);
  });

  dayCard.appendChild(cardTitle);
  dayCard.appendChild(weatherInfo);
  dayCard.appendChild(seeDetailsBtn);

  return dayCard;
}

/**
 * @param day The details of the day
 */
function openWidget(day) {
  const weatherWidget = document.createElement('div');
  weatherWidget.className = 'weather-widget';

  const weatherWidgetContent = document.createElement('div');
  weatherWidgetContent.className = 'weather-widget-content';

  const weatherWidgetTitle = document.createElement('h5');
  weatherWidgetTitle.innerText = day.day;

  const weatherWidgetTemp = document.createElement('p');
  weatherWidgetTemp.innerText = 'Temperature: ' + day.temp + '  degrees';

  const weatherWidgetDirection = document.createElement('p');
  weatherWidgetDirection.innerText = 'Wind Direction: ';

  const weatherWidgetArrow = document.createElement('span');
  weatherWidgetArrow.innerText = day.windDirection;
  weatherWidgetArrow.className = 'direction ' + day.windDirection;
  weatherWidgetDirection.appendChild(weatherWidgetArrow);

  const weatherWidgedWind = document.createElement('p');
  weatherWidgedWind.innerText = 'Wind Speed: ' + day.windSpeed;

  const weatherWidgetType = document.createElement('p');
  weatherWidgetType.innerText = day.type;

  const dismissWidgetBtn = document.createElement('button');
  dismissWidgetBtn.innerText = 'X';
  dismissWidgetBtn.className = 'dismiss-widget-btn';

  // Dismiss the widget
  dismissWidgetBtn.addEventListener('click', () => {
    dismissWidget(weatherWidget);
  });

  weatherWidgetContent.appendChild(weatherWidgetTitle);
  weatherWidgetContent.appendChild(weatherWidgetTemp);
  weatherWidgetContent.appendChild(weatherWidgetDirection);
  weatherWidgetContent.appendChild(weatherWidgedWind);
  weatherWidgetContent.appendChild(weatherWidgetType);
  weatherWidgetContent.appendChild(dismissWidgetBtn);

  weatherWidget.appendChild(weatherWidgetContent);

  mainSection.appendChild(weatherWidget);
}

function dismissWidget(weatherWidgetRef) {
  weatherWidgetRef.remove();
}
