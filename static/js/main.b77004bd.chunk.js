(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{name:"garfield",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/garfield-icon-30150737_200x200.jpg",isClicked:!1,index:1},{name:"jon",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/jon-q-arbuckle-icon-30151155_200x200.jpg",isClicked:!1,index:2},{name:"odie",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/odie-icon-30150759_200x200.jpg",isClicked:!1,index:3},{name:"arlene",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/arlene-icon-30151228_200x200.jpg",isClicked:!1,index:4},{name:"dad",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/dad-icon-30151311_200x200.jpg",isClicked:!1,index:5},{name:"doc-boy",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/doc-boy-icon-30151332_200x200.jpg",isClicked:!1,index:6},{name:"dr-liz-wilson",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/dr-liz-wilson-icon-30151209_200x200.jpg",isClicked:!1,index:7},{name:"irma",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/irma-icon-30151422_200x200.jpg",isClicked:!1,index:8},{name:"lyman",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/lyman-icon-30151351_200x200.jpg",isClicked:!1,index:9},{name:"mom",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/mom-icon-30151254_200x200.jpg",isClicked:!1,index:10},{name:"nermal",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/nermal-icon-30151242_200x200.jpg",isClicked:!1,index:11},{name:"pooky",image:"https://d1ejxu6vysztl5.cloudfront.net/characters/pooky-icon-30151139_200x200.jpg",isClicked:!1,index:12}]},,,,,,,,function(e,n,a){e.exports=a(20)},,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),r=a(3),i=a.n(r),l=(a(15),a(4)),o=a(5),s=a(7),d=a(6),m=a(8);a(16),a(17);var u=function(){return c.a.createElement("header",{className:"header"},"Garfield Clicky Game!")};a(18);var h=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,key:e.index})))};a(19);var f=function(){return c.a.createElement("nav",{className:"navbar row"},c.a.createElement("span",{className:"col-2 navbar-brand mb-0 h1"},"Garfield Clicky Game!"),c.a.createElement("span",{className:"col-2 navbar-brand mb-0 h1"},"Click an image to begin!"),c.a.createElement("span",{className:"col-2 navbar-brand mb-0 h1"},"Score: 0 | Top Score: 0"))},p=a(1),x=function(e){function n(){var e,a;Object(l.a)(this,n);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(c)))).state={characters:p,index:p.index},a}return Object(m.a)(n,e),Object(o.a)(n,[{key:"shuffle",value:function(e){var n=e.sort(function(){return Math.random()-.5});return console.log("shuffling"),n}},{key:"updateIsClicked",value:function(){console.log(this.props.name)}},{key:"resetGame",value:function(){this.shuffle(p)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(u,null),c.a.createElement("div",{className:"jumbotron"},c.a.createElement("div",{className:"row"},this.state.characters.map(function(n,a){return c.a.createElement("div",{className:"col-3"},c.a.createElement(h,{onClick:e.shuffle(p),test:console.log(n.index),name:n.name,image:n.image,key:n.index}))}))))}}]),n}(t.Component);i.a.render(c.a.createElement(x,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.b77004bd.chunk.js.map