// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('dottask.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28993__delegate = function (x){
if(cljs.core.truth_(dottask.core.render_BANG_)){
return cljs.core.apply.call(null,dottask.core.render_BANG_,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'dottask.core/render!' is missing");
}
};
var G__28993 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28994__i = 0, G__28994__a = new Array(arguments.length -  0);
while (G__28994__i < G__28994__a.length) {G__28994__a[G__28994__i] = arguments[G__28994__i + 0]; ++G__28994__i;}
  x = new cljs.core.IndexedSeq(G__28994__a,0);
} 
return G__28993__delegate.call(this,x);};
G__28993.cljs$lang$maxFixedArity = 0;
G__28993.cljs$lang$applyTo = (function (arglist__28995){
var x = cljs.core.seq(arglist__28995);
return G__28993__delegate(x);
});
G__28993.cljs$core$IFn$_invoke$arity$variadic = G__28993__delegate;
return G__28993;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map