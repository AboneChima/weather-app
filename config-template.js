// Configuration template for Weather App
// Copy this file to config.js and add your API key

const CONFIG = {
    // Get your API key from: https://openweathermap.org/api
    OPENWEATHERMAP_API_KEY: 'YOUR_OPENWEATHERMAP_API_KEY', // Replace with your actual API key
    API_URL: 'https://api.openweathermap.org/data/2.5'
};

// For platforms that support environment variables (Vercel, Netlify, etc.)
// This will be ignored in browser environments like GitHub Pages
if (typeof window === 'undefined' && typeof process !== 'undefined' && process.env) {
    CONFIG.OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY || CONFIG.OPENWEATHERMAP_API_KEY;
}

// Make CONFIG available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}