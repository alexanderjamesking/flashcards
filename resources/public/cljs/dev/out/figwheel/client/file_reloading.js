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
var or__39945__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__39945__auto__){
return or__39945__auto__;
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
var or__39945__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
var or__39945__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__39945__auto____$1)){
return or__39945__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__71643_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__71643_SHARP_));
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
var seq__71644 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__71645 = null;
var count__71646 = (0);
var i__71647 = (0);
while(true){
if((i__71647 < count__71646)){
var n = cljs.core._nth.call(null,chunk__71645,i__71647);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__71648 = seq__71644;
var G__71649 = chunk__71645;
var G__71650 = count__71646;
var G__71651 = (i__71647 + (1));
seq__71644 = G__71648;
chunk__71645 = G__71649;
count__71646 = G__71650;
i__71647 = G__71651;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__71644);
if(temp__5457__auto__){
var seq__71644__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71644__$1)){
var c__41826__auto__ = cljs.core.chunk_first.call(null,seq__71644__$1);
var G__71652 = cljs.core.chunk_rest.call(null,seq__71644__$1);
var G__71653 = c__41826__auto__;
var G__71654 = cljs.core.count.call(null,c__41826__auto__);
var G__71655 = (0);
seq__71644 = G__71652;
chunk__71645 = G__71653;
count__71646 = G__71654;
i__71647 = G__71655;
continue;
} else {
var n = cljs.core.first.call(null,seq__71644__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__71656 = cljs.core.next.call(null,seq__71644__$1);
var G__71657 = null;
var G__71658 = (0);
var G__71659 = (0);
seq__71644 = G__71656;
chunk__71645 = G__71657;
count__71646 = G__71658;
i__71647 = G__71659;
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
return cljs.core.some.call(null,(function (p__71660){
var vec__71661 = p__71660;
var _ = cljs.core.nth.call(null,vec__71661,(0),null);
var v = cljs.core.nth.call(null,vec__71661,(1),null);
var and__39919__auto__ = v;
if(cljs.core.truth_(and__39919__auto__)){
return v.call(null,dep);
} else {
return and__39919__auto__;
}
}),cljs.core.filter.call(null,(function (p__71664){
var vec__71665 = p__71664;
var k = cljs.core.nth.call(null,vec__71665,(0),null);
var v = cljs.core.nth.call(null,vec__71665,(1),null);
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

var seq__71677_71685 = cljs.core.seq.call(null,deps);
var chunk__71678_71686 = null;
var count__71679_71687 = (0);
var i__71680_71688 = (0);
while(true){
if((i__71680_71688 < count__71679_71687)){
var dep_71689 = cljs.core._nth.call(null,chunk__71678_71686,i__71680_71688);
if(cljs.core.truth_((function (){var and__39919__auto__ = dep_71689;
if(cljs.core.truth_(and__39919__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_71689));
} else {
return and__39919__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_71689,(depth + (1)),state);
} else {
}

var G__71690 = seq__71677_71685;
var G__71691 = chunk__71678_71686;
var G__71692 = count__71679_71687;
var G__71693 = (i__71680_71688 + (1));
seq__71677_71685 = G__71690;
chunk__71678_71686 = G__71691;
count__71679_71687 = G__71692;
i__71680_71688 = G__71693;
continue;
} else {
var temp__5457__auto___71694 = cljs.core.seq.call(null,seq__71677_71685);
if(temp__5457__auto___71694){
var seq__71677_71695__$1 = temp__5457__auto___71694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71677_71695__$1)){
var c__41826__auto___71696 = cljs.core.chunk_first.call(null,seq__71677_71695__$1);
var G__71697 = cljs.core.chunk_rest.call(null,seq__71677_71695__$1);
var G__71698 = c__41826__auto___71696;
var G__71699 = cljs.core.count.call(null,c__41826__auto___71696);
var G__71700 = (0);
seq__71677_71685 = G__71697;
chunk__71678_71686 = G__71698;
count__71679_71687 = G__71699;
i__71680_71688 = G__71700;
continue;
} else {
var dep_71701 = cljs.core.first.call(null,seq__71677_71695__$1);
if(cljs.core.truth_((function (){var and__39919__auto__ = dep_71701;
if(cljs.core.truth_(and__39919__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_71701));
} else {
return and__39919__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_71701,(depth + (1)),state);
} else {
}

var G__71702 = cljs.core.next.call(null,seq__71677_71695__$1);
var G__71703 = null;
var G__71704 = (0);
var G__71705 = (0);
seq__71677_71685 = G__71702;
chunk__71678_71686 = G__71703;
count__71679_71687 = G__71704;
i__71680_71688 = G__71705;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__71681){
var vec__71682 = p__71681;
var seq__71683 = cljs.core.seq.call(null,vec__71682);
var first__71684 = cljs.core.first.call(null,seq__71683);
var seq__71683__$1 = cljs.core.next.call(null,seq__71683);
var x = first__71684;
var xs = seq__71683__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__71682,seq__71683,first__71684,seq__71683__$1,x,xs,get_deps__$1){
return (function (p1__71668_SHARP_){
return clojure.set.difference.call(null,p1__71668_SHARP_,x);
});})(vec__71682,seq__71683,first__71684,seq__71683__$1,x,xs,get_deps__$1))
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
var seq__71706 = cljs.core.seq.call(null,provides);
var chunk__71707 = null;
var count__71708 = (0);
var i__71709 = (0);
while(true){
if((i__71709 < count__71708)){
var prov = cljs.core._nth.call(null,chunk__71707,i__71709);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__71710_71718 = cljs.core.seq.call(null,requires);
var chunk__71711_71719 = null;
var count__71712_71720 = (0);
var i__71713_71721 = (0);
while(true){
if((i__71713_71721 < count__71712_71720)){
var req_71722 = cljs.core._nth.call(null,chunk__71711_71719,i__71713_71721);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71722,prov);

var G__71723 = seq__71710_71718;
var G__71724 = chunk__71711_71719;
var G__71725 = count__71712_71720;
var G__71726 = (i__71713_71721 + (1));
seq__71710_71718 = G__71723;
chunk__71711_71719 = G__71724;
count__71712_71720 = G__71725;
i__71713_71721 = G__71726;
continue;
} else {
var temp__5457__auto___71727 = cljs.core.seq.call(null,seq__71710_71718);
if(temp__5457__auto___71727){
var seq__71710_71728__$1 = temp__5457__auto___71727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71710_71728__$1)){
var c__41826__auto___71729 = cljs.core.chunk_first.call(null,seq__71710_71728__$1);
var G__71730 = cljs.core.chunk_rest.call(null,seq__71710_71728__$1);
var G__71731 = c__41826__auto___71729;
var G__71732 = cljs.core.count.call(null,c__41826__auto___71729);
var G__71733 = (0);
seq__71710_71718 = G__71730;
chunk__71711_71719 = G__71731;
count__71712_71720 = G__71732;
i__71713_71721 = G__71733;
continue;
} else {
var req_71734 = cljs.core.first.call(null,seq__71710_71728__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71734,prov);

var G__71735 = cljs.core.next.call(null,seq__71710_71728__$1);
var G__71736 = null;
var G__71737 = (0);
var G__71738 = (0);
seq__71710_71718 = G__71735;
chunk__71711_71719 = G__71736;
count__71712_71720 = G__71737;
i__71713_71721 = G__71738;
continue;
}
} else {
}
}
break;
}

var G__71739 = seq__71706;
var G__71740 = chunk__71707;
var G__71741 = count__71708;
var G__71742 = (i__71709 + (1));
seq__71706 = G__71739;
chunk__71707 = G__71740;
count__71708 = G__71741;
i__71709 = G__71742;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__71706);
if(temp__5457__auto__){
var seq__71706__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71706__$1)){
var c__41826__auto__ = cljs.core.chunk_first.call(null,seq__71706__$1);
var G__71743 = cljs.core.chunk_rest.call(null,seq__71706__$1);
var G__71744 = c__41826__auto__;
var G__71745 = cljs.core.count.call(null,c__41826__auto__);
var G__71746 = (0);
seq__71706 = G__71743;
chunk__71707 = G__71744;
count__71708 = G__71745;
i__71709 = G__71746;
continue;
} else {
var prov = cljs.core.first.call(null,seq__71706__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__71714_71747 = cljs.core.seq.call(null,requires);
var chunk__71715_71748 = null;
var count__71716_71749 = (0);
var i__71717_71750 = (0);
while(true){
if((i__71717_71750 < count__71716_71749)){
var req_71751 = cljs.core._nth.call(null,chunk__71715_71748,i__71717_71750);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71751,prov);

var G__71752 = seq__71714_71747;
var G__71753 = chunk__71715_71748;
var G__71754 = count__71716_71749;
var G__71755 = (i__71717_71750 + (1));
seq__71714_71747 = G__71752;
chunk__71715_71748 = G__71753;
count__71716_71749 = G__71754;
i__71717_71750 = G__71755;
continue;
} else {
var temp__5457__auto___71756__$1 = cljs.core.seq.call(null,seq__71714_71747);
if(temp__5457__auto___71756__$1){
var seq__71714_71757__$1 = temp__5457__auto___71756__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71714_71757__$1)){
var c__41826__auto___71758 = cljs.core.chunk_first.call(null,seq__71714_71757__$1);
var G__71759 = cljs.core.chunk_rest.call(null,seq__71714_71757__$1);
var G__71760 = c__41826__auto___71758;
var G__71761 = cljs.core.count.call(null,c__41826__auto___71758);
var G__71762 = (0);
seq__71714_71747 = G__71759;
chunk__71715_71748 = G__71760;
count__71716_71749 = G__71761;
i__71717_71750 = G__71762;
continue;
} else {
var req_71763 = cljs.core.first.call(null,seq__71714_71757__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71763,prov);

var G__71764 = cljs.core.next.call(null,seq__71714_71757__$1);
var G__71765 = null;
var G__71766 = (0);
var G__71767 = (0);
seq__71714_71747 = G__71764;
chunk__71715_71748 = G__71765;
count__71716_71749 = G__71766;
i__71717_71750 = G__71767;
continue;
}
} else {
}
}
break;
}

var G__71768 = cljs.core.next.call(null,seq__71706__$1);
var G__71769 = null;
var G__71770 = (0);
var G__71771 = (0);
seq__71706 = G__71768;
chunk__71707 = G__71769;
count__71708 = G__71770;
i__71709 = G__71771;
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
var seq__71772_71776 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__71773_71777 = null;
var count__71774_71778 = (0);
var i__71775_71779 = (0);
while(true){
if((i__71775_71779 < count__71774_71778)){
var ns_71780 = cljs.core._nth.call(null,chunk__71773_71777,i__71775_71779);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_71780);

var G__71781 = seq__71772_71776;
var G__71782 = chunk__71773_71777;
var G__71783 = count__71774_71778;
var G__71784 = (i__71775_71779 + (1));
seq__71772_71776 = G__71781;
chunk__71773_71777 = G__71782;
count__71774_71778 = G__71783;
i__71775_71779 = G__71784;
continue;
} else {
var temp__5457__auto___71785 = cljs.core.seq.call(null,seq__71772_71776);
if(temp__5457__auto___71785){
var seq__71772_71786__$1 = temp__5457__auto___71785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71772_71786__$1)){
var c__41826__auto___71787 = cljs.core.chunk_first.call(null,seq__71772_71786__$1);
var G__71788 = cljs.core.chunk_rest.call(null,seq__71772_71786__$1);
var G__71789 = c__41826__auto___71787;
var G__71790 = cljs.core.count.call(null,c__41826__auto___71787);
var G__71791 = (0);
seq__71772_71776 = G__71788;
chunk__71773_71777 = G__71789;
count__71774_71778 = G__71790;
i__71775_71779 = G__71791;
continue;
} else {
var ns_71792 = cljs.core.first.call(null,seq__71772_71786__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_71792);

var G__71793 = cljs.core.next.call(null,seq__71772_71786__$1);
var G__71794 = null;
var G__71795 = (0);
var G__71796 = (0);
seq__71772_71776 = G__71793;
chunk__71773_71777 = G__71794;
count__71774_71778 = G__71795;
i__71775_71779 = G__71796;
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
goog.require_figwheel_backup_ = (function (){var or__39945__auto__ = goog.require__;
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
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
var G__71797__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__71797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71798__i = 0, G__71798__a = new Array(arguments.length -  0);
while (G__71798__i < G__71798__a.length) {G__71798__a[G__71798__i] = arguments[G__71798__i + 0]; ++G__71798__i;}
  args = new cljs.core.IndexedSeq(G__71798__a,0,null);
} 
return G__71797__delegate.call(this,args);};
G__71797.cljs$lang$maxFixedArity = 0;
G__71797.cljs$lang$applyTo = (function (arglist__71799){
var args = cljs.core.seq(arglist__71799);
return G__71797__delegate(args);
});
G__71797.cljs$core$IFn$_invoke$arity$variadic = G__71797__delegate;
return G__71797;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__71800_SHARP_,p2__71801_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71800_SHARP_)].join('')),p2__71801_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__71802_SHARP_,p2__71803_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71802_SHARP_)].join(''),p2__71803_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__71804 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__71804.addCallback(((function (G__71804){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__71804))
);

G__71804.addErrback(((function (G__71804){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__71804))
);

return G__71804;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e71805){if((e71805 instanceof Error)){
var e = e71805;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e71805;

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
}catch (e71806){if((e71806 instanceof Error)){
var e = e71806;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e71806;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__71807 = cljs.core._EQ_;
var expr__71808 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__71807.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__71808))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__71807.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__71808))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__71807.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__71808))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__71807,expr__71808){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__71807,expr__71808))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__71810,callback){
var map__71811 = p__71810;
var map__71811__$1 = ((((!((map__71811 == null)))?((((map__71811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71811):map__71811);
var file_msg = map__71811__$1;
var request_url = cljs.core.get.call(null,map__71811__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__39945__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__71811,map__71811__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__71811,map__71811__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__){
return (function (state_71851){
var state_val_71852 = (state_71851[(1)]);
if((state_val_71852 === (7))){
var inst_71847 = (state_71851[(2)]);
var state_71851__$1 = state_71851;
var statearr_71853_71880 = state_71851__$1;
(statearr_71853_71880[(2)] = inst_71847);

(statearr_71853_71880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (1))){
var state_71851__$1 = state_71851;
var statearr_71854_71881 = state_71851__$1;
(statearr_71854_71881[(2)] = null);

(statearr_71854_71881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (4))){
var inst_71815 = (state_71851[(7)]);
var inst_71815__$1 = (state_71851[(2)]);
var state_71851__$1 = (function (){var statearr_71855 = state_71851;
(statearr_71855[(7)] = inst_71815__$1);

return statearr_71855;
})();
if(cljs.core.truth_(inst_71815__$1)){
var statearr_71856_71882 = state_71851__$1;
(statearr_71856_71882[(1)] = (5));

} else {
var statearr_71857_71883 = state_71851__$1;
(statearr_71857_71883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (15))){
var inst_71829 = (state_71851[(8)]);
var inst_71832 = (state_71851[(9)]);
var inst_71834 = inst_71832.call(null,inst_71829);
var state_71851__$1 = state_71851;
var statearr_71858_71884 = state_71851__$1;
(statearr_71858_71884[(2)] = inst_71834);

(statearr_71858_71884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (13))){
var inst_71841 = (state_71851[(2)]);
var state_71851__$1 = state_71851;
var statearr_71859_71885 = state_71851__$1;
(statearr_71859_71885[(2)] = inst_71841);

(statearr_71859_71885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (6))){
var state_71851__$1 = state_71851;
var statearr_71860_71886 = state_71851__$1;
(statearr_71860_71886[(2)] = null);

(statearr_71860_71886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (17))){
var inst_71838 = (state_71851[(2)]);
var state_71851__$1 = state_71851;
var statearr_71861_71887 = state_71851__$1;
(statearr_71861_71887[(2)] = inst_71838);

(statearr_71861_71887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (3))){
var inst_71849 = (state_71851[(2)]);
var state_71851__$1 = state_71851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71851__$1,inst_71849);
} else {
if((state_val_71852 === (12))){
var state_71851__$1 = state_71851;
var statearr_71862_71888 = state_71851__$1;
(statearr_71862_71888[(2)] = null);

(statearr_71862_71888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (2))){
var state_71851__$1 = state_71851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71851__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_71852 === (11))){
var inst_71820 = (state_71851[(10)]);
var inst_71827 = figwheel.client.file_reloading.blocking_load.call(null,inst_71820);
var state_71851__$1 = state_71851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71851__$1,(14),inst_71827);
} else {
if((state_val_71852 === (9))){
var inst_71820 = (state_71851[(10)]);
var state_71851__$1 = state_71851;
if(cljs.core.truth_(inst_71820)){
var statearr_71863_71889 = state_71851__$1;
(statearr_71863_71889[(1)] = (11));

} else {
var statearr_71864_71890 = state_71851__$1;
(statearr_71864_71890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (5))){
var inst_71821 = (state_71851[(11)]);
var inst_71815 = (state_71851[(7)]);
var inst_71820 = cljs.core.nth.call(null,inst_71815,(0),null);
var inst_71821__$1 = cljs.core.nth.call(null,inst_71815,(1),null);
var state_71851__$1 = (function (){var statearr_71865 = state_71851;
(statearr_71865[(11)] = inst_71821__$1);

(statearr_71865[(10)] = inst_71820);

return statearr_71865;
})();
if(cljs.core.truth_(inst_71821__$1)){
var statearr_71866_71891 = state_71851__$1;
(statearr_71866_71891[(1)] = (8));

} else {
var statearr_71867_71892 = state_71851__$1;
(statearr_71867_71892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (14))){
var inst_71820 = (state_71851[(10)]);
var inst_71832 = (state_71851[(9)]);
var inst_71829 = (state_71851[(2)]);
var inst_71830 = console.log("Loading!",inst_71820);
var inst_71831 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_71832__$1 = cljs.core.get.call(null,inst_71831,inst_71820);
var state_71851__$1 = (function (){var statearr_71868 = state_71851;
(statearr_71868[(8)] = inst_71829);

(statearr_71868[(9)] = inst_71832__$1);

(statearr_71868[(12)] = inst_71830);

return statearr_71868;
})();
if(cljs.core.truth_(inst_71832__$1)){
var statearr_71869_71893 = state_71851__$1;
(statearr_71869_71893[(1)] = (15));

} else {
var statearr_71870_71894 = state_71851__$1;
(statearr_71870_71894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (16))){
var inst_71829 = (state_71851[(8)]);
var inst_71836 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_71829);
var state_71851__$1 = state_71851;
var statearr_71871_71895 = state_71851__$1;
(statearr_71871_71895[(2)] = inst_71836);

(statearr_71871_71895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (10))){
var inst_71843 = (state_71851[(2)]);
var state_71851__$1 = (function (){var statearr_71872 = state_71851;
(statearr_71872[(13)] = inst_71843);

return statearr_71872;
})();
var statearr_71873_71896 = state_71851__$1;
(statearr_71873_71896[(2)] = null);

(statearr_71873_71896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71852 === (8))){
var inst_71821 = (state_71851[(11)]);
var inst_71823 = console.log("Evaling!",inst_71821);
var inst_71824 = eval(inst_71821);
var state_71851__$1 = (function (){var statearr_71874 = state_71851;
(statearr_71874[(14)] = inst_71823);

return statearr_71874;
})();
var statearr_71875_71897 = state_71851__$1;
(statearr_71875_71897[(2)] = inst_71824);

(statearr_71875_71897[(1)] = (10));


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
});})(c__68453__auto__))
;
return ((function (switch__68363__auto__,c__68453__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__68364__auto__ = null;
var figwheel$client$file_reloading$state_machine__68364__auto____0 = (function (){
var statearr_71876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71876[(0)] = figwheel$client$file_reloading$state_machine__68364__auto__);

(statearr_71876[(1)] = (1));

return statearr_71876;
});
var figwheel$client$file_reloading$state_machine__68364__auto____1 = (function (state_71851){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_71851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e71877){if((e71877 instanceof Object)){
var ex__68367__auto__ = e71877;
var statearr_71878_71898 = state_71851;
(statearr_71878_71898[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71899 = state_71851;
state_71851 = G__71899;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__68364__auto__ = function(state_71851){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__68364__auto____1.call(this,state_71851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__68364__auto____0;
figwheel$client$file_reloading$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__68364__auto____1;
return figwheel$client$file_reloading$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_71879 = f__68454__auto__.call(null);
(statearr_71879[(6)] = c__68453__auto__);

return statearr_71879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__))
);

return c__68453__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__71901 = arguments.length;
switch (G__71901) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__71903,callback){
var map__71904 = p__71903;
var map__71904__$1 = ((((!((map__71904 == null)))?((((map__71904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71904):map__71904);
var file_msg = map__71904__$1;
var namespace = cljs.core.get.call(null,map__71904__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__71904,map__71904__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__71904,map__71904__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__71906){
var map__71907 = p__71906;
var map__71907__$1 = ((((!((map__71907 == null)))?((((map__71907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71907):map__71907);
var file_msg = map__71907__$1;
var namespace = cljs.core.get.call(null,map__71907__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__71909){
var map__71910 = p__71909;
var map__71910__$1 = ((((!((map__71910 == null)))?((((map__71910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71910):map__71910);
var file_msg = map__71910__$1;
var namespace = cljs.core.get.call(null,map__71910__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__39919__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__39919__auto__){
var or__39945__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
var or__39945__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39945__auto____$1)){
return or__39945__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__39919__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__71912,callback){
var map__71913 = p__71912;
var map__71913__$1 = ((((!((map__71913 == null)))?((((map__71913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71913):map__71913);
var file_msg = map__71913__$1;
var request_url = cljs.core.get.call(null,map__71913__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__71913__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__68453__auto___71963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___71963,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___71963,out){
return (function (state_71948){
var state_val_71949 = (state_71948[(1)]);
if((state_val_71949 === (1))){
var inst_71922 = cljs.core.seq.call(null,files);
var inst_71923 = cljs.core.first.call(null,inst_71922);
var inst_71924 = cljs.core.next.call(null,inst_71922);
var inst_71925 = files;
var state_71948__$1 = (function (){var statearr_71950 = state_71948;
(statearr_71950[(7)] = inst_71924);

(statearr_71950[(8)] = inst_71923);

(statearr_71950[(9)] = inst_71925);

return statearr_71950;
})();
var statearr_71951_71964 = state_71948__$1;
(statearr_71951_71964[(2)] = null);

(statearr_71951_71964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71949 === (2))){
var inst_71925 = (state_71948[(9)]);
var inst_71931 = (state_71948[(10)]);
var inst_71930 = cljs.core.seq.call(null,inst_71925);
var inst_71931__$1 = cljs.core.first.call(null,inst_71930);
var inst_71932 = cljs.core.next.call(null,inst_71930);
var inst_71933 = (inst_71931__$1 == null);
var inst_71934 = cljs.core.not.call(null,inst_71933);
var state_71948__$1 = (function (){var statearr_71952 = state_71948;
(statearr_71952[(10)] = inst_71931__$1);

(statearr_71952[(11)] = inst_71932);

return statearr_71952;
})();
if(inst_71934){
var statearr_71953_71965 = state_71948__$1;
(statearr_71953_71965[(1)] = (4));

} else {
var statearr_71954_71966 = state_71948__$1;
(statearr_71954_71966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71949 === (3))){
var inst_71946 = (state_71948[(2)]);
var state_71948__$1 = state_71948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71948__$1,inst_71946);
} else {
if((state_val_71949 === (4))){
var inst_71931 = (state_71948[(10)]);
var inst_71936 = figwheel.client.file_reloading.reload_js_file.call(null,inst_71931);
var state_71948__$1 = state_71948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71948__$1,(7),inst_71936);
} else {
if((state_val_71949 === (5))){
var inst_71942 = cljs.core.async.close_BANG_.call(null,out);
var state_71948__$1 = state_71948;
var statearr_71955_71967 = state_71948__$1;
(statearr_71955_71967[(2)] = inst_71942);

(statearr_71955_71967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71949 === (6))){
var inst_71944 = (state_71948[(2)]);
var state_71948__$1 = state_71948;
var statearr_71956_71968 = state_71948__$1;
(statearr_71956_71968[(2)] = inst_71944);

(statearr_71956_71968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71949 === (7))){
var inst_71932 = (state_71948[(11)]);
var inst_71938 = (state_71948[(2)]);
var inst_71939 = cljs.core.async.put_BANG_.call(null,out,inst_71938);
var inst_71925 = inst_71932;
var state_71948__$1 = (function (){var statearr_71957 = state_71948;
(statearr_71957[(12)] = inst_71939);

(statearr_71957[(9)] = inst_71925);

return statearr_71957;
})();
var statearr_71958_71969 = state_71948__$1;
(statearr_71958_71969[(2)] = null);

(statearr_71958_71969[(1)] = (2));


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
});})(c__68453__auto___71963,out))
;
return ((function (switch__68363__auto__,c__68453__auto___71963,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____0 = (function (){
var statearr_71959 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71959[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__);

(statearr_71959[(1)] = (1));

return statearr_71959;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____1 = (function (state_71948){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_71948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e71960){if((e71960 instanceof Object)){
var ex__68367__auto__ = e71960;
var statearr_71961_71970 = state_71948;
(statearr_71961_71970[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71971 = state_71948;
state_71948 = G__71971;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__ = function(state_71948){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____1.call(this,state_71948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___71963,out))
})();
var state__68455__auto__ = (function (){var statearr_71962 = f__68454__auto__.call(null);
(statearr_71962[(6)] = c__68453__auto___71963);

return statearr_71962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___71963,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__71972,opts){
var map__71973 = p__71972;
var map__71973__$1 = ((((!((map__71973 == null)))?((((map__71973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71973):map__71973);
var eval_body = cljs.core.get.call(null,map__71973__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__71973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__39919__auto__ = eval_body;
if(cljs.core.truth_(and__39919__auto__)){
return typeof eval_body === 'string';
} else {
return and__39919__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e71975){var e = e71975;
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
return (function (p1__71976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__71976_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__71977){
var vec__71978 = p__71977;
var k = cljs.core.nth.call(null,vec__71978,(0),null);
var v = cljs.core.nth.call(null,vec__71978,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__71981){
var vec__71982 = p__71981;
var k = cljs.core.nth.call(null,vec__71982,(0),null);
var v = cljs.core.nth.call(null,vec__71982,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__71988,p__71989){
var map__71990 = p__71988;
var map__71990__$1 = ((((!((map__71990 == null)))?((((map__71990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71990):map__71990);
var opts = map__71990__$1;
var before_jsload = cljs.core.get.call(null,map__71990__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__71990__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__71990__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__71991 = p__71989;
var map__71991__$1 = ((((!((map__71991 == null)))?((((map__71991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71991):map__71991);
var msg = map__71991__$1;
var files = cljs.core.get.call(null,map__71991__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__71991__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__71991__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_72145){
var state_val_72146 = (state_72145[(1)]);
if((state_val_72146 === (7))){
var inst_72007 = (state_72145[(7)]);
var inst_72005 = (state_72145[(8)]);
var inst_72008 = (state_72145[(9)]);
var inst_72006 = (state_72145[(10)]);
var inst_72013 = cljs.core._nth.call(null,inst_72006,inst_72008);
var inst_72014 = figwheel.client.file_reloading.eval_body.call(null,inst_72013,opts);
var inst_72015 = (inst_72008 + (1));
var tmp72147 = inst_72007;
var tmp72148 = inst_72005;
var tmp72149 = inst_72006;
var inst_72005__$1 = tmp72148;
var inst_72006__$1 = tmp72149;
var inst_72007__$1 = tmp72147;
var inst_72008__$1 = inst_72015;
var state_72145__$1 = (function (){var statearr_72150 = state_72145;
(statearr_72150[(7)] = inst_72007__$1);

(statearr_72150[(8)] = inst_72005__$1);

(statearr_72150[(11)] = inst_72014);

(statearr_72150[(9)] = inst_72008__$1);

(statearr_72150[(10)] = inst_72006__$1);

return statearr_72150;
})();
var statearr_72151_72234 = state_72145__$1;
(statearr_72151_72234[(2)] = null);

(statearr_72151_72234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (20))){
var inst_72048 = (state_72145[(12)]);
var inst_72056 = figwheel.client.file_reloading.sort_files.call(null,inst_72048);
var state_72145__$1 = state_72145;
var statearr_72152_72235 = state_72145__$1;
(statearr_72152_72235[(2)] = inst_72056);

(statearr_72152_72235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (27))){
var state_72145__$1 = state_72145;
var statearr_72153_72236 = state_72145__$1;
(statearr_72153_72236[(2)] = null);

(statearr_72153_72236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (1))){
var inst_71997 = (state_72145[(13)]);
var inst_71994 = before_jsload.call(null,files);
var inst_71995 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_71996 = (function (){return ((function (inst_71997,inst_71994,inst_71995,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71985_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__71985_SHARP_);
});
;})(inst_71997,inst_71994,inst_71995,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71997__$1 = cljs.core.filter.call(null,inst_71996,files);
var inst_71998 = cljs.core.not_empty.call(null,inst_71997__$1);
var state_72145__$1 = (function (){var statearr_72154 = state_72145;
(statearr_72154[(13)] = inst_71997__$1);

(statearr_72154[(14)] = inst_71994);

(statearr_72154[(15)] = inst_71995);

return statearr_72154;
})();
if(cljs.core.truth_(inst_71998)){
var statearr_72155_72237 = state_72145__$1;
(statearr_72155_72237[(1)] = (2));

} else {
var statearr_72156_72238 = state_72145__$1;
(statearr_72156_72238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (24))){
var state_72145__$1 = state_72145;
var statearr_72157_72239 = state_72145__$1;
(statearr_72157_72239[(2)] = null);

(statearr_72157_72239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (39))){
var inst_72098 = (state_72145[(16)]);
var state_72145__$1 = state_72145;
var statearr_72158_72240 = state_72145__$1;
(statearr_72158_72240[(2)] = inst_72098);

(statearr_72158_72240[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (46))){
var inst_72140 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
var statearr_72159_72241 = state_72145__$1;
(statearr_72159_72241[(2)] = inst_72140);

(statearr_72159_72241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (4))){
var inst_72042 = (state_72145[(2)]);
var inst_72043 = cljs.core.List.EMPTY;
var inst_72044 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_72043);
var inst_72045 = (function (){return ((function (inst_72042,inst_72043,inst_72044,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71986_SHARP_){
var and__39919__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__71986_SHARP_);
if(cljs.core.truth_(and__39919__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__71986_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__71986_SHARP_)));
} else {
return and__39919__auto__;
}
});
;})(inst_72042,inst_72043,inst_72044,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72046 = cljs.core.filter.call(null,inst_72045,files);
var inst_72047 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_72048 = cljs.core.concat.call(null,inst_72046,inst_72047);
var state_72145__$1 = (function (){var statearr_72160 = state_72145;
(statearr_72160[(17)] = inst_72044);

(statearr_72160[(12)] = inst_72048);

(statearr_72160[(18)] = inst_72042);

return statearr_72160;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_72161_72242 = state_72145__$1;
(statearr_72161_72242[(1)] = (16));

} else {
var statearr_72162_72243 = state_72145__$1;
(statearr_72162_72243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (15))){
var inst_72032 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
var statearr_72163_72244 = state_72145__$1;
(statearr_72163_72244[(2)] = inst_72032);

(statearr_72163_72244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (21))){
var inst_72058 = (state_72145[(19)]);
var inst_72058__$1 = (state_72145[(2)]);
var inst_72059 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_72058__$1);
var state_72145__$1 = (function (){var statearr_72164 = state_72145;
(statearr_72164[(19)] = inst_72058__$1);

return statearr_72164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72145__$1,(22),inst_72059);
} else {
if((state_val_72146 === (31))){
var inst_72143 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72145__$1,inst_72143);
} else {
if((state_val_72146 === (32))){
var inst_72098 = (state_72145[(16)]);
var inst_72103 = inst_72098.cljs$lang$protocol_mask$partition0$;
var inst_72104 = (inst_72103 & (64));
var inst_72105 = inst_72098.cljs$core$ISeq$;
var inst_72106 = (cljs.core.PROTOCOL_SENTINEL === inst_72105);
var inst_72107 = (inst_72104) || (inst_72106);
var state_72145__$1 = state_72145;
if(cljs.core.truth_(inst_72107)){
var statearr_72165_72245 = state_72145__$1;
(statearr_72165_72245[(1)] = (35));

} else {
var statearr_72166_72246 = state_72145__$1;
(statearr_72166_72246[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (40))){
var inst_72120 = (state_72145[(20)]);
var inst_72119 = (state_72145[(2)]);
var inst_72120__$1 = cljs.core.get.call(null,inst_72119,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_72121 = cljs.core.get.call(null,inst_72119,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_72122 = cljs.core.not_empty.call(null,inst_72120__$1);
var state_72145__$1 = (function (){var statearr_72167 = state_72145;
(statearr_72167[(21)] = inst_72121);

(statearr_72167[(20)] = inst_72120__$1);

return statearr_72167;
})();
if(cljs.core.truth_(inst_72122)){
var statearr_72168_72247 = state_72145__$1;
(statearr_72168_72247[(1)] = (41));

} else {
var statearr_72169_72248 = state_72145__$1;
(statearr_72169_72248[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (33))){
var state_72145__$1 = state_72145;
var statearr_72170_72249 = state_72145__$1;
(statearr_72170_72249[(2)] = false);

(statearr_72170_72249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (13))){
var inst_72018 = (state_72145[(22)]);
var inst_72022 = cljs.core.chunk_first.call(null,inst_72018);
var inst_72023 = cljs.core.chunk_rest.call(null,inst_72018);
var inst_72024 = cljs.core.count.call(null,inst_72022);
var inst_72005 = inst_72023;
var inst_72006 = inst_72022;
var inst_72007 = inst_72024;
var inst_72008 = (0);
var state_72145__$1 = (function (){var statearr_72171 = state_72145;
(statearr_72171[(7)] = inst_72007);

(statearr_72171[(8)] = inst_72005);

(statearr_72171[(9)] = inst_72008);

(statearr_72171[(10)] = inst_72006);

return statearr_72171;
})();
var statearr_72172_72250 = state_72145__$1;
(statearr_72172_72250[(2)] = null);

(statearr_72172_72250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (22))){
var inst_72062 = (state_72145[(23)]);
var inst_72058 = (state_72145[(19)]);
var inst_72066 = (state_72145[(24)]);
var inst_72061 = (state_72145[(25)]);
var inst_72061__$1 = (state_72145[(2)]);
var inst_72062__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72061__$1);
var inst_72063 = (function (){var all_files = inst_72058;
var res_SINGLEQUOTE_ = inst_72061__$1;
var res = inst_72062__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_72062,inst_72058,inst_72066,inst_72061,inst_72061__$1,inst_72062__$1,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71987_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__71987_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_72062,inst_72058,inst_72066,inst_72061,inst_72061__$1,inst_72062__$1,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72064 = cljs.core.filter.call(null,inst_72063,inst_72061__$1);
var inst_72065 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_72066__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72065);
var inst_72067 = cljs.core.not_empty.call(null,inst_72066__$1);
var state_72145__$1 = (function (){var statearr_72173 = state_72145;
(statearr_72173[(23)] = inst_72062__$1);

(statearr_72173[(24)] = inst_72066__$1);

(statearr_72173[(26)] = inst_72064);

(statearr_72173[(25)] = inst_72061__$1);

return statearr_72173;
})();
if(cljs.core.truth_(inst_72067)){
var statearr_72174_72251 = state_72145__$1;
(statearr_72174_72251[(1)] = (23));

} else {
var statearr_72175_72252 = state_72145__$1;
(statearr_72175_72252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (36))){
var state_72145__$1 = state_72145;
var statearr_72176_72253 = state_72145__$1;
(statearr_72176_72253[(2)] = false);

(statearr_72176_72253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (41))){
var inst_72120 = (state_72145[(20)]);
var inst_72124 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_72125 = cljs.core.map.call(null,inst_72124,inst_72120);
var inst_72126 = cljs.core.pr_str.call(null,inst_72125);
var inst_72127 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72126)].join('');
var inst_72128 = figwheel.client.utils.log.call(null,inst_72127);
var state_72145__$1 = state_72145;
var statearr_72177_72254 = state_72145__$1;
(statearr_72177_72254[(2)] = inst_72128);

(statearr_72177_72254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (43))){
var inst_72121 = (state_72145[(21)]);
var inst_72131 = (state_72145[(2)]);
var inst_72132 = cljs.core.not_empty.call(null,inst_72121);
var state_72145__$1 = (function (){var statearr_72178 = state_72145;
(statearr_72178[(27)] = inst_72131);

return statearr_72178;
})();
if(cljs.core.truth_(inst_72132)){
var statearr_72179_72255 = state_72145__$1;
(statearr_72179_72255[(1)] = (44));

} else {
var statearr_72180_72256 = state_72145__$1;
(statearr_72180_72256[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (29))){
var inst_72062 = (state_72145[(23)]);
var inst_72098 = (state_72145[(16)]);
var inst_72058 = (state_72145[(19)]);
var inst_72066 = (state_72145[(24)]);
var inst_72064 = (state_72145[(26)]);
var inst_72061 = (state_72145[(25)]);
var inst_72094 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_72097 = (function (){var all_files = inst_72058;
var res_SINGLEQUOTE_ = inst_72061;
var res = inst_72062;
var files_not_loaded = inst_72064;
var dependencies_that_loaded = inst_72066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72062,inst_72098,inst_72058,inst_72066,inst_72064,inst_72061,inst_72094,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72096){
var map__72181 = p__72096;
var map__72181__$1 = ((((!((map__72181 == null)))?((((map__72181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72181):map__72181);
var namespace = cljs.core.get.call(null,map__72181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72062,inst_72098,inst_72058,inst_72066,inst_72064,inst_72061,inst_72094,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72098__$1 = cljs.core.group_by.call(null,inst_72097,inst_72064);
var inst_72100 = (inst_72098__$1 == null);
var inst_72101 = cljs.core.not.call(null,inst_72100);
var state_72145__$1 = (function (){var statearr_72183 = state_72145;
(statearr_72183[(28)] = inst_72094);

(statearr_72183[(16)] = inst_72098__$1);

return statearr_72183;
})();
if(inst_72101){
var statearr_72184_72257 = state_72145__$1;
(statearr_72184_72257[(1)] = (32));

} else {
var statearr_72185_72258 = state_72145__$1;
(statearr_72185_72258[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (44))){
var inst_72121 = (state_72145[(21)]);
var inst_72134 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_72121);
var inst_72135 = cljs.core.pr_str.call(null,inst_72134);
var inst_72136 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72135)].join('');
var inst_72137 = figwheel.client.utils.log.call(null,inst_72136);
var state_72145__$1 = state_72145;
var statearr_72186_72259 = state_72145__$1;
(statearr_72186_72259[(2)] = inst_72137);

(statearr_72186_72259[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (6))){
var inst_72039 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
var statearr_72187_72260 = state_72145__$1;
(statearr_72187_72260[(2)] = inst_72039);

(statearr_72187_72260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (28))){
var inst_72064 = (state_72145[(26)]);
var inst_72091 = (state_72145[(2)]);
var inst_72092 = cljs.core.not_empty.call(null,inst_72064);
var state_72145__$1 = (function (){var statearr_72188 = state_72145;
(statearr_72188[(29)] = inst_72091);

return statearr_72188;
})();
if(cljs.core.truth_(inst_72092)){
var statearr_72189_72261 = state_72145__$1;
(statearr_72189_72261[(1)] = (29));

} else {
var statearr_72190_72262 = state_72145__$1;
(statearr_72190_72262[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (25))){
var inst_72062 = (state_72145[(23)]);
var inst_72078 = (state_72145[(2)]);
var inst_72079 = cljs.core.not_empty.call(null,inst_72062);
var state_72145__$1 = (function (){var statearr_72191 = state_72145;
(statearr_72191[(30)] = inst_72078);

return statearr_72191;
})();
if(cljs.core.truth_(inst_72079)){
var statearr_72192_72263 = state_72145__$1;
(statearr_72192_72263[(1)] = (26));

} else {
var statearr_72193_72264 = state_72145__$1;
(statearr_72193_72264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (34))){
var inst_72114 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
if(cljs.core.truth_(inst_72114)){
var statearr_72194_72265 = state_72145__$1;
(statearr_72194_72265[(1)] = (38));

} else {
var statearr_72195_72266 = state_72145__$1;
(statearr_72195_72266[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (17))){
var state_72145__$1 = state_72145;
var statearr_72196_72267 = state_72145__$1;
(statearr_72196_72267[(2)] = recompile_dependents);

(statearr_72196_72267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (3))){
var state_72145__$1 = state_72145;
var statearr_72197_72268 = state_72145__$1;
(statearr_72197_72268[(2)] = null);

(statearr_72197_72268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (12))){
var inst_72035 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
var statearr_72198_72269 = state_72145__$1;
(statearr_72198_72269[(2)] = inst_72035);

(statearr_72198_72269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (2))){
var inst_71997 = (state_72145[(13)]);
var inst_72004 = cljs.core.seq.call(null,inst_71997);
var inst_72005 = inst_72004;
var inst_72006 = null;
var inst_72007 = (0);
var inst_72008 = (0);
var state_72145__$1 = (function (){var statearr_72199 = state_72145;
(statearr_72199[(7)] = inst_72007);

(statearr_72199[(8)] = inst_72005);

(statearr_72199[(9)] = inst_72008);

(statearr_72199[(10)] = inst_72006);

return statearr_72199;
})();
var statearr_72200_72270 = state_72145__$1;
(statearr_72200_72270[(2)] = null);

(statearr_72200_72270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (23))){
var inst_72062 = (state_72145[(23)]);
var inst_72058 = (state_72145[(19)]);
var inst_72066 = (state_72145[(24)]);
var inst_72064 = (state_72145[(26)]);
var inst_72061 = (state_72145[(25)]);
var inst_72069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_72071 = (function (){var all_files = inst_72058;
var res_SINGLEQUOTE_ = inst_72061;
var res = inst_72062;
var files_not_loaded = inst_72064;
var dependencies_that_loaded = inst_72066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72062,inst_72058,inst_72066,inst_72064,inst_72061,inst_72069,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72070){
var map__72201 = p__72070;
var map__72201__$1 = ((((!((map__72201 == null)))?((((map__72201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72201):map__72201);
var request_url = cljs.core.get.call(null,map__72201__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72062,inst_72058,inst_72066,inst_72064,inst_72061,inst_72069,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72072 = cljs.core.reverse.call(null,inst_72066);
var inst_72073 = cljs.core.map.call(null,inst_72071,inst_72072);
var inst_72074 = cljs.core.pr_str.call(null,inst_72073);
var inst_72075 = figwheel.client.utils.log.call(null,inst_72074);
var state_72145__$1 = (function (){var statearr_72203 = state_72145;
(statearr_72203[(31)] = inst_72069);

return statearr_72203;
})();
var statearr_72204_72271 = state_72145__$1;
(statearr_72204_72271[(2)] = inst_72075);

(statearr_72204_72271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (35))){
var state_72145__$1 = state_72145;
var statearr_72205_72272 = state_72145__$1;
(statearr_72205_72272[(2)] = true);

(statearr_72205_72272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (19))){
var inst_72048 = (state_72145[(12)]);
var inst_72054 = figwheel.client.file_reloading.expand_files.call(null,inst_72048);
var state_72145__$1 = state_72145;
var statearr_72206_72273 = state_72145__$1;
(statearr_72206_72273[(2)] = inst_72054);

(statearr_72206_72273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (11))){
var state_72145__$1 = state_72145;
var statearr_72207_72274 = state_72145__$1;
(statearr_72207_72274[(2)] = null);

(statearr_72207_72274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (9))){
var inst_72037 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
var statearr_72208_72275 = state_72145__$1;
(statearr_72208_72275[(2)] = inst_72037);

(statearr_72208_72275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (5))){
var inst_72007 = (state_72145[(7)]);
var inst_72008 = (state_72145[(9)]);
var inst_72010 = (inst_72008 < inst_72007);
var inst_72011 = inst_72010;
var state_72145__$1 = state_72145;
if(cljs.core.truth_(inst_72011)){
var statearr_72209_72276 = state_72145__$1;
(statearr_72209_72276[(1)] = (7));

} else {
var statearr_72210_72277 = state_72145__$1;
(statearr_72210_72277[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (14))){
var inst_72018 = (state_72145[(22)]);
var inst_72027 = cljs.core.first.call(null,inst_72018);
var inst_72028 = figwheel.client.file_reloading.eval_body.call(null,inst_72027,opts);
var inst_72029 = cljs.core.next.call(null,inst_72018);
var inst_72005 = inst_72029;
var inst_72006 = null;
var inst_72007 = (0);
var inst_72008 = (0);
var state_72145__$1 = (function (){var statearr_72211 = state_72145;
(statearr_72211[(7)] = inst_72007);

(statearr_72211[(8)] = inst_72005);

(statearr_72211[(9)] = inst_72008);

(statearr_72211[(10)] = inst_72006);

(statearr_72211[(32)] = inst_72028);

return statearr_72211;
})();
var statearr_72212_72278 = state_72145__$1;
(statearr_72212_72278[(2)] = null);

(statearr_72212_72278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (45))){
var state_72145__$1 = state_72145;
var statearr_72213_72279 = state_72145__$1;
(statearr_72213_72279[(2)] = null);

(statearr_72213_72279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (26))){
var inst_72062 = (state_72145[(23)]);
var inst_72058 = (state_72145[(19)]);
var inst_72066 = (state_72145[(24)]);
var inst_72064 = (state_72145[(26)]);
var inst_72061 = (state_72145[(25)]);
var inst_72081 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_72083 = (function (){var all_files = inst_72058;
var res_SINGLEQUOTE_ = inst_72061;
var res = inst_72062;
var files_not_loaded = inst_72064;
var dependencies_that_loaded = inst_72066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72062,inst_72058,inst_72066,inst_72064,inst_72061,inst_72081,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72082){
var map__72214 = p__72082;
var map__72214__$1 = ((((!((map__72214 == null)))?((((map__72214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72214):map__72214);
var namespace = cljs.core.get.call(null,map__72214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__72214__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72062,inst_72058,inst_72066,inst_72064,inst_72061,inst_72081,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72084 = cljs.core.map.call(null,inst_72083,inst_72062);
var inst_72085 = cljs.core.pr_str.call(null,inst_72084);
var inst_72086 = figwheel.client.utils.log.call(null,inst_72085);
var inst_72087 = (function (){var all_files = inst_72058;
var res_SINGLEQUOTE_ = inst_72061;
var res = inst_72062;
var files_not_loaded = inst_72064;
var dependencies_that_loaded = inst_72066;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72062,inst_72058,inst_72066,inst_72064,inst_72061,inst_72081,inst_72083,inst_72084,inst_72085,inst_72086,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72062,inst_72058,inst_72066,inst_72064,inst_72061,inst_72081,inst_72083,inst_72084,inst_72085,inst_72086,state_val_72146,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72088 = setTimeout(inst_72087,(10));
var state_72145__$1 = (function (){var statearr_72216 = state_72145;
(statearr_72216[(33)] = inst_72081);

(statearr_72216[(34)] = inst_72086);

return statearr_72216;
})();
var statearr_72217_72280 = state_72145__$1;
(statearr_72217_72280[(2)] = inst_72088);

(statearr_72217_72280[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (16))){
var state_72145__$1 = state_72145;
var statearr_72218_72281 = state_72145__$1;
(statearr_72218_72281[(2)] = reload_dependents);

(statearr_72218_72281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (38))){
var inst_72098 = (state_72145[(16)]);
var inst_72116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72098);
var state_72145__$1 = state_72145;
var statearr_72219_72282 = state_72145__$1;
(statearr_72219_72282[(2)] = inst_72116);

(statearr_72219_72282[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (30))){
var state_72145__$1 = state_72145;
var statearr_72220_72283 = state_72145__$1;
(statearr_72220_72283[(2)] = null);

(statearr_72220_72283[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (10))){
var inst_72018 = (state_72145[(22)]);
var inst_72020 = cljs.core.chunked_seq_QMARK_.call(null,inst_72018);
var state_72145__$1 = state_72145;
if(inst_72020){
var statearr_72221_72284 = state_72145__$1;
(statearr_72221_72284[(1)] = (13));

} else {
var statearr_72222_72285 = state_72145__$1;
(statearr_72222_72285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (18))){
var inst_72052 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
if(cljs.core.truth_(inst_72052)){
var statearr_72223_72286 = state_72145__$1;
(statearr_72223_72286[(1)] = (19));

} else {
var statearr_72224_72287 = state_72145__$1;
(statearr_72224_72287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (42))){
var state_72145__$1 = state_72145;
var statearr_72225_72288 = state_72145__$1;
(statearr_72225_72288[(2)] = null);

(statearr_72225_72288[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (37))){
var inst_72111 = (state_72145[(2)]);
var state_72145__$1 = state_72145;
var statearr_72226_72289 = state_72145__$1;
(statearr_72226_72289[(2)] = inst_72111);

(statearr_72226_72289[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72146 === (8))){
var inst_72005 = (state_72145[(8)]);
var inst_72018 = (state_72145[(22)]);
var inst_72018__$1 = cljs.core.seq.call(null,inst_72005);
var state_72145__$1 = (function (){var statearr_72227 = state_72145;
(statearr_72227[(22)] = inst_72018__$1);

return statearr_72227;
})();
if(inst_72018__$1){
var statearr_72228_72290 = state_72145__$1;
(statearr_72228_72290[(1)] = (10));

} else {
var statearr_72229_72291 = state_72145__$1;
(statearr_72229_72291[(1)] = (11));

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
});})(c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__68363__auto__,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____0 = (function (){
var statearr_72230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72230[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__);

(statearr_72230[(1)] = (1));

return statearr_72230;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____1 = (function (state_72145){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_72145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e72231){if((e72231 instanceof Object)){
var ex__68367__auto__ = e72231;
var statearr_72232_72292 = state_72145;
(statearr_72232_72292[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72293 = state_72145;
state_72145 = G__72293;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__ = function(state_72145){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____1.call(this,state_72145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__68455__auto__ = (function (){var statearr_72233 = f__68454__auto__.call(null);
(statearr_72233[(6)] = c__68453__auto__);

return statearr_72233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__,map__71990,map__71990__$1,opts,before_jsload,on_jsload,reload_dependents,map__71991,map__71991__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__68453__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__72296,link){
var map__72297 = p__72296;
var map__72297__$1 = ((((!((map__72297 == null)))?((((map__72297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72297):map__72297);
var file = cljs.core.get.call(null,map__72297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__72297,map__72297__$1,file){
return (function (p1__72294_SHARP_,p2__72295_SHARP_){
if(cljs.core._EQ_.call(null,p1__72294_SHARP_,p2__72295_SHARP_)){
return p1__72294_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__72297,map__72297__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__72300){
var map__72301 = p__72300;
var map__72301__$1 = ((((!((map__72301 == null)))?((((map__72301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72301):map__72301);
var match_length = cljs.core.get.call(null,map__72301__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__72301__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__72299_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__72299_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__72303_SHARP_,p2__72304_SHARP_){
return cljs.core.assoc.call(null,p1__72303_SHARP_,cljs.core.get.call(null,p2__72304_SHARP_,key),p2__72304_SHARP_);
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
var loaded_f_datas_72305 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_72305);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_72305);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__72306,p__72307){
var map__72308 = p__72306;
var map__72308__$1 = ((((!((map__72308 == null)))?((((map__72308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72308):map__72308);
var on_cssload = cljs.core.get.call(null,map__72308__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__72309 = p__72307;
var map__72309__$1 = ((((!((map__72309 == null)))?((((map__72309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72309):map__72309);
var files_msg = map__72309__$1;
var files = cljs.core.get.call(null,map__72309__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1519022791340
