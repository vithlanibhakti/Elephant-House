webpackJsonp([17],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]
            ]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
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



var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, alertCtrl, auth, toastController, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.postData = {
            "user_id": "",
            "token": "",
        };
        this.itemsuperqty = 1;
        this.baseUrlImage = auth.getimage();
        if (localStorage.getItem('userData')) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.userDetails = data.userData;
        }
        var date = new Date();
        this.year = date.getFullYear();
        this.postData.token = this.auth.gettoken();
        this.getcategorydata();
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.getcategorydata = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "getcategory").then(function (result) {
            _this.resposeData = result;
            _this.categoryFullData = _this.resposeData.Data;
            console.log(_this.categoryFullData);
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    CategoryPage.prototype.opencategory = function (category, cname) {
        this.navCtrl.push('ProductsPage', {
            category: category,
            cname: cname
        });
    };
    CategoryPage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    CategoryPage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    CategoryPage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    CategoryPage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    CategoryPage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    CategoryPage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    CategoryPage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/category/category.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>All Category</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>All Category</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="container">\n      <div *ngFor="let cate of categoryFullData;  let i = index;">\n        <ion-row>\n          <ion-col col-4 class="col-img">\n            <img src="{{baseUrlImage}}{{cate.cateimg}}">\n          </ion-col>\n          <ion-col class="col-txt" col-8  (click)="opencategory(cate.id, cate.categry)">\n            <p title="{{cate.categry}}">{{cate.categry}}</p>\n            <p>{{cate.catedes}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n  </div>\n  <!-- <ion-list>\n    <ion-item *ngFor="let cate of categoryFullData;  let i = index;" (click)="opencategory(cate.id, cate.categry)">\n      <ion-thumbnail item-start>\n        <img src="{{baseUrlImage}}{{cate.cateimg}}">\n      </ion-thumbnail>\n      <h2>{{cate.categry}}</h2>\n      <p>{{cate.catedes}}</p>\n    </ion-item>\n  </ion-list> -->\n  <div class="footer">\n    <ion-list>\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="././assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="././assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n     \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ })

});
//# sourceMappingURL=17.js.map