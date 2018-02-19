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
}catch (e80431){if((e80431 instanceof Error)){
var e = e80431;
return "Error: Unable to stringify";
} else {
throw e80431;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__80434 = arguments.length;
switch (G__80434) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__80432_SHARP_){
if(typeof p1__80432_SHARP_ === 'string'){
return p1__80432_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__80432_SHARP_);
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
var len__42174__auto___80437 = arguments.length;
var i__42175__auto___80438 = (0);
while(true){
if((i__42175__auto___80438 < len__42174__auto___80437)){
args__42181__auto__.push((arguments[i__42175__auto___80438]));

var G__80439 = (i__42175__auto___80438 + (1));
i__42175__auto___80438 = G__80439;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq80436){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80436));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42181__auto__ = [];
var len__42174__auto___80441 = arguments.length;
var i__42175__auto___80442 = (0);
while(true){
if((i__42175__auto___80442 < len__42174__auto___80441)){
args__42181__auto__.push((arguments[i__42175__auto___80442]));

var G__80443 = (i__42175__auto___80442 + (1));
i__42175__auto___80442 = G__80443;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq80440){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80440));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__80444){
var map__80445 = p__80444;
var map__80445__$1 = ((((!((map__80445 == null)))?((((map__80445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80445):map__80445);
var message = cljs.core.get.call(null,map__80445__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__80445__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__68453__auto___80524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___80524,ch){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___80524,ch){
return (function (state_80496){
var state_val_80497 = (state_80496[(1)]);
if((state_val_80497 === (7))){
var inst_80492 = (state_80496[(2)]);
var state_80496__$1 = state_80496;
var statearr_80498_80525 = state_80496__$1;
(statearr_80498_80525[(2)] = inst_80492);

(statearr_80498_80525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (1))){
var state_80496__$1 = state_80496;
var statearr_80499_80526 = state_80496__$1;
(statearr_80499_80526[(2)] = null);

(statearr_80499_80526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (4))){
var inst_80449 = (state_80496[(7)]);
var inst_80449__$1 = (state_80496[(2)]);
var state_80496__$1 = (function (){var statearr_80500 = state_80496;
(statearr_80500[(7)] = inst_80449__$1);

return statearr_80500;
})();
if(cljs.core.truth_(inst_80449__$1)){
var statearr_80501_80527 = state_80496__$1;
(statearr_80501_80527[(1)] = (5));

} else {
var statearr_80502_80528 = state_80496__$1;
(statearr_80502_80528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (15))){
var inst_80456 = (state_80496[(8)]);
var inst_80471 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_80456);
var inst_80472 = cljs.core.first.call(null,inst_80471);
var inst_80473 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_80472);
var inst_80474 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80473)].join('');
var inst_80475 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_80474);
var state_80496__$1 = state_80496;
var statearr_80503_80529 = state_80496__$1;
(statearr_80503_80529[(2)] = inst_80475);

(statearr_80503_80529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (13))){
var inst_80480 = (state_80496[(2)]);
var state_80496__$1 = state_80496;
var statearr_80504_80530 = state_80496__$1;
(statearr_80504_80530[(2)] = inst_80480);

(statearr_80504_80530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (6))){
var state_80496__$1 = state_80496;
var statearr_80505_80531 = state_80496__$1;
(statearr_80505_80531[(2)] = null);

(statearr_80505_80531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (17))){
var inst_80478 = (state_80496[(2)]);
var state_80496__$1 = state_80496;
var statearr_80506_80532 = state_80496__$1;
(statearr_80506_80532[(2)] = inst_80478);

(statearr_80506_80532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (3))){
var inst_80494 = (state_80496[(2)]);
var state_80496__$1 = state_80496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80496__$1,inst_80494);
} else {
if((state_val_80497 === (12))){
var inst_80455 = (state_80496[(9)]);
var inst_80469 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_80455,opts);
var state_80496__$1 = state_80496;
if(cljs.core.truth_(inst_80469)){
var statearr_80507_80533 = state_80496__$1;
(statearr_80507_80533[(1)] = (15));

} else {
var statearr_80508_80534 = state_80496__$1;
(statearr_80508_80534[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (2))){
var state_80496__$1 = state_80496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80496__$1,(4),ch);
} else {
if((state_val_80497 === (11))){
var inst_80456 = (state_80496[(8)]);
var inst_80461 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80462 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_80456);
var inst_80463 = cljs.core.async.timeout.call(null,(1000));
var inst_80464 = [inst_80462,inst_80463];
var inst_80465 = (new cljs.core.PersistentVector(null,2,(5),inst_80461,inst_80464,null));
var state_80496__$1 = state_80496;
return cljs.core.async.ioc_alts_BANG_.call(null,state_80496__$1,(14),inst_80465);
} else {
if((state_val_80497 === (9))){
var inst_80456 = (state_80496[(8)]);
var inst_80482 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_80483 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_80456);
var inst_80484 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_80483);
var inst_80485 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80484)].join('');
var inst_80486 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_80485);
var state_80496__$1 = (function (){var statearr_80509 = state_80496;
(statearr_80509[(10)] = inst_80482);

return statearr_80509;
})();
var statearr_80510_80535 = state_80496__$1;
(statearr_80510_80535[(2)] = inst_80486);

(statearr_80510_80535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (5))){
var inst_80449 = (state_80496[(7)]);
var inst_80451 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_80452 = (new cljs.core.PersistentArrayMap(null,2,inst_80451,null));
var inst_80453 = (new cljs.core.PersistentHashSet(null,inst_80452,null));
var inst_80454 = figwheel.client.focus_msgs.call(null,inst_80453,inst_80449);
var inst_80455 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_80454);
var inst_80456 = cljs.core.first.call(null,inst_80454);
var inst_80457 = figwheel.client.autoload_QMARK_.call(null);
var state_80496__$1 = (function (){var statearr_80511 = state_80496;
(statearr_80511[(8)] = inst_80456);

(statearr_80511[(9)] = inst_80455);

return statearr_80511;
})();
if(cljs.core.truth_(inst_80457)){
var statearr_80512_80536 = state_80496__$1;
(statearr_80512_80536[(1)] = (8));

} else {
var statearr_80513_80537 = state_80496__$1;
(statearr_80513_80537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (14))){
var inst_80467 = (state_80496[(2)]);
var state_80496__$1 = state_80496;
var statearr_80514_80538 = state_80496__$1;
(statearr_80514_80538[(2)] = inst_80467);

(statearr_80514_80538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (16))){
var state_80496__$1 = state_80496;
var statearr_80515_80539 = state_80496__$1;
(statearr_80515_80539[(2)] = null);

(statearr_80515_80539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (10))){
var inst_80488 = (state_80496[(2)]);
var state_80496__$1 = (function (){var statearr_80516 = state_80496;
(statearr_80516[(11)] = inst_80488);

return statearr_80516;
})();
var statearr_80517_80540 = state_80496__$1;
(statearr_80517_80540[(2)] = null);

(statearr_80517_80540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80497 === (8))){
var inst_80455 = (state_80496[(9)]);
var inst_80459 = figwheel.client.reload_file_state_QMARK_.call(null,inst_80455,opts);
var state_80496__$1 = state_80496;
if(cljs.core.truth_(inst_80459)){
var statearr_80518_80541 = state_80496__$1;
(statearr_80518_80541[(1)] = (11));

} else {
var statearr_80519_80542 = state_80496__$1;
(statearr_80519_80542[(1)] = (12));

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
});})(c__68453__auto___80524,ch))
;
return ((function (switch__68363__auto__,c__68453__auto___80524,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____0 = (function (){
var statearr_80520 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80520[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__);

(statearr_80520[(1)] = (1));

return statearr_80520;
});
var figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____1 = (function (state_80496){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_80496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e80521){if((e80521 instanceof Object)){
var ex__68367__auto__ = e80521;
var statearr_80522_80543 = state_80496;
(statearr_80522_80543[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80544 = state_80496;
state_80496 = G__80544;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__ = function(state_80496){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____1.call(this,state_80496);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__68364__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___80524,ch))
})();
var state__68455__auto__ = (function (){var statearr_80523 = f__68454__auto__.call(null);
(statearr_80523[(6)] = c__68453__auto___80524);

return statearr_80523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___80524,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__80545_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__80545_SHARP_));
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
var base_path_80547 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_80547){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e80546){if((e80546 instanceof Error)){
var e = e80546;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_80547], null));
} else {
var e = e80546;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_80547))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__80548){
var map__80549 = p__80548;
var map__80549__$1 = ((((!((map__80549 == null)))?((((map__80549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80549):map__80549);
var opts = map__80549__$1;
var build_id = cljs.core.get.call(null,map__80549__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__80549,map__80549__$1,opts,build_id){
return (function (p__80551){
var vec__80552 = p__80551;
var seq__80553 = cljs.core.seq.call(null,vec__80552);
var first__80554 = cljs.core.first.call(null,seq__80553);
var seq__80553__$1 = cljs.core.next.call(null,seq__80553);
var map__80555 = first__80554;
var map__80555__$1 = ((((!((map__80555 == null)))?((((map__80555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80555):map__80555);
var msg = map__80555__$1;
var msg_name = cljs.core.get.call(null,map__80555__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__80553__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__80552,seq__80553,first__80554,seq__80553__$1,map__80555,map__80555__$1,msg,msg_name,_,map__80549,map__80549__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__80552,seq__80553,first__80554,seq__80553__$1,map__80555,map__80555__$1,msg,msg_name,_,map__80549,map__80549__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__80549,map__80549__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__80557){
var vec__80558 = p__80557;
var seq__80559 = cljs.core.seq.call(null,vec__80558);
var first__80560 = cljs.core.first.call(null,seq__80559);
var seq__80559__$1 = cljs.core.next.call(null,seq__80559);
var map__80561 = first__80560;
var map__80561__$1 = ((((!((map__80561 == null)))?((((map__80561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80561):map__80561);
var msg = map__80561__$1;
var msg_name = cljs.core.get.call(null,map__80561__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__80559__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__80563){
var map__80564 = p__80563;
var map__80564__$1 = ((((!((map__80564 == null)))?((((map__80564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80564):map__80564);
var on_compile_warning = cljs.core.get.call(null,map__80564__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__80564__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__80564,map__80564__$1,on_compile_warning,on_compile_fail){
return (function (p__80566){
var vec__80567 = p__80566;
var seq__80568 = cljs.core.seq.call(null,vec__80567);
var first__80569 = cljs.core.first.call(null,seq__80568);
var seq__80568__$1 = cljs.core.next.call(null,seq__80568);
var map__80570 = first__80569;
var map__80570__$1 = ((((!((map__80570 == null)))?((((map__80570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80570):map__80570);
var msg = map__80570__$1;
var msg_name = cljs.core.get.call(null,map__80570__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__80568__$1;
var pred__80572 = cljs.core._EQ_;
var expr__80573 = msg_name;
if(cljs.core.truth_(pred__80572.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__80573))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__80572.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__80573))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__80564,map__80564__$1,on_compile_warning,on_compile_fail))
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
return (function (state_80662){
var state_val_80663 = (state_80662[(1)]);
if((state_val_80663 === (7))){
var inst_80582 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
if(cljs.core.truth_(inst_80582)){
var statearr_80664_80711 = state_80662__$1;
(statearr_80664_80711[(1)] = (8));

} else {
var statearr_80665_80712 = state_80662__$1;
(statearr_80665_80712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (20))){
var inst_80656 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80666_80713 = state_80662__$1;
(statearr_80666_80713[(2)] = inst_80656);

(statearr_80666_80713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (27))){
var inst_80652 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80667_80714 = state_80662__$1;
(statearr_80667_80714[(2)] = inst_80652);

(statearr_80667_80714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (1))){
var inst_80575 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_80662__$1 = state_80662;
if(cljs.core.truth_(inst_80575)){
var statearr_80668_80715 = state_80662__$1;
(statearr_80668_80715[(1)] = (2));

} else {
var statearr_80669_80716 = state_80662__$1;
(statearr_80669_80716[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (24))){
var inst_80654 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80670_80717 = state_80662__$1;
(statearr_80670_80717[(2)] = inst_80654);

(statearr_80670_80717[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (4))){
var inst_80660 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80662__$1,inst_80660);
} else {
if((state_val_80663 === (15))){
var inst_80658 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80671_80718 = state_80662__$1;
(statearr_80671_80718[(2)] = inst_80658);

(statearr_80671_80718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (21))){
var inst_80611 = (state_80662[(2)]);
var inst_80612 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80613 = figwheel.client.auto_jump_to_error.call(null,opts,inst_80612);
var state_80662__$1 = (function (){var statearr_80672 = state_80662;
(statearr_80672[(7)] = inst_80611);

return statearr_80672;
})();
var statearr_80673_80719 = state_80662__$1;
(statearr_80673_80719[(2)] = inst_80613);

(statearr_80673_80719[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (31))){
var inst_80641 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_80662__$1 = state_80662;
if(cljs.core.truth_(inst_80641)){
var statearr_80674_80720 = state_80662__$1;
(statearr_80674_80720[(1)] = (34));

} else {
var statearr_80675_80721 = state_80662__$1;
(statearr_80675_80721[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (32))){
var inst_80650 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80676_80722 = state_80662__$1;
(statearr_80676_80722[(2)] = inst_80650);

(statearr_80676_80722[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (33))){
var inst_80637 = (state_80662[(2)]);
var inst_80638 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80639 = figwheel.client.auto_jump_to_error.call(null,opts,inst_80638);
var state_80662__$1 = (function (){var statearr_80677 = state_80662;
(statearr_80677[(8)] = inst_80637);

return statearr_80677;
})();
var statearr_80678_80723 = state_80662__$1;
(statearr_80678_80723[(2)] = inst_80639);

(statearr_80678_80723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (13))){
var inst_80596 = figwheel.client.heads_up.clear.call(null);
var state_80662__$1 = state_80662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(16),inst_80596);
} else {
if((state_val_80663 === (22))){
var inst_80617 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80618 = figwheel.client.heads_up.append_warning_message.call(null,inst_80617);
var state_80662__$1 = state_80662;
var statearr_80679_80724 = state_80662__$1;
(statearr_80679_80724[(2)] = inst_80618);

(statearr_80679_80724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (36))){
var inst_80648 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80680_80725 = state_80662__$1;
(statearr_80680_80725[(2)] = inst_80648);

(statearr_80680_80725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (29))){
var inst_80628 = (state_80662[(2)]);
var inst_80629 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80630 = figwheel.client.auto_jump_to_error.call(null,opts,inst_80629);
var state_80662__$1 = (function (){var statearr_80681 = state_80662;
(statearr_80681[(9)] = inst_80628);

return statearr_80681;
})();
var statearr_80682_80726 = state_80662__$1;
(statearr_80682_80726[(2)] = inst_80630);

(statearr_80682_80726[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (6))){
var inst_80577 = (state_80662[(10)]);
var state_80662__$1 = state_80662;
var statearr_80683_80727 = state_80662__$1;
(statearr_80683_80727[(2)] = inst_80577);

(statearr_80683_80727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (28))){
var inst_80624 = (state_80662[(2)]);
var inst_80625 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80626 = figwheel.client.heads_up.display_warning.call(null,inst_80625);
var state_80662__$1 = (function (){var statearr_80684 = state_80662;
(statearr_80684[(11)] = inst_80624);

return statearr_80684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(29),inst_80626);
} else {
if((state_val_80663 === (25))){
var inst_80622 = figwheel.client.heads_up.clear.call(null);
var state_80662__$1 = state_80662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(28),inst_80622);
} else {
if((state_val_80663 === (34))){
var inst_80643 = figwheel.client.heads_up.flash_loaded.call(null);
var state_80662__$1 = state_80662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(37),inst_80643);
} else {
if((state_val_80663 === (17))){
var inst_80602 = (state_80662[(2)]);
var inst_80603 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80604 = figwheel.client.auto_jump_to_error.call(null,opts,inst_80603);
var state_80662__$1 = (function (){var statearr_80685 = state_80662;
(statearr_80685[(12)] = inst_80602);

return statearr_80685;
})();
var statearr_80686_80728 = state_80662__$1;
(statearr_80686_80728[(2)] = inst_80604);

(statearr_80686_80728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (3))){
var inst_80594 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_80662__$1 = state_80662;
if(cljs.core.truth_(inst_80594)){
var statearr_80687_80729 = state_80662__$1;
(statearr_80687_80729[(1)] = (13));

} else {
var statearr_80688_80730 = state_80662__$1;
(statearr_80688_80730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (12))){
var inst_80590 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80689_80731 = state_80662__$1;
(statearr_80689_80731[(2)] = inst_80590);

(statearr_80689_80731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (2))){
var inst_80577 = (state_80662[(10)]);
var inst_80577__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_80662__$1 = (function (){var statearr_80690 = state_80662;
(statearr_80690[(10)] = inst_80577__$1);

return statearr_80690;
})();
if(cljs.core.truth_(inst_80577__$1)){
var statearr_80691_80732 = state_80662__$1;
(statearr_80691_80732[(1)] = (5));

} else {
var statearr_80692_80733 = state_80662__$1;
(statearr_80692_80733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (23))){
var inst_80620 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_80662__$1 = state_80662;
if(cljs.core.truth_(inst_80620)){
var statearr_80693_80734 = state_80662__$1;
(statearr_80693_80734[(1)] = (25));

} else {
var statearr_80694_80735 = state_80662__$1;
(statearr_80694_80735[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (35))){
var state_80662__$1 = state_80662;
var statearr_80695_80736 = state_80662__$1;
(statearr_80695_80736[(2)] = null);

(statearr_80695_80736[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (19))){
var inst_80615 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_80662__$1 = state_80662;
if(cljs.core.truth_(inst_80615)){
var statearr_80696_80737 = state_80662__$1;
(statearr_80696_80737[(1)] = (22));

} else {
var statearr_80697_80738 = state_80662__$1;
(statearr_80697_80738[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (11))){
var inst_80586 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80698_80739 = state_80662__$1;
(statearr_80698_80739[(2)] = inst_80586);

(statearr_80698_80739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (9))){
var inst_80588 = figwheel.client.heads_up.clear.call(null);
var state_80662__$1 = state_80662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(12),inst_80588);
} else {
if((state_val_80663 === (5))){
var inst_80579 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_80662__$1 = state_80662;
var statearr_80699_80740 = state_80662__$1;
(statearr_80699_80740[(2)] = inst_80579);

(statearr_80699_80740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (14))){
var inst_80606 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_80662__$1 = state_80662;
if(cljs.core.truth_(inst_80606)){
var statearr_80700_80741 = state_80662__$1;
(statearr_80700_80741[(1)] = (18));

} else {
var statearr_80701_80742 = state_80662__$1;
(statearr_80701_80742[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (26))){
var inst_80632 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_80662__$1 = state_80662;
if(cljs.core.truth_(inst_80632)){
var statearr_80702_80743 = state_80662__$1;
(statearr_80702_80743[(1)] = (30));

} else {
var statearr_80703_80744 = state_80662__$1;
(statearr_80703_80744[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (16))){
var inst_80598 = (state_80662[(2)]);
var inst_80599 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80600 = figwheel.client.heads_up.display_exception.call(null,inst_80599);
var state_80662__$1 = (function (){var statearr_80704 = state_80662;
(statearr_80704[(13)] = inst_80598);

return statearr_80704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(17),inst_80600);
} else {
if((state_val_80663 === (30))){
var inst_80634 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80635 = figwheel.client.heads_up.display_warning.call(null,inst_80634);
var state_80662__$1 = state_80662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(33),inst_80635);
} else {
if((state_val_80663 === (10))){
var inst_80592 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80705_80745 = state_80662__$1;
(statearr_80705_80745[(2)] = inst_80592);

(statearr_80705_80745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (18))){
var inst_80608 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_80609 = figwheel.client.heads_up.display_exception.call(null,inst_80608);
var state_80662__$1 = state_80662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(21),inst_80609);
} else {
if((state_val_80663 === (37))){
var inst_80645 = (state_80662[(2)]);
var state_80662__$1 = state_80662;
var statearr_80706_80746 = state_80662__$1;
(statearr_80706_80746[(2)] = inst_80645);

(statearr_80706_80746[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80663 === (8))){
var inst_80584 = figwheel.client.heads_up.flash_loaded.call(null);
var state_80662__$1 = state_80662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80662__$1,(11),inst_80584);
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
var statearr_80707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80707[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__);

(statearr_80707[(1)] = (1));

return statearr_80707;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____1 = (function (state_80662){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_80662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e80708){if((e80708 instanceof Object)){
var ex__68367__auto__ = e80708;
var statearr_80709_80747 = state_80662;
(statearr_80709_80747[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80748 = state_80662;
state_80662 = G__80748;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__ = function(state_80662){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____1.call(this,state_80662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,msg_hist,msg_names,msg))
})();
var state__68455__auto__ = (function (){var statearr_80710 = f__68454__auto__.call(null);
(statearr_80710[(6)] = c__68453__auto__);

return statearr_80710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__,msg_hist,msg_names,msg))
);

return c__68453__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__68453__auto___80777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___80777,ch){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___80777,ch){
return (function (state_80763){
var state_val_80764 = (state_80763[(1)]);
if((state_val_80764 === (1))){
var state_80763__$1 = state_80763;
var statearr_80765_80778 = state_80763__$1;
(statearr_80765_80778[(2)] = null);

(statearr_80765_80778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80764 === (2))){
var state_80763__$1 = state_80763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80763__$1,(4),ch);
} else {
if((state_val_80764 === (3))){
var inst_80761 = (state_80763[(2)]);
var state_80763__$1 = state_80763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80763__$1,inst_80761);
} else {
if((state_val_80764 === (4))){
var inst_80751 = (state_80763[(7)]);
var inst_80751__$1 = (state_80763[(2)]);
var state_80763__$1 = (function (){var statearr_80766 = state_80763;
(statearr_80766[(7)] = inst_80751__$1);

return statearr_80766;
})();
if(cljs.core.truth_(inst_80751__$1)){
var statearr_80767_80779 = state_80763__$1;
(statearr_80767_80779[(1)] = (5));

} else {
var statearr_80768_80780 = state_80763__$1;
(statearr_80768_80780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80764 === (5))){
var inst_80751 = (state_80763[(7)]);
var inst_80753 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_80751);
var state_80763__$1 = state_80763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80763__$1,(8),inst_80753);
} else {
if((state_val_80764 === (6))){
var state_80763__$1 = state_80763;
var statearr_80769_80781 = state_80763__$1;
(statearr_80769_80781[(2)] = null);

(statearr_80769_80781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80764 === (7))){
var inst_80759 = (state_80763[(2)]);
var state_80763__$1 = state_80763;
var statearr_80770_80782 = state_80763__$1;
(statearr_80770_80782[(2)] = inst_80759);

(statearr_80770_80782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80764 === (8))){
var inst_80755 = (state_80763[(2)]);
var state_80763__$1 = (function (){var statearr_80771 = state_80763;
(statearr_80771[(8)] = inst_80755);

return statearr_80771;
})();
var statearr_80772_80783 = state_80763__$1;
(statearr_80772_80783[(2)] = null);

(statearr_80772_80783[(1)] = (2));


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
});})(c__68453__auto___80777,ch))
;
return ((function (switch__68363__auto__,c__68453__auto___80777,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__68364__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__68364__auto____0 = (function (){
var statearr_80773 = [null,null,null,null,null,null,null,null,null];
(statearr_80773[(0)] = figwheel$client$heads_up_plugin_$_state_machine__68364__auto__);

(statearr_80773[(1)] = (1));

return statearr_80773;
});
var figwheel$client$heads_up_plugin_$_state_machine__68364__auto____1 = (function (state_80763){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_80763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e80774){if((e80774 instanceof Object)){
var ex__68367__auto__ = e80774;
var statearr_80775_80784 = state_80763;
(statearr_80775_80784[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80785 = state_80763;
state_80763 = G__80785;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__68364__auto__ = function(state_80763){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__68364__auto____1.call(this,state_80763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__68364__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__68364__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___80777,ch))
})();
var state__68455__auto__ = (function (){var statearr_80776 = f__68454__auto__.call(null);
(statearr_80776[(6)] = c__68453__auto___80777);

return statearr_80776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___80777,ch))
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
return (function (state_80791){
var state_val_80792 = (state_80791[(1)]);
if((state_val_80792 === (1))){
var inst_80786 = cljs.core.async.timeout.call(null,(3000));
var state_80791__$1 = state_80791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80791__$1,(2),inst_80786);
} else {
if((state_val_80792 === (2))){
var inst_80788 = (state_80791[(2)]);
var inst_80789 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_80791__$1 = (function (){var statearr_80793 = state_80791;
(statearr_80793[(7)] = inst_80788);

return statearr_80793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80791__$1,inst_80789);
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
var statearr_80794 = [null,null,null,null,null,null,null,null];
(statearr_80794[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__);

(statearr_80794[(1)] = (1));

return statearr_80794;
});
var figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____1 = (function (state_80791){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_80791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e80795){if((e80795 instanceof Object)){
var ex__68367__auto__ = e80795;
var statearr_80796_80798 = state_80791;
(statearr_80796_80798[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80799 = state_80791;
state_80791 = G__80799;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__ = function(state_80791){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____1.call(this,state_80791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__68364__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_80797 = f__68454__auto__.call(null);
(statearr_80797[(6)] = c__68453__auto__);

return statearr_80797;
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
return (function (state_80806){
var state_val_80807 = (state_80806[(1)]);
if((state_val_80807 === (1))){
var inst_80800 = cljs.core.async.timeout.call(null,(2000));
var state_80806__$1 = state_80806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80806__$1,(2),inst_80800);
} else {
if((state_val_80807 === (2))){
var inst_80802 = (state_80806[(2)]);
var inst_80803 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_80804 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_80803);
var state_80806__$1 = (function (){var statearr_80808 = state_80806;
(statearr_80808[(7)] = inst_80802);

return statearr_80808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80806__$1,inst_80804);
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
var statearr_80809 = [null,null,null,null,null,null,null,null];
(statearr_80809[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__);

(statearr_80809[(1)] = (1));

return statearr_80809;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____1 = (function (state_80806){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_80806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e80810){if((e80810 instanceof Object)){
var ex__68367__auto__ = e80810;
var statearr_80811_80813 = state_80806;
(statearr_80811_80813[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80814 = state_80806;
state_80806 = G__80814;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__ = function(state_80806){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____1.call(this,state_80806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,figwheel_version,temp__5457__auto__))
})();
var state__68455__auto__ = (function (){var statearr_80812 = f__68454__auto__.call(null);
(statearr_80812[(6)] = c__68453__auto__);

return statearr_80812;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__80815){
var map__80816 = p__80815;
var map__80816__$1 = ((((!((map__80816 == null)))?((((map__80816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80816):map__80816);
var file = cljs.core.get.call(null,map__80816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__80816__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__80816__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__80818 = "";
var G__80818__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80818),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__80818);
var G__80818__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80818__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__80818__$1);
if(cljs.core.truth_((function (){var and__39919__auto__ = line;
if(cljs.core.truth_(and__39919__auto__)){
return column;
} else {
return and__39919__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80818__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__80818__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__80819){
var map__80820 = p__80819;
var map__80820__$1 = ((((!((map__80820 == null)))?((((map__80820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80820):map__80820);
var ed = map__80820__$1;
var formatted_exception = cljs.core.get.call(null,map__80820__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__80820__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__80820__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__80822_80826 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__80823_80827 = null;
var count__80824_80828 = (0);
var i__80825_80829 = (0);
while(true){
if((i__80825_80829 < count__80824_80828)){
var msg_80830 = cljs.core._nth.call(null,chunk__80823_80827,i__80825_80829);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_80830);

var G__80831 = seq__80822_80826;
var G__80832 = chunk__80823_80827;
var G__80833 = count__80824_80828;
var G__80834 = (i__80825_80829 + (1));
seq__80822_80826 = G__80831;
chunk__80823_80827 = G__80832;
count__80824_80828 = G__80833;
i__80825_80829 = G__80834;
continue;
} else {
var temp__5457__auto___80835 = cljs.core.seq.call(null,seq__80822_80826);
if(temp__5457__auto___80835){
var seq__80822_80836__$1 = temp__5457__auto___80835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80822_80836__$1)){
var c__41826__auto___80837 = cljs.core.chunk_first.call(null,seq__80822_80836__$1);
var G__80838 = cljs.core.chunk_rest.call(null,seq__80822_80836__$1);
var G__80839 = c__41826__auto___80837;
var G__80840 = cljs.core.count.call(null,c__41826__auto___80837);
var G__80841 = (0);
seq__80822_80826 = G__80838;
chunk__80823_80827 = G__80839;
count__80824_80828 = G__80840;
i__80825_80829 = G__80841;
continue;
} else {
var msg_80842 = cljs.core.first.call(null,seq__80822_80836__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_80842);

var G__80843 = cljs.core.next.call(null,seq__80822_80836__$1);
var G__80844 = null;
var G__80845 = (0);
var G__80846 = (0);
seq__80822_80826 = G__80843;
chunk__80823_80827 = G__80844;
count__80824_80828 = G__80845;
i__80825_80829 = G__80846;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__80847){
var map__80848 = p__80847;
var map__80848__$1 = ((((!((map__80848 == null)))?((((map__80848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80848):map__80848);
var w = map__80848__$1;
var message = cljs.core.get.call(null,map__80848__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__80850 = cljs.core.seq.call(null,plugins);
var chunk__80851 = null;
var count__80852 = (0);
var i__80853 = (0);
while(true){
if((i__80853 < count__80852)){
var vec__80854 = cljs.core._nth.call(null,chunk__80851,i__80853);
var k = cljs.core.nth.call(null,vec__80854,(0),null);
var plugin = cljs.core.nth.call(null,vec__80854,(1),null);
if(cljs.core.truth_(plugin)){
var pl_80860 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__80850,chunk__80851,count__80852,i__80853,pl_80860,vec__80854,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_80860.call(null,msg_hist);
});})(seq__80850,chunk__80851,count__80852,i__80853,pl_80860,vec__80854,k,plugin))
);
} else {
}

var G__80861 = seq__80850;
var G__80862 = chunk__80851;
var G__80863 = count__80852;
var G__80864 = (i__80853 + (1));
seq__80850 = G__80861;
chunk__80851 = G__80862;
count__80852 = G__80863;
i__80853 = G__80864;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__80850);
if(temp__5457__auto__){
var seq__80850__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80850__$1)){
var c__41826__auto__ = cljs.core.chunk_first.call(null,seq__80850__$1);
var G__80865 = cljs.core.chunk_rest.call(null,seq__80850__$1);
var G__80866 = c__41826__auto__;
var G__80867 = cljs.core.count.call(null,c__41826__auto__);
var G__80868 = (0);
seq__80850 = G__80865;
chunk__80851 = G__80866;
count__80852 = G__80867;
i__80853 = G__80868;
continue;
} else {
var vec__80857 = cljs.core.first.call(null,seq__80850__$1);
var k = cljs.core.nth.call(null,vec__80857,(0),null);
var plugin = cljs.core.nth.call(null,vec__80857,(1),null);
if(cljs.core.truth_(plugin)){
var pl_80869 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__80850,chunk__80851,count__80852,i__80853,pl_80869,vec__80857,k,plugin,seq__80850__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_80869.call(null,msg_hist);
});})(seq__80850,chunk__80851,count__80852,i__80853,pl_80869,vec__80857,k,plugin,seq__80850__$1,temp__5457__auto__))
);
} else {
}

var G__80870 = cljs.core.next.call(null,seq__80850__$1);
var G__80871 = null;
var G__80872 = (0);
var G__80873 = (0);
seq__80850 = G__80870;
chunk__80851 = G__80871;
count__80852 = G__80872;
i__80853 = G__80873;
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
var G__80875 = arguments.length;
switch (G__80875) {
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

var seq__80876_80881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__80877_80882 = null;
var count__80878_80883 = (0);
var i__80879_80884 = (0);
while(true){
if((i__80879_80884 < count__80878_80883)){
var msg_80885 = cljs.core._nth.call(null,chunk__80877_80882,i__80879_80884);
figwheel.client.socket.handle_incoming_message.call(null,msg_80885);

var G__80886 = seq__80876_80881;
var G__80887 = chunk__80877_80882;
var G__80888 = count__80878_80883;
var G__80889 = (i__80879_80884 + (1));
seq__80876_80881 = G__80886;
chunk__80877_80882 = G__80887;
count__80878_80883 = G__80888;
i__80879_80884 = G__80889;
continue;
} else {
var temp__5457__auto___80890 = cljs.core.seq.call(null,seq__80876_80881);
if(temp__5457__auto___80890){
var seq__80876_80891__$1 = temp__5457__auto___80890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80876_80891__$1)){
var c__41826__auto___80892 = cljs.core.chunk_first.call(null,seq__80876_80891__$1);
var G__80893 = cljs.core.chunk_rest.call(null,seq__80876_80891__$1);
var G__80894 = c__41826__auto___80892;
var G__80895 = cljs.core.count.call(null,c__41826__auto___80892);
var G__80896 = (0);
seq__80876_80881 = G__80893;
chunk__80877_80882 = G__80894;
count__80878_80883 = G__80895;
i__80879_80884 = G__80896;
continue;
} else {
var msg_80897 = cljs.core.first.call(null,seq__80876_80891__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_80897);

var G__80898 = cljs.core.next.call(null,seq__80876_80891__$1);
var G__80899 = null;
var G__80900 = (0);
var G__80901 = (0);
seq__80876_80881 = G__80898;
chunk__80877_80882 = G__80899;
count__80878_80883 = G__80900;
i__80879_80884 = G__80901;
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
var len__42174__auto___80906 = arguments.length;
var i__42175__auto___80907 = (0);
while(true){
if((i__42175__auto___80907 < len__42174__auto___80906)){
args__42181__auto__.push((arguments[i__42175__auto___80907]));

var G__80908 = (i__42175__auto___80907 + (1));
i__42175__auto___80907 = G__80908;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__80903){
var map__80904 = p__80903;
var map__80904__$1 = ((((!((map__80904 == null)))?((((map__80904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80904):map__80904);
var opts = map__80904__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq80902){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80902));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e80909){if((e80909 instanceof Error)){
var e = e80909;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e80909;

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
return (function (p__80910){
var map__80911 = p__80910;
var map__80911__$1 = ((((!((map__80911 == null)))?((((map__80911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80911):map__80911);
var msg_name = cljs.core.get.call(null,map__80911__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1519023128215
