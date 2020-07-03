webpackJsonp([9],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPlacedPageModule", function() { return OrderPlacedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_placed__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderPlacedPageModule = /** @class */ (function () {
    function OrderPlacedPageModule() {
    }
    OrderPlacedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_placed__["a" /* OrderPlacedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_placed__["a" /* OrderPlacedPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__order_placed__["a" /* OrderPlacedPage */]
            ]
        })
    ], OrderPlacedPageModule);
    return OrderPlacedPageModule;
}());

//# sourceMappingURL=order-placed.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPlacedPage; });
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



var OrderPlacedPage = /** @class */ (function () {
    function OrderPlacedPage(loadingCtrl, auth, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postData = {
            token: "",
            user_id: "",
            orderid: ""
        };
        this.viewData = {
            orderid: "",
            fname: "",
            lname: "",
            area: "",
            address: "",
            mobile: "",
            total: "",
            shipping: "",
            couponprice: "",
            ordertime: ""
        };
        this.postData.token = this.auth.gettoken();
        if (localStorage.getItem('userData')) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.userDetails = data.userData;
        }
        var date = new Date();
        this.year = date.getFullYear();
        this.postData.orderid = navParams.get("orderid");
        this.viewData.orderid = navParams.get("orderid");
        this.viewData.fname = navParams.get("fname");
        this.viewData.lname = navParams.get("lname");
        this.viewData.area = navParams.get("area");
        this.viewData.address = navParams.get("address");
        this.viewData.mobile = navParams.get("mobile");
        this.viewData.couponprice = navParams.get("couponprice");
        this.viewData.total = navParams.get("total");
        this.viewData.shipping = navParams.get("shipping");
        this.viewData.ordertime = navParams.get("ordertime");
        this.getOrderDetail();
    }
    OrderPlacedPage.prototype.getOrderDetail = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "fetchorderdetail").then(function (result) {
            _this.resposeData = result;
            _this.orderDetail = _this.resposeData.OrderDetail;
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    OrderPlacedPage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    OrderPlacedPage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    OrderPlacedPage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    OrderPlacedPage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    OrderPlacedPage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    OrderPlacedPage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    OrderPlacedPage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    OrderPlacedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-placed',template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/order-placed/order-placed.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu" style="color:#fff; "></ion-icon>\n    </button>\n    <ion-title style="color:#fff; ">{{ \'Orderdetailspage_title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="container">\n    <ion-item no-padding clear>\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">{{ \'Orderdetailspage_detail\' | translate }}</div>\n        </ion-col>\n        <ion-col>\n          <p>{{ \'Orderdetailspage_orderid\' | translate }}: {{viewData.orderid}}</p>\n          <p>{{ \'Orderdetailspage_placedon\' | translate }} </p>\n          <p>{{viewData.ordertime}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-padding clear>\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">{{ \'Orderdetailspage_paymode\' | translate }}</div>\n        </ion-col>\n        <ion-col>\n          <p>COD</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-padding clear>\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">{{ \'Orderdetailspage_shippingaddress\' | translate }}</div>\n        </ion-col>\n        <ion-col>\n          <p>{{viewData.area}}</p>\n          <p>{{viewData.address}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-padding clear no-lines>\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">{{ \'Orderdetialspage_contact\' | translate }}</div>\n        </ion-col>\n        <ion-col>\n          <p>{{viewData.mobile}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <div class="cartitems">\n      <p>{{ \'Orderdetailspage_cartitems\' | translate }}</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col>{{ \'Orderdetailspage_item\' | translate }}</ion-col>\n          <ion-col>{{ \'Orderdetailspage_type\' | translate }}</ion-col>\n          <ion-col>{{ \'Orderdetailspage_overallqty\' | translate }}</ion-col>\n          <ion-col>{{ \'Orderdetailspage_price\' | translate }}</ion-col>\n        </ion-row>\n        <ion-row *ngFor="let c of orderDetail; let i = index">\n          <ion-col> {{ c.itemname }} </ion-col>\n          <ion-col> {{ c.itemquantity }} {{ c.itemquantitytype }} </ion-col>\n          <ion-col> {{ c.Mquantity }}</ion-col>\n          <ion-col> {{ c.itemprice * c.Mquantity | currency :"$ "}} </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col></ion-col>\n          <ion-col></ion-col>\n          <ion-col>{{ \'Orderdetailspage_shipping\' | translate }}</ion-col>\n          <ion-col>{{viewData.shipping | currency :"$ "}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col></ion-col>\n          <ion-col></ion-col>\n          <ion-col>{{ \'Orderdetailspage_coupon\' | translate }}</ion-col>\n          <ion-col>{{viewData.couponprice | currency :"$ " }}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col></ion-col>\n          <ion-col></ion-col>\n          <ion-col>{{ \'Orderdetailspage_total\' | translate }}</ion-col>\n          <ion-col>{{viewData.total | currency :"$ "}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <div class="footer">\n    <ion-list>\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="././assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="././assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n     \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/order-placed/order-placed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OrderPlacedPage);
    return OrderPlacedPage;
}());

//# sourceMappingURL=order-placed.js.map

/***/ })

});
//# sourceMappingURL=9.js.map