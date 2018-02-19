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
var G__75692 = arguments.length;
switch (G__75692) {
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
if(typeof cljs.core.async.t_cljs$core$async75693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75693 = (function (f,blockable,meta75694){
this.f = f;
this.blockable = blockable;
this.meta75694 = meta75694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async75693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75695,meta75694__$1){
var self__ = this;
var _75695__$1 = this;
return (new cljs.core.async.t_cljs$core$async75693(self__.f,self__.blockable,meta75694__$1));
});

cljs.core.async.t_cljs$core$async75693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75695){
var self__ = this;
var _75695__$1 = this;
return self__.meta75694;
});

cljs.core.async.t_cljs$core$async75693.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async75693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async75693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async75693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta75694","meta75694",-1205677817,null)], null);
});

cljs.core.async.t_cljs$core$async75693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75693";

cljs.core.async.t_cljs$core$async75693.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async75693");
});

cljs.core.async.__GT_t_cljs$core$async75693 = (function cljs$core$async$__GT_t_cljs$core$async75693(f__$1,blockable__$1,meta75694){
return (new cljs.core.async.t_cljs$core$async75693(f__$1,blockable__$1,meta75694));
});

}

return (new cljs.core.async.t_cljs$core$async75693(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__75699 = arguments.length;
switch (G__75699) {
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
var G__75702 = arguments.length;
switch (G__75702) {
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
var G__75705 = arguments.length;
switch (G__75705) {
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
var val_75707 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_75707);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_75707,ret){
return (function (){
return fn1.call(null,val_75707);
});})(val_75707,ret))
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
var G__75709 = arguments.length;
switch (G__75709) {
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
var n__41940__auto___75711 = n;
var x_75712 = (0);
while(true){
if((x_75712 < n__41940__auto___75711)){
(a[x_75712] = (0));

var G__75713 = (x_75712 + (1));
x_75712 = G__75713;
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

var G__75714 = (i + (1));
i = G__75714;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async75715 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75715 = (function (flag,meta75716){
this.flag = flag;
this.meta75716 = meta75716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async75715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_75717,meta75716__$1){
var self__ = this;
var _75717__$1 = this;
return (new cljs.core.async.t_cljs$core$async75715(self__.flag,meta75716__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async75715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_75717){
var self__ = this;
var _75717__$1 = this;
return self__.meta75716;
});})(flag))
;

cljs.core.async.t_cljs$core$async75715.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async75715.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async75715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async75715.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta75716","meta75716",1760053119,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async75715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75715";

cljs.core.async.t_cljs$core$async75715.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async75715");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async75715 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async75715(flag__$1,meta75716){
return (new cljs.core.async.t_cljs$core$async75715(flag__$1,meta75716));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async75715(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async75718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75718 = (function (flag,cb,meta75719){
this.flag = flag;
this.cb = cb;
this.meta75719 = meta75719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async75718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75720,meta75719__$1){
var self__ = this;
var _75720__$1 = this;
return (new cljs.core.async.t_cljs$core$async75718(self__.flag,self__.cb,meta75719__$1));
});

cljs.core.async.t_cljs$core$async75718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75720){
var self__ = this;
var _75720__$1 = this;
return self__.meta75719;
});

cljs.core.async.t_cljs$core$async75718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async75718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async75718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async75718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async75718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta75719","meta75719",-1948829563,null)], null);
});

cljs.core.async.t_cljs$core$async75718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75718";

cljs.core.async.t_cljs$core$async75718.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async75718");
});

cljs.core.async.__GT_t_cljs$core$async75718 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async75718(flag__$1,cb__$1,meta75719){
return (new cljs.core.async.t_cljs$core$async75718(flag__$1,cb__$1,meta75719));
});

}

return (new cljs.core.async.t_cljs$core$async75718(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__75721_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__75721_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__75722_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__75722_SHARP_,port], null));
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
var G__75723 = (i + (1));
i = G__75723;
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
var len__42174__auto___75729 = arguments.length;
var i__42175__auto___75730 = (0);
while(true){
if((i__42175__auto___75730 < len__42174__auto___75729)){
args__42181__auto__.push((arguments[i__42175__auto___75730]));

var G__75731 = (i__42175__auto___75730 + (1));
i__42175__auto___75730 = G__75731;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((1) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42182__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__75726){
var map__75727 = p__75726;
var map__75727__$1 = ((((!((map__75727 == null)))?((((map__75727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75727):map__75727);
var opts = map__75727__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq75724){
var G__75725 = cljs.core.first.call(null,seq75724);
var seq75724__$1 = cljs.core.next.call(null,seq75724);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__75725,seq75724__$1);
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
var G__75733 = arguments.length;
switch (G__75733) {
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
var c__68453__auto___75779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___75779){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___75779){
return (function (state_75757){
var state_val_75758 = (state_75757[(1)]);
if((state_val_75758 === (7))){
var inst_75753 = (state_75757[(2)]);
var state_75757__$1 = state_75757;
var statearr_75759_75780 = state_75757__$1;
(statearr_75759_75780[(2)] = inst_75753);

(statearr_75759_75780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (1))){
var state_75757__$1 = state_75757;
var statearr_75760_75781 = state_75757__$1;
(statearr_75760_75781[(2)] = null);

(statearr_75760_75781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (4))){
var inst_75736 = (state_75757[(7)]);
var inst_75736__$1 = (state_75757[(2)]);
var inst_75737 = (inst_75736__$1 == null);
var state_75757__$1 = (function (){var statearr_75761 = state_75757;
(statearr_75761[(7)] = inst_75736__$1);

return statearr_75761;
})();
if(cljs.core.truth_(inst_75737)){
var statearr_75762_75782 = state_75757__$1;
(statearr_75762_75782[(1)] = (5));

} else {
var statearr_75763_75783 = state_75757__$1;
(statearr_75763_75783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (13))){
var state_75757__$1 = state_75757;
var statearr_75764_75784 = state_75757__$1;
(statearr_75764_75784[(2)] = null);

(statearr_75764_75784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (6))){
var inst_75736 = (state_75757[(7)]);
var state_75757__$1 = state_75757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75757__$1,(11),to,inst_75736);
} else {
if((state_val_75758 === (3))){
var inst_75755 = (state_75757[(2)]);
var state_75757__$1 = state_75757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75757__$1,inst_75755);
} else {
if((state_val_75758 === (12))){
var state_75757__$1 = state_75757;
var statearr_75765_75785 = state_75757__$1;
(statearr_75765_75785[(2)] = null);

(statearr_75765_75785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (2))){
var state_75757__$1 = state_75757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75757__$1,(4),from);
} else {
if((state_val_75758 === (11))){
var inst_75746 = (state_75757[(2)]);
var state_75757__$1 = state_75757;
if(cljs.core.truth_(inst_75746)){
var statearr_75766_75786 = state_75757__$1;
(statearr_75766_75786[(1)] = (12));

} else {
var statearr_75767_75787 = state_75757__$1;
(statearr_75767_75787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (9))){
var state_75757__$1 = state_75757;
var statearr_75768_75788 = state_75757__$1;
(statearr_75768_75788[(2)] = null);

(statearr_75768_75788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (5))){
var state_75757__$1 = state_75757;
if(cljs.core.truth_(close_QMARK_)){
var statearr_75769_75789 = state_75757__$1;
(statearr_75769_75789[(1)] = (8));

} else {
var statearr_75770_75790 = state_75757__$1;
(statearr_75770_75790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (14))){
var inst_75751 = (state_75757[(2)]);
var state_75757__$1 = state_75757;
var statearr_75771_75791 = state_75757__$1;
(statearr_75771_75791[(2)] = inst_75751);

(statearr_75771_75791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (10))){
var inst_75743 = (state_75757[(2)]);
var state_75757__$1 = state_75757;
var statearr_75772_75792 = state_75757__$1;
(statearr_75772_75792[(2)] = inst_75743);

(statearr_75772_75792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75758 === (8))){
var inst_75740 = cljs.core.async.close_BANG_.call(null,to);
var state_75757__$1 = state_75757;
var statearr_75773_75793 = state_75757__$1;
(statearr_75773_75793[(2)] = inst_75740);

(statearr_75773_75793[(1)] = (10));


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
});})(c__68453__auto___75779))
;
return ((function (switch__68363__auto__,c__68453__auto___75779){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_75774 = [null,null,null,null,null,null,null,null];
(statearr_75774[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_75774[(1)] = (1));

return statearr_75774;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_75757){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_75757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e75775){if((e75775 instanceof Object)){
var ex__68367__auto__ = e75775;
var statearr_75776_75794 = state_75757;
(statearr_75776_75794[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75795 = state_75757;
state_75757 = G__75795;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_75757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_75757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___75779))
})();
var state__68455__auto__ = (function (){var statearr_75777 = f__68454__auto__.call(null);
(statearr_75777[(6)] = c__68453__auto___75779);

return statearr_75777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___75779))
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
return (function (p__75796){
var vec__75797 = p__75796;
var v = cljs.core.nth.call(null,vec__75797,(0),null);
var p = cljs.core.nth.call(null,vec__75797,(1),null);
var job = vec__75797;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__68453__auto___75968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___75968,res,vec__75797,v,p,job,jobs,results){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___75968,res,vec__75797,v,p,job,jobs,results){
return (function (state_75804){
var state_val_75805 = (state_75804[(1)]);
if((state_val_75805 === (1))){
var state_75804__$1 = state_75804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75804__$1,(2),res,v);
} else {
if((state_val_75805 === (2))){
var inst_75801 = (state_75804[(2)]);
var inst_75802 = cljs.core.async.close_BANG_.call(null,res);
var state_75804__$1 = (function (){var statearr_75806 = state_75804;
(statearr_75806[(7)] = inst_75801);

return statearr_75806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75804__$1,inst_75802);
} else {
return null;
}
}
});})(c__68453__auto___75968,res,vec__75797,v,p,job,jobs,results))
;
return ((function (switch__68363__auto__,c__68453__auto___75968,res,vec__75797,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_75807 = [null,null,null,null,null,null,null,null];
(statearr_75807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_75807[(1)] = (1));

return statearr_75807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_75804){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_75804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e75808){if((e75808 instanceof Object)){
var ex__68367__auto__ = e75808;
var statearr_75809_75969 = state_75804;
(statearr_75809_75969[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75970 = state_75804;
state_75804 = G__75970;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_75804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_75804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___75968,res,vec__75797,v,p,job,jobs,results))
})();
var state__68455__auto__ = (function (){var statearr_75810 = f__68454__auto__.call(null);
(statearr_75810[(6)] = c__68453__auto___75968);

return statearr_75810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___75968,res,vec__75797,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__75811){
var vec__75812 = p__75811;
var v = cljs.core.nth.call(null,vec__75812,(0),null);
var p = cljs.core.nth.call(null,vec__75812,(1),null);
var job = vec__75812;
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
var n__41940__auto___75971 = n;
var __75972 = (0);
while(true){
if((__75972 < n__41940__auto___75971)){
var G__75815_75973 = type;
var G__75815_75974__$1 = (((G__75815_75973 instanceof cljs.core.Keyword))?G__75815_75973.fqn:null);
switch (G__75815_75974__$1) {
case "compute":
var c__68453__auto___75976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__75972,c__68453__auto___75976,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (__75972,c__68453__auto___75976,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async){
return (function (state_75828){
var state_val_75829 = (state_75828[(1)]);
if((state_val_75829 === (1))){
var state_75828__$1 = state_75828;
var statearr_75830_75977 = state_75828__$1;
(statearr_75830_75977[(2)] = null);

(statearr_75830_75977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (2))){
var state_75828__$1 = state_75828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75828__$1,(4),jobs);
} else {
if((state_val_75829 === (3))){
var inst_75826 = (state_75828[(2)]);
var state_75828__$1 = state_75828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75828__$1,inst_75826);
} else {
if((state_val_75829 === (4))){
var inst_75818 = (state_75828[(2)]);
var inst_75819 = process.call(null,inst_75818);
var state_75828__$1 = state_75828;
if(cljs.core.truth_(inst_75819)){
var statearr_75831_75978 = state_75828__$1;
(statearr_75831_75978[(1)] = (5));

} else {
var statearr_75832_75979 = state_75828__$1;
(statearr_75832_75979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (5))){
var state_75828__$1 = state_75828;
var statearr_75833_75980 = state_75828__$1;
(statearr_75833_75980[(2)] = null);

(statearr_75833_75980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (6))){
var state_75828__$1 = state_75828;
var statearr_75834_75981 = state_75828__$1;
(statearr_75834_75981[(2)] = null);

(statearr_75834_75981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75829 === (7))){
var inst_75824 = (state_75828[(2)]);
var state_75828__$1 = state_75828;
var statearr_75835_75982 = state_75828__$1;
(statearr_75835_75982[(2)] = inst_75824);

(statearr_75835_75982[(1)] = (3));


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
});})(__75972,c__68453__auto___75976,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async))
;
return ((function (__75972,switch__68363__auto__,c__68453__auto___75976,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_75836 = [null,null,null,null,null,null,null];
(statearr_75836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_75836[(1)] = (1));

return statearr_75836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_75828){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_75828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e75837){if((e75837 instanceof Object)){
var ex__68367__auto__ = e75837;
var statearr_75838_75983 = state_75828;
(statearr_75838_75983[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75984 = state_75828;
state_75828 = G__75984;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_75828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_75828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(__75972,switch__68363__auto__,c__68453__auto___75976,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async))
})();
var state__68455__auto__ = (function (){var statearr_75839 = f__68454__auto__.call(null);
(statearr_75839[(6)] = c__68453__auto___75976);

return statearr_75839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(__75972,c__68453__auto___75976,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async))
);


break;
case "async":
var c__68453__auto___75985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__75972,c__68453__auto___75985,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (__75972,c__68453__auto___75985,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async){
return (function (state_75852){
var state_val_75853 = (state_75852[(1)]);
if((state_val_75853 === (1))){
var state_75852__$1 = state_75852;
var statearr_75854_75986 = state_75852__$1;
(statearr_75854_75986[(2)] = null);

(statearr_75854_75986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75853 === (2))){
var state_75852__$1 = state_75852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75852__$1,(4),jobs);
} else {
if((state_val_75853 === (3))){
var inst_75850 = (state_75852[(2)]);
var state_75852__$1 = state_75852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75852__$1,inst_75850);
} else {
if((state_val_75853 === (4))){
var inst_75842 = (state_75852[(2)]);
var inst_75843 = async.call(null,inst_75842);
var state_75852__$1 = state_75852;
if(cljs.core.truth_(inst_75843)){
var statearr_75855_75987 = state_75852__$1;
(statearr_75855_75987[(1)] = (5));

} else {
var statearr_75856_75988 = state_75852__$1;
(statearr_75856_75988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75853 === (5))){
var state_75852__$1 = state_75852;
var statearr_75857_75989 = state_75852__$1;
(statearr_75857_75989[(2)] = null);

(statearr_75857_75989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75853 === (6))){
var state_75852__$1 = state_75852;
var statearr_75858_75990 = state_75852__$1;
(statearr_75858_75990[(2)] = null);

(statearr_75858_75990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75853 === (7))){
var inst_75848 = (state_75852[(2)]);
var state_75852__$1 = state_75852;
var statearr_75859_75991 = state_75852__$1;
(statearr_75859_75991[(2)] = inst_75848);

(statearr_75859_75991[(1)] = (3));


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
});})(__75972,c__68453__auto___75985,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async))
;
return ((function (__75972,switch__68363__auto__,c__68453__auto___75985,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_75860 = [null,null,null,null,null,null,null];
(statearr_75860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_75860[(1)] = (1));

return statearr_75860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_75852){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_75852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e75861){if((e75861 instanceof Object)){
var ex__68367__auto__ = e75861;
var statearr_75862_75992 = state_75852;
(statearr_75862_75992[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75993 = state_75852;
state_75852 = G__75993;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_75852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_75852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(__75972,switch__68363__auto__,c__68453__auto___75985,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async))
})();
var state__68455__auto__ = (function (){var statearr_75863 = f__68454__auto__.call(null);
(statearr_75863[(6)] = c__68453__auto___75985);

return statearr_75863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(__75972,c__68453__auto___75985,G__75815_75973,G__75815_75974__$1,n__41940__auto___75971,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75815_75974__$1)].join('')));

}

var G__75994 = (__75972 + (1));
__75972 = G__75994;
continue;
} else {
}
break;
}

var c__68453__auto___75995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___75995,jobs,results,process,async){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___75995,jobs,results,process,async){
return (function (state_75885){
var state_val_75886 = (state_75885[(1)]);
if((state_val_75886 === (1))){
var state_75885__$1 = state_75885;
var statearr_75887_75996 = state_75885__$1;
(statearr_75887_75996[(2)] = null);

(statearr_75887_75996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75886 === (2))){
var state_75885__$1 = state_75885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75885__$1,(4),from);
} else {
if((state_val_75886 === (3))){
var inst_75883 = (state_75885[(2)]);
var state_75885__$1 = state_75885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75885__$1,inst_75883);
} else {
if((state_val_75886 === (4))){
var inst_75866 = (state_75885[(7)]);
var inst_75866__$1 = (state_75885[(2)]);
var inst_75867 = (inst_75866__$1 == null);
var state_75885__$1 = (function (){var statearr_75888 = state_75885;
(statearr_75888[(7)] = inst_75866__$1);

return statearr_75888;
})();
if(cljs.core.truth_(inst_75867)){
var statearr_75889_75997 = state_75885__$1;
(statearr_75889_75997[(1)] = (5));

} else {
var statearr_75890_75998 = state_75885__$1;
(statearr_75890_75998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75886 === (5))){
var inst_75869 = cljs.core.async.close_BANG_.call(null,jobs);
var state_75885__$1 = state_75885;
var statearr_75891_75999 = state_75885__$1;
(statearr_75891_75999[(2)] = inst_75869);

(statearr_75891_75999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75886 === (6))){
var inst_75866 = (state_75885[(7)]);
var inst_75871 = (state_75885[(8)]);
var inst_75871__$1 = cljs.core.async.chan.call(null,(1));
var inst_75872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75873 = [inst_75866,inst_75871__$1];
var inst_75874 = (new cljs.core.PersistentVector(null,2,(5),inst_75872,inst_75873,null));
var state_75885__$1 = (function (){var statearr_75892 = state_75885;
(statearr_75892[(8)] = inst_75871__$1);

return statearr_75892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75885__$1,(8),jobs,inst_75874);
} else {
if((state_val_75886 === (7))){
var inst_75881 = (state_75885[(2)]);
var state_75885__$1 = state_75885;
var statearr_75893_76000 = state_75885__$1;
(statearr_75893_76000[(2)] = inst_75881);

(statearr_75893_76000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75886 === (8))){
var inst_75871 = (state_75885[(8)]);
var inst_75876 = (state_75885[(2)]);
var state_75885__$1 = (function (){var statearr_75894 = state_75885;
(statearr_75894[(9)] = inst_75876);

return statearr_75894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75885__$1,(9),results,inst_75871);
} else {
if((state_val_75886 === (9))){
var inst_75878 = (state_75885[(2)]);
var state_75885__$1 = (function (){var statearr_75895 = state_75885;
(statearr_75895[(10)] = inst_75878);

return statearr_75895;
})();
var statearr_75896_76001 = state_75885__$1;
(statearr_75896_76001[(2)] = null);

(statearr_75896_76001[(1)] = (2));


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
});})(c__68453__auto___75995,jobs,results,process,async))
;
return ((function (switch__68363__auto__,c__68453__auto___75995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0 = (function (){
var statearr_75897 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_75897[(1)] = (1));

return statearr_75897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_75885){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_75885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e75898){if((e75898 instanceof Object)){
var ex__68367__auto__ = e75898;
var statearr_75899_76002 = state_75885;
(statearr_75899_76002[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76003 = state_75885;
state_75885 = G__76003;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_75885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_75885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___75995,jobs,results,process,async))
})();
var state__68455__auto__ = (function (){var statearr_75900 = f__68454__auto__.call(null);
(statearr_75900[(6)] = c__68453__auto___75995);

return statearr_75900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___75995,jobs,results,process,async))
);


var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__,jobs,results,process,async){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__,jobs,results,process,async){
return (function (state_75938){
var state_val_75939 = (state_75938[(1)]);
if((state_val_75939 === (7))){
var inst_75934 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
var statearr_75940_76004 = state_75938__$1;
(statearr_75940_76004[(2)] = inst_75934);

(statearr_75940_76004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (20))){
var state_75938__$1 = state_75938;
var statearr_75941_76005 = state_75938__$1;
(statearr_75941_76005[(2)] = null);

(statearr_75941_76005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (1))){
var state_75938__$1 = state_75938;
var statearr_75942_76006 = state_75938__$1;
(statearr_75942_76006[(2)] = null);

(statearr_75942_76006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (4))){
var inst_75903 = (state_75938[(7)]);
var inst_75903__$1 = (state_75938[(2)]);
var inst_75904 = (inst_75903__$1 == null);
var state_75938__$1 = (function (){var statearr_75943 = state_75938;
(statearr_75943[(7)] = inst_75903__$1);

return statearr_75943;
})();
if(cljs.core.truth_(inst_75904)){
var statearr_75944_76007 = state_75938__$1;
(statearr_75944_76007[(1)] = (5));

} else {
var statearr_75945_76008 = state_75938__$1;
(statearr_75945_76008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (15))){
var inst_75916 = (state_75938[(8)]);
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75938__$1,(18),to,inst_75916);
} else {
if((state_val_75939 === (21))){
var inst_75929 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
var statearr_75946_76009 = state_75938__$1;
(statearr_75946_76009[(2)] = inst_75929);

(statearr_75946_76009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (13))){
var inst_75931 = (state_75938[(2)]);
var state_75938__$1 = (function (){var statearr_75947 = state_75938;
(statearr_75947[(9)] = inst_75931);

return statearr_75947;
})();
var statearr_75948_76010 = state_75938__$1;
(statearr_75948_76010[(2)] = null);

(statearr_75948_76010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (6))){
var inst_75903 = (state_75938[(7)]);
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75938__$1,(11),inst_75903);
} else {
if((state_val_75939 === (17))){
var inst_75924 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
if(cljs.core.truth_(inst_75924)){
var statearr_75949_76011 = state_75938__$1;
(statearr_75949_76011[(1)] = (19));

} else {
var statearr_75950_76012 = state_75938__$1;
(statearr_75950_76012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (3))){
var inst_75936 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75938__$1,inst_75936);
} else {
if((state_val_75939 === (12))){
var inst_75913 = (state_75938[(10)]);
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75938__$1,(14),inst_75913);
} else {
if((state_val_75939 === (2))){
var state_75938__$1 = state_75938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75938__$1,(4),results);
} else {
if((state_val_75939 === (19))){
var state_75938__$1 = state_75938;
var statearr_75951_76013 = state_75938__$1;
(statearr_75951_76013[(2)] = null);

(statearr_75951_76013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (11))){
var inst_75913 = (state_75938[(2)]);
var state_75938__$1 = (function (){var statearr_75952 = state_75938;
(statearr_75952[(10)] = inst_75913);

return statearr_75952;
})();
var statearr_75953_76014 = state_75938__$1;
(statearr_75953_76014[(2)] = null);

(statearr_75953_76014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (9))){
var state_75938__$1 = state_75938;
var statearr_75954_76015 = state_75938__$1;
(statearr_75954_76015[(2)] = null);

(statearr_75954_76015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (5))){
var state_75938__$1 = state_75938;
if(cljs.core.truth_(close_QMARK_)){
var statearr_75955_76016 = state_75938__$1;
(statearr_75955_76016[(1)] = (8));

} else {
var statearr_75956_76017 = state_75938__$1;
(statearr_75956_76017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (14))){
var inst_75918 = (state_75938[(11)]);
var inst_75916 = (state_75938[(8)]);
var inst_75916__$1 = (state_75938[(2)]);
var inst_75917 = (inst_75916__$1 == null);
var inst_75918__$1 = cljs.core.not.call(null,inst_75917);
var state_75938__$1 = (function (){var statearr_75957 = state_75938;
(statearr_75957[(11)] = inst_75918__$1);

(statearr_75957[(8)] = inst_75916__$1);

return statearr_75957;
})();
if(inst_75918__$1){
var statearr_75958_76018 = state_75938__$1;
(statearr_75958_76018[(1)] = (15));

} else {
var statearr_75959_76019 = state_75938__$1;
(statearr_75959_76019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (16))){
var inst_75918 = (state_75938[(11)]);
var state_75938__$1 = state_75938;
var statearr_75960_76020 = state_75938__$1;
(statearr_75960_76020[(2)] = inst_75918);

(statearr_75960_76020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (10))){
var inst_75910 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
var statearr_75961_76021 = state_75938__$1;
(statearr_75961_76021[(2)] = inst_75910);

(statearr_75961_76021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (18))){
var inst_75921 = (state_75938[(2)]);
var state_75938__$1 = state_75938;
var statearr_75962_76022 = state_75938__$1;
(statearr_75962_76022[(2)] = inst_75921);

(statearr_75962_76022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75939 === (8))){
var inst_75907 = cljs.core.async.close_BANG_.call(null,to);
var state_75938__$1 = state_75938;
var statearr_75963_76023 = state_75938__$1;
(statearr_75963_76023[(2)] = inst_75907);

(statearr_75963_76023[(1)] = (10));


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
var statearr_75964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__);

(statearr_75964[(1)] = (1));

return statearr_75964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1 = (function (state_75938){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_75938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e75965){if((e75965 instanceof Object)){
var ex__68367__auto__ = e75965;
var statearr_75966_76024 = state_75938;
(statearr_75966_76024[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76025 = state_75938;
state_75938 = G__76025;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__ = function(state_75938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1.call(this,state_75938);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,jobs,results,process,async))
})();
var state__68455__auto__ = (function (){var statearr_75967 = f__68454__auto__.call(null);
(statearr_75967[(6)] = c__68453__auto__);

return statearr_75967;
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
var G__76027 = arguments.length;
switch (G__76027) {
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
var G__76030 = arguments.length;
switch (G__76030) {
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
var G__76033 = arguments.length;
switch (G__76033) {
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
var c__68453__auto___76082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___76082,tc,fc){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___76082,tc,fc){
return (function (state_76059){
var state_val_76060 = (state_76059[(1)]);
if((state_val_76060 === (7))){
var inst_76055 = (state_76059[(2)]);
var state_76059__$1 = state_76059;
var statearr_76061_76083 = state_76059__$1;
(statearr_76061_76083[(2)] = inst_76055);

(statearr_76061_76083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (1))){
var state_76059__$1 = state_76059;
var statearr_76062_76084 = state_76059__$1;
(statearr_76062_76084[(2)] = null);

(statearr_76062_76084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (4))){
var inst_76036 = (state_76059[(7)]);
var inst_76036__$1 = (state_76059[(2)]);
var inst_76037 = (inst_76036__$1 == null);
var state_76059__$1 = (function (){var statearr_76063 = state_76059;
(statearr_76063[(7)] = inst_76036__$1);

return statearr_76063;
})();
if(cljs.core.truth_(inst_76037)){
var statearr_76064_76085 = state_76059__$1;
(statearr_76064_76085[(1)] = (5));

} else {
var statearr_76065_76086 = state_76059__$1;
(statearr_76065_76086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (13))){
var state_76059__$1 = state_76059;
var statearr_76066_76087 = state_76059__$1;
(statearr_76066_76087[(2)] = null);

(statearr_76066_76087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (6))){
var inst_76036 = (state_76059[(7)]);
var inst_76042 = p.call(null,inst_76036);
var state_76059__$1 = state_76059;
if(cljs.core.truth_(inst_76042)){
var statearr_76067_76088 = state_76059__$1;
(statearr_76067_76088[(1)] = (9));

} else {
var statearr_76068_76089 = state_76059__$1;
(statearr_76068_76089[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (3))){
var inst_76057 = (state_76059[(2)]);
var state_76059__$1 = state_76059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76059__$1,inst_76057);
} else {
if((state_val_76060 === (12))){
var state_76059__$1 = state_76059;
var statearr_76069_76090 = state_76059__$1;
(statearr_76069_76090[(2)] = null);

(statearr_76069_76090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (2))){
var state_76059__$1 = state_76059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76059__$1,(4),ch);
} else {
if((state_val_76060 === (11))){
var inst_76036 = (state_76059[(7)]);
var inst_76046 = (state_76059[(2)]);
var state_76059__$1 = state_76059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76059__$1,(8),inst_76046,inst_76036);
} else {
if((state_val_76060 === (9))){
var state_76059__$1 = state_76059;
var statearr_76070_76091 = state_76059__$1;
(statearr_76070_76091[(2)] = tc);

(statearr_76070_76091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (5))){
var inst_76039 = cljs.core.async.close_BANG_.call(null,tc);
var inst_76040 = cljs.core.async.close_BANG_.call(null,fc);
var state_76059__$1 = (function (){var statearr_76071 = state_76059;
(statearr_76071[(8)] = inst_76039);

return statearr_76071;
})();
var statearr_76072_76092 = state_76059__$1;
(statearr_76072_76092[(2)] = inst_76040);

(statearr_76072_76092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (14))){
var inst_76053 = (state_76059[(2)]);
var state_76059__$1 = state_76059;
var statearr_76073_76093 = state_76059__$1;
(statearr_76073_76093[(2)] = inst_76053);

(statearr_76073_76093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (10))){
var state_76059__$1 = state_76059;
var statearr_76074_76094 = state_76059__$1;
(statearr_76074_76094[(2)] = fc);

(statearr_76074_76094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76060 === (8))){
var inst_76048 = (state_76059[(2)]);
var state_76059__$1 = state_76059;
if(cljs.core.truth_(inst_76048)){
var statearr_76075_76095 = state_76059__$1;
(statearr_76075_76095[(1)] = (12));

} else {
var statearr_76076_76096 = state_76059__$1;
(statearr_76076_76096[(1)] = (13));

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
});})(c__68453__auto___76082,tc,fc))
;
return ((function (switch__68363__auto__,c__68453__auto___76082,tc,fc){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_76077 = [null,null,null,null,null,null,null,null,null];
(statearr_76077[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_76077[(1)] = (1));

return statearr_76077;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_76059){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_76059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e76078){if((e76078 instanceof Object)){
var ex__68367__auto__ = e76078;
var statearr_76079_76097 = state_76059;
(statearr_76079_76097[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76098 = state_76059;
state_76059 = G__76098;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_76059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_76059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___76082,tc,fc))
})();
var state__68455__auto__ = (function (){var statearr_76080 = f__68454__auto__.call(null);
(statearr_76080[(6)] = c__68453__auto___76082);

return statearr_76080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___76082,tc,fc))
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
return (function (state_76119){
var state_val_76120 = (state_76119[(1)]);
if((state_val_76120 === (7))){
var inst_76115 = (state_76119[(2)]);
var state_76119__$1 = state_76119;
var statearr_76121_76139 = state_76119__$1;
(statearr_76121_76139[(2)] = inst_76115);

(statearr_76121_76139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76120 === (1))){
var inst_76099 = init;
var state_76119__$1 = (function (){var statearr_76122 = state_76119;
(statearr_76122[(7)] = inst_76099);

return statearr_76122;
})();
var statearr_76123_76140 = state_76119__$1;
(statearr_76123_76140[(2)] = null);

(statearr_76123_76140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76120 === (4))){
var inst_76102 = (state_76119[(8)]);
var inst_76102__$1 = (state_76119[(2)]);
var inst_76103 = (inst_76102__$1 == null);
var state_76119__$1 = (function (){var statearr_76124 = state_76119;
(statearr_76124[(8)] = inst_76102__$1);

return statearr_76124;
})();
if(cljs.core.truth_(inst_76103)){
var statearr_76125_76141 = state_76119__$1;
(statearr_76125_76141[(1)] = (5));

} else {
var statearr_76126_76142 = state_76119__$1;
(statearr_76126_76142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76120 === (6))){
var inst_76099 = (state_76119[(7)]);
var inst_76106 = (state_76119[(9)]);
var inst_76102 = (state_76119[(8)]);
var inst_76106__$1 = f.call(null,inst_76099,inst_76102);
var inst_76107 = cljs.core.reduced_QMARK_.call(null,inst_76106__$1);
var state_76119__$1 = (function (){var statearr_76127 = state_76119;
(statearr_76127[(9)] = inst_76106__$1);

return statearr_76127;
})();
if(inst_76107){
var statearr_76128_76143 = state_76119__$1;
(statearr_76128_76143[(1)] = (8));

} else {
var statearr_76129_76144 = state_76119__$1;
(statearr_76129_76144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76120 === (3))){
var inst_76117 = (state_76119[(2)]);
var state_76119__$1 = state_76119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76119__$1,inst_76117);
} else {
if((state_val_76120 === (2))){
var state_76119__$1 = state_76119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76119__$1,(4),ch);
} else {
if((state_val_76120 === (9))){
var inst_76106 = (state_76119[(9)]);
var inst_76099 = inst_76106;
var state_76119__$1 = (function (){var statearr_76130 = state_76119;
(statearr_76130[(7)] = inst_76099);

return statearr_76130;
})();
var statearr_76131_76145 = state_76119__$1;
(statearr_76131_76145[(2)] = null);

(statearr_76131_76145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76120 === (5))){
var inst_76099 = (state_76119[(7)]);
var state_76119__$1 = state_76119;
var statearr_76132_76146 = state_76119__$1;
(statearr_76132_76146[(2)] = inst_76099);

(statearr_76132_76146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76120 === (10))){
var inst_76113 = (state_76119[(2)]);
var state_76119__$1 = state_76119;
var statearr_76133_76147 = state_76119__$1;
(statearr_76133_76147[(2)] = inst_76113);

(statearr_76133_76147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76120 === (8))){
var inst_76106 = (state_76119[(9)]);
var inst_76109 = cljs.core.deref.call(null,inst_76106);
var state_76119__$1 = state_76119;
var statearr_76134_76148 = state_76119__$1;
(statearr_76134_76148[(2)] = inst_76109);

(statearr_76134_76148[(1)] = (10));


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
var statearr_76135 = [null,null,null,null,null,null,null,null,null,null];
(statearr_76135[(0)] = cljs$core$async$reduce_$_state_machine__68364__auto__);

(statearr_76135[(1)] = (1));

return statearr_76135;
});
var cljs$core$async$reduce_$_state_machine__68364__auto____1 = (function (state_76119){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_76119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e76136){if((e76136 instanceof Object)){
var ex__68367__auto__ = e76136;
var statearr_76137_76149 = state_76119;
(statearr_76137_76149[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76150 = state_76119;
state_76119 = G__76150;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__68364__auto__ = function(state_76119){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__68364__auto____1.call(this,state_76119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__68364__auto____0;
cljs$core$async$reduce_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__68364__auto____1;
return cljs$core$async$reduce_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_76138 = f__68454__auto__.call(null);
(statearr_76138[(6)] = c__68453__auto__);

return statearr_76138;
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
return (function (state_76156){
var state_val_76157 = (state_76156[(1)]);
if((state_val_76157 === (1))){
var inst_76151 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_76156__$1 = state_76156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76156__$1,(2),inst_76151);
} else {
if((state_val_76157 === (2))){
var inst_76153 = (state_76156[(2)]);
var inst_76154 = f__$1.call(null,inst_76153);
var state_76156__$1 = state_76156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76156__$1,inst_76154);
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
var statearr_76158 = [null,null,null,null,null,null,null];
(statearr_76158[(0)] = cljs$core$async$transduce_$_state_machine__68364__auto__);

(statearr_76158[(1)] = (1));

return statearr_76158;
});
var cljs$core$async$transduce_$_state_machine__68364__auto____1 = (function (state_76156){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_76156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e76159){if((e76159 instanceof Object)){
var ex__68367__auto__ = e76159;
var statearr_76160_76162 = state_76156;
(statearr_76160_76162[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76163 = state_76156;
state_76156 = G__76163;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__68364__auto__ = function(state_76156){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__68364__auto____1.call(this,state_76156);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__68364__auto____0;
cljs$core$async$transduce_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__68364__auto____1;
return cljs$core$async$transduce_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,f__$1))
})();
var state__68455__auto__ = (function (){var statearr_76161 = f__68454__auto__.call(null);
(statearr_76161[(6)] = c__68453__auto__);

return statearr_76161;
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
var G__76165 = arguments.length;
switch (G__76165) {
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
return (function (state_76190){
var state_val_76191 = (state_76190[(1)]);
if((state_val_76191 === (7))){
var inst_76172 = (state_76190[(2)]);
var state_76190__$1 = state_76190;
var statearr_76192_76213 = state_76190__$1;
(statearr_76192_76213[(2)] = inst_76172);

(statearr_76192_76213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (1))){
var inst_76166 = cljs.core.seq.call(null,coll);
var inst_76167 = inst_76166;
var state_76190__$1 = (function (){var statearr_76193 = state_76190;
(statearr_76193[(7)] = inst_76167);

return statearr_76193;
})();
var statearr_76194_76214 = state_76190__$1;
(statearr_76194_76214[(2)] = null);

(statearr_76194_76214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (4))){
var inst_76167 = (state_76190[(7)]);
var inst_76170 = cljs.core.first.call(null,inst_76167);
var state_76190__$1 = state_76190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76190__$1,(7),ch,inst_76170);
} else {
if((state_val_76191 === (13))){
var inst_76184 = (state_76190[(2)]);
var state_76190__$1 = state_76190;
var statearr_76195_76215 = state_76190__$1;
(statearr_76195_76215[(2)] = inst_76184);

(statearr_76195_76215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (6))){
var inst_76175 = (state_76190[(2)]);
var state_76190__$1 = state_76190;
if(cljs.core.truth_(inst_76175)){
var statearr_76196_76216 = state_76190__$1;
(statearr_76196_76216[(1)] = (8));

} else {
var statearr_76197_76217 = state_76190__$1;
(statearr_76197_76217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (3))){
var inst_76188 = (state_76190[(2)]);
var state_76190__$1 = state_76190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76190__$1,inst_76188);
} else {
if((state_val_76191 === (12))){
var state_76190__$1 = state_76190;
var statearr_76198_76218 = state_76190__$1;
(statearr_76198_76218[(2)] = null);

(statearr_76198_76218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (2))){
var inst_76167 = (state_76190[(7)]);
var state_76190__$1 = state_76190;
if(cljs.core.truth_(inst_76167)){
var statearr_76199_76219 = state_76190__$1;
(statearr_76199_76219[(1)] = (4));

} else {
var statearr_76200_76220 = state_76190__$1;
(statearr_76200_76220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (11))){
var inst_76181 = cljs.core.async.close_BANG_.call(null,ch);
var state_76190__$1 = state_76190;
var statearr_76201_76221 = state_76190__$1;
(statearr_76201_76221[(2)] = inst_76181);

(statearr_76201_76221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (9))){
var state_76190__$1 = state_76190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_76202_76222 = state_76190__$1;
(statearr_76202_76222[(1)] = (11));

} else {
var statearr_76203_76223 = state_76190__$1;
(statearr_76203_76223[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (5))){
var inst_76167 = (state_76190[(7)]);
var state_76190__$1 = state_76190;
var statearr_76204_76224 = state_76190__$1;
(statearr_76204_76224[(2)] = inst_76167);

(statearr_76204_76224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (10))){
var inst_76186 = (state_76190[(2)]);
var state_76190__$1 = state_76190;
var statearr_76205_76225 = state_76190__$1;
(statearr_76205_76225[(2)] = inst_76186);

(statearr_76205_76225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76191 === (8))){
var inst_76167 = (state_76190[(7)]);
var inst_76177 = cljs.core.next.call(null,inst_76167);
var inst_76167__$1 = inst_76177;
var state_76190__$1 = (function (){var statearr_76206 = state_76190;
(statearr_76206[(7)] = inst_76167__$1);

return statearr_76206;
})();
var statearr_76207_76226 = state_76190__$1;
(statearr_76207_76226[(2)] = null);

(statearr_76207_76226[(1)] = (2));


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
var statearr_76208 = [null,null,null,null,null,null,null,null];
(statearr_76208[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_76208[(1)] = (1));

return statearr_76208;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_76190){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_76190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e76209){if((e76209 instanceof Object)){
var ex__68367__auto__ = e76209;
var statearr_76210_76227 = state_76190;
(statearr_76210_76227[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76228 = state_76190;
state_76190 = G__76228;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_76190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_76190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_76211 = f__68454__auto__.call(null);
(statearr_76211[(6)] = c__68453__auto__);

return statearr_76211;
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
if(typeof cljs.core.async.t_cljs$core$async76229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76229 = (function (ch,cs,meta76230){
this.ch = ch;
this.cs = cs;
this.meta76230 = meta76230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async76229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_76231,meta76230__$1){
var self__ = this;
var _76231__$1 = this;
return (new cljs.core.async.t_cljs$core$async76229(self__.ch,self__.cs,meta76230__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async76229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_76231){
var self__ = this;
var _76231__$1 = this;
return self__.meta76230;
});})(cs))
;

cljs.core.async.t_cljs$core$async76229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async76229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async76229.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async76229.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async76229.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async76229.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async76229.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta76230","meta76230",-448221677,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async76229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76229";

cljs.core.async.t_cljs$core$async76229.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async76229");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async76229 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async76229(ch__$1,cs__$1,meta76230){
return (new cljs.core.async.t_cljs$core$async76229(ch__$1,cs__$1,meta76230));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async76229(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__68453__auto___76451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___76451,cs,m,dchan,dctr,done){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___76451,cs,m,dchan,dctr,done){
return (function (state_76366){
var state_val_76367 = (state_76366[(1)]);
if((state_val_76367 === (7))){
var inst_76362 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76368_76452 = state_76366__$1;
(statearr_76368_76452[(2)] = inst_76362);

(statearr_76368_76452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (20))){
var inst_76265 = (state_76366[(7)]);
var inst_76277 = cljs.core.first.call(null,inst_76265);
var inst_76278 = cljs.core.nth.call(null,inst_76277,(0),null);
var inst_76279 = cljs.core.nth.call(null,inst_76277,(1),null);
var state_76366__$1 = (function (){var statearr_76369 = state_76366;
(statearr_76369[(8)] = inst_76278);

return statearr_76369;
})();
if(cljs.core.truth_(inst_76279)){
var statearr_76370_76453 = state_76366__$1;
(statearr_76370_76453[(1)] = (22));

} else {
var statearr_76371_76454 = state_76366__$1;
(statearr_76371_76454[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (27))){
var inst_76309 = (state_76366[(9)]);
var inst_76234 = (state_76366[(10)]);
var inst_76307 = (state_76366[(11)]);
var inst_76314 = (state_76366[(12)]);
var inst_76314__$1 = cljs.core._nth.call(null,inst_76307,inst_76309);
var inst_76315 = cljs.core.async.put_BANG_.call(null,inst_76314__$1,inst_76234,done);
var state_76366__$1 = (function (){var statearr_76372 = state_76366;
(statearr_76372[(12)] = inst_76314__$1);

return statearr_76372;
})();
if(cljs.core.truth_(inst_76315)){
var statearr_76373_76455 = state_76366__$1;
(statearr_76373_76455[(1)] = (30));

} else {
var statearr_76374_76456 = state_76366__$1;
(statearr_76374_76456[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (1))){
var state_76366__$1 = state_76366;
var statearr_76375_76457 = state_76366__$1;
(statearr_76375_76457[(2)] = null);

(statearr_76375_76457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (24))){
var inst_76265 = (state_76366[(7)]);
var inst_76284 = (state_76366[(2)]);
var inst_76285 = cljs.core.next.call(null,inst_76265);
var inst_76243 = inst_76285;
var inst_76244 = null;
var inst_76245 = (0);
var inst_76246 = (0);
var state_76366__$1 = (function (){var statearr_76376 = state_76366;
(statearr_76376[(13)] = inst_76246);

(statearr_76376[(14)] = inst_76244);

(statearr_76376[(15)] = inst_76243);

(statearr_76376[(16)] = inst_76284);

(statearr_76376[(17)] = inst_76245);

return statearr_76376;
})();
var statearr_76377_76458 = state_76366__$1;
(statearr_76377_76458[(2)] = null);

(statearr_76377_76458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (39))){
var state_76366__$1 = state_76366;
var statearr_76381_76459 = state_76366__$1;
(statearr_76381_76459[(2)] = null);

(statearr_76381_76459[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (4))){
var inst_76234 = (state_76366[(10)]);
var inst_76234__$1 = (state_76366[(2)]);
var inst_76235 = (inst_76234__$1 == null);
var state_76366__$1 = (function (){var statearr_76382 = state_76366;
(statearr_76382[(10)] = inst_76234__$1);

return statearr_76382;
})();
if(cljs.core.truth_(inst_76235)){
var statearr_76383_76460 = state_76366__$1;
(statearr_76383_76460[(1)] = (5));

} else {
var statearr_76384_76461 = state_76366__$1;
(statearr_76384_76461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (15))){
var inst_76246 = (state_76366[(13)]);
var inst_76244 = (state_76366[(14)]);
var inst_76243 = (state_76366[(15)]);
var inst_76245 = (state_76366[(17)]);
var inst_76261 = (state_76366[(2)]);
var inst_76262 = (inst_76246 + (1));
var tmp76378 = inst_76244;
var tmp76379 = inst_76243;
var tmp76380 = inst_76245;
var inst_76243__$1 = tmp76379;
var inst_76244__$1 = tmp76378;
var inst_76245__$1 = tmp76380;
var inst_76246__$1 = inst_76262;
var state_76366__$1 = (function (){var statearr_76385 = state_76366;
(statearr_76385[(13)] = inst_76246__$1);

(statearr_76385[(14)] = inst_76244__$1);

(statearr_76385[(15)] = inst_76243__$1);

(statearr_76385[(17)] = inst_76245__$1);

(statearr_76385[(18)] = inst_76261);

return statearr_76385;
})();
var statearr_76386_76462 = state_76366__$1;
(statearr_76386_76462[(2)] = null);

(statearr_76386_76462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (21))){
var inst_76288 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76390_76463 = state_76366__$1;
(statearr_76390_76463[(2)] = inst_76288);

(statearr_76390_76463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (31))){
var inst_76314 = (state_76366[(12)]);
var inst_76318 = done.call(null,null);
var inst_76319 = cljs.core.async.untap_STAR_.call(null,m,inst_76314);
var state_76366__$1 = (function (){var statearr_76391 = state_76366;
(statearr_76391[(19)] = inst_76318);

return statearr_76391;
})();
var statearr_76392_76464 = state_76366__$1;
(statearr_76392_76464[(2)] = inst_76319);

(statearr_76392_76464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (32))){
var inst_76309 = (state_76366[(9)]);
var inst_76308 = (state_76366[(20)]);
var inst_76307 = (state_76366[(11)]);
var inst_76306 = (state_76366[(21)]);
var inst_76321 = (state_76366[(2)]);
var inst_76322 = (inst_76309 + (1));
var tmp76387 = inst_76308;
var tmp76388 = inst_76307;
var tmp76389 = inst_76306;
var inst_76306__$1 = tmp76389;
var inst_76307__$1 = tmp76388;
var inst_76308__$1 = tmp76387;
var inst_76309__$1 = inst_76322;
var state_76366__$1 = (function (){var statearr_76393 = state_76366;
(statearr_76393[(9)] = inst_76309__$1);

(statearr_76393[(20)] = inst_76308__$1);

(statearr_76393[(22)] = inst_76321);

(statearr_76393[(11)] = inst_76307__$1);

(statearr_76393[(21)] = inst_76306__$1);

return statearr_76393;
})();
var statearr_76394_76465 = state_76366__$1;
(statearr_76394_76465[(2)] = null);

(statearr_76394_76465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (40))){
var inst_76334 = (state_76366[(23)]);
var inst_76338 = done.call(null,null);
var inst_76339 = cljs.core.async.untap_STAR_.call(null,m,inst_76334);
var state_76366__$1 = (function (){var statearr_76395 = state_76366;
(statearr_76395[(24)] = inst_76338);

return statearr_76395;
})();
var statearr_76396_76466 = state_76366__$1;
(statearr_76396_76466[(2)] = inst_76339);

(statearr_76396_76466[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (33))){
var inst_76325 = (state_76366[(25)]);
var inst_76327 = cljs.core.chunked_seq_QMARK_.call(null,inst_76325);
var state_76366__$1 = state_76366;
if(inst_76327){
var statearr_76397_76467 = state_76366__$1;
(statearr_76397_76467[(1)] = (36));

} else {
var statearr_76398_76468 = state_76366__$1;
(statearr_76398_76468[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (13))){
var inst_76255 = (state_76366[(26)]);
var inst_76258 = cljs.core.async.close_BANG_.call(null,inst_76255);
var state_76366__$1 = state_76366;
var statearr_76399_76469 = state_76366__$1;
(statearr_76399_76469[(2)] = inst_76258);

(statearr_76399_76469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (22))){
var inst_76278 = (state_76366[(8)]);
var inst_76281 = cljs.core.async.close_BANG_.call(null,inst_76278);
var state_76366__$1 = state_76366;
var statearr_76400_76470 = state_76366__$1;
(statearr_76400_76470[(2)] = inst_76281);

(statearr_76400_76470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (36))){
var inst_76325 = (state_76366[(25)]);
var inst_76329 = cljs.core.chunk_first.call(null,inst_76325);
var inst_76330 = cljs.core.chunk_rest.call(null,inst_76325);
var inst_76331 = cljs.core.count.call(null,inst_76329);
var inst_76306 = inst_76330;
var inst_76307 = inst_76329;
var inst_76308 = inst_76331;
var inst_76309 = (0);
var state_76366__$1 = (function (){var statearr_76401 = state_76366;
(statearr_76401[(9)] = inst_76309);

(statearr_76401[(20)] = inst_76308);

(statearr_76401[(11)] = inst_76307);

(statearr_76401[(21)] = inst_76306);

return statearr_76401;
})();
var statearr_76402_76471 = state_76366__$1;
(statearr_76402_76471[(2)] = null);

(statearr_76402_76471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (41))){
var inst_76325 = (state_76366[(25)]);
var inst_76341 = (state_76366[(2)]);
var inst_76342 = cljs.core.next.call(null,inst_76325);
var inst_76306 = inst_76342;
var inst_76307 = null;
var inst_76308 = (0);
var inst_76309 = (0);
var state_76366__$1 = (function (){var statearr_76403 = state_76366;
(statearr_76403[(9)] = inst_76309);

(statearr_76403[(20)] = inst_76308);

(statearr_76403[(11)] = inst_76307);

(statearr_76403[(21)] = inst_76306);

(statearr_76403[(27)] = inst_76341);

return statearr_76403;
})();
var statearr_76404_76472 = state_76366__$1;
(statearr_76404_76472[(2)] = null);

(statearr_76404_76472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (43))){
var state_76366__$1 = state_76366;
var statearr_76405_76473 = state_76366__$1;
(statearr_76405_76473[(2)] = null);

(statearr_76405_76473[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (29))){
var inst_76350 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76406_76474 = state_76366__$1;
(statearr_76406_76474[(2)] = inst_76350);

(statearr_76406_76474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (44))){
var inst_76359 = (state_76366[(2)]);
var state_76366__$1 = (function (){var statearr_76407 = state_76366;
(statearr_76407[(28)] = inst_76359);

return statearr_76407;
})();
var statearr_76408_76475 = state_76366__$1;
(statearr_76408_76475[(2)] = null);

(statearr_76408_76475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (6))){
var inst_76298 = (state_76366[(29)]);
var inst_76297 = cljs.core.deref.call(null,cs);
var inst_76298__$1 = cljs.core.keys.call(null,inst_76297);
var inst_76299 = cljs.core.count.call(null,inst_76298__$1);
var inst_76300 = cljs.core.reset_BANG_.call(null,dctr,inst_76299);
var inst_76305 = cljs.core.seq.call(null,inst_76298__$1);
var inst_76306 = inst_76305;
var inst_76307 = null;
var inst_76308 = (0);
var inst_76309 = (0);
var state_76366__$1 = (function (){var statearr_76409 = state_76366;
(statearr_76409[(9)] = inst_76309);

(statearr_76409[(20)] = inst_76308);

(statearr_76409[(30)] = inst_76300);

(statearr_76409[(11)] = inst_76307);

(statearr_76409[(21)] = inst_76306);

(statearr_76409[(29)] = inst_76298__$1);

return statearr_76409;
})();
var statearr_76410_76476 = state_76366__$1;
(statearr_76410_76476[(2)] = null);

(statearr_76410_76476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (28))){
var inst_76306 = (state_76366[(21)]);
var inst_76325 = (state_76366[(25)]);
var inst_76325__$1 = cljs.core.seq.call(null,inst_76306);
var state_76366__$1 = (function (){var statearr_76411 = state_76366;
(statearr_76411[(25)] = inst_76325__$1);

return statearr_76411;
})();
if(inst_76325__$1){
var statearr_76412_76477 = state_76366__$1;
(statearr_76412_76477[(1)] = (33));

} else {
var statearr_76413_76478 = state_76366__$1;
(statearr_76413_76478[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (25))){
var inst_76309 = (state_76366[(9)]);
var inst_76308 = (state_76366[(20)]);
var inst_76311 = (inst_76309 < inst_76308);
var inst_76312 = inst_76311;
var state_76366__$1 = state_76366;
if(cljs.core.truth_(inst_76312)){
var statearr_76414_76479 = state_76366__$1;
(statearr_76414_76479[(1)] = (27));

} else {
var statearr_76415_76480 = state_76366__$1;
(statearr_76415_76480[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (34))){
var state_76366__$1 = state_76366;
var statearr_76416_76481 = state_76366__$1;
(statearr_76416_76481[(2)] = null);

(statearr_76416_76481[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (17))){
var state_76366__$1 = state_76366;
var statearr_76417_76482 = state_76366__$1;
(statearr_76417_76482[(2)] = null);

(statearr_76417_76482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (3))){
var inst_76364 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76366__$1,inst_76364);
} else {
if((state_val_76367 === (12))){
var inst_76293 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76418_76483 = state_76366__$1;
(statearr_76418_76483[(2)] = inst_76293);

(statearr_76418_76483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (2))){
var state_76366__$1 = state_76366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76366__$1,(4),ch);
} else {
if((state_val_76367 === (23))){
var state_76366__$1 = state_76366;
var statearr_76419_76484 = state_76366__$1;
(statearr_76419_76484[(2)] = null);

(statearr_76419_76484[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (35))){
var inst_76348 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76420_76485 = state_76366__$1;
(statearr_76420_76485[(2)] = inst_76348);

(statearr_76420_76485[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (19))){
var inst_76265 = (state_76366[(7)]);
var inst_76269 = cljs.core.chunk_first.call(null,inst_76265);
var inst_76270 = cljs.core.chunk_rest.call(null,inst_76265);
var inst_76271 = cljs.core.count.call(null,inst_76269);
var inst_76243 = inst_76270;
var inst_76244 = inst_76269;
var inst_76245 = inst_76271;
var inst_76246 = (0);
var state_76366__$1 = (function (){var statearr_76421 = state_76366;
(statearr_76421[(13)] = inst_76246);

(statearr_76421[(14)] = inst_76244);

(statearr_76421[(15)] = inst_76243);

(statearr_76421[(17)] = inst_76245);

return statearr_76421;
})();
var statearr_76422_76486 = state_76366__$1;
(statearr_76422_76486[(2)] = null);

(statearr_76422_76486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (11))){
var inst_76243 = (state_76366[(15)]);
var inst_76265 = (state_76366[(7)]);
var inst_76265__$1 = cljs.core.seq.call(null,inst_76243);
var state_76366__$1 = (function (){var statearr_76423 = state_76366;
(statearr_76423[(7)] = inst_76265__$1);

return statearr_76423;
})();
if(inst_76265__$1){
var statearr_76424_76487 = state_76366__$1;
(statearr_76424_76487[(1)] = (16));

} else {
var statearr_76425_76488 = state_76366__$1;
(statearr_76425_76488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (9))){
var inst_76295 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76426_76489 = state_76366__$1;
(statearr_76426_76489[(2)] = inst_76295);

(statearr_76426_76489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (5))){
var inst_76241 = cljs.core.deref.call(null,cs);
var inst_76242 = cljs.core.seq.call(null,inst_76241);
var inst_76243 = inst_76242;
var inst_76244 = null;
var inst_76245 = (0);
var inst_76246 = (0);
var state_76366__$1 = (function (){var statearr_76427 = state_76366;
(statearr_76427[(13)] = inst_76246);

(statearr_76427[(14)] = inst_76244);

(statearr_76427[(15)] = inst_76243);

(statearr_76427[(17)] = inst_76245);

return statearr_76427;
})();
var statearr_76428_76490 = state_76366__$1;
(statearr_76428_76490[(2)] = null);

(statearr_76428_76490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (14))){
var state_76366__$1 = state_76366;
var statearr_76429_76491 = state_76366__$1;
(statearr_76429_76491[(2)] = null);

(statearr_76429_76491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (45))){
var inst_76356 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76430_76492 = state_76366__$1;
(statearr_76430_76492[(2)] = inst_76356);

(statearr_76430_76492[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (26))){
var inst_76298 = (state_76366[(29)]);
var inst_76352 = (state_76366[(2)]);
var inst_76353 = cljs.core.seq.call(null,inst_76298);
var state_76366__$1 = (function (){var statearr_76431 = state_76366;
(statearr_76431[(31)] = inst_76352);

return statearr_76431;
})();
if(inst_76353){
var statearr_76432_76493 = state_76366__$1;
(statearr_76432_76493[(1)] = (42));

} else {
var statearr_76433_76494 = state_76366__$1;
(statearr_76433_76494[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (16))){
var inst_76265 = (state_76366[(7)]);
var inst_76267 = cljs.core.chunked_seq_QMARK_.call(null,inst_76265);
var state_76366__$1 = state_76366;
if(inst_76267){
var statearr_76434_76495 = state_76366__$1;
(statearr_76434_76495[(1)] = (19));

} else {
var statearr_76435_76496 = state_76366__$1;
(statearr_76435_76496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (38))){
var inst_76345 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76436_76497 = state_76366__$1;
(statearr_76436_76497[(2)] = inst_76345);

(statearr_76436_76497[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (30))){
var state_76366__$1 = state_76366;
var statearr_76437_76498 = state_76366__$1;
(statearr_76437_76498[(2)] = null);

(statearr_76437_76498[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (10))){
var inst_76246 = (state_76366[(13)]);
var inst_76244 = (state_76366[(14)]);
var inst_76254 = cljs.core._nth.call(null,inst_76244,inst_76246);
var inst_76255 = cljs.core.nth.call(null,inst_76254,(0),null);
var inst_76256 = cljs.core.nth.call(null,inst_76254,(1),null);
var state_76366__$1 = (function (){var statearr_76438 = state_76366;
(statearr_76438[(26)] = inst_76255);

return statearr_76438;
})();
if(cljs.core.truth_(inst_76256)){
var statearr_76439_76499 = state_76366__$1;
(statearr_76439_76499[(1)] = (13));

} else {
var statearr_76440_76500 = state_76366__$1;
(statearr_76440_76500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (18))){
var inst_76291 = (state_76366[(2)]);
var state_76366__$1 = state_76366;
var statearr_76441_76501 = state_76366__$1;
(statearr_76441_76501[(2)] = inst_76291);

(statearr_76441_76501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (42))){
var state_76366__$1 = state_76366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76366__$1,(45),dchan);
} else {
if((state_val_76367 === (37))){
var inst_76234 = (state_76366[(10)]);
var inst_76325 = (state_76366[(25)]);
var inst_76334 = (state_76366[(23)]);
var inst_76334__$1 = cljs.core.first.call(null,inst_76325);
var inst_76335 = cljs.core.async.put_BANG_.call(null,inst_76334__$1,inst_76234,done);
var state_76366__$1 = (function (){var statearr_76442 = state_76366;
(statearr_76442[(23)] = inst_76334__$1);

return statearr_76442;
})();
if(cljs.core.truth_(inst_76335)){
var statearr_76443_76502 = state_76366__$1;
(statearr_76443_76502[(1)] = (39));

} else {
var statearr_76444_76503 = state_76366__$1;
(statearr_76444_76503[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76367 === (8))){
var inst_76246 = (state_76366[(13)]);
var inst_76245 = (state_76366[(17)]);
var inst_76248 = (inst_76246 < inst_76245);
var inst_76249 = inst_76248;
var state_76366__$1 = state_76366;
if(cljs.core.truth_(inst_76249)){
var statearr_76445_76504 = state_76366__$1;
(statearr_76445_76504[(1)] = (10));

} else {
var statearr_76446_76505 = state_76366__$1;
(statearr_76446_76505[(1)] = (11));

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
});})(c__68453__auto___76451,cs,m,dchan,dctr,done))
;
return ((function (switch__68363__auto__,c__68453__auto___76451,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__68364__auto__ = null;
var cljs$core$async$mult_$_state_machine__68364__auto____0 = (function (){
var statearr_76447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76447[(0)] = cljs$core$async$mult_$_state_machine__68364__auto__);

(statearr_76447[(1)] = (1));

return statearr_76447;
});
var cljs$core$async$mult_$_state_machine__68364__auto____1 = (function (state_76366){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_76366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e76448){if((e76448 instanceof Object)){
var ex__68367__auto__ = e76448;
var statearr_76449_76506 = state_76366;
(statearr_76449_76506[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76507 = state_76366;
state_76366 = G__76507;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__68364__auto__ = function(state_76366){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__68364__auto____1.call(this,state_76366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__68364__auto____0;
cljs$core$async$mult_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__68364__auto____1;
return cljs$core$async$mult_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___76451,cs,m,dchan,dctr,done))
})();
var state__68455__auto__ = (function (){var statearr_76450 = f__68454__auto__.call(null);
(statearr_76450[(6)] = c__68453__auto___76451);

return statearr_76450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___76451,cs,m,dchan,dctr,done))
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
var G__76509 = arguments.length;
switch (G__76509) {
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
var len__42174__auto___76521 = arguments.length;
var i__42175__auto___76522 = (0);
while(true){
if((i__42175__auto___76522 < len__42174__auto___76521)){
args__42181__auto__.push((arguments[i__42175__auto___76522]));

var G__76523 = (i__42175__auto___76522 + (1));
i__42175__auto___76522 = G__76523;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((3) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42182__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__76515){
var map__76516 = p__76515;
var map__76516__$1 = ((((!((map__76516 == null)))?((((map__76516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76516):map__76516);
var opts = map__76516__$1;
var statearr_76518_76524 = state;
(statearr_76518_76524[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__76516,map__76516__$1,opts){
return (function (val){
var statearr_76519_76525 = state;
(statearr_76519_76525[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__76516,map__76516__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_76520_76526 = state;
(statearr_76520_76526[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq76511){
var G__76512 = cljs.core.first.call(null,seq76511);
var seq76511__$1 = cljs.core.next.call(null,seq76511);
var G__76513 = cljs.core.first.call(null,seq76511__$1);
var seq76511__$2 = cljs.core.next.call(null,seq76511__$1);
var G__76514 = cljs.core.first.call(null,seq76511__$2);
var seq76511__$3 = cljs.core.next.call(null,seq76511__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__76512,G__76513,G__76514,seq76511__$3);
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
if(typeof cljs.core.async.t_cljs$core$async76527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76527 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta76528){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta76528 = meta76528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_76529,meta76528__$1){
var self__ = this;
var _76529__$1 = this;
return (new cljs.core.async.t_cljs$core$async76527(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta76528__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_76529){
var self__ = this;
var _76529__$1 = this;
return self__.meta76528;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async76527.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async76527.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta76528","meta76528",-1161069232,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async76527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76527";

cljs.core.async.t_cljs$core$async76527.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async76527");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async76527 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async76527(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta76528){
return (new cljs.core.async.t_cljs$core$async76527(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta76528));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async76527(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__68453__auto___76691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___76691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___76691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_76631){
var state_val_76632 = (state_76631[(1)]);
if((state_val_76632 === (7))){
var inst_76546 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
var statearr_76633_76692 = state_76631__$1;
(statearr_76633_76692[(2)] = inst_76546);

(statearr_76633_76692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (20))){
var inst_76558 = (state_76631[(7)]);
var state_76631__$1 = state_76631;
var statearr_76634_76693 = state_76631__$1;
(statearr_76634_76693[(2)] = inst_76558);

(statearr_76634_76693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (27))){
var state_76631__$1 = state_76631;
var statearr_76635_76694 = state_76631__$1;
(statearr_76635_76694[(2)] = null);

(statearr_76635_76694[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (1))){
var inst_76533 = (state_76631[(8)]);
var inst_76533__$1 = calc_state.call(null);
var inst_76535 = (inst_76533__$1 == null);
var inst_76536 = cljs.core.not.call(null,inst_76535);
var state_76631__$1 = (function (){var statearr_76636 = state_76631;
(statearr_76636[(8)] = inst_76533__$1);

return statearr_76636;
})();
if(inst_76536){
var statearr_76637_76695 = state_76631__$1;
(statearr_76637_76695[(1)] = (2));

} else {
var statearr_76638_76696 = state_76631__$1;
(statearr_76638_76696[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (24))){
var inst_76582 = (state_76631[(9)]);
var inst_76605 = (state_76631[(10)]);
var inst_76591 = (state_76631[(11)]);
var inst_76605__$1 = inst_76582.call(null,inst_76591);
var state_76631__$1 = (function (){var statearr_76639 = state_76631;
(statearr_76639[(10)] = inst_76605__$1);

return statearr_76639;
})();
if(cljs.core.truth_(inst_76605__$1)){
var statearr_76640_76697 = state_76631__$1;
(statearr_76640_76697[(1)] = (29));

} else {
var statearr_76641_76698 = state_76631__$1;
(statearr_76641_76698[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (4))){
var inst_76549 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
if(cljs.core.truth_(inst_76549)){
var statearr_76642_76699 = state_76631__$1;
(statearr_76642_76699[(1)] = (8));

} else {
var statearr_76643_76700 = state_76631__$1;
(statearr_76643_76700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (15))){
var inst_76576 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
if(cljs.core.truth_(inst_76576)){
var statearr_76644_76701 = state_76631__$1;
(statearr_76644_76701[(1)] = (19));

} else {
var statearr_76645_76702 = state_76631__$1;
(statearr_76645_76702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (21))){
var inst_76581 = (state_76631[(12)]);
var inst_76581__$1 = (state_76631[(2)]);
var inst_76582 = cljs.core.get.call(null,inst_76581__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_76583 = cljs.core.get.call(null,inst_76581__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_76584 = cljs.core.get.call(null,inst_76581__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_76631__$1 = (function (){var statearr_76646 = state_76631;
(statearr_76646[(9)] = inst_76582);

(statearr_76646[(12)] = inst_76581__$1);

(statearr_76646[(13)] = inst_76583);

return statearr_76646;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_76631__$1,(22),inst_76584);
} else {
if((state_val_76632 === (31))){
var inst_76613 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
if(cljs.core.truth_(inst_76613)){
var statearr_76647_76703 = state_76631__$1;
(statearr_76647_76703[(1)] = (32));

} else {
var statearr_76648_76704 = state_76631__$1;
(statearr_76648_76704[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (32))){
var inst_76590 = (state_76631[(14)]);
var state_76631__$1 = state_76631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76631__$1,(35),out,inst_76590);
} else {
if((state_val_76632 === (33))){
var inst_76581 = (state_76631[(12)]);
var inst_76558 = inst_76581;
var state_76631__$1 = (function (){var statearr_76649 = state_76631;
(statearr_76649[(7)] = inst_76558);

return statearr_76649;
})();
var statearr_76650_76705 = state_76631__$1;
(statearr_76650_76705[(2)] = null);

(statearr_76650_76705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (13))){
var inst_76558 = (state_76631[(7)]);
var inst_76565 = inst_76558.cljs$lang$protocol_mask$partition0$;
var inst_76566 = (inst_76565 & (64));
var inst_76567 = inst_76558.cljs$core$ISeq$;
var inst_76568 = (cljs.core.PROTOCOL_SENTINEL === inst_76567);
var inst_76569 = (inst_76566) || (inst_76568);
var state_76631__$1 = state_76631;
if(cljs.core.truth_(inst_76569)){
var statearr_76651_76706 = state_76631__$1;
(statearr_76651_76706[(1)] = (16));

} else {
var statearr_76652_76707 = state_76631__$1;
(statearr_76652_76707[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (22))){
var inst_76590 = (state_76631[(14)]);
var inst_76591 = (state_76631[(11)]);
var inst_76589 = (state_76631[(2)]);
var inst_76590__$1 = cljs.core.nth.call(null,inst_76589,(0),null);
var inst_76591__$1 = cljs.core.nth.call(null,inst_76589,(1),null);
var inst_76592 = (inst_76590__$1 == null);
var inst_76593 = cljs.core._EQ_.call(null,inst_76591__$1,change);
var inst_76594 = (inst_76592) || (inst_76593);
var state_76631__$1 = (function (){var statearr_76653 = state_76631;
(statearr_76653[(14)] = inst_76590__$1);

(statearr_76653[(11)] = inst_76591__$1);

return statearr_76653;
})();
if(cljs.core.truth_(inst_76594)){
var statearr_76654_76708 = state_76631__$1;
(statearr_76654_76708[(1)] = (23));

} else {
var statearr_76655_76709 = state_76631__$1;
(statearr_76655_76709[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (36))){
var inst_76581 = (state_76631[(12)]);
var inst_76558 = inst_76581;
var state_76631__$1 = (function (){var statearr_76656 = state_76631;
(statearr_76656[(7)] = inst_76558);

return statearr_76656;
})();
var statearr_76657_76710 = state_76631__$1;
(statearr_76657_76710[(2)] = null);

(statearr_76657_76710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (29))){
var inst_76605 = (state_76631[(10)]);
var state_76631__$1 = state_76631;
var statearr_76658_76711 = state_76631__$1;
(statearr_76658_76711[(2)] = inst_76605);

(statearr_76658_76711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (6))){
var state_76631__$1 = state_76631;
var statearr_76659_76712 = state_76631__$1;
(statearr_76659_76712[(2)] = false);

(statearr_76659_76712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (28))){
var inst_76601 = (state_76631[(2)]);
var inst_76602 = calc_state.call(null);
var inst_76558 = inst_76602;
var state_76631__$1 = (function (){var statearr_76660 = state_76631;
(statearr_76660[(15)] = inst_76601);

(statearr_76660[(7)] = inst_76558);

return statearr_76660;
})();
var statearr_76661_76713 = state_76631__$1;
(statearr_76661_76713[(2)] = null);

(statearr_76661_76713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (25))){
var inst_76627 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
var statearr_76662_76714 = state_76631__$1;
(statearr_76662_76714[(2)] = inst_76627);

(statearr_76662_76714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (34))){
var inst_76625 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
var statearr_76663_76715 = state_76631__$1;
(statearr_76663_76715[(2)] = inst_76625);

(statearr_76663_76715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (17))){
var state_76631__$1 = state_76631;
var statearr_76664_76716 = state_76631__$1;
(statearr_76664_76716[(2)] = false);

(statearr_76664_76716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (3))){
var state_76631__$1 = state_76631;
var statearr_76665_76717 = state_76631__$1;
(statearr_76665_76717[(2)] = false);

(statearr_76665_76717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (12))){
var inst_76629 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76631__$1,inst_76629);
} else {
if((state_val_76632 === (2))){
var inst_76533 = (state_76631[(8)]);
var inst_76538 = inst_76533.cljs$lang$protocol_mask$partition0$;
var inst_76539 = (inst_76538 & (64));
var inst_76540 = inst_76533.cljs$core$ISeq$;
var inst_76541 = (cljs.core.PROTOCOL_SENTINEL === inst_76540);
var inst_76542 = (inst_76539) || (inst_76541);
var state_76631__$1 = state_76631;
if(cljs.core.truth_(inst_76542)){
var statearr_76666_76718 = state_76631__$1;
(statearr_76666_76718[(1)] = (5));

} else {
var statearr_76667_76719 = state_76631__$1;
(statearr_76667_76719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (23))){
var inst_76590 = (state_76631[(14)]);
var inst_76596 = (inst_76590 == null);
var state_76631__$1 = state_76631;
if(cljs.core.truth_(inst_76596)){
var statearr_76668_76720 = state_76631__$1;
(statearr_76668_76720[(1)] = (26));

} else {
var statearr_76669_76721 = state_76631__$1;
(statearr_76669_76721[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (35))){
var inst_76616 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
if(cljs.core.truth_(inst_76616)){
var statearr_76670_76722 = state_76631__$1;
(statearr_76670_76722[(1)] = (36));

} else {
var statearr_76671_76723 = state_76631__$1;
(statearr_76671_76723[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (19))){
var inst_76558 = (state_76631[(7)]);
var inst_76578 = cljs.core.apply.call(null,cljs.core.hash_map,inst_76558);
var state_76631__$1 = state_76631;
var statearr_76672_76724 = state_76631__$1;
(statearr_76672_76724[(2)] = inst_76578);

(statearr_76672_76724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (11))){
var inst_76558 = (state_76631[(7)]);
var inst_76562 = (inst_76558 == null);
var inst_76563 = cljs.core.not.call(null,inst_76562);
var state_76631__$1 = state_76631;
if(inst_76563){
var statearr_76673_76725 = state_76631__$1;
(statearr_76673_76725[(1)] = (13));

} else {
var statearr_76674_76726 = state_76631__$1;
(statearr_76674_76726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (9))){
var inst_76533 = (state_76631[(8)]);
var state_76631__$1 = state_76631;
var statearr_76675_76727 = state_76631__$1;
(statearr_76675_76727[(2)] = inst_76533);

(statearr_76675_76727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (5))){
var state_76631__$1 = state_76631;
var statearr_76676_76728 = state_76631__$1;
(statearr_76676_76728[(2)] = true);

(statearr_76676_76728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (14))){
var state_76631__$1 = state_76631;
var statearr_76677_76729 = state_76631__$1;
(statearr_76677_76729[(2)] = false);

(statearr_76677_76729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (26))){
var inst_76591 = (state_76631[(11)]);
var inst_76598 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_76591);
var state_76631__$1 = state_76631;
var statearr_76678_76730 = state_76631__$1;
(statearr_76678_76730[(2)] = inst_76598);

(statearr_76678_76730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (16))){
var state_76631__$1 = state_76631;
var statearr_76679_76731 = state_76631__$1;
(statearr_76679_76731[(2)] = true);

(statearr_76679_76731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (38))){
var inst_76621 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
var statearr_76680_76732 = state_76631__$1;
(statearr_76680_76732[(2)] = inst_76621);

(statearr_76680_76732[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (30))){
var inst_76582 = (state_76631[(9)]);
var inst_76591 = (state_76631[(11)]);
var inst_76583 = (state_76631[(13)]);
var inst_76608 = cljs.core.empty_QMARK_.call(null,inst_76582);
var inst_76609 = inst_76583.call(null,inst_76591);
var inst_76610 = cljs.core.not.call(null,inst_76609);
var inst_76611 = (inst_76608) && (inst_76610);
var state_76631__$1 = state_76631;
var statearr_76681_76733 = state_76631__$1;
(statearr_76681_76733[(2)] = inst_76611);

(statearr_76681_76733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (10))){
var inst_76533 = (state_76631[(8)]);
var inst_76554 = (state_76631[(2)]);
var inst_76555 = cljs.core.get.call(null,inst_76554,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_76556 = cljs.core.get.call(null,inst_76554,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_76557 = cljs.core.get.call(null,inst_76554,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_76558 = inst_76533;
var state_76631__$1 = (function (){var statearr_76682 = state_76631;
(statearr_76682[(16)] = inst_76555);

(statearr_76682[(17)] = inst_76556);

(statearr_76682[(7)] = inst_76558);

(statearr_76682[(18)] = inst_76557);

return statearr_76682;
})();
var statearr_76683_76734 = state_76631__$1;
(statearr_76683_76734[(2)] = null);

(statearr_76683_76734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (18))){
var inst_76573 = (state_76631[(2)]);
var state_76631__$1 = state_76631;
var statearr_76684_76735 = state_76631__$1;
(statearr_76684_76735[(2)] = inst_76573);

(statearr_76684_76735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (37))){
var state_76631__$1 = state_76631;
var statearr_76685_76736 = state_76631__$1;
(statearr_76685_76736[(2)] = null);

(statearr_76685_76736[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76632 === (8))){
var inst_76533 = (state_76631[(8)]);
var inst_76551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_76533);
var state_76631__$1 = state_76631;
var statearr_76686_76737 = state_76631__$1;
(statearr_76686_76737[(2)] = inst_76551);

(statearr_76686_76737[(1)] = (10));


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
});})(c__68453__auto___76691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__68363__auto__,c__68453__auto___76691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__68364__auto__ = null;
var cljs$core$async$mix_$_state_machine__68364__auto____0 = (function (){
var statearr_76687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76687[(0)] = cljs$core$async$mix_$_state_machine__68364__auto__);

(statearr_76687[(1)] = (1));

return statearr_76687;
});
var cljs$core$async$mix_$_state_machine__68364__auto____1 = (function (state_76631){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_76631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e76688){if((e76688 instanceof Object)){
var ex__68367__auto__ = e76688;
var statearr_76689_76738 = state_76631;
(statearr_76689_76738[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76739 = state_76631;
state_76631 = G__76739;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__68364__auto__ = function(state_76631){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__68364__auto____1.call(this,state_76631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__68364__auto____0;
cljs$core$async$mix_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__68364__auto____1;
return cljs$core$async$mix_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___76691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__68455__auto__ = (function (){var statearr_76690 = f__68454__auto__.call(null);
(statearr_76690[(6)] = c__68453__auto___76691);

return statearr_76690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___76691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__76741 = arguments.length;
switch (G__76741) {
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
var G__76745 = arguments.length;
switch (G__76745) {
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
return (function (p1__76743_SHARP_){
if(cljs.core.truth_(p1__76743_SHARP_.call(null,topic))){
return p1__76743_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__76743_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__39945__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async76746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76746 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta76747){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta76747 = meta76747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_76748,meta76747__$1){
var self__ = this;
var _76748__$1 = this;
return (new cljs.core.async.t_cljs$core$async76746(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta76747__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_76748){
var self__ = this;
var _76748__$1 = this;
return self__.meta76747;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async76746.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async76746.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta76747","meta76747",1317101966,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async76746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76746";

cljs.core.async.t_cljs$core$async76746.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async76746");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async76746 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async76746(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta76747){
return (new cljs.core.async.t_cljs$core$async76746(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta76747));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async76746(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__68453__auto___76866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___76866,mults,ensure_mult,p){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___76866,mults,ensure_mult,p){
return (function (state_76820){
var state_val_76821 = (state_76820[(1)]);
if((state_val_76821 === (7))){
var inst_76816 = (state_76820[(2)]);
var state_76820__$1 = state_76820;
var statearr_76822_76867 = state_76820__$1;
(statearr_76822_76867[(2)] = inst_76816);

(statearr_76822_76867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (20))){
var state_76820__$1 = state_76820;
var statearr_76823_76868 = state_76820__$1;
(statearr_76823_76868[(2)] = null);

(statearr_76823_76868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (1))){
var state_76820__$1 = state_76820;
var statearr_76824_76869 = state_76820__$1;
(statearr_76824_76869[(2)] = null);

(statearr_76824_76869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (24))){
var inst_76799 = (state_76820[(7)]);
var inst_76808 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_76799);
var state_76820__$1 = state_76820;
var statearr_76825_76870 = state_76820__$1;
(statearr_76825_76870[(2)] = inst_76808);

(statearr_76825_76870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (4))){
var inst_76751 = (state_76820[(8)]);
var inst_76751__$1 = (state_76820[(2)]);
var inst_76752 = (inst_76751__$1 == null);
var state_76820__$1 = (function (){var statearr_76826 = state_76820;
(statearr_76826[(8)] = inst_76751__$1);

return statearr_76826;
})();
if(cljs.core.truth_(inst_76752)){
var statearr_76827_76871 = state_76820__$1;
(statearr_76827_76871[(1)] = (5));

} else {
var statearr_76828_76872 = state_76820__$1;
(statearr_76828_76872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (15))){
var inst_76793 = (state_76820[(2)]);
var state_76820__$1 = state_76820;
var statearr_76829_76873 = state_76820__$1;
(statearr_76829_76873[(2)] = inst_76793);

(statearr_76829_76873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (21))){
var inst_76813 = (state_76820[(2)]);
var state_76820__$1 = (function (){var statearr_76830 = state_76820;
(statearr_76830[(9)] = inst_76813);

return statearr_76830;
})();
var statearr_76831_76874 = state_76820__$1;
(statearr_76831_76874[(2)] = null);

(statearr_76831_76874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (13))){
var inst_76775 = (state_76820[(10)]);
var inst_76777 = cljs.core.chunked_seq_QMARK_.call(null,inst_76775);
var state_76820__$1 = state_76820;
if(inst_76777){
var statearr_76832_76875 = state_76820__$1;
(statearr_76832_76875[(1)] = (16));

} else {
var statearr_76833_76876 = state_76820__$1;
(statearr_76833_76876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (22))){
var inst_76805 = (state_76820[(2)]);
var state_76820__$1 = state_76820;
if(cljs.core.truth_(inst_76805)){
var statearr_76834_76877 = state_76820__$1;
(statearr_76834_76877[(1)] = (23));

} else {
var statearr_76835_76878 = state_76820__$1;
(statearr_76835_76878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (6))){
var inst_76799 = (state_76820[(7)]);
var inst_76751 = (state_76820[(8)]);
var inst_76801 = (state_76820[(11)]);
var inst_76799__$1 = topic_fn.call(null,inst_76751);
var inst_76800 = cljs.core.deref.call(null,mults);
var inst_76801__$1 = cljs.core.get.call(null,inst_76800,inst_76799__$1);
var state_76820__$1 = (function (){var statearr_76836 = state_76820;
(statearr_76836[(7)] = inst_76799__$1);

(statearr_76836[(11)] = inst_76801__$1);

return statearr_76836;
})();
if(cljs.core.truth_(inst_76801__$1)){
var statearr_76837_76879 = state_76820__$1;
(statearr_76837_76879[(1)] = (19));

} else {
var statearr_76838_76880 = state_76820__$1;
(statearr_76838_76880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (25))){
var inst_76810 = (state_76820[(2)]);
var state_76820__$1 = state_76820;
var statearr_76839_76881 = state_76820__$1;
(statearr_76839_76881[(2)] = inst_76810);

(statearr_76839_76881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (17))){
var inst_76775 = (state_76820[(10)]);
var inst_76784 = cljs.core.first.call(null,inst_76775);
var inst_76785 = cljs.core.async.muxch_STAR_.call(null,inst_76784);
var inst_76786 = cljs.core.async.close_BANG_.call(null,inst_76785);
var inst_76787 = cljs.core.next.call(null,inst_76775);
var inst_76761 = inst_76787;
var inst_76762 = null;
var inst_76763 = (0);
var inst_76764 = (0);
var state_76820__$1 = (function (){var statearr_76840 = state_76820;
(statearr_76840[(12)] = inst_76761);

(statearr_76840[(13)] = inst_76764);

(statearr_76840[(14)] = inst_76763);

(statearr_76840[(15)] = inst_76762);

(statearr_76840[(16)] = inst_76786);

return statearr_76840;
})();
var statearr_76841_76882 = state_76820__$1;
(statearr_76841_76882[(2)] = null);

(statearr_76841_76882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (3))){
var inst_76818 = (state_76820[(2)]);
var state_76820__$1 = state_76820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76820__$1,inst_76818);
} else {
if((state_val_76821 === (12))){
var inst_76795 = (state_76820[(2)]);
var state_76820__$1 = state_76820;
var statearr_76842_76883 = state_76820__$1;
(statearr_76842_76883[(2)] = inst_76795);

(statearr_76842_76883[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (2))){
var state_76820__$1 = state_76820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76820__$1,(4),ch);
} else {
if((state_val_76821 === (23))){
var state_76820__$1 = state_76820;
var statearr_76843_76884 = state_76820__$1;
(statearr_76843_76884[(2)] = null);

(statearr_76843_76884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (19))){
var inst_76751 = (state_76820[(8)]);
var inst_76801 = (state_76820[(11)]);
var inst_76803 = cljs.core.async.muxch_STAR_.call(null,inst_76801);
var state_76820__$1 = state_76820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76820__$1,(22),inst_76803,inst_76751);
} else {
if((state_val_76821 === (11))){
var inst_76761 = (state_76820[(12)]);
var inst_76775 = (state_76820[(10)]);
var inst_76775__$1 = cljs.core.seq.call(null,inst_76761);
var state_76820__$1 = (function (){var statearr_76844 = state_76820;
(statearr_76844[(10)] = inst_76775__$1);

return statearr_76844;
})();
if(inst_76775__$1){
var statearr_76845_76885 = state_76820__$1;
(statearr_76845_76885[(1)] = (13));

} else {
var statearr_76846_76886 = state_76820__$1;
(statearr_76846_76886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (9))){
var inst_76797 = (state_76820[(2)]);
var state_76820__$1 = state_76820;
var statearr_76847_76887 = state_76820__$1;
(statearr_76847_76887[(2)] = inst_76797);

(statearr_76847_76887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (5))){
var inst_76758 = cljs.core.deref.call(null,mults);
var inst_76759 = cljs.core.vals.call(null,inst_76758);
var inst_76760 = cljs.core.seq.call(null,inst_76759);
var inst_76761 = inst_76760;
var inst_76762 = null;
var inst_76763 = (0);
var inst_76764 = (0);
var state_76820__$1 = (function (){var statearr_76848 = state_76820;
(statearr_76848[(12)] = inst_76761);

(statearr_76848[(13)] = inst_76764);

(statearr_76848[(14)] = inst_76763);

(statearr_76848[(15)] = inst_76762);

return statearr_76848;
})();
var statearr_76849_76888 = state_76820__$1;
(statearr_76849_76888[(2)] = null);

(statearr_76849_76888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (14))){
var state_76820__$1 = state_76820;
var statearr_76853_76889 = state_76820__$1;
(statearr_76853_76889[(2)] = null);

(statearr_76853_76889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (16))){
var inst_76775 = (state_76820[(10)]);
var inst_76779 = cljs.core.chunk_first.call(null,inst_76775);
var inst_76780 = cljs.core.chunk_rest.call(null,inst_76775);
var inst_76781 = cljs.core.count.call(null,inst_76779);
var inst_76761 = inst_76780;
var inst_76762 = inst_76779;
var inst_76763 = inst_76781;
var inst_76764 = (0);
var state_76820__$1 = (function (){var statearr_76854 = state_76820;
(statearr_76854[(12)] = inst_76761);

(statearr_76854[(13)] = inst_76764);

(statearr_76854[(14)] = inst_76763);

(statearr_76854[(15)] = inst_76762);

return statearr_76854;
})();
var statearr_76855_76890 = state_76820__$1;
(statearr_76855_76890[(2)] = null);

(statearr_76855_76890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (10))){
var inst_76761 = (state_76820[(12)]);
var inst_76764 = (state_76820[(13)]);
var inst_76763 = (state_76820[(14)]);
var inst_76762 = (state_76820[(15)]);
var inst_76769 = cljs.core._nth.call(null,inst_76762,inst_76764);
var inst_76770 = cljs.core.async.muxch_STAR_.call(null,inst_76769);
var inst_76771 = cljs.core.async.close_BANG_.call(null,inst_76770);
var inst_76772 = (inst_76764 + (1));
var tmp76850 = inst_76761;
var tmp76851 = inst_76763;
var tmp76852 = inst_76762;
var inst_76761__$1 = tmp76850;
var inst_76762__$1 = tmp76852;
var inst_76763__$1 = tmp76851;
var inst_76764__$1 = inst_76772;
var state_76820__$1 = (function (){var statearr_76856 = state_76820;
(statearr_76856[(12)] = inst_76761__$1);

(statearr_76856[(13)] = inst_76764__$1);

(statearr_76856[(14)] = inst_76763__$1);

(statearr_76856[(15)] = inst_76762__$1);

(statearr_76856[(17)] = inst_76771);

return statearr_76856;
})();
var statearr_76857_76891 = state_76820__$1;
(statearr_76857_76891[(2)] = null);

(statearr_76857_76891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (18))){
var inst_76790 = (state_76820[(2)]);
var state_76820__$1 = state_76820;
var statearr_76858_76892 = state_76820__$1;
(statearr_76858_76892[(2)] = inst_76790);

(statearr_76858_76892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76821 === (8))){
var inst_76764 = (state_76820[(13)]);
var inst_76763 = (state_76820[(14)]);
var inst_76766 = (inst_76764 < inst_76763);
var inst_76767 = inst_76766;
var state_76820__$1 = state_76820;
if(cljs.core.truth_(inst_76767)){
var statearr_76859_76893 = state_76820__$1;
(statearr_76859_76893[(1)] = (10));

} else {
var statearr_76860_76894 = state_76820__$1;
(statearr_76860_76894[(1)] = (11));

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
});})(c__68453__auto___76866,mults,ensure_mult,p))
;
return ((function (switch__68363__auto__,c__68453__auto___76866,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_76861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76861[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_76861[(1)] = (1));

return statearr_76861;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_76820){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_76820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e76862){if((e76862 instanceof Object)){
var ex__68367__auto__ = e76862;
var statearr_76863_76895 = state_76820;
(statearr_76863_76895[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76896 = state_76820;
state_76820 = G__76896;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_76820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_76820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___76866,mults,ensure_mult,p))
})();
var state__68455__auto__ = (function (){var statearr_76864 = f__68454__auto__.call(null);
(statearr_76864[(6)] = c__68453__auto___76866);

return statearr_76864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___76866,mults,ensure_mult,p))
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
var G__76898 = arguments.length;
switch (G__76898) {
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
var G__76901 = arguments.length;
switch (G__76901) {
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
var G__76904 = arguments.length;
switch (G__76904) {
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
var c__68453__auto___76971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___76971,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___76971,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_76943){
var state_val_76944 = (state_76943[(1)]);
if((state_val_76944 === (7))){
var state_76943__$1 = state_76943;
var statearr_76945_76972 = state_76943__$1;
(statearr_76945_76972[(2)] = null);

(statearr_76945_76972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (1))){
var state_76943__$1 = state_76943;
var statearr_76946_76973 = state_76943__$1;
(statearr_76946_76973[(2)] = null);

(statearr_76946_76973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (4))){
var inst_76907 = (state_76943[(7)]);
var inst_76909 = (inst_76907 < cnt);
var state_76943__$1 = state_76943;
if(cljs.core.truth_(inst_76909)){
var statearr_76947_76974 = state_76943__$1;
(statearr_76947_76974[(1)] = (6));

} else {
var statearr_76948_76975 = state_76943__$1;
(statearr_76948_76975[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (15))){
var inst_76939 = (state_76943[(2)]);
var state_76943__$1 = state_76943;
var statearr_76949_76976 = state_76943__$1;
(statearr_76949_76976[(2)] = inst_76939);

(statearr_76949_76976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (13))){
var inst_76932 = cljs.core.async.close_BANG_.call(null,out);
var state_76943__$1 = state_76943;
var statearr_76950_76977 = state_76943__$1;
(statearr_76950_76977[(2)] = inst_76932);

(statearr_76950_76977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (6))){
var state_76943__$1 = state_76943;
var statearr_76951_76978 = state_76943__$1;
(statearr_76951_76978[(2)] = null);

(statearr_76951_76978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (3))){
var inst_76941 = (state_76943[(2)]);
var state_76943__$1 = state_76943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76943__$1,inst_76941);
} else {
if((state_val_76944 === (12))){
var inst_76929 = (state_76943[(8)]);
var inst_76929__$1 = (state_76943[(2)]);
var inst_76930 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_76929__$1);
var state_76943__$1 = (function (){var statearr_76952 = state_76943;
(statearr_76952[(8)] = inst_76929__$1);

return statearr_76952;
})();
if(cljs.core.truth_(inst_76930)){
var statearr_76953_76979 = state_76943__$1;
(statearr_76953_76979[(1)] = (13));

} else {
var statearr_76954_76980 = state_76943__$1;
(statearr_76954_76980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (2))){
var inst_76906 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_76907 = (0);
var state_76943__$1 = (function (){var statearr_76955 = state_76943;
(statearr_76955[(7)] = inst_76907);

(statearr_76955[(9)] = inst_76906);

return statearr_76955;
})();
var statearr_76956_76981 = state_76943__$1;
(statearr_76956_76981[(2)] = null);

(statearr_76956_76981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (11))){
var inst_76907 = (state_76943[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76943,(10),Object,null,(9));
var inst_76916 = chs__$1.call(null,inst_76907);
var inst_76917 = done.call(null,inst_76907);
var inst_76918 = cljs.core.async.take_BANG_.call(null,inst_76916,inst_76917);
var state_76943__$1 = state_76943;
var statearr_76957_76982 = state_76943__$1;
(statearr_76957_76982[(2)] = inst_76918);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76943__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (9))){
var inst_76907 = (state_76943[(7)]);
var inst_76920 = (state_76943[(2)]);
var inst_76921 = (inst_76907 + (1));
var inst_76907__$1 = inst_76921;
var state_76943__$1 = (function (){var statearr_76958 = state_76943;
(statearr_76958[(10)] = inst_76920);

(statearr_76958[(7)] = inst_76907__$1);

return statearr_76958;
})();
var statearr_76959_76983 = state_76943__$1;
(statearr_76959_76983[(2)] = null);

(statearr_76959_76983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (5))){
var inst_76927 = (state_76943[(2)]);
var state_76943__$1 = (function (){var statearr_76960 = state_76943;
(statearr_76960[(11)] = inst_76927);

return statearr_76960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76943__$1,(12),dchan);
} else {
if((state_val_76944 === (14))){
var inst_76929 = (state_76943[(8)]);
var inst_76934 = cljs.core.apply.call(null,f,inst_76929);
var state_76943__$1 = state_76943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76943__$1,(16),out,inst_76934);
} else {
if((state_val_76944 === (16))){
var inst_76936 = (state_76943[(2)]);
var state_76943__$1 = (function (){var statearr_76961 = state_76943;
(statearr_76961[(12)] = inst_76936);

return statearr_76961;
})();
var statearr_76962_76984 = state_76943__$1;
(statearr_76962_76984[(2)] = null);

(statearr_76962_76984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (10))){
var inst_76911 = (state_76943[(2)]);
var inst_76912 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_76943__$1 = (function (){var statearr_76963 = state_76943;
(statearr_76963[(13)] = inst_76911);

return statearr_76963;
})();
var statearr_76964_76985 = state_76943__$1;
(statearr_76964_76985[(2)] = inst_76912);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76943__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76944 === (8))){
var inst_76925 = (state_76943[(2)]);
var state_76943__$1 = state_76943;
var statearr_76965_76986 = state_76943__$1;
(statearr_76965_76986[(2)] = inst_76925);

(statearr_76965_76986[(1)] = (5));


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
});})(c__68453__auto___76971,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__68363__auto__,c__68453__auto___76971,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_76966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76966[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_76966[(1)] = (1));

return statearr_76966;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_76943){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_76943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e76967){if((e76967 instanceof Object)){
var ex__68367__auto__ = e76967;
var statearr_76968_76987 = state_76943;
(statearr_76968_76987[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76988 = state_76943;
state_76943 = G__76988;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_76943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_76943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___76971,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__68455__auto__ = (function (){var statearr_76969 = f__68454__auto__.call(null);
(statearr_76969[(6)] = c__68453__auto___76971);

return statearr_76969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___76971,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__76991 = arguments.length;
switch (G__76991) {
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
var c__68453__auto___77045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___77045,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___77045,out){
return (function (state_77023){
var state_val_77024 = (state_77023[(1)]);
if((state_val_77024 === (7))){
var inst_77002 = (state_77023[(7)]);
var inst_77003 = (state_77023[(8)]);
var inst_77002__$1 = (state_77023[(2)]);
var inst_77003__$1 = cljs.core.nth.call(null,inst_77002__$1,(0),null);
var inst_77004 = cljs.core.nth.call(null,inst_77002__$1,(1),null);
var inst_77005 = (inst_77003__$1 == null);
var state_77023__$1 = (function (){var statearr_77025 = state_77023;
(statearr_77025[(7)] = inst_77002__$1);

(statearr_77025[(9)] = inst_77004);

(statearr_77025[(8)] = inst_77003__$1);

return statearr_77025;
})();
if(cljs.core.truth_(inst_77005)){
var statearr_77026_77046 = state_77023__$1;
(statearr_77026_77046[(1)] = (8));

} else {
var statearr_77027_77047 = state_77023__$1;
(statearr_77027_77047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77024 === (1))){
var inst_76992 = cljs.core.vec.call(null,chs);
var inst_76993 = inst_76992;
var state_77023__$1 = (function (){var statearr_77028 = state_77023;
(statearr_77028[(10)] = inst_76993);

return statearr_77028;
})();
var statearr_77029_77048 = state_77023__$1;
(statearr_77029_77048[(2)] = null);

(statearr_77029_77048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77024 === (4))){
var inst_76993 = (state_77023[(10)]);
var state_77023__$1 = state_77023;
return cljs.core.async.ioc_alts_BANG_.call(null,state_77023__$1,(7),inst_76993);
} else {
if((state_val_77024 === (6))){
var inst_77019 = (state_77023[(2)]);
var state_77023__$1 = state_77023;
var statearr_77030_77049 = state_77023__$1;
(statearr_77030_77049[(2)] = inst_77019);

(statearr_77030_77049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77024 === (3))){
var inst_77021 = (state_77023[(2)]);
var state_77023__$1 = state_77023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77023__$1,inst_77021);
} else {
if((state_val_77024 === (2))){
var inst_76993 = (state_77023[(10)]);
var inst_76995 = cljs.core.count.call(null,inst_76993);
var inst_76996 = (inst_76995 > (0));
var state_77023__$1 = state_77023;
if(cljs.core.truth_(inst_76996)){
var statearr_77032_77050 = state_77023__$1;
(statearr_77032_77050[(1)] = (4));

} else {
var statearr_77033_77051 = state_77023__$1;
(statearr_77033_77051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77024 === (11))){
var inst_76993 = (state_77023[(10)]);
var inst_77012 = (state_77023[(2)]);
var tmp77031 = inst_76993;
var inst_76993__$1 = tmp77031;
var state_77023__$1 = (function (){var statearr_77034 = state_77023;
(statearr_77034[(10)] = inst_76993__$1);

(statearr_77034[(11)] = inst_77012);

return statearr_77034;
})();
var statearr_77035_77052 = state_77023__$1;
(statearr_77035_77052[(2)] = null);

(statearr_77035_77052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77024 === (9))){
var inst_77003 = (state_77023[(8)]);
var state_77023__$1 = state_77023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77023__$1,(11),out,inst_77003);
} else {
if((state_val_77024 === (5))){
var inst_77017 = cljs.core.async.close_BANG_.call(null,out);
var state_77023__$1 = state_77023;
var statearr_77036_77053 = state_77023__$1;
(statearr_77036_77053[(2)] = inst_77017);

(statearr_77036_77053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77024 === (10))){
var inst_77015 = (state_77023[(2)]);
var state_77023__$1 = state_77023;
var statearr_77037_77054 = state_77023__$1;
(statearr_77037_77054[(2)] = inst_77015);

(statearr_77037_77054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77024 === (8))){
var inst_76993 = (state_77023[(10)]);
var inst_77002 = (state_77023[(7)]);
var inst_77004 = (state_77023[(9)]);
var inst_77003 = (state_77023[(8)]);
var inst_77007 = (function (){var cs = inst_76993;
var vec__76998 = inst_77002;
var v = inst_77003;
var c = inst_77004;
return ((function (cs,vec__76998,v,c,inst_76993,inst_77002,inst_77004,inst_77003,state_val_77024,c__68453__auto___77045,out){
return (function (p1__76989_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__76989_SHARP_);
});
;})(cs,vec__76998,v,c,inst_76993,inst_77002,inst_77004,inst_77003,state_val_77024,c__68453__auto___77045,out))
})();
var inst_77008 = cljs.core.filterv.call(null,inst_77007,inst_76993);
var inst_76993__$1 = inst_77008;
var state_77023__$1 = (function (){var statearr_77038 = state_77023;
(statearr_77038[(10)] = inst_76993__$1);

return statearr_77038;
})();
var statearr_77039_77055 = state_77023__$1;
(statearr_77039_77055[(2)] = null);

(statearr_77039_77055[(1)] = (2));


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
});})(c__68453__auto___77045,out))
;
return ((function (switch__68363__auto__,c__68453__auto___77045,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_77040 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77040[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_77040[(1)] = (1));

return statearr_77040;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_77023){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_77023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e77041){if((e77041 instanceof Object)){
var ex__68367__auto__ = e77041;
var statearr_77042_77056 = state_77023;
(statearr_77042_77056[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77057 = state_77023;
state_77023 = G__77057;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_77023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_77023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___77045,out))
})();
var state__68455__auto__ = (function (){var statearr_77043 = f__68454__auto__.call(null);
(statearr_77043[(6)] = c__68453__auto___77045);

return statearr_77043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___77045,out))
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
var G__77059 = arguments.length;
switch (G__77059) {
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
var c__68453__auto___77104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___77104,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___77104,out){
return (function (state_77083){
var state_val_77084 = (state_77083[(1)]);
if((state_val_77084 === (7))){
var inst_77065 = (state_77083[(7)]);
var inst_77065__$1 = (state_77083[(2)]);
var inst_77066 = (inst_77065__$1 == null);
var inst_77067 = cljs.core.not.call(null,inst_77066);
var state_77083__$1 = (function (){var statearr_77085 = state_77083;
(statearr_77085[(7)] = inst_77065__$1);

return statearr_77085;
})();
if(inst_77067){
var statearr_77086_77105 = state_77083__$1;
(statearr_77086_77105[(1)] = (8));

} else {
var statearr_77087_77106 = state_77083__$1;
(statearr_77087_77106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77084 === (1))){
var inst_77060 = (0);
var state_77083__$1 = (function (){var statearr_77088 = state_77083;
(statearr_77088[(8)] = inst_77060);

return statearr_77088;
})();
var statearr_77089_77107 = state_77083__$1;
(statearr_77089_77107[(2)] = null);

(statearr_77089_77107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77084 === (4))){
var state_77083__$1 = state_77083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77083__$1,(7),ch);
} else {
if((state_val_77084 === (6))){
var inst_77078 = (state_77083[(2)]);
var state_77083__$1 = state_77083;
var statearr_77090_77108 = state_77083__$1;
(statearr_77090_77108[(2)] = inst_77078);

(statearr_77090_77108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77084 === (3))){
var inst_77080 = (state_77083[(2)]);
var inst_77081 = cljs.core.async.close_BANG_.call(null,out);
var state_77083__$1 = (function (){var statearr_77091 = state_77083;
(statearr_77091[(9)] = inst_77080);

return statearr_77091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77083__$1,inst_77081);
} else {
if((state_val_77084 === (2))){
var inst_77060 = (state_77083[(8)]);
var inst_77062 = (inst_77060 < n);
var state_77083__$1 = state_77083;
if(cljs.core.truth_(inst_77062)){
var statearr_77092_77109 = state_77083__$1;
(statearr_77092_77109[(1)] = (4));

} else {
var statearr_77093_77110 = state_77083__$1;
(statearr_77093_77110[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77084 === (11))){
var inst_77060 = (state_77083[(8)]);
var inst_77070 = (state_77083[(2)]);
var inst_77071 = (inst_77060 + (1));
var inst_77060__$1 = inst_77071;
var state_77083__$1 = (function (){var statearr_77094 = state_77083;
(statearr_77094[(8)] = inst_77060__$1);

(statearr_77094[(10)] = inst_77070);

return statearr_77094;
})();
var statearr_77095_77111 = state_77083__$1;
(statearr_77095_77111[(2)] = null);

(statearr_77095_77111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77084 === (9))){
var state_77083__$1 = state_77083;
var statearr_77096_77112 = state_77083__$1;
(statearr_77096_77112[(2)] = null);

(statearr_77096_77112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77084 === (5))){
var state_77083__$1 = state_77083;
var statearr_77097_77113 = state_77083__$1;
(statearr_77097_77113[(2)] = null);

(statearr_77097_77113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77084 === (10))){
var inst_77075 = (state_77083[(2)]);
var state_77083__$1 = state_77083;
var statearr_77098_77114 = state_77083__$1;
(statearr_77098_77114[(2)] = inst_77075);

(statearr_77098_77114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77084 === (8))){
var inst_77065 = (state_77083[(7)]);
var state_77083__$1 = state_77083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77083__$1,(11),out,inst_77065);
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
});})(c__68453__auto___77104,out))
;
return ((function (switch__68363__auto__,c__68453__auto___77104,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_77099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77099[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_77099[(1)] = (1));

return statearr_77099;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_77083){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_77083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e77100){if((e77100 instanceof Object)){
var ex__68367__auto__ = e77100;
var statearr_77101_77115 = state_77083;
(statearr_77101_77115[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77116 = state_77083;
state_77083 = G__77116;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_77083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_77083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___77104,out))
})();
var state__68455__auto__ = (function (){var statearr_77102 = f__68454__auto__.call(null);
(statearr_77102[(6)] = c__68453__auto___77104);

return statearr_77102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___77104,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async77118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77118 = (function (f,ch,meta77119){
this.f = f;
this.ch = ch;
this.meta77119 = meta77119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77120,meta77119__$1){
var self__ = this;
var _77120__$1 = this;
return (new cljs.core.async.t_cljs$core$async77118(self__.f,self__.ch,meta77119__$1));
});

cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77120){
var self__ = this;
var _77120__$1 = this;
return self__.meta77119;
});

cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async77121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77121 = (function (f,ch,meta77119,_,fn1,meta77122){
this.f = f;
this.ch = ch;
this.meta77119 = meta77119;
this._ = _;
this.fn1 = fn1;
this.meta77122 = meta77122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async77121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_77123,meta77122__$1){
var self__ = this;
var _77123__$1 = this;
return (new cljs.core.async.t_cljs$core$async77121(self__.f,self__.ch,self__.meta77119,self__._,self__.fn1,meta77122__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async77121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_77123){
var self__ = this;
var _77123__$1 = this;
return self__.meta77122;
});})(___$1))
;

cljs.core.async.t_cljs$core$async77121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async77121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async77121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__77117_SHARP_){
return f1.call(null,(((p1__77117_SHARP_ == null))?null:self__.f.call(null,p1__77117_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async77121.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta77119","meta77119",-1535512611,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async77118","cljs.core.async/t_cljs$core$async77118",1944197164,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta77122","meta77122",627858706,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async77121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async77121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77121";

cljs.core.async.t_cljs$core$async77121.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async77121");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async77121 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async77121(f__$1,ch__$1,meta77119__$1,___$2,fn1__$1,meta77122){
return (new cljs.core.async.t_cljs$core$async77121(f__$1,ch__$1,meta77119__$1,___$2,fn1__$1,meta77122));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async77121(self__.f,self__.ch,self__.meta77119,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async77118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta77119","meta77119",-1535512611,null)], null);
});

cljs.core.async.t_cljs$core$async77118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async77118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77118";

cljs.core.async.t_cljs$core$async77118.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async77118");
});

cljs.core.async.__GT_t_cljs$core$async77118 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async77118(f__$1,ch__$1,meta77119){
return (new cljs.core.async.t_cljs$core$async77118(f__$1,ch__$1,meta77119));
});

}

return (new cljs.core.async.t_cljs$core$async77118(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async77124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77124 = (function (f,ch,meta77125){
this.f = f;
this.ch = ch;
this.meta77125 = meta77125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async77124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77126,meta77125__$1){
var self__ = this;
var _77126__$1 = this;
return (new cljs.core.async.t_cljs$core$async77124(self__.f,self__.ch,meta77125__$1));
});

cljs.core.async.t_cljs$core$async77124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77126){
var self__ = this;
var _77126__$1 = this;
return self__.meta77125;
});

cljs.core.async.t_cljs$core$async77124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async77124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async77124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async77124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta77125","meta77125",-1762655957,null)], null);
});

cljs.core.async.t_cljs$core$async77124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async77124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77124";

cljs.core.async.t_cljs$core$async77124.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async77124");
});

cljs.core.async.__GT_t_cljs$core$async77124 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async77124(f__$1,ch__$1,meta77125){
return (new cljs.core.async.t_cljs$core$async77124(f__$1,ch__$1,meta77125));
});

}

return (new cljs.core.async.t_cljs$core$async77124(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async77127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77127 = (function (p,ch,meta77128){
this.p = p;
this.ch = ch;
this.meta77128 = meta77128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77129,meta77128__$1){
var self__ = this;
var _77129__$1 = this;
return (new cljs.core.async.t_cljs$core$async77127(self__.p,self__.ch,meta77128__$1));
});

cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77129){
var self__ = this;
var _77129__$1 = this;
return self__.meta77128;
});

cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async77127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async77127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta77128","meta77128",-335977420,null)], null);
});

cljs.core.async.t_cljs$core$async77127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async77127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77127";

cljs.core.async.t_cljs$core$async77127.cljs$lang$ctorPrWriter = (function (this__41409__auto__,writer__41410__auto__,opt__41411__auto__){
return cljs.core._write.call(null,writer__41410__auto__,"cljs.core.async/t_cljs$core$async77127");
});

cljs.core.async.__GT_t_cljs$core$async77127 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async77127(p__$1,ch__$1,meta77128){
return (new cljs.core.async.t_cljs$core$async77127(p__$1,ch__$1,meta77128));
});

}

return (new cljs.core.async.t_cljs$core$async77127(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__77131 = arguments.length;
switch (G__77131) {
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
var c__68453__auto___77171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___77171,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___77171,out){
return (function (state_77152){
var state_val_77153 = (state_77152[(1)]);
if((state_val_77153 === (7))){
var inst_77148 = (state_77152[(2)]);
var state_77152__$1 = state_77152;
var statearr_77154_77172 = state_77152__$1;
(statearr_77154_77172[(2)] = inst_77148);

(statearr_77154_77172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77153 === (1))){
var state_77152__$1 = state_77152;
var statearr_77155_77173 = state_77152__$1;
(statearr_77155_77173[(2)] = null);

(statearr_77155_77173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77153 === (4))){
var inst_77134 = (state_77152[(7)]);
var inst_77134__$1 = (state_77152[(2)]);
var inst_77135 = (inst_77134__$1 == null);
var state_77152__$1 = (function (){var statearr_77156 = state_77152;
(statearr_77156[(7)] = inst_77134__$1);

return statearr_77156;
})();
if(cljs.core.truth_(inst_77135)){
var statearr_77157_77174 = state_77152__$1;
(statearr_77157_77174[(1)] = (5));

} else {
var statearr_77158_77175 = state_77152__$1;
(statearr_77158_77175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77153 === (6))){
var inst_77134 = (state_77152[(7)]);
var inst_77139 = p.call(null,inst_77134);
var state_77152__$1 = state_77152;
if(cljs.core.truth_(inst_77139)){
var statearr_77159_77176 = state_77152__$1;
(statearr_77159_77176[(1)] = (8));

} else {
var statearr_77160_77177 = state_77152__$1;
(statearr_77160_77177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77153 === (3))){
var inst_77150 = (state_77152[(2)]);
var state_77152__$1 = state_77152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77152__$1,inst_77150);
} else {
if((state_val_77153 === (2))){
var state_77152__$1 = state_77152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77152__$1,(4),ch);
} else {
if((state_val_77153 === (11))){
var inst_77142 = (state_77152[(2)]);
var state_77152__$1 = state_77152;
var statearr_77161_77178 = state_77152__$1;
(statearr_77161_77178[(2)] = inst_77142);

(statearr_77161_77178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77153 === (9))){
var state_77152__$1 = state_77152;
var statearr_77162_77179 = state_77152__$1;
(statearr_77162_77179[(2)] = null);

(statearr_77162_77179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77153 === (5))){
var inst_77137 = cljs.core.async.close_BANG_.call(null,out);
var state_77152__$1 = state_77152;
var statearr_77163_77180 = state_77152__$1;
(statearr_77163_77180[(2)] = inst_77137);

(statearr_77163_77180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77153 === (10))){
var inst_77145 = (state_77152[(2)]);
var state_77152__$1 = (function (){var statearr_77164 = state_77152;
(statearr_77164[(8)] = inst_77145);

return statearr_77164;
})();
var statearr_77165_77181 = state_77152__$1;
(statearr_77165_77181[(2)] = null);

(statearr_77165_77181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77153 === (8))){
var inst_77134 = (state_77152[(7)]);
var state_77152__$1 = state_77152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77152__$1,(11),out,inst_77134);
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
});})(c__68453__auto___77171,out))
;
return ((function (switch__68363__auto__,c__68453__auto___77171,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_77166 = [null,null,null,null,null,null,null,null,null];
(statearr_77166[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_77166[(1)] = (1));

return statearr_77166;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_77152){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_77152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e77167){if((e77167 instanceof Object)){
var ex__68367__auto__ = e77167;
var statearr_77168_77182 = state_77152;
(statearr_77168_77182[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77183 = state_77152;
state_77152 = G__77183;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_77152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_77152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___77171,out))
})();
var state__68455__auto__ = (function (){var statearr_77169 = f__68454__auto__.call(null);
(statearr_77169[(6)] = c__68453__auto___77171);

return statearr_77169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___77171,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__77185 = arguments.length;
switch (G__77185) {
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
return (function (state_77248){
var state_val_77249 = (state_77248[(1)]);
if((state_val_77249 === (7))){
var inst_77244 = (state_77248[(2)]);
var state_77248__$1 = state_77248;
var statearr_77250_77288 = state_77248__$1;
(statearr_77250_77288[(2)] = inst_77244);

(statearr_77250_77288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (20))){
var inst_77214 = (state_77248[(7)]);
var inst_77225 = (state_77248[(2)]);
var inst_77226 = cljs.core.next.call(null,inst_77214);
var inst_77200 = inst_77226;
var inst_77201 = null;
var inst_77202 = (0);
var inst_77203 = (0);
var state_77248__$1 = (function (){var statearr_77251 = state_77248;
(statearr_77251[(8)] = inst_77203);

(statearr_77251[(9)] = inst_77201);

(statearr_77251[(10)] = inst_77200);

(statearr_77251[(11)] = inst_77202);

(statearr_77251[(12)] = inst_77225);

return statearr_77251;
})();
var statearr_77252_77289 = state_77248__$1;
(statearr_77252_77289[(2)] = null);

(statearr_77252_77289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (1))){
var state_77248__$1 = state_77248;
var statearr_77253_77290 = state_77248__$1;
(statearr_77253_77290[(2)] = null);

(statearr_77253_77290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (4))){
var inst_77189 = (state_77248[(13)]);
var inst_77189__$1 = (state_77248[(2)]);
var inst_77190 = (inst_77189__$1 == null);
var state_77248__$1 = (function (){var statearr_77254 = state_77248;
(statearr_77254[(13)] = inst_77189__$1);

return statearr_77254;
})();
if(cljs.core.truth_(inst_77190)){
var statearr_77255_77291 = state_77248__$1;
(statearr_77255_77291[(1)] = (5));

} else {
var statearr_77256_77292 = state_77248__$1;
(statearr_77256_77292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (15))){
var state_77248__$1 = state_77248;
var statearr_77260_77293 = state_77248__$1;
(statearr_77260_77293[(2)] = null);

(statearr_77260_77293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (21))){
var state_77248__$1 = state_77248;
var statearr_77261_77294 = state_77248__$1;
(statearr_77261_77294[(2)] = null);

(statearr_77261_77294[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (13))){
var inst_77203 = (state_77248[(8)]);
var inst_77201 = (state_77248[(9)]);
var inst_77200 = (state_77248[(10)]);
var inst_77202 = (state_77248[(11)]);
var inst_77210 = (state_77248[(2)]);
var inst_77211 = (inst_77203 + (1));
var tmp77257 = inst_77201;
var tmp77258 = inst_77200;
var tmp77259 = inst_77202;
var inst_77200__$1 = tmp77258;
var inst_77201__$1 = tmp77257;
var inst_77202__$1 = tmp77259;
var inst_77203__$1 = inst_77211;
var state_77248__$1 = (function (){var statearr_77262 = state_77248;
(statearr_77262[(8)] = inst_77203__$1);

(statearr_77262[(9)] = inst_77201__$1);

(statearr_77262[(10)] = inst_77200__$1);

(statearr_77262[(11)] = inst_77202__$1);

(statearr_77262[(14)] = inst_77210);

return statearr_77262;
})();
var statearr_77263_77295 = state_77248__$1;
(statearr_77263_77295[(2)] = null);

(statearr_77263_77295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (22))){
var state_77248__$1 = state_77248;
var statearr_77264_77296 = state_77248__$1;
(statearr_77264_77296[(2)] = null);

(statearr_77264_77296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (6))){
var inst_77189 = (state_77248[(13)]);
var inst_77198 = f.call(null,inst_77189);
var inst_77199 = cljs.core.seq.call(null,inst_77198);
var inst_77200 = inst_77199;
var inst_77201 = null;
var inst_77202 = (0);
var inst_77203 = (0);
var state_77248__$1 = (function (){var statearr_77265 = state_77248;
(statearr_77265[(8)] = inst_77203);

(statearr_77265[(9)] = inst_77201);

(statearr_77265[(10)] = inst_77200);

(statearr_77265[(11)] = inst_77202);

return statearr_77265;
})();
var statearr_77266_77297 = state_77248__$1;
(statearr_77266_77297[(2)] = null);

(statearr_77266_77297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (17))){
var inst_77214 = (state_77248[(7)]);
var inst_77218 = cljs.core.chunk_first.call(null,inst_77214);
var inst_77219 = cljs.core.chunk_rest.call(null,inst_77214);
var inst_77220 = cljs.core.count.call(null,inst_77218);
var inst_77200 = inst_77219;
var inst_77201 = inst_77218;
var inst_77202 = inst_77220;
var inst_77203 = (0);
var state_77248__$1 = (function (){var statearr_77267 = state_77248;
(statearr_77267[(8)] = inst_77203);

(statearr_77267[(9)] = inst_77201);

(statearr_77267[(10)] = inst_77200);

(statearr_77267[(11)] = inst_77202);

return statearr_77267;
})();
var statearr_77268_77298 = state_77248__$1;
(statearr_77268_77298[(2)] = null);

(statearr_77268_77298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (3))){
var inst_77246 = (state_77248[(2)]);
var state_77248__$1 = state_77248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77248__$1,inst_77246);
} else {
if((state_val_77249 === (12))){
var inst_77234 = (state_77248[(2)]);
var state_77248__$1 = state_77248;
var statearr_77269_77299 = state_77248__$1;
(statearr_77269_77299[(2)] = inst_77234);

(statearr_77269_77299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (2))){
var state_77248__$1 = state_77248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77248__$1,(4),in$);
} else {
if((state_val_77249 === (23))){
var inst_77242 = (state_77248[(2)]);
var state_77248__$1 = state_77248;
var statearr_77270_77300 = state_77248__$1;
(statearr_77270_77300[(2)] = inst_77242);

(statearr_77270_77300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (19))){
var inst_77229 = (state_77248[(2)]);
var state_77248__$1 = state_77248;
var statearr_77271_77301 = state_77248__$1;
(statearr_77271_77301[(2)] = inst_77229);

(statearr_77271_77301[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (11))){
var inst_77200 = (state_77248[(10)]);
var inst_77214 = (state_77248[(7)]);
var inst_77214__$1 = cljs.core.seq.call(null,inst_77200);
var state_77248__$1 = (function (){var statearr_77272 = state_77248;
(statearr_77272[(7)] = inst_77214__$1);

return statearr_77272;
})();
if(inst_77214__$1){
var statearr_77273_77302 = state_77248__$1;
(statearr_77273_77302[(1)] = (14));

} else {
var statearr_77274_77303 = state_77248__$1;
(statearr_77274_77303[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (9))){
var inst_77236 = (state_77248[(2)]);
var inst_77237 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_77248__$1 = (function (){var statearr_77275 = state_77248;
(statearr_77275[(15)] = inst_77236);

return statearr_77275;
})();
if(cljs.core.truth_(inst_77237)){
var statearr_77276_77304 = state_77248__$1;
(statearr_77276_77304[(1)] = (21));

} else {
var statearr_77277_77305 = state_77248__$1;
(statearr_77277_77305[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (5))){
var inst_77192 = cljs.core.async.close_BANG_.call(null,out);
var state_77248__$1 = state_77248;
var statearr_77278_77306 = state_77248__$1;
(statearr_77278_77306[(2)] = inst_77192);

(statearr_77278_77306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (14))){
var inst_77214 = (state_77248[(7)]);
var inst_77216 = cljs.core.chunked_seq_QMARK_.call(null,inst_77214);
var state_77248__$1 = state_77248;
if(inst_77216){
var statearr_77279_77307 = state_77248__$1;
(statearr_77279_77307[(1)] = (17));

} else {
var statearr_77280_77308 = state_77248__$1;
(statearr_77280_77308[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (16))){
var inst_77232 = (state_77248[(2)]);
var state_77248__$1 = state_77248;
var statearr_77281_77309 = state_77248__$1;
(statearr_77281_77309[(2)] = inst_77232);

(statearr_77281_77309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77249 === (10))){
var inst_77203 = (state_77248[(8)]);
var inst_77201 = (state_77248[(9)]);
var inst_77208 = cljs.core._nth.call(null,inst_77201,inst_77203);
var state_77248__$1 = state_77248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77248__$1,(13),out,inst_77208);
} else {
if((state_val_77249 === (18))){
var inst_77214 = (state_77248[(7)]);
var inst_77223 = cljs.core.first.call(null,inst_77214);
var state_77248__$1 = state_77248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77248__$1,(20),out,inst_77223);
} else {
if((state_val_77249 === (8))){
var inst_77203 = (state_77248[(8)]);
var inst_77202 = (state_77248[(11)]);
var inst_77205 = (inst_77203 < inst_77202);
var inst_77206 = inst_77205;
var state_77248__$1 = state_77248;
if(cljs.core.truth_(inst_77206)){
var statearr_77282_77310 = state_77248__$1;
(statearr_77282_77310[(1)] = (10));

} else {
var statearr_77283_77311 = state_77248__$1;
(statearr_77283_77311[(1)] = (11));

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
var statearr_77284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77284[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__);

(statearr_77284[(1)] = (1));

return statearr_77284;
});
var cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____1 = (function (state_77248){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_77248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e77285){if((e77285 instanceof Object)){
var ex__68367__auto__ = e77285;
var statearr_77286_77312 = state_77248;
(statearr_77286_77312[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77313 = state_77248;
state_77248 = G__77313;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__ = function(state_77248){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____1.call(this,state_77248);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__68364__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_77287 = f__68454__auto__.call(null);
(statearr_77287[(6)] = c__68453__auto__);

return statearr_77287;
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
var G__77315 = arguments.length;
switch (G__77315) {
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
var G__77318 = arguments.length;
switch (G__77318) {
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
var G__77321 = arguments.length;
switch (G__77321) {
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
var c__68453__auto___77368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___77368,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___77368,out){
return (function (state_77345){
var state_val_77346 = (state_77345[(1)]);
if((state_val_77346 === (7))){
var inst_77340 = (state_77345[(2)]);
var state_77345__$1 = state_77345;
var statearr_77347_77369 = state_77345__$1;
(statearr_77347_77369[(2)] = inst_77340);

(statearr_77347_77369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77346 === (1))){
var inst_77322 = null;
var state_77345__$1 = (function (){var statearr_77348 = state_77345;
(statearr_77348[(7)] = inst_77322);

return statearr_77348;
})();
var statearr_77349_77370 = state_77345__$1;
(statearr_77349_77370[(2)] = null);

(statearr_77349_77370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77346 === (4))){
var inst_77325 = (state_77345[(8)]);
var inst_77325__$1 = (state_77345[(2)]);
var inst_77326 = (inst_77325__$1 == null);
var inst_77327 = cljs.core.not.call(null,inst_77326);
var state_77345__$1 = (function (){var statearr_77350 = state_77345;
(statearr_77350[(8)] = inst_77325__$1);

return statearr_77350;
})();
if(inst_77327){
var statearr_77351_77371 = state_77345__$1;
(statearr_77351_77371[(1)] = (5));

} else {
var statearr_77352_77372 = state_77345__$1;
(statearr_77352_77372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77346 === (6))){
var state_77345__$1 = state_77345;
var statearr_77353_77373 = state_77345__$1;
(statearr_77353_77373[(2)] = null);

(statearr_77353_77373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77346 === (3))){
var inst_77342 = (state_77345[(2)]);
var inst_77343 = cljs.core.async.close_BANG_.call(null,out);
var state_77345__$1 = (function (){var statearr_77354 = state_77345;
(statearr_77354[(9)] = inst_77342);

return statearr_77354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77345__$1,inst_77343);
} else {
if((state_val_77346 === (2))){
var state_77345__$1 = state_77345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77345__$1,(4),ch);
} else {
if((state_val_77346 === (11))){
var inst_77325 = (state_77345[(8)]);
var inst_77334 = (state_77345[(2)]);
var inst_77322 = inst_77325;
var state_77345__$1 = (function (){var statearr_77355 = state_77345;
(statearr_77355[(10)] = inst_77334);

(statearr_77355[(7)] = inst_77322);

return statearr_77355;
})();
var statearr_77356_77374 = state_77345__$1;
(statearr_77356_77374[(2)] = null);

(statearr_77356_77374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77346 === (9))){
var inst_77325 = (state_77345[(8)]);
var state_77345__$1 = state_77345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77345__$1,(11),out,inst_77325);
} else {
if((state_val_77346 === (5))){
var inst_77322 = (state_77345[(7)]);
var inst_77325 = (state_77345[(8)]);
var inst_77329 = cljs.core._EQ_.call(null,inst_77325,inst_77322);
var state_77345__$1 = state_77345;
if(inst_77329){
var statearr_77358_77375 = state_77345__$1;
(statearr_77358_77375[(1)] = (8));

} else {
var statearr_77359_77376 = state_77345__$1;
(statearr_77359_77376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77346 === (10))){
var inst_77337 = (state_77345[(2)]);
var state_77345__$1 = state_77345;
var statearr_77360_77377 = state_77345__$1;
(statearr_77360_77377[(2)] = inst_77337);

(statearr_77360_77377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77346 === (8))){
var inst_77322 = (state_77345[(7)]);
var tmp77357 = inst_77322;
var inst_77322__$1 = tmp77357;
var state_77345__$1 = (function (){var statearr_77361 = state_77345;
(statearr_77361[(7)] = inst_77322__$1);

return statearr_77361;
})();
var statearr_77362_77378 = state_77345__$1;
(statearr_77362_77378[(2)] = null);

(statearr_77362_77378[(1)] = (2));


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
});})(c__68453__auto___77368,out))
;
return ((function (switch__68363__auto__,c__68453__auto___77368,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_77363 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77363[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_77363[(1)] = (1));

return statearr_77363;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_77345){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_77345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e77364){if((e77364 instanceof Object)){
var ex__68367__auto__ = e77364;
var statearr_77365_77379 = state_77345;
(statearr_77365_77379[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77380 = state_77345;
state_77345 = G__77380;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_77345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_77345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___77368,out))
})();
var state__68455__auto__ = (function (){var statearr_77366 = f__68454__auto__.call(null);
(statearr_77366[(6)] = c__68453__auto___77368);

return statearr_77366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___77368,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__77382 = arguments.length;
switch (G__77382) {
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
var c__68453__auto___77448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___77448,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___77448,out){
return (function (state_77420){
var state_val_77421 = (state_77420[(1)]);
if((state_val_77421 === (7))){
var inst_77416 = (state_77420[(2)]);
var state_77420__$1 = state_77420;
var statearr_77422_77449 = state_77420__$1;
(statearr_77422_77449[(2)] = inst_77416);

(statearr_77422_77449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (1))){
var inst_77383 = (new Array(n));
var inst_77384 = inst_77383;
var inst_77385 = (0);
var state_77420__$1 = (function (){var statearr_77423 = state_77420;
(statearr_77423[(7)] = inst_77385);

(statearr_77423[(8)] = inst_77384);

return statearr_77423;
})();
var statearr_77424_77450 = state_77420__$1;
(statearr_77424_77450[(2)] = null);

(statearr_77424_77450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (4))){
var inst_77388 = (state_77420[(9)]);
var inst_77388__$1 = (state_77420[(2)]);
var inst_77389 = (inst_77388__$1 == null);
var inst_77390 = cljs.core.not.call(null,inst_77389);
var state_77420__$1 = (function (){var statearr_77425 = state_77420;
(statearr_77425[(9)] = inst_77388__$1);

return statearr_77425;
})();
if(inst_77390){
var statearr_77426_77451 = state_77420__$1;
(statearr_77426_77451[(1)] = (5));

} else {
var statearr_77427_77452 = state_77420__$1;
(statearr_77427_77452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (15))){
var inst_77410 = (state_77420[(2)]);
var state_77420__$1 = state_77420;
var statearr_77428_77453 = state_77420__$1;
(statearr_77428_77453[(2)] = inst_77410);

(statearr_77428_77453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (13))){
var state_77420__$1 = state_77420;
var statearr_77429_77454 = state_77420__$1;
(statearr_77429_77454[(2)] = null);

(statearr_77429_77454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (6))){
var inst_77385 = (state_77420[(7)]);
var inst_77406 = (inst_77385 > (0));
var state_77420__$1 = state_77420;
if(cljs.core.truth_(inst_77406)){
var statearr_77430_77455 = state_77420__$1;
(statearr_77430_77455[(1)] = (12));

} else {
var statearr_77431_77456 = state_77420__$1;
(statearr_77431_77456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (3))){
var inst_77418 = (state_77420[(2)]);
var state_77420__$1 = state_77420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77420__$1,inst_77418);
} else {
if((state_val_77421 === (12))){
var inst_77384 = (state_77420[(8)]);
var inst_77408 = cljs.core.vec.call(null,inst_77384);
var state_77420__$1 = state_77420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77420__$1,(15),out,inst_77408);
} else {
if((state_val_77421 === (2))){
var state_77420__$1 = state_77420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77420__$1,(4),ch);
} else {
if((state_val_77421 === (11))){
var inst_77400 = (state_77420[(2)]);
var inst_77401 = (new Array(n));
var inst_77384 = inst_77401;
var inst_77385 = (0);
var state_77420__$1 = (function (){var statearr_77432 = state_77420;
(statearr_77432[(10)] = inst_77400);

(statearr_77432[(7)] = inst_77385);

(statearr_77432[(8)] = inst_77384);

return statearr_77432;
})();
var statearr_77433_77457 = state_77420__$1;
(statearr_77433_77457[(2)] = null);

(statearr_77433_77457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (9))){
var inst_77384 = (state_77420[(8)]);
var inst_77398 = cljs.core.vec.call(null,inst_77384);
var state_77420__$1 = state_77420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77420__$1,(11),out,inst_77398);
} else {
if((state_val_77421 === (5))){
var inst_77393 = (state_77420[(11)]);
var inst_77385 = (state_77420[(7)]);
var inst_77384 = (state_77420[(8)]);
var inst_77388 = (state_77420[(9)]);
var inst_77392 = (inst_77384[inst_77385] = inst_77388);
var inst_77393__$1 = (inst_77385 + (1));
var inst_77394 = (inst_77393__$1 < n);
var state_77420__$1 = (function (){var statearr_77434 = state_77420;
(statearr_77434[(12)] = inst_77392);

(statearr_77434[(11)] = inst_77393__$1);

return statearr_77434;
})();
if(cljs.core.truth_(inst_77394)){
var statearr_77435_77458 = state_77420__$1;
(statearr_77435_77458[(1)] = (8));

} else {
var statearr_77436_77459 = state_77420__$1;
(statearr_77436_77459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (14))){
var inst_77413 = (state_77420[(2)]);
var inst_77414 = cljs.core.async.close_BANG_.call(null,out);
var state_77420__$1 = (function (){var statearr_77438 = state_77420;
(statearr_77438[(13)] = inst_77413);

return statearr_77438;
})();
var statearr_77439_77460 = state_77420__$1;
(statearr_77439_77460[(2)] = inst_77414);

(statearr_77439_77460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (10))){
var inst_77404 = (state_77420[(2)]);
var state_77420__$1 = state_77420;
var statearr_77440_77461 = state_77420__$1;
(statearr_77440_77461[(2)] = inst_77404);

(statearr_77440_77461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77421 === (8))){
var inst_77393 = (state_77420[(11)]);
var inst_77384 = (state_77420[(8)]);
var tmp77437 = inst_77384;
var inst_77384__$1 = tmp77437;
var inst_77385 = inst_77393;
var state_77420__$1 = (function (){var statearr_77441 = state_77420;
(statearr_77441[(7)] = inst_77385);

(statearr_77441[(8)] = inst_77384__$1);

return statearr_77441;
})();
var statearr_77442_77462 = state_77420__$1;
(statearr_77442_77462[(2)] = null);

(statearr_77442_77462[(1)] = (2));


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
});})(c__68453__auto___77448,out))
;
return ((function (switch__68363__auto__,c__68453__auto___77448,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_77443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77443[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_77443[(1)] = (1));

return statearr_77443;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_77420){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_77420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e77444){if((e77444 instanceof Object)){
var ex__68367__auto__ = e77444;
var statearr_77445_77463 = state_77420;
(statearr_77445_77463[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77464 = state_77420;
state_77420 = G__77464;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_77420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_77420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___77448,out))
})();
var state__68455__auto__ = (function (){var statearr_77446 = f__68454__auto__.call(null);
(statearr_77446[(6)] = c__68453__auto___77448);

return statearr_77446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___77448,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__77466 = arguments.length;
switch (G__77466) {
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
var c__68453__auto___77536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___77536,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___77536,out){
return (function (state_77508){
var state_val_77509 = (state_77508[(1)]);
if((state_val_77509 === (7))){
var inst_77504 = (state_77508[(2)]);
var state_77508__$1 = state_77508;
var statearr_77510_77537 = state_77508__$1;
(statearr_77510_77537[(2)] = inst_77504);

(statearr_77510_77537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (1))){
var inst_77467 = [];
var inst_77468 = inst_77467;
var inst_77469 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_77508__$1 = (function (){var statearr_77511 = state_77508;
(statearr_77511[(7)] = inst_77468);

(statearr_77511[(8)] = inst_77469);

return statearr_77511;
})();
var statearr_77512_77538 = state_77508__$1;
(statearr_77512_77538[(2)] = null);

(statearr_77512_77538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (4))){
var inst_77472 = (state_77508[(9)]);
var inst_77472__$1 = (state_77508[(2)]);
var inst_77473 = (inst_77472__$1 == null);
var inst_77474 = cljs.core.not.call(null,inst_77473);
var state_77508__$1 = (function (){var statearr_77513 = state_77508;
(statearr_77513[(9)] = inst_77472__$1);

return statearr_77513;
})();
if(inst_77474){
var statearr_77514_77539 = state_77508__$1;
(statearr_77514_77539[(1)] = (5));

} else {
var statearr_77515_77540 = state_77508__$1;
(statearr_77515_77540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (15))){
var inst_77498 = (state_77508[(2)]);
var state_77508__$1 = state_77508;
var statearr_77516_77541 = state_77508__$1;
(statearr_77516_77541[(2)] = inst_77498);

(statearr_77516_77541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (13))){
var state_77508__$1 = state_77508;
var statearr_77517_77542 = state_77508__$1;
(statearr_77517_77542[(2)] = null);

(statearr_77517_77542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (6))){
var inst_77468 = (state_77508[(7)]);
var inst_77493 = inst_77468.length;
var inst_77494 = (inst_77493 > (0));
var state_77508__$1 = state_77508;
if(cljs.core.truth_(inst_77494)){
var statearr_77518_77543 = state_77508__$1;
(statearr_77518_77543[(1)] = (12));

} else {
var statearr_77519_77544 = state_77508__$1;
(statearr_77519_77544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (3))){
var inst_77506 = (state_77508[(2)]);
var state_77508__$1 = state_77508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77508__$1,inst_77506);
} else {
if((state_val_77509 === (12))){
var inst_77468 = (state_77508[(7)]);
var inst_77496 = cljs.core.vec.call(null,inst_77468);
var state_77508__$1 = state_77508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77508__$1,(15),out,inst_77496);
} else {
if((state_val_77509 === (2))){
var state_77508__$1 = state_77508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77508__$1,(4),ch);
} else {
if((state_val_77509 === (11))){
var inst_77476 = (state_77508[(10)]);
var inst_77472 = (state_77508[(9)]);
var inst_77486 = (state_77508[(2)]);
var inst_77487 = [];
var inst_77488 = inst_77487.push(inst_77472);
var inst_77468 = inst_77487;
var inst_77469 = inst_77476;
var state_77508__$1 = (function (){var statearr_77520 = state_77508;
(statearr_77520[(7)] = inst_77468);

(statearr_77520[(8)] = inst_77469);

(statearr_77520[(11)] = inst_77488);

(statearr_77520[(12)] = inst_77486);

return statearr_77520;
})();
var statearr_77521_77545 = state_77508__$1;
(statearr_77521_77545[(2)] = null);

(statearr_77521_77545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (9))){
var inst_77468 = (state_77508[(7)]);
var inst_77484 = cljs.core.vec.call(null,inst_77468);
var state_77508__$1 = state_77508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77508__$1,(11),out,inst_77484);
} else {
if((state_val_77509 === (5))){
var inst_77476 = (state_77508[(10)]);
var inst_77469 = (state_77508[(8)]);
var inst_77472 = (state_77508[(9)]);
var inst_77476__$1 = f.call(null,inst_77472);
var inst_77477 = cljs.core._EQ_.call(null,inst_77476__$1,inst_77469);
var inst_77478 = cljs.core.keyword_identical_QMARK_.call(null,inst_77469,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_77479 = (inst_77477) || (inst_77478);
var state_77508__$1 = (function (){var statearr_77522 = state_77508;
(statearr_77522[(10)] = inst_77476__$1);

return statearr_77522;
})();
if(cljs.core.truth_(inst_77479)){
var statearr_77523_77546 = state_77508__$1;
(statearr_77523_77546[(1)] = (8));

} else {
var statearr_77524_77547 = state_77508__$1;
(statearr_77524_77547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (14))){
var inst_77501 = (state_77508[(2)]);
var inst_77502 = cljs.core.async.close_BANG_.call(null,out);
var state_77508__$1 = (function (){var statearr_77526 = state_77508;
(statearr_77526[(13)] = inst_77501);

return statearr_77526;
})();
var statearr_77527_77548 = state_77508__$1;
(statearr_77527_77548[(2)] = inst_77502);

(statearr_77527_77548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (10))){
var inst_77491 = (state_77508[(2)]);
var state_77508__$1 = state_77508;
var statearr_77528_77549 = state_77508__$1;
(statearr_77528_77549[(2)] = inst_77491);

(statearr_77528_77549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77509 === (8))){
var inst_77476 = (state_77508[(10)]);
var inst_77468 = (state_77508[(7)]);
var inst_77472 = (state_77508[(9)]);
var inst_77481 = inst_77468.push(inst_77472);
var tmp77525 = inst_77468;
var inst_77468__$1 = tmp77525;
var inst_77469 = inst_77476;
var state_77508__$1 = (function (){var statearr_77529 = state_77508;
(statearr_77529[(7)] = inst_77468__$1);

(statearr_77529[(8)] = inst_77469);

(statearr_77529[(14)] = inst_77481);

return statearr_77529;
})();
var statearr_77530_77550 = state_77508__$1;
(statearr_77530_77550[(2)] = null);

(statearr_77530_77550[(1)] = (2));


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
});})(c__68453__auto___77536,out))
;
return ((function (switch__68363__auto__,c__68453__auto___77536,out){
return (function() {
var cljs$core$async$state_machine__68364__auto__ = null;
var cljs$core$async$state_machine__68364__auto____0 = (function (){
var statearr_77531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77531[(0)] = cljs$core$async$state_machine__68364__auto__);

(statearr_77531[(1)] = (1));

return statearr_77531;
});
var cljs$core$async$state_machine__68364__auto____1 = (function (state_77508){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_77508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e77532){if((e77532 instanceof Object)){
var ex__68367__auto__ = e77532;
var statearr_77533_77551 = state_77508;
(statearr_77533_77551[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77552 = state_77508;
state_77508 = G__77552;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
cljs$core$async$state_machine__68364__auto__ = function(state_77508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68364__auto____1.call(this,state_77508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68364__auto____0;
cljs$core$async$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68364__auto____1;
return cljs$core$async$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___77536,out))
})();
var state__68455__auto__ = (function (){var statearr_77534 = f__68454__auto__.call(null);
(statearr_77534[(6)] = c__68453__auto___77536);

return statearr_77534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___77536,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1519023123606
