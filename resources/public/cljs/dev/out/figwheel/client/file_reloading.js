// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__39642__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__39642__auto__){
return or__39642__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__39642__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
var or__39642__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__39642__auto____$1)){
return or__39642__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__72038_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__72038_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__72039 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__72040 = null;
var count__72041 = (0);
var i__72042 = (0);
while(true){
if((i__72042 < count__72041)){
var n = cljs.core._nth.call(null,chunk__72040,i__72042);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__72043 = seq__72039;
var G__72044 = chunk__72040;
var G__72045 = count__72041;
var G__72046 = (i__72042 + (1));
seq__72039 = G__72043;
chunk__72040 = G__72044;
count__72041 = G__72045;
i__72042 = G__72046;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__72039);
if(temp__5457__auto__){
var seq__72039__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72039__$1)){
var c__41659__auto__ = cljs.core.chunk_first.call(null,seq__72039__$1);
var G__72047 = cljs.core.chunk_rest.call(null,seq__72039__$1);
var G__72048 = c__41659__auto__;
var G__72049 = cljs.core.count.call(null,c__41659__auto__);
var G__72050 = (0);
seq__72039 = G__72047;
chunk__72040 = G__72048;
count__72041 = G__72049;
i__72042 = G__72050;
continue;
} else {
var n = cljs.core.first.call(null,seq__72039__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__72051 = cljs.core.next.call(null,seq__72039__$1);
var G__72052 = null;
var G__72053 = (0);
var G__72054 = (0);
seq__72039 = G__72051;
chunk__72040 = G__72052;
count__72041 = G__72053;
i__72042 = G__72054;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__72055){
var vec__72056 = p__72055;
var _ = cljs.core.nth.call(null,vec__72056,(0),null);
var v = cljs.core.nth.call(null,vec__72056,(1),null);
var and__39620__auto__ = v;
if(cljs.core.truth_(and__39620__auto__)){
return v.call(null,dep);
} else {
return and__39620__auto__;
}
}),cljs.core.filter.call(null,(function (p__72059){
var vec__72060 = p__72059;
var k = cljs.core.nth.call(null,vec__72060,(0),null);
var v = cljs.core.nth.call(null,vec__72060,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__72072_72080 = cljs.core.seq.call(null,deps);
var chunk__72073_72081 = null;
var count__72074_72082 = (0);
var i__72075_72083 = (0);
while(true){
if((i__72075_72083 < count__72074_72082)){
var dep_72084 = cljs.core._nth.call(null,chunk__72073_72081,i__72075_72083);
if(cljs.core.truth_((function (){var and__39620__auto__ = dep_72084;
if(cljs.core.truth_(and__39620__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_72084));
} else {
return and__39620__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_72084,(depth + (1)),state);
} else {
}

var G__72085 = seq__72072_72080;
var G__72086 = chunk__72073_72081;
var G__72087 = count__72074_72082;
var G__72088 = (i__72075_72083 + (1));
seq__72072_72080 = G__72085;
chunk__72073_72081 = G__72086;
count__72074_72082 = G__72087;
i__72075_72083 = G__72088;
continue;
} else {
var temp__5457__auto___72089 = cljs.core.seq.call(null,seq__72072_72080);
if(temp__5457__auto___72089){
var seq__72072_72090__$1 = temp__5457__auto___72089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72072_72090__$1)){
var c__41659__auto___72091 = cljs.core.chunk_first.call(null,seq__72072_72090__$1);
var G__72092 = cljs.core.chunk_rest.call(null,seq__72072_72090__$1);
var G__72093 = c__41659__auto___72091;
var G__72094 = cljs.core.count.call(null,c__41659__auto___72091);
var G__72095 = (0);
seq__72072_72080 = G__72092;
chunk__72073_72081 = G__72093;
count__72074_72082 = G__72094;
i__72075_72083 = G__72095;
continue;
} else {
var dep_72096 = cljs.core.first.call(null,seq__72072_72090__$1);
if(cljs.core.truth_((function (){var and__39620__auto__ = dep_72096;
if(cljs.core.truth_(and__39620__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_72096));
} else {
return and__39620__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_72096,(depth + (1)),state);
} else {
}

var G__72097 = cljs.core.next.call(null,seq__72072_72090__$1);
var G__72098 = null;
var G__72099 = (0);
var G__72100 = (0);
seq__72072_72080 = G__72097;
chunk__72073_72081 = G__72098;
count__72074_72082 = G__72099;
i__72075_72083 = G__72100;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__72076){
var vec__72077 = p__72076;
var seq__72078 = cljs.core.seq.call(null,vec__72077);
var first__72079 = cljs.core.first.call(null,seq__72078);
var seq__72078__$1 = cljs.core.next.call(null,seq__72078);
var x = first__72079;
var xs = seq__72078__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__72077,seq__72078,first__72079,seq__72078__$1,x,xs,get_deps__$1){
return (function (p1__72063_SHARP_){
return clojure.set.difference.call(null,p1__72063_SHARP_,x);
});})(vec__72077,seq__72078,first__72079,seq__72078__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__72101 = cljs.core.seq.call(null,provides);
var chunk__72102 = null;
var count__72103 = (0);
var i__72104 = (0);
while(true){
if((i__72104 < count__72103)){
var prov = cljs.core._nth.call(null,chunk__72102,i__72104);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__72105_72113 = cljs.core.seq.call(null,requires);
var chunk__72106_72114 = null;
var count__72107_72115 = (0);
var i__72108_72116 = (0);
while(true){
if((i__72108_72116 < count__72107_72115)){
var req_72117 = cljs.core._nth.call(null,chunk__72106_72114,i__72108_72116);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72117,prov);

var G__72118 = seq__72105_72113;
var G__72119 = chunk__72106_72114;
var G__72120 = count__72107_72115;
var G__72121 = (i__72108_72116 + (1));
seq__72105_72113 = G__72118;
chunk__72106_72114 = G__72119;
count__72107_72115 = G__72120;
i__72108_72116 = G__72121;
continue;
} else {
var temp__5457__auto___72122 = cljs.core.seq.call(null,seq__72105_72113);
if(temp__5457__auto___72122){
var seq__72105_72123__$1 = temp__5457__auto___72122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72105_72123__$1)){
var c__41659__auto___72124 = cljs.core.chunk_first.call(null,seq__72105_72123__$1);
var G__72125 = cljs.core.chunk_rest.call(null,seq__72105_72123__$1);
var G__72126 = c__41659__auto___72124;
var G__72127 = cljs.core.count.call(null,c__41659__auto___72124);
var G__72128 = (0);
seq__72105_72113 = G__72125;
chunk__72106_72114 = G__72126;
count__72107_72115 = G__72127;
i__72108_72116 = G__72128;
continue;
} else {
var req_72129 = cljs.core.first.call(null,seq__72105_72123__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72129,prov);

var G__72130 = cljs.core.next.call(null,seq__72105_72123__$1);
var G__72131 = null;
var G__72132 = (0);
var G__72133 = (0);
seq__72105_72113 = G__72130;
chunk__72106_72114 = G__72131;
count__72107_72115 = G__72132;
i__72108_72116 = G__72133;
continue;
}
} else {
}
}
break;
}

var G__72134 = seq__72101;
var G__72135 = chunk__72102;
var G__72136 = count__72103;
var G__72137 = (i__72104 + (1));
seq__72101 = G__72134;
chunk__72102 = G__72135;
count__72103 = G__72136;
i__72104 = G__72137;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__72101);
if(temp__5457__auto__){
var seq__72101__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72101__$1)){
var c__41659__auto__ = cljs.core.chunk_first.call(null,seq__72101__$1);
var G__72138 = cljs.core.chunk_rest.call(null,seq__72101__$1);
var G__72139 = c__41659__auto__;
var G__72140 = cljs.core.count.call(null,c__41659__auto__);
var G__72141 = (0);
seq__72101 = G__72138;
chunk__72102 = G__72139;
count__72103 = G__72140;
i__72104 = G__72141;
continue;
} else {
var prov = cljs.core.first.call(null,seq__72101__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__72109_72142 = cljs.core.seq.call(null,requires);
var chunk__72110_72143 = null;
var count__72111_72144 = (0);
var i__72112_72145 = (0);
while(true){
if((i__72112_72145 < count__72111_72144)){
var req_72146 = cljs.core._nth.call(null,chunk__72110_72143,i__72112_72145);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72146,prov);

var G__72147 = seq__72109_72142;
var G__72148 = chunk__72110_72143;
var G__72149 = count__72111_72144;
var G__72150 = (i__72112_72145 + (1));
seq__72109_72142 = G__72147;
chunk__72110_72143 = G__72148;
count__72111_72144 = G__72149;
i__72112_72145 = G__72150;
continue;
} else {
var temp__5457__auto___72151__$1 = cljs.core.seq.call(null,seq__72109_72142);
if(temp__5457__auto___72151__$1){
var seq__72109_72152__$1 = temp__5457__auto___72151__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72109_72152__$1)){
var c__41659__auto___72153 = cljs.core.chunk_first.call(null,seq__72109_72152__$1);
var G__72154 = cljs.core.chunk_rest.call(null,seq__72109_72152__$1);
var G__72155 = c__41659__auto___72153;
var G__72156 = cljs.core.count.call(null,c__41659__auto___72153);
var G__72157 = (0);
seq__72109_72142 = G__72154;
chunk__72110_72143 = G__72155;
count__72111_72144 = G__72156;
i__72112_72145 = G__72157;
continue;
} else {
var req_72158 = cljs.core.first.call(null,seq__72109_72152__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72158,prov);

var G__72159 = cljs.core.next.call(null,seq__72109_72152__$1);
var G__72160 = null;
var G__72161 = (0);
var G__72162 = (0);
seq__72109_72142 = G__72159;
chunk__72110_72143 = G__72160;
count__72111_72144 = G__72161;
i__72112_72145 = G__72162;
continue;
}
} else {
}
}
break;
}

var G__72163 = cljs.core.next.call(null,seq__72101__$1);
var G__72164 = null;
var G__72165 = (0);
var G__72166 = (0);
seq__72101 = G__72163;
chunk__72102 = G__72164;
count__72103 = G__72165;
i__72104 = G__72166;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__72167_72171 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__72168_72172 = null;
var count__72169_72173 = (0);
var i__72170_72174 = (0);
while(true){
if((i__72170_72174 < count__72169_72173)){
var ns_72175 = cljs.core._nth.call(null,chunk__72168_72172,i__72170_72174);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_72175);

var G__72176 = seq__72167_72171;
var G__72177 = chunk__72168_72172;
var G__72178 = count__72169_72173;
var G__72179 = (i__72170_72174 + (1));
seq__72167_72171 = G__72176;
chunk__72168_72172 = G__72177;
count__72169_72173 = G__72178;
i__72170_72174 = G__72179;
continue;
} else {
var temp__5457__auto___72180 = cljs.core.seq.call(null,seq__72167_72171);
if(temp__5457__auto___72180){
var seq__72167_72181__$1 = temp__5457__auto___72180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72167_72181__$1)){
var c__41659__auto___72182 = cljs.core.chunk_first.call(null,seq__72167_72181__$1);
var G__72183 = cljs.core.chunk_rest.call(null,seq__72167_72181__$1);
var G__72184 = c__41659__auto___72182;
var G__72185 = cljs.core.count.call(null,c__41659__auto___72182);
var G__72186 = (0);
seq__72167_72171 = G__72183;
chunk__72168_72172 = G__72184;
count__72169_72173 = G__72185;
i__72170_72174 = G__72186;
continue;
} else {
var ns_72187 = cljs.core.first.call(null,seq__72167_72181__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_72187);

var G__72188 = cljs.core.next.call(null,seq__72167_72181__$1);
var G__72189 = null;
var G__72190 = (0);
var G__72191 = (0);
seq__72167_72171 = G__72188;
chunk__72168_72172 = G__72189;
count__72169_72173 = G__72190;
i__72170_72174 = G__72191;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__39642__auto__ = goog.require__;
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__72192__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__72192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72193__i = 0, G__72193__a = new Array(arguments.length -  0);
while (G__72193__i < G__72193__a.length) {G__72193__a[G__72193__i] = arguments[G__72193__i + 0]; ++G__72193__i;}
  args = new cljs.core.IndexedSeq(G__72193__a,0,null);
} 
return G__72192__delegate.call(this,args);};
G__72192.cljs$lang$maxFixedArity = 0;
G__72192.cljs$lang$applyTo = (function (arglist__72194){
var args = cljs.core.seq(arglist__72194);
return G__72192__delegate(args);
});
G__72192.cljs$core$IFn$_invoke$arity$variadic = G__72192__delegate;
return G__72192;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__72195_SHARP_,p2__72196_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72195_SHARP_)].join('')),p2__72196_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__72197_SHARP_,p2__72198_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__72197_SHARP_)].join(''),p2__72198_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__72199 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__72199.addCallback(((function (G__72199){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__72199))
);

G__72199.addErrback(((function (G__72199){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__72199))
);

return G__72199;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e72200){if((e72200 instanceof Error)){
var e = e72200;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e72200;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e72201){if((e72201 instanceof Error)){
var e = e72201;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e72201;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__72202 = cljs.core._EQ_;
var expr__72203 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__72202.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__72203))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__72202.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__72203))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__72202.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__72203))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__72202,expr__72203){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__72202,expr__72203))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__72205,callback){
var map__72206 = p__72205;
var map__72206__$1 = ((((!((map__72206 == null)))?((((map__72206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72206):map__72206);
var file_msg = map__72206__$1;
var request_url = cljs.core.get.call(null,map__72206__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__39642__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__72206,map__72206__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__72206,map__72206__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__){
return (function (state_72246){
var state_val_72247 = (state_72246[(1)]);
if((state_val_72247 === (7))){
var inst_72242 = (state_72246[(2)]);
var state_72246__$1 = state_72246;
var statearr_72248_72275 = state_72246__$1;
(statearr_72248_72275[(2)] = inst_72242);

(statearr_72248_72275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (1))){
var state_72246__$1 = state_72246;
var statearr_72249_72276 = state_72246__$1;
(statearr_72249_72276[(2)] = null);

(statearr_72249_72276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (4))){
var inst_72210 = (state_72246[(7)]);
var inst_72210__$1 = (state_72246[(2)]);
var state_72246__$1 = (function (){var statearr_72250 = state_72246;
(statearr_72250[(7)] = inst_72210__$1);

return statearr_72250;
})();
if(cljs.core.truth_(inst_72210__$1)){
var statearr_72251_72277 = state_72246__$1;
(statearr_72251_72277[(1)] = (5));

} else {
var statearr_72252_72278 = state_72246__$1;
(statearr_72252_72278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (15))){
var inst_72227 = (state_72246[(8)]);
var inst_72224 = (state_72246[(9)]);
var inst_72229 = inst_72227.call(null,inst_72224);
var state_72246__$1 = state_72246;
var statearr_72253_72279 = state_72246__$1;
(statearr_72253_72279[(2)] = inst_72229);

(statearr_72253_72279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (13))){
var inst_72236 = (state_72246[(2)]);
var state_72246__$1 = state_72246;
var statearr_72254_72280 = state_72246__$1;
(statearr_72254_72280[(2)] = inst_72236);

(statearr_72254_72280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (6))){
var state_72246__$1 = state_72246;
var statearr_72255_72281 = state_72246__$1;
(statearr_72255_72281[(2)] = null);

(statearr_72255_72281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (17))){
var inst_72233 = (state_72246[(2)]);
var state_72246__$1 = state_72246;
var statearr_72256_72282 = state_72246__$1;
(statearr_72256_72282[(2)] = inst_72233);

(statearr_72256_72282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (3))){
var inst_72244 = (state_72246[(2)]);
var state_72246__$1 = state_72246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72246__$1,inst_72244);
} else {
if((state_val_72247 === (12))){
var state_72246__$1 = state_72246;
var statearr_72257_72283 = state_72246__$1;
(statearr_72257_72283[(2)] = null);

(statearr_72257_72283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (2))){
var state_72246__$1 = state_72246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72246__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_72247 === (11))){
var inst_72215 = (state_72246[(10)]);
var inst_72222 = figwheel.client.file_reloading.blocking_load.call(null,inst_72215);
var state_72246__$1 = state_72246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72246__$1,(14),inst_72222);
} else {
if((state_val_72247 === (9))){
var inst_72215 = (state_72246[(10)]);
var state_72246__$1 = state_72246;
if(cljs.core.truth_(inst_72215)){
var statearr_72258_72284 = state_72246__$1;
(statearr_72258_72284[(1)] = (11));

} else {
var statearr_72259_72285 = state_72246__$1;
(statearr_72259_72285[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (5))){
var inst_72210 = (state_72246[(7)]);
var inst_72216 = (state_72246[(11)]);
var inst_72215 = cljs.core.nth.call(null,inst_72210,(0),null);
var inst_72216__$1 = cljs.core.nth.call(null,inst_72210,(1),null);
var state_72246__$1 = (function (){var statearr_72260 = state_72246;
(statearr_72260[(10)] = inst_72215);

(statearr_72260[(11)] = inst_72216__$1);

return statearr_72260;
})();
if(cljs.core.truth_(inst_72216__$1)){
var statearr_72261_72286 = state_72246__$1;
(statearr_72261_72286[(1)] = (8));

} else {
var statearr_72262_72287 = state_72246__$1;
(statearr_72262_72287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (14))){
var inst_72227 = (state_72246[(8)]);
var inst_72215 = (state_72246[(10)]);
var inst_72224 = (state_72246[(2)]);
var inst_72225 = console.log("Loading!",inst_72215);
var inst_72226 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_72227__$1 = cljs.core.get.call(null,inst_72226,inst_72215);
var state_72246__$1 = (function (){var statearr_72263 = state_72246;
(statearr_72263[(8)] = inst_72227__$1);

(statearr_72263[(9)] = inst_72224);

(statearr_72263[(12)] = inst_72225);

return statearr_72263;
})();
if(cljs.core.truth_(inst_72227__$1)){
var statearr_72264_72288 = state_72246__$1;
(statearr_72264_72288[(1)] = (15));

} else {
var statearr_72265_72289 = state_72246__$1;
(statearr_72265_72289[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (16))){
var inst_72224 = (state_72246[(9)]);
var inst_72231 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_72224);
var state_72246__$1 = state_72246;
var statearr_72266_72290 = state_72246__$1;
(statearr_72266_72290[(2)] = inst_72231);

(statearr_72266_72290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (10))){
var inst_72238 = (state_72246[(2)]);
var state_72246__$1 = (function (){var statearr_72267 = state_72246;
(statearr_72267[(13)] = inst_72238);

return statearr_72267;
})();
var statearr_72268_72291 = state_72246__$1;
(statearr_72268_72291[(2)] = null);

(statearr_72268_72291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72247 === (8))){
var inst_72216 = (state_72246[(11)]);
var inst_72218 = console.log("Evaling!",inst_72216);
var inst_72219 = eval(inst_72216);
var state_72246__$1 = (function (){var statearr_72269 = state_72246;
(statearr_72269[(14)] = inst_72218);

return statearr_72269;
})();
var statearr_72270_72292 = state_72246__$1;
(statearr_72270_72292[(2)] = inst_72219);

(statearr_72270_72292[(1)] = (10));


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
});})(c__58504__auto__))
;
return ((function (switch__58437__auto__,c__58504__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__58438__auto__ = null;
var figwheel$client$file_reloading$state_machine__58438__auto____0 = (function (){
var statearr_72271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72271[(0)] = figwheel$client$file_reloading$state_machine__58438__auto__);

(statearr_72271[(1)] = (1));

return statearr_72271;
});
var figwheel$client$file_reloading$state_machine__58438__auto____1 = (function (state_72246){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_72246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e72272){if((e72272 instanceof Object)){
var ex__58441__auto__ = e72272;
var statearr_72273_72293 = state_72246;
(statearr_72273_72293[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72294 = state_72246;
state_72246 = G__72294;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__58438__auto__ = function(state_72246){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__58438__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__58438__auto____1.call(this,state_72246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__58438__auto____0;
figwheel$client$file_reloading$state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__58438__auto____1;
return figwheel$client$file_reloading$state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__))
})();
var state__58506__auto__ = (function (){var statearr_72274 = f__58505__auto__.call(null);
(statearr_72274[(6)] = c__58504__auto__);

return statearr_72274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__))
);

return c__58504__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__72296 = arguments.length;
switch (G__72296) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__72298,callback){
var map__72299 = p__72298;
var map__72299__$1 = ((((!((map__72299 == null)))?((((map__72299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72299):map__72299);
var file_msg = map__72299__$1;
var namespace = cljs.core.get.call(null,map__72299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__72299,map__72299__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__72299,map__72299__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__72301){
var map__72302 = p__72301;
var map__72302__$1 = ((((!((map__72302 == null)))?((((map__72302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72302):map__72302);
var file_msg = map__72302__$1;
var namespace = cljs.core.get.call(null,map__72302__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__72304){
var map__72305 = p__72304;
var map__72305__$1 = ((((!((map__72305 == null)))?((((map__72305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72305):map__72305);
var file_msg = map__72305__$1;
var namespace = cljs.core.get.call(null,map__72305__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__39620__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__39620__auto__){
var or__39642__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39642__auto__)){
return or__39642__auto__;
} else {
var or__39642__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39642__auto____$1)){
return or__39642__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__39620__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__72307,callback){
var map__72308 = p__72307;
var map__72308__$1 = ((((!((map__72308 == null)))?((((map__72308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72308):map__72308);
var file_msg = map__72308__$1;
var request_url = cljs.core.get.call(null,map__72308__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__72308__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__58504__auto___72358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto___72358,out){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto___72358,out){
return (function (state_72343){
var state_val_72344 = (state_72343[(1)]);
if((state_val_72344 === (1))){
var inst_72317 = cljs.core.seq.call(null,files);
var inst_72318 = cljs.core.first.call(null,inst_72317);
var inst_72319 = cljs.core.next.call(null,inst_72317);
var inst_72320 = files;
var state_72343__$1 = (function (){var statearr_72345 = state_72343;
(statearr_72345[(7)] = inst_72319);

(statearr_72345[(8)] = inst_72320);

(statearr_72345[(9)] = inst_72318);

return statearr_72345;
})();
var statearr_72346_72359 = state_72343__$1;
(statearr_72346_72359[(2)] = null);

(statearr_72346_72359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72344 === (2))){
var inst_72320 = (state_72343[(8)]);
var inst_72326 = (state_72343[(10)]);
var inst_72325 = cljs.core.seq.call(null,inst_72320);
var inst_72326__$1 = cljs.core.first.call(null,inst_72325);
var inst_72327 = cljs.core.next.call(null,inst_72325);
var inst_72328 = (inst_72326__$1 == null);
var inst_72329 = cljs.core.not.call(null,inst_72328);
var state_72343__$1 = (function (){var statearr_72347 = state_72343;
(statearr_72347[(11)] = inst_72327);

(statearr_72347[(10)] = inst_72326__$1);

return statearr_72347;
})();
if(inst_72329){
var statearr_72348_72360 = state_72343__$1;
(statearr_72348_72360[(1)] = (4));

} else {
var statearr_72349_72361 = state_72343__$1;
(statearr_72349_72361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72344 === (3))){
var inst_72341 = (state_72343[(2)]);
var state_72343__$1 = state_72343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72343__$1,inst_72341);
} else {
if((state_val_72344 === (4))){
var inst_72326 = (state_72343[(10)]);
var inst_72331 = figwheel.client.file_reloading.reload_js_file.call(null,inst_72326);
var state_72343__$1 = state_72343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72343__$1,(7),inst_72331);
} else {
if((state_val_72344 === (5))){
var inst_72337 = cljs.core.async.close_BANG_.call(null,out);
var state_72343__$1 = state_72343;
var statearr_72350_72362 = state_72343__$1;
(statearr_72350_72362[(2)] = inst_72337);

(statearr_72350_72362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72344 === (6))){
var inst_72339 = (state_72343[(2)]);
var state_72343__$1 = state_72343;
var statearr_72351_72363 = state_72343__$1;
(statearr_72351_72363[(2)] = inst_72339);

(statearr_72351_72363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72344 === (7))){
var inst_72327 = (state_72343[(11)]);
var inst_72333 = (state_72343[(2)]);
var inst_72334 = cljs.core.async.put_BANG_.call(null,out,inst_72333);
var inst_72320 = inst_72327;
var state_72343__$1 = (function (){var statearr_72352 = state_72343;
(statearr_72352[(12)] = inst_72334);

(statearr_72352[(8)] = inst_72320);

return statearr_72352;
})();
var statearr_72353_72364 = state_72343__$1;
(statearr_72353_72364[(2)] = null);

(statearr_72353_72364[(1)] = (2));


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
});})(c__58504__auto___72358,out))
;
return ((function (switch__58437__auto__,c__58504__auto___72358,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto____0 = (function (){
var statearr_72354 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72354[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto__);

(statearr_72354[(1)] = (1));

return statearr_72354;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto____1 = (function (state_72343){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_72343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e72355){if((e72355 instanceof Object)){
var ex__58441__auto__ = e72355;
var statearr_72356_72365 = state_72343;
(statearr_72356_72365[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72366 = state_72343;
state_72343 = G__72366;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto__ = function(state_72343){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto____1.call(this,state_72343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto___72358,out))
})();
var state__58506__auto__ = (function (){var statearr_72357 = f__58505__auto__.call(null);
(statearr_72357[(6)] = c__58504__auto___72358);

return statearr_72357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto___72358,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__72367,opts){
var map__72368 = p__72367;
var map__72368__$1 = ((((!((map__72368 == null)))?((((map__72368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72368):map__72368);
var eval_body = cljs.core.get.call(null,map__72368__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__72368__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__39620__auto__ = eval_body;
if(cljs.core.truth_(and__39620__auto__)){
return typeof eval_body === 'string';
} else {
return and__39620__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e72370){var e = e72370;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__72371_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__72371_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__72372){
var vec__72373 = p__72372;
var k = cljs.core.nth.call(null,vec__72373,(0),null);
var v = cljs.core.nth.call(null,vec__72373,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__72376){
var vec__72377 = p__72376;
var k = cljs.core.nth.call(null,vec__72377,(0),null);
var v = cljs.core.nth.call(null,vec__72377,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__72383,p__72384){
var map__72385 = p__72383;
var map__72385__$1 = ((((!((map__72385 == null)))?((((map__72385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72385):map__72385);
var opts = map__72385__$1;
var before_jsload = cljs.core.get.call(null,map__72385__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__72385__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__72385__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__72386 = p__72384;
var map__72386__$1 = ((((!((map__72386 == null)))?((((map__72386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72386):map__72386);
var msg = map__72386__$1;
var files = cljs.core.get.call(null,map__72386__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__72386__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__72386__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__58504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__58505__auto__ = (function (){var switch__58437__auto__ = ((function (c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_72540){
var state_val_72541 = (state_72540[(1)]);
if((state_val_72541 === (7))){
var inst_72403 = (state_72540[(7)]);
var inst_72400 = (state_72540[(8)]);
var inst_72401 = (state_72540[(9)]);
var inst_72402 = (state_72540[(10)]);
var inst_72408 = cljs.core._nth.call(null,inst_72401,inst_72403);
var inst_72409 = figwheel.client.file_reloading.eval_body.call(null,inst_72408,opts);
var inst_72410 = (inst_72403 + (1));
var tmp72542 = inst_72400;
var tmp72543 = inst_72401;
var tmp72544 = inst_72402;
var inst_72400__$1 = tmp72542;
var inst_72401__$1 = tmp72543;
var inst_72402__$1 = tmp72544;
var inst_72403__$1 = inst_72410;
var state_72540__$1 = (function (){var statearr_72545 = state_72540;
(statearr_72545[(7)] = inst_72403__$1);

(statearr_72545[(8)] = inst_72400__$1);

(statearr_72545[(9)] = inst_72401__$1);

(statearr_72545[(11)] = inst_72409);

(statearr_72545[(10)] = inst_72402__$1);

return statearr_72545;
})();
var statearr_72546_72629 = state_72540__$1;
(statearr_72546_72629[(2)] = null);

(statearr_72546_72629[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (20))){
var inst_72443 = (state_72540[(12)]);
var inst_72451 = figwheel.client.file_reloading.sort_files.call(null,inst_72443);
var state_72540__$1 = state_72540;
var statearr_72547_72630 = state_72540__$1;
(statearr_72547_72630[(2)] = inst_72451);

(statearr_72547_72630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (27))){
var state_72540__$1 = state_72540;
var statearr_72548_72631 = state_72540__$1;
(statearr_72548_72631[(2)] = null);

(statearr_72548_72631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (1))){
var inst_72392 = (state_72540[(13)]);
var inst_72389 = before_jsload.call(null,files);
var inst_72390 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_72391 = (function (){return ((function (inst_72392,inst_72389,inst_72390,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__72380_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__72380_SHARP_);
});
;})(inst_72392,inst_72389,inst_72390,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72392__$1 = cljs.core.filter.call(null,inst_72391,files);
var inst_72393 = cljs.core.not_empty.call(null,inst_72392__$1);
var state_72540__$1 = (function (){var statearr_72549 = state_72540;
(statearr_72549[(14)] = inst_72389);

(statearr_72549[(13)] = inst_72392__$1);

(statearr_72549[(15)] = inst_72390);

return statearr_72549;
})();
if(cljs.core.truth_(inst_72393)){
var statearr_72550_72632 = state_72540__$1;
(statearr_72550_72632[(1)] = (2));

} else {
var statearr_72551_72633 = state_72540__$1;
(statearr_72551_72633[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (24))){
var state_72540__$1 = state_72540;
var statearr_72552_72634 = state_72540__$1;
(statearr_72552_72634[(2)] = null);

(statearr_72552_72634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (39))){
var inst_72493 = (state_72540[(16)]);
var state_72540__$1 = state_72540;
var statearr_72553_72635 = state_72540__$1;
(statearr_72553_72635[(2)] = inst_72493);

(statearr_72553_72635[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (46))){
var inst_72535 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72554_72636 = state_72540__$1;
(statearr_72554_72636[(2)] = inst_72535);

(statearr_72554_72636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (4))){
var inst_72437 = (state_72540[(2)]);
var inst_72438 = cljs.core.List.EMPTY;
var inst_72439 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_72438);
var inst_72440 = (function (){return ((function (inst_72437,inst_72438,inst_72439,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__72381_SHARP_){
var and__39620__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__72381_SHARP_);
if(cljs.core.truth_(and__39620__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__72381_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__72381_SHARP_)));
} else {
return and__39620__auto__;
}
});
;})(inst_72437,inst_72438,inst_72439,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72441 = cljs.core.filter.call(null,inst_72440,files);
var inst_72442 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_72443 = cljs.core.concat.call(null,inst_72441,inst_72442);
var state_72540__$1 = (function (){var statearr_72555 = state_72540;
(statearr_72555[(17)] = inst_72439);

(statearr_72555[(18)] = inst_72437);

(statearr_72555[(12)] = inst_72443);

return statearr_72555;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_72556_72637 = state_72540__$1;
(statearr_72556_72637[(1)] = (16));

} else {
var statearr_72557_72638 = state_72540__$1;
(statearr_72557_72638[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (15))){
var inst_72427 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72558_72639 = state_72540__$1;
(statearr_72558_72639[(2)] = inst_72427);

(statearr_72558_72639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (21))){
var inst_72453 = (state_72540[(19)]);
var inst_72453__$1 = (state_72540[(2)]);
var inst_72454 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_72453__$1);
var state_72540__$1 = (function (){var statearr_72559 = state_72540;
(statearr_72559[(19)] = inst_72453__$1);

return statearr_72559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72540__$1,(22),inst_72454);
} else {
if((state_val_72541 === (31))){
var inst_72538 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72540__$1,inst_72538);
} else {
if((state_val_72541 === (32))){
var inst_72493 = (state_72540[(16)]);
var inst_72498 = inst_72493.cljs$lang$protocol_mask$partition0$;
var inst_72499 = (inst_72498 & (64));
var inst_72500 = inst_72493.cljs$core$ISeq$;
var inst_72501 = (cljs.core.PROTOCOL_SENTINEL === inst_72500);
var inst_72502 = (inst_72499) || (inst_72501);
var state_72540__$1 = state_72540;
if(cljs.core.truth_(inst_72502)){
var statearr_72560_72640 = state_72540__$1;
(statearr_72560_72640[(1)] = (35));

} else {
var statearr_72561_72641 = state_72540__$1;
(statearr_72561_72641[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (40))){
var inst_72515 = (state_72540[(20)]);
var inst_72514 = (state_72540[(2)]);
var inst_72515__$1 = cljs.core.get.call(null,inst_72514,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_72516 = cljs.core.get.call(null,inst_72514,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_72517 = cljs.core.not_empty.call(null,inst_72515__$1);
var state_72540__$1 = (function (){var statearr_72562 = state_72540;
(statearr_72562[(21)] = inst_72516);

(statearr_72562[(20)] = inst_72515__$1);

return statearr_72562;
})();
if(cljs.core.truth_(inst_72517)){
var statearr_72563_72642 = state_72540__$1;
(statearr_72563_72642[(1)] = (41));

} else {
var statearr_72564_72643 = state_72540__$1;
(statearr_72564_72643[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (33))){
var state_72540__$1 = state_72540;
var statearr_72565_72644 = state_72540__$1;
(statearr_72565_72644[(2)] = false);

(statearr_72565_72644[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (13))){
var inst_72413 = (state_72540[(22)]);
var inst_72417 = cljs.core.chunk_first.call(null,inst_72413);
var inst_72418 = cljs.core.chunk_rest.call(null,inst_72413);
var inst_72419 = cljs.core.count.call(null,inst_72417);
var inst_72400 = inst_72418;
var inst_72401 = inst_72417;
var inst_72402 = inst_72419;
var inst_72403 = (0);
var state_72540__$1 = (function (){var statearr_72566 = state_72540;
(statearr_72566[(7)] = inst_72403);

(statearr_72566[(8)] = inst_72400);

(statearr_72566[(9)] = inst_72401);

(statearr_72566[(10)] = inst_72402);

return statearr_72566;
})();
var statearr_72567_72645 = state_72540__$1;
(statearr_72567_72645[(2)] = null);

(statearr_72567_72645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (22))){
var inst_72453 = (state_72540[(19)]);
var inst_72456 = (state_72540[(23)]);
var inst_72461 = (state_72540[(24)]);
var inst_72457 = (state_72540[(25)]);
var inst_72456__$1 = (state_72540[(2)]);
var inst_72457__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72456__$1);
var inst_72458 = (function (){var all_files = inst_72453;
var res_SINGLEQUOTE_ = inst_72456__$1;
var res = inst_72457__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_72453,inst_72456,inst_72461,inst_72457,inst_72456__$1,inst_72457__$1,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__72382_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__72382_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_72453,inst_72456,inst_72461,inst_72457,inst_72456__$1,inst_72457__$1,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72459 = cljs.core.filter.call(null,inst_72458,inst_72456__$1);
var inst_72460 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_72461__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72460);
var inst_72462 = cljs.core.not_empty.call(null,inst_72461__$1);
var state_72540__$1 = (function (){var statearr_72568 = state_72540;
(statearr_72568[(26)] = inst_72459);

(statearr_72568[(23)] = inst_72456__$1);

(statearr_72568[(24)] = inst_72461__$1);

(statearr_72568[(25)] = inst_72457__$1);

return statearr_72568;
})();
if(cljs.core.truth_(inst_72462)){
var statearr_72569_72646 = state_72540__$1;
(statearr_72569_72646[(1)] = (23));

} else {
var statearr_72570_72647 = state_72540__$1;
(statearr_72570_72647[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (36))){
var state_72540__$1 = state_72540;
var statearr_72571_72648 = state_72540__$1;
(statearr_72571_72648[(2)] = false);

(statearr_72571_72648[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (41))){
var inst_72515 = (state_72540[(20)]);
var inst_72519 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_72520 = cljs.core.map.call(null,inst_72519,inst_72515);
var inst_72521 = cljs.core.pr_str.call(null,inst_72520);
var inst_72522 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72521)].join('');
var inst_72523 = figwheel.client.utils.log.call(null,inst_72522);
var state_72540__$1 = state_72540;
var statearr_72572_72649 = state_72540__$1;
(statearr_72572_72649[(2)] = inst_72523);

(statearr_72572_72649[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (43))){
var inst_72516 = (state_72540[(21)]);
var inst_72526 = (state_72540[(2)]);
var inst_72527 = cljs.core.not_empty.call(null,inst_72516);
var state_72540__$1 = (function (){var statearr_72573 = state_72540;
(statearr_72573[(27)] = inst_72526);

return statearr_72573;
})();
if(cljs.core.truth_(inst_72527)){
var statearr_72574_72650 = state_72540__$1;
(statearr_72574_72650[(1)] = (44));

} else {
var statearr_72575_72651 = state_72540__$1;
(statearr_72575_72651[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (29))){
var inst_72459 = (state_72540[(26)]);
var inst_72453 = (state_72540[(19)]);
var inst_72493 = (state_72540[(16)]);
var inst_72456 = (state_72540[(23)]);
var inst_72461 = (state_72540[(24)]);
var inst_72457 = (state_72540[(25)]);
var inst_72489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_72492 = (function (){var all_files = inst_72453;
var res_SINGLEQUOTE_ = inst_72456;
var res = inst_72457;
var files_not_loaded = inst_72459;
var dependencies_that_loaded = inst_72461;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72459,inst_72453,inst_72493,inst_72456,inst_72461,inst_72457,inst_72489,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72491){
var map__72576 = p__72491;
var map__72576__$1 = ((((!((map__72576 == null)))?((((map__72576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72576):map__72576);
var namespace = cljs.core.get.call(null,map__72576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72459,inst_72453,inst_72493,inst_72456,inst_72461,inst_72457,inst_72489,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72493__$1 = cljs.core.group_by.call(null,inst_72492,inst_72459);
var inst_72495 = (inst_72493__$1 == null);
var inst_72496 = cljs.core.not.call(null,inst_72495);
var state_72540__$1 = (function (){var statearr_72578 = state_72540;
(statearr_72578[(28)] = inst_72489);

(statearr_72578[(16)] = inst_72493__$1);

return statearr_72578;
})();
if(inst_72496){
var statearr_72579_72652 = state_72540__$1;
(statearr_72579_72652[(1)] = (32));

} else {
var statearr_72580_72653 = state_72540__$1;
(statearr_72580_72653[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (44))){
var inst_72516 = (state_72540[(21)]);
var inst_72529 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_72516);
var inst_72530 = cljs.core.pr_str.call(null,inst_72529);
var inst_72531 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72530)].join('');
var inst_72532 = figwheel.client.utils.log.call(null,inst_72531);
var state_72540__$1 = state_72540;
var statearr_72581_72654 = state_72540__$1;
(statearr_72581_72654[(2)] = inst_72532);

(statearr_72581_72654[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (6))){
var inst_72434 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72582_72655 = state_72540__$1;
(statearr_72582_72655[(2)] = inst_72434);

(statearr_72582_72655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (28))){
var inst_72459 = (state_72540[(26)]);
var inst_72486 = (state_72540[(2)]);
var inst_72487 = cljs.core.not_empty.call(null,inst_72459);
var state_72540__$1 = (function (){var statearr_72583 = state_72540;
(statearr_72583[(29)] = inst_72486);

return statearr_72583;
})();
if(cljs.core.truth_(inst_72487)){
var statearr_72584_72656 = state_72540__$1;
(statearr_72584_72656[(1)] = (29));

} else {
var statearr_72585_72657 = state_72540__$1;
(statearr_72585_72657[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (25))){
var inst_72457 = (state_72540[(25)]);
var inst_72473 = (state_72540[(2)]);
var inst_72474 = cljs.core.not_empty.call(null,inst_72457);
var state_72540__$1 = (function (){var statearr_72586 = state_72540;
(statearr_72586[(30)] = inst_72473);

return statearr_72586;
})();
if(cljs.core.truth_(inst_72474)){
var statearr_72587_72658 = state_72540__$1;
(statearr_72587_72658[(1)] = (26));

} else {
var statearr_72588_72659 = state_72540__$1;
(statearr_72588_72659[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (34))){
var inst_72509 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
if(cljs.core.truth_(inst_72509)){
var statearr_72589_72660 = state_72540__$1;
(statearr_72589_72660[(1)] = (38));

} else {
var statearr_72590_72661 = state_72540__$1;
(statearr_72590_72661[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (17))){
var state_72540__$1 = state_72540;
var statearr_72591_72662 = state_72540__$1;
(statearr_72591_72662[(2)] = recompile_dependents);

(statearr_72591_72662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (3))){
var state_72540__$1 = state_72540;
var statearr_72592_72663 = state_72540__$1;
(statearr_72592_72663[(2)] = null);

(statearr_72592_72663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (12))){
var inst_72430 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72593_72664 = state_72540__$1;
(statearr_72593_72664[(2)] = inst_72430);

(statearr_72593_72664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (2))){
var inst_72392 = (state_72540[(13)]);
var inst_72399 = cljs.core.seq.call(null,inst_72392);
var inst_72400 = inst_72399;
var inst_72401 = null;
var inst_72402 = (0);
var inst_72403 = (0);
var state_72540__$1 = (function (){var statearr_72594 = state_72540;
(statearr_72594[(7)] = inst_72403);

(statearr_72594[(8)] = inst_72400);

(statearr_72594[(9)] = inst_72401);

(statearr_72594[(10)] = inst_72402);

return statearr_72594;
})();
var statearr_72595_72665 = state_72540__$1;
(statearr_72595_72665[(2)] = null);

(statearr_72595_72665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (23))){
var inst_72459 = (state_72540[(26)]);
var inst_72453 = (state_72540[(19)]);
var inst_72456 = (state_72540[(23)]);
var inst_72461 = (state_72540[(24)]);
var inst_72457 = (state_72540[(25)]);
var inst_72464 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_72466 = (function (){var all_files = inst_72453;
var res_SINGLEQUOTE_ = inst_72456;
var res = inst_72457;
var files_not_loaded = inst_72459;
var dependencies_that_loaded = inst_72461;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72459,inst_72453,inst_72456,inst_72461,inst_72457,inst_72464,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72465){
var map__72596 = p__72465;
var map__72596__$1 = ((((!((map__72596 == null)))?((((map__72596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72596):map__72596);
var request_url = cljs.core.get.call(null,map__72596__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72459,inst_72453,inst_72456,inst_72461,inst_72457,inst_72464,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72467 = cljs.core.reverse.call(null,inst_72461);
var inst_72468 = cljs.core.map.call(null,inst_72466,inst_72467);
var inst_72469 = cljs.core.pr_str.call(null,inst_72468);
var inst_72470 = figwheel.client.utils.log.call(null,inst_72469);
var state_72540__$1 = (function (){var statearr_72598 = state_72540;
(statearr_72598[(31)] = inst_72464);

return statearr_72598;
})();
var statearr_72599_72666 = state_72540__$1;
(statearr_72599_72666[(2)] = inst_72470);

(statearr_72599_72666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (35))){
var state_72540__$1 = state_72540;
var statearr_72600_72667 = state_72540__$1;
(statearr_72600_72667[(2)] = true);

(statearr_72600_72667[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (19))){
var inst_72443 = (state_72540[(12)]);
var inst_72449 = figwheel.client.file_reloading.expand_files.call(null,inst_72443);
var state_72540__$1 = state_72540;
var statearr_72601_72668 = state_72540__$1;
(statearr_72601_72668[(2)] = inst_72449);

(statearr_72601_72668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (11))){
var state_72540__$1 = state_72540;
var statearr_72602_72669 = state_72540__$1;
(statearr_72602_72669[(2)] = null);

(statearr_72602_72669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (9))){
var inst_72432 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72603_72670 = state_72540__$1;
(statearr_72603_72670[(2)] = inst_72432);

(statearr_72603_72670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (5))){
var inst_72403 = (state_72540[(7)]);
var inst_72402 = (state_72540[(10)]);
var inst_72405 = (inst_72403 < inst_72402);
var inst_72406 = inst_72405;
var state_72540__$1 = state_72540;
if(cljs.core.truth_(inst_72406)){
var statearr_72604_72671 = state_72540__$1;
(statearr_72604_72671[(1)] = (7));

} else {
var statearr_72605_72672 = state_72540__$1;
(statearr_72605_72672[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (14))){
var inst_72413 = (state_72540[(22)]);
var inst_72422 = cljs.core.first.call(null,inst_72413);
var inst_72423 = figwheel.client.file_reloading.eval_body.call(null,inst_72422,opts);
var inst_72424 = cljs.core.next.call(null,inst_72413);
var inst_72400 = inst_72424;
var inst_72401 = null;
var inst_72402 = (0);
var inst_72403 = (0);
var state_72540__$1 = (function (){var statearr_72606 = state_72540;
(statearr_72606[(7)] = inst_72403);

(statearr_72606[(8)] = inst_72400);

(statearr_72606[(32)] = inst_72423);

(statearr_72606[(9)] = inst_72401);

(statearr_72606[(10)] = inst_72402);

return statearr_72606;
})();
var statearr_72607_72673 = state_72540__$1;
(statearr_72607_72673[(2)] = null);

(statearr_72607_72673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (45))){
var state_72540__$1 = state_72540;
var statearr_72608_72674 = state_72540__$1;
(statearr_72608_72674[(2)] = null);

(statearr_72608_72674[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (26))){
var inst_72459 = (state_72540[(26)]);
var inst_72453 = (state_72540[(19)]);
var inst_72456 = (state_72540[(23)]);
var inst_72461 = (state_72540[(24)]);
var inst_72457 = (state_72540[(25)]);
var inst_72476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_72478 = (function (){var all_files = inst_72453;
var res_SINGLEQUOTE_ = inst_72456;
var res = inst_72457;
var files_not_loaded = inst_72459;
var dependencies_that_loaded = inst_72461;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72459,inst_72453,inst_72456,inst_72461,inst_72457,inst_72476,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72477){
var map__72609 = p__72477;
var map__72609__$1 = ((((!((map__72609 == null)))?((((map__72609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72609):map__72609);
var namespace = cljs.core.get.call(null,map__72609__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__72609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72459,inst_72453,inst_72456,inst_72461,inst_72457,inst_72476,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72479 = cljs.core.map.call(null,inst_72478,inst_72457);
var inst_72480 = cljs.core.pr_str.call(null,inst_72479);
var inst_72481 = figwheel.client.utils.log.call(null,inst_72480);
var inst_72482 = (function (){var all_files = inst_72453;
var res_SINGLEQUOTE_ = inst_72456;
var res = inst_72457;
var files_not_loaded = inst_72459;
var dependencies_that_loaded = inst_72461;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72459,inst_72453,inst_72456,inst_72461,inst_72457,inst_72476,inst_72478,inst_72479,inst_72480,inst_72481,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72459,inst_72453,inst_72456,inst_72461,inst_72457,inst_72476,inst_72478,inst_72479,inst_72480,inst_72481,state_val_72541,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72483 = setTimeout(inst_72482,(10));
var state_72540__$1 = (function (){var statearr_72611 = state_72540;
(statearr_72611[(33)] = inst_72481);

(statearr_72611[(34)] = inst_72476);

return statearr_72611;
})();
var statearr_72612_72675 = state_72540__$1;
(statearr_72612_72675[(2)] = inst_72483);

(statearr_72612_72675[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (16))){
var state_72540__$1 = state_72540;
var statearr_72613_72676 = state_72540__$1;
(statearr_72613_72676[(2)] = reload_dependents);

(statearr_72613_72676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (38))){
var inst_72493 = (state_72540[(16)]);
var inst_72511 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72493);
var state_72540__$1 = state_72540;
var statearr_72614_72677 = state_72540__$1;
(statearr_72614_72677[(2)] = inst_72511);

(statearr_72614_72677[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (30))){
var state_72540__$1 = state_72540;
var statearr_72615_72678 = state_72540__$1;
(statearr_72615_72678[(2)] = null);

(statearr_72615_72678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (10))){
var inst_72413 = (state_72540[(22)]);
var inst_72415 = cljs.core.chunked_seq_QMARK_.call(null,inst_72413);
var state_72540__$1 = state_72540;
if(inst_72415){
var statearr_72616_72679 = state_72540__$1;
(statearr_72616_72679[(1)] = (13));

} else {
var statearr_72617_72680 = state_72540__$1;
(statearr_72617_72680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (18))){
var inst_72447 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
if(cljs.core.truth_(inst_72447)){
var statearr_72618_72681 = state_72540__$1;
(statearr_72618_72681[(1)] = (19));

} else {
var statearr_72619_72682 = state_72540__$1;
(statearr_72619_72682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (42))){
var state_72540__$1 = state_72540;
var statearr_72620_72683 = state_72540__$1;
(statearr_72620_72683[(2)] = null);

(statearr_72620_72683[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (37))){
var inst_72506 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72621_72684 = state_72540__$1;
(statearr_72621_72684[(2)] = inst_72506);

(statearr_72621_72684[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (8))){
var inst_72413 = (state_72540[(22)]);
var inst_72400 = (state_72540[(8)]);
var inst_72413__$1 = cljs.core.seq.call(null,inst_72400);
var state_72540__$1 = (function (){var statearr_72622 = state_72540;
(statearr_72622[(22)] = inst_72413__$1);

return statearr_72622;
})();
if(inst_72413__$1){
var statearr_72623_72685 = state_72540__$1;
(statearr_72623_72685[(1)] = (10));

} else {
var statearr_72624_72686 = state_72540__$1;
(statearr_72624_72686[(1)] = (11));

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
}
});})(c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__58437__auto__,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto____0 = (function (){
var statearr_72625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72625[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto__);

(statearr_72625[(1)] = (1));

return statearr_72625;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto____1 = (function (state_72540){
while(true){
var ret_value__58439__auto__ = (function (){try{while(true){
var result__58440__auto__ = switch__58437__auto__.call(null,state_72540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58440__auto__;
}
break;
}
}catch (e72626){if((e72626 instanceof Object)){
var ex__58441__auto__ = e72626;
var statearr_72627_72687 = state_72540;
(statearr_72627_72687[(5)] = ex__58441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72688 = state_72540;
state_72540 = G__72688;
continue;
} else {
return ret_value__58439__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto__ = function(state_72540){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto____1.call(this,state_72540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58438__auto__;
})()
;})(switch__58437__auto__,c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__58506__auto__ = (function (){var statearr_72628 = f__58505__auto__.call(null);
(statearr_72628[(6)] = c__58504__auto__);

return statearr_72628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58506__auto__);
});})(c__58504__auto__,map__72385,map__72385__$1,opts,before_jsload,on_jsload,reload_dependents,map__72386,map__72386__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__58504__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__72691,link){
var map__72692 = p__72691;
var map__72692__$1 = ((((!((map__72692 == null)))?((((map__72692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72692):map__72692);
var file = cljs.core.get.call(null,map__72692__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__72692,map__72692__$1,file){
return (function (p1__72689_SHARP_,p2__72690_SHARP_){
if(cljs.core._EQ_.call(null,p1__72689_SHARP_,p2__72690_SHARP_)){
return p1__72689_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__72692,map__72692__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__72695){
var map__72696 = p__72695;
var map__72696__$1 = ((((!((map__72696 == null)))?((((map__72696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72696):map__72696);
var match_length = cljs.core.get.call(null,map__72696__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__72696__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__72694_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__72694_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__72698_SHARP_,p2__72699_SHARP_){
return cljs.core.assoc.call(null,p1__72698_SHARP_,cljs.core.get.call(null,p2__72699_SHARP_,key),p2__72699_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_72700 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_72700);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_72700);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__72701,p__72702){
var map__72703 = p__72701;
var map__72703__$1 = ((((!((map__72703 == null)))?((((map__72703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72703):map__72703);
var on_cssload = cljs.core.get.call(null,map__72703__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__72704 = p__72702;
var map__72704__$1 = ((((!((map__72704 == null)))?((((map__72704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72704):map__72704);
var files_msg = map__72704__$1;
var files = cljs.core.get.call(null,map__72704__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1518985466219
