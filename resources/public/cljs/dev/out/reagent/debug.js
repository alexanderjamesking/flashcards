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
var G__66260__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__66260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66261__i = 0, G__66261__a = new Array(arguments.length -  0);
while (G__66261__i < G__66261__a.length) {G__66261__a[G__66261__i] = arguments[G__66261__i + 0]; ++G__66261__i;}
  args = new cljs.core.IndexedSeq(G__66261__a,0,null);
} 
return G__66260__delegate.call(this,args);};
G__66260.cljs$lang$maxFixedArity = 0;
G__66260.cljs$lang$applyTo = (function (arglist__66262){
var args = cljs.core.seq(arglist__66262);
return G__66260__delegate(args);
});
G__66260.cljs$core$IFn$_invoke$arity$variadic = G__66260__delegate;
return G__66260;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__66263__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__66263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66264__i = 0, G__66264__a = new Array(arguments.length -  0);
while (G__66264__i < G__66264__a.length) {G__66264__a[G__66264__i] = arguments[G__66264__i + 0]; ++G__66264__i;}
  args = new cljs.core.IndexedSeq(G__66264__a,0,null);
} 
return G__66263__delegate.call(this,args);};
G__66263.cljs$lang$maxFixedArity = 0;
G__66263.cljs$lang$applyTo = (function (arglist__66265){
var args = cljs.core.seq(arglist__66265);
return G__66263__delegate(args);
});
G__66263.cljs$core$IFn$_invoke$arity$variadic = G__66263__delegate;
return G__66263;
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

//# sourceMappingURL=debug.js.map?rel=1519022783968
