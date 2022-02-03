import {AxiosResponse} from 'axios';
import {Weather} from "../store/types";
import api from "../axios";

export type Coordinates = {
    lat: number,
    lon: number,
}

export class WeatherService {
    static getCurrentWeather(location: Coordinates): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?lat=${location.lat}&lon=${location.lon}`)
    }
}
