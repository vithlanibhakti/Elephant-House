webpackJsonp([18],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
    AddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */]
            ]
        })
    ], AddressPageModule);
    return AddressPageModule;
}());

//# sourceMappingURL=address.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddressPage = /** @class */ (function () {
    function AddressPage(nativeGeocoder, geolocation, alertCtrl, navCtrl, auth, toastCtrl, navParams, loadingCtrl) {
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        //Geocoder configuration
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.userData = {
            fname: "",
            city: "",
            area: "",
            address: "",
            mobile: "",
            dtype: "",
            lat: "",
            lng: ""
        };
        var date = new Date();
        this.year = date.getFullYear();
        if (localStorage.getItem('userData')) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.userDetails = data.userData;
            this.userData.mobile = this.userDetails.mobile;
            this.userData.fname = this.userDetails.fname;
            this.userData.address = this.userDetails.address;
            // this.getgeolocation(); // comment for the web
        }
    }
    AddressPage.prototype.onSubmit = function () {
        if (this.userData.mobile != "" && this.userData.fname != "" && this.userData.address != "" && this.userData.area != "" && this.userData.city != "" && this.userData.dtype != "") {
            this.navCtrl.push('PaymenttypePage', {
                fullname: this.userData.fname,
                mobile: this.userData.mobile,
                area: this.userData.area,
                address: this.userData.address,
                city: this.userData.city,
                dtype: this.userData.dtype,
                lat: this.userData.lat,
                lng: this.userData.lng,
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Something Wrong',
                subTitle: 'Please fill all Details.',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
    };
    // Geo Location
    AddressPage.prototype.getgeolocation = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: "Getting Your Location....!",
            duration: 10000,
            position: 'bottom'
        });
        toast.present();
        var options = {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 0,
            frequency: 30000
        };
        var me = this;
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            console.log(resp.coords);
            _this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
            me.userData.lat = resp.coords.latitude.toString();
            me.userData.lng = resp.coords.longitude.toString();
            var toast = _this.toastCtrl.create({
                message: "Your Location Fetch Success..!",
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    //geocoder method to fetch address from coordinates passed as arguments
    AddressPage.prototype.getGeoencoder = function (latitude, longitude) {
        var _this = this;
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then(function (result) {
            _this.geoAddress = _this.generateAddress(result[0]);
            _this.userData.address = _this.geoAddress;
            console.log(_this.geoAddress);
        })
            .catch(function (error) {
            alert('Error getting location' + JSON.stringify(error));
        });
    };
    //Return Comma saperated address
    AddressPage.prototype.generateAddress = function (addressObj) {
        var obj = [];
        var address = "";
        for (var key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (var val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    };
    AddressPage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    AddressPage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    AddressPage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    AddressPage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    AddressPage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    AddressPage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    AddressPage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-address",template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/address/address.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu" style="color:#fff; "></ion-icon>\n    </button>\n    <ion-title style="color:#fff; ">{{ \'Deliverypage_title\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="getgeolocation()">\n        <ion-icon name="md-locate" style="color:#fff;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding class="formdiv">\n  <div class="container">\n    <ion-item>\n      <ion-label stacked color="primary">{{ \'Deliverypage_name\' | translate }}</ion-label>\n      <ion-input type="text" required [(ngModel)]="userData.fname"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">{{ \'Deliverypage_city\' | translate }}</ion-label>\n      <ion-input type="text" required [(ngModel)]="userData.city"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">{{ \'Deliverypage_area\' | translate }}</ion-label>\n      <ion-input type="text" required [(ngModel)]="userData.area"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">{{ \'Deliverypage_address\' | translate }}</ion-label>\n      <ion-textarea rows="5" required [(ngModel)]="userData.address"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">{{ \'Deliverypage_mobile\' | translate }}</ion-label>\n      <ion-input type="number" required [(ngModel)]="userData.mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">{{ \'Deliverypage_dtype\' | translate }}</ion-label>\n      <ion-select [(ngModel)]="userData.dtype">\n        <ion-option value="8AM-10AM">8AM-10AM</ion-option>\n        <ion-option value="12AM-2PM" selected="true">12AM-2PM</ion-option>\n        <ion-option value="5PM-7PM" selected="true">5PM-7PM</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div class="subbtn">\n      <button ion-button round (click)="onSubmit()">\n        {{ \'Deliverypage_nextbtn\' | translate }}\n      </button>\n    </div>\n  </div>\n  <div class="footer">\n    <ion-list>\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="././assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="././assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n     \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/address/address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ })

});
//# sourceMappingURL=18.js.map