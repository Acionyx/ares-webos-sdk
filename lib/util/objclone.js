function deepCopy(a){if(null===a||"object"!==typeof a)return a;var b=new a.constructor;b.__proto__=a.__proto__;for(var c in a)a.hasOwnProperty(c)&&(b[c]=deepCopy(a[c]));return b}function shallowCopy(a){if(null===a||"object"!==typeof a)return a;var b=new a.constructor;b.__proto__=a.__proto__;for(var c in a)a.hasOwnProperty(c)&&(b[c]=a(a[c]));return b}module.exports.shallowCopy=shallowCopy;module.exports.deepCopy=deepCopy;