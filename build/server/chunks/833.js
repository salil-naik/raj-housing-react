exports.id=833,exports.ids=[833],exports.modules={54832:(e,t,r)=>{var n=r(57310).parse,o=r(82361),s=r(95687),i=r(13685),a=r(73837),c=["pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","secureProtocol","servername","checkServerIdentity"],l=[239,187,191],u=/^(cookie|authorization)$/i;function p(e,t){var r,o=p.CONNECTING,a=t&&t.headers,v=!1;Object.defineProperty(this,"readyState",{get:function(){return o}}),Object.defineProperty(this,"url",{get:function(){return e}});var d=this;function y(t){o!==p.CLOSED&&(o=p.CONNECTING,N("error",new f("error",{message:t})),b&&(e=b,b=null,v=!1),setTimeout(function(){o!==p.CONNECTING||d.connectionInProgress||(d.connectionInProgress=!0,O())},d.reconnectInterval))}d.reconnectInterval=1e3,d.connectionInProgress=!1;var g="";a&&a["Last-Event-ID"]&&(g=a["Last-Event-ID"],delete a["Last-Event-ID"]);var C=!1,E="",m="",b=null;function O(){var P=n(e),I="https:"===P.protocol;if(P.headers={"Cache-Control":"no-cache",Accept:"text/event-stream"},g&&(P.headers["Last-Event-ID"]=g),a){var L=v?function(e){var t={};for(var r in e)u.test(r)||(t[r]=e[r]);return t}(a):a;for(var w in L){var x=L[w];x&&(P.headers[w]=x)}}if(P.rejectUnauthorized=!(t&&!t.rejectUnauthorized),t&&void 0!==t.createConnection&&(P.createConnection=t.createConnection),t&&t.proxy){var j=n(t.proxy);I="https:"===j.protocol,P.protocol=I?"https:":"http:",P.path=e,P.headers.Host=P.host,P.hostname=j.hostname,P.host=j.host,P.port=j.port}if(t&&t.https){for(var D in t.https)if(-1!==c.indexOf(D)){var S=t.https[D];void 0!==S&&(P[D]=S)}}t&&void 0!==t.withCredentials&&(P.withCredentials=t.withCredentials),(r=(I?s:i).request(P,function(t){if(d.connectionInProgress=!1,500===t.statusCode||502===t.statusCode||503===t.statusCode||504===t.statusCode){N("error",new f("error",{status:t.statusCode,message:t.statusMessage})),y();return}if(301===t.statusCode||302===t.statusCode||307===t.statusCode){var r,n,s=t.headers.location;if(!s){N("error",new f("error",{status:t.statusCode,message:t.statusMessage}));return}v=new URL(e).origin!==new URL(s).origin,307===t.statusCode&&(b=e),e=s,process.nextTick(O);return}if(200!==t.statusCode)return N("error",new f("error",{status:t.statusCode,message:t.statusMessage})),d.close();o=p.OPEN,t.on("close",function(){t.removeAllListeners("close"),t.removeAllListeners("end"),y()}),t.on("end",function(){t.removeAllListeners("close"),t.removeAllListeners("end"),y()}),N("open",new f("open"));var i=0,a=-1,c=0,u=0;t.on("data",function(t){if(r)t.length>r.length-u&&((c=2*r.length+t.length)>262144&&(c=r.length+t.length+262144),n=Buffer.alloc(c),r.copy(n,0,0,u),r=n),t.copy(r,u),u+=t.length;else{var o;o=r=t,l.every(function(e,t){return o[t]===e})&&(r=r.slice(l.length)),u=r.length}for(var s=0,p=u;s<p;){C&&(10===r[s]&&++s,C=!1);for(var f,v=-1,y=a,b=i;v<0&&b<p;++b)58===(f=r[b])?y<0&&(y=b-s):13===f?(C=!0,v=b-s):10===f&&(v=b-s);if(v<0){i=p-s,a=y;break}i=0,a=-1,function(t,r,n,o){if(0===o){if(E.length>0){var s=m||"message";N(s,new h(s,{data:E.slice(0,-1),lastEventId:g,origin:new URL(e).origin})),E=""}m=void 0}else if(n>0){var i=n<0,a=0,c=t.slice(r,r+(i?o:n)).toString();a=i?o:32!==t[r+n+1]?n+1:n+2,r+=a;var l=o-a,u=t.slice(r,r+l).toString();if("data"===c)E+=u+"\n";else if("event"===c)m=u;else if("id"===c)g=u;else if("retry"===c){var p=parseInt(u,10);Number.isNaN(p)||(d.reconnectInterval=p)}}}(r,s,y,v),s+=v+1}s===p?(r=void 0,u=0):s>0&&(u=(r=r.slice(s,u)).length)})})).on("error",function(e){d.connectionInProgress=!1,y(e.message)}),r.setNoDelay&&r.setNoDelay(!0),r.end()}function N(){d.listeners(arguments[0]).length>0&&d.emit.apply(d,arguments)}O(),this._close=function(){o!==p.CLOSED&&(o=p.CLOSED,r.abort&&r.abort(),r.xhr&&r.xhr.abort&&r.xhr.abort())}}function f(e,t){if(Object.defineProperty(this,"type",{writable:!1,value:e,enumerable:!0}),t)for(var r in t)t.hasOwnProperty(r)&&Object.defineProperty(this,r,{writable:!1,value:t[r],enumerable:!0})}function h(e,t){for(var r in Object.defineProperty(this,"type",{writable:!1,value:e,enumerable:!0}),t)t.hasOwnProperty(r)&&Object.defineProperty(this,r,{writable:!1,value:t[r],enumerable:!0})}e.exports=p,a.inherits(p,o.EventEmitter),p.prototype.constructor=p,["open","error","message"].forEach(function(e){Object.defineProperty(p.prototype,"on"+e,{get:function(){var t=this.listeners(e)[0];return t?t._listener?t._listener:t:void 0},set:function(t){this.removeAllListeners(e),this.addEventListener(e,t)}})}),Object.defineProperty(p,"CONNECTING",{enumerable:!0,value:0}),Object.defineProperty(p,"OPEN",{enumerable:!0,value:1}),Object.defineProperty(p,"CLOSED",{enumerable:!0,value:2}),p.prototype.CONNECTING=0,p.prototype.OPEN=1,p.prototype.CLOSED=2,p.prototype.close=function(){this._close()},p.prototype.addEventListener=function(e,t){"function"==typeof t&&(t._listener=t,this.on(e,t))},p.prototype.dispatchEvent=function(e){if(!e.type)throw Error("UNSPECIFIED_EVENT_TYPE_ERR");this.emit(e.type,e.detail)},p.prototype.removeEventListener=function(e,t){"function"==typeof t&&(t._listener=void 0,this.removeListener(e,t))}},17123:(e,t,r)=>{e.exports=r(54832)}};