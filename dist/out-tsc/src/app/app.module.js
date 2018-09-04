"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var form_field_1 = require("@angular/material/form-field");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
var toolbar_1 = require("@angular/material/toolbar");
var flex_layout_1 = require("@angular/flex-layout");
var app_component_1 = require("./app.component");
var ezxpress_service_1 = require("./ezxpress.service");
var add_motoboy_component_1 = require("./add-motoboy/add-motoboy.component");
var map_component_1 = require("./map/map.component");
var newclient_component_1 = require("./newclient/newclient.component");
var home_component_1 = require("./home/home.component");
var delivery_component_1 = require("./delivery/delivery.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                add_motoboy_component_1.AddMotoboyComponent,
                map_component_1.MapComponent,
                newclient_component_1.NewclientComponent,
                home_component_1.HomeComponent,
                delivery_component_1.DeliveryComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                form_field_1.MatFormFieldModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                material_2.MatInputModule,
                forms_1.FormsModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyB-G0WodfAOEjuc9WcD0lC70UesBjzJG9g'
                }),
                toolbar_1.MatToolbarModule,
                flex_layout_1.FlexLayoutModule
            ],
            providers: [ezxpress_service_1.EzxpressService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map