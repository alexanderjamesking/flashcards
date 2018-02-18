// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__66259__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__66259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66260__i = 0, G__66260__a = new Array(arguments.length -  0);
while (G__66260__i < G__66260__a.length) {G__66260__a[G__66260__i] = arguments[G__66260__i + 0]; ++G__66260__i;}
  args = new cljs.core.IndexedSeq(G__66260__a,0,null);
} 
return G__66259__delegate.call(this,args);};
G__66259.cljs$lang$maxFixedArity = 0;
G__66259.cljs$lang$applyTo = (function (arglist__66261){
var args = cljs.core.seq(arglist__66261);
return G__66259__delegate(args);
});
G__66259.cljs$core$IFn$_invoke$arity$variadic = G__66259__delegate;
return G__66259;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__66262__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__66262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66263__i = 0, G__66263__a = new Array(arguments.length -  0);
while (G__66263__i < G__66263__a.length) {G__66263__a[G__66263__i] = arguments[G__66263__i + 0]; ++G__66263__i;}
  args = new cljs.core.IndexedSeq(G__66263__a,0,null);
} 
return G__66262__delegate.call(this,args);};
G__66262.cljs$lang$maxFixedArity = 0;
G__66262.cljs$lang$applyTo = (function (arglist__66264){
var args = cljs.core.seq(arglist__66264);
return G__66262__delegate(args);
});
G__66262.cljs$core$IFn$_invoke$arity$variadic = G__66262__delegate;
return G__66262;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1518983337266
