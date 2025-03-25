System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,r,s;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Vec3,s=t.Component}],execute:function(){var i;n._RF.push({},"10fca7HmntFDLqIaMUW6FA0","Background",void 0);var a=o.ccclass;o.property,t("Background",a("Background")(i=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).time=void 0,e.frameCounter=void 0,e.speed=void 0,e.speedX=-288,e}e(n,t);var o=n.prototype;return o.start=function(){this.time=0,this.frameCounter=0,this.speed=new r(288,0,0)},o.update=function(t){this.time+=t,this.frameCounter++,this.time>=1&&(console.log("fps: "+this.frameCounter),this.frameCounter=0,this.time=0),this.speed.x=this.speedX*t,this.node.translate(this.speed),this.node.position.x<-288&&this.node.translate(new r(288,0,0))},n}(s))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/Burung.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,n,o,a,r,s,u,h,p,c,d;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,s=t.Node,u=t.input,h=t.Input,p=t.Vec3,c=t.UITransform,d=t.Component}],execute:function(){var l,g,m,P,w;a._RF.push({},"6872c6FvI1Heq5W0b2GbIx/","Burung",void 0);var f=r.ccclass,v=r.property;t("Burung",(l=f("Burung"),g=v({type:s}),l((w=i((P=function(t){function i(){for(var i,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(i=t.call.apply(t,[this].concat(a))||this).nodeImage=void 0,i.curRotation=0,i.isLagiTurun=!0,i.kecepatanBurung=50,i.defaultKecepatan=250,i.gravitasi=1e3,n(i,"nodeSekumpulanPipa",w,o(i)),i}e(i,t);var a=i.prototype;return a.start=function(){this.nodeImage=this.node.getChildByPath("image_bird"),u.on(h.EventType.TOUCH_START,this.onTouchStart,this)},a.onTouchStart=function(t){this.isLagiTurun=!1,this.kecepatanBurung=this.defaultKecepatan},a.update=function(t){this.kecepatanBurung-=this.gravitasi*t,this.kecepatanBurung<0?(this.node.translate(new p(0,this.kecepatanBurung*t,0)),this.curRotation>-60&&(this.curRotation-=60*t),this.nodeImage.setRotationFromEuler(new p(0,0,this.curRotation))):(this.node.translate(new p(0,this.kecepatanBurung*t,0)),this.curRotation<60&&(this.curRotation+=60*t),this.nodeImage.setRotationFromEuler(new p(0,0,this.curRotation))),this.isNabrakPipa(this.nodeSekumpulanPipa)&&alert("Game Over")},a.isNabrakPipa=function(t){var i=t.getChildByPath("PipaBawah"),e=t.getChildByPath("PipaAtas"),n=this.nodeImage.getComponent(c).width,o=this.nodeImage.getComponent(c).height,a=this.nodeImage.worldPosition.x-n/2,r=this.nodeImage.worldPosition.x+n/2,s=this.nodeImage.worldPosition.x+o/2,u=this.nodeImage.worldPosition.x-o/2,h=i.getComponent(c).width,p=i.getComponent(c).height,d=i.worldPosition.x-h/2,l=i.worldPosition.x+h/2,g=i.worldPosition.x+p/2,m=i.worldPosition.x-p/2;if(a<=l&&r>=d&&s>m&&u<g)return!0;var P=e.getComponent(c).width,w=e.getComponent(c).height,f=e.worldPosition.x-P/2,v=e.worldPosition.x+P/2,B=e.worldPosition.x+w/2,I=e.worldPosition.x-w/2;return a<=v&&r>=f&&s>I&&u<B||void 0},i}(d)).prototype,"nodeSekumpulanPipa",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=P))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Background.ts","./Burung.ts","./Pipa.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pipa.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,i,s,a;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,i=t.Vec3,s=t.randomRangeInt,a=t.Component}],execute:function(){var r;e._RF.push({},"7afa6j9b4xPRqAjJNsWvBld","Pipa",void 0);var c=o.ccclass;o.property,t("Pipa",c("Pipa")(r=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){this.node.translate(new i(-100*t,0,0)),this.node.position.x<-219.903&&(this.node.translate(new i(220,0,0)),this.node.position.y<=0?this.node.translate(new i(220,s(50,100),0)):this.node.translate(new i(220,s(-100,0),0)))},e}(a))||r);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});