import { Geometry } from "ngx-google-places-autocomplete/objects/geometry";

export class MotoBoy{
    motoboyId :number;
    idNumber : string;
    firsName : string;
    lastName : string;
    email    : string;
    phoneNumber : number;
    rate     : number;
    photo    : string;
    latitude : number;
    longitude: number;
    icon: string;
    active : boolean;
    position : Object;
    constructor() {

        this.active = true; 
        this.rate = null ;
        this.icon = "https://png.icons8.com/ios/40/3CBC32/cycling-road-filled.png"

    }
}