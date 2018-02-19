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
}catch (e73400){if((e73400 instanceof Error)){
var e = e73400;
return "Error: Unable to stringify";
} else {
throw e73400;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__73403 = arguments.length;
switch (G__73403) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__73401_SHARP_){
if(typeof p1__73401_SHARP_ === 'string'){
return p1__73401_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__73401_SHARP_);
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
var args__42181__auto__ = [];
var len__42174__auto___73406 = arguments.length;
var i__42175__auto___73407 = (0);
while(true){
if((i__42175__auto___73407 < len__42174__auto___73406)){
args__42181__auto__.push((arguments[i__42175__auto___73407]));

var G__73408 = (i__42175__auto___73407 + (1));
i__42175__auto___73407 = G__73408;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq73405){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73405));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42181__auto__ = [];
var len__42174__auto___73410 = arguments.length;
var i__42175__auto___73411 = (0);
while(true){
if((i__42175__auto___73411 < len__42174__auto___73410)){
args__42181__auto__.push((arguments[i__42175__auto___73411]));

var G__73412 = (i__42175__auto___73411 + (1));
i__42175__auto___73411 = G__73412;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq73409){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73409));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__73413){
var map__73414 = p__73413;
var map__73414__$1 = ((((!((map__73414 == null)))?((((map__73414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73414):map__73414);
var message = cljs.core.get.call(null,map__73414__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__73414__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__39945__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__39919__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__39919__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__39919__auto__;
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
var c__68453__auto___73493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___73493,ch){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___73493,ch){
return (function (state_73465){
var state_val_73466 = (state_73465[(1)]);
if((state_val_73466 === (7))){
var inst_73461 = (state_73465[(2)]);
var state_73465__$1 = state_73465;
var statearr_73467_73494 = state_73465__$1;
(statearr_73467_73494[(2)] = inst_73461);

(statearr_73467_73494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (1))){
var state_73465__$1 = state_73465;
var statearr_73468_73495 = state_73465__$1;
(statearr_73468_73495[(2)] = null);

(statearr_73468_73495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (4))){
var inst_73418 = (state_73465[(7)]);
var inst_73418__$1 = (state_73465[(2)]);
var state_73465__$1 = (function (){var statearr_73469 = state_73465;
(statearr_73469[(7)] = inst_73418__$1);

return statearr_73469;
})();
if(cljs.core.truth_(inst_73418__$1)){
var statearr_73470_73496 = state_73465__$1;
(statearr_73470_73496[(1)] = (5));

} else {
var statearr_73471_73497 = state_73465__$1;
(statearr_73471_73497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (15))){
var inst_73425 = (state_73465[(8)]);
var inst_73440 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73425);
var inst_73441 = cljs.core.first.call(null,inst_73440);
var inst_73442 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_73441);
var inst_73443 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73442)].join('');
var inst_73444 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_73443);
var state_73465__$1 = state_73465;
var statearr_73472_73498 = state_73465__$1;
(statearr_73472_73498[(2)] = inst_73444);

(statearr_73472_73498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (13))){
var inst_73449 = (state_73465[(2)]);
var state_73465__$1 = state_73465;
var statearr_73473_73499 = state_73465__$1;
(statearr_73473_73499[(2)] = inst_73449);

(statearr_73473_73499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (6))){
var state_73465__$1 = state_73465;
var statearr_73474_73500 = state_73465__$1;
(statearr_73474_73500[(2)] = null);

(statearr_73474_73500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (17))){
var inst_73447 = (state_73465[(2)]);
var state_73465__$1 = state_73465;
var statearr_73475_73501 = state_73465__$1;
(statearr_73475_73501[(2)] = inst_73447);

(statearr_73475_73501[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (3))){
var inst_73463 = (state_73465[(2)]);
var state_73465__$1 = state_73465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73465__$1,inst_73463);
} else {
if((state_val_73466 === (12))){
var inst_73424 = (state_73465[(9)]);
var inst_73438 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_73424,opts);
var state_73465__$1 = state_73465;
if(cljs.core.truth_(inst_73438)){
var statearr_73476_73502 = state_73465__$1;
(statearr_73476_73502[(1)] = (15));

} else {
var statearr_73477_73503 = state_73465__$1;
(statearr_73477_73503[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (2))){
var state_73465__$1 = state_73465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73465__$1,(4),ch);
} else {
if((state_val_73466 === (11))){
var inst_73425 = (state_73465[(8)]);
var inst_73430 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73431 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_73425);
var inst_73432 = cljs.core.async.timeout.call(null,(1000));
var inst_73433 = [inst_73431,inst_73432];
var inst_73434 = (new cljs.core.PersistentVector(null,2,(5),inst_73430,inst_73433,null));
var state_73465__$1 = state_73465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_73465__$1,(14),inst_73434);
} else {
if((state_val_73466 === (9))){
var inst_73425 = (state_73465[(8)]);
var inst_73451 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_73452 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73425);
var inst_73453 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_73452);
var inst_73454 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73453)].join('');
var inst_73455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_73454);
var state_73465__$1 = (function (){var statearr_73478 = state_73465;
(statearr_73478[(10)] = inst_73451);

return statearr_73478;
})();
var statearr_73479_73504 = state_73465__$1;
(statearr_73479_73504[(2)] = inst_73455);

(statearr_73479_73504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (5))){
var inst_73418 = (state_73465[(7)]);
var inst_73420 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_73421 = (new cljs.core.PersistentArrayMap(null,2,inst_73420,null));
var inst_73422 = (new cljs.core.PersistentHashSet(null,inst_73421,null));
var inst_73423 = figwheel.client.focus_msgs.call(null,inst_73422,inst_73418);
var inst_73424 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_73423);
var inst_73425 = cljs.core.first.call(null,inst_73423);
var inst_73426 = figwheel.client.autoload_QMARK_.call(null);
var state_73465__$1 = (function (){var statearr_73480 = state_73465;
(statearr_73480[(8)] = inst_73425);

(statearr_73480[(9)] = inst_73424);

return statearr_73480;
})();
if(cljs.core.truth_(inst_73426)){
var statearr_73481_73505 = state_73465__$1;
(statearr_73481_73505[(1)] = (8));

} else {
var statearr_73482_73506 = state_73465__$1;
(statearr_73482_73506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (14))){
var inst_73436 = (state_73465[(2)]);
var state_73465__$1 = state_73465;
var statearr_73483_73507 = state_73465__$1;
(statearr_73483_73507[(2)] = inst_73436);

(statearr_73483_73507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (16))){
var state_73465__$1 = state_73465;
var statearr_73484_73508 = state_73465__$1;
(statearr_73484_73508[(2)] = null);

(statearr_73484_73508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (10))){
var inst_73457 = (state_73465[(2)]);
var state_73465__$1 = (function (){var statearr_73485 = state_73465;
(statearr_73485[(11)] = inst_73457);

return statearr_73485;
})();
var statearr_73486_73509 = state_73465__$1;
(statearr_73486_73509[(2)] = null);

(statearr_73486_73509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73466 === (8))){
var inst_73424 = (state_73465[(9)]);
var inst_73428 = figwheel.client.reload_file_state_QMARK_.call(null,inst_73424,opts);
var state_73465__$1 = state_73465;
if(cljs.core.truth_(inst_73428)){
var statearr_73487_73510 = state_73465__$1;
(statearr_73487_73510[(1)] = (11));

} else {
var statearr_73488_73511 = state_73465__$1;
(statearr_73488_73511[(1)] = (12));

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
});})(c__68453__auto___73493,ch))
;
return ((function (switch__68363__auto__,c__68453__auto___73493,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____0 = (function (){
var statearr_73489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73489[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__);

(statearr_73489[(1)] = (1));

return statearr_73489;
});
var figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____1 = (function (state_73465){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_73465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e73490){if((e73490 instanceof Object)){
var ex__68367__auto__ = e73490;
var statearr_73491_73512 = state_73465;
(statearr_73491_73512[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73513 = state_73465;
state_73465 = G__73513;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__ = function(state_73465){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____1.call(this,state_73465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___73493,ch))
})();
var state__68455__auto__ = (function (){var statearr_73492 = f__68454__auto__.call(null);
(statearr_73492[(6)] = c__68453__auto___73493);

return statearr_73492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___73493,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__73514_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__73514_SHARP_));
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
var base_path_73516 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_73516){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e73515){if((e73515 instanceof Error)){
var e = e73515;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_73516], null));
} else {
var e = e73515;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_73516))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__73517){
var map__73518 = p__73517;
var map__73518__$1 = ((((!((map__73518 == null)))?((((map__73518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73518):map__73518);
var opts = map__73518__$1;
var build_id = cljs.core.get.call(null,map__73518__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__73518,map__73518__$1,opts,build_id){
return (function (p__73520){
var vec__73521 = p__73520;
var seq__73522 = cljs.core.seq.call(null,vec__73521);
var first__73523 = cljs.core.first.call(null,seq__73522);
var seq__73522__$1 = cljs.core.next.call(null,seq__73522);
var map__73524 = first__73523;
var map__73524__$1 = ((((!((map__73524 == null)))?((((map__73524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73524):map__73524);
var msg = map__73524__$1;
var msg_name = cljs.core.get.call(null,map__73524__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73522__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__73521,seq__73522,first__73523,seq__73522__$1,map__73524,map__73524__$1,msg,msg_name,_,map__73518,map__73518__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__73521,seq__73522,first__73523,seq__73522__$1,map__73524,map__73524__$1,msg,msg_name,_,map__73518,map__73518__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__73518,map__73518__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__73526){
var vec__73527 = p__73526;
var seq__73528 = cljs.core.seq.call(null,vec__73527);
var first__73529 = cljs.core.first.call(null,seq__73528);
var seq__73528__$1 = cljs.core.next.call(null,seq__73528);
var map__73530 = first__73529;
var map__73530__$1 = ((((!((map__73530 == null)))?((((map__73530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73530):map__73530);
var msg = map__73530__$1;
var msg_name = cljs.core.get.call(null,map__73530__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73528__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__73532){
var map__73533 = p__73532;
var map__73533__$1 = ((((!((map__73533 == null)))?((((map__73533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73533):map__73533);
var on_compile_warning = cljs.core.get.call(null,map__73533__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__73533__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__73533,map__73533__$1,on_compile_warning,on_compile_fail){
return (function (p__73535){
var vec__73536 = p__73535;
var seq__73537 = cljs.core.seq.call(null,vec__73536);
var first__73538 = cljs.core.first.call(null,seq__73537);
var seq__73537__$1 = cljs.core.next.call(null,seq__73537);
var map__73539 = first__73538;
var map__73539__$1 = ((((!((map__73539 == null)))?((((map__73539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73539):map__73539);
var msg = map__73539__$1;
var msg_name = cljs.core.get.call(null,map__73539__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73537__$1;
var pred__73541 = cljs.core._EQ_;
var expr__73542 = msg_name;
if(cljs.core.truth_(pred__73541.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__73542))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__73541.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__73542))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__73533,map__73533__$1,on_compile_warning,on_compile_fail))
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
var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__,msg_hist,msg_names,msg){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__,msg_hist,msg_names,msg){
return (function (state_73631){
var state_val_73632 = (state_73631[(1)]);
if((state_val_73632 === (7))){
var inst_73551 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
if(cljs.core.truth_(inst_73551)){
var statearr_73633_73680 = state_73631__$1;
(statearr_73633_73680[(1)] = (8));

} else {
var statearr_73634_73681 = state_73631__$1;
(statearr_73634_73681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (20))){
var inst_73625 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73635_73682 = state_73631__$1;
(statearr_73635_73682[(2)] = inst_73625);

(statearr_73635_73682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (27))){
var inst_73621 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73636_73683 = state_73631__$1;
(statearr_73636_73683[(2)] = inst_73621);

(statearr_73636_73683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (1))){
var inst_73544 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_73631__$1 = state_73631;
if(cljs.core.truth_(inst_73544)){
var statearr_73637_73684 = state_73631__$1;
(statearr_73637_73684[(1)] = (2));

} else {
var statearr_73638_73685 = state_73631__$1;
(statearr_73638_73685[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (24))){
var inst_73623 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73639_73686 = state_73631__$1;
(statearr_73639_73686[(2)] = inst_73623);

(statearr_73639_73686[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (4))){
var inst_73629 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73631__$1,inst_73629);
} else {
if((state_val_73632 === (15))){
var inst_73627 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73640_73687 = state_73631__$1;
(statearr_73640_73687[(2)] = inst_73627);

(statearr_73640_73687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (21))){
var inst_73580 = (state_73631[(2)]);
var inst_73581 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73582 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73581);
var state_73631__$1 = (function (){var statearr_73641 = state_73631;
(statearr_73641[(7)] = inst_73580);

return statearr_73641;
})();
var statearr_73642_73688 = state_73631__$1;
(statearr_73642_73688[(2)] = inst_73582);

(statearr_73642_73688[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (31))){
var inst_73610 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_73631__$1 = state_73631;
if(cljs.core.truth_(inst_73610)){
var statearr_73643_73689 = state_73631__$1;
(statearr_73643_73689[(1)] = (34));

} else {
var statearr_73644_73690 = state_73631__$1;
(statearr_73644_73690[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (32))){
var inst_73619 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73645_73691 = state_73631__$1;
(statearr_73645_73691[(2)] = inst_73619);

(statearr_73645_73691[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (33))){
var inst_73606 = (state_73631[(2)]);
var inst_73607 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73608 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73607);
var state_73631__$1 = (function (){var statearr_73646 = state_73631;
(statearr_73646[(8)] = inst_73606);

return statearr_73646;
})();
var statearr_73647_73692 = state_73631__$1;
(statearr_73647_73692[(2)] = inst_73608);

(statearr_73647_73692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (13))){
var inst_73565 = figwheel.client.heads_up.clear.call(null);
var state_73631__$1 = state_73631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(16),inst_73565);
} else {
if((state_val_73632 === (22))){
var inst_73586 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73587 = figwheel.client.heads_up.append_warning_message.call(null,inst_73586);
var state_73631__$1 = state_73631;
var statearr_73648_73693 = state_73631__$1;
(statearr_73648_73693[(2)] = inst_73587);

(statearr_73648_73693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (36))){
var inst_73617 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73649_73694 = state_73631__$1;
(statearr_73649_73694[(2)] = inst_73617);

(statearr_73649_73694[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (29))){
var inst_73597 = (state_73631[(2)]);
var inst_73598 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73599 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73598);
var state_73631__$1 = (function (){var statearr_73650 = state_73631;
(statearr_73650[(9)] = inst_73597);

return statearr_73650;
})();
var statearr_73651_73695 = state_73631__$1;
(statearr_73651_73695[(2)] = inst_73599);

(statearr_73651_73695[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (6))){
var inst_73546 = (state_73631[(10)]);
var state_73631__$1 = state_73631;
var statearr_73652_73696 = state_73631__$1;
(statearr_73652_73696[(2)] = inst_73546);

(statearr_73652_73696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (28))){
var inst_73593 = (state_73631[(2)]);
var inst_73594 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73595 = figwheel.client.heads_up.display_warning.call(null,inst_73594);
var state_73631__$1 = (function (){var statearr_73653 = state_73631;
(statearr_73653[(11)] = inst_73593);

return statearr_73653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(29),inst_73595);
} else {
if((state_val_73632 === (25))){
var inst_73591 = figwheel.client.heads_up.clear.call(null);
var state_73631__$1 = state_73631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(28),inst_73591);
} else {
if((state_val_73632 === (34))){
var inst_73612 = figwheel.client.heads_up.flash_loaded.call(null);
var state_73631__$1 = state_73631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(37),inst_73612);
} else {
if((state_val_73632 === (17))){
var inst_73571 = (state_73631[(2)]);
var inst_73572 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73573 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73572);
var state_73631__$1 = (function (){var statearr_73654 = state_73631;
(statearr_73654[(12)] = inst_73571);

return statearr_73654;
})();
var statearr_73655_73697 = state_73631__$1;
(statearr_73655_73697[(2)] = inst_73573);

(statearr_73655_73697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (3))){
var inst_73563 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_73631__$1 = state_73631;
if(cljs.core.truth_(inst_73563)){
var statearr_73656_73698 = state_73631__$1;
(statearr_73656_73698[(1)] = (13));

} else {
var statearr_73657_73699 = state_73631__$1;
(statearr_73657_73699[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (12))){
var inst_73559 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73658_73700 = state_73631__$1;
(statearr_73658_73700[(2)] = inst_73559);

(statearr_73658_73700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (2))){
var inst_73546 = (state_73631[(10)]);
var inst_73546__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_73631__$1 = (function (){var statearr_73659 = state_73631;
(statearr_73659[(10)] = inst_73546__$1);

return statearr_73659;
})();
if(cljs.core.truth_(inst_73546__$1)){
var statearr_73660_73701 = state_73631__$1;
(statearr_73660_73701[(1)] = (5));

} else {
var statearr_73661_73702 = state_73631__$1;
(statearr_73661_73702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (23))){
var inst_73589 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_73631__$1 = state_73631;
if(cljs.core.truth_(inst_73589)){
var statearr_73662_73703 = state_73631__$1;
(statearr_73662_73703[(1)] = (25));

} else {
var statearr_73663_73704 = state_73631__$1;
(statearr_73663_73704[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (35))){
var state_73631__$1 = state_73631;
var statearr_73664_73705 = state_73631__$1;
(statearr_73664_73705[(2)] = null);

(statearr_73664_73705[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (19))){
var inst_73584 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_73631__$1 = state_73631;
if(cljs.core.truth_(inst_73584)){
var statearr_73665_73706 = state_73631__$1;
(statearr_73665_73706[(1)] = (22));

} else {
var statearr_73666_73707 = state_73631__$1;
(statearr_73666_73707[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (11))){
var inst_73555 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73667_73708 = state_73631__$1;
(statearr_73667_73708[(2)] = inst_73555);

(statearr_73667_73708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (9))){
var inst_73557 = figwheel.client.heads_up.clear.call(null);
var state_73631__$1 = state_73631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(12),inst_73557);
} else {
if((state_val_73632 === (5))){
var inst_73548 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_73631__$1 = state_73631;
var statearr_73668_73709 = state_73631__$1;
(statearr_73668_73709[(2)] = inst_73548);

(statearr_73668_73709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (14))){
var inst_73575 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_73631__$1 = state_73631;
if(cljs.core.truth_(inst_73575)){
var statearr_73669_73710 = state_73631__$1;
(statearr_73669_73710[(1)] = (18));

} else {
var statearr_73670_73711 = state_73631__$1;
(statearr_73670_73711[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (26))){
var inst_73601 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_73631__$1 = state_73631;
if(cljs.core.truth_(inst_73601)){
var statearr_73671_73712 = state_73631__$1;
(statearr_73671_73712[(1)] = (30));

} else {
var statearr_73672_73713 = state_73631__$1;
(statearr_73672_73713[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (16))){
var inst_73567 = (state_73631[(2)]);
var inst_73568 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73569 = figwheel.client.heads_up.display_exception.call(null,inst_73568);
var state_73631__$1 = (function (){var statearr_73673 = state_73631;
(statearr_73673[(13)] = inst_73567);

return statearr_73673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(17),inst_73569);
} else {
if((state_val_73632 === (30))){
var inst_73603 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73604 = figwheel.client.heads_up.display_warning.call(null,inst_73603);
var state_73631__$1 = state_73631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(33),inst_73604);
} else {
if((state_val_73632 === (10))){
var inst_73561 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73674_73714 = state_73631__$1;
(statearr_73674_73714[(2)] = inst_73561);

(statearr_73674_73714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (18))){
var inst_73577 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73578 = figwheel.client.heads_up.display_exception.call(null,inst_73577);
var state_73631__$1 = state_73631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(21),inst_73578);
} else {
if((state_val_73632 === (37))){
var inst_73614 = (state_73631[(2)]);
var state_73631__$1 = state_73631;
var statearr_73675_73715 = state_73631__$1;
(statearr_73675_73715[(2)] = inst_73614);

(statearr_73675_73715[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73632 === (8))){
var inst_73553 = figwheel.client.heads_up.flash_loaded.call(null);
var state_73631__$1 = state_73631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73631__$1,(11),inst_73553);
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
});})(c__68453__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__68363__auto__,c__68453__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____0 = (function (){
var statearr_73676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73676[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__);

(statearr_73676[(1)] = (1));

return statearr_73676;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____1 = (function (state_73631){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_73631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e73677){if((e73677 instanceof Object)){
var ex__68367__auto__ = e73677;
var statearr_73678_73716 = state_73631;
(statearr_73678_73716[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73717 = state_73631;
state_73631 = G__73717;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__ = function(state_73631){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____1.call(this,state_73631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,msg_hist,msg_names,msg))
})();
var state__68455__auto__ = (function (){var statearr_73679 = f__68454__auto__.call(null);
(statearr_73679[(6)] = c__68453__auto__);

return statearr_73679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__,msg_hist,msg_names,msg))
);

return c__68453__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__68453__auto___73746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___73746,ch){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___73746,ch){
return (function (state_73732){
var state_val_73733 = (state_73732[(1)]);
if((state_val_73733 === (1))){
var state_73732__$1 = state_73732;
var statearr_73734_73747 = state_73732__$1;
(statearr_73734_73747[(2)] = null);

(statearr_73734_73747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73733 === (2))){
var state_73732__$1 = state_73732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73732__$1,(4),ch);
} else {
if((state_val_73733 === (3))){
var inst_73730 = (state_73732[(2)]);
var state_73732__$1 = state_73732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73732__$1,inst_73730);
} else {
if((state_val_73733 === (4))){
var inst_73720 = (state_73732[(7)]);
var inst_73720__$1 = (state_73732[(2)]);
var state_73732__$1 = (function (){var statearr_73735 = state_73732;
(statearr_73735[(7)] = inst_73720__$1);

return statearr_73735;
})();
if(cljs.core.truth_(inst_73720__$1)){
var statearr_73736_73748 = state_73732__$1;
(statearr_73736_73748[(1)] = (5));

} else {
var statearr_73737_73749 = state_73732__$1;
(statearr_73737_73749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73733 === (5))){
var inst_73720 = (state_73732[(7)]);
var inst_73722 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_73720);
var state_73732__$1 = state_73732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73732__$1,(8),inst_73722);
} else {
if((state_val_73733 === (6))){
var state_73732__$1 = state_73732;
var statearr_73738_73750 = state_73732__$1;
(statearr_73738_73750[(2)] = null);

(statearr_73738_73750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73733 === (7))){
var inst_73728 = (state_73732[(2)]);
var state_73732__$1 = state_73732;
var statearr_73739_73751 = state_73732__$1;
(statearr_73739_73751[(2)] = inst_73728);

(statearr_73739_73751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73733 === (8))){
var inst_73724 = (state_73732[(2)]);
var state_73732__$1 = (function (){var statearr_73740 = state_73732;
(statearr_73740[(8)] = inst_73724);

return statearr_73740;
})();
var statearr_73741_73752 = state_73732__$1;
(statearr_73741_73752[(2)] = null);

(statearr_73741_73752[(1)] = (2));


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
});})(c__68453__auto___73746,ch))
;
return ((function (switch__68363__auto__,c__68453__auto___73746,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__68364__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__68364__auto____0 = (function (){
var statearr_73742 = [null,null,null,null,null,null,null,null,null];
(statearr_73742[(0)] = figwheel$client$heads_up_plugin_$_state_machine__68364__auto__);

(statearr_73742[(1)] = (1));

return statearr_73742;
});
var figwheel$client$heads_up_plugin_$_state_machine__68364__auto____1 = (function (state_73732){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_73732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e73743){if((e73743 instanceof Object)){
var ex__68367__auto__ = e73743;
var statearr_73744_73753 = state_73732;
(statearr_73744_73753[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73754 = state_73732;
state_73732 = G__73754;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__68364__auto__ = function(state_73732){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__68364__auto____1.call(this,state_73732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__68364__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__68364__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___73746,ch))
})();
var state__68455__auto__ = (function (){var statearr_73745 = f__68454__auto__.call(null);
(statearr_73745[(6)] = c__68453__auto___73746);

return statearr_73745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___73746,ch))
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
var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__){
return (function (state_73760){
var state_val_73761 = (state_73760[(1)]);
if((state_val_73761 === (1))){
var inst_73755 = cljs.core.async.timeout.call(null,(3000));
var state_73760__$1 = state_73760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73760__$1,(2),inst_73755);
} else {
if((state_val_73761 === (2))){
var inst_73757 = (state_73760[(2)]);
var inst_73758 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_73760__$1 = (function (){var statearr_73762 = state_73760;
(statearr_73762[(7)] = inst_73757);

return statearr_73762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73760__$1,inst_73758);
} else {
return null;
}
}
});})(c__68453__auto__))
;
return ((function (switch__68363__auto__,c__68453__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____0 = (function (){
var statearr_73763 = [null,null,null,null,null,null,null,null];
(statearr_73763[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__);

(statearr_73763[(1)] = (1));

return statearr_73763;
});
var figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____1 = (function (state_73760){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_73760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e73764){if((e73764 instanceof Object)){
var ex__68367__auto__ = e73764;
var statearr_73765_73767 = state_73760;
(statearr_73765_73767[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73768 = state_73760;
state_73760 = G__73768;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__ = function(state_73760){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____1.call(this,state_73760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_73766 = f__68454__auto__.call(null);
(statearr_73766[(6)] = c__68453__auto__);

return statearr_73766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__))
);

return c__68453__auto__;
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
var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__,figwheel_version,temp__5457__auto__){
return (function (state_73775){
var state_val_73776 = (state_73775[(1)]);
if((state_val_73776 === (1))){
var inst_73769 = cljs.core.async.timeout.call(null,(2000));
var state_73775__$1 = state_73775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73775__$1,(2),inst_73769);
} else {
if((state_val_73776 === (2))){
var inst_73771 = (state_73775[(2)]);
var inst_73772 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_73773 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_73772);
var state_73775__$1 = (function (){var statearr_73777 = state_73775;
(statearr_73777[(7)] = inst_73771);

return statearr_73777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73775__$1,inst_73773);
} else {
return null;
}
}
});})(c__68453__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__68363__auto__,c__68453__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____0 = (function (){
var statearr_73778 = [null,null,null,null,null,null,null,null];
(statearr_73778[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__);

(statearr_73778[(1)] = (1));

return statearr_73778;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____1 = (function (state_73775){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_73775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e73779){if((e73779 instanceof Object)){
var ex__68367__auto__ = e73779;
var statearr_73780_73782 = state_73775;
(statearr_73780_73782[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73783 = state_73775;
state_73775 = G__73783;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__ = function(state_73775){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____1.call(this,state_73775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,figwheel_version,temp__5457__auto__))
})();
var state__68455__auto__ = (function (){var statearr_73781 = f__68454__auto__.call(null);
(statearr_73781[(6)] = c__68453__auto__);

return statearr_73781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__,figwheel_version,temp__5457__auto__))
);

return c__68453__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__73784){
var map__73785 = p__73784;
var map__73785__$1 = ((((!((map__73785 == null)))?((((map__73785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73785):map__73785);
var file = cljs.core.get.call(null,map__73785__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__73785__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__73785__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__73787 = "";
var G__73787__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73787),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__73787);
var G__73787__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73787__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__73787__$1);
if(cljs.core.truth_((function (){var and__39919__auto__ = line;
if(cljs.core.truth_(and__39919__auto__)){
return column;
} else {
return and__39919__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73787__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__73787__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__73788){
var map__73789 = p__73788;
var map__73789__$1 = ((((!((map__73789 == null)))?((((map__73789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73789):map__73789);
var ed = map__73789__$1;
var formatted_exception = cljs.core.get.call(null,map__73789__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__73789__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__73789__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__73791_73795 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__73792_73796 = null;
var count__73793_73797 = (0);
var i__73794_73798 = (0);
while(true){
if((i__73794_73798 < count__73793_73797)){
var msg_73799 = cljs.core._nth.call(null,chunk__73792_73796,i__73794_73798);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_73799);

var G__73800 = seq__73791_73795;
var G__73801 = chunk__73792_73796;
var G__73802 = count__73793_73797;
var G__73803 = (i__73794_73798 + (1));
seq__73791_73795 = G__73800;
chunk__73792_73796 = G__73801;
count__73793_73797 = G__73802;
i__73794_73798 = G__73803;
continue;
} else {
var temp__5457__auto___73804 = cljs.core.seq.call(null,seq__73791_73795);
if(temp__5457__auto___73804){
var seq__73791_73805__$1 = temp__5457__auto___73804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73791_73805__$1)){
var c__41826__auto___73806 = cljs.core.chunk_first.call(null,seq__73791_73805__$1);
var G__73807 = cljs.core.chunk_rest.call(null,seq__73791_73805__$1);
var G__73808 = c__41826__auto___73806;
var G__73809 = cljs.core.count.call(null,c__41826__auto___73806);
var G__73810 = (0);
seq__73791_73795 = G__73807;
chunk__73792_73796 = G__73808;
count__73793_73797 = G__73809;
i__73794_73798 = G__73810;
continue;
} else {
var msg_73811 = cljs.core.first.call(null,seq__73791_73805__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_73811);

var G__73812 = cljs.core.next.call(null,seq__73791_73805__$1);
var G__73813 = null;
var G__73814 = (0);
var G__73815 = (0);
seq__73791_73795 = G__73812;
chunk__73792_73796 = G__73813;
count__73793_73797 = G__73814;
i__73794_73798 = G__73815;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__73816){
var map__73817 = p__73816;
var map__73817__$1 = ((((!((map__73817 == null)))?((((map__73817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73817):map__73817);
var w = map__73817__$1;
var message = cljs.core.get.call(null,map__73817__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/dev/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/dev/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__39919__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__39919__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__39919__auto__;
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
var seq__73819 = cljs.core.seq.call(null,plugins);
var chunk__73820 = null;
var count__73821 = (0);
var i__73822 = (0);
while(true){
if((i__73822 < count__73821)){
var vec__73823 = cljs.core._nth.call(null,chunk__73820,i__73822);
var k = cljs.core.nth.call(null,vec__73823,(0),null);
var plugin = cljs.core.nth.call(null,vec__73823,(1),null);
if(cljs.core.truth_(plugin)){
var pl_73829 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__73819,chunk__73820,count__73821,i__73822,pl_73829,vec__73823,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_73829.call(null,msg_hist);
});})(seq__73819,chunk__73820,count__73821,i__73822,pl_73829,vec__73823,k,plugin))
);
} else {
}

var G__73830 = seq__73819;
var G__73831 = chunk__73820;
var G__73832 = count__73821;
var G__73833 = (i__73822 + (1));
seq__73819 = G__73830;
chunk__73820 = G__73831;
count__73821 = G__73832;
i__73822 = G__73833;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__73819);
if(temp__5457__auto__){
var seq__73819__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73819__$1)){
var c__41826__auto__ = cljs.core.chunk_first.call(null,seq__73819__$1);
var G__73834 = cljs.core.chunk_rest.call(null,seq__73819__$1);
var G__73835 = c__41826__auto__;
var G__73836 = cljs.core.count.call(null,c__41826__auto__);
var G__73837 = (0);
seq__73819 = G__73834;
chunk__73820 = G__73835;
count__73821 = G__73836;
i__73822 = G__73837;
continue;
} else {
var vec__73826 = cljs.core.first.call(null,seq__73819__$1);
var k = cljs.core.nth.call(null,vec__73826,(0),null);
var plugin = cljs.core.nth.call(null,vec__73826,(1),null);
if(cljs.core.truth_(plugin)){
var pl_73838 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__73819,chunk__73820,count__73821,i__73822,pl_73838,vec__73826,k,plugin,seq__73819__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_73838.call(null,msg_hist);
});})(seq__73819,chunk__73820,count__73821,i__73822,pl_73838,vec__73826,k,plugin,seq__73819__$1,temp__5457__auto__))
);
} else {
}

var G__73839 = cljs.core.next.call(null,seq__73819__$1);
var G__73840 = null;
var G__73841 = (0);
var G__73842 = (0);
seq__73819 = G__73839;
chunk__73820 = G__73840;
count__73821 = G__73841;
i__73822 = G__73842;
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
var G__73844 = arguments.length;
switch (G__73844) {
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

var seq__73845_73850 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__73846_73851 = null;
var count__73847_73852 = (0);
var i__73848_73853 = (0);
while(true){
if((i__73848_73853 < count__73847_73852)){
var msg_73854 = cljs.core._nth.call(null,chunk__73846_73851,i__73848_73853);
figwheel.client.socket.handle_incoming_message.call(null,msg_73854);

var G__73855 = seq__73845_73850;
var G__73856 = chunk__73846_73851;
var G__73857 = count__73847_73852;
var G__73858 = (i__73848_73853 + (1));
seq__73845_73850 = G__73855;
chunk__73846_73851 = G__73856;
count__73847_73852 = G__73857;
i__73848_73853 = G__73858;
continue;
} else {
var temp__5457__auto___73859 = cljs.core.seq.call(null,seq__73845_73850);
if(temp__5457__auto___73859){
var seq__73845_73860__$1 = temp__5457__auto___73859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73845_73860__$1)){
var c__41826__auto___73861 = cljs.core.chunk_first.call(null,seq__73845_73860__$1);
var G__73862 = cljs.core.chunk_rest.call(null,seq__73845_73860__$1);
var G__73863 = c__41826__auto___73861;
var G__73864 = cljs.core.count.call(null,c__41826__auto___73861);
var G__73865 = (0);
seq__73845_73850 = G__73862;
chunk__73846_73851 = G__73863;
count__73847_73852 = G__73864;
i__73848_73853 = G__73865;
continue;
} else {
var msg_73866 = cljs.core.first.call(null,seq__73845_73860__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_73866);

var G__73867 = cljs.core.next.call(null,seq__73845_73860__$1);
var G__73868 = null;
var G__73869 = (0);
var G__73870 = (0);
seq__73845_73850 = G__73867;
chunk__73846_73851 = G__73868;
count__73847_73852 = G__73869;
i__73848_73853 = G__73870;
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
var args__42181__auto__ = [];
var len__42174__auto___73875 = arguments.length;
var i__42175__auto___73876 = (0);
while(true){
if((i__42175__auto___73876 < len__42174__auto___73875)){
args__42181__auto__.push((arguments[i__42175__auto___73876]));

var G__73877 = (i__42175__auto___73876 + (1));
i__42175__auto___73876 = G__73877;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__73872){
var map__73873 = p__73872;
var map__73873__$1 = ((((!((map__73873 == null)))?((((map__73873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73873):map__73873);
var opts = map__73873__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq73871){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73871));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e73878){if((e73878 instanceof Error)){
var e = e73878;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e73878;

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
return (function (p__73879){
var map__73880 = p__73879;
var map__73880__$1 = ((((!((map__73880 == null)))?((((map__73880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73880):map__73880);
var msg_name = cljs.core.get.call(null,map__73880__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1519022794247
