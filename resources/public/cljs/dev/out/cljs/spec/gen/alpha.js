// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79348 = arguments.length;
var i__42175__auto___79349 = (0);
while(true){
if((i__42175__auto___79349 < len__42174__auto___79348)){
args__42181__auto__.push((arguments[i__42175__auto___79349]));

var G__79350 = (i__42175__auto___79349 + (1));
i__42175__auto___79349 = G__79350;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq79347){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79347));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79352 = arguments.length;
var i__42175__auto___79353 = (0);
while(true){
if((i__42175__auto___79353 < len__42174__auto___79352)){
args__42181__auto__.push((arguments[i__42175__auto___79353]));

var G__79354 = (i__42175__auto___79353 + (1));
i__42175__auto___79353 = G__79354;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq79351){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79351));
});

var g_QMARK__79355 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_79356 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__79355){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__79355))
,null));
var mkg_79357 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__79355,g_79356){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__79355,g_79356))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__79355,g_79356,mkg_79357){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__79355).call(null,x);
});})(g_QMARK__79355,g_79356,mkg_79357))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__79355,g_79356,mkg_79357){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_79357).call(null,gfn);
});})(g_QMARK__79355,g_79356,mkg_79357))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__79355,g_79356,mkg_79357){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_79356).call(null,generator);
});})(g_QMARK__79355,g_79356,mkg_79357))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42277__auto___79377 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42277__auto___79377){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79378 = arguments.length;
var i__42175__auto___79379 = (0);
while(true){
if((i__42175__auto___79379 < len__42174__auto___79378)){
args__42181__auto__.push((arguments[i__42175__auto___79379]));

var G__79380 = (i__42175__auto___79379 + (1));
i__42175__auto___79379 = G__79380;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79377))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79377),args);
});})(g__42277__auto___79377))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42277__auto___79377){
return (function (seq79358){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79358));
});})(g__42277__auto___79377))
;


var g__42277__auto___79381 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42277__auto___79381){
return (function cljs$spec$gen$alpha$list(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79382 = arguments.length;
var i__42175__auto___79383 = (0);
while(true){
if((i__42175__auto___79383 < len__42174__auto___79382)){
args__42181__auto__.push((arguments[i__42175__auto___79383]));

var G__79384 = (i__42175__auto___79383 + (1));
i__42175__auto___79383 = G__79384;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79381))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79381),args);
});})(g__42277__auto___79381))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42277__auto___79381){
return (function (seq79359){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79359));
});})(g__42277__auto___79381))
;


var g__42277__auto___79385 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42277__auto___79385){
return (function cljs$spec$gen$alpha$map(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79386 = arguments.length;
var i__42175__auto___79387 = (0);
while(true){
if((i__42175__auto___79387 < len__42174__auto___79386)){
args__42181__auto__.push((arguments[i__42175__auto___79387]));

var G__79388 = (i__42175__auto___79387 + (1));
i__42175__auto___79387 = G__79388;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79385))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79385),args);
});})(g__42277__auto___79385))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42277__auto___79385){
return (function (seq79360){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79360));
});})(g__42277__auto___79385))
;


var g__42277__auto___79389 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42277__auto___79389){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79390 = arguments.length;
var i__42175__auto___79391 = (0);
while(true){
if((i__42175__auto___79391 < len__42174__auto___79390)){
args__42181__auto__.push((arguments[i__42175__auto___79391]));

var G__79392 = (i__42175__auto___79391 + (1));
i__42175__auto___79391 = G__79392;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79389))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79389),args);
});})(g__42277__auto___79389))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42277__auto___79389){
return (function (seq79361){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79361));
});})(g__42277__auto___79389))
;


var g__42277__auto___79393 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42277__auto___79393){
return (function cljs$spec$gen$alpha$set(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79394 = arguments.length;
var i__42175__auto___79395 = (0);
while(true){
if((i__42175__auto___79395 < len__42174__auto___79394)){
args__42181__auto__.push((arguments[i__42175__auto___79395]));

var G__79396 = (i__42175__auto___79395 + (1));
i__42175__auto___79395 = G__79396;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79393))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79393),args);
});})(g__42277__auto___79393))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42277__auto___79393){
return (function (seq79362){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79362));
});})(g__42277__auto___79393))
;


var g__42277__auto___79397 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42277__auto___79397){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79398 = arguments.length;
var i__42175__auto___79399 = (0);
while(true){
if((i__42175__auto___79399 < len__42174__auto___79398)){
args__42181__auto__.push((arguments[i__42175__auto___79399]));

var G__79400 = (i__42175__auto___79399 + (1));
i__42175__auto___79399 = G__79400;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79397))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79397),args);
});})(g__42277__auto___79397))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42277__auto___79397){
return (function (seq79363){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79363));
});})(g__42277__auto___79397))
;


var g__42277__auto___79401 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42277__auto___79401){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79402 = arguments.length;
var i__42175__auto___79403 = (0);
while(true){
if((i__42175__auto___79403 < len__42174__auto___79402)){
args__42181__auto__.push((arguments[i__42175__auto___79403]));

var G__79404 = (i__42175__auto___79403 + (1));
i__42175__auto___79403 = G__79404;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79401))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79401),args);
});})(g__42277__auto___79401))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42277__auto___79401){
return (function (seq79364){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79364));
});})(g__42277__auto___79401))
;


var g__42277__auto___79405 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42277__auto___79405){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79406 = arguments.length;
var i__42175__auto___79407 = (0);
while(true){
if((i__42175__auto___79407 < len__42174__auto___79406)){
args__42181__auto__.push((arguments[i__42175__auto___79407]));

var G__79408 = (i__42175__auto___79407 + (1));
i__42175__auto___79407 = G__79408;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79405))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79405),args);
});})(g__42277__auto___79405))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42277__auto___79405){
return (function (seq79365){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79365));
});})(g__42277__auto___79405))
;


var g__42277__auto___79409 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42277__auto___79409){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79410 = arguments.length;
var i__42175__auto___79411 = (0);
while(true){
if((i__42175__auto___79411 < len__42174__auto___79410)){
args__42181__auto__.push((arguments[i__42175__auto___79411]));

var G__79412 = (i__42175__auto___79411 + (1));
i__42175__auto___79411 = G__79412;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79409))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79409),args);
});})(g__42277__auto___79409))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42277__auto___79409){
return (function (seq79366){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79366));
});})(g__42277__auto___79409))
;


var g__42277__auto___79413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42277__auto___79413){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79414 = arguments.length;
var i__42175__auto___79415 = (0);
while(true){
if((i__42175__auto___79415 < len__42174__auto___79414)){
args__42181__auto__.push((arguments[i__42175__auto___79415]));

var G__79416 = (i__42175__auto___79415 + (1));
i__42175__auto___79415 = G__79416;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79413))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79413),args);
});})(g__42277__auto___79413))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42277__auto___79413){
return (function (seq79367){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79367));
});})(g__42277__auto___79413))
;


var g__42277__auto___79417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42277__auto___79417){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79418 = arguments.length;
var i__42175__auto___79419 = (0);
while(true){
if((i__42175__auto___79419 < len__42174__auto___79418)){
args__42181__auto__.push((arguments[i__42175__auto___79419]));

var G__79420 = (i__42175__auto___79419 + (1));
i__42175__auto___79419 = G__79420;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79417))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79417),args);
});})(g__42277__auto___79417))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42277__auto___79417){
return (function (seq79368){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79368));
});})(g__42277__auto___79417))
;


var g__42277__auto___79421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42277__auto___79421){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79422 = arguments.length;
var i__42175__auto___79423 = (0);
while(true){
if((i__42175__auto___79423 < len__42174__auto___79422)){
args__42181__auto__.push((arguments[i__42175__auto___79423]));

var G__79424 = (i__42175__auto___79423 + (1));
i__42175__auto___79423 = G__79424;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79421))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79421),args);
});})(g__42277__auto___79421))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42277__auto___79421){
return (function (seq79369){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79369));
});})(g__42277__auto___79421))
;


var g__42277__auto___79425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42277__auto___79425){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79426 = arguments.length;
var i__42175__auto___79427 = (0);
while(true){
if((i__42175__auto___79427 < len__42174__auto___79426)){
args__42181__auto__.push((arguments[i__42175__auto___79427]));

var G__79428 = (i__42175__auto___79427 + (1));
i__42175__auto___79427 = G__79428;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79425))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79425),args);
});})(g__42277__auto___79425))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42277__auto___79425){
return (function (seq79370){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79370));
});})(g__42277__auto___79425))
;


var g__42277__auto___79429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42277__auto___79429){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79430 = arguments.length;
var i__42175__auto___79431 = (0);
while(true){
if((i__42175__auto___79431 < len__42174__auto___79430)){
args__42181__auto__.push((arguments[i__42175__auto___79431]));

var G__79432 = (i__42175__auto___79431 + (1));
i__42175__auto___79431 = G__79432;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79429))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79429),args);
});})(g__42277__auto___79429))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42277__auto___79429){
return (function (seq79371){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79371));
});})(g__42277__auto___79429))
;


var g__42277__auto___79433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42277__auto___79433){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79434 = arguments.length;
var i__42175__auto___79435 = (0);
while(true){
if((i__42175__auto___79435 < len__42174__auto___79434)){
args__42181__auto__.push((arguments[i__42175__auto___79435]));

var G__79436 = (i__42175__auto___79435 + (1));
i__42175__auto___79435 = G__79436;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79433))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79433),args);
});})(g__42277__auto___79433))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42277__auto___79433){
return (function (seq79372){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79372));
});})(g__42277__auto___79433))
;


var g__42277__auto___79437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42277__auto___79437){
return (function cljs$spec$gen$alpha$return(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79438 = arguments.length;
var i__42175__auto___79439 = (0);
while(true){
if((i__42175__auto___79439 < len__42174__auto___79438)){
args__42181__auto__.push((arguments[i__42175__auto___79439]));

var G__79440 = (i__42175__auto___79439 + (1));
i__42175__auto___79439 = G__79440;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79437))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79437),args);
});})(g__42277__auto___79437))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42277__auto___79437){
return (function (seq79373){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79373));
});})(g__42277__auto___79437))
;


var g__42277__auto___79441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42277__auto___79441){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79442 = arguments.length;
var i__42175__auto___79443 = (0);
while(true){
if((i__42175__auto___79443 < len__42174__auto___79442)){
args__42181__auto__.push((arguments[i__42175__auto___79443]));

var G__79444 = (i__42175__auto___79443 + (1));
i__42175__auto___79443 = G__79444;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79441))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79441),args);
});})(g__42277__auto___79441))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42277__auto___79441){
return (function (seq79374){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79374));
});})(g__42277__auto___79441))
;


var g__42277__auto___79445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42277__auto___79445){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79446 = arguments.length;
var i__42175__auto___79447 = (0);
while(true){
if((i__42175__auto___79447 < len__42174__auto___79446)){
args__42181__auto__.push((arguments[i__42175__auto___79447]));

var G__79448 = (i__42175__auto___79447 + (1));
i__42175__auto___79447 = G__79448;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79445))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79445),args);
});})(g__42277__auto___79445))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42277__auto___79445){
return (function (seq79375){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79375));
});})(g__42277__auto___79445))
;


var g__42277__auto___79449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42277__auto___79449){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79450 = arguments.length;
var i__42175__auto___79451 = (0);
while(true){
if((i__42175__auto___79451 < len__42174__auto___79450)){
args__42181__auto__.push((arguments[i__42175__auto___79451]));

var G__79452 = (i__42175__auto___79451 + (1));
i__42175__auto___79451 = G__79452;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42277__auto___79449))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42277__auto___79449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42277__auto___79449),args);
});})(g__42277__auto___79449))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42277__auto___79449){
return (function (seq79376){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79376));
});})(g__42277__auto___79449))
;

var g__42290__auto___79474 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42290__auto___79474){
return (function cljs$spec$gen$alpha$any(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79475 = arguments.length;
var i__42175__auto___79476 = (0);
while(true){
if((i__42175__auto___79476 < len__42174__auto___79475)){
args__42181__auto__.push((arguments[i__42175__auto___79476]));

var G__79477 = (i__42175__auto___79476 + (1));
i__42175__auto___79476 = G__79477;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79474))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79474){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79474);
});})(g__42290__auto___79474))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42290__auto___79474){
return (function (seq79453){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79453));
});})(g__42290__auto___79474))
;


var g__42290__auto___79478 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42290__auto___79478){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79479 = arguments.length;
var i__42175__auto___79480 = (0);
while(true){
if((i__42175__auto___79480 < len__42174__auto___79479)){
args__42181__auto__.push((arguments[i__42175__auto___79480]));

var G__79481 = (i__42175__auto___79480 + (1));
i__42175__auto___79480 = G__79481;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79478))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79478){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79478);
});})(g__42290__auto___79478))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42290__auto___79478){
return (function (seq79454){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79454));
});})(g__42290__auto___79478))
;


var g__42290__auto___79482 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42290__auto___79482){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79483 = arguments.length;
var i__42175__auto___79484 = (0);
while(true){
if((i__42175__auto___79484 < len__42174__auto___79483)){
args__42181__auto__.push((arguments[i__42175__auto___79484]));

var G__79485 = (i__42175__auto___79484 + (1));
i__42175__auto___79484 = G__79485;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79482))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79482){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79482);
});})(g__42290__auto___79482))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42290__auto___79482){
return (function (seq79455){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79455));
});})(g__42290__auto___79482))
;


var g__42290__auto___79486 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42290__auto___79486){
return (function cljs$spec$gen$alpha$char(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79487 = arguments.length;
var i__42175__auto___79488 = (0);
while(true){
if((i__42175__auto___79488 < len__42174__auto___79487)){
args__42181__auto__.push((arguments[i__42175__auto___79488]));

var G__79489 = (i__42175__auto___79488 + (1));
i__42175__auto___79488 = G__79489;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79486))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79486){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79486);
});})(g__42290__auto___79486))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42290__auto___79486){
return (function (seq79456){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79456));
});})(g__42290__auto___79486))
;


var g__42290__auto___79490 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42290__auto___79490){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79491 = arguments.length;
var i__42175__auto___79492 = (0);
while(true){
if((i__42175__auto___79492 < len__42174__auto___79491)){
args__42181__auto__.push((arguments[i__42175__auto___79492]));

var G__79493 = (i__42175__auto___79492 + (1));
i__42175__auto___79492 = G__79493;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79490))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79490){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79490);
});})(g__42290__auto___79490))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42290__auto___79490){
return (function (seq79457){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79457));
});})(g__42290__auto___79490))
;


var g__42290__auto___79494 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42290__auto___79494){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79495 = arguments.length;
var i__42175__auto___79496 = (0);
while(true){
if((i__42175__auto___79496 < len__42174__auto___79495)){
args__42181__auto__.push((arguments[i__42175__auto___79496]));

var G__79497 = (i__42175__auto___79496 + (1));
i__42175__auto___79496 = G__79497;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79494))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79494){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79494);
});})(g__42290__auto___79494))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42290__auto___79494){
return (function (seq79458){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79458));
});})(g__42290__auto___79494))
;


var g__42290__auto___79498 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42290__auto___79498){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79499 = arguments.length;
var i__42175__auto___79500 = (0);
while(true){
if((i__42175__auto___79500 < len__42174__auto___79499)){
args__42181__auto__.push((arguments[i__42175__auto___79500]));

var G__79501 = (i__42175__auto___79500 + (1));
i__42175__auto___79500 = G__79501;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79498))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79498){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79498);
});})(g__42290__auto___79498))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42290__auto___79498){
return (function (seq79459){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79459));
});})(g__42290__auto___79498))
;


var g__42290__auto___79502 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42290__auto___79502){
return (function cljs$spec$gen$alpha$double(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79503 = arguments.length;
var i__42175__auto___79504 = (0);
while(true){
if((i__42175__auto___79504 < len__42174__auto___79503)){
args__42181__auto__.push((arguments[i__42175__auto___79504]));

var G__79505 = (i__42175__auto___79504 + (1));
i__42175__auto___79504 = G__79505;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79502))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79502){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79502);
});})(g__42290__auto___79502))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42290__auto___79502){
return (function (seq79460){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79460));
});})(g__42290__auto___79502))
;


var g__42290__auto___79506 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42290__auto___79506){
return (function cljs$spec$gen$alpha$int(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79507 = arguments.length;
var i__42175__auto___79508 = (0);
while(true){
if((i__42175__auto___79508 < len__42174__auto___79507)){
args__42181__auto__.push((arguments[i__42175__auto___79508]));

var G__79509 = (i__42175__auto___79508 + (1));
i__42175__auto___79508 = G__79509;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79506))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79506){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79506);
});})(g__42290__auto___79506))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42290__auto___79506){
return (function (seq79461){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79461));
});})(g__42290__auto___79506))
;


var g__42290__auto___79510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42290__auto___79510){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79511 = arguments.length;
var i__42175__auto___79512 = (0);
while(true){
if((i__42175__auto___79512 < len__42174__auto___79511)){
args__42181__auto__.push((arguments[i__42175__auto___79512]));

var G__79513 = (i__42175__auto___79512 + (1));
i__42175__auto___79512 = G__79513;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79510))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79510){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79510);
});})(g__42290__auto___79510))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42290__auto___79510){
return (function (seq79462){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79462));
});})(g__42290__auto___79510))
;


var g__42290__auto___79514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42290__auto___79514){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79515 = arguments.length;
var i__42175__auto___79516 = (0);
while(true){
if((i__42175__auto___79516 < len__42174__auto___79515)){
args__42181__auto__.push((arguments[i__42175__auto___79516]));

var G__79517 = (i__42175__auto___79516 + (1));
i__42175__auto___79516 = G__79517;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79514))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79514){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79514);
});})(g__42290__auto___79514))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42290__auto___79514){
return (function (seq79463){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79463));
});})(g__42290__auto___79514))
;


var g__42290__auto___79518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42290__auto___79518){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79519 = arguments.length;
var i__42175__auto___79520 = (0);
while(true){
if((i__42175__auto___79520 < len__42174__auto___79519)){
args__42181__auto__.push((arguments[i__42175__auto___79520]));

var G__79521 = (i__42175__auto___79520 + (1));
i__42175__auto___79520 = G__79521;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79518))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79518){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79518);
});})(g__42290__auto___79518))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42290__auto___79518){
return (function (seq79464){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79464));
});})(g__42290__auto___79518))
;


var g__42290__auto___79522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42290__auto___79522){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79523 = arguments.length;
var i__42175__auto___79524 = (0);
while(true){
if((i__42175__auto___79524 < len__42174__auto___79523)){
args__42181__auto__.push((arguments[i__42175__auto___79524]));

var G__79525 = (i__42175__auto___79524 + (1));
i__42175__auto___79524 = G__79525;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79522))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79522){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79522);
});})(g__42290__auto___79522))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42290__auto___79522){
return (function (seq79465){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79465));
});})(g__42290__auto___79522))
;


var g__42290__auto___79526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42290__auto___79526){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79527 = arguments.length;
var i__42175__auto___79528 = (0);
while(true){
if((i__42175__auto___79528 < len__42174__auto___79527)){
args__42181__auto__.push((arguments[i__42175__auto___79528]));

var G__79529 = (i__42175__auto___79528 + (1));
i__42175__auto___79528 = G__79529;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79526))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79526){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79526);
});})(g__42290__auto___79526))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42290__auto___79526){
return (function (seq79466){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79466));
});})(g__42290__auto___79526))
;


var g__42290__auto___79530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42290__auto___79530){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79531 = arguments.length;
var i__42175__auto___79532 = (0);
while(true){
if((i__42175__auto___79532 < len__42174__auto___79531)){
args__42181__auto__.push((arguments[i__42175__auto___79532]));

var G__79533 = (i__42175__auto___79532 + (1));
i__42175__auto___79532 = G__79533;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79530))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79530){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79530);
});})(g__42290__auto___79530))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42290__auto___79530){
return (function (seq79467){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79467));
});})(g__42290__auto___79530))
;


var g__42290__auto___79534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42290__auto___79534){
return (function cljs$spec$gen$alpha$string(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79535 = arguments.length;
var i__42175__auto___79536 = (0);
while(true){
if((i__42175__auto___79536 < len__42174__auto___79535)){
args__42181__auto__.push((arguments[i__42175__auto___79536]));

var G__79537 = (i__42175__auto___79536 + (1));
i__42175__auto___79536 = G__79537;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79534))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79534){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79534);
});})(g__42290__auto___79534))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42290__auto___79534){
return (function (seq79468){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79468));
});})(g__42290__auto___79534))
;


var g__42290__auto___79538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42290__auto___79538){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79539 = arguments.length;
var i__42175__auto___79540 = (0);
while(true){
if((i__42175__auto___79540 < len__42174__auto___79539)){
args__42181__auto__.push((arguments[i__42175__auto___79540]));

var G__79541 = (i__42175__auto___79540 + (1));
i__42175__auto___79540 = G__79541;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79538))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79538){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79538);
});})(g__42290__auto___79538))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42290__auto___79538){
return (function (seq79469){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79469));
});})(g__42290__auto___79538))
;


var g__42290__auto___79542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42290__auto___79542){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79543 = arguments.length;
var i__42175__auto___79544 = (0);
while(true){
if((i__42175__auto___79544 < len__42174__auto___79543)){
args__42181__auto__.push((arguments[i__42175__auto___79544]));

var G__79545 = (i__42175__auto___79544 + (1));
i__42175__auto___79544 = G__79545;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79542))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79542){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79542);
});})(g__42290__auto___79542))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42290__auto___79542){
return (function (seq79470){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79470));
});})(g__42290__auto___79542))
;


var g__42290__auto___79546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42290__auto___79546){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79547 = arguments.length;
var i__42175__auto___79548 = (0);
while(true){
if((i__42175__auto___79548 < len__42174__auto___79547)){
args__42181__auto__.push((arguments[i__42175__auto___79548]));

var G__79549 = (i__42175__auto___79548 + (1));
i__42175__auto___79548 = G__79549;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79546))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79546){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79546);
});})(g__42290__auto___79546))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42290__auto___79546){
return (function (seq79471){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79471));
});})(g__42290__auto___79546))
;


var g__42290__auto___79550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42290__auto___79550){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79551 = arguments.length;
var i__42175__auto___79552 = (0);
while(true){
if((i__42175__auto___79552 < len__42174__auto___79551)){
args__42181__auto__.push((arguments[i__42175__auto___79552]));

var G__79553 = (i__42175__auto___79552 + (1));
i__42175__auto___79552 = G__79553;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79550))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79550){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79550);
});})(g__42290__auto___79550))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42290__auto___79550){
return (function (seq79472){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79472));
});})(g__42290__auto___79550))
;


var g__42290__auto___79554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42290__auto___79554){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79555 = arguments.length;
var i__42175__auto___79556 = (0);
while(true){
if((i__42175__auto___79556 < len__42174__auto___79555)){
args__42181__auto__.push((arguments[i__42175__auto___79556]));

var G__79557 = (i__42175__auto___79556 + (1));
i__42175__auto___79556 = G__79557;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});})(g__42290__auto___79554))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42290__auto___79554){
return (function (args){
return cljs.core.deref.call(null,g__42290__auto___79554);
});})(g__42290__auto___79554))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42290__auto___79554){
return (function (seq79473){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79473));
});})(g__42290__auto___79554))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__42181__auto__ = [];
var len__42174__auto___79560 = arguments.length;
var i__42175__auto___79561 = (0);
while(true){
if((i__42175__auto___79561 < len__42174__auto___79560)){
args__42181__auto__.push((arguments[i__42175__auto___79561]));

var G__79562 = (i__42175__auto___79561 + (1));
i__42175__auto___79561 = G__79562;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__79558_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__79558_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq79559){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79559));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__79563_SHARP_){
return (new Date(p1__79563_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1519023126452
