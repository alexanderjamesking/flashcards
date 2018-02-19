// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36504__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36505__i = 0, G__36505__a = new Array(arguments.length -  0);
while (G__36505__i < G__36505__a.length) {G__36505__a[G__36505__i] = arguments[G__36505__i + 0]; ++G__36505__i;}
  args = new cljs.core.IndexedSeq(G__36505__a,0,null);
} 
return G__36504__delegate.call(this,args);};
G__36504.cljs$lang$maxFixedArity = 0;
G__36504.cljs$lang$applyTo = (function (arglist__36506){
var args = cljs.core.seq(arglist__36506);
return G__36504__delegate(args);
});
G__36504.cljs$core$IFn$_invoke$arity$variadic = G__36504__delegate;
return G__36504;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36507__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36508__i = 0, G__36508__a = new Array(arguments.length -  0);
while (G__36508__i < G__36508__a.length) {G__36508__a[G__36508__i] = arguments[G__36508__i + 0]; ++G__36508__i;}
  args = new cljs.core.IndexedSeq(G__36508__a,0,null);
} 
return G__36507__delegate.call(this,args);};
G__36507.cljs$lang$maxFixedArity = 0;
G__36507.cljs$lang$applyTo = (function (arglist__36509){
var args = cljs.core.seq(arglist__36509);
return G__36507__delegate(args);
});
G__36507.cljs$core$IFn$_invoke$arity$variadic = G__36507__delegate;
return G__36507;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
