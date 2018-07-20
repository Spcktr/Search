// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9406 = [];
var len__7923__auto___9412 = arguments.length;
var i__7924__auto___9413 = (0);
while(true){
if((i__7924__auto___9413 < len__7923__auto___9412)){
args9406.push((arguments[i__7924__auto___9413]));

var G__9414 = (i__7924__auto___9413 + (1));
i__7924__auto___9413 = G__9414;
continue;
} else {
}
break;
}

var G__9408 = args9406.length;
switch (G__9408) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9406.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9409 = (function (f,blockable,meta9410){
this.f = f;
this.blockable = blockable;
this.meta9410 = meta9410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9411,meta9410__$1){
var self__ = this;
var _9411__$1 = this;
return (new cljs.core.async.t_cljs$core$async9409(self__.f,self__.blockable,meta9410__$1));
});

cljs.core.async.t_cljs$core$async9409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9411){
var self__ = this;
var _9411__$1 = this;
return self__.meta9410;
});

cljs.core.async.t_cljs$core$async9409.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9410","meta9410",-1872622006,null)], null);
});

cljs.core.async.t_cljs$core$async9409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9409";

cljs.core.async.t_cljs$core$async9409.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async9409");
});

cljs.core.async.__GT_t_cljs$core$async9409 = (function cljs$core$async$__GT_t_cljs$core$async9409(f__$1,blockable__$1,meta9410){
return (new cljs.core.async.t_cljs$core$async9409(f__$1,blockable__$1,meta9410));
});

}

return (new cljs.core.async.t_cljs$core$async9409(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9418 = [];
var len__7923__auto___9421 = arguments.length;
var i__7924__auto___9422 = (0);
while(true){
if((i__7924__auto___9422 < len__7923__auto___9421)){
args9418.push((arguments[i__7924__auto___9422]));

var G__9423 = (i__7924__auto___9422 + (1));
i__7924__auto___9422 = G__9423;
continue;
} else {
}
break;
}

var G__9420 = args9418.length;
switch (G__9420) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9418.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args9425 = [];
var len__7923__auto___9428 = arguments.length;
var i__7924__auto___9429 = (0);
while(true){
if((i__7924__auto___9429 < len__7923__auto___9428)){
args9425.push((arguments[i__7924__auto___9429]));

var G__9430 = (i__7924__auto___9429 + (1));
i__7924__auto___9429 = G__9430;
continue;
} else {
}
break;
}

var G__9427 = args9425.length;
switch (G__9427) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9425.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9432 = [];
var len__7923__auto___9435 = arguments.length;
var i__7924__auto___9436 = (0);
while(true){
if((i__7924__auto___9436 < len__7923__auto___9435)){
args9432.push((arguments[i__7924__auto___9436]));

var G__9437 = (i__7924__auto___9436 + (1));
i__7924__auto___9436 = G__9437;
continue;
} else {
}
break;
}

var G__9434 = args9432.length;
switch (G__9434) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9432.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9439 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9439);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9439,ret){
return (function (){
return fn1.call(null,val_9439);
});})(val_9439,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9440 = [];
var len__7923__auto___9443 = arguments.length;
var i__7924__auto___9444 = (0);
while(true){
if((i__7924__auto___9444 < len__7923__auto___9443)){
args9440.push((arguments[i__7924__auto___9444]));

var G__9445 = (i__7924__auto___9444 + (1));
i__7924__auto___9444 = G__9445;
continue;
} else {
}
break;
}

var G__9442 = args9440.length;
switch (G__9442) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9440.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7737__auto___9447 = n;
var x_9448 = (0);
while(true){
if((x_9448 < n__7737__auto___9447)){
(a[x_9448] = (0));

var G__9449 = (x_9448 + (1));
x_9448 = G__9449;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9450 = (i + (1));
i = G__9450;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9454 = (function (flag,meta9455){
this.flag = flag;
this.meta9455 = meta9455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9456,meta9455__$1){
var self__ = this;
var _9456__$1 = this;
return (new cljs.core.async.t_cljs$core$async9454(self__.flag,meta9455__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9456){
var self__ = this;
var _9456__$1 = this;
return self__.meta9455;
});})(flag))
;

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9454.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9455","meta9455",335432550,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9454";

cljs.core.async.t_cljs$core$async9454.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async9454");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9454 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9454(flag__$1,meta9455){
return (new cljs.core.async.t_cljs$core$async9454(flag__$1,meta9455));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9454(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9460 = (function (flag,cb,meta9461){
this.flag = flag;
this.cb = cb;
this.meta9461 = meta9461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9462,meta9461__$1){
var self__ = this;
var _9462__$1 = this;
return (new cljs.core.async.t_cljs$core$async9460(self__.flag,self__.cb,meta9461__$1));
});

cljs.core.async.t_cljs$core$async9460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9462){
var self__ = this;
var _9462__$1 = this;
return self__.meta9461;
});

cljs.core.async.t_cljs$core$async9460.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9461","meta9461",1236107558,null)], null);
});

cljs.core.async.t_cljs$core$async9460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9460";

cljs.core.async.t_cljs$core$async9460.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async9460");
});

cljs.core.async.__GT_t_cljs$core$async9460 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9460(flag__$1,cb__$1,meta9461){
return (new cljs.core.async.t_cljs$core$async9460(flag__$1,cb__$1,meta9461));
});

}

return (new cljs.core.async.t_cljs$core$async9460(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9463_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9463_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9464_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9464_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6814__auto__ = wport;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9465 = (i + (1));
i = G__9465;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6814__auto__ = ret;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6802__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6802__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___9471 = arguments.length;
var i__7924__auto___9472 = (0);
while(true){
if((i__7924__auto___9472 < len__7923__auto___9471)){
args__7930__auto__.push((arguments[i__7924__auto___9472]));

var G__9473 = (i__7924__auto___9472 + (1));
i__7924__auto___9472 = G__9473;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((1) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9468){
var map__9469 = p__9468;
var map__9469__$1 = ((((!((map__9469 == null)))?((((map__9469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9469):map__9469);
var opts = map__9469__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9466){
var G__9467 = cljs.core.first.call(null,seq9466);
var seq9466__$1 = cljs.core.next.call(null,seq9466);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9467,seq9466__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9474 = [];
var len__7923__auto___9524 = arguments.length;
var i__7924__auto___9525 = (0);
while(true){
if((i__7924__auto___9525 < len__7923__auto___9524)){
args9474.push((arguments[i__7924__auto___9525]));

var G__9526 = (i__7924__auto___9525 + (1));
i__7924__auto___9525 = G__9526;
continue;
} else {
}
break;
}

var G__9476 = args9474.length;
switch (G__9476) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9474.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9361__auto___9528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___9528){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___9528){
return (function (state_9500){
var state_val_9501 = (state_9500[(1)]);
if((state_val_9501 === (7))){
var inst_9496 = (state_9500[(2)]);
var state_9500__$1 = state_9500;
var statearr_9502_9529 = state_9500__$1;
(statearr_9502_9529[(2)] = inst_9496);

(statearr_9502_9529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (1))){
var state_9500__$1 = state_9500;
var statearr_9503_9530 = state_9500__$1;
(statearr_9503_9530[(2)] = null);

(statearr_9503_9530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (4))){
var inst_9479 = (state_9500[(7)]);
var inst_9479__$1 = (state_9500[(2)]);
var inst_9480 = (inst_9479__$1 == null);
var state_9500__$1 = (function (){var statearr_9504 = state_9500;
(statearr_9504[(7)] = inst_9479__$1);

return statearr_9504;
})();
if(cljs.core.truth_(inst_9480)){
var statearr_9505_9531 = state_9500__$1;
(statearr_9505_9531[(1)] = (5));

} else {
var statearr_9506_9532 = state_9500__$1;
(statearr_9506_9532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (13))){
var state_9500__$1 = state_9500;
var statearr_9507_9533 = state_9500__$1;
(statearr_9507_9533[(2)] = null);

(statearr_9507_9533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (6))){
var inst_9479 = (state_9500[(7)]);
var state_9500__$1 = state_9500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9500__$1,(11),to,inst_9479);
} else {
if((state_val_9501 === (3))){
var inst_9498 = (state_9500[(2)]);
var state_9500__$1 = state_9500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9500__$1,inst_9498);
} else {
if((state_val_9501 === (12))){
var state_9500__$1 = state_9500;
var statearr_9508_9534 = state_9500__$1;
(statearr_9508_9534[(2)] = null);

(statearr_9508_9534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (2))){
var state_9500__$1 = state_9500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9500__$1,(4),from);
} else {
if((state_val_9501 === (11))){
var inst_9489 = (state_9500[(2)]);
var state_9500__$1 = state_9500;
if(cljs.core.truth_(inst_9489)){
var statearr_9509_9535 = state_9500__$1;
(statearr_9509_9535[(1)] = (12));

} else {
var statearr_9510_9536 = state_9500__$1;
(statearr_9510_9536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (9))){
var state_9500__$1 = state_9500;
var statearr_9511_9537 = state_9500__$1;
(statearr_9511_9537[(2)] = null);

(statearr_9511_9537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (5))){
var state_9500__$1 = state_9500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9512_9538 = state_9500__$1;
(statearr_9512_9538[(1)] = (8));

} else {
var statearr_9513_9539 = state_9500__$1;
(statearr_9513_9539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (14))){
var inst_9494 = (state_9500[(2)]);
var state_9500__$1 = state_9500;
var statearr_9514_9540 = state_9500__$1;
(statearr_9514_9540[(2)] = inst_9494);

(statearr_9514_9540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (10))){
var inst_9486 = (state_9500[(2)]);
var state_9500__$1 = state_9500;
var statearr_9515_9541 = state_9500__$1;
(statearr_9515_9541[(2)] = inst_9486);

(statearr_9515_9541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9501 === (8))){
var inst_9483 = cljs.core.async.close_BANG_.call(null,to);
var state_9500__$1 = state_9500;
var statearr_9516_9542 = state_9500__$1;
(statearr_9516_9542[(2)] = inst_9483);

(statearr_9516_9542[(1)] = (10));


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
});})(c__9361__auto___9528))
;
return ((function (switch__9249__auto__,c__9361__auto___9528){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_9520 = [null,null,null,null,null,null,null,null];
(statearr_9520[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_9520[(1)] = (1));

return statearr_9520;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_9500){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_9500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e9521){if((e9521 instanceof Object)){
var ex__9253__auto__ = e9521;
var statearr_9522_9543 = state_9500;
(statearr_9522_9543[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9544 = state_9500;
state_9500 = G__9544;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_9500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_9500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___9528))
})();
var state__9363__auto__ = (function (){var statearr_9523 = f__9362__auto__.call(null);
(statearr_9523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___9528);

return statearr_9523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___9528))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9732){
var vec__9733 = p__9732;
var v = cljs.core.nth.call(null,vec__9733,(0),null);
var p = cljs.core.nth.call(null,vec__9733,(1),null);
var job = vec__9733;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9361__auto___9919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___9919,res,vec__9733,v,p,job,jobs,results){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___9919,res,vec__9733,v,p,job,jobs,results){
return (function (state_9740){
var state_val_9741 = (state_9740[(1)]);
if((state_val_9741 === (1))){
var state_9740__$1 = state_9740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9740__$1,(2),res,v);
} else {
if((state_val_9741 === (2))){
var inst_9737 = (state_9740[(2)]);
var inst_9738 = cljs.core.async.close_BANG_.call(null,res);
var state_9740__$1 = (function (){var statearr_9742 = state_9740;
(statearr_9742[(7)] = inst_9737);

return statearr_9742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9740__$1,inst_9738);
} else {
return null;
}
}
});})(c__9361__auto___9919,res,vec__9733,v,p,job,jobs,results))
;
return ((function (switch__9249__auto__,c__9361__auto___9919,res,vec__9733,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0 = (function (){
var statearr_9746 = [null,null,null,null,null,null,null,null];
(statearr_9746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__);

(statearr_9746[(1)] = (1));

return statearr_9746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1 = (function (state_9740){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_9740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e9747){if((e9747 instanceof Object)){
var ex__9253__auto__ = e9747;
var statearr_9748_9920 = state_9740;
(statearr_9748_9920[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9921 = state_9740;
state_9740 = G__9921;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = function(state_9740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1.call(this,state_9740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___9919,res,vec__9733,v,p,job,jobs,results))
})();
var state__9363__auto__ = (function (){var statearr_9749 = f__9362__auto__.call(null);
(statearr_9749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___9919);

return statearr_9749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___9919,res,vec__9733,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9750){
var vec__9751 = p__9750;
var v = cljs.core.nth.call(null,vec__9751,(0),null);
var p = cljs.core.nth.call(null,vec__9751,(1),null);
var job = vec__9751;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7737__auto___9922 = n;
var __9923 = (0);
while(true){
if((__9923 < n__7737__auto___9922)){
var G__9754_9924 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9754_9924) {
case "compute":
var c__9361__auto___9926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9923,c__9361__auto___9926,G__9754_9924,n__7737__auto___9922,jobs,results,process,async){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (__9923,c__9361__auto___9926,G__9754_9924,n__7737__auto___9922,jobs,results,process,async){
return (function (state_9767){
var state_val_9768 = (state_9767[(1)]);
if((state_val_9768 === (1))){
var state_9767__$1 = state_9767;
var statearr_9769_9927 = state_9767__$1;
(statearr_9769_9927[(2)] = null);

(statearr_9769_9927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9768 === (2))){
var state_9767__$1 = state_9767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9767__$1,(4),jobs);
} else {
if((state_val_9768 === (3))){
var inst_9765 = (state_9767[(2)]);
var state_9767__$1 = state_9767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9767__$1,inst_9765);
} else {
if((state_val_9768 === (4))){
var inst_9757 = (state_9767[(2)]);
var inst_9758 = process.call(null,inst_9757);
var state_9767__$1 = state_9767;
if(cljs.core.truth_(inst_9758)){
var statearr_9770_9928 = state_9767__$1;
(statearr_9770_9928[(1)] = (5));

} else {
var statearr_9771_9929 = state_9767__$1;
(statearr_9771_9929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9768 === (5))){
var state_9767__$1 = state_9767;
var statearr_9772_9930 = state_9767__$1;
(statearr_9772_9930[(2)] = null);

(statearr_9772_9930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9768 === (6))){
var state_9767__$1 = state_9767;
var statearr_9773_9931 = state_9767__$1;
(statearr_9773_9931[(2)] = null);

(statearr_9773_9931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9768 === (7))){
var inst_9763 = (state_9767[(2)]);
var state_9767__$1 = state_9767;
var statearr_9774_9932 = state_9767__$1;
(statearr_9774_9932[(2)] = inst_9763);

(statearr_9774_9932[(1)] = (3));


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
});})(__9923,c__9361__auto___9926,G__9754_9924,n__7737__auto___9922,jobs,results,process,async))
;
return ((function (__9923,switch__9249__auto__,c__9361__auto___9926,G__9754_9924,n__7737__auto___9922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0 = (function (){
var statearr_9778 = [null,null,null,null,null,null,null];
(statearr_9778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__);

(statearr_9778[(1)] = (1));

return statearr_9778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1 = (function (state_9767){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_9767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e9779){if((e9779 instanceof Object)){
var ex__9253__auto__ = e9779;
var statearr_9780_9933 = state_9767;
(statearr_9780_9933[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9934 = state_9767;
state_9767 = G__9934;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = function(state_9767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1.call(this,state_9767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__;
})()
;})(__9923,switch__9249__auto__,c__9361__auto___9926,G__9754_9924,n__7737__auto___9922,jobs,results,process,async))
})();
var state__9363__auto__ = (function (){var statearr_9781 = f__9362__auto__.call(null);
(statearr_9781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___9926);

return statearr_9781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(__9923,c__9361__auto___9926,G__9754_9924,n__7737__auto___9922,jobs,results,process,async))
);


break;
case "async":
var c__9361__auto___9935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9923,c__9361__auto___9935,G__9754_9924,n__7737__auto___9922,jobs,results,process,async){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (__9923,c__9361__auto___9935,G__9754_9924,n__7737__auto___9922,jobs,results,process,async){
return (function (state_9794){
var state_val_9795 = (state_9794[(1)]);
if((state_val_9795 === (1))){
var state_9794__$1 = state_9794;
var statearr_9796_9936 = state_9794__$1;
(statearr_9796_9936[(2)] = null);

(statearr_9796_9936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9795 === (2))){
var state_9794__$1 = state_9794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9794__$1,(4),jobs);
} else {
if((state_val_9795 === (3))){
var inst_9792 = (state_9794[(2)]);
var state_9794__$1 = state_9794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9794__$1,inst_9792);
} else {
if((state_val_9795 === (4))){
var inst_9784 = (state_9794[(2)]);
var inst_9785 = async.call(null,inst_9784);
var state_9794__$1 = state_9794;
if(cljs.core.truth_(inst_9785)){
var statearr_9797_9937 = state_9794__$1;
(statearr_9797_9937[(1)] = (5));

} else {
var statearr_9798_9938 = state_9794__$1;
(statearr_9798_9938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9795 === (5))){
var state_9794__$1 = state_9794;
var statearr_9799_9939 = state_9794__$1;
(statearr_9799_9939[(2)] = null);

(statearr_9799_9939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9795 === (6))){
var state_9794__$1 = state_9794;
var statearr_9800_9940 = state_9794__$1;
(statearr_9800_9940[(2)] = null);

(statearr_9800_9940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9795 === (7))){
var inst_9790 = (state_9794[(2)]);
var state_9794__$1 = state_9794;
var statearr_9801_9941 = state_9794__$1;
(statearr_9801_9941[(2)] = inst_9790);

(statearr_9801_9941[(1)] = (3));


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
});})(__9923,c__9361__auto___9935,G__9754_9924,n__7737__auto___9922,jobs,results,process,async))
;
return ((function (__9923,switch__9249__auto__,c__9361__auto___9935,G__9754_9924,n__7737__auto___9922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0 = (function (){
var statearr_9805 = [null,null,null,null,null,null,null];
(statearr_9805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__);

(statearr_9805[(1)] = (1));

return statearr_9805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1 = (function (state_9794){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_9794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e9806){if((e9806 instanceof Object)){
var ex__9253__auto__ = e9806;
var statearr_9807_9942 = state_9794;
(statearr_9807_9942[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9943 = state_9794;
state_9794 = G__9943;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = function(state_9794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1.call(this,state_9794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__;
})()
;})(__9923,switch__9249__auto__,c__9361__auto___9935,G__9754_9924,n__7737__auto___9922,jobs,results,process,async))
})();
var state__9363__auto__ = (function (){var statearr_9808 = f__9362__auto__.call(null);
(statearr_9808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___9935);

return statearr_9808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(__9923,c__9361__auto___9935,G__9754_9924,n__7737__auto___9922,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__9944 = (__9923 + (1));
__9923 = G__9944;
continue;
} else {
}
break;
}

var c__9361__auto___9945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___9945,jobs,results,process,async){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___9945,jobs,results,process,async){
return (function (state_9830){
var state_val_9831 = (state_9830[(1)]);
if((state_val_9831 === (1))){
var state_9830__$1 = state_9830;
var statearr_9832_9946 = state_9830__$1;
(statearr_9832_9946[(2)] = null);

(statearr_9832_9946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9831 === (2))){
var state_9830__$1 = state_9830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9830__$1,(4),from);
} else {
if((state_val_9831 === (3))){
var inst_9828 = (state_9830[(2)]);
var state_9830__$1 = state_9830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9830__$1,inst_9828);
} else {
if((state_val_9831 === (4))){
var inst_9811 = (state_9830[(7)]);
var inst_9811__$1 = (state_9830[(2)]);
var inst_9812 = (inst_9811__$1 == null);
var state_9830__$1 = (function (){var statearr_9833 = state_9830;
(statearr_9833[(7)] = inst_9811__$1);

return statearr_9833;
})();
if(cljs.core.truth_(inst_9812)){
var statearr_9834_9947 = state_9830__$1;
(statearr_9834_9947[(1)] = (5));

} else {
var statearr_9835_9948 = state_9830__$1;
(statearr_9835_9948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9831 === (5))){
var inst_9814 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9830__$1 = state_9830;
var statearr_9836_9949 = state_9830__$1;
(statearr_9836_9949[(2)] = inst_9814);

(statearr_9836_9949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9831 === (6))){
var inst_9816 = (state_9830[(8)]);
var inst_9811 = (state_9830[(7)]);
var inst_9816__$1 = cljs.core.async.chan.call(null,(1));
var inst_9817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9818 = [inst_9811,inst_9816__$1];
var inst_9819 = (new cljs.core.PersistentVector(null,2,(5),inst_9817,inst_9818,null));
var state_9830__$1 = (function (){var statearr_9837 = state_9830;
(statearr_9837[(8)] = inst_9816__$1);

return statearr_9837;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9830__$1,(8),jobs,inst_9819);
} else {
if((state_val_9831 === (7))){
var inst_9826 = (state_9830[(2)]);
var state_9830__$1 = state_9830;
var statearr_9838_9950 = state_9830__$1;
(statearr_9838_9950[(2)] = inst_9826);

(statearr_9838_9950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9831 === (8))){
var inst_9816 = (state_9830[(8)]);
var inst_9821 = (state_9830[(2)]);
var state_9830__$1 = (function (){var statearr_9839 = state_9830;
(statearr_9839[(9)] = inst_9821);

return statearr_9839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9830__$1,(9),results,inst_9816);
} else {
if((state_val_9831 === (9))){
var inst_9823 = (state_9830[(2)]);
var state_9830__$1 = (function (){var statearr_9840 = state_9830;
(statearr_9840[(10)] = inst_9823);

return statearr_9840;
})();
var statearr_9841_9951 = state_9830__$1;
(statearr_9841_9951[(2)] = null);

(statearr_9841_9951[(1)] = (2));


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
});})(c__9361__auto___9945,jobs,results,process,async))
;
return ((function (switch__9249__auto__,c__9361__auto___9945,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0 = (function (){
var statearr_9845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__);

(statearr_9845[(1)] = (1));

return statearr_9845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1 = (function (state_9830){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_9830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e9846){if((e9846 instanceof Object)){
var ex__9253__auto__ = e9846;
var statearr_9847_9952 = state_9830;
(statearr_9847_9952[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9953 = state_9830;
state_9830 = G__9953;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = function(state_9830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1.call(this,state_9830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___9945,jobs,results,process,async))
})();
var state__9363__auto__ = (function (){var statearr_9848 = f__9362__auto__.call(null);
(statearr_9848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___9945);

return statearr_9848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___9945,jobs,results,process,async))
);


var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__,jobs,results,process,async){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__,jobs,results,process,async){
return (function (state_9886){
var state_val_9887 = (state_9886[(1)]);
if((state_val_9887 === (7))){
var inst_9882 = (state_9886[(2)]);
var state_9886__$1 = state_9886;
var statearr_9888_9954 = state_9886__$1;
(statearr_9888_9954[(2)] = inst_9882);

(statearr_9888_9954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (20))){
var state_9886__$1 = state_9886;
var statearr_9889_9955 = state_9886__$1;
(statearr_9889_9955[(2)] = null);

(statearr_9889_9955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (1))){
var state_9886__$1 = state_9886;
var statearr_9890_9956 = state_9886__$1;
(statearr_9890_9956[(2)] = null);

(statearr_9890_9956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (4))){
var inst_9851 = (state_9886[(7)]);
var inst_9851__$1 = (state_9886[(2)]);
var inst_9852 = (inst_9851__$1 == null);
var state_9886__$1 = (function (){var statearr_9891 = state_9886;
(statearr_9891[(7)] = inst_9851__$1);

return statearr_9891;
})();
if(cljs.core.truth_(inst_9852)){
var statearr_9892_9957 = state_9886__$1;
(statearr_9892_9957[(1)] = (5));

} else {
var statearr_9893_9958 = state_9886__$1;
(statearr_9893_9958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (15))){
var inst_9864 = (state_9886[(8)]);
var state_9886__$1 = state_9886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9886__$1,(18),to,inst_9864);
} else {
if((state_val_9887 === (21))){
var inst_9877 = (state_9886[(2)]);
var state_9886__$1 = state_9886;
var statearr_9894_9959 = state_9886__$1;
(statearr_9894_9959[(2)] = inst_9877);

(statearr_9894_9959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (13))){
var inst_9879 = (state_9886[(2)]);
var state_9886__$1 = (function (){var statearr_9895 = state_9886;
(statearr_9895[(9)] = inst_9879);

return statearr_9895;
})();
var statearr_9896_9960 = state_9886__$1;
(statearr_9896_9960[(2)] = null);

(statearr_9896_9960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (6))){
var inst_9851 = (state_9886[(7)]);
var state_9886__$1 = state_9886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9886__$1,(11),inst_9851);
} else {
if((state_val_9887 === (17))){
var inst_9872 = (state_9886[(2)]);
var state_9886__$1 = state_9886;
if(cljs.core.truth_(inst_9872)){
var statearr_9897_9961 = state_9886__$1;
(statearr_9897_9961[(1)] = (19));

} else {
var statearr_9898_9962 = state_9886__$1;
(statearr_9898_9962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (3))){
var inst_9884 = (state_9886[(2)]);
var state_9886__$1 = state_9886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9886__$1,inst_9884);
} else {
if((state_val_9887 === (12))){
var inst_9861 = (state_9886[(10)]);
var state_9886__$1 = state_9886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9886__$1,(14),inst_9861);
} else {
if((state_val_9887 === (2))){
var state_9886__$1 = state_9886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9886__$1,(4),results);
} else {
if((state_val_9887 === (19))){
var state_9886__$1 = state_9886;
var statearr_9899_9963 = state_9886__$1;
(statearr_9899_9963[(2)] = null);

(statearr_9899_9963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (11))){
var inst_9861 = (state_9886[(2)]);
var state_9886__$1 = (function (){var statearr_9900 = state_9886;
(statearr_9900[(10)] = inst_9861);

return statearr_9900;
})();
var statearr_9901_9964 = state_9886__$1;
(statearr_9901_9964[(2)] = null);

(statearr_9901_9964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (9))){
var state_9886__$1 = state_9886;
var statearr_9902_9965 = state_9886__$1;
(statearr_9902_9965[(2)] = null);

(statearr_9902_9965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (5))){
var state_9886__$1 = state_9886;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9903_9966 = state_9886__$1;
(statearr_9903_9966[(1)] = (8));

} else {
var statearr_9904_9967 = state_9886__$1;
(statearr_9904_9967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (14))){
var inst_9866 = (state_9886[(11)]);
var inst_9864 = (state_9886[(8)]);
var inst_9864__$1 = (state_9886[(2)]);
var inst_9865 = (inst_9864__$1 == null);
var inst_9866__$1 = cljs.core.not.call(null,inst_9865);
var state_9886__$1 = (function (){var statearr_9905 = state_9886;
(statearr_9905[(11)] = inst_9866__$1);

(statearr_9905[(8)] = inst_9864__$1);

return statearr_9905;
})();
if(inst_9866__$1){
var statearr_9906_9968 = state_9886__$1;
(statearr_9906_9968[(1)] = (15));

} else {
var statearr_9907_9969 = state_9886__$1;
(statearr_9907_9969[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (16))){
var inst_9866 = (state_9886[(11)]);
var state_9886__$1 = state_9886;
var statearr_9908_9970 = state_9886__$1;
(statearr_9908_9970[(2)] = inst_9866);

(statearr_9908_9970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (10))){
var inst_9858 = (state_9886[(2)]);
var state_9886__$1 = state_9886;
var statearr_9909_9971 = state_9886__$1;
(statearr_9909_9971[(2)] = inst_9858);

(statearr_9909_9971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (18))){
var inst_9869 = (state_9886[(2)]);
var state_9886__$1 = state_9886;
var statearr_9910_9972 = state_9886__$1;
(statearr_9910_9972[(2)] = inst_9869);

(statearr_9910_9972[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (8))){
var inst_9855 = cljs.core.async.close_BANG_.call(null,to);
var state_9886__$1 = state_9886;
var statearr_9911_9973 = state_9886__$1;
(statearr_9911_9973[(2)] = inst_9855);

(statearr_9911_9973[(1)] = (10));


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
});})(c__9361__auto__,jobs,results,process,async))
;
return ((function (switch__9249__auto__,c__9361__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0 = (function (){
var statearr_9915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__);

(statearr_9915[(1)] = (1));

return statearr_9915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1 = (function (state_9886){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_9886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e9916){if((e9916 instanceof Object)){
var ex__9253__auto__ = e9916;
var statearr_9917_9974 = state_9886;
(statearr_9917_9974[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9975 = state_9886;
state_9886 = G__9975;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__ = function(state_9886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1.call(this,state_9886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9250__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__,jobs,results,process,async))
})();
var state__9363__auto__ = (function (){var statearr_9918 = f__9362__auto__.call(null);
(statearr_9918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_9918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__,jobs,results,process,async))
);

return c__9361__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9976 = [];
var len__7923__auto___9979 = arguments.length;
var i__7924__auto___9980 = (0);
while(true){
if((i__7924__auto___9980 < len__7923__auto___9979)){
args9976.push((arguments[i__7924__auto___9980]));

var G__9981 = (i__7924__auto___9980 + (1));
i__7924__auto___9980 = G__9981;
continue;
} else {
}
break;
}

var G__9978 = args9976.length;
switch (G__9978) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9976.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9983 = [];
var len__7923__auto___9986 = arguments.length;
var i__7924__auto___9987 = (0);
while(true){
if((i__7924__auto___9987 < len__7923__auto___9986)){
args9983.push((arguments[i__7924__auto___9987]));

var G__9988 = (i__7924__auto___9987 + (1));
i__7924__auto___9987 = G__9988;
continue;
} else {
}
break;
}

var G__9985 = args9983.length;
switch (G__9985) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9983.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9990 = [];
var len__7923__auto___10043 = arguments.length;
var i__7924__auto___10044 = (0);
while(true){
if((i__7924__auto___10044 < len__7923__auto___10043)){
args9990.push((arguments[i__7924__auto___10044]));

var G__10045 = (i__7924__auto___10044 + (1));
i__7924__auto___10044 = G__10045;
continue;
} else {
}
break;
}

var G__9992 = args9990.length;
switch (G__9992) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9990.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9361__auto___10047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___10047,tc,fc){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___10047,tc,fc){
return (function (state_10018){
var state_val_10019 = (state_10018[(1)]);
if((state_val_10019 === (7))){
var inst_10014 = (state_10018[(2)]);
var state_10018__$1 = state_10018;
var statearr_10020_10048 = state_10018__$1;
(statearr_10020_10048[(2)] = inst_10014);

(statearr_10020_10048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (1))){
var state_10018__$1 = state_10018;
var statearr_10021_10049 = state_10018__$1;
(statearr_10021_10049[(2)] = null);

(statearr_10021_10049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (4))){
var inst_9995 = (state_10018[(7)]);
var inst_9995__$1 = (state_10018[(2)]);
var inst_9996 = (inst_9995__$1 == null);
var state_10018__$1 = (function (){var statearr_10022 = state_10018;
(statearr_10022[(7)] = inst_9995__$1);

return statearr_10022;
})();
if(cljs.core.truth_(inst_9996)){
var statearr_10023_10050 = state_10018__$1;
(statearr_10023_10050[(1)] = (5));

} else {
var statearr_10024_10051 = state_10018__$1;
(statearr_10024_10051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (13))){
var state_10018__$1 = state_10018;
var statearr_10025_10052 = state_10018__$1;
(statearr_10025_10052[(2)] = null);

(statearr_10025_10052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (6))){
var inst_9995 = (state_10018[(7)]);
var inst_10001 = p.call(null,inst_9995);
var state_10018__$1 = state_10018;
if(cljs.core.truth_(inst_10001)){
var statearr_10026_10053 = state_10018__$1;
(statearr_10026_10053[(1)] = (9));

} else {
var statearr_10027_10054 = state_10018__$1;
(statearr_10027_10054[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (3))){
var inst_10016 = (state_10018[(2)]);
var state_10018__$1 = state_10018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10018__$1,inst_10016);
} else {
if((state_val_10019 === (12))){
var state_10018__$1 = state_10018;
var statearr_10028_10055 = state_10018__$1;
(statearr_10028_10055[(2)] = null);

(statearr_10028_10055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (2))){
var state_10018__$1 = state_10018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10018__$1,(4),ch);
} else {
if((state_val_10019 === (11))){
var inst_9995 = (state_10018[(7)]);
var inst_10005 = (state_10018[(2)]);
var state_10018__$1 = state_10018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10018__$1,(8),inst_10005,inst_9995);
} else {
if((state_val_10019 === (9))){
var state_10018__$1 = state_10018;
var statearr_10029_10056 = state_10018__$1;
(statearr_10029_10056[(2)] = tc);

(statearr_10029_10056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (5))){
var inst_9998 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9999 = cljs.core.async.close_BANG_.call(null,fc);
var state_10018__$1 = (function (){var statearr_10030 = state_10018;
(statearr_10030[(8)] = inst_9998);

return statearr_10030;
})();
var statearr_10031_10057 = state_10018__$1;
(statearr_10031_10057[(2)] = inst_9999);

(statearr_10031_10057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (14))){
var inst_10012 = (state_10018[(2)]);
var state_10018__$1 = state_10018;
var statearr_10032_10058 = state_10018__$1;
(statearr_10032_10058[(2)] = inst_10012);

(statearr_10032_10058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (10))){
var state_10018__$1 = state_10018;
var statearr_10033_10059 = state_10018__$1;
(statearr_10033_10059[(2)] = fc);

(statearr_10033_10059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (8))){
var inst_10007 = (state_10018[(2)]);
var state_10018__$1 = state_10018;
if(cljs.core.truth_(inst_10007)){
var statearr_10034_10060 = state_10018__$1;
(statearr_10034_10060[(1)] = (12));

} else {
var statearr_10035_10061 = state_10018__$1;
(statearr_10035_10061[(1)] = (13));

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
});})(c__9361__auto___10047,tc,fc))
;
return ((function (switch__9249__auto__,c__9361__auto___10047,tc,fc){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_10039 = [null,null,null,null,null,null,null,null,null];
(statearr_10039[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_10039[(1)] = (1));

return statearr_10039;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_10018){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_10018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e10040){if((e10040 instanceof Object)){
var ex__9253__auto__ = e10040;
var statearr_10041_10062 = state_10018;
(statearr_10041_10062[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10063 = state_10018;
state_10018 = G__10063;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_10018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_10018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___10047,tc,fc))
})();
var state__9363__auto__ = (function (){var statearr_10042 = f__9362__auto__.call(null);
(statearr_10042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___10047);

return statearr_10042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___10047,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__){
return (function (state_10127){
var state_val_10128 = (state_10127[(1)]);
if((state_val_10128 === (7))){
var inst_10123 = (state_10127[(2)]);
var state_10127__$1 = state_10127;
var statearr_10129_10150 = state_10127__$1;
(statearr_10129_10150[(2)] = inst_10123);

(statearr_10129_10150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10128 === (1))){
var inst_10107 = init;
var state_10127__$1 = (function (){var statearr_10130 = state_10127;
(statearr_10130[(7)] = inst_10107);

return statearr_10130;
})();
var statearr_10131_10151 = state_10127__$1;
(statearr_10131_10151[(2)] = null);

(statearr_10131_10151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10128 === (4))){
var inst_10110 = (state_10127[(8)]);
var inst_10110__$1 = (state_10127[(2)]);
var inst_10111 = (inst_10110__$1 == null);
var state_10127__$1 = (function (){var statearr_10132 = state_10127;
(statearr_10132[(8)] = inst_10110__$1);

return statearr_10132;
})();
if(cljs.core.truth_(inst_10111)){
var statearr_10133_10152 = state_10127__$1;
(statearr_10133_10152[(1)] = (5));

} else {
var statearr_10134_10153 = state_10127__$1;
(statearr_10134_10153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10128 === (6))){
var inst_10107 = (state_10127[(7)]);
var inst_10110 = (state_10127[(8)]);
var inst_10114 = (state_10127[(9)]);
var inst_10114__$1 = f.call(null,inst_10107,inst_10110);
var inst_10115 = cljs.core.reduced_QMARK_.call(null,inst_10114__$1);
var state_10127__$1 = (function (){var statearr_10135 = state_10127;
(statearr_10135[(9)] = inst_10114__$1);

return statearr_10135;
})();
if(inst_10115){
var statearr_10136_10154 = state_10127__$1;
(statearr_10136_10154[(1)] = (8));

} else {
var statearr_10137_10155 = state_10127__$1;
(statearr_10137_10155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10128 === (3))){
var inst_10125 = (state_10127[(2)]);
var state_10127__$1 = state_10127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10127__$1,inst_10125);
} else {
if((state_val_10128 === (2))){
var state_10127__$1 = state_10127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10127__$1,(4),ch);
} else {
if((state_val_10128 === (9))){
var inst_10114 = (state_10127[(9)]);
var inst_10107 = inst_10114;
var state_10127__$1 = (function (){var statearr_10138 = state_10127;
(statearr_10138[(7)] = inst_10107);

return statearr_10138;
})();
var statearr_10139_10156 = state_10127__$1;
(statearr_10139_10156[(2)] = null);

(statearr_10139_10156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10128 === (5))){
var inst_10107 = (state_10127[(7)]);
var state_10127__$1 = state_10127;
var statearr_10140_10157 = state_10127__$1;
(statearr_10140_10157[(2)] = inst_10107);

(statearr_10140_10157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10128 === (10))){
var inst_10121 = (state_10127[(2)]);
var state_10127__$1 = state_10127;
var statearr_10141_10158 = state_10127__$1;
(statearr_10141_10158[(2)] = inst_10121);

(statearr_10141_10158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10128 === (8))){
var inst_10114 = (state_10127[(9)]);
var inst_10117 = cljs.core.deref.call(null,inst_10114);
var state_10127__$1 = state_10127;
var statearr_10142_10159 = state_10127__$1;
(statearr_10142_10159[(2)] = inst_10117);

(statearr_10142_10159[(1)] = (10));


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
});})(c__9361__auto__))
;
return ((function (switch__9249__auto__,c__9361__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9250__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9250__auto____0 = (function (){
var statearr_10146 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10146[(0)] = cljs$core$async$reduce_$_state_machine__9250__auto__);

(statearr_10146[(1)] = (1));

return statearr_10146;
});
var cljs$core$async$reduce_$_state_machine__9250__auto____1 = (function (state_10127){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_10127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e10147){if((e10147 instanceof Object)){
var ex__9253__auto__ = e10147;
var statearr_10148_10160 = state_10127;
(statearr_10148_10160[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10161 = state_10127;
state_10127 = G__10161;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9250__auto__ = function(state_10127){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9250__auto____1.call(this,state_10127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9250__auto____0;
cljs$core$async$reduce_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9250__auto____1;
return cljs$core$async$reduce_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__))
})();
var state__9363__auto__ = (function (){var statearr_10149 = f__9362__auto__.call(null);
(statearr_10149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_10149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__))
);

return c__9361__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__,f__$1){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__,f__$1){
return (function (state_10181){
var state_val_10182 = (state_10181[(1)]);
if((state_val_10182 === (1))){
var inst_10176 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10181__$1 = state_10181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10181__$1,(2),inst_10176);
} else {
if((state_val_10182 === (2))){
var inst_10178 = (state_10181[(2)]);
var inst_10179 = f__$1.call(null,inst_10178);
var state_10181__$1 = state_10181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10181__$1,inst_10179);
} else {
return null;
}
}
});})(c__9361__auto__,f__$1))
;
return ((function (switch__9249__auto__,c__9361__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9250__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9250__auto____0 = (function (){
var statearr_10186 = [null,null,null,null,null,null,null];
(statearr_10186[(0)] = cljs$core$async$transduce_$_state_machine__9250__auto__);

(statearr_10186[(1)] = (1));

return statearr_10186;
});
var cljs$core$async$transduce_$_state_machine__9250__auto____1 = (function (state_10181){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_10181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e10187){if((e10187 instanceof Object)){
var ex__9253__auto__ = e10187;
var statearr_10188_10190 = state_10181;
(statearr_10188_10190[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10191 = state_10181;
state_10181 = G__10191;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9250__auto__ = function(state_10181){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9250__auto____1.call(this,state_10181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9250__auto____0;
cljs$core$async$transduce_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9250__auto____1;
return cljs$core$async$transduce_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__,f__$1))
})();
var state__9363__auto__ = (function (){var statearr_10189 = f__9362__auto__.call(null);
(statearr_10189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_10189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__,f__$1))
);

return c__9361__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10192 = [];
var len__7923__auto___10244 = arguments.length;
var i__7924__auto___10245 = (0);
while(true){
if((i__7924__auto___10245 < len__7923__auto___10244)){
args10192.push((arguments[i__7924__auto___10245]));

var G__10246 = (i__7924__auto___10245 + (1));
i__7924__auto___10245 = G__10246;
continue;
} else {
}
break;
}

var G__10194 = args10192.length;
switch (G__10194) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10192.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__){
return (function (state_10219){
var state_val_10220 = (state_10219[(1)]);
if((state_val_10220 === (7))){
var inst_10201 = (state_10219[(2)]);
var state_10219__$1 = state_10219;
var statearr_10221_10248 = state_10219__$1;
(statearr_10221_10248[(2)] = inst_10201);

(statearr_10221_10248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (1))){
var inst_10195 = cljs.core.seq.call(null,coll);
var inst_10196 = inst_10195;
var state_10219__$1 = (function (){var statearr_10222 = state_10219;
(statearr_10222[(7)] = inst_10196);

return statearr_10222;
})();
var statearr_10223_10249 = state_10219__$1;
(statearr_10223_10249[(2)] = null);

(statearr_10223_10249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (4))){
var inst_10196 = (state_10219[(7)]);
var inst_10199 = cljs.core.first.call(null,inst_10196);
var state_10219__$1 = state_10219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10219__$1,(7),ch,inst_10199);
} else {
if((state_val_10220 === (13))){
var inst_10213 = (state_10219[(2)]);
var state_10219__$1 = state_10219;
var statearr_10224_10250 = state_10219__$1;
(statearr_10224_10250[(2)] = inst_10213);

(statearr_10224_10250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (6))){
var inst_10204 = (state_10219[(2)]);
var state_10219__$1 = state_10219;
if(cljs.core.truth_(inst_10204)){
var statearr_10225_10251 = state_10219__$1;
(statearr_10225_10251[(1)] = (8));

} else {
var statearr_10226_10252 = state_10219__$1;
(statearr_10226_10252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (3))){
var inst_10217 = (state_10219[(2)]);
var state_10219__$1 = state_10219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10219__$1,inst_10217);
} else {
if((state_val_10220 === (12))){
var state_10219__$1 = state_10219;
var statearr_10227_10253 = state_10219__$1;
(statearr_10227_10253[(2)] = null);

(statearr_10227_10253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (2))){
var inst_10196 = (state_10219[(7)]);
var state_10219__$1 = state_10219;
if(cljs.core.truth_(inst_10196)){
var statearr_10228_10254 = state_10219__$1;
(statearr_10228_10254[(1)] = (4));

} else {
var statearr_10229_10255 = state_10219__$1;
(statearr_10229_10255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (11))){
var inst_10210 = cljs.core.async.close_BANG_.call(null,ch);
var state_10219__$1 = state_10219;
var statearr_10230_10256 = state_10219__$1;
(statearr_10230_10256[(2)] = inst_10210);

(statearr_10230_10256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (9))){
var state_10219__$1 = state_10219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10231_10257 = state_10219__$1;
(statearr_10231_10257[(1)] = (11));

} else {
var statearr_10232_10258 = state_10219__$1;
(statearr_10232_10258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (5))){
var inst_10196 = (state_10219[(7)]);
var state_10219__$1 = state_10219;
var statearr_10233_10259 = state_10219__$1;
(statearr_10233_10259[(2)] = inst_10196);

(statearr_10233_10259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (10))){
var inst_10215 = (state_10219[(2)]);
var state_10219__$1 = state_10219;
var statearr_10234_10260 = state_10219__$1;
(statearr_10234_10260[(2)] = inst_10215);

(statearr_10234_10260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10220 === (8))){
var inst_10196 = (state_10219[(7)]);
var inst_10206 = cljs.core.next.call(null,inst_10196);
var inst_10196__$1 = inst_10206;
var state_10219__$1 = (function (){var statearr_10235 = state_10219;
(statearr_10235[(7)] = inst_10196__$1);

return statearr_10235;
})();
var statearr_10236_10261 = state_10219__$1;
(statearr_10236_10261[(2)] = null);

(statearr_10236_10261[(1)] = (2));


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
});})(c__9361__auto__))
;
return ((function (switch__9249__auto__,c__9361__auto__){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_10240 = [null,null,null,null,null,null,null,null];
(statearr_10240[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_10240[(1)] = (1));

return statearr_10240;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_10219){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_10219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e10241){if((e10241 instanceof Object)){
var ex__9253__auto__ = e10241;
var statearr_10242_10262 = state_10219;
(statearr_10242_10262[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10263 = state_10219;
state_10219 = G__10263;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_10219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_10219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__))
})();
var state__9363__auto__ = (function (){var statearr_10243 = f__9362__auto__.call(null);
(statearr_10243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_10243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__))
);

return c__9361__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7482__auto__ = (((_ == null))?null:_);
var m__7483__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,_);
} else {
var m__7483__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7483__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m);
} else {
var m__7483__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10489 = (function (ch,cs,meta10490){
this.ch = ch;
this.cs = cs;
this.meta10490 = meta10490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10491,meta10490__$1){
var self__ = this;
var _10491__$1 = this;
return (new cljs.core.async.t_cljs$core$async10489(self__.ch,self__.cs,meta10490__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10491){
var self__ = this;
var _10491__$1 = this;
return self__.meta10490;
});})(cs))
;

cljs.core.async.t_cljs$core$async10489.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10489.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10489.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10489.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10489.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10489.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10490","meta10490",1215974260,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10489";

cljs.core.async.t_cljs$core$async10489.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async10489");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10489 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10489(ch__$1,cs__$1,meta10490){
return (new cljs.core.async.t_cljs$core$async10489(ch__$1,cs__$1,meta10490));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10489(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9361__auto___10714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___10714,cs,m,dchan,dctr,done){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___10714,cs,m,dchan,dctr,done){
return (function (state_10626){
var state_val_10627 = (state_10626[(1)]);
if((state_val_10627 === (7))){
var inst_10622 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10628_10715 = state_10626__$1;
(statearr_10628_10715[(2)] = inst_10622);

(statearr_10628_10715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (20))){
var inst_10525 = (state_10626[(7)]);
var inst_10537 = cljs.core.first.call(null,inst_10525);
var inst_10538 = cljs.core.nth.call(null,inst_10537,(0),null);
var inst_10539 = cljs.core.nth.call(null,inst_10537,(1),null);
var state_10626__$1 = (function (){var statearr_10629 = state_10626;
(statearr_10629[(8)] = inst_10538);

return statearr_10629;
})();
if(cljs.core.truth_(inst_10539)){
var statearr_10630_10716 = state_10626__$1;
(statearr_10630_10716[(1)] = (22));

} else {
var statearr_10631_10717 = state_10626__$1;
(statearr_10631_10717[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (27))){
var inst_10574 = (state_10626[(9)]);
var inst_10494 = (state_10626[(10)]);
var inst_10569 = (state_10626[(11)]);
var inst_10567 = (state_10626[(12)]);
var inst_10574__$1 = cljs.core._nth.call(null,inst_10567,inst_10569);
var inst_10575 = cljs.core.async.put_BANG_.call(null,inst_10574__$1,inst_10494,done);
var state_10626__$1 = (function (){var statearr_10632 = state_10626;
(statearr_10632[(9)] = inst_10574__$1);

return statearr_10632;
})();
if(cljs.core.truth_(inst_10575)){
var statearr_10633_10718 = state_10626__$1;
(statearr_10633_10718[(1)] = (30));

} else {
var statearr_10634_10719 = state_10626__$1;
(statearr_10634_10719[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (1))){
var state_10626__$1 = state_10626;
var statearr_10635_10720 = state_10626__$1;
(statearr_10635_10720[(2)] = null);

(statearr_10635_10720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (24))){
var inst_10525 = (state_10626[(7)]);
var inst_10544 = (state_10626[(2)]);
var inst_10545 = cljs.core.next.call(null,inst_10525);
var inst_10503 = inst_10545;
var inst_10504 = null;
var inst_10505 = (0);
var inst_10506 = (0);
var state_10626__$1 = (function (){var statearr_10636 = state_10626;
(statearr_10636[(13)] = inst_10544);

(statearr_10636[(14)] = inst_10506);

(statearr_10636[(15)] = inst_10503);

(statearr_10636[(16)] = inst_10504);

(statearr_10636[(17)] = inst_10505);

return statearr_10636;
})();
var statearr_10637_10721 = state_10626__$1;
(statearr_10637_10721[(2)] = null);

(statearr_10637_10721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (39))){
var state_10626__$1 = state_10626;
var statearr_10641_10722 = state_10626__$1;
(statearr_10641_10722[(2)] = null);

(statearr_10641_10722[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (4))){
var inst_10494 = (state_10626[(10)]);
var inst_10494__$1 = (state_10626[(2)]);
var inst_10495 = (inst_10494__$1 == null);
var state_10626__$1 = (function (){var statearr_10642 = state_10626;
(statearr_10642[(10)] = inst_10494__$1);

return statearr_10642;
})();
if(cljs.core.truth_(inst_10495)){
var statearr_10643_10723 = state_10626__$1;
(statearr_10643_10723[(1)] = (5));

} else {
var statearr_10644_10724 = state_10626__$1;
(statearr_10644_10724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (15))){
var inst_10506 = (state_10626[(14)]);
var inst_10503 = (state_10626[(15)]);
var inst_10504 = (state_10626[(16)]);
var inst_10505 = (state_10626[(17)]);
var inst_10521 = (state_10626[(2)]);
var inst_10522 = (inst_10506 + (1));
var tmp10638 = inst_10503;
var tmp10639 = inst_10504;
var tmp10640 = inst_10505;
var inst_10503__$1 = tmp10638;
var inst_10504__$1 = tmp10639;
var inst_10505__$1 = tmp10640;
var inst_10506__$1 = inst_10522;
var state_10626__$1 = (function (){var statearr_10645 = state_10626;
(statearr_10645[(14)] = inst_10506__$1);

(statearr_10645[(18)] = inst_10521);

(statearr_10645[(15)] = inst_10503__$1);

(statearr_10645[(16)] = inst_10504__$1);

(statearr_10645[(17)] = inst_10505__$1);

return statearr_10645;
})();
var statearr_10646_10725 = state_10626__$1;
(statearr_10646_10725[(2)] = null);

(statearr_10646_10725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (21))){
var inst_10548 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10650_10726 = state_10626__$1;
(statearr_10650_10726[(2)] = inst_10548);

(statearr_10650_10726[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (31))){
var inst_10574 = (state_10626[(9)]);
var inst_10578 = done.call(null,null);
var inst_10579 = cljs.core.async.untap_STAR_.call(null,m,inst_10574);
var state_10626__$1 = (function (){var statearr_10651 = state_10626;
(statearr_10651[(19)] = inst_10578);

return statearr_10651;
})();
var statearr_10652_10727 = state_10626__$1;
(statearr_10652_10727[(2)] = inst_10579);

(statearr_10652_10727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (32))){
var inst_10566 = (state_10626[(20)]);
var inst_10569 = (state_10626[(11)]);
var inst_10568 = (state_10626[(21)]);
var inst_10567 = (state_10626[(12)]);
var inst_10581 = (state_10626[(2)]);
var inst_10582 = (inst_10569 + (1));
var tmp10647 = inst_10566;
var tmp10648 = inst_10568;
var tmp10649 = inst_10567;
var inst_10566__$1 = tmp10647;
var inst_10567__$1 = tmp10649;
var inst_10568__$1 = tmp10648;
var inst_10569__$1 = inst_10582;
var state_10626__$1 = (function (){var statearr_10653 = state_10626;
(statearr_10653[(20)] = inst_10566__$1);

(statearr_10653[(22)] = inst_10581);

(statearr_10653[(11)] = inst_10569__$1);

(statearr_10653[(21)] = inst_10568__$1);

(statearr_10653[(12)] = inst_10567__$1);

return statearr_10653;
})();
var statearr_10654_10728 = state_10626__$1;
(statearr_10654_10728[(2)] = null);

(statearr_10654_10728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (40))){
var inst_10594 = (state_10626[(23)]);
var inst_10598 = done.call(null,null);
var inst_10599 = cljs.core.async.untap_STAR_.call(null,m,inst_10594);
var state_10626__$1 = (function (){var statearr_10655 = state_10626;
(statearr_10655[(24)] = inst_10598);

return statearr_10655;
})();
var statearr_10656_10729 = state_10626__$1;
(statearr_10656_10729[(2)] = inst_10599);

(statearr_10656_10729[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (33))){
var inst_10585 = (state_10626[(25)]);
var inst_10587 = cljs.core.chunked_seq_QMARK_.call(null,inst_10585);
var state_10626__$1 = state_10626;
if(inst_10587){
var statearr_10657_10730 = state_10626__$1;
(statearr_10657_10730[(1)] = (36));

} else {
var statearr_10658_10731 = state_10626__$1;
(statearr_10658_10731[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (13))){
var inst_10515 = (state_10626[(26)]);
var inst_10518 = cljs.core.async.close_BANG_.call(null,inst_10515);
var state_10626__$1 = state_10626;
var statearr_10659_10732 = state_10626__$1;
(statearr_10659_10732[(2)] = inst_10518);

(statearr_10659_10732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (22))){
var inst_10538 = (state_10626[(8)]);
var inst_10541 = cljs.core.async.close_BANG_.call(null,inst_10538);
var state_10626__$1 = state_10626;
var statearr_10660_10733 = state_10626__$1;
(statearr_10660_10733[(2)] = inst_10541);

(statearr_10660_10733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (36))){
var inst_10585 = (state_10626[(25)]);
var inst_10589 = cljs.core.chunk_first.call(null,inst_10585);
var inst_10590 = cljs.core.chunk_rest.call(null,inst_10585);
var inst_10591 = cljs.core.count.call(null,inst_10589);
var inst_10566 = inst_10590;
var inst_10567 = inst_10589;
var inst_10568 = inst_10591;
var inst_10569 = (0);
var state_10626__$1 = (function (){var statearr_10661 = state_10626;
(statearr_10661[(20)] = inst_10566);

(statearr_10661[(11)] = inst_10569);

(statearr_10661[(21)] = inst_10568);

(statearr_10661[(12)] = inst_10567);

return statearr_10661;
})();
var statearr_10662_10734 = state_10626__$1;
(statearr_10662_10734[(2)] = null);

(statearr_10662_10734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (41))){
var inst_10585 = (state_10626[(25)]);
var inst_10601 = (state_10626[(2)]);
var inst_10602 = cljs.core.next.call(null,inst_10585);
var inst_10566 = inst_10602;
var inst_10567 = null;
var inst_10568 = (0);
var inst_10569 = (0);
var state_10626__$1 = (function (){var statearr_10663 = state_10626;
(statearr_10663[(27)] = inst_10601);

(statearr_10663[(20)] = inst_10566);

(statearr_10663[(11)] = inst_10569);

(statearr_10663[(21)] = inst_10568);

(statearr_10663[(12)] = inst_10567);

return statearr_10663;
})();
var statearr_10664_10735 = state_10626__$1;
(statearr_10664_10735[(2)] = null);

(statearr_10664_10735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (43))){
var state_10626__$1 = state_10626;
var statearr_10665_10736 = state_10626__$1;
(statearr_10665_10736[(2)] = null);

(statearr_10665_10736[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (29))){
var inst_10610 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10666_10737 = state_10626__$1;
(statearr_10666_10737[(2)] = inst_10610);

(statearr_10666_10737[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (44))){
var inst_10619 = (state_10626[(2)]);
var state_10626__$1 = (function (){var statearr_10667 = state_10626;
(statearr_10667[(28)] = inst_10619);

return statearr_10667;
})();
var statearr_10668_10738 = state_10626__$1;
(statearr_10668_10738[(2)] = null);

(statearr_10668_10738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (6))){
var inst_10558 = (state_10626[(29)]);
var inst_10557 = cljs.core.deref.call(null,cs);
var inst_10558__$1 = cljs.core.keys.call(null,inst_10557);
var inst_10559 = cljs.core.count.call(null,inst_10558__$1);
var inst_10560 = cljs.core.reset_BANG_.call(null,dctr,inst_10559);
var inst_10565 = cljs.core.seq.call(null,inst_10558__$1);
var inst_10566 = inst_10565;
var inst_10567 = null;
var inst_10568 = (0);
var inst_10569 = (0);
var state_10626__$1 = (function (){var statearr_10669 = state_10626;
(statearr_10669[(30)] = inst_10560);

(statearr_10669[(20)] = inst_10566);

(statearr_10669[(29)] = inst_10558__$1);

(statearr_10669[(11)] = inst_10569);

(statearr_10669[(21)] = inst_10568);

(statearr_10669[(12)] = inst_10567);

return statearr_10669;
})();
var statearr_10670_10739 = state_10626__$1;
(statearr_10670_10739[(2)] = null);

(statearr_10670_10739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (28))){
var inst_10585 = (state_10626[(25)]);
var inst_10566 = (state_10626[(20)]);
var inst_10585__$1 = cljs.core.seq.call(null,inst_10566);
var state_10626__$1 = (function (){var statearr_10671 = state_10626;
(statearr_10671[(25)] = inst_10585__$1);

return statearr_10671;
})();
if(inst_10585__$1){
var statearr_10672_10740 = state_10626__$1;
(statearr_10672_10740[(1)] = (33));

} else {
var statearr_10673_10741 = state_10626__$1;
(statearr_10673_10741[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (25))){
var inst_10569 = (state_10626[(11)]);
var inst_10568 = (state_10626[(21)]);
var inst_10571 = (inst_10569 < inst_10568);
var inst_10572 = inst_10571;
var state_10626__$1 = state_10626;
if(cljs.core.truth_(inst_10572)){
var statearr_10674_10742 = state_10626__$1;
(statearr_10674_10742[(1)] = (27));

} else {
var statearr_10675_10743 = state_10626__$1;
(statearr_10675_10743[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (34))){
var state_10626__$1 = state_10626;
var statearr_10676_10744 = state_10626__$1;
(statearr_10676_10744[(2)] = null);

(statearr_10676_10744[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (17))){
var state_10626__$1 = state_10626;
var statearr_10677_10745 = state_10626__$1;
(statearr_10677_10745[(2)] = null);

(statearr_10677_10745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (3))){
var inst_10624 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10626__$1,inst_10624);
} else {
if((state_val_10627 === (12))){
var inst_10553 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10678_10746 = state_10626__$1;
(statearr_10678_10746[(2)] = inst_10553);

(statearr_10678_10746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (2))){
var state_10626__$1 = state_10626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10626__$1,(4),ch);
} else {
if((state_val_10627 === (23))){
var state_10626__$1 = state_10626;
var statearr_10679_10747 = state_10626__$1;
(statearr_10679_10747[(2)] = null);

(statearr_10679_10747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (35))){
var inst_10608 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10680_10748 = state_10626__$1;
(statearr_10680_10748[(2)] = inst_10608);

(statearr_10680_10748[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (19))){
var inst_10525 = (state_10626[(7)]);
var inst_10529 = cljs.core.chunk_first.call(null,inst_10525);
var inst_10530 = cljs.core.chunk_rest.call(null,inst_10525);
var inst_10531 = cljs.core.count.call(null,inst_10529);
var inst_10503 = inst_10530;
var inst_10504 = inst_10529;
var inst_10505 = inst_10531;
var inst_10506 = (0);
var state_10626__$1 = (function (){var statearr_10681 = state_10626;
(statearr_10681[(14)] = inst_10506);

(statearr_10681[(15)] = inst_10503);

(statearr_10681[(16)] = inst_10504);

(statearr_10681[(17)] = inst_10505);

return statearr_10681;
})();
var statearr_10682_10749 = state_10626__$1;
(statearr_10682_10749[(2)] = null);

(statearr_10682_10749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (11))){
var inst_10525 = (state_10626[(7)]);
var inst_10503 = (state_10626[(15)]);
var inst_10525__$1 = cljs.core.seq.call(null,inst_10503);
var state_10626__$1 = (function (){var statearr_10683 = state_10626;
(statearr_10683[(7)] = inst_10525__$1);

return statearr_10683;
})();
if(inst_10525__$1){
var statearr_10684_10750 = state_10626__$1;
(statearr_10684_10750[(1)] = (16));

} else {
var statearr_10685_10751 = state_10626__$1;
(statearr_10685_10751[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (9))){
var inst_10555 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10686_10752 = state_10626__$1;
(statearr_10686_10752[(2)] = inst_10555);

(statearr_10686_10752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (5))){
var inst_10501 = cljs.core.deref.call(null,cs);
var inst_10502 = cljs.core.seq.call(null,inst_10501);
var inst_10503 = inst_10502;
var inst_10504 = null;
var inst_10505 = (0);
var inst_10506 = (0);
var state_10626__$1 = (function (){var statearr_10687 = state_10626;
(statearr_10687[(14)] = inst_10506);

(statearr_10687[(15)] = inst_10503);

(statearr_10687[(16)] = inst_10504);

(statearr_10687[(17)] = inst_10505);

return statearr_10687;
})();
var statearr_10688_10753 = state_10626__$1;
(statearr_10688_10753[(2)] = null);

(statearr_10688_10753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (14))){
var state_10626__$1 = state_10626;
var statearr_10689_10754 = state_10626__$1;
(statearr_10689_10754[(2)] = null);

(statearr_10689_10754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (45))){
var inst_10616 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10690_10755 = state_10626__$1;
(statearr_10690_10755[(2)] = inst_10616);

(statearr_10690_10755[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (26))){
var inst_10558 = (state_10626[(29)]);
var inst_10612 = (state_10626[(2)]);
var inst_10613 = cljs.core.seq.call(null,inst_10558);
var state_10626__$1 = (function (){var statearr_10691 = state_10626;
(statearr_10691[(31)] = inst_10612);

return statearr_10691;
})();
if(inst_10613){
var statearr_10692_10756 = state_10626__$1;
(statearr_10692_10756[(1)] = (42));

} else {
var statearr_10693_10757 = state_10626__$1;
(statearr_10693_10757[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (16))){
var inst_10525 = (state_10626[(7)]);
var inst_10527 = cljs.core.chunked_seq_QMARK_.call(null,inst_10525);
var state_10626__$1 = state_10626;
if(inst_10527){
var statearr_10694_10758 = state_10626__$1;
(statearr_10694_10758[(1)] = (19));

} else {
var statearr_10695_10759 = state_10626__$1;
(statearr_10695_10759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (38))){
var inst_10605 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10696_10760 = state_10626__$1;
(statearr_10696_10760[(2)] = inst_10605);

(statearr_10696_10760[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (30))){
var state_10626__$1 = state_10626;
var statearr_10697_10761 = state_10626__$1;
(statearr_10697_10761[(2)] = null);

(statearr_10697_10761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (10))){
var inst_10506 = (state_10626[(14)]);
var inst_10504 = (state_10626[(16)]);
var inst_10514 = cljs.core._nth.call(null,inst_10504,inst_10506);
var inst_10515 = cljs.core.nth.call(null,inst_10514,(0),null);
var inst_10516 = cljs.core.nth.call(null,inst_10514,(1),null);
var state_10626__$1 = (function (){var statearr_10698 = state_10626;
(statearr_10698[(26)] = inst_10515);

return statearr_10698;
})();
if(cljs.core.truth_(inst_10516)){
var statearr_10699_10762 = state_10626__$1;
(statearr_10699_10762[(1)] = (13));

} else {
var statearr_10700_10763 = state_10626__$1;
(statearr_10700_10763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (18))){
var inst_10551 = (state_10626[(2)]);
var state_10626__$1 = state_10626;
var statearr_10701_10764 = state_10626__$1;
(statearr_10701_10764[(2)] = inst_10551);

(statearr_10701_10764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (42))){
var state_10626__$1 = state_10626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10626__$1,(45),dchan);
} else {
if((state_val_10627 === (37))){
var inst_10494 = (state_10626[(10)]);
var inst_10585 = (state_10626[(25)]);
var inst_10594 = (state_10626[(23)]);
var inst_10594__$1 = cljs.core.first.call(null,inst_10585);
var inst_10595 = cljs.core.async.put_BANG_.call(null,inst_10594__$1,inst_10494,done);
var state_10626__$1 = (function (){var statearr_10702 = state_10626;
(statearr_10702[(23)] = inst_10594__$1);

return statearr_10702;
})();
if(cljs.core.truth_(inst_10595)){
var statearr_10703_10765 = state_10626__$1;
(statearr_10703_10765[(1)] = (39));

} else {
var statearr_10704_10766 = state_10626__$1;
(statearr_10704_10766[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10627 === (8))){
var inst_10506 = (state_10626[(14)]);
var inst_10505 = (state_10626[(17)]);
var inst_10508 = (inst_10506 < inst_10505);
var inst_10509 = inst_10508;
var state_10626__$1 = state_10626;
if(cljs.core.truth_(inst_10509)){
var statearr_10705_10767 = state_10626__$1;
(statearr_10705_10767[(1)] = (10));

} else {
var statearr_10706_10768 = state_10626__$1;
(statearr_10706_10768[(1)] = (11));

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
});})(c__9361__auto___10714,cs,m,dchan,dctr,done))
;
return ((function (switch__9249__auto__,c__9361__auto___10714,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9250__auto__ = null;
var cljs$core$async$mult_$_state_machine__9250__auto____0 = (function (){
var statearr_10710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10710[(0)] = cljs$core$async$mult_$_state_machine__9250__auto__);

(statearr_10710[(1)] = (1));

return statearr_10710;
});
var cljs$core$async$mult_$_state_machine__9250__auto____1 = (function (state_10626){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_10626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e10711){if((e10711 instanceof Object)){
var ex__9253__auto__ = e10711;
var statearr_10712_10769 = state_10626;
(statearr_10712_10769[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10770 = state_10626;
state_10626 = G__10770;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9250__auto__ = function(state_10626){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9250__auto____1.call(this,state_10626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9250__auto____0;
cljs$core$async$mult_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9250__auto____1;
return cljs$core$async$mult_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___10714,cs,m,dchan,dctr,done))
})();
var state__9363__auto__ = (function (){var statearr_10713 = f__9362__auto__.call(null);
(statearr_10713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___10714);

return statearr_10713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___10714,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10771 = [];
var len__7923__auto___10774 = arguments.length;
var i__7924__auto___10775 = (0);
while(true){
if((i__7924__auto___10775 < len__7923__auto___10774)){
args10771.push((arguments[i__7924__auto___10775]));

var G__10776 = (i__7924__auto___10775 + (1));
i__7924__auto___10775 = G__10776;
continue;
} else {
}
break;
}

var G__10773 = args10771.length;
switch (G__10773) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10771.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m);
} else {
var m__7483__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,state_map);
} else {
var m__7483__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,mode);
} else {
var m__7483__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___10788 = arguments.length;
var i__7924__auto___10789 = (0);
while(true){
if((i__7924__auto___10789 < len__7923__auto___10788)){
args__7930__auto__.push((arguments[i__7924__auto___10789]));

var G__10790 = (i__7924__auto___10789 + (1));
i__7924__auto___10789 = G__10790;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((3) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10782){
var map__10783 = p__10782;
var map__10783__$1 = ((((!((map__10783 == null)))?((((map__10783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10783):map__10783);
var opts = map__10783__$1;
var statearr_10785_10791 = state;
(statearr_10785_10791[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10783,map__10783__$1,opts){
return (function (val){
var statearr_10786_10792 = state;
(statearr_10786_10792[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10783,map__10783__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10787_10793 = state;
(statearr_10787_10793[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10778){
var G__10779 = cljs.core.first.call(null,seq10778);
var seq10778__$1 = cljs.core.next.call(null,seq10778);
var G__10780 = cljs.core.first.call(null,seq10778__$1);
var seq10778__$2 = cljs.core.next.call(null,seq10778__$1);
var G__10781 = cljs.core.first.call(null,seq10778__$2);
var seq10778__$3 = cljs.core.next.call(null,seq10778__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10779,G__10780,G__10781,seq10778__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10961 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta10962){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta10962 = meta10962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10963,meta10962__$1){
var self__ = this;
var _10963__$1 = this;
return (new cljs.core.async.t_cljs$core$async10961(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta10962__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10963){
var self__ = this;
var _10963__$1 = this;
return self__.meta10962;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta10962","meta10962",1312116644,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10961";

cljs.core.async.t_cljs$core$async10961.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async10961");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10961 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10961(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10962){
return (new cljs.core.async.t_cljs$core$async10961(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta10962));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10961(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9361__auto___11128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___11128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___11128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11065){
var state_val_11066 = (state_11065[(1)]);
if((state_val_11066 === (7))){
var inst_10980 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
var statearr_11067_11129 = state_11065__$1;
(statearr_11067_11129[(2)] = inst_10980);

(statearr_11067_11129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (20))){
var inst_10992 = (state_11065[(7)]);
var state_11065__$1 = state_11065;
var statearr_11068_11130 = state_11065__$1;
(statearr_11068_11130[(2)] = inst_10992);

(statearr_11068_11130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (27))){
var state_11065__$1 = state_11065;
var statearr_11069_11131 = state_11065__$1;
(statearr_11069_11131[(2)] = null);

(statearr_11069_11131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (1))){
var inst_10967 = (state_11065[(8)]);
var inst_10967__$1 = calc_state.call(null);
var inst_10969 = (inst_10967__$1 == null);
var inst_10970 = cljs.core.not.call(null,inst_10969);
var state_11065__$1 = (function (){var statearr_11070 = state_11065;
(statearr_11070[(8)] = inst_10967__$1);

return statearr_11070;
})();
if(inst_10970){
var statearr_11071_11132 = state_11065__$1;
(statearr_11071_11132[(1)] = (2));

} else {
var statearr_11072_11133 = state_11065__$1;
(statearr_11072_11133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (24))){
var inst_11016 = (state_11065[(9)]);
var inst_11039 = (state_11065[(10)]);
var inst_11025 = (state_11065[(11)]);
var inst_11039__$1 = inst_11016.call(null,inst_11025);
var state_11065__$1 = (function (){var statearr_11073 = state_11065;
(statearr_11073[(10)] = inst_11039__$1);

return statearr_11073;
})();
if(cljs.core.truth_(inst_11039__$1)){
var statearr_11074_11134 = state_11065__$1;
(statearr_11074_11134[(1)] = (29));

} else {
var statearr_11075_11135 = state_11065__$1;
(statearr_11075_11135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (4))){
var inst_10983 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
if(cljs.core.truth_(inst_10983)){
var statearr_11076_11136 = state_11065__$1;
(statearr_11076_11136[(1)] = (8));

} else {
var statearr_11077_11137 = state_11065__$1;
(statearr_11077_11137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (15))){
var inst_11010 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
if(cljs.core.truth_(inst_11010)){
var statearr_11078_11138 = state_11065__$1;
(statearr_11078_11138[(1)] = (19));

} else {
var statearr_11079_11139 = state_11065__$1;
(statearr_11079_11139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (21))){
var inst_11015 = (state_11065[(12)]);
var inst_11015__$1 = (state_11065[(2)]);
var inst_11016 = cljs.core.get.call(null,inst_11015__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11017 = cljs.core.get.call(null,inst_11015__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11018 = cljs.core.get.call(null,inst_11015__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11065__$1 = (function (){var statearr_11080 = state_11065;
(statearr_11080[(9)] = inst_11016);

(statearr_11080[(12)] = inst_11015__$1);

(statearr_11080[(13)] = inst_11017);

return statearr_11080;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11065__$1,(22),inst_11018);
} else {
if((state_val_11066 === (31))){
var inst_11047 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
if(cljs.core.truth_(inst_11047)){
var statearr_11081_11140 = state_11065__$1;
(statearr_11081_11140[(1)] = (32));

} else {
var statearr_11082_11141 = state_11065__$1;
(statearr_11082_11141[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (32))){
var inst_11024 = (state_11065[(14)]);
var state_11065__$1 = state_11065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11065__$1,(35),out,inst_11024);
} else {
if((state_val_11066 === (33))){
var inst_11015 = (state_11065[(12)]);
var inst_10992 = inst_11015;
var state_11065__$1 = (function (){var statearr_11083 = state_11065;
(statearr_11083[(7)] = inst_10992);

return statearr_11083;
})();
var statearr_11084_11142 = state_11065__$1;
(statearr_11084_11142[(2)] = null);

(statearr_11084_11142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (13))){
var inst_10992 = (state_11065[(7)]);
var inst_10999 = inst_10992.cljs$lang$protocol_mask$partition0$;
var inst_11000 = (inst_10999 & (64));
var inst_11001 = inst_10992.cljs$core$ISeq$;
var inst_11002 = (cljs.core.PROTOCOL_SENTINEL === inst_11001);
var inst_11003 = (inst_11000) || (inst_11002);
var state_11065__$1 = state_11065;
if(cljs.core.truth_(inst_11003)){
var statearr_11085_11143 = state_11065__$1;
(statearr_11085_11143[(1)] = (16));

} else {
var statearr_11086_11144 = state_11065__$1;
(statearr_11086_11144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (22))){
var inst_11025 = (state_11065[(11)]);
var inst_11024 = (state_11065[(14)]);
var inst_11023 = (state_11065[(2)]);
var inst_11024__$1 = cljs.core.nth.call(null,inst_11023,(0),null);
var inst_11025__$1 = cljs.core.nth.call(null,inst_11023,(1),null);
var inst_11026 = (inst_11024__$1 == null);
var inst_11027 = cljs.core._EQ_.call(null,inst_11025__$1,change);
var inst_11028 = (inst_11026) || (inst_11027);
var state_11065__$1 = (function (){var statearr_11087 = state_11065;
(statearr_11087[(11)] = inst_11025__$1);

(statearr_11087[(14)] = inst_11024__$1);

return statearr_11087;
})();
if(cljs.core.truth_(inst_11028)){
var statearr_11088_11145 = state_11065__$1;
(statearr_11088_11145[(1)] = (23));

} else {
var statearr_11089_11146 = state_11065__$1;
(statearr_11089_11146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (36))){
var inst_11015 = (state_11065[(12)]);
var inst_10992 = inst_11015;
var state_11065__$1 = (function (){var statearr_11090 = state_11065;
(statearr_11090[(7)] = inst_10992);

return statearr_11090;
})();
var statearr_11091_11147 = state_11065__$1;
(statearr_11091_11147[(2)] = null);

(statearr_11091_11147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (29))){
var inst_11039 = (state_11065[(10)]);
var state_11065__$1 = state_11065;
var statearr_11092_11148 = state_11065__$1;
(statearr_11092_11148[(2)] = inst_11039);

(statearr_11092_11148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (6))){
var state_11065__$1 = state_11065;
var statearr_11093_11149 = state_11065__$1;
(statearr_11093_11149[(2)] = false);

(statearr_11093_11149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (28))){
var inst_11035 = (state_11065[(2)]);
var inst_11036 = calc_state.call(null);
var inst_10992 = inst_11036;
var state_11065__$1 = (function (){var statearr_11094 = state_11065;
(statearr_11094[(7)] = inst_10992);

(statearr_11094[(15)] = inst_11035);

return statearr_11094;
})();
var statearr_11095_11150 = state_11065__$1;
(statearr_11095_11150[(2)] = null);

(statearr_11095_11150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (25))){
var inst_11061 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
var statearr_11096_11151 = state_11065__$1;
(statearr_11096_11151[(2)] = inst_11061);

(statearr_11096_11151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (34))){
var inst_11059 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
var statearr_11097_11152 = state_11065__$1;
(statearr_11097_11152[(2)] = inst_11059);

(statearr_11097_11152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (17))){
var state_11065__$1 = state_11065;
var statearr_11098_11153 = state_11065__$1;
(statearr_11098_11153[(2)] = false);

(statearr_11098_11153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (3))){
var state_11065__$1 = state_11065;
var statearr_11099_11154 = state_11065__$1;
(statearr_11099_11154[(2)] = false);

(statearr_11099_11154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (12))){
var inst_11063 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11065__$1,inst_11063);
} else {
if((state_val_11066 === (2))){
var inst_10967 = (state_11065[(8)]);
var inst_10972 = inst_10967.cljs$lang$protocol_mask$partition0$;
var inst_10973 = (inst_10972 & (64));
var inst_10974 = inst_10967.cljs$core$ISeq$;
var inst_10975 = (cljs.core.PROTOCOL_SENTINEL === inst_10974);
var inst_10976 = (inst_10973) || (inst_10975);
var state_11065__$1 = state_11065;
if(cljs.core.truth_(inst_10976)){
var statearr_11100_11155 = state_11065__$1;
(statearr_11100_11155[(1)] = (5));

} else {
var statearr_11101_11156 = state_11065__$1;
(statearr_11101_11156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (23))){
var inst_11024 = (state_11065[(14)]);
var inst_11030 = (inst_11024 == null);
var state_11065__$1 = state_11065;
if(cljs.core.truth_(inst_11030)){
var statearr_11102_11157 = state_11065__$1;
(statearr_11102_11157[(1)] = (26));

} else {
var statearr_11103_11158 = state_11065__$1;
(statearr_11103_11158[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (35))){
var inst_11050 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
if(cljs.core.truth_(inst_11050)){
var statearr_11104_11159 = state_11065__$1;
(statearr_11104_11159[(1)] = (36));

} else {
var statearr_11105_11160 = state_11065__$1;
(statearr_11105_11160[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (19))){
var inst_10992 = (state_11065[(7)]);
var inst_11012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10992);
var state_11065__$1 = state_11065;
var statearr_11106_11161 = state_11065__$1;
(statearr_11106_11161[(2)] = inst_11012);

(statearr_11106_11161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (11))){
var inst_10992 = (state_11065[(7)]);
var inst_10996 = (inst_10992 == null);
var inst_10997 = cljs.core.not.call(null,inst_10996);
var state_11065__$1 = state_11065;
if(inst_10997){
var statearr_11107_11162 = state_11065__$1;
(statearr_11107_11162[(1)] = (13));

} else {
var statearr_11108_11163 = state_11065__$1;
(statearr_11108_11163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (9))){
var inst_10967 = (state_11065[(8)]);
var state_11065__$1 = state_11065;
var statearr_11109_11164 = state_11065__$1;
(statearr_11109_11164[(2)] = inst_10967);

(statearr_11109_11164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (5))){
var state_11065__$1 = state_11065;
var statearr_11110_11165 = state_11065__$1;
(statearr_11110_11165[(2)] = true);

(statearr_11110_11165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (14))){
var state_11065__$1 = state_11065;
var statearr_11111_11166 = state_11065__$1;
(statearr_11111_11166[(2)] = false);

(statearr_11111_11166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (26))){
var inst_11025 = (state_11065[(11)]);
var inst_11032 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11025);
var state_11065__$1 = state_11065;
var statearr_11112_11167 = state_11065__$1;
(statearr_11112_11167[(2)] = inst_11032);

(statearr_11112_11167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (16))){
var state_11065__$1 = state_11065;
var statearr_11113_11168 = state_11065__$1;
(statearr_11113_11168[(2)] = true);

(statearr_11113_11168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (38))){
var inst_11055 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
var statearr_11114_11169 = state_11065__$1;
(statearr_11114_11169[(2)] = inst_11055);

(statearr_11114_11169[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (30))){
var inst_11016 = (state_11065[(9)]);
var inst_11025 = (state_11065[(11)]);
var inst_11017 = (state_11065[(13)]);
var inst_11042 = cljs.core.empty_QMARK_.call(null,inst_11016);
var inst_11043 = inst_11017.call(null,inst_11025);
var inst_11044 = cljs.core.not.call(null,inst_11043);
var inst_11045 = (inst_11042) && (inst_11044);
var state_11065__$1 = state_11065;
var statearr_11115_11170 = state_11065__$1;
(statearr_11115_11170[(2)] = inst_11045);

(statearr_11115_11170[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (10))){
var inst_10967 = (state_11065[(8)]);
var inst_10988 = (state_11065[(2)]);
var inst_10989 = cljs.core.get.call(null,inst_10988,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10990 = cljs.core.get.call(null,inst_10988,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10991 = cljs.core.get.call(null,inst_10988,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10992 = inst_10967;
var state_11065__$1 = (function (){var statearr_11116 = state_11065;
(statearr_11116[(16)] = inst_10991);

(statearr_11116[(7)] = inst_10992);

(statearr_11116[(17)] = inst_10989);

(statearr_11116[(18)] = inst_10990);

return statearr_11116;
})();
var statearr_11117_11171 = state_11065__$1;
(statearr_11117_11171[(2)] = null);

(statearr_11117_11171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (18))){
var inst_11007 = (state_11065[(2)]);
var state_11065__$1 = state_11065;
var statearr_11118_11172 = state_11065__$1;
(statearr_11118_11172[(2)] = inst_11007);

(statearr_11118_11172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (37))){
var state_11065__$1 = state_11065;
var statearr_11119_11173 = state_11065__$1;
(statearr_11119_11173[(2)] = null);

(statearr_11119_11173[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11066 === (8))){
var inst_10967 = (state_11065[(8)]);
var inst_10985 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10967);
var state_11065__$1 = state_11065;
var statearr_11120_11174 = state_11065__$1;
(statearr_11120_11174[(2)] = inst_10985);

(statearr_11120_11174[(1)] = (10));


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
});})(c__9361__auto___11128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9249__auto__,c__9361__auto___11128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9250__auto__ = null;
var cljs$core$async$mix_$_state_machine__9250__auto____0 = (function (){
var statearr_11124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11124[(0)] = cljs$core$async$mix_$_state_machine__9250__auto__);

(statearr_11124[(1)] = (1));

return statearr_11124;
});
var cljs$core$async$mix_$_state_machine__9250__auto____1 = (function (state_11065){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_11065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e11125){if((e11125 instanceof Object)){
var ex__9253__auto__ = e11125;
var statearr_11126_11175 = state_11065;
(statearr_11126_11175[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11176 = state_11065;
state_11065 = G__11176;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9250__auto__ = function(state_11065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9250__auto____1.call(this,state_11065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9250__auto____0;
cljs$core$async$mix_$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9250__auto____1;
return cljs$core$async$mix_$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___11128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9363__auto__ = (function (){var statearr_11127 = f__9362__auto__.call(null);
(statearr_11127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___11128);

return statearr_11127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___11128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7483__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11177 = [];
var len__7923__auto___11180 = arguments.length;
var i__7924__auto___11181 = (0);
while(true){
if((i__7924__auto___11181 < len__7923__auto___11180)){
args11177.push((arguments[i__7924__auto___11181]));

var G__11182 = (i__7924__auto___11181 + (1));
i__7924__auto___11181 = G__11182;
continue;
} else {
}
break;
}

var G__11179 = args11177.length;
switch (G__11179) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11177.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11185 = [];
var len__7923__auto___11310 = arguments.length;
var i__7924__auto___11311 = (0);
while(true){
if((i__7924__auto___11311 < len__7923__auto___11310)){
args11185.push((arguments[i__7924__auto___11311]));

var G__11312 = (i__7924__auto___11311 + (1));
i__7924__auto___11311 = G__11312;
continue;
} else {
}
break;
}

var G__11187 = args11185.length;
switch (G__11187) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11185.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6814__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6814__auto__,mults){
return (function (p1__11184_SHARP_){
if(cljs.core.truth_(p1__11184_SHARP_.call(null,topic))){
return p1__11184_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11184_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6814__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11188 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11189){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11189 = meta11189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11190,meta11189__$1){
var self__ = this;
var _11190__$1 = this;
return (new cljs.core.async.t_cljs$core$async11188(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11189__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11190){
var self__ = this;
var _11190__$1 = this;
return self__.meta11189;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11188.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11189","meta11189",-1276639340,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11188";

cljs.core.async.t_cljs$core$async11188.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11188");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11188 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11189){
return (new cljs.core.async.t_cljs$core$async11188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11189));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11188(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9361__auto___11314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___11314,mults,ensure_mult,p){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___11314,mults,ensure_mult,p){
return (function (state_11262){
var state_val_11263 = (state_11262[(1)]);
if((state_val_11263 === (7))){
var inst_11258 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
var statearr_11264_11315 = state_11262__$1;
(statearr_11264_11315[(2)] = inst_11258);

(statearr_11264_11315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (20))){
var state_11262__$1 = state_11262;
var statearr_11265_11316 = state_11262__$1;
(statearr_11265_11316[(2)] = null);

(statearr_11265_11316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (1))){
var state_11262__$1 = state_11262;
var statearr_11266_11317 = state_11262__$1;
(statearr_11266_11317[(2)] = null);

(statearr_11266_11317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (24))){
var inst_11241 = (state_11262[(7)]);
var inst_11250 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11241);
var state_11262__$1 = state_11262;
var statearr_11267_11318 = state_11262__$1;
(statearr_11267_11318[(2)] = inst_11250);

(statearr_11267_11318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (4))){
var inst_11193 = (state_11262[(8)]);
var inst_11193__$1 = (state_11262[(2)]);
var inst_11194 = (inst_11193__$1 == null);
var state_11262__$1 = (function (){var statearr_11268 = state_11262;
(statearr_11268[(8)] = inst_11193__$1);

return statearr_11268;
})();
if(cljs.core.truth_(inst_11194)){
var statearr_11269_11319 = state_11262__$1;
(statearr_11269_11319[(1)] = (5));

} else {
var statearr_11270_11320 = state_11262__$1;
(statearr_11270_11320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (15))){
var inst_11235 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
var statearr_11271_11321 = state_11262__$1;
(statearr_11271_11321[(2)] = inst_11235);

(statearr_11271_11321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (21))){
var inst_11255 = (state_11262[(2)]);
var state_11262__$1 = (function (){var statearr_11272 = state_11262;
(statearr_11272[(9)] = inst_11255);

return statearr_11272;
})();
var statearr_11273_11322 = state_11262__$1;
(statearr_11273_11322[(2)] = null);

(statearr_11273_11322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (13))){
var inst_11217 = (state_11262[(10)]);
var inst_11219 = cljs.core.chunked_seq_QMARK_.call(null,inst_11217);
var state_11262__$1 = state_11262;
if(inst_11219){
var statearr_11274_11323 = state_11262__$1;
(statearr_11274_11323[(1)] = (16));

} else {
var statearr_11275_11324 = state_11262__$1;
(statearr_11275_11324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (22))){
var inst_11247 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
if(cljs.core.truth_(inst_11247)){
var statearr_11276_11325 = state_11262__$1;
(statearr_11276_11325[(1)] = (23));

} else {
var statearr_11277_11326 = state_11262__$1;
(statearr_11277_11326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (6))){
var inst_11243 = (state_11262[(11)]);
var inst_11241 = (state_11262[(7)]);
var inst_11193 = (state_11262[(8)]);
var inst_11241__$1 = topic_fn.call(null,inst_11193);
var inst_11242 = cljs.core.deref.call(null,mults);
var inst_11243__$1 = cljs.core.get.call(null,inst_11242,inst_11241__$1);
var state_11262__$1 = (function (){var statearr_11278 = state_11262;
(statearr_11278[(11)] = inst_11243__$1);

(statearr_11278[(7)] = inst_11241__$1);

return statearr_11278;
})();
if(cljs.core.truth_(inst_11243__$1)){
var statearr_11279_11327 = state_11262__$1;
(statearr_11279_11327[(1)] = (19));

} else {
var statearr_11280_11328 = state_11262__$1;
(statearr_11280_11328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (25))){
var inst_11252 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
var statearr_11281_11329 = state_11262__$1;
(statearr_11281_11329[(2)] = inst_11252);

(statearr_11281_11329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (17))){
var inst_11217 = (state_11262[(10)]);
var inst_11226 = cljs.core.first.call(null,inst_11217);
var inst_11227 = cljs.core.async.muxch_STAR_.call(null,inst_11226);
var inst_11228 = cljs.core.async.close_BANG_.call(null,inst_11227);
var inst_11229 = cljs.core.next.call(null,inst_11217);
var inst_11203 = inst_11229;
var inst_11204 = null;
var inst_11205 = (0);
var inst_11206 = (0);
var state_11262__$1 = (function (){var statearr_11282 = state_11262;
(statearr_11282[(12)] = inst_11203);

(statearr_11282[(13)] = inst_11206);

(statearr_11282[(14)] = inst_11205);

(statearr_11282[(15)] = inst_11204);

(statearr_11282[(16)] = inst_11228);

return statearr_11282;
})();
var statearr_11283_11330 = state_11262__$1;
(statearr_11283_11330[(2)] = null);

(statearr_11283_11330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (3))){
var inst_11260 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11262__$1,inst_11260);
} else {
if((state_val_11263 === (12))){
var inst_11237 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
var statearr_11284_11331 = state_11262__$1;
(statearr_11284_11331[(2)] = inst_11237);

(statearr_11284_11331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (2))){
var state_11262__$1 = state_11262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11262__$1,(4),ch);
} else {
if((state_val_11263 === (23))){
var state_11262__$1 = state_11262;
var statearr_11285_11332 = state_11262__$1;
(statearr_11285_11332[(2)] = null);

(statearr_11285_11332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (19))){
var inst_11243 = (state_11262[(11)]);
var inst_11193 = (state_11262[(8)]);
var inst_11245 = cljs.core.async.muxch_STAR_.call(null,inst_11243);
var state_11262__$1 = state_11262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11262__$1,(22),inst_11245,inst_11193);
} else {
if((state_val_11263 === (11))){
var inst_11217 = (state_11262[(10)]);
var inst_11203 = (state_11262[(12)]);
var inst_11217__$1 = cljs.core.seq.call(null,inst_11203);
var state_11262__$1 = (function (){var statearr_11286 = state_11262;
(statearr_11286[(10)] = inst_11217__$1);

return statearr_11286;
})();
if(inst_11217__$1){
var statearr_11287_11333 = state_11262__$1;
(statearr_11287_11333[(1)] = (13));

} else {
var statearr_11288_11334 = state_11262__$1;
(statearr_11288_11334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (9))){
var inst_11239 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
var statearr_11289_11335 = state_11262__$1;
(statearr_11289_11335[(2)] = inst_11239);

(statearr_11289_11335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (5))){
var inst_11200 = cljs.core.deref.call(null,mults);
var inst_11201 = cljs.core.vals.call(null,inst_11200);
var inst_11202 = cljs.core.seq.call(null,inst_11201);
var inst_11203 = inst_11202;
var inst_11204 = null;
var inst_11205 = (0);
var inst_11206 = (0);
var state_11262__$1 = (function (){var statearr_11290 = state_11262;
(statearr_11290[(12)] = inst_11203);

(statearr_11290[(13)] = inst_11206);

(statearr_11290[(14)] = inst_11205);

(statearr_11290[(15)] = inst_11204);

return statearr_11290;
})();
var statearr_11291_11336 = state_11262__$1;
(statearr_11291_11336[(2)] = null);

(statearr_11291_11336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (14))){
var state_11262__$1 = state_11262;
var statearr_11295_11337 = state_11262__$1;
(statearr_11295_11337[(2)] = null);

(statearr_11295_11337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (16))){
var inst_11217 = (state_11262[(10)]);
var inst_11221 = cljs.core.chunk_first.call(null,inst_11217);
var inst_11222 = cljs.core.chunk_rest.call(null,inst_11217);
var inst_11223 = cljs.core.count.call(null,inst_11221);
var inst_11203 = inst_11222;
var inst_11204 = inst_11221;
var inst_11205 = inst_11223;
var inst_11206 = (0);
var state_11262__$1 = (function (){var statearr_11296 = state_11262;
(statearr_11296[(12)] = inst_11203);

(statearr_11296[(13)] = inst_11206);

(statearr_11296[(14)] = inst_11205);

(statearr_11296[(15)] = inst_11204);

return statearr_11296;
})();
var statearr_11297_11338 = state_11262__$1;
(statearr_11297_11338[(2)] = null);

(statearr_11297_11338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (10))){
var inst_11203 = (state_11262[(12)]);
var inst_11206 = (state_11262[(13)]);
var inst_11205 = (state_11262[(14)]);
var inst_11204 = (state_11262[(15)]);
var inst_11211 = cljs.core._nth.call(null,inst_11204,inst_11206);
var inst_11212 = cljs.core.async.muxch_STAR_.call(null,inst_11211);
var inst_11213 = cljs.core.async.close_BANG_.call(null,inst_11212);
var inst_11214 = (inst_11206 + (1));
var tmp11292 = inst_11203;
var tmp11293 = inst_11205;
var tmp11294 = inst_11204;
var inst_11203__$1 = tmp11292;
var inst_11204__$1 = tmp11294;
var inst_11205__$1 = tmp11293;
var inst_11206__$1 = inst_11214;
var state_11262__$1 = (function (){var statearr_11298 = state_11262;
(statearr_11298[(12)] = inst_11203__$1);

(statearr_11298[(13)] = inst_11206__$1);

(statearr_11298[(14)] = inst_11205__$1);

(statearr_11298[(17)] = inst_11213);

(statearr_11298[(15)] = inst_11204__$1);

return statearr_11298;
})();
var statearr_11299_11339 = state_11262__$1;
(statearr_11299_11339[(2)] = null);

(statearr_11299_11339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (18))){
var inst_11232 = (state_11262[(2)]);
var state_11262__$1 = state_11262;
var statearr_11300_11340 = state_11262__$1;
(statearr_11300_11340[(2)] = inst_11232);

(statearr_11300_11340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11263 === (8))){
var inst_11206 = (state_11262[(13)]);
var inst_11205 = (state_11262[(14)]);
var inst_11208 = (inst_11206 < inst_11205);
var inst_11209 = inst_11208;
var state_11262__$1 = state_11262;
if(cljs.core.truth_(inst_11209)){
var statearr_11301_11341 = state_11262__$1;
(statearr_11301_11341[(1)] = (10));

} else {
var statearr_11302_11342 = state_11262__$1;
(statearr_11302_11342[(1)] = (11));

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
});})(c__9361__auto___11314,mults,ensure_mult,p))
;
return ((function (switch__9249__auto__,c__9361__auto___11314,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_11306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11306[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_11306[(1)] = (1));

return statearr_11306;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_11262){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_11262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e11307){if((e11307 instanceof Object)){
var ex__9253__auto__ = e11307;
var statearr_11308_11343 = state_11262;
(statearr_11308_11343[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11344 = state_11262;
state_11262 = G__11344;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_11262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_11262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___11314,mults,ensure_mult,p))
})();
var state__9363__auto__ = (function (){var statearr_11309 = f__9362__auto__.call(null);
(statearr_11309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___11314);

return statearr_11309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___11314,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11345 = [];
var len__7923__auto___11348 = arguments.length;
var i__7924__auto___11349 = (0);
while(true){
if((i__7924__auto___11349 < len__7923__auto___11348)){
args11345.push((arguments[i__7924__auto___11349]));

var G__11350 = (i__7924__auto___11349 + (1));
i__7924__auto___11349 = G__11350;
continue;
} else {
}
break;
}

var G__11347 = args11345.length;
switch (G__11347) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11345.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11352 = [];
var len__7923__auto___11355 = arguments.length;
var i__7924__auto___11356 = (0);
while(true){
if((i__7924__auto___11356 < len__7923__auto___11355)){
args11352.push((arguments[i__7924__auto___11356]));

var G__11357 = (i__7924__auto___11356 + (1));
i__7924__auto___11356 = G__11357;
continue;
} else {
}
break;
}

var G__11354 = args11352.length;
switch (G__11354) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11352.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args11359 = [];
var len__7923__auto___11430 = arguments.length;
var i__7924__auto___11431 = (0);
while(true){
if((i__7924__auto___11431 < len__7923__auto___11430)){
args11359.push((arguments[i__7924__auto___11431]));

var G__11432 = (i__7924__auto___11431 + (1));
i__7924__auto___11431 = G__11432;
continue;
} else {
}
break;
}

var G__11361 = args11359.length;
switch (G__11361) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11359.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9361__auto___11434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___11434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___11434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11400){
var state_val_11401 = (state_11400[(1)]);
if((state_val_11401 === (7))){
var state_11400__$1 = state_11400;
var statearr_11402_11435 = state_11400__$1;
(statearr_11402_11435[(2)] = null);

(statearr_11402_11435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (1))){
var state_11400__$1 = state_11400;
var statearr_11403_11436 = state_11400__$1;
(statearr_11403_11436[(2)] = null);

(statearr_11403_11436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (4))){
var inst_11364 = (state_11400[(7)]);
var inst_11366 = (inst_11364 < cnt);
var state_11400__$1 = state_11400;
if(cljs.core.truth_(inst_11366)){
var statearr_11404_11437 = state_11400__$1;
(statearr_11404_11437[(1)] = (6));

} else {
var statearr_11405_11438 = state_11400__$1;
(statearr_11405_11438[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (15))){
var inst_11396 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
var statearr_11406_11439 = state_11400__$1;
(statearr_11406_11439[(2)] = inst_11396);

(statearr_11406_11439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (13))){
var inst_11389 = cljs.core.async.close_BANG_.call(null,out);
var state_11400__$1 = state_11400;
var statearr_11407_11440 = state_11400__$1;
(statearr_11407_11440[(2)] = inst_11389);

(statearr_11407_11440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (6))){
var state_11400__$1 = state_11400;
var statearr_11408_11441 = state_11400__$1;
(statearr_11408_11441[(2)] = null);

(statearr_11408_11441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (3))){
var inst_11398 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11400__$1,inst_11398);
} else {
if((state_val_11401 === (12))){
var inst_11386 = (state_11400[(8)]);
var inst_11386__$1 = (state_11400[(2)]);
var inst_11387 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11386__$1);
var state_11400__$1 = (function (){var statearr_11409 = state_11400;
(statearr_11409[(8)] = inst_11386__$1);

return statearr_11409;
})();
if(cljs.core.truth_(inst_11387)){
var statearr_11410_11442 = state_11400__$1;
(statearr_11410_11442[(1)] = (13));

} else {
var statearr_11411_11443 = state_11400__$1;
(statearr_11411_11443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (2))){
var inst_11363 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11364 = (0);
var state_11400__$1 = (function (){var statearr_11412 = state_11400;
(statearr_11412[(7)] = inst_11364);

(statearr_11412[(9)] = inst_11363);

return statearr_11412;
})();
var statearr_11413_11444 = state_11400__$1;
(statearr_11413_11444[(2)] = null);

(statearr_11413_11444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (11))){
var inst_11364 = (state_11400[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11400,(10),Object,null,(9));
var inst_11373 = chs__$1.call(null,inst_11364);
var inst_11374 = done.call(null,inst_11364);
var inst_11375 = cljs.core.async.take_BANG_.call(null,inst_11373,inst_11374);
var state_11400__$1 = state_11400;
var statearr_11414_11445 = state_11400__$1;
(statearr_11414_11445[(2)] = inst_11375);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (9))){
var inst_11364 = (state_11400[(7)]);
var inst_11377 = (state_11400[(2)]);
var inst_11378 = (inst_11364 + (1));
var inst_11364__$1 = inst_11378;
var state_11400__$1 = (function (){var statearr_11415 = state_11400;
(statearr_11415[(10)] = inst_11377);

(statearr_11415[(7)] = inst_11364__$1);

return statearr_11415;
})();
var statearr_11416_11446 = state_11400__$1;
(statearr_11416_11446[(2)] = null);

(statearr_11416_11446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (5))){
var inst_11384 = (state_11400[(2)]);
var state_11400__$1 = (function (){var statearr_11417 = state_11400;
(statearr_11417[(11)] = inst_11384);

return statearr_11417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11400__$1,(12),dchan);
} else {
if((state_val_11401 === (14))){
var inst_11386 = (state_11400[(8)]);
var inst_11391 = cljs.core.apply.call(null,f,inst_11386);
var state_11400__$1 = state_11400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11400__$1,(16),out,inst_11391);
} else {
if((state_val_11401 === (16))){
var inst_11393 = (state_11400[(2)]);
var state_11400__$1 = (function (){var statearr_11418 = state_11400;
(statearr_11418[(12)] = inst_11393);

return statearr_11418;
})();
var statearr_11419_11447 = state_11400__$1;
(statearr_11419_11447[(2)] = null);

(statearr_11419_11447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (10))){
var inst_11368 = (state_11400[(2)]);
var inst_11369 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11400__$1 = (function (){var statearr_11420 = state_11400;
(statearr_11420[(13)] = inst_11368);

return statearr_11420;
})();
var statearr_11421_11448 = state_11400__$1;
(statearr_11421_11448[(2)] = inst_11369);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (8))){
var inst_11382 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
var statearr_11422_11449 = state_11400__$1;
(statearr_11422_11449[(2)] = inst_11382);

(statearr_11422_11449[(1)] = (5));


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
});})(c__9361__auto___11434,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9249__auto__,c__9361__auto___11434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_11426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11426[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_11426[(1)] = (1));

return statearr_11426;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_11400){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_11400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e11427){if((e11427 instanceof Object)){
var ex__9253__auto__ = e11427;
var statearr_11428_11450 = state_11400;
(statearr_11428_11450[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11451 = state_11400;
state_11400 = G__11451;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_11400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_11400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___11434,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9363__auto__ = (function (){var statearr_11429 = f__9362__auto__.call(null);
(statearr_11429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___11434);

return statearr_11429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___11434,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11453 = [];
var len__7923__auto___11511 = arguments.length;
var i__7924__auto___11512 = (0);
while(true){
if((i__7924__auto___11512 < len__7923__auto___11511)){
args11453.push((arguments[i__7924__auto___11512]));

var G__11513 = (i__7924__auto___11512 + (1));
i__7924__auto___11512 = G__11513;
continue;
} else {
}
break;
}

var G__11455 = args11453.length;
switch (G__11455) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11453.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9361__auto___11515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___11515,out){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___11515,out){
return (function (state_11487){
var state_val_11488 = (state_11487[(1)]);
if((state_val_11488 === (7))){
var inst_11466 = (state_11487[(7)]);
var inst_11467 = (state_11487[(8)]);
var inst_11466__$1 = (state_11487[(2)]);
var inst_11467__$1 = cljs.core.nth.call(null,inst_11466__$1,(0),null);
var inst_11468 = cljs.core.nth.call(null,inst_11466__$1,(1),null);
var inst_11469 = (inst_11467__$1 == null);
var state_11487__$1 = (function (){var statearr_11489 = state_11487;
(statearr_11489[(7)] = inst_11466__$1);

(statearr_11489[(9)] = inst_11468);

(statearr_11489[(8)] = inst_11467__$1);

return statearr_11489;
})();
if(cljs.core.truth_(inst_11469)){
var statearr_11490_11516 = state_11487__$1;
(statearr_11490_11516[(1)] = (8));

} else {
var statearr_11491_11517 = state_11487__$1;
(statearr_11491_11517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11488 === (1))){
var inst_11456 = cljs.core.vec.call(null,chs);
var inst_11457 = inst_11456;
var state_11487__$1 = (function (){var statearr_11492 = state_11487;
(statearr_11492[(10)] = inst_11457);

return statearr_11492;
})();
var statearr_11493_11518 = state_11487__$1;
(statearr_11493_11518[(2)] = null);

(statearr_11493_11518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11488 === (4))){
var inst_11457 = (state_11487[(10)]);
var state_11487__$1 = state_11487;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11487__$1,(7),inst_11457);
} else {
if((state_val_11488 === (6))){
var inst_11483 = (state_11487[(2)]);
var state_11487__$1 = state_11487;
var statearr_11494_11519 = state_11487__$1;
(statearr_11494_11519[(2)] = inst_11483);

(statearr_11494_11519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11488 === (3))){
var inst_11485 = (state_11487[(2)]);
var state_11487__$1 = state_11487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11487__$1,inst_11485);
} else {
if((state_val_11488 === (2))){
var inst_11457 = (state_11487[(10)]);
var inst_11459 = cljs.core.count.call(null,inst_11457);
var inst_11460 = (inst_11459 > (0));
var state_11487__$1 = state_11487;
if(cljs.core.truth_(inst_11460)){
var statearr_11496_11520 = state_11487__$1;
(statearr_11496_11520[(1)] = (4));

} else {
var statearr_11497_11521 = state_11487__$1;
(statearr_11497_11521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11488 === (11))){
var inst_11457 = (state_11487[(10)]);
var inst_11476 = (state_11487[(2)]);
var tmp11495 = inst_11457;
var inst_11457__$1 = tmp11495;
var state_11487__$1 = (function (){var statearr_11498 = state_11487;
(statearr_11498[(10)] = inst_11457__$1);

(statearr_11498[(11)] = inst_11476);

return statearr_11498;
})();
var statearr_11499_11522 = state_11487__$1;
(statearr_11499_11522[(2)] = null);

(statearr_11499_11522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11488 === (9))){
var inst_11467 = (state_11487[(8)]);
var state_11487__$1 = state_11487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11487__$1,(11),out,inst_11467);
} else {
if((state_val_11488 === (5))){
var inst_11481 = cljs.core.async.close_BANG_.call(null,out);
var state_11487__$1 = state_11487;
var statearr_11500_11523 = state_11487__$1;
(statearr_11500_11523[(2)] = inst_11481);

(statearr_11500_11523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11488 === (10))){
var inst_11479 = (state_11487[(2)]);
var state_11487__$1 = state_11487;
var statearr_11501_11524 = state_11487__$1;
(statearr_11501_11524[(2)] = inst_11479);

(statearr_11501_11524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11488 === (8))){
var inst_11466 = (state_11487[(7)]);
var inst_11457 = (state_11487[(10)]);
var inst_11468 = (state_11487[(9)]);
var inst_11467 = (state_11487[(8)]);
var inst_11471 = (function (){var cs = inst_11457;
var vec__11462 = inst_11466;
var v = inst_11467;
var c = inst_11468;
return ((function (cs,vec__11462,v,c,inst_11466,inst_11457,inst_11468,inst_11467,state_val_11488,c__9361__auto___11515,out){
return (function (p1__11452_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11452_SHARP_);
});
;})(cs,vec__11462,v,c,inst_11466,inst_11457,inst_11468,inst_11467,state_val_11488,c__9361__auto___11515,out))
})();
var inst_11472 = cljs.core.filterv.call(null,inst_11471,inst_11457);
var inst_11457__$1 = inst_11472;
var state_11487__$1 = (function (){var statearr_11502 = state_11487;
(statearr_11502[(10)] = inst_11457__$1);

return statearr_11502;
})();
var statearr_11503_11525 = state_11487__$1;
(statearr_11503_11525[(2)] = null);

(statearr_11503_11525[(1)] = (2));


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
});})(c__9361__auto___11515,out))
;
return ((function (switch__9249__auto__,c__9361__auto___11515,out){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_11507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11507[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_11507[(1)] = (1));

return statearr_11507;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_11487){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_11487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e11508){if((e11508 instanceof Object)){
var ex__9253__auto__ = e11508;
var statearr_11509_11526 = state_11487;
(statearr_11509_11526[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11527 = state_11487;
state_11487 = G__11527;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_11487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_11487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___11515,out))
})();
var state__9363__auto__ = (function (){var statearr_11510 = f__9362__auto__.call(null);
(statearr_11510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___11515);

return statearr_11510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___11515,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11528 = [];
var len__7923__auto___11577 = arguments.length;
var i__7924__auto___11578 = (0);
while(true){
if((i__7924__auto___11578 < len__7923__auto___11577)){
args11528.push((arguments[i__7924__auto___11578]));

var G__11579 = (i__7924__auto___11578 + (1));
i__7924__auto___11578 = G__11579;
continue;
} else {
}
break;
}

var G__11530 = args11528.length;
switch (G__11530) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11528.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9361__auto___11581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___11581,out){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___11581,out){
return (function (state_11554){
var state_val_11555 = (state_11554[(1)]);
if((state_val_11555 === (7))){
var inst_11536 = (state_11554[(7)]);
var inst_11536__$1 = (state_11554[(2)]);
var inst_11537 = (inst_11536__$1 == null);
var inst_11538 = cljs.core.not.call(null,inst_11537);
var state_11554__$1 = (function (){var statearr_11556 = state_11554;
(statearr_11556[(7)] = inst_11536__$1);

return statearr_11556;
})();
if(inst_11538){
var statearr_11557_11582 = state_11554__$1;
(statearr_11557_11582[(1)] = (8));

} else {
var statearr_11558_11583 = state_11554__$1;
(statearr_11558_11583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (1))){
var inst_11531 = (0);
var state_11554__$1 = (function (){var statearr_11559 = state_11554;
(statearr_11559[(8)] = inst_11531);

return statearr_11559;
})();
var statearr_11560_11584 = state_11554__$1;
(statearr_11560_11584[(2)] = null);

(statearr_11560_11584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (4))){
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11554__$1,(7),ch);
} else {
if((state_val_11555 === (6))){
var inst_11549 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11561_11585 = state_11554__$1;
(statearr_11561_11585[(2)] = inst_11549);

(statearr_11561_11585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (3))){
var inst_11551 = (state_11554[(2)]);
var inst_11552 = cljs.core.async.close_BANG_.call(null,out);
var state_11554__$1 = (function (){var statearr_11562 = state_11554;
(statearr_11562[(9)] = inst_11551);

return statearr_11562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11554__$1,inst_11552);
} else {
if((state_val_11555 === (2))){
var inst_11531 = (state_11554[(8)]);
var inst_11533 = (inst_11531 < n);
var state_11554__$1 = state_11554;
if(cljs.core.truth_(inst_11533)){
var statearr_11563_11586 = state_11554__$1;
(statearr_11563_11586[(1)] = (4));

} else {
var statearr_11564_11587 = state_11554__$1;
(statearr_11564_11587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (11))){
var inst_11531 = (state_11554[(8)]);
var inst_11541 = (state_11554[(2)]);
var inst_11542 = (inst_11531 + (1));
var inst_11531__$1 = inst_11542;
var state_11554__$1 = (function (){var statearr_11565 = state_11554;
(statearr_11565[(8)] = inst_11531__$1);

(statearr_11565[(10)] = inst_11541);

return statearr_11565;
})();
var statearr_11566_11588 = state_11554__$1;
(statearr_11566_11588[(2)] = null);

(statearr_11566_11588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (9))){
var state_11554__$1 = state_11554;
var statearr_11567_11589 = state_11554__$1;
(statearr_11567_11589[(2)] = null);

(statearr_11567_11589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (5))){
var state_11554__$1 = state_11554;
var statearr_11568_11590 = state_11554__$1;
(statearr_11568_11590[(2)] = null);

(statearr_11568_11590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (10))){
var inst_11546 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11569_11591 = state_11554__$1;
(statearr_11569_11591[(2)] = inst_11546);

(statearr_11569_11591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (8))){
var inst_11536 = (state_11554[(7)]);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11554__$1,(11),out,inst_11536);
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
});})(c__9361__auto___11581,out))
;
return ((function (switch__9249__auto__,c__9361__auto___11581,out){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_11573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11573[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_11573[(1)] = (1));

return statearr_11573;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_11554){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_11554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e11574){if((e11574 instanceof Object)){
var ex__9253__auto__ = e11574;
var statearr_11575_11592 = state_11554;
(statearr_11575_11592[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11593 = state_11554;
state_11554 = G__11593;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_11554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_11554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___11581,out))
})();
var state__9363__auto__ = (function (){var statearr_11576 = f__9362__auto__.call(null);
(statearr_11576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___11581);

return statearr_11576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___11581,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11601 = (function (f,ch,meta11602){
this.f = f;
this.ch = ch;
this.meta11602 = meta11602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11603,meta11602__$1){
var self__ = this;
var _11603__$1 = this;
return (new cljs.core.async.t_cljs$core$async11601(self__.f,self__.ch,meta11602__$1));
});

cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11603){
var self__ = this;
var _11603__$1 = this;
return self__.meta11602;
});

cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11604 = (function (f,ch,meta11602,_,fn1,meta11605){
this.f = f;
this.ch = ch;
this.meta11602 = meta11602;
this._ = _;
this.fn1 = fn1;
this.meta11605 = meta11605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11606,meta11605__$1){
var self__ = this;
var _11606__$1 = this;
return (new cljs.core.async.t_cljs$core$async11604(self__.f,self__.ch,self__.meta11602,self__._,self__.fn1,meta11605__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11606){
var self__ = this;
var _11606__$1 = this;
return self__.meta11605;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11594_SHARP_){
return f1.call(null,(((p1__11594_SHARP_ == null))?null:self__.f.call(null,p1__11594_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11604.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11602","meta11602",800777128,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11601","cljs.core.async/t_cljs$core$async11601",-756474581,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11605","meta11605",1766813327,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11604";

cljs.core.async.t_cljs$core$async11604.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11604");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11604 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11604(f__$1,ch__$1,meta11602__$1,___$2,fn1__$1,meta11605){
return (new cljs.core.async.t_cljs$core$async11604(f__$1,ch__$1,meta11602__$1,___$2,fn1__$1,meta11605));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11604(self__.f,self__.ch,self__.meta11602,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6802__auto__ = ret;
if(cljs.core.truth_(and__6802__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6802__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11602","meta11602",800777128,null)], null);
});

cljs.core.async.t_cljs$core$async11601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11601";

cljs.core.async.t_cljs$core$async11601.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11601");
});

cljs.core.async.__GT_t_cljs$core$async11601 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11601(f__$1,ch__$1,meta11602){
return (new cljs.core.async.t_cljs$core$async11601(f__$1,ch__$1,meta11602));
});

}

return (new cljs.core.async.t_cljs$core$async11601(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11610 = (function (f,ch,meta11611){
this.f = f;
this.ch = ch;
this.meta11611 = meta11611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11612,meta11611__$1){
var self__ = this;
var _11612__$1 = this;
return (new cljs.core.async.t_cljs$core$async11610(self__.f,self__.ch,meta11611__$1));
});

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11612){
var self__ = this;
var _11612__$1 = this;
return self__.meta11611;
});

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11611","meta11611",-633669417,null)], null);
});

cljs.core.async.t_cljs$core$async11610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11610";

cljs.core.async.t_cljs$core$async11610.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11610");
});

cljs.core.async.__GT_t_cljs$core$async11610 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11610(f__$1,ch__$1,meta11611){
return (new cljs.core.async.t_cljs$core$async11610(f__$1,ch__$1,meta11611));
});

}

return (new cljs.core.async.t_cljs$core$async11610(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11616 = (function (p,ch,meta11617){
this.p = p;
this.ch = ch;
this.meta11617 = meta11617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11618,meta11617__$1){
var self__ = this;
var _11618__$1 = this;
return (new cljs.core.async.t_cljs$core$async11616(self__.p,self__.ch,meta11617__$1));
});

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11618){
var self__ = this;
var _11618__$1 = this;
return self__.meta11617;
});

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11617","meta11617",1122239839,null)], null);
});

cljs.core.async.t_cljs$core$async11616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11616";

cljs.core.async.t_cljs$core$async11616.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11616");
});

cljs.core.async.__GT_t_cljs$core$async11616 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11616(p__$1,ch__$1,meta11617){
return (new cljs.core.async.t_cljs$core$async11616(p__$1,ch__$1,meta11617));
});

}

return (new cljs.core.async.t_cljs$core$async11616(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11619 = [];
var len__7923__auto___11663 = arguments.length;
var i__7924__auto___11664 = (0);
while(true){
if((i__7924__auto___11664 < len__7923__auto___11663)){
args11619.push((arguments[i__7924__auto___11664]));

var G__11665 = (i__7924__auto___11664 + (1));
i__7924__auto___11664 = G__11665;
continue;
} else {
}
break;
}

var G__11621 = args11619.length;
switch (G__11621) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11619.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9361__auto___11667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___11667,out){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___11667,out){
return (function (state_11642){
var state_val_11643 = (state_11642[(1)]);
if((state_val_11643 === (7))){
var inst_11638 = (state_11642[(2)]);
var state_11642__$1 = state_11642;
var statearr_11644_11668 = state_11642__$1;
(statearr_11644_11668[(2)] = inst_11638);

(statearr_11644_11668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11643 === (1))){
var state_11642__$1 = state_11642;
var statearr_11645_11669 = state_11642__$1;
(statearr_11645_11669[(2)] = null);

(statearr_11645_11669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11643 === (4))){
var inst_11624 = (state_11642[(7)]);
var inst_11624__$1 = (state_11642[(2)]);
var inst_11625 = (inst_11624__$1 == null);
var state_11642__$1 = (function (){var statearr_11646 = state_11642;
(statearr_11646[(7)] = inst_11624__$1);

return statearr_11646;
})();
if(cljs.core.truth_(inst_11625)){
var statearr_11647_11670 = state_11642__$1;
(statearr_11647_11670[(1)] = (5));

} else {
var statearr_11648_11671 = state_11642__$1;
(statearr_11648_11671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11643 === (6))){
var inst_11624 = (state_11642[(7)]);
var inst_11629 = p.call(null,inst_11624);
var state_11642__$1 = state_11642;
if(cljs.core.truth_(inst_11629)){
var statearr_11649_11672 = state_11642__$1;
(statearr_11649_11672[(1)] = (8));

} else {
var statearr_11650_11673 = state_11642__$1;
(statearr_11650_11673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11643 === (3))){
var inst_11640 = (state_11642[(2)]);
var state_11642__$1 = state_11642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11642__$1,inst_11640);
} else {
if((state_val_11643 === (2))){
var state_11642__$1 = state_11642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11642__$1,(4),ch);
} else {
if((state_val_11643 === (11))){
var inst_11632 = (state_11642[(2)]);
var state_11642__$1 = state_11642;
var statearr_11651_11674 = state_11642__$1;
(statearr_11651_11674[(2)] = inst_11632);

(statearr_11651_11674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11643 === (9))){
var state_11642__$1 = state_11642;
var statearr_11652_11675 = state_11642__$1;
(statearr_11652_11675[(2)] = null);

(statearr_11652_11675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11643 === (5))){
var inst_11627 = cljs.core.async.close_BANG_.call(null,out);
var state_11642__$1 = state_11642;
var statearr_11653_11676 = state_11642__$1;
(statearr_11653_11676[(2)] = inst_11627);

(statearr_11653_11676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11643 === (10))){
var inst_11635 = (state_11642[(2)]);
var state_11642__$1 = (function (){var statearr_11654 = state_11642;
(statearr_11654[(8)] = inst_11635);

return statearr_11654;
})();
var statearr_11655_11677 = state_11642__$1;
(statearr_11655_11677[(2)] = null);

(statearr_11655_11677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11643 === (8))){
var inst_11624 = (state_11642[(7)]);
var state_11642__$1 = state_11642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11642__$1,(11),out,inst_11624);
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
});})(c__9361__auto___11667,out))
;
return ((function (switch__9249__auto__,c__9361__auto___11667,out){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_11659 = [null,null,null,null,null,null,null,null,null];
(statearr_11659[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_11659[(1)] = (1));

return statearr_11659;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_11642){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_11642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e11660){if((e11660 instanceof Object)){
var ex__9253__auto__ = e11660;
var statearr_11661_11678 = state_11642;
(statearr_11661_11678[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11679 = state_11642;
state_11642 = G__11679;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_11642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_11642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___11667,out))
})();
var state__9363__auto__ = (function (){var statearr_11662 = f__9362__auto__.call(null);
(statearr_11662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___11667);

return statearr_11662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___11667,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11680 = [];
var len__7923__auto___11683 = arguments.length;
var i__7924__auto___11684 = (0);
while(true){
if((i__7924__auto___11684 < len__7923__auto___11683)){
args11680.push((arguments[i__7924__auto___11684]));

var G__11685 = (i__7924__auto___11684 + (1));
i__7924__auto___11684 = G__11685;
continue;
} else {
}
break;
}

var G__11682 = args11680.length;
switch (G__11682) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11680.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9361__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto__){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto__){
return (function (state_11852){
var state_val_11853 = (state_11852[(1)]);
if((state_val_11853 === (7))){
var inst_11848 = (state_11852[(2)]);
var state_11852__$1 = state_11852;
var statearr_11854_11895 = state_11852__$1;
(statearr_11854_11895[(2)] = inst_11848);

(statearr_11854_11895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (20))){
var inst_11818 = (state_11852[(7)]);
var inst_11829 = (state_11852[(2)]);
var inst_11830 = cljs.core.next.call(null,inst_11818);
var inst_11804 = inst_11830;
var inst_11805 = null;
var inst_11806 = (0);
var inst_11807 = (0);
var state_11852__$1 = (function (){var statearr_11855 = state_11852;
(statearr_11855[(8)] = inst_11806);

(statearr_11855[(9)] = inst_11829);

(statearr_11855[(10)] = inst_11804);

(statearr_11855[(11)] = inst_11805);

(statearr_11855[(12)] = inst_11807);

return statearr_11855;
})();
var statearr_11856_11896 = state_11852__$1;
(statearr_11856_11896[(2)] = null);

(statearr_11856_11896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (1))){
var state_11852__$1 = state_11852;
var statearr_11857_11897 = state_11852__$1;
(statearr_11857_11897[(2)] = null);

(statearr_11857_11897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (4))){
var inst_11793 = (state_11852[(13)]);
var inst_11793__$1 = (state_11852[(2)]);
var inst_11794 = (inst_11793__$1 == null);
var state_11852__$1 = (function (){var statearr_11858 = state_11852;
(statearr_11858[(13)] = inst_11793__$1);

return statearr_11858;
})();
if(cljs.core.truth_(inst_11794)){
var statearr_11859_11898 = state_11852__$1;
(statearr_11859_11898[(1)] = (5));

} else {
var statearr_11860_11899 = state_11852__$1;
(statearr_11860_11899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (15))){
var state_11852__$1 = state_11852;
var statearr_11864_11900 = state_11852__$1;
(statearr_11864_11900[(2)] = null);

(statearr_11864_11900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (21))){
var state_11852__$1 = state_11852;
var statearr_11865_11901 = state_11852__$1;
(statearr_11865_11901[(2)] = null);

(statearr_11865_11901[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (13))){
var inst_11806 = (state_11852[(8)]);
var inst_11804 = (state_11852[(10)]);
var inst_11805 = (state_11852[(11)]);
var inst_11807 = (state_11852[(12)]);
var inst_11814 = (state_11852[(2)]);
var inst_11815 = (inst_11807 + (1));
var tmp11861 = inst_11806;
var tmp11862 = inst_11804;
var tmp11863 = inst_11805;
var inst_11804__$1 = tmp11862;
var inst_11805__$1 = tmp11863;
var inst_11806__$1 = tmp11861;
var inst_11807__$1 = inst_11815;
var state_11852__$1 = (function (){var statearr_11866 = state_11852;
(statearr_11866[(8)] = inst_11806__$1);

(statearr_11866[(14)] = inst_11814);

(statearr_11866[(10)] = inst_11804__$1);

(statearr_11866[(11)] = inst_11805__$1);

(statearr_11866[(12)] = inst_11807__$1);

return statearr_11866;
})();
var statearr_11867_11902 = state_11852__$1;
(statearr_11867_11902[(2)] = null);

(statearr_11867_11902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (22))){
var state_11852__$1 = state_11852;
var statearr_11868_11903 = state_11852__$1;
(statearr_11868_11903[(2)] = null);

(statearr_11868_11903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (6))){
var inst_11793 = (state_11852[(13)]);
var inst_11802 = f.call(null,inst_11793);
var inst_11803 = cljs.core.seq.call(null,inst_11802);
var inst_11804 = inst_11803;
var inst_11805 = null;
var inst_11806 = (0);
var inst_11807 = (0);
var state_11852__$1 = (function (){var statearr_11869 = state_11852;
(statearr_11869[(8)] = inst_11806);

(statearr_11869[(10)] = inst_11804);

(statearr_11869[(11)] = inst_11805);

(statearr_11869[(12)] = inst_11807);

return statearr_11869;
})();
var statearr_11870_11904 = state_11852__$1;
(statearr_11870_11904[(2)] = null);

(statearr_11870_11904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (17))){
var inst_11818 = (state_11852[(7)]);
var inst_11822 = cljs.core.chunk_first.call(null,inst_11818);
var inst_11823 = cljs.core.chunk_rest.call(null,inst_11818);
var inst_11824 = cljs.core.count.call(null,inst_11822);
var inst_11804 = inst_11823;
var inst_11805 = inst_11822;
var inst_11806 = inst_11824;
var inst_11807 = (0);
var state_11852__$1 = (function (){var statearr_11871 = state_11852;
(statearr_11871[(8)] = inst_11806);

(statearr_11871[(10)] = inst_11804);

(statearr_11871[(11)] = inst_11805);

(statearr_11871[(12)] = inst_11807);

return statearr_11871;
})();
var statearr_11872_11905 = state_11852__$1;
(statearr_11872_11905[(2)] = null);

(statearr_11872_11905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (3))){
var inst_11850 = (state_11852[(2)]);
var state_11852__$1 = state_11852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11852__$1,inst_11850);
} else {
if((state_val_11853 === (12))){
var inst_11838 = (state_11852[(2)]);
var state_11852__$1 = state_11852;
var statearr_11873_11906 = state_11852__$1;
(statearr_11873_11906[(2)] = inst_11838);

(statearr_11873_11906[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (2))){
var state_11852__$1 = state_11852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11852__$1,(4),in$);
} else {
if((state_val_11853 === (23))){
var inst_11846 = (state_11852[(2)]);
var state_11852__$1 = state_11852;
var statearr_11874_11907 = state_11852__$1;
(statearr_11874_11907[(2)] = inst_11846);

(statearr_11874_11907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (19))){
var inst_11833 = (state_11852[(2)]);
var state_11852__$1 = state_11852;
var statearr_11875_11908 = state_11852__$1;
(statearr_11875_11908[(2)] = inst_11833);

(statearr_11875_11908[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (11))){
var inst_11818 = (state_11852[(7)]);
var inst_11804 = (state_11852[(10)]);
var inst_11818__$1 = cljs.core.seq.call(null,inst_11804);
var state_11852__$1 = (function (){var statearr_11876 = state_11852;
(statearr_11876[(7)] = inst_11818__$1);

return statearr_11876;
})();
if(inst_11818__$1){
var statearr_11877_11909 = state_11852__$1;
(statearr_11877_11909[(1)] = (14));

} else {
var statearr_11878_11910 = state_11852__$1;
(statearr_11878_11910[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (9))){
var inst_11840 = (state_11852[(2)]);
var inst_11841 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11852__$1 = (function (){var statearr_11879 = state_11852;
(statearr_11879[(15)] = inst_11840);

return statearr_11879;
})();
if(cljs.core.truth_(inst_11841)){
var statearr_11880_11911 = state_11852__$1;
(statearr_11880_11911[(1)] = (21));

} else {
var statearr_11881_11912 = state_11852__$1;
(statearr_11881_11912[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (5))){
var inst_11796 = cljs.core.async.close_BANG_.call(null,out);
var state_11852__$1 = state_11852;
var statearr_11882_11913 = state_11852__$1;
(statearr_11882_11913[(2)] = inst_11796);

(statearr_11882_11913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (14))){
var inst_11818 = (state_11852[(7)]);
var inst_11820 = cljs.core.chunked_seq_QMARK_.call(null,inst_11818);
var state_11852__$1 = state_11852;
if(inst_11820){
var statearr_11883_11914 = state_11852__$1;
(statearr_11883_11914[(1)] = (17));

} else {
var statearr_11884_11915 = state_11852__$1;
(statearr_11884_11915[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (16))){
var inst_11836 = (state_11852[(2)]);
var state_11852__$1 = state_11852;
var statearr_11885_11916 = state_11852__$1;
(statearr_11885_11916[(2)] = inst_11836);

(statearr_11885_11916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11853 === (10))){
var inst_11805 = (state_11852[(11)]);
var inst_11807 = (state_11852[(12)]);
var inst_11812 = cljs.core._nth.call(null,inst_11805,inst_11807);
var state_11852__$1 = state_11852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11852__$1,(13),out,inst_11812);
} else {
if((state_val_11853 === (18))){
var inst_11818 = (state_11852[(7)]);
var inst_11827 = cljs.core.first.call(null,inst_11818);
var state_11852__$1 = state_11852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11852__$1,(20),out,inst_11827);
} else {
if((state_val_11853 === (8))){
var inst_11806 = (state_11852[(8)]);
var inst_11807 = (state_11852[(12)]);
var inst_11809 = (inst_11807 < inst_11806);
var inst_11810 = inst_11809;
var state_11852__$1 = state_11852;
if(cljs.core.truth_(inst_11810)){
var statearr_11886_11917 = state_11852__$1;
(statearr_11886_11917[(1)] = (10));

} else {
var statearr_11887_11918 = state_11852__$1;
(statearr_11887_11918[(1)] = (11));

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
});})(c__9361__auto__))
;
return ((function (switch__9249__auto__,c__9361__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9250__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9250__auto____0 = (function (){
var statearr_11891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11891[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9250__auto__);

(statearr_11891[(1)] = (1));

return statearr_11891;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9250__auto____1 = (function (state_11852){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_11852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e11892){if((e11892 instanceof Object)){
var ex__9253__auto__ = e11892;
var statearr_11893_11919 = state_11852;
(statearr_11893_11919[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11920 = state_11852;
state_11852 = G__11920;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9250__auto__ = function(state_11852){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9250__auto____1.call(this,state_11852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9250__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9250__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto__))
})();
var state__9363__auto__ = (function (){var statearr_11894 = f__9362__auto__.call(null);
(statearr_11894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto__);

return statearr_11894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto__))
);

return c__9361__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11921 = [];
var len__7923__auto___11924 = arguments.length;
var i__7924__auto___11925 = (0);
while(true){
if((i__7924__auto___11925 < len__7923__auto___11924)){
args11921.push((arguments[i__7924__auto___11925]));

var G__11926 = (i__7924__auto___11925 + (1));
i__7924__auto___11925 = G__11926;
continue;
} else {
}
break;
}

var G__11923 = args11921.length;
switch (G__11923) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11921.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11928 = [];
var len__7923__auto___11931 = arguments.length;
var i__7924__auto___11932 = (0);
while(true){
if((i__7924__auto___11932 < len__7923__auto___11931)){
args11928.push((arguments[i__7924__auto___11932]));

var G__11933 = (i__7924__auto___11932 + (1));
i__7924__auto___11932 = G__11933;
continue;
} else {
}
break;
}

var G__11930 = args11928.length;
switch (G__11930) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11928.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11935 = [];
var len__7923__auto___11986 = arguments.length;
var i__7924__auto___11987 = (0);
while(true){
if((i__7924__auto___11987 < len__7923__auto___11986)){
args11935.push((arguments[i__7924__auto___11987]));

var G__11988 = (i__7924__auto___11987 + (1));
i__7924__auto___11987 = G__11988;
continue;
} else {
}
break;
}

var G__11937 = args11935.length;
switch (G__11937) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11935.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9361__auto___11990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___11990,out){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___11990,out){
return (function (state_11961){
var state_val_11962 = (state_11961[(1)]);
if((state_val_11962 === (7))){
var inst_11956 = (state_11961[(2)]);
var state_11961__$1 = state_11961;
var statearr_11963_11991 = state_11961__$1;
(statearr_11963_11991[(2)] = inst_11956);

(statearr_11963_11991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11962 === (1))){
var inst_11938 = null;
var state_11961__$1 = (function (){var statearr_11964 = state_11961;
(statearr_11964[(7)] = inst_11938);

return statearr_11964;
})();
var statearr_11965_11992 = state_11961__$1;
(statearr_11965_11992[(2)] = null);

(statearr_11965_11992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11962 === (4))){
var inst_11941 = (state_11961[(8)]);
var inst_11941__$1 = (state_11961[(2)]);
var inst_11942 = (inst_11941__$1 == null);
var inst_11943 = cljs.core.not.call(null,inst_11942);
var state_11961__$1 = (function (){var statearr_11966 = state_11961;
(statearr_11966[(8)] = inst_11941__$1);

return statearr_11966;
})();
if(inst_11943){
var statearr_11967_11993 = state_11961__$1;
(statearr_11967_11993[(1)] = (5));

} else {
var statearr_11968_11994 = state_11961__$1;
(statearr_11968_11994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11962 === (6))){
var state_11961__$1 = state_11961;
var statearr_11969_11995 = state_11961__$1;
(statearr_11969_11995[(2)] = null);

(statearr_11969_11995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11962 === (3))){
var inst_11958 = (state_11961[(2)]);
var inst_11959 = cljs.core.async.close_BANG_.call(null,out);
var state_11961__$1 = (function (){var statearr_11970 = state_11961;
(statearr_11970[(9)] = inst_11958);

return statearr_11970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11961__$1,inst_11959);
} else {
if((state_val_11962 === (2))){
var state_11961__$1 = state_11961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11961__$1,(4),ch);
} else {
if((state_val_11962 === (11))){
var inst_11941 = (state_11961[(8)]);
var inst_11950 = (state_11961[(2)]);
var inst_11938 = inst_11941;
var state_11961__$1 = (function (){var statearr_11971 = state_11961;
(statearr_11971[(10)] = inst_11950);

(statearr_11971[(7)] = inst_11938);

return statearr_11971;
})();
var statearr_11972_11996 = state_11961__$1;
(statearr_11972_11996[(2)] = null);

(statearr_11972_11996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11962 === (9))){
var inst_11941 = (state_11961[(8)]);
var state_11961__$1 = state_11961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11961__$1,(11),out,inst_11941);
} else {
if((state_val_11962 === (5))){
var inst_11941 = (state_11961[(8)]);
var inst_11938 = (state_11961[(7)]);
var inst_11945 = cljs.core._EQ_.call(null,inst_11941,inst_11938);
var state_11961__$1 = state_11961;
if(inst_11945){
var statearr_11974_11997 = state_11961__$1;
(statearr_11974_11997[(1)] = (8));

} else {
var statearr_11975_11998 = state_11961__$1;
(statearr_11975_11998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11962 === (10))){
var inst_11953 = (state_11961[(2)]);
var state_11961__$1 = state_11961;
var statearr_11976_11999 = state_11961__$1;
(statearr_11976_11999[(2)] = inst_11953);

(statearr_11976_11999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11962 === (8))){
var inst_11938 = (state_11961[(7)]);
var tmp11973 = inst_11938;
var inst_11938__$1 = tmp11973;
var state_11961__$1 = (function (){var statearr_11977 = state_11961;
(statearr_11977[(7)] = inst_11938__$1);

return statearr_11977;
})();
var statearr_11978_12000 = state_11961__$1;
(statearr_11978_12000[(2)] = null);

(statearr_11978_12000[(1)] = (2));


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
});})(c__9361__auto___11990,out))
;
return ((function (switch__9249__auto__,c__9361__auto___11990,out){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_11982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11982[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_11982[(1)] = (1));

return statearr_11982;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_11961){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_11961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e11983){if((e11983 instanceof Object)){
var ex__9253__auto__ = e11983;
var statearr_11984_12001 = state_11961;
(statearr_11984_12001[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12002 = state_11961;
state_11961 = G__12002;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_11961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_11961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___11990,out))
})();
var state__9363__auto__ = (function (){var statearr_11985 = f__9362__auto__.call(null);
(statearr_11985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___11990);

return statearr_11985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___11990,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12003 = [];
var len__7923__auto___12073 = arguments.length;
var i__7924__auto___12074 = (0);
while(true){
if((i__7924__auto___12074 < len__7923__auto___12073)){
args12003.push((arguments[i__7924__auto___12074]));

var G__12075 = (i__7924__auto___12074 + (1));
i__7924__auto___12074 = G__12075;
continue;
} else {
}
break;
}

var G__12005 = args12003.length;
switch (G__12005) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12003.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9361__auto___12077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___12077,out){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___12077,out){
return (function (state_12043){
var state_val_12044 = (state_12043[(1)]);
if((state_val_12044 === (7))){
var inst_12039 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
var statearr_12045_12078 = state_12043__$1;
(statearr_12045_12078[(2)] = inst_12039);

(statearr_12045_12078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (1))){
var inst_12006 = (new Array(n));
var inst_12007 = inst_12006;
var inst_12008 = (0);
var state_12043__$1 = (function (){var statearr_12046 = state_12043;
(statearr_12046[(7)] = inst_12007);

(statearr_12046[(8)] = inst_12008);

return statearr_12046;
})();
var statearr_12047_12079 = state_12043__$1;
(statearr_12047_12079[(2)] = null);

(statearr_12047_12079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (4))){
var inst_12011 = (state_12043[(9)]);
var inst_12011__$1 = (state_12043[(2)]);
var inst_12012 = (inst_12011__$1 == null);
var inst_12013 = cljs.core.not.call(null,inst_12012);
var state_12043__$1 = (function (){var statearr_12048 = state_12043;
(statearr_12048[(9)] = inst_12011__$1);

return statearr_12048;
})();
if(inst_12013){
var statearr_12049_12080 = state_12043__$1;
(statearr_12049_12080[(1)] = (5));

} else {
var statearr_12050_12081 = state_12043__$1;
(statearr_12050_12081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (15))){
var inst_12033 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
var statearr_12051_12082 = state_12043__$1;
(statearr_12051_12082[(2)] = inst_12033);

(statearr_12051_12082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (13))){
var state_12043__$1 = state_12043;
var statearr_12052_12083 = state_12043__$1;
(statearr_12052_12083[(2)] = null);

(statearr_12052_12083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (6))){
var inst_12008 = (state_12043[(8)]);
var inst_12029 = (inst_12008 > (0));
var state_12043__$1 = state_12043;
if(cljs.core.truth_(inst_12029)){
var statearr_12053_12084 = state_12043__$1;
(statearr_12053_12084[(1)] = (12));

} else {
var statearr_12054_12085 = state_12043__$1;
(statearr_12054_12085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (3))){
var inst_12041 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12043__$1,inst_12041);
} else {
if((state_val_12044 === (12))){
var inst_12007 = (state_12043[(7)]);
var inst_12031 = cljs.core.vec.call(null,inst_12007);
var state_12043__$1 = state_12043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12043__$1,(15),out,inst_12031);
} else {
if((state_val_12044 === (2))){
var state_12043__$1 = state_12043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12043__$1,(4),ch);
} else {
if((state_val_12044 === (11))){
var inst_12023 = (state_12043[(2)]);
var inst_12024 = (new Array(n));
var inst_12007 = inst_12024;
var inst_12008 = (0);
var state_12043__$1 = (function (){var statearr_12055 = state_12043;
(statearr_12055[(10)] = inst_12023);

(statearr_12055[(7)] = inst_12007);

(statearr_12055[(8)] = inst_12008);

return statearr_12055;
})();
var statearr_12056_12086 = state_12043__$1;
(statearr_12056_12086[(2)] = null);

(statearr_12056_12086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (9))){
var inst_12007 = (state_12043[(7)]);
var inst_12021 = cljs.core.vec.call(null,inst_12007);
var state_12043__$1 = state_12043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12043__$1,(11),out,inst_12021);
} else {
if((state_val_12044 === (5))){
var inst_12011 = (state_12043[(9)]);
var inst_12016 = (state_12043[(11)]);
var inst_12007 = (state_12043[(7)]);
var inst_12008 = (state_12043[(8)]);
var inst_12015 = (inst_12007[inst_12008] = inst_12011);
var inst_12016__$1 = (inst_12008 + (1));
var inst_12017 = (inst_12016__$1 < n);
var state_12043__$1 = (function (){var statearr_12057 = state_12043;
(statearr_12057[(11)] = inst_12016__$1);

(statearr_12057[(12)] = inst_12015);

return statearr_12057;
})();
if(cljs.core.truth_(inst_12017)){
var statearr_12058_12087 = state_12043__$1;
(statearr_12058_12087[(1)] = (8));

} else {
var statearr_12059_12088 = state_12043__$1;
(statearr_12059_12088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (14))){
var inst_12036 = (state_12043[(2)]);
var inst_12037 = cljs.core.async.close_BANG_.call(null,out);
var state_12043__$1 = (function (){var statearr_12061 = state_12043;
(statearr_12061[(13)] = inst_12036);

return statearr_12061;
})();
var statearr_12062_12089 = state_12043__$1;
(statearr_12062_12089[(2)] = inst_12037);

(statearr_12062_12089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (10))){
var inst_12027 = (state_12043[(2)]);
var state_12043__$1 = state_12043;
var statearr_12063_12090 = state_12043__$1;
(statearr_12063_12090[(2)] = inst_12027);

(statearr_12063_12090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12044 === (8))){
var inst_12016 = (state_12043[(11)]);
var inst_12007 = (state_12043[(7)]);
var tmp12060 = inst_12007;
var inst_12007__$1 = tmp12060;
var inst_12008 = inst_12016;
var state_12043__$1 = (function (){var statearr_12064 = state_12043;
(statearr_12064[(7)] = inst_12007__$1);

(statearr_12064[(8)] = inst_12008);

return statearr_12064;
})();
var statearr_12065_12091 = state_12043__$1;
(statearr_12065_12091[(2)] = null);

(statearr_12065_12091[(1)] = (2));


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
});})(c__9361__auto___12077,out))
;
return ((function (switch__9249__auto__,c__9361__auto___12077,out){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_12069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12069[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_12069[(1)] = (1));

return statearr_12069;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_12043){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_12043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e12070){if((e12070 instanceof Object)){
var ex__9253__auto__ = e12070;
var statearr_12071_12092 = state_12043;
(statearr_12071_12092[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12093 = state_12043;
state_12043 = G__12093;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_12043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_12043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___12077,out))
})();
var state__9363__auto__ = (function (){var statearr_12072 = f__9362__auto__.call(null);
(statearr_12072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___12077);

return statearr_12072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___12077,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12094 = [];
var len__7923__auto___12168 = arguments.length;
var i__7924__auto___12169 = (0);
while(true){
if((i__7924__auto___12169 < len__7923__auto___12168)){
args12094.push((arguments[i__7924__auto___12169]));

var G__12170 = (i__7924__auto___12169 + (1));
i__7924__auto___12169 = G__12170;
continue;
} else {
}
break;
}

var G__12096 = args12094.length;
switch (G__12096) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12094.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9361__auto___12172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9361__auto___12172,out){
return (function (){
var f__9362__auto__ = (function (){var switch__9249__auto__ = ((function (c__9361__auto___12172,out){
return (function (state_12138){
var state_val_12139 = (state_12138[(1)]);
if((state_val_12139 === (7))){
var inst_12134 = (state_12138[(2)]);
var state_12138__$1 = state_12138;
var statearr_12140_12173 = state_12138__$1;
(statearr_12140_12173[(2)] = inst_12134);

(statearr_12140_12173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (1))){
var inst_12097 = [];
var inst_12098 = inst_12097;
var inst_12099 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12138__$1 = (function (){var statearr_12141 = state_12138;
(statearr_12141[(7)] = inst_12099);

(statearr_12141[(8)] = inst_12098);

return statearr_12141;
})();
var statearr_12142_12174 = state_12138__$1;
(statearr_12142_12174[(2)] = null);

(statearr_12142_12174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (4))){
var inst_12102 = (state_12138[(9)]);
var inst_12102__$1 = (state_12138[(2)]);
var inst_12103 = (inst_12102__$1 == null);
var inst_12104 = cljs.core.not.call(null,inst_12103);
var state_12138__$1 = (function (){var statearr_12143 = state_12138;
(statearr_12143[(9)] = inst_12102__$1);

return statearr_12143;
})();
if(inst_12104){
var statearr_12144_12175 = state_12138__$1;
(statearr_12144_12175[(1)] = (5));

} else {
var statearr_12145_12176 = state_12138__$1;
(statearr_12145_12176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (15))){
var inst_12128 = (state_12138[(2)]);
var state_12138__$1 = state_12138;
var statearr_12146_12177 = state_12138__$1;
(statearr_12146_12177[(2)] = inst_12128);

(statearr_12146_12177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (13))){
var state_12138__$1 = state_12138;
var statearr_12147_12178 = state_12138__$1;
(statearr_12147_12178[(2)] = null);

(statearr_12147_12178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (6))){
var inst_12098 = (state_12138[(8)]);
var inst_12123 = inst_12098.length;
var inst_12124 = (inst_12123 > (0));
var state_12138__$1 = state_12138;
if(cljs.core.truth_(inst_12124)){
var statearr_12148_12179 = state_12138__$1;
(statearr_12148_12179[(1)] = (12));

} else {
var statearr_12149_12180 = state_12138__$1;
(statearr_12149_12180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (3))){
var inst_12136 = (state_12138[(2)]);
var state_12138__$1 = state_12138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12138__$1,inst_12136);
} else {
if((state_val_12139 === (12))){
var inst_12098 = (state_12138[(8)]);
var inst_12126 = cljs.core.vec.call(null,inst_12098);
var state_12138__$1 = state_12138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12138__$1,(15),out,inst_12126);
} else {
if((state_val_12139 === (2))){
var state_12138__$1 = state_12138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12138__$1,(4),ch);
} else {
if((state_val_12139 === (11))){
var inst_12106 = (state_12138[(10)]);
var inst_12102 = (state_12138[(9)]);
var inst_12116 = (state_12138[(2)]);
var inst_12117 = [];
var inst_12118 = inst_12117.push(inst_12102);
var inst_12098 = inst_12117;
var inst_12099 = inst_12106;
var state_12138__$1 = (function (){var statearr_12150 = state_12138;
(statearr_12150[(7)] = inst_12099);

(statearr_12150[(11)] = inst_12116);

(statearr_12150[(8)] = inst_12098);

(statearr_12150[(12)] = inst_12118);

return statearr_12150;
})();
var statearr_12151_12181 = state_12138__$1;
(statearr_12151_12181[(2)] = null);

(statearr_12151_12181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (9))){
var inst_12098 = (state_12138[(8)]);
var inst_12114 = cljs.core.vec.call(null,inst_12098);
var state_12138__$1 = state_12138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12138__$1,(11),out,inst_12114);
} else {
if((state_val_12139 === (5))){
var inst_12099 = (state_12138[(7)]);
var inst_12106 = (state_12138[(10)]);
var inst_12102 = (state_12138[(9)]);
var inst_12106__$1 = f.call(null,inst_12102);
var inst_12107 = cljs.core._EQ_.call(null,inst_12106__$1,inst_12099);
var inst_12108 = cljs.core.keyword_identical_QMARK_.call(null,inst_12099,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12109 = (inst_12107) || (inst_12108);
var state_12138__$1 = (function (){var statearr_12152 = state_12138;
(statearr_12152[(10)] = inst_12106__$1);

return statearr_12152;
})();
if(cljs.core.truth_(inst_12109)){
var statearr_12153_12182 = state_12138__$1;
(statearr_12153_12182[(1)] = (8));

} else {
var statearr_12154_12183 = state_12138__$1;
(statearr_12154_12183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (14))){
var inst_12131 = (state_12138[(2)]);
var inst_12132 = cljs.core.async.close_BANG_.call(null,out);
var state_12138__$1 = (function (){var statearr_12156 = state_12138;
(statearr_12156[(13)] = inst_12131);

return statearr_12156;
})();
var statearr_12157_12184 = state_12138__$1;
(statearr_12157_12184[(2)] = inst_12132);

(statearr_12157_12184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (10))){
var inst_12121 = (state_12138[(2)]);
var state_12138__$1 = state_12138;
var statearr_12158_12185 = state_12138__$1;
(statearr_12158_12185[(2)] = inst_12121);

(statearr_12158_12185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12139 === (8))){
var inst_12106 = (state_12138[(10)]);
var inst_12098 = (state_12138[(8)]);
var inst_12102 = (state_12138[(9)]);
var inst_12111 = inst_12098.push(inst_12102);
var tmp12155 = inst_12098;
var inst_12098__$1 = tmp12155;
var inst_12099 = inst_12106;
var state_12138__$1 = (function (){var statearr_12159 = state_12138;
(statearr_12159[(7)] = inst_12099);

(statearr_12159[(14)] = inst_12111);

(statearr_12159[(8)] = inst_12098__$1);

return statearr_12159;
})();
var statearr_12160_12186 = state_12138__$1;
(statearr_12160_12186[(2)] = null);

(statearr_12160_12186[(1)] = (2));


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
});})(c__9361__auto___12172,out))
;
return ((function (switch__9249__auto__,c__9361__auto___12172,out){
return (function() {
var cljs$core$async$state_machine__9250__auto__ = null;
var cljs$core$async$state_machine__9250__auto____0 = (function (){
var statearr_12164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12164[(0)] = cljs$core$async$state_machine__9250__auto__);

(statearr_12164[(1)] = (1));

return statearr_12164;
});
var cljs$core$async$state_machine__9250__auto____1 = (function (state_12138){
while(true){
var ret_value__9251__auto__ = (function (){try{while(true){
var result__9252__auto__ = switch__9249__auto__.call(null,state_12138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9252__auto__;
}
break;
}
}catch (e12165){if((e12165 instanceof Object)){
var ex__9253__auto__ = e12165;
var statearr_12166_12187 = state_12138;
(statearr_12166_12187[(5)] = ex__9253__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9251__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12188 = state_12138;
state_12138 = G__12188;
continue;
} else {
return ret_value__9251__auto__;
}
break;
}
});
cljs$core$async$state_machine__9250__auto__ = function(state_12138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9250__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9250__auto____1.call(this,state_12138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9250__auto____0;
cljs$core$async$state_machine__9250__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9250__auto____1;
return cljs$core$async$state_machine__9250__auto__;
})()
;})(switch__9249__auto__,c__9361__auto___12172,out))
})();
var state__9363__auto__ = (function (){var statearr_12167 = f__9362__auto__.call(null);
(statearr_12167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9361__auto___12172);

return statearr_12167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9363__auto__);
});})(c__9361__auto___12172,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map