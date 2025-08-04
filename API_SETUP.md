# 🔑 API Setup Guide

This guide will help you set up the OpenWeatherMap API key required for the Weather App.

## Step 1: Create OpenWeatherMap Account

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Click "Sign Up" in the top right corner
3. Fill out the registration form:
   - Username
   - Email address
   - Password
   - Confirm password
4. Agree to the terms and conditions
5. Click "Create Account"
6. Check your email and verify your account

## Step 2: Generate API Key

1. Log in to your OpenWeatherMap account
2. Navigate to [API Keys section](https://home.openweathermap.org/api_keys)
3. You should see a default API key already generated
4. If not, click "Generate" to create a new API key
5. Copy your API key (it looks like: `abc123def456ghi789jkl012mno345pq`)

## Step 3: Configure the Weather App

### Option A: Direct Configuration (Recommended for local development)

1. Open the `config.js` file in your project
2. Replace `'your_openweathermap_api_key_here'` with your actual API key:

```javascript
const CONFIG = {
    OPENWEATHERMAP_API_KEY: 'abc123def456ghi789jkl012mno345pq', // Your actual API key
    API_URL: 'https://api.openweathermap.org/data/2.5'
};
```

### Option B: Environment Variables (Recommended for deployment)

1. Create a `.env` file in your project root
2. Add your API key:

```
OPENWEATHERMAP_API_KEY=abc123def456ghi789jkl012mno345pq
```

## Step 4: Test Your Setup

1. Open `index.html` in your browser
2. Allow location access when prompted, or search for a city
3. If you see weather data, your API key is working correctly
4. If you see an error, double-check your API key

## API Key Activation

⚠️ **Important**: New API keys may take up to 2 hours to become active. If you're getting authentication errors immediately after creating your account, wait a bit and try again.

## API Limits

### Free Plan Limits:
- 1,000 API calls per day
- 60 API calls per minute
- Current weather data
- 5-day forecast
- Historical data (limited)

### Paid Plans:
- Higher call limits
- More detailed data
- Additional features

For most personal projects, the free plan is sufficient.

## Troubleshooting

### Common Issues:

1. **"Invalid API key" error**
   - Double-check your API key is correct
   - Ensure there are no extra spaces
   - Wait up to 2 hours for new keys to activate

2. **"API key not found" error**
   - Make sure you've saved the `config.js` file
   - Refresh your browser
   - Check browser console for errors

3. **Rate limit exceeded**
   - You've made too many requests
   - Wait for the limit to reset (usually 1 minute)
   - Consider caching responses for development

4. **CORS errors**
   - Serve the app through a local server
   - Don't open `index.html` directly as a file

### Getting Help:

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [OpenWeatherMap FAQ](https://openweathermap.org/faq)
- [Contact OpenWeatherMap Support](https://openweathermap.org/support)

## Security Best Practices

1. **Never commit API keys to version control**
   - Use `.gitignore` to exclude `config.js`
   - Use environment variables for deployment

2. **Restrict API key usage** (optional)
   - In OpenWeatherMap dashboard, you can restrict keys to specific domains
   - Useful for production deployments

3. **Monitor usage**
   - Check your API usage in the OpenWeatherMap dashboard
   - Set up alerts if approaching limits

## Alternative Weather APIs

If you prefer to use a different weather service:

- [WeatherAPI](https://www.weatherapi.com/)
- [AccuWeather](https://developer.accuweather.com/)
- [Weather Underground](https://www.wunderground.com/weather/api/)

Note: Using alternative APIs will require code modifications in `script.js`.

---

**Need help?** Open an issue on GitHub or check the main README.md for more information.