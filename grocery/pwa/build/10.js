webpackJsonp([10],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderHistoryPageModule = /** @class */ (function () {
    function OrderHistoryPageModule() {
    }
    OrderHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */]
            ]
        })
    ], OrderHistoryPageModule);
    return OrderHistoryPageModule;
}());

//# sourceMappingURL=order-history.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
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



var OrderHistoryPage = /** @class */ (function () {
    function OrderHistoryPage(auth, navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.postData = {
            token: "",
            user_id: ""
        };
        this.postData.token = this.auth.gettoken();
        if (localStorage.getItem('userData')) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.userDetails = data.userData;
            this.postData.user_id = this.userDetails.user_id;
        }
        var date = new Date();
        this.year = date.getFullYear();
        this.getorderhistory();
    }
    OrderHistoryPage.prototype.openOrderDetailPage = function (orderid, fname, lname, area, address, mobile, couponprice, shipping, total, ordertime) {
        this.navCtrl.push('OrderPlacedPage', { orderid: orderid, fname: fname, lname: lname, area: area, address: address, mobile: mobile, ordertime: ordertime, couponprice: couponprice, total: total, shipping: shipping });
        console.log(orderid);
    };
    OrderHistoryPage.prototype.openReturnProduct = function () {
        this.navCtrl.push('ContactPage');
    };
    OrderHistoryPage.prototype.getorderhistory = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "fetchorder").then(function (result) {
            _this.resposeData = result;
            _this.orderdata = _this.resposeData.OrderData;
            console.log(_this.orderdata.length);
            if (_this.orderdata.length == 0) {
                _this.showtxt = true;
                _this.showHisdata = false;
            }
            else {
                _this.showtxt = false;
                _this.showHisdata = true;
            }
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    OrderHistoryPage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    OrderHistoryPage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    OrderHistoryPage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    OrderHistoryPage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    OrderHistoryPage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    OrderHistoryPage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    OrderHistoryPage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-order-history",template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/order-history/order-history.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu" style="color:#fff; "></ion-icon>\n    </button>\n    <ion-title style="color:#fff; ">{{ \'Myorderpage_title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <div *ngIf="showtxt">\n    <ion-grid>\n      <ion-row class="emptycart">\n        <ion-col>\n          <p>There are no Products in your Orderlist!</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-list *ngIf="showHisdata">\n    <ion-card no-padding *ngFor="let item of orderdata;  let i = index;">\n      <ion-row class="orderholder">\n        <ion-col>\n          <h2 class="orderid">{{ \'Myorderpage_orderid\' | translate }}: {{item.orderid}}</h2>\n          <h3 class="ordertime">{{ \'Myorderpage_placedon\' | translate }} <span>{{item.ordertime | date}}</span></h3>\n          <hr>\n          <ion-row>\n            <ion-col>\n              <p *ngIf="item.status == \'Received\'"><img src="././assets/imgs/received.png">{{ \'Myorderpage_received\' | translate }}</p>\n              <p *ngIf="item.status == \'Confirmed\'"><img src="././assets/imgs/confirm.png">{{ \'Myorderpage_confirm\' | translate }}</p>\n              <p *ngIf="item.status == \'Preparing\'"><img src="././assets/imgs/process.png">{{ \'Myorderpage_prepare\' | translate }}</p>\n              <p *ngIf="item.status == \'On Way\'"><img src="././assets/imgs/deliver.png">{{ \'Myorderpage_onway\' | translate }}</p>\n              <p *ngIf="item.status == \'Delivered\'"><img src="././assets/imgs/delivered.png">{{ \'Myorderpage_delivered\' | translate }}</p>\n              <p *ngIf="item.status == \'Cancelled\'"><img src="././assets/imgs/cancel.png">{{ \'Myorderpage_cancel\' | translate }}</p>\n            </ion-col>\n            <br>\n            <ion-col>\n              <br>\n              <p>{{ \'Myorderpage_deliverycode\' | translate }}</p>\n              <p>{{item.dcode}}</p>\n              <p>{{ \'Myorderpage_deliveryperson\' | translate }}</p>\n              <p>{{item.dname}}</p>\n              <p><a href="tel:{{item.dmobile}}">{{item.dmobile}}</a></p>\n              <p></p>\n              <p></p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear\n            (click)="openOrderDetailPage(item.orderid,item.fname,item.lname,item.area,item.address,item.mobile, item.couponprice, item.shipping, item.total, item.ordertime)">\n            <div>{{ \'Myorderpage_viewdetails\' | translate }}</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n  <div class="footer">\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="././assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="././assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n     \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/order-history/order-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], OrderHistoryPage);
    return OrderHistoryPage;
}());

//# sourceMappingURL=order-history.js.map

/***/ })

});
//# sourceMappingURL=10.js.map