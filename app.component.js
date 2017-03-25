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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Session 7 Assignment1";
        this.userList = [
            { name: "Avnesh Shakya", age: "26", profession: "Employee" },
            { name: "Adam", age: "30", profession: "Employee" },
            { name: "Eve", age: "35", profession: "Employee" },
            { name: "Mohan", age: "25", profession: "Employee" },
            { name: "Sohan", age: "28", profession: "Employee" },
        ];
        this.textcolor = "red";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " <div>\n               <h1>{{pageTitle}}</h1>\n               <ul *ngFor=\"let user of userList\">\n                  <li *ngIf=\"user.age>27\">{{user.name}} {{user.age}}</li>\n                </ul>\n               <div>\n                  <span>Span1</span>\n                  <span>Span2</span>\n                  <span [ngStyle]=\"{color:textcolor}\">Span3</span>\n                  <span >Span4</span>\n                  <span>Span5</span>\n               </div>\n    </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map