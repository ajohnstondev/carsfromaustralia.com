(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{549:function(t,e,n){var content=n(748);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("735f6938",content,!0,{sourceMap:!1})},747:function(t,e,n){"use strict";var o=n(549);n.n(o).a},748:function(t,e,n){(e=n(8)(!1)).push([t.i,".card .alert{position:relative!important;width:100%}",""]),t.exports=e},813:function(t,e,n){"use strict";n.r(e);var o=n(56),r={name:"notifications",components:{Modal:o.l,BaseAlert:o.a},data:function(){return{type:["","info","success","warning","danger"],notifications:{topCenter:!1},modals:{classic:!1,notice:!1,mini:!1}}},methods:{notifyVue:function(t,e){var n=Math.floor(4*Math.random()+1);this.$notify({message:"Welcome to <b>Vue Black Dashboard Pro</b> - a beautiful resource for every web developer",timeout:3e4,icon:"tim-icons icon-bell-55",horizontalAlign:e,verticalAlign:t,type:this.type[n]})}}},c=(n(747),n(4)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("card",[n("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[t._v("Notifications Style")]),t._v(" "),n("base-alert",{attrs:{type:"info"}},[t._v(" This is a plain notification")]),t._v(" "),n("base-alert",{attrs:{type:"info",dismissible:""}},[t._v("\n        This is a notification with close button.\n      ")]),t._v(" "),n("base-alert",{attrs:{type:"info",dismissible:"",icon:"tim-icons icon-bell-55"}},[t._v("\n        This is a notification with close button and icon.\n      ")]),t._v(" "),n("base-alert",{attrs:{type:"info",dismissible:"",icon:"tim-icons icon-bell-55"}},[t._v("\n        This is a notification with close button and icon and have many lines.\n        You can see that the icon and the close button are always vertically\n        aligned. This is a beautiful notification. So you don't have to worry\n        about the style.\n      ")])],1)],1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("card",[n("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[t._v("Notification states")]),t._v(" "),n("base-alert",{attrs:{type:"primary",dismissible:""}},[n("span",[n("b",[t._v(" Primary - ")]),t._v(' This is a regular notification made with\n          ".alert-primary"')])]),t._v(" "),n("base-alert",{attrs:{type:"info",dismissible:""}},[n("span",[n("b",[t._v(" Info - ")]),t._v(' This is a regular notification made with\n          ".alert-info"')])]),t._v(" "),n("base-alert",{attrs:{type:"success",dismissible:""}},[n("span",[n("b",[t._v(" Success - ")]),t._v(' This is a regular notification made with\n          ".alert-success"')])]),t._v(" "),n("base-alert",{attrs:{type:"warning",dismissible:""}},[n("span",[n("b",[t._v(" Warning - ")]),t._v(' This is a regular notification made with\n          ".alert-warning"')])]),t._v(" "),n("base-alert",{attrs:{type:"danger",dismissible:""}},[n("span",[n("b",[t._v(" Danger - ")]),t._v(' This is a regular notification made with\n          ".alert-danger"')])])],1)],1),t._v(" "),n("div",{staticClass:"col-md-12"},[n("card",{staticClass:"text-center"},[n("div",{staticClass:"places-buttons"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 ml-auto mr-auto text-center"},[n("h4",{staticClass:"card-title"},[t._v("\n              Notifications Places\n              "),n("p",{staticClass:"category"},[t._v("Click to view notifications")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 ml-auto mr-auto"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(e){return t.notifyVue("top","left")}}},[t._v("Top Left\n                ")])],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(e){return t.notifyVue("top","center")}}},[t._v("Top Center\n                ")])],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(e){return t.notifyVue("top","right")}}},[t._v("Top Right\n                ")])],1)])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 ml-auto mr-auto"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(e){return t.notifyVue("bottom","left")}}},[t._v("Bottom Left\n                ")])],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(e){return t.notifyVue("bottom","center")}}},[t._v("Bottom Center\n                ")])],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("base-button",{attrs:{type:"primary",block:""},nativeOn:{click:function(e){return t.notifyVue("bottom","right")}}},[t._v("Bottom Right\n                ")])],1)])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 text-center"},[n("div",{staticClass:"card-header"},[n("h4",{staticClass:"card-title"},[t._v("Modal")])]),t._v(" "),n("base-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.modals.classic=!0}}},[t._v("\n            Classic modal\n          ")]),t._v("\n           \n          "),n("base-button",{attrs:{type:"info"},nativeOn:{click:function(e){t.modals.notice=!0}}},[t._v("\n            Notice modal\n          ")]),t._v("\n           \n          "),n("base-button",{nativeOn:{click:function(e){t.modals.mini=!0}}},[t._v("\n            Small alert modal\n          ")]),t._v(" "),n("modal",{attrs:{show:t.modals.classic,headerClasses:"justify-content-center"},on:{"update:show":function(e){return t.$set(t.modals,"classic",e)}}},[n("h4",{staticClass:"title title-up",attrs:{slot:"header"},slot:"header"},[t._v("Modal title")]),t._v(" "),n("p",[t._v("\n              Far far away, behind the word mountains, far from the countries\n              Vokalia and Consonantia, there live the blind texts. Separated\n              they live in Bookmarksgrove right at the coast of the Semantics,\n              a large language ocean. A small river named Duden flows by their\n              place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n            ")]),t._v(" "),n("template",{slot:"footer"},[n("base-button",[t._v("Nice Button")]),t._v(" "),n("base-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.modals.classic=!1}}},[t._v("Close\n              ")])],1)],2),t._v(" "),n("modal",{attrs:{show:t.modals.notice,footerClasses:"justify-content-center",type:"notice"},on:{"update:show":function(e){return t.$set(t.modals,"notice",e)}}},[n("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("\n              How Do You Become an Affiliate?\n            ")]),t._v(" "),n("div",{staticClass:"instruction"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("strong",[t._v("1. Register")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n                    The first step is to create an account at\n                    "),n("a",{attrs:{href:"http://www.creative-tim.com/"}},[t._v("Creative Tim")]),t._v(".\n                    You can choose a social network or go for the classic\n                    version, whatever works best for you.\n                  ")])]),t._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"picture"},[n("img",{staticClass:"rounded img-raised",attrs:{src:"img//bg1.jpg",alt:"Thumbnail Image"}})])])])]),t._v(" "),n("div",{staticClass:"instruction"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("strong",[t._v("2. Apply")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n                    The first step is to create an account at\n                    "),n("a",{attrs:{href:"http://www.creative-tim.com/"}},[t._v("Creative Tim")]),t._v(".\n                    You can choose a social network or go for the classic\n                    version, whatever works best for you.\n                  ")])]),t._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"picture"},[n("img",{staticClass:"rounded img-raised",attrs:{src:"img//bg3.jpg",alt:"Thumbnail Image"}})])])])]),t._v(" "),n("p",[t._v("\n              If you have more questions, don't hesitate to contact us or send\n              us a tweet @creativetim. We're here to help!\n            ")]),t._v(" "),n("div",{staticClass:"justify-content-center",attrs:{slot:"footer"},slot:"footer"},[n("base-button",{attrs:{type:"info",round:""},nativeOn:{click:function(e){t.modals.notice=!1}}},[t._v("Sounds good!\n              ")])],1)]),t._v(" "),n("modal",{staticClass:"modal-primary",attrs:{show:t.modals.mini,"show-close":!1,headerClasses:"justify-content-center",type:"mini"},on:{"update:show":function(e){return t.$set(t.modals,"mini",e)}}},[n("div",{staticClass:"modal-profile",attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"tim-icons icon-single-02"})]),t._v(" "),n("p",[t._v("Always have an access to your profile")]),t._v(" "),n("template",{slot:"footer"},[n("base-button",{attrs:{type:"neutral",link:""}},[t._v("Back")]),t._v(" "),n("base-button",{attrs:{type:"neutral",link:""},nativeOn:{click:function(e){t.modals.mini=!1}}},[t._v("Close\n              ")])],1)],2)],1)])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);