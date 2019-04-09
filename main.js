(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: firebrick;\r\n    text-align: center\r\n}\r\n\r\nbody {  \r\n    background-image: url('background.jpg');\r\n    background-repeat: repeat-x;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHVDQUFpRDtJQUNqRCwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOiBmaXJlYnJpY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuYm9keSB7ICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"width:1000px; margin:0 auto;\" class = \"body\">\n  <div class=\"h1\" >\n      <h1>{{title}}</h1>\n      <hr>\n  </div>\n  <div>\n      <div class=\"col-sm-5\">\n          <div class=\"form-group\">\n              <strong class = \"h3\"> \n                  <label for=\"username\">{{userName}}</label>\n              </strong>\n              <input type=\"text\" [(ngModel)]=\"user\" *ngIf = \"visible\"  class=\"form-control\" id=\"username\" placeholder=\"Enter username\">\n              <!-- <small id=\"userHelp\" class=\"form-text text-muted\">Type your username.</small> -->\n          </div>\n      </div>\n      <div class=\"col-sm-5\" *ngIf = \"visible\">\n          <select name=\"roomInput\" id=\"roomInput\" placeholder=\"Enter username\" class=\"form-control\" [(ngModel)]=\"room\">\n              <option value=\"Lobby\">Lobby</option>\n              <option value=\"Hall\">Hall</option>\n              <option value=\"Deluxe\">Deluxe</option>\n          </select>\n      </div>\n      <div class=\"col col-sm-2\">\n          <div style=\"margin-top:19px;\" class=\"pull-right\"> \n              <button type=\"button\" class=\"btn btn-primary\" *ngIf = \"visible\" (click)=\"join()\">Join</button>\n              <button type=\"button\" class=\"btn btn-default pull-right\" [disabled] = 'visible' (click)=\"leave()\">Leave</button>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"well\" style=\"height:200px; padding:15px;\">\n          <div *ngFor=\"let item of messageArray\">\n          <span><strong>{{item.user}} : </strong> {{item.message}}</span>\n          </div>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"messageText\">            \n      </div>\n      <div class=\"col-sm-2\">\n              <button type=\"button\" class=\"btn btn-success pull-right\" [disabled] = 'visible' (click)=\"sendMessage()\">Send</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/services/chat.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_chatService) {
        var _this = this;
        this._chatService = _chatService;
        this.title = 'Realtime Messenger';
        this.background_img = '../images/background.jpg';
        this.userName = 'User Name';
        this.visible = true;
        this.messageArray = [];
        this._chatService.newUserJoined()
            .subscribe(function (data) {
            _this.messageArray.push(data);
        });
        this._chatService.userLeftRoom()
            .subscribe(function (data) {
            _this.visible = true;
            _this.messageArray.push(data);
        });
        this._chatService.newMessageReceived()
            .subscribe(function (data) { return _this.messageArray.push(data); });
    }
    AppComponent.prototype.join = function () {
        this.visible = false;
        this.title = this.room;
        this.userName = this.user;
        this._chatService.joinRoom({ user: this.user, room: this.room });
    };
    AppComponent.prototype.leave = function () {
        this.visible = true;
        this._chatService.leaveRoom({ user: this.user, room: this.room });
        this.user = '';
        this.userName = 'User Name';
        this.title = 'Realtime Messenger';
        this.room = '';
        this.messageArray = [];
    };
    AppComponent.prototype.sendMessage = function () {
        this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
        this.messageText = '';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/chat.service.ts":
/*!**************************************!*\
  !*** ./src/services/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ChatService = /** @class */ (function () {
    function ChatService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('https://13.233.237.92:3000');
    }
    ChatService.prototype.joinRoom = function (data) {
        console.log(this.socket);
        this.socket.emit('join', data);
    };
    ChatService.prototype.newUserJoined = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('New User connected', function (data) {
                console.log(data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.leaveRoom = function (data) {
        this.socket.emit('leave', data);
    };
    ChatService.prototype.userLeftRoom = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('left room', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.sendMessage = function (data) {
        this.socket.emit('message', data);
    };
    ChatService.prototype.newMessageReceived = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('new message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rahulraj\work\Messenger\Messenger\Messenger_Client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map