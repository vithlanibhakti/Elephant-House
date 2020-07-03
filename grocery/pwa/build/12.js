webpackJsonp([12],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, authService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "mobile": "", "password": "" };
        localStorage.setItem('userLogin', JSON.stringify(this.userData));
        if (localStorage.getItem('userLogin')) {
            var data = JSON.parse(localStorage.getItem('userLogin'));
            this.userData.mobile = data.mobile;
            this.userData.password = data.password;
        }
        this.menuCtrl.enable(false);
        var date = new Date();
        this.year = date.getFullYear();
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Fetching Server",
            duration: 10000
        });
        loader.present();
        if (this.userData.mobile != "" && this.userData.password != "") {
            if (this.remember == true) {
                localStorage.setItem('userLogin', JSON.stringify(this.userData));
            }
            this.authService.postData(this.userData, "login").then(function (result) {
                loader.dismiss();
                _this.resposeData = result;
                if (_this.resposeData.userData) {
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    _this.navCtrl.setRoot('HomePage');
                }
                else if (_this.resposeData.error) {
                    _this.showalertinfo();
                }
            }, function (err) {
                loader.dismiss();
                _this.showalertinfo();
                //Connection failed message
            });
        }
        else {
            loader.dismiss();
            this.showalertinfo();
        }
    };
    LoginPage.prototype.showalertinfo = function () {
        var alert = this.alertCtrl.create({
            title: "Notification",
            subTitle: "Give Valid Information",
            buttons: ["OK"]
        });
        alert.present();
    };
    LoginPage.prototype.onregister = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    LoginPage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    LoginPage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    LoginPage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    LoginPage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    LoginPage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    LoginPage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu" style="color:#fff; "></ion-icon>\n    </button>\n    <ion-title style="color:#fff; ">{{ \'loginpage_title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding style="background-image: url(././assets/imgs/bg.png);background-color:white;">\n  <div class="login">\n    <img src="././assets/imgs/wgs-logo1.png" alt="">\n    <h3>{{ \'appname\' | translate }}</h3>\n    <div class="logininput">\n      <ion-item>\n        <ion-label fixed color="primary"> {{ \'loginpage_mobile\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.mobile"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed color="primary"> {{ \'loginpage_password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label>{{ \'loginpage_rememberme\' | translate }}</ion-label>\n        <ion-checkbox [(ngModel)]="remember"></ion-checkbox>\n      </ion-item>\n    </div>\n    <div class="btn-login">\n      <button ion-button round (click)="login()">&nbsp;{{ \'loginpage_loginbtn\' | translate }}</button>\n    </div>\n    <h6>\n      {{ \'loginpage_dont\' | translate }}\n      <span>\n        <a href="javascript:void(0)" (click)="onregister()">{{ \'loginpage_regnow\' | translate }}</a>\n      </span>\n    </h6>\n  </div>\n  <div class="footer">\n    <ion-list>\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="././assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="././assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n     \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=12.js.map