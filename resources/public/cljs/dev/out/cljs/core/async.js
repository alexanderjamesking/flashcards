// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__68513 = arguments.length;
switch (G__68513) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async68514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68514 = (function (f,blockable,meta68515){
this.f = f;
this.blockable = blockable;
this.meta68515 = meta68515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68516,meta68515__$1){
var self__ = this;
var _68516__$1 = this;
return (new cljs.core.async.t_cljs$core$async68514(self__.f,self__.blockable,meta68515__$1));
});

cljs.core.async.t_cljs$core$async68514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68516){
var self__ = this;
var _68516__$1 = this;
return self__.meta68515;
});

cljs.core.async.t_cljs$core$async68514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async68514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async68514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async68514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta68515","meta68515",1856904800,null)], null);
});

cljs.core.async.t_cljs$core$async68514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68514";

cljs.core.async.t_cljs$core$async68514.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async68514");
});

cljs.core.async.__GT_t_cljs$core$async68514 = (function cljs$core$async$__GT_t_cljs$core$async68514(f__$1,blockable__$1,meta68515){
return (new cljs.core.async.t_cljs$core$async68514(f__$1,blockable__$1,meta68515));
});

}

return (new cljs.core.async.t_cljs$core$async68514(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__68520 = arguments.length;
switch (G__68520) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__68523 = arguments.length;
switch (G__68523) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__68526 = arguments.length;
switch (G__68526) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_68528 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_68528);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_68528,ret){
return (function (){
return fn1.call(null,val_68528);
});})(val_68528,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__68530 = arguments.length;
switch (G__68530) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__41940__auto___68532 = n;
var x_68533 = (0);
while(true){
if((x_68533 < n__41940__auto___68532)){
(a[x_68533] = (0));

var G__68534 = (x_68533 + (1));
x_68533 = G__68534;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__68535 = (i + (1));
i = G__68535;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async68536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68536 = (function (flag,meta68537){
this.flag = flag;
this.meta68537 = meta68537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_68538,meta68537__$1){
var self__ = this;
var _68538__$1 = this;
return (new cljs.core.async.t_cljs$core$async68536(self__.flag,meta68537__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async68536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_68538){
var self__ = this;
var _68538__$1 = this;
return self__.meta68537;
});})(flag))
;

cljs.core.async.t_cljs$core$async68536.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async68536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68536.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta68537","meta68537",293054375,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async68536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68536";

cljs.core.async.t_cljs$core$async68536.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async68536");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async68536 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async68536(flag__$1,meta68537){
return (new cljs.core.async.t_cljs$core$async68536(flag__$1,meta68537));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async68536(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async68539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68539 = (function (flag,cb,meta68540){
this.flag = flag;
this.cb = cb;
this.meta68540 = meta68540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68541,meta68540__$1){
var self__ = this;
var _68541__$1 = this;
return (new cljs.core.async.t_cljs$core$async68539(self__.flag,self__.cb,meta68540__$1));
});

cljs.core.async.t_cljs$core$async68539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68541){
var self__ = this;
var _68541__$1 = this;
return self__.meta68540;
});

cljs.core.async.t_cljs$core$async68539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async68539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async68539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async68539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta68540","meta68540",-499707133,null)], null);
});

cljs.core.async.t_cljs$core$async68539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68539";

cljs.core.async.t_cljs$core$async68539.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async68539");
});

cljs.core.async.__GT_t_cljs$core$async68539 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async68539(flag__$1,cb__$1,meta68540){
return (new cljs.core.async.t_cljs$core$async68539(flag__$1,cb__$1,meta68540));
});

}

return (new cljs.core.async.t_cljs$core$async68539(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68542_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68543_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__39945__auto__ = wport;
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
return port;
}
})()], null));
} else {
var G__68544 = (i + (1));
i = G__68544;
continue;
}
} else {
return null;
}
break;
}
})();
var or__39945__auto__ = ret;
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__39919__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__39919__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__39919__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__42181__auto__ = [];
var len__42174__auto___68550 = arguments.length;
var i__42175__auto___68551 = (0);
while(true){
if((i__42175__auto___68551 < len__42174__auto___68550)){
args__42181__auto__.push((arguments[i__42175__auto___68551]));

var G__68552 = (i__42175__auto___68551 + (1));
i__42175__auto___68551 = G__68552;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((1) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42182__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__68547){
var map__68548 = p__68547;
var map__68548__$1 = ((((!((map__68548 == null)))?((((map__68548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68548):map__68548);
var opts = map__68548__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq68545){
var G__68546 = cljs.core.first.call(null,seq68545);
var seq68545__$1 = cljs.core.next.call(null,seq68545);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68546,seq68545__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__68554 = arguments.length;
switch (G__68554) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__68453__auto___68600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___68600){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___68600){
return (function (state_68578){
var state_val_68579 = (state_68578[(1)]);
if((state_val_68579 === (7))){
var inst_68574 = (state_68578[(2)]);
var state_68578__$1 = state_68578;
var statearr_68580_68601 = state_68578__$1;
(statearr_68580_68601[(2)] = inst_68574);

(statearr_68580_68601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (1))){
var state_68578__$1 = state_68578;
var statearr_68581_68602 = state_68578__$1;
(statearr_68581_68602[(2)] = null);

(statearr_68581_68602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (4))){
var inst_68557 = (state_68578[(7)]);
var inst_68557__$1 = (state_68578[(2)]);
var inst_68558 = (inst_68557__$1 == null);
var state_68578__$1 = (function (){var statearr_68582 = state_68578;
(statearr_68582[(7)] = inst_68557__$1);

return statearr_68582;
})();
if(cljs.core.truth_(inst_68558)){
var statearr_68583_68603 = state_68578__$1;
(statearr_68583_68603[(1)] = (5));

} else {
var statearr_68584_68604 = state_68578__$1;
(statearr_68584_68604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (13))){
var state_68578__$1 = state_68578;
var statearr_68585_68605 = state_68578__$1;
(statearr_68585_68605[(2)] = null);

(statearr_68585_68605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (6))){
var inst_68557 = (state_68578[(7)]);
var state_68578__$1 = state_68578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68578__$1,(11),to,inst_68557);
} else {
if((state_val_68579 === (3))){
var inst_68576 = (state_68578[(2)]);
var state_68578__$1 = state_68578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68578__$1,inst_68576);
} else {
if((state_val_68579 === (12))){
var state_68578__$1 = state_68578;
var statearr_68586_68606 = state_68578__$1;
(statearr_68586_68606[(2)] = null);

(statearr_68586_68606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (2))){
var state_68578__$1 = state_68578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68578__$1,(4),from);
} else {
if((state_val_68579 === (11))){
var inst_68567 = (state_68578[(2)]);
var state_68578__$1 = state_68578;
if(cljs.core.truth_(inst_68567)){
var statearr_68587_68607 = state_68578__$1;
(statearr_68587_68607[(1)] = (12));

} else {
var statearr_68588_68608 = state_68578__$1;
(statearr_68588_68608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (9))){
var state_68578__$1 = state_68578;
var statearr_68589_68609 = state_68578__$1;
(statearr_68589_68609[(2)] = null);

(statearr_68589_68609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (5))){
var state_68578__$1 = state_68578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68590_68610 = state_68578__$1;
(statearr_68590_68610[(1)] = (8));

} else {
var statearr_68591_68611 = state_68578__$1;
(statearr_68591_68611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (14))){
var inst_68572 = (state_68578[(2)]);
var state_68578__$1 = state_68578;
var statearr_68592_68612 = state_68578__$1;
(statearr_68592_68612[(2)] = inst_68572);

(statearr_68592_68612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (10))){
var inst_68564 = (state_68578[(2)]);
var state_68578__$1 = state_68578;
var statearr_68593_68613 = state_68578__$1;
(statearr_68593_68613[(2)] = inst_68564);

(statearr_68593_68613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68579 === (8))){
var inst_68561 = cljs.core.async.close_BANG_.call(null,to);
var state_68578__$1 = state_68578;
var statearr_68594_68614 = state_68578__$1;
(statearr_68594_68614[(2)] = inst_68561);

(statearr_68594_68614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___68600))
;
return ((function (switch__68363__auto__,c__68453__auto___68600){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_68595 = [null,null,null,null,null,null,null,null];
(statearr_68595[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_68595[(1)] = (1));

return statearr_68595;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_68578){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68596){if((e68596 instanceof Object)){
var ex__68367__auto__ = e68596;
var statearr_68597_68615 = state_68578;
(statearr_68597_68615[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68616 = state_68578;
state_68578 = G__68616;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_68578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_68578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___68600))
})();
var state__68455__auto__ = (function (){var statearr_68598 = f__68454__auto__.call(null);
(statearr_68598[(6)] = c__68453__auto___68600);

return statearr_68598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___68600))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__68617){
var vec__68618 = p__68617;
var v = cljs.core.nth.call(null,vec__68618,(0),null);
var p = cljs.core.nth.call(null,vec__68618,(1),null);
var job = vec__68618;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__68453__auto___68789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___68789,res,vec__68618,v,p,job,jobs,results){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___68789,res,vec__68618,v,p,job,jobs,results){
return (function (state_68625){
var state_val_68626 = (state_68625[(1)]);
if((state_val_68626 === (1))){
var state_68625__$1 = state_68625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68625__$1,(2),res,v);
} else {
if((state_val_68626 === (2))){
var inst_68622 = (state_68625[(2)]);
var inst_68623 = cljs.core.async.close_BANG_.call(null,res);
var state_68625__$1 = (function (){var statearr_68627 = state_68625;
(statearr_68627[(7)] = inst_68622);

return statearr_68627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68625__$1,inst_68623);
} else {
return null;
}
}
});})(c__68453__auto___68789,res,vec__68618,v,p,job,jobs,results))
;
return ((function (switch__68363__auto__,c__68453__auto___68789,res,vec__68618,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_68628 = [null,null,null,null,null,null,null,null];
(statearr_68628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_68628[(1)] = (1));

return statearr_68628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_68625){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68629){if((e68629 instanceof Object)){
var ex__68367__auto__ = e68629;
var statearr_68630_68790 = state_68625;
(statearr_68630_68790[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68791 = state_68625;
state_68625 = G__68791;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_68625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_68625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___68789,res,vec__68618,v,p,job,jobs,results))
})();
var state__68455__auto__ = (function (){var statearr_68631 = f__68454__auto__.call(null);
(statearr_68631[(6)] = c__68453__auto___68789);

return statearr_68631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___68789,res,vec__68618,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__68632){
var vec__68633 = p__68632;
var v = cljs.core.nth.call(null,vec__68633,(0),null);
var p = cljs.core.nth.call(null,vec__68633,(1),null);
var job = vec__68633;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__41940__auto___68792 = n;
var __68793 = (0);
while(true){
if((__68793 < n__41940__auto___68792)){
var G__68636_68794 = type;
var G__68636_68795__$1 = (((G__68636_68794 instanceof cljs.core.Keyword))?G__68636_68794.fqn:null);
switch (G__68636_68795__$1) {
case "compute":
var c__68453__auto___68797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68793,c__68453__auto___68797,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (__68793,c__68453__auto___68797,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async){
return (function (state_68649){
var state_val_68650 = (state_68649[(1)]);
if((state_val_68650 === (1))){
var state_68649__$1 = state_68649;
var statearr_68651_68798 = state_68649__$1;
(statearr_68651_68798[(2)] = null);

(statearr_68651_68798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68650 === (2))){
var state_68649__$1 = state_68649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68649__$1,(4),jobs);
} else {
if((state_val_68650 === (3))){
var inst_68647 = (state_68649[(2)]);
var state_68649__$1 = state_68649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68649__$1,inst_68647);
} else {
if((state_val_68650 === (4))){
var inst_68639 = (state_68649[(2)]);
var inst_68640 = process.call(null,inst_68639);
var state_68649__$1 = state_68649;
if(cljs.core.truth_(inst_68640)){
var statearr_68652_68799 = state_68649__$1;
(statearr_68652_68799[(1)] = (5));

} else {
var statearr_68653_68800 = state_68649__$1;
(statearr_68653_68800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68650 === (5))){
var state_68649__$1 = state_68649;
var statearr_68654_68801 = state_68649__$1;
(statearr_68654_68801[(2)] = null);

(statearr_68654_68801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68650 === (6))){
var state_68649__$1 = state_68649;
var statearr_68655_68802 = state_68649__$1;
(statearr_68655_68802[(2)] = null);

(statearr_68655_68802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68650 === (7))){
var inst_68645 = (state_68649[(2)]);
var state_68649__$1 = state_68649;
var statearr_68656_68803 = state_68649__$1;
(statearr_68656_68803[(2)] = inst_68645);

(statearr_68656_68803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__68793,c__68453__auto___68797,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async))
;
return ((function (__68793,switch__68363__auto__,c__68453__auto___68797,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_68657 = [null,null,null,null,null,null,null];
(statearr_68657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_68657[(1)] = (1));

return statearr_68657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_68649){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68658){if((e68658 instanceof Object)){
var ex__68367__auto__ = e68658;
var statearr_68659_68804 = state_68649;
(statearr_68659_68804[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68805 = state_68649;
state_68649 = G__68805;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_68649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_68649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(__68793,switch__68363__auto__,c__68453__auto___68797,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async))
})();
var state__68455__auto__ = (function (){var statearr_68660 = f__68454__auto__.call(null);
(statearr_68660[(6)] = c__68453__auto___68797);

return statearr_68660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(__68793,c__68453__auto___68797,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async))
);


break;
case "async":
var c__68453__auto___68806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68793,c__68453__auto___68806,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (__68793,c__68453__auto___68806,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async){
return (function (state_68673){
var state_val_68674 = (state_68673[(1)]);
if((state_val_68674 === (1))){
var state_68673__$1 = state_68673;
var statearr_68675_68807 = state_68673__$1;
(statearr_68675_68807[(2)] = null);

(statearr_68675_68807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68674 === (2))){
var state_68673__$1 = state_68673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68673__$1,(4),jobs);
} else {
if((state_val_68674 === (3))){
var inst_68671 = (state_68673[(2)]);
var state_68673__$1 = state_68673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68673__$1,inst_68671);
} else {
if((state_val_68674 === (4))){
var inst_68663 = (state_68673[(2)]);
var inst_68664 = async.call(null,inst_68663);
var state_68673__$1 = state_68673;
if(cljs.core.truth_(inst_68664)){
var statearr_68676_68808 = state_68673__$1;
(statearr_68676_68808[(1)] = (5));

} else {
var statearr_68677_68809 = state_68673__$1;
(statearr_68677_68809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68674 === (5))){
var state_68673__$1 = state_68673;
var statearr_68678_68810 = state_68673__$1;
(statearr_68678_68810[(2)] = null);

(statearr_68678_68810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68674 === (6))){
var state_68673__$1 = state_68673;
var statearr_68679_68811 = state_68673__$1;
(statearr_68679_68811[(2)] = null);

(statearr_68679_68811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68674 === (7))){
var inst_68669 = (state_68673[(2)]);
var state_68673__$1 = state_68673;
var statearr_68680_68812 = state_68673__$1;
(statearr_68680_68812[(2)] = inst_68669);

(statearr_68680_68812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__68793,c__68453__auto___68806,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async))
;
return ((function (__68793,switch__68363__auto__,c__68453__auto___68806,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_68681 = [null,null,null,null,null,null,null];
(statearr_68681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_68681[(1)] = (1));

return statearr_68681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_68673){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68682){if((e68682 instanceof Object)){
var ex__68367__auto__ = e68682;
var statearr_68683_68813 = state_68673;
(statearr_68683_68813[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68814 = state_68673;
state_68673 = G__68814;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_68673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_68673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(__68793,switch__68363__auto__,c__68453__auto___68806,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async))
})();
var state__68455__auto__ = (function (){var statearr_68684 = f__68454__auto__.call(null);
(statearr_68684[(6)] = c__68453__auto___68806);

return statearr_68684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(__68793,c__68453__auto___68806,G__68636_68794,G__68636_68795__$1,n__41940__auto___68792,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68636_68795__$1)].join('')));

}

var G__68815 = (__68793 + (1));
__68793 = G__68815;
continue;
} else {
}
break;
}

var c__68453__auto___68816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___68816,jobs,results,process,async){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___68816,jobs,results,process,async){
return (function (state_68706){
var state_val_68707 = (state_68706[(1)]);
if((state_val_68707 === (1))){
var state_68706__$1 = state_68706;
var statearr_68708_68817 = state_68706__$1;
(statearr_68708_68817[(2)] = null);

(statearr_68708_68817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68707 === (2))){
var state_68706__$1 = state_68706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68706__$1,(4),from);
} else {
if((state_val_68707 === (3))){
var inst_68704 = (state_68706[(2)]);
var state_68706__$1 = state_68706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68706__$1,inst_68704);
} else {
if((state_val_68707 === (4))){
var inst_68687 = (state_68706[(7)]);
var inst_68687__$1 = (state_68706[(2)]);
var inst_68688 = (inst_68687__$1 == null);
var state_68706__$1 = (function (){var statearr_68709 = state_68706;
(statearr_68709[(7)] = inst_68687__$1);

return statearr_68709;
})();
if(cljs.core.truth_(inst_68688)){
var statearr_68710_68818 = state_68706__$1;
(statearr_68710_68818[(1)] = (5));

} else {
var statearr_68711_68819 = state_68706__$1;
(statearr_68711_68819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68707 === (5))){
var inst_68690 = cljs.core.async.close_BANG_.call(null,jobs);
var state_68706__$1 = state_68706;
var statearr_68712_68820 = state_68706__$1;
(statearr_68712_68820[(2)] = inst_68690);

(statearr_68712_68820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68707 === (6))){
var inst_68692 = (state_68706[(8)]);
var inst_68687 = (state_68706[(7)]);
var inst_68692__$1 = cljs.core.async.chan.call(null,(1));
var inst_68693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68694 = [inst_68687,inst_68692__$1];
var inst_68695 = (new cljs.core.PersistentVector(null,2,(5),inst_68693,inst_68694,null));
var state_68706__$1 = (function (){var statearr_68713 = state_68706;
(statearr_68713[(8)] = inst_68692__$1);

return statearr_68713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68706__$1,(8),jobs,inst_68695);
} else {
if((state_val_68707 === (7))){
var inst_68702 = (state_68706[(2)]);
var state_68706__$1 = state_68706;
var statearr_68714_68821 = state_68706__$1;
(statearr_68714_68821[(2)] = inst_68702);

(statearr_68714_68821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68707 === (8))){
var inst_68692 = (state_68706[(8)]);
var inst_68697 = (state_68706[(2)]);
var state_68706__$1 = (function (){var statearr_68715 = state_68706;
(statearr_68715[(9)] = inst_68697);

return statearr_68715;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68706__$1,(9),results,inst_68692);
} else {
if((state_val_68707 === (9))){
var inst_68699 = (state_68706[(2)]);
var state_68706__$1 = (function (){var statearr_68716 = state_68706;
(statearr_68716[(10)] = inst_68699);

return statearr_68716;
})();
var statearr_68717_68822 = state_68706__$1;
(statearr_68717_68822[(2)] = null);

(statearr_68717_68822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___68816,jobs,results,process,async))
;
return ((function (switch__68363__auto__,c__68453__auto___68816,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_68718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_68718[(1)] = (1));

return statearr_68718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_68706){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68719){if((e68719 instanceof Object)){
var ex__68367__auto__ = e68719;
var statearr_68720_68823 = state_68706;
(statearr_68720_68823[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68824 = state_68706;
state_68706 = G__68824;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_68706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_68706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___68816,jobs,results,process,async))
})();
var state__68455__auto__ = (function (){var statearr_68721 = f__68454__auto__.call(null);
(statearr_68721[(6)] = c__68453__auto___68816);

return statearr_68721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___68816,jobs,results,process,async))
);


var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__,jobs,results,process,async){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__,jobs,results,process,async){
return (function (state_68759){
var state_val_68760 = (state_68759[(1)]);
if((state_val_68760 === (7))){
var inst_68755 = (state_68759[(2)]);
var state_68759__$1 = state_68759;
var statearr_68761_68825 = state_68759__$1;
(statearr_68761_68825[(2)] = inst_68755);

(statearr_68761_68825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (20))){
var state_68759__$1 = state_68759;
var statearr_68762_68826 = state_68759__$1;
(statearr_68762_68826[(2)] = null);

(statearr_68762_68826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (1))){
var state_68759__$1 = state_68759;
var statearr_68763_68827 = state_68759__$1;
(statearr_68763_68827[(2)] = null);

(statearr_68763_68827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (4))){
var inst_68724 = (state_68759[(7)]);
var inst_68724__$1 = (state_68759[(2)]);
var inst_68725 = (inst_68724__$1 == null);
var state_68759__$1 = (function (){var statearr_68764 = state_68759;
(statearr_68764[(7)] = inst_68724__$1);

return statearr_68764;
})();
if(cljs.core.truth_(inst_68725)){
var statearr_68765_68828 = state_68759__$1;
(statearr_68765_68828[(1)] = (5));

} else {
var statearr_68766_68829 = state_68759__$1;
(statearr_68766_68829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (15))){
var inst_68737 = (state_68759[(8)]);
var state_68759__$1 = state_68759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68759__$1,(18),to,inst_68737);
} else {
if((state_val_68760 === (21))){
var inst_68750 = (state_68759[(2)]);
var state_68759__$1 = state_68759;
var statearr_68767_68830 = state_68759__$1;
(statearr_68767_68830[(2)] = inst_68750);

(statearr_68767_68830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (13))){
var inst_68752 = (state_68759[(2)]);
var state_68759__$1 = (function (){var statearr_68768 = state_68759;
(statearr_68768[(9)] = inst_68752);

return statearr_68768;
})();
var statearr_68769_68831 = state_68759__$1;
(statearr_68769_68831[(2)] = null);

(statearr_68769_68831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (6))){
var inst_68724 = (state_68759[(7)]);
var state_68759__$1 = state_68759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68759__$1,(11),inst_68724);
} else {
if((state_val_68760 === (17))){
var inst_68745 = (state_68759[(2)]);
var state_68759__$1 = state_68759;
if(cljs.core.truth_(inst_68745)){
var statearr_68770_68832 = state_68759__$1;
(statearr_68770_68832[(1)] = (19));

} else {
var statearr_68771_68833 = state_68759__$1;
(statearr_68771_68833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (3))){
var inst_68757 = (state_68759[(2)]);
var state_68759__$1 = state_68759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68759__$1,inst_68757);
} else {
if((state_val_68760 === (12))){
var inst_68734 = (state_68759[(10)]);
var state_68759__$1 = state_68759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68759__$1,(14),inst_68734);
} else {
if((state_val_68760 === (2))){
var state_68759__$1 = state_68759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68759__$1,(4),results);
} else {
if((state_val_68760 === (19))){
var state_68759__$1 = state_68759;
var statearr_68772_68834 = state_68759__$1;
(statearr_68772_68834[(2)] = null);

(statearr_68772_68834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (11))){
var inst_68734 = (state_68759[(2)]);
var state_68759__$1 = (function (){var statearr_68773 = state_68759;
(statearr_68773[(10)] = inst_68734);

return statearr_68773;
})();
var statearr_68774_68835 = state_68759__$1;
(statearr_68774_68835[(2)] = null);

(statearr_68774_68835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (9))){
var state_68759__$1 = state_68759;
var statearr_68775_68836 = state_68759__$1;
(statearr_68775_68836[(2)] = null);

(statearr_68775_68836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (5))){
var state_68759__$1 = state_68759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68776_68837 = state_68759__$1;
(statearr_68776_68837[(1)] = (8));

} else {
var statearr_68777_68838 = state_68759__$1;
(statearr_68777_68838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (14))){
var inst_68737 = (state_68759[(8)]);
var inst_68739 = (state_68759[(11)]);
var inst_68737__$1 = (state_68759[(2)]);
var inst_68738 = (inst_68737__$1 == null);
var inst_68739__$1 = cljs.core.not.call(null,inst_68738);
var state_68759__$1 = (function (){var statearr_68778 = state_68759;
(statearr_68778[(8)] = inst_68737__$1);

(statearr_68778[(11)] = inst_68739__$1);

return statearr_68778;
})();
if(inst_68739__$1){
var statearr_68779_68839 = state_68759__$1;
(statearr_68779_68839[(1)] = (15));

} else {
var statearr_68780_68840 = state_68759__$1;
(statearr_68780_68840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (16))){
var inst_68739 = (state_68759[(11)]);
var state_68759__$1 = state_68759;
var statearr_68781_68841 = state_68759__$1;
(statearr_68781_68841[(2)] = inst_68739);

(statearr_68781_68841[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (10))){
var inst_68731 = (state_68759[(2)]);
var state_68759__$1 = state_68759;
var statearr_68782_68842 = state_68759__$1;
(statearr_68782_68842[(2)] = inst_68731);

(statearr_68782_68842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (18))){
var inst_68742 = (state_68759[(2)]);
var state_68759__$1 = state_68759;
var statearr_68783_68843 = state_68759__$1;
(statearr_68783_68843[(2)] = inst_68742);

(statearr_68783_68843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68760 === (8))){
var inst_68728 = cljs.core.async.close_BANG_.call(null,to);
var state_68759__$1 = state_68759;
var statearr_68784_68844 = state_68759__$1;
(statearr_68784_68844[(2)] = inst_68728);

(statearr_68784_68844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto__,jobs,results,process,async))
;
return ((function (switch__68363__auto__,c__68453__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_68785 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_68785[(1)] = (1));

return statearr_68785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_68759){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68786){if((e68786 instanceof Object)){
var ex__68367__auto__ = e68786;
var statearr_68787_68845 = state_68759;
(statearr_68787_68845[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68846 = state_68759;
state_68759 = G__68846;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_68759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_68759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,jobs,results,process,async))
})();
var state__68455__auto__ = (function (){var statearr_68788 = f__68454__auto__.call(null);
(statearr_68788[(6)] = c__68453__auto__);

return statearr_68788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__,jobs,results,process,async))
);

return c__68453__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__68848 = arguments.length;
switch (G__68848) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__68851 = arguments.length;
switch (G__68851) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__68854 = arguments.length;
switch (G__68854) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__68453__auto___68903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___68903,tc,fc){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___68903,tc,fc){
return (function (state_68880){
var state_val_68881 = (state_68880[(1)]);
if((state_val_68881 === (7))){
var inst_68876 = (state_68880[(2)]);
var state_68880__$1 = state_68880;
var statearr_68882_68904 = state_68880__$1;
(statearr_68882_68904[(2)] = inst_68876);

(statearr_68882_68904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (1))){
var state_68880__$1 = state_68880;
var statearr_68883_68905 = state_68880__$1;
(statearr_68883_68905[(2)] = null);

(statearr_68883_68905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (4))){
var inst_68857 = (state_68880[(7)]);
var inst_68857__$1 = (state_68880[(2)]);
var inst_68858 = (inst_68857__$1 == null);
var state_68880__$1 = (function (){var statearr_68884 = state_68880;
(statearr_68884[(7)] = inst_68857__$1);

return statearr_68884;
})();
if(cljs.core.truth_(inst_68858)){
var statearr_68885_68906 = state_68880__$1;
(statearr_68885_68906[(1)] = (5));

} else {
var statearr_68886_68907 = state_68880__$1;
(statearr_68886_68907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (13))){
var state_68880__$1 = state_68880;
var statearr_68887_68908 = state_68880__$1;
(statearr_68887_68908[(2)] = null);

(statearr_68887_68908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (6))){
var inst_68857 = (state_68880[(7)]);
var inst_68863 = p.call(null,inst_68857);
var state_68880__$1 = state_68880;
if(cljs.core.truth_(inst_68863)){
var statearr_68888_68909 = state_68880__$1;
(statearr_68888_68909[(1)] = (9));

} else {
var statearr_68889_68910 = state_68880__$1;
(statearr_68889_68910[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (3))){
var inst_68878 = (state_68880[(2)]);
var state_68880__$1 = state_68880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68880__$1,inst_68878);
} else {
if((state_val_68881 === (12))){
var state_68880__$1 = state_68880;
var statearr_68890_68911 = state_68880__$1;
(statearr_68890_68911[(2)] = null);

(statearr_68890_68911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (2))){
var state_68880__$1 = state_68880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68880__$1,(4),ch);
} else {
if((state_val_68881 === (11))){
var inst_68857 = (state_68880[(7)]);
var inst_68867 = (state_68880[(2)]);
var state_68880__$1 = state_68880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68880__$1,(8),inst_68867,inst_68857);
} else {
if((state_val_68881 === (9))){
var state_68880__$1 = state_68880;
var statearr_68891_68912 = state_68880__$1;
(statearr_68891_68912[(2)] = tc);

(statearr_68891_68912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (5))){
var inst_68860 = cljs.core.async.close_BANG_.call(null,tc);
var inst_68861 = cljs.core.async.close_BANG_.call(null,fc);
var state_68880__$1 = (function (){var statearr_68892 = state_68880;
(statearr_68892[(8)] = inst_68860);

return statearr_68892;
})();
var statearr_68893_68913 = state_68880__$1;
(statearr_68893_68913[(2)] = inst_68861);

(statearr_68893_68913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (14))){
var inst_68874 = (state_68880[(2)]);
var state_68880__$1 = state_68880;
var statearr_68894_68914 = state_68880__$1;
(statearr_68894_68914[(2)] = inst_68874);

(statearr_68894_68914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (10))){
var state_68880__$1 = state_68880;
var statearr_68895_68915 = state_68880__$1;
(statearr_68895_68915[(2)] = fc);

(statearr_68895_68915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68881 === (8))){
var inst_68869 = (state_68880[(2)]);
var state_68880__$1 = state_68880;
if(cljs.core.truth_(inst_68869)){
var statearr_68896_68916 = state_68880__$1;
(statearr_68896_68916[(1)] = (12));

} else {
var statearr_68897_68917 = state_68880__$1;
(statearr_68897_68917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___68903,tc,fc))
;
return ((function (switch__68363__auto__,c__68453__auto___68903,tc,fc){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_68898 = [null,null,null,null,null,null,null,null,null];
(statearr_68898[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_68898[(1)] = (1));

return statearr_68898;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_68880){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68899){if((e68899 instanceof Object)){
var ex__68367__auto__ = e68899;
var statearr_68900_68918 = state_68880;
(statearr_68900_68918[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68919 = state_68880;
state_68880 = G__68919;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_68880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_68880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___68903,tc,fc))
})();
var state__68455__auto__ = (function (){var statearr_68901 = f__68454__auto__.call(null);
(statearr_68901[(6)] = c__68453__auto___68903);

return statearr_68901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___68903,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__){
return (function (state_68940){
var state_val_68941 = (state_68940[(1)]);
if((state_val_68941 === (7))){
var inst_68936 = (state_68940[(2)]);
var state_68940__$1 = state_68940;
var statearr_68942_68960 = state_68940__$1;
(statearr_68942_68960[(2)] = inst_68936);

(statearr_68942_68960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68941 === (1))){
var inst_68920 = init;
var state_68940__$1 = (function (){var statearr_68943 = state_68940;
(statearr_68943[(7)] = inst_68920);

return statearr_68943;
})();
var statearr_68944_68961 = state_68940__$1;
(statearr_68944_68961[(2)] = null);

(statearr_68944_68961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68941 === (4))){
var inst_68923 = (state_68940[(8)]);
var inst_68923__$1 = (state_68940[(2)]);
var inst_68924 = (inst_68923__$1 == null);
var state_68940__$1 = (function (){var statearr_68945 = state_68940;
(statearr_68945[(8)] = inst_68923__$1);

return statearr_68945;
})();
if(cljs.core.truth_(inst_68924)){
var statearr_68946_68962 = state_68940__$1;
(statearr_68946_68962[(1)] = (5));

} else {
var statearr_68947_68963 = state_68940__$1;
(statearr_68947_68963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68941 === (6))){
var inst_68923 = (state_68940[(8)]);
var inst_68927 = (state_68940[(9)]);
var inst_68920 = (state_68940[(7)]);
var inst_68927__$1 = f.call(null,inst_68920,inst_68923);
var inst_68928 = cljs.core.reduced_QMARK_.call(null,inst_68927__$1);
var state_68940__$1 = (function (){var statearr_68948 = state_68940;
(statearr_68948[(9)] = inst_68927__$1);

return statearr_68948;
})();
if(inst_68928){
var statearr_68949_68964 = state_68940__$1;
(statearr_68949_68964[(1)] = (8));

} else {
var statearr_68950_68965 = state_68940__$1;
(statearr_68950_68965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68941 === (3))){
var inst_68938 = (state_68940[(2)]);
var state_68940__$1 = state_68940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68940__$1,inst_68938);
} else {
if((state_val_68941 === (2))){
var state_68940__$1 = state_68940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68940__$1,(4),ch);
} else {
if((state_val_68941 === (9))){
var inst_68927 = (state_68940[(9)]);
var inst_68920 = inst_68927;
var state_68940__$1 = (function (){var statearr_68951 = state_68940;
(statearr_68951[(7)] = inst_68920);

return statearr_68951;
})();
var statearr_68952_68966 = state_68940__$1;
(statearr_68952_68966[(2)] = null);

(statearr_68952_68966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68941 === (5))){
var inst_68920 = (state_68940[(7)]);
var state_68940__$1 = state_68940;
var statearr_68953_68967 = state_68940__$1;
(statearr_68953_68967[(2)] = inst_68920);

(statearr_68953_68967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68941 === (10))){
var inst_68934 = (state_68940[(2)]);
var state_68940__$1 = state_68940;
var statearr_68954_68968 = state_68940__$1;
(statearr_68954_68968[(2)] = inst_68934);

(statearr_68954_68968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68941 === (8))){
var inst_68927 = (state_68940[(9)]);
var inst_68930 = cljs.core.deref.call(null,inst_68927);
var state_68940__$1 = state_68940;
var statearr_68955_68969 = state_68940__$1;
(statearr_68955_68969[(2)] = inst_68930);

(statearr_68955_68969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto__))
;
return ((function (switch__68363__auto__,c__68453__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__68364__auto__ = null;
var cljs$core$async$reduce_$_state_machine__68364__auto____0 = (function (){
var statearr_68956 = [null,null,null,null,null,null,null,null,null,null];
(statearr_68956[(0)] = cljs$core$async$reduce_$_state_machine__68364__auto__);

(statearr_68956[(1)] = (1));

return statearr_68956;
});
var cljs$core$async$reduce_$_state_machine__68364__auto____1 = (function (state_68940){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68957){if((e68957 instanceof Object)){
var ex__68367__auto__ = e68957;
var statearr_68958_68970 = state_68940;
(statearr_68958_68970[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68971 = state_68940;
state_68940 = G__68971;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__68364__auto__ = function(state_68940){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__68364__auto____1.call(this,state_68940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__68364__auto____0;
cljs$core$async$reduce_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__68364__auto____1;
return cljs$core$async$reduce_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_68959 = f__68454__auto__.call(null);
(statearr_68959[(6)] = c__68453__auto__);

return statearr_68959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__))
);

return c__68453__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__,f__$1){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__,f__$1){
return (function (state_68977){
var state_val_68978 = (state_68977[(1)]);
if((state_val_68978 === (1))){
var inst_68972 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_68977__$1 = state_68977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68977__$1,(2),inst_68972);
} else {
if((state_val_68978 === (2))){
var inst_68974 = (state_68977[(2)]);
var inst_68975 = f__$1.call(null,inst_68974);
var state_68977__$1 = state_68977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68977__$1,inst_68975);
} else {
return null;
}
}
});})(c__68453__auto__,f__$1))
;
return ((function (switch__68363__auto__,c__68453__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__68364__auto__ = null;
var cljs$core$async$transduce_$_state_machine__68364__auto____0 = (function (){
var statearr_68979 = [null,null,null,null,null,null,null];
(statearr_68979[(0)] = cljs$core$async$transduce_$_state_machine__68364__auto__);

(statearr_68979[(1)] = (1));

return statearr_68979;
});
var cljs$core$async$transduce_$_state_machine__68364__auto____1 = (function (state_68977){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_68977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e68980){if((e68980 instanceof Object)){
var ex__68367__auto__ = e68980;
var statearr_68981_68983 = state_68977;
(statearr_68981_68983[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68984 = state_68977;
state_68977 = G__68984;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__68364__auto__ = function(state_68977){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__68364__auto____1.call(this,state_68977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__68364__auto____0;
cljs$core$async$transduce_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__68364__auto____1;
return cljs$core$async$transduce_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,f__$1))
})();
var state__68455__auto__ = (function (){var statearr_68982 = f__68454__auto__.call(null);
(statearr_68982[(6)] = c__68453__auto__);

return statearr_68982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__,f__$1))
);

return c__68453__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__68986 = arguments.length;
switch (G__68986) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__){
return (function (state_69011){
var state_val_69012 = (state_69011[(1)]);
if((state_val_69012 === (7))){
var inst_68993 = (state_69011[(2)]);
var state_69011__$1 = state_69011;
var statearr_69013_69034 = state_69011__$1;
(statearr_69013_69034[(2)] = inst_68993);

(statearr_69013_69034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (1))){
var inst_68987 = cljs.core.seq.call(null,coll);
var inst_68988 = inst_68987;
var state_69011__$1 = (function (){var statearr_69014 = state_69011;
(statearr_69014[(7)] = inst_68988);

return statearr_69014;
})();
var statearr_69015_69035 = state_69011__$1;
(statearr_69015_69035[(2)] = null);

(statearr_69015_69035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (4))){
var inst_68988 = (state_69011[(7)]);
var inst_68991 = cljs.core.first.call(null,inst_68988);
var state_69011__$1 = state_69011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69011__$1,(7),ch,inst_68991);
} else {
if((state_val_69012 === (13))){
var inst_69005 = (state_69011[(2)]);
var state_69011__$1 = state_69011;
var statearr_69016_69036 = state_69011__$1;
(statearr_69016_69036[(2)] = inst_69005);

(statearr_69016_69036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (6))){
var inst_68996 = (state_69011[(2)]);
var state_69011__$1 = state_69011;
if(cljs.core.truth_(inst_68996)){
var statearr_69017_69037 = state_69011__$1;
(statearr_69017_69037[(1)] = (8));

} else {
var statearr_69018_69038 = state_69011__$1;
(statearr_69018_69038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (3))){
var inst_69009 = (state_69011[(2)]);
var state_69011__$1 = state_69011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69011__$1,inst_69009);
} else {
if((state_val_69012 === (12))){
var state_69011__$1 = state_69011;
var statearr_69019_69039 = state_69011__$1;
(statearr_69019_69039[(2)] = null);

(statearr_69019_69039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (2))){
var inst_68988 = (state_69011[(7)]);
var state_69011__$1 = state_69011;
if(cljs.core.truth_(inst_68988)){
var statearr_69020_69040 = state_69011__$1;
(statearr_69020_69040[(1)] = (4));

} else {
var statearr_69021_69041 = state_69011__$1;
(statearr_69021_69041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (11))){
var inst_69002 = cljs.core.async.close_BANG_.call(null,ch);
var state_69011__$1 = state_69011;
var statearr_69022_69042 = state_69011__$1;
(statearr_69022_69042[(2)] = inst_69002);

(statearr_69022_69042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (9))){
var state_69011__$1 = state_69011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69023_69043 = state_69011__$1;
(statearr_69023_69043[(1)] = (11));

} else {
var statearr_69024_69044 = state_69011__$1;
(statearr_69024_69044[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (5))){
var inst_68988 = (state_69011[(7)]);
var state_69011__$1 = state_69011;
var statearr_69025_69045 = state_69011__$1;
(statearr_69025_69045[(2)] = inst_68988);

(statearr_69025_69045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (10))){
var inst_69007 = (state_69011[(2)]);
var state_69011__$1 = state_69011;
var statearr_69026_69046 = state_69011__$1;
(statearr_69026_69046[(2)] = inst_69007);

(statearr_69026_69046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69012 === (8))){
var inst_68988 = (state_69011[(7)]);
var inst_68998 = cljs.core.next.call(null,inst_68988);
var inst_68988__$1 = inst_68998;
var state_69011__$1 = (function (){var statearr_69027 = state_69011;
(statearr_69027[(7)] = inst_68988__$1);

return statearr_69027;
})();
var statearr_69028_69047 = state_69011__$1;
(statearr_69028_69047[(2)] = null);

(statearr_69028_69047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto__))
;
return ((function (switch__68363__auto__,c__68453__auto__){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_69029 = [null,null,null,null,null,null,null,null];
(statearr_69029[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_69029[(1)] = (1));

return statearr_69029;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_69011){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_69011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e69030){if((e69030 instanceof Object)){
var ex__68367__auto__ = e69030;
var statearr_69031_69048 = state_69011;
(statearr_69031_69048[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69049 = state_69011;
state_69011 = G__69049;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_69011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_69011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_69032 = f__68454__auto__.call(null);
(statearr_69032[(6)] = c__68453__auto__);

return statearr_69032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__))
);

return c__68453__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__41535__auto__ = (((_ == null))?null:_);
var m__41536__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,_);
} else {
var m__41536__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__41535__auto__ = (((m == null))?null:m);
var m__41536__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__41536__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__41535__auto__ = (((m == null))?null:m);
var m__41536__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,m,ch);
} else {
var m__41536__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__41535__auto__ = (((m == null))?null:m);
var m__41536__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,m);
} else {
var m__41536__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async69050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69050 = (function (ch,cs,meta69051){
this.ch = ch;
this.cs = cs;
this.meta69051 = meta69051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_69052,meta69051__$1){
var self__ = this;
var _69052__$1 = this;
return (new cljs.core.async.t_cljs$core$async69050(self__.ch,self__.cs,meta69051__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async69050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_69052){
var self__ = this;
var _69052__$1 = this;
return self__.meta69051;
});})(cs))
;

cljs.core.async.t_cljs$core$async69050.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async69050.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69050.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69050.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69050.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69050.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69051","meta69051",285734814,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async69050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69050";

cljs.core.async.t_cljs$core$async69050.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async69050");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async69050 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async69050(ch__$1,cs__$1,meta69051){
return (new cljs.core.async.t_cljs$core$async69050(ch__$1,cs__$1,meta69051));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async69050(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__68453__auto___69272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___69272,cs,m,dchan,dctr,done){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___69272,cs,m,dchan,dctr,done){
return (function (state_69187){
var state_val_69188 = (state_69187[(1)]);
if((state_val_69188 === (7))){
var inst_69183 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69189_69273 = state_69187__$1;
(statearr_69189_69273[(2)] = inst_69183);

(statearr_69189_69273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (20))){
var inst_69086 = (state_69187[(7)]);
var inst_69098 = cljs.core.first.call(null,inst_69086);
var inst_69099 = cljs.core.nth.call(null,inst_69098,(0),null);
var inst_69100 = cljs.core.nth.call(null,inst_69098,(1),null);
var state_69187__$1 = (function (){var statearr_69190 = state_69187;
(statearr_69190[(8)] = inst_69099);

return statearr_69190;
})();
if(cljs.core.truth_(inst_69100)){
var statearr_69191_69274 = state_69187__$1;
(statearr_69191_69274[(1)] = (22));

} else {
var statearr_69192_69275 = state_69187__$1;
(statearr_69192_69275[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (27))){
var inst_69130 = (state_69187[(9)]);
var inst_69055 = (state_69187[(10)]);
var inst_69128 = (state_69187[(11)]);
var inst_69135 = (state_69187[(12)]);
var inst_69135__$1 = cljs.core._nth.call(null,inst_69128,inst_69130);
var inst_69136 = cljs.core.async.put_BANG_.call(null,inst_69135__$1,inst_69055,done);
var state_69187__$1 = (function (){var statearr_69193 = state_69187;
(statearr_69193[(12)] = inst_69135__$1);

return statearr_69193;
})();
if(cljs.core.truth_(inst_69136)){
var statearr_69194_69276 = state_69187__$1;
(statearr_69194_69276[(1)] = (30));

} else {
var statearr_69195_69277 = state_69187__$1;
(statearr_69195_69277[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (1))){
var state_69187__$1 = state_69187;
var statearr_69196_69278 = state_69187__$1;
(statearr_69196_69278[(2)] = null);

(statearr_69196_69278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (24))){
var inst_69086 = (state_69187[(7)]);
var inst_69105 = (state_69187[(2)]);
var inst_69106 = cljs.core.next.call(null,inst_69086);
var inst_69064 = inst_69106;
var inst_69065 = null;
var inst_69066 = (0);
var inst_69067 = (0);
var state_69187__$1 = (function (){var statearr_69197 = state_69187;
(statearr_69197[(13)] = inst_69066);

(statearr_69197[(14)] = inst_69105);

(statearr_69197[(15)] = inst_69065);

(statearr_69197[(16)] = inst_69064);

(statearr_69197[(17)] = inst_69067);

return statearr_69197;
})();
var statearr_69198_69279 = state_69187__$1;
(statearr_69198_69279[(2)] = null);

(statearr_69198_69279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (39))){
var state_69187__$1 = state_69187;
var statearr_69202_69280 = state_69187__$1;
(statearr_69202_69280[(2)] = null);

(statearr_69202_69280[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (4))){
var inst_69055 = (state_69187[(10)]);
var inst_69055__$1 = (state_69187[(2)]);
var inst_69056 = (inst_69055__$1 == null);
var state_69187__$1 = (function (){var statearr_69203 = state_69187;
(statearr_69203[(10)] = inst_69055__$1);

return statearr_69203;
})();
if(cljs.core.truth_(inst_69056)){
var statearr_69204_69281 = state_69187__$1;
(statearr_69204_69281[(1)] = (5));

} else {
var statearr_69205_69282 = state_69187__$1;
(statearr_69205_69282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (15))){
var inst_69066 = (state_69187[(13)]);
var inst_69065 = (state_69187[(15)]);
var inst_69064 = (state_69187[(16)]);
var inst_69067 = (state_69187[(17)]);
var inst_69082 = (state_69187[(2)]);
var inst_69083 = (inst_69067 + (1));
var tmp69199 = inst_69066;
var tmp69200 = inst_69065;
var tmp69201 = inst_69064;
var inst_69064__$1 = tmp69201;
var inst_69065__$1 = tmp69200;
var inst_69066__$1 = tmp69199;
var inst_69067__$1 = inst_69083;
var state_69187__$1 = (function (){var statearr_69206 = state_69187;
(statearr_69206[(13)] = inst_69066__$1);

(statearr_69206[(15)] = inst_69065__$1);

(statearr_69206[(16)] = inst_69064__$1);

(statearr_69206[(18)] = inst_69082);

(statearr_69206[(17)] = inst_69067__$1);

return statearr_69206;
})();
var statearr_69207_69283 = state_69187__$1;
(statearr_69207_69283[(2)] = null);

(statearr_69207_69283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (21))){
var inst_69109 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69211_69284 = state_69187__$1;
(statearr_69211_69284[(2)] = inst_69109);

(statearr_69211_69284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (31))){
var inst_69135 = (state_69187[(12)]);
var inst_69139 = done.call(null,null);
var inst_69140 = cljs.core.async.untap_STAR_.call(null,m,inst_69135);
var state_69187__$1 = (function (){var statearr_69212 = state_69187;
(statearr_69212[(19)] = inst_69139);

return statearr_69212;
})();
var statearr_69213_69285 = state_69187__$1;
(statearr_69213_69285[(2)] = inst_69140);

(statearr_69213_69285[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (32))){
var inst_69130 = (state_69187[(9)]);
var inst_69129 = (state_69187[(20)]);
var inst_69128 = (state_69187[(11)]);
var inst_69127 = (state_69187[(21)]);
var inst_69142 = (state_69187[(2)]);
var inst_69143 = (inst_69130 + (1));
var tmp69208 = inst_69129;
var tmp69209 = inst_69128;
var tmp69210 = inst_69127;
var inst_69127__$1 = tmp69210;
var inst_69128__$1 = tmp69209;
var inst_69129__$1 = tmp69208;
var inst_69130__$1 = inst_69143;
var state_69187__$1 = (function (){var statearr_69214 = state_69187;
(statearr_69214[(9)] = inst_69130__$1);

(statearr_69214[(20)] = inst_69129__$1);

(statearr_69214[(11)] = inst_69128__$1);

(statearr_69214[(22)] = inst_69142);

(statearr_69214[(21)] = inst_69127__$1);

return statearr_69214;
})();
var statearr_69215_69286 = state_69187__$1;
(statearr_69215_69286[(2)] = null);

(statearr_69215_69286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (40))){
var inst_69155 = (state_69187[(23)]);
var inst_69159 = done.call(null,null);
var inst_69160 = cljs.core.async.untap_STAR_.call(null,m,inst_69155);
var state_69187__$1 = (function (){var statearr_69216 = state_69187;
(statearr_69216[(24)] = inst_69159);

return statearr_69216;
})();
var statearr_69217_69287 = state_69187__$1;
(statearr_69217_69287[(2)] = inst_69160);

(statearr_69217_69287[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (33))){
var inst_69146 = (state_69187[(25)]);
var inst_69148 = cljs.core.chunked_seq_QMARK_.call(null,inst_69146);
var state_69187__$1 = state_69187;
if(inst_69148){
var statearr_69218_69288 = state_69187__$1;
(statearr_69218_69288[(1)] = (36));

} else {
var statearr_69219_69289 = state_69187__$1;
(statearr_69219_69289[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (13))){
var inst_69076 = (state_69187[(26)]);
var inst_69079 = cljs.core.async.close_BANG_.call(null,inst_69076);
var state_69187__$1 = state_69187;
var statearr_69220_69290 = state_69187__$1;
(statearr_69220_69290[(2)] = inst_69079);

(statearr_69220_69290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (22))){
var inst_69099 = (state_69187[(8)]);
var inst_69102 = cljs.core.async.close_BANG_.call(null,inst_69099);
var state_69187__$1 = state_69187;
var statearr_69221_69291 = state_69187__$1;
(statearr_69221_69291[(2)] = inst_69102);

(statearr_69221_69291[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (36))){
var inst_69146 = (state_69187[(25)]);
var inst_69150 = cljs.core.chunk_first.call(null,inst_69146);
var inst_69151 = cljs.core.chunk_rest.call(null,inst_69146);
var inst_69152 = cljs.core.count.call(null,inst_69150);
var inst_69127 = inst_69151;
var inst_69128 = inst_69150;
var inst_69129 = inst_69152;
var inst_69130 = (0);
var state_69187__$1 = (function (){var statearr_69222 = state_69187;
(statearr_69222[(9)] = inst_69130);

(statearr_69222[(20)] = inst_69129);

(statearr_69222[(11)] = inst_69128);

(statearr_69222[(21)] = inst_69127);

return statearr_69222;
})();
var statearr_69223_69292 = state_69187__$1;
(statearr_69223_69292[(2)] = null);

(statearr_69223_69292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (41))){
var inst_69146 = (state_69187[(25)]);
var inst_69162 = (state_69187[(2)]);
var inst_69163 = cljs.core.next.call(null,inst_69146);
var inst_69127 = inst_69163;
var inst_69128 = null;
var inst_69129 = (0);
var inst_69130 = (0);
var state_69187__$1 = (function (){var statearr_69224 = state_69187;
(statearr_69224[(9)] = inst_69130);

(statearr_69224[(20)] = inst_69129);

(statearr_69224[(11)] = inst_69128);

(statearr_69224[(21)] = inst_69127);

(statearr_69224[(27)] = inst_69162);

return statearr_69224;
})();
var statearr_69225_69293 = state_69187__$1;
(statearr_69225_69293[(2)] = null);

(statearr_69225_69293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (43))){
var state_69187__$1 = state_69187;
var statearr_69226_69294 = state_69187__$1;
(statearr_69226_69294[(2)] = null);

(statearr_69226_69294[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (29))){
var inst_69171 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69227_69295 = state_69187__$1;
(statearr_69227_69295[(2)] = inst_69171);

(statearr_69227_69295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (44))){
var inst_69180 = (state_69187[(2)]);
var state_69187__$1 = (function (){var statearr_69228 = state_69187;
(statearr_69228[(28)] = inst_69180);

return statearr_69228;
})();
var statearr_69229_69296 = state_69187__$1;
(statearr_69229_69296[(2)] = null);

(statearr_69229_69296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (6))){
var inst_69119 = (state_69187[(29)]);
var inst_69118 = cljs.core.deref.call(null,cs);
var inst_69119__$1 = cljs.core.keys.call(null,inst_69118);
var inst_69120 = cljs.core.count.call(null,inst_69119__$1);
var inst_69121 = cljs.core.reset_BANG_.call(null,dctr,inst_69120);
var inst_69126 = cljs.core.seq.call(null,inst_69119__$1);
var inst_69127 = inst_69126;
var inst_69128 = null;
var inst_69129 = (0);
var inst_69130 = (0);
var state_69187__$1 = (function (){var statearr_69230 = state_69187;
(statearr_69230[(9)] = inst_69130);

(statearr_69230[(20)] = inst_69129);

(statearr_69230[(30)] = inst_69121);

(statearr_69230[(11)] = inst_69128);

(statearr_69230[(29)] = inst_69119__$1);

(statearr_69230[(21)] = inst_69127);

return statearr_69230;
})();
var statearr_69231_69297 = state_69187__$1;
(statearr_69231_69297[(2)] = null);

(statearr_69231_69297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (28))){
var inst_69146 = (state_69187[(25)]);
var inst_69127 = (state_69187[(21)]);
var inst_69146__$1 = cljs.core.seq.call(null,inst_69127);
var state_69187__$1 = (function (){var statearr_69232 = state_69187;
(statearr_69232[(25)] = inst_69146__$1);

return statearr_69232;
})();
if(inst_69146__$1){
var statearr_69233_69298 = state_69187__$1;
(statearr_69233_69298[(1)] = (33));

} else {
var statearr_69234_69299 = state_69187__$1;
(statearr_69234_69299[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (25))){
var inst_69130 = (state_69187[(9)]);
var inst_69129 = (state_69187[(20)]);
var inst_69132 = (inst_69130 < inst_69129);
var inst_69133 = inst_69132;
var state_69187__$1 = state_69187;
if(cljs.core.truth_(inst_69133)){
var statearr_69235_69300 = state_69187__$1;
(statearr_69235_69300[(1)] = (27));

} else {
var statearr_69236_69301 = state_69187__$1;
(statearr_69236_69301[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (34))){
var state_69187__$1 = state_69187;
var statearr_69237_69302 = state_69187__$1;
(statearr_69237_69302[(2)] = null);

(statearr_69237_69302[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (17))){
var state_69187__$1 = state_69187;
var statearr_69238_69303 = state_69187__$1;
(statearr_69238_69303[(2)] = null);

(statearr_69238_69303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (3))){
var inst_69185 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69187__$1,inst_69185);
} else {
if((state_val_69188 === (12))){
var inst_69114 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69239_69304 = state_69187__$1;
(statearr_69239_69304[(2)] = inst_69114);

(statearr_69239_69304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (2))){
var state_69187__$1 = state_69187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69187__$1,(4),ch);
} else {
if((state_val_69188 === (23))){
var state_69187__$1 = state_69187;
var statearr_69240_69305 = state_69187__$1;
(statearr_69240_69305[(2)] = null);

(statearr_69240_69305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (35))){
var inst_69169 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69241_69306 = state_69187__$1;
(statearr_69241_69306[(2)] = inst_69169);

(statearr_69241_69306[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (19))){
var inst_69086 = (state_69187[(7)]);
var inst_69090 = cljs.core.chunk_first.call(null,inst_69086);
var inst_69091 = cljs.core.chunk_rest.call(null,inst_69086);
var inst_69092 = cljs.core.count.call(null,inst_69090);
var inst_69064 = inst_69091;
var inst_69065 = inst_69090;
var inst_69066 = inst_69092;
var inst_69067 = (0);
var state_69187__$1 = (function (){var statearr_69242 = state_69187;
(statearr_69242[(13)] = inst_69066);

(statearr_69242[(15)] = inst_69065);

(statearr_69242[(16)] = inst_69064);

(statearr_69242[(17)] = inst_69067);

return statearr_69242;
})();
var statearr_69243_69307 = state_69187__$1;
(statearr_69243_69307[(2)] = null);

(statearr_69243_69307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (11))){
var inst_69086 = (state_69187[(7)]);
var inst_69064 = (state_69187[(16)]);
var inst_69086__$1 = cljs.core.seq.call(null,inst_69064);
var state_69187__$1 = (function (){var statearr_69244 = state_69187;
(statearr_69244[(7)] = inst_69086__$1);

return statearr_69244;
})();
if(inst_69086__$1){
var statearr_69245_69308 = state_69187__$1;
(statearr_69245_69308[(1)] = (16));

} else {
var statearr_69246_69309 = state_69187__$1;
(statearr_69246_69309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (9))){
var inst_69116 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69247_69310 = state_69187__$1;
(statearr_69247_69310[(2)] = inst_69116);

(statearr_69247_69310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (5))){
var inst_69062 = cljs.core.deref.call(null,cs);
var inst_69063 = cljs.core.seq.call(null,inst_69062);
var inst_69064 = inst_69063;
var inst_69065 = null;
var inst_69066 = (0);
var inst_69067 = (0);
var state_69187__$1 = (function (){var statearr_69248 = state_69187;
(statearr_69248[(13)] = inst_69066);

(statearr_69248[(15)] = inst_69065);

(statearr_69248[(16)] = inst_69064);

(statearr_69248[(17)] = inst_69067);

return statearr_69248;
})();
var statearr_69249_69311 = state_69187__$1;
(statearr_69249_69311[(2)] = null);

(statearr_69249_69311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (14))){
var state_69187__$1 = state_69187;
var statearr_69250_69312 = state_69187__$1;
(statearr_69250_69312[(2)] = null);

(statearr_69250_69312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (45))){
var inst_69177 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69251_69313 = state_69187__$1;
(statearr_69251_69313[(2)] = inst_69177);

(statearr_69251_69313[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (26))){
var inst_69119 = (state_69187[(29)]);
var inst_69173 = (state_69187[(2)]);
var inst_69174 = cljs.core.seq.call(null,inst_69119);
var state_69187__$1 = (function (){var statearr_69252 = state_69187;
(statearr_69252[(31)] = inst_69173);

return statearr_69252;
})();
if(inst_69174){
var statearr_69253_69314 = state_69187__$1;
(statearr_69253_69314[(1)] = (42));

} else {
var statearr_69254_69315 = state_69187__$1;
(statearr_69254_69315[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (16))){
var inst_69086 = (state_69187[(7)]);
var inst_69088 = cljs.core.chunked_seq_QMARK_.call(null,inst_69086);
var state_69187__$1 = state_69187;
if(inst_69088){
var statearr_69255_69316 = state_69187__$1;
(statearr_69255_69316[(1)] = (19));

} else {
var statearr_69256_69317 = state_69187__$1;
(statearr_69256_69317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (38))){
var inst_69166 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69257_69318 = state_69187__$1;
(statearr_69257_69318[(2)] = inst_69166);

(statearr_69257_69318[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (30))){
var state_69187__$1 = state_69187;
var statearr_69258_69319 = state_69187__$1;
(statearr_69258_69319[(2)] = null);

(statearr_69258_69319[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (10))){
var inst_69065 = (state_69187[(15)]);
var inst_69067 = (state_69187[(17)]);
var inst_69075 = cljs.core._nth.call(null,inst_69065,inst_69067);
var inst_69076 = cljs.core.nth.call(null,inst_69075,(0),null);
var inst_69077 = cljs.core.nth.call(null,inst_69075,(1),null);
var state_69187__$1 = (function (){var statearr_69259 = state_69187;
(statearr_69259[(26)] = inst_69076);

return statearr_69259;
})();
if(cljs.core.truth_(inst_69077)){
var statearr_69260_69320 = state_69187__$1;
(statearr_69260_69320[(1)] = (13));

} else {
var statearr_69261_69321 = state_69187__$1;
(statearr_69261_69321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (18))){
var inst_69112 = (state_69187[(2)]);
var state_69187__$1 = state_69187;
var statearr_69262_69322 = state_69187__$1;
(statearr_69262_69322[(2)] = inst_69112);

(statearr_69262_69322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (42))){
var state_69187__$1 = state_69187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69187__$1,(45),dchan);
} else {
if((state_val_69188 === (37))){
var inst_69055 = (state_69187[(10)]);
var inst_69146 = (state_69187[(25)]);
var inst_69155 = (state_69187[(23)]);
var inst_69155__$1 = cljs.core.first.call(null,inst_69146);
var inst_69156 = cljs.core.async.put_BANG_.call(null,inst_69155__$1,inst_69055,done);
var state_69187__$1 = (function (){var statearr_69263 = state_69187;
(statearr_69263[(23)] = inst_69155__$1);

return statearr_69263;
})();
if(cljs.core.truth_(inst_69156)){
var statearr_69264_69323 = state_69187__$1;
(statearr_69264_69323[(1)] = (39));

} else {
var statearr_69265_69324 = state_69187__$1;
(statearr_69265_69324[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69188 === (8))){
var inst_69066 = (state_69187[(13)]);
var inst_69067 = (state_69187[(17)]);
var inst_69069 = (inst_69067 < inst_69066);
var inst_69070 = inst_69069;
var state_69187__$1 = state_69187;
if(cljs.core.truth_(inst_69070)){
var statearr_69266_69325 = state_69187__$1;
(statearr_69266_69325[(1)] = (10));

} else {
var statearr_69267_69326 = state_69187__$1;
(statearr_69267_69326[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___69272,cs,m,dchan,dctr,done))
;
return ((function (switch__68363__auto__,c__68453__auto___69272,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__68364__auto__ = null;
var cljs$core$async$mult_$_state_machine__68364__auto____0 = (function (){
var statearr_69268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69268[(0)] = cljs$core$async$mult_$_state_machine__68364__auto__);

(statearr_69268[(1)] = (1));

return statearr_69268;
});
var cljs$core$async$mult_$_state_machine__68364__auto____1 = (function (state_69187){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_69187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e69269){if((e69269 instanceof Object)){
var ex__68367__auto__ = e69269;
var statearr_69270_69327 = state_69187;
(statearr_69270_69327[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69328 = state_69187;
state_69187 = G__69328;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__68364__auto__ = function(state_69187){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__68364__auto____1.call(this,state_69187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__68364__auto____0;
cljs$core$async$mult_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__68364__auto____1;
return cljs$core$async$mult_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___69272,cs,m,dchan,dctr,done))
})();
var state__68455__auto__ = (function (){var statearr_69271 = f__68454__auto__.call(null);
(statearr_69271[(6)] = c__68453__auto___69272);

return statearr_69271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___69272,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__69330 = arguments.length;
switch (G__69330) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__41535__auto__ = (((m == null))?null:m);
var m__41536__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,m,ch);
} else {
var m__41536__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__41535__auto__ = (((m == null))?null:m);
var m__41536__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,m,ch);
} else {
var m__41536__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__41535__auto__ = (((m == null))?null:m);
var m__41536__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,m);
} else {
var m__41536__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__41535__auto__ = (((m == null))?null:m);
var m__41536__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,m,state_map);
} else {
var m__41536__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__41535__auto__ = (((m == null))?null:m);
var m__41536__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,m,mode);
} else {
var m__41536__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42181__auto__ = [];
var len__42174__auto___69342 = arguments.length;
var i__42175__auto___69343 = (0);
while(true){
if((i__42175__auto___69343 < len__42174__auto___69342)){
args__42181__auto__.push((arguments[i__42175__auto___69343]));

var G__69344 = (i__42175__auto___69343 + (1));
i__42175__auto___69343 = G__69344;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((3) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42182__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__69336){
var map__69337 = p__69336;
var map__69337__$1 = ((((!((map__69337 == null)))?((((map__69337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69337):map__69337);
var opts = map__69337__$1;
var statearr_69339_69345 = state;
(statearr_69339_69345[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__69337,map__69337__$1,opts){
return (function (val){
var statearr_69340_69346 = state;
(statearr_69340_69346[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__69337,map__69337__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_69341_69347 = state;
(statearr_69341_69347[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq69332){
var G__69333 = cljs.core.first.call(null,seq69332);
var seq69332__$1 = cljs.core.next.call(null,seq69332);
var G__69334 = cljs.core.first.call(null,seq69332__$1);
var seq69332__$2 = cljs.core.next.call(null,seq69332__$1);
var G__69335 = cljs.core.first.call(null,seq69332__$2);
var seq69332__$3 = cljs.core.next.call(null,seq69332__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69333,G__69334,G__69335,seq69332__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async69348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69348 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta69349){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta69349 = meta69349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69350,meta69349__$1){
var self__ = this;
var _69350__$1 = this;
return (new cljs.core.async.t_cljs$core$async69348(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta69349__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69350){
var self__ = this;
var _69350__$1 = this;
return self__.meta69349;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta69349","meta69349",21450352,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69348";

cljs.core.async.t_cljs$core$async69348.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async69348");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async69348 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async69348(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta69349){
return (new cljs.core.async.t_cljs$core$async69348(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta69349));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async69348(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__68453__auto___69512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___69512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___69512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_69452){
var state_val_69453 = (state_69452[(1)]);
if((state_val_69453 === (7))){
var inst_69367 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
var statearr_69454_69513 = state_69452__$1;
(statearr_69454_69513[(2)] = inst_69367);

(statearr_69454_69513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (20))){
var inst_69379 = (state_69452[(7)]);
var state_69452__$1 = state_69452;
var statearr_69455_69514 = state_69452__$1;
(statearr_69455_69514[(2)] = inst_69379);

(statearr_69455_69514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (27))){
var state_69452__$1 = state_69452;
var statearr_69456_69515 = state_69452__$1;
(statearr_69456_69515[(2)] = null);

(statearr_69456_69515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (1))){
var inst_69354 = (state_69452[(8)]);
var inst_69354__$1 = calc_state.call(null);
var inst_69356 = (inst_69354__$1 == null);
var inst_69357 = cljs.core.not.call(null,inst_69356);
var state_69452__$1 = (function (){var statearr_69457 = state_69452;
(statearr_69457[(8)] = inst_69354__$1);

return statearr_69457;
})();
if(inst_69357){
var statearr_69458_69516 = state_69452__$1;
(statearr_69458_69516[(1)] = (2));

} else {
var statearr_69459_69517 = state_69452__$1;
(statearr_69459_69517[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (24))){
var inst_69403 = (state_69452[(9)]);
var inst_69426 = (state_69452[(10)]);
var inst_69412 = (state_69452[(11)]);
var inst_69426__$1 = inst_69403.call(null,inst_69412);
var state_69452__$1 = (function (){var statearr_69460 = state_69452;
(statearr_69460[(10)] = inst_69426__$1);

return statearr_69460;
})();
if(cljs.core.truth_(inst_69426__$1)){
var statearr_69461_69518 = state_69452__$1;
(statearr_69461_69518[(1)] = (29));

} else {
var statearr_69462_69519 = state_69452__$1;
(statearr_69462_69519[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (4))){
var inst_69370 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
if(cljs.core.truth_(inst_69370)){
var statearr_69463_69520 = state_69452__$1;
(statearr_69463_69520[(1)] = (8));

} else {
var statearr_69464_69521 = state_69452__$1;
(statearr_69464_69521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (15))){
var inst_69397 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
if(cljs.core.truth_(inst_69397)){
var statearr_69465_69522 = state_69452__$1;
(statearr_69465_69522[(1)] = (19));

} else {
var statearr_69466_69523 = state_69452__$1;
(statearr_69466_69523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (21))){
var inst_69402 = (state_69452[(12)]);
var inst_69402__$1 = (state_69452[(2)]);
var inst_69403 = cljs.core.get.call(null,inst_69402__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69404 = cljs.core.get.call(null,inst_69402__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69405 = cljs.core.get.call(null,inst_69402__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_69452__$1 = (function (){var statearr_69467 = state_69452;
(statearr_69467[(9)] = inst_69403);

(statearr_69467[(13)] = inst_69404);

(statearr_69467[(12)] = inst_69402__$1);

return statearr_69467;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_69452__$1,(22),inst_69405);
} else {
if((state_val_69453 === (31))){
var inst_69434 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
if(cljs.core.truth_(inst_69434)){
var statearr_69468_69524 = state_69452__$1;
(statearr_69468_69524[(1)] = (32));

} else {
var statearr_69469_69525 = state_69452__$1;
(statearr_69469_69525[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (32))){
var inst_69411 = (state_69452[(14)]);
var state_69452__$1 = state_69452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69452__$1,(35),out,inst_69411);
} else {
if((state_val_69453 === (33))){
var inst_69402 = (state_69452[(12)]);
var inst_69379 = inst_69402;
var state_69452__$1 = (function (){var statearr_69470 = state_69452;
(statearr_69470[(7)] = inst_69379);

return statearr_69470;
})();
var statearr_69471_69526 = state_69452__$1;
(statearr_69471_69526[(2)] = null);

(statearr_69471_69526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (13))){
var inst_69379 = (state_69452[(7)]);
var inst_69386 = inst_69379.cljs$lang$protocol_mask$partition0$;
var inst_69387 = (inst_69386 & (64));
var inst_69388 = inst_69379.cljs$core$ISeq$;
var inst_69389 = (cljs.core.PROTOCOL_SENTINEL === inst_69388);
var inst_69390 = (inst_69387) || (inst_69389);
var state_69452__$1 = state_69452;
if(cljs.core.truth_(inst_69390)){
var statearr_69472_69527 = state_69452__$1;
(statearr_69472_69527[(1)] = (16));

} else {
var statearr_69473_69528 = state_69452__$1;
(statearr_69473_69528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (22))){
var inst_69411 = (state_69452[(14)]);
var inst_69412 = (state_69452[(11)]);
var inst_69410 = (state_69452[(2)]);
var inst_69411__$1 = cljs.core.nth.call(null,inst_69410,(0),null);
var inst_69412__$1 = cljs.core.nth.call(null,inst_69410,(1),null);
var inst_69413 = (inst_69411__$1 == null);
var inst_69414 = cljs.core._EQ_.call(null,inst_69412__$1,change);
var inst_69415 = (inst_69413) || (inst_69414);
var state_69452__$1 = (function (){var statearr_69474 = state_69452;
(statearr_69474[(14)] = inst_69411__$1);

(statearr_69474[(11)] = inst_69412__$1);

return statearr_69474;
})();
if(cljs.core.truth_(inst_69415)){
var statearr_69475_69529 = state_69452__$1;
(statearr_69475_69529[(1)] = (23));

} else {
var statearr_69476_69530 = state_69452__$1;
(statearr_69476_69530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (36))){
var inst_69402 = (state_69452[(12)]);
var inst_69379 = inst_69402;
var state_69452__$1 = (function (){var statearr_69477 = state_69452;
(statearr_69477[(7)] = inst_69379);

return statearr_69477;
})();
var statearr_69478_69531 = state_69452__$1;
(statearr_69478_69531[(2)] = null);

(statearr_69478_69531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (29))){
var inst_69426 = (state_69452[(10)]);
var state_69452__$1 = state_69452;
var statearr_69479_69532 = state_69452__$1;
(statearr_69479_69532[(2)] = inst_69426);

(statearr_69479_69532[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (6))){
var state_69452__$1 = state_69452;
var statearr_69480_69533 = state_69452__$1;
(statearr_69480_69533[(2)] = false);

(statearr_69480_69533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (28))){
var inst_69422 = (state_69452[(2)]);
var inst_69423 = calc_state.call(null);
var inst_69379 = inst_69423;
var state_69452__$1 = (function (){var statearr_69481 = state_69452;
(statearr_69481[(15)] = inst_69422);

(statearr_69481[(7)] = inst_69379);

return statearr_69481;
})();
var statearr_69482_69534 = state_69452__$1;
(statearr_69482_69534[(2)] = null);

(statearr_69482_69534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (25))){
var inst_69448 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
var statearr_69483_69535 = state_69452__$1;
(statearr_69483_69535[(2)] = inst_69448);

(statearr_69483_69535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (34))){
var inst_69446 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
var statearr_69484_69536 = state_69452__$1;
(statearr_69484_69536[(2)] = inst_69446);

(statearr_69484_69536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (17))){
var state_69452__$1 = state_69452;
var statearr_69485_69537 = state_69452__$1;
(statearr_69485_69537[(2)] = false);

(statearr_69485_69537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (3))){
var state_69452__$1 = state_69452;
var statearr_69486_69538 = state_69452__$1;
(statearr_69486_69538[(2)] = false);

(statearr_69486_69538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (12))){
var inst_69450 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69452__$1,inst_69450);
} else {
if((state_val_69453 === (2))){
var inst_69354 = (state_69452[(8)]);
var inst_69359 = inst_69354.cljs$lang$protocol_mask$partition0$;
var inst_69360 = (inst_69359 & (64));
var inst_69361 = inst_69354.cljs$core$ISeq$;
var inst_69362 = (cljs.core.PROTOCOL_SENTINEL === inst_69361);
var inst_69363 = (inst_69360) || (inst_69362);
var state_69452__$1 = state_69452;
if(cljs.core.truth_(inst_69363)){
var statearr_69487_69539 = state_69452__$1;
(statearr_69487_69539[(1)] = (5));

} else {
var statearr_69488_69540 = state_69452__$1;
(statearr_69488_69540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (23))){
var inst_69411 = (state_69452[(14)]);
var inst_69417 = (inst_69411 == null);
var state_69452__$1 = state_69452;
if(cljs.core.truth_(inst_69417)){
var statearr_69489_69541 = state_69452__$1;
(statearr_69489_69541[(1)] = (26));

} else {
var statearr_69490_69542 = state_69452__$1;
(statearr_69490_69542[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (35))){
var inst_69437 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
if(cljs.core.truth_(inst_69437)){
var statearr_69491_69543 = state_69452__$1;
(statearr_69491_69543[(1)] = (36));

} else {
var statearr_69492_69544 = state_69452__$1;
(statearr_69492_69544[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (19))){
var inst_69379 = (state_69452[(7)]);
var inst_69399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69379);
var state_69452__$1 = state_69452;
var statearr_69493_69545 = state_69452__$1;
(statearr_69493_69545[(2)] = inst_69399);

(statearr_69493_69545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (11))){
var inst_69379 = (state_69452[(7)]);
var inst_69383 = (inst_69379 == null);
var inst_69384 = cljs.core.not.call(null,inst_69383);
var state_69452__$1 = state_69452;
if(inst_69384){
var statearr_69494_69546 = state_69452__$1;
(statearr_69494_69546[(1)] = (13));

} else {
var statearr_69495_69547 = state_69452__$1;
(statearr_69495_69547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (9))){
var inst_69354 = (state_69452[(8)]);
var state_69452__$1 = state_69452;
var statearr_69496_69548 = state_69452__$1;
(statearr_69496_69548[(2)] = inst_69354);

(statearr_69496_69548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (5))){
var state_69452__$1 = state_69452;
var statearr_69497_69549 = state_69452__$1;
(statearr_69497_69549[(2)] = true);

(statearr_69497_69549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (14))){
var state_69452__$1 = state_69452;
var statearr_69498_69550 = state_69452__$1;
(statearr_69498_69550[(2)] = false);

(statearr_69498_69550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (26))){
var inst_69412 = (state_69452[(11)]);
var inst_69419 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_69412);
var state_69452__$1 = state_69452;
var statearr_69499_69551 = state_69452__$1;
(statearr_69499_69551[(2)] = inst_69419);

(statearr_69499_69551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (16))){
var state_69452__$1 = state_69452;
var statearr_69500_69552 = state_69452__$1;
(statearr_69500_69552[(2)] = true);

(statearr_69500_69552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (38))){
var inst_69442 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
var statearr_69501_69553 = state_69452__$1;
(statearr_69501_69553[(2)] = inst_69442);

(statearr_69501_69553[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (30))){
var inst_69403 = (state_69452[(9)]);
var inst_69404 = (state_69452[(13)]);
var inst_69412 = (state_69452[(11)]);
var inst_69429 = cljs.core.empty_QMARK_.call(null,inst_69403);
var inst_69430 = inst_69404.call(null,inst_69412);
var inst_69431 = cljs.core.not.call(null,inst_69430);
var inst_69432 = (inst_69429) && (inst_69431);
var state_69452__$1 = state_69452;
var statearr_69502_69554 = state_69452__$1;
(statearr_69502_69554[(2)] = inst_69432);

(statearr_69502_69554[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (10))){
var inst_69354 = (state_69452[(8)]);
var inst_69375 = (state_69452[(2)]);
var inst_69376 = cljs.core.get.call(null,inst_69375,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69377 = cljs.core.get.call(null,inst_69375,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69378 = cljs.core.get.call(null,inst_69375,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_69379 = inst_69354;
var state_69452__$1 = (function (){var statearr_69503 = state_69452;
(statearr_69503[(16)] = inst_69378);

(statearr_69503[(7)] = inst_69379);

(statearr_69503[(17)] = inst_69377);

(statearr_69503[(18)] = inst_69376);

return statearr_69503;
})();
var statearr_69504_69555 = state_69452__$1;
(statearr_69504_69555[(2)] = null);

(statearr_69504_69555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (18))){
var inst_69394 = (state_69452[(2)]);
var state_69452__$1 = state_69452;
var statearr_69505_69556 = state_69452__$1;
(statearr_69505_69556[(2)] = inst_69394);

(statearr_69505_69556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (37))){
var state_69452__$1 = state_69452;
var statearr_69506_69557 = state_69452__$1;
(statearr_69506_69557[(2)] = null);

(statearr_69506_69557[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69453 === (8))){
var inst_69354 = (state_69452[(8)]);
var inst_69372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69354);
var state_69452__$1 = state_69452;
var statearr_69507_69558 = state_69452__$1;
(statearr_69507_69558[(2)] = inst_69372);

(statearr_69507_69558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___69512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__68363__auto__,c__68453__auto___69512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__68364__auto__ = null;
var cljs$core$async$mix_$_state_machine__68364__auto____0 = (function (){
var statearr_69508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69508[(0)] = cljs$core$async$mix_$_state_machine__68364__auto__);

(statearr_69508[(1)] = (1));

return statearr_69508;
});
var cljs$core$async$mix_$_state_machine__68364__auto____1 = (function (state_69452){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_69452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e69509){if((e69509 instanceof Object)){
var ex__68367__auto__ = e69509;
var statearr_69510_69559 = state_69452;
(statearr_69510_69559[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69560 = state_69452;
state_69452 = G__69560;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__68364__auto__ = function(state_69452){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__68364__auto____1.call(this,state_69452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__68364__auto____0;
cljs$core$async$mix_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__68364__auto____1;
return cljs$core$async$mix_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___69512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__68455__auto__ = (function (){var statearr_69511 = f__68454__auto__.call(null);
(statearr_69511[(6)] = c__68453__auto___69512);

return statearr_69511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___69512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__41535__auto__ = (((p == null))?null:p);
var m__41536__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__41536__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__41535__auto__ = (((p == null))?null:p);
var m__41536__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,p,v,ch);
} else {
var m__41536__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__69562 = arguments.length;
switch (G__69562) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__41535__auto__ = (((p == null))?null:p);
var m__41536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,p);
} else {
var m__41536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__41535__auto__ = (((p == null))?null:p);
var m__41536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41535__auto__)]);
if(!((m__41536__auto__ == null))){
return m__41536__auto__.call(null,p,v);
} else {
var m__41536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41536__auto____$1 == null))){
return m__41536__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__69566 = arguments.length;
switch (G__69566) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__39945__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__39945__auto__,mults){
return (function (p1__69564_SHARP_){
if(cljs.core.truth_(p1__69564_SHARP_.call(null,topic))){
return p1__69564_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__69564_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__39945__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async69567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69567 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta69568){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta69568 = meta69568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_69569,meta69568__$1){
var self__ = this;
var _69569__$1 = this;
return (new cljs.core.async.t_cljs$core$async69567(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta69568__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_69569){
var self__ = this;
var _69569__$1 = this;
return self__.meta69568;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69567.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69567.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta69568","meta69568",-1026481457,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69567";

cljs.core.async.t_cljs$core$async69567.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async69567");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async69567 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async69567(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta69568){
return (new cljs.core.async.t_cljs$core$async69567(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta69568));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async69567(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__68453__auto___69687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___69687,mults,ensure_mult,p){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___69687,mults,ensure_mult,p){
return (function (state_69641){
var state_val_69642 = (state_69641[(1)]);
if((state_val_69642 === (7))){
var inst_69637 = (state_69641[(2)]);
var state_69641__$1 = state_69641;
var statearr_69643_69688 = state_69641__$1;
(statearr_69643_69688[(2)] = inst_69637);

(statearr_69643_69688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (20))){
var state_69641__$1 = state_69641;
var statearr_69644_69689 = state_69641__$1;
(statearr_69644_69689[(2)] = null);

(statearr_69644_69689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (1))){
var state_69641__$1 = state_69641;
var statearr_69645_69690 = state_69641__$1;
(statearr_69645_69690[(2)] = null);

(statearr_69645_69690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (24))){
var inst_69620 = (state_69641[(7)]);
var inst_69629 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_69620);
var state_69641__$1 = state_69641;
var statearr_69646_69691 = state_69641__$1;
(statearr_69646_69691[(2)] = inst_69629);

(statearr_69646_69691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (4))){
var inst_69572 = (state_69641[(8)]);
var inst_69572__$1 = (state_69641[(2)]);
var inst_69573 = (inst_69572__$1 == null);
var state_69641__$1 = (function (){var statearr_69647 = state_69641;
(statearr_69647[(8)] = inst_69572__$1);

return statearr_69647;
})();
if(cljs.core.truth_(inst_69573)){
var statearr_69648_69692 = state_69641__$1;
(statearr_69648_69692[(1)] = (5));

} else {
var statearr_69649_69693 = state_69641__$1;
(statearr_69649_69693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (15))){
var inst_69614 = (state_69641[(2)]);
var state_69641__$1 = state_69641;
var statearr_69650_69694 = state_69641__$1;
(statearr_69650_69694[(2)] = inst_69614);

(statearr_69650_69694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (21))){
var inst_69634 = (state_69641[(2)]);
var state_69641__$1 = (function (){var statearr_69651 = state_69641;
(statearr_69651[(9)] = inst_69634);

return statearr_69651;
})();
var statearr_69652_69695 = state_69641__$1;
(statearr_69652_69695[(2)] = null);

(statearr_69652_69695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (13))){
var inst_69596 = (state_69641[(10)]);
var inst_69598 = cljs.core.chunked_seq_QMARK_.call(null,inst_69596);
var state_69641__$1 = state_69641;
if(inst_69598){
var statearr_69653_69696 = state_69641__$1;
(statearr_69653_69696[(1)] = (16));

} else {
var statearr_69654_69697 = state_69641__$1;
(statearr_69654_69697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (22))){
var inst_69626 = (state_69641[(2)]);
var state_69641__$1 = state_69641;
if(cljs.core.truth_(inst_69626)){
var statearr_69655_69698 = state_69641__$1;
(statearr_69655_69698[(1)] = (23));

} else {
var statearr_69656_69699 = state_69641__$1;
(statearr_69656_69699[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (6))){
var inst_69622 = (state_69641[(11)]);
var inst_69620 = (state_69641[(7)]);
var inst_69572 = (state_69641[(8)]);
var inst_69620__$1 = topic_fn.call(null,inst_69572);
var inst_69621 = cljs.core.deref.call(null,mults);
var inst_69622__$1 = cljs.core.get.call(null,inst_69621,inst_69620__$1);
var state_69641__$1 = (function (){var statearr_69657 = state_69641;
(statearr_69657[(11)] = inst_69622__$1);

(statearr_69657[(7)] = inst_69620__$1);

return statearr_69657;
})();
if(cljs.core.truth_(inst_69622__$1)){
var statearr_69658_69700 = state_69641__$1;
(statearr_69658_69700[(1)] = (19));

} else {
var statearr_69659_69701 = state_69641__$1;
(statearr_69659_69701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (25))){
var inst_69631 = (state_69641[(2)]);
var state_69641__$1 = state_69641;
var statearr_69660_69702 = state_69641__$1;
(statearr_69660_69702[(2)] = inst_69631);

(statearr_69660_69702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (17))){
var inst_69596 = (state_69641[(10)]);
var inst_69605 = cljs.core.first.call(null,inst_69596);
var inst_69606 = cljs.core.async.muxch_STAR_.call(null,inst_69605);
var inst_69607 = cljs.core.async.close_BANG_.call(null,inst_69606);
var inst_69608 = cljs.core.next.call(null,inst_69596);
var inst_69582 = inst_69608;
var inst_69583 = null;
var inst_69584 = (0);
var inst_69585 = (0);
var state_69641__$1 = (function (){var statearr_69661 = state_69641;
(statearr_69661[(12)] = inst_69585);

(statearr_69661[(13)] = inst_69582);

(statearr_69661[(14)] = inst_69584);

(statearr_69661[(15)] = inst_69583);

(statearr_69661[(16)] = inst_69607);

return statearr_69661;
})();
var statearr_69662_69703 = state_69641__$1;
(statearr_69662_69703[(2)] = null);

(statearr_69662_69703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (3))){
var inst_69639 = (state_69641[(2)]);
var state_69641__$1 = state_69641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69641__$1,inst_69639);
} else {
if((state_val_69642 === (12))){
var inst_69616 = (state_69641[(2)]);
var state_69641__$1 = state_69641;
var statearr_69663_69704 = state_69641__$1;
(statearr_69663_69704[(2)] = inst_69616);

(statearr_69663_69704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (2))){
var state_69641__$1 = state_69641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69641__$1,(4),ch);
} else {
if((state_val_69642 === (23))){
var state_69641__$1 = state_69641;
var statearr_69664_69705 = state_69641__$1;
(statearr_69664_69705[(2)] = null);

(statearr_69664_69705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (19))){
var inst_69622 = (state_69641[(11)]);
var inst_69572 = (state_69641[(8)]);
var inst_69624 = cljs.core.async.muxch_STAR_.call(null,inst_69622);
var state_69641__$1 = state_69641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69641__$1,(22),inst_69624,inst_69572);
} else {
if((state_val_69642 === (11))){
var inst_69582 = (state_69641[(13)]);
var inst_69596 = (state_69641[(10)]);
var inst_69596__$1 = cljs.core.seq.call(null,inst_69582);
var state_69641__$1 = (function (){var statearr_69665 = state_69641;
(statearr_69665[(10)] = inst_69596__$1);

return statearr_69665;
})();
if(inst_69596__$1){
var statearr_69666_69706 = state_69641__$1;
(statearr_69666_69706[(1)] = (13));

} else {
var statearr_69667_69707 = state_69641__$1;
(statearr_69667_69707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (9))){
var inst_69618 = (state_69641[(2)]);
var state_69641__$1 = state_69641;
var statearr_69668_69708 = state_69641__$1;
(statearr_69668_69708[(2)] = inst_69618);

(statearr_69668_69708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (5))){
var inst_69579 = cljs.core.deref.call(null,mults);
var inst_69580 = cljs.core.vals.call(null,inst_69579);
var inst_69581 = cljs.core.seq.call(null,inst_69580);
var inst_69582 = inst_69581;
var inst_69583 = null;
var inst_69584 = (0);
var inst_69585 = (0);
var state_69641__$1 = (function (){var statearr_69669 = state_69641;
(statearr_69669[(12)] = inst_69585);

(statearr_69669[(13)] = inst_69582);

(statearr_69669[(14)] = inst_69584);

(statearr_69669[(15)] = inst_69583);

return statearr_69669;
})();
var statearr_69670_69709 = state_69641__$1;
(statearr_69670_69709[(2)] = null);

(statearr_69670_69709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (14))){
var state_69641__$1 = state_69641;
var statearr_69674_69710 = state_69641__$1;
(statearr_69674_69710[(2)] = null);

(statearr_69674_69710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (16))){
var inst_69596 = (state_69641[(10)]);
var inst_69600 = cljs.core.chunk_first.call(null,inst_69596);
var inst_69601 = cljs.core.chunk_rest.call(null,inst_69596);
var inst_69602 = cljs.core.count.call(null,inst_69600);
var inst_69582 = inst_69601;
var inst_69583 = inst_69600;
var inst_69584 = inst_69602;
var inst_69585 = (0);
var state_69641__$1 = (function (){var statearr_69675 = state_69641;
(statearr_69675[(12)] = inst_69585);

(statearr_69675[(13)] = inst_69582);

(statearr_69675[(14)] = inst_69584);

(statearr_69675[(15)] = inst_69583);

return statearr_69675;
})();
var statearr_69676_69711 = state_69641__$1;
(statearr_69676_69711[(2)] = null);

(statearr_69676_69711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (10))){
var inst_69585 = (state_69641[(12)]);
var inst_69582 = (state_69641[(13)]);
var inst_69584 = (state_69641[(14)]);
var inst_69583 = (state_69641[(15)]);
var inst_69590 = cljs.core._nth.call(null,inst_69583,inst_69585);
var inst_69591 = cljs.core.async.muxch_STAR_.call(null,inst_69590);
var inst_69592 = cljs.core.async.close_BANG_.call(null,inst_69591);
var inst_69593 = (inst_69585 + (1));
var tmp69671 = inst_69582;
var tmp69672 = inst_69584;
var tmp69673 = inst_69583;
var inst_69582__$1 = tmp69671;
var inst_69583__$1 = tmp69673;
var inst_69584__$1 = tmp69672;
var inst_69585__$1 = inst_69593;
var state_69641__$1 = (function (){var statearr_69677 = state_69641;
(statearr_69677[(12)] = inst_69585__$1);

(statearr_69677[(13)] = inst_69582__$1);

(statearr_69677[(17)] = inst_69592);

(statearr_69677[(14)] = inst_69584__$1);

(statearr_69677[(15)] = inst_69583__$1);

return statearr_69677;
})();
var statearr_69678_69712 = state_69641__$1;
(statearr_69678_69712[(2)] = null);

(statearr_69678_69712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (18))){
var inst_69611 = (state_69641[(2)]);
var state_69641__$1 = state_69641;
var statearr_69679_69713 = state_69641__$1;
(statearr_69679_69713[(2)] = inst_69611);

(statearr_69679_69713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69642 === (8))){
var inst_69585 = (state_69641[(12)]);
var inst_69584 = (state_69641[(14)]);
var inst_69587 = (inst_69585 < inst_69584);
var inst_69588 = inst_69587;
var state_69641__$1 = state_69641;
if(cljs.core.truth_(inst_69588)){
var statearr_69680_69714 = state_69641__$1;
(statearr_69680_69714[(1)] = (10));

} else {
var statearr_69681_69715 = state_69641__$1;
(statearr_69681_69715[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___69687,mults,ensure_mult,p))
;
return ((function (switch__68363__auto__,c__68453__auto___69687,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_69682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69682[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_69682[(1)] = (1));

return statearr_69682;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_69641){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_69641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e69683){if((e69683 instanceof Object)){
var ex__68367__auto__ = e69683;
var statearr_69684_69716 = state_69641;
(statearr_69684_69716[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69717 = state_69641;
state_69641 = G__69717;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_69641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_69641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___69687,mults,ensure_mult,p))
})();
var state__68455__auto__ = (function (){var statearr_69685 = f__68454__auto__.call(null);
(statearr_69685[(6)] = c__68453__auto___69687);

return statearr_69685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___69687,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__69719 = arguments.length;
switch (G__69719) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__69722 = arguments.length;
switch (G__69722) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__69725 = arguments.length;
switch (G__69725) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__68453__auto___69792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___69792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___69792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_69764){
var state_val_69765 = (state_69764[(1)]);
if((state_val_69765 === (7))){
var state_69764__$1 = state_69764;
var statearr_69766_69793 = state_69764__$1;
(statearr_69766_69793[(2)] = null);

(statearr_69766_69793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (1))){
var state_69764__$1 = state_69764;
var statearr_69767_69794 = state_69764__$1;
(statearr_69767_69794[(2)] = null);

(statearr_69767_69794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (4))){
var inst_69728 = (state_69764[(7)]);
var inst_69730 = (inst_69728 < cnt);
var state_69764__$1 = state_69764;
if(cljs.core.truth_(inst_69730)){
var statearr_69768_69795 = state_69764__$1;
(statearr_69768_69795[(1)] = (6));

} else {
var statearr_69769_69796 = state_69764__$1;
(statearr_69769_69796[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (15))){
var inst_69760 = (state_69764[(2)]);
var state_69764__$1 = state_69764;
var statearr_69770_69797 = state_69764__$1;
(statearr_69770_69797[(2)] = inst_69760);

(statearr_69770_69797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (13))){
var inst_69753 = cljs.core.async.close_BANG_.call(null,out);
var state_69764__$1 = state_69764;
var statearr_69771_69798 = state_69764__$1;
(statearr_69771_69798[(2)] = inst_69753);

(statearr_69771_69798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (6))){
var state_69764__$1 = state_69764;
var statearr_69772_69799 = state_69764__$1;
(statearr_69772_69799[(2)] = null);

(statearr_69772_69799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (3))){
var inst_69762 = (state_69764[(2)]);
var state_69764__$1 = state_69764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69764__$1,inst_69762);
} else {
if((state_val_69765 === (12))){
var inst_69750 = (state_69764[(8)]);
var inst_69750__$1 = (state_69764[(2)]);
var inst_69751 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_69750__$1);
var state_69764__$1 = (function (){var statearr_69773 = state_69764;
(statearr_69773[(8)] = inst_69750__$1);

return statearr_69773;
})();
if(cljs.core.truth_(inst_69751)){
var statearr_69774_69800 = state_69764__$1;
(statearr_69774_69800[(1)] = (13));

} else {
var statearr_69775_69801 = state_69764__$1;
(statearr_69775_69801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (2))){
var inst_69727 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_69728 = (0);
var state_69764__$1 = (function (){var statearr_69776 = state_69764;
(statearr_69776[(9)] = inst_69727);

(statearr_69776[(7)] = inst_69728);

return statearr_69776;
})();
var statearr_69777_69802 = state_69764__$1;
(statearr_69777_69802[(2)] = null);

(statearr_69777_69802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (11))){
var inst_69728 = (state_69764[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_69764,(10),Object,null,(9));
var inst_69737 = chs__$1.call(null,inst_69728);
var inst_69738 = done.call(null,inst_69728);
var inst_69739 = cljs.core.async.take_BANG_.call(null,inst_69737,inst_69738);
var state_69764__$1 = state_69764;
var statearr_69778_69803 = state_69764__$1;
(statearr_69778_69803[(2)] = inst_69739);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69764__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (9))){
var inst_69728 = (state_69764[(7)]);
var inst_69741 = (state_69764[(2)]);
var inst_69742 = (inst_69728 + (1));
var inst_69728__$1 = inst_69742;
var state_69764__$1 = (function (){var statearr_69779 = state_69764;
(statearr_69779[(10)] = inst_69741);

(statearr_69779[(7)] = inst_69728__$1);

return statearr_69779;
})();
var statearr_69780_69804 = state_69764__$1;
(statearr_69780_69804[(2)] = null);

(statearr_69780_69804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (5))){
var inst_69748 = (state_69764[(2)]);
var state_69764__$1 = (function (){var statearr_69781 = state_69764;
(statearr_69781[(11)] = inst_69748);

return statearr_69781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69764__$1,(12),dchan);
} else {
if((state_val_69765 === (14))){
var inst_69750 = (state_69764[(8)]);
var inst_69755 = cljs.core.apply.call(null,f,inst_69750);
var state_69764__$1 = state_69764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69764__$1,(16),out,inst_69755);
} else {
if((state_val_69765 === (16))){
var inst_69757 = (state_69764[(2)]);
var state_69764__$1 = (function (){var statearr_69782 = state_69764;
(statearr_69782[(12)] = inst_69757);

return statearr_69782;
})();
var statearr_69783_69805 = state_69764__$1;
(statearr_69783_69805[(2)] = null);

(statearr_69783_69805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (10))){
var inst_69732 = (state_69764[(2)]);
var inst_69733 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_69764__$1 = (function (){var statearr_69784 = state_69764;
(statearr_69784[(13)] = inst_69732);

return statearr_69784;
})();
var statearr_69785_69806 = state_69764__$1;
(statearr_69785_69806[(2)] = inst_69733);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69764__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69765 === (8))){
var inst_69746 = (state_69764[(2)]);
var state_69764__$1 = state_69764;
var statearr_69786_69807 = state_69764__$1;
(statearr_69786_69807[(2)] = inst_69746);

(statearr_69786_69807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___69792,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__68363__auto__,c__68453__auto___69792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_69787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69787[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_69787[(1)] = (1));

return statearr_69787;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_69764){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_69764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e69788){if((e69788 instanceof Object)){
var ex__68367__auto__ = e69788;
var statearr_69789_69808 = state_69764;
(statearr_69789_69808[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69809 = state_69764;
state_69764 = G__69809;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_69764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_69764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___69792,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__68455__auto__ = (function (){var statearr_69790 = f__68454__auto__.call(null);
(statearr_69790[(6)] = c__68453__auto___69792);

return statearr_69790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___69792,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__69812 = arguments.length;
switch (G__69812) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__68453__auto___69866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___69866,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___69866,out){
return (function (state_69844){
var state_val_69845 = (state_69844[(1)]);
if((state_val_69845 === (7))){
var inst_69823 = (state_69844[(7)]);
var inst_69824 = (state_69844[(8)]);
var inst_69823__$1 = (state_69844[(2)]);
var inst_69824__$1 = cljs.core.nth.call(null,inst_69823__$1,(0),null);
var inst_69825 = cljs.core.nth.call(null,inst_69823__$1,(1),null);
var inst_69826 = (inst_69824__$1 == null);
var state_69844__$1 = (function (){var statearr_69846 = state_69844;
(statearr_69846[(9)] = inst_69825);

(statearr_69846[(7)] = inst_69823__$1);

(statearr_69846[(8)] = inst_69824__$1);

return statearr_69846;
})();
if(cljs.core.truth_(inst_69826)){
var statearr_69847_69867 = state_69844__$1;
(statearr_69847_69867[(1)] = (8));

} else {
var statearr_69848_69868 = state_69844__$1;
(statearr_69848_69868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69845 === (1))){
var inst_69813 = cljs.core.vec.call(null,chs);
var inst_69814 = inst_69813;
var state_69844__$1 = (function (){var statearr_69849 = state_69844;
(statearr_69849[(10)] = inst_69814);

return statearr_69849;
})();
var statearr_69850_69869 = state_69844__$1;
(statearr_69850_69869[(2)] = null);

(statearr_69850_69869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69845 === (4))){
var inst_69814 = (state_69844[(10)]);
var state_69844__$1 = state_69844;
return cljs.core.async.ioc_alts_BANG_.call(null,state_69844__$1,(7),inst_69814);
} else {
if((state_val_69845 === (6))){
var inst_69840 = (state_69844[(2)]);
var state_69844__$1 = state_69844;
var statearr_69851_69870 = state_69844__$1;
(statearr_69851_69870[(2)] = inst_69840);

(statearr_69851_69870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69845 === (3))){
var inst_69842 = (state_69844[(2)]);
var state_69844__$1 = state_69844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69844__$1,inst_69842);
} else {
if((state_val_69845 === (2))){
var inst_69814 = (state_69844[(10)]);
var inst_69816 = cljs.core.count.call(null,inst_69814);
var inst_69817 = (inst_69816 > (0));
var state_69844__$1 = state_69844;
if(cljs.core.truth_(inst_69817)){
var statearr_69853_69871 = state_69844__$1;
(statearr_69853_69871[(1)] = (4));

} else {
var statearr_69854_69872 = state_69844__$1;
(statearr_69854_69872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69845 === (11))){
var inst_69814 = (state_69844[(10)]);
var inst_69833 = (state_69844[(2)]);
var tmp69852 = inst_69814;
var inst_69814__$1 = tmp69852;
var state_69844__$1 = (function (){var statearr_69855 = state_69844;
(statearr_69855[(10)] = inst_69814__$1);

(statearr_69855[(11)] = inst_69833);

return statearr_69855;
})();
var statearr_69856_69873 = state_69844__$1;
(statearr_69856_69873[(2)] = null);

(statearr_69856_69873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69845 === (9))){
var inst_69824 = (state_69844[(8)]);
var state_69844__$1 = state_69844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69844__$1,(11),out,inst_69824);
} else {
if((state_val_69845 === (5))){
var inst_69838 = cljs.core.async.close_BANG_.call(null,out);
var state_69844__$1 = state_69844;
var statearr_69857_69874 = state_69844__$1;
(statearr_69857_69874[(2)] = inst_69838);

(statearr_69857_69874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69845 === (10))){
var inst_69836 = (state_69844[(2)]);
var state_69844__$1 = state_69844;
var statearr_69858_69875 = state_69844__$1;
(statearr_69858_69875[(2)] = inst_69836);

(statearr_69858_69875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69845 === (8))){
var inst_69814 = (state_69844[(10)]);
var inst_69825 = (state_69844[(9)]);
var inst_69823 = (state_69844[(7)]);
var inst_69824 = (state_69844[(8)]);
var inst_69828 = (function (){var cs = inst_69814;
var vec__69819 = inst_69823;
var v = inst_69824;
var c = inst_69825;
return ((function (cs,vec__69819,v,c,inst_69814,inst_69825,inst_69823,inst_69824,state_val_69845,c__68453__auto___69866,out){
return (function (p1__69810_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__69810_SHARP_);
});
;})(cs,vec__69819,v,c,inst_69814,inst_69825,inst_69823,inst_69824,state_val_69845,c__68453__auto___69866,out))
})();
var inst_69829 = cljs.core.filterv.call(null,inst_69828,inst_69814);
var inst_69814__$1 = inst_69829;
var state_69844__$1 = (function (){var statearr_69859 = state_69844;
(statearr_69859[(10)] = inst_69814__$1);

return statearr_69859;
})();
var statearr_69860_69876 = state_69844__$1;
(statearr_69860_69876[(2)] = null);

(statearr_69860_69876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___69866,out))
;
return ((function (switch__68363__auto__,c__68453__auto___69866,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_69861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69861[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_69861[(1)] = (1));

return statearr_69861;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_69844){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_69844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e69862){if((e69862 instanceof Object)){
var ex__68367__auto__ = e69862;
var statearr_69863_69877 = state_69844;
(statearr_69863_69877[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69878 = state_69844;
state_69844 = G__69878;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_69844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_69844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___69866,out))
})();
var state__68455__auto__ = (function (){var statearr_69864 = f__68454__auto__.call(null);
(statearr_69864[(6)] = c__68453__auto___69866);

return statearr_69864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___69866,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__69880 = arguments.length;
switch (G__69880) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__68453__auto___69925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___69925,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___69925,out){
return (function (state_69904){
var state_val_69905 = (state_69904[(1)]);
if((state_val_69905 === (7))){
var inst_69886 = (state_69904[(7)]);
var inst_69886__$1 = (state_69904[(2)]);
var inst_69887 = (inst_69886__$1 == null);
var inst_69888 = cljs.core.not.call(null,inst_69887);
var state_69904__$1 = (function (){var statearr_69906 = state_69904;
(statearr_69906[(7)] = inst_69886__$1);

return statearr_69906;
})();
if(inst_69888){
var statearr_69907_69926 = state_69904__$1;
(statearr_69907_69926[(1)] = (8));

} else {
var statearr_69908_69927 = state_69904__$1;
(statearr_69908_69927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69905 === (1))){
var inst_69881 = (0);
var state_69904__$1 = (function (){var statearr_69909 = state_69904;
(statearr_69909[(8)] = inst_69881);

return statearr_69909;
})();
var statearr_69910_69928 = state_69904__$1;
(statearr_69910_69928[(2)] = null);

(statearr_69910_69928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69905 === (4))){
var state_69904__$1 = state_69904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69904__$1,(7),ch);
} else {
if((state_val_69905 === (6))){
var inst_69899 = (state_69904[(2)]);
var state_69904__$1 = state_69904;
var statearr_69911_69929 = state_69904__$1;
(statearr_69911_69929[(2)] = inst_69899);

(statearr_69911_69929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69905 === (3))){
var inst_69901 = (state_69904[(2)]);
var inst_69902 = cljs.core.async.close_BANG_.call(null,out);
var state_69904__$1 = (function (){var statearr_69912 = state_69904;
(statearr_69912[(9)] = inst_69901);

return statearr_69912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69904__$1,inst_69902);
} else {
if((state_val_69905 === (2))){
var inst_69881 = (state_69904[(8)]);
var inst_69883 = (inst_69881 < n);
var state_69904__$1 = state_69904;
if(cljs.core.truth_(inst_69883)){
var statearr_69913_69930 = state_69904__$1;
(statearr_69913_69930[(1)] = (4));

} else {
var statearr_69914_69931 = state_69904__$1;
(statearr_69914_69931[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69905 === (11))){
var inst_69881 = (state_69904[(8)]);
var inst_69891 = (state_69904[(2)]);
var inst_69892 = (inst_69881 + (1));
var inst_69881__$1 = inst_69892;
var state_69904__$1 = (function (){var statearr_69915 = state_69904;
(statearr_69915[(10)] = inst_69891);

(statearr_69915[(8)] = inst_69881__$1);

return statearr_69915;
})();
var statearr_69916_69932 = state_69904__$1;
(statearr_69916_69932[(2)] = null);

(statearr_69916_69932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69905 === (9))){
var state_69904__$1 = state_69904;
var statearr_69917_69933 = state_69904__$1;
(statearr_69917_69933[(2)] = null);

(statearr_69917_69933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69905 === (5))){
var state_69904__$1 = state_69904;
var statearr_69918_69934 = state_69904__$1;
(statearr_69918_69934[(2)] = null);

(statearr_69918_69934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69905 === (10))){
var inst_69896 = (state_69904[(2)]);
var state_69904__$1 = state_69904;
var statearr_69919_69935 = state_69904__$1;
(statearr_69919_69935[(2)] = inst_69896);

(statearr_69919_69935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69905 === (8))){
var inst_69886 = (state_69904[(7)]);
var state_69904__$1 = state_69904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69904__$1,(11),out,inst_69886);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___69925,out))
;
return ((function (switch__68363__auto__,c__68453__auto___69925,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_69920 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69920[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_69920[(1)] = (1));

return statearr_69920;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_69904){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_69904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e69921){if((e69921 instanceof Object)){
var ex__68367__auto__ = e69921;
var statearr_69922_69936 = state_69904;
(statearr_69922_69936[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69937 = state_69904;
state_69904 = G__69937;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_69904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_69904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___69925,out))
})();
var state__68455__auto__ = (function (){var statearr_69923 = f__68454__auto__.call(null);
(statearr_69923[(6)] = c__68453__auto___69925);

return statearr_69923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___69925,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async69939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69939 = (function (f,ch,meta69940){
this.f = f;
this.ch = ch;
this.meta69940 = meta69940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69941,meta69940__$1){
var self__ = this;
var _69941__$1 = this;
return (new cljs.core.async.t_cljs$core$async69939(self__.f,self__.ch,meta69940__$1));
});

cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69941){
var self__ = this;
var _69941__$1 = this;
return self__.meta69940;
});

cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async69942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69942 = (function (f,ch,meta69940,_,fn1,meta69943){
this.f = f;
this.ch = ch;
this.meta69940 = meta69940;
this._ = _;
this.fn1 = fn1;
this.meta69943 = meta69943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_69944,meta69943__$1){
var self__ = this;
var _69944__$1 = this;
return (new cljs.core.async.t_cljs$core$async69942(self__.f,self__.ch,self__.meta69940,self__._,self__.fn1,meta69943__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async69942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_69944){
var self__ = this;
var _69944__$1 = this;
return self__.meta69943;
});})(___$1))
;

cljs.core.async.t_cljs$core$async69942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async69942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async69942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__69938_SHARP_){
return f1.call(null,(((p1__69938_SHARP_ == null))?null:self__.f.call(null,p1__69938_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async69942.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69940","meta69940",1298923403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async69939","cljs.core.async/t_cljs$core$async69939",1005737733,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta69943","meta69943",1333311185,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async69942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69942";

cljs.core.async.t_cljs$core$async69942.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async69942");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async69942 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69942(f__$1,ch__$1,meta69940__$1,___$2,fn1__$1,meta69943){
return (new cljs.core.async.t_cljs$core$async69942(f__$1,ch__$1,meta69940__$1,___$2,fn1__$1,meta69943));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async69942(self__.f,self__.ch,self__.meta69940,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__39919__auto__ = ret;
if(cljs.core.truth_(and__39919__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__39919__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async69939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69940","meta69940",1298923403,null)], null);
});

cljs.core.async.t_cljs$core$async69939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69939";

cljs.core.async.t_cljs$core$async69939.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async69939");
});

cljs.core.async.__GT_t_cljs$core$async69939 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69939(f__$1,ch__$1,meta69940){
return (new cljs.core.async.t_cljs$core$async69939(f__$1,ch__$1,meta69940));
});

}

return (new cljs.core.async.t_cljs$core$async69939(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async69945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69945 = (function (f,ch,meta69946){
this.f = f;
this.ch = ch;
this.meta69946 = meta69946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69947,meta69946__$1){
var self__ = this;
var _69947__$1 = this;
return (new cljs.core.async.t_cljs$core$async69945(self__.f,self__.ch,meta69946__$1));
});

cljs.core.async.t_cljs$core$async69945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69947){
var self__ = this;
var _69947__$1 = this;
return self__.meta69946;
});

cljs.core.async.t_cljs$core$async69945.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69945.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async69945.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async69945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69946","meta69946",-1549163005,null)], null);
});

cljs.core.async.t_cljs$core$async69945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69945";

cljs.core.async.t_cljs$core$async69945.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async69945");
});

cljs.core.async.__GT_t_cljs$core$async69945 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async69945(f__$1,ch__$1,meta69946){
return (new cljs.core.async.t_cljs$core$async69945(f__$1,ch__$1,meta69946));
});

}

return (new cljs.core.async.t_cljs$core$async69945(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async69948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69948 = (function (p,ch,meta69949){
this.p = p;
this.ch = ch;
this.meta69949 = meta69949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69950,meta69949__$1){
var self__ = this;
var _69950__$1 = this;
return (new cljs.core.async.t_cljs$core$async69948(self__.p,self__.ch,meta69949__$1));
});

cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69950){
var self__ = this;
var _69950__$1 = this;
return self__.meta69949;
});

cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async69948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69949","meta69949",-1242076249,null)], null);
});

cljs.core.async.t_cljs$core$async69948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69948";

cljs.core.async.t_cljs$core$async69948.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async69948");
});

cljs.core.async.__GT_t_cljs$core$async69948 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async69948(p__$1,ch__$1,meta69949){
return (new cljs.core.async.t_cljs$core$async69948(p__$1,ch__$1,meta69949));
});

}

return (new cljs.core.async.t_cljs$core$async69948(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__69952 = arguments.length;
switch (G__69952) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__68453__auto___69992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___69992,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___69992,out){
return (function (state_69973){
var state_val_69974 = (state_69973[(1)]);
if((state_val_69974 === (7))){
var inst_69969 = (state_69973[(2)]);
var state_69973__$1 = state_69973;
var statearr_69975_69993 = state_69973__$1;
(statearr_69975_69993[(2)] = inst_69969);

(statearr_69975_69993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69974 === (1))){
var state_69973__$1 = state_69973;
var statearr_69976_69994 = state_69973__$1;
(statearr_69976_69994[(2)] = null);

(statearr_69976_69994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69974 === (4))){
var inst_69955 = (state_69973[(7)]);
var inst_69955__$1 = (state_69973[(2)]);
var inst_69956 = (inst_69955__$1 == null);
var state_69973__$1 = (function (){var statearr_69977 = state_69973;
(statearr_69977[(7)] = inst_69955__$1);

return statearr_69977;
})();
if(cljs.core.truth_(inst_69956)){
var statearr_69978_69995 = state_69973__$1;
(statearr_69978_69995[(1)] = (5));

} else {
var statearr_69979_69996 = state_69973__$1;
(statearr_69979_69996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69974 === (6))){
var inst_69955 = (state_69973[(7)]);
var inst_69960 = p.call(null,inst_69955);
var state_69973__$1 = state_69973;
if(cljs.core.truth_(inst_69960)){
var statearr_69980_69997 = state_69973__$1;
(statearr_69980_69997[(1)] = (8));

} else {
var statearr_69981_69998 = state_69973__$1;
(statearr_69981_69998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69974 === (3))){
var inst_69971 = (state_69973[(2)]);
var state_69973__$1 = state_69973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69973__$1,inst_69971);
} else {
if((state_val_69974 === (2))){
var state_69973__$1 = state_69973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69973__$1,(4),ch);
} else {
if((state_val_69974 === (11))){
var inst_69963 = (state_69973[(2)]);
var state_69973__$1 = state_69973;
var statearr_69982_69999 = state_69973__$1;
(statearr_69982_69999[(2)] = inst_69963);

(statearr_69982_69999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69974 === (9))){
var state_69973__$1 = state_69973;
var statearr_69983_70000 = state_69973__$1;
(statearr_69983_70000[(2)] = null);

(statearr_69983_70000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69974 === (5))){
var inst_69958 = cljs.core.async.close_BANG_.call(null,out);
var state_69973__$1 = state_69973;
var statearr_69984_70001 = state_69973__$1;
(statearr_69984_70001[(2)] = inst_69958);

(statearr_69984_70001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69974 === (10))){
var inst_69966 = (state_69973[(2)]);
var state_69973__$1 = (function (){var statearr_69985 = state_69973;
(statearr_69985[(8)] = inst_69966);

return statearr_69985;
})();
var statearr_69986_70002 = state_69973__$1;
(statearr_69986_70002[(2)] = null);

(statearr_69986_70002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69974 === (8))){
var inst_69955 = (state_69973[(7)]);
var state_69973__$1 = state_69973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69973__$1,(11),out,inst_69955);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___69992,out))
;
return ((function (switch__68363__auto__,c__68453__auto___69992,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_69987 = [null,null,null,null,null,null,null,null,null];
(statearr_69987[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_69987[(1)] = (1));

return statearr_69987;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_69973){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_69973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e69988){if((e69988 instanceof Object)){
var ex__68367__auto__ = e69988;
var statearr_69989_70003 = state_69973;
(statearr_69989_70003[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70004 = state_69973;
state_69973 = G__70004;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_69973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_69973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___69992,out))
})();
var state__68455__auto__ = (function (){var statearr_69990 = f__68454__auto__.call(null);
(statearr_69990[(6)] = c__68453__auto___69992);

return statearr_69990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___69992,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__70006 = arguments.length;
switch (G__70006) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__){
return (function (state_70069){
var state_val_70070 = (state_70069[(1)]);
if((state_val_70070 === (7))){
var inst_70065 = (state_70069[(2)]);
var state_70069__$1 = state_70069;
var statearr_70071_70109 = state_70069__$1;
(statearr_70071_70109[(2)] = inst_70065);

(statearr_70071_70109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (20))){
var inst_70035 = (state_70069[(7)]);
var inst_70046 = (state_70069[(2)]);
var inst_70047 = cljs.core.next.call(null,inst_70035);
var inst_70021 = inst_70047;
var inst_70022 = null;
var inst_70023 = (0);
var inst_70024 = (0);
var state_70069__$1 = (function (){var statearr_70072 = state_70069;
(statearr_70072[(8)] = inst_70024);

(statearr_70072[(9)] = inst_70046);

(statearr_70072[(10)] = inst_70023);

(statearr_70072[(11)] = inst_70021);

(statearr_70072[(12)] = inst_70022);

return statearr_70072;
})();
var statearr_70073_70110 = state_70069__$1;
(statearr_70073_70110[(2)] = null);

(statearr_70073_70110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (1))){
var state_70069__$1 = state_70069;
var statearr_70074_70111 = state_70069__$1;
(statearr_70074_70111[(2)] = null);

(statearr_70074_70111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (4))){
var inst_70010 = (state_70069[(13)]);
var inst_70010__$1 = (state_70069[(2)]);
var inst_70011 = (inst_70010__$1 == null);
var state_70069__$1 = (function (){var statearr_70075 = state_70069;
(statearr_70075[(13)] = inst_70010__$1);

return statearr_70075;
})();
if(cljs.core.truth_(inst_70011)){
var statearr_70076_70112 = state_70069__$1;
(statearr_70076_70112[(1)] = (5));

} else {
var statearr_70077_70113 = state_70069__$1;
(statearr_70077_70113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (15))){
var state_70069__$1 = state_70069;
var statearr_70081_70114 = state_70069__$1;
(statearr_70081_70114[(2)] = null);

(statearr_70081_70114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (21))){
var state_70069__$1 = state_70069;
var statearr_70082_70115 = state_70069__$1;
(statearr_70082_70115[(2)] = null);

(statearr_70082_70115[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (13))){
var inst_70024 = (state_70069[(8)]);
var inst_70023 = (state_70069[(10)]);
var inst_70021 = (state_70069[(11)]);
var inst_70022 = (state_70069[(12)]);
var inst_70031 = (state_70069[(2)]);
var inst_70032 = (inst_70024 + (1));
var tmp70078 = inst_70023;
var tmp70079 = inst_70021;
var tmp70080 = inst_70022;
var inst_70021__$1 = tmp70079;
var inst_70022__$1 = tmp70080;
var inst_70023__$1 = tmp70078;
var inst_70024__$1 = inst_70032;
var state_70069__$1 = (function (){var statearr_70083 = state_70069;
(statearr_70083[(8)] = inst_70024__$1);

(statearr_70083[(14)] = inst_70031);

(statearr_70083[(10)] = inst_70023__$1);

(statearr_70083[(11)] = inst_70021__$1);

(statearr_70083[(12)] = inst_70022__$1);

return statearr_70083;
})();
var statearr_70084_70116 = state_70069__$1;
(statearr_70084_70116[(2)] = null);

(statearr_70084_70116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (22))){
var state_70069__$1 = state_70069;
var statearr_70085_70117 = state_70069__$1;
(statearr_70085_70117[(2)] = null);

(statearr_70085_70117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (6))){
var inst_70010 = (state_70069[(13)]);
var inst_70019 = f.call(null,inst_70010);
var inst_70020 = cljs.core.seq.call(null,inst_70019);
var inst_70021 = inst_70020;
var inst_70022 = null;
var inst_70023 = (0);
var inst_70024 = (0);
var state_70069__$1 = (function (){var statearr_70086 = state_70069;
(statearr_70086[(8)] = inst_70024);

(statearr_70086[(10)] = inst_70023);

(statearr_70086[(11)] = inst_70021);

(statearr_70086[(12)] = inst_70022);

return statearr_70086;
})();
var statearr_70087_70118 = state_70069__$1;
(statearr_70087_70118[(2)] = null);

(statearr_70087_70118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (17))){
var inst_70035 = (state_70069[(7)]);
var inst_70039 = cljs.core.chunk_first.call(null,inst_70035);
var inst_70040 = cljs.core.chunk_rest.call(null,inst_70035);
var inst_70041 = cljs.core.count.call(null,inst_70039);
var inst_70021 = inst_70040;
var inst_70022 = inst_70039;
var inst_70023 = inst_70041;
var inst_70024 = (0);
var state_70069__$1 = (function (){var statearr_70088 = state_70069;
(statearr_70088[(8)] = inst_70024);

(statearr_70088[(10)] = inst_70023);

(statearr_70088[(11)] = inst_70021);

(statearr_70088[(12)] = inst_70022);

return statearr_70088;
})();
var statearr_70089_70119 = state_70069__$1;
(statearr_70089_70119[(2)] = null);

(statearr_70089_70119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (3))){
var inst_70067 = (state_70069[(2)]);
var state_70069__$1 = state_70069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70069__$1,inst_70067);
} else {
if((state_val_70070 === (12))){
var inst_70055 = (state_70069[(2)]);
var state_70069__$1 = state_70069;
var statearr_70090_70120 = state_70069__$1;
(statearr_70090_70120[(2)] = inst_70055);

(statearr_70090_70120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (2))){
var state_70069__$1 = state_70069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70069__$1,(4),in$);
} else {
if((state_val_70070 === (23))){
var inst_70063 = (state_70069[(2)]);
var state_70069__$1 = state_70069;
var statearr_70091_70121 = state_70069__$1;
(statearr_70091_70121[(2)] = inst_70063);

(statearr_70091_70121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (19))){
var inst_70050 = (state_70069[(2)]);
var state_70069__$1 = state_70069;
var statearr_70092_70122 = state_70069__$1;
(statearr_70092_70122[(2)] = inst_70050);

(statearr_70092_70122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (11))){
var inst_70035 = (state_70069[(7)]);
var inst_70021 = (state_70069[(11)]);
var inst_70035__$1 = cljs.core.seq.call(null,inst_70021);
var state_70069__$1 = (function (){var statearr_70093 = state_70069;
(statearr_70093[(7)] = inst_70035__$1);

return statearr_70093;
})();
if(inst_70035__$1){
var statearr_70094_70123 = state_70069__$1;
(statearr_70094_70123[(1)] = (14));

} else {
var statearr_70095_70124 = state_70069__$1;
(statearr_70095_70124[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (9))){
var inst_70057 = (state_70069[(2)]);
var inst_70058 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_70069__$1 = (function (){var statearr_70096 = state_70069;
(statearr_70096[(15)] = inst_70057);

return statearr_70096;
})();
if(cljs.core.truth_(inst_70058)){
var statearr_70097_70125 = state_70069__$1;
(statearr_70097_70125[(1)] = (21));

} else {
var statearr_70098_70126 = state_70069__$1;
(statearr_70098_70126[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (5))){
var inst_70013 = cljs.core.async.close_BANG_.call(null,out);
var state_70069__$1 = state_70069;
var statearr_70099_70127 = state_70069__$1;
(statearr_70099_70127[(2)] = inst_70013);

(statearr_70099_70127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (14))){
var inst_70035 = (state_70069[(7)]);
var inst_70037 = cljs.core.chunked_seq_QMARK_.call(null,inst_70035);
var state_70069__$1 = state_70069;
if(inst_70037){
var statearr_70100_70128 = state_70069__$1;
(statearr_70100_70128[(1)] = (17));

} else {
var statearr_70101_70129 = state_70069__$1;
(statearr_70101_70129[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (16))){
var inst_70053 = (state_70069[(2)]);
var state_70069__$1 = state_70069;
var statearr_70102_70130 = state_70069__$1;
(statearr_70102_70130[(2)] = inst_70053);

(statearr_70102_70130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70070 === (10))){
var inst_70024 = (state_70069[(8)]);
var inst_70022 = (state_70069[(12)]);
var inst_70029 = cljs.core._nth.call(null,inst_70022,inst_70024);
var state_70069__$1 = state_70069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70069__$1,(13),out,inst_70029);
} else {
if((state_val_70070 === (18))){
var inst_70035 = (state_70069[(7)]);
var inst_70044 = cljs.core.first.call(null,inst_70035);
var state_70069__$1 = state_70069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70069__$1,(20),out,inst_70044);
} else {
if((state_val_70070 === (8))){
var inst_70024 = (state_70069[(8)]);
var inst_70023 = (state_70069[(10)]);
var inst_70026 = (inst_70024 < inst_70023);
var inst_70027 = inst_70026;
var state_70069__$1 = state_70069;
if(cljs.core.truth_(inst_70027)){
var statearr_70103_70131 = state_70069__$1;
(statearr_70103_70131[(1)] = (10));

} else {
var statearr_70104_70132 = state_70069__$1;
(statearr_70104_70132[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto__))
;
return ((function (switch__68363__auto__,c__68453__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_70105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70105[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__);

(statearr_70105[(1)] = (1));

return statearr_70105;
});
var cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____1 = (function (state_70069){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_70069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e70106){if((e70106 instanceof Object)){
var ex__68367__auto__ = e70106;
var statearr_70107_70133 = state_70069;
(statearr_70107_70133[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70134 = state_70069;
state_70069 = G__70134;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__ = function(state_70069){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____1.call(this,state_70069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_70108 = f__68454__auto__.call(null);
(statearr_70108[(6)] = c__68453__auto__);

return statearr_70108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__))
);

return c__68453__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__70136 = arguments.length;
switch (G__70136) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__70139 = arguments.length;
switch (G__70139) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__70142 = arguments.length;
switch (G__70142) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__68453__auto___70189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___70189,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___70189,out){
return (function (state_70166){
var state_val_70167 = (state_70166[(1)]);
if((state_val_70167 === (7))){
var inst_70161 = (state_70166[(2)]);
var state_70166__$1 = state_70166;
var statearr_70168_70190 = state_70166__$1;
(statearr_70168_70190[(2)] = inst_70161);

(statearr_70168_70190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70167 === (1))){
var inst_70143 = null;
var state_70166__$1 = (function (){var statearr_70169 = state_70166;
(statearr_70169[(7)] = inst_70143);

return statearr_70169;
})();
var statearr_70170_70191 = state_70166__$1;
(statearr_70170_70191[(2)] = null);

(statearr_70170_70191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70167 === (4))){
var inst_70146 = (state_70166[(8)]);
var inst_70146__$1 = (state_70166[(2)]);
var inst_70147 = (inst_70146__$1 == null);
var inst_70148 = cljs.core.not.call(null,inst_70147);
var state_70166__$1 = (function (){var statearr_70171 = state_70166;
(statearr_70171[(8)] = inst_70146__$1);

return statearr_70171;
})();
if(inst_70148){
var statearr_70172_70192 = state_70166__$1;
(statearr_70172_70192[(1)] = (5));

} else {
var statearr_70173_70193 = state_70166__$1;
(statearr_70173_70193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70167 === (6))){
var state_70166__$1 = state_70166;
var statearr_70174_70194 = state_70166__$1;
(statearr_70174_70194[(2)] = null);

(statearr_70174_70194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70167 === (3))){
var inst_70163 = (state_70166[(2)]);
var inst_70164 = cljs.core.async.close_BANG_.call(null,out);
var state_70166__$1 = (function (){var statearr_70175 = state_70166;
(statearr_70175[(9)] = inst_70163);

return statearr_70175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70166__$1,inst_70164);
} else {
if((state_val_70167 === (2))){
var state_70166__$1 = state_70166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70166__$1,(4),ch);
} else {
if((state_val_70167 === (11))){
var inst_70146 = (state_70166[(8)]);
var inst_70155 = (state_70166[(2)]);
var inst_70143 = inst_70146;
var state_70166__$1 = (function (){var statearr_70176 = state_70166;
(statearr_70176[(10)] = inst_70155);

(statearr_70176[(7)] = inst_70143);

return statearr_70176;
})();
var statearr_70177_70195 = state_70166__$1;
(statearr_70177_70195[(2)] = null);

(statearr_70177_70195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70167 === (9))){
var inst_70146 = (state_70166[(8)]);
var state_70166__$1 = state_70166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70166__$1,(11),out,inst_70146);
} else {
if((state_val_70167 === (5))){
var inst_70146 = (state_70166[(8)]);
var inst_70143 = (state_70166[(7)]);
var inst_70150 = cljs.core._EQ_.call(null,inst_70146,inst_70143);
var state_70166__$1 = state_70166;
if(inst_70150){
var statearr_70179_70196 = state_70166__$1;
(statearr_70179_70196[(1)] = (8));

} else {
var statearr_70180_70197 = state_70166__$1;
(statearr_70180_70197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70167 === (10))){
var inst_70158 = (state_70166[(2)]);
var state_70166__$1 = state_70166;
var statearr_70181_70198 = state_70166__$1;
(statearr_70181_70198[(2)] = inst_70158);

(statearr_70181_70198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70167 === (8))){
var inst_70143 = (state_70166[(7)]);
var tmp70178 = inst_70143;
var inst_70143__$1 = tmp70178;
var state_70166__$1 = (function (){var statearr_70182 = state_70166;
(statearr_70182[(7)] = inst_70143__$1);

return statearr_70182;
})();
var statearr_70183_70199 = state_70166__$1;
(statearr_70183_70199[(2)] = null);

(statearr_70183_70199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___70189,out))
;
return ((function (switch__68363__auto__,c__68453__auto___70189,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_70184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70184[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_70184[(1)] = (1));

return statearr_70184;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_70166){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_70166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e70185){if((e70185 instanceof Object)){
var ex__68367__auto__ = e70185;
var statearr_70186_70200 = state_70166;
(statearr_70186_70200[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70201 = state_70166;
state_70166 = G__70201;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_70166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_70166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___70189,out))
})();
var state__68455__auto__ = (function (){var statearr_70187 = f__68454__auto__.call(null);
(statearr_70187[(6)] = c__68453__auto___70189);

return statearr_70187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___70189,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__70203 = arguments.length;
switch (G__70203) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__68453__auto___70269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___70269,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___70269,out){
return (function (state_70241){
var state_val_70242 = (state_70241[(1)]);
if((state_val_70242 === (7))){
var inst_70237 = (state_70241[(2)]);
var state_70241__$1 = state_70241;
var statearr_70243_70270 = state_70241__$1;
(statearr_70243_70270[(2)] = inst_70237);

(statearr_70243_70270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (1))){
var inst_70204 = (new Array(n));
var inst_70205 = inst_70204;
var inst_70206 = (0);
var state_70241__$1 = (function (){var statearr_70244 = state_70241;
(statearr_70244[(7)] = inst_70206);

(statearr_70244[(8)] = inst_70205);

return statearr_70244;
})();
var statearr_70245_70271 = state_70241__$1;
(statearr_70245_70271[(2)] = null);

(statearr_70245_70271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (4))){
var inst_70209 = (state_70241[(9)]);
var inst_70209__$1 = (state_70241[(2)]);
var inst_70210 = (inst_70209__$1 == null);
var inst_70211 = cljs.core.not.call(null,inst_70210);
var state_70241__$1 = (function (){var statearr_70246 = state_70241;
(statearr_70246[(9)] = inst_70209__$1);

return statearr_70246;
})();
if(inst_70211){
var statearr_70247_70272 = state_70241__$1;
(statearr_70247_70272[(1)] = (5));

} else {
var statearr_70248_70273 = state_70241__$1;
(statearr_70248_70273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (15))){
var inst_70231 = (state_70241[(2)]);
var state_70241__$1 = state_70241;
var statearr_70249_70274 = state_70241__$1;
(statearr_70249_70274[(2)] = inst_70231);

(statearr_70249_70274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (13))){
var state_70241__$1 = state_70241;
var statearr_70250_70275 = state_70241__$1;
(statearr_70250_70275[(2)] = null);

(statearr_70250_70275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (6))){
var inst_70206 = (state_70241[(7)]);
var inst_70227 = (inst_70206 > (0));
var state_70241__$1 = state_70241;
if(cljs.core.truth_(inst_70227)){
var statearr_70251_70276 = state_70241__$1;
(statearr_70251_70276[(1)] = (12));

} else {
var statearr_70252_70277 = state_70241__$1;
(statearr_70252_70277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (3))){
var inst_70239 = (state_70241[(2)]);
var state_70241__$1 = state_70241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70241__$1,inst_70239);
} else {
if((state_val_70242 === (12))){
var inst_70205 = (state_70241[(8)]);
var inst_70229 = cljs.core.vec.call(null,inst_70205);
var state_70241__$1 = state_70241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70241__$1,(15),out,inst_70229);
} else {
if((state_val_70242 === (2))){
var state_70241__$1 = state_70241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70241__$1,(4),ch);
} else {
if((state_val_70242 === (11))){
var inst_70221 = (state_70241[(2)]);
var inst_70222 = (new Array(n));
var inst_70205 = inst_70222;
var inst_70206 = (0);
var state_70241__$1 = (function (){var statearr_70253 = state_70241;
(statearr_70253[(7)] = inst_70206);

(statearr_70253[(8)] = inst_70205);

(statearr_70253[(10)] = inst_70221);

return statearr_70253;
})();
var statearr_70254_70278 = state_70241__$1;
(statearr_70254_70278[(2)] = null);

(statearr_70254_70278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (9))){
var inst_70205 = (state_70241[(8)]);
var inst_70219 = cljs.core.vec.call(null,inst_70205);
var state_70241__$1 = state_70241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70241__$1,(11),out,inst_70219);
} else {
if((state_val_70242 === (5))){
var inst_70206 = (state_70241[(7)]);
var inst_70205 = (state_70241[(8)]);
var inst_70209 = (state_70241[(9)]);
var inst_70214 = (state_70241[(11)]);
var inst_70213 = (inst_70205[inst_70206] = inst_70209);
var inst_70214__$1 = (inst_70206 + (1));
var inst_70215 = (inst_70214__$1 < n);
var state_70241__$1 = (function (){var statearr_70255 = state_70241;
(statearr_70255[(11)] = inst_70214__$1);

(statearr_70255[(12)] = inst_70213);

return statearr_70255;
})();
if(cljs.core.truth_(inst_70215)){
var statearr_70256_70279 = state_70241__$1;
(statearr_70256_70279[(1)] = (8));

} else {
var statearr_70257_70280 = state_70241__$1;
(statearr_70257_70280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (14))){
var inst_70234 = (state_70241[(2)]);
var inst_70235 = cljs.core.async.close_BANG_.call(null,out);
var state_70241__$1 = (function (){var statearr_70259 = state_70241;
(statearr_70259[(13)] = inst_70234);

return statearr_70259;
})();
var statearr_70260_70281 = state_70241__$1;
(statearr_70260_70281[(2)] = inst_70235);

(statearr_70260_70281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (10))){
var inst_70225 = (state_70241[(2)]);
var state_70241__$1 = state_70241;
var statearr_70261_70282 = state_70241__$1;
(statearr_70261_70282[(2)] = inst_70225);

(statearr_70261_70282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70242 === (8))){
var inst_70205 = (state_70241[(8)]);
var inst_70214 = (state_70241[(11)]);
var tmp70258 = inst_70205;
var inst_70205__$1 = tmp70258;
var inst_70206 = inst_70214;
var state_70241__$1 = (function (){var statearr_70262 = state_70241;
(statearr_70262[(7)] = inst_70206);

(statearr_70262[(8)] = inst_70205__$1);

return statearr_70262;
})();
var statearr_70263_70283 = state_70241__$1;
(statearr_70263_70283[(2)] = null);

(statearr_70263_70283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___70269,out))
;
return ((function (switch__68363__auto__,c__68453__auto___70269,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_70264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70264[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_70264[(1)] = (1));

return statearr_70264;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_70241){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_70241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e70265){if((e70265 instanceof Object)){
var ex__68367__auto__ = e70265;
var statearr_70266_70284 = state_70241;
(statearr_70266_70284[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70285 = state_70241;
state_70241 = G__70285;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_70241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_70241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___70269,out))
})();
var state__68455__auto__ = (function (){var statearr_70267 = f__68454__auto__.call(null);
(statearr_70267[(6)] = c__68453__auto___70269);

return statearr_70267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___70269,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__70287 = arguments.length;
switch (G__70287) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__68453__auto___70357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___70357,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___70357,out){
return (function (state_70329){
var state_val_70330 = (state_70329[(1)]);
if((state_val_70330 === (7))){
var inst_70325 = (state_70329[(2)]);
var state_70329__$1 = state_70329;
var statearr_70331_70358 = state_70329__$1;
(statearr_70331_70358[(2)] = inst_70325);

(statearr_70331_70358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (1))){
var inst_70288 = [];
var inst_70289 = inst_70288;
var inst_70290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_70329__$1 = (function (){var statearr_70332 = state_70329;
(statearr_70332[(7)] = inst_70289);

(statearr_70332[(8)] = inst_70290);

return statearr_70332;
})();
var statearr_70333_70359 = state_70329__$1;
(statearr_70333_70359[(2)] = null);

(statearr_70333_70359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (4))){
var inst_70293 = (state_70329[(9)]);
var inst_70293__$1 = (state_70329[(2)]);
var inst_70294 = (inst_70293__$1 == null);
var inst_70295 = cljs.core.not.call(null,inst_70294);
var state_70329__$1 = (function (){var statearr_70334 = state_70329;
(statearr_70334[(9)] = inst_70293__$1);

return statearr_70334;
})();
if(inst_70295){
var statearr_70335_70360 = state_70329__$1;
(statearr_70335_70360[(1)] = (5));

} else {
var statearr_70336_70361 = state_70329__$1;
(statearr_70336_70361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (15))){
var inst_70319 = (state_70329[(2)]);
var state_70329__$1 = state_70329;
var statearr_70337_70362 = state_70329__$1;
(statearr_70337_70362[(2)] = inst_70319);

(statearr_70337_70362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (13))){
var state_70329__$1 = state_70329;
var statearr_70338_70363 = state_70329__$1;
(statearr_70338_70363[(2)] = null);

(statearr_70338_70363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (6))){
var inst_70289 = (state_70329[(7)]);
var inst_70314 = inst_70289.length;
var inst_70315 = (inst_70314 > (0));
var state_70329__$1 = state_70329;
if(cljs.core.truth_(inst_70315)){
var statearr_70339_70364 = state_70329__$1;
(statearr_70339_70364[(1)] = (12));

} else {
var statearr_70340_70365 = state_70329__$1;
(statearr_70340_70365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (3))){
var inst_70327 = (state_70329[(2)]);
var state_70329__$1 = state_70329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70329__$1,inst_70327);
} else {
if((state_val_70330 === (12))){
var inst_70289 = (state_70329[(7)]);
var inst_70317 = cljs.core.vec.call(null,inst_70289);
var state_70329__$1 = state_70329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70329__$1,(15),out,inst_70317);
} else {
if((state_val_70330 === (2))){
var state_70329__$1 = state_70329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70329__$1,(4),ch);
} else {
if((state_val_70330 === (11))){
var inst_70297 = (state_70329[(10)]);
var inst_70293 = (state_70329[(9)]);
var inst_70307 = (state_70329[(2)]);
var inst_70308 = [];
var inst_70309 = inst_70308.push(inst_70293);
var inst_70289 = inst_70308;
var inst_70290 = inst_70297;
var state_70329__$1 = (function (){var statearr_70341 = state_70329;
(statearr_70341[(11)] = inst_70307);

(statearr_70341[(7)] = inst_70289);

(statearr_70341[(12)] = inst_70309);

(statearr_70341[(8)] = inst_70290);

return statearr_70341;
})();
var statearr_70342_70366 = state_70329__$1;
(statearr_70342_70366[(2)] = null);

(statearr_70342_70366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (9))){
var inst_70289 = (state_70329[(7)]);
var inst_70305 = cljs.core.vec.call(null,inst_70289);
var state_70329__$1 = state_70329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70329__$1,(11),out,inst_70305);
} else {
if((state_val_70330 === (5))){
var inst_70297 = (state_70329[(10)]);
var inst_70293 = (state_70329[(9)]);
var inst_70290 = (state_70329[(8)]);
var inst_70297__$1 = f.call(null,inst_70293);
var inst_70298 = cljs.core._EQ_.call(null,inst_70297__$1,inst_70290);
var inst_70299 = cljs.core.keyword_identical_QMARK_.call(null,inst_70290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_70300 = (inst_70298) || (inst_70299);
var state_70329__$1 = (function (){var statearr_70343 = state_70329;
(statearr_70343[(10)] = inst_70297__$1);

return statearr_70343;
})();
if(cljs.core.truth_(inst_70300)){
var statearr_70344_70367 = state_70329__$1;
(statearr_70344_70367[(1)] = (8));

} else {
var statearr_70345_70368 = state_70329__$1;
(statearr_70345_70368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (14))){
var inst_70322 = (state_70329[(2)]);
var inst_70323 = cljs.core.async.close_BANG_.call(null,out);
var state_70329__$1 = (function (){var statearr_70347 = state_70329;
(statearr_70347[(13)] = inst_70322);

return statearr_70347;
})();
var statearr_70348_70369 = state_70329__$1;
(statearr_70348_70369[(2)] = inst_70323);

(statearr_70348_70369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (10))){
var inst_70312 = (state_70329[(2)]);
var state_70329__$1 = state_70329;
var statearr_70349_70370 = state_70329__$1;
(statearr_70349_70370[(2)] = inst_70312);

(statearr_70349_70370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70330 === (8))){
var inst_70297 = (state_70329[(10)]);
var inst_70289 = (state_70329[(7)]);
var inst_70293 = (state_70329[(9)]);
var inst_70302 = inst_70289.push(inst_70293);
var tmp70346 = inst_70289;
var inst_70289__$1 = tmp70346;
var inst_70290 = inst_70297;
var state_70329__$1 = (function (){var statearr_70350 = state_70329;
(statearr_70350[(7)] = inst_70289__$1);

(statearr_70350[(14)] = inst_70302);

(statearr_70350[(8)] = inst_70290);

return statearr_70350;
})();
var statearr_70351_70371 = state_70329__$1;
(statearr_70351_70371[(2)] = null);

(statearr_70351_70371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__68453__auto___70357,out))
;
return ((function (switch__68363__auto__,c__68453__auto___70357,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_70352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70352[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_70352[(1)] = (1));

return statearr_70352;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_70329){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_70329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e70353){if((e70353 instanceof Object)){
var ex__68367__auto__ = e70353;
var statearr_70354_70372 = state_70329;
(statearr_70354_70372[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70373 = state_70329;
state_70329 = G__70373;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_70329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_70329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___70357,out))
})();
var state__68455__auto__ = (function (){var statearr_70355 = f__68454__auto__.call(null);
(statearr_70355[(6)] = c__68453__auto___70357);

return statearr_70355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___70357,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1519022788563
