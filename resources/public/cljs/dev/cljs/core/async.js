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
var G__68512 = arguments.length;
switch (G__68512) {
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
if(typeof cljs.core.async.t_cljs$core$async68513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68513 = (function (f,blockable,meta68514){
this.f = f;
this.blockable = blockable;
this.meta68514 = meta68514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68515,meta68514__$1){
var self__ = this;
var _68515__$1 = this;
return (new cljs.core.async.t_cljs$core$async68513(self__.f,self__.blockable,meta68514__$1));
});

cljs.core.async.t_cljs$core$async68513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68515){
var self__ = this;
var _68515__$1 = this;
return self__.meta68514;
});

cljs.core.async.t_cljs$core$async68513.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async68513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async68513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async68513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta68514","meta68514",-549184424,null)], null);
});

cljs.core.async.t_cljs$core$async68513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68513";

cljs.core.async.t_cljs$core$async68513.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async68513");
});

cljs.core.async.__GT_t_cljs$core$async68513 = (function cljs$core$async$__GT_t_cljs$core$async68513(f__$1,blockable__$1,meta68514){
return (new cljs.core.async.t_cljs$core$async68513(f__$1,blockable__$1,meta68514));
});

}

return (new cljs.core.async.t_cljs$core$async68513(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__68519 = arguments.length;
switch (G__68519) {
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
var G__68522 = arguments.length;
switch (G__68522) {
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
var G__68525 = arguments.length;
switch (G__68525) {
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
var val_68527 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_68527);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_68527,ret){
return (function (){
return fn1.call(null,val_68527);
});})(val_68527,ret))
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
var G__68529 = arguments.length;
switch (G__68529) {
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
var n__21262__auto___68531 = n;
var x_68532 = (0);
while(true){
if((x_68532 < n__21262__auto___68531)){
(a[x_68532] = (0));

var G__68533 = (x_68532 + (1));
x_68532 = G__68533;
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

var G__68534 = (i + (1));
i = G__68534;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async68535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68535 = (function (flag,meta68536){
this.flag = flag;
this.meta68536 = meta68536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_68537,meta68536__$1){
var self__ = this;
var _68537__$1 = this;
return (new cljs.core.async.t_cljs$core$async68535(self__.flag,meta68536__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async68535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_68537){
var self__ = this;
var _68537__$1 = this;
return self__.meta68536;
});})(flag))
;

cljs.core.async.t_cljs$core$async68535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async68535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68535.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta68536","meta68536",-1314730416,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async68535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68535";

cljs.core.async.t_cljs$core$async68535.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async68535");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async68535 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async68535(flag__$1,meta68536){
return (new cljs.core.async.t_cljs$core$async68535(flag__$1,meta68536));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async68535(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async68538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68538 = (function (flag,cb,meta68539){
this.flag = flag;
this.cb = cb;
this.meta68539 = meta68539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68540,meta68539__$1){
var self__ = this;
var _68540__$1 = this;
return (new cljs.core.async.t_cljs$core$async68538(self__.flag,self__.cb,meta68539__$1));
});

cljs.core.async.t_cljs$core$async68538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68540){
var self__ = this;
var _68540__$1 = this;
return self__.meta68539;
});

cljs.core.async.t_cljs$core$async68538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async68538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async68538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async68538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta68539","meta68539",1196120581,null)], null);
});

cljs.core.async.t_cljs$core$async68538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68538";

cljs.core.async.t_cljs$core$async68538.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async68538");
});

cljs.core.async.__GT_t_cljs$core$async68538 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async68538(flag__$1,cb__$1,meta68539){
return (new cljs.core.async.t_cljs$core$async68538(flag__$1,cb__$1,meta68539));
});

}

return (new cljs.core.async.t_cljs$core$async68538(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__68541_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68541_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68542_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19063__auto__ = wport;
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
return port;
}
})()], null));
} else {
var G__68543 = (i + (1));
i = G__68543;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19063__auto__ = ret;
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__19050__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19050__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19050__auto__;
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
var args__21754__auto__ = [];
var len__21740__auto___68549 = arguments.length;
var i__21741__auto___68550 = (0);
while(true){
if((i__21741__auto___68550 < len__21740__auto___68549)){
args__21754__auto__.push((arguments[i__21741__auto___68550]));

var G__68551 = (i__21741__auto___68550 + (1));
i__21741__auto___68550 = G__68551;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((1) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21755__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__68546){
var map__68547 = p__68546;
var map__68547__$1 = ((((!((map__68547 == null)))?((((map__68547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68547):map__68547);
var opts = map__68547__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq68544){
var G__68545 = cljs.core.first.call(null,seq68544);
var seq68544__$1 = cljs.core.next.call(null,seq68544);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68545,seq68544__$1);
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
var G__68553 = arguments.length;
switch (G__68553) {
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
var c__68452__auto___68599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___68599){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___68599){
return (function (state_68577){
var state_val_68578 = (state_68577[(1)]);
if((state_val_68578 === (7))){
var inst_68573 = (state_68577[(2)]);
var state_68577__$1 = state_68577;
var statearr_68579_68600 = state_68577__$1;
(statearr_68579_68600[(2)] = inst_68573);

(statearr_68579_68600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (1))){
var state_68577__$1 = state_68577;
var statearr_68580_68601 = state_68577__$1;
(statearr_68580_68601[(2)] = null);

(statearr_68580_68601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (4))){
var inst_68556 = (state_68577[(7)]);
var inst_68556__$1 = (state_68577[(2)]);
var inst_68557 = (inst_68556__$1 == null);
var state_68577__$1 = (function (){var statearr_68581 = state_68577;
(statearr_68581[(7)] = inst_68556__$1);

return statearr_68581;
})();
if(cljs.core.truth_(inst_68557)){
var statearr_68582_68602 = state_68577__$1;
(statearr_68582_68602[(1)] = (5));

} else {
var statearr_68583_68603 = state_68577__$1;
(statearr_68583_68603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (13))){
var state_68577__$1 = state_68577;
var statearr_68584_68604 = state_68577__$1;
(statearr_68584_68604[(2)] = null);

(statearr_68584_68604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (6))){
var inst_68556 = (state_68577[(7)]);
var state_68577__$1 = state_68577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68577__$1,(11),to,inst_68556);
} else {
if((state_val_68578 === (3))){
var inst_68575 = (state_68577[(2)]);
var state_68577__$1 = state_68577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68577__$1,inst_68575);
} else {
if((state_val_68578 === (12))){
var state_68577__$1 = state_68577;
var statearr_68585_68605 = state_68577__$1;
(statearr_68585_68605[(2)] = null);

(statearr_68585_68605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (2))){
var state_68577__$1 = state_68577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68577__$1,(4),from);
} else {
if((state_val_68578 === (11))){
var inst_68566 = (state_68577[(2)]);
var state_68577__$1 = state_68577;
if(cljs.core.truth_(inst_68566)){
var statearr_68586_68606 = state_68577__$1;
(statearr_68586_68606[(1)] = (12));

} else {
var statearr_68587_68607 = state_68577__$1;
(statearr_68587_68607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (9))){
var state_68577__$1 = state_68577;
var statearr_68588_68608 = state_68577__$1;
(statearr_68588_68608[(2)] = null);

(statearr_68588_68608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (5))){
var state_68577__$1 = state_68577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68589_68609 = state_68577__$1;
(statearr_68589_68609[(1)] = (8));

} else {
var statearr_68590_68610 = state_68577__$1;
(statearr_68590_68610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (14))){
var inst_68571 = (state_68577[(2)]);
var state_68577__$1 = state_68577;
var statearr_68591_68611 = state_68577__$1;
(statearr_68591_68611[(2)] = inst_68571);

(statearr_68591_68611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (10))){
var inst_68563 = (state_68577[(2)]);
var state_68577__$1 = state_68577;
var statearr_68592_68612 = state_68577__$1;
(statearr_68592_68612[(2)] = inst_68563);

(statearr_68592_68612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68578 === (8))){
var inst_68560 = cljs.core.async.close_BANG_.call(null,to);
var state_68577__$1 = state_68577;
var statearr_68593_68613 = state_68577__$1;
(statearr_68593_68613[(2)] = inst_68560);

(statearr_68593_68613[(1)] = (10));


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
});})(c__68452__auto___68599))
;
return ((function (switch__68362__auto__,c__68452__auto___68599){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_68594 = [null,null,null,null,null,null,null,null];
(statearr_68594[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_68594[(1)] = (1));

return statearr_68594;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_68577){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68595){if((e68595 instanceof Object)){
var ex__68366__auto__ = e68595;
var statearr_68596_68614 = state_68577;
(statearr_68596_68614[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68615 = state_68577;
state_68577 = G__68615;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_68577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_68577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___68599))
})();
var state__68454__auto__ = (function (){var statearr_68597 = f__68453__auto__.call(null);
(statearr_68597[(6)] = c__68452__auto___68599);

return statearr_68597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___68599))
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
return (function (p__68616){
var vec__68617 = p__68616;
var v = cljs.core.nth.call(null,vec__68617,(0),null);
var p = cljs.core.nth.call(null,vec__68617,(1),null);
var job = vec__68617;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__68452__auto___68788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___68788,res,vec__68617,v,p,job,jobs,results){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___68788,res,vec__68617,v,p,job,jobs,results){
return (function (state_68624){
var state_val_68625 = (state_68624[(1)]);
if((state_val_68625 === (1))){
var state_68624__$1 = state_68624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68624__$1,(2),res,v);
} else {
if((state_val_68625 === (2))){
var inst_68621 = (state_68624[(2)]);
var inst_68622 = cljs.core.async.close_BANG_.call(null,res);
var state_68624__$1 = (function (){var statearr_68626 = state_68624;
(statearr_68626[(7)] = inst_68621);

return statearr_68626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68624__$1,inst_68622);
} else {
return null;
}
}
});})(c__68452__auto___68788,res,vec__68617,v,p,job,jobs,results))
;
return ((function (switch__68362__auto__,c__68452__auto___68788,res,vec__68617,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0 = (function (){
var statearr_68627 = [null,null,null,null,null,null,null,null];
(statearr_68627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__);

(statearr_68627[(1)] = (1));

return statearr_68627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1 = (function (state_68624){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68628){if((e68628 instanceof Object)){
var ex__68366__auto__ = e68628;
var statearr_68629_68789 = state_68624;
(statearr_68629_68789[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68790 = state_68624;
state_68624 = G__68790;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = function(state_68624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1.call(this,state_68624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___68788,res,vec__68617,v,p,job,jobs,results))
})();
var state__68454__auto__ = (function (){var statearr_68630 = f__68453__auto__.call(null);
(statearr_68630[(6)] = c__68452__auto___68788);

return statearr_68630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___68788,res,vec__68617,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__68631){
var vec__68632 = p__68631;
var v = cljs.core.nth.call(null,vec__68632,(0),null);
var p = cljs.core.nth.call(null,vec__68632,(1),null);
var job = vec__68632;
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
var n__21262__auto___68791 = n;
var __68792 = (0);
while(true){
if((__68792 < n__21262__auto___68791)){
var G__68635_68793 = type;
var G__68635_68794__$1 = (((G__68635_68793 instanceof cljs.core.Keyword))?G__68635_68793.fqn:null);
switch (G__68635_68794__$1) {
case "compute":
var c__68452__auto___68796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68792,c__68452__auto___68796,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (__68792,c__68452__auto___68796,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async){
return (function (state_68648){
var state_val_68649 = (state_68648[(1)]);
if((state_val_68649 === (1))){
var state_68648__$1 = state_68648;
var statearr_68650_68797 = state_68648__$1;
(statearr_68650_68797[(2)] = null);

(statearr_68650_68797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68649 === (2))){
var state_68648__$1 = state_68648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68648__$1,(4),jobs);
} else {
if((state_val_68649 === (3))){
var inst_68646 = (state_68648[(2)]);
var state_68648__$1 = state_68648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68648__$1,inst_68646);
} else {
if((state_val_68649 === (4))){
var inst_68638 = (state_68648[(2)]);
var inst_68639 = process.call(null,inst_68638);
var state_68648__$1 = state_68648;
if(cljs.core.truth_(inst_68639)){
var statearr_68651_68798 = state_68648__$1;
(statearr_68651_68798[(1)] = (5));

} else {
var statearr_68652_68799 = state_68648__$1;
(statearr_68652_68799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68649 === (5))){
var state_68648__$1 = state_68648;
var statearr_68653_68800 = state_68648__$1;
(statearr_68653_68800[(2)] = null);

(statearr_68653_68800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68649 === (6))){
var state_68648__$1 = state_68648;
var statearr_68654_68801 = state_68648__$1;
(statearr_68654_68801[(2)] = null);

(statearr_68654_68801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68649 === (7))){
var inst_68644 = (state_68648[(2)]);
var state_68648__$1 = state_68648;
var statearr_68655_68802 = state_68648__$1;
(statearr_68655_68802[(2)] = inst_68644);

(statearr_68655_68802[(1)] = (3));


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
});})(__68792,c__68452__auto___68796,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async))
;
return ((function (__68792,switch__68362__auto__,c__68452__auto___68796,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0 = (function (){
var statearr_68656 = [null,null,null,null,null,null,null];
(statearr_68656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__);

(statearr_68656[(1)] = (1));

return statearr_68656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1 = (function (state_68648){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68657){if((e68657 instanceof Object)){
var ex__68366__auto__ = e68657;
var statearr_68658_68803 = state_68648;
(statearr_68658_68803[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68804 = state_68648;
state_68648 = G__68804;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = function(state_68648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1.call(this,state_68648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__;
})()
;})(__68792,switch__68362__auto__,c__68452__auto___68796,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async))
})();
var state__68454__auto__ = (function (){var statearr_68659 = f__68453__auto__.call(null);
(statearr_68659[(6)] = c__68452__auto___68796);

return statearr_68659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(__68792,c__68452__auto___68796,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async))
);


break;
case "async":
var c__68452__auto___68805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68792,c__68452__auto___68805,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (__68792,c__68452__auto___68805,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async){
return (function (state_68672){
var state_val_68673 = (state_68672[(1)]);
if((state_val_68673 === (1))){
var state_68672__$1 = state_68672;
var statearr_68674_68806 = state_68672__$1;
(statearr_68674_68806[(2)] = null);

(statearr_68674_68806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68673 === (2))){
var state_68672__$1 = state_68672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68672__$1,(4),jobs);
} else {
if((state_val_68673 === (3))){
var inst_68670 = (state_68672[(2)]);
var state_68672__$1 = state_68672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68672__$1,inst_68670);
} else {
if((state_val_68673 === (4))){
var inst_68662 = (state_68672[(2)]);
var inst_68663 = async.call(null,inst_68662);
var state_68672__$1 = state_68672;
if(cljs.core.truth_(inst_68663)){
var statearr_68675_68807 = state_68672__$1;
(statearr_68675_68807[(1)] = (5));

} else {
var statearr_68676_68808 = state_68672__$1;
(statearr_68676_68808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68673 === (5))){
var state_68672__$1 = state_68672;
var statearr_68677_68809 = state_68672__$1;
(statearr_68677_68809[(2)] = null);

(statearr_68677_68809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68673 === (6))){
var state_68672__$1 = state_68672;
var statearr_68678_68810 = state_68672__$1;
(statearr_68678_68810[(2)] = null);

(statearr_68678_68810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68673 === (7))){
var inst_68668 = (state_68672[(2)]);
var state_68672__$1 = state_68672;
var statearr_68679_68811 = state_68672__$1;
(statearr_68679_68811[(2)] = inst_68668);

(statearr_68679_68811[(1)] = (3));


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
});})(__68792,c__68452__auto___68805,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async))
;
return ((function (__68792,switch__68362__auto__,c__68452__auto___68805,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0 = (function (){
var statearr_68680 = [null,null,null,null,null,null,null];
(statearr_68680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__);

(statearr_68680[(1)] = (1));

return statearr_68680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1 = (function (state_68672){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68681){if((e68681 instanceof Object)){
var ex__68366__auto__ = e68681;
var statearr_68682_68812 = state_68672;
(statearr_68682_68812[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68813 = state_68672;
state_68672 = G__68813;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = function(state_68672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1.call(this,state_68672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__;
})()
;})(__68792,switch__68362__auto__,c__68452__auto___68805,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async))
})();
var state__68454__auto__ = (function (){var statearr_68683 = f__68453__auto__.call(null);
(statearr_68683[(6)] = c__68452__auto___68805);

return statearr_68683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(__68792,c__68452__auto___68805,G__68635_68793,G__68635_68794__$1,n__21262__auto___68791,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68635_68794__$1)].join('')));

}

var G__68814 = (__68792 + (1));
__68792 = G__68814;
continue;
} else {
}
break;
}

var c__68452__auto___68815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___68815,jobs,results,process,async){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___68815,jobs,results,process,async){
return (function (state_68705){
var state_val_68706 = (state_68705[(1)]);
if((state_val_68706 === (1))){
var state_68705__$1 = state_68705;
var statearr_68707_68816 = state_68705__$1;
(statearr_68707_68816[(2)] = null);

(statearr_68707_68816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68706 === (2))){
var state_68705__$1 = state_68705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68705__$1,(4),from);
} else {
if((state_val_68706 === (3))){
var inst_68703 = (state_68705[(2)]);
var state_68705__$1 = state_68705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68705__$1,inst_68703);
} else {
if((state_val_68706 === (4))){
var inst_68686 = (state_68705[(7)]);
var inst_68686__$1 = (state_68705[(2)]);
var inst_68687 = (inst_68686__$1 == null);
var state_68705__$1 = (function (){var statearr_68708 = state_68705;
(statearr_68708[(7)] = inst_68686__$1);

return statearr_68708;
})();
if(cljs.core.truth_(inst_68687)){
var statearr_68709_68817 = state_68705__$1;
(statearr_68709_68817[(1)] = (5));

} else {
var statearr_68710_68818 = state_68705__$1;
(statearr_68710_68818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68706 === (5))){
var inst_68689 = cljs.core.async.close_BANG_.call(null,jobs);
var state_68705__$1 = state_68705;
var statearr_68711_68819 = state_68705__$1;
(statearr_68711_68819[(2)] = inst_68689);

(statearr_68711_68819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68706 === (6))){
var inst_68691 = (state_68705[(8)]);
var inst_68686 = (state_68705[(7)]);
var inst_68691__$1 = cljs.core.async.chan.call(null,(1));
var inst_68692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68693 = [inst_68686,inst_68691__$1];
var inst_68694 = (new cljs.core.PersistentVector(null,2,(5),inst_68692,inst_68693,null));
var state_68705__$1 = (function (){var statearr_68712 = state_68705;
(statearr_68712[(8)] = inst_68691__$1);

return statearr_68712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68705__$1,(8),jobs,inst_68694);
} else {
if((state_val_68706 === (7))){
var inst_68701 = (state_68705[(2)]);
var state_68705__$1 = state_68705;
var statearr_68713_68820 = state_68705__$1;
(statearr_68713_68820[(2)] = inst_68701);

(statearr_68713_68820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68706 === (8))){
var inst_68691 = (state_68705[(8)]);
var inst_68696 = (state_68705[(2)]);
var state_68705__$1 = (function (){var statearr_68714 = state_68705;
(statearr_68714[(9)] = inst_68696);

return statearr_68714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68705__$1,(9),results,inst_68691);
} else {
if((state_val_68706 === (9))){
var inst_68698 = (state_68705[(2)]);
var state_68705__$1 = (function (){var statearr_68715 = state_68705;
(statearr_68715[(10)] = inst_68698);

return statearr_68715;
})();
var statearr_68716_68821 = state_68705__$1;
(statearr_68716_68821[(2)] = null);

(statearr_68716_68821[(1)] = (2));


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
});})(c__68452__auto___68815,jobs,results,process,async))
;
return ((function (switch__68362__auto__,c__68452__auto___68815,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0 = (function (){
var statearr_68717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__);

(statearr_68717[(1)] = (1));

return statearr_68717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1 = (function (state_68705){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68718){if((e68718 instanceof Object)){
var ex__68366__auto__ = e68718;
var statearr_68719_68822 = state_68705;
(statearr_68719_68822[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68823 = state_68705;
state_68705 = G__68823;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = function(state_68705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1.call(this,state_68705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___68815,jobs,results,process,async))
})();
var state__68454__auto__ = (function (){var statearr_68720 = f__68453__auto__.call(null);
(statearr_68720[(6)] = c__68452__auto___68815);

return statearr_68720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___68815,jobs,results,process,async))
);


var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__,jobs,results,process,async){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__,jobs,results,process,async){
return (function (state_68758){
var state_val_68759 = (state_68758[(1)]);
if((state_val_68759 === (7))){
var inst_68754 = (state_68758[(2)]);
var state_68758__$1 = state_68758;
var statearr_68760_68824 = state_68758__$1;
(statearr_68760_68824[(2)] = inst_68754);

(statearr_68760_68824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (20))){
var state_68758__$1 = state_68758;
var statearr_68761_68825 = state_68758__$1;
(statearr_68761_68825[(2)] = null);

(statearr_68761_68825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (1))){
var state_68758__$1 = state_68758;
var statearr_68762_68826 = state_68758__$1;
(statearr_68762_68826[(2)] = null);

(statearr_68762_68826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (4))){
var inst_68723 = (state_68758[(7)]);
var inst_68723__$1 = (state_68758[(2)]);
var inst_68724 = (inst_68723__$1 == null);
var state_68758__$1 = (function (){var statearr_68763 = state_68758;
(statearr_68763[(7)] = inst_68723__$1);

return statearr_68763;
})();
if(cljs.core.truth_(inst_68724)){
var statearr_68764_68827 = state_68758__$1;
(statearr_68764_68827[(1)] = (5));

} else {
var statearr_68765_68828 = state_68758__$1;
(statearr_68765_68828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (15))){
var inst_68736 = (state_68758[(8)]);
var state_68758__$1 = state_68758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68758__$1,(18),to,inst_68736);
} else {
if((state_val_68759 === (21))){
var inst_68749 = (state_68758[(2)]);
var state_68758__$1 = state_68758;
var statearr_68766_68829 = state_68758__$1;
(statearr_68766_68829[(2)] = inst_68749);

(statearr_68766_68829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (13))){
var inst_68751 = (state_68758[(2)]);
var state_68758__$1 = (function (){var statearr_68767 = state_68758;
(statearr_68767[(9)] = inst_68751);

return statearr_68767;
})();
var statearr_68768_68830 = state_68758__$1;
(statearr_68768_68830[(2)] = null);

(statearr_68768_68830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (6))){
var inst_68723 = (state_68758[(7)]);
var state_68758__$1 = state_68758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68758__$1,(11),inst_68723);
} else {
if((state_val_68759 === (17))){
var inst_68744 = (state_68758[(2)]);
var state_68758__$1 = state_68758;
if(cljs.core.truth_(inst_68744)){
var statearr_68769_68831 = state_68758__$1;
(statearr_68769_68831[(1)] = (19));

} else {
var statearr_68770_68832 = state_68758__$1;
(statearr_68770_68832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (3))){
var inst_68756 = (state_68758[(2)]);
var state_68758__$1 = state_68758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68758__$1,inst_68756);
} else {
if((state_val_68759 === (12))){
var inst_68733 = (state_68758[(10)]);
var state_68758__$1 = state_68758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68758__$1,(14),inst_68733);
} else {
if((state_val_68759 === (2))){
var state_68758__$1 = state_68758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68758__$1,(4),results);
} else {
if((state_val_68759 === (19))){
var state_68758__$1 = state_68758;
var statearr_68771_68833 = state_68758__$1;
(statearr_68771_68833[(2)] = null);

(statearr_68771_68833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (11))){
var inst_68733 = (state_68758[(2)]);
var state_68758__$1 = (function (){var statearr_68772 = state_68758;
(statearr_68772[(10)] = inst_68733);

return statearr_68772;
})();
var statearr_68773_68834 = state_68758__$1;
(statearr_68773_68834[(2)] = null);

(statearr_68773_68834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (9))){
var state_68758__$1 = state_68758;
var statearr_68774_68835 = state_68758__$1;
(statearr_68774_68835[(2)] = null);

(statearr_68774_68835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (5))){
var state_68758__$1 = state_68758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68775_68836 = state_68758__$1;
(statearr_68775_68836[(1)] = (8));

} else {
var statearr_68776_68837 = state_68758__$1;
(statearr_68776_68837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (14))){
var inst_68736 = (state_68758[(8)]);
var inst_68738 = (state_68758[(11)]);
var inst_68736__$1 = (state_68758[(2)]);
var inst_68737 = (inst_68736__$1 == null);
var inst_68738__$1 = cljs.core.not.call(null,inst_68737);
var state_68758__$1 = (function (){var statearr_68777 = state_68758;
(statearr_68777[(8)] = inst_68736__$1);

(statearr_68777[(11)] = inst_68738__$1);

return statearr_68777;
})();
if(inst_68738__$1){
var statearr_68778_68838 = state_68758__$1;
(statearr_68778_68838[(1)] = (15));

} else {
var statearr_68779_68839 = state_68758__$1;
(statearr_68779_68839[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (16))){
var inst_68738 = (state_68758[(11)]);
var state_68758__$1 = state_68758;
var statearr_68780_68840 = state_68758__$1;
(statearr_68780_68840[(2)] = inst_68738);

(statearr_68780_68840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (10))){
var inst_68730 = (state_68758[(2)]);
var state_68758__$1 = state_68758;
var statearr_68781_68841 = state_68758__$1;
(statearr_68781_68841[(2)] = inst_68730);

(statearr_68781_68841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (18))){
var inst_68741 = (state_68758[(2)]);
var state_68758__$1 = state_68758;
var statearr_68782_68842 = state_68758__$1;
(statearr_68782_68842[(2)] = inst_68741);

(statearr_68782_68842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68759 === (8))){
var inst_68727 = cljs.core.async.close_BANG_.call(null,to);
var state_68758__$1 = state_68758;
var statearr_68783_68843 = state_68758__$1;
(statearr_68783_68843[(2)] = inst_68727);

(statearr_68783_68843[(1)] = (10));


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
});})(c__68452__auto__,jobs,results,process,async))
;
return ((function (switch__68362__auto__,c__68452__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0 = (function (){
var statearr_68784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__);

(statearr_68784[(1)] = (1));

return statearr_68784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1 = (function (state_68758){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68785){if((e68785 instanceof Object)){
var ex__68366__auto__ = e68785;
var statearr_68786_68844 = state_68758;
(statearr_68786_68844[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68845 = state_68758;
state_68758 = G__68845;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__ = function(state_68758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1.call(this,state_68758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__,jobs,results,process,async))
})();
var state__68454__auto__ = (function (){var statearr_68787 = f__68453__auto__.call(null);
(statearr_68787[(6)] = c__68452__auto__);

return statearr_68787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__,jobs,results,process,async))
);

return c__68452__auto__;
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
var G__68847 = arguments.length;
switch (G__68847) {
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
var G__68850 = arguments.length;
switch (G__68850) {
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
var G__68853 = arguments.length;
switch (G__68853) {
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
var c__68452__auto___68902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___68902,tc,fc){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___68902,tc,fc){
return (function (state_68879){
var state_val_68880 = (state_68879[(1)]);
if((state_val_68880 === (7))){
var inst_68875 = (state_68879[(2)]);
var state_68879__$1 = state_68879;
var statearr_68881_68903 = state_68879__$1;
(statearr_68881_68903[(2)] = inst_68875);

(statearr_68881_68903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (1))){
var state_68879__$1 = state_68879;
var statearr_68882_68904 = state_68879__$1;
(statearr_68882_68904[(2)] = null);

(statearr_68882_68904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (4))){
var inst_68856 = (state_68879[(7)]);
var inst_68856__$1 = (state_68879[(2)]);
var inst_68857 = (inst_68856__$1 == null);
var state_68879__$1 = (function (){var statearr_68883 = state_68879;
(statearr_68883[(7)] = inst_68856__$1);

return statearr_68883;
})();
if(cljs.core.truth_(inst_68857)){
var statearr_68884_68905 = state_68879__$1;
(statearr_68884_68905[(1)] = (5));

} else {
var statearr_68885_68906 = state_68879__$1;
(statearr_68885_68906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (13))){
var state_68879__$1 = state_68879;
var statearr_68886_68907 = state_68879__$1;
(statearr_68886_68907[(2)] = null);

(statearr_68886_68907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (6))){
var inst_68856 = (state_68879[(7)]);
var inst_68862 = p.call(null,inst_68856);
var state_68879__$1 = state_68879;
if(cljs.core.truth_(inst_68862)){
var statearr_68887_68908 = state_68879__$1;
(statearr_68887_68908[(1)] = (9));

} else {
var statearr_68888_68909 = state_68879__$1;
(statearr_68888_68909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (3))){
var inst_68877 = (state_68879[(2)]);
var state_68879__$1 = state_68879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68879__$1,inst_68877);
} else {
if((state_val_68880 === (12))){
var state_68879__$1 = state_68879;
var statearr_68889_68910 = state_68879__$1;
(statearr_68889_68910[(2)] = null);

(statearr_68889_68910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (2))){
var state_68879__$1 = state_68879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68879__$1,(4),ch);
} else {
if((state_val_68880 === (11))){
var inst_68856 = (state_68879[(7)]);
var inst_68866 = (state_68879[(2)]);
var state_68879__$1 = state_68879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68879__$1,(8),inst_68866,inst_68856);
} else {
if((state_val_68880 === (9))){
var state_68879__$1 = state_68879;
var statearr_68890_68911 = state_68879__$1;
(statearr_68890_68911[(2)] = tc);

(statearr_68890_68911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (5))){
var inst_68859 = cljs.core.async.close_BANG_.call(null,tc);
var inst_68860 = cljs.core.async.close_BANG_.call(null,fc);
var state_68879__$1 = (function (){var statearr_68891 = state_68879;
(statearr_68891[(8)] = inst_68859);

return statearr_68891;
})();
var statearr_68892_68912 = state_68879__$1;
(statearr_68892_68912[(2)] = inst_68860);

(statearr_68892_68912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (14))){
var inst_68873 = (state_68879[(2)]);
var state_68879__$1 = state_68879;
var statearr_68893_68913 = state_68879__$1;
(statearr_68893_68913[(2)] = inst_68873);

(statearr_68893_68913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (10))){
var state_68879__$1 = state_68879;
var statearr_68894_68914 = state_68879__$1;
(statearr_68894_68914[(2)] = fc);

(statearr_68894_68914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68880 === (8))){
var inst_68868 = (state_68879[(2)]);
var state_68879__$1 = state_68879;
if(cljs.core.truth_(inst_68868)){
var statearr_68895_68915 = state_68879__$1;
(statearr_68895_68915[(1)] = (12));

} else {
var statearr_68896_68916 = state_68879__$1;
(statearr_68896_68916[(1)] = (13));

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
});})(c__68452__auto___68902,tc,fc))
;
return ((function (switch__68362__auto__,c__68452__auto___68902,tc,fc){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_68897 = [null,null,null,null,null,null,null,null,null];
(statearr_68897[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_68897[(1)] = (1));

return statearr_68897;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_68879){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68898){if((e68898 instanceof Object)){
var ex__68366__auto__ = e68898;
var statearr_68899_68917 = state_68879;
(statearr_68899_68917[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68918 = state_68879;
state_68879 = G__68918;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_68879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_68879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___68902,tc,fc))
})();
var state__68454__auto__ = (function (){var statearr_68900 = f__68453__auto__.call(null);
(statearr_68900[(6)] = c__68452__auto___68902);

return statearr_68900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___68902,tc,fc))
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
var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__){
return (function (state_68939){
var state_val_68940 = (state_68939[(1)]);
if((state_val_68940 === (7))){
var inst_68935 = (state_68939[(2)]);
var state_68939__$1 = state_68939;
var statearr_68941_68959 = state_68939__$1;
(statearr_68941_68959[(2)] = inst_68935);

(statearr_68941_68959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68940 === (1))){
var inst_68919 = init;
var state_68939__$1 = (function (){var statearr_68942 = state_68939;
(statearr_68942[(7)] = inst_68919);

return statearr_68942;
})();
var statearr_68943_68960 = state_68939__$1;
(statearr_68943_68960[(2)] = null);

(statearr_68943_68960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68940 === (4))){
var inst_68922 = (state_68939[(8)]);
var inst_68922__$1 = (state_68939[(2)]);
var inst_68923 = (inst_68922__$1 == null);
var state_68939__$1 = (function (){var statearr_68944 = state_68939;
(statearr_68944[(8)] = inst_68922__$1);

return statearr_68944;
})();
if(cljs.core.truth_(inst_68923)){
var statearr_68945_68961 = state_68939__$1;
(statearr_68945_68961[(1)] = (5));

} else {
var statearr_68946_68962 = state_68939__$1;
(statearr_68946_68962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68940 === (6))){
var inst_68922 = (state_68939[(8)]);
var inst_68919 = (state_68939[(7)]);
var inst_68926 = (state_68939[(9)]);
var inst_68926__$1 = f.call(null,inst_68919,inst_68922);
var inst_68927 = cljs.core.reduced_QMARK_.call(null,inst_68926__$1);
var state_68939__$1 = (function (){var statearr_68947 = state_68939;
(statearr_68947[(9)] = inst_68926__$1);

return statearr_68947;
})();
if(inst_68927){
var statearr_68948_68963 = state_68939__$1;
(statearr_68948_68963[(1)] = (8));

} else {
var statearr_68949_68964 = state_68939__$1;
(statearr_68949_68964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68940 === (3))){
var inst_68937 = (state_68939[(2)]);
var state_68939__$1 = state_68939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68939__$1,inst_68937);
} else {
if((state_val_68940 === (2))){
var state_68939__$1 = state_68939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68939__$1,(4),ch);
} else {
if((state_val_68940 === (9))){
var inst_68926 = (state_68939[(9)]);
var inst_68919 = inst_68926;
var state_68939__$1 = (function (){var statearr_68950 = state_68939;
(statearr_68950[(7)] = inst_68919);

return statearr_68950;
})();
var statearr_68951_68965 = state_68939__$1;
(statearr_68951_68965[(2)] = null);

(statearr_68951_68965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68940 === (5))){
var inst_68919 = (state_68939[(7)]);
var state_68939__$1 = state_68939;
var statearr_68952_68966 = state_68939__$1;
(statearr_68952_68966[(2)] = inst_68919);

(statearr_68952_68966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68940 === (10))){
var inst_68933 = (state_68939[(2)]);
var state_68939__$1 = state_68939;
var statearr_68953_68967 = state_68939__$1;
(statearr_68953_68967[(2)] = inst_68933);

(statearr_68953_68967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68940 === (8))){
var inst_68926 = (state_68939[(9)]);
var inst_68929 = cljs.core.deref.call(null,inst_68926);
var state_68939__$1 = state_68939;
var statearr_68954_68968 = state_68939__$1;
(statearr_68954_68968[(2)] = inst_68929);

(statearr_68954_68968[(1)] = (10));


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
});})(c__68452__auto__))
;
return ((function (switch__68362__auto__,c__68452__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__68363__auto__ = null;
var cljs$core$async$reduce_$_state_machine__68363__auto____0 = (function (){
var statearr_68955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_68955[(0)] = cljs$core$async$reduce_$_state_machine__68363__auto__);

(statearr_68955[(1)] = (1));

return statearr_68955;
});
var cljs$core$async$reduce_$_state_machine__68363__auto____1 = (function (state_68939){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68956){if((e68956 instanceof Object)){
var ex__68366__auto__ = e68956;
var statearr_68957_68969 = state_68939;
(statearr_68957_68969[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68970 = state_68939;
state_68939 = G__68970;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__68363__auto__ = function(state_68939){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__68363__auto____1.call(this,state_68939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__68363__auto____0;
cljs$core$async$reduce_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__68363__auto____1;
return cljs$core$async$reduce_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__))
})();
var state__68454__auto__ = (function (){var statearr_68958 = f__68453__auto__.call(null);
(statearr_68958[(6)] = c__68452__auto__);

return statearr_68958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__))
);

return c__68452__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__,f__$1){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__,f__$1){
return (function (state_68976){
var state_val_68977 = (state_68976[(1)]);
if((state_val_68977 === (1))){
var inst_68971 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_68976__$1 = state_68976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68976__$1,(2),inst_68971);
} else {
if((state_val_68977 === (2))){
var inst_68973 = (state_68976[(2)]);
var inst_68974 = f__$1.call(null,inst_68973);
var state_68976__$1 = state_68976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68976__$1,inst_68974);
} else {
return null;
}
}
});})(c__68452__auto__,f__$1))
;
return ((function (switch__68362__auto__,c__68452__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__68363__auto__ = null;
var cljs$core$async$transduce_$_state_machine__68363__auto____0 = (function (){
var statearr_68978 = [null,null,null,null,null,null,null];
(statearr_68978[(0)] = cljs$core$async$transduce_$_state_machine__68363__auto__);

(statearr_68978[(1)] = (1));

return statearr_68978;
});
var cljs$core$async$transduce_$_state_machine__68363__auto____1 = (function (state_68976){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_68976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e68979){if((e68979 instanceof Object)){
var ex__68366__auto__ = e68979;
var statearr_68980_68982 = state_68976;
(statearr_68980_68982[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68983 = state_68976;
state_68976 = G__68983;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__68363__auto__ = function(state_68976){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__68363__auto____1.call(this,state_68976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__68363__auto____0;
cljs$core$async$transduce_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__68363__auto____1;
return cljs$core$async$transduce_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__,f__$1))
})();
var state__68454__auto__ = (function (){var statearr_68981 = f__68453__auto__.call(null);
(statearr_68981[(6)] = c__68452__auto__);

return statearr_68981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__,f__$1))
);

return c__68452__auto__;
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
var G__68985 = arguments.length;
switch (G__68985) {
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
var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__){
return (function (state_69010){
var state_val_69011 = (state_69010[(1)]);
if((state_val_69011 === (7))){
var inst_68992 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69012_69033 = state_69010__$1;
(statearr_69012_69033[(2)] = inst_68992);

(statearr_69012_69033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (1))){
var inst_68986 = cljs.core.seq.call(null,coll);
var inst_68987 = inst_68986;
var state_69010__$1 = (function (){var statearr_69013 = state_69010;
(statearr_69013[(7)] = inst_68987);

return statearr_69013;
})();
var statearr_69014_69034 = state_69010__$1;
(statearr_69014_69034[(2)] = null);

(statearr_69014_69034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (4))){
var inst_68987 = (state_69010[(7)]);
var inst_68990 = cljs.core.first.call(null,inst_68987);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69010__$1,(7),ch,inst_68990);
} else {
if((state_val_69011 === (13))){
var inst_69004 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69015_69035 = state_69010__$1;
(statearr_69015_69035[(2)] = inst_69004);

(statearr_69015_69035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (6))){
var inst_68995 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68995)){
var statearr_69016_69036 = state_69010__$1;
(statearr_69016_69036[(1)] = (8));

} else {
var statearr_69017_69037 = state_69010__$1;
(statearr_69017_69037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (3))){
var inst_69008 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69010__$1,inst_69008);
} else {
if((state_val_69011 === (12))){
var state_69010__$1 = state_69010;
var statearr_69018_69038 = state_69010__$1;
(statearr_69018_69038[(2)] = null);

(statearr_69018_69038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (2))){
var inst_68987 = (state_69010[(7)]);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68987)){
var statearr_69019_69039 = state_69010__$1;
(statearr_69019_69039[(1)] = (4));

} else {
var statearr_69020_69040 = state_69010__$1;
(statearr_69020_69040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (11))){
var inst_69001 = cljs.core.async.close_BANG_.call(null,ch);
var state_69010__$1 = state_69010;
var statearr_69021_69041 = state_69010__$1;
(statearr_69021_69041[(2)] = inst_69001);

(statearr_69021_69041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (9))){
var state_69010__$1 = state_69010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69022_69042 = state_69010__$1;
(statearr_69022_69042[(1)] = (11));

} else {
var statearr_69023_69043 = state_69010__$1;
(statearr_69023_69043[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (5))){
var inst_68987 = (state_69010[(7)]);
var state_69010__$1 = state_69010;
var statearr_69024_69044 = state_69010__$1;
(statearr_69024_69044[(2)] = inst_68987);

(statearr_69024_69044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (10))){
var inst_69006 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69025_69045 = state_69010__$1;
(statearr_69025_69045[(2)] = inst_69006);

(statearr_69025_69045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (8))){
var inst_68987 = (state_69010[(7)]);
var inst_68997 = cljs.core.next.call(null,inst_68987);
var inst_68987__$1 = inst_68997;
var state_69010__$1 = (function (){var statearr_69026 = state_69010;
(statearr_69026[(7)] = inst_68987__$1);

return statearr_69026;
})();
var statearr_69027_69046 = state_69010__$1;
(statearr_69027_69046[(2)] = null);

(statearr_69027_69046[(1)] = (2));


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
});})(c__68452__auto__))
;
return ((function (switch__68362__auto__,c__68452__auto__){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_69028 = [null,null,null,null,null,null,null,null];
(statearr_69028[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_69028[(1)] = (1));

return statearr_69028;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_69010){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_69010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e69029){if((e69029 instanceof Object)){
var ex__68366__auto__ = e69029;
var statearr_69030_69047 = state_69010;
(statearr_69030_69047[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69048 = state_69010;
state_69010 = G__69048;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_69010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_69010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__))
})();
var state__68454__auto__ = (function (){var statearr_69031 = f__68453__auto__.call(null);
(statearr_69031[(6)] = c__68452__auto__);

return statearr_69031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__))
);

return c__68452__auto__;
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
var x__20593__auto__ = (((_ == null))?null:_);
var m__20594__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,_);
} else {
var m__20594__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,_);
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
var x__20593__auto__ = (((m == null))?null:m);
var m__20594__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20594__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20593__auto__ = (((m == null))?null:m);
var m__20594__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,m,ch);
} else {
var m__20594__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,m,ch);
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
var x__20593__auto__ = (((m == null))?null:m);
var m__20594__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,m);
} else {
var m__20594__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async69049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69049 = (function (ch,cs,meta69050){
this.ch = ch;
this.cs = cs;
this.meta69050 = meta69050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_69051,meta69050__$1){
var self__ = this;
var _69051__$1 = this;
return (new cljs.core.async.t_cljs$core$async69049(self__.ch,self__.cs,meta69050__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async69049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_69051){
var self__ = this;
var _69051__$1 = this;
return self__.meta69050;
});})(cs))
;

cljs.core.async.t_cljs$core$async69049.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async69049.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69049.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69049.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69049.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69049.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69050","meta69050",-757717952,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async69049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69049";

cljs.core.async.t_cljs$core$async69049.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async69049");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async69049 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async69049(ch__$1,cs__$1,meta69050){
return (new cljs.core.async.t_cljs$core$async69049(ch__$1,cs__$1,meta69050));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async69049(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__68452__auto___69271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___69271,cs,m,dchan,dctr,done){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___69271,cs,m,dchan,dctr,done){
return (function (state_69186){
var state_val_69187 = (state_69186[(1)]);
if((state_val_69187 === (7))){
var inst_69182 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69188_69272 = state_69186__$1;
(statearr_69188_69272[(2)] = inst_69182);

(statearr_69188_69272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (20))){
var inst_69085 = (state_69186[(7)]);
var inst_69097 = cljs.core.first.call(null,inst_69085);
var inst_69098 = cljs.core.nth.call(null,inst_69097,(0),null);
var inst_69099 = cljs.core.nth.call(null,inst_69097,(1),null);
var state_69186__$1 = (function (){var statearr_69189 = state_69186;
(statearr_69189[(8)] = inst_69098);

return statearr_69189;
})();
if(cljs.core.truth_(inst_69099)){
var statearr_69190_69273 = state_69186__$1;
(statearr_69190_69273[(1)] = (22));

} else {
var statearr_69191_69274 = state_69186__$1;
(statearr_69191_69274[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (27))){
var inst_69129 = (state_69186[(9)]);
var inst_69134 = (state_69186[(10)]);
var inst_69054 = (state_69186[(11)]);
var inst_69127 = (state_69186[(12)]);
var inst_69134__$1 = cljs.core._nth.call(null,inst_69127,inst_69129);
var inst_69135 = cljs.core.async.put_BANG_.call(null,inst_69134__$1,inst_69054,done);
var state_69186__$1 = (function (){var statearr_69192 = state_69186;
(statearr_69192[(10)] = inst_69134__$1);

return statearr_69192;
})();
if(cljs.core.truth_(inst_69135)){
var statearr_69193_69275 = state_69186__$1;
(statearr_69193_69275[(1)] = (30));

} else {
var statearr_69194_69276 = state_69186__$1;
(statearr_69194_69276[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (1))){
var state_69186__$1 = state_69186;
var statearr_69195_69277 = state_69186__$1;
(statearr_69195_69277[(2)] = null);

(statearr_69195_69277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (24))){
var inst_69085 = (state_69186[(7)]);
var inst_69104 = (state_69186[(2)]);
var inst_69105 = cljs.core.next.call(null,inst_69085);
var inst_69063 = inst_69105;
var inst_69064 = null;
var inst_69065 = (0);
var inst_69066 = (0);
var state_69186__$1 = (function (){var statearr_69196 = state_69186;
(statearr_69196[(13)] = inst_69066);

(statearr_69196[(14)] = inst_69065);

(statearr_69196[(15)] = inst_69064);

(statearr_69196[(16)] = inst_69104);

(statearr_69196[(17)] = inst_69063);

return statearr_69196;
})();
var statearr_69197_69278 = state_69186__$1;
(statearr_69197_69278[(2)] = null);

(statearr_69197_69278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (39))){
var state_69186__$1 = state_69186;
var statearr_69201_69279 = state_69186__$1;
(statearr_69201_69279[(2)] = null);

(statearr_69201_69279[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (4))){
var inst_69054 = (state_69186[(11)]);
var inst_69054__$1 = (state_69186[(2)]);
var inst_69055 = (inst_69054__$1 == null);
var state_69186__$1 = (function (){var statearr_69202 = state_69186;
(statearr_69202[(11)] = inst_69054__$1);

return statearr_69202;
})();
if(cljs.core.truth_(inst_69055)){
var statearr_69203_69280 = state_69186__$1;
(statearr_69203_69280[(1)] = (5));

} else {
var statearr_69204_69281 = state_69186__$1;
(statearr_69204_69281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (15))){
var inst_69066 = (state_69186[(13)]);
var inst_69065 = (state_69186[(14)]);
var inst_69064 = (state_69186[(15)]);
var inst_69063 = (state_69186[(17)]);
var inst_69081 = (state_69186[(2)]);
var inst_69082 = (inst_69066 + (1));
var tmp69198 = inst_69065;
var tmp69199 = inst_69064;
var tmp69200 = inst_69063;
var inst_69063__$1 = tmp69200;
var inst_69064__$1 = tmp69199;
var inst_69065__$1 = tmp69198;
var inst_69066__$1 = inst_69082;
var state_69186__$1 = (function (){var statearr_69205 = state_69186;
(statearr_69205[(13)] = inst_69066__$1);

(statearr_69205[(18)] = inst_69081);

(statearr_69205[(14)] = inst_69065__$1);

(statearr_69205[(15)] = inst_69064__$1);

(statearr_69205[(17)] = inst_69063__$1);

return statearr_69205;
})();
var statearr_69206_69282 = state_69186__$1;
(statearr_69206_69282[(2)] = null);

(statearr_69206_69282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (21))){
var inst_69108 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69210_69283 = state_69186__$1;
(statearr_69210_69283[(2)] = inst_69108);

(statearr_69210_69283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (31))){
var inst_69134 = (state_69186[(10)]);
var inst_69138 = done.call(null,null);
var inst_69139 = cljs.core.async.untap_STAR_.call(null,m,inst_69134);
var state_69186__$1 = (function (){var statearr_69211 = state_69186;
(statearr_69211[(19)] = inst_69138);

return statearr_69211;
})();
var statearr_69212_69284 = state_69186__$1;
(statearr_69212_69284[(2)] = inst_69139);

(statearr_69212_69284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (32))){
var inst_69129 = (state_69186[(9)]);
var inst_69128 = (state_69186[(20)]);
var inst_69126 = (state_69186[(21)]);
var inst_69127 = (state_69186[(12)]);
var inst_69141 = (state_69186[(2)]);
var inst_69142 = (inst_69129 + (1));
var tmp69207 = inst_69128;
var tmp69208 = inst_69126;
var tmp69209 = inst_69127;
var inst_69126__$1 = tmp69208;
var inst_69127__$1 = tmp69209;
var inst_69128__$1 = tmp69207;
var inst_69129__$1 = inst_69142;
var state_69186__$1 = (function (){var statearr_69213 = state_69186;
(statearr_69213[(9)] = inst_69129__$1);

(statearr_69213[(20)] = inst_69128__$1);

(statearr_69213[(21)] = inst_69126__$1);

(statearr_69213[(22)] = inst_69141);

(statearr_69213[(12)] = inst_69127__$1);

return statearr_69213;
})();
var statearr_69214_69285 = state_69186__$1;
(statearr_69214_69285[(2)] = null);

(statearr_69214_69285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (40))){
var inst_69154 = (state_69186[(23)]);
var inst_69158 = done.call(null,null);
var inst_69159 = cljs.core.async.untap_STAR_.call(null,m,inst_69154);
var state_69186__$1 = (function (){var statearr_69215 = state_69186;
(statearr_69215[(24)] = inst_69158);

return statearr_69215;
})();
var statearr_69216_69286 = state_69186__$1;
(statearr_69216_69286[(2)] = inst_69159);

(statearr_69216_69286[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (33))){
var inst_69145 = (state_69186[(25)]);
var inst_69147 = cljs.core.chunked_seq_QMARK_.call(null,inst_69145);
var state_69186__$1 = state_69186;
if(inst_69147){
var statearr_69217_69287 = state_69186__$1;
(statearr_69217_69287[(1)] = (36));

} else {
var statearr_69218_69288 = state_69186__$1;
(statearr_69218_69288[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (13))){
var inst_69075 = (state_69186[(26)]);
var inst_69078 = cljs.core.async.close_BANG_.call(null,inst_69075);
var state_69186__$1 = state_69186;
var statearr_69219_69289 = state_69186__$1;
(statearr_69219_69289[(2)] = inst_69078);

(statearr_69219_69289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (22))){
var inst_69098 = (state_69186[(8)]);
var inst_69101 = cljs.core.async.close_BANG_.call(null,inst_69098);
var state_69186__$1 = state_69186;
var statearr_69220_69290 = state_69186__$1;
(statearr_69220_69290[(2)] = inst_69101);

(statearr_69220_69290[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (36))){
var inst_69145 = (state_69186[(25)]);
var inst_69149 = cljs.core.chunk_first.call(null,inst_69145);
var inst_69150 = cljs.core.chunk_rest.call(null,inst_69145);
var inst_69151 = cljs.core.count.call(null,inst_69149);
var inst_69126 = inst_69150;
var inst_69127 = inst_69149;
var inst_69128 = inst_69151;
var inst_69129 = (0);
var state_69186__$1 = (function (){var statearr_69221 = state_69186;
(statearr_69221[(9)] = inst_69129);

(statearr_69221[(20)] = inst_69128);

(statearr_69221[(21)] = inst_69126);

(statearr_69221[(12)] = inst_69127);

return statearr_69221;
})();
var statearr_69222_69291 = state_69186__$1;
(statearr_69222_69291[(2)] = null);

(statearr_69222_69291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (41))){
var inst_69145 = (state_69186[(25)]);
var inst_69161 = (state_69186[(2)]);
var inst_69162 = cljs.core.next.call(null,inst_69145);
var inst_69126 = inst_69162;
var inst_69127 = null;
var inst_69128 = (0);
var inst_69129 = (0);
var state_69186__$1 = (function (){var statearr_69223 = state_69186;
(statearr_69223[(9)] = inst_69129);

(statearr_69223[(20)] = inst_69128);

(statearr_69223[(21)] = inst_69126);

(statearr_69223[(27)] = inst_69161);

(statearr_69223[(12)] = inst_69127);

return statearr_69223;
})();
var statearr_69224_69292 = state_69186__$1;
(statearr_69224_69292[(2)] = null);

(statearr_69224_69292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (43))){
var state_69186__$1 = state_69186;
var statearr_69225_69293 = state_69186__$1;
(statearr_69225_69293[(2)] = null);

(statearr_69225_69293[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (29))){
var inst_69170 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69226_69294 = state_69186__$1;
(statearr_69226_69294[(2)] = inst_69170);

(statearr_69226_69294[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (44))){
var inst_69179 = (state_69186[(2)]);
var state_69186__$1 = (function (){var statearr_69227 = state_69186;
(statearr_69227[(28)] = inst_69179);

return statearr_69227;
})();
var statearr_69228_69295 = state_69186__$1;
(statearr_69228_69295[(2)] = null);

(statearr_69228_69295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (6))){
var inst_69118 = (state_69186[(29)]);
var inst_69117 = cljs.core.deref.call(null,cs);
var inst_69118__$1 = cljs.core.keys.call(null,inst_69117);
var inst_69119 = cljs.core.count.call(null,inst_69118__$1);
var inst_69120 = cljs.core.reset_BANG_.call(null,dctr,inst_69119);
var inst_69125 = cljs.core.seq.call(null,inst_69118__$1);
var inst_69126 = inst_69125;
var inst_69127 = null;
var inst_69128 = (0);
var inst_69129 = (0);
var state_69186__$1 = (function (){var statearr_69229 = state_69186;
(statearr_69229[(9)] = inst_69129);

(statearr_69229[(29)] = inst_69118__$1);

(statearr_69229[(30)] = inst_69120);

(statearr_69229[(20)] = inst_69128);

(statearr_69229[(21)] = inst_69126);

(statearr_69229[(12)] = inst_69127);

return statearr_69229;
})();
var statearr_69230_69296 = state_69186__$1;
(statearr_69230_69296[(2)] = null);

(statearr_69230_69296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (28))){
var inst_69126 = (state_69186[(21)]);
var inst_69145 = (state_69186[(25)]);
var inst_69145__$1 = cljs.core.seq.call(null,inst_69126);
var state_69186__$1 = (function (){var statearr_69231 = state_69186;
(statearr_69231[(25)] = inst_69145__$1);

return statearr_69231;
})();
if(inst_69145__$1){
var statearr_69232_69297 = state_69186__$1;
(statearr_69232_69297[(1)] = (33));

} else {
var statearr_69233_69298 = state_69186__$1;
(statearr_69233_69298[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (25))){
var inst_69129 = (state_69186[(9)]);
var inst_69128 = (state_69186[(20)]);
var inst_69131 = (inst_69129 < inst_69128);
var inst_69132 = inst_69131;
var state_69186__$1 = state_69186;
if(cljs.core.truth_(inst_69132)){
var statearr_69234_69299 = state_69186__$1;
(statearr_69234_69299[(1)] = (27));

} else {
var statearr_69235_69300 = state_69186__$1;
(statearr_69235_69300[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (34))){
var state_69186__$1 = state_69186;
var statearr_69236_69301 = state_69186__$1;
(statearr_69236_69301[(2)] = null);

(statearr_69236_69301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (17))){
var state_69186__$1 = state_69186;
var statearr_69237_69302 = state_69186__$1;
(statearr_69237_69302[(2)] = null);

(statearr_69237_69302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (3))){
var inst_69184 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69186__$1,inst_69184);
} else {
if((state_val_69187 === (12))){
var inst_69113 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69238_69303 = state_69186__$1;
(statearr_69238_69303[(2)] = inst_69113);

(statearr_69238_69303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (2))){
var state_69186__$1 = state_69186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69186__$1,(4),ch);
} else {
if((state_val_69187 === (23))){
var state_69186__$1 = state_69186;
var statearr_69239_69304 = state_69186__$1;
(statearr_69239_69304[(2)] = null);

(statearr_69239_69304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (35))){
var inst_69168 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69240_69305 = state_69186__$1;
(statearr_69240_69305[(2)] = inst_69168);

(statearr_69240_69305[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (19))){
var inst_69085 = (state_69186[(7)]);
var inst_69089 = cljs.core.chunk_first.call(null,inst_69085);
var inst_69090 = cljs.core.chunk_rest.call(null,inst_69085);
var inst_69091 = cljs.core.count.call(null,inst_69089);
var inst_69063 = inst_69090;
var inst_69064 = inst_69089;
var inst_69065 = inst_69091;
var inst_69066 = (0);
var state_69186__$1 = (function (){var statearr_69241 = state_69186;
(statearr_69241[(13)] = inst_69066);

(statearr_69241[(14)] = inst_69065);

(statearr_69241[(15)] = inst_69064);

(statearr_69241[(17)] = inst_69063);

return statearr_69241;
})();
var statearr_69242_69306 = state_69186__$1;
(statearr_69242_69306[(2)] = null);

(statearr_69242_69306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (11))){
var inst_69085 = (state_69186[(7)]);
var inst_69063 = (state_69186[(17)]);
var inst_69085__$1 = cljs.core.seq.call(null,inst_69063);
var state_69186__$1 = (function (){var statearr_69243 = state_69186;
(statearr_69243[(7)] = inst_69085__$1);

return statearr_69243;
})();
if(inst_69085__$1){
var statearr_69244_69307 = state_69186__$1;
(statearr_69244_69307[(1)] = (16));

} else {
var statearr_69245_69308 = state_69186__$1;
(statearr_69245_69308[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (9))){
var inst_69115 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69246_69309 = state_69186__$1;
(statearr_69246_69309[(2)] = inst_69115);

(statearr_69246_69309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (5))){
var inst_69061 = cljs.core.deref.call(null,cs);
var inst_69062 = cljs.core.seq.call(null,inst_69061);
var inst_69063 = inst_69062;
var inst_69064 = null;
var inst_69065 = (0);
var inst_69066 = (0);
var state_69186__$1 = (function (){var statearr_69247 = state_69186;
(statearr_69247[(13)] = inst_69066);

(statearr_69247[(14)] = inst_69065);

(statearr_69247[(15)] = inst_69064);

(statearr_69247[(17)] = inst_69063);

return statearr_69247;
})();
var statearr_69248_69310 = state_69186__$1;
(statearr_69248_69310[(2)] = null);

(statearr_69248_69310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (14))){
var state_69186__$1 = state_69186;
var statearr_69249_69311 = state_69186__$1;
(statearr_69249_69311[(2)] = null);

(statearr_69249_69311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (45))){
var inst_69176 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69250_69312 = state_69186__$1;
(statearr_69250_69312[(2)] = inst_69176);

(statearr_69250_69312[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (26))){
var inst_69118 = (state_69186[(29)]);
var inst_69172 = (state_69186[(2)]);
var inst_69173 = cljs.core.seq.call(null,inst_69118);
var state_69186__$1 = (function (){var statearr_69251 = state_69186;
(statearr_69251[(31)] = inst_69172);

return statearr_69251;
})();
if(inst_69173){
var statearr_69252_69313 = state_69186__$1;
(statearr_69252_69313[(1)] = (42));

} else {
var statearr_69253_69314 = state_69186__$1;
(statearr_69253_69314[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (16))){
var inst_69085 = (state_69186[(7)]);
var inst_69087 = cljs.core.chunked_seq_QMARK_.call(null,inst_69085);
var state_69186__$1 = state_69186;
if(inst_69087){
var statearr_69254_69315 = state_69186__$1;
(statearr_69254_69315[(1)] = (19));

} else {
var statearr_69255_69316 = state_69186__$1;
(statearr_69255_69316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (38))){
var inst_69165 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69256_69317 = state_69186__$1;
(statearr_69256_69317[(2)] = inst_69165);

(statearr_69256_69317[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (30))){
var state_69186__$1 = state_69186;
var statearr_69257_69318 = state_69186__$1;
(statearr_69257_69318[(2)] = null);

(statearr_69257_69318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (10))){
var inst_69066 = (state_69186[(13)]);
var inst_69064 = (state_69186[(15)]);
var inst_69074 = cljs.core._nth.call(null,inst_69064,inst_69066);
var inst_69075 = cljs.core.nth.call(null,inst_69074,(0),null);
var inst_69076 = cljs.core.nth.call(null,inst_69074,(1),null);
var state_69186__$1 = (function (){var statearr_69258 = state_69186;
(statearr_69258[(26)] = inst_69075);

return statearr_69258;
})();
if(cljs.core.truth_(inst_69076)){
var statearr_69259_69319 = state_69186__$1;
(statearr_69259_69319[(1)] = (13));

} else {
var statearr_69260_69320 = state_69186__$1;
(statearr_69260_69320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (18))){
var inst_69111 = (state_69186[(2)]);
var state_69186__$1 = state_69186;
var statearr_69261_69321 = state_69186__$1;
(statearr_69261_69321[(2)] = inst_69111);

(statearr_69261_69321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (42))){
var state_69186__$1 = state_69186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69186__$1,(45),dchan);
} else {
if((state_val_69187 === (37))){
var inst_69154 = (state_69186[(23)]);
var inst_69054 = (state_69186[(11)]);
var inst_69145 = (state_69186[(25)]);
var inst_69154__$1 = cljs.core.first.call(null,inst_69145);
var inst_69155 = cljs.core.async.put_BANG_.call(null,inst_69154__$1,inst_69054,done);
var state_69186__$1 = (function (){var statearr_69262 = state_69186;
(statearr_69262[(23)] = inst_69154__$1);

return statearr_69262;
})();
if(cljs.core.truth_(inst_69155)){
var statearr_69263_69322 = state_69186__$1;
(statearr_69263_69322[(1)] = (39));

} else {
var statearr_69264_69323 = state_69186__$1;
(statearr_69264_69323[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69187 === (8))){
var inst_69066 = (state_69186[(13)]);
var inst_69065 = (state_69186[(14)]);
var inst_69068 = (inst_69066 < inst_69065);
var inst_69069 = inst_69068;
var state_69186__$1 = state_69186;
if(cljs.core.truth_(inst_69069)){
var statearr_69265_69324 = state_69186__$1;
(statearr_69265_69324[(1)] = (10));

} else {
var statearr_69266_69325 = state_69186__$1;
(statearr_69266_69325[(1)] = (11));

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
});})(c__68452__auto___69271,cs,m,dchan,dctr,done))
;
return ((function (switch__68362__auto__,c__68452__auto___69271,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__68363__auto__ = null;
var cljs$core$async$mult_$_state_machine__68363__auto____0 = (function (){
var statearr_69267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69267[(0)] = cljs$core$async$mult_$_state_machine__68363__auto__);

(statearr_69267[(1)] = (1));

return statearr_69267;
});
var cljs$core$async$mult_$_state_machine__68363__auto____1 = (function (state_69186){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_69186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e69268){if((e69268 instanceof Object)){
var ex__68366__auto__ = e69268;
var statearr_69269_69326 = state_69186;
(statearr_69269_69326[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69327 = state_69186;
state_69186 = G__69327;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__68363__auto__ = function(state_69186){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__68363__auto____1.call(this,state_69186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__68363__auto____0;
cljs$core$async$mult_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__68363__auto____1;
return cljs$core$async$mult_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___69271,cs,m,dchan,dctr,done))
})();
var state__68454__auto__ = (function (){var statearr_69270 = f__68453__auto__.call(null);
(statearr_69270[(6)] = c__68452__auto___69271);

return statearr_69270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___69271,cs,m,dchan,dctr,done))
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
var G__69329 = arguments.length;
switch (G__69329) {
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
var x__20593__auto__ = (((m == null))?null:m);
var m__20594__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,m,ch);
} else {
var m__20594__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,m,ch);
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
var x__20593__auto__ = (((m == null))?null:m);
var m__20594__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,m,ch);
} else {
var m__20594__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,m,ch);
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
var x__20593__auto__ = (((m == null))?null:m);
var m__20594__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,m);
} else {
var m__20594__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,m);
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
var x__20593__auto__ = (((m == null))?null:m);
var m__20594__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,m,state_map);
} else {
var m__20594__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,m,state_map);
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
var x__20593__auto__ = (((m == null))?null:m);
var m__20594__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,m,mode);
} else {
var m__20594__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21754__auto__ = [];
var len__21740__auto___69341 = arguments.length;
var i__21741__auto___69342 = (0);
while(true){
if((i__21741__auto___69342 < len__21740__auto___69341)){
args__21754__auto__.push((arguments[i__21741__auto___69342]));

var G__69343 = (i__21741__auto___69342 + (1));
i__21741__auto___69342 = G__69343;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((3) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21755__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__69335){
var map__69336 = p__69335;
var map__69336__$1 = ((((!((map__69336 == null)))?((((map__69336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69336):map__69336);
var opts = map__69336__$1;
var statearr_69338_69344 = state;
(statearr_69338_69344[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__69336,map__69336__$1,opts){
return (function (val){
var statearr_69339_69345 = state;
(statearr_69339_69345[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__69336,map__69336__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_69340_69346 = state;
(statearr_69340_69346[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq69331){
var G__69332 = cljs.core.first.call(null,seq69331);
var seq69331__$1 = cljs.core.next.call(null,seq69331);
var G__69333 = cljs.core.first.call(null,seq69331__$1);
var seq69331__$2 = cljs.core.next.call(null,seq69331__$1);
var G__69334 = cljs.core.first.call(null,seq69331__$2);
var seq69331__$3 = cljs.core.next.call(null,seq69331__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69332,G__69333,G__69334,seq69331__$3);
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
if(typeof cljs.core.async.t_cljs$core$async69347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69347 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta69348){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta69348 = meta69348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69349,meta69348__$1){
var self__ = this;
var _69349__$1 = this;
return (new cljs.core.async.t_cljs$core$async69347(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta69348__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69349){
var self__ = this;
var _69349__$1 = this;
return self__.meta69348;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69347.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async69347.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta69348","meta69348",-85195899,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69347";

cljs.core.async.t_cljs$core$async69347.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async69347");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async69347 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async69347(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta69348){
return (new cljs.core.async.t_cljs$core$async69347(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta69348));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async69347(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__68452__auto___69511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___69511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___69511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_69451){
var state_val_69452 = (state_69451[(1)]);
if((state_val_69452 === (7))){
var inst_69366 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
var statearr_69453_69512 = state_69451__$1;
(statearr_69453_69512[(2)] = inst_69366);

(statearr_69453_69512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (20))){
var inst_69378 = (state_69451[(7)]);
var state_69451__$1 = state_69451;
var statearr_69454_69513 = state_69451__$1;
(statearr_69454_69513[(2)] = inst_69378);

(statearr_69454_69513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (27))){
var state_69451__$1 = state_69451;
var statearr_69455_69514 = state_69451__$1;
(statearr_69455_69514[(2)] = null);

(statearr_69455_69514[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (1))){
var inst_69353 = (state_69451[(8)]);
var inst_69353__$1 = calc_state.call(null);
var inst_69355 = (inst_69353__$1 == null);
var inst_69356 = cljs.core.not.call(null,inst_69355);
var state_69451__$1 = (function (){var statearr_69456 = state_69451;
(statearr_69456[(8)] = inst_69353__$1);

return statearr_69456;
})();
if(inst_69356){
var statearr_69457_69515 = state_69451__$1;
(statearr_69457_69515[(1)] = (2));

} else {
var statearr_69458_69516 = state_69451__$1;
(statearr_69458_69516[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (24))){
var inst_69411 = (state_69451[(9)]);
var inst_69425 = (state_69451[(10)]);
var inst_69402 = (state_69451[(11)]);
var inst_69425__$1 = inst_69402.call(null,inst_69411);
var state_69451__$1 = (function (){var statearr_69459 = state_69451;
(statearr_69459[(10)] = inst_69425__$1);

return statearr_69459;
})();
if(cljs.core.truth_(inst_69425__$1)){
var statearr_69460_69517 = state_69451__$1;
(statearr_69460_69517[(1)] = (29));

} else {
var statearr_69461_69518 = state_69451__$1;
(statearr_69461_69518[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (4))){
var inst_69369 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
if(cljs.core.truth_(inst_69369)){
var statearr_69462_69519 = state_69451__$1;
(statearr_69462_69519[(1)] = (8));

} else {
var statearr_69463_69520 = state_69451__$1;
(statearr_69463_69520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (15))){
var inst_69396 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
if(cljs.core.truth_(inst_69396)){
var statearr_69464_69521 = state_69451__$1;
(statearr_69464_69521[(1)] = (19));

} else {
var statearr_69465_69522 = state_69451__$1;
(statearr_69465_69522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (21))){
var inst_69401 = (state_69451[(12)]);
var inst_69401__$1 = (state_69451[(2)]);
var inst_69402 = cljs.core.get.call(null,inst_69401__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69403 = cljs.core.get.call(null,inst_69401__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69404 = cljs.core.get.call(null,inst_69401__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_69451__$1 = (function (){var statearr_69466 = state_69451;
(statearr_69466[(13)] = inst_69403);

(statearr_69466[(12)] = inst_69401__$1);

(statearr_69466[(11)] = inst_69402);

return statearr_69466;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_69451__$1,(22),inst_69404);
} else {
if((state_val_69452 === (31))){
var inst_69433 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
if(cljs.core.truth_(inst_69433)){
var statearr_69467_69523 = state_69451__$1;
(statearr_69467_69523[(1)] = (32));

} else {
var statearr_69468_69524 = state_69451__$1;
(statearr_69468_69524[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (32))){
var inst_69410 = (state_69451[(14)]);
var state_69451__$1 = state_69451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69451__$1,(35),out,inst_69410);
} else {
if((state_val_69452 === (33))){
var inst_69401 = (state_69451[(12)]);
var inst_69378 = inst_69401;
var state_69451__$1 = (function (){var statearr_69469 = state_69451;
(statearr_69469[(7)] = inst_69378);

return statearr_69469;
})();
var statearr_69470_69525 = state_69451__$1;
(statearr_69470_69525[(2)] = null);

(statearr_69470_69525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (13))){
var inst_69378 = (state_69451[(7)]);
var inst_69385 = inst_69378.cljs$lang$protocol_mask$partition0$;
var inst_69386 = (inst_69385 & (64));
var inst_69387 = inst_69378.cljs$core$ISeq$;
var inst_69388 = (cljs.core.PROTOCOL_SENTINEL === inst_69387);
var inst_69389 = (inst_69386) || (inst_69388);
var state_69451__$1 = state_69451;
if(cljs.core.truth_(inst_69389)){
var statearr_69471_69526 = state_69451__$1;
(statearr_69471_69526[(1)] = (16));

} else {
var statearr_69472_69527 = state_69451__$1;
(statearr_69472_69527[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (22))){
var inst_69411 = (state_69451[(9)]);
var inst_69410 = (state_69451[(14)]);
var inst_69409 = (state_69451[(2)]);
var inst_69410__$1 = cljs.core.nth.call(null,inst_69409,(0),null);
var inst_69411__$1 = cljs.core.nth.call(null,inst_69409,(1),null);
var inst_69412 = (inst_69410__$1 == null);
var inst_69413 = cljs.core._EQ_.call(null,inst_69411__$1,change);
var inst_69414 = (inst_69412) || (inst_69413);
var state_69451__$1 = (function (){var statearr_69473 = state_69451;
(statearr_69473[(9)] = inst_69411__$1);

(statearr_69473[(14)] = inst_69410__$1);

return statearr_69473;
})();
if(cljs.core.truth_(inst_69414)){
var statearr_69474_69528 = state_69451__$1;
(statearr_69474_69528[(1)] = (23));

} else {
var statearr_69475_69529 = state_69451__$1;
(statearr_69475_69529[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (36))){
var inst_69401 = (state_69451[(12)]);
var inst_69378 = inst_69401;
var state_69451__$1 = (function (){var statearr_69476 = state_69451;
(statearr_69476[(7)] = inst_69378);

return statearr_69476;
})();
var statearr_69477_69530 = state_69451__$1;
(statearr_69477_69530[(2)] = null);

(statearr_69477_69530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (29))){
var inst_69425 = (state_69451[(10)]);
var state_69451__$1 = state_69451;
var statearr_69478_69531 = state_69451__$1;
(statearr_69478_69531[(2)] = inst_69425);

(statearr_69478_69531[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (6))){
var state_69451__$1 = state_69451;
var statearr_69479_69532 = state_69451__$1;
(statearr_69479_69532[(2)] = false);

(statearr_69479_69532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (28))){
var inst_69421 = (state_69451[(2)]);
var inst_69422 = calc_state.call(null);
var inst_69378 = inst_69422;
var state_69451__$1 = (function (){var statearr_69480 = state_69451;
(statearr_69480[(7)] = inst_69378);

(statearr_69480[(15)] = inst_69421);

return statearr_69480;
})();
var statearr_69481_69533 = state_69451__$1;
(statearr_69481_69533[(2)] = null);

(statearr_69481_69533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (25))){
var inst_69447 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
var statearr_69482_69534 = state_69451__$1;
(statearr_69482_69534[(2)] = inst_69447);

(statearr_69482_69534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (34))){
var inst_69445 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
var statearr_69483_69535 = state_69451__$1;
(statearr_69483_69535[(2)] = inst_69445);

(statearr_69483_69535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (17))){
var state_69451__$1 = state_69451;
var statearr_69484_69536 = state_69451__$1;
(statearr_69484_69536[(2)] = false);

(statearr_69484_69536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (3))){
var state_69451__$1 = state_69451;
var statearr_69485_69537 = state_69451__$1;
(statearr_69485_69537[(2)] = false);

(statearr_69485_69537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (12))){
var inst_69449 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69451__$1,inst_69449);
} else {
if((state_val_69452 === (2))){
var inst_69353 = (state_69451[(8)]);
var inst_69358 = inst_69353.cljs$lang$protocol_mask$partition0$;
var inst_69359 = (inst_69358 & (64));
var inst_69360 = inst_69353.cljs$core$ISeq$;
var inst_69361 = (cljs.core.PROTOCOL_SENTINEL === inst_69360);
var inst_69362 = (inst_69359) || (inst_69361);
var state_69451__$1 = state_69451;
if(cljs.core.truth_(inst_69362)){
var statearr_69486_69538 = state_69451__$1;
(statearr_69486_69538[(1)] = (5));

} else {
var statearr_69487_69539 = state_69451__$1;
(statearr_69487_69539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (23))){
var inst_69410 = (state_69451[(14)]);
var inst_69416 = (inst_69410 == null);
var state_69451__$1 = state_69451;
if(cljs.core.truth_(inst_69416)){
var statearr_69488_69540 = state_69451__$1;
(statearr_69488_69540[(1)] = (26));

} else {
var statearr_69489_69541 = state_69451__$1;
(statearr_69489_69541[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (35))){
var inst_69436 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
if(cljs.core.truth_(inst_69436)){
var statearr_69490_69542 = state_69451__$1;
(statearr_69490_69542[(1)] = (36));

} else {
var statearr_69491_69543 = state_69451__$1;
(statearr_69491_69543[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (19))){
var inst_69378 = (state_69451[(7)]);
var inst_69398 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69378);
var state_69451__$1 = state_69451;
var statearr_69492_69544 = state_69451__$1;
(statearr_69492_69544[(2)] = inst_69398);

(statearr_69492_69544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (11))){
var inst_69378 = (state_69451[(7)]);
var inst_69382 = (inst_69378 == null);
var inst_69383 = cljs.core.not.call(null,inst_69382);
var state_69451__$1 = state_69451;
if(inst_69383){
var statearr_69493_69545 = state_69451__$1;
(statearr_69493_69545[(1)] = (13));

} else {
var statearr_69494_69546 = state_69451__$1;
(statearr_69494_69546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (9))){
var inst_69353 = (state_69451[(8)]);
var state_69451__$1 = state_69451;
var statearr_69495_69547 = state_69451__$1;
(statearr_69495_69547[(2)] = inst_69353);

(statearr_69495_69547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (5))){
var state_69451__$1 = state_69451;
var statearr_69496_69548 = state_69451__$1;
(statearr_69496_69548[(2)] = true);

(statearr_69496_69548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (14))){
var state_69451__$1 = state_69451;
var statearr_69497_69549 = state_69451__$1;
(statearr_69497_69549[(2)] = false);

(statearr_69497_69549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (26))){
var inst_69411 = (state_69451[(9)]);
var inst_69418 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_69411);
var state_69451__$1 = state_69451;
var statearr_69498_69550 = state_69451__$1;
(statearr_69498_69550[(2)] = inst_69418);

(statearr_69498_69550[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (16))){
var state_69451__$1 = state_69451;
var statearr_69499_69551 = state_69451__$1;
(statearr_69499_69551[(2)] = true);

(statearr_69499_69551[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (38))){
var inst_69441 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
var statearr_69500_69552 = state_69451__$1;
(statearr_69500_69552[(2)] = inst_69441);

(statearr_69500_69552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (30))){
var inst_69411 = (state_69451[(9)]);
var inst_69403 = (state_69451[(13)]);
var inst_69402 = (state_69451[(11)]);
var inst_69428 = cljs.core.empty_QMARK_.call(null,inst_69402);
var inst_69429 = inst_69403.call(null,inst_69411);
var inst_69430 = cljs.core.not.call(null,inst_69429);
var inst_69431 = (inst_69428) && (inst_69430);
var state_69451__$1 = state_69451;
var statearr_69501_69553 = state_69451__$1;
(statearr_69501_69553[(2)] = inst_69431);

(statearr_69501_69553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (10))){
var inst_69353 = (state_69451[(8)]);
var inst_69374 = (state_69451[(2)]);
var inst_69375 = cljs.core.get.call(null,inst_69374,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69376 = cljs.core.get.call(null,inst_69374,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69377 = cljs.core.get.call(null,inst_69374,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_69378 = inst_69353;
var state_69451__$1 = (function (){var statearr_69502 = state_69451;
(statearr_69502[(7)] = inst_69378);

(statearr_69502[(16)] = inst_69375);

(statearr_69502[(17)] = inst_69377);

(statearr_69502[(18)] = inst_69376);

return statearr_69502;
})();
var statearr_69503_69554 = state_69451__$1;
(statearr_69503_69554[(2)] = null);

(statearr_69503_69554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (18))){
var inst_69393 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
var statearr_69504_69555 = state_69451__$1;
(statearr_69504_69555[(2)] = inst_69393);

(statearr_69504_69555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (37))){
var state_69451__$1 = state_69451;
var statearr_69505_69556 = state_69451__$1;
(statearr_69505_69556[(2)] = null);

(statearr_69505_69556[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (8))){
var inst_69353 = (state_69451[(8)]);
var inst_69371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69353);
var state_69451__$1 = state_69451;
var statearr_69506_69557 = state_69451__$1;
(statearr_69506_69557[(2)] = inst_69371);

(statearr_69506_69557[(1)] = (10));


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
});})(c__68452__auto___69511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__68362__auto__,c__68452__auto___69511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__68363__auto__ = null;
var cljs$core$async$mix_$_state_machine__68363__auto____0 = (function (){
var statearr_69507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69507[(0)] = cljs$core$async$mix_$_state_machine__68363__auto__);

(statearr_69507[(1)] = (1));

return statearr_69507;
});
var cljs$core$async$mix_$_state_machine__68363__auto____1 = (function (state_69451){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_69451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e69508){if((e69508 instanceof Object)){
var ex__68366__auto__ = e69508;
var statearr_69509_69558 = state_69451;
(statearr_69509_69558[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69559 = state_69451;
state_69451 = G__69559;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__68363__auto__ = function(state_69451){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__68363__auto____1.call(this,state_69451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__68363__auto____0;
cljs$core$async$mix_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__68363__auto____1;
return cljs$core$async$mix_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___69511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__68454__auto__ = (function (){var statearr_69510 = f__68453__auto__.call(null);
(statearr_69510[(6)] = c__68452__auto___69511);

return statearr_69510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___69511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20593__auto__ = (((p == null))?null:p);
var m__20594__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20594__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20593__auto__ = (((p == null))?null:p);
var m__20594__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,p,v,ch);
} else {
var m__20594__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__69561 = arguments.length;
switch (G__69561) {
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
var x__20593__auto__ = (((p == null))?null:p);
var m__20594__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,p);
} else {
var m__20594__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,p);
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
var x__20593__auto__ = (((p == null))?null:p);
var m__20594__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,p,v);
} else {
var m__20594__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,p,v);
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
var G__69565 = arguments.length;
switch (G__69565) {
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
var or__19063__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19063__auto__,mults){
return (function (p1__69563_SHARP_){
if(cljs.core.truth_(p1__69563_SHARP_.call(null,topic))){
return p1__69563_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__69563_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19063__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async69566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69566 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta69567){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta69567 = meta69567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_69568,meta69567__$1){
var self__ = this;
var _69568__$1 = this;
return (new cljs.core.async.t_cljs$core$async69566(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta69567__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_69568){
var self__ = this;
var _69568__$1 = this;
return self__.meta69567;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69566.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69566.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta69567","meta69567",-136499026,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69566";

cljs.core.async.t_cljs$core$async69566.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async69566");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async69566 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async69566(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta69567){
return (new cljs.core.async.t_cljs$core$async69566(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta69567));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async69566(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__68452__auto___69686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___69686,mults,ensure_mult,p){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___69686,mults,ensure_mult,p){
return (function (state_69640){
var state_val_69641 = (state_69640[(1)]);
if((state_val_69641 === (7))){
var inst_69636 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
var statearr_69642_69687 = state_69640__$1;
(statearr_69642_69687[(2)] = inst_69636);

(statearr_69642_69687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (20))){
var state_69640__$1 = state_69640;
var statearr_69643_69688 = state_69640__$1;
(statearr_69643_69688[(2)] = null);

(statearr_69643_69688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (1))){
var state_69640__$1 = state_69640;
var statearr_69644_69689 = state_69640__$1;
(statearr_69644_69689[(2)] = null);

(statearr_69644_69689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (24))){
var inst_69619 = (state_69640[(7)]);
var inst_69628 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_69619);
var state_69640__$1 = state_69640;
var statearr_69645_69690 = state_69640__$1;
(statearr_69645_69690[(2)] = inst_69628);

(statearr_69645_69690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (4))){
var inst_69571 = (state_69640[(8)]);
var inst_69571__$1 = (state_69640[(2)]);
var inst_69572 = (inst_69571__$1 == null);
var state_69640__$1 = (function (){var statearr_69646 = state_69640;
(statearr_69646[(8)] = inst_69571__$1);

return statearr_69646;
})();
if(cljs.core.truth_(inst_69572)){
var statearr_69647_69691 = state_69640__$1;
(statearr_69647_69691[(1)] = (5));

} else {
var statearr_69648_69692 = state_69640__$1;
(statearr_69648_69692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (15))){
var inst_69613 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
var statearr_69649_69693 = state_69640__$1;
(statearr_69649_69693[(2)] = inst_69613);

(statearr_69649_69693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (21))){
var inst_69633 = (state_69640[(2)]);
var state_69640__$1 = (function (){var statearr_69650 = state_69640;
(statearr_69650[(9)] = inst_69633);

return statearr_69650;
})();
var statearr_69651_69694 = state_69640__$1;
(statearr_69651_69694[(2)] = null);

(statearr_69651_69694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (13))){
var inst_69595 = (state_69640[(10)]);
var inst_69597 = cljs.core.chunked_seq_QMARK_.call(null,inst_69595);
var state_69640__$1 = state_69640;
if(inst_69597){
var statearr_69652_69695 = state_69640__$1;
(statearr_69652_69695[(1)] = (16));

} else {
var statearr_69653_69696 = state_69640__$1;
(statearr_69653_69696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (22))){
var inst_69625 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
if(cljs.core.truth_(inst_69625)){
var statearr_69654_69697 = state_69640__$1;
(statearr_69654_69697[(1)] = (23));

} else {
var statearr_69655_69698 = state_69640__$1;
(statearr_69655_69698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (6))){
var inst_69619 = (state_69640[(7)]);
var inst_69571 = (state_69640[(8)]);
var inst_69621 = (state_69640[(11)]);
var inst_69619__$1 = topic_fn.call(null,inst_69571);
var inst_69620 = cljs.core.deref.call(null,mults);
var inst_69621__$1 = cljs.core.get.call(null,inst_69620,inst_69619__$1);
var state_69640__$1 = (function (){var statearr_69656 = state_69640;
(statearr_69656[(7)] = inst_69619__$1);

(statearr_69656[(11)] = inst_69621__$1);

return statearr_69656;
})();
if(cljs.core.truth_(inst_69621__$1)){
var statearr_69657_69699 = state_69640__$1;
(statearr_69657_69699[(1)] = (19));

} else {
var statearr_69658_69700 = state_69640__$1;
(statearr_69658_69700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (25))){
var inst_69630 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
var statearr_69659_69701 = state_69640__$1;
(statearr_69659_69701[(2)] = inst_69630);

(statearr_69659_69701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (17))){
var inst_69595 = (state_69640[(10)]);
var inst_69604 = cljs.core.first.call(null,inst_69595);
var inst_69605 = cljs.core.async.muxch_STAR_.call(null,inst_69604);
var inst_69606 = cljs.core.async.close_BANG_.call(null,inst_69605);
var inst_69607 = cljs.core.next.call(null,inst_69595);
var inst_69581 = inst_69607;
var inst_69582 = null;
var inst_69583 = (0);
var inst_69584 = (0);
var state_69640__$1 = (function (){var statearr_69660 = state_69640;
(statearr_69660[(12)] = inst_69582);

(statearr_69660[(13)] = inst_69581);

(statearr_69660[(14)] = inst_69584);

(statearr_69660[(15)] = inst_69583);

(statearr_69660[(16)] = inst_69606);

return statearr_69660;
})();
var statearr_69661_69702 = state_69640__$1;
(statearr_69661_69702[(2)] = null);

(statearr_69661_69702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (3))){
var inst_69638 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69640__$1,inst_69638);
} else {
if((state_val_69641 === (12))){
var inst_69615 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
var statearr_69662_69703 = state_69640__$1;
(statearr_69662_69703[(2)] = inst_69615);

(statearr_69662_69703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (2))){
var state_69640__$1 = state_69640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69640__$1,(4),ch);
} else {
if((state_val_69641 === (23))){
var state_69640__$1 = state_69640;
var statearr_69663_69704 = state_69640__$1;
(statearr_69663_69704[(2)] = null);

(statearr_69663_69704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (19))){
var inst_69571 = (state_69640[(8)]);
var inst_69621 = (state_69640[(11)]);
var inst_69623 = cljs.core.async.muxch_STAR_.call(null,inst_69621);
var state_69640__$1 = state_69640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69640__$1,(22),inst_69623,inst_69571);
} else {
if((state_val_69641 === (11))){
var inst_69581 = (state_69640[(13)]);
var inst_69595 = (state_69640[(10)]);
var inst_69595__$1 = cljs.core.seq.call(null,inst_69581);
var state_69640__$1 = (function (){var statearr_69664 = state_69640;
(statearr_69664[(10)] = inst_69595__$1);

return statearr_69664;
})();
if(inst_69595__$1){
var statearr_69665_69705 = state_69640__$1;
(statearr_69665_69705[(1)] = (13));

} else {
var statearr_69666_69706 = state_69640__$1;
(statearr_69666_69706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (9))){
var inst_69617 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
var statearr_69667_69707 = state_69640__$1;
(statearr_69667_69707[(2)] = inst_69617);

(statearr_69667_69707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (5))){
var inst_69578 = cljs.core.deref.call(null,mults);
var inst_69579 = cljs.core.vals.call(null,inst_69578);
var inst_69580 = cljs.core.seq.call(null,inst_69579);
var inst_69581 = inst_69580;
var inst_69582 = null;
var inst_69583 = (0);
var inst_69584 = (0);
var state_69640__$1 = (function (){var statearr_69668 = state_69640;
(statearr_69668[(12)] = inst_69582);

(statearr_69668[(13)] = inst_69581);

(statearr_69668[(14)] = inst_69584);

(statearr_69668[(15)] = inst_69583);

return statearr_69668;
})();
var statearr_69669_69708 = state_69640__$1;
(statearr_69669_69708[(2)] = null);

(statearr_69669_69708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (14))){
var state_69640__$1 = state_69640;
var statearr_69673_69709 = state_69640__$1;
(statearr_69673_69709[(2)] = null);

(statearr_69673_69709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (16))){
var inst_69595 = (state_69640[(10)]);
var inst_69599 = cljs.core.chunk_first.call(null,inst_69595);
var inst_69600 = cljs.core.chunk_rest.call(null,inst_69595);
var inst_69601 = cljs.core.count.call(null,inst_69599);
var inst_69581 = inst_69600;
var inst_69582 = inst_69599;
var inst_69583 = inst_69601;
var inst_69584 = (0);
var state_69640__$1 = (function (){var statearr_69674 = state_69640;
(statearr_69674[(12)] = inst_69582);

(statearr_69674[(13)] = inst_69581);

(statearr_69674[(14)] = inst_69584);

(statearr_69674[(15)] = inst_69583);

return statearr_69674;
})();
var statearr_69675_69710 = state_69640__$1;
(statearr_69675_69710[(2)] = null);

(statearr_69675_69710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (10))){
var inst_69582 = (state_69640[(12)]);
var inst_69581 = (state_69640[(13)]);
var inst_69584 = (state_69640[(14)]);
var inst_69583 = (state_69640[(15)]);
var inst_69589 = cljs.core._nth.call(null,inst_69582,inst_69584);
var inst_69590 = cljs.core.async.muxch_STAR_.call(null,inst_69589);
var inst_69591 = cljs.core.async.close_BANG_.call(null,inst_69590);
var inst_69592 = (inst_69584 + (1));
var tmp69670 = inst_69582;
var tmp69671 = inst_69581;
var tmp69672 = inst_69583;
var inst_69581__$1 = tmp69671;
var inst_69582__$1 = tmp69670;
var inst_69583__$1 = tmp69672;
var inst_69584__$1 = inst_69592;
var state_69640__$1 = (function (){var statearr_69676 = state_69640;
(statearr_69676[(12)] = inst_69582__$1);

(statearr_69676[(13)] = inst_69581__$1);

(statearr_69676[(17)] = inst_69591);

(statearr_69676[(14)] = inst_69584__$1);

(statearr_69676[(15)] = inst_69583__$1);

return statearr_69676;
})();
var statearr_69677_69711 = state_69640__$1;
(statearr_69677_69711[(2)] = null);

(statearr_69677_69711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (18))){
var inst_69610 = (state_69640[(2)]);
var state_69640__$1 = state_69640;
var statearr_69678_69712 = state_69640__$1;
(statearr_69678_69712[(2)] = inst_69610);

(statearr_69678_69712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69641 === (8))){
var inst_69584 = (state_69640[(14)]);
var inst_69583 = (state_69640[(15)]);
var inst_69586 = (inst_69584 < inst_69583);
var inst_69587 = inst_69586;
var state_69640__$1 = state_69640;
if(cljs.core.truth_(inst_69587)){
var statearr_69679_69713 = state_69640__$1;
(statearr_69679_69713[(1)] = (10));

} else {
var statearr_69680_69714 = state_69640__$1;
(statearr_69680_69714[(1)] = (11));

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
});})(c__68452__auto___69686,mults,ensure_mult,p))
;
return ((function (switch__68362__auto__,c__68452__auto___69686,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_69681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69681[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_69681[(1)] = (1));

return statearr_69681;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_69640){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_69640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e69682){if((e69682 instanceof Object)){
var ex__68366__auto__ = e69682;
var statearr_69683_69715 = state_69640;
(statearr_69683_69715[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69716 = state_69640;
state_69640 = G__69716;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_69640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_69640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___69686,mults,ensure_mult,p))
})();
var state__68454__auto__ = (function (){var statearr_69684 = f__68453__auto__.call(null);
(statearr_69684[(6)] = c__68452__auto___69686);

return statearr_69684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___69686,mults,ensure_mult,p))
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
var G__69718 = arguments.length;
switch (G__69718) {
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
var G__69721 = arguments.length;
switch (G__69721) {
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
var G__69724 = arguments.length;
switch (G__69724) {
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
var c__68452__auto___69791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___69791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___69791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_69763){
var state_val_69764 = (state_69763[(1)]);
if((state_val_69764 === (7))){
var state_69763__$1 = state_69763;
var statearr_69765_69792 = state_69763__$1;
(statearr_69765_69792[(2)] = null);

(statearr_69765_69792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (1))){
var state_69763__$1 = state_69763;
var statearr_69766_69793 = state_69763__$1;
(statearr_69766_69793[(2)] = null);

(statearr_69766_69793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (4))){
var inst_69727 = (state_69763[(7)]);
var inst_69729 = (inst_69727 < cnt);
var state_69763__$1 = state_69763;
if(cljs.core.truth_(inst_69729)){
var statearr_69767_69794 = state_69763__$1;
(statearr_69767_69794[(1)] = (6));

} else {
var statearr_69768_69795 = state_69763__$1;
(statearr_69768_69795[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (15))){
var inst_69759 = (state_69763[(2)]);
var state_69763__$1 = state_69763;
var statearr_69769_69796 = state_69763__$1;
(statearr_69769_69796[(2)] = inst_69759);

(statearr_69769_69796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (13))){
var inst_69752 = cljs.core.async.close_BANG_.call(null,out);
var state_69763__$1 = state_69763;
var statearr_69770_69797 = state_69763__$1;
(statearr_69770_69797[(2)] = inst_69752);

(statearr_69770_69797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (6))){
var state_69763__$1 = state_69763;
var statearr_69771_69798 = state_69763__$1;
(statearr_69771_69798[(2)] = null);

(statearr_69771_69798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (3))){
var inst_69761 = (state_69763[(2)]);
var state_69763__$1 = state_69763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69763__$1,inst_69761);
} else {
if((state_val_69764 === (12))){
var inst_69749 = (state_69763[(8)]);
var inst_69749__$1 = (state_69763[(2)]);
var inst_69750 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_69749__$1);
var state_69763__$1 = (function (){var statearr_69772 = state_69763;
(statearr_69772[(8)] = inst_69749__$1);

return statearr_69772;
})();
if(cljs.core.truth_(inst_69750)){
var statearr_69773_69799 = state_69763__$1;
(statearr_69773_69799[(1)] = (13));

} else {
var statearr_69774_69800 = state_69763__$1;
(statearr_69774_69800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (2))){
var inst_69726 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_69727 = (0);
var state_69763__$1 = (function (){var statearr_69775 = state_69763;
(statearr_69775[(7)] = inst_69727);

(statearr_69775[(9)] = inst_69726);

return statearr_69775;
})();
var statearr_69776_69801 = state_69763__$1;
(statearr_69776_69801[(2)] = null);

(statearr_69776_69801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (11))){
var inst_69727 = (state_69763[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_69763,(10),Object,null,(9));
var inst_69736 = chs__$1.call(null,inst_69727);
var inst_69737 = done.call(null,inst_69727);
var inst_69738 = cljs.core.async.take_BANG_.call(null,inst_69736,inst_69737);
var state_69763__$1 = state_69763;
var statearr_69777_69802 = state_69763__$1;
(statearr_69777_69802[(2)] = inst_69738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (9))){
var inst_69727 = (state_69763[(7)]);
var inst_69740 = (state_69763[(2)]);
var inst_69741 = (inst_69727 + (1));
var inst_69727__$1 = inst_69741;
var state_69763__$1 = (function (){var statearr_69778 = state_69763;
(statearr_69778[(10)] = inst_69740);

(statearr_69778[(7)] = inst_69727__$1);

return statearr_69778;
})();
var statearr_69779_69803 = state_69763__$1;
(statearr_69779_69803[(2)] = null);

(statearr_69779_69803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (5))){
var inst_69747 = (state_69763[(2)]);
var state_69763__$1 = (function (){var statearr_69780 = state_69763;
(statearr_69780[(11)] = inst_69747);

return statearr_69780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69763__$1,(12),dchan);
} else {
if((state_val_69764 === (14))){
var inst_69749 = (state_69763[(8)]);
var inst_69754 = cljs.core.apply.call(null,f,inst_69749);
var state_69763__$1 = state_69763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69763__$1,(16),out,inst_69754);
} else {
if((state_val_69764 === (16))){
var inst_69756 = (state_69763[(2)]);
var state_69763__$1 = (function (){var statearr_69781 = state_69763;
(statearr_69781[(12)] = inst_69756);

return statearr_69781;
})();
var statearr_69782_69804 = state_69763__$1;
(statearr_69782_69804[(2)] = null);

(statearr_69782_69804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (10))){
var inst_69731 = (state_69763[(2)]);
var inst_69732 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_69763__$1 = (function (){var statearr_69783 = state_69763;
(statearr_69783[(13)] = inst_69731);

return statearr_69783;
})();
var statearr_69784_69805 = state_69763__$1;
(statearr_69784_69805[(2)] = inst_69732);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69764 === (8))){
var inst_69745 = (state_69763[(2)]);
var state_69763__$1 = state_69763;
var statearr_69785_69806 = state_69763__$1;
(statearr_69785_69806[(2)] = inst_69745);

(statearr_69785_69806[(1)] = (5));


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
});})(c__68452__auto___69791,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__68362__auto__,c__68452__auto___69791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_69786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69786[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_69786[(1)] = (1));

return statearr_69786;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_69763){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_69763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e69787){if((e69787 instanceof Object)){
var ex__68366__auto__ = e69787;
var statearr_69788_69807 = state_69763;
(statearr_69788_69807[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69808 = state_69763;
state_69763 = G__69808;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_69763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_69763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___69791,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__68454__auto__ = (function (){var statearr_69789 = f__68453__auto__.call(null);
(statearr_69789[(6)] = c__68452__auto___69791);

return statearr_69789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___69791,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__69811 = arguments.length;
switch (G__69811) {
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
var c__68452__auto___69865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___69865,out){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___69865,out){
return (function (state_69843){
var state_val_69844 = (state_69843[(1)]);
if((state_val_69844 === (7))){
var inst_69823 = (state_69843[(7)]);
var inst_69822 = (state_69843[(8)]);
var inst_69822__$1 = (state_69843[(2)]);
var inst_69823__$1 = cljs.core.nth.call(null,inst_69822__$1,(0),null);
var inst_69824 = cljs.core.nth.call(null,inst_69822__$1,(1),null);
var inst_69825 = (inst_69823__$1 == null);
var state_69843__$1 = (function (){var statearr_69845 = state_69843;
(statearr_69845[(7)] = inst_69823__$1);

(statearr_69845[(9)] = inst_69824);

(statearr_69845[(8)] = inst_69822__$1);

return statearr_69845;
})();
if(cljs.core.truth_(inst_69825)){
var statearr_69846_69866 = state_69843__$1;
(statearr_69846_69866[(1)] = (8));

} else {
var statearr_69847_69867 = state_69843__$1;
(statearr_69847_69867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69844 === (1))){
var inst_69812 = cljs.core.vec.call(null,chs);
var inst_69813 = inst_69812;
var state_69843__$1 = (function (){var statearr_69848 = state_69843;
(statearr_69848[(10)] = inst_69813);

return statearr_69848;
})();
var statearr_69849_69868 = state_69843__$1;
(statearr_69849_69868[(2)] = null);

(statearr_69849_69868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69844 === (4))){
var inst_69813 = (state_69843[(10)]);
var state_69843__$1 = state_69843;
return cljs.core.async.ioc_alts_BANG_.call(null,state_69843__$1,(7),inst_69813);
} else {
if((state_val_69844 === (6))){
var inst_69839 = (state_69843[(2)]);
var state_69843__$1 = state_69843;
var statearr_69850_69869 = state_69843__$1;
(statearr_69850_69869[(2)] = inst_69839);

(statearr_69850_69869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69844 === (3))){
var inst_69841 = (state_69843[(2)]);
var state_69843__$1 = state_69843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69843__$1,inst_69841);
} else {
if((state_val_69844 === (2))){
var inst_69813 = (state_69843[(10)]);
var inst_69815 = cljs.core.count.call(null,inst_69813);
var inst_69816 = (inst_69815 > (0));
var state_69843__$1 = state_69843;
if(cljs.core.truth_(inst_69816)){
var statearr_69852_69870 = state_69843__$1;
(statearr_69852_69870[(1)] = (4));

} else {
var statearr_69853_69871 = state_69843__$1;
(statearr_69853_69871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69844 === (11))){
var inst_69813 = (state_69843[(10)]);
var inst_69832 = (state_69843[(2)]);
var tmp69851 = inst_69813;
var inst_69813__$1 = tmp69851;
var state_69843__$1 = (function (){var statearr_69854 = state_69843;
(statearr_69854[(10)] = inst_69813__$1);

(statearr_69854[(11)] = inst_69832);

return statearr_69854;
})();
var statearr_69855_69872 = state_69843__$1;
(statearr_69855_69872[(2)] = null);

(statearr_69855_69872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69844 === (9))){
var inst_69823 = (state_69843[(7)]);
var state_69843__$1 = state_69843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69843__$1,(11),out,inst_69823);
} else {
if((state_val_69844 === (5))){
var inst_69837 = cljs.core.async.close_BANG_.call(null,out);
var state_69843__$1 = state_69843;
var statearr_69856_69873 = state_69843__$1;
(statearr_69856_69873[(2)] = inst_69837);

(statearr_69856_69873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69844 === (10))){
var inst_69835 = (state_69843[(2)]);
var state_69843__$1 = state_69843;
var statearr_69857_69874 = state_69843__$1;
(statearr_69857_69874[(2)] = inst_69835);

(statearr_69857_69874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69844 === (8))){
var inst_69813 = (state_69843[(10)]);
var inst_69823 = (state_69843[(7)]);
var inst_69824 = (state_69843[(9)]);
var inst_69822 = (state_69843[(8)]);
var inst_69827 = (function (){var cs = inst_69813;
var vec__69818 = inst_69822;
var v = inst_69823;
var c = inst_69824;
return ((function (cs,vec__69818,v,c,inst_69813,inst_69823,inst_69824,inst_69822,state_val_69844,c__68452__auto___69865,out){
return (function (p1__69809_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__69809_SHARP_);
});
;})(cs,vec__69818,v,c,inst_69813,inst_69823,inst_69824,inst_69822,state_val_69844,c__68452__auto___69865,out))
})();
var inst_69828 = cljs.core.filterv.call(null,inst_69827,inst_69813);
var inst_69813__$1 = inst_69828;
var state_69843__$1 = (function (){var statearr_69858 = state_69843;
(statearr_69858[(10)] = inst_69813__$1);

return statearr_69858;
})();
var statearr_69859_69875 = state_69843__$1;
(statearr_69859_69875[(2)] = null);

(statearr_69859_69875[(1)] = (2));


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
});})(c__68452__auto___69865,out))
;
return ((function (switch__68362__auto__,c__68452__auto___69865,out){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_69860 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69860[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_69860[(1)] = (1));

return statearr_69860;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_69843){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_69843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e69861){if((e69861 instanceof Object)){
var ex__68366__auto__ = e69861;
var statearr_69862_69876 = state_69843;
(statearr_69862_69876[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69877 = state_69843;
state_69843 = G__69877;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_69843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_69843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___69865,out))
})();
var state__68454__auto__ = (function (){var statearr_69863 = f__68453__auto__.call(null);
(statearr_69863[(6)] = c__68452__auto___69865);

return statearr_69863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___69865,out))
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
var G__69879 = arguments.length;
switch (G__69879) {
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
var c__68452__auto___69924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___69924,out){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___69924,out){
return (function (state_69903){
var state_val_69904 = (state_69903[(1)]);
if((state_val_69904 === (7))){
var inst_69885 = (state_69903[(7)]);
var inst_69885__$1 = (state_69903[(2)]);
var inst_69886 = (inst_69885__$1 == null);
var inst_69887 = cljs.core.not.call(null,inst_69886);
var state_69903__$1 = (function (){var statearr_69905 = state_69903;
(statearr_69905[(7)] = inst_69885__$1);

return statearr_69905;
})();
if(inst_69887){
var statearr_69906_69925 = state_69903__$1;
(statearr_69906_69925[(1)] = (8));

} else {
var statearr_69907_69926 = state_69903__$1;
(statearr_69907_69926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69904 === (1))){
var inst_69880 = (0);
var state_69903__$1 = (function (){var statearr_69908 = state_69903;
(statearr_69908[(8)] = inst_69880);

return statearr_69908;
})();
var statearr_69909_69927 = state_69903__$1;
(statearr_69909_69927[(2)] = null);

(statearr_69909_69927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69904 === (4))){
var state_69903__$1 = state_69903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69903__$1,(7),ch);
} else {
if((state_val_69904 === (6))){
var inst_69898 = (state_69903[(2)]);
var state_69903__$1 = state_69903;
var statearr_69910_69928 = state_69903__$1;
(statearr_69910_69928[(2)] = inst_69898);

(statearr_69910_69928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69904 === (3))){
var inst_69900 = (state_69903[(2)]);
var inst_69901 = cljs.core.async.close_BANG_.call(null,out);
var state_69903__$1 = (function (){var statearr_69911 = state_69903;
(statearr_69911[(9)] = inst_69900);

return statearr_69911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69903__$1,inst_69901);
} else {
if((state_val_69904 === (2))){
var inst_69880 = (state_69903[(8)]);
var inst_69882 = (inst_69880 < n);
var state_69903__$1 = state_69903;
if(cljs.core.truth_(inst_69882)){
var statearr_69912_69929 = state_69903__$1;
(statearr_69912_69929[(1)] = (4));

} else {
var statearr_69913_69930 = state_69903__$1;
(statearr_69913_69930[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69904 === (11))){
var inst_69880 = (state_69903[(8)]);
var inst_69890 = (state_69903[(2)]);
var inst_69891 = (inst_69880 + (1));
var inst_69880__$1 = inst_69891;
var state_69903__$1 = (function (){var statearr_69914 = state_69903;
(statearr_69914[(10)] = inst_69890);

(statearr_69914[(8)] = inst_69880__$1);

return statearr_69914;
})();
var statearr_69915_69931 = state_69903__$1;
(statearr_69915_69931[(2)] = null);

(statearr_69915_69931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69904 === (9))){
var state_69903__$1 = state_69903;
var statearr_69916_69932 = state_69903__$1;
(statearr_69916_69932[(2)] = null);

(statearr_69916_69932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69904 === (5))){
var state_69903__$1 = state_69903;
var statearr_69917_69933 = state_69903__$1;
(statearr_69917_69933[(2)] = null);

(statearr_69917_69933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69904 === (10))){
var inst_69895 = (state_69903[(2)]);
var state_69903__$1 = state_69903;
var statearr_69918_69934 = state_69903__$1;
(statearr_69918_69934[(2)] = inst_69895);

(statearr_69918_69934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69904 === (8))){
var inst_69885 = (state_69903[(7)]);
var state_69903__$1 = state_69903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69903__$1,(11),out,inst_69885);
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
});})(c__68452__auto___69924,out))
;
return ((function (switch__68362__auto__,c__68452__auto___69924,out){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_69919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69919[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_69919[(1)] = (1));

return statearr_69919;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_69903){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_69903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e69920){if((e69920 instanceof Object)){
var ex__68366__auto__ = e69920;
var statearr_69921_69935 = state_69903;
(statearr_69921_69935[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69936 = state_69903;
state_69903 = G__69936;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_69903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_69903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___69924,out))
})();
var state__68454__auto__ = (function (){var statearr_69922 = f__68453__auto__.call(null);
(statearr_69922[(6)] = c__68452__auto___69924);

return statearr_69922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___69924,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async69938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69938 = (function (f,ch,meta69939){
this.f = f;
this.ch = ch;
this.meta69939 = meta69939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69940,meta69939__$1){
var self__ = this;
var _69940__$1 = this;
return (new cljs.core.async.t_cljs$core$async69938(self__.f,self__.ch,meta69939__$1));
});

cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69940){
var self__ = this;
var _69940__$1 = this;
return self__.meta69939;
});

cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async69941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69941 = (function (f,ch,meta69939,_,fn1,meta69942){
this.f = f;
this.ch = ch;
this.meta69939 = meta69939;
this._ = _;
this.fn1 = fn1;
this.meta69942 = meta69942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_69943,meta69942__$1){
var self__ = this;
var _69943__$1 = this;
return (new cljs.core.async.t_cljs$core$async69941(self__.f,self__.ch,self__.meta69939,self__._,self__.fn1,meta69942__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async69941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_69943){
var self__ = this;
var _69943__$1 = this;
return self__.meta69942;
});})(___$1))
;

cljs.core.async.t_cljs$core$async69941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async69941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async69941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__69937_SHARP_){
return f1.call(null,(((p1__69937_SHARP_ == null))?null:self__.f.call(null,p1__69937_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async69941.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69939","meta69939",-579933006,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async69938","cljs.core.async/t_cljs$core$async69938",692035709,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta69942","meta69942",-905708852,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async69941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69941";

cljs.core.async.t_cljs$core$async69941.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async69941");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async69941 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69941(f__$1,ch__$1,meta69939__$1,___$2,fn1__$1,meta69942){
return (new cljs.core.async.t_cljs$core$async69941(f__$1,ch__$1,meta69939__$1,___$2,fn1__$1,meta69942));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async69941(self__.f,self__.ch,self__.meta69939,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19050__auto__ = ret;
if(cljs.core.truth_(and__19050__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19050__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async69938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69939","meta69939",-579933006,null)], null);
});

cljs.core.async.t_cljs$core$async69938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69938";

cljs.core.async.t_cljs$core$async69938.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async69938");
});

cljs.core.async.__GT_t_cljs$core$async69938 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69938(f__$1,ch__$1,meta69939){
return (new cljs.core.async.t_cljs$core$async69938(f__$1,ch__$1,meta69939));
});

}

return (new cljs.core.async.t_cljs$core$async69938(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async69944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69944 = (function (f,ch,meta69945){
this.f = f;
this.ch = ch;
this.meta69945 = meta69945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69946,meta69945__$1){
var self__ = this;
var _69946__$1 = this;
return (new cljs.core.async.t_cljs$core$async69944(self__.f,self__.ch,meta69945__$1));
});

cljs.core.async.t_cljs$core$async69944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69946){
var self__ = this;
var _69946__$1 = this;
return self__.meta69945;
});

cljs.core.async.t_cljs$core$async69944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async69944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async69944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69945","meta69945",-1686930460,null)], null);
});

cljs.core.async.t_cljs$core$async69944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69944";

cljs.core.async.t_cljs$core$async69944.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async69944");
});

cljs.core.async.__GT_t_cljs$core$async69944 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async69944(f__$1,ch__$1,meta69945){
return (new cljs.core.async.t_cljs$core$async69944(f__$1,ch__$1,meta69945));
});

}

return (new cljs.core.async.t_cljs$core$async69944(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async69947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69947 = (function (p,ch,meta69948){
this.p = p;
this.ch = ch;
this.meta69948 = meta69948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69949,meta69948__$1){
var self__ = this;
var _69949__$1 = this;
return (new cljs.core.async.t_cljs$core$async69947(self__.p,self__.ch,meta69948__$1));
});

cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69949){
var self__ = this;
var _69949__$1 = this;
return self__.meta69948;
});

cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async69947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69948","meta69948",-486990889,null)], null);
});

cljs.core.async.t_cljs$core$async69947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69947";

cljs.core.async.t_cljs$core$async69947.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async/t_cljs$core$async69947");
});

cljs.core.async.__GT_t_cljs$core$async69947 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async69947(p__$1,ch__$1,meta69948){
return (new cljs.core.async.t_cljs$core$async69947(p__$1,ch__$1,meta69948));
});

}

return (new cljs.core.async.t_cljs$core$async69947(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__69951 = arguments.length;
switch (G__69951) {
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
var c__68452__auto___69991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___69991,out){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___69991,out){
return (function (state_69972){
var state_val_69973 = (state_69972[(1)]);
if((state_val_69973 === (7))){
var inst_69968 = (state_69972[(2)]);
var state_69972__$1 = state_69972;
var statearr_69974_69992 = state_69972__$1;
(statearr_69974_69992[(2)] = inst_69968);

(statearr_69974_69992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69973 === (1))){
var state_69972__$1 = state_69972;
var statearr_69975_69993 = state_69972__$1;
(statearr_69975_69993[(2)] = null);

(statearr_69975_69993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69973 === (4))){
var inst_69954 = (state_69972[(7)]);
var inst_69954__$1 = (state_69972[(2)]);
var inst_69955 = (inst_69954__$1 == null);
var state_69972__$1 = (function (){var statearr_69976 = state_69972;
(statearr_69976[(7)] = inst_69954__$1);

return statearr_69976;
})();
if(cljs.core.truth_(inst_69955)){
var statearr_69977_69994 = state_69972__$1;
(statearr_69977_69994[(1)] = (5));

} else {
var statearr_69978_69995 = state_69972__$1;
(statearr_69978_69995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69973 === (6))){
var inst_69954 = (state_69972[(7)]);
var inst_69959 = p.call(null,inst_69954);
var state_69972__$1 = state_69972;
if(cljs.core.truth_(inst_69959)){
var statearr_69979_69996 = state_69972__$1;
(statearr_69979_69996[(1)] = (8));

} else {
var statearr_69980_69997 = state_69972__$1;
(statearr_69980_69997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69973 === (3))){
var inst_69970 = (state_69972[(2)]);
var state_69972__$1 = state_69972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69972__$1,inst_69970);
} else {
if((state_val_69973 === (2))){
var state_69972__$1 = state_69972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69972__$1,(4),ch);
} else {
if((state_val_69973 === (11))){
var inst_69962 = (state_69972[(2)]);
var state_69972__$1 = state_69972;
var statearr_69981_69998 = state_69972__$1;
(statearr_69981_69998[(2)] = inst_69962);

(statearr_69981_69998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69973 === (9))){
var state_69972__$1 = state_69972;
var statearr_69982_69999 = state_69972__$1;
(statearr_69982_69999[(2)] = null);

(statearr_69982_69999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69973 === (5))){
var inst_69957 = cljs.core.async.close_BANG_.call(null,out);
var state_69972__$1 = state_69972;
var statearr_69983_70000 = state_69972__$1;
(statearr_69983_70000[(2)] = inst_69957);

(statearr_69983_70000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69973 === (10))){
var inst_69965 = (state_69972[(2)]);
var state_69972__$1 = (function (){var statearr_69984 = state_69972;
(statearr_69984[(8)] = inst_69965);

return statearr_69984;
})();
var statearr_69985_70001 = state_69972__$1;
(statearr_69985_70001[(2)] = null);

(statearr_69985_70001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69973 === (8))){
var inst_69954 = (state_69972[(7)]);
var state_69972__$1 = state_69972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69972__$1,(11),out,inst_69954);
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
});})(c__68452__auto___69991,out))
;
return ((function (switch__68362__auto__,c__68452__auto___69991,out){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_69986 = [null,null,null,null,null,null,null,null,null];
(statearr_69986[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_69986[(1)] = (1));

return statearr_69986;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_69972){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_69972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e69987){if((e69987 instanceof Object)){
var ex__68366__auto__ = e69987;
var statearr_69988_70002 = state_69972;
(statearr_69988_70002[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70003 = state_69972;
state_69972 = G__70003;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_69972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_69972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___69991,out))
})();
var state__68454__auto__ = (function (){var statearr_69989 = f__68453__auto__.call(null);
(statearr_69989[(6)] = c__68452__auto___69991);

return statearr_69989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___69991,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__70005 = arguments.length;
switch (G__70005) {
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
var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__){
return (function (state_70068){
var state_val_70069 = (state_70068[(1)]);
if((state_val_70069 === (7))){
var inst_70064 = (state_70068[(2)]);
var state_70068__$1 = state_70068;
var statearr_70070_70108 = state_70068__$1;
(statearr_70070_70108[(2)] = inst_70064);

(statearr_70070_70108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (20))){
var inst_70034 = (state_70068[(7)]);
var inst_70045 = (state_70068[(2)]);
var inst_70046 = cljs.core.next.call(null,inst_70034);
var inst_70020 = inst_70046;
var inst_70021 = null;
var inst_70022 = (0);
var inst_70023 = (0);
var state_70068__$1 = (function (){var statearr_70071 = state_70068;
(statearr_70071[(8)] = inst_70045);

(statearr_70071[(9)] = inst_70023);

(statearr_70071[(10)] = inst_70021);

(statearr_70071[(11)] = inst_70020);

(statearr_70071[(12)] = inst_70022);

return statearr_70071;
})();
var statearr_70072_70109 = state_70068__$1;
(statearr_70072_70109[(2)] = null);

(statearr_70072_70109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (1))){
var state_70068__$1 = state_70068;
var statearr_70073_70110 = state_70068__$1;
(statearr_70073_70110[(2)] = null);

(statearr_70073_70110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (4))){
var inst_70009 = (state_70068[(13)]);
var inst_70009__$1 = (state_70068[(2)]);
var inst_70010 = (inst_70009__$1 == null);
var state_70068__$1 = (function (){var statearr_70074 = state_70068;
(statearr_70074[(13)] = inst_70009__$1);

return statearr_70074;
})();
if(cljs.core.truth_(inst_70010)){
var statearr_70075_70111 = state_70068__$1;
(statearr_70075_70111[(1)] = (5));

} else {
var statearr_70076_70112 = state_70068__$1;
(statearr_70076_70112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (15))){
var state_70068__$1 = state_70068;
var statearr_70080_70113 = state_70068__$1;
(statearr_70080_70113[(2)] = null);

(statearr_70080_70113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (21))){
var state_70068__$1 = state_70068;
var statearr_70081_70114 = state_70068__$1;
(statearr_70081_70114[(2)] = null);

(statearr_70081_70114[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (13))){
var inst_70023 = (state_70068[(9)]);
var inst_70021 = (state_70068[(10)]);
var inst_70020 = (state_70068[(11)]);
var inst_70022 = (state_70068[(12)]);
var inst_70030 = (state_70068[(2)]);
var inst_70031 = (inst_70023 + (1));
var tmp70077 = inst_70021;
var tmp70078 = inst_70020;
var tmp70079 = inst_70022;
var inst_70020__$1 = tmp70078;
var inst_70021__$1 = tmp70077;
var inst_70022__$1 = tmp70079;
var inst_70023__$1 = inst_70031;
var state_70068__$1 = (function (){var statearr_70082 = state_70068;
(statearr_70082[(14)] = inst_70030);

(statearr_70082[(9)] = inst_70023__$1);

(statearr_70082[(10)] = inst_70021__$1);

(statearr_70082[(11)] = inst_70020__$1);

(statearr_70082[(12)] = inst_70022__$1);

return statearr_70082;
})();
var statearr_70083_70115 = state_70068__$1;
(statearr_70083_70115[(2)] = null);

(statearr_70083_70115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (22))){
var state_70068__$1 = state_70068;
var statearr_70084_70116 = state_70068__$1;
(statearr_70084_70116[(2)] = null);

(statearr_70084_70116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (6))){
var inst_70009 = (state_70068[(13)]);
var inst_70018 = f.call(null,inst_70009);
var inst_70019 = cljs.core.seq.call(null,inst_70018);
var inst_70020 = inst_70019;
var inst_70021 = null;
var inst_70022 = (0);
var inst_70023 = (0);
var state_70068__$1 = (function (){var statearr_70085 = state_70068;
(statearr_70085[(9)] = inst_70023);

(statearr_70085[(10)] = inst_70021);

(statearr_70085[(11)] = inst_70020);

(statearr_70085[(12)] = inst_70022);

return statearr_70085;
})();
var statearr_70086_70117 = state_70068__$1;
(statearr_70086_70117[(2)] = null);

(statearr_70086_70117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (17))){
var inst_70034 = (state_70068[(7)]);
var inst_70038 = cljs.core.chunk_first.call(null,inst_70034);
var inst_70039 = cljs.core.chunk_rest.call(null,inst_70034);
var inst_70040 = cljs.core.count.call(null,inst_70038);
var inst_70020 = inst_70039;
var inst_70021 = inst_70038;
var inst_70022 = inst_70040;
var inst_70023 = (0);
var state_70068__$1 = (function (){var statearr_70087 = state_70068;
(statearr_70087[(9)] = inst_70023);

(statearr_70087[(10)] = inst_70021);

(statearr_70087[(11)] = inst_70020);

(statearr_70087[(12)] = inst_70022);

return statearr_70087;
})();
var statearr_70088_70118 = state_70068__$1;
(statearr_70088_70118[(2)] = null);

(statearr_70088_70118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (3))){
var inst_70066 = (state_70068[(2)]);
var state_70068__$1 = state_70068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70068__$1,inst_70066);
} else {
if((state_val_70069 === (12))){
var inst_70054 = (state_70068[(2)]);
var state_70068__$1 = state_70068;
var statearr_70089_70119 = state_70068__$1;
(statearr_70089_70119[(2)] = inst_70054);

(statearr_70089_70119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (2))){
var state_70068__$1 = state_70068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70068__$1,(4),in$);
} else {
if((state_val_70069 === (23))){
var inst_70062 = (state_70068[(2)]);
var state_70068__$1 = state_70068;
var statearr_70090_70120 = state_70068__$1;
(statearr_70090_70120[(2)] = inst_70062);

(statearr_70090_70120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (19))){
var inst_70049 = (state_70068[(2)]);
var state_70068__$1 = state_70068;
var statearr_70091_70121 = state_70068__$1;
(statearr_70091_70121[(2)] = inst_70049);

(statearr_70091_70121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (11))){
var inst_70034 = (state_70068[(7)]);
var inst_70020 = (state_70068[(11)]);
var inst_70034__$1 = cljs.core.seq.call(null,inst_70020);
var state_70068__$1 = (function (){var statearr_70092 = state_70068;
(statearr_70092[(7)] = inst_70034__$1);

return statearr_70092;
})();
if(inst_70034__$1){
var statearr_70093_70122 = state_70068__$1;
(statearr_70093_70122[(1)] = (14));

} else {
var statearr_70094_70123 = state_70068__$1;
(statearr_70094_70123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (9))){
var inst_70056 = (state_70068[(2)]);
var inst_70057 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_70068__$1 = (function (){var statearr_70095 = state_70068;
(statearr_70095[(15)] = inst_70056);

return statearr_70095;
})();
if(cljs.core.truth_(inst_70057)){
var statearr_70096_70124 = state_70068__$1;
(statearr_70096_70124[(1)] = (21));

} else {
var statearr_70097_70125 = state_70068__$1;
(statearr_70097_70125[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (5))){
var inst_70012 = cljs.core.async.close_BANG_.call(null,out);
var state_70068__$1 = state_70068;
var statearr_70098_70126 = state_70068__$1;
(statearr_70098_70126[(2)] = inst_70012);

(statearr_70098_70126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (14))){
var inst_70034 = (state_70068[(7)]);
var inst_70036 = cljs.core.chunked_seq_QMARK_.call(null,inst_70034);
var state_70068__$1 = state_70068;
if(inst_70036){
var statearr_70099_70127 = state_70068__$1;
(statearr_70099_70127[(1)] = (17));

} else {
var statearr_70100_70128 = state_70068__$1;
(statearr_70100_70128[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (16))){
var inst_70052 = (state_70068[(2)]);
var state_70068__$1 = state_70068;
var statearr_70101_70129 = state_70068__$1;
(statearr_70101_70129[(2)] = inst_70052);

(statearr_70101_70129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70069 === (10))){
var inst_70023 = (state_70068[(9)]);
var inst_70021 = (state_70068[(10)]);
var inst_70028 = cljs.core._nth.call(null,inst_70021,inst_70023);
var state_70068__$1 = state_70068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70068__$1,(13),out,inst_70028);
} else {
if((state_val_70069 === (18))){
var inst_70034 = (state_70068[(7)]);
var inst_70043 = cljs.core.first.call(null,inst_70034);
var state_70068__$1 = state_70068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70068__$1,(20),out,inst_70043);
} else {
if((state_val_70069 === (8))){
var inst_70023 = (state_70068[(9)]);
var inst_70022 = (state_70068[(12)]);
var inst_70025 = (inst_70023 < inst_70022);
var inst_70026 = inst_70025;
var state_70068__$1 = state_70068;
if(cljs.core.truth_(inst_70026)){
var statearr_70102_70130 = state_70068__$1;
(statearr_70102_70130[(1)] = (10));

} else {
var statearr_70103_70131 = state_70068__$1;
(statearr_70103_70131[(1)] = (11));

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
});})(c__68452__auto__))
;
return ((function (switch__68362__auto__,c__68452__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__68363__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__68363__auto____0 = (function (){
var statearr_70104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70104[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__68363__auto__);

(statearr_70104[(1)] = (1));

return statearr_70104;
});
var cljs$core$async$mapcat_STAR__$_state_machine__68363__auto____1 = (function (state_70068){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_70068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e70105){if((e70105 instanceof Object)){
var ex__68366__auto__ = e70105;
var statearr_70106_70132 = state_70068;
(statearr_70106_70132[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70133 = state_70068;
state_70068 = G__70133;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__68363__auto__ = function(state_70068){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__68363__auto____1.call(this,state_70068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__68363__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__68363__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__))
})();
var state__68454__auto__ = (function (){var statearr_70107 = f__68453__auto__.call(null);
(statearr_70107[(6)] = c__68452__auto__);

return statearr_70107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__))
);

return c__68452__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__70135 = arguments.length;
switch (G__70135) {
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
var G__70138 = arguments.length;
switch (G__70138) {
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
var G__70141 = arguments.length;
switch (G__70141) {
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
var c__68452__auto___70188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___70188,out){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___70188,out){
return (function (state_70165){
var state_val_70166 = (state_70165[(1)]);
if((state_val_70166 === (7))){
var inst_70160 = (state_70165[(2)]);
var state_70165__$1 = state_70165;
var statearr_70167_70189 = state_70165__$1;
(statearr_70167_70189[(2)] = inst_70160);

(statearr_70167_70189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70166 === (1))){
var inst_70142 = null;
var state_70165__$1 = (function (){var statearr_70168 = state_70165;
(statearr_70168[(7)] = inst_70142);

return statearr_70168;
})();
var statearr_70169_70190 = state_70165__$1;
(statearr_70169_70190[(2)] = null);

(statearr_70169_70190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70166 === (4))){
var inst_70145 = (state_70165[(8)]);
var inst_70145__$1 = (state_70165[(2)]);
var inst_70146 = (inst_70145__$1 == null);
var inst_70147 = cljs.core.not.call(null,inst_70146);
var state_70165__$1 = (function (){var statearr_70170 = state_70165;
(statearr_70170[(8)] = inst_70145__$1);

return statearr_70170;
})();
if(inst_70147){
var statearr_70171_70191 = state_70165__$1;
(statearr_70171_70191[(1)] = (5));

} else {
var statearr_70172_70192 = state_70165__$1;
(statearr_70172_70192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70166 === (6))){
var state_70165__$1 = state_70165;
var statearr_70173_70193 = state_70165__$1;
(statearr_70173_70193[(2)] = null);

(statearr_70173_70193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70166 === (3))){
var inst_70162 = (state_70165[(2)]);
var inst_70163 = cljs.core.async.close_BANG_.call(null,out);
var state_70165__$1 = (function (){var statearr_70174 = state_70165;
(statearr_70174[(9)] = inst_70162);

return statearr_70174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70165__$1,inst_70163);
} else {
if((state_val_70166 === (2))){
var state_70165__$1 = state_70165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70165__$1,(4),ch);
} else {
if((state_val_70166 === (11))){
var inst_70145 = (state_70165[(8)]);
var inst_70154 = (state_70165[(2)]);
var inst_70142 = inst_70145;
var state_70165__$1 = (function (){var statearr_70175 = state_70165;
(statearr_70175[(10)] = inst_70154);

(statearr_70175[(7)] = inst_70142);

return statearr_70175;
})();
var statearr_70176_70194 = state_70165__$1;
(statearr_70176_70194[(2)] = null);

(statearr_70176_70194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70166 === (9))){
var inst_70145 = (state_70165[(8)]);
var state_70165__$1 = state_70165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70165__$1,(11),out,inst_70145);
} else {
if((state_val_70166 === (5))){
var inst_70145 = (state_70165[(8)]);
var inst_70142 = (state_70165[(7)]);
var inst_70149 = cljs.core._EQ_.call(null,inst_70145,inst_70142);
var state_70165__$1 = state_70165;
if(inst_70149){
var statearr_70178_70195 = state_70165__$1;
(statearr_70178_70195[(1)] = (8));

} else {
var statearr_70179_70196 = state_70165__$1;
(statearr_70179_70196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70166 === (10))){
var inst_70157 = (state_70165[(2)]);
var state_70165__$1 = state_70165;
var statearr_70180_70197 = state_70165__$1;
(statearr_70180_70197[(2)] = inst_70157);

(statearr_70180_70197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70166 === (8))){
var inst_70142 = (state_70165[(7)]);
var tmp70177 = inst_70142;
var inst_70142__$1 = tmp70177;
var state_70165__$1 = (function (){var statearr_70181 = state_70165;
(statearr_70181[(7)] = inst_70142__$1);

return statearr_70181;
})();
var statearr_70182_70198 = state_70165__$1;
(statearr_70182_70198[(2)] = null);

(statearr_70182_70198[(1)] = (2));


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
});})(c__68452__auto___70188,out))
;
return ((function (switch__68362__auto__,c__68452__auto___70188,out){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_70183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70183[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_70183[(1)] = (1));

return statearr_70183;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_70165){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_70165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e70184){if((e70184 instanceof Object)){
var ex__68366__auto__ = e70184;
var statearr_70185_70199 = state_70165;
(statearr_70185_70199[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70200 = state_70165;
state_70165 = G__70200;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_70165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_70165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___70188,out))
})();
var state__68454__auto__ = (function (){var statearr_70186 = f__68453__auto__.call(null);
(statearr_70186[(6)] = c__68452__auto___70188);

return statearr_70186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___70188,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__70202 = arguments.length;
switch (G__70202) {
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
var c__68452__auto___70268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___70268,out){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___70268,out){
return (function (state_70240){
var state_val_70241 = (state_70240[(1)]);
if((state_val_70241 === (7))){
var inst_70236 = (state_70240[(2)]);
var state_70240__$1 = state_70240;
var statearr_70242_70269 = state_70240__$1;
(statearr_70242_70269[(2)] = inst_70236);

(statearr_70242_70269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (1))){
var inst_70203 = (new Array(n));
var inst_70204 = inst_70203;
var inst_70205 = (0);
var state_70240__$1 = (function (){var statearr_70243 = state_70240;
(statearr_70243[(7)] = inst_70205);

(statearr_70243[(8)] = inst_70204);

return statearr_70243;
})();
var statearr_70244_70270 = state_70240__$1;
(statearr_70244_70270[(2)] = null);

(statearr_70244_70270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (4))){
var inst_70208 = (state_70240[(9)]);
var inst_70208__$1 = (state_70240[(2)]);
var inst_70209 = (inst_70208__$1 == null);
var inst_70210 = cljs.core.not.call(null,inst_70209);
var state_70240__$1 = (function (){var statearr_70245 = state_70240;
(statearr_70245[(9)] = inst_70208__$1);

return statearr_70245;
})();
if(inst_70210){
var statearr_70246_70271 = state_70240__$1;
(statearr_70246_70271[(1)] = (5));

} else {
var statearr_70247_70272 = state_70240__$1;
(statearr_70247_70272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (15))){
var inst_70230 = (state_70240[(2)]);
var state_70240__$1 = state_70240;
var statearr_70248_70273 = state_70240__$1;
(statearr_70248_70273[(2)] = inst_70230);

(statearr_70248_70273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (13))){
var state_70240__$1 = state_70240;
var statearr_70249_70274 = state_70240__$1;
(statearr_70249_70274[(2)] = null);

(statearr_70249_70274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (6))){
var inst_70205 = (state_70240[(7)]);
var inst_70226 = (inst_70205 > (0));
var state_70240__$1 = state_70240;
if(cljs.core.truth_(inst_70226)){
var statearr_70250_70275 = state_70240__$1;
(statearr_70250_70275[(1)] = (12));

} else {
var statearr_70251_70276 = state_70240__$1;
(statearr_70251_70276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (3))){
var inst_70238 = (state_70240[(2)]);
var state_70240__$1 = state_70240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70240__$1,inst_70238);
} else {
if((state_val_70241 === (12))){
var inst_70204 = (state_70240[(8)]);
var inst_70228 = cljs.core.vec.call(null,inst_70204);
var state_70240__$1 = state_70240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70240__$1,(15),out,inst_70228);
} else {
if((state_val_70241 === (2))){
var state_70240__$1 = state_70240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70240__$1,(4),ch);
} else {
if((state_val_70241 === (11))){
var inst_70220 = (state_70240[(2)]);
var inst_70221 = (new Array(n));
var inst_70204 = inst_70221;
var inst_70205 = (0);
var state_70240__$1 = (function (){var statearr_70252 = state_70240;
(statearr_70252[(10)] = inst_70220);

(statearr_70252[(7)] = inst_70205);

(statearr_70252[(8)] = inst_70204);

return statearr_70252;
})();
var statearr_70253_70277 = state_70240__$1;
(statearr_70253_70277[(2)] = null);

(statearr_70253_70277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (9))){
var inst_70204 = (state_70240[(8)]);
var inst_70218 = cljs.core.vec.call(null,inst_70204);
var state_70240__$1 = state_70240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70240__$1,(11),out,inst_70218);
} else {
if((state_val_70241 === (5))){
var inst_70208 = (state_70240[(9)]);
var inst_70205 = (state_70240[(7)]);
var inst_70204 = (state_70240[(8)]);
var inst_70213 = (state_70240[(11)]);
var inst_70212 = (inst_70204[inst_70205] = inst_70208);
var inst_70213__$1 = (inst_70205 + (1));
var inst_70214 = (inst_70213__$1 < n);
var state_70240__$1 = (function (){var statearr_70254 = state_70240;
(statearr_70254[(12)] = inst_70212);

(statearr_70254[(11)] = inst_70213__$1);

return statearr_70254;
})();
if(cljs.core.truth_(inst_70214)){
var statearr_70255_70278 = state_70240__$1;
(statearr_70255_70278[(1)] = (8));

} else {
var statearr_70256_70279 = state_70240__$1;
(statearr_70256_70279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (14))){
var inst_70233 = (state_70240[(2)]);
var inst_70234 = cljs.core.async.close_BANG_.call(null,out);
var state_70240__$1 = (function (){var statearr_70258 = state_70240;
(statearr_70258[(13)] = inst_70233);

return statearr_70258;
})();
var statearr_70259_70280 = state_70240__$1;
(statearr_70259_70280[(2)] = inst_70234);

(statearr_70259_70280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (10))){
var inst_70224 = (state_70240[(2)]);
var state_70240__$1 = state_70240;
var statearr_70260_70281 = state_70240__$1;
(statearr_70260_70281[(2)] = inst_70224);

(statearr_70260_70281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70241 === (8))){
var inst_70204 = (state_70240[(8)]);
var inst_70213 = (state_70240[(11)]);
var tmp70257 = inst_70204;
var inst_70204__$1 = tmp70257;
var inst_70205 = inst_70213;
var state_70240__$1 = (function (){var statearr_70261 = state_70240;
(statearr_70261[(7)] = inst_70205);

(statearr_70261[(8)] = inst_70204__$1);

return statearr_70261;
})();
var statearr_70262_70282 = state_70240__$1;
(statearr_70262_70282[(2)] = null);

(statearr_70262_70282[(1)] = (2));


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
});})(c__68452__auto___70268,out))
;
return ((function (switch__68362__auto__,c__68452__auto___70268,out){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_70263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70263[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_70263[(1)] = (1));

return statearr_70263;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_70240){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_70240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e70264){if((e70264 instanceof Object)){
var ex__68366__auto__ = e70264;
var statearr_70265_70283 = state_70240;
(statearr_70265_70283[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70284 = state_70240;
state_70240 = G__70284;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_70240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_70240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___70268,out))
})();
var state__68454__auto__ = (function (){var statearr_70266 = f__68453__auto__.call(null);
(statearr_70266[(6)] = c__68452__auto___70268);

return statearr_70266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___70268,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__70286 = arguments.length;
switch (G__70286) {
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
var c__68452__auto___70356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___70356,out){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___70356,out){
return (function (state_70328){
var state_val_70329 = (state_70328[(1)]);
if((state_val_70329 === (7))){
var inst_70324 = (state_70328[(2)]);
var state_70328__$1 = state_70328;
var statearr_70330_70357 = state_70328__$1;
(statearr_70330_70357[(2)] = inst_70324);

(statearr_70330_70357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (1))){
var inst_70287 = [];
var inst_70288 = inst_70287;
var inst_70289 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_70328__$1 = (function (){var statearr_70331 = state_70328;
(statearr_70331[(7)] = inst_70289);

(statearr_70331[(8)] = inst_70288);

return statearr_70331;
})();
var statearr_70332_70358 = state_70328__$1;
(statearr_70332_70358[(2)] = null);

(statearr_70332_70358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (4))){
var inst_70292 = (state_70328[(9)]);
var inst_70292__$1 = (state_70328[(2)]);
var inst_70293 = (inst_70292__$1 == null);
var inst_70294 = cljs.core.not.call(null,inst_70293);
var state_70328__$1 = (function (){var statearr_70333 = state_70328;
(statearr_70333[(9)] = inst_70292__$1);

return statearr_70333;
})();
if(inst_70294){
var statearr_70334_70359 = state_70328__$1;
(statearr_70334_70359[(1)] = (5));

} else {
var statearr_70335_70360 = state_70328__$1;
(statearr_70335_70360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (15))){
var inst_70318 = (state_70328[(2)]);
var state_70328__$1 = state_70328;
var statearr_70336_70361 = state_70328__$1;
(statearr_70336_70361[(2)] = inst_70318);

(statearr_70336_70361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (13))){
var state_70328__$1 = state_70328;
var statearr_70337_70362 = state_70328__$1;
(statearr_70337_70362[(2)] = null);

(statearr_70337_70362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (6))){
var inst_70288 = (state_70328[(8)]);
var inst_70313 = inst_70288.length;
var inst_70314 = (inst_70313 > (0));
var state_70328__$1 = state_70328;
if(cljs.core.truth_(inst_70314)){
var statearr_70338_70363 = state_70328__$1;
(statearr_70338_70363[(1)] = (12));

} else {
var statearr_70339_70364 = state_70328__$1;
(statearr_70339_70364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (3))){
var inst_70326 = (state_70328[(2)]);
var state_70328__$1 = state_70328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70328__$1,inst_70326);
} else {
if((state_val_70329 === (12))){
var inst_70288 = (state_70328[(8)]);
var inst_70316 = cljs.core.vec.call(null,inst_70288);
var state_70328__$1 = state_70328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70328__$1,(15),out,inst_70316);
} else {
if((state_val_70329 === (2))){
var state_70328__$1 = state_70328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70328__$1,(4),ch);
} else {
if((state_val_70329 === (11))){
var inst_70292 = (state_70328[(9)]);
var inst_70296 = (state_70328[(10)]);
var inst_70306 = (state_70328[(2)]);
var inst_70307 = [];
var inst_70308 = inst_70307.push(inst_70292);
var inst_70288 = inst_70307;
var inst_70289 = inst_70296;
var state_70328__$1 = (function (){var statearr_70340 = state_70328;
(statearr_70340[(7)] = inst_70289);

(statearr_70340[(11)] = inst_70306);

(statearr_70340[(8)] = inst_70288);

(statearr_70340[(12)] = inst_70308);

return statearr_70340;
})();
var statearr_70341_70365 = state_70328__$1;
(statearr_70341_70365[(2)] = null);

(statearr_70341_70365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (9))){
var inst_70288 = (state_70328[(8)]);
var inst_70304 = cljs.core.vec.call(null,inst_70288);
var state_70328__$1 = state_70328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70328__$1,(11),out,inst_70304);
} else {
if((state_val_70329 === (5))){
var inst_70289 = (state_70328[(7)]);
var inst_70292 = (state_70328[(9)]);
var inst_70296 = (state_70328[(10)]);
var inst_70296__$1 = f.call(null,inst_70292);
var inst_70297 = cljs.core._EQ_.call(null,inst_70296__$1,inst_70289);
var inst_70298 = cljs.core.keyword_identical_QMARK_.call(null,inst_70289,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_70299 = (inst_70297) || (inst_70298);
var state_70328__$1 = (function (){var statearr_70342 = state_70328;
(statearr_70342[(10)] = inst_70296__$1);

return statearr_70342;
})();
if(cljs.core.truth_(inst_70299)){
var statearr_70343_70366 = state_70328__$1;
(statearr_70343_70366[(1)] = (8));

} else {
var statearr_70344_70367 = state_70328__$1;
(statearr_70344_70367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (14))){
var inst_70321 = (state_70328[(2)]);
var inst_70322 = cljs.core.async.close_BANG_.call(null,out);
var state_70328__$1 = (function (){var statearr_70346 = state_70328;
(statearr_70346[(13)] = inst_70321);

return statearr_70346;
})();
var statearr_70347_70368 = state_70328__$1;
(statearr_70347_70368[(2)] = inst_70322);

(statearr_70347_70368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (10))){
var inst_70311 = (state_70328[(2)]);
var state_70328__$1 = state_70328;
var statearr_70348_70369 = state_70328__$1;
(statearr_70348_70369[(2)] = inst_70311);

(statearr_70348_70369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70329 === (8))){
var inst_70292 = (state_70328[(9)]);
var inst_70288 = (state_70328[(8)]);
var inst_70296 = (state_70328[(10)]);
var inst_70301 = inst_70288.push(inst_70292);
var tmp70345 = inst_70288;
var inst_70288__$1 = tmp70345;
var inst_70289 = inst_70296;
var state_70328__$1 = (function (){var statearr_70349 = state_70328;
(statearr_70349[(14)] = inst_70301);

(statearr_70349[(7)] = inst_70289);

(statearr_70349[(8)] = inst_70288__$1);

return statearr_70349;
})();
var statearr_70350_70370 = state_70328__$1;
(statearr_70350_70370[(2)] = null);

(statearr_70350_70370[(1)] = (2));


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
});})(c__68452__auto___70356,out))
;
return ((function (switch__68362__auto__,c__68452__auto___70356,out){
return (function() {
var cljs$core$async$state_machine__68363__auto__ = null;
var cljs$core$async$state_machine__68363__auto____0 = (function (){
var statearr_70351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70351[(0)] = cljs$core$async$state_machine__68363__auto__);

(statearr_70351[(1)] = (1));

return statearr_70351;
});
var cljs$core$async$state_machine__68363__auto____1 = (function (state_70328){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_70328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e70352){if((e70352 instanceof Object)){
var ex__68366__auto__ = e70352;
var statearr_70353_70371 = state_70328;
(statearr_70353_70371[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70372 = state_70328;
state_70328 = G__70372;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
cljs$core$async$state_machine__68363__auto__ = function(state_70328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68363__auto____1.call(this,state_70328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68363__auto____0;
cljs$core$async$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68363__auto____1;
return cljs$core$async$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___70356,out))
})();
var state__68454__auto__ = (function (){var statearr_70354 = f__68453__auto__.call(null);
(statearr_70354[(6)] = c__68452__auto___70356);

return statearr_70354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___70356,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518983343669
