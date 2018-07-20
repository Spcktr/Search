// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args17636 = [];
var len__7923__auto___17639 = arguments.length;
var i__7924__auto___17640 = (0);
while(true){
if((i__7924__auto___17640 < len__7923__auto___17639)){
args17636.push((arguments[i__7924__auto___17640]));

var G__17641 = (i__7924__auto___17640 + (1));
i__7924__auto___17640 = G__17641;
continue;
} else {
}
break;
}

var G__17638 = args17636.length;
switch (G__17638) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17636.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__7930__auto__ = [];
var len__7923__auto___17644 = arguments.length;
var i__7924__auto___17645 = (0);
while(true){
if((i__7924__auto___17645 < len__7923__auto___17644)){
args__7930__auto__.push((arguments[i__7924__auto___17645]));

var G__17646 = (i__7924__auto___17645 + (1));
i__7924__auto___17645 = G__17646;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq17643){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17643));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__7930__auto__ = [];
var len__7923__auto___17648 = arguments.length;
var i__7924__auto___17649 = (0);
while(true){
if((i__7924__auto___17649 < len__7923__auto___17648)){
args__7930__auto__.push((arguments[i__7924__auto___17649]));

var G__17650 = (i__7924__auto___17649 + (1));
i__7924__auto___17649 = G__17650;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq17647){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17647));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__17651){
var map__17654 = p__17651;
var map__17654__$1 = ((((!((map__17654 == null)))?((((map__17654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17654):map__17654);
var message = cljs.core.get.call(null,map__17654__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__17654__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__6814__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__6802__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__6802__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__6802__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__9361__auto___17816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___17816,ch){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___17816,ch){
return (function (state_17785){
var state_val_17786 = (state_17785[(1)]);
if((state_val_17786 === (7))){
var inst_17781 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
var statearr_17787_17817 = state_17785__$1;
(statearr_17787_17817[(2)] = inst_17781);

(statearr_17787_17817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (1))){
var state_17785__$1 = state_17785;
var statearr_17788_17818 = state_17785__$1;
(statearr_17788_17818[(2)] = null);

(statearr_17788_17818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (4))){
var inst_17738 = (state_17785[(7)]);
var inst_17738__$1 = (state_17785[(2)]);
var state_17785__$1 = (function (){var statearr_17789 = state_17785;
(statearr_17789[(7)] = inst_17738__$1);

return statearr_17789;
})();
if(cljs.core.truth_(inst_17738__$1)){
var statearr_17790_17819 = state_17785__$1;
(statearr_17790_17819[(1)] = (5));

} else {
var statearr_17791_17820 = state_17785__$1;
(statearr_17791_17820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (15))){
var inst_17745 = (state_17785[(8)]);
var inst_17760 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17745);
var inst_17761 = cljs.core.first.call(null,inst_17760);
var inst_17762 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_17761);
var inst_17763 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17762)].join('');
var inst_17764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_17763);
var state_17785__$1 = state_17785;
var statearr_17792_17821 = state_17785__$1;
(statearr_17792_17821[(2)] = inst_17764);

(statearr_17792_17821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (13))){
var inst_17769 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
var statearr_17793_17822 = state_17785__$1;
(statearr_17793_17822[(2)] = inst_17769);

(statearr_17793_17822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (6))){
var state_17785__$1 = state_17785;
var statearr_17794_17823 = state_17785__$1;
(statearr_17794_17823[(2)] = null);

(statearr_17794_17823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (17))){
var inst_17767 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
var statearr_17795_17824 = state_17785__$1;
(statearr_17795_17824[(2)] = inst_17767);

(statearr_17795_17824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (3))){
var inst_17783 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17785__$1,inst_17783);
} else {
if((state_val_17786 === (12))){
var inst_17744 = (state_17785[(9)]);
var inst_17758 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_17744,opts);
var state_17785__$1 = state_17785;
if(cljs.core.truth_(inst_17758)){
var statearr_17796_17825 = state_17785__$1;
(statearr_17796_17825[(1)] = (15));

} else {
var statearr_17797_17826 = state_17785__$1;
(statearr_17797_17826[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (2))){
var state_17785__$1 = state_17785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17785__$1,(4),ch);
} else {
if((state_val_17786 === (11))){
var inst_17745 = (state_17785[(8)]);
var inst_17750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17751 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_17745);
var inst_17752 = cljs.core.async.timeout.call(null,(1000));
var inst_17753 = [inst_17751,inst_17752];
var inst_17754 = (new cljs.core.PersistentVector(null,2,(5),inst_17750,inst_17753,null));
var state_17785__$1 = state_17785;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17785__$1,(14),inst_17754);
} else {
if((state_val_17786 === (9))){
var inst_17745 = (state_17785[(8)]);
var inst_17771 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_17772 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17745);
var inst_17773 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17772);
var inst_17774 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17773)].join('');
var inst_17775 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_17774);
var state_17785__$1 = (function (){var statearr_17798 = state_17785;
(statearr_17798[(10)] = inst_17771);

return statearr_17798;
})();
var statearr_17799_17827 = state_17785__$1;
(statearr_17799_17827[(2)] = inst_17775);

(statearr_17799_17827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (5))){
var inst_17738 = (state_17785[(7)]);
var inst_17740 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_17741 = (new cljs.core.PersistentArrayMap(null,2,inst_17740,null));
var inst_17742 = (new cljs.core.PersistentHashSet(null,inst_17741,null));
var inst_17743 = figwheel.client.focus_msgs.call(null,inst_17742,inst_17738);
var inst_17744 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_17743);
var inst_17745 = cljs.core.first.call(null,inst_17743);
var inst_17746 = figwheel.client.autoload_QMARK_.call(null);
var state_17785__$1 = (function (){var statearr_17800 = state_17785;
(statearr_17800[(8)] = inst_17745);

(statearr_17800[(9)] = inst_17744);

return statearr_17800;
})();
if(cljs.core.truth_(inst_17746)){
var statearr_17801_17828 = state_17785__$1;
(statearr_17801_17828[(1)] = (8));

} else {
var statearr_17802_17829 = state_17785__$1;
(statearr_17802_17829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (14))){
var inst_17756 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
var statearr_17803_17830 = state_17785__$1;
(statearr_17803_17830[(2)] = inst_17756);

(statearr_17803_17830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (16))){
var state_17785__$1 = state_17785;
var statearr_17804_17831 = state_17785__$1;
(statearr_17804_17831[(2)] = null);

(statearr_17804_17831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (10))){
var inst_17777 = (state_17785[(2)]);
var state_17785__$1 = (function (){var statearr_17805 = state_17785;
(statearr_17805[(11)] = inst_17777);

return statearr_17805;
})();
var statearr_17806_17832 = state_17785__$1;
(statearr_17806_17832[(2)] = null);

(statearr_17806_17832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (8))){
var inst_17744 = (state_17785[(9)]);
var inst_17748 = figwheel.client.reload_file_state_QMARK_.call(null,inst_17744,opts);
var state_17785__$1 = state_17785;
if(cljs.core.truth_(inst_17748)){
var statearr_17807_17833 = state_17785__$1;
(statearr_17807_17833[(1)] = (11));

} else {
var statearr_17808_17834 = state_17785__$1;
(statearr_17808_17834[(1)] = (12));

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
});})(c__9361__auto___17816,ch))
;
return ((function (switch__9249__auto__,c__9361__auto___17816,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__9250__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__9250__auto____0 = (function (){
var statearr_17812 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17812[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__9250__auto__);

(statearr_17812[(1)] = (1));

return statearr_17812;
});
var figwheel$client$file_reloader_plugin_$_state_machine__9250__auto____1 = (function (state_17785){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_17785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e17813){if((e17813 instanceof Object)){
var ex__9253__auto__ = e17813;
var statearr_17814_17835 = state_17785;
(statearr_17814_17835[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17836 = state_17785;
state_17785 = G__17836;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__9250__auto__ = function(state_17785){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__9250__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__9250__auto____1.call(this,state_17785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__9250__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__9250__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___17816,ch))
})();
var state__9363__auto__ = (function (){var statearr_17815 = f__9362__auto__.call(null);
(statearr_17815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___17816);

return statearr_17815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___17816,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__17837_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__17837_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_17840 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_17840){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e17839){if((e17839 instanceof Error)){
var e = e17839;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_17840], null));
} else {
var e = e17839;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_17840))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__17841){
var map__17850 = p__17841;
var map__17850__$1 = ((((!((map__17850 == null)))?((((map__17850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17850):map__17850);
var opts = map__17850__$1;
var build_id = cljs.core.get.call(null,map__17850__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__17850,map__17850__$1,opts,build_id){
return (function (p__17852){
var vec__17853 = p__17852;
var seq__17854 = cljs.core.seq.call(null,vec__17853);
var first__17855 = cljs.core.first.call(null,seq__17854);
var seq__17854__$1 = cljs.core.next.call(null,seq__17854);
var map__17856 = first__17855;
var map__17856__$1 = ((((!((map__17856 == null)))?((((map__17856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17856):map__17856);
var msg = map__17856__$1;
var msg_name = cljs.core.get.call(null,map__17856__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__17854__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__17853,seq__17854,first__17855,seq__17854__$1,map__17856,map__17856__$1,msg,msg_name,_,map__17850,map__17850__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__17853,seq__17854,first__17855,seq__17854__$1,map__17856,map__17856__$1,msg,msg_name,_,map__17850,map__17850__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__17850,map__17850__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__17864){
var vec__17865 = p__17864;
var seq__17866 = cljs.core.seq.call(null,vec__17865);
var first__17867 = cljs.core.first.call(null,seq__17866);
var seq__17866__$1 = cljs.core.next.call(null,seq__17866);
var map__17868 = first__17867;
var map__17868__$1 = ((((!((map__17868 == null)))?((((map__17868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17868):map__17868);
var msg = map__17868__$1;
var msg_name = cljs.core.get.call(null,map__17868__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__17866__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__17870){
var map__17882 = p__17870;
var map__17882__$1 = ((((!((map__17882 == null)))?((((map__17882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17882):map__17882);
var on_compile_warning = cljs.core.get.call(null,map__17882__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__17882__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__17882,map__17882__$1,on_compile_warning,on_compile_fail){
return (function (p__17884){
var vec__17885 = p__17884;
var seq__17886 = cljs.core.seq.call(null,vec__17885);
var first__17887 = cljs.core.first.call(null,seq__17886);
var seq__17886__$1 = cljs.core.next.call(null,seq__17886);
var map__17888 = first__17887;
var map__17888__$1 = ((((!((map__17888 == null)))?((((map__17888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17888):map__17888);
var msg = map__17888__$1;
var msg_name = cljs.core.get.call(null,map__17888__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__17886__$1;
var pred__17890 = cljs.core._EQ_;
var expr__17891 = msg_name;
if(cljs.core.truth_(pred__17890.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__17891))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__17890.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17891))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__17882,map__17882__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__,msg_hist,msg_names,msg){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__,msg_hist,msg_names,msg){
return (function (state_18119){
var state_val_18120 = (state_18119[(1)]);
if((state_val_18120 === (7))){
var inst_18039 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18039)){
var statearr_18121_18171 = state_18119__$1;
(statearr_18121_18171[(1)] = (8));

} else {
var statearr_18122_18172 = state_18119__$1;
(statearr_18122_18172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (20))){
var inst_18113 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18123_18173 = state_18119__$1;
(statearr_18123_18173[(2)] = inst_18113);

(statearr_18123_18173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (27))){
var inst_18109 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18124_18174 = state_18119__$1;
(statearr_18124_18174[(2)] = inst_18109);

(statearr_18124_18174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (1))){
var inst_18032 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18032)){
var statearr_18125_18175 = state_18119__$1;
(statearr_18125_18175[(1)] = (2));

} else {
var statearr_18126_18176 = state_18119__$1;
(statearr_18126_18176[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (24))){
var inst_18111 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18127_18177 = state_18119__$1;
(statearr_18127_18177[(2)] = inst_18111);

(statearr_18127_18177[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (4))){
var inst_18117 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18119__$1,inst_18117);
} else {
if((state_val_18120 === (15))){
var inst_18115 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18128_18178 = state_18119__$1;
(statearr_18128_18178[(2)] = inst_18115);

(statearr_18128_18178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (21))){
var inst_18068 = (state_18119[(2)]);
var inst_18069 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18070 = figwheel.client.auto_jump_to_error.call(null,opts,inst_18069);
var state_18119__$1 = (function (){var statearr_18129 = state_18119;
(statearr_18129[(7)] = inst_18068);

return statearr_18129;
})();
var statearr_18130_18179 = state_18119__$1;
(statearr_18130_18179[(2)] = inst_18070);

(statearr_18130_18179[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (31))){
var inst_18098 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18098)){
var statearr_18131_18180 = state_18119__$1;
(statearr_18131_18180[(1)] = (34));

} else {
var statearr_18132_18181 = state_18119__$1;
(statearr_18132_18181[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (32))){
var inst_18107 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18133_18182 = state_18119__$1;
(statearr_18133_18182[(2)] = inst_18107);

(statearr_18133_18182[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (33))){
var inst_18094 = (state_18119[(2)]);
var inst_18095 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18096 = figwheel.client.auto_jump_to_error.call(null,opts,inst_18095);
var state_18119__$1 = (function (){var statearr_18134 = state_18119;
(statearr_18134[(8)] = inst_18094);

return statearr_18134;
})();
var statearr_18135_18183 = state_18119__$1;
(statearr_18135_18183[(2)] = inst_18096);

(statearr_18135_18183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (13))){
var inst_18053 = figwheel.client.heads_up.clear.call(null);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(16),inst_18053);
} else {
if((state_val_18120 === (22))){
var inst_18074 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18075 = figwheel.client.heads_up.append_warning_message.call(null,inst_18074);
var state_18119__$1 = state_18119;
var statearr_18136_18184 = state_18119__$1;
(statearr_18136_18184[(2)] = inst_18075);

(statearr_18136_18184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (36))){
var inst_18105 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18137_18185 = state_18119__$1;
(statearr_18137_18185[(2)] = inst_18105);

(statearr_18137_18185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (29))){
var inst_18085 = (state_18119[(2)]);
var inst_18086 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18087 = figwheel.client.auto_jump_to_error.call(null,opts,inst_18086);
var state_18119__$1 = (function (){var statearr_18138 = state_18119;
(statearr_18138[(9)] = inst_18085);

return statearr_18138;
})();
var statearr_18139_18186 = state_18119__$1;
(statearr_18139_18186[(2)] = inst_18087);

(statearr_18139_18186[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (6))){
var inst_18034 = (state_18119[(10)]);
var state_18119__$1 = state_18119;
var statearr_18140_18187 = state_18119__$1;
(statearr_18140_18187[(2)] = inst_18034);

(statearr_18140_18187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (28))){
var inst_18081 = (state_18119[(2)]);
var inst_18082 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18083 = figwheel.client.heads_up.display_warning.call(null,inst_18082);
var state_18119__$1 = (function (){var statearr_18141 = state_18119;
(statearr_18141[(11)] = inst_18081);

return statearr_18141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(29),inst_18083);
} else {
if((state_val_18120 === (25))){
var inst_18079 = figwheel.client.heads_up.clear.call(null);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(28),inst_18079);
} else {
if((state_val_18120 === (34))){
var inst_18100 = figwheel.client.heads_up.flash_loaded.call(null);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(37),inst_18100);
} else {
if((state_val_18120 === (17))){
var inst_18059 = (state_18119[(2)]);
var inst_18060 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18061 = figwheel.client.auto_jump_to_error.call(null,opts,inst_18060);
var state_18119__$1 = (function (){var statearr_18142 = state_18119;
(statearr_18142[(12)] = inst_18059);

return statearr_18142;
})();
var statearr_18143_18188 = state_18119__$1;
(statearr_18143_18188[(2)] = inst_18061);

(statearr_18143_18188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (3))){
var inst_18051 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18051)){
var statearr_18144_18189 = state_18119__$1;
(statearr_18144_18189[(1)] = (13));

} else {
var statearr_18145_18190 = state_18119__$1;
(statearr_18145_18190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (12))){
var inst_18047 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18146_18191 = state_18119__$1;
(statearr_18146_18191[(2)] = inst_18047);

(statearr_18146_18191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (2))){
var inst_18034 = (state_18119[(10)]);
var inst_18034__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_18119__$1 = (function (){var statearr_18147 = state_18119;
(statearr_18147[(10)] = inst_18034__$1);

return statearr_18147;
})();
if(cljs.core.truth_(inst_18034__$1)){
var statearr_18148_18192 = state_18119__$1;
(statearr_18148_18192[(1)] = (5));

} else {
var statearr_18149_18193 = state_18119__$1;
(statearr_18149_18193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (23))){
var inst_18077 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18077)){
var statearr_18150_18194 = state_18119__$1;
(statearr_18150_18194[(1)] = (25));

} else {
var statearr_18151_18195 = state_18119__$1;
(statearr_18151_18195[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (35))){
var state_18119__$1 = state_18119;
var statearr_18152_18196 = state_18119__$1;
(statearr_18152_18196[(2)] = null);

(statearr_18152_18196[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (19))){
var inst_18072 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18072)){
var statearr_18153_18197 = state_18119__$1;
(statearr_18153_18197[(1)] = (22));

} else {
var statearr_18154_18198 = state_18119__$1;
(statearr_18154_18198[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (11))){
var inst_18043 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18155_18199 = state_18119__$1;
(statearr_18155_18199[(2)] = inst_18043);

(statearr_18155_18199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (9))){
var inst_18045 = figwheel.client.heads_up.clear.call(null);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(12),inst_18045);
} else {
if((state_val_18120 === (5))){
var inst_18036 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_18119__$1 = state_18119;
var statearr_18156_18200 = state_18119__$1;
(statearr_18156_18200[(2)] = inst_18036);

(statearr_18156_18200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (14))){
var inst_18063 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18063)){
var statearr_18157_18201 = state_18119__$1;
(statearr_18157_18201[(1)] = (18));

} else {
var statearr_18158_18202 = state_18119__$1;
(statearr_18158_18202[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (26))){
var inst_18089 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18089)){
var statearr_18159_18203 = state_18119__$1;
(statearr_18159_18203[(1)] = (30));

} else {
var statearr_18160_18204 = state_18119__$1;
(statearr_18160_18204[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (16))){
var inst_18055 = (state_18119[(2)]);
var inst_18056 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18057 = figwheel.client.heads_up.display_exception.call(null,inst_18056);
var state_18119__$1 = (function (){var statearr_18161 = state_18119;
(statearr_18161[(13)] = inst_18055);

return statearr_18161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(17),inst_18057);
} else {
if((state_val_18120 === (30))){
var inst_18091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18092 = figwheel.client.heads_up.display_warning.call(null,inst_18091);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(33),inst_18092);
} else {
if((state_val_18120 === (10))){
var inst_18049 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18162_18205 = state_18119__$1;
(statearr_18162_18205[(2)] = inst_18049);

(statearr_18162_18205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (18))){
var inst_18065 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18066 = figwheel.client.heads_up.display_exception.call(null,inst_18065);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(21),inst_18066);
} else {
if((state_val_18120 === (37))){
var inst_18102 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18163_18206 = state_18119__$1;
(statearr_18163_18206[(2)] = inst_18102);

(statearr_18163_18206[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18120 === (8))){
var inst_18041 = figwheel.client.heads_up.flash_loaded.call(null);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18119__$1,(11),inst_18041);
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
});})(c__9361__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__9249__auto__,c__9361__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto____0 = (function (){
var statearr_18167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18167[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto__);

(statearr_18167[(1)] = (1));

return statearr_18167;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto____1 = (function (state_18119){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_18119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e18168){if((e18168 instanceof Object)){
var ex__9253__auto__ = e18168;
var statearr_18169_18207 = state_18119;
(statearr_18169_18207[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18208 = state_18119;
state_18119 = G__18208;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto__ = function(state_18119){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto____1.call(this,state_18119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__,msg_hist,msg_names,msg))
})();
var state__9363__auto__ = (function (){var statearr_18170 = f__9362__auto__.call(null);
(statearr_18170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_18170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__,msg_hist,msg_names,msg))
);

return c__9361__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__9361__auto___18271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___18271,ch){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___18271,ch){
return (function (state_18254){
var state_val_18255 = (state_18254[(1)]);
if((state_val_18255 === (1))){
var state_18254__$1 = state_18254;
var statearr_18256_18272 = state_18254__$1;
(statearr_18256_18272[(2)] = null);

(statearr_18256_18272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (2))){
var state_18254__$1 = state_18254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18254__$1,(4),ch);
} else {
if((state_val_18255 === (3))){
var inst_18252 = (state_18254[(2)]);
var state_18254__$1 = state_18254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18254__$1,inst_18252);
} else {
if((state_val_18255 === (4))){
var inst_18242 = (state_18254[(7)]);
var inst_18242__$1 = (state_18254[(2)]);
var state_18254__$1 = (function (){var statearr_18257 = state_18254;
(statearr_18257[(7)] = inst_18242__$1);

return statearr_18257;
})();
if(cljs.core.truth_(inst_18242__$1)){
var statearr_18258_18273 = state_18254__$1;
(statearr_18258_18273[(1)] = (5));

} else {
var statearr_18259_18274 = state_18254__$1;
(statearr_18259_18274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (5))){
var inst_18242 = (state_18254[(7)]);
var inst_18244 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_18242);
var state_18254__$1 = state_18254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18254__$1,(8),inst_18244);
} else {
if((state_val_18255 === (6))){
var state_18254__$1 = state_18254;
var statearr_18260_18275 = state_18254__$1;
(statearr_18260_18275[(2)] = null);

(statearr_18260_18275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (7))){
var inst_18250 = (state_18254[(2)]);
var state_18254__$1 = state_18254;
var statearr_18261_18276 = state_18254__$1;
(statearr_18261_18276[(2)] = inst_18250);

(statearr_18261_18276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (8))){
var inst_18246 = (state_18254[(2)]);
var state_18254__$1 = (function (){var statearr_18262 = state_18254;
(statearr_18262[(8)] = inst_18246);

return statearr_18262;
})();
var statearr_18263_18277 = state_18254__$1;
(statearr_18263_18277[(2)] = null);

(statearr_18263_18277[(1)] = (2));


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
});})(c__9361__auto___18271,ch))
;
return ((function (switch__9249__auto__,c__9361__auto___18271,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__9250__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__9250__auto____0 = (function (){
var statearr_18267 = [null,null,null,null,null,null,null,null,null];
(statearr_18267[(0)] = figwheel$client$heads_up_plugin_$_state_machine__9250__auto__);

(statearr_18267[(1)] = (1));

return statearr_18267;
});
var figwheel$client$heads_up_plugin_$_state_machine__9250__auto____1 = (function (state_18254){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_18254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e18268){if((e18268 instanceof Object)){
var ex__9253__auto__ = e18268;
var statearr_18269_18278 = state_18254;
(statearr_18269_18278[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18279 = state_18254;
state_18254 = G__18279;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__9250__auto__ = function(state_18254){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__9250__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__9250__auto____1.call(this,state_18254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__9250__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__9250__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___18271,ch))
})();
var state__9363__auto__ = (function (){var statearr_18270 = f__9362__auto__.call(null);
(statearr_18270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___18271);

return statearr_18270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___18271,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__){
return (function (state_18300){
var state_val_18301 = (state_18300[(1)]);
if((state_val_18301 === (1))){
var inst_18295 = cljs.core.async.timeout.call(null,(3000));
var state_18300__$1 = state_18300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18300__$1,(2),inst_18295);
} else {
if((state_val_18301 === (2))){
var inst_18297 = (state_18300[(2)]);
var inst_18298 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_18300__$1 = (function (){var statearr_18302 = state_18300;
(statearr_18302[(7)] = inst_18297);

return statearr_18302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18300__$1,inst_18298);
} else {
return null;
}
}
});})(c__9361__auto__))
;
return ((function (switch__9249__auto__,c__9361__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__9250__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__9250__auto____0 = (function (){
var statearr_18306 = [null,null,null,null,null,null,null,null];
(statearr_18306[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__9250__auto__);

(statearr_18306[(1)] = (1));

return statearr_18306;
});
var figwheel$client$enforce_project_plugin_$_state_machine__9250__auto____1 = (function (state_18300){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_18300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e18307){if((e18307 instanceof Object)){
var ex__9253__auto__ = e18307;
var statearr_18308_18310 = state_18300;
(statearr_18308_18310[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18311 = state_18300;
state_18300 = G__18311;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__9250__auto__ = function(state_18300){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__9250__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__9250__auto____1.call(this,state_18300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__9250__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__9250__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__))
})();
var state__9363__auto__ = (function (){var statearr_18309 = f__9362__auto__.call(null);
(statearr_18309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_18309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__))
);

return c__9361__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__,figwheel_version,temp__4657__auto__){
return (function (state_18334){
var state_val_18335 = (state_18334[(1)]);
if((state_val_18335 === (1))){
var inst_18328 = cljs.core.async.timeout.call(null,(2000));
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18334__$1,(2),inst_18328);
} else {
if((state_val_18335 === (2))){
var inst_18330 = (state_18334[(2)]);
var inst_18331 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_18332 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_18331);
var state_18334__$1 = (function (){var statearr_18336 = state_18334;
(statearr_18336[(7)] = inst_18330);

return statearr_18336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18334__$1,inst_18332);
} else {
return null;
}
}
});})(c__9361__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__9249__auto__,c__9361__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto____0 = (function (){
var statearr_18340 = [null,null,null,null,null,null,null,null];
(statearr_18340[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto__);

(statearr_18340[(1)] = (1));

return statearr_18340;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto____1 = (function (state_18334){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_18334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e18341){if((e18341 instanceof Object)){
var ex__9253__auto__ = e18341;
var statearr_18342_18344 = state_18334;
(statearr_18342_18344[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18345 = state_18334;
state_18334 = G__18345;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto__ = function(state_18334){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto____1.call(this,state_18334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__,figwheel_version,temp__4657__auto__))
})();
var state__9363__auto__ = (function (){var statearr_18343 = f__9362__auto__.call(null);
(statearr_18343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_18343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__,figwheel_version,temp__4657__auto__))
);

return c__9361__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__18346){
var map__18350 = p__18346;
var map__18350__$1 = ((((!((map__18350 == null)))?((((map__18350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18350):map__18350);
var file = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__18352 = "";
var G__18352__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18352),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__18352);
var G__18352__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18352__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__18352__$1);
if(cljs.core.truth_((function (){var and__6802__auto__ = line;
if(cljs.core.truth_(and__6802__auto__)){
return column;
} else {
return and__6802__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18352__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__18352__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__18353){
var map__18360 = p__18353;
var map__18360__$1 = ((((!((map__18360 == null)))?((((map__18360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18360):map__18360);
var ed = map__18360__$1;
var formatted_exception = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__18362_18366 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__18363_18367 = null;
var count__18364_18368 = (0);
var i__18365_18369 = (0);
while(true){
if((i__18365_18369 < count__18364_18368)){
var msg_18370 = cljs.core._nth.call(null,chunk__18363_18367,i__18365_18369);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_18370);

var G__18371 = seq__18362_18366;
var G__18372 = chunk__18363_18367;
var G__18373 = count__18364_18368;
var G__18374 = (i__18365_18369 + (1));
seq__18362_18366 = G__18371;
chunk__18363_18367 = G__18372;
count__18364_18368 = G__18373;
i__18365_18369 = G__18374;
continue;
} else {
var temp__4657__auto___18375 = cljs.core.seq.call(null,seq__18362_18366);
if(temp__4657__auto___18375){
var seq__18362_18376__$1 = temp__4657__auto___18375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18362_18376__$1)){
var c__7633__auto___18377 = cljs.core.chunk_first.call(null,seq__18362_18376__$1);
var G__18378 = cljs.core.chunk_rest.call(null,seq__18362_18376__$1);
var G__18379 = c__7633__auto___18377;
var G__18380 = cljs.core.count.call(null,c__7633__auto___18377);
var G__18381 = (0);
seq__18362_18366 = G__18378;
chunk__18363_18367 = G__18379;
count__18364_18368 = G__18380;
i__18365_18369 = G__18381;
continue;
} else {
var msg_18382 = cljs.core.first.call(null,seq__18362_18376__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_18382);

var G__18383 = cljs.core.next.call(null,seq__18362_18376__$1);
var G__18384 = null;
var G__18385 = (0);
var G__18386 = (0);
seq__18362_18366 = G__18383;
chunk__18363_18367 = G__18384;
count__18364_18368 = G__18385;
i__18365_18369 = G__18386;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__18387){
var map__18390 = p__18387;
var map__18390__$1 = ((((!((map__18390 == null)))?((((map__18390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18390):map__18390);
var w = map__18390__$1;
var message = cljs.core.get.call(null,map__18390__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app\\dev\\js\\out_front\\figwheel\\client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app\\dev\\js\\out_front\\figwheel\\client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__6802__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__6802__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__6802__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__18402 = cljs.core.seq.call(null,plugins);
var chunk__18403 = null;
var count__18404 = (0);
var i__18405 = (0);
while(true){
if((i__18405 < count__18404)){
var vec__18406 = cljs.core._nth.call(null,chunk__18403,i__18405);
var k = cljs.core.nth.call(null,vec__18406,(0),null);
var plugin = cljs.core.nth.call(null,vec__18406,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18412 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__18402,chunk__18403,count__18404,i__18405,pl_18412,vec__18406,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_18412.call(null,msg_hist);
});})(seq__18402,chunk__18403,count__18404,i__18405,pl_18412,vec__18406,k,plugin))
);
} else {
}

var G__18413 = seq__18402;
var G__18414 = chunk__18403;
var G__18415 = count__18404;
var G__18416 = (i__18405 + (1));
seq__18402 = G__18413;
chunk__18403 = G__18414;
count__18404 = G__18415;
i__18405 = G__18416;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18402);
if(temp__4657__auto__){
var seq__18402__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18402__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__18402__$1);
var G__18417 = cljs.core.chunk_rest.call(null,seq__18402__$1);
var G__18418 = c__7633__auto__;
var G__18419 = cljs.core.count.call(null,c__7633__auto__);
var G__18420 = (0);
seq__18402 = G__18417;
chunk__18403 = G__18418;
count__18404 = G__18419;
i__18405 = G__18420;
continue;
} else {
var vec__18409 = cljs.core.first.call(null,seq__18402__$1);
var k = cljs.core.nth.call(null,vec__18409,(0),null);
var plugin = cljs.core.nth.call(null,vec__18409,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18421 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__18402,chunk__18403,count__18404,i__18405,pl_18421,vec__18409,k,plugin,seq__18402__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_18421.call(null,msg_hist);
});})(seq__18402,chunk__18403,count__18404,i__18405,pl_18421,vec__18409,k,plugin,seq__18402__$1,temp__4657__auto__))
);
} else {
}

var G__18422 = cljs.core.next.call(null,seq__18402__$1);
var G__18423 = null;
var G__18424 = (0);
var G__18425 = (0);
seq__18402 = G__18422;
chunk__18403 = G__18423;
count__18404 = G__18424;
i__18405 = G__18425;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args18426 = [];
var len__7923__auto___18433 = arguments.length;
var i__7924__auto___18434 = (0);
while(true){
if((i__7924__auto___18434 < len__7923__auto___18433)){
args18426.push((arguments[i__7924__auto___18434]));

var G__18435 = (i__7924__auto___18434 + (1));
i__7924__auto___18434 = G__18435;
continue;
} else {
}
break;
}

var G__18428 = args18426.length;
switch (G__18428) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18426.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__18429_18437 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__18430_18438 = null;
var count__18431_18439 = (0);
var i__18432_18440 = (0);
while(true){
if((i__18432_18440 < count__18431_18439)){
var msg_18441 = cljs.core._nth.call(null,chunk__18430_18438,i__18432_18440);
figwheel.client.socket.handle_incoming_message.call(null,msg_18441);

var G__18442 = seq__18429_18437;
var G__18443 = chunk__18430_18438;
var G__18444 = count__18431_18439;
var G__18445 = (i__18432_18440 + (1));
seq__18429_18437 = G__18442;
chunk__18430_18438 = G__18443;
count__18431_18439 = G__18444;
i__18432_18440 = G__18445;
continue;
} else {
var temp__4657__auto___18446 = cljs.core.seq.call(null,seq__18429_18437);
if(temp__4657__auto___18446){
var seq__18429_18447__$1 = temp__4657__auto___18446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18429_18447__$1)){
var c__7633__auto___18448 = cljs.core.chunk_first.call(null,seq__18429_18447__$1);
var G__18449 = cljs.core.chunk_rest.call(null,seq__18429_18447__$1);
var G__18450 = c__7633__auto___18448;
var G__18451 = cljs.core.count.call(null,c__7633__auto___18448);
var G__18452 = (0);
seq__18429_18437 = G__18449;
chunk__18430_18438 = G__18450;
count__18431_18439 = G__18451;
i__18432_18440 = G__18452;
continue;
} else {
var msg_18453 = cljs.core.first.call(null,seq__18429_18447__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_18453);

var G__18454 = cljs.core.next.call(null,seq__18429_18447__$1);
var G__18455 = null;
var G__18456 = (0);
var G__18457 = (0);
seq__18429_18437 = G__18454;
chunk__18430_18438 = G__18455;
count__18431_18439 = G__18456;
i__18432_18440 = G__18457;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__7930__auto__ = [];
var len__7923__auto___18462 = arguments.length;
var i__7924__auto___18463 = (0);
while(true){
if((i__7924__auto___18463 < len__7923__auto___18462)){
args__7930__auto__.push((arguments[i__7924__auto___18463]));

var G__18464 = (i__7924__auto___18463 + (1));
i__7924__auto___18463 = G__18464;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__18459){
var map__18460 = p__18459;
var map__18460__$1 = ((((!((map__18460 == null)))?((((map__18460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18460):map__18460);
var opts = map__18460__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq18458){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18458));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e18466){if((e18466 instanceof Error)){
var e = e18466;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e18466;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__18470){
var map__18471 = p__18470;
var map__18471__$1 = ((((!((map__18471 == null)))?((((map__18471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18471):map__18471);
var msg_name = cljs.core.get.call(null,map__18471__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map