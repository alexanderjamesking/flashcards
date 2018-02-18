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
var G__68190__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__68190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68191__i = 0, G__68191__a = new Array(arguments.length -  0);
while (G__68191__i < G__68191__a.length) {G__68191__a[G__68191__i] = arguments[G__68191__i + 0]; ++G__68191__i;}
  args = new cljs.core.IndexedSeq(G__68191__a,0,null);
} 
return G__68190__delegate.call(this,args);};
G__68190.cljs$lang$maxFixedArity = 0;
G__68190.cljs$lang$applyTo = (function (arglist__68192){
var args = cljs.core.seq(arglist__68192);
return G__68190__delegate(args);
});
G__68190.cljs$core$IFn$_invoke$arity$variadic = G__68190__delegate;
return G__68190;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__68193__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__68193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68194__i = 0, G__68194__a = new Array(arguments.length -  0);
while (G__68194__i < G__68194__a.length) {G__68194__a[G__68194__i] = arguments[G__68194__i + 0]; ++G__68194__i;}
  args = new cljs.core.IndexedSeq(G__68194__a,0,null);
} 
return G__68193__delegate.call(this,args);};
G__68193.cljs$lang$maxFixedArity = 0;
G__68193.cljs$lang$applyTo = (function (arglist__68195){
var args = cljs.core.seq(arglist__68195);
return G__68193__delegate(args);
});
G__68193.cljs$core$IFn$_invoke$arity$variadic = G__68193__delegate;
return G__68193;
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

//# sourceMappingURL=debug.js.map?rel=1518985456584
