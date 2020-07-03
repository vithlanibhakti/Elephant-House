webpackJsonp([7],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]
            ]
        })
    ], TermsPageModule);
    return TermsPageModule;
}());

//# sourceMappingURL=terms.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.openUrl = function (url) {
        window.open(url);
        // let parseUrl:any =  this.sanitizer.bypassSecurityTrustResourceUrl(url)
        // window.open(parseUrl);
    };
    TermsPage.prototype.onclickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    TermsPage.prototype.openContact = function () {
        this.navCtrl.push('ContactPage');
    };
    TermsPage.prototype.openfeedback = function () {
        this.navCtrl.push('FeedbackPage');
    };
    TermsPage.prototype.openterms = function () {
        this.navCtrl.push('TermsPage');
    };
    TermsPage.prototype.openprivacy = function () {
        this.navCtrl.push('TermsPage');
    };
    TermsPage.prototype.checkLogin = function () {
        if (localStorage.getItem('userData')) {
            return true;
        }
        return false;
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/jaydeepkataria/grocery-ionic/src/pages/terms/terms.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'Termspage_title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <div class="container">\n    <h3>Introduction</h3>\n    <p>\n      These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.\n\n      These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not\n      use\n      this Website if you disagree with any of these Website Standard Terms and Conditions.\n\n      Minors or people below 18 years old are not allowed to use this Website.\n    </p>\n\n    <h3>Intellectual Property Rights</h3>\n    <p>\n      Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.\n\n      You are granted limited license only for purposes of viewing the material contained on this Website.\n    </p>\n\n    <h3>Restrictions</h3>\n    <p>You are specifically restricted from all of the following:</p>\n    <ul>\n      <li>publishing any Website material in any other media;</li>\n      <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>\n      <li>publicly performing and/or showing any Website material;</li>\n      <li>using this Website in any way that is or may be damaging to this Website;</li>\n      <li>using this Website in any way that impacts user access to this Website;</li>\n      <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>\n      <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>\n      <li>using this Website to engage in any advertising or marketing.</li>\n      <li>Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in\n        absolute</li>\n      <li>discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</li>\n    </ul>\n    <h3>Your Content</h3>\n    <p>\n      In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying\n      Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and\n      all\n      media.\n    </p>\n    <p>\n      Your Content must be your own and must not be invading any third-party\'s rights. Company Name reserves the right to remove any of Your Content from this Website at any time\n      without notice.\n    </p>\n\n    <h3>No warranties</h3>\n    <p>\n      This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained\n      on\n      this Website. Also, nothing contained on this Website shall be interpreted as advising you.\n    </p>\n\n    <h3>Limitation of liability</h3>\n    <p>\n      In no event shall Company Name, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of\n      this\n      Website whether such liability is under contract. Company Name, including its officers, directors and employees shall not be held liable for any indirect, consequential or\n      special liability arising out of or in any way related to your use of this Website.\n    </p>\n\n    <h3>Indemnification</h3>\n    <p>\n      You hereby indemnify to the fullest extent Company Name from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way\n      related to your breach of any of the provisions of these Terms.\n    </p>\n\n    <h3>Severability</h3>\n    <p>\n      If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.\n    </p>\n\n    <h3>Variation of Terms</h3>\n    <p>\n      Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.\n    </p>\n\n    <h3>Assignment</h3>\n    <p>\n      The Company Name is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to\n      assign,\n      transfer, or subcontract any of your rights and/or obligations under these Terms.\n    </p>\n\n    <h3>Entire Agreement</h3>\n    <p>\n      These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website, and supersede all prior agreements and understandings.\n    </p>\n\n    <h3>Governing Law & Jurisdiction</h3>\n    <p>\n      These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal\n      courts located in Country for the resolution of any disputes.\n    </p>\n  </div>\n  <div class="footer">\n    <ion-list>\n      <div>\n        <ion-row>\n          <ion-col>\n            <h3>{{\'Explore\' | translate}}</h3>\n            <p (click)="onclickHome()">{{\'Homepage_products\' | translate}}</p>\n\n            <div *ngIf="checkLogin()">\n              <p (click)="openContact()">{{ \'Menupage_contactus\' | translate }}</p>\n            </div>\n            <div *ngIf="checkLogin()">\n              <p (click)="openfeedback()">{{ \'Menupage_feedback\' | translate }}</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <h3>{{\'Policy_Statement\' | translate}}</h3>\n            <p (click)="openterms()">{{ \'Menupage_terms\' | translate }}</p>\n            <p (click)="openprivacy()" >{{ \'Menupage_privacy\' | translate }}</p>\n          </ion-col>\n          <ion-col>\n            <h3>{{\'Menupage_contactus\' | translate}}</h3>\n            <p>Git Lanka Smart Apps, Sri Lanka</p>\n            <p>+94 7777 022 75</p>\n            <p>wijesinghe@gitl.lk</p>\n            <div >\n              <ion-icon name="logo-facebook" (click)="openUrl(\'https://www.facebook.com/gitlankasmart\')"></ion-icon>\n              <ion-icon name="logo-twitter" (click)="openUrl(\'https://twitter.com/GitLanka\')"></ion-icon>\n              <ion-icon name="logo-instagram" (click)="openUrl(\'https://www.instagram.com/Git_Lanka_Smart_Apps/\')"></ion-icon>\n          </div>\n          </ion-col>\n          <ion-col>\n            <img src="././assets/imgs/android.svg" height="50%" width="50%" alt="Android" (click)="openUrl(\'https://play.google.com/store/apps/details?id=com.app.freshbasket\')"/>\n            <img src="././assets/imgs/iphone.svg" height="50%" width="50%" alt="iOS" (click)="openUrl(\'https://apps.apple.com/app/id1514945632\')"/>\n          </ion-col>\n        </ion-row>\n      </div>\n      \n      <div>\n        <p style="text-align:center;">\n          {{ \'appname\' | translate }} © {{year}}, All rights reserved\n      </p>\n      </div>\n     \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jaydeepkataria/grocery-ionic/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ })

});
//# sourceMappingURL=7.js.map