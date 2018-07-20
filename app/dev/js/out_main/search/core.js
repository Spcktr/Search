// Compiled by ClojureScript 1.9.473 {:elide-asserts true, :target :nodejs}
goog.provide('search.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
search.core.path = cljs.nodejs.require.call(null,"path");
search.core.Electron = cljs.nodejs.require.call(null,"electron");
search.core.BrowserWindow = search.core.Electron.BrowserWindow;
search.core.crash_reporter = search.core.Electron.crashReporter;
search.core.Os = cljs.nodejs.require.call(null,"os");
search.core._STAR_win_STAR_ = cljs.core.atom.call(null,null);
search.core.app = search.core.Electron.app;
search.core._main = (function search$core$_main(){
search.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"Your Company Name",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"http://example.com/"], null)));

cljs.nodejs.process.on("error",(function (err){
return console.log(err);
}));

search.core.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
return search.core.app.quit();
} else {
return null;
}
}));

return search.core.app.on("ready",(function (){
cljs.core.reset_BANG_.call(null,search.core._STAR_win_STAR_,(new search.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

cljs.core.deref.call(null,search.core._STAR_win_STAR_).loadURL([cljs.core.str.cljs$core$IFn$_invoke$arity$1("file://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(search.core.path.resolve(__dirname,"../index.html"))].join(''));

return cljs.core.deref.call(null,search.core._STAR_win_STAR_).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,search.core._STAR_win_STAR_,null);
}));
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Start descjop application on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(search.core.Os.type()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = search.core._main;
