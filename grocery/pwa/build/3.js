webpackJsonp([3],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymenttypePageModule", function() { return PaymenttypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymenttype__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymenttypePageModule = /** @class */ (function () {
    function PaymenttypePageModule() {
    }
    PaymenttypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paymenttype__["a" /* PaymenttypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paymenttype__["a" /* PaymenttypePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__paymenttype__["a" /* PaymenttypePage */]
            ]
        })
    ], PaymenttypePageModule);
    return PaymenttypePageModule;
}());

//# sourceMappingURL=paymenttype.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth, navPram, toastCtrl, loadingCtrl, sanitizer, menuCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navPram = navPram;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.menuCtrl = menuCtrl;
        this.postData = {
            token: ""
        };
        this.cartCounter = 0;
        this.loginstatus = "Guest";
        this.productFullData = [];
        this.searchQuery = "";
        this.categoryList = "";
        this.chkckt = HomePage_1.checkCart;
        this.postData.token = this.auth.gettoken();
        this.itemsuperqty = 1;
        var date = new Date();
        this.year = date.getFullYear();
        if (localStorage.getItem('userData')) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.userDetails = data.userData;
            this.loginstatus = this.userDetails.fname;
        }
        else {
            this.loginstatus = "Guest";
        }
        this.menuCtrl.enable(true);
        this.baseUrlImage = auth.getimage();
        this.baseUrlBanner = auth.getbanner();
        this.homepageproducts();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.itemSelected = function (id, category) {
        this.navCtrl.push('ProductsPage', { category: id, categoryname: category });
    };
    HomePage.prototype.gotocart = function () {
        this.navCtrl.push('CartPage');
    };
    HomePage.prototype.changeProductQty = function (itemid, change) {
        var i = 0;
        for (var _i = 0, _a = HomePage_1.cartData; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.itemid == itemid) {
                var qty = parseInt(item.Mquantity);
                qty += parseInt(change);
                if (qty != 0) {
                    item.Mquantity = qty.toString();
                }
                else if (qty == 0) {
                    console.log(item);
                    HomePage_1.cartData.splice(i, 1);
                }
                this.toastCtrl.create({
                    message: "Cart Updated.",
                    duration: 2000
                }).present();
            }
            i++;
        }
    };
    HomePage.prototype.homepageproducts = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Fetching Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "gethomepage").then(function (result) {
            _this.resposeData = result;
            _this.homeproductdataSet = _this.resposeData.HomeData;
            _this.categoryFullData = _this.resposeData.CateData;
            _this.bannerFullData = _this.resposeData.BannData;
            zest.dismiss();
        }, function (err) {
            console.log(err);
            zest.dismiss();
        });
    };
    HomePage.prototype.openProductDetailPage = function (itemId, itemName, itemImage, itemDesc, itemQuantity, itemQuantityType, itemPrice) {
        this.navCtrl.push('ProductDescPage', {
            itemId: itemId,
            itemName: itemName,
            itemDesc: itemDesc,
            itemQuantity: itemQuantity,
            itemQuantityType: itemQuantityType,
            itemPrice: itemPrice,
            itemImage: itemImage
        });
    };
    HomePage.prototype.gotoproducts = function (category, cname) {
        this.navCtrl.push('ProductsPage', {
            category: category,
            cname: cname
        });
    };
    HomePage.prototype.addToCart = function (itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage) {
        if (HomePage_1.checkCart(itemid) != true) {
            HomePage_1.storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage, this.itemsuperqty);
            var toast = this.toastCtrl.create({
                message: "Product Added to Cart!",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Product Already in Cart!",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    HomePage.storeToCart = function (itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage, itemsuperqty) {
        console.log(itemsuperqty);
        var Mquantity = itemsuperqty;
        var itemtotal = itemprice;
        HomePage_1.cartData.push({ itemid: itemid, itemname: itemname, itemquantity: itemquantity, itemquantitytype: itemquantitytype, itemprice: itemprice, itemtotal: itemtotal, itemImage: itemImage, Mquantity: Mquantity });
    };
    HomePage.prototype.getitemQuantity = function (itemid) {
        for (var _i = 0, _a = HomePage_1.cartData; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.itemid == itemid)
                return item.Mquantity;
        }
        return 0;
    };
    HomePage.checkCart = function (itemid) {
        var result;
        for (var _i = 0, _a = HomePage_1.cartData; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.itemid == itemid) {
                result = true;
                break;
            }
            else {
                result = false;
            }
        }
        return result;
    };
    HomePage.prototype.gotoSearch = function () {
        this.navCtrl.push('ProductSearchPage');
    };
    HomePage.prototype.cartCounterManager = function () {
        return HomePage_1.cartData.length;
    };
    HomePage.prototype.gotoOffer = function () {
        this.navCtrl.push('OffersPage');
    };
    HomePage.prototype.dologout = function () {
        localStorage.removeItem('userData');
        this.navCtrl.setRoot('HomePage');
    };
    HomePage.prototype.dologin = function () {
        this.navCtrl.push('LoginPage');
    };
    HomePage.prototype.onclickcategory = function () {
        this.navCtrl.push('CategoryPage');
    };
    HomePage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    HomePage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    HomePage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    HomePage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    HomePage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    HomePage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    HomePage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    HomePage.cartData = [];
    HomePage.orderinfo = { "couponcode": "NO", "couponprice": "0", "shiping": "", "total": "" };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'appname\' | translate }}</ion-title>\n    <ion-buttons end class="cartbadge">\n      <button ion-button (click)="gotoSearch()">\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n      <button ion-button (click)="gotocart()">\n        <ion-icon name="ios-cart"></ion-icon>\n      </button>\n      <ion-badge item-end>{{cartCounterManager()}}</ion-badge>\n    </ion-buttons>\n  </ion-navbar>\n  <p class="status"> {{ \'Homepage_Hi\' | translate }} , {{loginstatus}} |\n    <a *ngIf="loginstatus == \'Guest\'" href="javascript:void(0)" (click)="dologin()">{{ \'Homepage_login\' | translate }}</a>\n    <a (click)="dologout()" *ngIf="loginstatus != \'Guest\'" href=""> {{ \'Homepage_logout\' | translate }}</a>\n  </p>\n</ion-header>\n<ion-content no-padding>\n\n  <div class="slides1" *ngIf="bannerFullData && bannerFullData.length">\n    <ion-slides autoplay="2000" loop="true" speed="900">\n      <ion-slide *ngFor="let itembn of bannerFullData; let i = index;" [style.backgroundImage]="\'url(\' + baseUrlBanner + itembn.bnimg + \')\'"\n        style="background-repeat: no-repeat; background-size: contain;\n        background-position: center;">\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class="text-button-container">\n    <h4 class="category">{{ \'Homepage_category\' | translate }}</h4>\n    <!-- <h3 class="viewall" (click)="opencategory()">{{ \'Homepage_category_all\' | translate }}</h3> -->\n    <button class="viewall" ion-button (click)="onclickcategory()">{{ \'Homepage_category_all\' | translate }}</button>\n  </div>\n\n  <ion-scroll scrollX>\n    <div class="scroll-item" *ngFor="let itemcat of categoryFullData;  let i = index;">\n      <div [style.backgroundImage]="\'url(\' + baseUrlImage + itemcat.cateimg + \')\'" class="itemimg" (click)="gotoproducts(itemcat.id, itemcat.categry)"></div>\n      <p>{{itemcat.categry}}</p>\n    </div>\n  </ion-scroll>\n\n  <div class="text-button-container">\n    <h4 class="prd">{{ \'Homepage_products\' | translate }}</h4>\n    <!-- <button class="btn-animation" ion-button (click)="gotoOffer()">{{ \'Homepage_offers\' | translate }}</button> -->\n  </div>\n\n  <div class="homeproducts">\n    <ion-card *ngFor="let item of homeproductdataSet;  let i = index;">\n      <img (click)="openProductDetailPage(item.id,item.name,item.image,item.description,item.quantity,item.quantitytype,item.price)" class="p-2"\n        src="{{baseUrlImage}}{{item.image}}">\n      <ion-card-header title="{{item.name}}">  {{item.name}} </ion-card-header>\n      <ion-card-content>\n        <div class="quantity">{{item.quantity}} {{item.quantitytype}}</div>\n        <div class="price">{{item.price | currency :"$ "}}</div>\n        <!-- <div class="qty" *ngIf="chkckt(item.id)">\n      <button round ion-button color="primary" (click)="changeProductQty(item.id,-1)"><b class="cstm">-</b></button>\n      <button round>{{getitemQuantity(item.id)}}</button>\n      <button round ion-button color="primary" (click)="changeProductQty(item.id,1)" ><b  class="cstm">+</b></button>\n    </div> -->\n        <!-- <button round  *ngIf="!chkckt(item.id)" ion-button (click)="addToCart(item.id,item.name,item.quantity,item.quantitytype, item.price, item.image)">Add to Cart</button> -->\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- <ion-fab bottom right>\n    <a ion-fab href="tel:+94777702275">\n      <ion-icon name="ios-call"></ion-icon>\n    </a>\n  </ion-fab> -->\n  <div class="footer">\n    <ion-list>\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="././assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="././assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n     \n    </ion-list>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymenttypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';


var PaymenttypePage = /** @class */ (function () {
    function PaymenttypePage(alertCtrl, navCtrl, auth, toastCtrl, navParams, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.order = {
            token: "",
            user_id: "",
            fname: "",
            city: "",
            area: "",
            address: "",
            mobile: "",
            total: "",
            shipping: "",
            coupon: "",
            couponprice: "",
            ptype: "",
            payid: "",
            dtype: "",
            lat: "",
            lng: "",
            items: []
        };
        this.userData = {
            fname: "",
            city: "",
            area: "",
            address: "",
            mobile: ""
        };
        var date = new Date();
        this.year = date.getFullYear();
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userData.fname = this.navParams.get('fullname');
        this.userData.mobile = this.navParams.get('mobile');
        this.userData.area = this.navParams.get('area');
        this.userData.address = this.navParams.get('address');
        this.userData.city = this.navParams.get('city');
        this.order.dtype = this.navParams.get('dtype');
        this.order.lng = this.navParams.get('lng');
        this.order.lat = this.navParams.get('lat');
    }
    // payWithPaypal(){
    //   this.paypal.init({
    //     PayPalEnvironmentProduction: 'Aa4bwxqDxgyBP8UX9XTb3BcDzZkdXLy8JcMWya0-rkYDK9Y85sLkXEULUvfpg5ApGso83syt4MgywbH6',
    //     PayPalEnvironmentSandbox: 'Aa4bwxqDxgyBP8UX9XTb3BcDzZkdXLy8JcMWya0-rkYDK9Y85sLkXEULUvfpg5ApGso83syt4MgywbH6'
    //   }).then(() => {
    //     // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
    //     this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    //       // Only needed if you get an "Internal Service Error" after PayPal login!
    //       //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
    //     })).then(() => {
    //       let payment = new PayPalPayment('1.00', 'USD', 'Description', 'sale');
    //       this.paypal.renderSinglePaymentUI(payment).then(() => {
    //         console.log("payment success");
    //         // Successfully paid
    //         // Example sandbox response
    //         //
    //         // {
    //         //   "client": {
    //         //     "environment": "sandbox",
    //         //     "product_name": "PayPal iOS SDK",
    //         //     "paypal_sdk_version": "2.16.0",
    //         //     "platform": "iOS"
    //         //   },
    //         //   "response_type": "payment",
    //         //   "response": {
    //         //     "id": "PAY-1AB23456CD789012EF34GHIJ",
    //         //     "state": "approved",
    //         //     "create_time": "2016-10-03T13:33:33Z",
    //         //     "intent": "sale"
    //         //   }
    //         // }
    //       }, () => {
    //         // Error or render dialog closed without being successful
    //       });
    //     }, () => {
    //       // Error in configuration
    //     });
    //   }, () => {
    //     // Error in initialization, maybe PayPal isn't supported or something else
    //   });
    // }
    PaymenttypePage.prototype.onCod = function () {
        var _this = this;
        console.log(this.order);
        this.order.ptype = "COD";
        this.order.token = this.userDetails.token;
        this.order.fname = this.userData.fname;
        this.order.mobile = this.userData.mobile;
        this.order.area = this.userData.area;
        this.order.address = this.userData.address;
        this.order.user_id = this.userDetails.user_id;
        this.order.city = this.userData.city;
        this.order.coupon = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].orderinfo.couponcode;
        this.order.couponprice = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].orderinfo.couponprice;
        this.order.total = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].orderinfo.total;
        this.order.shipping = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].orderinfo.shiping;
        this.order.items = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData;
        var zest = this.loadingCtrl.create({
            content: "Submitting Order..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        console.log(this.order);
        if (this.order.fname != "" && this.order.address != "" && this.order.area != "" && this.order.mobile != "" && this.order.user_id != "" && this.order.token != "") {
            this.auth.postData(this.order, "placeorder").then(function (result) {
                zest.dismiss();
                _this.resposeData = result;
                if (_this.resposeData.success) {
                    _this.navCtrl.setRoot('HomePage');
                    _this.navCtrl.push('OrderConfirmPage', { OrderId: _this.resposeData.success });
                }
                else {
                    console.log("Error");
                }
            }, function (err) {
                zest.dismiss();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Something Wrong',
                subTitle: 'Unable to Place Order.',
                buttons: ['Dismiss']
            });
            alert_1.present();
            zest.dismiss();
        }
    };
    PaymenttypePage.prototype.onpaypal = function () {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: 'Buy Now. In Demo Not Available, Or Use Cash on Delivery',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PaymenttypePage.prototype.onstripe = function () {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: 'Buy Now. In Demo Not Available, Or Use Cash on Delivery',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PaymenttypePage.prototype.oncard = function () {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: 'Buy Now. In Demo Not Available, Or Use Cash on Delivery',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PaymenttypePage.prototype.onstore = function () {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: 'Buy Now. In Demo Not Available, Or Use Cash on Delivery',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PaymenttypePage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    PaymenttypePage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    PaymenttypePage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    PaymenttypePage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    PaymenttypePage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    PaymenttypePage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    PaymenttypePage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    PaymenttypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paymenttype',template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/paymenttype/paymenttype.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <div class="container">\n    <ion-card (click)="onCod()">\n      <ion-row>\n        <ion-col col-3>\n          <ion-icon name="cs-cod"></ion-icon>\n        </ion-col>\n        <ion-col col-9>\n          <h2>Cash On Delivery</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n\n    <ion-card (click)="oncard()">\n      <ion-row>\n        <ion-col col-3>\n          <ion-icon name="cs-pos"></ion-icon>\n        </ion-col>\n        <ion-col col-9>\n          <h2>Card on Delivery</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card (click)="onpaypal()">\n      <ion-row>\n        <ion-col col-3>\n          <ion-icon name="cs-paypal"></ion-icon>\n        </ion-col>\n        <ion-col col-9>\n          <h2>Paypal</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card (click)="onstripe()">\n      <ion-row>\n        <ion-col col-3>\n          <ion-icon name="cs-card"></ion-icon>\n        </ion-col>\n        <ion-col col-9>\n          <h2>Credit & Debit Cards</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card (click)="onstore()">\n      <ion-row>\n        <ion-col col-3>\n          <ion-icon name="cs-shop"></ion-icon>\n        </ion-col>\n        <ion-col col-9>\n          <h2>Store Pickup</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <div class="footer">\n    <ion-list>\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="././assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="././assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n     \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/paymenttype/paymenttype.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PaymenttypePage);
    return PaymenttypePage;
}());

//# sourceMappingURL=paymenttype.js.map

/***/ })

});
//# sourceMappingURL=3.js.map