// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15200 = arguments.length;
var i__7924__auto___15201 = (0);
while(true){
if((i__7924__auto___15201 < len__7923__auto___15200)){
args__7930__auto__.push((arguments[i__7924__auto___15201]));

var G__15202 = (i__7924__auto___15201 + (1));
i__7924__auto___15201 = G__15202;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq15199){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15199));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15204 = arguments.length;
var i__7924__auto___15205 = (0);
while(true){
if((i__7924__auto___15205 < len__7923__auto___15204)){
args__7930__auto__.push((arguments[i__7924__auto___15205]));

var G__15206 = (i__7924__auto___15205 + (1));
i__7924__auto___15205 = G__15206;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq15203){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15203));
});

var g_QMARK__15207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_15208 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15207){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15207))
,null));
var mkg_15209 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15207,g_15208){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15207,g_15208))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__15207,g_15208,mkg_15209){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__15207).call(null,x);
});})(g_QMARK__15207,g_15208,mkg_15209))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__15207,g_15208,mkg_15209){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_15209).call(null,gfn);
});})(g_QMARK__15207,g_15208,mkg_15209))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__15207,g_15208,mkg_15209){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_15208).call(null,generator);
});})(g_QMARK__15207,g_15208,mkg_15209))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__15171__auto___15229 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__15171__auto___15229){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15230 = arguments.length;
var i__7924__auto___15231 = (0);
while(true){
if((i__7924__auto___15231 < len__7923__auto___15230)){
args__7930__auto__.push((arguments[i__7924__auto___15231]));

var G__15232 = (i__7924__auto___15231 + (1));
i__7924__auto___15231 = G__15232;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15229))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15229){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15229),args);
});})(g__15171__auto___15229))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__15171__auto___15229){
return (function (seq15210){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15210));
});})(g__15171__auto___15229))
;


var g__15171__auto___15233 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__15171__auto___15233){
return (function cljs$spec$impl$gen$list(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15234 = arguments.length;
var i__7924__auto___15235 = (0);
while(true){
if((i__7924__auto___15235 < len__7923__auto___15234)){
args__7930__auto__.push((arguments[i__7924__auto___15235]));

var G__15236 = (i__7924__auto___15235 + (1));
i__7924__auto___15235 = G__15236;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15233))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15233){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15233),args);
});})(g__15171__auto___15233))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__15171__auto___15233){
return (function (seq15211){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15211));
});})(g__15171__auto___15233))
;


var g__15171__auto___15237 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__15171__auto___15237){
return (function cljs$spec$impl$gen$map(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15238 = arguments.length;
var i__7924__auto___15239 = (0);
while(true){
if((i__7924__auto___15239 < len__7923__auto___15238)){
args__7930__auto__.push((arguments[i__7924__auto___15239]));

var G__15240 = (i__7924__auto___15239 + (1));
i__7924__auto___15239 = G__15240;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15237))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15237){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15237),args);
});})(g__15171__auto___15237))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__15171__auto___15237){
return (function (seq15212){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15212));
});})(g__15171__auto___15237))
;


var g__15171__auto___15241 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__15171__auto___15241){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15242 = arguments.length;
var i__7924__auto___15243 = (0);
while(true){
if((i__7924__auto___15243 < len__7923__auto___15242)){
args__7930__auto__.push((arguments[i__7924__auto___15243]));

var G__15244 = (i__7924__auto___15243 + (1));
i__7924__auto___15243 = G__15244;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15241))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15241){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15241),args);
});})(g__15171__auto___15241))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__15171__auto___15241){
return (function (seq15213){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15213));
});})(g__15171__auto___15241))
;


var g__15171__auto___15245 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__15171__auto___15245){
return (function cljs$spec$impl$gen$set(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15246 = arguments.length;
var i__7924__auto___15247 = (0);
while(true){
if((i__7924__auto___15247 < len__7923__auto___15246)){
args__7930__auto__.push((arguments[i__7924__auto___15247]));

var G__15248 = (i__7924__auto___15247 + (1));
i__7924__auto___15247 = G__15248;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15245))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15245){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15245),args);
});})(g__15171__auto___15245))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__15171__auto___15245){
return (function (seq15214){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15214));
});})(g__15171__auto___15245))
;


var g__15171__auto___15249 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__15171__auto___15249){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15250 = arguments.length;
var i__7924__auto___15251 = (0);
while(true){
if((i__7924__auto___15251 < len__7923__auto___15250)){
args__7930__auto__.push((arguments[i__7924__auto___15251]));

var G__15252 = (i__7924__auto___15251 + (1));
i__7924__auto___15251 = G__15252;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15249))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15249){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15249),args);
});})(g__15171__auto___15249))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__15171__auto___15249){
return (function (seq15215){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15215));
});})(g__15171__auto___15249))
;


var g__15171__auto___15253 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__15171__auto___15253){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15254 = arguments.length;
var i__7924__auto___15255 = (0);
while(true){
if((i__7924__auto___15255 < len__7923__auto___15254)){
args__7930__auto__.push((arguments[i__7924__auto___15255]));

var G__15256 = (i__7924__auto___15255 + (1));
i__7924__auto___15255 = G__15256;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15253))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15253){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15253),args);
});})(g__15171__auto___15253))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__15171__auto___15253){
return (function (seq15216){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15216));
});})(g__15171__auto___15253))
;


var g__15171__auto___15257 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__15171__auto___15257){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15258 = arguments.length;
var i__7924__auto___15259 = (0);
while(true){
if((i__7924__auto___15259 < len__7923__auto___15258)){
args__7930__auto__.push((arguments[i__7924__auto___15259]));

var G__15260 = (i__7924__auto___15259 + (1));
i__7924__auto___15259 = G__15260;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15257))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15257){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15257),args);
});})(g__15171__auto___15257))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__15171__auto___15257){
return (function (seq15217){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15217));
});})(g__15171__auto___15257))
;


var g__15171__auto___15261 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__15171__auto___15261){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15262 = arguments.length;
var i__7924__auto___15263 = (0);
while(true){
if((i__7924__auto___15263 < len__7923__auto___15262)){
args__7930__auto__.push((arguments[i__7924__auto___15263]));

var G__15264 = (i__7924__auto___15263 + (1));
i__7924__auto___15263 = G__15264;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15261))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15261){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15261),args);
});})(g__15171__auto___15261))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__15171__auto___15261){
return (function (seq15218){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15218));
});})(g__15171__auto___15261))
;


var g__15171__auto___15265 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__15171__auto___15265){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15266 = arguments.length;
var i__7924__auto___15267 = (0);
while(true){
if((i__7924__auto___15267 < len__7923__auto___15266)){
args__7930__auto__.push((arguments[i__7924__auto___15267]));

var G__15268 = (i__7924__auto___15267 + (1));
i__7924__auto___15267 = G__15268;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15265))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15265){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15265),args);
});})(g__15171__auto___15265))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__15171__auto___15265){
return (function (seq15219){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15219));
});})(g__15171__auto___15265))
;


var g__15171__auto___15269 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__15171__auto___15269){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15270 = arguments.length;
var i__7924__auto___15271 = (0);
while(true){
if((i__7924__auto___15271 < len__7923__auto___15270)){
args__7930__auto__.push((arguments[i__7924__auto___15271]));

var G__15272 = (i__7924__auto___15271 + (1));
i__7924__auto___15271 = G__15272;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15269))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15269){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15269),args);
});})(g__15171__auto___15269))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__15171__auto___15269){
return (function (seq15220){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15220));
});})(g__15171__auto___15269))
;


var g__15171__auto___15273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__15171__auto___15273){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15274 = arguments.length;
var i__7924__auto___15275 = (0);
while(true){
if((i__7924__auto___15275 < len__7923__auto___15274)){
args__7930__auto__.push((arguments[i__7924__auto___15275]));

var G__15276 = (i__7924__auto___15275 + (1));
i__7924__auto___15275 = G__15276;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15273))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15273){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15273),args);
});})(g__15171__auto___15273))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__15171__auto___15273){
return (function (seq15221){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15221));
});})(g__15171__auto___15273))
;


var g__15171__auto___15277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__15171__auto___15277){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15278 = arguments.length;
var i__7924__auto___15279 = (0);
while(true){
if((i__7924__auto___15279 < len__7923__auto___15278)){
args__7930__auto__.push((arguments[i__7924__auto___15279]));

var G__15280 = (i__7924__auto___15279 + (1));
i__7924__auto___15279 = G__15280;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15277))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15277){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15277),args);
});})(g__15171__auto___15277))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__15171__auto___15277){
return (function (seq15222){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15222));
});})(g__15171__auto___15277))
;


var g__15171__auto___15281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__15171__auto___15281){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15282 = arguments.length;
var i__7924__auto___15283 = (0);
while(true){
if((i__7924__auto___15283 < len__7923__auto___15282)){
args__7930__auto__.push((arguments[i__7924__auto___15283]));

var G__15284 = (i__7924__auto___15283 + (1));
i__7924__auto___15283 = G__15284;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15281))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15281){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15281),args);
});})(g__15171__auto___15281))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__15171__auto___15281){
return (function (seq15223){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15223));
});})(g__15171__auto___15281))
;


var g__15171__auto___15285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__15171__auto___15285){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15286 = arguments.length;
var i__7924__auto___15287 = (0);
while(true){
if((i__7924__auto___15287 < len__7923__auto___15286)){
args__7930__auto__.push((arguments[i__7924__auto___15287]));

var G__15288 = (i__7924__auto___15287 + (1));
i__7924__auto___15287 = G__15288;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15285))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15285){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15285),args);
});})(g__15171__auto___15285))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__15171__auto___15285){
return (function (seq15224){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15224));
});})(g__15171__auto___15285))
;


var g__15171__auto___15289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__15171__auto___15289){
return (function cljs$spec$impl$gen$return(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15290 = arguments.length;
var i__7924__auto___15291 = (0);
while(true){
if((i__7924__auto___15291 < len__7923__auto___15290)){
args__7930__auto__.push((arguments[i__7924__auto___15291]));

var G__15292 = (i__7924__auto___15291 + (1));
i__7924__auto___15291 = G__15292;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15289))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15289){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15289),args);
});})(g__15171__auto___15289))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__15171__auto___15289){
return (function (seq15225){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15225));
});})(g__15171__auto___15289))
;


var g__15171__auto___15293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__15171__auto___15293){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15294 = arguments.length;
var i__7924__auto___15295 = (0);
while(true){
if((i__7924__auto___15295 < len__7923__auto___15294)){
args__7930__auto__.push((arguments[i__7924__auto___15295]));

var G__15296 = (i__7924__auto___15295 + (1));
i__7924__auto___15295 = G__15296;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15293))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15293){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15293),args);
});})(g__15171__auto___15293))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__15171__auto___15293){
return (function (seq15226){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15226));
});})(g__15171__auto___15293))
;


var g__15171__auto___15297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__15171__auto___15297){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15298 = arguments.length;
var i__7924__auto___15299 = (0);
while(true){
if((i__7924__auto___15299 < len__7923__auto___15298)){
args__7930__auto__.push((arguments[i__7924__auto___15299]));

var G__15300 = (i__7924__auto___15299 + (1));
i__7924__auto___15299 = G__15300;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15297))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15297){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15297),args);
});})(g__15171__auto___15297))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__15171__auto___15297){
return (function (seq15227){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15227));
});})(g__15171__auto___15297))
;


var g__15171__auto___15301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__15171__auto___15301){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15302 = arguments.length;
var i__7924__auto___15303 = (0);
while(true){
if((i__7924__auto___15303 < len__7923__auto___15302)){
args__7930__auto__.push((arguments[i__7924__auto___15303]));

var G__15304 = (i__7924__auto___15303 + (1));
i__7924__auto___15303 = G__15304;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15171__auto___15301))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15171__auto___15301){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15171__auto___15301),args);
});})(g__15171__auto___15301))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__15171__auto___15301){
return (function (seq15228){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15228));
});})(g__15171__auto___15301))
;

var g__15184__auto___15326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__15184__auto___15326){
return (function cljs$spec$impl$gen$any(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15327 = arguments.length;
var i__7924__auto___15328 = (0);
while(true){
if((i__7924__auto___15328 < len__7923__auto___15327)){
args__7930__auto__.push((arguments[i__7924__auto___15328]));

var G__15329 = (i__7924__auto___15328 + (1));
i__7924__auto___15328 = G__15329;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15326))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15326){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15326);
});})(g__15184__auto___15326))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__15184__auto___15326){
return (function (seq15305){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15305));
});})(g__15184__auto___15326))
;


var g__15184__auto___15330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__15184__auto___15330){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15331 = arguments.length;
var i__7924__auto___15332 = (0);
while(true){
if((i__7924__auto___15332 < len__7923__auto___15331)){
args__7930__auto__.push((arguments[i__7924__auto___15332]));

var G__15333 = (i__7924__auto___15332 + (1));
i__7924__auto___15332 = G__15333;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15330))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15330){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15330);
});})(g__15184__auto___15330))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__15184__auto___15330){
return (function (seq15306){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15306));
});})(g__15184__auto___15330))
;


var g__15184__auto___15334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__15184__auto___15334){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15335 = arguments.length;
var i__7924__auto___15336 = (0);
while(true){
if((i__7924__auto___15336 < len__7923__auto___15335)){
args__7930__auto__.push((arguments[i__7924__auto___15336]));

var G__15337 = (i__7924__auto___15336 + (1));
i__7924__auto___15336 = G__15337;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15334))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15334){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15334);
});})(g__15184__auto___15334))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__15184__auto___15334){
return (function (seq15307){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15307));
});})(g__15184__auto___15334))
;


var g__15184__auto___15338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__15184__auto___15338){
return (function cljs$spec$impl$gen$char(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15339 = arguments.length;
var i__7924__auto___15340 = (0);
while(true){
if((i__7924__auto___15340 < len__7923__auto___15339)){
args__7930__auto__.push((arguments[i__7924__auto___15340]));

var G__15341 = (i__7924__auto___15340 + (1));
i__7924__auto___15340 = G__15341;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15338))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15338){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15338);
});})(g__15184__auto___15338))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__15184__auto___15338){
return (function (seq15308){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15308));
});})(g__15184__auto___15338))
;


var g__15184__auto___15342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__15184__auto___15342){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15343 = arguments.length;
var i__7924__auto___15344 = (0);
while(true){
if((i__7924__auto___15344 < len__7923__auto___15343)){
args__7930__auto__.push((arguments[i__7924__auto___15344]));

var G__15345 = (i__7924__auto___15344 + (1));
i__7924__auto___15344 = G__15345;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15342))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15342){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15342);
});})(g__15184__auto___15342))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__15184__auto___15342){
return (function (seq15309){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15309));
});})(g__15184__auto___15342))
;


var g__15184__auto___15346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__15184__auto___15346){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15347 = arguments.length;
var i__7924__auto___15348 = (0);
while(true){
if((i__7924__auto___15348 < len__7923__auto___15347)){
args__7930__auto__.push((arguments[i__7924__auto___15348]));

var G__15349 = (i__7924__auto___15348 + (1));
i__7924__auto___15348 = G__15349;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15346))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15346){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15346);
});})(g__15184__auto___15346))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__15184__auto___15346){
return (function (seq15310){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15310));
});})(g__15184__auto___15346))
;


var g__15184__auto___15350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__15184__auto___15350){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15351 = arguments.length;
var i__7924__auto___15352 = (0);
while(true){
if((i__7924__auto___15352 < len__7923__auto___15351)){
args__7930__auto__.push((arguments[i__7924__auto___15352]));

var G__15353 = (i__7924__auto___15352 + (1));
i__7924__auto___15352 = G__15353;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15350))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15350){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15350);
});})(g__15184__auto___15350))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__15184__auto___15350){
return (function (seq15311){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15311));
});})(g__15184__auto___15350))
;


var g__15184__auto___15354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__15184__auto___15354){
return (function cljs$spec$impl$gen$double(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15355 = arguments.length;
var i__7924__auto___15356 = (0);
while(true){
if((i__7924__auto___15356 < len__7923__auto___15355)){
args__7930__auto__.push((arguments[i__7924__auto___15356]));

var G__15357 = (i__7924__auto___15356 + (1));
i__7924__auto___15356 = G__15357;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15354))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15354){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15354);
});})(g__15184__auto___15354))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__15184__auto___15354){
return (function (seq15312){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15312));
});})(g__15184__auto___15354))
;


var g__15184__auto___15358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__15184__auto___15358){
return (function cljs$spec$impl$gen$int(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15359 = arguments.length;
var i__7924__auto___15360 = (0);
while(true){
if((i__7924__auto___15360 < len__7923__auto___15359)){
args__7930__auto__.push((arguments[i__7924__auto___15360]));

var G__15361 = (i__7924__auto___15360 + (1));
i__7924__auto___15360 = G__15361;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15358))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15358){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15358);
});})(g__15184__auto___15358))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__15184__auto___15358){
return (function (seq15313){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15313));
});})(g__15184__auto___15358))
;


var g__15184__auto___15362 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__15184__auto___15362){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15363 = arguments.length;
var i__7924__auto___15364 = (0);
while(true){
if((i__7924__auto___15364 < len__7923__auto___15363)){
args__7930__auto__.push((arguments[i__7924__auto___15364]));

var G__15365 = (i__7924__auto___15364 + (1));
i__7924__auto___15364 = G__15365;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15362))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15362){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15362);
});})(g__15184__auto___15362))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__15184__auto___15362){
return (function (seq15314){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15314));
});})(g__15184__auto___15362))
;


var g__15184__auto___15366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__15184__auto___15366){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15367 = arguments.length;
var i__7924__auto___15368 = (0);
while(true){
if((i__7924__auto___15368 < len__7923__auto___15367)){
args__7930__auto__.push((arguments[i__7924__auto___15368]));

var G__15369 = (i__7924__auto___15368 + (1));
i__7924__auto___15368 = G__15369;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15366))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15366){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15366);
});})(g__15184__auto___15366))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__15184__auto___15366){
return (function (seq15315){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15315));
});})(g__15184__auto___15366))
;


var g__15184__auto___15370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__15184__auto___15370){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15371 = arguments.length;
var i__7924__auto___15372 = (0);
while(true){
if((i__7924__auto___15372 < len__7923__auto___15371)){
args__7930__auto__.push((arguments[i__7924__auto___15372]));

var G__15373 = (i__7924__auto___15372 + (1));
i__7924__auto___15372 = G__15373;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15370))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15370){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15370);
});})(g__15184__auto___15370))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__15184__auto___15370){
return (function (seq15316){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15316));
});})(g__15184__auto___15370))
;


var g__15184__auto___15374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__15184__auto___15374){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15375 = arguments.length;
var i__7924__auto___15376 = (0);
while(true){
if((i__7924__auto___15376 < len__7923__auto___15375)){
args__7930__auto__.push((arguments[i__7924__auto___15376]));

var G__15377 = (i__7924__auto___15376 + (1));
i__7924__auto___15376 = G__15377;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15374))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15374){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15374);
});})(g__15184__auto___15374))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__15184__auto___15374){
return (function (seq15317){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15317));
});})(g__15184__auto___15374))
;


var g__15184__auto___15378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__15184__auto___15378){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15379 = arguments.length;
var i__7924__auto___15380 = (0);
while(true){
if((i__7924__auto___15380 < len__7923__auto___15379)){
args__7930__auto__.push((arguments[i__7924__auto___15380]));

var G__15381 = (i__7924__auto___15380 + (1));
i__7924__auto___15380 = G__15381;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15378))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15378){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15378);
});})(g__15184__auto___15378))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__15184__auto___15378){
return (function (seq15318){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15318));
});})(g__15184__auto___15378))
;


var g__15184__auto___15382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__15184__auto___15382){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15383 = arguments.length;
var i__7924__auto___15384 = (0);
while(true){
if((i__7924__auto___15384 < len__7923__auto___15383)){
args__7930__auto__.push((arguments[i__7924__auto___15384]));

var G__15385 = (i__7924__auto___15384 + (1));
i__7924__auto___15384 = G__15385;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15382))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15382){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15382);
});})(g__15184__auto___15382))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__15184__auto___15382){
return (function (seq15319){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15319));
});})(g__15184__auto___15382))
;


var g__15184__auto___15386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__15184__auto___15386){
return (function cljs$spec$impl$gen$string(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15387 = arguments.length;
var i__7924__auto___15388 = (0);
while(true){
if((i__7924__auto___15388 < len__7923__auto___15387)){
args__7930__auto__.push((arguments[i__7924__auto___15388]));

var G__15389 = (i__7924__auto___15388 + (1));
i__7924__auto___15388 = G__15389;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15386))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15386){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15386);
});})(g__15184__auto___15386))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__15184__auto___15386){
return (function (seq15320){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15320));
});})(g__15184__auto___15386))
;


var g__15184__auto___15390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__15184__auto___15390){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15391 = arguments.length;
var i__7924__auto___15392 = (0);
while(true){
if((i__7924__auto___15392 < len__7923__auto___15391)){
args__7930__auto__.push((arguments[i__7924__auto___15392]));

var G__15393 = (i__7924__auto___15392 + (1));
i__7924__auto___15392 = G__15393;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15390))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15390){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15390);
});})(g__15184__auto___15390))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__15184__auto___15390){
return (function (seq15321){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15321));
});})(g__15184__auto___15390))
;


var g__15184__auto___15394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__15184__auto___15394){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15395 = arguments.length;
var i__7924__auto___15396 = (0);
while(true){
if((i__7924__auto___15396 < len__7923__auto___15395)){
args__7930__auto__.push((arguments[i__7924__auto___15396]));

var G__15397 = (i__7924__auto___15396 + (1));
i__7924__auto___15396 = G__15397;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15394))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15394){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15394);
});})(g__15184__auto___15394))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__15184__auto___15394){
return (function (seq15322){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15322));
});})(g__15184__auto___15394))
;


var g__15184__auto___15398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__15184__auto___15398){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15399 = arguments.length;
var i__7924__auto___15400 = (0);
while(true){
if((i__7924__auto___15400 < len__7923__auto___15399)){
args__7930__auto__.push((arguments[i__7924__auto___15400]));

var G__15401 = (i__7924__auto___15400 + (1));
i__7924__auto___15400 = G__15401;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15398))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15398){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15398);
});})(g__15184__auto___15398))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__15184__auto___15398){
return (function (seq15323){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15323));
});})(g__15184__auto___15398))
;


var g__15184__auto___15402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__15184__auto___15402){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15403 = arguments.length;
var i__7924__auto___15404 = (0);
while(true){
if((i__7924__auto___15404 < len__7923__auto___15403)){
args__7930__auto__.push((arguments[i__7924__auto___15404]));

var G__15405 = (i__7924__auto___15404 + (1));
i__7924__auto___15404 = G__15405;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15402))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15402){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15402);
});})(g__15184__auto___15402))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__15184__auto___15402){
return (function (seq15324){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15324));
});})(g__15184__auto___15402))
;


var g__15184__auto___15406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__15184__auto___15406){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15407 = arguments.length;
var i__7924__auto___15408 = (0);
while(true){
if((i__7924__auto___15408 < len__7923__auto___15407)){
args__7930__auto__.push((arguments[i__7924__auto___15408]));

var G__15409 = (i__7924__auto___15408 + (1));
i__7924__auto___15408 = G__15409;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});})(g__15184__auto___15406))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15184__auto___15406){
return (function (args){
return cljs.core.deref.call(null,g__15184__auto___15406);
});})(g__15184__auto___15406))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__15184__auto___15406){
return (function (seq15325){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15325));
});})(g__15184__auto___15406))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7930__auto__ = [];
var len__7923__auto___15412 = arguments.length;
var i__7924__auto___15413 = (0);
while(true){
if((i__7924__auto___15413 < len__7923__auto___15412)){
args__7930__auto__.push((arguments[i__7924__auto___15413]));

var G__15414 = (i__7924__auto___15413 + (1));
i__7924__auto___15413 = G__15414;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__15410_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__15410_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq15411){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15411));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__15415_SHARP_){
return (new Date(p1__15415_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map