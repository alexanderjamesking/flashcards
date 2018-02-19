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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__78674_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__78674_SHARP_));
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
var seq__78675 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__78676 = null;
var count__78677 = (0);
var i__78678 = (0);
while(true){
if((i__78678 < count__78677)){
var n = cljs.core._nth.call(null,chunk__78676,i__78678);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__78679 = seq__78675;
var G__78680 = chunk__78676;
var G__78681 = count__78677;
var G__78682 = (i__78678 + (1));
seq__78675 = G__78679;
chunk__78676 = G__78680;
count__78677 = G__78681;
i__78678 = G__78682;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__78675);
if(temp__5457__auto__){
var seq__78675__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78675__$1)){
var c__41826__auto__ = cljs.core.chunk_first.call(null,seq__78675__$1);
var G__78683 = cljs.core.chunk_rest.call(null,seq__78675__$1);
var G__78684 = c__41826__auto__;
var G__78685 = cljs.core.count.call(null,c__41826__auto__);
var G__78686 = (0);
seq__78675 = G__78683;
chunk__78676 = G__78684;
count__78677 = G__78685;
i__78678 = G__78686;
continue;
} else {
var n = cljs.core.first.call(null,seq__78675__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__78687 = cljs.core.next.call(null,seq__78675__$1);
var G__78688 = null;
var G__78689 = (0);
var G__78690 = (0);
seq__78675 = G__78687;
chunk__78676 = G__78688;
count__78677 = G__78689;
i__78678 = G__78690;
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
return cljs.core.some.call(null,(function (p__78691){
var vec__78692 = p__78691;
var _ = cljs.core.nth.call(null,vec__78692,(0),null);
var v = cljs.core.nth.call(null,vec__78692,(1),null);
var and__39919__auto__ = v;
if(cljs.core.truth_(and__39919__auto__)){
return v.call(null,dep);
} else {
return and__39919__auto__;
}
}),cljs.core.filter.call(null,(function (p__78695){
var vec__78696 = p__78695;
var k = cljs.core.nth.call(null,vec__78696,(0),null);
var v = cljs.core.nth.call(null,vec__78696,(1),null);
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

var seq__78708_78716 = cljs.core.seq.call(null,deps);
var chunk__78709_78717 = null;
var count__78710_78718 = (0);
var i__78711_78719 = (0);
while(true){
if((i__78711_78719 < count__78710_78718)){
var dep_78720 = cljs.core._nth.call(null,chunk__78709_78717,i__78711_78719);
if(cljs.core.truth_((function (){var and__39919__auto__ = dep_78720;
if(cljs.core.truth_(and__39919__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_78720));
} else {
return and__39919__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_78720,(depth + (1)),state);
} else {
}

var G__78721 = seq__78708_78716;
var G__78722 = chunk__78709_78717;
var G__78723 = count__78710_78718;
var G__78724 = (i__78711_78719 + (1));
seq__78708_78716 = G__78721;
chunk__78709_78717 = G__78722;
count__78710_78718 = G__78723;
i__78711_78719 = G__78724;
continue;
} else {
var temp__5457__auto___78725 = cljs.core.seq.call(null,seq__78708_78716);
if(temp__5457__auto___78725){
var seq__78708_78726__$1 = temp__5457__auto___78725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78708_78726__$1)){
var c__41826__auto___78727 = cljs.core.chunk_first.call(null,seq__78708_78726__$1);
var G__78728 = cljs.core.chunk_rest.call(null,seq__78708_78726__$1);
var G__78729 = c__41826__auto___78727;
var G__78730 = cljs.core.count.call(null,c__41826__auto___78727);
var G__78731 = (0);
seq__78708_78716 = G__78728;
chunk__78709_78717 = G__78729;
count__78710_78718 = G__78730;
i__78711_78719 = G__78731;
continue;
} else {
var dep_78732 = cljs.core.first.call(null,seq__78708_78726__$1);
if(cljs.core.truth_((function (){var and__39919__auto__ = dep_78732;
if(cljs.core.truth_(and__39919__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_78732));
} else {
return and__39919__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_78732,(depth + (1)),state);
} else {
}

var G__78733 = cljs.core.next.call(null,seq__78708_78726__$1);
var G__78734 = null;
var G__78735 = (0);
var G__78736 = (0);
seq__78708_78716 = G__78733;
chunk__78709_78717 = G__78734;
count__78710_78718 = G__78735;
i__78711_78719 = G__78736;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__78712){
var vec__78713 = p__78712;
var seq__78714 = cljs.core.seq.call(null,vec__78713);
var first__78715 = cljs.core.first.call(null,seq__78714);
var seq__78714__$1 = cljs.core.next.call(null,seq__78714);
var x = first__78715;
var xs = seq__78714__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__78713,seq__78714,first__78715,seq__78714__$1,x,xs,get_deps__$1){
return (function (p1__78699_SHARP_){
return clojure.set.difference.call(null,p1__78699_SHARP_,x);
});})(vec__78713,seq__78714,first__78715,seq__78714__$1,x,xs,get_deps__$1))
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
var seq__78737 = cljs.core.seq.call(null,provides);
var chunk__78738 = null;
var count__78739 = (0);
var i__78740 = (0);
while(true){
if((i__78740 < count__78739)){
var prov = cljs.core._nth.call(null,chunk__78738,i__78740);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__78741_78749 = cljs.core.seq.call(null,requires);
var chunk__78742_78750 = null;
var count__78743_78751 = (0);
var i__78744_78752 = (0);
while(true){
if((i__78744_78752 < count__78743_78751)){
var req_78753 = cljs.core._nth.call(null,chunk__78742_78750,i__78744_78752);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_78753,prov);

var G__78754 = seq__78741_78749;
var G__78755 = chunk__78742_78750;
var G__78756 = count__78743_78751;
var G__78757 = (i__78744_78752 + (1));
seq__78741_78749 = G__78754;
chunk__78742_78750 = G__78755;
count__78743_78751 = G__78756;
i__78744_78752 = G__78757;
continue;
} else {
var temp__5457__auto___78758 = cljs.core.seq.call(null,seq__78741_78749);
if(temp__5457__auto___78758){
var seq__78741_78759__$1 = temp__5457__auto___78758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78741_78759__$1)){
var c__41826__auto___78760 = cljs.core.chunk_first.call(null,seq__78741_78759__$1);
var G__78761 = cljs.core.chunk_rest.call(null,seq__78741_78759__$1);
var G__78762 = c__41826__auto___78760;
var G__78763 = cljs.core.count.call(null,c__41826__auto___78760);
var G__78764 = (0);
seq__78741_78749 = G__78761;
chunk__78742_78750 = G__78762;
count__78743_78751 = G__78763;
i__78744_78752 = G__78764;
continue;
} else {
var req_78765 = cljs.core.first.call(null,seq__78741_78759__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_78765,prov);

var G__78766 = cljs.core.next.call(null,seq__78741_78759__$1);
var G__78767 = null;
var G__78768 = (0);
var G__78769 = (0);
seq__78741_78749 = G__78766;
chunk__78742_78750 = G__78767;
count__78743_78751 = G__78768;
i__78744_78752 = G__78769;
continue;
}
} else {
}
}
break;
}

var G__78770 = seq__78737;
var G__78771 = chunk__78738;
var G__78772 = count__78739;
var G__78773 = (i__78740 + (1));
seq__78737 = G__78770;
chunk__78738 = G__78771;
count__78739 = G__78772;
i__78740 = G__78773;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__78737);
if(temp__5457__auto__){
var seq__78737__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78737__$1)){
var c__41826__auto__ = cljs.core.chunk_first.call(null,seq__78737__$1);
var G__78774 = cljs.core.chunk_rest.call(null,seq__78737__$1);
var G__78775 = c__41826__auto__;
var G__78776 = cljs.core.count.call(null,c__41826__auto__);
var G__78777 = (0);
seq__78737 = G__78774;
chunk__78738 = G__78775;
count__78739 = G__78776;
i__78740 = G__78777;
continue;
} else {
var prov = cljs.core.first.call(null,seq__78737__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__78745_78778 = cljs.core.seq.call(null,requires);
var chunk__78746_78779 = null;
var count__78747_78780 = (0);
var i__78748_78781 = (0);
while(true){
if((i__78748_78781 < count__78747_78780)){
var req_78782 = cljs.core._nth.call(null,chunk__78746_78779,i__78748_78781);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_78782,prov);

var G__78783 = seq__78745_78778;
var G__78784 = chunk__78746_78779;
var G__78785 = count__78747_78780;
var G__78786 = (i__78748_78781 + (1));
seq__78745_78778 = G__78783;
chunk__78746_78779 = G__78784;
count__78747_78780 = G__78785;
i__78748_78781 = G__78786;
continue;
} else {
var temp__5457__auto___78787__$1 = cljs.core.seq.call(null,seq__78745_78778);
if(temp__5457__auto___78787__$1){
var seq__78745_78788__$1 = temp__5457__auto___78787__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78745_78788__$1)){
var c__41826__auto___78789 = cljs.core.chunk_first.call(null,seq__78745_78788__$1);
var G__78790 = cljs.core.chunk_rest.call(null,seq__78745_78788__$1);
var G__78791 = c__41826__auto___78789;
var G__78792 = cljs.core.count.call(null,c__41826__auto___78789);
var G__78793 = (0);
seq__78745_78778 = G__78790;
chunk__78746_78779 = G__78791;
count__78747_78780 = G__78792;
i__78748_78781 = G__78793;
continue;
} else {
var req_78794 = cljs.core.first.call(null,seq__78745_78788__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_78794,prov);

var G__78795 = cljs.core.next.call(null,seq__78745_78788__$1);
var G__78796 = null;
var G__78797 = (0);
var G__78798 = (0);
seq__78745_78778 = G__78795;
chunk__78746_78779 = G__78796;
count__78747_78780 = G__78797;
i__78748_78781 = G__78798;
continue;
}
} else {
}
}
break;
}

var G__78799 = cljs.core.next.call(null,seq__78737__$1);
var G__78800 = null;
var G__78801 = (0);
var G__78802 = (0);
seq__78737 = G__78799;
chunk__78738 = G__78800;
count__78739 = G__78801;
i__78740 = G__78802;
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
var seq__78803_78807 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__78804_78808 = null;
var count__78805_78809 = (0);
var i__78806_78810 = (0);
while(true){
if((i__78806_78810 < count__78805_78809)){
var ns_78811 = cljs.core._nth.call(null,chunk__78804_78808,i__78806_78810);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_78811);

var G__78812 = seq__78803_78807;
var G__78813 = chunk__78804_78808;
var G__78814 = count__78805_78809;
var G__78815 = (i__78806_78810 + (1));
seq__78803_78807 = G__78812;
chunk__78804_78808 = G__78813;
count__78805_78809 = G__78814;
i__78806_78810 = G__78815;
continue;
} else {
var temp__5457__auto___78816 = cljs.core.seq.call(null,seq__78803_78807);
if(temp__5457__auto___78816){
var seq__78803_78817__$1 = temp__5457__auto___78816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78803_78817__$1)){
var c__41826__auto___78818 = cljs.core.chunk_first.call(null,seq__78803_78817__$1);
var G__78819 = cljs.core.chunk_rest.call(null,seq__78803_78817__$1);
var G__78820 = c__41826__auto___78818;
var G__78821 = cljs.core.count.call(null,c__41826__auto___78818);
var G__78822 = (0);
seq__78803_78807 = G__78819;
chunk__78804_78808 = G__78820;
count__78805_78809 = G__78821;
i__78806_78810 = G__78822;
continue;
} else {
var ns_78823 = cljs.core.first.call(null,seq__78803_78817__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_78823);

var G__78824 = cljs.core.next.call(null,seq__78803_78817__$1);
var G__78825 = null;
var G__78826 = (0);
var G__78827 = (0);
seq__78803_78807 = G__78824;
chunk__78804_78808 = G__78825;
count__78805_78809 = G__78826;
i__78806_78810 = G__78827;
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
var G__78828__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__78828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78829__i = 0, G__78829__a = new Array(arguments.length -  0);
while (G__78829__i < G__78829__a.length) {G__78829__a[G__78829__i] = arguments[G__78829__i + 0]; ++G__78829__i;}
  args = new cljs.core.IndexedSeq(G__78829__a,0,null);
} 
return G__78828__delegate.call(this,args);};
G__78828.cljs$lang$maxFixedArity = 0;
G__78828.cljs$lang$applyTo = (function (arglist__78830){
var args = cljs.core.seq(arglist__78830);
return G__78828__delegate(args);
});
G__78828.cljs$core$IFn$_invoke$arity$variadic = G__78828__delegate;
return G__78828;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__78831_SHARP_,p2__78832_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78831_SHARP_)].join('')),p2__78832_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__78833_SHARP_,p2__78834_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78833_SHARP_)].join(''),p2__78834_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__78835 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__78835.addCallback(((function (G__78835){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__78835))
);

G__78835.addErrback(((function (G__78835){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__78835))
);

return G__78835;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e78836){if((e78836 instanceof Error)){
var e = e78836;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e78836;

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
}catch (e78837){if((e78837 instanceof Error)){
var e = e78837;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e78837;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__78838 = cljs.core._EQ_;
var expr__78839 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__78838.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__78839))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__78838.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__78839))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__78838.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__78839))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__78838,expr__78839){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__78838,expr__78839))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__78841,callback){
var map__78842 = p__78841;
var map__78842__$1 = ((((!((map__78842 == null)))?((((map__78842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78842):map__78842);
var file_msg = map__78842__$1;
var request_url = cljs.core.get.call(null,map__78842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__39945__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__39945__auto__)){
return or__39945__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__78842,map__78842__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__78842,map__78842__$1,file_msg,request_url))
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
return (function (state_78882){
var state_val_78883 = (state_78882[(1)]);
if((state_val_78883 === (7))){
var inst_78878 = (state_78882[(2)]);
var state_78882__$1 = state_78882;
var statearr_78884_78911 = state_78882__$1;
(statearr_78884_78911[(2)] = inst_78878);

(statearr_78884_78911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (1))){
var state_78882__$1 = state_78882;
var statearr_78885_78912 = state_78882__$1;
(statearr_78885_78912[(2)] = null);

(statearr_78885_78912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (4))){
var inst_78846 = (state_78882[(7)]);
var inst_78846__$1 = (state_78882[(2)]);
var state_78882__$1 = (function (){var statearr_78886 = state_78882;
(statearr_78886[(7)] = inst_78846__$1);

return statearr_78886;
})();
if(cljs.core.truth_(inst_78846__$1)){
var statearr_78887_78913 = state_78882__$1;
(statearr_78887_78913[(1)] = (5));

} else {
var statearr_78888_78914 = state_78882__$1;
(statearr_78888_78914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (15))){
var inst_78863 = (state_78882[(8)]);
var inst_78860 = (state_78882[(9)]);
var inst_78865 = inst_78863.call(null,inst_78860);
var state_78882__$1 = state_78882;
var statearr_78889_78915 = state_78882__$1;
(statearr_78889_78915[(2)] = inst_78865);

(statearr_78889_78915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (13))){
var inst_78872 = (state_78882[(2)]);
var state_78882__$1 = state_78882;
var statearr_78890_78916 = state_78882__$1;
(statearr_78890_78916[(2)] = inst_78872);

(statearr_78890_78916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (6))){
var state_78882__$1 = state_78882;
var statearr_78891_78917 = state_78882__$1;
(statearr_78891_78917[(2)] = null);

(statearr_78891_78917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (17))){
var inst_78869 = (state_78882[(2)]);
var state_78882__$1 = state_78882;
var statearr_78892_78918 = state_78882__$1;
(statearr_78892_78918[(2)] = inst_78869);

(statearr_78892_78918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (3))){
var inst_78880 = (state_78882[(2)]);
var state_78882__$1 = state_78882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78882__$1,inst_78880);
} else {
if((state_val_78883 === (12))){
var state_78882__$1 = state_78882;
var statearr_78893_78919 = state_78882__$1;
(statearr_78893_78919[(2)] = null);

(statearr_78893_78919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (2))){
var state_78882__$1 = state_78882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78882__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_78883 === (11))){
var inst_78851 = (state_78882[(10)]);
var inst_78858 = figwheel.client.file_reloading.blocking_load.call(null,inst_78851);
var state_78882__$1 = state_78882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78882__$1,(14),inst_78858);
} else {
if((state_val_78883 === (9))){
var inst_78851 = (state_78882[(10)]);
var state_78882__$1 = state_78882;
if(cljs.core.truth_(inst_78851)){
var statearr_78894_78920 = state_78882__$1;
(statearr_78894_78920[(1)] = (11));

} else {
var statearr_78895_78921 = state_78882__$1;
(statearr_78895_78921[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (5))){
var inst_78846 = (state_78882[(7)]);
var inst_78852 = (state_78882[(11)]);
var inst_78851 = cljs.core.nth.call(null,inst_78846,(0),null);
var inst_78852__$1 = cljs.core.nth.call(null,inst_78846,(1),null);
var state_78882__$1 = (function (){var statearr_78896 = state_78882;
(statearr_78896[(10)] = inst_78851);

(statearr_78896[(11)] = inst_78852__$1);

return statearr_78896;
})();
if(cljs.core.truth_(inst_78852__$1)){
var statearr_78897_78922 = state_78882__$1;
(statearr_78897_78922[(1)] = (8));

} else {
var statearr_78898_78923 = state_78882__$1;
(statearr_78898_78923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (14))){
var inst_78851 = (state_78882[(10)]);
var inst_78863 = (state_78882[(8)]);
var inst_78860 = (state_78882[(2)]);
var inst_78861 = console.log("Loading!",inst_78851);
var inst_78862 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_78863__$1 = cljs.core.get.call(null,inst_78862,inst_78851);
var state_78882__$1 = (function (){var statearr_78899 = state_78882;
(statearr_78899[(8)] = inst_78863__$1);

(statearr_78899[(9)] = inst_78860);

(statearr_78899[(12)] = inst_78861);

return statearr_78899;
})();
if(cljs.core.truth_(inst_78863__$1)){
var statearr_78900_78924 = state_78882__$1;
(statearr_78900_78924[(1)] = (15));

} else {
var statearr_78901_78925 = state_78882__$1;
(statearr_78901_78925[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (16))){
var inst_78860 = (state_78882[(9)]);
var inst_78867 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_78860);
var state_78882__$1 = state_78882;
var statearr_78902_78926 = state_78882__$1;
(statearr_78902_78926[(2)] = inst_78867);

(statearr_78902_78926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (10))){
var inst_78874 = (state_78882[(2)]);
var state_78882__$1 = (function (){var statearr_78903 = state_78882;
(statearr_78903[(13)] = inst_78874);

return statearr_78903;
})();
var statearr_78904_78927 = state_78882__$1;
(statearr_78904_78927[(2)] = null);

(statearr_78904_78927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78883 === (8))){
var inst_78852 = (state_78882[(11)]);
var inst_78854 = console.log("Evaling!",inst_78852);
var inst_78855 = eval(inst_78852);
var state_78882__$1 = (function (){var statearr_78905 = state_78882;
(statearr_78905[(14)] = inst_78854);

return statearr_78905;
})();
var statearr_78906_78928 = state_78882__$1;
(statearr_78906_78928[(2)] = inst_78855);

(statearr_78906_78928[(1)] = (10));


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
var statearr_78907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78907[(0)] = figwheel$client$file_reloading$state_machine__68364__auto__);

(statearr_78907[(1)] = (1));

return statearr_78907;
});
var figwheel$client$file_reloading$state_machine__68364__auto____1 = (function (state_78882){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_78882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e78908){if((e78908 instanceof Object)){
var ex__68367__auto__ = e78908;
var statearr_78909_78929 = state_78882;
(statearr_78909_78929[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78930 = state_78882;
state_78882 = G__78930;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__68364__auto__ = function(state_78882){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__68364__auto____1.call(this,state_78882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__68364__auto____0;
figwheel$client$file_reloading$state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__68364__auto____1;
return figwheel$client$file_reloading$state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__))
})();
var state__68455__auto__ = (function (){var statearr_78910 = f__68454__auto__.call(null);
(statearr_78910[(6)] = c__68453__auto__);

return statearr_78910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__))
);

return c__68453__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__78932 = arguments.length;
switch (G__78932) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__78934,callback){
var map__78935 = p__78934;
var map__78935__$1 = ((((!((map__78935 == null)))?((((map__78935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78935):map__78935);
var file_msg = map__78935__$1;
var namespace = cljs.core.get.call(null,map__78935__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__78935,map__78935__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__78935,map__78935__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__78937){
var map__78938 = p__78937;
var map__78938__$1 = ((((!((map__78938 == null)))?((((map__78938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78938):map__78938);
var file_msg = map__78938__$1;
var namespace = cljs.core.get.call(null,map__78938__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__78940){
var map__78941 = p__78940;
var map__78941__$1 = ((((!((map__78941 == null)))?((((map__78941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78941):map__78941);
var file_msg = map__78941__$1;
var namespace = cljs.core.get.call(null,map__78941__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__78943,callback){
var map__78944 = p__78943;
var map__78944__$1 = ((((!((map__78944 == null)))?((((map__78944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78944):map__78944);
var file_msg = map__78944__$1;
var request_url = cljs.core.get.call(null,map__78944__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__78944__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__68453__auto___78994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto___78994,out){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto___78994,out){
return (function (state_78979){
var state_val_78980 = (state_78979[(1)]);
if((state_val_78980 === (1))){
var inst_78953 = cljs.core.seq.call(null,files);
var inst_78954 = cljs.core.first.call(null,inst_78953);
var inst_78955 = cljs.core.next.call(null,inst_78953);
var inst_78956 = files;
var state_78979__$1 = (function (){var statearr_78981 = state_78979;
(statearr_78981[(7)] = inst_78955);

(statearr_78981[(8)] = inst_78956);

(statearr_78981[(9)] = inst_78954);

return statearr_78981;
})();
var statearr_78982_78995 = state_78979__$1;
(statearr_78982_78995[(2)] = null);

(statearr_78982_78995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78980 === (2))){
var inst_78962 = (state_78979[(10)]);
var inst_78956 = (state_78979[(8)]);
var inst_78961 = cljs.core.seq.call(null,inst_78956);
var inst_78962__$1 = cljs.core.first.call(null,inst_78961);
var inst_78963 = cljs.core.next.call(null,inst_78961);
var inst_78964 = (inst_78962__$1 == null);
var inst_78965 = cljs.core.not.call(null,inst_78964);
var state_78979__$1 = (function (){var statearr_78983 = state_78979;
(statearr_78983[(10)] = inst_78962__$1);

(statearr_78983[(11)] = inst_78963);

return statearr_78983;
})();
if(inst_78965){
var statearr_78984_78996 = state_78979__$1;
(statearr_78984_78996[(1)] = (4));

} else {
var statearr_78985_78997 = state_78979__$1;
(statearr_78985_78997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78980 === (3))){
var inst_78977 = (state_78979[(2)]);
var state_78979__$1 = state_78979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78979__$1,inst_78977);
} else {
if((state_val_78980 === (4))){
var inst_78962 = (state_78979[(10)]);
var inst_78967 = figwheel.client.file_reloading.reload_js_file.call(null,inst_78962);
var state_78979__$1 = state_78979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78979__$1,(7),inst_78967);
} else {
if((state_val_78980 === (5))){
var inst_78973 = cljs.core.async.close_BANG_.call(null,out);
var state_78979__$1 = state_78979;
var statearr_78986_78998 = state_78979__$1;
(statearr_78986_78998[(2)] = inst_78973);

(statearr_78986_78998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78980 === (6))){
var inst_78975 = (state_78979[(2)]);
var state_78979__$1 = state_78979;
var statearr_78987_78999 = state_78979__$1;
(statearr_78987_78999[(2)] = inst_78975);

(statearr_78987_78999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78980 === (7))){
var inst_78963 = (state_78979[(11)]);
var inst_78969 = (state_78979[(2)]);
var inst_78970 = cljs.core.async.put_BANG_.call(null,out,inst_78969);
var inst_78956 = inst_78963;
var state_78979__$1 = (function (){var statearr_78988 = state_78979;
(statearr_78988[(12)] = inst_78970);

(statearr_78988[(8)] = inst_78956);

return statearr_78988;
})();
var statearr_78989_79000 = state_78979__$1;
(statearr_78989_79000[(2)] = null);

(statearr_78989_79000[(1)] = (2));


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
});})(c__68453__auto___78994,out))
;
return ((function (switch__68363__auto__,c__68453__auto___78994,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____0 = (function (){
var statearr_78990 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78990[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__);

(statearr_78990[(1)] = (1));

return statearr_78990;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____1 = (function (state_78979){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_78979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e78991){if((e78991 instanceof Object)){
var ex__68367__auto__ = e78991;
var statearr_78992_79001 = state_78979;
(statearr_78992_79001[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79002 = state_78979;
state_78979 = G__79002;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__ = function(state_78979){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____1.call(this,state_78979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto___78994,out))
})();
var state__68455__auto__ = (function (){var statearr_78993 = f__68454__auto__.call(null);
(statearr_78993[(6)] = c__68453__auto___78994);

return statearr_78993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto___78994,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__79003,opts){
var map__79004 = p__79003;
var map__79004__$1 = ((((!((map__79004 == null)))?((((map__79004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79004):map__79004);
var eval_body = cljs.core.get.call(null,map__79004__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__79004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e79006){var e = e79006;
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
return (function (p1__79007_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__79007_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__79008){
var vec__79009 = p__79008;
var k = cljs.core.nth.call(null,vec__79009,(0),null);
var v = cljs.core.nth.call(null,vec__79009,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__79012){
var vec__79013 = p__79012;
var k = cljs.core.nth.call(null,vec__79013,(0),null);
var v = cljs.core.nth.call(null,vec__79013,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__79019,p__79020){
var map__79021 = p__79019;
var map__79021__$1 = ((((!((map__79021 == null)))?((((map__79021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79021):map__79021);
var opts = map__79021__$1;
var before_jsload = cljs.core.get.call(null,map__79021__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__79021__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__79021__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__79022 = p__79020;
var map__79022__$1 = ((((!((map__79022 == null)))?((((map__79022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79022):map__79022);
var msg = map__79022__$1;
var files = cljs.core.get.call(null,map__79022__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__79022__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__79022__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__68453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__68454__auto__ = (function (){var switch__68363__auto__ = ((function (c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_79176){
var state_val_79177 = (state_79176[(1)]);
if((state_val_79177 === (7))){
var inst_79037 = (state_79176[(7)]);
var inst_79036 = (state_79176[(8)]);
var inst_79039 = (state_79176[(9)]);
var inst_79038 = (state_79176[(10)]);
var inst_79044 = cljs.core._nth.call(null,inst_79037,inst_79039);
var inst_79045 = figwheel.client.file_reloading.eval_body.call(null,inst_79044,opts);
var inst_79046 = (inst_79039 + (1));
var tmp79178 = inst_79037;
var tmp79179 = inst_79036;
var tmp79180 = inst_79038;
var inst_79036__$1 = tmp79179;
var inst_79037__$1 = tmp79178;
var inst_79038__$1 = tmp79180;
var inst_79039__$1 = inst_79046;
var state_79176__$1 = (function (){var statearr_79181 = state_79176;
(statearr_79181[(7)] = inst_79037__$1);

(statearr_79181[(8)] = inst_79036__$1);

(statearr_79181[(9)] = inst_79039__$1);

(statearr_79181[(10)] = inst_79038__$1);

(statearr_79181[(11)] = inst_79045);

return statearr_79181;
})();
var statearr_79182_79265 = state_79176__$1;
(statearr_79182_79265[(2)] = null);

(statearr_79182_79265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (20))){
var inst_79079 = (state_79176[(12)]);
var inst_79087 = figwheel.client.file_reloading.sort_files.call(null,inst_79079);
var state_79176__$1 = state_79176;
var statearr_79183_79266 = state_79176__$1;
(statearr_79183_79266[(2)] = inst_79087);

(statearr_79183_79266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (27))){
var state_79176__$1 = state_79176;
var statearr_79184_79267 = state_79176__$1;
(statearr_79184_79267[(2)] = null);

(statearr_79184_79267[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (1))){
var inst_79028 = (state_79176[(13)]);
var inst_79025 = before_jsload.call(null,files);
var inst_79026 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_79027 = (function (){return ((function (inst_79028,inst_79025,inst_79026,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79016_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__79016_SHARP_);
});
;})(inst_79028,inst_79025,inst_79026,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79028__$1 = cljs.core.filter.call(null,inst_79027,files);
var inst_79029 = cljs.core.not_empty.call(null,inst_79028__$1);
var state_79176__$1 = (function (){var statearr_79185 = state_79176;
(statearr_79185[(14)] = inst_79025);

(statearr_79185[(13)] = inst_79028__$1);

(statearr_79185[(15)] = inst_79026);

return statearr_79185;
})();
if(cljs.core.truth_(inst_79029)){
var statearr_79186_79268 = state_79176__$1;
(statearr_79186_79268[(1)] = (2));

} else {
var statearr_79187_79269 = state_79176__$1;
(statearr_79187_79269[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (24))){
var state_79176__$1 = state_79176;
var statearr_79188_79270 = state_79176__$1;
(statearr_79188_79270[(2)] = null);

(statearr_79188_79270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (39))){
var inst_79129 = (state_79176[(16)]);
var state_79176__$1 = state_79176;
var statearr_79189_79271 = state_79176__$1;
(statearr_79189_79271[(2)] = inst_79129);

(statearr_79189_79271[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (46))){
var inst_79171 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
var statearr_79190_79272 = state_79176__$1;
(statearr_79190_79272[(2)] = inst_79171);

(statearr_79190_79272[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (4))){
var inst_79073 = (state_79176[(2)]);
var inst_79074 = cljs.core.List.EMPTY;
var inst_79075 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_79074);
var inst_79076 = (function (){return ((function (inst_79073,inst_79074,inst_79075,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79017_SHARP_){
var and__39919__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__79017_SHARP_);
if(cljs.core.truth_(and__39919__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__79017_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__79017_SHARP_)));
} else {
return and__39919__auto__;
}
});
;})(inst_79073,inst_79074,inst_79075,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79077 = cljs.core.filter.call(null,inst_79076,files);
var inst_79078 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_79079 = cljs.core.concat.call(null,inst_79077,inst_79078);
var state_79176__$1 = (function (){var statearr_79191 = state_79176;
(statearr_79191[(17)] = inst_79075);

(statearr_79191[(18)] = inst_79073);

(statearr_79191[(12)] = inst_79079);

return statearr_79191;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_79192_79273 = state_79176__$1;
(statearr_79192_79273[(1)] = (16));

} else {
var statearr_79193_79274 = state_79176__$1;
(statearr_79193_79274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (15))){
var inst_79063 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
var statearr_79194_79275 = state_79176__$1;
(statearr_79194_79275[(2)] = inst_79063);

(statearr_79194_79275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (21))){
var inst_79089 = (state_79176[(19)]);
var inst_79089__$1 = (state_79176[(2)]);
var inst_79090 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_79089__$1);
var state_79176__$1 = (function (){var statearr_79195 = state_79176;
(statearr_79195[(19)] = inst_79089__$1);

return statearr_79195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79176__$1,(22),inst_79090);
} else {
if((state_val_79177 === (31))){
var inst_79174 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79176__$1,inst_79174);
} else {
if((state_val_79177 === (32))){
var inst_79129 = (state_79176[(16)]);
var inst_79134 = inst_79129.cljs$lang$protocol_mask$partition0$;
var inst_79135 = (inst_79134 & (64));
var inst_79136 = inst_79129.cljs$core$ISeq$;
var inst_79137 = (cljs.core.PROTOCOL_SENTINEL === inst_79136);
var inst_79138 = (inst_79135) || (inst_79137);
var state_79176__$1 = state_79176;
if(cljs.core.truth_(inst_79138)){
var statearr_79196_79276 = state_79176__$1;
(statearr_79196_79276[(1)] = (35));

} else {
var statearr_79197_79277 = state_79176__$1;
(statearr_79197_79277[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (40))){
var inst_79151 = (state_79176[(20)]);
var inst_79150 = (state_79176[(2)]);
var inst_79151__$1 = cljs.core.get.call(null,inst_79150,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_79152 = cljs.core.get.call(null,inst_79150,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_79153 = cljs.core.not_empty.call(null,inst_79151__$1);
var state_79176__$1 = (function (){var statearr_79198 = state_79176;
(statearr_79198[(21)] = inst_79152);

(statearr_79198[(20)] = inst_79151__$1);

return statearr_79198;
})();
if(cljs.core.truth_(inst_79153)){
var statearr_79199_79278 = state_79176__$1;
(statearr_79199_79278[(1)] = (41));

} else {
var statearr_79200_79279 = state_79176__$1;
(statearr_79200_79279[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (33))){
var state_79176__$1 = state_79176;
var statearr_79201_79280 = state_79176__$1;
(statearr_79201_79280[(2)] = false);

(statearr_79201_79280[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (13))){
var inst_79049 = (state_79176[(22)]);
var inst_79053 = cljs.core.chunk_first.call(null,inst_79049);
var inst_79054 = cljs.core.chunk_rest.call(null,inst_79049);
var inst_79055 = cljs.core.count.call(null,inst_79053);
var inst_79036 = inst_79054;
var inst_79037 = inst_79053;
var inst_79038 = inst_79055;
var inst_79039 = (0);
var state_79176__$1 = (function (){var statearr_79202 = state_79176;
(statearr_79202[(7)] = inst_79037);

(statearr_79202[(8)] = inst_79036);

(statearr_79202[(9)] = inst_79039);

(statearr_79202[(10)] = inst_79038);

return statearr_79202;
})();
var statearr_79203_79281 = state_79176__$1;
(statearr_79203_79281[(2)] = null);

(statearr_79203_79281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (22))){
var inst_79093 = (state_79176[(23)]);
var inst_79089 = (state_79176[(19)]);
var inst_79092 = (state_79176[(24)]);
var inst_79097 = (state_79176[(25)]);
var inst_79092__$1 = (state_79176[(2)]);
var inst_79093__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_79092__$1);
var inst_79094 = (function (){var all_files = inst_79089;
var res_SINGLEQUOTE_ = inst_79092__$1;
var res = inst_79093__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_79093,inst_79089,inst_79092,inst_79097,inst_79092__$1,inst_79093__$1,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79018_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__79018_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_79093,inst_79089,inst_79092,inst_79097,inst_79092__$1,inst_79093__$1,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79095 = cljs.core.filter.call(null,inst_79094,inst_79092__$1);
var inst_79096 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_79097__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_79096);
var inst_79098 = cljs.core.not_empty.call(null,inst_79097__$1);
var state_79176__$1 = (function (){var statearr_79204 = state_79176;
(statearr_79204[(23)] = inst_79093__$1);

(statearr_79204[(24)] = inst_79092__$1);

(statearr_79204[(26)] = inst_79095);

(statearr_79204[(25)] = inst_79097__$1);

return statearr_79204;
})();
if(cljs.core.truth_(inst_79098)){
var statearr_79205_79282 = state_79176__$1;
(statearr_79205_79282[(1)] = (23));

} else {
var statearr_79206_79283 = state_79176__$1;
(statearr_79206_79283[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (36))){
var state_79176__$1 = state_79176;
var statearr_79207_79284 = state_79176__$1;
(statearr_79207_79284[(2)] = false);

(statearr_79207_79284[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (41))){
var inst_79151 = (state_79176[(20)]);
var inst_79155 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_79156 = cljs.core.map.call(null,inst_79155,inst_79151);
var inst_79157 = cljs.core.pr_str.call(null,inst_79156);
var inst_79158 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_79157)].join('');
var inst_79159 = figwheel.client.utils.log.call(null,inst_79158);
var state_79176__$1 = state_79176;
var statearr_79208_79285 = state_79176__$1;
(statearr_79208_79285[(2)] = inst_79159);

(statearr_79208_79285[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (43))){
var inst_79152 = (state_79176[(21)]);
var inst_79162 = (state_79176[(2)]);
var inst_79163 = cljs.core.not_empty.call(null,inst_79152);
var state_79176__$1 = (function (){var statearr_79209 = state_79176;
(statearr_79209[(27)] = inst_79162);

return statearr_79209;
})();
if(cljs.core.truth_(inst_79163)){
var statearr_79210_79286 = state_79176__$1;
(statearr_79210_79286[(1)] = (44));

} else {
var statearr_79211_79287 = state_79176__$1;
(statearr_79211_79287[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (29))){
var inst_79093 = (state_79176[(23)]);
var inst_79089 = (state_79176[(19)]);
var inst_79092 = (state_79176[(24)]);
var inst_79129 = (state_79176[(16)]);
var inst_79095 = (state_79176[(26)]);
var inst_79097 = (state_79176[(25)]);
var inst_79125 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_79128 = (function (){var all_files = inst_79089;
var res_SINGLEQUOTE_ = inst_79092;
var res = inst_79093;
var files_not_loaded = inst_79095;
var dependencies_that_loaded = inst_79097;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79093,inst_79089,inst_79092,inst_79129,inst_79095,inst_79097,inst_79125,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__79127){
var map__79212 = p__79127;
var map__79212__$1 = ((((!((map__79212 == null)))?((((map__79212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79212):map__79212);
var namespace = cljs.core.get.call(null,map__79212__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79093,inst_79089,inst_79092,inst_79129,inst_79095,inst_79097,inst_79125,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79129__$1 = cljs.core.group_by.call(null,inst_79128,inst_79095);
var inst_79131 = (inst_79129__$1 == null);
var inst_79132 = cljs.core.not.call(null,inst_79131);
var state_79176__$1 = (function (){var statearr_79214 = state_79176;
(statearr_79214[(28)] = inst_79125);

(statearr_79214[(16)] = inst_79129__$1);

return statearr_79214;
})();
if(inst_79132){
var statearr_79215_79288 = state_79176__$1;
(statearr_79215_79288[(1)] = (32));

} else {
var statearr_79216_79289 = state_79176__$1;
(statearr_79216_79289[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (44))){
var inst_79152 = (state_79176[(21)]);
var inst_79165 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_79152);
var inst_79166 = cljs.core.pr_str.call(null,inst_79165);
var inst_79167 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_79166)].join('');
var inst_79168 = figwheel.client.utils.log.call(null,inst_79167);
var state_79176__$1 = state_79176;
var statearr_79217_79290 = state_79176__$1;
(statearr_79217_79290[(2)] = inst_79168);

(statearr_79217_79290[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (6))){
var inst_79070 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
var statearr_79218_79291 = state_79176__$1;
(statearr_79218_79291[(2)] = inst_79070);

(statearr_79218_79291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (28))){
var inst_79095 = (state_79176[(26)]);
var inst_79122 = (state_79176[(2)]);
var inst_79123 = cljs.core.not_empty.call(null,inst_79095);
var state_79176__$1 = (function (){var statearr_79219 = state_79176;
(statearr_79219[(29)] = inst_79122);

return statearr_79219;
})();
if(cljs.core.truth_(inst_79123)){
var statearr_79220_79292 = state_79176__$1;
(statearr_79220_79292[(1)] = (29));

} else {
var statearr_79221_79293 = state_79176__$1;
(statearr_79221_79293[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (25))){
var inst_79093 = (state_79176[(23)]);
var inst_79109 = (state_79176[(2)]);
var inst_79110 = cljs.core.not_empty.call(null,inst_79093);
var state_79176__$1 = (function (){var statearr_79222 = state_79176;
(statearr_79222[(30)] = inst_79109);

return statearr_79222;
})();
if(cljs.core.truth_(inst_79110)){
var statearr_79223_79294 = state_79176__$1;
(statearr_79223_79294[(1)] = (26));

} else {
var statearr_79224_79295 = state_79176__$1;
(statearr_79224_79295[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (34))){
var inst_79145 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
if(cljs.core.truth_(inst_79145)){
var statearr_79225_79296 = state_79176__$1;
(statearr_79225_79296[(1)] = (38));

} else {
var statearr_79226_79297 = state_79176__$1;
(statearr_79226_79297[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (17))){
var state_79176__$1 = state_79176;
var statearr_79227_79298 = state_79176__$1;
(statearr_79227_79298[(2)] = recompile_dependents);

(statearr_79227_79298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (3))){
var state_79176__$1 = state_79176;
var statearr_79228_79299 = state_79176__$1;
(statearr_79228_79299[(2)] = null);

(statearr_79228_79299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (12))){
var inst_79066 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
var statearr_79229_79300 = state_79176__$1;
(statearr_79229_79300[(2)] = inst_79066);

(statearr_79229_79300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (2))){
var inst_79028 = (state_79176[(13)]);
var inst_79035 = cljs.core.seq.call(null,inst_79028);
var inst_79036 = inst_79035;
var inst_79037 = null;
var inst_79038 = (0);
var inst_79039 = (0);
var state_79176__$1 = (function (){var statearr_79230 = state_79176;
(statearr_79230[(7)] = inst_79037);

(statearr_79230[(8)] = inst_79036);

(statearr_79230[(9)] = inst_79039);

(statearr_79230[(10)] = inst_79038);

return statearr_79230;
})();
var statearr_79231_79301 = state_79176__$1;
(statearr_79231_79301[(2)] = null);

(statearr_79231_79301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (23))){
var inst_79093 = (state_79176[(23)]);
var inst_79089 = (state_79176[(19)]);
var inst_79092 = (state_79176[(24)]);
var inst_79095 = (state_79176[(26)]);
var inst_79097 = (state_79176[(25)]);
var inst_79100 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_79102 = (function (){var all_files = inst_79089;
var res_SINGLEQUOTE_ = inst_79092;
var res = inst_79093;
var files_not_loaded = inst_79095;
var dependencies_that_loaded = inst_79097;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79093,inst_79089,inst_79092,inst_79095,inst_79097,inst_79100,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__79101){
var map__79232 = p__79101;
var map__79232__$1 = ((((!((map__79232 == null)))?((((map__79232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79232):map__79232);
var request_url = cljs.core.get.call(null,map__79232__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79093,inst_79089,inst_79092,inst_79095,inst_79097,inst_79100,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79103 = cljs.core.reverse.call(null,inst_79097);
var inst_79104 = cljs.core.map.call(null,inst_79102,inst_79103);
var inst_79105 = cljs.core.pr_str.call(null,inst_79104);
var inst_79106 = figwheel.client.utils.log.call(null,inst_79105);
var state_79176__$1 = (function (){var statearr_79234 = state_79176;
(statearr_79234[(31)] = inst_79100);

return statearr_79234;
})();
var statearr_79235_79302 = state_79176__$1;
(statearr_79235_79302[(2)] = inst_79106);

(statearr_79235_79302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (35))){
var state_79176__$1 = state_79176;
var statearr_79236_79303 = state_79176__$1;
(statearr_79236_79303[(2)] = true);

(statearr_79236_79303[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (19))){
var inst_79079 = (state_79176[(12)]);
var inst_79085 = figwheel.client.file_reloading.expand_files.call(null,inst_79079);
var state_79176__$1 = state_79176;
var statearr_79237_79304 = state_79176__$1;
(statearr_79237_79304[(2)] = inst_79085);

(statearr_79237_79304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (11))){
var state_79176__$1 = state_79176;
var statearr_79238_79305 = state_79176__$1;
(statearr_79238_79305[(2)] = null);

(statearr_79238_79305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (9))){
var inst_79068 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
var statearr_79239_79306 = state_79176__$1;
(statearr_79239_79306[(2)] = inst_79068);

(statearr_79239_79306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (5))){
var inst_79039 = (state_79176[(9)]);
var inst_79038 = (state_79176[(10)]);
var inst_79041 = (inst_79039 < inst_79038);
var inst_79042 = inst_79041;
var state_79176__$1 = state_79176;
if(cljs.core.truth_(inst_79042)){
var statearr_79240_79307 = state_79176__$1;
(statearr_79240_79307[(1)] = (7));

} else {
var statearr_79241_79308 = state_79176__$1;
(statearr_79241_79308[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (14))){
var inst_79049 = (state_79176[(22)]);
var inst_79058 = cljs.core.first.call(null,inst_79049);
var inst_79059 = figwheel.client.file_reloading.eval_body.call(null,inst_79058,opts);
var inst_79060 = cljs.core.next.call(null,inst_79049);
var inst_79036 = inst_79060;
var inst_79037 = null;
var inst_79038 = (0);
var inst_79039 = (0);
var state_79176__$1 = (function (){var statearr_79242 = state_79176;
(statearr_79242[(7)] = inst_79037);

(statearr_79242[(8)] = inst_79036);

(statearr_79242[(9)] = inst_79039);

(statearr_79242[(10)] = inst_79038);

(statearr_79242[(32)] = inst_79059);

return statearr_79242;
})();
var statearr_79243_79309 = state_79176__$1;
(statearr_79243_79309[(2)] = null);

(statearr_79243_79309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (45))){
var state_79176__$1 = state_79176;
var statearr_79244_79310 = state_79176__$1;
(statearr_79244_79310[(2)] = null);

(statearr_79244_79310[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (26))){
var inst_79093 = (state_79176[(23)]);
var inst_79089 = (state_79176[(19)]);
var inst_79092 = (state_79176[(24)]);
var inst_79095 = (state_79176[(26)]);
var inst_79097 = (state_79176[(25)]);
var inst_79112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_79114 = (function (){var all_files = inst_79089;
var res_SINGLEQUOTE_ = inst_79092;
var res = inst_79093;
var files_not_loaded = inst_79095;
var dependencies_that_loaded = inst_79097;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79093,inst_79089,inst_79092,inst_79095,inst_79097,inst_79112,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__79113){
var map__79245 = p__79113;
var map__79245__$1 = ((((!((map__79245 == null)))?((((map__79245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79245):map__79245);
var namespace = cljs.core.get.call(null,map__79245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__79245__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79093,inst_79089,inst_79092,inst_79095,inst_79097,inst_79112,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79115 = cljs.core.map.call(null,inst_79114,inst_79093);
var inst_79116 = cljs.core.pr_str.call(null,inst_79115);
var inst_79117 = figwheel.client.utils.log.call(null,inst_79116);
var inst_79118 = (function (){var all_files = inst_79089;
var res_SINGLEQUOTE_ = inst_79092;
var res = inst_79093;
var files_not_loaded = inst_79095;
var dependencies_that_loaded = inst_79097;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79093,inst_79089,inst_79092,inst_79095,inst_79097,inst_79112,inst_79114,inst_79115,inst_79116,inst_79117,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79093,inst_79089,inst_79092,inst_79095,inst_79097,inst_79112,inst_79114,inst_79115,inst_79116,inst_79117,state_val_79177,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79119 = setTimeout(inst_79118,(10));
var state_79176__$1 = (function (){var statearr_79247 = state_79176;
(statearr_79247[(33)] = inst_79112);

(statearr_79247[(34)] = inst_79117);

return statearr_79247;
})();
var statearr_79248_79311 = state_79176__$1;
(statearr_79248_79311[(2)] = inst_79119);

(statearr_79248_79311[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (16))){
var state_79176__$1 = state_79176;
var statearr_79249_79312 = state_79176__$1;
(statearr_79249_79312[(2)] = reload_dependents);

(statearr_79249_79312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (38))){
var inst_79129 = (state_79176[(16)]);
var inst_79147 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79129);
var state_79176__$1 = state_79176;
var statearr_79250_79313 = state_79176__$1;
(statearr_79250_79313[(2)] = inst_79147);

(statearr_79250_79313[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (30))){
var state_79176__$1 = state_79176;
var statearr_79251_79314 = state_79176__$1;
(statearr_79251_79314[(2)] = null);

(statearr_79251_79314[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (10))){
var inst_79049 = (state_79176[(22)]);
var inst_79051 = cljs.core.chunked_seq_QMARK_.call(null,inst_79049);
var state_79176__$1 = state_79176;
if(inst_79051){
var statearr_79252_79315 = state_79176__$1;
(statearr_79252_79315[(1)] = (13));

} else {
var statearr_79253_79316 = state_79176__$1;
(statearr_79253_79316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (18))){
var inst_79083 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
if(cljs.core.truth_(inst_79083)){
var statearr_79254_79317 = state_79176__$1;
(statearr_79254_79317[(1)] = (19));

} else {
var statearr_79255_79318 = state_79176__$1;
(statearr_79255_79318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (42))){
var state_79176__$1 = state_79176;
var statearr_79256_79319 = state_79176__$1;
(statearr_79256_79319[(2)] = null);

(statearr_79256_79319[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (37))){
var inst_79142 = (state_79176[(2)]);
var state_79176__$1 = state_79176;
var statearr_79257_79320 = state_79176__$1;
(statearr_79257_79320[(2)] = inst_79142);

(statearr_79257_79320[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79177 === (8))){
var inst_79049 = (state_79176[(22)]);
var inst_79036 = (state_79176[(8)]);
var inst_79049__$1 = cljs.core.seq.call(null,inst_79036);
var state_79176__$1 = (function (){var statearr_79258 = state_79176;
(statearr_79258[(22)] = inst_79049__$1);

return statearr_79258;
})();
if(inst_79049__$1){
var statearr_79259_79321 = state_79176__$1;
(statearr_79259_79321[(1)] = (10));

} else {
var statearr_79260_79322 = state_79176__$1;
(statearr_79260_79322[(1)] = (11));

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
});})(c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__68363__auto__,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____0 = (function (){
var statearr_79261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79261[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__);

(statearr_79261[(1)] = (1));

return statearr_79261;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____1 = (function (state_79176){
while(true){
var ret_value__68365__auto__ = (function (){try{while(true){
var result__68366__auto__ = switch__68363__auto__.call(null,state_79176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__68366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68366__auto__;
}
break;
}
}catch (e79262){if((e79262 instanceof Object)){
var ex__68367__auto__ = e79262;
var statearr_79263_79323 = state_79176;
(statearr_79263_79323[(5)] = ex__68367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__68365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79324 = state_79176;
state_79176 = G__79324;
continue;
} else {
return ret_value__68365__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__ = function(state_79176){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____1.call(this,state_79176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__68364__auto__;
})()
;})(switch__68363__auto__,c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__68455__auto__ = (function (){var statearr_79264 = f__68454__auto__.call(null);
(statearr_79264[(6)] = c__68453__auto__);

return statearr_79264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__68455__auto__);
});})(c__68453__auto__,map__79021,map__79021__$1,opts,before_jsload,on_jsload,reload_dependents,map__79022,map__79022__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__68453__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__79327,link){
var map__79328 = p__79327;
var map__79328__$1 = ((((!((map__79328 == null)))?((((map__79328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79328):map__79328);
var file = cljs.core.get.call(null,map__79328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__79328,map__79328__$1,file){
return (function (p1__79325_SHARP_,p2__79326_SHARP_){
if(cljs.core._EQ_.call(null,p1__79325_SHARP_,p2__79326_SHARP_)){
return p1__79325_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__79328,map__79328__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__79331){
var map__79332 = p__79331;
var map__79332__$1 = ((((!((map__79332 == null)))?((((map__79332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79332):map__79332);
var match_length = cljs.core.get.call(null,map__79332__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__79332__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__79330_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__79330_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__79334_SHARP_,p2__79335_SHARP_){
return cljs.core.assoc.call(null,p1__79334_SHARP_,cljs.core.get.call(null,p2__79335_SHARP_,key),p2__79335_SHARP_);
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
var loaded_f_datas_79336 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_79336);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_79336);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__79337,p__79338){
var map__79339 = p__79337;
var map__79339__$1 = ((((!((map__79339 == null)))?((((map__79339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79339):map__79339);
var on_cssload = cljs.core.get.call(null,map__79339__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__79340 = p__79338;
var map__79340__$1 = ((((!((map__79340 == null)))?((((map__79340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79340):map__79340);
var files_msg = map__79340__$1;
var files = cljs.core.get.call(null,map__79340__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1519023126024
