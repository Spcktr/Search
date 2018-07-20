// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17197){
var map__17222 = p__17197;
var map__17222__$1 = ((((!((map__17222 == null)))?((((map__17222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17222):map__17222);
var m = map__17222__$1;
var n = cljs.core.get.call(null,map__17222__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17222__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17224_17246 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17225_17247 = null;
var count__17226_17248 = (0);
var i__17227_17249 = (0);
while(true){
if((i__17227_17249 < count__17226_17248)){
var f_17250 = cljs.core._nth.call(null,chunk__17225_17247,i__17227_17249);
cljs.core.println.call(null,"  ",f_17250);

var G__17251 = seq__17224_17246;
var G__17252 = chunk__17225_17247;
var G__17253 = count__17226_17248;
var G__17254 = (i__17227_17249 + (1));
seq__17224_17246 = G__17251;
chunk__17225_17247 = G__17252;
count__17226_17248 = G__17253;
i__17227_17249 = G__17254;
continue;
} else {
var temp__4657__auto___17255 = cljs.core.seq.call(null,seq__17224_17246);
if(temp__4657__auto___17255){
var seq__17224_17256__$1 = temp__4657__auto___17255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17224_17256__$1)){
var c__7633__auto___17257 = cljs.core.chunk_first.call(null,seq__17224_17256__$1);
var G__17258 = cljs.core.chunk_rest.call(null,seq__17224_17256__$1);
var G__17259 = c__7633__auto___17257;
var G__17260 = cljs.core.count.call(null,c__7633__auto___17257);
var G__17261 = (0);
seq__17224_17246 = G__17258;
chunk__17225_17247 = G__17259;
count__17226_17248 = G__17260;
i__17227_17249 = G__17261;
continue;
} else {
var f_17262 = cljs.core.first.call(null,seq__17224_17256__$1);
cljs.core.println.call(null,"  ",f_17262);

var G__17263 = cljs.core.next.call(null,seq__17224_17256__$1);
var G__17264 = null;
var G__17265 = (0);
var G__17266 = (0);
seq__17224_17246 = G__17263;
chunk__17225_17247 = G__17264;
count__17226_17248 = G__17265;
i__17227_17249 = G__17266;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17267 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6814__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17267);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17267)))?cljs.core.second.call(null,arglists_17267):arglists_17267));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__17228_17268 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17229_17269 = null;
var count__17230_17270 = (0);
var i__17231_17271 = (0);
while(true){
if((i__17231_17271 < count__17230_17270)){
var vec__17232_17272 = cljs.core._nth.call(null,chunk__17229_17269,i__17231_17271);
var name_17273 = cljs.core.nth.call(null,vec__17232_17272,(0),null);
var map__17235_17274 = cljs.core.nth.call(null,vec__17232_17272,(1),null);
var map__17235_17275__$1 = ((((!((map__17235_17274 == null)))?((((map__17235_17274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17235_17274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17235_17274):map__17235_17274);
var doc_17276 = cljs.core.get.call(null,map__17235_17275__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17277 = cljs.core.get.call(null,map__17235_17275__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17273);

cljs.core.println.call(null," ",arglists_17277);

if(cljs.core.truth_(doc_17276)){
cljs.core.println.call(null," ",doc_17276);
} else {
}

var G__17278 = seq__17228_17268;
var G__17279 = chunk__17229_17269;
var G__17280 = count__17230_17270;
var G__17281 = (i__17231_17271 + (1));
seq__17228_17268 = G__17278;
chunk__17229_17269 = G__17279;
count__17230_17270 = G__17280;
i__17231_17271 = G__17281;
continue;
} else {
var temp__4657__auto___17282 = cljs.core.seq.call(null,seq__17228_17268);
if(temp__4657__auto___17282){
var seq__17228_17283__$1 = temp__4657__auto___17282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17228_17283__$1)){
var c__7633__auto___17284 = cljs.core.chunk_first.call(null,seq__17228_17283__$1);
var G__17285 = cljs.core.chunk_rest.call(null,seq__17228_17283__$1);
var G__17286 = c__7633__auto___17284;
var G__17287 = cljs.core.count.call(null,c__7633__auto___17284);
var G__17288 = (0);
seq__17228_17268 = G__17285;
chunk__17229_17269 = G__17286;
count__17230_17270 = G__17287;
i__17231_17271 = G__17288;
continue;
} else {
var vec__17237_17289 = cljs.core.first.call(null,seq__17228_17283__$1);
var name_17290 = cljs.core.nth.call(null,vec__17237_17289,(0),null);
var map__17240_17291 = cljs.core.nth.call(null,vec__17237_17289,(1),null);
var map__17240_17292__$1 = ((((!((map__17240_17291 == null)))?((((map__17240_17291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17240_17291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17240_17291):map__17240_17291);
var doc_17293 = cljs.core.get.call(null,map__17240_17292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17294 = cljs.core.get.call(null,map__17240_17292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17290);

cljs.core.println.call(null," ",arglists_17294);

if(cljs.core.truth_(doc_17293)){
cljs.core.println.call(null," ",doc_17293);
} else {
}

var G__17295 = cljs.core.next.call(null,seq__17228_17283__$1);
var G__17296 = null;
var G__17297 = (0);
var G__17298 = (0);
seq__17228_17268 = G__17295;
chunk__17229_17269 = G__17296;
count__17230_17270 = G__17297;
i__17231_17271 = G__17298;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__17242 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17243 = null;
var count__17244 = (0);
var i__17245 = (0);
while(true){
if((i__17245 < count__17244)){
var role = cljs.core._nth.call(null,chunk__17243,i__17245);
var temp__4657__auto___17299__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17299__$1)){
var spec_17300 = temp__4657__auto___17299__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_17300));
} else {
}

var G__17301 = seq__17242;
var G__17302 = chunk__17243;
var G__17303 = count__17244;
var G__17304 = (i__17245 + (1));
seq__17242 = G__17301;
chunk__17243 = G__17302;
count__17244 = G__17303;
i__17245 = G__17304;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__17242);
if(temp__4657__auto____$1){
var seq__17242__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17242__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__17242__$1);
var G__17305 = cljs.core.chunk_rest.call(null,seq__17242__$1);
var G__17306 = c__7633__auto__;
var G__17307 = cljs.core.count.call(null,c__7633__auto__);
var G__17308 = (0);
seq__17242 = G__17305;
chunk__17243 = G__17306;
count__17244 = G__17307;
i__17245 = G__17308;
continue;
} else {
var role = cljs.core.first.call(null,seq__17242__$1);
var temp__4657__auto___17309__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17309__$2)){
var spec_17310 = temp__4657__auto___17309__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_17310));
} else {
}

var G__17311 = cljs.core.next.call(null,seq__17242__$1);
var G__17312 = null;
var G__17313 = (0);
var G__17314 = (0);
seq__17242 = G__17311;
chunk__17243 = G__17312;
count__17244 = G__17313;
i__17245 = G__17314;
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

//# sourceMappingURL=repl.js.map