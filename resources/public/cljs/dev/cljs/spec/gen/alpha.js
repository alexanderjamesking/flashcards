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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__21754__auto__ = [];
var len__21740__auto___72316 = arguments.length;
var i__21741__auto___72317 = (0);
while(true){
if((i__21741__auto___72317 < len__21740__auto___72316)){
args__21754__auto__.push((arguments[i__21741__auto___72317]));

var G__72318 = (i__21741__auto___72317 + (1));
i__21741__auto___72317 = G__72318;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq72315){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72315));
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
var args__21754__auto__ = [];
var len__21740__auto___72320 = arguments.length;
var i__21741__auto___72321 = (0);
while(true){
if((i__21741__auto___72321 < len__21740__auto___72320)){
args__21754__auto__.push((arguments[i__21741__auto___72321]));

var G__72322 = (i__21741__auto___72321 + (1));
i__21741__auto___72321 = G__72322;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq72319){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72319));
});

var g_QMARK__72323 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_72324 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__72323){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__72323))
,null));
var mkg_72325 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__72323,g_72324){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__72323,g_72324))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__72323,g_72324,mkg_72325){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__72323).call(null,x);
});})(g_QMARK__72323,g_72324,mkg_72325))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__72323,g_72324,mkg_72325){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_72325).call(null,gfn);
});})(g_QMARK__72323,g_72324,mkg_72325))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__72323,g_72324,mkg_72325){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_72324).call(null,generator);
});})(g_QMARK__72323,g_72324,mkg_72325))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21946__auto___72345 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__21946__auto___72345){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72346 = arguments.length;
var i__21741__auto___72347 = (0);
while(true){
if((i__21741__auto___72347 < len__21740__auto___72346)){
args__21754__auto__.push((arguments[i__21741__auto___72347]));

var G__72348 = (i__21741__auto___72347 + (1));
i__21741__auto___72347 = G__72348;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72345))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72345),args);
});})(g__21946__auto___72345))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__21946__auto___72345){
return (function (seq72326){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72326));
});})(g__21946__auto___72345))
;


var g__21946__auto___72349 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__21946__auto___72349){
return (function cljs$spec$gen$alpha$list(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72350 = arguments.length;
var i__21741__auto___72351 = (0);
while(true){
if((i__21741__auto___72351 < len__21740__auto___72350)){
args__21754__auto__.push((arguments[i__21741__auto___72351]));

var G__72352 = (i__21741__auto___72351 + (1));
i__21741__auto___72351 = G__72352;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72349))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72349),args);
});})(g__21946__auto___72349))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__21946__auto___72349){
return (function (seq72327){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72327));
});})(g__21946__auto___72349))
;


var g__21946__auto___72353 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__21946__auto___72353){
return (function cljs$spec$gen$alpha$map(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72354 = arguments.length;
var i__21741__auto___72355 = (0);
while(true){
if((i__21741__auto___72355 < len__21740__auto___72354)){
args__21754__auto__.push((arguments[i__21741__auto___72355]));

var G__72356 = (i__21741__auto___72355 + (1));
i__21741__auto___72355 = G__72356;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72353))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72353){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72353),args);
});})(g__21946__auto___72353))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__21946__auto___72353){
return (function (seq72328){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72328));
});})(g__21946__auto___72353))
;


var g__21946__auto___72357 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__21946__auto___72357){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72358 = arguments.length;
var i__21741__auto___72359 = (0);
while(true){
if((i__21741__auto___72359 < len__21740__auto___72358)){
args__21754__auto__.push((arguments[i__21741__auto___72359]));

var G__72360 = (i__21741__auto___72359 + (1));
i__21741__auto___72359 = G__72360;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72357))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72357){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72357),args);
});})(g__21946__auto___72357))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__21946__auto___72357){
return (function (seq72329){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72329));
});})(g__21946__auto___72357))
;


var g__21946__auto___72361 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__21946__auto___72361){
return (function cljs$spec$gen$alpha$set(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72362 = arguments.length;
var i__21741__auto___72363 = (0);
while(true){
if((i__21741__auto___72363 < len__21740__auto___72362)){
args__21754__auto__.push((arguments[i__21741__auto___72363]));

var G__72364 = (i__21741__auto___72363 + (1));
i__21741__auto___72363 = G__72364;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72361))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72361),args);
});})(g__21946__auto___72361))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__21946__auto___72361){
return (function (seq72330){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72330));
});})(g__21946__auto___72361))
;


var g__21946__auto___72365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__21946__auto___72365){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72366 = arguments.length;
var i__21741__auto___72367 = (0);
while(true){
if((i__21741__auto___72367 < len__21740__auto___72366)){
args__21754__auto__.push((arguments[i__21741__auto___72367]));

var G__72368 = (i__21741__auto___72367 + (1));
i__21741__auto___72367 = G__72368;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72365))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72365),args);
});})(g__21946__auto___72365))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__21946__auto___72365){
return (function (seq72331){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72331));
});})(g__21946__auto___72365))
;


var g__21946__auto___72369 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__21946__auto___72369){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72370 = arguments.length;
var i__21741__auto___72371 = (0);
while(true){
if((i__21741__auto___72371 < len__21740__auto___72370)){
args__21754__auto__.push((arguments[i__21741__auto___72371]));

var G__72372 = (i__21741__auto___72371 + (1));
i__21741__auto___72371 = G__72372;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72369))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72369),args);
});})(g__21946__auto___72369))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__21946__auto___72369){
return (function (seq72332){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72332));
});})(g__21946__auto___72369))
;


var g__21946__auto___72373 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__21946__auto___72373){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72374 = arguments.length;
var i__21741__auto___72375 = (0);
while(true){
if((i__21741__auto___72375 < len__21740__auto___72374)){
args__21754__auto__.push((arguments[i__21741__auto___72375]));

var G__72376 = (i__21741__auto___72375 + (1));
i__21741__auto___72375 = G__72376;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72373))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72373),args);
});})(g__21946__auto___72373))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__21946__auto___72373){
return (function (seq72333){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72333));
});})(g__21946__auto___72373))
;


var g__21946__auto___72377 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__21946__auto___72377){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72378 = arguments.length;
var i__21741__auto___72379 = (0);
while(true){
if((i__21741__auto___72379 < len__21740__auto___72378)){
args__21754__auto__.push((arguments[i__21741__auto___72379]));

var G__72380 = (i__21741__auto___72379 + (1));
i__21741__auto___72379 = G__72380;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72377))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72377),args);
});})(g__21946__auto___72377))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__21946__auto___72377){
return (function (seq72334){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72334));
});})(g__21946__auto___72377))
;


var g__21946__auto___72381 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__21946__auto___72381){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72382 = arguments.length;
var i__21741__auto___72383 = (0);
while(true){
if((i__21741__auto___72383 < len__21740__auto___72382)){
args__21754__auto__.push((arguments[i__21741__auto___72383]));

var G__72384 = (i__21741__auto___72383 + (1));
i__21741__auto___72383 = G__72384;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72381))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72381),args);
});})(g__21946__auto___72381))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__21946__auto___72381){
return (function (seq72335){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72335));
});})(g__21946__auto___72381))
;


var g__21946__auto___72385 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__21946__auto___72385){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72386 = arguments.length;
var i__21741__auto___72387 = (0);
while(true){
if((i__21741__auto___72387 < len__21740__auto___72386)){
args__21754__auto__.push((arguments[i__21741__auto___72387]));

var G__72388 = (i__21741__auto___72387 + (1));
i__21741__auto___72387 = G__72388;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72385))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72385),args);
});})(g__21946__auto___72385))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__21946__auto___72385){
return (function (seq72336){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72336));
});})(g__21946__auto___72385))
;


var g__21946__auto___72389 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__21946__auto___72389){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72390 = arguments.length;
var i__21741__auto___72391 = (0);
while(true){
if((i__21741__auto___72391 < len__21740__auto___72390)){
args__21754__auto__.push((arguments[i__21741__auto___72391]));

var G__72392 = (i__21741__auto___72391 + (1));
i__21741__auto___72391 = G__72392;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72389))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72389),args);
});})(g__21946__auto___72389))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__21946__auto___72389){
return (function (seq72337){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72337));
});})(g__21946__auto___72389))
;


var g__21946__auto___72393 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__21946__auto___72393){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72394 = arguments.length;
var i__21741__auto___72395 = (0);
while(true){
if((i__21741__auto___72395 < len__21740__auto___72394)){
args__21754__auto__.push((arguments[i__21741__auto___72395]));

var G__72396 = (i__21741__auto___72395 + (1));
i__21741__auto___72395 = G__72396;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72393))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72393),args);
});})(g__21946__auto___72393))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__21946__auto___72393){
return (function (seq72338){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72338));
});})(g__21946__auto___72393))
;


var g__21946__auto___72397 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__21946__auto___72397){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72398 = arguments.length;
var i__21741__auto___72399 = (0);
while(true){
if((i__21741__auto___72399 < len__21740__auto___72398)){
args__21754__auto__.push((arguments[i__21741__auto___72399]));

var G__72400 = (i__21741__auto___72399 + (1));
i__21741__auto___72399 = G__72400;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72397))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72397),args);
});})(g__21946__auto___72397))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__21946__auto___72397){
return (function (seq72339){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72339));
});})(g__21946__auto___72397))
;


var g__21946__auto___72401 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__21946__auto___72401){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72402 = arguments.length;
var i__21741__auto___72403 = (0);
while(true){
if((i__21741__auto___72403 < len__21740__auto___72402)){
args__21754__auto__.push((arguments[i__21741__auto___72403]));

var G__72404 = (i__21741__auto___72403 + (1));
i__21741__auto___72403 = G__72404;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72401))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72401),args);
});})(g__21946__auto___72401))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__21946__auto___72401){
return (function (seq72340){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72340));
});})(g__21946__auto___72401))
;


var g__21946__auto___72405 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__21946__auto___72405){
return (function cljs$spec$gen$alpha$return(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72406 = arguments.length;
var i__21741__auto___72407 = (0);
while(true){
if((i__21741__auto___72407 < len__21740__auto___72406)){
args__21754__auto__.push((arguments[i__21741__auto___72407]));

var G__72408 = (i__21741__auto___72407 + (1));
i__21741__auto___72407 = G__72408;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72405))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72405),args);
});})(g__21946__auto___72405))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__21946__auto___72405){
return (function (seq72341){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72341));
});})(g__21946__auto___72405))
;


var g__21946__auto___72409 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__21946__auto___72409){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72410 = arguments.length;
var i__21741__auto___72411 = (0);
while(true){
if((i__21741__auto___72411 < len__21740__auto___72410)){
args__21754__auto__.push((arguments[i__21741__auto___72411]));

var G__72412 = (i__21741__auto___72411 + (1));
i__21741__auto___72411 = G__72412;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72409))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72409),args);
});})(g__21946__auto___72409))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21946__auto___72409){
return (function (seq72342){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72342));
});})(g__21946__auto___72409))
;


var g__21946__auto___72413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__21946__auto___72413){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72414 = arguments.length;
var i__21741__auto___72415 = (0);
while(true){
if((i__21741__auto___72415 < len__21740__auto___72414)){
args__21754__auto__.push((arguments[i__21741__auto___72415]));

var G__72416 = (i__21741__auto___72415 + (1));
i__21741__auto___72415 = G__72416;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72413))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72413),args);
});})(g__21946__auto___72413))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__21946__auto___72413){
return (function (seq72343){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72343));
});})(g__21946__auto___72413))
;


var g__21946__auto___72417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__21946__auto___72417){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72418 = arguments.length;
var i__21741__auto___72419 = (0);
while(true){
if((i__21741__auto___72419 < len__21740__auto___72418)){
args__21754__auto__.push((arguments[i__21741__auto___72419]));

var G__72420 = (i__21741__auto___72419 + (1));
i__21741__auto___72419 = G__72420;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21946__auto___72417))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21946__auto___72417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21946__auto___72417),args);
});})(g__21946__auto___72417))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__21946__auto___72417){
return (function (seq72344){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72344));
});})(g__21946__auto___72417))
;

var g__21959__auto___72442 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__21959__auto___72442){
return (function cljs$spec$gen$alpha$any(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72443 = arguments.length;
var i__21741__auto___72444 = (0);
while(true){
if((i__21741__auto___72444 < len__21740__auto___72443)){
args__21754__auto__.push((arguments[i__21741__auto___72444]));

var G__72445 = (i__21741__auto___72444 + (1));
i__21741__auto___72444 = G__72445;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72442))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72442){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72442);
});})(g__21959__auto___72442))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__21959__auto___72442){
return (function (seq72421){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72421));
});})(g__21959__auto___72442))
;


var g__21959__auto___72446 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__21959__auto___72446){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72447 = arguments.length;
var i__21741__auto___72448 = (0);
while(true){
if((i__21741__auto___72448 < len__21740__auto___72447)){
args__21754__auto__.push((arguments[i__21741__auto___72448]));

var G__72449 = (i__21741__auto___72448 + (1));
i__21741__auto___72448 = G__72449;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72446))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72446){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72446);
});})(g__21959__auto___72446))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__21959__auto___72446){
return (function (seq72422){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72422));
});})(g__21959__auto___72446))
;


var g__21959__auto___72450 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__21959__auto___72450){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72451 = arguments.length;
var i__21741__auto___72452 = (0);
while(true){
if((i__21741__auto___72452 < len__21740__auto___72451)){
args__21754__auto__.push((arguments[i__21741__auto___72452]));

var G__72453 = (i__21741__auto___72452 + (1));
i__21741__auto___72452 = G__72453;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72450))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72450){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72450);
});})(g__21959__auto___72450))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__21959__auto___72450){
return (function (seq72423){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72423));
});})(g__21959__auto___72450))
;


var g__21959__auto___72454 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__21959__auto___72454){
return (function cljs$spec$gen$alpha$char(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72455 = arguments.length;
var i__21741__auto___72456 = (0);
while(true){
if((i__21741__auto___72456 < len__21740__auto___72455)){
args__21754__auto__.push((arguments[i__21741__auto___72456]));

var G__72457 = (i__21741__auto___72456 + (1));
i__21741__auto___72456 = G__72457;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72454))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72454){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72454);
});})(g__21959__auto___72454))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__21959__auto___72454){
return (function (seq72424){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72424));
});})(g__21959__auto___72454))
;


var g__21959__auto___72458 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__21959__auto___72458){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72459 = arguments.length;
var i__21741__auto___72460 = (0);
while(true){
if((i__21741__auto___72460 < len__21740__auto___72459)){
args__21754__auto__.push((arguments[i__21741__auto___72460]));

var G__72461 = (i__21741__auto___72460 + (1));
i__21741__auto___72460 = G__72461;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72458))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72458){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72458);
});})(g__21959__auto___72458))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__21959__auto___72458){
return (function (seq72425){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72425));
});})(g__21959__auto___72458))
;


var g__21959__auto___72462 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__21959__auto___72462){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72463 = arguments.length;
var i__21741__auto___72464 = (0);
while(true){
if((i__21741__auto___72464 < len__21740__auto___72463)){
args__21754__auto__.push((arguments[i__21741__auto___72464]));

var G__72465 = (i__21741__auto___72464 + (1));
i__21741__auto___72464 = G__72465;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72462))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72462){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72462);
});})(g__21959__auto___72462))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__21959__auto___72462){
return (function (seq72426){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72426));
});})(g__21959__auto___72462))
;


var g__21959__auto___72466 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__21959__auto___72466){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72467 = arguments.length;
var i__21741__auto___72468 = (0);
while(true){
if((i__21741__auto___72468 < len__21740__auto___72467)){
args__21754__auto__.push((arguments[i__21741__auto___72468]));

var G__72469 = (i__21741__auto___72468 + (1));
i__21741__auto___72468 = G__72469;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72466))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72466){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72466);
});})(g__21959__auto___72466))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__21959__auto___72466){
return (function (seq72427){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72427));
});})(g__21959__auto___72466))
;


var g__21959__auto___72470 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__21959__auto___72470){
return (function cljs$spec$gen$alpha$double(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72471 = arguments.length;
var i__21741__auto___72472 = (0);
while(true){
if((i__21741__auto___72472 < len__21740__auto___72471)){
args__21754__auto__.push((arguments[i__21741__auto___72472]));

var G__72473 = (i__21741__auto___72472 + (1));
i__21741__auto___72472 = G__72473;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72470))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72470){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72470);
});})(g__21959__auto___72470))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__21959__auto___72470){
return (function (seq72428){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72428));
});})(g__21959__auto___72470))
;


var g__21959__auto___72474 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__21959__auto___72474){
return (function cljs$spec$gen$alpha$int(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72475 = arguments.length;
var i__21741__auto___72476 = (0);
while(true){
if((i__21741__auto___72476 < len__21740__auto___72475)){
args__21754__auto__.push((arguments[i__21741__auto___72476]));

var G__72477 = (i__21741__auto___72476 + (1));
i__21741__auto___72476 = G__72477;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72474))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72474){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72474);
});})(g__21959__auto___72474))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__21959__auto___72474){
return (function (seq72429){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72429));
});})(g__21959__auto___72474))
;


var g__21959__auto___72478 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__21959__auto___72478){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72479 = arguments.length;
var i__21741__auto___72480 = (0);
while(true){
if((i__21741__auto___72480 < len__21740__auto___72479)){
args__21754__auto__.push((arguments[i__21741__auto___72480]));

var G__72481 = (i__21741__auto___72480 + (1));
i__21741__auto___72480 = G__72481;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72478))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72478){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72478);
});})(g__21959__auto___72478))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__21959__auto___72478){
return (function (seq72430){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72430));
});})(g__21959__auto___72478))
;


var g__21959__auto___72482 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__21959__auto___72482){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72483 = arguments.length;
var i__21741__auto___72484 = (0);
while(true){
if((i__21741__auto___72484 < len__21740__auto___72483)){
args__21754__auto__.push((arguments[i__21741__auto___72484]));

var G__72485 = (i__21741__auto___72484 + (1));
i__21741__auto___72484 = G__72485;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72482))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72482){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72482);
});})(g__21959__auto___72482))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__21959__auto___72482){
return (function (seq72431){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72431));
});})(g__21959__auto___72482))
;


var g__21959__auto___72486 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__21959__auto___72486){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72487 = arguments.length;
var i__21741__auto___72488 = (0);
while(true){
if((i__21741__auto___72488 < len__21740__auto___72487)){
args__21754__auto__.push((arguments[i__21741__auto___72488]));

var G__72489 = (i__21741__auto___72488 + (1));
i__21741__auto___72488 = G__72489;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72486))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72486){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72486);
});})(g__21959__auto___72486))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__21959__auto___72486){
return (function (seq72432){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72432));
});})(g__21959__auto___72486))
;


var g__21959__auto___72490 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__21959__auto___72490){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72491 = arguments.length;
var i__21741__auto___72492 = (0);
while(true){
if((i__21741__auto___72492 < len__21740__auto___72491)){
args__21754__auto__.push((arguments[i__21741__auto___72492]));

var G__72493 = (i__21741__auto___72492 + (1));
i__21741__auto___72492 = G__72493;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72490))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72490){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72490);
});})(g__21959__auto___72490))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__21959__auto___72490){
return (function (seq72433){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72433));
});})(g__21959__auto___72490))
;


var g__21959__auto___72494 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__21959__auto___72494){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72495 = arguments.length;
var i__21741__auto___72496 = (0);
while(true){
if((i__21741__auto___72496 < len__21740__auto___72495)){
args__21754__auto__.push((arguments[i__21741__auto___72496]));

var G__72497 = (i__21741__auto___72496 + (1));
i__21741__auto___72496 = G__72497;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72494))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72494){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72494);
});})(g__21959__auto___72494))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__21959__auto___72494){
return (function (seq72434){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72434));
});})(g__21959__auto___72494))
;


var g__21959__auto___72498 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__21959__auto___72498){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72499 = arguments.length;
var i__21741__auto___72500 = (0);
while(true){
if((i__21741__auto___72500 < len__21740__auto___72499)){
args__21754__auto__.push((arguments[i__21741__auto___72500]));

var G__72501 = (i__21741__auto___72500 + (1));
i__21741__auto___72500 = G__72501;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72498))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72498){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72498);
});})(g__21959__auto___72498))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__21959__auto___72498){
return (function (seq72435){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72435));
});})(g__21959__auto___72498))
;


var g__21959__auto___72502 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__21959__auto___72502){
return (function cljs$spec$gen$alpha$string(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72503 = arguments.length;
var i__21741__auto___72504 = (0);
while(true){
if((i__21741__auto___72504 < len__21740__auto___72503)){
args__21754__auto__.push((arguments[i__21741__auto___72504]));

var G__72505 = (i__21741__auto___72504 + (1));
i__21741__auto___72504 = G__72505;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72502))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72502){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72502);
});})(g__21959__auto___72502))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__21959__auto___72502){
return (function (seq72436){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72436));
});})(g__21959__auto___72502))
;


var g__21959__auto___72506 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__21959__auto___72506){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72507 = arguments.length;
var i__21741__auto___72508 = (0);
while(true){
if((i__21741__auto___72508 < len__21740__auto___72507)){
args__21754__auto__.push((arguments[i__21741__auto___72508]));

var G__72509 = (i__21741__auto___72508 + (1));
i__21741__auto___72508 = G__72509;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72506))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72506){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72506);
});})(g__21959__auto___72506))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__21959__auto___72506){
return (function (seq72437){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72437));
});})(g__21959__auto___72506))
;


var g__21959__auto___72510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__21959__auto___72510){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72511 = arguments.length;
var i__21741__auto___72512 = (0);
while(true){
if((i__21741__auto___72512 < len__21740__auto___72511)){
args__21754__auto__.push((arguments[i__21741__auto___72512]));

var G__72513 = (i__21741__auto___72512 + (1));
i__21741__auto___72512 = G__72513;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72510))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72510){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72510);
});})(g__21959__auto___72510))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__21959__auto___72510){
return (function (seq72438){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72438));
});})(g__21959__auto___72510))
;


var g__21959__auto___72514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__21959__auto___72514){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72515 = arguments.length;
var i__21741__auto___72516 = (0);
while(true){
if((i__21741__auto___72516 < len__21740__auto___72515)){
args__21754__auto__.push((arguments[i__21741__auto___72516]));

var G__72517 = (i__21741__auto___72516 + (1));
i__21741__auto___72516 = G__72517;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72514))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72514){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72514);
});})(g__21959__auto___72514))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__21959__auto___72514){
return (function (seq72439){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72439));
});})(g__21959__auto___72514))
;


var g__21959__auto___72518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__21959__auto___72518){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72519 = arguments.length;
var i__21741__auto___72520 = (0);
while(true){
if((i__21741__auto___72520 < len__21740__auto___72519)){
args__21754__auto__.push((arguments[i__21741__auto___72520]));

var G__72521 = (i__21741__auto___72520 + (1));
i__21741__auto___72520 = G__72521;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72518))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72518){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72518);
});})(g__21959__auto___72518))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__21959__auto___72518){
return (function (seq72440){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72440));
});})(g__21959__auto___72518))
;


var g__21959__auto___72522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__21959__auto___72522){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72523 = arguments.length;
var i__21741__auto___72524 = (0);
while(true){
if((i__21741__auto___72524 < len__21740__auto___72523)){
args__21754__auto__.push((arguments[i__21741__auto___72524]));

var G__72525 = (i__21741__auto___72524 + (1));
i__21741__auto___72524 = G__72525;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});})(g__21959__auto___72522))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21959__auto___72522){
return (function (args){
return cljs.core.deref.call(null,g__21959__auto___72522);
});})(g__21959__auto___72522))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__21959__auto___72522){
return (function (seq72441){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72441));
});})(g__21959__auto___72522))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__21754__auto__ = [];
var len__21740__auto___72528 = arguments.length;
var i__21741__auto___72529 = (0);
while(true){
if((i__21741__auto___72529 < len__21740__auto___72528)){
args__21754__auto__.push((arguments[i__21741__auto___72529]));

var G__72530 = (i__21741__auto___72529 + (1));
i__21741__auto___72529 = G__72530;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__72526_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__72526_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq72527){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72527));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__72531_SHARP_){
return (new Date(p1__72531_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1518983349282
