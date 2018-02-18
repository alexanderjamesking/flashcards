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
var or__19063__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19063__auto__){
return or__19063__auto__;
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
var or__19063__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
var or__19063__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__19063__auto____$1)){
return or__19063__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__71642_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__71642_SHARP_));
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
var seq__71643 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__71644 = null;
var count__71645 = (0);
var i__71646 = (0);
while(true){
if((i__71646 < count__71645)){
var n = cljs.core._nth.call(null,chunk__71644,i__71646);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__71647 = seq__71643;
var G__71648 = chunk__71644;
var G__71649 = count__71645;
var G__71650 = (i__71646 + (1));
seq__71643 = G__71647;
chunk__71644 = G__71648;
count__71645 = G__71649;
i__71646 = G__71650;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__71643);
if(temp__5457__auto__){
var seq__71643__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71643__$1)){
var c__21063__auto__ = cljs.core.chunk_first.call(null,seq__71643__$1);
var G__71651 = cljs.core.chunk_rest.call(null,seq__71643__$1);
var G__71652 = c__21063__auto__;
var G__71653 = cljs.core.count.call(null,c__21063__auto__);
var G__71654 = (0);
seq__71643 = G__71651;
chunk__71644 = G__71652;
count__71645 = G__71653;
i__71646 = G__71654;
continue;
} else {
var n = cljs.core.first.call(null,seq__71643__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__71655 = cljs.core.next.call(null,seq__71643__$1);
var G__71656 = null;
var G__71657 = (0);
var G__71658 = (0);
seq__71643 = G__71655;
chunk__71644 = G__71656;
count__71645 = G__71657;
i__71646 = G__71658;
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
return cljs.core.some.call(null,(function (p__71659){
var vec__71660 = p__71659;
var _ = cljs.core.nth.call(null,vec__71660,(0),null);
var v = cljs.core.nth.call(null,vec__71660,(1),null);
var and__19050__auto__ = v;
if(cljs.core.truth_(and__19050__auto__)){
return v.call(null,dep);
} else {
return and__19050__auto__;
}
}),cljs.core.filter.call(null,(function (p__71663){
var vec__71664 = p__71663;
var k = cljs.core.nth.call(null,vec__71664,(0),null);
var v = cljs.core.nth.call(null,vec__71664,(1),null);
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

var seq__71676_71684 = cljs.core.seq.call(null,deps);
var chunk__71677_71685 = null;
var count__71678_71686 = (0);
var i__71679_71687 = (0);
while(true){
if((i__71679_71687 < count__71678_71686)){
var dep_71688 = cljs.core._nth.call(null,chunk__71677_71685,i__71679_71687);
if(cljs.core.truth_((function (){var and__19050__auto__ = dep_71688;
if(cljs.core.truth_(and__19050__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_71688));
} else {
return and__19050__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_71688,(depth + (1)),state);
} else {
}

var G__71689 = seq__71676_71684;
var G__71690 = chunk__71677_71685;
var G__71691 = count__71678_71686;
var G__71692 = (i__71679_71687 + (1));
seq__71676_71684 = G__71689;
chunk__71677_71685 = G__71690;
count__71678_71686 = G__71691;
i__71679_71687 = G__71692;
continue;
} else {
var temp__5457__auto___71693 = cljs.core.seq.call(null,seq__71676_71684);
if(temp__5457__auto___71693){
var seq__71676_71694__$1 = temp__5457__auto___71693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71676_71694__$1)){
var c__21063__auto___71695 = cljs.core.chunk_first.call(null,seq__71676_71694__$1);
var G__71696 = cljs.core.chunk_rest.call(null,seq__71676_71694__$1);
var G__71697 = c__21063__auto___71695;
var G__71698 = cljs.core.count.call(null,c__21063__auto___71695);
var G__71699 = (0);
seq__71676_71684 = G__71696;
chunk__71677_71685 = G__71697;
count__71678_71686 = G__71698;
i__71679_71687 = G__71699;
continue;
} else {
var dep_71700 = cljs.core.first.call(null,seq__71676_71694__$1);
if(cljs.core.truth_((function (){var and__19050__auto__ = dep_71700;
if(cljs.core.truth_(and__19050__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_71700));
} else {
return and__19050__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_71700,(depth + (1)),state);
} else {
}

var G__71701 = cljs.core.next.call(null,seq__71676_71694__$1);
var G__71702 = null;
var G__71703 = (0);
var G__71704 = (0);
seq__71676_71684 = G__71701;
chunk__71677_71685 = G__71702;
count__71678_71686 = G__71703;
i__71679_71687 = G__71704;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__71680){
var vec__71681 = p__71680;
var seq__71682 = cljs.core.seq.call(null,vec__71681);
var first__71683 = cljs.core.first.call(null,seq__71682);
var seq__71682__$1 = cljs.core.next.call(null,seq__71682);
var x = first__71683;
var xs = seq__71682__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__71681,seq__71682,first__71683,seq__71682__$1,x,xs,get_deps__$1){
return (function (p1__71667_SHARP_){
return clojure.set.difference.call(null,p1__71667_SHARP_,x);
});})(vec__71681,seq__71682,first__71683,seq__71682__$1,x,xs,get_deps__$1))
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
var seq__71705 = cljs.core.seq.call(null,provides);
var chunk__71706 = null;
var count__71707 = (0);
var i__71708 = (0);
while(true){
if((i__71708 < count__71707)){
var prov = cljs.core._nth.call(null,chunk__71706,i__71708);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__71709_71717 = cljs.core.seq.call(null,requires);
var chunk__71710_71718 = null;
var count__71711_71719 = (0);
var i__71712_71720 = (0);
while(true){
if((i__71712_71720 < count__71711_71719)){
var req_71721 = cljs.core._nth.call(null,chunk__71710_71718,i__71712_71720);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71721,prov);

var G__71722 = seq__71709_71717;
var G__71723 = chunk__71710_71718;
var G__71724 = count__71711_71719;
var G__71725 = (i__71712_71720 + (1));
seq__71709_71717 = G__71722;
chunk__71710_71718 = G__71723;
count__71711_71719 = G__71724;
i__71712_71720 = G__71725;
continue;
} else {
var temp__5457__auto___71726 = cljs.core.seq.call(null,seq__71709_71717);
if(temp__5457__auto___71726){
var seq__71709_71727__$1 = temp__5457__auto___71726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71709_71727__$1)){
var c__21063__auto___71728 = cljs.core.chunk_first.call(null,seq__71709_71727__$1);
var G__71729 = cljs.core.chunk_rest.call(null,seq__71709_71727__$1);
var G__71730 = c__21063__auto___71728;
var G__71731 = cljs.core.count.call(null,c__21063__auto___71728);
var G__71732 = (0);
seq__71709_71717 = G__71729;
chunk__71710_71718 = G__71730;
count__71711_71719 = G__71731;
i__71712_71720 = G__71732;
continue;
} else {
var req_71733 = cljs.core.first.call(null,seq__71709_71727__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71733,prov);

var G__71734 = cljs.core.next.call(null,seq__71709_71727__$1);
var G__71735 = null;
var G__71736 = (0);
var G__71737 = (0);
seq__71709_71717 = G__71734;
chunk__71710_71718 = G__71735;
count__71711_71719 = G__71736;
i__71712_71720 = G__71737;
continue;
}
} else {
}
}
break;
}

var G__71738 = seq__71705;
var G__71739 = chunk__71706;
var G__71740 = count__71707;
var G__71741 = (i__71708 + (1));
seq__71705 = G__71738;
chunk__71706 = G__71739;
count__71707 = G__71740;
i__71708 = G__71741;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__71705);
if(temp__5457__auto__){
var seq__71705__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71705__$1)){
var c__21063__auto__ = cljs.core.chunk_first.call(null,seq__71705__$1);
var G__71742 = cljs.core.chunk_rest.call(null,seq__71705__$1);
var G__71743 = c__21063__auto__;
var G__71744 = cljs.core.count.call(null,c__21063__auto__);
var G__71745 = (0);
seq__71705 = G__71742;
chunk__71706 = G__71743;
count__71707 = G__71744;
i__71708 = G__71745;
continue;
} else {
var prov = cljs.core.first.call(null,seq__71705__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__71713_71746 = cljs.core.seq.call(null,requires);
var chunk__71714_71747 = null;
var count__71715_71748 = (0);
var i__71716_71749 = (0);
while(true){
if((i__71716_71749 < count__71715_71748)){
var req_71750 = cljs.core._nth.call(null,chunk__71714_71747,i__71716_71749);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71750,prov);

var G__71751 = seq__71713_71746;
var G__71752 = chunk__71714_71747;
var G__71753 = count__71715_71748;
var G__71754 = (i__71716_71749 + (1));
seq__71713_71746 = G__71751;
chunk__71714_71747 = G__71752;
count__71715_71748 = G__71753;
i__71716_71749 = G__71754;
continue;
} else {
var temp__5457__auto___71755__$1 = cljs.core.seq.call(null,seq__71713_71746);
if(temp__5457__auto___71755__$1){
var seq__71713_71756__$1 = temp__5457__auto___71755__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71713_71756__$1)){
var c__21063__auto___71757 = cljs.core.chunk_first.call(null,seq__71713_71756__$1);
var G__71758 = cljs.core.chunk_rest.call(null,seq__71713_71756__$1);
var G__71759 = c__21063__auto___71757;
var G__71760 = cljs.core.count.call(null,c__21063__auto___71757);
var G__71761 = (0);
seq__71713_71746 = G__71758;
chunk__71714_71747 = G__71759;
count__71715_71748 = G__71760;
i__71716_71749 = G__71761;
continue;
} else {
var req_71762 = cljs.core.first.call(null,seq__71713_71756__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71762,prov);

var G__71763 = cljs.core.next.call(null,seq__71713_71756__$1);
var G__71764 = null;
var G__71765 = (0);
var G__71766 = (0);
seq__71713_71746 = G__71763;
chunk__71714_71747 = G__71764;
count__71715_71748 = G__71765;
i__71716_71749 = G__71766;
continue;
}
} else {
}
}
break;
}

var G__71767 = cljs.core.next.call(null,seq__71705__$1);
var G__71768 = null;
var G__71769 = (0);
var G__71770 = (0);
seq__71705 = G__71767;
chunk__71706 = G__71768;
count__71707 = G__71769;
i__71708 = G__71770;
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
var seq__71771_71775 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__71772_71776 = null;
var count__71773_71777 = (0);
var i__71774_71778 = (0);
while(true){
if((i__71774_71778 < count__71773_71777)){
var ns_71779 = cljs.core._nth.call(null,chunk__71772_71776,i__71774_71778);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_71779);

var G__71780 = seq__71771_71775;
var G__71781 = chunk__71772_71776;
var G__71782 = count__71773_71777;
var G__71783 = (i__71774_71778 + (1));
seq__71771_71775 = G__71780;
chunk__71772_71776 = G__71781;
count__71773_71777 = G__71782;
i__71774_71778 = G__71783;
continue;
} else {
var temp__5457__auto___71784 = cljs.core.seq.call(null,seq__71771_71775);
if(temp__5457__auto___71784){
var seq__71771_71785__$1 = temp__5457__auto___71784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71771_71785__$1)){
var c__21063__auto___71786 = cljs.core.chunk_first.call(null,seq__71771_71785__$1);
var G__71787 = cljs.core.chunk_rest.call(null,seq__71771_71785__$1);
var G__71788 = c__21063__auto___71786;
var G__71789 = cljs.core.count.call(null,c__21063__auto___71786);
var G__71790 = (0);
seq__71771_71775 = G__71787;
chunk__71772_71776 = G__71788;
count__71773_71777 = G__71789;
i__71774_71778 = G__71790;
continue;
} else {
var ns_71791 = cljs.core.first.call(null,seq__71771_71785__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_71791);

var G__71792 = cljs.core.next.call(null,seq__71771_71785__$1);
var G__71793 = null;
var G__71794 = (0);
var G__71795 = (0);
seq__71771_71775 = G__71792;
chunk__71772_71776 = G__71793;
count__71773_71777 = G__71794;
i__71774_71778 = G__71795;
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
goog.require_figwheel_backup_ = (function (){var or__19063__auto__ = goog.require__;
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
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
var G__71796__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__71796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71797__i = 0, G__71797__a = new Array(arguments.length -  0);
while (G__71797__i < G__71797__a.length) {G__71797__a[G__71797__i] = arguments[G__71797__i + 0]; ++G__71797__i;}
  args = new cljs.core.IndexedSeq(G__71797__a,0,null);
} 
return G__71796__delegate.call(this,args);};
G__71796.cljs$lang$maxFixedArity = 0;
G__71796.cljs$lang$applyTo = (function (arglist__71798){
var args = cljs.core.seq(arglist__71798);
return G__71796__delegate(args);
});
G__71796.cljs$core$IFn$_invoke$arity$variadic = G__71796__delegate;
return G__71796;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__71799_SHARP_,p2__71800_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71799_SHARP_)].join('')),p2__71800_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__71801_SHARP_,p2__71802_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71801_SHARP_)].join(''),p2__71802_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__71803 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__71803.addCallback(((function (G__71803){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__71803))
);

G__71803.addErrback(((function (G__71803){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__71803))
);

return G__71803;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e71804){if((e71804 instanceof Error)){
var e = e71804;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e71804;

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
}catch (e71805){if((e71805 instanceof Error)){
var e = e71805;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e71805;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__71806 = cljs.core._EQ_;
var expr__71807 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__71806.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__71807))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__71806.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__71807))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__71806.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__71807))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__71806,expr__71807){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__71806,expr__71807))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__71809,callback){
var map__71810 = p__71809;
var map__71810__$1 = ((((!((map__71810 == null)))?((((map__71810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71810):map__71810);
var file_msg = map__71810__$1;
var request_url = cljs.core.get.call(null,map__71810__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__19063__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__71810,map__71810__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__71810,map__71810__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__){
return (function (state_71850){
var state_val_71851 = (state_71850[(1)]);
if((state_val_71851 === (7))){
var inst_71846 = (state_71850[(2)]);
var state_71850__$1 = state_71850;
var statearr_71852_71879 = state_71850__$1;
(statearr_71852_71879[(2)] = inst_71846);

(statearr_71852_71879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (1))){
var state_71850__$1 = state_71850;
var statearr_71853_71880 = state_71850__$1;
(statearr_71853_71880[(2)] = null);

(statearr_71853_71880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (4))){
var inst_71814 = (state_71850[(7)]);
var inst_71814__$1 = (state_71850[(2)]);
var state_71850__$1 = (function (){var statearr_71854 = state_71850;
(statearr_71854[(7)] = inst_71814__$1);

return statearr_71854;
})();
if(cljs.core.truth_(inst_71814__$1)){
var statearr_71855_71881 = state_71850__$1;
(statearr_71855_71881[(1)] = (5));

} else {
var statearr_71856_71882 = state_71850__$1;
(statearr_71856_71882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (15))){
var inst_71831 = (state_71850[(8)]);
var inst_71828 = (state_71850[(9)]);
var inst_71833 = inst_71831.call(null,inst_71828);
var state_71850__$1 = state_71850;
var statearr_71857_71883 = state_71850__$1;
(statearr_71857_71883[(2)] = inst_71833);

(statearr_71857_71883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (13))){
var inst_71840 = (state_71850[(2)]);
var state_71850__$1 = state_71850;
var statearr_71858_71884 = state_71850__$1;
(statearr_71858_71884[(2)] = inst_71840);

(statearr_71858_71884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (6))){
var state_71850__$1 = state_71850;
var statearr_71859_71885 = state_71850__$1;
(statearr_71859_71885[(2)] = null);

(statearr_71859_71885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (17))){
var inst_71837 = (state_71850[(2)]);
var state_71850__$1 = state_71850;
var statearr_71860_71886 = state_71850__$1;
(statearr_71860_71886[(2)] = inst_71837);

(statearr_71860_71886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (3))){
var inst_71848 = (state_71850[(2)]);
var state_71850__$1 = state_71850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71850__$1,inst_71848);
} else {
if((state_val_71851 === (12))){
var state_71850__$1 = state_71850;
var statearr_71861_71887 = state_71850__$1;
(statearr_71861_71887[(2)] = null);

(statearr_71861_71887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (2))){
var state_71850__$1 = state_71850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71850__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_71851 === (11))){
var inst_71819 = (state_71850[(10)]);
var inst_71826 = figwheel.client.file_reloading.blocking_load.call(null,inst_71819);
var state_71850__$1 = state_71850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71850__$1,(14),inst_71826);
} else {
if((state_val_71851 === (9))){
var inst_71819 = (state_71850[(10)]);
var state_71850__$1 = state_71850;
if(cljs.core.truth_(inst_71819)){
var statearr_71862_71888 = state_71850__$1;
(statearr_71862_71888[(1)] = (11));

} else {
var statearr_71863_71889 = state_71850__$1;
(statearr_71863_71889[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (5))){
var inst_71814 = (state_71850[(7)]);
var inst_71820 = (state_71850[(11)]);
var inst_71819 = cljs.core.nth.call(null,inst_71814,(0),null);
var inst_71820__$1 = cljs.core.nth.call(null,inst_71814,(1),null);
var state_71850__$1 = (function (){var statearr_71864 = state_71850;
(statearr_71864[(10)] = inst_71819);

(statearr_71864[(11)] = inst_71820__$1);

return statearr_71864;
})();
if(cljs.core.truth_(inst_71820__$1)){
var statearr_71865_71890 = state_71850__$1;
(statearr_71865_71890[(1)] = (8));

} else {
var statearr_71866_71891 = state_71850__$1;
(statearr_71866_71891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (14))){
var inst_71819 = (state_71850[(10)]);
var inst_71831 = (state_71850[(8)]);
var inst_71828 = (state_71850[(2)]);
var inst_71829 = console.log("Loading!",inst_71819);
var inst_71830 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_71831__$1 = cljs.core.get.call(null,inst_71830,inst_71819);
var state_71850__$1 = (function (){var statearr_71867 = state_71850;
(statearr_71867[(12)] = inst_71829);

(statearr_71867[(8)] = inst_71831__$1);

(statearr_71867[(9)] = inst_71828);

return statearr_71867;
})();
if(cljs.core.truth_(inst_71831__$1)){
var statearr_71868_71892 = state_71850__$1;
(statearr_71868_71892[(1)] = (15));

} else {
var statearr_71869_71893 = state_71850__$1;
(statearr_71869_71893[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (16))){
var inst_71828 = (state_71850[(9)]);
var inst_71835 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_71828);
var state_71850__$1 = state_71850;
var statearr_71870_71894 = state_71850__$1;
(statearr_71870_71894[(2)] = inst_71835);

(statearr_71870_71894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (10))){
var inst_71842 = (state_71850[(2)]);
var state_71850__$1 = (function (){var statearr_71871 = state_71850;
(statearr_71871[(13)] = inst_71842);

return statearr_71871;
})();
var statearr_71872_71895 = state_71850__$1;
(statearr_71872_71895[(2)] = null);

(statearr_71872_71895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71851 === (8))){
var inst_71820 = (state_71850[(11)]);
var inst_71822 = console.log("Evaling!",inst_71820);
var inst_71823 = eval(inst_71820);
var state_71850__$1 = (function (){var statearr_71873 = state_71850;
(statearr_71873[(14)] = inst_71822);

return statearr_71873;
})();
var statearr_71874_71896 = state_71850__$1;
(statearr_71874_71896[(2)] = inst_71823);

(statearr_71874_71896[(1)] = (10));


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
});})(c__68452__auto__))
;
return ((function (switch__68362__auto__,c__68452__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__68363__auto__ = null;
var figwheel$client$file_reloading$state_machine__68363__auto____0 = (function (){
var statearr_71875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71875[(0)] = figwheel$client$file_reloading$state_machine__68363__auto__);

(statearr_71875[(1)] = (1));

return statearr_71875;
});
var figwheel$client$file_reloading$state_machine__68363__auto____1 = (function (state_71850){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_71850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e71876){if((e71876 instanceof Object)){
var ex__68366__auto__ = e71876;
var statearr_71877_71897 = state_71850;
(statearr_71877_71897[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71898 = state_71850;
state_71850 = G__71898;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__68363__auto__ = function(state_71850){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__68363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__68363__auto____1.call(this,state_71850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__68363__auto____0;
figwheel$client$file_reloading$state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__68363__auto____1;
return figwheel$client$file_reloading$state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__))
})();
var state__68454__auto__ = (function (){var statearr_71878 = f__68453__auto__.call(null);
(statearr_71878[(6)] = c__68452__auto__);

return statearr_71878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__))
);

return c__68452__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__71900 = arguments.length;
switch (G__71900) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__71902,callback){
var map__71903 = p__71902;
var map__71903__$1 = ((((!((map__71903 == null)))?((((map__71903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71903):map__71903);
var file_msg = map__71903__$1;
var namespace = cljs.core.get.call(null,map__71903__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__71903,map__71903__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__71903,map__71903__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__71905){
var map__71906 = p__71905;
var map__71906__$1 = ((((!((map__71906 == null)))?((((map__71906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71906):map__71906);
var file_msg = map__71906__$1;
var namespace = cljs.core.get.call(null,map__71906__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__71908){
var map__71909 = p__71908;
var map__71909__$1 = ((((!((map__71909 == null)))?((((map__71909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71909):map__71909);
var file_msg = map__71909__$1;
var namespace = cljs.core.get.call(null,map__71909__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19050__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__19050__auto__){
var or__19063__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19063__auto__)){
return or__19063__auto__;
} else {
var or__19063__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19063__auto____$1)){
return or__19063__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19050__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__71911,callback){
var map__71912 = p__71911;
var map__71912__$1 = ((((!((map__71912 == null)))?((((map__71912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71912):map__71912);
var file_msg = map__71912__$1;
var request_url = cljs.core.get.call(null,map__71912__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__71912__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__68452__auto___71962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto___71962,out){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto___71962,out){
return (function (state_71947){
var state_val_71948 = (state_71947[(1)]);
if((state_val_71948 === (1))){
var inst_71921 = cljs.core.seq.call(null,files);
var inst_71922 = cljs.core.first.call(null,inst_71921);
var inst_71923 = cljs.core.next.call(null,inst_71921);
var inst_71924 = files;
var state_71947__$1 = (function (){var statearr_71949 = state_71947;
(statearr_71949[(7)] = inst_71924);

(statearr_71949[(8)] = inst_71923);

(statearr_71949[(9)] = inst_71922);

return statearr_71949;
})();
var statearr_71950_71963 = state_71947__$1;
(statearr_71950_71963[(2)] = null);

(statearr_71950_71963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71948 === (2))){
var inst_71924 = (state_71947[(7)]);
var inst_71930 = (state_71947[(10)]);
var inst_71929 = cljs.core.seq.call(null,inst_71924);
var inst_71930__$1 = cljs.core.first.call(null,inst_71929);
var inst_71931 = cljs.core.next.call(null,inst_71929);
var inst_71932 = (inst_71930__$1 == null);
var inst_71933 = cljs.core.not.call(null,inst_71932);
var state_71947__$1 = (function (){var statearr_71951 = state_71947;
(statearr_71951[(10)] = inst_71930__$1);

(statearr_71951[(11)] = inst_71931);

return statearr_71951;
})();
if(inst_71933){
var statearr_71952_71964 = state_71947__$1;
(statearr_71952_71964[(1)] = (4));

} else {
var statearr_71953_71965 = state_71947__$1;
(statearr_71953_71965[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71948 === (3))){
var inst_71945 = (state_71947[(2)]);
var state_71947__$1 = state_71947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71947__$1,inst_71945);
} else {
if((state_val_71948 === (4))){
var inst_71930 = (state_71947[(10)]);
var inst_71935 = figwheel.client.file_reloading.reload_js_file.call(null,inst_71930);
var state_71947__$1 = state_71947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71947__$1,(7),inst_71935);
} else {
if((state_val_71948 === (5))){
var inst_71941 = cljs.core.async.close_BANG_.call(null,out);
var state_71947__$1 = state_71947;
var statearr_71954_71966 = state_71947__$1;
(statearr_71954_71966[(2)] = inst_71941);

(statearr_71954_71966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71948 === (6))){
var inst_71943 = (state_71947[(2)]);
var state_71947__$1 = state_71947;
var statearr_71955_71967 = state_71947__$1;
(statearr_71955_71967[(2)] = inst_71943);

(statearr_71955_71967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71948 === (7))){
var inst_71931 = (state_71947[(11)]);
var inst_71937 = (state_71947[(2)]);
var inst_71938 = cljs.core.async.put_BANG_.call(null,out,inst_71937);
var inst_71924 = inst_71931;
var state_71947__$1 = (function (){var statearr_71956 = state_71947;
(statearr_71956[(7)] = inst_71924);

(statearr_71956[(12)] = inst_71938);

return statearr_71956;
})();
var statearr_71957_71968 = state_71947__$1;
(statearr_71957_71968[(2)] = null);

(statearr_71957_71968[(1)] = (2));


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
});})(c__68452__auto___71962,out))
;
return ((function (switch__68362__auto__,c__68452__auto___71962,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto____0 = (function (){
var statearr_71958 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71958[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto__);

(statearr_71958[(1)] = (1));

return statearr_71958;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto____1 = (function (state_71947){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_71947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e71959){if((e71959 instanceof Object)){
var ex__68366__auto__ = e71959;
var statearr_71960_71969 = state_71947;
(statearr_71960_71969[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71970 = state_71947;
state_71947 = G__71970;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto__ = function(state_71947){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto____1.call(this,state_71947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto___71962,out))
})();
var state__68454__auto__ = (function (){var statearr_71961 = f__68453__auto__.call(null);
(statearr_71961[(6)] = c__68452__auto___71962);

return statearr_71961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto___71962,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__71971,opts){
var map__71972 = p__71971;
var map__71972__$1 = ((((!((map__71972 == null)))?((((map__71972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71972):map__71972);
var eval_body = cljs.core.get.call(null,map__71972__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__71972__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19050__auto__ = eval_body;
if(cljs.core.truth_(and__19050__auto__)){
return typeof eval_body === 'string';
} else {
return and__19050__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e71974){var e = e71974;
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
return (function (p1__71975_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__71975_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__71976){
var vec__71977 = p__71976;
var k = cljs.core.nth.call(null,vec__71977,(0),null);
var v = cljs.core.nth.call(null,vec__71977,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__71980){
var vec__71981 = p__71980;
var k = cljs.core.nth.call(null,vec__71981,(0),null);
var v = cljs.core.nth.call(null,vec__71981,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__71987,p__71988){
var map__71989 = p__71987;
var map__71989__$1 = ((((!((map__71989 == null)))?((((map__71989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71989):map__71989);
var opts = map__71989__$1;
var before_jsload = cljs.core.get.call(null,map__71989__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__71989__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__71989__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__71990 = p__71988;
var map__71990__$1 = ((((!((map__71990 == null)))?((((map__71990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71990):map__71990);
var msg = map__71990__$1;
var files = cljs.core.get.call(null,map__71990__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__71990__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__71990__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__68452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__68453__auto__ = (function (){var switch__68362__auto__ = ((function (c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_72144){
var state_val_72145 = (state_72144[(1)]);
if((state_val_72145 === (7))){
var inst_72007 = (state_72144[(7)]);
var inst_72005 = (state_72144[(8)]);
var inst_72006 = (state_72144[(9)]);
var inst_72004 = (state_72144[(10)]);
var inst_72012 = cljs.core._nth.call(null,inst_72005,inst_72007);
var inst_72013 = figwheel.client.file_reloading.eval_body.call(null,inst_72012,opts);
var inst_72014 = (inst_72007 + (1));
var tmp72146 = inst_72005;
var tmp72147 = inst_72006;
var tmp72148 = inst_72004;
var inst_72004__$1 = tmp72148;
var inst_72005__$1 = tmp72146;
var inst_72006__$1 = tmp72147;
var inst_72007__$1 = inst_72014;
var state_72144__$1 = (function (){var statearr_72149 = state_72144;
(statearr_72149[(7)] = inst_72007__$1);

(statearr_72149[(8)] = inst_72005__$1);

(statearr_72149[(11)] = inst_72013);

(statearr_72149[(9)] = inst_72006__$1);

(statearr_72149[(10)] = inst_72004__$1);

return statearr_72149;
})();
var statearr_72150_72233 = state_72144__$1;
(statearr_72150_72233[(2)] = null);

(statearr_72150_72233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (20))){
var inst_72047 = (state_72144[(12)]);
var inst_72055 = figwheel.client.file_reloading.sort_files.call(null,inst_72047);
var state_72144__$1 = state_72144;
var statearr_72151_72234 = state_72144__$1;
(statearr_72151_72234[(2)] = inst_72055);

(statearr_72151_72234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (27))){
var state_72144__$1 = state_72144;
var statearr_72152_72235 = state_72144__$1;
(statearr_72152_72235[(2)] = null);

(statearr_72152_72235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (1))){
var inst_71996 = (state_72144[(13)]);
var inst_71993 = before_jsload.call(null,files);
var inst_71994 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_71995 = (function (){return ((function (inst_71996,inst_71993,inst_71994,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71984_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__71984_SHARP_);
});
;})(inst_71996,inst_71993,inst_71994,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71996__$1 = cljs.core.filter.call(null,inst_71995,files);
var inst_71997 = cljs.core.not_empty.call(null,inst_71996__$1);
var state_72144__$1 = (function (){var statearr_72153 = state_72144;
(statearr_72153[(14)] = inst_71993);

(statearr_72153[(15)] = inst_71994);

(statearr_72153[(13)] = inst_71996__$1);

return statearr_72153;
})();
if(cljs.core.truth_(inst_71997)){
var statearr_72154_72236 = state_72144__$1;
(statearr_72154_72236[(1)] = (2));

} else {
var statearr_72155_72237 = state_72144__$1;
(statearr_72155_72237[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (24))){
var state_72144__$1 = state_72144;
var statearr_72156_72238 = state_72144__$1;
(statearr_72156_72238[(2)] = null);

(statearr_72156_72238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (39))){
var inst_72097 = (state_72144[(16)]);
var state_72144__$1 = state_72144;
var statearr_72157_72239 = state_72144__$1;
(statearr_72157_72239[(2)] = inst_72097);

(statearr_72157_72239[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (46))){
var inst_72139 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
var statearr_72158_72240 = state_72144__$1;
(statearr_72158_72240[(2)] = inst_72139);

(statearr_72158_72240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (4))){
var inst_72041 = (state_72144[(2)]);
var inst_72042 = cljs.core.List.EMPTY;
var inst_72043 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_72042);
var inst_72044 = (function (){return ((function (inst_72041,inst_72042,inst_72043,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71985_SHARP_){
var and__19050__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__71985_SHARP_);
if(cljs.core.truth_(and__19050__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__71985_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__71985_SHARP_)));
} else {
return and__19050__auto__;
}
});
;})(inst_72041,inst_72042,inst_72043,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72045 = cljs.core.filter.call(null,inst_72044,files);
var inst_72046 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_72047 = cljs.core.concat.call(null,inst_72045,inst_72046);
var state_72144__$1 = (function (){var statearr_72159 = state_72144;
(statearr_72159[(17)] = inst_72041);

(statearr_72159[(12)] = inst_72047);

(statearr_72159[(18)] = inst_72043);

return statearr_72159;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_72160_72241 = state_72144__$1;
(statearr_72160_72241[(1)] = (16));

} else {
var statearr_72161_72242 = state_72144__$1;
(statearr_72161_72242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (15))){
var inst_72031 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
var statearr_72162_72243 = state_72144__$1;
(statearr_72162_72243[(2)] = inst_72031);

(statearr_72162_72243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (21))){
var inst_72057 = (state_72144[(19)]);
var inst_72057__$1 = (state_72144[(2)]);
var inst_72058 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_72057__$1);
var state_72144__$1 = (function (){var statearr_72163 = state_72144;
(statearr_72163[(19)] = inst_72057__$1);

return statearr_72163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72144__$1,(22),inst_72058);
} else {
if((state_val_72145 === (31))){
var inst_72142 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72144__$1,inst_72142);
} else {
if((state_val_72145 === (32))){
var inst_72097 = (state_72144[(16)]);
var inst_72102 = inst_72097.cljs$lang$protocol_mask$partition0$;
var inst_72103 = (inst_72102 & (64));
var inst_72104 = inst_72097.cljs$core$ISeq$;
var inst_72105 = (cljs.core.PROTOCOL_SENTINEL === inst_72104);
var inst_72106 = (inst_72103) || (inst_72105);
var state_72144__$1 = state_72144;
if(cljs.core.truth_(inst_72106)){
var statearr_72164_72244 = state_72144__$1;
(statearr_72164_72244[(1)] = (35));

} else {
var statearr_72165_72245 = state_72144__$1;
(statearr_72165_72245[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (40))){
var inst_72119 = (state_72144[(20)]);
var inst_72118 = (state_72144[(2)]);
var inst_72119__$1 = cljs.core.get.call(null,inst_72118,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_72120 = cljs.core.get.call(null,inst_72118,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_72121 = cljs.core.not_empty.call(null,inst_72119__$1);
var state_72144__$1 = (function (){var statearr_72166 = state_72144;
(statearr_72166[(20)] = inst_72119__$1);

(statearr_72166[(21)] = inst_72120);

return statearr_72166;
})();
if(cljs.core.truth_(inst_72121)){
var statearr_72167_72246 = state_72144__$1;
(statearr_72167_72246[(1)] = (41));

} else {
var statearr_72168_72247 = state_72144__$1;
(statearr_72168_72247[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (33))){
var state_72144__$1 = state_72144;
var statearr_72169_72248 = state_72144__$1;
(statearr_72169_72248[(2)] = false);

(statearr_72169_72248[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (13))){
var inst_72017 = (state_72144[(22)]);
var inst_72021 = cljs.core.chunk_first.call(null,inst_72017);
var inst_72022 = cljs.core.chunk_rest.call(null,inst_72017);
var inst_72023 = cljs.core.count.call(null,inst_72021);
var inst_72004 = inst_72022;
var inst_72005 = inst_72021;
var inst_72006 = inst_72023;
var inst_72007 = (0);
var state_72144__$1 = (function (){var statearr_72170 = state_72144;
(statearr_72170[(7)] = inst_72007);

(statearr_72170[(8)] = inst_72005);

(statearr_72170[(9)] = inst_72006);

(statearr_72170[(10)] = inst_72004);

return statearr_72170;
})();
var statearr_72171_72249 = state_72144__$1;
(statearr_72171_72249[(2)] = null);

(statearr_72171_72249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (22))){
var inst_72065 = (state_72144[(23)]);
var inst_72057 = (state_72144[(19)]);
var inst_72060 = (state_72144[(24)]);
var inst_72061 = (state_72144[(25)]);
var inst_72060__$1 = (state_72144[(2)]);
var inst_72061__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72060__$1);
var inst_72062 = (function (){var all_files = inst_72057;
var res_SINGLEQUOTE_ = inst_72060__$1;
var res = inst_72061__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_72065,inst_72057,inst_72060,inst_72061,inst_72060__$1,inst_72061__$1,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71986_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__71986_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_72065,inst_72057,inst_72060,inst_72061,inst_72060__$1,inst_72061__$1,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72063 = cljs.core.filter.call(null,inst_72062,inst_72060__$1);
var inst_72064 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_72065__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72064);
var inst_72066 = cljs.core.not_empty.call(null,inst_72065__$1);
var state_72144__$1 = (function (){var statearr_72172 = state_72144;
(statearr_72172[(23)] = inst_72065__$1);

(statearr_72172[(26)] = inst_72063);

(statearr_72172[(24)] = inst_72060__$1);

(statearr_72172[(25)] = inst_72061__$1);

return statearr_72172;
})();
if(cljs.core.truth_(inst_72066)){
var statearr_72173_72250 = state_72144__$1;
(statearr_72173_72250[(1)] = (23));

} else {
var statearr_72174_72251 = state_72144__$1;
(statearr_72174_72251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (36))){
var state_72144__$1 = state_72144;
var statearr_72175_72252 = state_72144__$1;
(statearr_72175_72252[(2)] = false);

(statearr_72175_72252[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (41))){
var inst_72119 = (state_72144[(20)]);
var inst_72123 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_72124 = cljs.core.map.call(null,inst_72123,inst_72119);
var inst_72125 = cljs.core.pr_str.call(null,inst_72124);
var inst_72126 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72125)].join('');
var inst_72127 = figwheel.client.utils.log.call(null,inst_72126);
var state_72144__$1 = state_72144;
var statearr_72176_72253 = state_72144__$1;
(statearr_72176_72253[(2)] = inst_72127);

(statearr_72176_72253[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (43))){
var inst_72120 = (state_72144[(21)]);
var inst_72130 = (state_72144[(2)]);
var inst_72131 = cljs.core.not_empty.call(null,inst_72120);
var state_72144__$1 = (function (){var statearr_72177 = state_72144;
(statearr_72177[(27)] = inst_72130);

return statearr_72177;
})();
if(cljs.core.truth_(inst_72131)){
var statearr_72178_72254 = state_72144__$1;
(statearr_72178_72254[(1)] = (44));

} else {
var statearr_72179_72255 = state_72144__$1;
(statearr_72179_72255[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (29))){
var inst_72065 = (state_72144[(23)]);
var inst_72063 = (state_72144[(26)]);
var inst_72097 = (state_72144[(16)]);
var inst_72057 = (state_72144[(19)]);
var inst_72060 = (state_72144[(24)]);
var inst_72061 = (state_72144[(25)]);
var inst_72093 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_72096 = (function (){var all_files = inst_72057;
var res_SINGLEQUOTE_ = inst_72060;
var res = inst_72061;
var files_not_loaded = inst_72063;
var dependencies_that_loaded = inst_72065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72065,inst_72063,inst_72097,inst_72057,inst_72060,inst_72061,inst_72093,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72095){
var map__72180 = p__72095;
var map__72180__$1 = ((((!((map__72180 == null)))?((((map__72180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72180):map__72180);
var namespace = cljs.core.get.call(null,map__72180__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72065,inst_72063,inst_72097,inst_72057,inst_72060,inst_72061,inst_72093,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72097__$1 = cljs.core.group_by.call(null,inst_72096,inst_72063);
var inst_72099 = (inst_72097__$1 == null);
var inst_72100 = cljs.core.not.call(null,inst_72099);
var state_72144__$1 = (function (){var statearr_72182 = state_72144;
(statearr_72182[(28)] = inst_72093);

(statearr_72182[(16)] = inst_72097__$1);

return statearr_72182;
})();
if(inst_72100){
var statearr_72183_72256 = state_72144__$1;
(statearr_72183_72256[(1)] = (32));

} else {
var statearr_72184_72257 = state_72144__$1;
(statearr_72184_72257[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (44))){
var inst_72120 = (state_72144[(21)]);
var inst_72133 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_72120);
var inst_72134 = cljs.core.pr_str.call(null,inst_72133);
var inst_72135 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72134)].join('');
var inst_72136 = figwheel.client.utils.log.call(null,inst_72135);
var state_72144__$1 = state_72144;
var statearr_72185_72258 = state_72144__$1;
(statearr_72185_72258[(2)] = inst_72136);

(statearr_72185_72258[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (6))){
var inst_72038 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
var statearr_72186_72259 = state_72144__$1;
(statearr_72186_72259[(2)] = inst_72038);

(statearr_72186_72259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (28))){
var inst_72063 = (state_72144[(26)]);
var inst_72090 = (state_72144[(2)]);
var inst_72091 = cljs.core.not_empty.call(null,inst_72063);
var state_72144__$1 = (function (){var statearr_72187 = state_72144;
(statearr_72187[(29)] = inst_72090);

return statearr_72187;
})();
if(cljs.core.truth_(inst_72091)){
var statearr_72188_72260 = state_72144__$1;
(statearr_72188_72260[(1)] = (29));

} else {
var statearr_72189_72261 = state_72144__$1;
(statearr_72189_72261[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (25))){
var inst_72061 = (state_72144[(25)]);
var inst_72077 = (state_72144[(2)]);
var inst_72078 = cljs.core.not_empty.call(null,inst_72061);
var state_72144__$1 = (function (){var statearr_72190 = state_72144;
(statearr_72190[(30)] = inst_72077);

return statearr_72190;
})();
if(cljs.core.truth_(inst_72078)){
var statearr_72191_72262 = state_72144__$1;
(statearr_72191_72262[(1)] = (26));

} else {
var statearr_72192_72263 = state_72144__$1;
(statearr_72192_72263[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (34))){
var inst_72113 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
if(cljs.core.truth_(inst_72113)){
var statearr_72193_72264 = state_72144__$1;
(statearr_72193_72264[(1)] = (38));

} else {
var statearr_72194_72265 = state_72144__$1;
(statearr_72194_72265[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (17))){
var state_72144__$1 = state_72144;
var statearr_72195_72266 = state_72144__$1;
(statearr_72195_72266[(2)] = recompile_dependents);

(statearr_72195_72266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (3))){
var state_72144__$1 = state_72144;
var statearr_72196_72267 = state_72144__$1;
(statearr_72196_72267[(2)] = null);

(statearr_72196_72267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (12))){
var inst_72034 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
var statearr_72197_72268 = state_72144__$1;
(statearr_72197_72268[(2)] = inst_72034);

(statearr_72197_72268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (2))){
var inst_71996 = (state_72144[(13)]);
var inst_72003 = cljs.core.seq.call(null,inst_71996);
var inst_72004 = inst_72003;
var inst_72005 = null;
var inst_72006 = (0);
var inst_72007 = (0);
var state_72144__$1 = (function (){var statearr_72198 = state_72144;
(statearr_72198[(7)] = inst_72007);

(statearr_72198[(8)] = inst_72005);

(statearr_72198[(9)] = inst_72006);

(statearr_72198[(10)] = inst_72004);

return statearr_72198;
})();
var statearr_72199_72269 = state_72144__$1;
(statearr_72199_72269[(2)] = null);

(statearr_72199_72269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (23))){
var inst_72065 = (state_72144[(23)]);
var inst_72063 = (state_72144[(26)]);
var inst_72057 = (state_72144[(19)]);
var inst_72060 = (state_72144[(24)]);
var inst_72061 = (state_72144[(25)]);
var inst_72068 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_72070 = (function (){var all_files = inst_72057;
var res_SINGLEQUOTE_ = inst_72060;
var res = inst_72061;
var files_not_loaded = inst_72063;
var dependencies_that_loaded = inst_72065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72065,inst_72063,inst_72057,inst_72060,inst_72061,inst_72068,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72069){
var map__72200 = p__72069;
var map__72200__$1 = ((((!((map__72200 == null)))?((((map__72200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72200):map__72200);
var request_url = cljs.core.get.call(null,map__72200__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72065,inst_72063,inst_72057,inst_72060,inst_72061,inst_72068,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72071 = cljs.core.reverse.call(null,inst_72065);
var inst_72072 = cljs.core.map.call(null,inst_72070,inst_72071);
var inst_72073 = cljs.core.pr_str.call(null,inst_72072);
var inst_72074 = figwheel.client.utils.log.call(null,inst_72073);
var state_72144__$1 = (function (){var statearr_72202 = state_72144;
(statearr_72202[(31)] = inst_72068);

return statearr_72202;
})();
var statearr_72203_72270 = state_72144__$1;
(statearr_72203_72270[(2)] = inst_72074);

(statearr_72203_72270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (35))){
var state_72144__$1 = state_72144;
var statearr_72204_72271 = state_72144__$1;
(statearr_72204_72271[(2)] = true);

(statearr_72204_72271[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (19))){
var inst_72047 = (state_72144[(12)]);
var inst_72053 = figwheel.client.file_reloading.expand_files.call(null,inst_72047);
var state_72144__$1 = state_72144;
var statearr_72205_72272 = state_72144__$1;
(statearr_72205_72272[(2)] = inst_72053);

(statearr_72205_72272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (11))){
var state_72144__$1 = state_72144;
var statearr_72206_72273 = state_72144__$1;
(statearr_72206_72273[(2)] = null);

(statearr_72206_72273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (9))){
var inst_72036 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
var statearr_72207_72274 = state_72144__$1;
(statearr_72207_72274[(2)] = inst_72036);

(statearr_72207_72274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (5))){
var inst_72007 = (state_72144[(7)]);
var inst_72006 = (state_72144[(9)]);
var inst_72009 = (inst_72007 < inst_72006);
var inst_72010 = inst_72009;
var state_72144__$1 = state_72144;
if(cljs.core.truth_(inst_72010)){
var statearr_72208_72275 = state_72144__$1;
(statearr_72208_72275[(1)] = (7));

} else {
var statearr_72209_72276 = state_72144__$1;
(statearr_72209_72276[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (14))){
var inst_72017 = (state_72144[(22)]);
var inst_72026 = cljs.core.first.call(null,inst_72017);
var inst_72027 = figwheel.client.file_reloading.eval_body.call(null,inst_72026,opts);
var inst_72028 = cljs.core.next.call(null,inst_72017);
var inst_72004 = inst_72028;
var inst_72005 = null;
var inst_72006 = (0);
var inst_72007 = (0);
var state_72144__$1 = (function (){var statearr_72210 = state_72144;
(statearr_72210[(7)] = inst_72007);

(statearr_72210[(8)] = inst_72005);

(statearr_72210[(9)] = inst_72006);

(statearr_72210[(32)] = inst_72027);

(statearr_72210[(10)] = inst_72004);

return statearr_72210;
})();
var statearr_72211_72277 = state_72144__$1;
(statearr_72211_72277[(2)] = null);

(statearr_72211_72277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (45))){
var state_72144__$1 = state_72144;
var statearr_72212_72278 = state_72144__$1;
(statearr_72212_72278[(2)] = null);

(statearr_72212_72278[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (26))){
var inst_72065 = (state_72144[(23)]);
var inst_72063 = (state_72144[(26)]);
var inst_72057 = (state_72144[(19)]);
var inst_72060 = (state_72144[(24)]);
var inst_72061 = (state_72144[(25)]);
var inst_72080 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_72082 = (function (){var all_files = inst_72057;
var res_SINGLEQUOTE_ = inst_72060;
var res = inst_72061;
var files_not_loaded = inst_72063;
var dependencies_that_loaded = inst_72065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72065,inst_72063,inst_72057,inst_72060,inst_72061,inst_72080,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72081){
var map__72213 = p__72081;
var map__72213__$1 = ((((!((map__72213 == null)))?((((map__72213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72213):map__72213);
var namespace = cljs.core.get.call(null,map__72213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__72213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72065,inst_72063,inst_72057,inst_72060,inst_72061,inst_72080,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72083 = cljs.core.map.call(null,inst_72082,inst_72061);
var inst_72084 = cljs.core.pr_str.call(null,inst_72083);
var inst_72085 = figwheel.client.utils.log.call(null,inst_72084);
var inst_72086 = (function (){var all_files = inst_72057;
var res_SINGLEQUOTE_ = inst_72060;
var res = inst_72061;
var files_not_loaded = inst_72063;
var dependencies_that_loaded = inst_72065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72065,inst_72063,inst_72057,inst_72060,inst_72061,inst_72080,inst_72082,inst_72083,inst_72084,inst_72085,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72065,inst_72063,inst_72057,inst_72060,inst_72061,inst_72080,inst_72082,inst_72083,inst_72084,inst_72085,state_val_72145,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72087 = setTimeout(inst_72086,(10));
var state_72144__$1 = (function (){var statearr_72215 = state_72144;
(statearr_72215[(33)] = inst_72080);

(statearr_72215[(34)] = inst_72085);

return statearr_72215;
})();
var statearr_72216_72279 = state_72144__$1;
(statearr_72216_72279[(2)] = inst_72087);

(statearr_72216_72279[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (16))){
var state_72144__$1 = state_72144;
var statearr_72217_72280 = state_72144__$1;
(statearr_72217_72280[(2)] = reload_dependents);

(statearr_72217_72280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (38))){
var inst_72097 = (state_72144[(16)]);
var inst_72115 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72097);
var state_72144__$1 = state_72144;
var statearr_72218_72281 = state_72144__$1;
(statearr_72218_72281[(2)] = inst_72115);

(statearr_72218_72281[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (30))){
var state_72144__$1 = state_72144;
var statearr_72219_72282 = state_72144__$1;
(statearr_72219_72282[(2)] = null);

(statearr_72219_72282[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (10))){
var inst_72017 = (state_72144[(22)]);
var inst_72019 = cljs.core.chunked_seq_QMARK_.call(null,inst_72017);
var state_72144__$1 = state_72144;
if(inst_72019){
var statearr_72220_72283 = state_72144__$1;
(statearr_72220_72283[(1)] = (13));

} else {
var statearr_72221_72284 = state_72144__$1;
(statearr_72221_72284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (18))){
var inst_72051 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
if(cljs.core.truth_(inst_72051)){
var statearr_72222_72285 = state_72144__$1;
(statearr_72222_72285[(1)] = (19));

} else {
var statearr_72223_72286 = state_72144__$1;
(statearr_72223_72286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (42))){
var state_72144__$1 = state_72144;
var statearr_72224_72287 = state_72144__$1;
(statearr_72224_72287[(2)] = null);

(statearr_72224_72287[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (37))){
var inst_72110 = (state_72144[(2)]);
var state_72144__$1 = state_72144;
var statearr_72225_72288 = state_72144__$1;
(statearr_72225_72288[(2)] = inst_72110);

(statearr_72225_72288[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72145 === (8))){
var inst_72017 = (state_72144[(22)]);
var inst_72004 = (state_72144[(10)]);
var inst_72017__$1 = cljs.core.seq.call(null,inst_72004);
var state_72144__$1 = (function (){var statearr_72226 = state_72144;
(statearr_72226[(22)] = inst_72017__$1);

return statearr_72226;
})();
if(inst_72017__$1){
var statearr_72227_72289 = state_72144__$1;
(statearr_72227_72289[(1)] = (10));

} else {
var statearr_72228_72290 = state_72144__$1;
(statearr_72228_72290[(1)] = (11));

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
});})(c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__68362__auto__,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto____0 = (function (){
var statearr_72229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72229[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto__);

(statearr_72229[(1)] = (1));

return statearr_72229;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto____1 = (function (state_72144){
while(true){
var ret_value__68364__auto__ = (function (){try{while(true){
var result__68365__auto__ = switch__68362__auto__.call(null,state_72144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68365__auto__;
}
break;
}
}catch (e72230){if((e72230 instanceof Object)){
var ex__68366__auto__ = e72230;
var statearr_72231_72291 = state_72144;
(statearr_72231_72291[(5)] = ex__68366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72292 = state_72144;
state_72144 = G__72292;
continue;
} else {
return ret_value__68364__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto__ = function(state_72144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto____1.call(this,state_72144);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68363__auto__;
})()
;})(switch__68362__auto__,c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__68454__auto__ = (function (){var statearr_72232 = f__68453__auto__.call(null);
(statearr_72232[(6)] = c__68452__auto__);

return statearr_72232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68454__auto__);
});})(c__68452__auto__,map__71989,map__71989__$1,opts,before_jsload,on_jsload,reload_dependents,map__71990,map__71990__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__68452__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__72295,link){
var map__72296 = p__72295;
var map__72296__$1 = ((((!((map__72296 == null)))?((((map__72296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72296):map__72296);
var file = cljs.core.get.call(null,map__72296__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__72296,map__72296__$1,file){
return (function (p1__72293_SHARP_,p2__72294_SHARP_){
if(cljs.core._EQ_.call(null,p1__72293_SHARP_,p2__72294_SHARP_)){
return p1__72293_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__72296,map__72296__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__72299){
var map__72300 = p__72299;
var map__72300__$1 = ((((!((map__72300 == null)))?((((map__72300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72300):map__72300);
var match_length = cljs.core.get.call(null,map__72300__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__72300__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__72298_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__72298_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__72302_SHARP_,p2__72303_SHARP_){
return cljs.core.assoc.call(null,p1__72302_SHARP_,cljs.core.get.call(null,p2__72303_SHARP_,key),p2__72303_SHARP_);
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
var loaded_f_datas_72304 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_72304);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_72304);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__72305,p__72306){
var map__72307 = p__72305;
var map__72307__$1 = ((((!((map__72307 == null)))?((((map__72307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72307):map__72307);
var on_cssload = cljs.core.get.call(null,map__72307__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__72308 = p__72306;
var map__72308__$1 = ((((!((map__72308 == null)))?((((map__72308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72308):map__72308);
var files_msg = map__72308__$1;
var files = cljs.core.get.call(null,map__72308__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1518983348763
