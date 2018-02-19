// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__73112){
var map__73113 = p__73112;
var map__73113__$1 = ((((!((map__73113 == null)))?((((map__73113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73113):map__73113);
var m = map__73113__$1;
var n = cljs.core.get.call(null,map__73113__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__73113__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__73115_73137 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73116_73138 = null;
var count__73117_73139 = (0);
var i__73118_73140 = (0);
while(true){
if((i__73118_73140 < count__73117_73139)){
var f_73141 = cljs.core._nth.call(null,chunk__73116_73138,i__73118_73140);
cljs.core.println.call(null,"  ",f_73141);

var G__73142 = seq__73115_73137;
var G__73143 = chunk__73116_73138;
var G__73144 = count__73117_73139;
var G__73145 = (i__73118_73140 + (1));
seq__73115_73137 = G__73142;
chunk__73116_73138 = G__73143;
count__73117_73139 = G__73144;
i__73118_73140 = G__73145;
continue;
} else {
var temp__5457__auto___73146 = cljs.core.seq.call(null,seq__73115_73137);
if(temp__5457__auto___73146){
var seq__73115_73147__$1 = temp__5457__auto___73146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73115_73147__$1)){
var c__41826__auto___73148 = cljs.core.chunk_first.call(null,seq__73115_73147__$1);
var G__73149 = cljs.core.chunk_rest.call(null,seq__73115_73147__$1);
var G__73150 = c__41826__auto___73148;
var G__73151 = cljs.core.count.call(null,c__41826__auto___73148);
var G__73152 = (0);
seq__73115_73137 = G__73149;
chunk__73116_73138 = G__73150;
count__73117_73139 = G__73151;
i__73118_73140 = G__73152;
continue;
} else {
var f_73153 = cljs.core.first.call(null,seq__73115_73147__$1);
cljs.core.println.call(null,"  ",f_73153);

var G__73154 = cljs.core.next.call(null,seq__73115_73147__$1);
var G__73155 = null;
var G__73156 = (0);
var G__73157 = (0);
seq__73115_73137 = G__73154;
chunk__73116_73138 = G__73155;
count__73117_73139 = G__73156;
i__73118_73140 = G__73157;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_73158 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39945__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_73158);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_73158)))?cljs.core.second.call(null,arglists_73158):arglists_73158));
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
var seq__73119_73159 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73120_73160 = null;
var count__73121_73161 = (0);
var i__73122_73162 = (0);
while(true){
if((i__73122_73162 < count__73121_73161)){
var vec__73123_73163 = cljs.core._nth.call(null,chunk__73120_73160,i__73122_73162);
var name_73164 = cljs.core.nth.call(null,vec__73123_73163,(0),null);
var map__73126_73165 = cljs.core.nth.call(null,vec__73123_73163,(1),null);
var map__73126_73166__$1 = ((((!((map__73126_73165 == null)))?((((map__73126_73165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73126_73165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73126_73165):map__73126_73165);
var doc_73167 = cljs.core.get.call(null,map__73126_73166__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73168 = cljs.core.get.call(null,map__73126_73166__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73164);

cljs.core.println.call(null," ",arglists_73168);

if(cljs.core.truth_(doc_73167)){
cljs.core.println.call(null," ",doc_73167);
} else {
}

var G__73169 = seq__73119_73159;
var G__73170 = chunk__73120_73160;
var G__73171 = count__73121_73161;
var G__73172 = (i__73122_73162 + (1));
seq__73119_73159 = G__73169;
chunk__73120_73160 = G__73170;
count__73121_73161 = G__73171;
i__73122_73162 = G__73172;
continue;
} else {
var temp__5457__auto___73173 = cljs.core.seq.call(null,seq__73119_73159);
if(temp__5457__auto___73173){
var seq__73119_73174__$1 = temp__5457__auto___73173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73119_73174__$1)){
var c__41826__auto___73175 = cljs.core.chunk_first.call(null,seq__73119_73174__$1);
var G__73176 = cljs.core.chunk_rest.call(null,seq__73119_73174__$1);
var G__73177 = c__41826__auto___73175;
var G__73178 = cljs.core.count.call(null,c__41826__auto___73175);
var G__73179 = (0);
seq__73119_73159 = G__73176;
chunk__73120_73160 = G__73177;
count__73121_73161 = G__73178;
i__73122_73162 = G__73179;
continue;
} else {
var vec__73128_73180 = cljs.core.first.call(null,seq__73119_73174__$1);
var name_73181 = cljs.core.nth.call(null,vec__73128_73180,(0),null);
var map__73131_73182 = cljs.core.nth.call(null,vec__73128_73180,(1),null);
var map__73131_73183__$1 = ((((!((map__73131_73182 == null)))?((((map__73131_73182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73131_73182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73131_73182):map__73131_73182);
var doc_73184 = cljs.core.get.call(null,map__73131_73183__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73185 = cljs.core.get.call(null,map__73131_73183__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73181);

cljs.core.println.call(null," ",arglists_73185);

if(cljs.core.truth_(doc_73184)){
cljs.core.println.call(null," ",doc_73184);
} else {
}

var G__73186 = cljs.core.next.call(null,seq__73119_73174__$1);
var G__73187 = null;
var G__73188 = (0);
var G__73189 = (0);
seq__73119_73159 = G__73186;
chunk__73120_73160 = G__73187;
count__73121_73161 = G__73188;
i__73122_73162 = G__73189;
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

var seq__73133 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__73134 = null;
var count__73135 = (0);
var i__73136 = (0);
while(true){
if((i__73136 < count__73135)){
var role = cljs.core._nth.call(null,chunk__73134,i__73136);
var temp__5457__auto___73190__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___73190__$1)){
var spec_73191 = temp__5457__auto___73190__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_73191));
} else {
}

var G__73192 = seq__73133;
var G__73193 = chunk__73134;
var G__73194 = count__73135;
var G__73195 = (i__73136 + (1));
seq__73133 = G__73192;
chunk__73134 = G__73193;
count__73135 = G__73194;
i__73136 = G__73195;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__73133);
if(temp__5457__auto____$1){
var seq__73133__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73133__$1)){
var c__41826__auto__ = cljs.core.chunk_first.call(null,seq__73133__$1);
var G__73196 = cljs.core.chunk_rest.call(null,seq__73133__$1);
var G__73197 = c__41826__auto__;
var G__73198 = cljs.core.count.call(null,c__41826__auto__);
var G__73199 = (0);
seq__73133 = G__73196;
chunk__73134 = G__73197;
count__73135 = G__73198;
i__73136 = G__73199;
continue;
} else {
var role = cljs.core.first.call(null,seq__73133__$1);
var temp__5457__auto___73200__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___73200__$2)){
var spec_73201 = temp__5457__auto___73200__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_73201));
} else {
}

var G__73202 = cljs.core.next.call(null,seq__73133__$1);
var G__73203 = null;
var G__73204 = (0);
var G__73205 = (0);
seq__73133 = G__73202;
chunk__73134 = G__73203;
count__73135 = G__73204;
i__73136 = G__73205;
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

//# sourceMappingURL=repl.js.map?rel=1519022793600
