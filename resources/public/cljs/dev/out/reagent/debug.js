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
var G__74826__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__74826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74827__i = 0, G__74827__a = new Array(arguments.length -  0);
while (G__74827__i < G__74827__a.length) {G__74827__a[G__74827__i] = arguments[G__74827__i + 0]; ++G__74827__i;}
  args = new cljs.core.IndexedSeq(G__74827__a,0,null);
} 
return G__74826__delegate.call(this,args);};
G__74826.cljs$lang$maxFixedArity = 0;
G__74826.cljs$lang$applyTo = (function (arglist__74828){
var args = cljs.core.seq(arglist__74828);
return G__74826__delegate(args);
});
G__74826.cljs$core$IFn$_invoke$arity$variadic = G__74826__delegate;
return G__74826;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__74829__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__74829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74830__i = 0, G__74830__a = new Array(arguments.length -  0);
while (G__74830__i < G__74830__a.length) {G__74830__a[G__74830__i] = arguments[G__74830__i + 0]; ++G__74830__i;}
  args = new cljs.core.IndexedSeq(G__74830__a,0,null);
} 
return G__74829__delegate.call(this,args);};
G__74829.cljs$lang$maxFixedArity = 0;
G__74829.cljs$lang$applyTo = (function (arglist__74831){
var args = cljs.core.seq(arglist__74831);
return G__74829__delegate(args);
});
G__74829.cljs$core$IFn$_invoke$arity$variadic = G__74829__delegate;
return G__74829;
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

//# sourceMappingURL=debug.js.map?rel=1519023119981
