// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('search_front.core');
goog.require('cljs.core');
if(typeof search_front.core.app_state !== 'undefined'){
} else {
search_front.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello Minimum app world!"], null));
}
search_front.core.mount_root = (function search_front$core$mount_root(setting){
var app = document.getElementById("app");
return app.innerHTML = new cljs.core.Keyword(null,"my-env","my-env",-157811641).cljs$core$IFn$_invoke$arity$1(setting);
});
search_front.core.init_BANG_ = (function search_front$core$init_BANG_(setting){
return search_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map