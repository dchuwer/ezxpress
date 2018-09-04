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
var EzxpressService = /** @class */ (function () {
    function EzxpressService() {
        this.motoBoy = [];
        this.client = [];
    }
    EzxpressService.prototype.getMotoBoy = function () {
        return this.motoBoy;
    };
    EzxpressService.prototype.addMotoBoy = function (motoboy) {
        this.motoBoy.push(motoboy);
        console.log(this.motoBoy);
    };
    EzxpressService.prototype.addNewClient = function (client) {
        this.client.push(client);
    };
    EzxpressService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EzxpressService);
    return EzxpressService;
}());
exports.EzxpressService = EzxpressService;
//# sourceMappingURL=ezxpress.service.js.map