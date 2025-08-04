// Weather App JavaScript
class WeatherApp {
    constructor() {
        // Try to use CONFIG if available, otherwise use fallback for GitHub Pages
        this.apiKey = (typeof CONFIG !== 'undefined' && CONFIG.OPENWEATHERMAP_API_KEY !== 'YOUR_OPENWEATHERMAP_API_KEY') 
            ? CONFIG.OPENWEATHERMAP_API_KEY 
            : '833fc4bd26d45835d2d1238cfda12782'; // Fallback API key for GitHub Pages
        this.apiUrl = (typeof CONFIG !== 'undefined') ? CONFIG.API_URL : 'https://api.openweathermap.org/data/2.5';
        this.currentWeatherData = null;
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        this.initializeApp();
    }

    initializeApp() {
        this.initializeElements();
        this.attachEventListeners();
        this.initializeDarkMode();
        this.updateDateTime();
        

        
        // Show API key warning if not set
        if (this.apiKey === 'YOUR_OPENWEATHERMAP_API_KEY') {
            console.warn('Please set your OpenWeatherMap API key in script.js');
        }
    }

    initializeElements() {
        // Form elements
        this.weatherForm = document.getElementById('weatherForm');
        this.cityInput = document.getElementById('cityInput');
        this.locationBtn = document.getElementById('locationBtn');
        this.darkModeToggle = document.getElementById('darkModeToggle');
        
        // Create suggestions dropdown
        this.createSuggestionsDropdown();

        // Display elements
        this.currentWeatherSection = document.getElementById('currentWeather');
        this.forecastSection = document.getElementById('forecast');
        this.hourlyForecastSection = document.getElementById('hourlyForecast');
        this.weatherMapSection = document.getElementById('weatherMap');

        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.weatherBackground = document.getElementById('weatherBackground');

        // Weather data elements
        this.cityName = document.getElementById('cityName');
        this.currentDate = document.getElementById('currentDate');
        this.temperature = document.getElementById('temperature');
        this.weatherIcon = document.getElementById('weatherIcon');
        this.weatherCondition = document.getElementById('weatherCondition');
        this.feelsLike = document.getElementById('feelsLike');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.visibility = document.getElementById('visibility');
        this.pressure = document.getElementById('pressure');
        this.uvIndex = document.getElementById('uvIndex');
        this.sunrise = document.getElementById('sunrise');
        this.sunset = document.getElementById('sunset');
        this.airQuality = document.getElementById('airQuality');
        this.forecastContainer = document.getElementById('forecastContainer');
        this.hourlyContainer = document.getElementById('hourlyContainer');
        this.hourlyForecastSection = document.getElementById('hourlyForecast');
        this.weatherMapSection = document.getElementById('weatherMap');

    }

    attachEventListeners() {
        this.weatherForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        this.locationBtn.addEventListener('click', () => this.getCurrentLocation());
        this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        
        // Add input event for search suggestions
        this.cityInput.addEventListener('input', (e) => this.handleInputChange(e));
        this.cityInput.addEventListener('focus', () => this.showSuggestions());
        document.addEventListener('click', (e) => this.handleDocumentClick(e));
    }

    initializeDarkMode() {
        if (this.isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            this.darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.removeAttribute('data-theme');
            this.darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.initializeDarkMode();
    }

    // Create suggestions dropdown
    createSuggestionsDropdown() {
        this.suggestionsContainer = document.createElement('div');
        this.suggestionsContainer.className = 'suggestions-dropdown';
        this.suggestionsContainer.style.display = 'none';
        
        // Insert after the city input
        this.cityInput.parentNode.insertBefore(this.suggestionsContainer, this.cityInput.nextSibling);
        
        // Popular cities for suggestions
        this.popularCities = [
            'New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Dubai', 'Singapore',
            'Los Angeles', 'Chicago', 'Toronto', 'Berlin', 'Madrid', 'Rome', 'Amsterdam',
            'Bangkok', 'Mumbai', 'Delhi', 'Shanghai', 'Beijing', 'Seoul', 'Moscow',
            'Istanbul', 'Cairo', 'Lagos', 'São Paulo', 'Mexico City', 'Buenos Aires'
        ];
    }

    // Handle input change for suggestions
    handleInputChange(e) {
        const query = e.target.value.trim();
        
        if (query.length < 2) {
            this.hideSuggestions();
            return;
        }
        
        const filteredCities = this.popularCities.filter(city => 
            city.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
        
        this.displaySuggestions(filteredCities);
    }

    // Display suggestions
    displaySuggestions(cities) {
        if (cities.length === 0) {
            this.hideSuggestions();
            return;
        }
        
        this.suggestionsContainer.innerHTML = '';
        
        cities.forEach(city => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = city;
            suggestionItem.addEventListener('click', () => {
                this.cityInput.value = city;
                this.hideSuggestions();
                this.getWeatherByCity(city);
            });
            this.suggestionsContainer.appendChild(suggestionItem);
        });
        
        this.suggestionsContainer.style.display = 'block';
    }

    // Show suggestions
    showSuggestions() {
        if (this.cityInput.value.trim().length >= 2) {
            this.handleInputChange({ target: this.cityInput });
        }
    }

    // Hide suggestions
    hideSuggestions() {
        this.suggestionsContainer.style.display = 'none';
    }

    // Handle document click to hide suggestions
    handleDocumentClick(e) {
        if (!this.cityInput.contains(e.target) && !this.suggestionsContainer.contains(e.target)) {
            this.hideSuggestions();
        }
    }

    updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        this.currentDate.textContent = now.toLocaleDateString('en-US', options);
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        const city = this.cityInput.value.trim();
        if (city) {
            await this.getWeatherByCity(city);
        }
    }

    async getCurrentLocation() {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by this browser.');
            return;
        }

        this.showLoading();
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                await this.getWeatherByCoords(latitude, longitude);
            },
            (error) => {
                this.hideLoading();
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.error('Location access denied by user.');
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error('Location information is unavailable.');
                        break;
                    case error.TIMEOUT:
                        console.error('Location request timed out.');
                        break;
                    default:
                        console.error('An unknown error occurred while retrieving location.');
                        break;
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000
            }
        );
    }

    async getWeatherByCity(city) {
        this.showLoading();
        try {
            console.log(`Fetching weather for city: ${city}`);
            console.log(`API URL: ${this.apiUrl}/weather?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`);
            
            const response = await fetch(
                `${this.apiUrl}/weather?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`
            );
            
            console.log(`Response status: ${response.status}`);
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('API Error:', errorData);
                
                if (response.status === 404) {
                    throw new Error('City not found. Please check the spelling and try again.');
                } else if (response.status === 401) {
                    throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
                } else if (response.status === 429) {
                    throw new Error('Too many requests. Please wait a moment and try again.');
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Weather data received:', data);
            this.currentWeatherData = data;
            await this.getForecastData(data.coord.lat, data.coord.lon);
            this.displayWeatherData(data);
            this.updateWeatherBackground(data.weather[0].main.toLowerCase());
        } catch (error) {
            console.error(`Weather data unavailable: ${error.message}. Please try again later.`);
        } finally {
            this.hideLoading();
        }
    }

    async getWeatherByCoords(lat, lon) {
        this.showLoading();
        try {
            const response = await fetch(
                `${this.apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
            );
            
            if (!response.ok) {
                throw new Error('Weather data unavailable for your location');
            }
            
            const data = await response.json();
            this.currentWeatherData = data;
            await this.getForecastData(lat, lon);
            this.displayWeatherData(data);
            this.updateWeatherBackground(data.weather[0].main.toLowerCase());
        } catch (error) {
            console.error(error.message);
        } finally {
            this.hideLoading();
        }
    }

    async getForecastData(lat, lon) {
        try {
            const response = await fetch(
                `${this.apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
            );
            
            if (response.ok) {
                const forecastData = await response.json();
                this.displayForecastData(forecastData);
            }
        } catch (error) {
            console.error('Forecast data unavailable:', error);
        }
    }

    displayWeatherData(data) {
        // Update city name and clear input
        this.cityName.textContent = `${data.name}, ${data.sys.country}`;
        this.cityInput.value = '';
        
        // Update temperature
        this.temperature.textContent = Math.round(data.main.temp);
        
        // Update weather icon with enhanced SVG
        const iconCode = data.weather[0].icon;
        this.weatherIcon.innerHTML = WeatherIcons.getSVGIcon(iconCode, 80);
        
        // Update weather condition
        this.weatherCondition.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
        this.feelsLike.textContent = `Feels like ${Math.round(data.main.feels_like)}°C`;
        
        // Update weather details
        this.humidity.textContent = `${data.main.humidity}%`;
        this.windSpeed.textContent = `${data.wind.speed} m/s`;
        this.visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
        this.pressure.textContent = `${data.main.pressure} hPa`;
        
        // Update sunrise and sunset
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);
        this.sunrise.textContent = sunrise.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        this.sunset.textContent = sunset.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        // Update additional weather details
        this.updateAdditionalWeatherDetails(data.coord.lat, data.coord.lon);
        
        // Add weather icon animation based on condition
        this.addWeatherIconAnimation(iconCode);
        
        // Show weather sections
        this.currentWeatherSection.classList.remove('hidden');
        this.updateDateTime();
        
        // Fetch and display hourly forecast
        this.getHourlyForecast(data.coord.lat, data.coord.lon);
    }

    displayForecastData(forecastData) {
        // Clear existing forecast
        this.forecastContainer.innerHTML = '';
        
        // Get daily forecasts (one per day)
        const dailyForecasts = this.processForecastData(forecastData.list);
        
        dailyForecasts.forEach(forecast => {
            const forecastItem = this.createForecastItem(forecast);
            this.forecastContainer.appendChild(forecastItem);
        });
        
        this.forecastSection.classList.remove('hidden');
    }

    processForecastData(forecastList) {
        const dailyData = {};
        
        forecastList.forEach(item => {
            const date = new Date(item.dt * 1000);
            const dateKey = date.toDateString();
            
            if (!dailyData[dateKey]) {
                dailyData[dateKey] = {
                    date: date,
                    temps: [],
                    weather: item.weather[0],
                    humidity: item.main.humidity,
                    windSpeed: item.wind.speed
                };
            }
            
            dailyData[dateKey].temps.push(item.main.temp);
        });
        
        // Convert to array and get next 5 days
        return Object.values(dailyData)
            .slice(0, 5)
            .map(day => ({
                ...day,
                maxTemp: Math.round(Math.max(...day.temps)),
                minTemp: Math.round(Math.min(...day.temps))
            }));
    }

    createForecastItem(forecast) {
        const item = document.createElement('div');
        item.className = 'forecast-item';
        
        const dayName = forecast.date.toLocaleDateString('en-US', { weekday: 'short' });
        const iconCode = forecast.weather.icon;
        
        item.innerHTML = `
            <div class="forecast-day">${dayName}</div>
            <div class="forecast-icon">
                ${WeatherIcons.getSVGIcon(iconCode, 40)}
            </div>
            <div class="forecast-condition">${forecast.weather.main}</div>
            <div class="forecast-temps">
                <span class="forecast-high">${forecast.maxTemp}°</span>
                <span class="forecast-low">${forecast.minTemp}°</span>
            </div>
        `;
        
        return item;
    }

    updateWeatherBackground(weatherCondition) {
        // Remove existing weather classes
        this.weatherBackground.className = 'weather-background';
        
        // Add new weather class based on condition
        if (weatherCondition.includes('clear') || weatherCondition.includes('sun')) {
            this.weatherBackground.classList.add('sunny');
        } else if (weatherCondition.includes('rain') || weatherCondition.includes('drizzle')) {
            this.weatherBackground.classList.add('rainy');
        } else if (weatherCondition.includes('snow')) {
            this.weatherBackground.classList.add('snowy');
        } else if (weatherCondition.includes('cloud')) {
            this.weatherBackground.classList.add('cloudy');
        }
        
        // Create particles for snow effect
        if (weatherCondition.includes('snow')) {
            this.createSnowParticles();
        }
    }

    createSnowParticles() {
        const particles = document.getElementById('particles');
        particles.innerHTML = '';
        
        for (let i = 0; i < 50; i++) {
            const snowflake = document.createElement('div');
            snowflake.innerHTML = '❄';
            snowflake.style.position = 'absolute';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.animationDelay = Math.random() * 10 + 's';
            snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
            snowflake.style.color = 'rgba(255, 255, 255, 0.8)';
            particles.appendChild(snowflake);
        }
    }

    showLoading() {
        this.loadingSpinner.classList.remove('hidden');
    }

    hideLoading() {
        this.loadingSpinner.classList.add('hidden');
    }

       // Update additional weather details (UV index, air quality, sunrise/sunset)
    async updateAdditionalWeatherDetails(lat, lon) {
        try {
            // Fetch UV Index
            const uvResponse = await fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
            if (uvResponse.ok) {
                const uvData = await uvResponse.json();
                this.uvIndex.textContent = Math.round(uvData.value);
            }

            // Fetch Air Quality
            const airResponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
            if (airResponse.ok) {
                const airData = await airResponse.json();
                const aqi = airData.list[0].main.aqi;
                const aqiLabels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
                this.airQuality.textContent = aqiLabels[aqi - 1] || 'Unknown';
            }
        } catch (error) {
            console.error('Error fetching additional weather details:', error);
        }
    }

    // Add weather icon animation based on condition
    addWeatherIconAnimation(iconCode) {
        const iconContainer = this.weatherIcon;
        iconContainer.classList.remove('sunny-animation', 'rainy-animation', 'cloudy-animation');
        
        if (iconCode.includes('01')) {
            iconContainer.classList.add('sunny-animation');
        } else if (iconCode.includes('09') || iconCode.includes('10') || iconCode.includes('11')) {
            iconContainer.classList.add('rainy-animation');
        } else if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) {
            iconContainer.classList.add('cloudy-animation');
        }
    }

    // Get hourly forecast data
    async getHourlyForecast(lat, lon) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
            if (response.ok) {
                const data = await response.json();
                this.displayHourlyForecast(data.list.slice(0, 8)); // Next 24 hours (8 x 3-hour intervals)
            }
        } catch (error) {
            console.error('Error fetching hourly forecast:', error);
        }
    }

    // Display hourly forecast
    displayHourlyForecast(hourlyData) {
        this.hourlyContainer.innerHTML = '';
        
        hourlyData.forEach(item => {
            const date = new Date(item.dt * 1000);
            const time = date.getHours() + ':00';
            
            const hourlyItem = document.createElement('div');
            hourlyItem.className = 'hourly-item';
            
            hourlyItem.innerHTML = `
                <div class="hourly-time">${time}</div>
                <div class="hourly-icon">${WeatherIcons.getSVGIcon(item.weather[0].icon, 32)}</div>
                <div class="hourly-temp">${Math.round(item.main.temp)}°</div>
                <div class="hourly-desc">${item.weather[0].main}</div>
            `;
            
            this.hourlyContainer.appendChild(hourlyItem);
        });
        
        this.hourlyForecastSection.classList.remove('hidden');
    }
}

// Initialize the weather app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});

// Service Worker Registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}