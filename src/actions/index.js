import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const RESET_WEATHER = 'RESET_WEATHER';

export function fectchWeather(city) {
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function resetWeather() {
    return {
        type: RESET_WEATHER,
        payload: []
    };
}