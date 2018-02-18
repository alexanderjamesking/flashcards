// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__73507){
var map__73508 = p__73507;
var map__73508__$1 = ((((!((map__73508 == null)))?((((map__73508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73508):map__73508);
var m = map__73508__$1;
var n = cljs.core.get.call(null,map__73508__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__73508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__73510_73532 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73511_73533 = null;
var count__73512_73534 = (0);
var i__73513_73535 = (0);
while(true){
if((i__73513_73535 < count__73512_73534)){
var f_73536 = cljs.core._nth.call(null,chunk__73511_73533,i__73513_73535);
cljs.core.println.call(null,"  ",f_73536);

var G__73537 = seq__73510_73532;
var G__73538 = chunk__73511_73533;
var G__73539 = count__73512_73534;
var G__73540 = (i__73513_73535 + (1));
seq__73510_73532 = G__73537;
chunk__73511_73533 = G__73538;
count__73512_73534 = G__73539;
i__73513_73535 = G__73540;
continue;
} else {
var temp__5457__auto___73541 = cljs.core.seq.call(null,seq__73510_73532);
if(temp__5457__auto___73541){
var seq__73510_73542__$1 = temp__5457__auto___73541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73510_73542__$1)){
var c__41659__auto___73543 = cljs.core.chunk_first.call(null,seq__73510_73542__$1);
var G__73544 = cljs.core.chunk_rest.call(null,seq__73510_73542__$1);
var G__73545 = c__41659__auto___73543;
var G__73546 = cljs.core.count.call(null,c__41659__auto___73543);
var G__73547 = (0);
seq__73510_73532 = G__73544;
chunk__73511_73533 = G__73545;
count__73512_73534 = G__73546;
i__73513_73535 = G__73547;
continue;
} else {
var f_73548 = cljs.core.first.call(null,seq__73510_73542__$1);
cljs.core.println.call(null,"  ",f_73548);

var G__73549 = cljs.core.next.call(null,seq__73510_73542__$1);
var G__73550 = null;
var G__73551 = (0);
var G__73552 = (0);
seq__73510_73532 = G__73549;
chunk__73511_73533 = G__73550;
count__73512_73534 = G__73551;
i__73513_73535 = G__73552;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_73553 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39642__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_73553);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_73553)))?cljs.core.second.call(null,arglists_73553):arglists_73553));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__73514_73554 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73515_73555 = null;
var count__73516_73556 = (0);
var i__73517_73557 = (0);
while(true){
if((i__73517_73557 < count__73516_73556)){
var vec__73518_73558 = cljs.core._nth.call(null,chunk__73515_73555,i__73517_73557);
var name_73559 = cljs.core.nth.call(null,vec__73518_73558,(0),null);
var map__73521_73560 = cljs.core.nth.call(null,vec__73518_73558,(1),null);
var map__73521_73561__$1 = ((((!((map__73521_73560 == null)))?((((map__73521_73560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73521_73560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73521_73560):map__73521_73560);
var doc_73562 = cljs.core.get.call(null,map__73521_73561__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73563 = cljs.core.get.call(null,map__73521_73561__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73559);

cljs.core.println.call(null," ",arglists_73563);

if(cljs.core.truth_(doc_73562)){
cljs.core.println.call(null," ",doc_73562);
} else {
}

var G__73564 = seq__73514_73554;
var G__73565 = chunk__73515_73555;
var G__73566 = count__73516_73556;
var G__73567 = (i__73517_73557 + (1));
seq__73514_73554 = G__73564;
chunk__73515_73555 = G__73565;
count__73516_73556 = G__73566;
i__73517_73557 = G__73567;
continue;
} else {
var temp__5457__auto___73568 = cljs.core.seq.call(null,seq__73514_73554);
if(temp__5457__auto___73568){
var seq__73514_73569__$1 = temp__5457__auto___73568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73514_73569__$1)){
var c__41659__auto___73570 = cljs.core.chunk_first.call(null,seq__73514_73569__$1);
var G__73571 = cljs.core.chunk_rest.call(null,seq__73514_73569__$1);
var G__73572 = c__41659__auto___73570;
var G__73573 = cljs.core.count.call(null,c__41659__auto___73570);
var G__73574 = (0);
seq__73514_73554 = G__73571;
chunk__73515_73555 = G__73572;
count__73516_73556 = G__73573;
i__73517_73557 = G__73574;
continue;
} else {
var vec__73523_73575 = cljs.core.first.call(null,seq__73514_73569__$1);
var name_73576 = cljs.core.nth.call(null,vec__73523_73575,(0),null);
var map__73526_73577 = cljs.core.nth.call(null,vec__73523_73575,(1),null);
var map__73526_73578__$1 = ((((!((map__73526_73577 == null)))?((((map__73526_73577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73526_73577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73526_73577):map__73526_73577);
var doc_73579 = cljs.core.get.call(null,map__73526_73578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73580 = cljs.core.get.call(null,map__73526_73578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73576);

cljs.core.println.call(null," ",arglists_73580);

if(cljs.core.truth_(doc_73579)){
cljs.core.println.call(null," ",doc_73579);
} else {
}

var G__73581 = cljs.core.next.call(null,seq__73514_73569__$1);
var G__73582 = null;
var G__73583 = (0);
var G__73584 = (0);
seq__73514_73554 = G__73581;
chunk__73515_73555 = G__73582;
count__73516_73556 = G__73583;
i__73517_73557 = G__73584;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__73528 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__73529 = null;
var count__73530 = (0);
var i__73531 = (0);
while(true){
if((i__73531 < count__73530)){
var role = cljs.core._nth.call(null,chunk__73529,i__73531);
var temp__5457__auto___73585__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___73585__$1)){
var spec_73586 = temp__5457__auto___73585__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_73586));
} else {
}

var G__73587 = seq__73528;
var G__73588 = chunk__73529;
var G__73589 = count__73530;
var G__73590 = (i__73531 + (1));
seq__73528 = G__73587;
chunk__73529 = G__73588;
count__73530 = G__73589;
i__73531 = G__73590;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__73528);
if(temp__5457__auto____$1){
var seq__73528__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73528__$1)){
var c__41659__auto__ = cljs.core.chunk_first.call(null,seq__73528__$1);
var G__73591 = cljs.core.chunk_rest.call(null,seq__73528__$1);
var G__73592 = c__41659__auto__;
var G__73593 = cljs.core.count.call(null,c__41659__auto__);
var G__73594 = (0);
seq__73528 = G__73591;
chunk__73529 = G__73592;
count__73530 = G__73593;
i__73531 = G__73594;
continue;
} else {
var role = cljs.core.first.call(null,seq__73528__$1);
var temp__5457__auto___73595__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___73595__$2)){
var spec_73596 = temp__5457__auto___73595__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_73596));
} else {
}

var G__73597 = cljs.core.next.call(null,seq__73528__$1);
var G__73598 = null;
var G__73599 = (0);
var G__73600 = (0);
seq__73528 = G__73597;
chunk__73529 = G__73598;
count__73530 = G__73599;
i__73531 = G__73600;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1518985469371
