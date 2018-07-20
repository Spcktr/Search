// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
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
var or__6814__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__6814__auto__){
return or__6814__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__6814__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__14127_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__14127_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
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
var seq__14132 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__14133 = null;
var count__14134 = (0);
var i__14135 = (0);
while(true){
if((i__14135 < count__14134)){
var n = cljs.core._nth.call(null,chunk__14133,i__14135);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__14136 = seq__14132;
var G__14137 = chunk__14133;
var G__14138 = count__14134;
var G__14139 = (i__14135 + (1));
seq__14132 = G__14136;
chunk__14133 = G__14137;
count__14134 = G__14138;
i__14135 = G__14139;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14132);
if(temp__4657__auto__){
var seq__14132__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14132__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__14132__$1);
var G__14140 = cljs.core.chunk_rest.call(null,seq__14132__$1);
var G__14141 = c__7633__auto__;
var G__14142 = cljs.core.count.call(null,c__7633__auto__);
var G__14143 = (0);
seq__14132 = G__14140;
chunk__14133 = G__14141;
count__14134 = G__14142;
i__14135 = G__14143;
continue;
} else {
var n = cljs.core.first.call(null,seq__14132__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__14144 = cljs.core.next.call(null,seq__14132__$1);
var G__14145 = null;
var G__14146 = (0);
var G__14147 = (0);
seq__14132 = G__14144;
chunk__14133 = G__14145;
count__14134 = G__14146;
i__14135 = G__14147;
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

var seq__14198_14209 = cljs.core.seq.call(null,deps);
var chunk__14199_14210 = null;
var count__14200_14211 = (0);
var i__14201_14212 = (0);
while(true){
if((i__14201_14212 < count__14200_14211)){
var dep_14213 = cljs.core._nth.call(null,chunk__14199_14210,i__14201_14212);
topo_sort_helper_STAR_.call(null,dep_14213,(depth + (1)),state);

var G__14214 = seq__14198_14209;
var G__14215 = chunk__14199_14210;
var G__14216 = count__14200_14211;
var G__14217 = (i__14201_14212 + (1));
seq__14198_14209 = G__14214;
chunk__14199_14210 = G__14215;
count__14200_14211 = G__14216;
i__14201_14212 = G__14217;
continue;
} else {
var temp__4657__auto___14218 = cljs.core.seq.call(null,seq__14198_14209);
if(temp__4657__auto___14218){
var seq__14198_14219__$1 = temp__4657__auto___14218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14198_14219__$1)){
var c__7633__auto___14220 = cljs.core.chunk_first.call(null,seq__14198_14219__$1);
var G__14221 = cljs.core.chunk_rest.call(null,seq__14198_14219__$1);
var G__14222 = c__7633__auto___14220;
var G__14223 = cljs.core.count.call(null,c__7633__auto___14220);
var G__14224 = (0);
seq__14198_14209 = G__14221;
chunk__14199_14210 = G__14222;
count__14200_14211 = G__14223;
i__14201_14212 = G__14224;
continue;
} else {
var dep_14225 = cljs.core.first.call(null,seq__14198_14219__$1);
topo_sort_helper_STAR_.call(null,dep_14225,(depth + (1)),state);

var G__14226 = cljs.core.next.call(null,seq__14198_14219__$1);
var G__14227 = null;
var G__14228 = (0);
var G__14229 = (0);
seq__14198_14209 = G__14226;
chunk__14199_14210 = G__14227;
count__14200_14211 = G__14228;
i__14201_14212 = G__14229;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__14202){
var vec__14206 = p__14202;
var seq__14207 = cljs.core.seq.call(null,vec__14206);
var first__14208 = cljs.core.first.call(null,seq__14207);
var seq__14207__$1 = cljs.core.next.call(null,seq__14207);
var x = first__14208;
var xs = seq__14207__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__14206,seq__14207,first__14208,seq__14207__$1,x,xs,get_deps__$1){
return (function (p1__14148_SHARP_){
return clojure.set.difference.call(null,p1__14148_SHARP_,x);
});})(vec__14206,seq__14207,first__14208,seq__14207__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
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
var seq__14242 = cljs.core.seq.call(null,provides);
var chunk__14243 = null;
var count__14244 = (0);
var i__14245 = (0);
while(true){
if((i__14245 < count__14244)){
var prov = cljs.core._nth.call(null,chunk__14243,i__14245);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14246_14254 = cljs.core.seq.call(null,requires);
var chunk__14247_14255 = null;
var count__14248_14256 = (0);
var i__14249_14257 = (0);
while(true){
if((i__14249_14257 < count__14248_14256)){
var req_14258 = cljs.core._nth.call(null,chunk__14247_14255,i__14249_14257);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14258,prov);

var G__14259 = seq__14246_14254;
var G__14260 = chunk__14247_14255;
var G__14261 = count__14248_14256;
var G__14262 = (i__14249_14257 + (1));
seq__14246_14254 = G__14259;
chunk__14247_14255 = G__14260;
count__14248_14256 = G__14261;
i__14249_14257 = G__14262;
continue;
} else {
var temp__4657__auto___14263 = cljs.core.seq.call(null,seq__14246_14254);
if(temp__4657__auto___14263){
var seq__14246_14264__$1 = temp__4657__auto___14263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14246_14264__$1)){
var c__7633__auto___14265 = cljs.core.chunk_first.call(null,seq__14246_14264__$1);
var G__14266 = cljs.core.chunk_rest.call(null,seq__14246_14264__$1);
var G__14267 = c__7633__auto___14265;
var G__14268 = cljs.core.count.call(null,c__7633__auto___14265);
var G__14269 = (0);
seq__14246_14254 = G__14266;
chunk__14247_14255 = G__14267;
count__14248_14256 = G__14268;
i__14249_14257 = G__14269;
continue;
} else {
var req_14270 = cljs.core.first.call(null,seq__14246_14264__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14270,prov);

var G__14271 = cljs.core.next.call(null,seq__14246_14264__$1);
var G__14272 = null;
var G__14273 = (0);
var G__14274 = (0);
seq__14246_14254 = G__14271;
chunk__14247_14255 = G__14272;
count__14248_14256 = G__14273;
i__14249_14257 = G__14274;
continue;
}
} else {
}
}
break;
}

var G__14275 = seq__14242;
var G__14276 = chunk__14243;
var G__14277 = count__14244;
var G__14278 = (i__14245 + (1));
seq__14242 = G__14275;
chunk__14243 = G__14276;
count__14244 = G__14277;
i__14245 = G__14278;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14242);
if(temp__4657__auto__){
var seq__14242__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14242__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__14242__$1);
var G__14279 = cljs.core.chunk_rest.call(null,seq__14242__$1);
var G__14280 = c__7633__auto__;
var G__14281 = cljs.core.count.call(null,c__7633__auto__);
var G__14282 = (0);
seq__14242 = G__14279;
chunk__14243 = G__14280;
count__14244 = G__14281;
i__14245 = G__14282;
continue;
} else {
var prov = cljs.core.first.call(null,seq__14242__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14250_14283 = cljs.core.seq.call(null,requires);
var chunk__14251_14284 = null;
var count__14252_14285 = (0);
var i__14253_14286 = (0);
while(true){
if((i__14253_14286 < count__14252_14285)){
var req_14287 = cljs.core._nth.call(null,chunk__14251_14284,i__14253_14286);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14287,prov);

var G__14288 = seq__14250_14283;
var G__14289 = chunk__14251_14284;
var G__14290 = count__14252_14285;
var G__14291 = (i__14253_14286 + (1));
seq__14250_14283 = G__14288;
chunk__14251_14284 = G__14289;
count__14252_14285 = G__14290;
i__14253_14286 = G__14291;
continue;
} else {
var temp__4657__auto___14292__$1 = cljs.core.seq.call(null,seq__14250_14283);
if(temp__4657__auto___14292__$1){
var seq__14250_14293__$1 = temp__4657__auto___14292__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14250_14293__$1)){
var c__7633__auto___14294 = cljs.core.chunk_first.call(null,seq__14250_14293__$1);
var G__14295 = cljs.core.chunk_rest.call(null,seq__14250_14293__$1);
var G__14296 = c__7633__auto___14294;
var G__14297 = cljs.core.count.call(null,c__7633__auto___14294);
var G__14298 = (0);
seq__14250_14283 = G__14295;
chunk__14251_14284 = G__14296;
count__14252_14285 = G__14297;
i__14253_14286 = G__14298;
continue;
} else {
var req_14299 = cljs.core.first.call(null,seq__14250_14293__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14299,prov);

var G__14300 = cljs.core.next.call(null,seq__14250_14293__$1);
var G__14301 = null;
var G__14302 = (0);
var G__14303 = (0);
seq__14250_14283 = G__14300;
chunk__14251_14284 = G__14301;
count__14252_14285 = G__14302;
i__14253_14286 = G__14303;
continue;
}
} else {
}
}
break;
}

var G__14304 = cljs.core.next.call(null,seq__14242__$1);
var G__14305 = null;
var G__14306 = (0);
var G__14307 = (0);
seq__14242 = G__14304;
chunk__14243 = G__14305;
count__14244 = G__14306;
i__14245 = G__14307;
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
var seq__14312_14316 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__14313_14317 = null;
var count__14314_14318 = (0);
var i__14315_14319 = (0);
while(true){
if((i__14315_14319 < count__14314_14318)){
var ns_14320 = cljs.core._nth.call(null,chunk__14313_14317,i__14315_14319);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14320);

var G__14321 = seq__14312_14316;
var G__14322 = chunk__14313_14317;
var G__14323 = count__14314_14318;
var G__14324 = (i__14315_14319 + (1));
seq__14312_14316 = G__14321;
chunk__14313_14317 = G__14322;
count__14314_14318 = G__14323;
i__14315_14319 = G__14324;
continue;
} else {
var temp__4657__auto___14325 = cljs.core.seq.call(null,seq__14312_14316);
if(temp__4657__auto___14325){
var seq__14312_14326__$1 = temp__4657__auto___14325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14312_14326__$1)){
var c__7633__auto___14327 = cljs.core.chunk_first.call(null,seq__14312_14326__$1);
var G__14328 = cljs.core.chunk_rest.call(null,seq__14312_14326__$1);
var G__14329 = c__7633__auto___14327;
var G__14330 = cljs.core.count.call(null,c__7633__auto___14327);
var G__14331 = (0);
seq__14312_14316 = G__14328;
chunk__14313_14317 = G__14329;
count__14314_14318 = G__14330;
i__14315_14319 = G__14331;
continue;
} else {
var ns_14332 = cljs.core.first.call(null,seq__14312_14326__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14332);

var G__14333 = cljs.core.next.call(null,seq__14312_14326__$1);
var G__14334 = null;
var G__14335 = (0);
var G__14336 = (0);
seq__14312_14316 = G__14333;
chunk__14313_14317 = G__14334;
count__14314_14318 = G__14335;
i__14315_14319 = G__14336;
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
goog.require_figwheel_backup_ = (function (){var or__6814__auto__ = goog.require__;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
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
var G__14337__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__14337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14338__i = 0, G__14338__a = new Array(arguments.length -  0);
while (G__14338__i < G__14338__a.length) {G__14338__a[G__14338__i] = arguments[G__14338__i + 0]; ++G__14338__i;}
  args = new cljs.core.IndexedSeq(G__14338__a,0);
} 
return G__14337__delegate.call(this,args);};
G__14337.cljs$lang$maxFixedArity = 0;
G__14337.cljs$lang$applyTo = (function (arglist__14339){
var args = cljs.core.seq(arglist__14339);
return G__14337__delegate(args);
});
G__14337.cljs$core$IFn$_invoke$arity$variadic = G__14337__delegate;
return G__14337;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__14340 = cljs.core._EQ_;
var expr__14341 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__14340.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__14341))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__14340,expr__14341){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__14340,expr__14341))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__14340,expr__14341){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e14343){if((e14343 instanceof Error)){
var e = e14343;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14343;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__14340,expr__14341))
} else {
if(cljs.core.truth_(pred__14340.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__14341))){
return ((function (pred__14340,expr__14341){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__14340,expr__14341){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__14340,expr__14341))
);

return deferred.addErrback(((function (deferred,pred__14340,expr__14341){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__14340,expr__14341))
);
});
;})(pred__14340,expr__14341))
} else {
if(cljs.core.truth_(pred__14340.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__14341))){
return ((function (pred__14340,expr__14341){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e14344){if((e14344 instanceof Error)){
var e = e14344;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14344;

}
}})());
});
;})(pred__14340,expr__14341))
} else {
return ((function (pred__14340,expr__14341){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__14340,expr__14341))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__14345,callback){
var map__14348 = p__14345;
var map__14348__$1 = ((((!((map__14348 == null)))?((((map__14348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14348):map__14348);
var file_msg = map__14348__$1;
var request_url = cljs.core.get.call(null,map__14348__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__14348,map__14348__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__14348,map__14348__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__){
return (function (state_14372){
var state_val_14373 = (state_14372[(1)]);
if((state_val_14373 === (7))){
var inst_14368 = (state_14372[(2)]);
var state_14372__$1 = state_14372;
var statearr_14374_14394 = state_14372__$1;
(statearr_14374_14394[(2)] = inst_14368);

(statearr_14374_14394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (1))){
var state_14372__$1 = state_14372;
var statearr_14375_14395 = state_14372__$1;
(statearr_14375_14395[(2)] = null);

(statearr_14375_14395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (4))){
var inst_14352 = (state_14372[(7)]);
var inst_14352__$1 = (state_14372[(2)]);
var state_14372__$1 = (function (){var statearr_14376 = state_14372;
(statearr_14376[(7)] = inst_14352__$1);

return statearr_14376;
})();
if(cljs.core.truth_(inst_14352__$1)){
var statearr_14377_14396 = state_14372__$1;
(statearr_14377_14396[(1)] = (5));

} else {
var statearr_14378_14397 = state_14372__$1;
(statearr_14378_14397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (6))){
var state_14372__$1 = state_14372;
var statearr_14379_14398 = state_14372__$1;
(statearr_14379_14398[(2)] = null);

(statearr_14379_14398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (3))){
var inst_14370 = (state_14372[(2)]);
var state_14372__$1 = state_14372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14372__$1,inst_14370);
} else {
if((state_val_14373 === (2))){
var state_14372__$1 = state_14372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14372__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_14373 === (11))){
var inst_14364 = (state_14372[(2)]);
var state_14372__$1 = (function (){var statearr_14380 = state_14372;
(statearr_14380[(8)] = inst_14364);

return statearr_14380;
})();
var statearr_14381_14399 = state_14372__$1;
(statearr_14381_14399[(2)] = null);

(statearr_14381_14399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (9))){
var inst_14356 = (state_14372[(9)]);
var inst_14358 = (state_14372[(10)]);
var inst_14360 = inst_14358.call(null,inst_14356);
var state_14372__$1 = state_14372;
var statearr_14382_14400 = state_14372__$1;
(statearr_14382_14400[(2)] = inst_14360);

(statearr_14382_14400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (5))){
var inst_14352 = (state_14372[(7)]);
var inst_14354 = figwheel.client.file_reloading.blocking_load.call(null,inst_14352);
var state_14372__$1 = state_14372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14372__$1,(8),inst_14354);
} else {
if((state_val_14373 === (10))){
var inst_14356 = (state_14372[(9)]);
var inst_14362 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_14356);
var state_14372__$1 = state_14372;
var statearr_14383_14401 = state_14372__$1;
(statearr_14383_14401[(2)] = inst_14362);

(statearr_14383_14401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (8))){
var inst_14352 = (state_14372[(7)]);
var inst_14358 = (state_14372[(10)]);
var inst_14356 = (state_14372[(2)]);
var inst_14357 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_14358__$1 = cljs.core.get.call(null,inst_14357,inst_14352);
var state_14372__$1 = (function (){var statearr_14384 = state_14372;
(statearr_14384[(9)] = inst_14356);

(statearr_14384[(10)] = inst_14358__$1);

return statearr_14384;
})();
if(cljs.core.truth_(inst_14358__$1)){
var statearr_14385_14402 = state_14372__$1;
(statearr_14385_14402[(1)] = (9));

} else {
var statearr_14386_14403 = state_14372__$1;
(statearr_14386_14403[(1)] = (10));

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
});})(c__9361__auto__))
;
return ((function (switch__9249__auto__,c__9361__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__9250__auto__ = null;
var figwheel$client$file_reloading$state_machine__9250__auto____0 = (function (){
var statearr_14390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14390[(0)] = figwheel$client$file_reloading$state_machine__9250__auto__);

(statearr_14390[(1)] = (1));

return statearr_14390;
});
var figwheel$client$file_reloading$state_machine__9250__auto____1 = (function (state_14372){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_14372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e14391){if((e14391 instanceof Object)){
var ex__9253__auto__ = e14391;
var statearr_14392_14404 = state_14372;
(statearr_14392_14404[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14405 = state_14372;
state_14372 = G__14405;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__9250__auto__ = function(state_14372){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__9250__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__9250__auto____1.call(this,state_14372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__9250__auto____0;
figwheel$client$file_reloading$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__9250__auto____1;
return figwheel$client$file_reloading$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__))
})();
var state__9363__auto__ = (function (){var statearr_14393 = f__9362__auto__.call(null);
(statearr_14393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_14393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__))
);

return c__9361__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__14406,callback){
var map__14409 = p__14406;
var map__14409__$1 = ((((!((map__14409 == null)))?((((map__14409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14409):map__14409);
var file_msg = map__14409__$1;
var namespace = cljs.core.get.call(null,map__14409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__14409,map__14409__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__14409,map__14409__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__14411){
var map__14414 = p__14411;
var map__14414__$1 = ((((!((map__14414 == null)))?((((map__14414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14414):map__14414);
var file_msg = map__14414__$1;
var namespace = cljs.core.get.call(null,map__14414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__14416){
var map__14419 = p__14416;
var map__14419__$1 = ((((!((map__14419 == null)))?((((map__14419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14419):map__14419);
var file_msg = map__14419__$1;
var namespace = cljs.core.get.call(null,map__14419__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__6802__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__6802__auto__){
var or__6814__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
var or__6814__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6814__auto____$1)){
return or__6814__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__6802__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__14421,callback){
var map__14424 = p__14421;
var map__14424__$1 = ((((!((map__14424 == null)))?((((map__14424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14424):map__14424);
var file_msg = map__14424__$1;
var request_url = cljs.core.get.call(null,map__14424__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__14424__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__9361__auto___14528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___14528,out){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___14528,out){
return (function (state_14510){
var state_val_14511 = (state_14510[(1)]);
if((state_val_14511 === (1))){
var inst_14484 = cljs.core.seq.call(null,files);
var inst_14485 = cljs.core.first.call(null,inst_14484);
var inst_14486 = cljs.core.next.call(null,inst_14484);
var inst_14487 = files;
var state_14510__$1 = (function (){var statearr_14512 = state_14510;
(statearr_14512[(7)] = inst_14487);

(statearr_14512[(8)] = inst_14486);

(statearr_14512[(9)] = inst_14485);

return statearr_14512;
})();
var statearr_14513_14529 = state_14510__$1;
(statearr_14513_14529[(2)] = null);

(statearr_14513_14529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (2))){
var inst_14487 = (state_14510[(7)]);
var inst_14493 = (state_14510[(10)]);
var inst_14492 = cljs.core.seq.call(null,inst_14487);
var inst_14493__$1 = cljs.core.first.call(null,inst_14492);
var inst_14494 = cljs.core.next.call(null,inst_14492);
var inst_14495 = (inst_14493__$1 == null);
var inst_14496 = cljs.core.not.call(null,inst_14495);
var state_14510__$1 = (function (){var statearr_14514 = state_14510;
(statearr_14514[(11)] = inst_14494);

(statearr_14514[(10)] = inst_14493__$1);

return statearr_14514;
})();
if(inst_14496){
var statearr_14515_14530 = state_14510__$1;
(statearr_14515_14530[(1)] = (4));

} else {
var statearr_14516_14531 = state_14510__$1;
(statearr_14516_14531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (3))){
var inst_14508 = (state_14510[(2)]);
var state_14510__$1 = state_14510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14510__$1,inst_14508);
} else {
if((state_val_14511 === (4))){
var inst_14493 = (state_14510[(10)]);
var inst_14498 = figwheel.client.file_reloading.reload_js_file.call(null,inst_14493);
var state_14510__$1 = state_14510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14510__$1,(7),inst_14498);
} else {
if((state_val_14511 === (5))){
var inst_14504 = cljs.core.async.close_BANG_.call(null,out);
var state_14510__$1 = state_14510;
var statearr_14517_14532 = state_14510__$1;
(statearr_14517_14532[(2)] = inst_14504);

(statearr_14517_14532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (6))){
var inst_14506 = (state_14510[(2)]);
var state_14510__$1 = state_14510;
var statearr_14518_14533 = state_14510__$1;
(statearr_14518_14533[(2)] = inst_14506);

(statearr_14518_14533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (7))){
var inst_14494 = (state_14510[(11)]);
var inst_14500 = (state_14510[(2)]);
var inst_14501 = cljs.core.async.put_BANG_.call(null,out,inst_14500);
var inst_14487 = inst_14494;
var state_14510__$1 = (function (){var statearr_14519 = state_14510;
(statearr_14519[(7)] = inst_14487);

(statearr_14519[(12)] = inst_14501);

return statearr_14519;
})();
var statearr_14520_14534 = state_14510__$1;
(statearr_14520_14534[(2)] = null);

(statearr_14520_14534[(1)] = (2));


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
});})(c__9361__auto___14528,out))
;
return ((function (switch__9249__auto__,c__9361__auto___14528,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto____0 = (function (){
var statearr_14524 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14524[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto__);

(statearr_14524[(1)] = (1));

return statearr_14524;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto____1 = (function (state_14510){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_14510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e14525){if((e14525 instanceof Object)){
var ex__9253__auto__ = e14525;
var statearr_14526_14535 = state_14510;
(statearr_14526_14535[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14536 = state_14510;
state_14510 = G__14536;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto__ = function(state_14510){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto____1.call(this,state_14510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___14528,out))
})();
var state__9363__auto__ = (function (){var statearr_14527 = f__9362__auto__.call(null);
(statearr_14527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___14528);

return statearr_14527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___14528,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__14537,opts){
var map__14541 = p__14537;
var map__14541__$1 = ((((!((map__14541 == null)))?((((map__14541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14541):map__14541);
var eval_body = cljs.core.get.call(null,map__14541__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__14541__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__6802__auto__ = eval_body;
if(cljs.core.truth_(and__6802__auto__)){
return typeof eval_body === 'string';
} else {
return and__6802__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e14543){var e = e14543;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__14544_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14544_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__14553){
var vec__14554 = p__14553;
var k = cljs.core.nth.call(null,vec__14554,(0),null);
var v = cljs.core.nth.call(null,vec__14554,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__14557){
var vec__14558 = p__14557;
var k = cljs.core.nth.call(null,vec__14558,(0),null);
var v = cljs.core.nth.call(null,vec__14558,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__14564,p__14565){
var map__14813 = p__14564;
var map__14813__$1 = ((((!((map__14813 == null)))?((((map__14813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14813):map__14813);
var opts = map__14813__$1;
var before_jsload = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__14814 = p__14565;
var map__14814__$1 = ((((!((map__14814 == null)))?((((map__14814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14814):map__14814);
var msg = map__14814__$1;
var files = cljs.core.get.call(null,map__14814__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__14814__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__14814__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_14968){
var state_val_14969 = (state_14968[(1)]);
if((state_val_14969 === (7))){
var inst_14831 = (state_14968[(7)]);
var inst_14830 = (state_14968[(8)]);
var inst_14828 = (state_14968[(9)]);
var inst_14829 = (state_14968[(10)]);
var inst_14836 = cljs.core._nth.call(null,inst_14829,inst_14831);
var inst_14837 = figwheel.client.file_reloading.eval_body.call(null,inst_14836,opts);
var inst_14838 = (inst_14831 + (1));
var tmp14970 = inst_14830;
var tmp14971 = inst_14828;
var tmp14972 = inst_14829;
var inst_14828__$1 = tmp14971;
var inst_14829__$1 = tmp14972;
var inst_14830__$1 = tmp14970;
var inst_14831__$1 = inst_14838;
var state_14968__$1 = (function (){var statearr_14973 = state_14968;
(statearr_14973[(7)] = inst_14831__$1);

(statearr_14973[(8)] = inst_14830__$1);

(statearr_14973[(9)] = inst_14828__$1);

(statearr_14973[(10)] = inst_14829__$1);

(statearr_14973[(11)] = inst_14837);

return statearr_14973;
})();
var statearr_14974_15060 = state_14968__$1;
(statearr_14974_15060[(2)] = null);

(statearr_14974_15060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (20))){
var inst_14871 = (state_14968[(12)]);
var inst_14879 = figwheel.client.file_reloading.sort_files.call(null,inst_14871);
var state_14968__$1 = state_14968;
var statearr_14975_15061 = state_14968__$1;
(statearr_14975_15061[(2)] = inst_14879);

(statearr_14975_15061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (27))){
var state_14968__$1 = state_14968;
var statearr_14976_15062 = state_14968__$1;
(statearr_14976_15062[(2)] = null);

(statearr_14976_15062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (1))){
var inst_14820 = (state_14968[(13)]);
var inst_14817 = before_jsload.call(null,files);
var inst_14818 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_14819 = (function (){return ((function (inst_14820,inst_14817,inst_14818,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14561_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14561_SHARP_);
});
;})(inst_14820,inst_14817,inst_14818,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14820__$1 = cljs.core.filter.call(null,inst_14819,files);
var inst_14821 = cljs.core.not_empty.call(null,inst_14820__$1);
var state_14968__$1 = (function (){var statearr_14977 = state_14968;
(statearr_14977[(13)] = inst_14820__$1);

(statearr_14977[(14)] = inst_14817);

(statearr_14977[(15)] = inst_14818);

return statearr_14977;
})();
if(cljs.core.truth_(inst_14821)){
var statearr_14978_15063 = state_14968__$1;
(statearr_14978_15063[(1)] = (2));

} else {
var statearr_14979_15064 = state_14968__$1;
(statearr_14979_15064[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (24))){
var state_14968__$1 = state_14968;
var statearr_14980_15065 = state_14968__$1;
(statearr_14980_15065[(2)] = null);

(statearr_14980_15065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (39))){
var inst_14921 = (state_14968[(16)]);
var state_14968__$1 = state_14968;
var statearr_14981_15066 = state_14968__$1;
(statearr_14981_15066[(2)] = inst_14921);

(statearr_14981_15066[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (46))){
var inst_14963 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
var statearr_14982_15067 = state_14968__$1;
(statearr_14982_15067[(2)] = inst_14963);

(statearr_14982_15067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (4))){
var inst_14865 = (state_14968[(2)]);
var inst_14866 = cljs.core.List.EMPTY;
var inst_14867 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_14866);
var inst_14868 = (function (){return ((function (inst_14865,inst_14866,inst_14867,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14562_SHARP_){
var and__6802__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14562_SHARP_);
if(cljs.core.truth_(and__6802__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14562_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__14562_SHARP_)));
} else {
return and__6802__auto__;
}
});
;})(inst_14865,inst_14866,inst_14867,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14869 = cljs.core.filter.call(null,inst_14868,files);
var inst_14870 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_14871 = cljs.core.concat.call(null,inst_14869,inst_14870);
var state_14968__$1 = (function (){var statearr_14983 = state_14968;
(statearr_14983[(17)] = inst_14867);

(statearr_14983[(18)] = inst_14865);

(statearr_14983[(12)] = inst_14871);

return statearr_14983;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_14984_15068 = state_14968__$1;
(statearr_14984_15068[(1)] = (16));

} else {
var statearr_14985_15069 = state_14968__$1;
(statearr_14985_15069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (15))){
var inst_14855 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
var statearr_14986_15070 = state_14968__$1;
(statearr_14986_15070[(2)] = inst_14855);

(statearr_14986_15070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (21))){
var inst_14881 = (state_14968[(19)]);
var inst_14881__$1 = (state_14968[(2)]);
var inst_14882 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14881__$1);
var state_14968__$1 = (function (){var statearr_14987 = state_14968;
(statearr_14987[(19)] = inst_14881__$1);

return statearr_14987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14968__$1,(22),inst_14882);
} else {
if((state_val_14969 === (31))){
var inst_14966 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14968__$1,inst_14966);
} else {
if((state_val_14969 === (32))){
var inst_14921 = (state_14968[(16)]);
var inst_14926 = inst_14921.cljs$lang$protocol_mask$partition0$;
var inst_14927 = (inst_14926 & (64));
var inst_14928 = inst_14921.cljs$core$ISeq$;
var inst_14929 = (cljs.core.PROTOCOL_SENTINEL === inst_14928);
var inst_14930 = (inst_14927) || (inst_14929);
var state_14968__$1 = state_14968;
if(cljs.core.truth_(inst_14930)){
var statearr_14988_15071 = state_14968__$1;
(statearr_14988_15071[(1)] = (35));

} else {
var statearr_14989_15072 = state_14968__$1;
(statearr_14989_15072[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (40))){
var inst_14943 = (state_14968[(20)]);
var inst_14942 = (state_14968[(2)]);
var inst_14943__$1 = cljs.core.get.call(null,inst_14942,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_14944 = cljs.core.get.call(null,inst_14942,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_14945 = cljs.core.not_empty.call(null,inst_14943__$1);
var state_14968__$1 = (function (){var statearr_14990 = state_14968;
(statearr_14990[(20)] = inst_14943__$1);

(statearr_14990[(21)] = inst_14944);

return statearr_14990;
})();
if(cljs.core.truth_(inst_14945)){
var statearr_14991_15073 = state_14968__$1;
(statearr_14991_15073[(1)] = (41));

} else {
var statearr_14992_15074 = state_14968__$1;
(statearr_14992_15074[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (33))){
var state_14968__$1 = state_14968;
var statearr_14993_15075 = state_14968__$1;
(statearr_14993_15075[(2)] = false);

(statearr_14993_15075[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (13))){
var inst_14841 = (state_14968[(22)]);
var inst_14845 = cljs.core.chunk_first.call(null,inst_14841);
var inst_14846 = cljs.core.chunk_rest.call(null,inst_14841);
var inst_14847 = cljs.core.count.call(null,inst_14845);
var inst_14828 = inst_14846;
var inst_14829 = inst_14845;
var inst_14830 = inst_14847;
var inst_14831 = (0);
var state_14968__$1 = (function (){var statearr_14994 = state_14968;
(statearr_14994[(7)] = inst_14831);

(statearr_14994[(8)] = inst_14830);

(statearr_14994[(9)] = inst_14828);

(statearr_14994[(10)] = inst_14829);

return statearr_14994;
})();
var statearr_14995_15076 = state_14968__$1;
(statearr_14995_15076[(2)] = null);

(statearr_14995_15076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (22))){
var inst_14884 = (state_14968[(23)]);
var inst_14889 = (state_14968[(24)]);
var inst_14881 = (state_14968[(19)]);
var inst_14885 = (state_14968[(25)]);
var inst_14884__$1 = (state_14968[(2)]);
var inst_14885__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14884__$1);
var inst_14886 = (function (){var all_files = inst_14881;
var res_SINGLEQUOTE_ = inst_14884__$1;
var res = inst_14885__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_14884,inst_14889,inst_14881,inst_14885,inst_14884__$1,inst_14885__$1,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14563_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14563_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_14884,inst_14889,inst_14881,inst_14885,inst_14884__$1,inst_14885__$1,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14887 = cljs.core.filter.call(null,inst_14886,inst_14884__$1);
var inst_14888 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_14889__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14888);
var inst_14890 = cljs.core.not_empty.call(null,inst_14889__$1);
var state_14968__$1 = (function (){var statearr_14996 = state_14968;
(statearr_14996[(23)] = inst_14884__$1);

(statearr_14996[(26)] = inst_14887);

(statearr_14996[(24)] = inst_14889__$1);

(statearr_14996[(25)] = inst_14885__$1);

return statearr_14996;
})();
if(cljs.core.truth_(inst_14890)){
var statearr_14997_15077 = state_14968__$1;
(statearr_14997_15077[(1)] = (23));

} else {
var statearr_14998_15078 = state_14968__$1;
(statearr_14998_15078[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (36))){
var state_14968__$1 = state_14968;
var statearr_14999_15079 = state_14968__$1;
(statearr_14999_15079[(2)] = false);

(statearr_14999_15079[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (41))){
var inst_14943 = (state_14968[(20)]);
var inst_14947 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_14948 = cljs.core.map.call(null,inst_14947,inst_14943);
var inst_14949 = cljs.core.pr_str.call(null,inst_14948);
var inst_14950 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14949)].join('');
var inst_14951 = figwheel.client.utils.log.call(null,inst_14950);
var state_14968__$1 = state_14968;
var statearr_15000_15080 = state_14968__$1;
(statearr_15000_15080[(2)] = inst_14951);

(statearr_15000_15080[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (43))){
var inst_14944 = (state_14968[(21)]);
var inst_14954 = (state_14968[(2)]);
var inst_14955 = cljs.core.not_empty.call(null,inst_14944);
var state_14968__$1 = (function (){var statearr_15001 = state_14968;
(statearr_15001[(27)] = inst_14954);

return statearr_15001;
})();
if(cljs.core.truth_(inst_14955)){
var statearr_15002_15081 = state_14968__$1;
(statearr_15002_15081[(1)] = (44));

} else {
var statearr_15003_15082 = state_14968__$1;
(statearr_15003_15082[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (29))){
var inst_14884 = (state_14968[(23)]);
var inst_14887 = (state_14968[(26)]);
var inst_14889 = (state_14968[(24)]);
var inst_14881 = (state_14968[(19)]);
var inst_14885 = (state_14968[(25)]);
var inst_14921 = (state_14968[(16)]);
var inst_14917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_14920 = (function (){var all_files = inst_14881;
var res_SINGLEQUOTE_ = inst_14884;
var res = inst_14885;
var files_not_loaded = inst_14887;
var dependencies_that_loaded = inst_14889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14884,inst_14887,inst_14889,inst_14881,inst_14885,inst_14921,inst_14917,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14919){
var map__15004 = p__14919;
var map__15004__$1 = ((((!((map__15004 == null)))?((((map__15004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15004):map__15004);
var namespace = cljs.core.get.call(null,map__15004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14884,inst_14887,inst_14889,inst_14881,inst_14885,inst_14921,inst_14917,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14921__$1 = cljs.core.group_by.call(null,inst_14920,inst_14887);
var inst_14923 = (inst_14921__$1 == null);
var inst_14924 = cljs.core.not.call(null,inst_14923);
var state_14968__$1 = (function (){var statearr_15006 = state_14968;
(statearr_15006[(28)] = inst_14917);

(statearr_15006[(16)] = inst_14921__$1);

return statearr_15006;
})();
if(inst_14924){
var statearr_15007_15083 = state_14968__$1;
(statearr_15007_15083[(1)] = (32));

} else {
var statearr_15008_15084 = state_14968__$1;
(statearr_15008_15084[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (44))){
var inst_14944 = (state_14968[(21)]);
var inst_14957 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14944);
var inst_14958 = cljs.core.pr_str.call(null,inst_14957);
var inst_14959 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14958)].join('');
var inst_14960 = figwheel.client.utils.log.call(null,inst_14959);
var state_14968__$1 = state_14968;
var statearr_15009_15085 = state_14968__$1;
(statearr_15009_15085[(2)] = inst_14960);

(statearr_15009_15085[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (6))){
var inst_14862 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
var statearr_15010_15086 = state_14968__$1;
(statearr_15010_15086[(2)] = inst_14862);

(statearr_15010_15086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (28))){
var inst_14887 = (state_14968[(26)]);
var inst_14914 = (state_14968[(2)]);
var inst_14915 = cljs.core.not_empty.call(null,inst_14887);
var state_14968__$1 = (function (){var statearr_15011 = state_14968;
(statearr_15011[(29)] = inst_14914);

return statearr_15011;
})();
if(cljs.core.truth_(inst_14915)){
var statearr_15012_15087 = state_14968__$1;
(statearr_15012_15087[(1)] = (29));

} else {
var statearr_15013_15088 = state_14968__$1;
(statearr_15013_15088[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (25))){
var inst_14885 = (state_14968[(25)]);
var inst_14901 = (state_14968[(2)]);
var inst_14902 = cljs.core.not_empty.call(null,inst_14885);
var state_14968__$1 = (function (){var statearr_15014 = state_14968;
(statearr_15014[(30)] = inst_14901);

return statearr_15014;
})();
if(cljs.core.truth_(inst_14902)){
var statearr_15015_15089 = state_14968__$1;
(statearr_15015_15089[(1)] = (26));

} else {
var statearr_15016_15090 = state_14968__$1;
(statearr_15016_15090[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (34))){
var inst_14937 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
if(cljs.core.truth_(inst_14937)){
var statearr_15017_15091 = state_14968__$1;
(statearr_15017_15091[(1)] = (38));

} else {
var statearr_15018_15092 = state_14968__$1;
(statearr_15018_15092[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (17))){
var state_14968__$1 = state_14968;
var statearr_15019_15093 = state_14968__$1;
(statearr_15019_15093[(2)] = recompile_dependents);

(statearr_15019_15093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (3))){
var state_14968__$1 = state_14968;
var statearr_15020_15094 = state_14968__$1;
(statearr_15020_15094[(2)] = null);

(statearr_15020_15094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (12))){
var inst_14858 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
var statearr_15021_15095 = state_14968__$1;
(statearr_15021_15095[(2)] = inst_14858);

(statearr_15021_15095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (2))){
var inst_14820 = (state_14968[(13)]);
var inst_14827 = cljs.core.seq.call(null,inst_14820);
var inst_14828 = inst_14827;
var inst_14829 = null;
var inst_14830 = (0);
var inst_14831 = (0);
var state_14968__$1 = (function (){var statearr_15022 = state_14968;
(statearr_15022[(7)] = inst_14831);

(statearr_15022[(8)] = inst_14830);

(statearr_15022[(9)] = inst_14828);

(statearr_15022[(10)] = inst_14829);

return statearr_15022;
})();
var statearr_15023_15096 = state_14968__$1;
(statearr_15023_15096[(2)] = null);

(statearr_15023_15096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (23))){
var inst_14884 = (state_14968[(23)]);
var inst_14887 = (state_14968[(26)]);
var inst_14889 = (state_14968[(24)]);
var inst_14881 = (state_14968[(19)]);
var inst_14885 = (state_14968[(25)]);
var inst_14892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_14894 = (function (){var all_files = inst_14881;
var res_SINGLEQUOTE_ = inst_14884;
var res = inst_14885;
var files_not_loaded = inst_14887;
var dependencies_that_loaded = inst_14889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14884,inst_14887,inst_14889,inst_14881,inst_14885,inst_14892,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14893){
var map__15024 = p__14893;
var map__15024__$1 = ((((!((map__15024 == null)))?((((map__15024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15024):map__15024);
var request_url = cljs.core.get.call(null,map__15024__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14884,inst_14887,inst_14889,inst_14881,inst_14885,inst_14892,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14895 = cljs.core.reverse.call(null,inst_14889);
var inst_14896 = cljs.core.map.call(null,inst_14894,inst_14895);
var inst_14897 = cljs.core.pr_str.call(null,inst_14896);
var inst_14898 = figwheel.client.utils.log.call(null,inst_14897);
var state_14968__$1 = (function (){var statearr_15026 = state_14968;
(statearr_15026[(31)] = inst_14892);

return statearr_15026;
})();
var statearr_15027_15097 = state_14968__$1;
(statearr_15027_15097[(2)] = inst_14898);

(statearr_15027_15097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (35))){
var state_14968__$1 = state_14968;
var statearr_15028_15098 = state_14968__$1;
(statearr_15028_15098[(2)] = true);

(statearr_15028_15098[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (19))){
var inst_14871 = (state_14968[(12)]);
var inst_14877 = figwheel.client.file_reloading.expand_files.call(null,inst_14871);
var state_14968__$1 = state_14968;
var statearr_15029_15099 = state_14968__$1;
(statearr_15029_15099[(2)] = inst_14877);

(statearr_15029_15099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (11))){
var state_14968__$1 = state_14968;
var statearr_15030_15100 = state_14968__$1;
(statearr_15030_15100[(2)] = null);

(statearr_15030_15100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (9))){
var inst_14860 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
var statearr_15031_15101 = state_14968__$1;
(statearr_15031_15101[(2)] = inst_14860);

(statearr_15031_15101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (5))){
var inst_14831 = (state_14968[(7)]);
var inst_14830 = (state_14968[(8)]);
var inst_14833 = (inst_14831 < inst_14830);
var inst_14834 = inst_14833;
var state_14968__$1 = state_14968;
if(cljs.core.truth_(inst_14834)){
var statearr_15032_15102 = state_14968__$1;
(statearr_15032_15102[(1)] = (7));

} else {
var statearr_15033_15103 = state_14968__$1;
(statearr_15033_15103[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (14))){
var inst_14841 = (state_14968[(22)]);
var inst_14850 = cljs.core.first.call(null,inst_14841);
var inst_14851 = figwheel.client.file_reloading.eval_body.call(null,inst_14850,opts);
var inst_14852 = cljs.core.next.call(null,inst_14841);
var inst_14828 = inst_14852;
var inst_14829 = null;
var inst_14830 = (0);
var inst_14831 = (0);
var state_14968__$1 = (function (){var statearr_15034 = state_14968;
(statearr_15034[(7)] = inst_14831);

(statearr_15034[(8)] = inst_14830);

(statearr_15034[(9)] = inst_14828);

(statearr_15034[(10)] = inst_14829);

(statearr_15034[(32)] = inst_14851);

return statearr_15034;
})();
var statearr_15035_15104 = state_14968__$1;
(statearr_15035_15104[(2)] = null);

(statearr_15035_15104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (45))){
var state_14968__$1 = state_14968;
var statearr_15036_15105 = state_14968__$1;
(statearr_15036_15105[(2)] = null);

(statearr_15036_15105[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (26))){
var inst_14884 = (state_14968[(23)]);
var inst_14887 = (state_14968[(26)]);
var inst_14889 = (state_14968[(24)]);
var inst_14881 = (state_14968[(19)]);
var inst_14885 = (state_14968[(25)]);
var inst_14904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_14906 = (function (){var all_files = inst_14881;
var res_SINGLEQUOTE_ = inst_14884;
var res = inst_14885;
var files_not_loaded = inst_14887;
var dependencies_that_loaded = inst_14889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14884,inst_14887,inst_14889,inst_14881,inst_14885,inst_14904,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14905){
var map__15037 = p__14905;
var map__15037__$1 = ((((!((map__15037 == null)))?((((map__15037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15037):map__15037);
var namespace = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14884,inst_14887,inst_14889,inst_14881,inst_14885,inst_14904,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14907 = cljs.core.map.call(null,inst_14906,inst_14885);
var inst_14908 = cljs.core.pr_str.call(null,inst_14907);
var inst_14909 = figwheel.client.utils.log.call(null,inst_14908);
var inst_14910 = (function (){var all_files = inst_14881;
var res_SINGLEQUOTE_ = inst_14884;
var res = inst_14885;
var files_not_loaded = inst_14887;
var dependencies_that_loaded = inst_14889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14884,inst_14887,inst_14889,inst_14881,inst_14885,inst_14904,inst_14906,inst_14907,inst_14908,inst_14909,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14884,inst_14887,inst_14889,inst_14881,inst_14885,inst_14904,inst_14906,inst_14907,inst_14908,inst_14909,state_val_14969,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14911 = setTimeout(inst_14910,(10));
var state_14968__$1 = (function (){var statearr_15039 = state_14968;
(statearr_15039[(33)] = inst_14909);

(statearr_15039[(34)] = inst_14904);

return statearr_15039;
})();
var statearr_15040_15106 = state_14968__$1;
(statearr_15040_15106[(2)] = inst_14911);

(statearr_15040_15106[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (16))){
var state_14968__$1 = state_14968;
var statearr_15041_15107 = state_14968__$1;
(statearr_15041_15107[(2)] = reload_dependents);

(statearr_15041_15107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (38))){
var inst_14921 = (state_14968[(16)]);
var inst_14939 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14921);
var state_14968__$1 = state_14968;
var statearr_15042_15108 = state_14968__$1;
(statearr_15042_15108[(2)] = inst_14939);

(statearr_15042_15108[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (30))){
var state_14968__$1 = state_14968;
var statearr_15043_15109 = state_14968__$1;
(statearr_15043_15109[(2)] = null);

(statearr_15043_15109[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (10))){
var inst_14841 = (state_14968[(22)]);
var inst_14843 = cljs.core.chunked_seq_QMARK_.call(null,inst_14841);
var state_14968__$1 = state_14968;
if(inst_14843){
var statearr_15044_15110 = state_14968__$1;
(statearr_15044_15110[(1)] = (13));

} else {
var statearr_15045_15111 = state_14968__$1;
(statearr_15045_15111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (18))){
var inst_14875 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
if(cljs.core.truth_(inst_14875)){
var statearr_15046_15112 = state_14968__$1;
(statearr_15046_15112[(1)] = (19));

} else {
var statearr_15047_15113 = state_14968__$1;
(statearr_15047_15113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (42))){
var state_14968__$1 = state_14968;
var statearr_15048_15114 = state_14968__$1;
(statearr_15048_15114[(2)] = null);

(statearr_15048_15114[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (37))){
var inst_14934 = (state_14968[(2)]);
var state_14968__$1 = state_14968;
var statearr_15049_15115 = state_14968__$1;
(statearr_15049_15115[(2)] = inst_14934);

(statearr_15049_15115[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (8))){
var inst_14828 = (state_14968[(9)]);
var inst_14841 = (state_14968[(22)]);
var inst_14841__$1 = cljs.core.seq.call(null,inst_14828);
var state_14968__$1 = (function (){var statearr_15050 = state_14968;
(statearr_15050[(22)] = inst_14841__$1);

return statearr_15050;
})();
if(inst_14841__$1){
var statearr_15051_15116 = state_14968__$1;
(statearr_15051_15116[(1)] = (10));

} else {
var statearr_15052_15117 = state_14968__$1;
(statearr_15052_15117[(1)] = (11));

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
});})(c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__9249__auto__,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto____0 = (function (){
var statearr_15056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15056[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto__);

(statearr_15056[(1)] = (1));

return statearr_15056;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto____1 = (function (state_14968){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_14968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e15057){if((e15057 instanceof Object)){
var ex__9253__auto__ = e15057;
var statearr_15058_15118 = state_14968;
(statearr_15058_15118[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15119 = state_14968;
state_14968 = G__15119;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto__ = function(state_14968){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto____1.call(this,state_14968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__9363__auto__ = (function (){var statearr_15059 = f__9362__auto__.call(null);
(statearr_15059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_15059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__,map__14813,map__14813__$1,opts,before_jsload,on_jsload,reload_dependents,map__14814,map__14814__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__9361__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__15122,link){
var map__15125 = p__15122;
var map__15125__$1 = ((((!((map__15125 == null)))?((((map__15125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15125):map__15125);
var file = cljs.core.get.call(null,map__15125__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__15125,map__15125__$1,file){
return (function (p1__15120_SHARP_,p2__15121_SHARP_){
if(cljs.core._EQ_.call(null,p1__15120_SHARP_,p2__15121_SHARP_)){
return p1__15120_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__15125,map__15125__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__15131){
var map__15132 = p__15131;
var map__15132__$1 = ((((!((map__15132 == null)))?((((map__15132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15132):map__15132);
var match_length = cljs.core.get.call(null,map__15132__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__15132__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__15127_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__15127_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__15134_SHARP_,p2__15135_SHARP_){
return cljs.core.assoc.call(null,p1__15134_SHARP_,cljs.core.get.call(null,p2__15135_SHARP_,key),p2__15135_SHARP_);
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
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_15136 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_15136);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_15136);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__15137,p__15138){
var map__15143 = p__15137;
var map__15143__$1 = ((((!((map__15143 == null)))?((((map__15143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15143):map__15143);
var on_cssload = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__15144 = p__15138;
var map__15144__$1 = ((((!((map__15144 == null)))?((((map__15144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15144):map__15144);
var files_msg = map__15144__$1;
var files = cljs.core.get.call(null,map__15144__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map