// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332 = (function (val,meta66333){
this.val = val;
this.meta66333 = meta66333;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66334,meta66333__$1){
var self__ = this;
var _66334__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332(self__.val,meta66333__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66334){
var self__ = this;
var _66334__$1 = this;
return self__.meta66333;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta66333","meta66333",478257741,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels66332";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels66332");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels66332 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels66332(val__$1,meta66333){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332(val__$1,meta66333));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels66332(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__20593__auto__ = (((this$ == null))?null:this$);
var m__20594__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__20593__auto__)]);
if(!((m__20594__auto__ == null))){
return m__20594__auto__.call(null,this$);
} else {
var m__20594__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__20594__auto____$1 == null))){
return m__20594__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_66346 = self__.puts.pop();
if((putter_66346 == null)){
} else {
var put_handler_66347 = putter_66346.handler;
var val_66348 = putter_66346.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_66347)){
var put_cb_66349 = cljs.core.async.impl.protocols.commit.call(null,put_handler_66347);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_66349,put_handler_66347,val_66348,putter_66346,this$__$1){
return (function (){
return put_cb_66349.call(null,true);
});})(put_cb_66349,put_handler_66347,val_66348,putter_66346,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__19050__auto__ = self__.buf;
if(cljs.core.truth_(and__19050__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__19050__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__66350 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__66350;
continue;
} else {
var G__66351 = takers;
takers = G__66351;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__66335_66352 = cljs.core.seq.call(null,take_cbs);
var chunk__66336_66353 = null;
var count__66337_66354 = (0);
var i__66338_66355 = (0);
while(true){
if((i__66338_66355 < count__66337_66354)){
var f_66356 = cljs.core._nth.call(null,chunk__66336_66353,i__66338_66355);
cljs.core.async.impl.dispatch.run.call(null,f_66356);

var G__66357 = seq__66335_66352;
var G__66358 = chunk__66336_66353;
var G__66359 = count__66337_66354;
var G__66360 = (i__66338_66355 + (1));
seq__66335_66352 = G__66357;
chunk__66336_66353 = G__66358;
count__66337_66354 = G__66359;
i__66338_66355 = G__66360;
continue;
} else {
var temp__5457__auto___66361 = cljs.core.seq.call(null,seq__66335_66352);
if(temp__5457__auto___66361){
var seq__66335_66362__$1 = temp__5457__auto___66361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66335_66362__$1)){
var c__21063__auto___66363 = cljs.core.chunk_first.call(null,seq__66335_66362__$1);
var G__66364 = cljs.core.chunk_rest.call(null,seq__66335_66362__$1);
var G__66365 = c__21063__auto___66363;
var G__66366 = cljs.core.count.call(null,c__21063__auto___66363);
var G__66367 = (0);
seq__66335_66352 = G__66364;
chunk__66336_66353 = G__66365;
count__66337_66354 = G__66366;
i__66338_66355 = G__66367;
continue;
} else {
var f_66368 = cljs.core.first.call(null,seq__66335_66362__$1);
cljs.core.async.impl.dispatch.run.call(null,f_66368);

var G__66369 = cljs.core.next.call(null,seq__66335_66362__$1);
var G__66370 = null;
var G__66371 = (0);
var G__66372 = (0);
seq__66335_66352 = G__66369;
chunk__66336_66353 = G__66370;
count__66337_66354 = G__66371;
i__66338_66355 = G__66372;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__66339 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__19050__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__19050__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__19050__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__66373 = cbs__$1;
cbs = G__66373;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__66339,(0),null);
var cbs = cljs.core.nth.call(null,vec__66339,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__66342_66374 = cljs.core.seq.call(null,cbs);
var chunk__66343_66375 = null;
var count__66344_66376 = (0);
var i__66345_66377 = (0);
while(true){
if((i__66345_66377 < count__66344_66376)){
var cb_66378 = cljs.core._nth.call(null,chunk__66343_66375,i__66345_66377);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__66342_66374,chunk__66343_66375,count__66344_66376,i__66345_66377,cb_66378,val,vec__66339,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_66378.call(null,true);
});})(seq__66342_66374,chunk__66343_66375,count__66344_66376,i__66345_66377,cb_66378,val,vec__66339,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__66379 = seq__66342_66374;
var G__66380 = chunk__66343_66375;
var G__66381 = count__66344_66376;
var G__66382 = (i__66345_66377 + (1));
seq__66342_66374 = G__66379;
chunk__66343_66375 = G__66380;
count__66344_66376 = G__66381;
i__66345_66377 = G__66382;
continue;
} else {
var temp__5457__auto___66383 = cljs.core.seq.call(null,seq__66342_66374);
if(temp__5457__auto___66383){
var seq__66342_66384__$1 = temp__5457__auto___66383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66342_66384__$1)){
var c__21063__auto___66385 = cljs.core.chunk_first.call(null,seq__66342_66384__$1);
var G__66386 = cljs.core.chunk_rest.call(null,seq__66342_66384__$1);
var G__66387 = c__21063__auto___66385;
var G__66388 = cljs.core.count.call(null,c__21063__auto___66385);
var G__66389 = (0);
seq__66342_66374 = G__66386;
chunk__66343_66375 = G__66387;
count__66344_66376 = G__66388;
i__66345_66377 = G__66389;
continue;
} else {
var cb_66390 = cljs.core.first.call(null,seq__66342_66384__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__66342_66374,chunk__66343_66375,count__66344_66376,i__66345_66377,cb_66390,seq__66342_66384__$1,temp__5457__auto___66383,val,vec__66339,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_66390.call(null,true);
});})(seq__66342_66374,chunk__66343_66375,count__66344_66376,i__66345_66377,cb_66390,seq__66342_66384__$1,temp__5457__auto___66383,val,vec__66339,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__66391 = cljs.core.next.call(null,seq__66342_66384__$1);
var G__66392 = null;
var G__66393 = (0);
var G__66394 = (0);
seq__66342_66374 = G__66391;
chunk__66343_66375 = G__66392;
count__66344_66376 = G__66393;
i__66345_66377 = G__66394;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__19050__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__19050__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__19050__auto__;
}
})())){
var has_val = (function (){var and__19050__auto__ = self__.buf;
if(cljs.core.truth_(and__19050__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__19050__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__19050__auto__ = self__.buf;
if(cljs.core.truth_(and__19050__auto__)){
return (self__.puts.length === (0));
} else {
return and__19050__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_66395 = self__.takes.pop();
if((taker_66395 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_66395)){
var take_cb_66396 = cljs.core.async.impl.protocols.commit.call(null,taker_66395);
var val_66397 = (cljs.core.truth_((function (){var and__19050__auto__ = self__.buf;
if(cljs.core.truth_(and__19050__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__19050__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_66396,val_66397,taker_66395,this$__$1){
return (function (){
return take_cb_66396.call(null,val_66397);
});})(take_cb_66396,val_66397,taker_66395,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__20473__auto__,writer__20474__auto__,opt__20475__auto__){
return cljs.core._write.call(null,writer__20474__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__19063__auto__ = exh;
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__66399 = arguments.length;
switch (G__66399) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__66403 = null;
var G__66403__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e66400){var t = e66400;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__66403__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e66401){var t = e66401;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__66403 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__66403__1.call(this,buf__$1);
case 2:
return G__66403__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__66403.cljs$core$IFn$_invoke$arity$1 = G__66403__1;
G__66403.cljs$core$IFn$_invoke$arity$2 = G__66403__2;
return G__66403;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1518983338156