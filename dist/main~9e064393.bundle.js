!function(r){function n(n){for(var t,o,d=n[0],s=n[1],m=n[2],p=0,c=[];p<d.length;p++)o=d[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&c.push(i[o][0]),i[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(r[t]=s[t]);for(l&&l(n);c.length;)c.shift()();return a.push.apply(a,m||[]),e()}function e(){for(var r,n=0;n<a.length;n++){for(var e=a[n],t=!0,d=1;d<e.length;d++){var s=e[d];0!==i[s]&&(t=!1)}t&&(a.splice(n--,1),r=o(o.s=e[0]))}return r}var t={},i={2:0},a=[];function o(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return r[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=t,o.d=function(r,n,e){o.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,n){if(1&n&&(r=o(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var t in r)o.d(e,t,function(n){return r[n]}.bind(null,t));return e},o.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(n,"a",n),n},o.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},o.p="";var d=window.webpackJsonp=window.webpackJsonp||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var m=0;m<d.length;m++)n(d[m]);var l=s;a.push([32,4,3,1,0]),e()}({21:function(r,n,e){var t=e(22),i=e(23);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[r.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);r.exports=i.locals||{}},23:function(r,n,e){var t=e(3),i=e(24),a=e(25),o=e(26),d=e(27);(n=t(!1)).push([r.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css);"]),n.i(i),n.i(a),n.i(o),n.i(d),n.push([r.i,"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Abel&family=Gayathri&family=Oxygen&family=PT+Sans&family=Poppins&family=Raleway&display=swap);"]),n.push([r.i,"/* @import '~@fortawesome/fontawesome-free/css/all.min.css'; */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #f1f3de;\r\n}\r\n\r\n.skip-link {\r\n    position: absolute;\r\n    top: -60px;\r\n    left: 0;\r\n    background-color: #31112c;\r\n    color: white;\r\n    z-index: 100;\r\n    margin-left: 20px;\r\n    text-decoration: none;\r\n    border-radius: 10px;\r\n    margin-top: 7px;\r\n    padding: 0.9em;\r\n}\r\n\r\n.skip-link:focus {\r\n    top: 0;\r\n}",""]),r.exports=n},24:function(r,n,e){(n=e(3)(!1)).push([r.i,"nav {\r\n    background-color: #7d0633;\r\n    padding: 5px 15%;\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index: 99;\r\n}\r\n\r\nnav ul {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nnav ul li {\r\n    padding: 10px 0;\r\n    cursor: pointer;\r\n}\r\n\r\nnav ul li.menu-nav {\r\n    position: relative;\r\n    width: auto;\r\n    margin: 0 20px;\r\n    text-align: center;\r\n    order: 3;\r\n}\r\n\r\nnav ul li.menu-nav::after {\r\n    position: absolute;\r\n    content: '';\r\n    left: 15%;\r\n    bottom: 5px;\r\n    height: 2px;\r\n    width: 70%;\r\n    background-color: #fbdcc4;\r\n    opacity: 0;\r\n    transition: all 0.2s linear;\r\n}\r\n\r\nnav ul li.menu-nav:hover::after {\r\n    opacity: 1;\r\n    bottom: 8px;\r\n}\r\n\r\nnav ul li.brand {\r\n    flex: 1;\r\n    color: #fbdcc4;\r\n    font-size: 1em;\r\n    font-weight: 600;\r\n    font-family: 'Raleway', sans-serif;\r\n    cursor: default;\r\n    user-select: none;\r\n    /* padding-left: 13%; */\r\n}\r\n\r\nnav ul li a {\r\n    color: #fbdcc4;\r\n    font-size: 18px;\r\n    text-decoration: none;\r\n    transition: .4s;\r\n    font-family: 'PT Sans', sans-serif;\r\n}\r\n\r\n.menu-nav a {\r\n    padding: 0.8em;\r\n}\r\n\r\nnav ul li:hover a{\r\n    font-weight: bold;\r\n}\r\n\r\nnav ul li i {\r\n    font-size: 23px;\r\n}\r\n\r\nnav ul li.btn {\r\n    display: none;\r\n}\r\n\r\nnav ul li.btn button {\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\nnav ul li.btn button i{\r\n    padding: 0.6em;\r\n    color: #fbdcc4;\r\n    cursor: pointer;\r\n}\r\n\r\nnav ul li.btn button i:hover {\r\n    color: #31112c;\r\n}\r\n\r\nnav ul li.btn button i::before {\r\n    padding: 0.55em;\r\n}\r\n\r\nnav ul li.btn.hide i::before {\r\n    content: '\\f00d';\r\n    padding: 0.65em;\r\n}\r\n\r\n.jumbotron {\r\n    background-image: url('/images/hero-image_4-large.jpg');\r\n    /* background-image: url('../public/images/heros/hero-image_4.jpg'); */\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 50vh;\r\n}\r\n\r\n.wrapper {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    height: 50vh;\r\n    background-color: #181816;\r\n    opacity: 0.7;\r\n}\r\n\r\n.text-hero {\r\n    font-size: 1em;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: bolder;\r\n    padding: 8% 0;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.text-hero h1 {\r\n    font-size: 1.7em;\r\n    font-family: cursive;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.text-hero p {\r\n    font-size: 1.2em;\r\n    font-family: 'Gayathri', sans-serif;\r\n}\r\n\r\n@media screen and (min-width: 0px) and (max-width: 500px) {\r\n    nav ul li.brand {\r\n        padding-left: 20%;\r\n    }\r\n\r\n    .jumbotron {\r\n        background-image: url('/images/hero-image_4-small.jpg');\r\n        height: 70vh;\r\n    }\r\n\r\n    .wrapper {\r\n        height: 70vh;\r\n    }\r\n    \r\n    .text-hero {\r\n        padding: 60% 0;\r\n        margin: 0 40px;\r\n        letter-spacing: 1px;\r\n    }\r\n\r\n    .text-hero h1 {\r\n        font-size: 1.7em;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    .text-hero p {\r\n        font-size: 1.3em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 501px) and (max-width: 700px) {\r\n    nav ul li.brand {\r\n        padding-left: 16%;\r\n    }\r\n\r\n    .jumbotron {\r\n        height: 70vh;\r\n    }\r\n\r\n    .wrapper {\r\n        height: 70vh;\r\n    }\r\n\r\n    .text-hero {\r\n        padding: 48% 0;\r\n        margin: 0 40px;\r\n        letter-spacing: 1px;\r\n    }\r\n    \r\n    .text-hero h1 {\r\n        font-size: 1.7em;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    .text-hero p {\r\n        font-size: 1.3em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 701px) and (max-width: 900px) {\r\n    nav ul li.brand {\r\n        padding-left: 13%;\r\n    }\r\n\r\n    .jumbotron {\r\n        height: 60vh;\r\n    }\r\n\r\n    .wrapper {\r\n        height: 60vh;\r\n    }\r\n\r\n    .text-hero {\r\n        padding: 40% 0;\r\n        margin: 0 40px;\r\n        letter-spacing: 1px;\r\n    }\r\n\r\n    .text-hero h1 {\r\n        font-size: 1.6em;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    .text-hero p {\r\n        font-size: 1.4em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 901px) and (max-width: 1000px) {\r\n    .jumbotron {\r\n        height: 50vh;\r\n    }\r\n\r\n    .wrapper {\r\n        height: 50vh;\r\n    }\r\n\r\n    .text-hero {\r\n        padding: 15% 0;\r\n        letter-spacing: 1px;\r\n    }\r\n    \r\n    .text-hero h1 {\r\n        font-size: 1.5em;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    .text-hero p {\r\n        font-size: 1.2em;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    nav ul li.brand {\r\n        text-align: center;\r\n    }\r\n\r\n    nav {\r\n        padding: 0 30px;\r\n    }\r\n\r\n    nav ul li.menu-nav {\r\n        width: 100%;\r\n        display: none;\r\n    }\r\n\r\n    nav ul li.menu-nav.open {\r\n        display: block;\r\n    }\r\n\r\n    nav ul li.menu-nav:hover {\r\n        border-radius: 5px;\r\n        box-shadow: inset 0 0 5px #fbdcc4, inset 0 0 10px #fbdcc4;\r\n    }\r\n\r\n    nav ul li.menu-nav:hover::after {\r\n        opacity: 0;\r\n    }\r\n\r\n    nav ul li.btn {\r\n        display: block;\r\n    }\r\n}",""]),r.exports=n},25:function(r,n,e){(n=e(3)(!1)).push([r.i,"main {\r\n    margin-top: 40px;\r\n}\r\n\r\n.container {\r\n    width: 70%;\r\n    margin: 0 15%;\r\n}\r\n\r\n.recomend {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    border-top: 1px solid black;\r\n    border-bottom: 1px solid black;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.recomend div h2 {\r\n    font-family: 'Oxygen', sans-serif;\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.recomend div i {\r\n    margin-top: 5px;\r\n}\r\n\r\n.recomend .right-icons {\r\n    margin-left: 83%;\r\n}\r\n\r\nrestaurant-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 20px 15px;\r\n}\r\n\r\n\r\n.card-recomend {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    border-radius: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.card-recomend img {\r\n    border-radius: 20px 20px 0 0;\r\n    max-height: 50vh;\r\n    height: 30vh;\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.city-recomend {\r\n    position: absolute;\r\n    background-color: #faf3dd;\r\n    padding: 1% 1%;\r\n    border-radius: 20px 0 0 0;\r\n    opacity: 0.8;\r\n    color: black;\r\n}\r\n\r\n.desc-recomend {\r\n    padding: 2px 16px;\r\n    color: black;\r\n    text-align: justify;\r\n}\r\n\r\n.desc-recomend h3:nth-child(1){\r\n    margin-top: 10px;\r\n    text-align: right;\r\n}\r\n\r\n.desc-recomend h3:nth-child(2){\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-top: 5px;\r\n}\r\n\r\n.desc-recomend h3 i {\r\n    color: #7d0633;\r\n}\r\n\r\n.desc-recomend p:nth-child(3) {\r\n    text-align: right;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n\r\n.desc-recomend p:nth-child(4) {\r\n    text-indent: 20px;\r\n}\r\n\r\n.desc-recomend p {\r\n    font-family: 'Abel', sans-serif;\r\n}\r\n\r\n.button {\r\n    display: inline-block;\r\n    border-radius: 20px;\r\n    background-color: #7d0633;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    padding: 10px 20px;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 10px 0;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n}\r\n\r\n.button span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n    vertical-align: middle;\r\n}\r\n\r\n.button span:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    content: \"\\f35a\";\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    transition: 0.5s;\r\n    margin-top: 1%;\r\n    color: #f1f3de;\r\n}\r\n\r\n.button:hover span {\r\n    padding-right: 25px;\r\n}\r\n\r\n.button:hover span:after {\r\n    opacity: 1;\r\n    right: 0;\r\n}\r\n\r\n/* \r\n    Detail Restaurant\r\n*/\r\n\r\ndetail-restaurant {\r\n    margin: 0 auto;\r\n    width: 70%;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\ndetail-restaurant .restaurant_poster {\r\n    width: 100%;\r\n    max-width: 600px;\r\n    max-height: 62vh;\r\n    height: 100vh;\r\n}\r\n\r\n.restaurant_name {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.restaurant_address_rating {\r\n    padding-left: 50%;\r\n}\r\n\r\n.restaurant_address_rating ul li {\r\n    list-style: none;\r\n}\r\n\r\n.restaurant_address_rating ul li i {\r\n    color: #7d0633;\r\n}\r\n\r\n.restaurant_address_rating ul li .restaurant_address {\r\n    font-style: italic;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.restaurant_address_rating ul li .restaurant_rating {\r\n    font-style: italic;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    /* text-align: center; */\r\n}\r\n\r\n.restaurant_description {\r\n    margin-top: 10px;\r\n    text-align: justify;\r\n}\r\n\r\n.restaurant_description h3 {\r\n    border-top: solid black 2px;\r\n    text-align: center;\r\n    border-bottom: solid black 2px;\r\n    padding: 5px 0;\r\n}\r\n\r\n.restaurant_description p {\r\n    margin-top: 5px;\r\n    text-indent: 20px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\n#restaurant_category {\r\n    text-align: right;\r\n}\r\n\r\n#restaurant_category span {\r\n    font-style: italic;\r\n}\r\n\r\n#restaurants_menus {\r\n    margin-top: 5px;\r\n}\r\n\r\n#restaurants_menus h3{\r\n    border-top: solid black 2px;\r\n    border-bottom: solid black 2px;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n}\r\n\r\n.restaurants_menus_wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 24px;\r\n}\r\n\r\n.restaurants_menus_category {\r\n    margin-top: 5px;\r\n}\r\n\r\n.restaurants_menus_category h4{\r\n    text-align: center;\r\n}\r\n\r\n.restaurants_menus_category ul {\r\n    margin-top: 5px;\r\n    text-align: center;\r\n    list-style: none;\r\n}\r\n\r\n.restaurants_menus_category ul li {\r\n    border-bottom: solid black 1px;\r\n    padding: 5px 0;\r\n}\r\n\r\n#restaurant_customer_reviews {\r\n    margin-top: 20px;\r\n}\r\n\r\n#restaurant_customer_reviews h3 {\r\n    text-align: center;\r\n    border-top: solid black 2px;\r\n    border-bottom: solid black 2px;\r\n    padding: 5px 0;\r\n}\r\n\r\n.restaurant_list_reviews {\r\n    margin-top: 10px;\r\n}\r\n\r\n.restaurant_list_reviews h4 {\r\n    font-family: cursive;\r\n    margin-top: 5px;\r\n}\r\n\r\n.restaurant_list_reviews h4 i {\r\n    color: #7d0633;\r\n}\r\n\r\n.restaurant_list_reviews h4 span {\r\n    position: absolute;\r\n    right: 40.5%;\r\n    font-size: 0.7em;\r\n    font-weight: 100;\r\n    font-style: italic;\r\n}\r\n\r\n.restaurant_list_reviews p {\r\n    text-align: center;\r\n    border-bottom: solid black 1px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.add_restaurant_review {\r\n    margin-top: 10px;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    padding: 20px;\r\n}\r\n\r\n#restaurant-consumer-review label {\r\n    font-weight: bold;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\n.add_restaurant_review input[type=text], .add_restaurant_review textarea {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #7d0633;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    background-color: #f1f3de;\r\n    overflow: hidden;\r\n}\r\n\r\n.add_restaurant_review input[type=text]:focus, .add_restaurant_review textarea:focus {\r\n    background-color: #7d0633;\r\n    color: #f1f3de;\r\n}\r\n\r\n.add_restaurant_review button {\r\n    width: 100%;\r\n    background-color: #7d0633;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n}\r\n\r\n.add_restaurant_review button:hover {\r\n    background-color: #570726;\r\n}\r\n\r\n.field-required {\r\n    color: #7d0633;\r\n    text-align: right;\r\n    font-weight: 550;\r\n}\r\n\r\n.connection_failed {\r\n    text-align: center;\r\n}\r\n\r\n.connection_failed img{\r\n    width: 20%;\r\n}\r\n\r\n.connection_failed h3 {\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    color: #7d0633;\r\n}\r\n\r\n.success-message {\r\n    text-align: right;\r\n    color: #2ac276;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n/* \r\n    Like\r\n*/\r\n\r\n.like {\r\n    font-size: 18px;\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    background-color: #7d0633;\r\n    color: #faf3dd;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    width: 70px;\r\n    height: 70px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.like:hover {\r\n    background-color: #570726;\r\n}\r\n\r\n.alert-notif {\r\n    position: fixed;\r\n    bottom: 500px;\r\n    left: 340px;\r\n    width: 50%;\r\n    padding: 20px;\r\n    background-color: #2ac276;\r\n    color: white;\r\n    border-radius: 30px;\r\n}\r\n\r\n.closebtn {\r\n    margin-left: 15px;\r\n    color: white;\r\n    font-weight: bold;\r\n    float: right;\r\n    font-size: 22px;\r\n    line-height: 20px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.closebtn:hover {\r\n    color: black;\r\n}\r\n\r\n/* \r\n    Empty Favorite\r\n*/\r\n\r\n.empty-favorite {\r\n    text-align: center;\r\n}\r\n\r\n.empty-favorite img {\r\n    width: 20%;\r\n}\r\n\r\n.empty-favorite h3, .empty-favorite p {\r\n    position: relative;\r\n    bottom: 50px;\r\n}\r\n\r\n.empty-favorite h3 {\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n.empty-favorite p {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n@media screen and (min-width: 0px) and (max-width: 800px) {\r\n    restaurant-list {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .card-recomend img {\r\n        height: 20vh;\r\n    }\r\n\r\n    .city-recomend {\r\n        font-size: 1.1em;\r\n        padding: 2% 3%;\r\n    }\r\n\r\n    .desc-recomend {\r\n        font-size: 1.2em;\r\n    }\r\n\r\n    detail-restaurant {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    detail-restaurant .restaurant_poster {\r\n        height: auto;\r\n        max-width: 100%;\r\n    }\r\n\r\n    .favorite {\r\n        position: fixed;\r\n        top: 80%;\r\n        left: 80%;\r\n    }\r\n\r\n    .restaurant_address_rating {\r\n        padding-left: 80%;\r\n    }\r\n\r\n    .restaurant_list_reviews h4 span {\r\n        right: 15%;\r\n    }\r\n\r\n    .connection_failed img{\r\n        width: 30%;\r\n    }\r\n    \r\n    .connection_failed h3 {\r\n        font-size: 1.2em;\r\n    }\r\n\r\n    .empty-favorite img {\r\n        width: 35%;\r\n    }\r\n\r\n    .alert-notif {\r\n        bottom: 800px;\r\n        left: 190px;\r\n        width: 50%;\r\n    }\r\n} \r\n\r\n@media screen and (min-width: 801px) and (max-width: 1000px) {\r\n    .recomend div h2 {\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    restaurant-list {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\r\n    .card-recomend img {\r\n        height: 25vh;\r\n    }\r\n\r\n    .city-recomend {\r\n        font-size: 1em;\r\n        padding: 2% 3%;\r\n    }\r\n\r\n    .desc-recomend {\r\n        font-size: 1em;\r\n    }\r\n\r\n    detail-restaurant {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    detail-restaurant .restaurant_poster {\r\n        max-width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .favorite {\r\n        position: fixed;\r\n        top: 80%;\r\n        left: 80%;\r\n    }\r\n\r\n    .restaurant_address_rating {\r\n        padding-left: 80%;\r\n    }\r\n\r\n    .restaurant_list_reviews h4 span {\r\n        right: 15%;\r\n    }\r\n\r\n    .connection_failed img{\r\n        width: 25%;\r\n    }\r\n    \r\n    .connection_failed h3 {\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    .empty-favorite img {\r\n        width: 27%;\r\n    }\r\n\r\n    .alert-notif {\r\n        bottom: 800px;\r\n        left: 240px;\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1001px) and (max-width: 1280px) {\r\n    restaurant-list {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\r\n    .card-recomend img {\r\n        height: 30vh;\r\n    }\r\n\r\n    .city-recomend {\r\n        font-size: 1em;\r\n    }\r\n\r\n    .desc-recomend {\r\n        font-size: 1em;\r\n    }\r\n\r\n    detail-restaurant {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    detail-restaurant .restaurant_poster {\r\n        max-width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .favorite {\r\n        position: fixed;\r\n        top: 80%;\r\n        left: 80%;\r\n    }\r\n\r\n    .restaurant_address_rating {\r\n        padding-left: 80%;\r\n    }\r\n\r\n    .restaurant_list_reviews h4 span {\r\n        right: 15%;\r\n    }\r\n\r\n    .connection_failed img{\r\n        width: 23%;\r\n    }\r\n    \r\n    .connection_failed h3 {\r\n        font-size: 1.4em;\r\n    }\r\n\r\n    .empty-favorite img {\r\n        width: 25%;\r\n    }\r\n\r\n    .alert-notif {\r\n        bottom: 800px;\r\n        left: 300px;\r\n        width: 50%;\r\n    }\r\n}",""]),r.exports=n},26:function(r,n,e){(n=e(3)(!1)).push([r.i,".loader {\r\n    font-size: 15px;\r\n    margin: 100px auto;\r\n    width: 1em;\r\n    height: 1em;\r\n    border-radius: 100%;\r\n    position: relative;\r\n    -webkit-animation: loadAnimate 1.5s infinite linear;\r\n    animation: loadAnimate 1.5s infinite linear;\r\n    -webkit-transform: translateZ(0);\r\n    -ms-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n}\r\n\r\n@keyframes loadAnimate {\r\n    0%,\r\n    100% {\r\n        box-shadow: 0 -3em 0 0.2em #7d0633, 2em -2em 0 0 #7d0633, 3em 0 0 -1em #7d0633, 2em 2em 0 -1em #7d0633, 0 3em 0 -1em #7d0633, -2em 2em 0 -1em #7d0633, -3em 0 0 -1em #7d0633, -2em -2em 0 0 #7d0633;\r\n    }\r\n    12.5% {\r\n        box-shadow: 0 -3em 0 0 #7d0633, 2em -2em 0 0.2em #7d0633, 3em 0 0 0 #7d0633, 2em 2em 0 -1em #7d0633, 0 3em 0 -1em #7d0633, -2em 2em 0 -1em #7d0633, -3em 0 0 -1em #7d0633, -2em -2em 0 -1em #7d0633;\r\n    }\r\n    25% {\r\n        box-shadow: 0 -3em 0 -0.5em #7d0633, 2em -2em 0 0 #7d0633, 3em 0 0 0.2em #7d0633, 2em 2em 0 0 #7d0633, 0 3em 0 -1em #7d0633, -2em 2em 0 -1em #7d0633, -3em 0 0 -1em #7d0633, -2em -2em 0 -1em #7d0633;\r\n    }\r\n    37.5% {\r\n        box-shadow: 0 -3em 0 -1em #7d0633, 2em -2em 0 -1em #7d0633, 3em 0 0 0 #7d0633, 2em 2em 0 0.2em #7d0633, 0 3em 0 0 #7d0633, -2em 2em 0 -1em #7d0633, -3em 0 0 -1em #7d0633, -2em -2em 0 -1em #7d0633;\r\n    }\r\n    50% {\r\n        box-shadow: 0 -3em 0 -1em #7d0633, 2em -2em 0 -1em #7d0633, 3em 0 0 -1em #7d0633, 2em 2em 0 0 #7d0633, 0 3em 0 0.2em #7d0633, -2em 2em 0 0 #7d0633, -3em 0 0 -1em #7d0633, -2em -2em 0 -1em #7d0633;\r\n    }\r\n    62.5% {\r\n        box-shadow: 0 -3em 0 -1em #7d0633, 2em -2em 0 -1em #7d0633, 3em 0 0 -1em #7d0633, 2em 2em 0 -1em #7d0633, 0 3em 0 0 #7d0633, -2em 2em 0 0.2em #7d0633, -3em 0 0 0 #7d0633, -2em -2em 0 -1em #7d0633;\r\n    }\r\n    75% {\r\n        box-shadow: 0 -3em 0 -1em #7d0633, 2em -2em 0 -1em #7d0633, 3em 0 0 -1em #7d0633, 2em 2em 0 -1em #7d0633, 0 3em 0 -1em #7d0633, -2em 2em 0 0 #7d0633, -3em 0 0 0.2em #7d0633, -2em -2em 0 0 #7d0633;\r\n    }\r\n    87.5% {\r\n        box-shadow: 0 -3em 0 0 #7d0633, 2em -2em 0 -1em #7d0633, 3em 0 0 -1em #7d0633, 2em 2em 0 -1em #7d0633, 0 3em 0 -1em #7d0633, -2em 2em 0 0 #7d0633, -3em 0 0 0 #7d0633, -2em -2em 0 0.2em #7d0633;\r\n    }\r\n}",""]),r.exports=n},27:function(r,n,e){(n=e(3)(!1)).push([r.i,"footer {\r\n    margin-top: 5%;\r\n}\r\n\r\n.footer-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    background-color: #31112c;\r\n    padding: 15px;\r\n}\r\n\r\n.copyright {\r\n    font-size: 1.2em;\r\n    color: #fbdcc4;\r\n    text-align: center;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}",""]),r.exports=n}});