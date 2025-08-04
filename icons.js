class WeatherIcons {
    static getSVGIcon(iconCode) {
        const iconMap = {
            '01d': this.getSunnyIcon(),
            '01n': this.getMoonIcon(),
            '02d': this.getPartlyCloudyDayIcon(),
            '02n': this.getPartlyCloudyNightIcon(),
            '03d': this.getCloudyIcon(),
            '03n': this.getCloudyIcon(),
            '04d': this.getOvercastIcon(),
            '04n': this.getOvercastIcon(),
            '09d': this.getRainIcon(),
            '09n': this.getRainIcon(),
            '10d': this.getRainyIcon(),
            '10n': this.getRainyIcon(),
            '11d': this.getThunderstormIcon(),
            '11n': this.getThunderstormIcon(),
            '13d': this.getSnowIcon(),
            '13n': this.getSnowIcon(),
            '50d': this.getFogIcon(),
            '50n': this.getFogIcon()
        };
        
        return iconMap[iconCode] || this.getDefaultIcon();
    }
    
    static getSunnyIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#FFE55C;stop-opacity:1" />
                        <stop offset="70%" style="stop-color:#FF8C42;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#FF6B35;stop-opacity:1" />
                    </radialGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="18" fill="url(#sunGradient)" filter="url(#glow)"/>
                <g stroke="#FFB347" stroke-width="3" stroke-linecap="round" opacity="0.9">
                    <line x1="50" y1="8" x2="50" y2="18"/>
                    <line x1="50" y1="82" x2="50" y2="92"/>
                    <line x1="8" y1="50" x2="18" y2="50"/>
                    <line x1="82" y1="50" x2="92" y2="50"/>
                    <line x1="19.8" y1="19.8" x2="26.87" y2="26.87"/>
                    <line x1="73.13" y1="73.13" x2="80.2" y2="80.2"/>
                    <line x1="19.8" y1="80.2" x2="26.87" y2="73.13"/>
                    <line x1="73.13" y1="26.87" x2="80.2" y2="19.8"/>
                </g>
            </svg>
        `;
    }
    
    static getMoonIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="moonGradient" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" style="stop-color:#f8f9fa;stop-opacity:1" />
                        <stop offset="40%" style="stop-color:#e9ecef;stop-opacity:1" />
                        <stop offset="70%" style="stop-color:#dee2e6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#adb5bd;stop-opacity:1" />
                    </radialGradient>
                    <radialGradient id="moonCrater" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#6c757d;stop-opacity:0.3" />
                        <stop offset="100%" style="stop-color:#495057;stop-opacity:0.1" />
                    </radialGradient>
                    <filter id="moonGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <path d="M35 15C35 35.987 51.013 52 72 52C75.5 52 78.8 51.3 82 50C78 70 60 85 38 85C18 85 2 69 2 49C2 27 17 8 37 4C36 7.5 35 11 35 15Z" fill="url(#moonGradient)" stroke="#adb5bd" stroke-width="2" filter="url(#moonGlow)"/>
                <circle cx="25" cy="35" r="3" fill="url(#moonCrater)" opacity="0.6"/>
                <circle cx="35" cy="25" r="2" fill="url(#moonCrater)" opacity="0.4"/>
                <circle cx="45" cy="40" r="1.5" fill="url(#moonCrater)" opacity="0.5"/>
                <circle cx="30" cy="45" r="1" fill="url(#moonCrater)" opacity="0.3"/>
            </svg>
        `;
    }
    
    static getCloudyIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="cloudGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#E8F4FD;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#B8D4F0;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#87CEEB;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="cloudGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#F0F8FF;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#D3E4F3;stop-opacity:1" />
                    </linearGradient>
                    <filter id="cloudShadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#B0C4DE" flood-opacity="0.3"/>
                    </filter>
                </defs>
                <ellipse cx="35" cy="55" rx="25" ry="15" fill="url(#cloudGradient1)" stroke="#87CEEB" stroke-width="1" filter="url(#cloudShadow)"/>
                <ellipse cx="55" cy="50" rx="20" ry="12" fill="url(#cloudGradient2)" stroke="#B8D4F0" stroke-width="1" filter="url(#cloudShadow)"/>
                <ellipse cx="45" cy="40" rx="18" ry="10" fill="url(#cloudGradient2)" stroke="#D3E4F3" stroke-width="1" filter="url(#cloudShadow)"/>
            </svg>
        `;
    }
    
    static getRainyIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="rainCloudGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#708090;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#556B7D;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2F4F4F;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="rainCloudGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#4682B4;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="rainDrop" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#00BFFF;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#1E90FF;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <ellipse cx="35" cy="35" rx="25" ry="15" fill="url(#rainCloudGradient1)" stroke="#2F4F4F" stroke-width="1"/>
                <ellipse cx="55" cy="30" rx="20" ry="12" fill="url(#rainCloudGradient2)" stroke="#4682B4" stroke-width="1"/>
                <g stroke="url(#rainDrop)" stroke-width="3" stroke-linecap="round" class="rain-drops">
                    <line x1="25" y1="55" x2="20" y2="75" opacity="0.9"/>
                    <line x1="35" y1="55" x2="30" y2="75" opacity="0.8"/>
                    <line x1="45" y1="55" x2="40" y2="75" opacity="0.9"/>
                    <line x1="55" y1="55" x2="50" y2="75" opacity="0.7"/>
                    <line x1="65" y1="55" x2="60" y2="75" opacity="0.8"/>
                    <line x1="30" y1="50" x2="25" y2="70" opacity="0.6"/>
                    <line x1="50" y1="50" x2="45" y2="70" opacity="0.7"/>
                </g>
            </svg>
        `;
    }
    
    static getThunderstormIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="stormCloud" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#2c3e50;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#34495e;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#1a252f;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="lightning" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#f1c40f;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#f39c12;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#e67e22;stop-opacity:1" />
                    </linearGradient>
                    <filter id="stormGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <ellipse cx="35" cy="30" rx="25" ry="15" fill="url(#stormCloud)" stroke="#1a252f" stroke-width="2"/>
                <ellipse cx="55" cy="25" rx="20" ry="12" fill="url(#stormCloud)" stroke="#2c3e50" stroke-width="2"/>
                <path d="M45 45 L35 60 L40 60 L35 75 L50 55 L45 55 L50 45 Z" fill="url(#lightning)" stroke="#e67e22" stroke-width="1" filter="url(#stormGlow)"/>
                <g stroke="#4169E1" stroke-width="2" stroke-linecap="round">
                    <line x1="25" y1="50" x2="20" y2="65"/>
                    <line x1="65" y1="50" x2="60" y2="65"/>
                </g>
            </svg>
        `;
    }
    
    static getSnowIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="snowCloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#F0F8FF;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#E6E6FA;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#D3D3D3;stop-opacity:1" />
                    </linearGradient>
                    <radialGradient id="snowflakeGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
                        <stop offset="70%" style="stop-color:#F0F8FF;stop-opacity:0.9" />
                        <stop offset="100%" style="stop-color:#E0E6FF;stop-opacity:0.7" />
                    </radialGradient>
                </defs>
                <ellipse cx="35" cy="35" rx="25" ry="15" fill="url(#snowCloudGradient)" stroke="#B0C4DE" stroke-width="1"/>
                <ellipse cx="55" cy="30" rx="20" ry="12" fill="url(#snowCloudGradient)" stroke="#D3D3D3" stroke-width="1"/>
                <g fill="url(#snowflakeGradient)" stroke="#B0E0E6" stroke-width="0.5">
                    <g transform="translate(25,60)">
                        <circle r="2"/>
                        <line x1="-3" y1="0" x2="3" y2="0" stroke="#87CEEB" stroke-width="1"/>
                        <line x1="0" y1="-3" x2="0" y2="3" stroke="#87CEEB" stroke-width="1"/>
                        <line x1="-2" y1="-2" x2="2" y2="2" stroke="#87CEEB" stroke-width="0.5"/>
                        <line x1="-2" y1="2" x2="2" y2="-2" stroke="#87CEEB" stroke-width="0.5"/>
                    </g>
                    <g transform="translate(45,65)">
                        <circle r="1.5"/>
                        <line x1="-2" y1="0" x2="2" y2="0" stroke="#87CEEB" stroke-width="0.8"/>
                        <line x1="0" y1="-2" x2="0" y2="2" stroke="#87CEEB" stroke-width="0.8"/>
                    </g>
                    <g transform="translate(65,62)">
                        <circle r="2"/>
                        <line x1="-3" y1="0" x2="3" y2="0" stroke="#87CEEB" stroke-width="1"/>
                        <line x1="0" y1="-3" x2="0" y2="3" stroke="#87CEEB" stroke-width="1"/>
                        <line x1="-2" y1="-2" x2="2" y2="2" stroke="#87CEEB" stroke-width="0.5"/>
                        <line x1="-2" y1="2" x2="2" y2="-2" stroke="#87CEEB" stroke-width="0.5"/>
                    </g>
                    <circle cx="35" cy="70" r="1" fill="#FFFFFF"/>
                    <circle cx="55" cy="72" r="1.2" fill="#F0F8FF"/>
                </g>
            </svg>
        `;
    }
    
    static getFogIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="fogGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ecf0f1;stop-opacity:0.3" />
                        <stop offset="50%" style="stop-color:#bdc3c7;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#ecf0f1;stop-opacity:0.3" />
                    </linearGradient>
                    <linearGradient id="fogGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#d5dbdb;stop-opacity:0.4" />
                        <stop offset="50%" style="stop-color:#95a5a6;stop-opacity:0.9" />
                        <stop offset="100%" style="stop-color:#d5dbdb;stop-opacity:0.4" />
                    </linearGradient>
                    <filter id="fogBlur">
                        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <rect x="20" y="40" width="60" height="4" fill="url(#fogGradient1)" rx="2" filter="url(#fogBlur)"/>
                <rect x="15" y="50" width="60" height="4" fill="url(#fogGradient2)" rx="2" filter="url(#fogBlur)"/>
                <rect x="25" y="60" width="60" height="4" fill="url(#fogGradient1)" rx="2" filter="url(#fogBlur)"/>
                <rect x="10" y="70" width="60" height="4" fill="url(#fogGradient2)" rx="2" filter="url(#fogBlur)"/>
            </svg>
        `;
    }
    
    static getPartlyCloudyDayIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="partlySun" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#f1c40f;stop-opacity:1" />
                        <stop offset="70%" style="stop-color:#f39c12;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#e67e22;stop-opacity:1" />
                    </radialGradient>
                    <linearGradient id="partlyCloud" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#ecf0f1;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#bdc3c7;stop-opacity:1" />
                    </linearGradient>
                    <filter id="partlyGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <circle cx="35" cy="35" r="15" fill="url(#partlySun)" filter="url(#partlyGlow)"/>
                <g stroke="#f39c12" stroke-width="2" stroke-linecap="round" opacity="0.8">
                    <line x1="35" y1="10" x2="35" y2="15"/>
                    <line x1="10" y1="35" x2="15" y2="35"/>
                    <line x1="18.93" y1="18.93" x2="22.05" y2="22.05"/>
                    <line x1="47.95" y1="22.05" x2="51.07" y2="18.93"/>
                </g>
                <ellipse cx="55" cy="55" rx="25" ry="15" fill="url(#partlyCloud)" stroke="#bdc3c7" stroke-width="2"/>
                <ellipse cx="45" cy="50" rx="18" ry="10" fill="url(#partlyCloud)" stroke="#ecf0f1" stroke-width="2"/>
            </svg>
        `;
    }
    
    static getPartlyCloudyNightIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="nightMoon" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#f8f9fa;stop-opacity:1" />
                        <stop offset="70%" style="stop-color:#e9ecef;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#ced4da;stop-opacity:1" />
                    </radialGradient>
                    <linearGradient id="nightCloud" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                        <stop offset="50%" style="stop-color:#ecf0f1;stop-opacity:0.9" />
                        <stop offset="100%" style="stop-color:#bdc3c7;stop-opacity:0.8" />
                    </linearGradient>
                    <filter id="nightGlow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <path d="M25 20C25 30 32 37 42 37C43.5 37 45 36.7 46.5 36.2C44.5 45 37 52 28 52C18 52 10 44 10 34C10 24 17 15 27 13C26 15.5 25 17.5 25 20Z" fill="url(#nightMoon)" stroke="#adb5bd" stroke-width="2" filter="url(#nightGlow)"/>
                <ellipse cx="55" cy="55" rx="25" ry="15" fill="url(#nightCloud)" stroke="#bdc3c7" stroke-width="2"/>
                <ellipse cx="45" cy="50" rx="18" ry="10" fill="url(#nightCloud)" stroke="#ecf0f1" stroke-width="2"/>
            </svg>
        `;
    }
    
    static getOvercastIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="overcastGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#95a5a6;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#7f8c8d;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2c3e50;stop-opacity:1" />
                    </linearGradient>
                    <filter id="overcastShadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#34495e" flood-opacity="0.3"/>
                    </filter>
                </defs>
                <ellipse cx="30" cy="45" rx="25" ry="15" fill="url(#overcastGradient)" stroke="#2c3e50" stroke-width="2" filter="url(#overcastShadow)"/>
                <ellipse cx="50" cy="40" rx="25" ry="15" fill="url(#overcastGradient)" stroke="#34495e" stroke-width="2" filter="url(#overcastShadow)"/>
                <ellipse cx="70" cy="50" rx="20" ry="12" fill="url(#overcastGradient)" stroke="#2c3e50" stroke-width="2" filter="url(#overcastShadow)"/>
                <ellipse cx="50" cy="60" rx="30" ry="18" fill="url(#overcastGradient)" stroke="#34495e" stroke-width="2" filter="url(#overcastShadow)"/>
            </svg>
        `;
    }
    
    static getRainIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="35" cy="30" rx="25" ry="15" fill="#606060" stroke="#404040" stroke-width="2"/>
                <ellipse cx="55" cy="25" rx="20" ry="12" fill="#808080" stroke="#606060" stroke-width="2"/>
                <g stroke="#4169E1" stroke-width="2" stroke-linecap="round">
                    <line x1="20" y1="50" x2="15" y2="70"/>
                    <line x1="30" y1="50" x2="25" y2="70"/>
                    <line x1="40" y1="50" x2="35" y2="70"/>
                    <line x1="50" y1="50" x2="45" y2="70"/>
                    <line x1="60" y1="50" x2="55" y2="70"/>
                    <line x1="70" y1="50" x2="65" y2="70"/>
                </g>
            </svg>
        `;
    }
    
    static getDefaultIcon() {
        return `
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="defaultGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#74b9ff;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#0984e3;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2d3436;stop-opacity:1" />
                    </radialGradient>
                    <filter id="defaultGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="30" fill="url(#defaultGradient)" stroke="#2d3436" stroke-width="2" filter="url(#defaultGlow)"/>
                <text x="50" y="58" text-anchor="middle" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff">?</text>
            </svg>
        `;
    }
}