"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MotoBoy_1 = require("../MotoBoy");
var rxjs_1 = require("rxjs");
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.moto1 = new MotoBoy_1.MotoBoy();
        this.moto2 = new MotoBoy_1.MotoBoy();
        this.moto3 = new MotoBoy_1.MotoBoy();
        this.addressSubject = new rxjs_1.Subject();
        this.addressUpdated = this.addressSubject.asObservable();
        this.moto1.latitude = 32.051663;
        this.moto1.longitude = 34.765952;
        //this.moto1.icon = "https://png.icons8.com/color/50/000000/motorcycle.png"
        this.moto2.latitude = 32.051750;
        this.moto2.longitude = 34.768724;
        //this.moto2.icon = this.moto
        this.moto3.latitude = 32.048731;
        this.moto3.longitude = 34.763552;
        this.motoBoys = [this.moto1, this.moto2, this.moto3];
        //this.motoBoyIcon = "C:/Users/lptop/Desktop/Project1/ezxpress/src/baseline_motorcycle_black_18dp.png"
    }
    MapComponent.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                // this.reverseAddress(this.lat, this.lng);
            });
        }
    };
    MapComponent.prototype.checkGoogleAddress = function (localAddress) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        console.log(localAddress);
        geocoder.geocode({ address: localAddress }, function (results) {
            _this.lat = Number(results[0].geometry.location.lat);
            _this.lng = Number(results[0].geometry.location.lat);
            console.log(_this.lat);
        });
    };
    MapComponent.prototype.reverseAddress = function () {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        //alert("teste "+ lat + ' ' + lng)
        //var latlng = new google.maps.LatLng(31.813506, 35.216292);
        //var request = { latLng: latlng };
        var latlng = { lat: 32.050011, lng: 34.775276 };
        geocoder.geocode({ "location": latlng }, function (results, status) {
            console.log(results);
            _this.localAddress = results[0].formatted_address;
            console.log(_this.localAddress);
            _this.addressSubject.next(_this.localAddress);
        });
    };
    MapComponent.prototype.ngOnInit = function () {
        this.reverseAddress();
        //this.getUserLocation();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "newLat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "newLng", void 0);
    MapComponent = __decorate([
        core_1.Component({
            selector: 'app-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map