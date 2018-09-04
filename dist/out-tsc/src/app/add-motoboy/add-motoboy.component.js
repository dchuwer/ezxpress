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
var ezxpress_service_1 = require("../ezxpress.service");
var MotoBoy_1 = require("../MotoBoy");
var AddMotoboyComponent = /** @class */ (function () {
    function AddMotoboyComponent(ezxpressService) {
        this.ezxpressService = ezxpressService;
        this.selectPhoto = "";
        this.motoboy = new MotoBoy_1.MotoBoy();
    }
    AddMotoboyComponent.prototype.onPhotofile = function (event) {
        console.log(event);
        this.selectPhoto = event.target.files[0];
    };
    AddMotoboyComponent.prototype.submitMotoBoy = function () {
        this.motoboy.photo = this.selectPhoto;
        this.ezxpressService.addMotoBoy(this.motoboy);
    };
    AddMotoboyComponent.prototype.ngOnInit = function () {
    };
    AddMotoboyComponent = __decorate([
        core_1.Component({
            selector: 'add-motoboy',
            templateUrl: './add-motoboy.component.html',
            styleUrls: ['./add-motoboy.component.css']
        }),
        __metadata("design:paramtypes", [ezxpress_service_1.EzxpressService])
    ], AddMotoboyComponent);
    return AddMotoboyComponent;
}());
exports.AddMotoboyComponent = AddMotoboyComponent;
//# sourceMappingURL=add-motoboy.component.js.map