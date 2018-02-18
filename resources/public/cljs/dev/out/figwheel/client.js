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
}catch (e73795){if((e73795 instanceof Error)){
var e = e73795;
return "Error: Unable to stringify";
} else {
throw e73795;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__73798 = arguments.length;
switch (G__73798) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__73796_SHARP_){
if(typeof p1__73796_SHARP_ === 'string'){
return p1__73796_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__73796_SHARP_);
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
var len__42174__auto___73801 = arguments.length;
var i__42175__auto___73802 = (0);
while(true){
if((i__42175__auto___73802 < len__42174__auto___73801)){
args__42181__auto__.push((arguments[i__42175__auto___73802]));

var G__73803 = (i__42175__auto___73802 + (1));
i__42175__auto___73802 = G__73803;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq73800){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73800));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42181__auto__ = [];
var len__42174__auto___73805 = arguments.length;
var i__42175__auto___73806 = (0);
while(true){
if((i__42175__auto___73806 < len__42174__auto___73805)){
args__42181__auto__.push((arguments[i__42175__auto___73806]));

var G__73807 = (i__42175__auto___73806 + (1));
i__42175__auto___73806 = G__73807;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq73804){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73804));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__73808){
var map__73809 = p__73808;
var map__73809__$1 = ((((!((map__73809 == null)))?((((map__73809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73809):map__73809);
var message = cljs.core.get.call(null,map__73809__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__73809__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__39642__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__39620__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__39620__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__39620__auto__;
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
var c__58504__auto___73888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___73888,ch){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___73888,ch){
return (function (state_73860){
var state_val_73861 = (state_73860[(1)]);
if((state_val_73861 === (7))){
var inst_73856 = (state_73860[(2)]);
var state_73860__$1 = state_73860;
var statearr_73862_73889 = state_73860__$1;
(statearr_73862_73889[(2)] = inst_73856);

(statearr_73862_73889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (1))){
var state_73860__$1 = state_73860;
var statearr_73863_73890 = state_73860__$1;
(statearr_73863_73890[(2)] = null);

(statearr_73863_73890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (4))){
var inst_73813 = (state_73860[(7)]);
var inst_73813__$1 = (state_73860[(2)]);
var state_73860__$1 = (function (){var statearr_73864 = state_73860;
(statearr_73864[(7)] = inst_73813__$1);

return statearr_73864;
})();
if(cljs.core.truth_(inst_73813__$1)){
var statearr_73865_73891 = state_73860__$1;
(statearr_73865_73891[(1)] = (5));

} else {
var statearr_73866_73892 = state_73860__$1;
(statearr_73866_73892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (15))){
var inst_73820 = (state_73860[(8)]);
var inst_73835 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73820);
var inst_73836 = cljs.core.first.call(null,inst_73835);
var inst_73837 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_73836);
var inst_73838 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73837)].join('');
var inst_73839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_73838);
var state_73860__$1 = state_73860;
var statearr_73867_73893 = state_73860__$1;
(statearr_73867_73893[(2)] = inst_73839);

(statearr_73867_73893[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (13))){
var inst_73844 = (state_73860[(2)]);
var state_73860__$1 = state_73860;
var statearr_73868_73894 = state_73860__$1;
(statearr_73868_73894[(2)] = inst_73844);

(statearr_73868_73894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (6))){
var state_73860__$1 = state_73860;
var statearr_73869_73895 = state_73860__$1;
(statearr_73869_73895[(2)] = null);

(statearr_73869_73895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (17))){
var inst_73842 = (state_73860[(2)]);
var state_73860__$1 = state_73860;
var statearr_73870_73896 = state_73860__$1;
(statearr_73870_73896[(2)] = inst_73842);

(statearr_73870_73896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (3))){
var inst_73858 = (state_73860[(2)]);
var state_73860__$1 = state_73860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73860__$1,inst_73858);
} else {
if((state_val_73861 === (12))){
var inst_73819 = (state_73860[(9)]);
var inst_73833 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_73819,opts);
var state_73860__$1 = state_73860;
if(cljs.core.truth_(inst_73833)){
var statearr_73871_73897 = state_73860__$1;
(statearr_73871_73897[(1)] = (15));

} else {
var statearr_73872_73898 = state_73860__$1;
(statearr_73872_73898[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (2))){
var state_73860__$1 = state_73860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73860__$1,(4),ch);
} else {
if((state_val_73861 === (11))){
var inst_73820 = (state_73860[(8)]);
var inst_73825 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73826 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_73820);
var inst_73827 = cljs.core.async.timeout.call(null,(1000));
var inst_73828 = [inst_73826,inst_73827];
var inst_73829 = (new cljs.core.PersistentVector(null,2,(5),inst_73825,inst_73828,null));
var state_73860__$1 = state_73860;
return cljs.core.async.ioc_alts_BANG_.call(null,state_73860__$1,(14),inst_73829);
} else {
if((state_val_73861 === (9))){
var inst_73820 = (state_73860[(8)]);
var inst_73846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_73847 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73820);
var inst_73848 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_73847);
var inst_73849 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73848)].join('');
var inst_73850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_73849);
var state_73860__$1 = (function (){var statearr_73873 = state_73860;
(statearr_73873[(10)] = inst_73846);

return statearr_73873;
})();
var statearr_73874_73899 = state_73860__$1;
(statearr_73874_73899[(2)] = inst_73850);

(statearr_73874_73899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (5))){
var inst_73813 = (state_73860[(7)]);
var inst_73815 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_73816 = (new cljs.core.PersistentArrayMap(null,2,inst_73815,null));
var inst_73817 = (new cljs.core.PersistentHashSet(null,inst_73816,null));
var inst_73818 = figwheel.client.focus_msgs.call(null,inst_73817,inst_73813);
var inst_73819 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_73818);
var inst_73820 = cljs.core.first.call(null,inst_73818);
var inst_73821 = figwheel.client.autoload_QMARK_.call(null);
var state_73860__$1 = (function (){var statearr_73875 = state_73860;
(statearr_73875[(9)] = inst_73819);

(statearr_73875[(8)] = inst_73820);

return statearr_73875;
})();
if(cljs.core.truth_(inst_73821)){
var statearr_73876_73900 = state_73860__$1;
(statearr_73876_73900[(1)] = (8));

} else {
var statearr_73877_73901 = state_73860__$1;
(statearr_73877_73901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (14))){
var inst_73831 = (state_73860[(2)]);
var state_73860__$1 = state_73860;
var statearr_73878_73902 = state_73860__$1;
(statearr_73878_73902[(2)] = inst_73831);

(statearr_73878_73902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (16))){
var state_73860__$1 = state_73860;
var statearr_73879_73903 = state_73860__$1;
(statearr_73879_73903[(2)] = null);

(statearr_73879_73903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (10))){
var inst_73852 = (state_73860[(2)]);
var state_73860__$1 = (function (){var statearr_73880 = state_73860;
(statearr_73880[(11)] = inst_73852);

return statearr_73880;
})();
var statearr_73881_73904 = state_73860__$1;
(statearr_73881_73904[(2)] = null);

(statearr_73881_73904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73861 === (8))){
var inst_73819 = (state_73860[(9)]);
var inst_73823 = figwheel.client.reload_file_state_QMARK_.call(null,inst_73819,opts);
var state_73860__$1 = state_73860;
if(cljs.core.truth_(inst_73823)){
var statearr_73882_73905 = state_73860__$1;
(statearr_73882_73905[(1)] = (11));

} else {
var statearr_73883_73906 = state_73860__$1;
(statearr_73883_73906[(1)] = (12));

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
});})(c__58504__auto___73888,ch))
;
return ((function (switch__58437__auto__,c__58504__auto___73888,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__58438__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__58438__auto____0 = (function (){
var statearr_73884 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73884[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__58438__auto__);

(statearr_73884[(1)] = (1));

return statearr_73884;
});
var figwheel$client$file_reloader_plugin_$_state_machine__58438__auto____1 = (function (state_73860){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_73860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e73885){if((e73885 instanceof Object)){
var ex__58441__auto__ = e73885;
var statearr_73886_73907 = state_73860;
(statearr_73886_73907[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73908 = state_73860;
state_73860 = G__73908;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__58438__auto__ = function(state_73860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__58438__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__58438__auto____1.call(this,state_73860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__58438__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__58438__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___73888,ch))
})();
var state__58506__auto__ = (function (){var statearr_73887 = f__58505__auto__.call(null);
(statearr_73887[(6)] = c__58504__auto___73888);

return statearr_73887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___73888,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__73909_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__73909_SHARP_));
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
var base_path_73911 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_73911){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e73910){if((e73910 instanceof Error)){
var e = e73910;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_73911], null));
} else {
var e = e73910;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_73911))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__73912){
var map__73913 = p__73912;
var map__73913__$1 = ((((!((map__73913 == null)))?((((map__73913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73913):map__73913);
var opts = map__73913__$1;
var build_id = cljs.core.get.call(null,map__73913__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__73913,map__73913__$1,opts,build_id){
return (function (p__73915){
var vec__73916 = p__73915;
var seq__73917 = cljs.core.seq.call(null,vec__73916);
var first__73918 = cljs.core.first.call(null,seq__73917);
var seq__73917__$1 = cljs.core.next.call(null,seq__73917);
var map__73919 = first__73918;
var map__73919__$1 = ((((!((map__73919 == null)))?((((map__73919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73919):map__73919);
var msg = map__73919__$1;
var msg_name = cljs.core.get.call(null,map__73919__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73917__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__73916,seq__73917,first__73918,seq__73917__$1,map__73919,map__73919__$1,msg,msg_name,_,map__73913,map__73913__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__73916,seq__73917,first__73918,seq__73917__$1,map__73919,map__73919__$1,msg,msg_name,_,map__73913,map__73913__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__73913,map__73913__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__73921){
var vec__73922 = p__73921;
var seq__73923 = cljs.core.seq.call(null,vec__73922);
var first__73924 = cljs.core.first.call(null,seq__73923);
var seq__73923__$1 = cljs.core.next.call(null,seq__73923);
var map__73925 = first__73924;
var map__73925__$1 = ((((!((map__73925 == null)))?((((map__73925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73925):map__73925);
var msg = map__73925__$1;
var msg_name = cljs.core.get.call(null,map__73925__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73923__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__73927){
var map__73928 = p__73927;
var map__73928__$1 = ((((!((map__73928 == null)))?((((map__73928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73928):map__73928);
var on_compile_warning = cljs.core.get.call(null,map__73928__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__73928__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__73928,map__73928__$1,on_compile_warning,on_compile_fail){
return (function (p__73930){
var vec__73931 = p__73930;
var seq__73932 = cljs.core.seq.call(null,vec__73931);
var first__73933 = cljs.core.first.call(null,seq__73932);
var seq__73932__$1 = cljs.core.next.call(null,seq__73932);
var map__73934 = first__73933;
var map__73934__$1 = ((((!((map__73934 == null)))?((((map__73934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73934):map__73934);
var msg = map__73934__$1;
var msg_name = cljs.core.get.call(null,map__73934__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73932__$1;
var pred__73936 = cljs.core._EQ_;
var expr__73937 = msg_name;
if(cljs.core.truth_(pred__73936.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__73937))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__73936.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__73937))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__73928,map__73928__$1,on_compile_warning,on_compile_fail))
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
var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__,msg_hist,msg_names,msg){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__,msg_hist,msg_names,msg){
return (function (state_74026){
var state_val_74027 = (state_74026[(1)]);
if((state_val_74027 === (7))){
var inst_73946 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
if(cljs.core.truth_(inst_73946)){
var statearr_74028_74075 = state_74026__$1;
(statearr_74028_74075[(1)] = (8));

} else {
var statearr_74029_74076 = state_74026__$1;
(statearr_74029_74076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (20))){
var inst_74020 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74030_74077 = state_74026__$1;
(statearr_74030_74077[(2)] = inst_74020);

(statearr_74030_74077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (27))){
var inst_74016 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74031_74078 = state_74026__$1;
(statearr_74031_74078[(2)] = inst_74016);

(statearr_74031_74078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (1))){
var inst_73939 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_74026__$1 = state_74026;
if(cljs.core.truth_(inst_73939)){
var statearr_74032_74079 = state_74026__$1;
(statearr_74032_74079[(1)] = (2));

} else {
var statearr_74033_74080 = state_74026__$1;
(statearr_74033_74080[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (24))){
var inst_74018 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74034_74081 = state_74026__$1;
(statearr_74034_74081[(2)] = inst_74018);

(statearr_74034_74081[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (4))){
var inst_74024 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74026__$1,inst_74024);
} else {
if((state_val_74027 === (15))){
var inst_74022 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74035_74082 = state_74026__$1;
(statearr_74035_74082[(2)] = inst_74022);

(statearr_74035_74082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (21))){
var inst_73975 = (state_74026[(2)]);
var inst_73976 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73977 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73976);
var state_74026__$1 = (function (){var statearr_74036 = state_74026;
(statearr_74036[(7)] = inst_73975);

return statearr_74036;
})();
var statearr_74037_74083 = state_74026__$1;
(statearr_74037_74083[(2)] = inst_73977);

(statearr_74037_74083[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (31))){
var inst_74005 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_74026__$1 = state_74026;
if(cljs.core.truth_(inst_74005)){
var statearr_74038_74084 = state_74026__$1;
(statearr_74038_74084[(1)] = (34));

} else {
var statearr_74039_74085 = state_74026__$1;
(statearr_74039_74085[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (32))){
var inst_74014 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74040_74086 = state_74026__$1;
(statearr_74040_74086[(2)] = inst_74014);

(statearr_74040_74086[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (33))){
var inst_74001 = (state_74026[(2)]);
var inst_74002 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74003 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74002);
var state_74026__$1 = (function (){var statearr_74041 = state_74026;
(statearr_74041[(8)] = inst_74001);

return statearr_74041;
})();
var statearr_74042_74087 = state_74026__$1;
(statearr_74042_74087[(2)] = inst_74003);

(statearr_74042_74087[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (13))){
var inst_73960 = figwheel.client.heads_up.clear.call(null);
var state_74026__$1 = state_74026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(16),inst_73960);
} else {
if((state_val_74027 === (22))){
var inst_73981 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73982 = figwheel.client.heads_up.append_warning_message.call(null,inst_73981);
var state_74026__$1 = state_74026;
var statearr_74043_74088 = state_74026__$1;
(statearr_74043_74088[(2)] = inst_73982);

(statearr_74043_74088[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (36))){
var inst_74012 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74044_74089 = state_74026__$1;
(statearr_74044_74089[(2)] = inst_74012);

(statearr_74044_74089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (29))){
var inst_73992 = (state_74026[(2)]);
var inst_73993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73994 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73993);
var state_74026__$1 = (function (){var statearr_74045 = state_74026;
(statearr_74045[(9)] = inst_73992);

return statearr_74045;
})();
var statearr_74046_74090 = state_74026__$1;
(statearr_74046_74090[(2)] = inst_73994);

(statearr_74046_74090[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (6))){
var inst_73941 = (state_74026[(10)]);
var state_74026__$1 = state_74026;
var statearr_74047_74091 = state_74026__$1;
(statearr_74047_74091[(2)] = inst_73941);

(statearr_74047_74091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (28))){
var inst_73988 = (state_74026[(2)]);
var inst_73989 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73990 = figwheel.client.heads_up.display_warning.call(null,inst_73989);
var state_74026__$1 = (function (){var statearr_74048 = state_74026;
(statearr_74048[(11)] = inst_73988);

return statearr_74048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(29),inst_73990);
} else {
if((state_val_74027 === (25))){
var inst_73986 = figwheel.client.heads_up.clear.call(null);
var state_74026__$1 = state_74026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(28),inst_73986);
} else {
if((state_val_74027 === (34))){
var inst_74007 = figwheel.client.heads_up.flash_loaded.call(null);
var state_74026__$1 = state_74026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(37),inst_74007);
} else {
if((state_val_74027 === (17))){
var inst_73966 = (state_74026[(2)]);
var inst_73967 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73968 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73967);
var state_74026__$1 = (function (){var statearr_74049 = state_74026;
(statearr_74049[(12)] = inst_73966);

return statearr_74049;
})();
var statearr_74050_74092 = state_74026__$1;
(statearr_74050_74092[(2)] = inst_73968);

(statearr_74050_74092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (3))){
var inst_73958 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_74026__$1 = state_74026;
if(cljs.core.truth_(inst_73958)){
var statearr_74051_74093 = state_74026__$1;
(statearr_74051_74093[(1)] = (13));

} else {
var statearr_74052_74094 = state_74026__$1;
(statearr_74052_74094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (12))){
var inst_73954 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74053_74095 = state_74026__$1;
(statearr_74053_74095[(2)] = inst_73954);

(statearr_74053_74095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (2))){
var inst_73941 = (state_74026[(10)]);
var inst_73941__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_74026__$1 = (function (){var statearr_74054 = state_74026;
(statearr_74054[(10)] = inst_73941__$1);

return statearr_74054;
})();
if(cljs.core.truth_(inst_73941__$1)){
var statearr_74055_74096 = state_74026__$1;
(statearr_74055_74096[(1)] = (5));

} else {
var statearr_74056_74097 = state_74026__$1;
(statearr_74056_74097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (23))){
var inst_73984 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_74026__$1 = state_74026;
if(cljs.core.truth_(inst_73984)){
var statearr_74057_74098 = state_74026__$1;
(statearr_74057_74098[(1)] = (25));

} else {
var statearr_74058_74099 = state_74026__$1;
(statearr_74058_74099[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (35))){
var state_74026__$1 = state_74026;
var statearr_74059_74100 = state_74026__$1;
(statearr_74059_74100[(2)] = null);

(statearr_74059_74100[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (19))){
var inst_73979 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_74026__$1 = state_74026;
if(cljs.core.truth_(inst_73979)){
var statearr_74060_74101 = state_74026__$1;
(statearr_74060_74101[(1)] = (22));

} else {
var statearr_74061_74102 = state_74026__$1;
(statearr_74061_74102[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (11))){
var inst_73950 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74062_74103 = state_74026__$1;
(statearr_74062_74103[(2)] = inst_73950);

(statearr_74062_74103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (9))){
var inst_73952 = figwheel.client.heads_up.clear.call(null);
var state_74026__$1 = state_74026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(12),inst_73952);
} else {
if((state_val_74027 === (5))){
var inst_73943 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_74026__$1 = state_74026;
var statearr_74063_74104 = state_74026__$1;
(statearr_74063_74104[(2)] = inst_73943);

(statearr_74063_74104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (14))){
var inst_73970 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_74026__$1 = state_74026;
if(cljs.core.truth_(inst_73970)){
var statearr_74064_74105 = state_74026__$1;
(statearr_74064_74105[(1)] = (18));

} else {
var statearr_74065_74106 = state_74026__$1;
(statearr_74065_74106[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (26))){
var inst_73996 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_74026__$1 = state_74026;
if(cljs.core.truth_(inst_73996)){
var statearr_74066_74107 = state_74026__$1;
(statearr_74066_74107[(1)] = (30));

} else {
var statearr_74067_74108 = state_74026__$1;
(statearr_74067_74108[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (16))){
var inst_73962 = (state_74026[(2)]);
var inst_73963 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73964 = figwheel.client.heads_up.display_exception.call(null,inst_73963);
var state_74026__$1 = (function (){var statearr_74068 = state_74026;
(statearr_74068[(13)] = inst_73962);

return statearr_74068;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(17),inst_73964);
} else {
if((state_val_74027 === (30))){
var inst_73998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73999 = figwheel.client.heads_up.display_warning.call(null,inst_73998);
var state_74026__$1 = state_74026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(33),inst_73999);
} else {
if((state_val_74027 === (10))){
var inst_73956 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74069_74109 = state_74026__$1;
(statearr_74069_74109[(2)] = inst_73956);

(statearr_74069_74109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (18))){
var inst_73972 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73973 = figwheel.client.heads_up.display_exception.call(null,inst_73972);
var state_74026__$1 = state_74026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(21),inst_73973);
} else {
if((state_val_74027 === (37))){
var inst_74009 = (state_74026[(2)]);
var state_74026__$1 = state_74026;
var statearr_74070_74110 = state_74026__$1;
(statearr_74070_74110[(2)] = inst_74009);

(statearr_74070_74110[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74027 === (8))){
var inst_73948 = figwheel.client.heads_up.flash_loaded.call(null);
var state_74026__$1 = state_74026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74026__$1,(11),inst_73948);
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
});})(c__58504__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__58437__auto__,c__58504__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto____0 = (function (){
var statearr_74071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74071[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto__);

(statearr_74071[(1)] = (1));

return statearr_74071;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto____1 = (function (state_74026){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_74026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e74072){if((e74072 instanceof Object)){
var ex__58441__auto__ = e74072;
var statearr_74073_74111 = state_74026;
(statearr_74073_74111[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74112 = state_74026;
state_74026 = G__74112;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto__ = function(state_74026){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto____1.call(this,state_74026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__,msg_hist,msg_names,msg))
})();
var state__58506__auto__ = (function (){var statearr_74074 = f__58505__auto__.call(null);
(statearr_74074[(6)] = c__58504__auto__);

return statearr_74074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__,msg_hist,msg_names,msg))
);

return c__58504__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__58504__auto___74141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___74141,ch){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___74141,ch){
return (function (state_74127){
var state_val_74128 = (state_74127[(1)]);
if((state_val_74128 === (1))){
var state_74127__$1 = state_74127;
var statearr_74129_74142 = state_74127__$1;
(statearr_74129_74142[(2)] = null);

(statearr_74129_74142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74128 === (2))){
var state_74127__$1 = state_74127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74127__$1,(4),ch);
} else {
if((state_val_74128 === (3))){
var inst_74125 = (state_74127[(2)]);
var state_74127__$1 = state_74127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74127__$1,inst_74125);
} else {
if((state_val_74128 === (4))){
var inst_74115 = (state_74127[(7)]);
var inst_74115__$1 = (state_74127[(2)]);
var state_74127__$1 = (function (){var statearr_74130 = state_74127;
(statearr_74130[(7)] = inst_74115__$1);

return statearr_74130;
})();
if(cljs.core.truth_(inst_74115__$1)){
var statearr_74131_74143 = state_74127__$1;
(statearr_74131_74143[(1)] = (5));

} else {
var statearr_74132_74144 = state_74127__$1;
(statearr_74132_74144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74128 === (5))){
var inst_74115 = (state_74127[(7)]);
var inst_74117 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_74115);
var state_74127__$1 = state_74127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74127__$1,(8),inst_74117);
} else {
if((state_val_74128 === (6))){
var state_74127__$1 = state_74127;
var statearr_74133_74145 = state_74127__$1;
(statearr_74133_74145[(2)] = null);

(statearr_74133_74145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74128 === (7))){
var inst_74123 = (state_74127[(2)]);
var state_74127__$1 = state_74127;
var statearr_74134_74146 = state_74127__$1;
(statearr_74134_74146[(2)] = inst_74123);

(statearr_74134_74146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74128 === (8))){
var inst_74119 = (state_74127[(2)]);
var state_74127__$1 = (function (){var statearr_74135 = state_74127;
(statearr_74135[(8)] = inst_74119);

return statearr_74135;
})();
var statearr_74136_74147 = state_74127__$1;
(statearr_74136_74147[(2)] = null);

(statearr_74136_74147[(1)] = (2));


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
});})(c__58504__auto___74141,ch))
;
return ((function (switch__58437__auto__,c__58504__auto___74141,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__58438__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__58438__auto____0 = (function (){
var statearr_74137 = [null,null,null,null,null,null,null,null,null];
(statearr_74137[(0)] = figwheel$client$heads_up_plugin_$_state_machine__58438__auto__);

(statearr_74137[(1)] = (1));

return statearr_74137;
});
var figwheel$client$heads_up_plugin_$_state_machine__58438__auto____1 = (function (state_74127){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_74127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e74138){if((e74138 instanceof Object)){
var ex__58441__auto__ = e74138;
var statearr_74139_74148 = state_74127;
(statearr_74139_74148[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74149 = state_74127;
state_74127 = G__74149;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__58438__auto__ = function(state_74127){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__58438__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__58438__auto____1.call(this,state_74127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__58438__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__58438__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___74141,ch))
})();
var state__58506__auto__ = (function (){var statearr_74140 = f__58505__auto__.call(null);
(statearr_74140[(6)] = c__58504__auto___74141);

return statearr_74140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___74141,ch))
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
var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__){
return (function (state_74155){
var state_val_74156 = (state_74155[(1)]);
if((state_val_74156 === (1))){
var inst_74150 = cljs.core.async.timeout.call(null,(3000));
var state_74155__$1 = state_74155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74155__$1,(2),inst_74150);
} else {
if((state_val_74156 === (2))){
var inst_74152 = (state_74155[(2)]);
var inst_74153 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_74155__$1 = (function (){var statearr_74157 = state_74155;
(statearr_74157[(7)] = inst_74152);

return statearr_74157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74155__$1,inst_74153);
} else {
return null;
}
}
});})(c__58504__auto__))
;
return ((function (switch__58437__auto__,c__58504__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__58438__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__58438__auto____0 = (function (){
var statearr_74158 = [null,null,null,null,null,null,null,null];
(statearr_74158[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__58438__auto__);

(statearr_74158[(1)] = (1));

return statearr_74158;
});
var figwheel$client$enforce_project_plugin_$_state_machine__58438__auto____1 = (function (state_74155){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_74155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e74159){if((e74159 instanceof Object)){
var ex__58441__auto__ = e74159;
var statearr_74160_74162 = state_74155;
(statearr_74160_74162[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74163 = state_74155;
state_74155 = G__74163;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__58438__auto__ = function(state_74155){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__58438__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__58438__auto____1.call(this,state_74155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__58438__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__58438__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__))
})();
var state__58506__auto__ = (function (){var statearr_74161 = f__58505__auto__.call(null);
(statearr_74161[(6)] = c__58504__auto__);

return statearr_74161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__))
);

return c__58504__auto__;
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
var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__,figwheel_version,temp__5457__auto__){
return (function (state_74170){
var state_val_74171 = (state_74170[(1)]);
if((state_val_74171 === (1))){
var inst_74164 = cljs.core.async.timeout.call(null,(2000));
var state_74170__$1 = state_74170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74170__$1,(2),inst_74164);
} else {
if((state_val_74171 === (2))){
var inst_74166 = (state_74170[(2)]);
var inst_74167 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_74168 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_74167);
var state_74170__$1 = (function (){var statearr_74172 = state_74170;
(statearr_74172[(7)] = inst_74166);

return statearr_74172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74170__$1,inst_74168);
} else {
return null;
}
}
});})(c__58504__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__58437__auto__,c__58504__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto____0 = (function (){
var statearr_74173 = [null,null,null,null,null,null,null,null];
(statearr_74173[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto__);

(statearr_74173[(1)] = (1));

return statearr_74173;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto____1 = (function (state_74170){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_74170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e74174){if((e74174 instanceof Object)){
var ex__58441__auto__ = e74174;
var statearr_74175_74177 = state_74170;
(statearr_74175_74177[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74178 = state_74170;
state_74170 = G__74178;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto__ = function(state_74170){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto____1.call(this,state_74170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__,figwheel_version,temp__5457__auto__))
})();
var state__58506__auto__ = (function (){var statearr_74176 = f__58505__auto__.call(null);
(statearr_74176[(6)] = c__58504__auto__);

return statearr_74176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__,figwheel_version,temp__5457__auto__))
);

return c__58504__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__74179){
var map__74180 = p__74179;
var map__74180__$1 = ((((!((map__74180 == null)))?((((map__74180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74180):map__74180);
var file = cljs.core.get.call(null,map__74180__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__74180__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__74180__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__74182 = "";
var G__74182__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74182),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__74182);
var G__74182__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74182__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__74182__$1);
if(cljs.core.truth_((function (){var and__39620__auto__ = line;
if(cljs.core.truth_(and__39620__auto__)){
return column;
} else {
return and__39620__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74182__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__74182__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__74183){
var map__74184 = p__74183;
var map__74184__$1 = ((((!((map__74184 == null)))?((((map__74184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74184):map__74184);
var ed = map__74184__$1;
var formatted_exception = cljs.core.get.call(null,map__74184__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__74184__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__74184__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__74186_74190 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__74187_74191 = null;
var count__74188_74192 = (0);
var i__74189_74193 = (0);
while(true){
if((i__74189_74193 < count__74188_74192)){
var msg_74194 = cljs.core._nth.call(null,chunk__74187_74191,i__74189_74193);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_74194);

var G__74195 = seq__74186_74190;
var G__74196 = chunk__74187_74191;
var G__74197 = count__74188_74192;
var G__74198 = (i__74189_74193 + (1));
seq__74186_74190 = G__74195;
chunk__74187_74191 = G__74196;
count__74188_74192 = G__74197;
i__74189_74193 = G__74198;
continue;
} else {
var temp__5457__auto___74199 = cljs.core.seq.call(null,seq__74186_74190);
if(temp__5457__auto___74199){
var seq__74186_74200__$1 = temp__5457__auto___74199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74186_74200__$1)){
var c__41659__auto___74201 = cljs.core.chunk_first.call(null,seq__74186_74200__$1);
var G__74202 = cljs.core.chunk_rest.call(null,seq__74186_74200__$1);
var G__74203 = c__41659__auto___74201;
var G__74204 = cljs.core.count.call(null,c__41659__auto___74201);
var G__74205 = (0);
seq__74186_74190 = G__74202;
chunk__74187_74191 = G__74203;
count__74188_74192 = G__74204;
i__74189_74193 = G__74205;
continue;
} else {
var msg_74206 = cljs.core.first.call(null,seq__74186_74200__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_74206);

var G__74207 = cljs.core.next.call(null,seq__74186_74200__$1);
var G__74208 = null;
var G__74209 = (0);
var G__74210 = (0);
seq__74186_74190 = G__74207;
chunk__74187_74191 = G__74208;
count__74188_74192 = G__74209;
i__74189_74193 = G__74210;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__74211){
var map__74212 = p__74211;
var map__74212__$1 = ((((!((map__74212 == null)))?((((map__74212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74212):map__74212);
var w = map__74212__$1;
var message = cljs.core.get.call(null,map__74212__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__39620__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__39620__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__39620__auto__;
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
var seq__74214 = cljs.core.seq.call(null,plugins);
var chunk__74215 = null;
var count__74216 = (0);
var i__74217 = (0);
while(true){
if((i__74217 < count__74216)){
var vec__74218 = cljs.core._nth.call(null,chunk__74215,i__74217);
var k = cljs.core.nth.call(null,vec__74218,(0),null);
var plugin = cljs.core.nth.call(null,vec__74218,(1),null);
if(cljs.core.truth_(plugin)){
var pl_74224 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__74214,chunk__74215,count__74216,i__74217,pl_74224,vec__74218,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_74224.call(null,msg_hist);
});})(seq__74214,chunk__74215,count__74216,i__74217,pl_74224,vec__74218,k,plugin))
);
} else {
}

var G__74225 = seq__74214;
var G__74226 = chunk__74215;
var G__74227 = count__74216;
var G__74228 = (i__74217 + (1));
seq__74214 = G__74225;
chunk__74215 = G__74226;
count__74216 = G__74227;
i__74217 = G__74228;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__74214);
if(temp__5457__auto__){
var seq__74214__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74214__$1)){
var c__41659__auto__ = cljs.core.chunk_first.call(null,seq__74214__$1);
var G__74229 = cljs.core.chunk_rest.call(null,seq__74214__$1);
var G__74230 = c__41659__auto__;
var G__74231 = cljs.core.count.call(null,c__41659__auto__);
var G__74232 = (0);
seq__74214 = G__74229;
chunk__74215 = G__74230;
count__74216 = G__74231;
i__74217 = G__74232;
continue;
} else {
var vec__74221 = cljs.core.first.call(null,seq__74214__$1);
var k = cljs.core.nth.call(null,vec__74221,(0),null);
var plugin = cljs.core.nth.call(null,vec__74221,(1),null);
if(cljs.core.truth_(plugin)){
var pl_74233 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__74214,chunk__74215,count__74216,i__74217,pl_74233,vec__74221,k,plugin,seq__74214__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_74233.call(null,msg_hist);
});})(seq__74214,chunk__74215,count__74216,i__74217,pl_74233,vec__74221,k,plugin,seq__74214__$1,temp__5457__auto__))
);
} else {
}

var G__74234 = cljs.core.next.call(null,seq__74214__$1);
var G__74235 = null;
var G__74236 = (0);
var G__74237 = (0);
seq__74214 = G__74234;
chunk__74215 = G__74235;
count__74216 = G__74236;
i__74217 = G__74237;
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
var G__74239 = arguments.length;
switch (G__74239) {
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

var seq__74240_74245 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__74241_74246 = null;
var count__74242_74247 = (0);
var i__74243_74248 = (0);
while(true){
if((i__74243_74248 < count__74242_74247)){
var msg_74249 = cljs.core._nth.call(null,chunk__74241_74246,i__74243_74248);
figwheel.client.socket.handle_incoming_message.call(null,msg_74249);

var G__74250 = seq__74240_74245;
var G__74251 = chunk__74241_74246;
var G__74252 = count__74242_74247;
var G__74253 = (i__74243_74248 + (1));
seq__74240_74245 = G__74250;
chunk__74241_74246 = G__74251;
count__74242_74247 = G__74252;
i__74243_74248 = G__74253;
continue;
} else {
var temp__5457__auto___74254 = cljs.core.seq.call(null,seq__74240_74245);
if(temp__5457__auto___74254){
var seq__74240_74255__$1 = temp__5457__auto___74254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74240_74255__$1)){
var c__41659__auto___74256 = cljs.core.chunk_first.call(null,seq__74240_74255__$1);
var G__74257 = cljs.core.chunk_rest.call(null,seq__74240_74255__$1);
var G__74258 = c__41659__auto___74256;
var G__74259 = cljs.core.count.call(null,c__41659__auto___74256);
var G__74260 = (0);
seq__74240_74245 = G__74257;
chunk__74241_74246 = G__74258;
count__74242_74247 = G__74259;
i__74243_74248 = G__74260;
continue;
} else {
var msg_74261 = cljs.core.first.call(null,seq__74240_74255__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_74261);

var G__74262 = cljs.core.next.call(null,seq__74240_74255__$1);
var G__74263 = null;
var G__74264 = (0);
var G__74265 = (0);
seq__74240_74245 = G__74262;
chunk__74241_74246 = G__74263;
count__74242_74247 = G__74264;
i__74243_74248 = G__74265;
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
var len__42174__auto___74270 = arguments.length;
var i__42175__auto___74271 = (0);
while(true){
if((i__42175__auto___74271 < len__42174__auto___74270)){
args__42181__auto__.push((arguments[i__42175__auto___74271]));

var G__74272 = (i__42175__auto___74271 + (1));
i__42175__auto___74271 = G__74272;
continue;
} else {
}
break;
}

var argseq__42182__auto__ = ((((0) < args__42181__auto__.length))?(new cljs.core.IndexedSeq(args__42181__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42182__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__74267){
var map__74268 = p__74267;
var map__74268__$1 = ((((!((map__74268 == null)))?((((map__74268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74268):map__74268);
var opts = map__74268__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq74266){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74266));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e74273){if((e74273 instanceof Error)){
var e = e74273;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e74273;

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
return (function (p__74274){
var map__74275 = p__74274;
var map__74275__$1 = ((((!((map__74275 == null)))?((((map__74275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74275):map__74275);
var msg_name = cljs.core.get.call(null,map__74275__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518985470196
