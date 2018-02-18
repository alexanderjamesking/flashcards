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
var G__69056 = arguments.length;
switch (G__69056) {
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
if(typeof cljs.core.async.t_cljs$core$async69057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69057 = (function (f,blockable,meta69058){
this.f = f;
this.blockable = blockable;
this.meta69058 = meta69058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69059,meta69058__$1){
var self__ = this;
var _69059__$1 = this;
return (new cljs.core.async.t_cljs$core$async69057(self__.f,self__.blockable,meta69058__$1));
});

cljs.core.async.t_cljs$core$async69057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69059){
var self__ = this;
var _69059__$1 = this;
return self__.meta69058;
});

cljs.core.async.t_cljs$core$async69057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async69057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async69057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async69057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69058","meta69058",1252406970,null)], null);
});

cljs.core.async.t_cljs$core$async69057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69057";

cljs.core.async.t_cljs$core$async69057.cljs$lang$ctorPrWriter = (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async69057");
});

cljs.core.async.__GT_t_cljs$core$async69057 = (function cljs$core$async$__GT_t_cljs$core$async69057(f__$1,blockable__$1,meta69058){
return (new cljs.core.async.t_cljs$core$async69057(f__$1,blockable__$1,meta69058));
});

}

return (new cljs.core.async.t_cljs$core$async69057(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__69063 = arguments.length;
switch (G__69063) {
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
var G__69066 = arguments.length;
switch (G__69066) {
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
var G__69069 = arguments.length;
switch (G__69069) {
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
var val_69071 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_69071);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_69071,ret){
return (function (){
return fn1.call(null,val_69071);
});})(val_69071,ret))
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
var G__69073 = arguments.length;
switch (G__69073) {
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
var n__41900__auto___69075 = n;
var x_69076 = (0);
while(true){
if((x_69076 < n__41900__auto___69075)){
(a[x_69076] = (0));

var G__69077 = (x_69076 + (1));
x_69076 = G__69077;
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

var G__69078 = (i + (1));
i = G__69078;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async69079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69079 = (function (flag,meta69080){
this.flag = flag;
this.meta69080 = meta69080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_69081,meta69080__$1){
var self__ = this;
var _69081__$1 = this;
return (new cljs.core.async.t_cljs$core$async69079(self__.flag,meta69080__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async69079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_69081){
var self__ = this;
var _69081__$1 = this;
return self__.meta69080;
});})(flag))
;

cljs.core.async.t_cljs$core$async69079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async69079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async69079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async69079.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69080","meta69080",1804074317,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async69079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69079";

cljs.core.async.t_cljs$core$async69079.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async69079");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async69079 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69079(flag__$1,meta69080){
return (new cljs.core.async.t_cljs$core$async69079(flag__$1,meta69080));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async69079(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async69082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69082 = (function (flag,cb,meta69083){
this.flag = flag;
this.cb = cb;
this.meta69083 = meta69083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69084,meta69083__$1){
var self__ = this;
var _69084__$1 = this;
return (new cljs.core.async.t_cljs$core$async69082(self__.flag,self__.cb,meta69083__$1));
});

cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69084){
var self__ = this;
var _69084__$1 = this;
return self__.meta69083;
});

cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async69082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69083","meta69083",-255975678,null)], null);
});

cljs.core.async.t_cljs$core$async69082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69082";

cljs.core.async.t_cljs$core$async69082.cljs$lang$ctorPrWriter = (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async69082");
});

cljs.core.async.__GT_t_cljs$core$async69082 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69082(flag__$1,cb__$1,meta69083){
return (new cljs.core.async.t_cljs$core$async69082(flag__$1,cb__$1,meta69083));
});

}

return (new cljs.core.async.t_cljs$core$async69082(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__69085_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69085_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69086_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69086_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__39642__auto__ = wport;
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
return port;
}
})()], null));
} else {
var G__69087 = (i + (1));
i = G__69087;
continue;
}
} else {
return null;
}
break;
}
})();
var or__39642__auto__ = ret;
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__39620__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__39620__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__39620__auto__;
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
var len__42174__auto___69093 = arguments.length;
var i__42175__auto___69094 = (0);
while(true){
if((i__42175__auto___69094 < len__42174__auto___69093)){
args__42181__auto__.push((arguments[i__42175__auto___69094]));

var G__69095 = (i__42175__auto___69094 + (1));
i__42175__auto___69094 = G__69095;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((1) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42182__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69090){
var map__69091 = p__69090;
var map__69091__$1 = ((((!((map__69091 == null)))?((((map__69091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69091):map__69091);
var opts = map__69091__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69088){
var G__69089 = cljs.core.first.call(null,seq69088);
var seq69088__$1 = cljs.core.next.call(null,seq69088);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69089,seq69088__$1);
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
var G__69097 = arguments.length;
switch (G__69097) {
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
var c__58504__auto___69143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___69143){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___69143){
return (function (state_69121){
var state_val_69122 = (state_69121[(1)]);
if((state_val_69122 === (7))){
var inst_69117 = (state_69121[(2)]);
var state_69121__$1 = state_69121;
var statearr_69123_69144 = state_69121__$1;
(statearr_69123_69144[(2)] = inst_69117);

(statearr_69123_69144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (1))){
var state_69121__$1 = state_69121;
var statearr_69124_69145 = state_69121__$1;
(statearr_69124_69145[(2)] = null);

(statearr_69124_69145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (4))){
var inst_69100 = (state_69121[(7)]);
var inst_69100__$1 = (state_69121[(2)]);
var inst_69101 = (inst_69100__$1 == null);
var state_69121__$1 = (function (){var statearr_69125 = state_69121;
(statearr_69125[(7)] = inst_69100__$1);

return statearr_69125;
})();
if(cljs.core.truth_(inst_69101)){
var statearr_69126_69146 = state_69121__$1;
(statearr_69126_69146[(1)] = (5));

} else {
var statearr_69127_69147 = state_69121__$1;
(statearr_69127_69147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (13))){
var state_69121__$1 = state_69121;
var statearr_69128_69148 = state_69121__$1;
(statearr_69128_69148[(2)] = null);

(statearr_69128_69148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (6))){
var inst_69100 = (state_69121[(7)]);
var state_69121__$1 = state_69121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69121__$1,(11),to,inst_69100);
} else {
if((state_val_69122 === (3))){
var inst_69119 = (state_69121[(2)]);
var state_69121__$1 = state_69121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69121__$1,inst_69119);
} else {
if((state_val_69122 === (12))){
var state_69121__$1 = state_69121;
var statearr_69129_69149 = state_69121__$1;
(statearr_69129_69149[(2)] = null);

(statearr_69129_69149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (2))){
var state_69121__$1 = state_69121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69121__$1,(4),from);
} else {
if((state_val_69122 === (11))){
var inst_69110 = (state_69121[(2)]);
var state_69121__$1 = state_69121;
if(cljs.core.truth_(inst_69110)){
var statearr_69130_69150 = state_69121__$1;
(statearr_69130_69150[(1)] = (12));

} else {
var statearr_69131_69151 = state_69121__$1;
(statearr_69131_69151[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (9))){
var state_69121__$1 = state_69121;
var statearr_69132_69152 = state_69121__$1;
(statearr_69132_69152[(2)] = null);

(statearr_69132_69152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (5))){
var state_69121__$1 = state_69121;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69133_69153 = state_69121__$1;
(statearr_69133_69153[(1)] = (8));

} else {
var statearr_69134_69154 = state_69121__$1;
(statearr_69134_69154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (14))){
var inst_69115 = (state_69121[(2)]);
var state_69121__$1 = state_69121;
var statearr_69135_69155 = state_69121__$1;
(statearr_69135_69155[(2)] = inst_69115);

(statearr_69135_69155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (10))){
var inst_69107 = (state_69121[(2)]);
var state_69121__$1 = state_69121;
var statearr_69136_69156 = state_69121__$1;
(statearr_69136_69156[(2)] = inst_69107);

(statearr_69136_69156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69122 === (8))){
var inst_69104 = cljs.core.async.close_BANG_.call(null,to);
var state_69121__$1 = state_69121;
var statearr_69137_69157 = state_69121__$1;
(statearr_69137_69157[(2)] = inst_69104);

(statearr_69137_69157[(1)] = (10));


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
});})(c__58504__auto___69143))
;
return ((function (switch__58437__auto__,c__58504__auto___69143){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_69138 = [null,null,null,null,null,null,null,null];
(statearr_69138[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_69138[(1)] = (1));

return statearr_69138;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_69121){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69139){if((e69139 instanceof Object)){
var ex__58441__auto__ = e69139;
var statearr_69140_69158 = state_69121;
(statearr_69140_69158[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69159 = state_69121;
state_69121 = G__69159;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_69121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_69121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___69143))
})();
var state__58506__auto__ = (function (){var statearr_69141 = f__58505__auto__.call(null);
(statearr_69141[(6)] = c__58504__auto___69143);

return statearr_69141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___69143))
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
return (function (p__69160){
var vec__69161 = p__69160;
var v = cljs.core.nth.call(null,vec__69161,(0),null);
var p = cljs.core.nth.call(null,vec__69161,(1),null);
var job = vec__69161;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__58504__auto___69332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___69332,res,vec__69161,v,p,job,jobs,results){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___69332,res,vec__69161,v,p,job,jobs,results){
return (function (state_69168){
var state_val_69169 = (state_69168[(1)]);
if((state_val_69169 === (1))){
var state_69168__$1 = state_69168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69168__$1,(2),res,v);
} else {
if((state_val_69169 === (2))){
var inst_69165 = (state_69168[(2)]);
var inst_69166 = cljs.core.async.close_BANG_.call(null,res);
var state_69168__$1 = (function (){var statearr_69170 = state_69168;
(statearr_69170[(7)] = inst_69165);

return statearr_69170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69168__$1,inst_69166);
} else {
return null;
}
}
});})(c__58504__auto___69332,res,vec__69161,v,p,job,jobs,results))
;
return ((function (switch__58437__auto__,c__58504__auto___69332,res,vec__69161,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0 = (function (){
var statearr_69171 = [null,null,null,null,null,null,null,null];
(statearr_69171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__);

(statearr_69171[(1)] = (1));

return statearr_69171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1 = (function (state_69168){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69172){if((e69172 instanceof Object)){
var ex__58441__auto__ = e69172;
var statearr_69173_69333 = state_69168;
(statearr_69173_69333[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69334 = state_69168;
state_69168 = G__69334;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = function(state_69168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1.call(this,state_69168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___69332,res,vec__69161,v,p,job,jobs,results))
})();
var state__58506__auto__ = (function (){var statearr_69174 = f__58505__auto__.call(null);
(statearr_69174[(6)] = c__58504__auto___69332);

return statearr_69174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___69332,res,vec__69161,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__69175){
var vec__69176 = p__69175;
var v = cljs.core.nth.call(null,vec__69176,(0),null);
var p = cljs.core.nth.call(null,vec__69176,(1),null);
var job = vec__69176;
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
var n__41900__auto___69335 = n;
var __69336 = (0);
while(true){
if((__69336 < n__41900__auto___69335)){
var G__69179_69337 = type;
var G__69179_69338__$1 = (((G__69179_69337 instanceof cljs.core.Keyword))?G__69179_69337.fqn:null);
switch (G__69179_69338__$1) {
case "compute":
var c__58504__auto___69340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69336,c__58504__auto___69340,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (__69336,c__58504__auto___69340,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async){
return (function (state_69192){
var state_val_69193 = (state_69192[(1)]);
if((state_val_69193 === (1))){
var state_69192__$1 = state_69192;
var statearr_69194_69341 = state_69192__$1;
(statearr_69194_69341[(2)] = null);

(statearr_69194_69341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69193 === (2))){
var state_69192__$1 = state_69192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69192__$1,(4),jobs);
} else {
if((state_val_69193 === (3))){
var inst_69190 = (state_69192[(2)]);
var state_69192__$1 = state_69192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69192__$1,inst_69190);
} else {
if((state_val_69193 === (4))){
var inst_69182 = (state_69192[(2)]);
var inst_69183 = process.call(null,inst_69182);
var state_69192__$1 = state_69192;
if(cljs.core.truth_(inst_69183)){
var statearr_69195_69342 = state_69192__$1;
(statearr_69195_69342[(1)] = (5));

} else {
var statearr_69196_69343 = state_69192__$1;
(statearr_69196_69343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69193 === (5))){
var state_69192__$1 = state_69192;
var statearr_69197_69344 = state_69192__$1;
(statearr_69197_69344[(2)] = null);

(statearr_69197_69344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69193 === (6))){
var state_69192__$1 = state_69192;
var statearr_69198_69345 = state_69192__$1;
(statearr_69198_69345[(2)] = null);

(statearr_69198_69345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69193 === (7))){
var inst_69188 = (state_69192[(2)]);
var state_69192__$1 = state_69192;
var statearr_69199_69346 = state_69192__$1;
(statearr_69199_69346[(2)] = inst_69188);

(statearr_69199_69346[(1)] = (3));


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
});})(__69336,c__58504__auto___69340,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async))
;
return ((function (__69336,switch__58437__auto__,c__58504__auto___69340,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0 = (function (){
var statearr_69200 = [null,null,null,null,null,null,null];
(statearr_69200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__);

(statearr_69200[(1)] = (1));

return statearr_69200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1 = (function (state_69192){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69201){if((e69201 instanceof Object)){
var ex__58441__auto__ = e69201;
var statearr_69202_69347 = state_69192;
(statearr_69202_69347[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69348 = state_69192;
state_69192 = G__69348;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = function(state_69192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1.call(this,state_69192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__;
})()
;})(__69336,switch__58437__auto__,c__58504__auto___69340,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async))
})();
var state__58506__auto__ = (function (){var statearr_69203 = f__58505__auto__.call(null);
(statearr_69203[(6)] = c__58504__auto___69340);

return statearr_69203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(__69336,c__58504__auto___69340,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async))
);


break;
case "async":
var c__58504__auto___69349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69336,c__58504__auto___69349,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (__69336,c__58504__auto___69349,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async){
return (function (state_69216){
var state_val_69217 = (state_69216[(1)]);
if((state_val_69217 === (1))){
var state_69216__$1 = state_69216;
var statearr_69218_69350 = state_69216__$1;
(statearr_69218_69350[(2)] = null);

(statearr_69218_69350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69217 === (2))){
var state_69216__$1 = state_69216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69216__$1,(4),jobs);
} else {
if((state_val_69217 === (3))){
var inst_69214 = (state_69216[(2)]);
var state_69216__$1 = state_69216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69216__$1,inst_69214);
} else {
if((state_val_69217 === (4))){
var inst_69206 = (state_69216[(2)]);
var inst_69207 = async.call(null,inst_69206);
var state_69216__$1 = state_69216;
if(cljs.core.truth_(inst_69207)){
var statearr_69219_69351 = state_69216__$1;
(statearr_69219_69351[(1)] = (5));

} else {
var statearr_69220_69352 = state_69216__$1;
(statearr_69220_69352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69217 === (5))){
var state_69216__$1 = state_69216;
var statearr_69221_69353 = state_69216__$1;
(statearr_69221_69353[(2)] = null);

(statearr_69221_69353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69217 === (6))){
var state_69216__$1 = state_69216;
var statearr_69222_69354 = state_69216__$1;
(statearr_69222_69354[(2)] = null);

(statearr_69222_69354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69217 === (7))){
var inst_69212 = (state_69216[(2)]);
var state_69216__$1 = state_69216;
var statearr_69223_69355 = state_69216__$1;
(statearr_69223_69355[(2)] = inst_69212);

(statearr_69223_69355[(1)] = (3));


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
});})(__69336,c__58504__auto___69349,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async))
;
return ((function (__69336,switch__58437__auto__,c__58504__auto___69349,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0 = (function (){
var statearr_69224 = [null,null,null,null,null,null,null];
(statearr_69224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__);

(statearr_69224[(1)] = (1));

return statearr_69224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1 = (function (state_69216){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69225){if((e69225 instanceof Object)){
var ex__58441__auto__ = e69225;
var statearr_69226_69356 = state_69216;
(statearr_69226_69356[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69357 = state_69216;
state_69216 = G__69357;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = function(state_69216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1.call(this,state_69216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__;
})()
;})(__69336,switch__58437__auto__,c__58504__auto___69349,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async))
})();
var state__58506__auto__ = (function (){var statearr_69227 = f__58505__auto__.call(null);
(statearr_69227[(6)] = c__58504__auto___69349);

return statearr_69227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(__69336,c__58504__auto___69349,G__69179_69337,G__69179_69338__$1,n__41900__auto___69335,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69179_69338__$1)].join('')));

}

var G__69358 = (__69336 + (1));
__69336 = G__69358;
continue;
} else {
}
break;
}

var c__58504__auto___69359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___69359,jobs,results,process,async){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___69359,jobs,results,process,async){
return (function (state_69249){
var state_val_69250 = (state_69249[(1)]);
if((state_val_69250 === (1))){
var state_69249__$1 = state_69249;
var statearr_69251_69360 = state_69249__$1;
(statearr_69251_69360[(2)] = null);

(statearr_69251_69360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69250 === (2))){
var state_69249__$1 = state_69249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69249__$1,(4),from);
} else {
if((state_val_69250 === (3))){
var inst_69247 = (state_69249[(2)]);
var state_69249__$1 = state_69249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69249__$1,inst_69247);
} else {
if((state_val_69250 === (4))){
var inst_69230 = (state_69249[(7)]);
var inst_69230__$1 = (state_69249[(2)]);
var inst_69231 = (inst_69230__$1 == null);
var state_69249__$1 = (function (){var statearr_69252 = state_69249;
(statearr_69252[(7)] = inst_69230__$1);

return statearr_69252;
})();
if(cljs.core.truth_(inst_69231)){
var statearr_69253_69361 = state_69249__$1;
(statearr_69253_69361[(1)] = (5));

} else {
var statearr_69254_69362 = state_69249__$1;
(statearr_69254_69362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69250 === (5))){
var inst_69233 = cljs.core.async.close_BANG_.call(null,jobs);
var state_69249__$1 = state_69249;
var statearr_69255_69363 = state_69249__$1;
(statearr_69255_69363[(2)] = inst_69233);

(statearr_69255_69363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69250 === (6))){
var inst_69230 = (state_69249[(7)]);
var inst_69235 = (state_69249[(8)]);
var inst_69235__$1 = cljs.core.async.chan.call(null,(1));
var inst_69236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69237 = [inst_69230,inst_69235__$1];
var inst_69238 = (new cljs.core.PersistentVector(null,2,(5),inst_69236,inst_69237,null));
var state_69249__$1 = (function (){var statearr_69256 = state_69249;
(statearr_69256[(8)] = inst_69235__$1);

return statearr_69256;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69249__$1,(8),jobs,inst_69238);
} else {
if((state_val_69250 === (7))){
var inst_69245 = (state_69249[(2)]);
var state_69249__$1 = state_69249;
var statearr_69257_69364 = state_69249__$1;
(statearr_69257_69364[(2)] = inst_69245);

(statearr_69257_69364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69250 === (8))){
var inst_69235 = (state_69249[(8)]);
var inst_69240 = (state_69249[(2)]);
var state_69249__$1 = (function (){var statearr_69258 = state_69249;
(statearr_69258[(9)] = inst_69240);

return statearr_69258;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69249__$1,(9),results,inst_69235);
} else {
if((state_val_69250 === (9))){
var inst_69242 = (state_69249[(2)]);
var state_69249__$1 = (function (){var statearr_69259 = state_69249;
(statearr_69259[(10)] = inst_69242);

return statearr_69259;
})();
var statearr_69260_69365 = state_69249__$1;
(statearr_69260_69365[(2)] = null);

(statearr_69260_69365[(1)] = (2));


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
});})(c__58504__auto___69359,jobs,results,process,async))
;
return ((function (switch__58437__auto__,c__58504__auto___69359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0 = (function (){
var statearr_69261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__);

(statearr_69261[(1)] = (1));

return statearr_69261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1 = (function (state_69249){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69262){if((e69262 instanceof Object)){
var ex__58441__auto__ = e69262;
var statearr_69263_69366 = state_69249;
(statearr_69263_69366[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69367 = state_69249;
state_69249 = G__69367;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = function(state_69249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1.call(this,state_69249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___69359,jobs,results,process,async))
})();
var state__58506__auto__ = (function (){var statearr_69264 = f__58505__auto__.call(null);
(statearr_69264[(6)] = c__58504__auto___69359);

return statearr_69264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___69359,jobs,results,process,async))
);


var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__,jobs,results,process,async){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__,jobs,results,process,async){
return (function (state_69302){
var state_val_69303 = (state_69302[(1)]);
if((state_val_69303 === (7))){
var inst_69298 = (state_69302[(2)]);
var state_69302__$1 = state_69302;
var statearr_69304_69368 = state_69302__$1;
(statearr_69304_69368[(2)] = inst_69298);

(statearr_69304_69368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (20))){
var state_69302__$1 = state_69302;
var statearr_69305_69369 = state_69302__$1;
(statearr_69305_69369[(2)] = null);

(statearr_69305_69369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (1))){
var state_69302__$1 = state_69302;
var statearr_69306_69370 = state_69302__$1;
(statearr_69306_69370[(2)] = null);

(statearr_69306_69370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (4))){
var inst_69267 = (state_69302[(7)]);
var inst_69267__$1 = (state_69302[(2)]);
var inst_69268 = (inst_69267__$1 == null);
var state_69302__$1 = (function (){var statearr_69307 = state_69302;
(statearr_69307[(7)] = inst_69267__$1);

return statearr_69307;
})();
if(cljs.core.truth_(inst_69268)){
var statearr_69308_69371 = state_69302__$1;
(statearr_69308_69371[(1)] = (5));

} else {
var statearr_69309_69372 = state_69302__$1;
(statearr_69309_69372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (15))){
var inst_69280 = (state_69302[(8)]);
var state_69302__$1 = state_69302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69302__$1,(18),to,inst_69280);
} else {
if((state_val_69303 === (21))){
var inst_69293 = (state_69302[(2)]);
var state_69302__$1 = state_69302;
var statearr_69310_69373 = state_69302__$1;
(statearr_69310_69373[(2)] = inst_69293);

(statearr_69310_69373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (13))){
var inst_69295 = (state_69302[(2)]);
var state_69302__$1 = (function (){var statearr_69311 = state_69302;
(statearr_69311[(9)] = inst_69295);

return statearr_69311;
})();
var statearr_69312_69374 = state_69302__$1;
(statearr_69312_69374[(2)] = null);

(statearr_69312_69374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (6))){
var inst_69267 = (state_69302[(7)]);
var state_69302__$1 = state_69302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69302__$1,(11),inst_69267);
} else {
if((state_val_69303 === (17))){
var inst_69288 = (state_69302[(2)]);
var state_69302__$1 = state_69302;
if(cljs.core.truth_(inst_69288)){
var statearr_69313_69375 = state_69302__$1;
(statearr_69313_69375[(1)] = (19));

} else {
var statearr_69314_69376 = state_69302__$1;
(statearr_69314_69376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (3))){
var inst_69300 = (state_69302[(2)]);
var state_69302__$1 = state_69302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69302__$1,inst_69300);
} else {
if((state_val_69303 === (12))){
var inst_69277 = (state_69302[(10)]);
var state_69302__$1 = state_69302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69302__$1,(14),inst_69277);
} else {
if((state_val_69303 === (2))){
var state_69302__$1 = state_69302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69302__$1,(4),results);
} else {
if((state_val_69303 === (19))){
var state_69302__$1 = state_69302;
var statearr_69315_69377 = state_69302__$1;
(statearr_69315_69377[(2)] = null);

(statearr_69315_69377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (11))){
var inst_69277 = (state_69302[(2)]);
var state_69302__$1 = (function (){var statearr_69316 = state_69302;
(statearr_69316[(10)] = inst_69277);

return statearr_69316;
})();
var statearr_69317_69378 = state_69302__$1;
(statearr_69317_69378[(2)] = null);

(statearr_69317_69378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (9))){
var state_69302__$1 = state_69302;
var statearr_69318_69379 = state_69302__$1;
(statearr_69318_69379[(2)] = null);

(statearr_69318_69379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (5))){
var state_69302__$1 = state_69302;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69319_69380 = state_69302__$1;
(statearr_69319_69380[(1)] = (8));

} else {
var statearr_69320_69381 = state_69302__$1;
(statearr_69320_69381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (14))){
var inst_69282 = (state_69302[(11)]);
var inst_69280 = (state_69302[(8)]);
var inst_69280__$1 = (state_69302[(2)]);
var inst_69281 = (inst_69280__$1 == null);
var inst_69282__$1 = cljs.core.not.call(null,inst_69281);
var state_69302__$1 = (function (){var statearr_69321 = state_69302;
(statearr_69321[(11)] = inst_69282__$1);

(statearr_69321[(8)] = inst_69280__$1);

return statearr_69321;
})();
if(inst_69282__$1){
var statearr_69322_69382 = state_69302__$1;
(statearr_69322_69382[(1)] = (15));

} else {
var statearr_69323_69383 = state_69302__$1;
(statearr_69323_69383[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (16))){
var inst_69282 = (state_69302[(11)]);
var state_69302__$1 = state_69302;
var statearr_69324_69384 = state_69302__$1;
(statearr_69324_69384[(2)] = inst_69282);

(statearr_69324_69384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (10))){
var inst_69274 = (state_69302[(2)]);
var state_69302__$1 = state_69302;
var statearr_69325_69385 = state_69302__$1;
(statearr_69325_69385[(2)] = inst_69274);

(statearr_69325_69385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (18))){
var inst_69285 = (state_69302[(2)]);
var state_69302__$1 = state_69302;
var statearr_69326_69386 = state_69302__$1;
(statearr_69326_69386[(2)] = inst_69285);

(statearr_69326_69386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69303 === (8))){
var inst_69271 = cljs.core.async.close_BANG_.call(null,to);
var state_69302__$1 = state_69302;
var statearr_69327_69387 = state_69302__$1;
(statearr_69327_69387[(2)] = inst_69271);

(statearr_69327_69387[(1)] = (10));


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
});})(c__58504__auto__,jobs,results,process,async))
;
return ((function (switch__58437__auto__,c__58504__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0 = (function (){
var statearr_69328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__);

(statearr_69328[(1)] = (1));

return statearr_69328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1 = (function (state_69302){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69329){if((e69329 instanceof Object)){
var ex__58441__auto__ = e69329;
var statearr_69330_69388 = state_69302;
(statearr_69330_69388[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69389 = state_69302;
state_69302 = G__69389;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__ = function(state_69302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1.call(this,state_69302);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__,jobs,results,process,async))
})();
var state__58506__auto__ = (function (){var statearr_69331 = f__58505__auto__.call(null);
(statearr_69331[(6)] = c__58504__auto__);

return statearr_69331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__,jobs,results,process,async))
);

return c__58504__auto__;
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
var G__69391 = arguments.length;
switch (G__69391) {
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
var G__69394 = arguments.length;
switch (G__69394) {
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
var G__69397 = arguments.length;
switch (G__69397) {
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
var c__58504__auto___69446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___69446,tc,fc){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___69446,tc,fc){
return (function (state_69423){
var state_val_69424 = (state_69423[(1)]);
if((state_val_69424 === (7))){
var inst_69419 = (state_69423[(2)]);
var state_69423__$1 = state_69423;
var statearr_69425_69447 = state_69423__$1;
(statearr_69425_69447[(2)] = inst_69419);

(statearr_69425_69447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (1))){
var state_69423__$1 = state_69423;
var statearr_69426_69448 = state_69423__$1;
(statearr_69426_69448[(2)] = null);

(statearr_69426_69448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (4))){
var inst_69400 = (state_69423[(7)]);
var inst_69400__$1 = (state_69423[(2)]);
var inst_69401 = (inst_69400__$1 == null);
var state_69423__$1 = (function (){var statearr_69427 = state_69423;
(statearr_69427[(7)] = inst_69400__$1);

return statearr_69427;
})();
if(cljs.core.truth_(inst_69401)){
var statearr_69428_69449 = state_69423__$1;
(statearr_69428_69449[(1)] = (5));

} else {
var statearr_69429_69450 = state_69423__$1;
(statearr_69429_69450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (13))){
var state_69423__$1 = state_69423;
var statearr_69430_69451 = state_69423__$1;
(statearr_69430_69451[(2)] = null);

(statearr_69430_69451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (6))){
var inst_69400 = (state_69423[(7)]);
var inst_69406 = p.call(null,inst_69400);
var state_69423__$1 = state_69423;
if(cljs.core.truth_(inst_69406)){
var statearr_69431_69452 = state_69423__$1;
(statearr_69431_69452[(1)] = (9));

} else {
var statearr_69432_69453 = state_69423__$1;
(statearr_69432_69453[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (3))){
var inst_69421 = (state_69423[(2)]);
var state_69423__$1 = state_69423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69423__$1,inst_69421);
} else {
if((state_val_69424 === (12))){
var state_69423__$1 = state_69423;
var statearr_69433_69454 = state_69423__$1;
(statearr_69433_69454[(2)] = null);

(statearr_69433_69454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (2))){
var state_69423__$1 = state_69423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69423__$1,(4),ch);
} else {
if((state_val_69424 === (11))){
var inst_69400 = (state_69423[(7)]);
var inst_69410 = (state_69423[(2)]);
var state_69423__$1 = state_69423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69423__$1,(8),inst_69410,inst_69400);
} else {
if((state_val_69424 === (9))){
var state_69423__$1 = state_69423;
var statearr_69434_69455 = state_69423__$1;
(statearr_69434_69455[(2)] = tc);

(statearr_69434_69455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (5))){
var inst_69403 = cljs.core.async.close_BANG_.call(null,tc);
var inst_69404 = cljs.core.async.close_BANG_.call(null,fc);
var state_69423__$1 = (function (){var statearr_69435 = state_69423;
(statearr_69435[(8)] = inst_69403);

return statearr_69435;
})();
var statearr_69436_69456 = state_69423__$1;
(statearr_69436_69456[(2)] = inst_69404);

(statearr_69436_69456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (14))){
var inst_69417 = (state_69423[(2)]);
var state_69423__$1 = state_69423;
var statearr_69437_69457 = state_69423__$1;
(statearr_69437_69457[(2)] = inst_69417);

(statearr_69437_69457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (10))){
var state_69423__$1 = state_69423;
var statearr_69438_69458 = state_69423__$1;
(statearr_69438_69458[(2)] = fc);

(statearr_69438_69458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69424 === (8))){
var inst_69412 = (state_69423[(2)]);
var state_69423__$1 = state_69423;
if(cljs.core.truth_(inst_69412)){
var statearr_69439_69459 = state_69423__$1;
(statearr_69439_69459[(1)] = (12));

} else {
var statearr_69440_69460 = state_69423__$1;
(statearr_69440_69460[(1)] = (13));

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
});})(c__58504__auto___69446,tc,fc))
;
return ((function (switch__58437__auto__,c__58504__auto___69446,tc,fc){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_69441 = [null,null,null,null,null,null,null,null,null];
(statearr_69441[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_69441[(1)] = (1));

return statearr_69441;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_69423){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69442){if((e69442 instanceof Object)){
var ex__58441__auto__ = e69442;
var statearr_69443_69461 = state_69423;
(statearr_69443_69461[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69462 = state_69423;
state_69423 = G__69462;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_69423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_69423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___69446,tc,fc))
})();
var state__58506__auto__ = (function (){var statearr_69444 = f__58505__auto__.call(null);
(statearr_69444[(6)] = c__58504__auto___69446);

return statearr_69444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___69446,tc,fc))
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
var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__){
return (function (state_69483){
var state_val_69484 = (state_69483[(1)]);
if((state_val_69484 === (7))){
var inst_69479 = (state_69483[(2)]);
var state_69483__$1 = state_69483;
var statearr_69485_69503 = state_69483__$1;
(statearr_69485_69503[(2)] = inst_69479);

(statearr_69485_69503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69484 === (1))){
var inst_69463 = init;
var state_69483__$1 = (function (){var statearr_69486 = state_69483;
(statearr_69486[(7)] = inst_69463);

return statearr_69486;
})();
var statearr_69487_69504 = state_69483__$1;
(statearr_69487_69504[(2)] = null);

(statearr_69487_69504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69484 === (4))){
var inst_69466 = (state_69483[(8)]);
var inst_69466__$1 = (state_69483[(2)]);
var inst_69467 = (inst_69466__$1 == null);
var state_69483__$1 = (function (){var statearr_69488 = state_69483;
(statearr_69488[(8)] = inst_69466__$1);

return statearr_69488;
})();
if(cljs.core.truth_(inst_69467)){
var statearr_69489_69505 = state_69483__$1;
(statearr_69489_69505[(1)] = (5));

} else {
var statearr_69490_69506 = state_69483__$1;
(statearr_69490_69506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69484 === (6))){
var inst_69463 = (state_69483[(7)]);
var inst_69470 = (state_69483[(9)]);
var inst_69466 = (state_69483[(8)]);
var inst_69470__$1 = f.call(null,inst_69463,inst_69466);
var inst_69471 = cljs.core.reduced_QMARK_.call(null,inst_69470__$1);
var state_69483__$1 = (function (){var statearr_69491 = state_69483;
(statearr_69491[(9)] = inst_69470__$1);

return statearr_69491;
})();
if(inst_69471){
var statearr_69492_69507 = state_69483__$1;
(statearr_69492_69507[(1)] = (8));

} else {
var statearr_69493_69508 = state_69483__$1;
(statearr_69493_69508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69484 === (3))){
var inst_69481 = (state_69483[(2)]);
var state_69483__$1 = state_69483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69483__$1,inst_69481);
} else {
if((state_val_69484 === (2))){
var state_69483__$1 = state_69483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69483__$1,(4),ch);
} else {
if((state_val_69484 === (9))){
var inst_69470 = (state_69483[(9)]);
var inst_69463 = inst_69470;
var state_69483__$1 = (function (){var statearr_69494 = state_69483;
(statearr_69494[(7)] = inst_69463);

return statearr_69494;
})();
var statearr_69495_69509 = state_69483__$1;
(statearr_69495_69509[(2)] = null);

(statearr_69495_69509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69484 === (5))){
var inst_69463 = (state_69483[(7)]);
var state_69483__$1 = state_69483;
var statearr_69496_69510 = state_69483__$1;
(statearr_69496_69510[(2)] = inst_69463);

(statearr_69496_69510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69484 === (10))){
var inst_69477 = (state_69483[(2)]);
var state_69483__$1 = state_69483;
var statearr_69497_69511 = state_69483__$1;
(statearr_69497_69511[(2)] = inst_69477);

(statearr_69497_69511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69484 === (8))){
var inst_69470 = (state_69483[(9)]);
var inst_69473 = cljs.core.deref.call(null,inst_69470);
var state_69483__$1 = state_69483;
var statearr_69498_69512 = state_69483__$1;
(statearr_69498_69512[(2)] = inst_69473);

(statearr_69498_69512[(1)] = (10));


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
});})(c__58504__auto__))
;
return ((function (switch__58437__auto__,c__58504__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__58438__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58438__auto____0 = (function (){
var statearr_69499 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69499[(0)] = cljs$core$async$reduce_$_state_machine__58438__auto__);

(statearr_69499[(1)] = (1));

return statearr_69499;
});
var cljs$core$async$reduce_$_state_machine__58438__auto____1 = (function (state_69483){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69500){if((e69500 instanceof Object)){
var ex__58441__auto__ = e69500;
var statearr_69501_69513 = state_69483;
(statearr_69501_69513[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69514 = state_69483;
state_69483 = G__69514;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58438__auto__ = function(state_69483){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58438__auto____1.call(this,state_69483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58438__auto____0;
cljs$core$async$reduce_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58438__auto____1;
return cljs$core$async$reduce_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__))
})();
var state__58506__auto__ = (function (){var statearr_69502 = f__58505__auto__.call(null);
(statearr_69502[(6)] = c__58504__auto__);

return statearr_69502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__))
);

return c__58504__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__,f__$1){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__,f__$1){
return (function (state_69520){
var state_val_69521 = (state_69520[(1)]);
if((state_val_69521 === (1))){
var inst_69515 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_69520__$1 = state_69520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69520__$1,(2),inst_69515);
} else {
if((state_val_69521 === (2))){
var inst_69517 = (state_69520[(2)]);
var inst_69518 = f__$1.call(null,inst_69517);
var state_69520__$1 = state_69520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69520__$1,inst_69518);
} else {
return null;
}
}
});})(c__58504__auto__,f__$1))
;
return ((function (switch__58437__auto__,c__58504__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__58438__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58438__auto____0 = (function (){
var statearr_69522 = [null,null,null,null,null,null,null];
(statearr_69522[(0)] = cljs$core$async$transduce_$_state_machine__58438__auto__);

(statearr_69522[(1)] = (1));

return statearr_69522;
});
var cljs$core$async$transduce_$_state_machine__58438__auto____1 = (function (state_69520){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69523){if((e69523 instanceof Object)){
var ex__58441__auto__ = e69523;
var statearr_69524_69526 = state_69520;
(statearr_69524_69526[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69527 = state_69520;
state_69520 = G__69527;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58438__auto__ = function(state_69520){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58438__auto____1.call(this,state_69520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58438__auto____0;
cljs$core$async$transduce_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58438__auto____1;
return cljs$core$async$transduce_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__,f__$1))
})();
var state__58506__auto__ = (function (){var statearr_69525 = f__58505__auto__.call(null);
(statearr_69525[(6)] = c__58504__auto__);

return statearr_69525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__,f__$1))
);

return c__58504__auto__;
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
var G__69529 = arguments.length;
switch (G__69529) {
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
var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__){
return (function (state_69554){
var state_val_69555 = (state_69554[(1)]);
if((state_val_69555 === (7))){
var inst_69536 = (state_69554[(2)]);
var state_69554__$1 = state_69554;
var statearr_69556_69577 = state_69554__$1;
(statearr_69556_69577[(2)] = inst_69536);

(statearr_69556_69577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (1))){
var inst_69530 = cljs.core.seq.call(null,coll);
var inst_69531 = inst_69530;
var state_69554__$1 = (function (){var statearr_69557 = state_69554;
(statearr_69557[(7)] = inst_69531);

return statearr_69557;
})();
var statearr_69558_69578 = state_69554__$1;
(statearr_69558_69578[(2)] = null);

(statearr_69558_69578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (4))){
var inst_69531 = (state_69554[(7)]);
var inst_69534 = cljs.core.first.call(null,inst_69531);
var state_69554__$1 = state_69554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69554__$1,(7),ch,inst_69534);
} else {
if((state_val_69555 === (13))){
var inst_69548 = (state_69554[(2)]);
var state_69554__$1 = state_69554;
var statearr_69559_69579 = state_69554__$1;
(statearr_69559_69579[(2)] = inst_69548);

(statearr_69559_69579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (6))){
var inst_69539 = (state_69554[(2)]);
var state_69554__$1 = state_69554;
if(cljs.core.truth_(inst_69539)){
var statearr_69560_69580 = state_69554__$1;
(statearr_69560_69580[(1)] = (8));

} else {
var statearr_69561_69581 = state_69554__$1;
(statearr_69561_69581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (3))){
var inst_69552 = (state_69554[(2)]);
var state_69554__$1 = state_69554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69554__$1,inst_69552);
} else {
if((state_val_69555 === (12))){
var state_69554__$1 = state_69554;
var statearr_69562_69582 = state_69554__$1;
(statearr_69562_69582[(2)] = null);

(statearr_69562_69582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (2))){
var inst_69531 = (state_69554[(7)]);
var state_69554__$1 = state_69554;
if(cljs.core.truth_(inst_69531)){
var statearr_69563_69583 = state_69554__$1;
(statearr_69563_69583[(1)] = (4));

} else {
var statearr_69564_69584 = state_69554__$1;
(statearr_69564_69584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (11))){
var inst_69545 = cljs.core.async.close_BANG_.call(null,ch);
var state_69554__$1 = state_69554;
var statearr_69565_69585 = state_69554__$1;
(statearr_69565_69585[(2)] = inst_69545);

(statearr_69565_69585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (9))){
var state_69554__$1 = state_69554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69566_69586 = state_69554__$1;
(statearr_69566_69586[(1)] = (11));

} else {
var statearr_69567_69587 = state_69554__$1;
(statearr_69567_69587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (5))){
var inst_69531 = (state_69554[(7)]);
var state_69554__$1 = state_69554;
var statearr_69568_69588 = state_69554__$1;
(statearr_69568_69588[(2)] = inst_69531);

(statearr_69568_69588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (10))){
var inst_69550 = (state_69554[(2)]);
var state_69554__$1 = state_69554;
var statearr_69569_69589 = state_69554__$1;
(statearr_69569_69589[(2)] = inst_69550);

(statearr_69569_69589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69555 === (8))){
var inst_69531 = (state_69554[(7)]);
var inst_69541 = cljs.core.next.call(null,inst_69531);
var inst_69531__$1 = inst_69541;
var state_69554__$1 = (function (){var statearr_69570 = state_69554;
(statearr_69570[(7)] = inst_69531__$1);

return statearr_69570;
})();
var statearr_69571_69590 = state_69554__$1;
(statearr_69571_69590[(2)] = null);

(statearr_69571_69590[(1)] = (2));


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
});})(c__58504__auto__))
;
return ((function (switch__58437__auto__,c__58504__auto__){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_69572 = [null,null,null,null,null,null,null,null];
(statearr_69572[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_69572[(1)] = (1));

return statearr_69572;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_69554){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69573){if((e69573 instanceof Object)){
var ex__58441__auto__ = e69573;
var statearr_69574_69591 = state_69554;
(statearr_69574_69591[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69592 = state_69554;
state_69554 = G__69592;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_69554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_69554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__))
})();
var state__58506__auto__ = (function (){var statearr_69575 = f__58505__auto__.call(null);
(statearr_69575[(6)] = c__58504__auto__);

return statearr_69575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__))
);

return c__58504__auto__;
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
var x__41293__auto__ = (((_ == null))?null:_);
var m__41294__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,_);
} else {
var m__41294__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,_);
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
var x__41293__auto__ = (((m == null))?null:m);
var m__41294__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__41294__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__41293__auto__ = (((m == null))?null:m);
var m__41294__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,m,ch);
} else {
var m__41294__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,m,ch);
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
var x__41293__auto__ = (((m == null))?null:m);
var m__41294__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,m);
} else {
var m__41294__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async69593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69593 = (function (ch,cs,meta69594){
this.ch = ch;
this.cs = cs;
this.meta69594 = meta69594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_69595,meta69594__$1){
var self__ = this;
var _69595__$1 = this;
return (new cljs.core.async.t_cljs$core$async69593(self__.ch,self__.cs,meta69594__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async69593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_69595){
var self__ = this;
var _69595__$1 = this;
return self__.meta69594;
});})(cs))
;

cljs.core.async.t_cljs$core$async69593.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async69593.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69593.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69593.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69593.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69593.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69594","meta69594",701439554,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async69593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69593";

cljs.core.async.t_cljs$core$async69593.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async69593");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async69593 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async69593(ch__$1,cs__$1,meta69594){
return (new cljs.core.async.t_cljs$core$async69593(ch__$1,cs__$1,meta69594));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async69593(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__58504__auto___69815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___69815,cs,m,dchan,dctr,done){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___69815,cs,m,dchan,dctr,done){
return (function (state_69730){
var state_val_69731 = (state_69730[(1)]);
if((state_val_69731 === (7))){
var inst_69726 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69732_69816 = state_69730__$1;
(statearr_69732_69816[(2)] = inst_69726);

(statearr_69732_69816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (20))){
var inst_69629 = (state_69730[(7)]);
var inst_69641 = cljs.core.first.call(null,inst_69629);
var inst_69642 = cljs.core.nth.call(null,inst_69641,(0),null);
var inst_69643 = cljs.core.nth.call(null,inst_69641,(1),null);
var state_69730__$1 = (function (){var statearr_69733 = state_69730;
(statearr_69733[(8)] = inst_69642);

return statearr_69733;
})();
if(cljs.core.truth_(inst_69643)){
var statearr_69734_69817 = state_69730__$1;
(statearr_69734_69817[(1)] = (22));

} else {
var statearr_69735_69818 = state_69730__$1;
(statearr_69735_69818[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (27))){
var inst_69673 = (state_69730[(9)]);
var inst_69598 = (state_69730[(10)]);
var inst_69671 = (state_69730[(11)]);
var inst_69678 = (state_69730[(12)]);
var inst_69678__$1 = cljs.core._nth.call(null,inst_69671,inst_69673);
var inst_69679 = cljs.core.async.put_BANG_.call(null,inst_69678__$1,inst_69598,done);
var state_69730__$1 = (function (){var statearr_69736 = state_69730;
(statearr_69736[(12)] = inst_69678__$1);

return statearr_69736;
})();
if(cljs.core.truth_(inst_69679)){
var statearr_69737_69819 = state_69730__$1;
(statearr_69737_69819[(1)] = (30));

} else {
var statearr_69738_69820 = state_69730__$1;
(statearr_69738_69820[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (1))){
var state_69730__$1 = state_69730;
var statearr_69739_69821 = state_69730__$1;
(statearr_69739_69821[(2)] = null);

(statearr_69739_69821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (24))){
var inst_69629 = (state_69730[(7)]);
var inst_69648 = (state_69730[(2)]);
var inst_69649 = cljs.core.next.call(null,inst_69629);
var inst_69607 = inst_69649;
var inst_69608 = null;
var inst_69609 = (0);
var inst_69610 = (0);
var state_69730__$1 = (function (){var statearr_69740 = state_69730;
(statearr_69740[(13)] = inst_69648);

(statearr_69740[(14)] = inst_69608);

(statearr_69740[(15)] = inst_69609);

(statearr_69740[(16)] = inst_69610);

(statearr_69740[(17)] = inst_69607);

return statearr_69740;
})();
var statearr_69741_69822 = state_69730__$1;
(statearr_69741_69822[(2)] = null);

(statearr_69741_69822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (39))){
var state_69730__$1 = state_69730;
var statearr_69745_69823 = state_69730__$1;
(statearr_69745_69823[(2)] = null);

(statearr_69745_69823[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (4))){
var inst_69598 = (state_69730[(10)]);
var inst_69598__$1 = (state_69730[(2)]);
var inst_69599 = (inst_69598__$1 == null);
var state_69730__$1 = (function (){var statearr_69746 = state_69730;
(statearr_69746[(10)] = inst_69598__$1);

return statearr_69746;
})();
if(cljs.core.truth_(inst_69599)){
var statearr_69747_69824 = state_69730__$1;
(statearr_69747_69824[(1)] = (5));

} else {
var statearr_69748_69825 = state_69730__$1;
(statearr_69748_69825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (15))){
var inst_69608 = (state_69730[(14)]);
var inst_69609 = (state_69730[(15)]);
var inst_69610 = (state_69730[(16)]);
var inst_69607 = (state_69730[(17)]);
var inst_69625 = (state_69730[(2)]);
var inst_69626 = (inst_69610 + (1));
var tmp69742 = inst_69608;
var tmp69743 = inst_69609;
var tmp69744 = inst_69607;
var inst_69607__$1 = tmp69744;
var inst_69608__$1 = tmp69742;
var inst_69609__$1 = tmp69743;
var inst_69610__$1 = inst_69626;
var state_69730__$1 = (function (){var statearr_69749 = state_69730;
(statearr_69749[(14)] = inst_69608__$1);

(statearr_69749[(15)] = inst_69609__$1);

(statearr_69749[(16)] = inst_69610__$1);

(statearr_69749[(18)] = inst_69625);

(statearr_69749[(17)] = inst_69607__$1);

return statearr_69749;
})();
var statearr_69750_69826 = state_69730__$1;
(statearr_69750_69826[(2)] = null);

(statearr_69750_69826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (21))){
var inst_69652 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69754_69827 = state_69730__$1;
(statearr_69754_69827[(2)] = inst_69652);

(statearr_69754_69827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (31))){
var inst_69678 = (state_69730[(12)]);
var inst_69682 = done.call(null,null);
var inst_69683 = cljs.core.async.untap_STAR_.call(null,m,inst_69678);
var state_69730__$1 = (function (){var statearr_69755 = state_69730;
(statearr_69755[(19)] = inst_69682);

return statearr_69755;
})();
var statearr_69756_69828 = state_69730__$1;
(statearr_69756_69828[(2)] = inst_69683);

(statearr_69756_69828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (32))){
var inst_69670 = (state_69730[(20)]);
var inst_69673 = (state_69730[(9)]);
var inst_69672 = (state_69730[(21)]);
var inst_69671 = (state_69730[(11)]);
var inst_69685 = (state_69730[(2)]);
var inst_69686 = (inst_69673 + (1));
var tmp69751 = inst_69670;
var tmp69752 = inst_69672;
var tmp69753 = inst_69671;
var inst_69670__$1 = tmp69751;
var inst_69671__$1 = tmp69753;
var inst_69672__$1 = tmp69752;
var inst_69673__$1 = inst_69686;
var state_69730__$1 = (function (){var statearr_69757 = state_69730;
(statearr_69757[(20)] = inst_69670__$1);

(statearr_69757[(9)] = inst_69673__$1);

(statearr_69757[(21)] = inst_69672__$1);

(statearr_69757[(22)] = inst_69685);

(statearr_69757[(11)] = inst_69671__$1);

return statearr_69757;
})();
var statearr_69758_69829 = state_69730__$1;
(statearr_69758_69829[(2)] = null);

(statearr_69758_69829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (40))){
var inst_69698 = (state_69730[(23)]);
var inst_69702 = done.call(null,null);
var inst_69703 = cljs.core.async.untap_STAR_.call(null,m,inst_69698);
var state_69730__$1 = (function (){var statearr_69759 = state_69730;
(statearr_69759[(24)] = inst_69702);

return statearr_69759;
})();
var statearr_69760_69830 = state_69730__$1;
(statearr_69760_69830[(2)] = inst_69703);

(statearr_69760_69830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (33))){
var inst_69689 = (state_69730[(25)]);
var inst_69691 = cljs.core.chunked_seq_QMARK_.call(null,inst_69689);
var state_69730__$1 = state_69730;
if(inst_69691){
var statearr_69761_69831 = state_69730__$1;
(statearr_69761_69831[(1)] = (36));

} else {
var statearr_69762_69832 = state_69730__$1;
(statearr_69762_69832[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (13))){
var inst_69619 = (state_69730[(26)]);
var inst_69622 = cljs.core.async.close_BANG_.call(null,inst_69619);
var state_69730__$1 = state_69730;
var statearr_69763_69833 = state_69730__$1;
(statearr_69763_69833[(2)] = inst_69622);

(statearr_69763_69833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (22))){
var inst_69642 = (state_69730[(8)]);
var inst_69645 = cljs.core.async.close_BANG_.call(null,inst_69642);
var state_69730__$1 = state_69730;
var statearr_69764_69834 = state_69730__$1;
(statearr_69764_69834[(2)] = inst_69645);

(statearr_69764_69834[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (36))){
var inst_69689 = (state_69730[(25)]);
var inst_69693 = cljs.core.chunk_first.call(null,inst_69689);
var inst_69694 = cljs.core.chunk_rest.call(null,inst_69689);
var inst_69695 = cljs.core.count.call(null,inst_69693);
var inst_69670 = inst_69694;
var inst_69671 = inst_69693;
var inst_69672 = inst_69695;
var inst_69673 = (0);
var state_69730__$1 = (function (){var statearr_69765 = state_69730;
(statearr_69765[(20)] = inst_69670);

(statearr_69765[(9)] = inst_69673);

(statearr_69765[(21)] = inst_69672);

(statearr_69765[(11)] = inst_69671);

return statearr_69765;
})();
var statearr_69766_69835 = state_69730__$1;
(statearr_69766_69835[(2)] = null);

(statearr_69766_69835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (41))){
var inst_69689 = (state_69730[(25)]);
var inst_69705 = (state_69730[(2)]);
var inst_69706 = cljs.core.next.call(null,inst_69689);
var inst_69670 = inst_69706;
var inst_69671 = null;
var inst_69672 = (0);
var inst_69673 = (0);
var state_69730__$1 = (function (){var statearr_69767 = state_69730;
(statearr_69767[(20)] = inst_69670);

(statearr_69767[(9)] = inst_69673);

(statearr_69767[(27)] = inst_69705);

(statearr_69767[(21)] = inst_69672);

(statearr_69767[(11)] = inst_69671);

return statearr_69767;
})();
var statearr_69768_69836 = state_69730__$1;
(statearr_69768_69836[(2)] = null);

(statearr_69768_69836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (43))){
var state_69730__$1 = state_69730;
var statearr_69769_69837 = state_69730__$1;
(statearr_69769_69837[(2)] = null);

(statearr_69769_69837[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (29))){
var inst_69714 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69770_69838 = state_69730__$1;
(statearr_69770_69838[(2)] = inst_69714);

(statearr_69770_69838[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (44))){
var inst_69723 = (state_69730[(2)]);
var state_69730__$1 = (function (){var statearr_69771 = state_69730;
(statearr_69771[(28)] = inst_69723);

return statearr_69771;
})();
var statearr_69772_69839 = state_69730__$1;
(statearr_69772_69839[(2)] = null);

(statearr_69772_69839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (6))){
var inst_69662 = (state_69730[(29)]);
var inst_69661 = cljs.core.deref.call(null,cs);
var inst_69662__$1 = cljs.core.keys.call(null,inst_69661);
var inst_69663 = cljs.core.count.call(null,inst_69662__$1);
var inst_69664 = cljs.core.reset_BANG_.call(null,dctr,inst_69663);
var inst_69669 = cljs.core.seq.call(null,inst_69662__$1);
var inst_69670 = inst_69669;
var inst_69671 = null;
var inst_69672 = (0);
var inst_69673 = (0);
var state_69730__$1 = (function (){var statearr_69773 = state_69730;
(statearr_69773[(29)] = inst_69662__$1);

(statearr_69773[(20)] = inst_69670);

(statearr_69773[(9)] = inst_69673);

(statearr_69773[(21)] = inst_69672);

(statearr_69773[(11)] = inst_69671);

(statearr_69773[(30)] = inst_69664);

return statearr_69773;
})();
var statearr_69774_69840 = state_69730__$1;
(statearr_69774_69840[(2)] = null);

(statearr_69774_69840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (28))){
var inst_69670 = (state_69730[(20)]);
var inst_69689 = (state_69730[(25)]);
var inst_69689__$1 = cljs.core.seq.call(null,inst_69670);
var state_69730__$1 = (function (){var statearr_69775 = state_69730;
(statearr_69775[(25)] = inst_69689__$1);

return statearr_69775;
})();
if(inst_69689__$1){
var statearr_69776_69841 = state_69730__$1;
(statearr_69776_69841[(1)] = (33));

} else {
var statearr_69777_69842 = state_69730__$1;
(statearr_69777_69842[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (25))){
var inst_69673 = (state_69730[(9)]);
var inst_69672 = (state_69730[(21)]);
var inst_69675 = (inst_69673 < inst_69672);
var inst_69676 = inst_69675;
var state_69730__$1 = state_69730;
if(cljs.core.truth_(inst_69676)){
var statearr_69778_69843 = state_69730__$1;
(statearr_69778_69843[(1)] = (27));

} else {
var statearr_69779_69844 = state_69730__$1;
(statearr_69779_69844[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (34))){
var state_69730__$1 = state_69730;
var statearr_69780_69845 = state_69730__$1;
(statearr_69780_69845[(2)] = null);

(statearr_69780_69845[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (17))){
var state_69730__$1 = state_69730;
var statearr_69781_69846 = state_69730__$1;
(statearr_69781_69846[(2)] = null);

(statearr_69781_69846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (3))){
var inst_69728 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69730__$1,inst_69728);
} else {
if((state_val_69731 === (12))){
var inst_69657 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69782_69847 = state_69730__$1;
(statearr_69782_69847[(2)] = inst_69657);

(statearr_69782_69847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (2))){
var state_69730__$1 = state_69730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69730__$1,(4),ch);
} else {
if((state_val_69731 === (23))){
var state_69730__$1 = state_69730;
var statearr_69783_69848 = state_69730__$1;
(statearr_69783_69848[(2)] = null);

(statearr_69783_69848[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (35))){
var inst_69712 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69784_69849 = state_69730__$1;
(statearr_69784_69849[(2)] = inst_69712);

(statearr_69784_69849[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (19))){
var inst_69629 = (state_69730[(7)]);
var inst_69633 = cljs.core.chunk_first.call(null,inst_69629);
var inst_69634 = cljs.core.chunk_rest.call(null,inst_69629);
var inst_69635 = cljs.core.count.call(null,inst_69633);
var inst_69607 = inst_69634;
var inst_69608 = inst_69633;
var inst_69609 = inst_69635;
var inst_69610 = (0);
var state_69730__$1 = (function (){var statearr_69785 = state_69730;
(statearr_69785[(14)] = inst_69608);

(statearr_69785[(15)] = inst_69609);

(statearr_69785[(16)] = inst_69610);

(statearr_69785[(17)] = inst_69607);

return statearr_69785;
})();
var statearr_69786_69850 = state_69730__$1;
(statearr_69786_69850[(2)] = null);

(statearr_69786_69850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (11))){
var inst_69629 = (state_69730[(7)]);
var inst_69607 = (state_69730[(17)]);
var inst_69629__$1 = cljs.core.seq.call(null,inst_69607);
var state_69730__$1 = (function (){var statearr_69787 = state_69730;
(statearr_69787[(7)] = inst_69629__$1);

return statearr_69787;
})();
if(inst_69629__$1){
var statearr_69788_69851 = state_69730__$1;
(statearr_69788_69851[(1)] = (16));

} else {
var statearr_69789_69852 = state_69730__$1;
(statearr_69789_69852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (9))){
var inst_69659 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69790_69853 = state_69730__$1;
(statearr_69790_69853[(2)] = inst_69659);

(statearr_69790_69853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (5))){
var inst_69605 = cljs.core.deref.call(null,cs);
var inst_69606 = cljs.core.seq.call(null,inst_69605);
var inst_69607 = inst_69606;
var inst_69608 = null;
var inst_69609 = (0);
var inst_69610 = (0);
var state_69730__$1 = (function (){var statearr_69791 = state_69730;
(statearr_69791[(14)] = inst_69608);

(statearr_69791[(15)] = inst_69609);

(statearr_69791[(16)] = inst_69610);

(statearr_69791[(17)] = inst_69607);

return statearr_69791;
})();
var statearr_69792_69854 = state_69730__$1;
(statearr_69792_69854[(2)] = null);

(statearr_69792_69854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (14))){
var state_69730__$1 = state_69730;
var statearr_69793_69855 = state_69730__$1;
(statearr_69793_69855[(2)] = null);

(statearr_69793_69855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (45))){
var inst_69720 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69794_69856 = state_69730__$1;
(statearr_69794_69856[(2)] = inst_69720);

(statearr_69794_69856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (26))){
var inst_69662 = (state_69730[(29)]);
var inst_69716 = (state_69730[(2)]);
var inst_69717 = cljs.core.seq.call(null,inst_69662);
var state_69730__$1 = (function (){var statearr_69795 = state_69730;
(statearr_69795[(31)] = inst_69716);

return statearr_69795;
})();
if(inst_69717){
var statearr_69796_69857 = state_69730__$1;
(statearr_69796_69857[(1)] = (42));

} else {
var statearr_69797_69858 = state_69730__$1;
(statearr_69797_69858[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (16))){
var inst_69629 = (state_69730[(7)]);
var inst_69631 = cljs.core.chunked_seq_QMARK_.call(null,inst_69629);
var state_69730__$1 = state_69730;
if(inst_69631){
var statearr_69798_69859 = state_69730__$1;
(statearr_69798_69859[(1)] = (19));

} else {
var statearr_69799_69860 = state_69730__$1;
(statearr_69799_69860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (38))){
var inst_69709 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69800_69861 = state_69730__$1;
(statearr_69800_69861[(2)] = inst_69709);

(statearr_69800_69861[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (30))){
var state_69730__$1 = state_69730;
var statearr_69801_69862 = state_69730__$1;
(statearr_69801_69862[(2)] = null);

(statearr_69801_69862[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (10))){
var inst_69608 = (state_69730[(14)]);
var inst_69610 = (state_69730[(16)]);
var inst_69618 = cljs.core._nth.call(null,inst_69608,inst_69610);
var inst_69619 = cljs.core.nth.call(null,inst_69618,(0),null);
var inst_69620 = cljs.core.nth.call(null,inst_69618,(1),null);
var state_69730__$1 = (function (){var statearr_69802 = state_69730;
(statearr_69802[(26)] = inst_69619);

return statearr_69802;
})();
if(cljs.core.truth_(inst_69620)){
var statearr_69803_69863 = state_69730__$1;
(statearr_69803_69863[(1)] = (13));

} else {
var statearr_69804_69864 = state_69730__$1;
(statearr_69804_69864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (18))){
var inst_69655 = (state_69730[(2)]);
var state_69730__$1 = state_69730;
var statearr_69805_69865 = state_69730__$1;
(statearr_69805_69865[(2)] = inst_69655);

(statearr_69805_69865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (42))){
var state_69730__$1 = state_69730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69730__$1,(45),dchan);
} else {
if((state_val_69731 === (37))){
var inst_69698 = (state_69730[(23)]);
var inst_69598 = (state_69730[(10)]);
var inst_69689 = (state_69730[(25)]);
var inst_69698__$1 = cljs.core.first.call(null,inst_69689);
var inst_69699 = cljs.core.async.put_BANG_.call(null,inst_69698__$1,inst_69598,done);
var state_69730__$1 = (function (){var statearr_69806 = state_69730;
(statearr_69806[(23)] = inst_69698__$1);

return statearr_69806;
})();
if(cljs.core.truth_(inst_69699)){
var statearr_69807_69866 = state_69730__$1;
(statearr_69807_69866[(1)] = (39));

} else {
var statearr_69808_69867 = state_69730__$1;
(statearr_69808_69867[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69731 === (8))){
var inst_69609 = (state_69730[(15)]);
var inst_69610 = (state_69730[(16)]);
var inst_69612 = (inst_69610 < inst_69609);
var inst_69613 = inst_69612;
var state_69730__$1 = state_69730;
if(cljs.core.truth_(inst_69613)){
var statearr_69809_69868 = state_69730__$1;
(statearr_69809_69868[(1)] = (10));

} else {
var statearr_69810_69869 = state_69730__$1;
(statearr_69810_69869[(1)] = (11));

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
});})(c__58504__auto___69815,cs,m,dchan,dctr,done))
;
return ((function (switch__58437__auto__,c__58504__auto___69815,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__58438__auto__ = null;
var cljs$core$async$mult_$_state_machine__58438__auto____0 = (function (){
var statearr_69811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69811[(0)] = cljs$core$async$mult_$_state_machine__58438__auto__);

(statearr_69811[(1)] = (1));

return statearr_69811;
});
var cljs$core$async$mult_$_state_machine__58438__auto____1 = (function (state_69730){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e69812){if((e69812 instanceof Object)){
var ex__58441__auto__ = e69812;
var statearr_69813_69870 = state_69730;
(statearr_69813_69870[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69871 = state_69730;
state_69730 = G__69871;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58438__auto__ = function(state_69730){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58438__auto____1.call(this,state_69730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58438__auto____0;
cljs$core$async$mult_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58438__auto____1;
return cljs$core$async$mult_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___69815,cs,m,dchan,dctr,done))
})();
var state__58506__auto__ = (function (){var statearr_69814 = f__58505__auto__.call(null);
(statearr_69814[(6)] = c__58504__auto___69815);

return statearr_69814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___69815,cs,m,dchan,dctr,done))
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
var G__69873 = arguments.length;
switch (G__69873) {
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
var x__41293__auto__ = (((m == null))?null:m);
var m__41294__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,m,ch);
} else {
var m__41294__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,m,ch);
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
var x__41293__auto__ = (((m == null))?null:m);
var m__41294__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,m,ch);
} else {
var m__41294__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,m,ch);
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
var x__41293__auto__ = (((m == null))?null:m);
var m__41294__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,m);
} else {
var m__41294__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,m);
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
var x__41293__auto__ = (((m == null))?null:m);
var m__41294__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,m,state_map);
} else {
var m__41294__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,m,state_map);
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
var x__41293__auto__ = (((m == null))?null:m);
var m__41294__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,m,mode);
} else {
var m__41294__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42181__auto__ = [];
var len__42174__auto___69885 = arguments.length;
var i__42175__auto___69886 = (0);
while(true){
if((i__42175__auto___69886 < len__42174__auto___69885)){
args__42181__auto__.push((arguments[i__42175__auto___69886]));

var G__69887 = (i__42175__auto___69886 + (1));
i__42175__auto___69886 = G__69887;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((3) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42182__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__69879){
var map__69880 = p__69879;
var map__69880__$1 = ((((!((map__69880 == null)))?((((map__69880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69880):map__69880);
var opts = map__69880__$1;
var statearr_69882_69888 = state;
(statearr_69882_69888[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__69880,map__69880__$1,opts){
return (function (val){
var statearr_69883_69889 = state;
(statearr_69883_69889[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__69880,map__69880__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_69884_69890 = state;
(statearr_69884_69890[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq69875){
var G__69876 = cljs.core.first.call(null,seq69875);
var seq69875__$1 = cljs.core.next.call(null,seq69875);
var G__69877 = cljs.core.first.call(null,seq69875__$1);
var seq69875__$2 = cljs.core.next.call(null,seq69875__$1);
var G__69878 = cljs.core.first.call(null,seq69875__$2);
var seq69875__$3 = cljs.core.next.call(null,seq69875__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69876,G__69877,G__69878,seq69875__$3);
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
if(typeof cljs.core.async.t_cljs$core$async69891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69891 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta69892){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta69892 = meta69892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69893,meta69892__$1){
var self__ = this;
var _69893__$1 = this;
return (new cljs.core.async.t_cljs$core$async69891(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta69892__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69893){
var self__ = this;
var _69893__$1 = this;
return self__.meta69892;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async69891.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta69892","meta69892",1071106645,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69891";

cljs.core.async.t_cljs$core$async69891.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async69891");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async69891 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async69891(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta69892){
return (new cljs.core.async.t_cljs$core$async69891(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta69892));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async69891(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58504__auto___70055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_69995){
var state_val_69996 = (state_69995[(1)]);
if((state_val_69996 === (7))){
var inst_69910 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
var statearr_69997_70056 = state_69995__$1;
(statearr_69997_70056[(2)] = inst_69910);

(statearr_69997_70056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (20))){
var inst_69922 = (state_69995[(7)]);
var state_69995__$1 = state_69995;
var statearr_69998_70057 = state_69995__$1;
(statearr_69998_70057[(2)] = inst_69922);

(statearr_69998_70057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (27))){
var state_69995__$1 = state_69995;
var statearr_69999_70058 = state_69995__$1;
(statearr_69999_70058[(2)] = null);

(statearr_69999_70058[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (1))){
var inst_69897 = (state_69995[(8)]);
var inst_69897__$1 = calc_state.call(null);
var inst_69899 = (inst_69897__$1 == null);
var inst_69900 = cljs.core.not.call(null,inst_69899);
var state_69995__$1 = (function (){var statearr_70000 = state_69995;
(statearr_70000[(8)] = inst_69897__$1);

return statearr_70000;
})();
if(inst_69900){
var statearr_70001_70059 = state_69995__$1;
(statearr_70001_70059[(1)] = (2));

} else {
var statearr_70002_70060 = state_69995__$1;
(statearr_70002_70060[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (24))){
var inst_69969 = (state_69995[(9)]);
var inst_69955 = (state_69995[(10)]);
var inst_69946 = (state_69995[(11)]);
var inst_69969__$1 = inst_69946.call(null,inst_69955);
var state_69995__$1 = (function (){var statearr_70003 = state_69995;
(statearr_70003[(9)] = inst_69969__$1);

return statearr_70003;
})();
if(cljs.core.truth_(inst_69969__$1)){
var statearr_70004_70061 = state_69995__$1;
(statearr_70004_70061[(1)] = (29));

} else {
var statearr_70005_70062 = state_69995__$1;
(statearr_70005_70062[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (4))){
var inst_69913 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
if(cljs.core.truth_(inst_69913)){
var statearr_70006_70063 = state_69995__$1;
(statearr_70006_70063[(1)] = (8));

} else {
var statearr_70007_70064 = state_69995__$1;
(statearr_70007_70064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (15))){
var inst_69940 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
if(cljs.core.truth_(inst_69940)){
var statearr_70008_70065 = state_69995__$1;
(statearr_70008_70065[(1)] = (19));

} else {
var statearr_70009_70066 = state_69995__$1;
(statearr_70009_70066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (21))){
var inst_69945 = (state_69995[(12)]);
var inst_69945__$1 = (state_69995[(2)]);
var inst_69946 = cljs.core.get.call(null,inst_69945__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69947 = cljs.core.get.call(null,inst_69945__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69948 = cljs.core.get.call(null,inst_69945__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_69995__$1 = (function (){var statearr_70010 = state_69995;
(statearr_70010[(12)] = inst_69945__$1);

(statearr_70010[(13)] = inst_69947);

(statearr_70010[(11)] = inst_69946);

return statearr_70010;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_69995__$1,(22),inst_69948);
} else {
if((state_val_69996 === (31))){
var inst_69977 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
if(cljs.core.truth_(inst_69977)){
var statearr_70011_70067 = state_69995__$1;
(statearr_70011_70067[(1)] = (32));

} else {
var statearr_70012_70068 = state_69995__$1;
(statearr_70012_70068[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (32))){
var inst_69954 = (state_69995[(14)]);
var state_69995__$1 = state_69995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69995__$1,(35),out,inst_69954);
} else {
if((state_val_69996 === (33))){
var inst_69945 = (state_69995[(12)]);
var inst_69922 = inst_69945;
var state_69995__$1 = (function (){var statearr_70013 = state_69995;
(statearr_70013[(7)] = inst_69922);

return statearr_70013;
})();
var statearr_70014_70069 = state_69995__$1;
(statearr_70014_70069[(2)] = null);

(statearr_70014_70069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (13))){
var inst_69922 = (state_69995[(7)]);
var inst_69929 = inst_69922.cljs$lang$protocol_mask$partition0$;
var inst_69930 = (inst_69929 & (64));
var inst_69931 = inst_69922.cljs$core$ISeq$;
var inst_69932 = (cljs.core.PROTOCOL_SENTINEL === inst_69931);
var inst_69933 = (inst_69930) || (inst_69932);
var state_69995__$1 = state_69995;
if(cljs.core.truth_(inst_69933)){
var statearr_70015_70070 = state_69995__$1;
(statearr_70015_70070[(1)] = (16));

} else {
var statearr_70016_70071 = state_69995__$1;
(statearr_70016_70071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (22))){
var inst_69954 = (state_69995[(14)]);
var inst_69955 = (state_69995[(10)]);
var inst_69953 = (state_69995[(2)]);
var inst_69954__$1 = cljs.core.nth.call(null,inst_69953,(0),null);
var inst_69955__$1 = cljs.core.nth.call(null,inst_69953,(1),null);
var inst_69956 = (inst_69954__$1 == null);
var inst_69957 = cljs.core._EQ_.call(null,inst_69955__$1,change);
var inst_69958 = (inst_69956) || (inst_69957);
var state_69995__$1 = (function (){var statearr_70017 = state_69995;
(statearr_70017[(14)] = inst_69954__$1);

(statearr_70017[(10)] = inst_69955__$1);

return statearr_70017;
})();
if(cljs.core.truth_(inst_69958)){
var statearr_70018_70072 = state_69995__$1;
(statearr_70018_70072[(1)] = (23));

} else {
var statearr_70019_70073 = state_69995__$1;
(statearr_70019_70073[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (36))){
var inst_69945 = (state_69995[(12)]);
var inst_69922 = inst_69945;
var state_69995__$1 = (function (){var statearr_70020 = state_69995;
(statearr_70020[(7)] = inst_69922);

return statearr_70020;
})();
var statearr_70021_70074 = state_69995__$1;
(statearr_70021_70074[(2)] = null);

(statearr_70021_70074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (29))){
var inst_69969 = (state_69995[(9)]);
var state_69995__$1 = state_69995;
var statearr_70022_70075 = state_69995__$1;
(statearr_70022_70075[(2)] = inst_69969);

(statearr_70022_70075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (6))){
var state_69995__$1 = state_69995;
var statearr_70023_70076 = state_69995__$1;
(statearr_70023_70076[(2)] = false);

(statearr_70023_70076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (28))){
var inst_69965 = (state_69995[(2)]);
var inst_69966 = calc_state.call(null);
var inst_69922 = inst_69966;
var state_69995__$1 = (function (){var statearr_70024 = state_69995;
(statearr_70024[(7)] = inst_69922);

(statearr_70024[(15)] = inst_69965);

return statearr_70024;
})();
var statearr_70025_70077 = state_69995__$1;
(statearr_70025_70077[(2)] = null);

(statearr_70025_70077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (25))){
var inst_69991 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
var statearr_70026_70078 = state_69995__$1;
(statearr_70026_70078[(2)] = inst_69991);

(statearr_70026_70078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (34))){
var inst_69989 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
var statearr_70027_70079 = state_69995__$1;
(statearr_70027_70079[(2)] = inst_69989);

(statearr_70027_70079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (17))){
var state_69995__$1 = state_69995;
var statearr_70028_70080 = state_69995__$1;
(statearr_70028_70080[(2)] = false);

(statearr_70028_70080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (3))){
var state_69995__$1 = state_69995;
var statearr_70029_70081 = state_69995__$1;
(statearr_70029_70081[(2)] = false);

(statearr_70029_70081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (12))){
var inst_69993 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69995__$1,inst_69993);
} else {
if((state_val_69996 === (2))){
var inst_69897 = (state_69995[(8)]);
var inst_69902 = inst_69897.cljs$lang$protocol_mask$partition0$;
var inst_69903 = (inst_69902 & (64));
var inst_69904 = inst_69897.cljs$core$ISeq$;
var inst_69905 = (cljs.core.PROTOCOL_SENTINEL === inst_69904);
var inst_69906 = (inst_69903) || (inst_69905);
var state_69995__$1 = state_69995;
if(cljs.core.truth_(inst_69906)){
var statearr_70030_70082 = state_69995__$1;
(statearr_70030_70082[(1)] = (5));

} else {
var statearr_70031_70083 = state_69995__$1;
(statearr_70031_70083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (23))){
var inst_69954 = (state_69995[(14)]);
var inst_69960 = (inst_69954 == null);
var state_69995__$1 = state_69995;
if(cljs.core.truth_(inst_69960)){
var statearr_70032_70084 = state_69995__$1;
(statearr_70032_70084[(1)] = (26));

} else {
var statearr_70033_70085 = state_69995__$1;
(statearr_70033_70085[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (35))){
var inst_69980 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
if(cljs.core.truth_(inst_69980)){
var statearr_70034_70086 = state_69995__$1;
(statearr_70034_70086[(1)] = (36));

} else {
var statearr_70035_70087 = state_69995__$1;
(statearr_70035_70087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (19))){
var inst_69922 = (state_69995[(7)]);
var inst_69942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69922);
var state_69995__$1 = state_69995;
var statearr_70036_70088 = state_69995__$1;
(statearr_70036_70088[(2)] = inst_69942);

(statearr_70036_70088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (11))){
var inst_69922 = (state_69995[(7)]);
var inst_69926 = (inst_69922 == null);
var inst_69927 = cljs.core.not.call(null,inst_69926);
var state_69995__$1 = state_69995;
if(inst_69927){
var statearr_70037_70089 = state_69995__$1;
(statearr_70037_70089[(1)] = (13));

} else {
var statearr_70038_70090 = state_69995__$1;
(statearr_70038_70090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (9))){
var inst_69897 = (state_69995[(8)]);
var state_69995__$1 = state_69995;
var statearr_70039_70091 = state_69995__$1;
(statearr_70039_70091[(2)] = inst_69897);

(statearr_70039_70091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (5))){
var state_69995__$1 = state_69995;
var statearr_70040_70092 = state_69995__$1;
(statearr_70040_70092[(2)] = true);

(statearr_70040_70092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (14))){
var state_69995__$1 = state_69995;
var statearr_70041_70093 = state_69995__$1;
(statearr_70041_70093[(2)] = false);

(statearr_70041_70093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (26))){
var inst_69955 = (state_69995[(10)]);
var inst_69962 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_69955);
var state_69995__$1 = state_69995;
var statearr_70042_70094 = state_69995__$1;
(statearr_70042_70094[(2)] = inst_69962);

(statearr_70042_70094[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (16))){
var state_69995__$1 = state_69995;
var statearr_70043_70095 = state_69995__$1;
(statearr_70043_70095[(2)] = true);

(statearr_70043_70095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (38))){
var inst_69985 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
var statearr_70044_70096 = state_69995__$1;
(statearr_70044_70096[(2)] = inst_69985);

(statearr_70044_70096[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (30))){
var inst_69955 = (state_69995[(10)]);
var inst_69947 = (state_69995[(13)]);
var inst_69946 = (state_69995[(11)]);
var inst_69972 = cljs.core.empty_QMARK_.call(null,inst_69946);
var inst_69973 = inst_69947.call(null,inst_69955);
var inst_69974 = cljs.core.not.call(null,inst_69973);
var inst_69975 = (inst_69972) && (inst_69974);
var state_69995__$1 = state_69995;
var statearr_70045_70097 = state_69995__$1;
(statearr_70045_70097[(2)] = inst_69975);

(statearr_70045_70097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (10))){
var inst_69897 = (state_69995[(8)]);
var inst_69918 = (state_69995[(2)]);
var inst_69919 = cljs.core.get.call(null,inst_69918,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69920 = cljs.core.get.call(null,inst_69918,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69921 = cljs.core.get.call(null,inst_69918,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_69922 = inst_69897;
var state_69995__$1 = (function (){var statearr_70046 = state_69995;
(statearr_70046[(16)] = inst_69919);

(statearr_70046[(7)] = inst_69922);

(statearr_70046[(17)] = inst_69920);

(statearr_70046[(18)] = inst_69921);

return statearr_70046;
})();
var statearr_70047_70098 = state_69995__$1;
(statearr_70047_70098[(2)] = null);

(statearr_70047_70098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (18))){
var inst_69937 = (state_69995[(2)]);
var state_69995__$1 = state_69995;
var statearr_70048_70099 = state_69995__$1;
(statearr_70048_70099[(2)] = inst_69937);

(statearr_70048_70099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (37))){
var state_69995__$1 = state_69995;
var statearr_70049_70100 = state_69995__$1;
(statearr_70049_70100[(2)] = null);

(statearr_70049_70100[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69996 === (8))){
var inst_69897 = (state_69995[(8)]);
var inst_69915 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69897);
var state_69995__$1 = state_69995;
var statearr_70050_70101 = state_69995__$1;
(statearr_70050_70101[(2)] = inst_69915);

(statearr_70050_70101[(1)] = (10));


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
});})(c__58504__auto___70055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__58437__auto__,c__58504__auto___70055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__58438__auto__ = null;
var cljs$core$async$mix_$_state_machine__58438__auto____0 = (function (){
var statearr_70051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70051[(0)] = cljs$core$async$mix_$_state_machine__58438__auto__);

(statearr_70051[(1)] = (1));

return statearr_70051;
});
var cljs$core$async$mix_$_state_machine__58438__auto____1 = (function (state_69995){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_69995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70052){if((e70052 instanceof Object)){
var ex__58441__auto__ = e70052;
var statearr_70053_70102 = state_69995;
(statearr_70053_70102[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70103 = state_69995;
state_69995 = G__70103;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58438__auto__ = function(state_69995){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58438__auto____1.call(this,state_69995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58438__auto____0;
cljs$core$async$mix_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58438__auto____1;
return cljs$core$async$mix_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__58506__auto__ = (function (){var statearr_70054 = f__58505__auto__.call(null);
(statearr_70054[(6)] = c__58504__auto___70055);

return statearr_70054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70055,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__41293__auto__ = (((p == null))?null:p);
var m__41294__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__41294__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__41293__auto__ = (((p == null))?null:p);
var m__41294__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,p,v,ch);
} else {
var m__41294__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__70105 = arguments.length;
switch (G__70105) {
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
var x__41293__auto__ = (((p == null))?null:p);
var m__41294__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,p);
} else {
var m__41294__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,p);
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
var x__41293__auto__ = (((p == null))?null:p);
var m__41294__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41293__auto__)]);
if(!((m__41294__auto__ == null))){
return m__41294__auto__.call(null,p,v);
} else {
var m__41294__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41294__auto____$1 == null))){
return m__41294__auto____$1.call(null,p,v);
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
var G__70109 = arguments.length;
switch (G__70109) {
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
var or__39642__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__39642__auto__,mults){
return (function (p1__70107_SHARP_){
if(cljs.core.truth_(p1__70107_SHARP_.call(null,topic))){
return p1__70107_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__70107_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__39642__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async70110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70110 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70111){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70111 = meta70111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_70112,meta70111__$1){
var self__ = this;
var _70112__$1 = this;
return (new cljs.core.async.t_cljs$core$async70110(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70111__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_70112){
var self__ = this;
var _70112__$1 = this;
return self__.meta70111;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70110.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70110.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70111","meta70111",2067438952,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70110";

cljs.core.async.t_cljs$core$async70110.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async70110");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async70110 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async70110(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70111){
return (new cljs.core.async.t_cljs$core$async70110(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70111));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async70110(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58504__auto___70230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70230,mults,ensure_mult,p){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70230,mults,ensure_mult,p){
return (function (state_70184){
var state_val_70185 = (state_70184[(1)]);
if((state_val_70185 === (7))){
var inst_70180 = (state_70184[(2)]);
var state_70184__$1 = state_70184;
var statearr_70186_70231 = state_70184__$1;
(statearr_70186_70231[(2)] = inst_70180);

(statearr_70186_70231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (20))){
var state_70184__$1 = state_70184;
var statearr_70187_70232 = state_70184__$1;
(statearr_70187_70232[(2)] = null);

(statearr_70187_70232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (1))){
var state_70184__$1 = state_70184;
var statearr_70188_70233 = state_70184__$1;
(statearr_70188_70233[(2)] = null);

(statearr_70188_70233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (24))){
var inst_70163 = (state_70184[(7)]);
var inst_70172 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_70163);
var state_70184__$1 = state_70184;
var statearr_70189_70234 = state_70184__$1;
(statearr_70189_70234[(2)] = inst_70172);

(statearr_70189_70234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (4))){
var inst_70115 = (state_70184[(8)]);
var inst_70115__$1 = (state_70184[(2)]);
var inst_70116 = (inst_70115__$1 == null);
var state_70184__$1 = (function (){var statearr_70190 = state_70184;
(statearr_70190[(8)] = inst_70115__$1);

return statearr_70190;
})();
if(cljs.core.truth_(inst_70116)){
var statearr_70191_70235 = state_70184__$1;
(statearr_70191_70235[(1)] = (5));

} else {
var statearr_70192_70236 = state_70184__$1;
(statearr_70192_70236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (15))){
var inst_70157 = (state_70184[(2)]);
var state_70184__$1 = state_70184;
var statearr_70193_70237 = state_70184__$1;
(statearr_70193_70237[(2)] = inst_70157);

(statearr_70193_70237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (21))){
var inst_70177 = (state_70184[(2)]);
var state_70184__$1 = (function (){var statearr_70194 = state_70184;
(statearr_70194[(9)] = inst_70177);

return statearr_70194;
})();
var statearr_70195_70238 = state_70184__$1;
(statearr_70195_70238[(2)] = null);

(statearr_70195_70238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (13))){
var inst_70139 = (state_70184[(10)]);
var inst_70141 = cljs.core.chunked_seq_QMARK_.call(null,inst_70139);
var state_70184__$1 = state_70184;
if(inst_70141){
var statearr_70196_70239 = state_70184__$1;
(statearr_70196_70239[(1)] = (16));

} else {
var statearr_70197_70240 = state_70184__$1;
(statearr_70197_70240[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (22))){
var inst_70169 = (state_70184[(2)]);
var state_70184__$1 = state_70184;
if(cljs.core.truth_(inst_70169)){
var statearr_70198_70241 = state_70184__$1;
(statearr_70198_70241[(1)] = (23));

} else {
var statearr_70199_70242 = state_70184__$1;
(statearr_70199_70242[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (6))){
var inst_70115 = (state_70184[(8)]);
var inst_70163 = (state_70184[(7)]);
var inst_70165 = (state_70184[(11)]);
var inst_70163__$1 = topic_fn.call(null,inst_70115);
var inst_70164 = cljs.core.deref.call(null,mults);
var inst_70165__$1 = cljs.core.get.call(null,inst_70164,inst_70163__$1);
var state_70184__$1 = (function (){var statearr_70200 = state_70184;
(statearr_70200[(7)] = inst_70163__$1);

(statearr_70200[(11)] = inst_70165__$1);

return statearr_70200;
})();
if(cljs.core.truth_(inst_70165__$1)){
var statearr_70201_70243 = state_70184__$1;
(statearr_70201_70243[(1)] = (19));

} else {
var statearr_70202_70244 = state_70184__$1;
(statearr_70202_70244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (25))){
var inst_70174 = (state_70184[(2)]);
var state_70184__$1 = state_70184;
var statearr_70203_70245 = state_70184__$1;
(statearr_70203_70245[(2)] = inst_70174);

(statearr_70203_70245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (17))){
var inst_70139 = (state_70184[(10)]);
var inst_70148 = cljs.core.first.call(null,inst_70139);
var inst_70149 = cljs.core.async.muxch_STAR_.call(null,inst_70148);
var inst_70150 = cljs.core.async.close_BANG_.call(null,inst_70149);
var inst_70151 = cljs.core.next.call(null,inst_70139);
var inst_70125 = inst_70151;
var inst_70126 = null;
var inst_70127 = (0);
var inst_70128 = (0);
var state_70184__$1 = (function (){var statearr_70204 = state_70184;
(statearr_70204[(12)] = inst_70126);

(statearr_70204[(13)] = inst_70128);

(statearr_70204[(14)] = inst_70125);

(statearr_70204[(15)] = inst_70127);

(statearr_70204[(16)] = inst_70150);

return statearr_70204;
})();
var statearr_70205_70246 = state_70184__$1;
(statearr_70205_70246[(2)] = null);

(statearr_70205_70246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (3))){
var inst_70182 = (state_70184[(2)]);
var state_70184__$1 = state_70184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70184__$1,inst_70182);
} else {
if((state_val_70185 === (12))){
var inst_70159 = (state_70184[(2)]);
var state_70184__$1 = state_70184;
var statearr_70206_70247 = state_70184__$1;
(statearr_70206_70247[(2)] = inst_70159);

(statearr_70206_70247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (2))){
var state_70184__$1 = state_70184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70184__$1,(4),ch);
} else {
if((state_val_70185 === (23))){
var state_70184__$1 = state_70184;
var statearr_70207_70248 = state_70184__$1;
(statearr_70207_70248[(2)] = null);

(statearr_70207_70248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (19))){
var inst_70115 = (state_70184[(8)]);
var inst_70165 = (state_70184[(11)]);
var inst_70167 = cljs.core.async.muxch_STAR_.call(null,inst_70165);
var state_70184__$1 = state_70184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70184__$1,(22),inst_70167,inst_70115);
} else {
if((state_val_70185 === (11))){
var inst_70125 = (state_70184[(14)]);
var inst_70139 = (state_70184[(10)]);
var inst_70139__$1 = cljs.core.seq.call(null,inst_70125);
var state_70184__$1 = (function (){var statearr_70208 = state_70184;
(statearr_70208[(10)] = inst_70139__$1);

return statearr_70208;
})();
if(inst_70139__$1){
var statearr_70209_70249 = state_70184__$1;
(statearr_70209_70249[(1)] = (13));

} else {
var statearr_70210_70250 = state_70184__$1;
(statearr_70210_70250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (9))){
var inst_70161 = (state_70184[(2)]);
var state_70184__$1 = state_70184;
var statearr_70211_70251 = state_70184__$1;
(statearr_70211_70251[(2)] = inst_70161);

(statearr_70211_70251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (5))){
var inst_70122 = cljs.core.deref.call(null,mults);
var inst_70123 = cljs.core.vals.call(null,inst_70122);
var inst_70124 = cljs.core.seq.call(null,inst_70123);
var inst_70125 = inst_70124;
var inst_70126 = null;
var inst_70127 = (0);
var inst_70128 = (0);
var state_70184__$1 = (function (){var statearr_70212 = state_70184;
(statearr_70212[(12)] = inst_70126);

(statearr_70212[(13)] = inst_70128);

(statearr_70212[(14)] = inst_70125);

(statearr_70212[(15)] = inst_70127);

return statearr_70212;
})();
var statearr_70213_70252 = state_70184__$1;
(statearr_70213_70252[(2)] = null);

(statearr_70213_70252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (14))){
var state_70184__$1 = state_70184;
var statearr_70217_70253 = state_70184__$1;
(statearr_70217_70253[(2)] = null);

(statearr_70217_70253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (16))){
var inst_70139 = (state_70184[(10)]);
var inst_70143 = cljs.core.chunk_first.call(null,inst_70139);
var inst_70144 = cljs.core.chunk_rest.call(null,inst_70139);
var inst_70145 = cljs.core.count.call(null,inst_70143);
var inst_70125 = inst_70144;
var inst_70126 = inst_70143;
var inst_70127 = inst_70145;
var inst_70128 = (0);
var state_70184__$1 = (function (){var statearr_70218 = state_70184;
(statearr_70218[(12)] = inst_70126);

(statearr_70218[(13)] = inst_70128);

(statearr_70218[(14)] = inst_70125);

(statearr_70218[(15)] = inst_70127);

return statearr_70218;
})();
var statearr_70219_70254 = state_70184__$1;
(statearr_70219_70254[(2)] = null);

(statearr_70219_70254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (10))){
var inst_70126 = (state_70184[(12)]);
var inst_70128 = (state_70184[(13)]);
var inst_70125 = (state_70184[(14)]);
var inst_70127 = (state_70184[(15)]);
var inst_70133 = cljs.core._nth.call(null,inst_70126,inst_70128);
var inst_70134 = cljs.core.async.muxch_STAR_.call(null,inst_70133);
var inst_70135 = cljs.core.async.close_BANG_.call(null,inst_70134);
var inst_70136 = (inst_70128 + (1));
var tmp70214 = inst_70126;
var tmp70215 = inst_70125;
var tmp70216 = inst_70127;
var inst_70125__$1 = tmp70215;
var inst_70126__$1 = tmp70214;
var inst_70127__$1 = tmp70216;
var inst_70128__$1 = inst_70136;
var state_70184__$1 = (function (){var statearr_70220 = state_70184;
(statearr_70220[(12)] = inst_70126__$1);

(statearr_70220[(13)] = inst_70128__$1);

(statearr_70220[(14)] = inst_70125__$1);

(statearr_70220[(15)] = inst_70127__$1);

(statearr_70220[(17)] = inst_70135);

return statearr_70220;
})();
var statearr_70221_70255 = state_70184__$1;
(statearr_70221_70255[(2)] = null);

(statearr_70221_70255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (18))){
var inst_70154 = (state_70184[(2)]);
var state_70184__$1 = state_70184;
var statearr_70222_70256 = state_70184__$1;
(statearr_70222_70256[(2)] = inst_70154);

(statearr_70222_70256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70185 === (8))){
var inst_70128 = (state_70184[(13)]);
var inst_70127 = (state_70184[(15)]);
var inst_70130 = (inst_70128 < inst_70127);
var inst_70131 = inst_70130;
var state_70184__$1 = state_70184;
if(cljs.core.truth_(inst_70131)){
var statearr_70223_70257 = state_70184__$1;
(statearr_70223_70257[(1)] = (10));

} else {
var statearr_70224_70258 = state_70184__$1;
(statearr_70224_70258[(1)] = (11));

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
});})(c__58504__auto___70230,mults,ensure_mult,p))
;
return ((function (switch__58437__auto__,c__58504__auto___70230,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_70225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70225[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_70225[(1)] = (1));

return statearr_70225;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_70184){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70226){if((e70226 instanceof Object)){
var ex__58441__auto__ = e70226;
var statearr_70227_70259 = state_70184;
(statearr_70227_70259[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70260 = state_70184;
state_70184 = G__70260;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_70184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_70184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70230,mults,ensure_mult,p))
})();
var state__58506__auto__ = (function (){var statearr_70228 = f__58505__auto__.call(null);
(statearr_70228[(6)] = c__58504__auto___70230);

return statearr_70228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70230,mults,ensure_mult,p))
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
var G__70262 = arguments.length;
switch (G__70262) {
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
var G__70265 = arguments.length;
switch (G__70265) {
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
var G__70268 = arguments.length;
switch (G__70268) {
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
var c__58504__auto___70335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_70307){
var state_val_70308 = (state_70307[(1)]);
if((state_val_70308 === (7))){
var state_70307__$1 = state_70307;
var statearr_70309_70336 = state_70307__$1;
(statearr_70309_70336[(2)] = null);

(statearr_70309_70336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (1))){
var state_70307__$1 = state_70307;
var statearr_70310_70337 = state_70307__$1;
(statearr_70310_70337[(2)] = null);

(statearr_70310_70337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (4))){
var inst_70271 = (state_70307[(7)]);
var inst_70273 = (inst_70271 < cnt);
var state_70307__$1 = state_70307;
if(cljs.core.truth_(inst_70273)){
var statearr_70311_70338 = state_70307__$1;
(statearr_70311_70338[(1)] = (6));

} else {
var statearr_70312_70339 = state_70307__$1;
(statearr_70312_70339[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (15))){
var inst_70303 = (state_70307[(2)]);
var state_70307__$1 = state_70307;
var statearr_70313_70340 = state_70307__$1;
(statearr_70313_70340[(2)] = inst_70303);

(statearr_70313_70340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (13))){
var inst_70296 = cljs.core.async.close_BANG_.call(null,out);
var state_70307__$1 = state_70307;
var statearr_70314_70341 = state_70307__$1;
(statearr_70314_70341[(2)] = inst_70296);

(statearr_70314_70341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (6))){
var state_70307__$1 = state_70307;
var statearr_70315_70342 = state_70307__$1;
(statearr_70315_70342[(2)] = null);

(statearr_70315_70342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (3))){
var inst_70305 = (state_70307[(2)]);
var state_70307__$1 = state_70307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70307__$1,inst_70305);
} else {
if((state_val_70308 === (12))){
var inst_70293 = (state_70307[(8)]);
var inst_70293__$1 = (state_70307[(2)]);
var inst_70294 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_70293__$1);
var state_70307__$1 = (function (){var statearr_70316 = state_70307;
(statearr_70316[(8)] = inst_70293__$1);

return statearr_70316;
})();
if(cljs.core.truth_(inst_70294)){
var statearr_70317_70343 = state_70307__$1;
(statearr_70317_70343[(1)] = (13));

} else {
var statearr_70318_70344 = state_70307__$1;
(statearr_70318_70344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (2))){
var inst_70270 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_70271 = (0);
var state_70307__$1 = (function (){var statearr_70319 = state_70307;
(statearr_70319[(7)] = inst_70271);

(statearr_70319[(9)] = inst_70270);

return statearr_70319;
})();
var statearr_70320_70345 = state_70307__$1;
(statearr_70320_70345[(2)] = null);

(statearr_70320_70345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (11))){
var inst_70271 = (state_70307[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_70307,(10),Object,null,(9));
var inst_70280 = chs__$1.call(null,inst_70271);
var inst_70281 = done.call(null,inst_70271);
var inst_70282 = cljs.core.async.take_BANG_.call(null,inst_70280,inst_70281);
var state_70307__$1 = state_70307;
var statearr_70321_70346 = state_70307__$1;
(statearr_70321_70346[(2)] = inst_70282);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70307__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (9))){
var inst_70271 = (state_70307[(7)]);
var inst_70284 = (state_70307[(2)]);
var inst_70285 = (inst_70271 + (1));
var inst_70271__$1 = inst_70285;
var state_70307__$1 = (function (){var statearr_70322 = state_70307;
(statearr_70322[(7)] = inst_70271__$1);

(statearr_70322[(10)] = inst_70284);

return statearr_70322;
})();
var statearr_70323_70347 = state_70307__$1;
(statearr_70323_70347[(2)] = null);

(statearr_70323_70347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (5))){
var inst_70291 = (state_70307[(2)]);
var state_70307__$1 = (function (){var statearr_70324 = state_70307;
(statearr_70324[(11)] = inst_70291);

return statearr_70324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70307__$1,(12),dchan);
} else {
if((state_val_70308 === (14))){
var inst_70293 = (state_70307[(8)]);
var inst_70298 = cljs.core.apply.call(null,f,inst_70293);
var state_70307__$1 = state_70307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70307__$1,(16),out,inst_70298);
} else {
if((state_val_70308 === (16))){
var inst_70300 = (state_70307[(2)]);
var state_70307__$1 = (function (){var statearr_70325 = state_70307;
(statearr_70325[(12)] = inst_70300);

return statearr_70325;
})();
var statearr_70326_70348 = state_70307__$1;
(statearr_70326_70348[(2)] = null);

(statearr_70326_70348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (10))){
var inst_70275 = (state_70307[(2)]);
var inst_70276 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_70307__$1 = (function (){var statearr_70327 = state_70307;
(statearr_70327[(13)] = inst_70275);

return statearr_70327;
})();
var statearr_70328_70349 = state_70307__$1;
(statearr_70328_70349[(2)] = inst_70276);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70307__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70308 === (8))){
var inst_70289 = (state_70307[(2)]);
var state_70307__$1 = state_70307;
var statearr_70329_70350 = state_70307__$1;
(statearr_70329_70350[(2)] = inst_70289);

(statearr_70329_70350[(1)] = (5));


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
});})(c__58504__auto___70335,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__58437__auto__,c__58504__auto___70335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_70330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70330[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_70330[(1)] = (1));

return statearr_70330;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_70307){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70331){if((e70331 instanceof Object)){
var ex__58441__auto__ = e70331;
var statearr_70332_70351 = state_70307;
(statearr_70332_70351[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70352 = state_70307;
state_70307 = G__70352;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_70307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_70307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70335,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__58506__auto__ = (function (){var statearr_70333 = f__58505__auto__.call(null);
(statearr_70333[(6)] = c__58504__auto___70335);

return statearr_70333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70335,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__70355 = arguments.length;
switch (G__70355) {
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
var c__58504__auto___70409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70409,out){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70409,out){
return (function (state_70387){
var state_val_70388 = (state_70387[(1)]);
if((state_val_70388 === (7))){
var inst_70366 = (state_70387[(7)]);
var inst_70367 = (state_70387[(8)]);
var inst_70366__$1 = (state_70387[(2)]);
var inst_70367__$1 = cljs.core.nth.call(null,inst_70366__$1,(0),null);
var inst_70368 = cljs.core.nth.call(null,inst_70366__$1,(1),null);
var inst_70369 = (inst_70367__$1 == null);
var state_70387__$1 = (function (){var statearr_70389 = state_70387;
(statearr_70389[(7)] = inst_70366__$1);

(statearr_70389[(9)] = inst_70368);

(statearr_70389[(8)] = inst_70367__$1);

return statearr_70389;
})();
if(cljs.core.truth_(inst_70369)){
var statearr_70390_70410 = state_70387__$1;
(statearr_70390_70410[(1)] = (8));

} else {
var statearr_70391_70411 = state_70387__$1;
(statearr_70391_70411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70388 === (1))){
var inst_70356 = cljs.core.vec.call(null,chs);
var inst_70357 = inst_70356;
var state_70387__$1 = (function (){var statearr_70392 = state_70387;
(statearr_70392[(10)] = inst_70357);

return statearr_70392;
})();
var statearr_70393_70412 = state_70387__$1;
(statearr_70393_70412[(2)] = null);

(statearr_70393_70412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70388 === (4))){
var inst_70357 = (state_70387[(10)]);
var state_70387__$1 = state_70387;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70387__$1,(7),inst_70357);
} else {
if((state_val_70388 === (6))){
var inst_70383 = (state_70387[(2)]);
var state_70387__$1 = state_70387;
var statearr_70394_70413 = state_70387__$1;
(statearr_70394_70413[(2)] = inst_70383);

(statearr_70394_70413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70388 === (3))){
var inst_70385 = (state_70387[(2)]);
var state_70387__$1 = state_70387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70387__$1,inst_70385);
} else {
if((state_val_70388 === (2))){
var inst_70357 = (state_70387[(10)]);
var inst_70359 = cljs.core.count.call(null,inst_70357);
var inst_70360 = (inst_70359 > (0));
var state_70387__$1 = state_70387;
if(cljs.core.truth_(inst_70360)){
var statearr_70396_70414 = state_70387__$1;
(statearr_70396_70414[(1)] = (4));

} else {
var statearr_70397_70415 = state_70387__$1;
(statearr_70397_70415[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70388 === (11))){
var inst_70357 = (state_70387[(10)]);
var inst_70376 = (state_70387[(2)]);
var tmp70395 = inst_70357;
var inst_70357__$1 = tmp70395;
var state_70387__$1 = (function (){var statearr_70398 = state_70387;
(statearr_70398[(10)] = inst_70357__$1);

(statearr_70398[(11)] = inst_70376);

return statearr_70398;
})();
var statearr_70399_70416 = state_70387__$1;
(statearr_70399_70416[(2)] = null);

(statearr_70399_70416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70388 === (9))){
var inst_70367 = (state_70387[(8)]);
var state_70387__$1 = state_70387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70387__$1,(11),out,inst_70367);
} else {
if((state_val_70388 === (5))){
var inst_70381 = cljs.core.async.close_BANG_.call(null,out);
var state_70387__$1 = state_70387;
var statearr_70400_70417 = state_70387__$1;
(statearr_70400_70417[(2)] = inst_70381);

(statearr_70400_70417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70388 === (10))){
var inst_70379 = (state_70387[(2)]);
var state_70387__$1 = state_70387;
var statearr_70401_70418 = state_70387__$1;
(statearr_70401_70418[(2)] = inst_70379);

(statearr_70401_70418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70388 === (8))){
var inst_70357 = (state_70387[(10)]);
var inst_70366 = (state_70387[(7)]);
var inst_70368 = (state_70387[(9)]);
var inst_70367 = (state_70387[(8)]);
var inst_70371 = (function (){var cs = inst_70357;
var vec__70362 = inst_70366;
var v = inst_70367;
var c = inst_70368;
return ((function (cs,vec__70362,v,c,inst_70357,inst_70366,inst_70368,inst_70367,state_val_70388,c__58504__auto___70409,out){
return (function (p1__70353_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__70353_SHARP_);
});
;})(cs,vec__70362,v,c,inst_70357,inst_70366,inst_70368,inst_70367,state_val_70388,c__58504__auto___70409,out))
})();
var inst_70372 = cljs.core.filterv.call(null,inst_70371,inst_70357);
var inst_70357__$1 = inst_70372;
var state_70387__$1 = (function (){var statearr_70402 = state_70387;
(statearr_70402[(10)] = inst_70357__$1);

return statearr_70402;
})();
var statearr_70403_70419 = state_70387__$1;
(statearr_70403_70419[(2)] = null);

(statearr_70403_70419[(1)] = (2));


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
});})(c__58504__auto___70409,out))
;
return ((function (switch__58437__auto__,c__58504__auto___70409,out){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_70404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70404[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_70404[(1)] = (1));

return statearr_70404;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_70387){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70405){if((e70405 instanceof Object)){
var ex__58441__auto__ = e70405;
var statearr_70406_70420 = state_70387;
(statearr_70406_70420[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70421 = state_70387;
state_70387 = G__70421;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_70387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_70387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70409,out))
})();
var state__58506__auto__ = (function (){var statearr_70407 = f__58505__auto__.call(null);
(statearr_70407[(6)] = c__58504__auto___70409);

return statearr_70407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70409,out))
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
var G__70423 = arguments.length;
switch (G__70423) {
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
var c__58504__auto___70468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70468,out){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70468,out){
return (function (state_70447){
var state_val_70448 = (state_70447[(1)]);
if((state_val_70448 === (7))){
var inst_70429 = (state_70447[(7)]);
var inst_70429__$1 = (state_70447[(2)]);
var inst_70430 = (inst_70429__$1 == null);
var inst_70431 = cljs.core.not.call(null,inst_70430);
var state_70447__$1 = (function (){var statearr_70449 = state_70447;
(statearr_70449[(7)] = inst_70429__$1);

return statearr_70449;
})();
if(inst_70431){
var statearr_70450_70469 = state_70447__$1;
(statearr_70450_70469[(1)] = (8));

} else {
var statearr_70451_70470 = state_70447__$1;
(statearr_70451_70470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70448 === (1))){
var inst_70424 = (0);
var state_70447__$1 = (function (){var statearr_70452 = state_70447;
(statearr_70452[(8)] = inst_70424);

return statearr_70452;
})();
var statearr_70453_70471 = state_70447__$1;
(statearr_70453_70471[(2)] = null);

(statearr_70453_70471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70448 === (4))){
var state_70447__$1 = state_70447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70447__$1,(7),ch);
} else {
if((state_val_70448 === (6))){
var inst_70442 = (state_70447[(2)]);
var state_70447__$1 = state_70447;
var statearr_70454_70472 = state_70447__$1;
(statearr_70454_70472[(2)] = inst_70442);

(statearr_70454_70472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70448 === (3))){
var inst_70444 = (state_70447[(2)]);
var inst_70445 = cljs.core.async.close_BANG_.call(null,out);
var state_70447__$1 = (function (){var statearr_70455 = state_70447;
(statearr_70455[(9)] = inst_70444);

return statearr_70455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70447__$1,inst_70445);
} else {
if((state_val_70448 === (2))){
var inst_70424 = (state_70447[(8)]);
var inst_70426 = (inst_70424 < n);
var state_70447__$1 = state_70447;
if(cljs.core.truth_(inst_70426)){
var statearr_70456_70473 = state_70447__$1;
(statearr_70456_70473[(1)] = (4));

} else {
var statearr_70457_70474 = state_70447__$1;
(statearr_70457_70474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70448 === (11))){
var inst_70424 = (state_70447[(8)]);
var inst_70434 = (state_70447[(2)]);
var inst_70435 = (inst_70424 + (1));
var inst_70424__$1 = inst_70435;
var state_70447__$1 = (function (){var statearr_70458 = state_70447;
(statearr_70458[(8)] = inst_70424__$1);

(statearr_70458[(10)] = inst_70434);

return statearr_70458;
})();
var statearr_70459_70475 = state_70447__$1;
(statearr_70459_70475[(2)] = null);

(statearr_70459_70475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70448 === (9))){
var state_70447__$1 = state_70447;
var statearr_70460_70476 = state_70447__$1;
(statearr_70460_70476[(2)] = null);

(statearr_70460_70476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70448 === (5))){
var state_70447__$1 = state_70447;
var statearr_70461_70477 = state_70447__$1;
(statearr_70461_70477[(2)] = null);

(statearr_70461_70477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70448 === (10))){
var inst_70439 = (state_70447[(2)]);
var state_70447__$1 = state_70447;
var statearr_70462_70478 = state_70447__$1;
(statearr_70462_70478[(2)] = inst_70439);

(statearr_70462_70478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70448 === (8))){
var inst_70429 = (state_70447[(7)]);
var state_70447__$1 = state_70447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70447__$1,(11),out,inst_70429);
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
});})(c__58504__auto___70468,out))
;
return ((function (switch__58437__auto__,c__58504__auto___70468,out){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_70463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70463[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_70463[(1)] = (1));

return statearr_70463;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_70447){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70464){if((e70464 instanceof Object)){
var ex__58441__auto__ = e70464;
var statearr_70465_70479 = state_70447;
(statearr_70465_70479[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70480 = state_70447;
state_70447 = G__70480;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_70447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_70447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70468,out))
})();
var state__58506__auto__ = (function (){var statearr_70466 = f__58505__auto__.call(null);
(statearr_70466[(6)] = c__58504__auto___70468);

return statearr_70466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70468,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70482 = (function (f,ch,meta70483){
this.f = f;
this.ch = ch;
this.meta70483 = meta70483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70484,meta70483__$1){
var self__ = this;
var _70484__$1 = this;
return (new cljs.core.async.t_cljs$core$async70482(self__.f,self__.ch,meta70483__$1));
});

cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70484){
var self__ = this;
var _70484__$1 = this;
return self__.meta70483;
});

cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async70485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70485 = (function (f,ch,meta70483,_,fn1,meta70486){
this.f = f;
this.ch = ch;
this.meta70483 = meta70483;
this._ = _;
this.fn1 = fn1;
this.meta70486 = meta70486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_70487,meta70486__$1){
var self__ = this;
var _70487__$1 = this;
return (new cljs.core.async.t_cljs$core$async70485(self__.f,self__.ch,self__.meta70483,self__._,self__.fn1,meta70486__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async70485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_70487){
var self__ = this;
var _70487__$1 = this;
return self__.meta70486;
});})(___$1))
;

cljs.core.async.t_cljs$core$async70485.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async70485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__70481_SHARP_){
return f1.call(null,(((p1__70481_SHARP_ == null))?null:self__.f.call(null,p1__70481_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async70485.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70483","meta70483",1523429857,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async70482","cljs.core.async/t_cljs$core$async70482",-114317184,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta70486","meta70486",-916949874,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70485";

cljs.core.async.t_cljs$core$async70485.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async70485");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async70485 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70485(f__$1,ch__$1,meta70483__$1,___$2,fn1__$1,meta70486){
return (new cljs.core.async.t_cljs$core$async70485(f__$1,ch__$1,meta70483__$1,___$2,fn1__$1,meta70486));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async70485(self__.f,self__.ch,self__.meta70483,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__39620__auto__ = ret;
if(cljs.core.truth_(and__39620__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__39620__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async70482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70483","meta70483",1523429857,null)], null);
});

cljs.core.async.t_cljs$core$async70482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70482";

cljs.core.async.t_cljs$core$async70482.cljs$lang$ctorPrWriter = (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async70482");
});

cljs.core.async.__GT_t_cljs$core$async70482 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70482(f__$1,ch__$1,meta70483){
return (new cljs.core.async.t_cljs$core$async70482(f__$1,ch__$1,meta70483));
});

}

return (new cljs.core.async.t_cljs$core$async70482(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70488 = (function (f,ch,meta70489){
this.f = f;
this.ch = ch;
this.meta70489 = meta70489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70490,meta70489__$1){
var self__ = this;
var _70490__$1 = this;
return (new cljs.core.async.t_cljs$core$async70488(self__.f,self__.ch,meta70489__$1));
});

cljs.core.async.t_cljs$core$async70488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70490){
var self__ = this;
var _70490__$1 = this;
return self__.meta70489;
});

cljs.core.async.t_cljs$core$async70488.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70488.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async70488.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async70488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70489","meta70489",1299865779,null)], null);
});

cljs.core.async.t_cljs$core$async70488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70488";

cljs.core.async.t_cljs$core$async70488.cljs$lang$ctorPrWriter = (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async70488");
});

cljs.core.async.__GT_t_cljs$core$async70488 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async70488(f__$1,ch__$1,meta70489){
return (new cljs.core.async.t_cljs$core$async70488(f__$1,ch__$1,meta70489));
});

}

return (new cljs.core.async.t_cljs$core$async70488(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async70491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70491 = (function (p,ch,meta70492){
this.p = p;
this.ch = ch;
this.meta70492 = meta70492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70493,meta70492__$1){
var self__ = this;
var _70493__$1 = this;
return (new cljs.core.async.t_cljs$core$async70491(self__.p,self__.ch,meta70492__$1));
});

cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70493){
var self__ = this;
var _70493__$1 = this;
return self__.meta70492;
});

cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async70491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70492","meta70492",-126285390,null)], null);
});

cljs.core.async.t_cljs$core$async70491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70491";

cljs.core.async.t_cljs$core$async70491.cljs$lang$ctorPrWriter = (function (this__41187__auto__,writer__41188__auto__,opt__41189__auto__){
return cljs.core._write.call(null,writer__41188__auto__,"cljs.core.async/t_cljs$core$async70491");
});

cljs.core.async.__GT_t_cljs$core$async70491 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async70491(p__$1,ch__$1,meta70492){
return (new cljs.core.async.t_cljs$core$async70491(p__$1,ch__$1,meta70492));
});

}

return (new cljs.core.async.t_cljs$core$async70491(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__70495 = arguments.length;
switch (G__70495) {
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
var c__58504__auto___70535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70535,out){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70535,out){
return (function (state_70516){
var state_val_70517 = (state_70516[(1)]);
if((state_val_70517 === (7))){
var inst_70512 = (state_70516[(2)]);
var state_70516__$1 = state_70516;
var statearr_70518_70536 = state_70516__$1;
(statearr_70518_70536[(2)] = inst_70512);

(statearr_70518_70536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (1))){
var state_70516__$1 = state_70516;
var statearr_70519_70537 = state_70516__$1;
(statearr_70519_70537[(2)] = null);

(statearr_70519_70537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (4))){
var inst_70498 = (state_70516[(7)]);
var inst_70498__$1 = (state_70516[(2)]);
var inst_70499 = (inst_70498__$1 == null);
var state_70516__$1 = (function (){var statearr_70520 = state_70516;
(statearr_70520[(7)] = inst_70498__$1);

return statearr_70520;
})();
if(cljs.core.truth_(inst_70499)){
var statearr_70521_70538 = state_70516__$1;
(statearr_70521_70538[(1)] = (5));

} else {
var statearr_70522_70539 = state_70516__$1;
(statearr_70522_70539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (6))){
var inst_70498 = (state_70516[(7)]);
var inst_70503 = p.call(null,inst_70498);
var state_70516__$1 = state_70516;
if(cljs.core.truth_(inst_70503)){
var statearr_70523_70540 = state_70516__$1;
(statearr_70523_70540[(1)] = (8));

} else {
var statearr_70524_70541 = state_70516__$1;
(statearr_70524_70541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (3))){
var inst_70514 = (state_70516[(2)]);
var state_70516__$1 = state_70516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70516__$1,inst_70514);
} else {
if((state_val_70517 === (2))){
var state_70516__$1 = state_70516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70516__$1,(4),ch);
} else {
if((state_val_70517 === (11))){
var inst_70506 = (state_70516[(2)]);
var state_70516__$1 = state_70516;
var statearr_70525_70542 = state_70516__$1;
(statearr_70525_70542[(2)] = inst_70506);

(statearr_70525_70542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (9))){
var state_70516__$1 = state_70516;
var statearr_70526_70543 = state_70516__$1;
(statearr_70526_70543[(2)] = null);

(statearr_70526_70543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (5))){
var inst_70501 = cljs.core.async.close_BANG_.call(null,out);
var state_70516__$1 = state_70516;
var statearr_70527_70544 = state_70516__$1;
(statearr_70527_70544[(2)] = inst_70501);

(statearr_70527_70544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (10))){
var inst_70509 = (state_70516[(2)]);
var state_70516__$1 = (function (){var statearr_70528 = state_70516;
(statearr_70528[(8)] = inst_70509);

return statearr_70528;
})();
var statearr_70529_70545 = state_70516__$1;
(statearr_70529_70545[(2)] = null);

(statearr_70529_70545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70517 === (8))){
var inst_70498 = (state_70516[(7)]);
var state_70516__$1 = state_70516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70516__$1,(11),out,inst_70498);
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
});})(c__58504__auto___70535,out))
;
return ((function (switch__58437__auto__,c__58504__auto___70535,out){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_70530 = [null,null,null,null,null,null,null,null,null];
(statearr_70530[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_70530[(1)] = (1));

return statearr_70530;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_70516){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70531){if((e70531 instanceof Object)){
var ex__58441__auto__ = e70531;
var statearr_70532_70546 = state_70516;
(statearr_70532_70546[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70547 = state_70516;
state_70516 = G__70547;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_70516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_70516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70535,out))
})();
var state__58506__auto__ = (function (){var statearr_70533 = f__58505__auto__.call(null);
(statearr_70533[(6)] = c__58504__auto___70535);

return statearr_70533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70535,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__70549 = arguments.length;
switch (G__70549) {
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
var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__){
return (function (state_70612){
var state_val_70613 = (state_70612[(1)]);
if((state_val_70613 === (7))){
var inst_70608 = (state_70612[(2)]);
var state_70612__$1 = state_70612;
var statearr_70614_70652 = state_70612__$1;
(statearr_70614_70652[(2)] = inst_70608);

(statearr_70614_70652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (20))){
var inst_70578 = (state_70612[(7)]);
var inst_70589 = (state_70612[(2)]);
var inst_70590 = cljs.core.next.call(null,inst_70578);
var inst_70564 = inst_70590;
var inst_70565 = null;
var inst_70566 = (0);
var inst_70567 = (0);
var state_70612__$1 = (function (){var statearr_70615 = state_70612;
(statearr_70615[(8)] = inst_70564);

(statearr_70615[(9)] = inst_70565);

(statearr_70615[(10)] = inst_70589);

(statearr_70615[(11)] = inst_70566);

(statearr_70615[(12)] = inst_70567);

return statearr_70615;
})();
var statearr_70616_70653 = state_70612__$1;
(statearr_70616_70653[(2)] = null);

(statearr_70616_70653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (1))){
var state_70612__$1 = state_70612;
var statearr_70617_70654 = state_70612__$1;
(statearr_70617_70654[(2)] = null);

(statearr_70617_70654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (4))){
var inst_70553 = (state_70612[(13)]);
var inst_70553__$1 = (state_70612[(2)]);
var inst_70554 = (inst_70553__$1 == null);
var state_70612__$1 = (function (){var statearr_70618 = state_70612;
(statearr_70618[(13)] = inst_70553__$1);

return statearr_70618;
})();
if(cljs.core.truth_(inst_70554)){
var statearr_70619_70655 = state_70612__$1;
(statearr_70619_70655[(1)] = (5));

} else {
var statearr_70620_70656 = state_70612__$1;
(statearr_70620_70656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (15))){
var state_70612__$1 = state_70612;
var statearr_70624_70657 = state_70612__$1;
(statearr_70624_70657[(2)] = null);

(statearr_70624_70657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (21))){
var state_70612__$1 = state_70612;
var statearr_70625_70658 = state_70612__$1;
(statearr_70625_70658[(2)] = null);

(statearr_70625_70658[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (13))){
var inst_70564 = (state_70612[(8)]);
var inst_70565 = (state_70612[(9)]);
var inst_70566 = (state_70612[(11)]);
var inst_70567 = (state_70612[(12)]);
var inst_70574 = (state_70612[(2)]);
var inst_70575 = (inst_70567 + (1));
var tmp70621 = inst_70564;
var tmp70622 = inst_70565;
var tmp70623 = inst_70566;
var inst_70564__$1 = tmp70621;
var inst_70565__$1 = tmp70622;
var inst_70566__$1 = tmp70623;
var inst_70567__$1 = inst_70575;
var state_70612__$1 = (function (){var statearr_70626 = state_70612;
(statearr_70626[(8)] = inst_70564__$1);

(statearr_70626[(9)] = inst_70565__$1);

(statearr_70626[(14)] = inst_70574);

(statearr_70626[(11)] = inst_70566__$1);

(statearr_70626[(12)] = inst_70567__$1);

return statearr_70626;
})();
var statearr_70627_70659 = state_70612__$1;
(statearr_70627_70659[(2)] = null);

(statearr_70627_70659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (22))){
var state_70612__$1 = state_70612;
var statearr_70628_70660 = state_70612__$1;
(statearr_70628_70660[(2)] = null);

(statearr_70628_70660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (6))){
var inst_70553 = (state_70612[(13)]);
var inst_70562 = f.call(null,inst_70553);
var inst_70563 = cljs.core.seq.call(null,inst_70562);
var inst_70564 = inst_70563;
var inst_70565 = null;
var inst_70566 = (0);
var inst_70567 = (0);
var state_70612__$1 = (function (){var statearr_70629 = state_70612;
(statearr_70629[(8)] = inst_70564);

(statearr_70629[(9)] = inst_70565);

(statearr_70629[(11)] = inst_70566);

(statearr_70629[(12)] = inst_70567);

return statearr_70629;
})();
var statearr_70630_70661 = state_70612__$1;
(statearr_70630_70661[(2)] = null);

(statearr_70630_70661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (17))){
var inst_70578 = (state_70612[(7)]);
var inst_70582 = cljs.core.chunk_first.call(null,inst_70578);
var inst_70583 = cljs.core.chunk_rest.call(null,inst_70578);
var inst_70584 = cljs.core.count.call(null,inst_70582);
var inst_70564 = inst_70583;
var inst_70565 = inst_70582;
var inst_70566 = inst_70584;
var inst_70567 = (0);
var state_70612__$1 = (function (){var statearr_70631 = state_70612;
(statearr_70631[(8)] = inst_70564);

(statearr_70631[(9)] = inst_70565);

(statearr_70631[(11)] = inst_70566);

(statearr_70631[(12)] = inst_70567);

return statearr_70631;
})();
var statearr_70632_70662 = state_70612__$1;
(statearr_70632_70662[(2)] = null);

(statearr_70632_70662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (3))){
var inst_70610 = (state_70612[(2)]);
var state_70612__$1 = state_70612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70612__$1,inst_70610);
} else {
if((state_val_70613 === (12))){
var inst_70598 = (state_70612[(2)]);
var state_70612__$1 = state_70612;
var statearr_70633_70663 = state_70612__$1;
(statearr_70633_70663[(2)] = inst_70598);

(statearr_70633_70663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (2))){
var state_70612__$1 = state_70612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70612__$1,(4),in$);
} else {
if((state_val_70613 === (23))){
var inst_70606 = (state_70612[(2)]);
var state_70612__$1 = state_70612;
var statearr_70634_70664 = state_70612__$1;
(statearr_70634_70664[(2)] = inst_70606);

(statearr_70634_70664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (19))){
var inst_70593 = (state_70612[(2)]);
var state_70612__$1 = state_70612;
var statearr_70635_70665 = state_70612__$1;
(statearr_70635_70665[(2)] = inst_70593);

(statearr_70635_70665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (11))){
var inst_70564 = (state_70612[(8)]);
var inst_70578 = (state_70612[(7)]);
var inst_70578__$1 = cljs.core.seq.call(null,inst_70564);
var state_70612__$1 = (function (){var statearr_70636 = state_70612;
(statearr_70636[(7)] = inst_70578__$1);

return statearr_70636;
})();
if(inst_70578__$1){
var statearr_70637_70666 = state_70612__$1;
(statearr_70637_70666[(1)] = (14));

} else {
var statearr_70638_70667 = state_70612__$1;
(statearr_70638_70667[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (9))){
var inst_70600 = (state_70612[(2)]);
var inst_70601 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_70612__$1 = (function (){var statearr_70639 = state_70612;
(statearr_70639[(15)] = inst_70600);

return statearr_70639;
})();
if(cljs.core.truth_(inst_70601)){
var statearr_70640_70668 = state_70612__$1;
(statearr_70640_70668[(1)] = (21));

} else {
var statearr_70641_70669 = state_70612__$1;
(statearr_70641_70669[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (5))){
var inst_70556 = cljs.core.async.close_BANG_.call(null,out);
var state_70612__$1 = state_70612;
var statearr_70642_70670 = state_70612__$1;
(statearr_70642_70670[(2)] = inst_70556);

(statearr_70642_70670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (14))){
var inst_70578 = (state_70612[(7)]);
var inst_70580 = cljs.core.chunked_seq_QMARK_.call(null,inst_70578);
var state_70612__$1 = state_70612;
if(inst_70580){
var statearr_70643_70671 = state_70612__$1;
(statearr_70643_70671[(1)] = (17));

} else {
var statearr_70644_70672 = state_70612__$1;
(statearr_70644_70672[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (16))){
var inst_70596 = (state_70612[(2)]);
var state_70612__$1 = state_70612;
var statearr_70645_70673 = state_70612__$1;
(statearr_70645_70673[(2)] = inst_70596);

(statearr_70645_70673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70613 === (10))){
var inst_70565 = (state_70612[(9)]);
var inst_70567 = (state_70612[(12)]);
var inst_70572 = cljs.core._nth.call(null,inst_70565,inst_70567);
var state_70612__$1 = state_70612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70612__$1,(13),out,inst_70572);
} else {
if((state_val_70613 === (18))){
var inst_70578 = (state_70612[(7)]);
var inst_70587 = cljs.core.first.call(null,inst_70578);
var state_70612__$1 = state_70612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70612__$1,(20),out,inst_70587);
} else {
if((state_val_70613 === (8))){
var inst_70566 = (state_70612[(11)]);
var inst_70567 = (state_70612[(12)]);
var inst_70569 = (inst_70567 < inst_70566);
var inst_70570 = inst_70569;
var state_70612__$1 = state_70612;
if(cljs.core.truth_(inst_70570)){
var statearr_70646_70674 = state_70612__$1;
(statearr_70646_70674[(1)] = (10));

} else {
var statearr_70647_70675 = state_70612__$1;
(statearr_70647_70675[(1)] = (11));

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
});})(c__58504__auto__))
;
return ((function (switch__58437__auto__,c__58504__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58438__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58438__auto____0 = (function (){
var statearr_70648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70648[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58438__auto__);

(statearr_70648[(1)] = (1));

return statearr_70648;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58438__auto____1 = (function (state_70612){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70649){if((e70649 instanceof Object)){
var ex__58441__auto__ = e70649;
var statearr_70650_70676 = state_70612;
(statearr_70650_70676[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70677 = state_70612;
state_70612 = G__70677;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58438__auto__ = function(state_70612){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58438__auto____1.call(this,state_70612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58438__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58438__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__))
})();
var state__58506__auto__ = (function (){var statearr_70651 = f__58505__auto__.call(null);
(statearr_70651[(6)] = c__58504__auto__);

return statearr_70651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__))
);

return c__58504__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__70679 = arguments.length;
switch (G__70679) {
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
var G__70682 = arguments.length;
switch (G__70682) {
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
var G__70685 = arguments.length;
switch (G__70685) {
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
var c__58504__auto___70732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70732,out){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70732,out){
return (function (state_70709){
var state_val_70710 = (state_70709[(1)]);
if((state_val_70710 === (7))){
var inst_70704 = (state_70709[(2)]);
var state_70709__$1 = state_70709;
var statearr_70711_70733 = state_70709__$1;
(statearr_70711_70733[(2)] = inst_70704);

(statearr_70711_70733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70710 === (1))){
var inst_70686 = null;
var state_70709__$1 = (function (){var statearr_70712 = state_70709;
(statearr_70712[(7)] = inst_70686);

return statearr_70712;
})();
var statearr_70713_70734 = state_70709__$1;
(statearr_70713_70734[(2)] = null);

(statearr_70713_70734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70710 === (4))){
var inst_70689 = (state_70709[(8)]);
var inst_70689__$1 = (state_70709[(2)]);
var inst_70690 = (inst_70689__$1 == null);
var inst_70691 = cljs.core.not.call(null,inst_70690);
var state_70709__$1 = (function (){var statearr_70714 = state_70709;
(statearr_70714[(8)] = inst_70689__$1);

return statearr_70714;
})();
if(inst_70691){
var statearr_70715_70735 = state_70709__$1;
(statearr_70715_70735[(1)] = (5));

} else {
var statearr_70716_70736 = state_70709__$1;
(statearr_70716_70736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70710 === (6))){
var state_70709__$1 = state_70709;
var statearr_70717_70737 = state_70709__$1;
(statearr_70717_70737[(2)] = null);

(statearr_70717_70737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70710 === (3))){
var inst_70706 = (state_70709[(2)]);
var inst_70707 = cljs.core.async.close_BANG_.call(null,out);
var state_70709__$1 = (function (){var statearr_70718 = state_70709;
(statearr_70718[(9)] = inst_70706);

return statearr_70718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70709__$1,inst_70707);
} else {
if((state_val_70710 === (2))){
var state_70709__$1 = state_70709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70709__$1,(4),ch);
} else {
if((state_val_70710 === (11))){
var inst_70689 = (state_70709[(8)]);
var inst_70698 = (state_70709[(2)]);
var inst_70686 = inst_70689;
var state_70709__$1 = (function (){var statearr_70719 = state_70709;
(statearr_70719[(7)] = inst_70686);

(statearr_70719[(10)] = inst_70698);

return statearr_70719;
})();
var statearr_70720_70738 = state_70709__$1;
(statearr_70720_70738[(2)] = null);

(statearr_70720_70738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70710 === (9))){
var inst_70689 = (state_70709[(8)]);
var state_70709__$1 = state_70709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70709__$1,(11),out,inst_70689);
} else {
if((state_val_70710 === (5))){
var inst_70686 = (state_70709[(7)]);
var inst_70689 = (state_70709[(8)]);
var inst_70693 = cljs.core._EQ_.call(null,inst_70689,inst_70686);
var state_70709__$1 = state_70709;
if(inst_70693){
var statearr_70722_70739 = state_70709__$1;
(statearr_70722_70739[(1)] = (8));

} else {
var statearr_70723_70740 = state_70709__$1;
(statearr_70723_70740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70710 === (10))){
var inst_70701 = (state_70709[(2)]);
var state_70709__$1 = state_70709;
var statearr_70724_70741 = state_70709__$1;
(statearr_70724_70741[(2)] = inst_70701);

(statearr_70724_70741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70710 === (8))){
var inst_70686 = (state_70709[(7)]);
var tmp70721 = inst_70686;
var inst_70686__$1 = tmp70721;
var state_70709__$1 = (function (){var statearr_70725 = state_70709;
(statearr_70725[(7)] = inst_70686__$1);

return statearr_70725;
})();
var statearr_70726_70742 = state_70709__$1;
(statearr_70726_70742[(2)] = null);

(statearr_70726_70742[(1)] = (2));


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
});})(c__58504__auto___70732,out))
;
return ((function (switch__58437__auto__,c__58504__auto___70732,out){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_70727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70727[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_70727[(1)] = (1));

return statearr_70727;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_70709){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70728){if((e70728 instanceof Object)){
var ex__58441__auto__ = e70728;
var statearr_70729_70743 = state_70709;
(statearr_70729_70743[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70744 = state_70709;
state_70709 = G__70744;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_70709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_70709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70732,out))
})();
var state__58506__auto__ = (function (){var statearr_70730 = f__58505__auto__.call(null);
(statearr_70730[(6)] = c__58504__auto___70732);

return statearr_70730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70732,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__70746 = arguments.length;
switch (G__70746) {
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
var c__58504__auto___70812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70812,out){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70812,out){
return (function (state_70784){
var state_val_70785 = (state_70784[(1)]);
if((state_val_70785 === (7))){
var inst_70780 = (state_70784[(2)]);
var state_70784__$1 = state_70784;
var statearr_70786_70813 = state_70784__$1;
(statearr_70786_70813[(2)] = inst_70780);

(statearr_70786_70813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (1))){
var inst_70747 = (new Array(n));
var inst_70748 = inst_70747;
var inst_70749 = (0);
var state_70784__$1 = (function (){var statearr_70787 = state_70784;
(statearr_70787[(7)] = inst_70749);

(statearr_70787[(8)] = inst_70748);

return statearr_70787;
})();
var statearr_70788_70814 = state_70784__$1;
(statearr_70788_70814[(2)] = null);

(statearr_70788_70814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (4))){
var inst_70752 = (state_70784[(9)]);
var inst_70752__$1 = (state_70784[(2)]);
var inst_70753 = (inst_70752__$1 == null);
var inst_70754 = cljs.core.not.call(null,inst_70753);
var state_70784__$1 = (function (){var statearr_70789 = state_70784;
(statearr_70789[(9)] = inst_70752__$1);

return statearr_70789;
})();
if(inst_70754){
var statearr_70790_70815 = state_70784__$1;
(statearr_70790_70815[(1)] = (5));

} else {
var statearr_70791_70816 = state_70784__$1;
(statearr_70791_70816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (15))){
var inst_70774 = (state_70784[(2)]);
var state_70784__$1 = state_70784;
var statearr_70792_70817 = state_70784__$1;
(statearr_70792_70817[(2)] = inst_70774);

(statearr_70792_70817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (13))){
var state_70784__$1 = state_70784;
var statearr_70793_70818 = state_70784__$1;
(statearr_70793_70818[(2)] = null);

(statearr_70793_70818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (6))){
var inst_70749 = (state_70784[(7)]);
var inst_70770 = (inst_70749 > (0));
var state_70784__$1 = state_70784;
if(cljs.core.truth_(inst_70770)){
var statearr_70794_70819 = state_70784__$1;
(statearr_70794_70819[(1)] = (12));

} else {
var statearr_70795_70820 = state_70784__$1;
(statearr_70795_70820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (3))){
var inst_70782 = (state_70784[(2)]);
var state_70784__$1 = state_70784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70784__$1,inst_70782);
} else {
if((state_val_70785 === (12))){
var inst_70748 = (state_70784[(8)]);
var inst_70772 = cljs.core.vec.call(null,inst_70748);
var state_70784__$1 = state_70784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70784__$1,(15),out,inst_70772);
} else {
if((state_val_70785 === (2))){
var state_70784__$1 = state_70784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70784__$1,(4),ch);
} else {
if((state_val_70785 === (11))){
var inst_70764 = (state_70784[(2)]);
var inst_70765 = (new Array(n));
var inst_70748 = inst_70765;
var inst_70749 = (0);
var state_70784__$1 = (function (){var statearr_70796 = state_70784;
(statearr_70796[(7)] = inst_70749);

(statearr_70796[(10)] = inst_70764);

(statearr_70796[(8)] = inst_70748);

return statearr_70796;
})();
var statearr_70797_70821 = state_70784__$1;
(statearr_70797_70821[(2)] = null);

(statearr_70797_70821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (9))){
var inst_70748 = (state_70784[(8)]);
var inst_70762 = cljs.core.vec.call(null,inst_70748);
var state_70784__$1 = state_70784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70784__$1,(11),out,inst_70762);
} else {
if((state_val_70785 === (5))){
var inst_70757 = (state_70784[(11)]);
var inst_70749 = (state_70784[(7)]);
var inst_70748 = (state_70784[(8)]);
var inst_70752 = (state_70784[(9)]);
var inst_70756 = (inst_70748[inst_70749] = inst_70752);
var inst_70757__$1 = (inst_70749 + (1));
var inst_70758 = (inst_70757__$1 < n);
var state_70784__$1 = (function (){var statearr_70798 = state_70784;
(statearr_70798[(11)] = inst_70757__$1);

(statearr_70798[(12)] = inst_70756);

return statearr_70798;
})();
if(cljs.core.truth_(inst_70758)){
var statearr_70799_70822 = state_70784__$1;
(statearr_70799_70822[(1)] = (8));

} else {
var statearr_70800_70823 = state_70784__$1;
(statearr_70800_70823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (14))){
var inst_70777 = (state_70784[(2)]);
var inst_70778 = cljs.core.async.close_BANG_.call(null,out);
var state_70784__$1 = (function (){var statearr_70802 = state_70784;
(statearr_70802[(13)] = inst_70777);

return statearr_70802;
})();
var statearr_70803_70824 = state_70784__$1;
(statearr_70803_70824[(2)] = inst_70778);

(statearr_70803_70824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (10))){
var inst_70768 = (state_70784[(2)]);
var state_70784__$1 = state_70784;
var statearr_70804_70825 = state_70784__$1;
(statearr_70804_70825[(2)] = inst_70768);

(statearr_70804_70825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70785 === (8))){
var inst_70757 = (state_70784[(11)]);
var inst_70748 = (state_70784[(8)]);
var tmp70801 = inst_70748;
var inst_70748__$1 = tmp70801;
var inst_70749 = inst_70757;
var state_70784__$1 = (function (){var statearr_70805 = state_70784;
(statearr_70805[(7)] = inst_70749);

(statearr_70805[(8)] = inst_70748__$1);

return statearr_70805;
})();
var statearr_70806_70826 = state_70784__$1;
(statearr_70806_70826[(2)] = null);

(statearr_70806_70826[(1)] = (2));


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
});})(c__58504__auto___70812,out))
;
return ((function (switch__58437__auto__,c__58504__auto___70812,out){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_70807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70807[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_70807[(1)] = (1));

return statearr_70807;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_70784){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70808){if((e70808 instanceof Object)){
var ex__58441__auto__ = e70808;
var statearr_70809_70827 = state_70784;
(statearr_70809_70827[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70828 = state_70784;
state_70784 = G__70828;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_70784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_70784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70812,out))
})();
var state__58506__auto__ = (function (){var statearr_70810 = f__58505__auto__.call(null);
(statearr_70810[(6)] = c__58504__auto___70812);

return statearr_70810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70812,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__70830 = arguments.length;
switch (G__70830) {
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
var c__58504__auto___70900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___70900,out){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___70900,out){
return (function (state_70872){
var state_val_70873 = (state_70872[(1)]);
if((state_val_70873 === (7))){
var inst_70868 = (state_70872[(2)]);
var state_70872__$1 = state_70872;
var statearr_70874_70901 = state_70872__$1;
(statearr_70874_70901[(2)] = inst_70868);

(statearr_70874_70901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (1))){
var inst_70831 = [];
var inst_70832 = inst_70831;
var inst_70833 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_70872__$1 = (function (){var statearr_70875 = state_70872;
(statearr_70875[(7)] = inst_70833);

(statearr_70875[(8)] = inst_70832);

return statearr_70875;
})();
var statearr_70876_70902 = state_70872__$1;
(statearr_70876_70902[(2)] = null);

(statearr_70876_70902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (4))){
var inst_70836 = (state_70872[(9)]);
var inst_70836__$1 = (state_70872[(2)]);
var inst_70837 = (inst_70836__$1 == null);
var inst_70838 = cljs.core.not.call(null,inst_70837);
var state_70872__$1 = (function (){var statearr_70877 = state_70872;
(statearr_70877[(9)] = inst_70836__$1);

return statearr_70877;
})();
if(inst_70838){
var statearr_70878_70903 = state_70872__$1;
(statearr_70878_70903[(1)] = (5));

} else {
var statearr_70879_70904 = state_70872__$1;
(statearr_70879_70904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (15))){
var inst_70862 = (state_70872[(2)]);
var state_70872__$1 = state_70872;
var statearr_70880_70905 = state_70872__$1;
(statearr_70880_70905[(2)] = inst_70862);

(statearr_70880_70905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (13))){
var state_70872__$1 = state_70872;
var statearr_70881_70906 = state_70872__$1;
(statearr_70881_70906[(2)] = null);

(statearr_70881_70906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (6))){
var inst_70832 = (state_70872[(8)]);
var inst_70857 = inst_70832.length;
var inst_70858 = (inst_70857 > (0));
var state_70872__$1 = state_70872;
if(cljs.core.truth_(inst_70858)){
var statearr_70882_70907 = state_70872__$1;
(statearr_70882_70907[(1)] = (12));

} else {
var statearr_70883_70908 = state_70872__$1;
(statearr_70883_70908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (3))){
var inst_70870 = (state_70872[(2)]);
var state_70872__$1 = state_70872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70872__$1,inst_70870);
} else {
if((state_val_70873 === (12))){
var inst_70832 = (state_70872[(8)]);
var inst_70860 = cljs.core.vec.call(null,inst_70832);
var state_70872__$1 = state_70872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70872__$1,(15),out,inst_70860);
} else {
if((state_val_70873 === (2))){
var state_70872__$1 = state_70872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70872__$1,(4),ch);
} else {
if((state_val_70873 === (11))){
var inst_70836 = (state_70872[(9)]);
var inst_70840 = (state_70872[(10)]);
var inst_70850 = (state_70872[(2)]);
var inst_70851 = [];
var inst_70852 = inst_70851.push(inst_70836);
var inst_70832 = inst_70851;
var inst_70833 = inst_70840;
var state_70872__$1 = (function (){var statearr_70884 = state_70872;
(statearr_70884[(11)] = inst_70850);

(statearr_70884[(7)] = inst_70833);

(statearr_70884[(12)] = inst_70852);

(statearr_70884[(8)] = inst_70832);

return statearr_70884;
})();
var statearr_70885_70909 = state_70872__$1;
(statearr_70885_70909[(2)] = null);

(statearr_70885_70909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (9))){
var inst_70832 = (state_70872[(8)]);
var inst_70848 = cljs.core.vec.call(null,inst_70832);
var state_70872__$1 = state_70872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70872__$1,(11),out,inst_70848);
} else {
if((state_val_70873 === (5))){
var inst_70836 = (state_70872[(9)]);
var inst_70833 = (state_70872[(7)]);
var inst_70840 = (state_70872[(10)]);
var inst_70840__$1 = f.call(null,inst_70836);
var inst_70841 = cljs.core._EQ_.call(null,inst_70840__$1,inst_70833);
var inst_70842 = cljs.core.keyword_identical_QMARK_.call(null,inst_70833,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_70843 = (inst_70841) || (inst_70842);
var state_70872__$1 = (function (){var statearr_70886 = state_70872;
(statearr_70886[(10)] = inst_70840__$1);

return statearr_70886;
})();
if(cljs.core.truth_(inst_70843)){
var statearr_70887_70910 = state_70872__$1;
(statearr_70887_70910[(1)] = (8));

} else {
var statearr_70888_70911 = state_70872__$1;
(statearr_70888_70911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (14))){
var inst_70865 = (state_70872[(2)]);
var inst_70866 = cljs.core.async.close_BANG_.call(null,out);
var state_70872__$1 = (function (){var statearr_70890 = state_70872;
(statearr_70890[(13)] = inst_70865);

return statearr_70890;
})();
var statearr_70891_70912 = state_70872__$1;
(statearr_70891_70912[(2)] = inst_70866);

(statearr_70891_70912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (10))){
var inst_70855 = (state_70872[(2)]);
var state_70872__$1 = state_70872;
var statearr_70892_70913 = state_70872__$1;
(statearr_70892_70913[(2)] = inst_70855);

(statearr_70892_70913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70873 === (8))){
var inst_70836 = (state_70872[(9)]);
var inst_70840 = (state_70872[(10)]);
var inst_70832 = (state_70872[(8)]);
var inst_70845 = inst_70832.push(inst_70836);
var tmp70889 = inst_70832;
var inst_70832__$1 = tmp70889;
var inst_70833 = inst_70840;
var state_70872__$1 = (function (){var statearr_70893 = state_70872;
(statearr_70893[(7)] = inst_70833);

(statearr_70893[(14)] = inst_70845);

(statearr_70893[(8)] = inst_70832__$1);

return statearr_70893;
})();
var statearr_70894_70914 = state_70872__$1;
(statearr_70894_70914[(2)] = null);

(statearr_70894_70914[(1)] = (2));


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
});})(c__58504__auto___70900,out))
;
return ((function (switch__58437__auto__,c__58504__auto___70900,out){
return (function() {
var cljs$core$async$state_machine__58438__auto__ = null;
var cljs$core$async$state_machine__58438__auto____0 = (function (){
var statearr_70895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70895[(0)] = cljs$core$async$state_machine__58438__auto__);

(statearr_70895[(1)] = (1));

return statearr_70895;
});
var cljs$core$async$state_machine__58438__auto____1 = (function (state_70872){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_70872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e70896){if((e70896 instanceof Object)){
var ex__58441__auto__ = e70896;
var statearr_70897_70915 = state_70872;
(statearr_70897_70915[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70916 = state_70872;
state_70872 = G__70916;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
cljs$core$async$state_machine__58438__auto__ = function(state_70872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58438__auto____1.call(this,state_70872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58438__auto____0;
cljs$core$async$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58438__auto____1;
return cljs$core$async$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___70900,out))
})();
var state__58506__auto__ = (function (){var statearr_70898 = f__58505__auto__.call(null);
(statearr_70898[(6)] = c__58504__auto___70900);

return statearr_70898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___70900,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518985462013
