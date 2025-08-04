# 🌤️ Weather App

A modern, responsive weather application built with vanilla JavaScript, HTML, and CSS. Features beautiful animated SVG icons, detailed weather information, and a sleek dark/light mode interface.

## ✨ Features

- **Current Weather**: Real-time weather conditions with animated SVG icons
- **Hourly Forecast**: 24-hour weather predictions
- **5-Day Forecast**: Extended weather outlook
- **Location Services**: Automatic location detection or manual city search
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Weather Details**: UV index, air quality, sunrise/sunset times, humidity, wind speed
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Beautiful Animations**: Dynamic weather backgrounds and particle effects
- **Professional Icons**: Custom SVG weather icons with gradients and effects

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Internet connection
- OpenWeatherMap API key (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

3. **Configure the API key**
   - Copy `config.js` and update it with your API key:
   ```javascript
   const CONFIG = {
       OPENWEATHERMAP_API_KEY: 'your_actual_api_key_here',
       API_URL: 'https://api.openweathermap.org/data/2.5'
   };
   ```

4. **Run the application**
   - Open `index.html` in your browser
   - Or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8080
   ```

## 🔧 Configuration

### Environment Variables (for deployment)

For production deployments, you can use environment variables:

- `OPENWEATHERMAP_API_KEY`: Your OpenWeatherMap API key

### Local Development

1. Copy `.env.example` to `.env`
2. Update the values in `.env`
3. The app will automatically use these values

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML file
├── script.js           # Main JavaScript application
├── styles.css          # CSS styles and animations
├── icons.js            # Custom SVG weather icons
├── config.js           # Configuration file (not in git)
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── API_SETUP.md        # API setup instructions
```

## Usage

### Search by City
1. Type a city name in the search bar
2. Press Enter or click the search button
3. View current weather and 5-day forecast

### Use Current Location
1. Click "Use My Location" button
2. Allow location access when prompted
3. Weather data for your current location will be displayed

### Toggle Dark Mode
1. Click the moon/sun icon in the header
2. Theme preference is saved automatically

## Weather Conditions & Backgrounds

The app features dynamic backgrounds that change based on weather conditions:

- **Sunny**: Golden gradient with animated sun glow
- **Rainy**: Gray gradient with animated rain drops
- **Snowy**: Light gradient with animated snowflakes
- **Cloudy**: Neutral gradient for overcast conditions

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## API Information

This application uses the OpenWeatherMap API:
- **Current Weather**: `/weather` endpoint
- **5-Day Forecast**: `/forecast` endpoint
- **Rate Limit**: 1000 calls/day (free tier)
- **Data Update**: Every 10 minutes

## Error Handling

The app includes comprehensive error handling for:
- Invalid city names
- Network connectivity issues
- API rate limiting
- Geolocation errors
- Missing API key

## Responsive Design

The application is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## Performance Features

- Efficient API calls with error handling
- Smooth CSS transitions and animations
- Optimized images and icons
- Local storage for theme preferences
- Backdrop blur effects for modern appearance

## Customization

You can easily customize:
- Color scheme in CSS variables
- Weather background animations
- API endpoints and data sources
- UI components and layout

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify your API key is correctly configured
3. Ensure you have an active internet connection
4. Check OpenWeatherMap service status

---

**Oracle Weather** - Professional weather forecasting with modern design and comprehensive features.