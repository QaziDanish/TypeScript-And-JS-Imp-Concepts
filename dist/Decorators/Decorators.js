"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.myDecorator = void 0;
function myDecorator(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Method ".concat(key, " is being called with these parameter: ").concat(args.join(",")));
        var result = originalMethod.apply(this, args);
        console.log("Method ".concat(key, " result is ").concat(result));
    };
    return descriptor;
}
exports.myDecorator = myDecorator;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.AddMethod = function (a, b) {
        return a + b;
    };
    __decorate([
        myDecorator
    ], MyClass.prototype, "AddMethod", null);
    return MyClass;
}());
exports.MyClass = MyClass;
