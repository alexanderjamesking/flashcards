// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__73111){
var map__73112 = p__73111;
var map__73112__$1 = ((((!((map__73112 == null)))?((((map__73112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73112):map__73112);
var m = map__73112__$1;
var n = cljs.core.get.call(null,map__73112__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__73112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__73114_73136 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73115_73137 = null;
var count__73116_73138 = (0);
var i__73117_73139 = (0);
while(true){
if((i__73117_73139 < count__73116_73138)){
var f_73140 = cljs.core._nth.call(null,chunk__73115_73137,i__73117_73139);
cljs.core.println.call(null,"  ",f_73140);

var G__73141 = seq__73114_73136;
var G__73142 = chunk__73115_73137;
var G__73143 = count__73116_73138;
var G__73144 = (i__73117_73139 + (1));
seq__73114_73136 = G__73141;
chunk__73115_73137 = G__73142;
count__73116_73138 = G__73143;
i__73117_73139 = G__73144;
continue;
} else {
var temp__5457__auto___73145 = cljs.core.seq.call(null,seq__73114_73136);
if(temp__5457__auto___73145){
var seq__73114_73146__$1 = temp__5457__auto___73145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73114_73146__$1)){
var c__21063__auto___73147 = cljs.core.chunk_first.call(null,seq__73114_73146__$1);
var G__73148 = cljs.core.chunk_rest.call(null,seq__73114_73146__$1);
var G__73149 = c__21063__auto___73147;
var G__73150 = cljs.core.count.call(null,c__21063__auto___73147);
var G__73151 = (0);
seq__73114_73136 = G__73148;
chunk__73115_73137 = G__73149;
count__73116_73138 = G__73150;
i__73117_73139 = G__73151;
continue;
} else {
var f_73152 = cljs.core.first.call(null,seq__73114_73146__$1);
cljs.core.println.call(null,"  ",f_73152);

var G__73153 = cljs.core.next.call(null,seq__73114_73146__$1);
var G__73154 = null;
var G__73155 = (0);
var G__73156 = (0);
seq__73114_73136 = G__73153;
chunk__73115_73137 = G__73154;
count__73116_73138 = G__73155;
i__73117_73139 = G__73156;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_73157 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19063__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_73157);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_73157)))?cljs.core.second.call(null,arglists_73157):arglists_73157));
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
var seq__73118_73158 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73119_73159 = null;
var count__73120_73160 = (0);
var i__73121_73161 = (0);
while(true){
if((i__73121_73161 < count__73120_73160)){
var vec__73122_73162 = cljs.core._nth.call(null,chunk__73119_73159,i__73121_73161);
var name_73163 = cljs.core.nth.call(null,vec__73122_73162,(0),null);
var map__73125_73164 = cljs.core.nth.call(null,vec__73122_73162,(1),null);
var map__73125_73165__$1 = ((((!((map__73125_73164 == null)))?((((map__73125_73164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73125_73164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73125_73164):map__73125_73164);
var doc_73166 = cljs.core.get.call(null,map__73125_73165__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73167 = cljs.core.get.call(null,map__73125_73165__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73163);

cljs.core.println.call(null," ",arglists_73167);

if(cljs.core.truth_(doc_73166)){
cljs.core.println.call(null," ",doc_73166);
} else {
}

var G__73168 = seq__73118_73158;
var G__73169 = chunk__73119_73159;
var G__73170 = count__73120_73160;
var G__73171 = (i__73121_73161 + (1));
seq__73118_73158 = G__73168;
chunk__73119_73159 = G__73169;
count__73120_73160 = G__73170;
i__73121_73161 = G__73171;
continue;
} else {
var temp__5457__auto___73172 = cljs.core.seq.call(null,seq__73118_73158);
if(temp__5457__auto___73172){
var seq__73118_73173__$1 = temp__5457__auto___73172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73118_73173__$1)){
var c__21063__auto___73174 = cljs.core.chunk_first.call(null,seq__73118_73173__$1);
var G__73175 = cljs.core.chunk_rest.call(null,seq__73118_73173__$1);
var G__73176 = c__21063__auto___73174;
var G__73177 = cljs.core.count.call(null,c__21063__auto___73174);
var G__73178 = (0);
seq__73118_73158 = G__73175;
chunk__73119_73159 = G__73176;
count__73120_73160 = G__73177;
i__73121_73161 = G__73178;
continue;
} else {
var vec__73127_73179 = cljs.core.first.call(null,seq__73118_73173__$1);
var name_73180 = cljs.core.nth.call(null,vec__73127_73179,(0),null);
var map__73130_73181 = cljs.core.nth.call(null,vec__73127_73179,(1),null);
var map__73130_73182__$1 = ((((!((map__73130_73181 == null)))?((((map__73130_73181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73130_73181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73130_73181):map__73130_73181);
var doc_73183 = cljs.core.get.call(null,map__73130_73182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73184 = cljs.core.get.call(null,map__73130_73182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73180);

cljs.core.println.call(null," ",arglists_73184);

if(cljs.core.truth_(doc_73183)){
cljs.core.println.call(null," ",doc_73183);
} else {
}

var G__73185 = cljs.core.next.call(null,seq__73118_73173__$1);
var G__73186 = null;
var G__73187 = (0);
var G__73188 = (0);
seq__73118_73158 = G__73185;
chunk__73119_73159 = G__73186;
count__73120_73160 = G__73187;
i__73121_73161 = G__73188;
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

var seq__73132 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__73133 = null;
var count__73134 = (0);
var i__73135 = (0);
while(true){
if((i__73135 < count__73134)){
var role = cljs.core._nth.call(null,chunk__73133,i__73135);
var temp__5457__auto___73189__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___73189__$1)){
var spec_73190 = temp__5457__auto___73189__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_73190));
} else {
}

var G__73191 = seq__73132;
var G__73192 = chunk__73133;
var G__73193 = count__73134;
var G__73194 = (i__73135 + (1));
seq__73132 = G__73191;
chunk__73133 = G__73192;
count__73134 = G__73193;
i__73135 = G__73194;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__73132);
if(temp__5457__auto____$1){
var seq__73132__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73132__$1)){
var c__21063__auto__ = cljs.core.chunk_first.call(null,seq__73132__$1);
var G__73195 = cljs.core.chunk_rest.call(null,seq__73132__$1);
var G__73196 = c__21063__auto__;
var G__73197 = cljs.core.count.call(null,c__21063__auto__);
var G__73198 = (0);
seq__73132 = G__73195;
chunk__73133 = G__73196;
count__73134 = G__73197;
i__73135 = G__73198;
continue;
} else {
var role = cljs.core.first.call(null,seq__73132__$1);
var temp__5457__auto___73199__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___73199__$2)){
var spec_73200 = temp__5457__auto___73199__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_73200));
} else {
}

var G__73201 = cljs.core.next.call(null,seq__73132__$1);
var G__73202 = null;
var G__73203 = (0);
var G__73204 = (0);
seq__73132 = G__73201;
chunk__73133 = G__73202;
count__73134 = G__73203;
i__73135 = G__73204;
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

//# sourceMappingURL=repl.js.map?rel=1518983351111
