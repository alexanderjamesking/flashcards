// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e73399){if((e73399 instanceof Error)){
var e = e73399;
return "Error: Unable to stringify";
} else {
throw e73399;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__73402 = arguments.length;
switch (G__73402) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__73400_SHARP_){
if(typeof p1__73400_SHARP_ === 'string'){
return p1__73400_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__73400_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21754__auto__ = [];
var len__21740__auto___73405 = arguments.length;
var i__21741__auto___73406 = (0);
while(true){
if((i__21741__auto___73406 < len__21740__auto___73405)){
args__21754__auto__.push((arguments[i__21741__auto___73406]));

var G__73407 = (i__21741__auto___73406 + (1));
i__21741__auto___73406 = G__73407;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq73404){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73404));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21754__auto__ = [];
var len__21740__auto___73409 = arguments.length;
var i__21741__auto___73410 = (0);
while(true){
if((i__21741__auto___73410 < len__21740__auto___73409)){
args__21754__auto__.push((arguments[i__21741__auto___73410]));

var G__73411 = (i__21741__auto___73410 + (1));
i__21741__auto___73410 = G__73411;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq73408){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73408));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__73412){
var map__73413 = p__73412;
var map__73413__$1 = ((((!((map__73413 == null)))?((((map__73413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73413):map__73413);
var message = cljs.core.get.call(null,map__73413__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__73413__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19063__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19050__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19050__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19050__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__68452__auto___73492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___73492,ch){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___73492,ch){
return (function (state_73464){
var state_val_73465 = (state_73464[(1)]);
if((state_val_73465 === (7))){
var inst_73460 = (state_73464[(2)]);
var state_73464__$1 = state_73464;
var statearr_73466_73493 = state_73464__$1;
(statearr_73466_73493[(2)] = inst_73460);

(statearr_73466_73493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (1))){
var state_73464__$1 = state_73464;
var statearr_73467_73494 = state_73464__$1;
(statearr_73467_73494[(2)] = null);

(statearr_73467_73494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (4))){
var inst_73417 = (state_73464[(7)]);
var inst_73417__$1 = (state_73464[(2)]);
var state_73464__$1 = (function (){var statearr_73468 = state_73464;
(statearr_73468[(7)] = inst_73417__$1);

return statearr_73468;
})();
if(cljs.core.truth_(inst_73417__$1)){
var statearr_73469_73495 = state_73464__$1;
(statearr_73469_73495[(1)] = (5));

} else {
var statearr_73470_73496 = state_73464__$1;
(statearr_73470_73496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (15))){
var inst_73424 = (state_73464[(8)]);
var inst_73439 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73424);
var inst_73440 = cljs.core.first.call(null,inst_73439);
var inst_73441 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_73440);
var inst_73442 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73441)].join('');
var inst_73443 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_73442);
var state_73464__$1 = state_73464;
var statearr_73471_73497 = state_73464__$1;
(statearr_73471_73497[(2)] = inst_73443);

(statearr_73471_73497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (13))){
var inst_73448 = (state_73464[(2)]);
var state_73464__$1 = state_73464;
var statearr_73472_73498 = state_73464__$1;
(statearr_73472_73498[(2)] = inst_73448);

(statearr_73472_73498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (6))){
var state_73464__$1 = state_73464;
var statearr_73473_73499 = state_73464__$1;
(statearr_73473_73499[(2)] = null);

(statearr_73473_73499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (17))){
var inst_73446 = (state_73464[(2)]);
var state_73464__$1 = state_73464;
var statearr_73474_73500 = state_73464__$1;
(statearr_73474_73500[(2)] = inst_73446);

(statearr_73474_73500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (3))){
var inst_73462 = (state_73464[(2)]);
var state_73464__$1 = state_73464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73464__$1,inst_73462);
} else {
if((state_val_73465 === (12))){
var inst_73423 = (state_73464[(9)]);
var inst_73437 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_73423,opts);
var state_73464__$1 = state_73464;
if(cljs.core.truth_(inst_73437)){
var statearr_73475_73501 = state_73464__$1;
(statearr_73475_73501[(1)] = (15));

} else {
var statearr_73476_73502 = state_73464__$1;
(statearr_73476_73502[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (2))){
var state_73464__$1 = state_73464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73464__$1,(4),ch);
} else {
if((state_val_73465 === (11))){
var inst_73424 = (state_73464[(8)]);
var inst_73429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73430 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_73424);
var inst_73431 = cljs.core.async.timeout.call(null,(1000));
var inst_73432 = [inst_73430,inst_73431];
var inst_73433 = (new cljs.core.PersistentVector(null,2,(5),inst_73429,inst_73432,null));
var state_73464__$1 = state_73464;
return cljs.core.async.ioc_alts_BANG_.call(null,state_73464__$1,(14),inst_73433);
} else {
if((state_val_73465 === (9))){
var inst_73424 = (state_73464[(8)]);
var inst_73450 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_73451 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73424);
var inst_73452 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_73451);
var inst_73453 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73452)].join('');
var inst_73454 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_73453);
var state_73464__$1 = (function (){var statearr_73477 = state_73464;
(statearr_73477[(10)] = inst_73450);

return statearr_73477;
})();
var statearr_73478_73503 = state_73464__$1;
(statearr_73478_73503[(2)] = inst_73454);

(statearr_73478_73503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (5))){
var inst_73417 = (state_73464[(7)]);
var inst_73419 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_73420 = (new cljs.core.PersistentArrayMap(null,2,inst_73419,null));
var inst_73421 = (new cljs.core.PersistentHashSet(null,inst_73420,null));
var inst_73422 = figwheel.client.focus_msgs.call(null,inst_73421,inst_73417);
var inst_73423 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_73422);
var inst_73424 = cljs.core.first.call(null,inst_73422);
var inst_73425 = figwheel.client.autoload_QMARK_.call(null);
var state_73464__$1 = (function (){var statearr_73479 = state_73464;
(statearr_73479[(9)] = inst_73423);

(statearr_73479[(8)] = inst_73424);

return statearr_73479;
})();
if(cljs.core.truth_(inst_73425)){
var statearr_73480_73504 = state_73464__$1;
(statearr_73480_73504[(1)] = (8));

} else {
var statearr_73481_73505 = state_73464__$1;
(statearr_73481_73505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (14))){
var inst_73435 = (state_73464[(2)]);
var state_73464__$1 = state_73464;
var statearr_73482_73506 = state_73464__$1;
(statearr_73482_73506[(2)] = inst_73435);

(statearr_73482_73506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (16))){
var state_73464__$1 = state_73464;
var statearr_73483_73507 = state_73464__$1;
(statearr_73483_73507[(2)] = null);

(statearr_73483_73507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (10))){
var inst_73456 = (state_73464[(2)]);
var state_73464__$1 = (function (){var statearr_73484 = state_73464;
(statearr_73484[(11)] = inst_73456);

return statearr_73484;
})();
var statearr_73485_73508 = state_73464__$1;
(statearr_73485_73508[(2)] = null);

(statearr_73485_73508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73465 === (8))){
var inst_73423 = (state_73464[(9)]);
var inst_73427 = figwheel.client.reload_file_state_QMARK_.call(null,inst_73423,opts);
var state_73464__$1 = state_73464;
if(cljs.core.truth_(inst_73427)){
var statearr_73486_73509 = state_73464__$1;
(statearr_73486_73509[(1)] = (11));

} else {
var statearr_73487_73510 = state_73464__$1;
(statearr_73487_73510[(1)] = (12));

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
});})(c__68452__auto___73492,ch))
;
return ((function (switch__68362__auto__,c__68452__auto___73492,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__68363__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__68363__auto____0 = (function (){
var statearr_73488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73488[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__68363__auto__);

(statearr_73488[(1)] = (1));

return statearr_73488;
});
var figwheel$client$file_reloader_plugin_$_state_machine__68363__auto____1 = (function (state_73464){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_73464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e73489){if((e73489 instanceof Object)){
var ex__68366__auto__ = e73489;
var statearr_73490_73511 = state_73464;
(statearr_73490_73511[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73512 = state_73464;
state_73464 = G__73512;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__68363__auto__ = function(state_73464){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__68363__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__68363__auto____1.call(this,state_73464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__68363__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__68363__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___73492,ch))
})();
var state__68454__auto__ = (function (){var statearr_73491 = f__68453__auto__.call(null);
(statearr_73491[(6)] = c__68452__auto___73492);

return statearr_73491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___73492,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__73513_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__73513_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_73515 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_73515){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e73514){if((e73514 instanceof Error)){
var e = e73514;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_73515], null));
} else {
var e = e73514;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_73515))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__73516){
var map__73517 = p__73516;
var map__73517__$1 = ((((!((map__73517 == null)))?((((map__73517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73517):map__73517);
var opts = map__73517__$1;
var build_id = cljs.core.get.call(null,map__73517__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__73517,map__73517__$1,opts,build_id){
return (function (p__73519){
var vec__73520 = p__73519;
var seq__73521 = cljs.core.seq.call(null,vec__73520);
var first__73522 = cljs.core.first.call(null,seq__73521);
var seq__73521__$1 = cljs.core.next.call(null,seq__73521);
var map__73523 = first__73522;
var map__73523__$1 = ((((!((map__73523 == null)))?((((map__73523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73523):map__73523);
var msg = map__73523__$1;
var msg_name = cljs.core.get.call(null,map__73523__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73521__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__73520,seq__73521,first__73522,seq__73521__$1,map__73523,map__73523__$1,msg,msg_name,_,map__73517,map__73517__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__73520,seq__73521,first__73522,seq__73521__$1,map__73523,map__73523__$1,msg,msg_name,_,map__73517,map__73517__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__73517,map__73517__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__73525){
var vec__73526 = p__73525;
var seq__73527 = cljs.core.seq.call(null,vec__73526);
var first__73528 = cljs.core.first.call(null,seq__73527);
var seq__73527__$1 = cljs.core.next.call(null,seq__73527);
var map__73529 = first__73528;
var map__73529__$1 = ((((!((map__73529 == null)))?((((map__73529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73529):map__73529);
var msg = map__73529__$1;
var msg_name = cljs.core.get.call(null,map__73529__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73527__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__73531){
var map__73532 = p__73531;
var map__73532__$1 = ((((!((map__73532 == null)))?((((map__73532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73532):map__73532);
var on_compile_warning = cljs.core.get.call(null,map__73532__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__73532__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__73532,map__73532__$1,on_compile_warning,on_compile_fail){
return (function (p__73534){
var vec__73535 = p__73534;
var seq__73536 = cljs.core.seq.call(null,vec__73535);
var first__73537 = cljs.core.first.call(null,seq__73536);
var seq__73536__$1 = cljs.core.next.call(null,seq__73536);
var map__73538 = first__73537;
var map__73538__$1 = ((((!((map__73538 == null)))?((((map__73538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73538):map__73538);
var msg = map__73538__$1;
var msg_name = cljs.core.get.call(null,map__73538__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73536__$1;
var pred__73540 = cljs.core._EQ_;
var expr__73541 = msg_name;
if(cljs.core.truth_(pred__73540.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__73541))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__73540.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__73541))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__73532,map__73532__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__,msg_hist,msg_names,msg){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__,msg_hist,msg_names,msg){
return (function (state_73630){
var state_val_73631 = (state_73630[(1)]);
if((state_val_73631 === (7))){
var inst_73550 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
if(cljs.core.truth_(inst_73550)){
var statearr_73632_73679 = state_73630__$1;
(statearr_73632_73679[(1)] = (8));

} else {
var statearr_73633_73680 = state_73630__$1;
(statearr_73633_73680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (20))){
var inst_73624 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73634_73681 = state_73630__$1;
(statearr_73634_73681[(2)] = inst_73624);

(statearr_73634_73681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (27))){
var inst_73620 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73635_73682 = state_73630__$1;
(statearr_73635_73682[(2)] = inst_73620);

(statearr_73635_73682[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (1))){
var inst_73543 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_73630__$1 = state_73630;
if(cljs.core.truth_(inst_73543)){
var statearr_73636_73683 = state_73630__$1;
(statearr_73636_73683[(1)] = (2));

} else {
var statearr_73637_73684 = state_73630__$1;
(statearr_73637_73684[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (24))){
var inst_73622 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73638_73685 = state_73630__$1;
(statearr_73638_73685[(2)] = inst_73622);

(statearr_73638_73685[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (4))){
var inst_73628 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73630__$1,inst_73628);
} else {
if((state_val_73631 === (15))){
var inst_73626 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73639_73686 = state_73630__$1;
(statearr_73639_73686[(2)] = inst_73626);

(statearr_73639_73686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (21))){
var inst_73579 = (state_73630[(2)]);
var inst_73580 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73581 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73580);
var state_73630__$1 = (function (){var statearr_73640 = state_73630;
(statearr_73640[(7)] = inst_73579);

return statearr_73640;
})();
var statearr_73641_73687 = state_73630__$1;
(statearr_73641_73687[(2)] = inst_73581);

(statearr_73641_73687[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (31))){
var inst_73609 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_73630__$1 = state_73630;
if(cljs.core.truth_(inst_73609)){
var statearr_73642_73688 = state_73630__$1;
(statearr_73642_73688[(1)] = (34));

} else {
var statearr_73643_73689 = state_73630__$1;
(statearr_73643_73689[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (32))){
var inst_73618 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73644_73690 = state_73630__$1;
(statearr_73644_73690[(2)] = inst_73618);

(statearr_73644_73690[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (33))){
var inst_73605 = (state_73630[(2)]);
var inst_73606 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73607 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73606);
var state_73630__$1 = (function (){var statearr_73645 = state_73630;
(statearr_73645[(8)] = inst_73605);

return statearr_73645;
})();
var statearr_73646_73691 = state_73630__$1;
(statearr_73646_73691[(2)] = inst_73607);

(statearr_73646_73691[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (13))){
var inst_73564 = figwheel.client.heads_up.clear.call(null);
var state_73630__$1 = state_73630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(16),inst_73564);
} else {
if((state_val_73631 === (22))){
var inst_73585 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73586 = figwheel.client.heads_up.append_warning_message.call(null,inst_73585);
var state_73630__$1 = state_73630;
var statearr_73647_73692 = state_73630__$1;
(statearr_73647_73692[(2)] = inst_73586);

(statearr_73647_73692[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (36))){
var inst_73616 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73648_73693 = state_73630__$1;
(statearr_73648_73693[(2)] = inst_73616);

(statearr_73648_73693[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (29))){
var inst_73596 = (state_73630[(2)]);
var inst_73597 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73598 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73597);
var state_73630__$1 = (function (){var statearr_73649 = state_73630;
(statearr_73649[(9)] = inst_73596);

return statearr_73649;
})();
var statearr_73650_73694 = state_73630__$1;
(statearr_73650_73694[(2)] = inst_73598);

(statearr_73650_73694[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (6))){
var inst_73545 = (state_73630[(10)]);
var state_73630__$1 = state_73630;
var statearr_73651_73695 = state_73630__$1;
(statearr_73651_73695[(2)] = inst_73545);

(statearr_73651_73695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (28))){
var inst_73592 = (state_73630[(2)]);
var inst_73593 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73594 = figwheel.client.heads_up.display_warning.call(null,inst_73593);
var state_73630__$1 = (function (){var statearr_73652 = state_73630;
(statearr_73652[(11)] = inst_73592);

return statearr_73652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(29),inst_73594);
} else {
if((state_val_73631 === (25))){
var inst_73590 = figwheel.client.heads_up.clear.call(null);
var state_73630__$1 = state_73630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(28),inst_73590);
} else {
if((state_val_73631 === (34))){
var inst_73611 = figwheel.client.heads_up.flash_loaded.call(null);
var state_73630__$1 = state_73630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(37),inst_73611);
} else {
if((state_val_73631 === (17))){
var inst_73570 = (state_73630[(2)]);
var inst_73571 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73572 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73571);
var state_73630__$1 = (function (){var statearr_73653 = state_73630;
(statearr_73653[(12)] = inst_73570);

return statearr_73653;
})();
var statearr_73654_73696 = state_73630__$1;
(statearr_73654_73696[(2)] = inst_73572);

(statearr_73654_73696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (3))){
var inst_73562 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_73630__$1 = state_73630;
if(cljs.core.truth_(inst_73562)){
var statearr_73655_73697 = state_73630__$1;
(statearr_73655_73697[(1)] = (13));

} else {
var statearr_73656_73698 = state_73630__$1;
(statearr_73656_73698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (12))){
var inst_73558 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73657_73699 = state_73630__$1;
(statearr_73657_73699[(2)] = inst_73558);

(statearr_73657_73699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (2))){
var inst_73545 = (state_73630[(10)]);
var inst_73545__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_73630__$1 = (function (){var statearr_73658 = state_73630;
(statearr_73658[(10)] = inst_73545__$1);

return statearr_73658;
})();
if(cljs.core.truth_(inst_73545__$1)){
var statearr_73659_73700 = state_73630__$1;
(statearr_73659_73700[(1)] = (5));

} else {
var statearr_73660_73701 = state_73630__$1;
(statearr_73660_73701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (23))){
var inst_73588 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_73630__$1 = state_73630;
if(cljs.core.truth_(inst_73588)){
var statearr_73661_73702 = state_73630__$1;
(statearr_73661_73702[(1)] = (25));

} else {
var statearr_73662_73703 = state_73630__$1;
(statearr_73662_73703[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (35))){
var state_73630__$1 = state_73630;
var statearr_73663_73704 = state_73630__$1;
(statearr_73663_73704[(2)] = null);

(statearr_73663_73704[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (19))){
var inst_73583 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_73630__$1 = state_73630;
if(cljs.core.truth_(inst_73583)){
var statearr_73664_73705 = state_73630__$1;
(statearr_73664_73705[(1)] = (22));

} else {
var statearr_73665_73706 = state_73630__$1;
(statearr_73665_73706[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (11))){
var inst_73554 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73666_73707 = state_73630__$1;
(statearr_73666_73707[(2)] = inst_73554);

(statearr_73666_73707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (9))){
var inst_73556 = figwheel.client.heads_up.clear.call(null);
var state_73630__$1 = state_73630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(12),inst_73556);
} else {
if((state_val_73631 === (5))){
var inst_73547 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_73630__$1 = state_73630;
var statearr_73667_73708 = state_73630__$1;
(statearr_73667_73708[(2)] = inst_73547);

(statearr_73667_73708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (14))){
var inst_73574 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_73630__$1 = state_73630;
if(cljs.core.truth_(inst_73574)){
var statearr_73668_73709 = state_73630__$1;
(statearr_73668_73709[(1)] = (18));

} else {
var statearr_73669_73710 = state_73630__$1;
(statearr_73669_73710[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (26))){
var inst_73600 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_73630__$1 = state_73630;
if(cljs.core.truth_(inst_73600)){
var statearr_73670_73711 = state_73630__$1;
(statearr_73670_73711[(1)] = (30));

} else {
var statearr_73671_73712 = state_73630__$1;
(statearr_73671_73712[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (16))){
var inst_73566 = (state_73630[(2)]);
var inst_73567 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73568 = figwheel.client.heads_up.display_exception.call(null,inst_73567);
var state_73630__$1 = (function (){var statearr_73672 = state_73630;
(statearr_73672[(13)] = inst_73566);

return statearr_73672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(17),inst_73568);
} else {
if((state_val_73631 === (30))){
var inst_73602 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73603 = figwheel.client.heads_up.display_warning.call(null,inst_73602);
var state_73630__$1 = state_73630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(33),inst_73603);
} else {
if((state_val_73631 === (10))){
var inst_73560 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73673_73713 = state_73630__$1;
(statearr_73673_73713[(2)] = inst_73560);

(statearr_73673_73713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (18))){
var inst_73576 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73577 = figwheel.client.heads_up.display_exception.call(null,inst_73576);
var state_73630__$1 = state_73630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(21),inst_73577);
} else {
if((state_val_73631 === (37))){
var inst_73613 = (state_73630[(2)]);
var state_73630__$1 = state_73630;
var statearr_73674_73714 = state_73630__$1;
(statearr_73674_73714[(2)] = inst_73613);

(statearr_73674_73714[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73631 === (8))){
var inst_73552 = figwheel.client.heads_up.flash_loaded.call(null);
var state_73630__$1 = state_73630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73630__$1,(11),inst_73552);
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
});})(c__68452__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__68362__auto__,c__68452__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto____0 = (function (){
var statearr_73675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73675[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto__);

(statearr_73675[(1)] = (1));

return statearr_73675;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto____1 = (function (state_73630){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_73630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e73676){if((e73676 instanceof Object)){
var ex__68366__auto__ = e73676;
var statearr_73677_73715 = state_73630;
(statearr_73677_73715[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73716 = state_73630;
state_73630 = G__73716;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto__ = function(state_73630){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto____1.call(this,state_73630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__,msg_hist,msg_names,msg))
})();
var state__68454__auto__ = (function (){var statearr_73678 = f__68453__auto__.call(null);
(statearr_73678[(6)] = c__68452__auto__);

return statearr_73678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__,msg_hist,msg_names,msg))
);

return c__68452__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__68452__auto___73745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___73745,ch){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___73745,ch){
return (function (state_73731){
var state_val_73732 = (state_73731[(1)]);
if((state_val_73732 === (1))){
var state_73731__$1 = state_73731;
var statearr_73733_73746 = state_73731__$1;
(statearr_73733_73746[(2)] = null);

(statearr_73733_73746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73732 === (2))){
var state_73731__$1 = state_73731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73731__$1,(4),ch);
} else {
if((state_val_73732 === (3))){
var inst_73729 = (state_73731[(2)]);
var state_73731__$1 = state_73731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73731__$1,inst_73729);
} else {
if((state_val_73732 === (4))){
var inst_73719 = (state_73731[(7)]);
var inst_73719__$1 = (state_73731[(2)]);
var state_73731__$1 = (function (){var statearr_73734 = state_73731;
(statearr_73734[(7)] = inst_73719__$1);

return statearr_73734;
})();
if(cljs.core.truth_(inst_73719__$1)){
var statearr_73735_73747 = state_73731__$1;
(statearr_73735_73747[(1)] = (5));

} else {
var statearr_73736_73748 = state_73731__$1;
(statearr_73736_73748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73732 === (5))){
var inst_73719 = (state_73731[(7)]);
var inst_73721 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_73719);
var state_73731__$1 = state_73731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73731__$1,(8),inst_73721);
} else {
if((state_val_73732 === (6))){
var state_73731__$1 = state_73731;
var statearr_73737_73749 = state_73731__$1;
(statearr_73737_73749[(2)] = null);

(statearr_73737_73749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73732 === (7))){
var inst_73727 = (state_73731[(2)]);
var state_73731__$1 = state_73731;
var statearr_73738_73750 = state_73731__$1;
(statearr_73738_73750[(2)] = inst_73727);

(statearr_73738_73750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73732 === (8))){
var inst_73723 = (state_73731[(2)]);
var state_73731__$1 = (function (){var statearr_73739 = state_73731;
(statearr_73739[(8)] = inst_73723);

return statearr_73739;
})();
var statearr_73740_73751 = state_73731__$1;
(statearr_73740_73751[(2)] = null);

(statearr_73740_73751[(1)] = (2));


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
});})(c__68452__auto___73745,ch))
;
return ((function (switch__68362__auto__,c__68452__auto___73745,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__68363__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__68363__auto____0 = (function (){
var statearr_73741 = [null,null,null,null,null,null,null,null,null];
(statearr_73741[(0)] = figwheel$client$heads_up_plugin_$_state_machine__68363__auto__);

(statearr_73741[(1)] = (1));

return statearr_73741;
});
var figwheel$client$heads_up_plugin_$_state_machine__68363__auto____1 = (function (state_73731){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_73731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e73742){if((e73742 instanceof Object)){
var ex__68366__auto__ = e73742;
var statearr_73743_73752 = state_73731;
(statearr_73743_73752[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73753 = state_73731;
state_73731 = G__73753;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__68363__auto__ = function(state_73731){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__68363__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__68363__auto____1.call(this,state_73731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__68363__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__68363__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___73745,ch))
})();
var state__68454__auto__ = (function (){var statearr_73744 = f__68453__auto__.call(null);
(statearr_73744[(6)] = c__68452__auto___73745);

return statearr_73744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___73745,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__){
return (function (state_73759){
var state_val_73760 = (state_73759[(1)]);
if((state_val_73760 === (1))){
var inst_73754 = cljs.core.async.timeout.call(null,(3000));
var state_73759__$1 = state_73759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73759__$1,(2),inst_73754);
} else {
if((state_val_73760 === (2))){
var inst_73756 = (state_73759[(2)]);
var inst_73757 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_73759__$1 = (function (){var statearr_73761 = state_73759;
(statearr_73761[(7)] = inst_73756);

return statearr_73761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73759__$1,inst_73757);
} else {
return null;
}
}
});})(c__68452__auto__))
;
return ((function (switch__68362__auto__,c__68452__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__68363__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__68363__auto____0 = (function (){
var statearr_73762 = [null,null,null,null,null,null,null,null];
(statearr_73762[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__68363__auto__);

(statearr_73762[(1)] = (1));

return statearr_73762;
});
var figwheel$client$enforce_project_plugin_$_state_machine__68363__auto____1 = (function (state_73759){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_73759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e73763){if((e73763 instanceof Object)){
var ex__68366__auto__ = e73763;
var statearr_73764_73766 = state_73759;
(statearr_73764_73766[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73767 = state_73759;
state_73759 = G__73767;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__68363__auto__ = function(state_73759){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__68363__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__68363__auto____1.call(this,state_73759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__68363__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__68363__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__))
})();
var state__68454__auto__ = (function (){var statearr_73765 = f__68453__auto__.call(null);
(statearr_73765[(6)] = c__68452__auto__);

return statearr_73765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__))
);

return c__68452__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__,figwheel_version,temp__5457__auto__){
return (function (state_73774){
var state_val_73775 = (state_73774[(1)]);
if((state_val_73775 === (1))){
var inst_73768 = cljs.core.async.timeout.call(null,(2000));
var state_73774__$1 = state_73774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73774__$1,(2),inst_73768);
} else {
if((state_val_73775 === (2))){
var inst_73770 = (state_73774[(2)]);
var inst_73771 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_73772 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_73771);
var state_73774__$1 = (function (){var statearr_73776 = state_73774;
(statearr_73776[(7)] = inst_73770);

return statearr_73776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73774__$1,inst_73772);
} else {
return null;
}
}
});})(c__68452__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__68362__auto__,c__68452__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto____0 = (function (){
var statearr_73777 = [null,null,null,null,null,null,null,null];
(statearr_73777[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto__);

(statearr_73777[(1)] = (1));

return statearr_73777;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto____1 = (function (state_73774){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_73774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e73778){if((e73778 instanceof Object)){
var ex__68366__auto__ = e73778;
var statearr_73779_73781 = state_73774;
(statearr_73779_73781[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73782 = state_73774;
state_73774 = G__73782;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto__ = function(state_73774){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto____1.call(this,state_73774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__,figwheel_version,temp__5457__auto__))
})();
var state__68454__auto__ = (function (){var statearr_73780 = f__68453__auto__.call(null);
(statearr_73780[(6)] = c__68452__auto__);

return statearr_73780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__,figwheel_version,temp__5457__auto__))
);

return c__68452__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__73783){
var map__73784 = p__73783;
var map__73784__$1 = ((((!((map__73784 == null)))?((((map__73784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73784):map__73784);
var file = cljs.core.get.call(null,map__73784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__73784__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__73784__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__73786 = "";
var G__73786__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73786),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__73786);
var G__73786__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73786__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__73786__$1);
if(cljs.core.truth_((function (){var and__19050__auto__ = line;
if(cljs.core.truth_(and__19050__auto__)){
return column;
} else {
return and__19050__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73786__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__73786__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__73787){
var map__73788 = p__73787;
var map__73788__$1 = ((((!((map__73788 == null)))?((((map__73788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73788):map__73788);
var ed = map__73788__$1;
var formatted_exception = cljs.core.get.call(null,map__73788__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__73788__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__73788__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__73790_73794 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__73791_73795 = null;
var count__73792_73796 = (0);
var i__73793_73797 = (0);
while(true){
if((i__73793_73797 < count__73792_73796)){
var msg_73798 = cljs.core._nth.call(null,chunk__73791_73795,i__73793_73797);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_73798);

var G__73799 = seq__73790_73794;
var G__73800 = chunk__73791_73795;
var G__73801 = count__73792_73796;
var G__73802 = (i__73793_73797 + (1));
seq__73790_73794 = G__73799;
chunk__73791_73795 = G__73800;
count__73792_73796 = G__73801;
i__73793_73797 = G__73802;
continue;
} else {
var temp__5457__auto___73803 = cljs.core.seq.call(null,seq__73790_73794);
if(temp__5457__auto___73803){
var seq__73790_73804__$1 = temp__5457__auto___73803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73790_73804__$1)){
var c__21063__auto___73805 = cljs.core.chunk_first.call(null,seq__73790_73804__$1);
var G__73806 = cljs.core.chunk_rest.call(null,seq__73790_73804__$1);
var G__73807 = c__21063__auto___73805;
var G__73808 = cljs.core.count.call(null,c__21063__auto___73805);
var G__73809 = (0);
seq__73790_73794 = G__73806;
chunk__73791_73795 = G__73807;
count__73792_73796 = G__73808;
i__73793_73797 = G__73809;
continue;
} else {
var msg_73810 = cljs.core.first.call(null,seq__73790_73804__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_73810);

var G__73811 = cljs.core.next.call(null,seq__73790_73804__$1);
var G__73812 = null;
var G__73813 = (0);
var G__73814 = (0);
seq__73790_73794 = G__73811;
chunk__73791_73795 = G__73812;
count__73792_73796 = G__73813;
i__73793_73797 = G__73814;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__73815){
var map__73816 = p__73815;
var map__73816__$1 = ((((!((map__73816 == null)))?((((map__73816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73816):map__73816);
var w = map__73816__$1;
var message = cljs.core.get.call(null,map__73816__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/dev/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/dev/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19050__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19050__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19050__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__73818 = cljs.core.seq.call(null,plugins);
var chunk__73819 = null;
var count__73820 = (0);
var i__73821 = (0);
while(true){
if((i__73821 < count__73820)){
var vec__73822 = cljs.core._nth.call(null,chunk__73819,i__73821);
var k = cljs.core.nth.call(null,vec__73822,(0),null);
var plugin = cljs.core.nth.call(null,vec__73822,(1),null);
if(cljs.core.truth_(plugin)){
var pl_73828 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__73818,chunk__73819,count__73820,i__73821,pl_73828,vec__73822,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_73828.call(null,msg_hist);
});})(seq__73818,chunk__73819,count__73820,i__73821,pl_73828,vec__73822,k,plugin))
);
} else {
}

var G__73829 = seq__73818;
var G__73830 = chunk__73819;
var G__73831 = count__73820;
var G__73832 = (i__73821 + (1));
seq__73818 = G__73829;
chunk__73819 = G__73830;
count__73820 = G__73831;
i__73821 = G__73832;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__73818);
if(temp__5457__auto__){
var seq__73818__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73818__$1)){
var c__21063__auto__ = cljs.core.chunk_first.call(null,seq__73818__$1);
var G__73833 = cljs.core.chunk_rest.call(null,seq__73818__$1);
var G__73834 = c__21063__auto__;
var G__73835 = cljs.core.count.call(null,c__21063__auto__);
var G__73836 = (0);
seq__73818 = G__73833;
chunk__73819 = G__73834;
count__73820 = G__73835;
i__73821 = G__73836;
continue;
} else {
var vec__73825 = cljs.core.first.call(null,seq__73818__$1);
var k = cljs.core.nth.call(null,vec__73825,(0),null);
var plugin = cljs.core.nth.call(null,vec__73825,(1),null);
if(cljs.core.truth_(plugin)){
var pl_73837 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__73818,chunk__73819,count__73820,i__73821,pl_73837,vec__73825,k,plugin,seq__73818__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_73837.call(null,msg_hist);
});})(seq__73818,chunk__73819,count__73820,i__73821,pl_73837,vec__73825,k,plugin,seq__73818__$1,temp__5457__auto__))
);
} else {
}

var G__73838 = cljs.core.next.call(null,seq__73818__$1);
var G__73839 = null;
var G__73840 = (0);
var G__73841 = (0);
seq__73818 = G__73838;
chunk__73819 = G__73839;
count__73820 = G__73840;
i__73821 = G__73841;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__73843 = arguments.length;
switch (G__73843) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__73844_73849 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__73845_73850 = null;
var count__73846_73851 = (0);
var i__73847_73852 = (0);
while(true){
if((i__73847_73852 < count__73846_73851)){
var msg_73853 = cljs.core._nth.call(null,chunk__73845_73850,i__73847_73852);
figwheel.client.socket.handle_incoming_message.call(null,msg_73853);

var G__73854 = seq__73844_73849;
var G__73855 = chunk__73845_73850;
var G__73856 = count__73846_73851;
var G__73857 = (i__73847_73852 + (1));
seq__73844_73849 = G__73854;
chunk__73845_73850 = G__73855;
count__73846_73851 = G__73856;
i__73847_73852 = G__73857;
continue;
} else {
var temp__5457__auto___73858 = cljs.core.seq.call(null,seq__73844_73849);
if(temp__5457__auto___73858){
var seq__73844_73859__$1 = temp__5457__auto___73858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73844_73859__$1)){
var c__21063__auto___73860 = cljs.core.chunk_first.call(null,seq__73844_73859__$1);
var G__73861 = cljs.core.chunk_rest.call(null,seq__73844_73859__$1);
var G__73862 = c__21063__auto___73860;
var G__73863 = cljs.core.count.call(null,c__21063__auto___73860);
var G__73864 = (0);
seq__73844_73849 = G__73861;
chunk__73845_73850 = G__73862;
count__73846_73851 = G__73863;
i__73847_73852 = G__73864;
continue;
} else {
var msg_73865 = cljs.core.first.call(null,seq__73844_73859__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_73865);

var G__73866 = cljs.core.next.call(null,seq__73844_73859__$1);
var G__73867 = null;
var G__73868 = (0);
var G__73869 = (0);
seq__73844_73849 = G__73866;
chunk__73845_73850 = G__73867;
count__73846_73851 = G__73868;
i__73847_73852 = G__73869;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21754__auto__ = [];
var len__21740__auto___73874 = arguments.length;
var i__21741__auto___73875 = (0);
while(true){
if((i__21741__auto___73875 < len__21740__auto___73874)){
args__21754__auto__.push((arguments[i__21741__auto___73875]));

var G__73876 = (i__21741__auto___73875 + (1));
i__21741__auto___73875 = G__73876;
continue;
} else {
}
break;
}

var argseq__21755__auto__ = ((((0) < args__21754__auto__.length))?(new cljs.core.IndexedSeq(args__21754__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21755__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__73871){
var map__73872 = p__73871;
var map__73872__$1 = ((((!((map__73872 == null)))?((((map__73872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73872):map__73872);
var opts = map__73872__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq73870){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73870));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e73877){if((e73877 instanceof Error)){
var e = e73877;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e73877;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__73878){
var map__73879 = p__73878;
var map__73879__$1 = ((((!((map__73879 == null)))?((((map__73879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73879):map__73879);
var msg_name = cljs.core.get.call(null,map__73879__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518983351970
