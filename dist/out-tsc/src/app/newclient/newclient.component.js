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
var Client_1 = require("../Client");
var ezxpress_service_1 = require("../ezxpress.service");
var NewclientComponent = /** @class */ (function () {
    function NewclientComponent(ezxpressService) {
        this.ezxpressService = ezxpressService;
        this.newClient = new Client_1.Client();
    }
    NewclientComponent.prototype.submitNewClient = function (client) {
        this.ezxpressService.addNewClient(client);
    };
    NewclientComponent.prototype.ngOnInit = function () {
    };
    NewclientComponent = __decorate([
        core_1.Component({
            selector: 'app-newclient',
            templateUrl: './newclient.component.html',
            styleUrls: ['./newclient.component.css']
        }),
        __metadata("design:paramtypes", [ezxpress_service_1.EzxpressService])
    ], NewclientComponent);
    return NewclientComponent;
}());
exports.NewclientComponent = NewclientComponent;
//# sourceMappingURL=newclient.component.js.map