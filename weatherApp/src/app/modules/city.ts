import { Day } from './day';

export interface City{
   cityId:string,
   cityName:string,
   today:Day,
   weekDays:Day[]
}