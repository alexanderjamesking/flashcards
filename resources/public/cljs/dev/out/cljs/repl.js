// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__80143){
var map__80144 = p__80143;
var map__80144__$1 = ((((!((map__80144 == null)))?((((map__80144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80144):map__80144);
var m = map__80144__$1;
var n = cljs.core.get.call(null,map__80144__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__80144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__80146_80168 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__80147_80169 = null;
var count__80148_80170 = (0);
var i__80149_80171 = (0);
while(true){
if((i__80149_80171 < count__80148_80170)){
var f_80172 = cljs.core._nth.call(null,chunk__80147_80169,i__80149_80171);
cljs.core.println.call(null,"  ",f_80172);

var G__80173 = seq__80146_80168;
var G__80174 = chunk__80147_80169;
var G__80175 = count__80148_80170;
var G__80176 = (i__80149_80171 + (1));
seq__80146_80168 = G__80173;
chunk__80147_80169 = G__80174;
count__80148_80170 = G__80175;
i__80149_80171 = G__80176;
continue;
} else {
var temp__5457__auto___80177 = cljs.core.seq.call(null,seq__80146_80168);
if(temp__5457__auto___80177){
var seq__80146_80178__$1 = temp__5457__auto___80177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80146_80178__$1)){
var c__41826__auto___80179 = cljs.core.chunk_first.call(null,seq__80146_80178__$1);
var G__80180 = cljs.core.chunk_rest.call(null,seq__80146_80178__$1);
var G__80181 = c__41826__auto___80179;
var G__80182 = cljs.core.count.call(null,c__41826__auto___80179);
var G__80183 = (0);
seq__80146_80168 = G__80180;
chunk__80147_80169 = G__80181;
count__80148_80170 = G__80182;
i__80149_80171 = G__80183;
continue;
} else {
var f_80184 = cljs.core.first.call(null,seq__80146_80178__$1);
cljs.core.println.call(null,"  ",f_80184);

var G__80185 = cljs.core.next.call(null,seq__80146_80178__$1);
var G__80186 = null;
var G__80187 = (0);
var G__80188 = (0);
seq__80146_80168 = G__80185;
chunk__80147_80169 = G__80186;
count__80148_80170 = G__80187;
i__80149_80171 = G__80188;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_80189 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39945__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_80189);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_80189)))?cljs.core.second.call(null,arglists_80189):arglists_80189));
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
var seq__80150_80190 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__80151_80191 = null;
var count__80152_80192 = (0);
var i__80153_80193 = (0);
while(true){
if((i__80153_80193 < count__80152_80192)){
var vec__80154_80194 = cljs.core._nth.call(null,chunk__80151_80191,i__80153_80193);
var name_80195 = cljs.core.nth.call(null,vec__80154_80194,(0),null);
var map__80157_80196 = cljs.core.nth.call(null,vec__80154_80194,(1),null);
var map__80157_80197__$1 = ((((!((map__80157_80196 == null)))?((((map__80157_80196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80157_80196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80157_80196):map__80157_80196);
var doc_80198 = cljs.core.get.call(null,map__80157_80197__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_80199 = cljs.core.get.call(null,map__80157_80197__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_80195);

cljs.core.println.call(null," ",arglists_80199);

if(cljs.core.truth_(doc_80198)){
cljs.core.println.call(null," ",doc_80198);
} else {
}

var G__80200 = seq__80150_80190;
var G__80201 = chunk__80151_80191;
var G__80202 = count__80152_80192;
var G__80203 = (i__80153_80193 + (1));
seq__80150_80190 = G__80200;
chunk__80151_80191 = G__80201;
count__80152_80192 = G__80202;
i__80153_80193 = G__80203;
continue;
} else {
var temp__5457__auto___80204 = cljs.core.seq.call(null,seq__80150_80190);
if(temp__5457__auto___80204){
var seq__80150_80205__$1 = temp__5457__auto___80204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80150_80205__$1)){
var c__41826__auto___80206 = cljs.core.chunk_first.call(null,seq__80150_80205__$1);
var G__80207 = cljs.core.chunk_rest.call(null,seq__80150_80205__$1);
var G__80208 = c__41826__auto___80206;
var G__80209 = cljs.core.count.call(null,c__41826__auto___80206);
var G__80210 = (0);
seq__80150_80190 = G__80207;
chunk__80151_80191 = G__80208;
count__80152_80192 = G__80209;
i__80153_80193 = G__80210;
continue;
} else {
var vec__80159_80211 = cljs.core.first.call(null,seq__80150_80205__$1);
var name_80212 = cljs.core.nth.call(null,vec__80159_80211,(0),null);
var map__80162_80213 = cljs.core.nth.call(null,vec__80159_80211,(1),null);
var map__80162_80214__$1 = ((((!((map__80162_80213 == null)))?((((map__80162_80213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80162_80213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80162_80213):map__80162_80213);
var doc_80215 = cljs.core.get.call(null,map__80162_80214__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_80216 = cljs.core.get.call(null,map__80162_80214__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_80212);

cljs.core.println.call(null," ",arglists_80216);

if(cljs.core.truth_(doc_80215)){
cljs.core.println.call(null," ",doc_80215);
} else {
}

var G__80217 = cljs.core.next.call(null,seq__80150_80205__$1);
var G__80218 = null;
var G__80219 = (0);
var G__80220 = (0);
seq__80150_80190 = G__80217;
chunk__80151_80191 = G__80218;
count__80152_80192 = G__80219;
i__80153_80193 = G__80220;
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

var seq__80164 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__80165 = null;
var count__80166 = (0);
var i__80167 = (0);
while(true){
if((i__80167 < count__80166)){
var role = cljs.core._nth.call(null,chunk__80165,i__80167);
var temp__5457__auto___80221__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___80221__$1)){
var spec_80222 = temp__5457__auto___80221__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_80222));
} else {
}

var G__80223 = seq__80164;
var G__80224 = chunk__80165;
var G__80225 = count__80166;
var G__80226 = (i__80167 + (1));
seq__80164 = G__80223;
chunk__80165 = G__80224;
count__80166 = G__80225;
i__80167 = G__80226;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__80164);
if(temp__5457__auto____$1){
var seq__80164__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80164__$1)){
var c__41826__auto__ = cljs.core.chunk_first.call(null,seq__80164__$1);
var G__80227 = cljs.core.chunk_rest.call(null,seq__80164__$1);
var G__80228 = c__41826__auto__;
var G__80229 = cljs.core.count.call(null,c__41826__auto__);
var G__80230 = (0);
seq__80164 = G__80227;
chunk__80165 = G__80228;
count__80166 = G__80229;
i__80167 = G__80230;
continue;
} else {
var role = cljs.core.first.call(null,seq__80164__$1);
var temp__5457__auto___80231__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___80231__$2)){
var spec_80232 = temp__5457__auto___80231__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_80232));
} else {
}

var G__80233 = cljs.core.next.call(null,seq__80164__$1);
var G__80234 = null;
var G__80235 = (0);
var G__80236 = (0);
seq__80164 = G__80233;
chunk__80165 = G__80234;
count__80166 = G__80235;
i__80167 = G__80236;
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

//# sourceMappingURL=repl.js.map?rel=1519023127638
