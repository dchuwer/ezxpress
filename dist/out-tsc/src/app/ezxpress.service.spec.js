"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ezxpress_service_1 = require("./ezxpress.service");
describe('EzxpressService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [ezxpress_service_1.EzxpressService]
        });
    });
    it('should be created', testing_1.inject([ezxpress_service_1.EzxpressService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=ezxpress.service.spec.js.map