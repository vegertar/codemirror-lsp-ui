'use strict';

var require$$0 = require('util');
var require$$1$1 = require('path');
var require$$2 = require('os');
var require$$3 = require('crypto');
var require$$4 = require('net');
var require$$0$1 = require('url');
var require$$2$1 = require('fs');
var require$$3$1 = require('child_process');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var server$1 = {};

var main$4 = {};

var is$2 = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(is$2, "__esModule", { value: true });
is$2.thenable = is$2.typedArray = is$2.stringArray = is$2.array = is$2.func = is$2.error = is$2.number = is$2.string = is$2.boolean = void 0;
function boolean$1(value) {
    return value === true || value === false;
}
is$2.boolean = boolean$1;
function string$1(value) {
    return typeof value === 'string' || value instanceof String;
}
is$2.string = string$1;
function number$1(value) {
    return typeof value === 'number' || value instanceof Number;
}
is$2.number = number$1;
function error$1(value) {
    return value instanceof Error;
}
is$2.error = error$1;
function func$1(value) {
    return typeof value === 'function';
}
is$2.func = func$1;
function array$1(value) {
    return Array.isArray(value);
}
is$2.array = array$1;
function stringArray$1(value) {
    return array$1(value) && value.every(elem => string$1(elem));
}
is$2.stringArray = stringArray$1;
function typedArray$1(value, check) {
    return Array.isArray(value) && value.every(check);
}
is$2.typedArray = typedArray$1;
function thenable(value) {
    return value && func$1(value.then);
}
is$2.thenable = thenable;

var server = {};

var main$3 = {};

var main$2 = {};

var ril = {};

var api$2 = {};

var messages$1 = {};

var is$1 = {};

var hasRequiredIs;

function requireIs () {
	if (hasRequiredIs) return is$1;
	hasRequiredIs = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(is$1, "__esModule", { value: true });
	is$1.stringArray = is$1.array = is$1.func = is$1.error = is$1.number = is$1.string = is$1.boolean = void 0;
	function boolean(value) {
	    return value === true || value === false;
	}
	is$1.boolean = boolean;
	function string(value) {
	    return typeof value === 'string' || value instanceof String;
	}
	is$1.string = string;
	function number(value) {
	    return typeof value === 'number' || value instanceof Number;
	}
	is$1.number = number;
	function error(value) {
	    return value instanceof Error;
	}
	is$1.error = error;
	function func(value) {
	    return typeof value === 'function';
	}
	is$1.func = func;
	function array(value) {
	    return Array.isArray(value);
	}
	is$1.array = array;
	function stringArray(value) {
	    return array(value) && value.every(elem => string(elem));
	}
	is$1.stringArray = stringArray;
	return is$1;
}

var hasRequiredMessages;

function requireMessages () {
	if (hasRequiredMessages) return messages$1;
	hasRequiredMessages = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Message = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType = exports.RequestType0 = exports.AbstractMessageSignature = exports.ParameterStructures = exports.ResponseError = exports.ErrorCodes = void 0;
		const is = requireIs();
		/**
		 * Predefined error codes.
		 */
		var ErrorCodes;
		(function (ErrorCodes) {
		    // Defined by JSON RPC
		    ErrorCodes.ParseError = -32700;
		    ErrorCodes.InvalidRequest = -32600;
		    ErrorCodes.MethodNotFound = -32601;
		    ErrorCodes.InvalidParams = -32602;
		    ErrorCodes.InternalError = -32603;
		    /**
		     * This is the start range of JSON RPC reserved error codes.
		     * It doesn't denote a real error code. No application error codes should
		     * be defined between the start and end range. For backwards
		     * compatibility the `ServerNotInitialized` and the `UnknownErrorCode`
		     * are left in the range.
		     *
		     * @since 3.16.0
		    */
		    ErrorCodes.jsonrpcReservedErrorRangeStart = -32099;
		    /** @deprecated use  jsonrpcReservedErrorRangeStart */
		    ErrorCodes.serverErrorStart = -32099;
		    /**
		     * An error occurred when write a message to the transport layer.
		     */
		    ErrorCodes.MessageWriteError = -32099;
		    /**
		     * An error occurred when reading a message from the transport layer.
		     */
		    ErrorCodes.MessageReadError = -32098;
		    /**
		     * The connection got disposed or lost and all pending responses got
		     * rejected.
		     */
		    ErrorCodes.PendingResponseRejected = -32097;
		    /**
		     * The connection is inactive and a use of it failed.
		     */
		    ErrorCodes.ConnectionInactive = -32096;
		    /**
		     * Error code indicating that a server received a notification or
		     * request before the server has received the `initialize` request.
		     */
		    ErrorCodes.ServerNotInitialized = -32002;
		    ErrorCodes.UnknownErrorCode = -32001;
		    /**
		     * This is the end range of JSON RPC reserved error codes.
		     * It doesn't denote a real error code.
		     *
		     * @since 3.16.0
		    */
		    ErrorCodes.jsonrpcReservedErrorRangeEnd = -32000;
		    /** @deprecated use  jsonrpcReservedErrorRangeEnd */
		    ErrorCodes.serverErrorEnd = -32000;
		})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
		/**
		 * An error object return in a response in case a request
		 * has failed.
		 */
		class ResponseError extends Error {
		    constructor(code, message, data) {
		        super(message);
		        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
		        this.data = data;
		        Object.setPrototypeOf(this, ResponseError.prototype);
		    }
		    toJson() {
		        const result = {
		            code: this.code,
		            message: this.message
		        };
		        if (this.data !== undefined) {
		            result.data = this.data;
		        }
		        return result;
		    }
		}
		exports.ResponseError = ResponseError;
		class ParameterStructures {
		    constructor(kind) {
		        this.kind = kind;
		    }
		    static is(value) {
		        return value === ParameterStructures.auto || value === ParameterStructures.byName || value === ParameterStructures.byPosition;
		    }
		    toString() {
		        return this.kind;
		    }
		}
		exports.ParameterStructures = ParameterStructures;
		/**
		 * The parameter structure is automatically inferred on the number of parameters
		 * and the parameter type in case of a single param.
		 */
		ParameterStructures.auto = new ParameterStructures('auto');
		/**
		 * Forces `byPosition` parameter structure. This is useful if you have a single
		 * parameter which has a literal type.
		 */
		ParameterStructures.byPosition = new ParameterStructures('byPosition');
		/**
		 * Forces `byName` parameter structure. This is only useful when having a single
		 * parameter. The library will report errors if used with a different number of
		 * parameters.
		 */
		ParameterStructures.byName = new ParameterStructures('byName');
		/**
		 * An abstract implementation of a MessageType.
		 */
		class AbstractMessageSignature {
		    constructor(method, numberOfParams) {
		        this.method = method;
		        this.numberOfParams = numberOfParams;
		    }
		    get parameterStructures() {
		        return ParameterStructures.auto;
		    }
		}
		exports.AbstractMessageSignature = AbstractMessageSignature;
		/**
		 * Classes to type request response pairs
		 */
		class RequestType0 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 0);
		    }
		}
		exports.RequestType0 = RequestType0;
		class RequestType extends AbstractMessageSignature {
		    constructor(method, _parameterStructures = ParameterStructures.auto) {
		        super(method, 1);
		        this._parameterStructures = _parameterStructures;
		    }
		    get parameterStructures() {
		        return this._parameterStructures;
		    }
		}
		exports.RequestType = RequestType;
		class RequestType1 extends AbstractMessageSignature {
		    constructor(method, _parameterStructures = ParameterStructures.auto) {
		        super(method, 1);
		        this._parameterStructures = _parameterStructures;
		    }
		    get parameterStructures() {
		        return this._parameterStructures;
		    }
		}
		exports.RequestType1 = RequestType1;
		class RequestType2 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 2);
		    }
		}
		exports.RequestType2 = RequestType2;
		class RequestType3 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 3);
		    }
		}
		exports.RequestType3 = RequestType3;
		class RequestType4 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 4);
		    }
		}
		exports.RequestType4 = RequestType4;
		class RequestType5 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 5);
		    }
		}
		exports.RequestType5 = RequestType5;
		class RequestType6 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 6);
		    }
		}
		exports.RequestType6 = RequestType6;
		class RequestType7 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 7);
		    }
		}
		exports.RequestType7 = RequestType7;
		class RequestType8 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 8);
		    }
		}
		exports.RequestType8 = RequestType8;
		class RequestType9 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 9);
		    }
		}
		exports.RequestType9 = RequestType9;
		class NotificationType extends AbstractMessageSignature {
		    constructor(method, _parameterStructures = ParameterStructures.auto) {
		        super(method, 1);
		        this._parameterStructures = _parameterStructures;
		    }
		    get parameterStructures() {
		        return this._parameterStructures;
		    }
		}
		exports.NotificationType = NotificationType;
		class NotificationType0 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 0);
		    }
		}
		exports.NotificationType0 = NotificationType0;
		class NotificationType1 extends AbstractMessageSignature {
		    constructor(method, _parameterStructures = ParameterStructures.auto) {
		        super(method, 1);
		        this._parameterStructures = _parameterStructures;
		    }
		    get parameterStructures() {
		        return this._parameterStructures;
		    }
		}
		exports.NotificationType1 = NotificationType1;
		class NotificationType2 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 2);
		    }
		}
		exports.NotificationType2 = NotificationType2;
		class NotificationType3 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 3);
		    }
		}
		exports.NotificationType3 = NotificationType3;
		class NotificationType4 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 4);
		    }
		}
		exports.NotificationType4 = NotificationType4;
		class NotificationType5 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 5);
		    }
		}
		exports.NotificationType5 = NotificationType5;
		class NotificationType6 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 6);
		    }
		}
		exports.NotificationType6 = NotificationType6;
		class NotificationType7 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 7);
		    }
		}
		exports.NotificationType7 = NotificationType7;
		class NotificationType8 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 8);
		    }
		}
		exports.NotificationType8 = NotificationType8;
		class NotificationType9 extends AbstractMessageSignature {
		    constructor(method) {
		        super(method, 9);
		    }
		}
		exports.NotificationType9 = NotificationType9;
		(function (Message) {
		    /**
		     * Tests if the given message is a request message
		     */
		    function isRequest(message) {
		        const candidate = message;
		        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
		    }
		    Message.isRequest = isRequest;
		    /**
		     * Tests if the given message is a notification message
		     */
		    function isNotification(message) {
		        const candidate = message;
		        return candidate && is.string(candidate.method) && message.id === void 0;
		    }
		    Message.isNotification = isNotification;
		    /**
		     * Tests if the given message is a response message
		     */
		    function isResponse(message) {
		        const candidate = message;
		        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
		    }
		    Message.isResponse = isResponse;
		})(exports.Message || (exports.Message = {})); 
	} (messages$1));
	return messages$1;
}

var linkedMap = {};

var hasRequiredLinkedMap;

function requireLinkedMap () {
	if (hasRequiredLinkedMap) return linkedMap;
	hasRequiredLinkedMap = 1;
	(function (exports) {
		/*---------------------------------------------------------------------------------------------
		 *  Copyright (c) Microsoft Corporation. All rights reserved.
		 *  Licensed under the MIT License. See License.txt in the project root for license information.
		 *--------------------------------------------------------------------------------------------*/
		var _a;
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.LRUCache = exports.LinkedMap = exports.Touch = void 0;
		var Touch;
		(function (Touch) {
		    Touch.None = 0;
		    Touch.First = 1;
		    Touch.AsOld = Touch.First;
		    Touch.Last = 2;
		    Touch.AsNew = Touch.Last;
		})(Touch = exports.Touch || (exports.Touch = {}));
		class LinkedMap {
		    constructor() {
		        this[_a] = 'LinkedMap';
		        this._map = new Map();
		        this._head = undefined;
		        this._tail = undefined;
		        this._size = 0;
		        this._state = 0;
		    }
		    clear() {
		        this._map.clear();
		        this._head = undefined;
		        this._tail = undefined;
		        this._size = 0;
		        this._state++;
		    }
		    isEmpty() {
		        return !this._head && !this._tail;
		    }
		    get size() {
		        return this._size;
		    }
		    get first() {
		        return this._head?.value;
		    }
		    get last() {
		        return this._tail?.value;
		    }
		    has(key) {
		        return this._map.has(key);
		    }
		    get(key, touch = Touch.None) {
		        const item = this._map.get(key);
		        if (!item) {
		            return undefined;
		        }
		        if (touch !== Touch.None) {
		            this.touch(item, touch);
		        }
		        return item.value;
		    }
		    set(key, value, touch = Touch.None) {
		        let item = this._map.get(key);
		        if (item) {
		            item.value = value;
		            if (touch !== Touch.None) {
		                this.touch(item, touch);
		            }
		        }
		        else {
		            item = { key, value, next: undefined, previous: undefined };
		            switch (touch) {
		                case Touch.None:
		                    this.addItemLast(item);
		                    break;
		                case Touch.First:
		                    this.addItemFirst(item);
		                    break;
		                case Touch.Last:
		                    this.addItemLast(item);
		                    break;
		                default:
		                    this.addItemLast(item);
		                    break;
		            }
		            this._map.set(key, item);
		            this._size++;
		        }
		        return this;
		    }
		    delete(key) {
		        return !!this.remove(key);
		    }
		    remove(key) {
		        const item = this._map.get(key);
		        if (!item) {
		            return undefined;
		        }
		        this._map.delete(key);
		        this.removeItem(item);
		        this._size--;
		        return item.value;
		    }
		    shift() {
		        if (!this._head && !this._tail) {
		            return undefined;
		        }
		        if (!this._head || !this._tail) {
		            throw new Error('Invalid list');
		        }
		        const item = this._head;
		        this._map.delete(item.key);
		        this.removeItem(item);
		        this._size--;
		        return item.value;
		    }
		    forEach(callbackfn, thisArg) {
		        const state = this._state;
		        let current = this._head;
		        while (current) {
		            if (thisArg) {
		                callbackfn.bind(thisArg)(current.value, current.key, this);
		            }
		            else {
		                callbackfn(current.value, current.key, this);
		            }
		            if (this._state !== state) {
		                throw new Error(`LinkedMap got modified during iteration.`);
		            }
		            current = current.next;
		        }
		    }
		    keys() {
		        const state = this._state;
		        let current = this._head;
		        const iterator = {
		            [Symbol.iterator]: () => {
		                return iterator;
		            },
		            next: () => {
		                if (this._state !== state) {
		                    throw new Error(`LinkedMap got modified during iteration.`);
		                }
		                if (current) {
		                    const result = { value: current.key, done: false };
		                    current = current.next;
		                    return result;
		                }
		                else {
		                    return { value: undefined, done: true };
		                }
		            }
		        };
		        return iterator;
		    }
		    values() {
		        const state = this._state;
		        let current = this._head;
		        const iterator = {
		            [Symbol.iterator]: () => {
		                return iterator;
		            },
		            next: () => {
		                if (this._state !== state) {
		                    throw new Error(`LinkedMap got modified during iteration.`);
		                }
		                if (current) {
		                    const result = { value: current.value, done: false };
		                    current = current.next;
		                    return result;
		                }
		                else {
		                    return { value: undefined, done: true };
		                }
		            }
		        };
		        return iterator;
		    }
		    entries() {
		        const state = this._state;
		        let current = this._head;
		        const iterator = {
		            [Symbol.iterator]: () => {
		                return iterator;
		            },
		            next: () => {
		                if (this._state !== state) {
		                    throw new Error(`LinkedMap got modified during iteration.`);
		                }
		                if (current) {
		                    const result = { value: [current.key, current.value], done: false };
		                    current = current.next;
		                    return result;
		                }
		                else {
		                    return { value: undefined, done: true };
		                }
		            }
		        };
		        return iterator;
		    }
		    [(_a = Symbol.toStringTag, Symbol.iterator)]() {
		        return this.entries();
		    }
		    trimOld(newSize) {
		        if (newSize >= this.size) {
		            return;
		        }
		        if (newSize === 0) {
		            this.clear();
		            return;
		        }
		        let current = this._head;
		        let currentSize = this.size;
		        while (current && currentSize > newSize) {
		            this._map.delete(current.key);
		            current = current.next;
		            currentSize--;
		        }
		        this._head = current;
		        this._size = currentSize;
		        if (current) {
		            current.previous = undefined;
		        }
		        this._state++;
		    }
		    addItemFirst(item) {
		        // First time Insert
		        if (!this._head && !this._tail) {
		            this._tail = item;
		        }
		        else if (!this._head) {
		            throw new Error('Invalid list');
		        }
		        else {
		            item.next = this._head;
		            this._head.previous = item;
		        }
		        this._head = item;
		        this._state++;
		    }
		    addItemLast(item) {
		        // First time Insert
		        if (!this._head && !this._tail) {
		            this._head = item;
		        }
		        else if (!this._tail) {
		            throw new Error('Invalid list');
		        }
		        else {
		            item.previous = this._tail;
		            this._tail.next = item;
		        }
		        this._tail = item;
		        this._state++;
		    }
		    removeItem(item) {
		        if (item === this._head && item === this._tail) {
		            this._head = undefined;
		            this._tail = undefined;
		        }
		        else if (item === this._head) {
		            // This can only happened if size === 1 which is handle
		            // by the case above.
		            if (!item.next) {
		                throw new Error('Invalid list');
		            }
		            item.next.previous = undefined;
		            this._head = item.next;
		        }
		        else if (item === this._tail) {
		            // This can only happened if size === 1 which is handle
		            // by the case above.
		            if (!item.previous) {
		                throw new Error('Invalid list');
		            }
		            item.previous.next = undefined;
		            this._tail = item.previous;
		        }
		        else {
		            const next = item.next;
		            const previous = item.previous;
		            if (!next || !previous) {
		                throw new Error('Invalid list');
		            }
		            next.previous = previous;
		            previous.next = next;
		        }
		        item.next = undefined;
		        item.previous = undefined;
		        this._state++;
		    }
		    touch(item, touch) {
		        if (!this._head || !this._tail) {
		            throw new Error('Invalid list');
		        }
		        if ((touch !== Touch.First && touch !== Touch.Last)) {
		            return;
		        }
		        if (touch === Touch.First) {
		            if (item === this._head) {
		                return;
		            }
		            const next = item.next;
		            const previous = item.previous;
		            // Unlink the item
		            if (item === this._tail) {
		                // previous must be defined since item was not head but is tail
		                // So there are more than on item in the map
		                previous.next = undefined;
		                this._tail = previous;
		            }
		            else {
		                // Both next and previous are not undefined since item was neither head nor tail.
		                next.previous = previous;
		                previous.next = next;
		            }
		            // Insert the node at head
		            item.previous = undefined;
		            item.next = this._head;
		            this._head.previous = item;
		            this._head = item;
		            this._state++;
		        }
		        else if (touch === Touch.Last) {
		            if (item === this._tail) {
		                return;
		            }
		            const next = item.next;
		            const previous = item.previous;
		            // Unlink the item.
		            if (item === this._head) {
		                // next must be defined since item was not tail but is head
		                // So there are more than on item in the map
		                next.previous = undefined;
		                this._head = next;
		            }
		            else {
		                // Both next and previous are not undefined since item was neither head nor tail.
		                next.previous = previous;
		                previous.next = next;
		            }
		            item.next = undefined;
		            item.previous = this._tail;
		            this._tail.next = item;
		            this._tail = item;
		            this._state++;
		        }
		    }
		    toJSON() {
		        const data = [];
		        this.forEach((value, key) => {
		            data.push([key, value]);
		        });
		        return data;
		    }
		    fromJSON(data) {
		        this.clear();
		        for (const [key, value] of data) {
		            this.set(key, value);
		        }
		    }
		}
		exports.LinkedMap = LinkedMap;
		class LRUCache extends LinkedMap {
		    constructor(limit, ratio = 1) {
		        super();
		        this._limit = limit;
		        this._ratio = Math.min(Math.max(0, ratio), 1);
		    }
		    get limit() {
		        return this._limit;
		    }
		    set limit(limit) {
		        this._limit = limit;
		        this.checkTrim();
		    }
		    get ratio() {
		        return this._ratio;
		    }
		    set ratio(ratio) {
		        this._ratio = Math.min(Math.max(0, ratio), 1);
		        this.checkTrim();
		    }
		    get(key, touch = Touch.AsNew) {
		        return super.get(key, touch);
		    }
		    peek(key) {
		        return super.get(key, Touch.None);
		    }
		    set(key, value) {
		        super.set(key, value, Touch.Last);
		        this.checkTrim();
		        return this;
		    }
		    checkTrim() {
		        if (this.size > this._limit) {
		            this.trimOld(Math.round(this._limit * this._ratio));
		        }
		    }
		}
		exports.LRUCache = LRUCache; 
	} (linkedMap));
	return linkedMap;
}

var disposable = {};

var hasRequiredDisposable;

function requireDisposable () {
	if (hasRequiredDisposable) return disposable;
	hasRequiredDisposable = 1;
	(function (exports) {
		/*---------------------------------------------------------------------------------------------
		 *  Copyright (c) Microsoft Corporation. All rights reserved.
		 *  Licensed under the MIT License. See License.txt in the project root for license information.
		 *--------------------------------------------------------------------------------------------*/
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Disposable = void 0;
		(function (Disposable) {
		    function create(func) {
		        return {
		            dispose: func
		        };
		    }
		    Disposable.create = create;
		})(exports.Disposable || (exports.Disposable = {})); 
	} (disposable));
	return disposable;
}

var events = {};

var ral = {};

var hasRequiredRal;

function requireRal () {
	if (hasRequiredRal) return ral;
	hasRequiredRal = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(ral, "__esModule", { value: true });
	let _ral;
	function RAL() {
	    if (_ral === undefined) {
	        throw new Error(`No runtime abstraction layer installed`);
	    }
	    return _ral;
	}
	(function (RAL) {
	    function install(ral) {
	        if (ral === undefined) {
	            throw new Error(`No runtime abstraction layer provided`);
	        }
	        _ral = ral;
	    }
	    RAL.install = install;
	})(RAL || (RAL = {}));
	ral.default = RAL;
	return ral;
}

var hasRequiredEvents;

function requireEvents () {
	if (hasRequiredEvents) return events;
	hasRequiredEvents = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Emitter = exports.Event = void 0;
		const ral_1 = requireRal();
		(function (Event) {
		    const _disposable = { dispose() { } };
		    Event.None = function () { return _disposable; };
		})(exports.Event || (exports.Event = {}));
		class CallbackList {
		    add(callback, context = null, bucket) {
		        if (!this._callbacks) {
		            this._callbacks = [];
		            this._contexts = [];
		        }
		        this._callbacks.push(callback);
		        this._contexts.push(context);
		        if (Array.isArray(bucket)) {
		            bucket.push({ dispose: () => this.remove(callback, context) });
		        }
		    }
		    remove(callback, context = null) {
		        if (!this._callbacks) {
		            return;
		        }
		        let foundCallbackWithDifferentContext = false;
		        for (let i = 0, len = this._callbacks.length; i < len; i++) {
		            if (this._callbacks[i] === callback) {
		                if (this._contexts[i] === context) {
		                    // callback & context match => remove it
		                    this._callbacks.splice(i, 1);
		                    this._contexts.splice(i, 1);
		                    return;
		                }
		                else {
		                    foundCallbackWithDifferentContext = true;
		                }
		            }
		        }
		        if (foundCallbackWithDifferentContext) {
		            throw new Error('When adding a listener with a context, you should remove it with the same context');
		        }
		    }
		    invoke(...args) {
		        if (!this._callbacks) {
		            return [];
		        }
		        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
		        for (let i = 0, len = callbacks.length; i < len; i++) {
		            try {
		                ret.push(callbacks[i].apply(contexts[i], args));
		            }
		            catch (e) {
		                // eslint-disable-next-line no-console
		                (0, ral_1.default)().console.error(e);
		            }
		        }
		        return ret;
		    }
		    isEmpty() {
		        return !this._callbacks || this._callbacks.length === 0;
		    }
		    dispose() {
		        this._callbacks = undefined;
		        this._contexts = undefined;
		    }
		}
		class Emitter {
		    constructor(_options) {
		        this._options = _options;
		    }
		    /**
		     * For the public to allow to subscribe
		     * to events from this Emitter
		     */
		    get event() {
		        if (!this._event) {
		            this._event = (listener, thisArgs, disposables) => {
		                if (!this._callbacks) {
		                    this._callbacks = new CallbackList();
		                }
		                if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
		                    this._options.onFirstListenerAdd(this);
		                }
		                this._callbacks.add(listener, thisArgs);
		                const result = {
		                    dispose: () => {
		                        if (!this._callbacks) {
		                            // disposable is disposed after emitter is disposed.
		                            return;
		                        }
		                        this._callbacks.remove(listener, thisArgs);
		                        result.dispose = Emitter._noop;
		                        if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
		                            this._options.onLastListenerRemove(this);
		                        }
		                    }
		                };
		                if (Array.isArray(disposables)) {
		                    disposables.push(result);
		                }
		                return result;
		            };
		        }
		        return this._event;
		    }
		    /**
		     * To be kept private to fire an event to
		     * subscribers
		     */
		    fire(event) {
		        if (this._callbacks) {
		            this._callbacks.invoke.call(this._callbacks, event);
		        }
		    }
		    dispose() {
		        if (this._callbacks) {
		            this._callbacks.dispose();
		            this._callbacks = undefined;
		        }
		    }
		}
		exports.Emitter = Emitter;
		Emitter._noop = function () { }; 
	} (events));
	return events;
}

var cancellation = {};

var hasRequiredCancellation;

function requireCancellation () {
	if (hasRequiredCancellation) return cancellation;
	hasRequiredCancellation = 1;
	(function (exports) {
		/*---------------------------------------------------------------------------------------------
		 *  Copyright (c) Microsoft Corporation. All rights reserved.
		 *  Licensed under the MIT License. See License.txt in the project root for license information.
		 *--------------------------------------------------------------------------------------------*/
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.CancellationTokenSource = exports.CancellationToken = void 0;
		const ral_1 = requireRal();
		const Is = requireIs();
		const events_1 = requireEvents();
		var CancellationToken;
		(function (CancellationToken) {
		    CancellationToken.None = Object.freeze({
		        isCancellationRequested: false,
		        onCancellationRequested: events_1.Event.None
		    });
		    CancellationToken.Cancelled = Object.freeze({
		        isCancellationRequested: true,
		        onCancellationRequested: events_1.Event.None
		    });
		    function is(value) {
		        const candidate = value;
		        return candidate && (candidate === CancellationToken.None
		            || candidate === CancellationToken.Cancelled
		            || (Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested));
		    }
		    CancellationToken.is = is;
		})(CancellationToken = exports.CancellationToken || (exports.CancellationToken = {}));
		const shortcutEvent = Object.freeze(function (callback, context) {
		    const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
		    return { dispose() { handle.dispose(); } };
		});
		class MutableToken {
		    constructor() {
		        this._isCancelled = false;
		    }
		    cancel() {
		        if (!this._isCancelled) {
		            this._isCancelled = true;
		            if (this._emitter) {
		                this._emitter.fire(undefined);
		                this.dispose();
		            }
		        }
		    }
		    get isCancellationRequested() {
		        return this._isCancelled;
		    }
		    get onCancellationRequested() {
		        if (this._isCancelled) {
		            return shortcutEvent;
		        }
		        if (!this._emitter) {
		            this._emitter = new events_1.Emitter();
		        }
		        return this._emitter.event;
		    }
		    dispose() {
		        if (this._emitter) {
		            this._emitter.dispose();
		            this._emitter = undefined;
		        }
		    }
		}
		class CancellationTokenSource {
		    get token() {
		        if (!this._token) {
		            // be lazy and create the token only when
		            // actually needed
		            this._token = new MutableToken();
		        }
		        return this._token;
		    }
		    cancel() {
		        if (!this._token) {
		            // save an object by returning the default
		            // cancelled token when cancellation happens
		            // before someone asks for the token
		            this._token = CancellationToken.Cancelled;
		        }
		        else {
		            this._token.cancel();
		        }
		    }
		    dispose() {
		        if (!this._token) {
		            // ensure to initialize with an empty token if we had none
		            this._token = CancellationToken.None;
		        }
		        else if (this._token instanceof MutableToken) {
		            // actually dispose
		            this._token.dispose();
		        }
		    }
		}
		exports.CancellationTokenSource = CancellationTokenSource; 
	} (cancellation));
	return cancellation;
}

var sharedArrayCancellation = {};

var hasRequiredSharedArrayCancellation;

function requireSharedArrayCancellation () {
	if (hasRequiredSharedArrayCancellation) return sharedArrayCancellation;
	hasRequiredSharedArrayCancellation = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(sharedArrayCancellation, "__esModule", { value: true });
	sharedArrayCancellation.SharedArrayReceiverStrategy = sharedArrayCancellation.SharedArraySenderStrategy = void 0;
	const cancellation_1 = requireCancellation();
	var CancellationState;
	(function (CancellationState) {
	    CancellationState.Continue = 0;
	    CancellationState.Cancelled = 1;
	})(CancellationState || (CancellationState = {}));
	class SharedArraySenderStrategy {
	    constructor() {
	        this.buffers = new Map();
	    }
	    enableCancellation(request) {
	        if (request.id === null) {
	            return;
	        }
	        const buffer = new SharedArrayBuffer(4);
	        const data = new Int32Array(buffer, 0, 1);
	        data[0] = CancellationState.Continue;
	        this.buffers.set(request.id, buffer);
	        request.$cancellationData = buffer;
	    }
	    async sendCancellation(_conn, id) {
	        const buffer = this.buffers.get(id);
	        if (buffer === undefined) {
	            return;
	        }
	        const data = new Int32Array(buffer, 0, 1);
	        Atomics.store(data, 0, CancellationState.Cancelled);
	    }
	    cleanup(id) {
	        this.buffers.delete(id);
	    }
	    dispose() {
	        this.buffers.clear();
	    }
	}
	sharedArrayCancellation.SharedArraySenderStrategy = SharedArraySenderStrategy;
	class SharedArrayBufferCancellationToken {
	    constructor(buffer) {
	        this.data = new Int32Array(buffer, 0, 1);
	    }
	    get isCancellationRequested() {
	        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
	    }
	    get onCancellationRequested() {
	        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
	    }
	}
	class SharedArrayBufferCancellationTokenSource {
	    constructor(buffer) {
	        this.token = new SharedArrayBufferCancellationToken(buffer);
	    }
	    cancel() {
	    }
	    dispose() {
	    }
	}
	class SharedArrayReceiverStrategy {
	    constructor() {
	        this.kind = 'request';
	    }
	    createCancellationTokenSource(request) {
	        const buffer = request.$cancellationData;
	        if (buffer === undefined) {
	            return new cancellation_1.CancellationTokenSource();
	        }
	        return new SharedArrayBufferCancellationTokenSource(buffer);
	    }
	}
	sharedArrayCancellation.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
	return sharedArrayCancellation;
}

var messageReader = {};

var semaphore = {};

var hasRequiredSemaphore;

function requireSemaphore () {
	if (hasRequiredSemaphore) return semaphore;
	hasRequiredSemaphore = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(semaphore, "__esModule", { value: true });
	semaphore.Semaphore = void 0;
	const ral_1 = requireRal();
	class Semaphore {
	    constructor(capacity = 1) {
	        if (capacity <= 0) {
	            throw new Error('Capacity must be greater than 0');
	        }
	        this._capacity = capacity;
	        this._active = 0;
	        this._waiting = [];
	    }
	    lock(thunk) {
	        return new Promise((resolve, reject) => {
	            this._waiting.push({ thunk, resolve, reject });
	            this.runNext();
	        });
	    }
	    get active() {
	        return this._active;
	    }
	    runNext() {
	        if (this._waiting.length === 0 || this._active === this._capacity) {
	            return;
	        }
	        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
	    }
	    doRunNext() {
	        if (this._waiting.length === 0 || this._active === this._capacity) {
	            return;
	        }
	        const next = this._waiting.shift();
	        this._active++;
	        if (this._active > this._capacity) {
	            throw new Error(`To many thunks active`);
	        }
	        try {
	            const result = next.thunk();
	            if (result instanceof Promise) {
	                result.then((value) => {
	                    this._active--;
	                    next.resolve(value);
	                    this.runNext();
	                }, (err) => {
	                    this._active--;
	                    next.reject(err);
	                    this.runNext();
	                });
	            }
	            else {
	                this._active--;
	                next.resolve(result);
	                this.runNext();
	            }
	        }
	        catch (err) {
	            this._active--;
	            next.reject(err);
	            this.runNext();
	        }
	    }
	}
	semaphore.Semaphore = Semaphore;
	return semaphore;
}

var hasRequiredMessageReader;

function requireMessageReader () {
	if (hasRequiredMessageReader) return messageReader;
	hasRequiredMessageReader = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = void 0;
		const ral_1 = requireRal();
		const Is = requireIs();
		const events_1 = requireEvents();
		const semaphore_1 = requireSemaphore();
		(function (MessageReader) {
		    function is(value) {
		        let candidate = value;
		        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) &&
		            Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
		    }
		    MessageReader.is = is;
		})(exports.MessageReader || (exports.MessageReader = {}));
		class AbstractMessageReader {
		    constructor() {
		        this.errorEmitter = new events_1.Emitter();
		        this.closeEmitter = new events_1.Emitter();
		        this.partialMessageEmitter = new events_1.Emitter();
		    }
		    dispose() {
		        this.errorEmitter.dispose();
		        this.closeEmitter.dispose();
		    }
		    get onError() {
		        return this.errorEmitter.event;
		    }
		    fireError(error) {
		        this.errorEmitter.fire(this.asError(error));
		    }
		    get onClose() {
		        return this.closeEmitter.event;
		    }
		    fireClose() {
		        this.closeEmitter.fire(undefined);
		    }
		    get onPartialMessage() {
		        return this.partialMessageEmitter.event;
		    }
		    firePartialMessage(info) {
		        this.partialMessageEmitter.fire(info);
		    }
		    asError(error) {
		        if (error instanceof Error) {
		            return error;
		        }
		        else {
		            return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : 'unknown'}`);
		        }
		    }
		}
		exports.AbstractMessageReader = AbstractMessageReader;
		var ResolvedMessageReaderOptions;
		(function (ResolvedMessageReaderOptions) {
		    function fromOptions(options) {
		        let charset;
		        let contentDecoder;
		        const contentDecoders = new Map();
		        let contentTypeDecoder;
		        const contentTypeDecoders = new Map();
		        if (options === undefined || typeof options === 'string') {
		            charset = options ?? 'utf-8';
		        }
		        else {
		            charset = options.charset ?? 'utf-8';
		            if (options.contentDecoder !== undefined) {
		                contentDecoder = options.contentDecoder;
		                contentDecoders.set(contentDecoder.name, contentDecoder);
		            }
		            if (options.contentDecoders !== undefined) {
		                for (const decoder of options.contentDecoders) {
		                    contentDecoders.set(decoder.name, decoder);
		                }
		            }
		            if (options.contentTypeDecoder !== undefined) {
		                contentTypeDecoder = options.contentTypeDecoder;
		                contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
		            }
		            if (options.contentTypeDecoders !== undefined) {
		                for (const decoder of options.contentTypeDecoders) {
		                    contentTypeDecoders.set(decoder.name, decoder);
		                }
		            }
		        }
		        if (contentTypeDecoder === undefined) {
		            contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
		            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
		        }
		        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
		    }
		    ResolvedMessageReaderOptions.fromOptions = fromOptions;
		})(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
		class ReadableStreamMessageReader extends AbstractMessageReader {
		    constructor(readable, options) {
		        super();
		        this.readable = readable;
		        this.options = ResolvedMessageReaderOptions.fromOptions(options);
		        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
		        this._partialMessageTimeout = 10000;
		        this.nextMessageLength = -1;
		        this.messageToken = 0;
		        this.readSemaphore = new semaphore_1.Semaphore(1);
		    }
		    set partialMessageTimeout(timeout) {
		        this._partialMessageTimeout = timeout;
		    }
		    get partialMessageTimeout() {
		        return this._partialMessageTimeout;
		    }
		    listen(callback) {
		        this.nextMessageLength = -1;
		        this.messageToken = 0;
		        this.partialMessageTimer = undefined;
		        this.callback = callback;
		        const result = this.readable.onData((data) => {
		            this.onData(data);
		        });
		        this.readable.onError((error) => this.fireError(error));
		        this.readable.onClose(() => this.fireClose());
		        return result;
		    }
		    onData(data) {
		        this.buffer.append(data);
		        while (true) {
		            if (this.nextMessageLength === -1) {
		                const headers = this.buffer.tryReadHeaders(true);
		                if (!headers) {
		                    return;
		                }
		                const contentLength = headers.get('content-length');
		                if (!contentLength) {
		                    this.fireError(new Error('Header must provide a Content-Length property.'));
		                    return;
		                }
		                const length = parseInt(contentLength);
		                if (isNaN(length)) {
		                    this.fireError(new Error('Content-Length value must be a number.'));
		                    return;
		                }
		                this.nextMessageLength = length;
		            }
		            const body = this.buffer.tryReadBody(this.nextMessageLength);
		            if (body === undefined) {
		                /** We haven't received the full message yet. */
		                this.setPartialMessageTimer();
		                return;
		            }
		            this.clearPartialMessageTimer();
		            this.nextMessageLength = -1;
		            // Make sure that we convert one received message after the
		            // other. Otherwise it could happen that a decoding of a second
		            // smaller message finished before the decoding of a first larger
		            // message and then we would deliver the second message first.
		            this.readSemaphore.lock(async () => {
		                const bytes = this.options.contentDecoder !== undefined
		                    ? await this.options.contentDecoder.decode(body)
		                    : body;
		                const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
		                this.callback(message);
		            }).catch((error) => {
		                this.fireError(error);
		            });
		        }
		    }
		    clearPartialMessageTimer() {
		        if (this.partialMessageTimer) {
		            this.partialMessageTimer.dispose();
		            this.partialMessageTimer = undefined;
		        }
		    }
		    setPartialMessageTimer() {
		        this.clearPartialMessageTimer();
		        if (this._partialMessageTimeout <= 0) {
		            return;
		        }
		        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
		            this.partialMessageTimer = undefined;
		            if (token === this.messageToken) {
		                this.firePartialMessage({ messageToken: token, waitingTime: timeout });
		                this.setPartialMessageTimer();
		            }
		        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
		    }
		}
		exports.ReadableStreamMessageReader = ReadableStreamMessageReader; 
	} (messageReader));
	return messageReader;
}

var messageWriter = {};

var hasRequiredMessageWriter;

function requireMessageWriter () {
	if (hasRequiredMessageWriter) return messageWriter;
	hasRequiredMessageWriter = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = void 0;
		const ral_1 = requireRal();
		const Is = requireIs();
		const semaphore_1 = requireSemaphore();
		const events_1 = requireEvents();
		const ContentLength = 'Content-Length: ';
		const CRLF = '\r\n';
		(function (MessageWriter) {
		    function is(value) {
		        let candidate = value;
		        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) &&
		            Is.func(candidate.onError) && Is.func(candidate.write);
		    }
		    MessageWriter.is = is;
		})(exports.MessageWriter || (exports.MessageWriter = {}));
		class AbstractMessageWriter {
		    constructor() {
		        this.errorEmitter = new events_1.Emitter();
		        this.closeEmitter = new events_1.Emitter();
		    }
		    dispose() {
		        this.errorEmitter.dispose();
		        this.closeEmitter.dispose();
		    }
		    get onError() {
		        return this.errorEmitter.event;
		    }
		    fireError(error, message, count) {
		        this.errorEmitter.fire([this.asError(error), message, count]);
		    }
		    get onClose() {
		        return this.closeEmitter.event;
		    }
		    fireClose() {
		        this.closeEmitter.fire(undefined);
		    }
		    asError(error) {
		        if (error instanceof Error) {
		            return error;
		        }
		        else {
		            return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : 'unknown'}`);
		        }
		    }
		}
		exports.AbstractMessageWriter = AbstractMessageWriter;
		var ResolvedMessageWriterOptions;
		(function (ResolvedMessageWriterOptions) {
		    function fromOptions(options) {
		        if (options === undefined || typeof options === 'string') {
		            return { charset: options ?? 'utf-8', contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
		        }
		        else {
		            return { charset: options.charset ?? 'utf-8', contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
		        }
		    }
		    ResolvedMessageWriterOptions.fromOptions = fromOptions;
		})(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
		class WriteableStreamMessageWriter extends AbstractMessageWriter {
		    constructor(writable, options) {
		        super();
		        this.writable = writable;
		        this.options = ResolvedMessageWriterOptions.fromOptions(options);
		        this.errorCount = 0;
		        this.writeSemaphore = new semaphore_1.Semaphore(1);
		        this.writable.onError((error) => this.fireError(error));
		        this.writable.onClose(() => this.fireClose());
		    }
		    async write(msg) {
		        return this.writeSemaphore.lock(async () => {
		            const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
		                if (this.options.contentEncoder !== undefined) {
		                    return this.options.contentEncoder.encode(buffer);
		                }
		                else {
		                    return buffer;
		                }
		            });
		            return payload.then((buffer) => {
		                const headers = [];
		                headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
		                headers.push(CRLF);
		                return this.doWrite(msg, headers, buffer);
		            }, (error) => {
		                this.fireError(error);
		                throw error;
		            });
		        });
		    }
		    async doWrite(msg, headers, data) {
		        try {
		            await this.writable.write(headers.join(''), 'ascii');
		            return this.writable.write(data);
		        }
		        catch (error) {
		            this.handleError(error, msg);
		            return Promise.reject(error);
		        }
		    }
		    handleError(error, msg) {
		        this.errorCount++;
		        this.fireError(error, msg, this.errorCount);
		    }
		    end() {
		        this.writable.end();
		    }
		}
		exports.WriteableStreamMessageWriter = WriteableStreamMessageWriter; 
	} (messageWriter));
	return messageWriter;
}

var messageBuffer = {};

var hasRequiredMessageBuffer;

function requireMessageBuffer () {
	if (hasRequiredMessageBuffer) return messageBuffer;
	hasRequiredMessageBuffer = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(messageBuffer, "__esModule", { value: true });
	messageBuffer.AbstractMessageBuffer = void 0;
	const CR = 13;
	const LF = 10;
	const CRLF = '\r\n';
	class AbstractMessageBuffer {
	    constructor(encoding = 'utf-8') {
	        this._encoding = encoding;
	        this._chunks = [];
	        this._totalLength = 0;
	    }
	    get encoding() {
	        return this._encoding;
	    }
	    append(chunk) {
	        const toAppend = typeof chunk === 'string' ? this.fromString(chunk, this._encoding) : chunk;
	        this._chunks.push(toAppend);
	        this._totalLength += toAppend.byteLength;
	    }
	    tryReadHeaders(lowerCaseKeys = false) {
	        if (this._chunks.length === 0) {
	            return undefined;
	        }
	        let state = 0;
	        let chunkIndex = 0;
	        let offset = 0;
	        let chunkBytesRead = 0;
	        row: while (chunkIndex < this._chunks.length) {
	            const chunk = this._chunks[chunkIndex];
	            offset = 0;
	            while (offset < chunk.length) {
	                const value = chunk[offset];
	                switch (value) {
	                    case CR:
	                        switch (state) {
	                            case 0:
	                                state = 1;
	                                break;
	                            case 2:
	                                state = 3;
	                                break;
	                            default:
	                                state = 0;
	                        }
	                        break;
	                    case LF:
	                        switch (state) {
	                            case 1:
	                                state = 2;
	                                break;
	                            case 3:
	                                state = 4;
	                                offset++;
	                                break row;
	                            default:
	                                state = 0;
	                        }
	                        break;
	                    default:
	                        state = 0;
	                }
	                offset++;
	            }
	            chunkBytesRead += chunk.byteLength;
	            chunkIndex++;
	        }
	        if (state !== 4) {
	            return undefined;
	        }
	        // The buffer contains the two CRLF at the end. So we will
	        // have two empty lines after the split at the end as well.
	        const buffer = this._read(chunkBytesRead + offset);
	        const result = new Map();
	        const headers = this.toString(buffer, 'ascii').split(CRLF);
	        if (headers.length < 2) {
	            return result;
	        }
	        for (let i = 0; i < headers.length - 2; i++) {
	            const header = headers[i];
	            const index = header.indexOf(':');
	            if (index === -1) {
	                throw new Error('Message header must separate key and value using :');
	            }
	            const key = header.substr(0, index);
	            const value = header.substr(index + 1).trim();
	            result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
	        }
	        return result;
	    }
	    tryReadBody(length) {
	        if (this._totalLength < length) {
	            return undefined;
	        }
	        return this._read(length);
	    }
	    get numberOfBytes() {
	        return this._totalLength;
	    }
	    _read(byteCount) {
	        if (byteCount === 0) {
	            return this.emptyBuffer();
	        }
	        if (byteCount > this._totalLength) {
	            throw new Error(`Cannot read so many bytes!`);
	        }
	        if (this._chunks[0].byteLength === byteCount) {
	            // super fast path, precisely first chunk must be returned
	            const chunk = this._chunks[0];
	            this._chunks.shift();
	            this._totalLength -= byteCount;
	            return this.asNative(chunk);
	        }
	        if (this._chunks[0].byteLength > byteCount) {
	            // fast path, the reading is entirely within the first chunk
	            const chunk = this._chunks[0];
	            const result = this.asNative(chunk, byteCount);
	            this._chunks[0] = chunk.slice(byteCount);
	            this._totalLength -= byteCount;
	            return result;
	        }
	        const result = this.allocNative(byteCount);
	        let resultOffset = 0;
	        let chunkIndex = 0;
	        while (byteCount > 0) {
	            const chunk = this._chunks[chunkIndex];
	            if (chunk.byteLength > byteCount) {
	                // this chunk will survive
	                const chunkPart = chunk.slice(0, byteCount);
	                result.set(chunkPart, resultOffset);
	                resultOffset += byteCount;
	                this._chunks[chunkIndex] = chunk.slice(byteCount);
	                this._totalLength -= byteCount;
	                byteCount -= byteCount;
	            }
	            else {
	                // this chunk will be entirely read
	                result.set(chunk, resultOffset);
	                resultOffset += chunk.byteLength;
	                this._chunks.shift();
	                this._totalLength -= chunk.byteLength;
	                byteCount -= chunk.byteLength;
	            }
	        }
	        return result;
	    }
	}
	messageBuffer.AbstractMessageBuffer = AbstractMessageBuffer;
	return messageBuffer;
}

var connection$2 = {};

var hasRequiredConnection;

function requireConnection () {
	if (hasRequiredConnection) return connection$2;
	hasRequiredConnection = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createMessageConnection = exports.ConnectionOptions = exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = exports.NullLogger = exports.ProgressType = exports.ProgressToken = void 0;
		const ral_1 = requireRal();
		const Is = requireIs();
		const messages_1 = requireMessages();
		const linkedMap_1 = requireLinkedMap();
		const events_1 = requireEvents();
		const cancellation_1 = requireCancellation();
		var CancelNotification;
		(function (CancelNotification) {
		    CancelNotification.type = new messages_1.NotificationType('$/cancelRequest');
		})(CancelNotification || (CancelNotification = {}));
		var ProgressToken;
		(function (ProgressToken) {
		    function is(value) {
		        return typeof value === 'string' || typeof value === 'number';
		    }
		    ProgressToken.is = is;
		})(ProgressToken = exports.ProgressToken || (exports.ProgressToken = {}));
		var ProgressNotification;
		(function (ProgressNotification) {
		    ProgressNotification.type = new messages_1.NotificationType('$/progress');
		})(ProgressNotification || (ProgressNotification = {}));
		class ProgressType {
		    constructor() {
		    }
		}
		exports.ProgressType = ProgressType;
		var StarRequestHandler;
		(function (StarRequestHandler) {
		    function is(value) {
		        return Is.func(value);
		    }
		    StarRequestHandler.is = is;
		})(StarRequestHandler || (StarRequestHandler = {}));
		exports.NullLogger = Object.freeze({
		    error: () => { },
		    warn: () => { },
		    info: () => { },
		    log: () => { }
		});
		var Trace;
		(function (Trace) {
		    Trace[Trace["Off"] = 0] = "Off";
		    Trace[Trace["Messages"] = 1] = "Messages";
		    Trace[Trace["Compact"] = 2] = "Compact";
		    Trace[Trace["Verbose"] = 3] = "Verbose";
		})(Trace = exports.Trace || (exports.Trace = {}));
		(function (TraceValues) {
		    /**
		     * Turn tracing off.
		     */
		    TraceValues.Off = 'off';
		    /**
		     * Trace messages only.
		     */
		    TraceValues.Messages = 'messages';
		    /**
		     * Compact message tracing.
		     */
		    TraceValues.Compact = 'compact';
		    /**
		     * Verbose message tracing.
		     */
		    TraceValues.Verbose = 'verbose';
		})(exports.TraceValues || (exports.TraceValues = {}));
		(function (Trace) {
		    function fromString(value) {
		        if (!Is.string(value)) {
		            return Trace.Off;
		        }
		        value = value.toLowerCase();
		        switch (value) {
		            case 'off':
		                return Trace.Off;
		            case 'messages':
		                return Trace.Messages;
		            case 'compact':
		                return Trace.Compact;
		            case 'verbose':
		                return Trace.Verbose;
		            default:
		                return Trace.Off;
		        }
		    }
		    Trace.fromString = fromString;
		    function toString(value) {
		        switch (value) {
		            case Trace.Off:
		                return 'off';
		            case Trace.Messages:
		                return 'messages';
		            case Trace.Compact:
		                return 'compact';
		            case Trace.Verbose:
		                return 'verbose';
		            default:
		                return 'off';
		        }
		    }
		    Trace.toString = toString;
		})(Trace = exports.Trace || (exports.Trace = {}));
		var TraceFormat;
		(function (TraceFormat) {
		    TraceFormat["Text"] = "text";
		    TraceFormat["JSON"] = "json";
		})(TraceFormat = exports.TraceFormat || (exports.TraceFormat = {}));
		(function (TraceFormat) {
		    function fromString(value) {
		        if (!Is.string(value)) {
		            return TraceFormat.Text;
		        }
		        value = value.toLowerCase();
		        if (value === 'json') {
		            return TraceFormat.JSON;
		        }
		        else {
		            return TraceFormat.Text;
		        }
		    }
		    TraceFormat.fromString = fromString;
		})(TraceFormat = exports.TraceFormat || (exports.TraceFormat = {}));
		var SetTraceNotification;
		(function (SetTraceNotification) {
		    SetTraceNotification.type = new messages_1.NotificationType('$/setTrace');
		})(SetTraceNotification = exports.SetTraceNotification || (exports.SetTraceNotification = {}));
		var LogTraceNotification;
		(function (LogTraceNotification) {
		    LogTraceNotification.type = new messages_1.NotificationType('$/logTrace');
		})(LogTraceNotification = exports.LogTraceNotification || (exports.LogTraceNotification = {}));
		var ConnectionErrors;
		(function (ConnectionErrors) {
		    /**
		     * The connection is closed.
		     */
		    ConnectionErrors[ConnectionErrors["Closed"] = 1] = "Closed";
		    /**
		     * The connection got disposed.
		     */
		    ConnectionErrors[ConnectionErrors["Disposed"] = 2] = "Disposed";
		    /**
		     * The connection is already in listening mode.
		     */
		    ConnectionErrors[ConnectionErrors["AlreadyListening"] = 3] = "AlreadyListening";
		})(ConnectionErrors = exports.ConnectionErrors || (exports.ConnectionErrors = {}));
		class ConnectionError extends Error {
		    constructor(code, message) {
		        super(message);
		        this.code = code;
		        Object.setPrototypeOf(this, ConnectionError.prototype);
		    }
		}
		exports.ConnectionError = ConnectionError;
		var ConnectionStrategy;
		(function (ConnectionStrategy) {
		    function is(value) {
		        const candidate = value;
		        return candidate && Is.func(candidate.cancelUndispatched);
		    }
		    ConnectionStrategy.is = is;
		})(ConnectionStrategy = exports.ConnectionStrategy || (exports.ConnectionStrategy = {}));
		var IdCancellationReceiverStrategy;
		(function (IdCancellationReceiverStrategy) {
		    function is(value) {
		        const candidate = value;
		        return candidate && (candidate.kind === undefined || candidate.kind === 'id') && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === undefined || Is.func(candidate.dispose));
		    }
		    IdCancellationReceiverStrategy.is = is;
		})(IdCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy || (exports.IdCancellationReceiverStrategy = {}));
		var RequestCancellationReceiverStrategy;
		(function (RequestCancellationReceiverStrategy) {
		    function is(value) {
		        const candidate = value;
		        return candidate && candidate.kind === 'request' && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === undefined || Is.func(candidate.dispose));
		    }
		    RequestCancellationReceiverStrategy.is = is;
		})(RequestCancellationReceiverStrategy = exports.RequestCancellationReceiverStrategy || (exports.RequestCancellationReceiverStrategy = {}));
		var CancellationReceiverStrategy;
		(function (CancellationReceiverStrategy) {
		    CancellationReceiverStrategy.Message = Object.freeze({
		        createCancellationTokenSource(_) {
		            return new cancellation_1.CancellationTokenSource();
		        }
		    });
		    function is(value) {
		        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
		    }
		    CancellationReceiverStrategy.is = is;
		})(CancellationReceiverStrategy = exports.CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = {}));
		var CancellationSenderStrategy;
		(function (CancellationSenderStrategy) {
		    CancellationSenderStrategy.Message = Object.freeze({
		        sendCancellation(conn, id) {
		            return conn.sendNotification(CancelNotification.type, { id });
		        },
		        cleanup(_) { }
		    });
		    function is(value) {
		        const candidate = value;
		        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
		    }
		    CancellationSenderStrategy.is = is;
		})(CancellationSenderStrategy = exports.CancellationSenderStrategy || (exports.CancellationSenderStrategy = {}));
		var CancellationStrategy;
		(function (CancellationStrategy) {
		    CancellationStrategy.Message = Object.freeze({
		        receiver: CancellationReceiverStrategy.Message,
		        sender: CancellationSenderStrategy.Message
		    });
		    function is(value) {
		        const candidate = value;
		        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
		    }
		    CancellationStrategy.is = is;
		})(CancellationStrategy = exports.CancellationStrategy || (exports.CancellationStrategy = {}));
		var MessageStrategy;
		(function (MessageStrategy) {
		    function is(value) {
		        const candidate = value;
		        return candidate && Is.func(candidate.handleMessage);
		    }
		    MessageStrategy.is = is;
		})(MessageStrategy = exports.MessageStrategy || (exports.MessageStrategy = {}));
		(function (ConnectionOptions) {
		    function is(value) {
		        const candidate = value;
		        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
		    }
		    ConnectionOptions.is = is;
		})(exports.ConnectionOptions || (exports.ConnectionOptions = {}));
		var ConnectionState;
		(function (ConnectionState) {
		    ConnectionState[ConnectionState["New"] = 1] = "New";
		    ConnectionState[ConnectionState["Listening"] = 2] = "Listening";
		    ConnectionState[ConnectionState["Closed"] = 3] = "Closed";
		    ConnectionState[ConnectionState["Disposed"] = 4] = "Disposed";
		})(ConnectionState || (ConnectionState = {}));
		function createMessageConnection(messageReader, messageWriter, _logger, options) {
		    const logger = _logger !== undefined ? _logger : exports.NullLogger;
		    let sequenceNumber = 0;
		    let notificationSequenceNumber = 0;
		    let unknownResponseSequenceNumber = 0;
		    const version = '2.0';
		    let starRequestHandler = undefined;
		    const requestHandlers = new Map();
		    let starNotificationHandler = undefined;
		    const notificationHandlers = new Map();
		    const progressHandlers = new Map();
		    let timer;
		    let messageQueue = new linkedMap_1.LinkedMap();
		    let responsePromises = new Map();
		    let knownCanceledRequests = new Set();
		    let requestTokens = new Map();
		    let trace = Trace.Off;
		    let traceFormat = TraceFormat.Text;
		    let tracer;
		    let state = ConnectionState.New;
		    const errorEmitter = new events_1.Emitter();
		    const closeEmitter = new events_1.Emitter();
		    const unhandledNotificationEmitter = new events_1.Emitter();
		    const unhandledProgressEmitter = new events_1.Emitter();
		    const disposeEmitter = new events_1.Emitter();
		    const cancellationStrategy = (options && options.cancellationStrategy) ? options.cancellationStrategy : CancellationStrategy.Message;
		    function createRequestQueueKey(id) {
		        if (id === null) {
		            throw new Error(`Can't send requests with id null since the response can't be correlated.`);
		        }
		        return 'req-' + id.toString();
		    }
		    function createResponseQueueKey(id) {
		        if (id === null) {
		            return 'res-unknown-' + (++unknownResponseSequenceNumber).toString();
		        }
		        else {
		            return 'res-' + id.toString();
		        }
		    }
		    function createNotificationQueueKey() {
		        return 'not-' + (++notificationSequenceNumber).toString();
		    }
		    function addMessageToQueue(queue, message) {
		        if (messages_1.Message.isRequest(message)) {
		            queue.set(createRequestQueueKey(message.id), message);
		        }
		        else if (messages_1.Message.isResponse(message)) {
		            queue.set(createResponseQueueKey(message.id), message);
		        }
		        else {
		            queue.set(createNotificationQueueKey(), message);
		        }
		    }
		    function cancelUndispatched(_message) {
		        return undefined;
		    }
		    function isListening() {
		        return state === ConnectionState.Listening;
		    }
		    function isClosed() {
		        return state === ConnectionState.Closed;
		    }
		    function isDisposed() {
		        return state === ConnectionState.Disposed;
		    }
		    function closeHandler() {
		        if (state === ConnectionState.New || state === ConnectionState.Listening) {
		            state = ConnectionState.Closed;
		            closeEmitter.fire(undefined);
		        }
		        // If the connection is disposed don't sent close events.
		    }
		    function readErrorHandler(error) {
		        errorEmitter.fire([error, undefined, undefined]);
		    }
		    function writeErrorHandler(data) {
		        errorEmitter.fire(data);
		    }
		    messageReader.onClose(closeHandler);
		    messageReader.onError(readErrorHandler);
		    messageWriter.onClose(closeHandler);
		    messageWriter.onError(writeErrorHandler);
		    function triggerMessageQueue() {
		        if (timer || messageQueue.size === 0) {
		            return;
		        }
		        timer = (0, ral_1.default)().timer.setImmediate(() => {
		            timer = undefined;
		            processMessageQueue();
		        });
		    }
		    function handleMessage(message) {
		        if (messages_1.Message.isRequest(message)) {
		            handleRequest(message);
		        }
		        else if (messages_1.Message.isNotification(message)) {
		            handleNotification(message);
		        }
		        else if (messages_1.Message.isResponse(message)) {
		            handleResponse(message);
		        }
		        else {
		            handleInvalidMessage(message);
		        }
		    }
		    function processMessageQueue() {
		        if (messageQueue.size === 0) {
		            return;
		        }
		        const message = messageQueue.shift();
		        try {
		            const messageStrategy = options?.messageStrategy;
		            if (MessageStrategy.is(messageStrategy)) {
		                messageStrategy.handleMessage(message, handleMessage);
		            }
		            else {
		                handleMessage(message);
		            }
		        }
		        finally {
		            triggerMessageQueue();
		        }
		    }
		    const callback = (message) => {
		        try {
		            // We have received a cancellation message. Check if the message is still in the queue
		            // and cancel it if allowed to do so.
		            if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
		                const cancelId = message.params.id;
		                const key = createRequestQueueKey(cancelId);
		                const toCancel = messageQueue.get(key);
		                if (messages_1.Message.isRequest(toCancel)) {
		                    const strategy = options?.connectionStrategy;
		                    const response = (strategy && strategy.cancelUndispatched) ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
		                    if (response && (response.error !== undefined || response.result !== undefined)) {
		                        messageQueue.delete(key);
		                        requestTokens.delete(cancelId);
		                        response.id = toCancel.id;
		                        traceSendingResponse(response, message.method, Date.now());
		                        messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
		                        return;
		                    }
		                }
		                const cancellationToken = requestTokens.get(cancelId);
		                // The request is already running. Cancel the token
		                if (cancellationToken !== undefined) {
		                    cancellationToken.cancel();
		                    traceReceivedNotification(message);
		                    return;
		                }
		                else {
		                    // Remember the cancel but still queue the message to
		                    // clean up state in process message.
		                    knownCanceledRequests.add(cancelId);
		                }
		            }
		            addMessageToQueue(messageQueue, message);
		        }
		        finally {
		            triggerMessageQueue();
		        }
		    };
		    function handleRequest(requestMessage) {
		        if (isDisposed()) {
		            // we return here silently since we fired an event when the
		            // connection got disposed.
		            return;
		        }
		        function reply(resultOrError, method, startTime) {
		            const message = {
		                jsonrpc: version,
		                id: requestMessage.id
		            };
		            if (resultOrError instanceof messages_1.ResponseError) {
		                message.error = resultOrError.toJson();
		            }
		            else {
		                message.result = resultOrError === undefined ? null : resultOrError;
		            }
		            traceSendingResponse(message, method, startTime);
		            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
		        }
		        function replyError(error, method, startTime) {
		            const message = {
		                jsonrpc: version,
		                id: requestMessage.id,
		                error: error.toJson()
		            };
		            traceSendingResponse(message, method, startTime);
		            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
		        }
		        function replySuccess(result, method, startTime) {
		            // The JSON RPC defines that a response must either have a result or an error
		            // So we can't treat undefined as a valid response result.
		            if (result === undefined) {
		                result = null;
		            }
		            const message = {
		                jsonrpc: version,
		                id: requestMessage.id,
		                result: result
		            };
		            traceSendingResponse(message, method, startTime);
		            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
		        }
		        traceReceivedRequest(requestMessage);
		        const element = requestHandlers.get(requestMessage.method);
		        let type;
		        let requestHandler;
		        if (element) {
		            type = element.type;
		            requestHandler = element.handler;
		        }
		        const startTime = Date.now();
		        if (requestHandler || starRequestHandler) {
		            const tokenKey = requestMessage.id ?? String(Date.now()); //
		            const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver)
		                ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey)
		                : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
		            if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
		                cancellationSource.cancel();
		            }
		            if (requestMessage.id !== null) {
		                requestTokens.set(tokenKey, cancellationSource);
		            }
		            try {
		                let handlerResult;
		                if (requestHandler) {
		                    if (requestMessage.params === undefined) {
		                        if (type !== undefined && type.numberOfParams !== 0) {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
		                            return;
		                        }
		                        handlerResult = requestHandler(cancellationSource.token);
		                    }
		                    else if (Array.isArray(requestMessage.params)) {
		                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byName) {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
		                            return;
		                        }
		                        handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
		                    }
		                    else {
		                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
		                            return;
		                        }
		                        handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
		                    }
		                }
		                else if (starRequestHandler) {
		                    handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
		                }
		                const promise = handlerResult;
		                if (!handlerResult) {
		                    requestTokens.delete(tokenKey);
		                    replySuccess(handlerResult, requestMessage.method, startTime);
		                }
		                else if (promise.then) {
		                    promise.then((resultOrError) => {
		                        requestTokens.delete(tokenKey);
		                        reply(resultOrError, requestMessage.method, startTime);
		                    }, error => {
		                        requestTokens.delete(tokenKey);
		                        if (error instanceof messages_1.ResponseError) {
		                            replyError(error, requestMessage.method, startTime);
		                        }
		                        else if (error && Is.string(error.message)) {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
		                        }
		                        else {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
		                        }
		                    });
		                }
		                else {
		                    requestTokens.delete(tokenKey);
		                    reply(handlerResult, requestMessage.method, startTime);
		                }
		            }
		            catch (error) {
		                requestTokens.delete(tokenKey);
		                if (error instanceof messages_1.ResponseError) {
		                    reply(error, requestMessage.method, startTime);
		                }
		                else if (error && Is.string(error.message)) {
		                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
		                }
		                else {
		                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
		                }
		            }
		        }
		        else {
		            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
		        }
		    }
		    function handleResponse(responseMessage) {
		        if (isDisposed()) {
		            // See handle request.
		            return;
		        }
		        if (responseMessage.id === null) {
		            if (responseMessage.error) {
		                logger.error(`Received response message without id: Error is: \n${JSON.stringify(responseMessage.error, undefined, 4)}`);
		            }
		            else {
		                logger.error(`Received response message without id. No further error information provided.`);
		            }
		        }
		        else {
		            const key = responseMessage.id;
		            const responsePromise = responsePromises.get(key);
		            traceReceivedResponse(responseMessage, responsePromise);
		            if (responsePromise !== undefined) {
		                responsePromises.delete(key);
		                try {
		                    if (responseMessage.error) {
		                        const error = responseMessage.error;
		                        responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
		                    }
		                    else if (responseMessage.result !== undefined) {
		                        responsePromise.resolve(responseMessage.result);
		                    }
		                    else {
		                        throw new Error('Should never happen.');
		                    }
		                }
		                catch (error) {
		                    if (error.message) {
		                        logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
		                    }
		                    else {
		                        logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
		                    }
		                }
		            }
		        }
		    }
		    function handleNotification(message) {
		        if (isDisposed()) {
		            // See handle request.
		            return;
		        }
		        let type = undefined;
		        let notificationHandler;
		        if (message.method === CancelNotification.type.method) {
		            const cancelId = message.params.id;
		            knownCanceledRequests.delete(cancelId);
		            traceReceivedNotification(message);
		            return;
		        }
		        else {
		            const element = notificationHandlers.get(message.method);
		            if (element) {
		                notificationHandler = element.handler;
		                type = element.type;
		            }
		        }
		        if (notificationHandler || starNotificationHandler) {
		            try {
		                traceReceivedNotification(message);
		                if (notificationHandler) {
		                    if (message.params === undefined) {
		                        if (type !== undefined) {
		                            if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
		                                logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
		                            }
		                        }
		                        notificationHandler();
		                    }
		                    else if (Array.isArray(message.params)) {
		                        // There are JSON-RPC libraries that send progress message as positional params although
		                        // specified as named. So convert them if this is the case.
		                        const params = message.params;
		                        if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
		                            notificationHandler({ token: params[0], value: params[1] });
		                        }
		                        else {
		                            if (type !== undefined) {
		                                if (type.parameterStructures === messages_1.ParameterStructures.byName) {
		                                    logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
		                                }
		                                if (type.numberOfParams !== message.params.length) {
		                                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
		                                }
		                            }
		                            notificationHandler(...params);
		                        }
		                    }
		                    else {
		                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
		                            logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
		                        }
		                        notificationHandler(message.params);
		                    }
		                }
		                else if (starNotificationHandler) {
		                    starNotificationHandler(message.method, message.params);
		                }
		            }
		            catch (error) {
		                if (error.message) {
		                    logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
		                }
		                else {
		                    logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
		                }
		            }
		        }
		        else {
		            unhandledNotificationEmitter.fire(message);
		        }
		    }
		    function handleInvalidMessage(message) {
		        if (!message) {
		            logger.error('Received empty message.');
		            return;
		        }
		        logger.error(`Received message which is neither a response nor a notification message:\n${JSON.stringify(message, null, 4)}`);
		        // Test whether we find an id to reject the promise
		        const responseMessage = message;
		        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
		            const key = responseMessage.id;
		            const responseHandler = responsePromises.get(key);
		            if (responseHandler) {
		                responseHandler.reject(new Error('The received response has neither a result nor an error property.'));
		            }
		        }
		    }
		    function stringifyTrace(params) {
		        if (params === undefined || params === null) {
		            return undefined;
		        }
		        switch (trace) {
		            case Trace.Verbose:
		                return JSON.stringify(params, null, 4);
		            case Trace.Compact:
		                return JSON.stringify(params);
		            default:
		                return undefined;
		        }
		    }
		    function traceSendingRequest(message) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
		                data = `Params: ${stringifyTrace(message.params)}\n\n`;
		            }
		            tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
		        }
		        else {
		            logLSPMessage('send-request', message);
		        }
		    }
		    function traceSendingNotification(message) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if (trace === Trace.Verbose || trace === Trace.Compact) {
		                if (message.params) {
		                    data = `Params: ${stringifyTrace(message.params)}\n\n`;
		                }
		                else {
		                    data = 'No parameters provided.\n\n';
		                }
		            }
		            tracer.log(`Sending notification '${message.method}'.`, data);
		        }
		        else {
		            logLSPMessage('send-notification', message);
		        }
		    }
		    function traceSendingResponse(message, method, startTime) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if (trace === Trace.Verbose || trace === Trace.Compact) {
		                if (message.error && message.error.data) {
		                    data = `Error data: ${stringifyTrace(message.error.data)}\n\n`;
		                }
		                else {
		                    if (message.result) {
		                        data = `Result: ${stringifyTrace(message.result)}\n\n`;
		                    }
		                    else if (message.error === undefined) {
		                        data = 'No result returned.\n\n';
		                    }
		                }
		            }
		            tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
		        }
		        else {
		            logLSPMessage('send-response', message);
		        }
		    }
		    function traceReceivedRequest(message) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
		                data = `Params: ${stringifyTrace(message.params)}\n\n`;
		            }
		            tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
		        }
		        else {
		            logLSPMessage('receive-request', message);
		        }
		    }
		    function traceReceivedNotification(message) {
		        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if (trace === Trace.Verbose || trace === Trace.Compact) {
		                if (message.params) {
		                    data = `Params: ${stringifyTrace(message.params)}\n\n`;
		                }
		                else {
		                    data = 'No parameters provided.\n\n';
		                }
		            }
		            tracer.log(`Received notification '${message.method}'.`, data);
		        }
		        else {
		            logLSPMessage('receive-notification', message);
		        }
		    }
		    function traceReceivedResponse(message, responsePromise) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if (trace === Trace.Verbose || trace === Trace.Compact) {
		                if (message.error && message.error.data) {
		                    data = `Error data: ${stringifyTrace(message.error.data)}\n\n`;
		                }
		                else {
		                    if (message.result) {
		                        data = `Result: ${stringifyTrace(message.result)}\n\n`;
		                    }
		                    else if (message.error === undefined) {
		                        data = 'No result returned.\n\n';
		                    }
		                }
		            }
		            if (responsePromise) {
		                const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : '';
		                tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
		            }
		            else {
		                tracer.log(`Received response ${message.id} without active response promise.`, data);
		            }
		        }
		        else {
		            logLSPMessage('receive-response', message);
		        }
		    }
		    function logLSPMessage(type, message) {
		        if (!tracer || trace === Trace.Off) {
		            return;
		        }
		        const lspMessage = {
		            isLSPMessage: true,
		            type,
		            message,
		            timestamp: Date.now()
		        };
		        tracer.log(lspMessage);
		    }
		    function throwIfClosedOrDisposed() {
		        if (isClosed()) {
		            throw new ConnectionError(ConnectionErrors.Closed, 'Connection is closed.');
		        }
		        if (isDisposed()) {
		            throw new ConnectionError(ConnectionErrors.Disposed, 'Connection is disposed.');
		        }
		    }
		    function throwIfListening() {
		        if (isListening()) {
		            throw new ConnectionError(ConnectionErrors.AlreadyListening, 'Connection is already listening');
		        }
		    }
		    function throwIfNotListening() {
		        if (!isListening()) {
		            throw new Error('Call listen() first.');
		        }
		    }
		    function undefinedToNull(param) {
		        if (param === undefined) {
		            return null;
		        }
		        else {
		            return param;
		        }
		    }
		    function nullToUndefined(param) {
		        if (param === null) {
		            return undefined;
		        }
		        else {
		            return param;
		        }
		    }
		    function isNamedParam(param) {
		        return param !== undefined && param !== null && !Array.isArray(param) && typeof param === 'object';
		    }
		    function computeSingleParam(parameterStructures, param) {
		        switch (parameterStructures) {
		            case messages_1.ParameterStructures.auto:
		                if (isNamedParam(param)) {
		                    return nullToUndefined(param);
		                }
		                else {
		                    return [undefinedToNull(param)];
		                }
		            case messages_1.ParameterStructures.byName:
		                if (!isNamedParam(param)) {
		                    throw new Error(`Received parameters by name but param is not an object literal.`);
		                }
		                return nullToUndefined(param);
		            case messages_1.ParameterStructures.byPosition:
		                return [undefinedToNull(param)];
		            default:
		                throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
		        }
		    }
		    function computeMessageParams(type, params) {
		        let result;
		        const numberOfParams = type.numberOfParams;
		        switch (numberOfParams) {
		            case 0:
		                result = undefined;
		                break;
		            case 1:
		                result = computeSingleParam(type.parameterStructures, params[0]);
		                break;
		            default:
		                result = [];
		                for (let i = 0; i < params.length && i < numberOfParams; i++) {
		                    result.push(undefinedToNull(params[i]));
		                }
		                if (params.length < numberOfParams) {
		                    for (let i = params.length; i < numberOfParams; i++) {
		                        result.push(null);
		                    }
		                }
		                break;
		        }
		        return result;
		    }
		    const connection = {
		        sendNotification: (type, ...args) => {
		            throwIfClosedOrDisposed();
		            let method;
		            let messageParams;
		            if (Is.string(type)) {
		                method = type;
		                const first = args[0];
		                let paramStart = 0;
		                let parameterStructures = messages_1.ParameterStructures.auto;
		                if (messages_1.ParameterStructures.is(first)) {
		                    paramStart = 1;
		                    parameterStructures = first;
		                }
		                let paramEnd = args.length;
		                const numberOfParams = paramEnd - paramStart;
		                switch (numberOfParams) {
		                    case 0:
		                        messageParams = undefined;
		                        break;
		                    case 1:
		                        messageParams = computeSingleParam(parameterStructures, args[paramStart]);
		                        break;
		                    default:
		                        if (parameterStructures === messages_1.ParameterStructures.byName) {
		                            throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
		                        }
		                        messageParams = args.slice(paramStart, paramEnd).map(value => undefinedToNull(value));
		                        break;
		                }
		            }
		            else {
		                const params = args;
		                method = type.method;
		                messageParams = computeMessageParams(type, params);
		            }
		            const notificationMessage = {
		                jsonrpc: version,
		                method: method,
		                params: messageParams
		            };
		            traceSendingNotification(notificationMessage);
		            return messageWriter.write(notificationMessage).catch((error) => {
		                logger.error(`Sending notification failed.`);
		                throw error;
		            });
		        },
		        onNotification: (type, handler) => {
		            throwIfClosedOrDisposed();
		            let method;
		            if (Is.func(type)) {
		                starNotificationHandler = type;
		            }
		            else if (handler) {
		                if (Is.string(type)) {
		                    method = type;
		                    notificationHandlers.set(type, { type: undefined, handler });
		                }
		                else {
		                    method = type.method;
		                    notificationHandlers.set(type.method, { type, handler });
		                }
		            }
		            return {
		                dispose: () => {
		                    if (method !== undefined) {
		                        notificationHandlers.delete(method);
		                    }
		                    else {
		                        starNotificationHandler = undefined;
		                    }
		                }
		            };
		        },
		        onProgress: (_type, token, handler) => {
		            if (progressHandlers.has(token)) {
		                throw new Error(`Progress handler for token ${token} already registered`);
		            }
		            progressHandlers.set(token, handler);
		            return {
		                dispose: () => {
		                    progressHandlers.delete(token);
		                }
		            };
		        },
		        sendProgress: (_type, token, value) => {
		            // This should not await but simple return to ensure that we don't have another
		            // async scheduling. Otherwise one send could overtake another send.
		            return connection.sendNotification(ProgressNotification.type, { token, value });
		        },
		        onUnhandledProgress: unhandledProgressEmitter.event,
		        sendRequest: (type, ...args) => {
		            throwIfClosedOrDisposed();
		            throwIfNotListening();
		            let method;
		            let messageParams;
		            let token = undefined;
		            if (Is.string(type)) {
		                method = type;
		                const first = args[0];
		                const last = args[args.length - 1];
		                let paramStart = 0;
		                let parameterStructures = messages_1.ParameterStructures.auto;
		                if (messages_1.ParameterStructures.is(first)) {
		                    paramStart = 1;
		                    parameterStructures = first;
		                }
		                let paramEnd = args.length;
		                if (cancellation_1.CancellationToken.is(last)) {
		                    paramEnd = paramEnd - 1;
		                    token = last;
		                }
		                const numberOfParams = paramEnd - paramStart;
		                switch (numberOfParams) {
		                    case 0:
		                        messageParams = undefined;
		                        break;
		                    case 1:
		                        messageParams = computeSingleParam(parameterStructures, args[paramStart]);
		                        break;
		                    default:
		                        if (parameterStructures === messages_1.ParameterStructures.byName) {
		                            throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
		                        }
		                        messageParams = args.slice(paramStart, paramEnd).map(value => undefinedToNull(value));
		                        break;
		                }
		            }
		            else {
		                const params = args;
		                method = type.method;
		                messageParams = computeMessageParams(type, params);
		                const numberOfParams = type.numberOfParams;
		                token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : undefined;
		            }
		            const id = sequenceNumber++;
		            let disposable;
		            if (token) {
		                disposable = token.onCancellationRequested(() => {
		                    const p = cancellationStrategy.sender.sendCancellation(connection, id);
		                    if (p === undefined) {
		                        logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
		                        return Promise.resolve();
		                    }
		                    else {
		                        return p.catch(() => {
		                            logger.log(`Sending cancellation messages for id ${id} failed`);
		                        });
		                    }
		                });
		            }
		            const requestMessage = {
		                jsonrpc: version,
		                id: id,
		                method: method,
		                params: messageParams
		            };
		            traceSendingRequest(requestMessage);
		            if (typeof cancellationStrategy.sender.enableCancellation === 'function') {
		                cancellationStrategy.sender.enableCancellation(requestMessage);
		            }
		            return new Promise(async (resolve, reject) => {
		                const resolveWithCleanup = (r) => {
		                    resolve(r);
		                    cancellationStrategy.sender.cleanup(id);
		                    disposable?.dispose();
		                };
		                const rejectWithCleanup = (r) => {
		                    reject(r);
		                    cancellationStrategy.sender.cleanup(id);
		                    disposable?.dispose();
		                };
		                const responsePromise = { method: method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
		                try {
		                    await messageWriter.write(requestMessage);
		                    responsePromises.set(id, responsePromise);
		                }
		                catch (error) {
		                    logger.error(`Sending request failed.`);
		                    // Writing the message failed. So we need to reject the promise.
		                    responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : 'Unknown reason'));
		                    throw error;
		                }
		            });
		        },
		        onRequest: (type, handler) => {
		            throwIfClosedOrDisposed();
		            let method = null;
		            if (StarRequestHandler.is(type)) {
		                method = undefined;
		                starRequestHandler = type;
		            }
		            else if (Is.string(type)) {
		                method = null;
		                if (handler !== undefined) {
		                    method = type;
		                    requestHandlers.set(type, { handler: handler, type: undefined });
		                }
		            }
		            else {
		                if (handler !== undefined) {
		                    method = type.method;
		                    requestHandlers.set(type.method, { type, handler });
		                }
		            }
		            return {
		                dispose: () => {
		                    if (method === null) {
		                        return;
		                    }
		                    if (method !== undefined) {
		                        requestHandlers.delete(method);
		                    }
		                    else {
		                        starRequestHandler = undefined;
		                    }
		                }
		            };
		        },
		        hasPendingResponse: () => {
		            return responsePromises.size > 0;
		        },
		        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
		            let _sendNotification = false;
		            let _traceFormat = TraceFormat.Text;
		            if (sendNotificationOrTraceOptions !== undefined) {
		                if (Is.boolean(sendNotificationOrTraceOptions)) {
		                    _sendNotification = sendNotificationOrTraceOptions;
		                }
		                else {
		                    _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
		                    _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
		                }
		            }
		            trace = _value;
		            traceFormat = _traceFormat;
		            if (trace === Trace.Off) {
		                tracer = undefined;
		            }
		            else {
		                tracer = _tracer;
		            }
		            if (_sendNotification && !isClosed() && !isDisposed()) {
		                await connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
		            }
		        },
		        onError: errorEmitter.event,
		        onClose: closeEmitter.event,
		        onUnhandledNotification: unhandledNotificationEmitter.event,
		        onDispose: disposeEmitter.event,
		        end: () => {
		            messageWriter.end();
		        },
		        dispose: () => {
		            if (isDisposed()) {
		                return;
		            }
		            state = ConnectionState.Disposed;
		            disposeEmitter.fire(undefined);
		            const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, 'Pending response rejected since connection got disposed');
		            for (const promise of responsePromises.values()) {
		                promise.reject(error);
		            }
		            responsePromises = new Map();
		            requestTokens = new Map();
		            knownCanceledRequests = new Set();
		            messageQueue = new linkedMap_1.LinkedMap();
		            // Test for backwards compatibility
		            if (Is.func(messageWriter.dispose)) {
		                messageWriter.dispose();
		            }
		            if (Is.func(messageReader.dispose)) {
		                messageReader.dispose();
		            }
		        },
		        listen: () => {
		            throwIfClosedOrDisposed();
		            throwIfListening();
		            state = ConnectionState.Listening;
		            messageReader.listen(callback);
		        },
		        inspect: () => {
		            // eslint-disable-next-line no-console
		            (0, ral_1.default)().console.log('inspect');
		        }
		    };
		    connection.onNotification(LogTraceNotification.type, (params) => {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
		        tracer.log(params.message, verbose ? params.verbose : undefined);
		    });
		    connection.onNotification(ProgressNotification.type, (params) => {
		        const handler = progressHandlers.get(params.token);
		        if (handler) {
		            handler(params.value);
		        }
		        else {
		            unhandledProgressEmitter.fire(params);
		        }
		    });
		    return connection;
		}
		exports.createMessageConnection = createMessageConnection; 
	} (connection$2));
	return connection$2;
}

var hasRequiredApi;

function requireApi () {
	if (hasRequiredApi) return api$2;
	hasRequiredApi = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		/// <reference path="../../typings/thenable.d.ts" />
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.ProgressType = exports.ProgressToken = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.AbstractMessageBuffer = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.LRUCache = exports.Touch = exports.LinkedMap = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.Message = exports.RAL = void 0;
		exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = void 0;
		const messages_1 = requireMessages();
		Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return messages_1.Message; } });
		Object.defineProperty(exports, "RequestType", { enumerable: true, get: function () { return messages_1.RequestType; } });
		Object.defineProperty(exports, "RequestType0", { enumerable: true, get: function () { return messages_1.RequestType0; } });
		Object.defineProperty(exports, "RequestType1", { enumerable: true, get: function () { return messages_1.RequestType1; } });
		Object.defineProperty(exports, "RequestType2", { enumerable: true, get: function () { return messages_1.RequestType2; } });
		Object.defineProperty(exports, "RequestType3", { enumerable: true, get: function () { return messages_1.RequestType3; } });
		Object.defineProperty(exports, "RequestType4", { enumerable: true, get: function () { return messages_1.RequestType4; } });
		Object.defineProperty(exports, "RequestType5", { enumerable: true, get: function () { return messages_1.RequestType5; } });
		Object.defineProperty(exports, "RequestType6", { enumerable: true, get: function () { return messages_1.RequestType6; } });
		Object.defineProperty(exports, "RequestType7", { enumerable: true, get: function () { return messages_1.RequestType7; } });
		Object.defineProperty(exports, "RequestType8", { enumerable: true, get: function () { return messages_1.RequestType8; } });
		Object.defineProperty(exports, "RequestType9", { enumerable: true, get: function () { return messages_1.RequestType9; } });
		Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return messages_1.ResponseError; } });
		Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function () { return messages_1.ErrorCodes; } });
		Object.defineProperty(exports, "NotificationType", { enumerable: true, get: function () { return messages_1.NotificationType; } });
		Object.defineProperty(exports, "NotificationType0", { enumerable: true, get: function () { return messages_1.NotificationType0; } });
		Object.defineProperty(exports, "NotificationType1", { enumerable: true, get: function () { return messages_1.NotificationType1; } });
		Object.defineProperty(exports, "NotificationType2", { enumerable: true, get: function () { return messages_1.NotificationType2; } });
		Object.defineProperty(exports, "NotificationType3", { enumerable: true, get: function () { return messages_1.NotificationType3; } });
		Object.defineProperty(exports, "NotificationType4", { enumerable: true, get: function () { return messages_1.NotificationType4; } });
		Object.defineProperty(exports, "NotificationType5", { enumerable: true, get: function () { return messages_1.NotificationType5; } });
		Object.defineProperty(exports, "NotificationType6", { enumerable: true, get: function () { return messages_1.NotificationType6; } });
		Object.defineProperty(exports, "NotificationType7", { enumerable: true, get: function () { return messages_1.NotificationType7; } });
		Object.defineProperty(exports, "NotificationType8", { enumerable: true, get: function () { return messages_1.NotificationType8; } });
		Object.defineProperty(exports, "NotificationType9", { enumerable: true, get: function () { return messages_1.NotificationType9; } });
		Object.defineProperty(exports, "ParameterStructures", { enumerable: true, get: function () { return messages_1.ParameterStructures; } });
		const linkedMap_1 = requireLinkedMap();
		Object.defineProperty(exports, "LinkedMap", { enumerable: true, get: function () { return linkedMap_1.LinkedMap; } });
		Object.defineProperty(exports, "LRUCache", { enumerable: true, get: function () { return linkedMap_1.LRUCache; } });
		Object.defineProperty(exports, "Touch", { enumerable: true, get: function () { return linkedMap_1.Touch; } });
		const disposable_1 = requireDisposable();
		Object.defineProperty(exports, "Disposable", { enumerable: true, get: function () { return disposable_1.Disposable; } });
		const events_1 = requireEvents();
		Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return events_1.Event; } });
		Object.defineProperty(exports, "Emitter", { enumerable: true, get: function () { return events_1.Emitter; } });
		const cancellation_1 = requireCancellation();
		Object.defineProperty(exports, "CancellationTokenSource", { enumerable: true, get: function () { return cancellation_1.CancellationTokenSource; } });
		Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function () { return cancellation_1.CancellationToken; } });
		const sharedArrayCancellation_1 = requireSharedArrayCancellation();
		Object.defineProperty(exports, "SharedArraySenderStrategy", { enumerable: true, get: function () { return sharedArrayCancellation_1.SharedArraySenderStrategy; } });
		Object.defineProperty(exports, "SharedArrayReceiverStrategy", { enumerable: true, get: function () { return sharedArrayCancellation_1.SharedArrayReceiverStrategy; } });
		const messageReader_1 = requireMessageReader();
		Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function () { return messageReader_1.MessageReader; } });
		Object.defineProperty(exports, "AbstractMessageReader", { enumerable: true, get: function () { return messageReader_1.AbstractMessageReader; } });
		Object.defineProperty(exports, "ReadableStreamMessageReader", { enumerable: true, get: function () { return messageReader_1.ReadableStreamMessageReader; } });
		const messageWriter_1 = requireMessageWriter();
		Object.defineProperty(exports, "MessageWriter", { enumerable: true, get: function () { return messageWriter_1.MessageWriter; } });
		Object.defineProperty(exports, "AbstractMessageWriter", { enumerable: true, get: function () { return messageWriter_1.AbstractMessageWriter; } });
		Object.defineProperty(exports, "WriteableStreamMessageWriter", { enumerable: true, get: function () { return messageWriter_1.WriteableStreamMessageWriter; } });
		const messageBuffer_1 = requireMessageBuffer();
		Object.defineProperty(exports, "AbstractMessageBuffer", { enumerable: true, get: function () { return messageBuffer_1.AbstractMessageBuffer; } });
		const connection_1 = requireConnection();
		Object.defineProperty(exports, "ConnectionStrategy", { enumerable: true, get: function () { return connection_1.ConnectionStrategy; } });
		Object.defineProperty(exports, "ConnectionOptions", { enumerable: true, get: function () { return connection_1.ConnectionOptions; } });
		Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function () { return connection_1.NullLogger; } });
		Object.defineProperty(exports, "createMessageConnection", { enumerable: true, get: function () { return connection_1.createMessageConnection; } });
		Object.defineProperty(exports, "ProgressToken", { enumerable: true, get: function () { return connection_1.ProgressToken; } });
		Object.defineProperty(exports, "ProgressType", { enumerable: true, get: function () { return connection_1.ProgressType; } });
		Object.defineProperty(exports, "Trace", { enumerable: true, get: function () { return connection_1.Trace; } });
		Object.defineProperty(exports, "TraceValues", { enumerable: true, get: function () { return connection_1.TraceValues; } });
		Object.defineProperty(exports, "TraceFormat", { enumerable: true, get: function () { return connection_1.TraceFormat; } });
		Object.defineProperty(exports, "SetTraceNotification", { enumerable: true, get: function () { return connection_1.SetTraceNotification; } });
		Object.defineProperty(exports, "LogTraceNotification", { enumerable: true, get: function () { return connection_1.LogTraceNotification; } });
		Object.defineProperty(exports, "ConnectionErrors", { enumerable: true, get: function () { return connection_1.ConnectionErrors; } });
		Object.defineProperty(exports, "ConnectionError", { enumerable: true, get: function () { return connection_1.ConnectionError; } });
		Object.defineProperty(exports, "CancellationReceiverStrategy", { enumerable: true, get: function () { return connection_1.CancellationReceiverStrategy; } });
		Object.defineProperty(exports, "CancellationSenderStrategy", { enumerable: true, get: function () { return connection_1.CancellationSenderStrategy; } });
		Object.defineProperty(exports, "CancellationStrategy", { enumerable: true, get: function () { return connection_1.CancellationStrategy; } });
		Object.defineProperty(exports, "MessageStrategy", { enumerable: true, get: function () { return connection_1.MessageStrategy; } });
		const ral_1 = requireRal();
		exports.RAL = ral_1.default; 
	} (api$2));
	return api$2;
}

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(ril, "__esModule", { value: true });
const util_1 = require$$0;
const api_1 = requireApi();
class MessageBuffer extends api_1.AbstractMessageBuffer {
    constructor(encoding = 'utf-8') {
        super(encoding);
    }
    emptyBuffer() {
        return MessageBuffer.emptyBuffer;
    }
    fromString(value, encoding) {
        return Buffer.from(value, encoding);
    }
    toString(value, encoding) {
        if (value instanceof Buffer) {
            return value.toString(encoding);
        }
        else {
            return new util_1.TextDecoder(encoding).decode(value);
        }
    }
    asNative(buffer, length) {
        if (length === undefined) {
            return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        }
        else {
            return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
    }
    allocNative(length) {
        return Buffer.allocUnsafe(length);
    }
}
MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
class ReadableStreamWrapper {
    constructor(stream) {
        this.stream = stream;
    }
    onClose(listener) {
        this.stream.on('close', listener);
        return api_1.Disposable.create(() => this.stream.off('close', listener));
    }
    onError(listener) {
        this.stream.on('error', listener);
        return api_1.Disposable.create(() => this.stream.off('error', listener));
    }
    onEnd(listener) {
        this.stream.on('end', listener);
        return api_1.Disposable.create(() => this.stream.off('end', listener));
    }
    onData(listener) {
        this.stream.on('data', listener);
        return api_1.Disposable.create(() => this.stream.off('data', listener));
    }
}
class WritableStreamWrapper {
    constructor(stream) {
        this.stream = stream;
    }
    onClose(listener) {
        this.stream.on('close', listener);
        return api_1.Disposable.create(() => this.stream.off('close', listener));
    }
    onError(listener) {
        this.stream.on('error', listener);
        return api_1.Disposable.create(() => this.stream.off('error', listener));
    }
    onEnd(listener) {
        this.stream.on('end', listener);
        return api_1.Disposable.create(() => this.stream.off('end', listener));
    }
    write(data, encoding) {
        return new Promise((resolve, reject) => {
            const callback = (error) => {
                if (error === undefined || error === null) {
                    resolve();
                }
                else {
                    reject(error);
                }
            };
            if (typeof data === 'string') {
                this.stream.write(data, encoding, callback);
            }
            else {
                this.stream.write(data, callback);
            }
        });
    }
    end() {
        this.stream.end();
    }
}
const _ril = Object.freeze({
    messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
    }),
    applicationJson: Object.freeze({
        encoder: Object.freeze({
            name: 'application/json',
            encode: (msg, options) => {
                try {
                    return Promise.resolve(Buffer.from(JSON.stringify(msg, undefined, 0), options.charset));
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
        }),
        decoder: Object.freeze({
            name: 'application/json',
            decode: (buffer, options) => {
                try {
                    if (buffer instanceof Buffer) {
                        return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
                    }
                    else {
                        return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
                    }
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
        })
    }),
    stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
    }),
    console: console,
    timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
            const handle = setTimeout(callback, ms, ...args);
            return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
            const handle = setImmediate(callback, ...args);
            return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
            const handle = setInterval(callback, ms, ...args);
            return { dispose: () => clearInterval(handle) };
        }
    })
});
function RIL() {
    return _ril;
}
(function (RIL) {
    function install() {
        api_1.RAL.install(_ril);
    }
    RIL.install = install;
})(RIL || (RIL = {}));
ril.default = RIL;

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createMessageConnection = exports.createServerSocketTransport = exports.createClientSocketTransport = exports.createServerPipeTransport = exports.createClientPipeTransport = exports.generateRandomPipeName = exports.StreamMessageWriter = exports.StreamMessageReader = exports.SocketMessageWriter = exports.SocketMessageReader = exports.PortMessageWriter = exports.PortMessageReader = exports.IPCMessageWriter = exports.IPCMessageReader = void 0;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ----------------------------------------------------------------------------------------- */
	const ril_1 = ril;
	// Install the node runtime abstract.
	ril_1.default.install();
	const path = require$$1$1;
	const os = require$$2;
	const crypto_1 = require$$3;
	const net_1 = require$$4;
	const api_1 = requireApi();
	__exportStar(requireApi(), exports);
	class IPCMessageReader extends api_1.AbstractMessageReader {
	    constructor(process) {
	        super();
	        this.process = process;
	        let eventEmitter = this.process;
	        eventEmitter.on('error', (error) => this.fireError(error));
	        eventEmitter.on('close', () => this.fireClose());
	    }
	    listen(callback) {
	        this.process.on('message', callback);
	        return api_1.Disposable.create(() => this.process.off('message', callback));
	    }
	}
	exports.IPCMessageReader = IPCMessageReader;
	class IPCMessageWriter extends api_1.AbstractMessageWriter {
	    constructor(process) {
	        super();
	        this.process = process;
	        this.errorCount = 0;
	        const eventEmitter = this.process;
	        eventEmitter.on('error', (error) => this.fireError(error));
	        eventEmitter.on('close', () => this.fireClose);
	    }
	    write(msg) {
	        try {
	            if (typeof this.process.send === 'function') {
	                this.process.send(msg, undefined, undefined, (error) => {
	                    if (error) {
	                        this.errorCount++;
	                        this.handleError(error, msg);
	                    }
	                    else {
	                        this.errorCount = 0;
	                    }
	                });
	            }
	            return Promise.resolve();
	        }
	        catch (error) {
	            this.handleError(error, msg);
	            return Promise.reject(error);
	        }
	    }
	    handleError(error, msg) {
	        this.errorCount++;
	        this.fireError(error, msg, this.errorCount);
	    }
	    end() {
	    }
	}
	exports.IPCMessageWriter = IPCMessageWriter;
	class PortMessageReader extends api_1.AbstractMessageReader {
	    constructor(port) {
	        super();
	        this.onData = new api_1.Emitter;
	        port.on('close', () => this.fireClose);
	        port.on('error', (error) => this.fireError(error));
	        port.on('message', (message) => {
	            this.onData.fire(message);
	        });
	    }
	    listen(callback) {
	        return this.onData.event(callback);
	    }
	}
	exports.PortMessageReader = PortMessageReader;
	class PortMessageWriter extends api_1.AbstractMessageWriter {
	    constructor(port) {
	        super();
	        this.port = port;
	        this.errorCount = 0;
	        port.on('close', () => this.fireClose());
	        port.on('error', (error) => this.fireError(error));
	    }
	    write(msg) {
	        try {
	            this.port.postMessage(msg);
	            return Promise.resolve();
	        }
	        catch (error) {
	            this.handleError(error, msg);
	            return Promise.reject(error);
	        }
	    }
	    handleError(error, msg) {
	        this.errorCount++;
	        this.fireError(error, msg, this.errorCount);
	    }
	    end() {
	    }
	}
	exports.PortMessageWriter = PortMessageWriter;
	class SocketMessageReader extends api_1.ReadableStreamMessageReader {
	    constructor(socket, encoding = 'utf-8') {
	        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
	    }
	}
	exports.SocketMessageReader = SocketMessageReader;
	class SocketMessageWriter extends api_1.WriteableStreamMessageWriter {
	    constructor(socket, options) {
	        super((0, ril_1.default)().stream.asWritableStream(socket), options);
	        this.socket = socket;
	    }
	    dispose() {
	        super.dispose();
	        this.socket.destroy();
	    }
	}
	exports.SocketMessageWriter = SocketMessageWriter;
	class StreamMessageReader extends api_1.ReadableStreamMessageReader {
	    constructor(readable, encoding) {
	        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
	    }
	}
	exports.StreamMessageReader = StreamMessageReader;
	class StreamMessageWriter extends api_1.WriteableStreamMessageWriter {
	    constructor(writable, options) {
	        super((0, ril_1.default)().stream.asWritableStream(writable), options);
	    }
	}
	exports.StreamMessageWriter = StreamMessageWriter;
	const XDG_RUNTIME_DIR = process.env['XDG_RUNTIME_DIR'];
	const safeIpcPathLengths = new Map([
	    ['linux', 107],
	    ['darwin', 103]
	]);
	function generateRandomPipeName() {
	    const randomSuffix = (0, crypto_1.randomBytes)(21).toString('hex');
	    if (process.platform === 'win32') {
	        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
	    }
	    let result;
	    if (XDG_RUNTIME_DIR) {
	        result = path.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
	    }
	    else {
	        result = path.join(os.tmpdir(), `vscode-${randomSuffix}.sock`);
	    }
	    const limit = safeIpcPathLengths.get(process.platform);
	    if (limit !== undefined && result.length > limit) {
	        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
	    }
	    return result;
	}
	exports.generateRandomPipeName = generateRandomPipeName;
	function createClientPipeTransport(pipeName, encoding = 'utf-8') {
	    let connectResolve;
	    const connected = new Promise((resolve, _reject) => {
	        connectResolve = resolve;
	    });
	    return new Promise((resolve, reject) => {
	        let server = (0, net_1.createServer)((socket) => {
	            server.close();
	            connectResolve([
	                new SocketMessageReader(socket, encoding),
	                new SocketMessageWriter(socket, encoding)
	            ]);
	        });
	        server.on('error', reject);
	        server.listen(pipeName, () => {
	            server.removeListener('error', reject);
	            resolve({
	                onConnected: () => { return connected; }
	            });
	        });
	    });
	}
	exports.createClientPipeTransport = createClientPipeTransport;
	function createServerPipeTransport(pipeName, encoding = 'utf-8') {
	    const socket = (0, net_1.createConnection)(pipeName);
	    return [
	        new SocketMessageReader(socket, encoding),
	        new SocketMessageWriter(socket, encoding)
	    ];
	}
	exports.createServerPipeTransport = createServerPipeTransport;
	function createClientSocketTransport(port, encoding = 'utf-8') {
	    let connectResolve;
	    const connected = new Promise((resolve, _reject) => {
	        connectResolve = resolve;
	    });
	    return new Promise((resolve, reject) => {
	        const server = (0, net_1.createServer)((socket) => {
	            server.close();
	            connectResolve([
	                new SocketMessageReader(socket, encoding),
	                new SocketMessageWriter(socket, encoding)
	            ]);
	        });
	        server.on('error', reject);
	        server.listen(port, '127.0.0.1', () => {
	            server.removeListener('error', reject);
	            resolve({
	                onConnected: () => { return connected; }
	            });
	        });
	    });
	}
	exports.createClientSocketTransport = createClientSocketTransport;
	function createServerSocketTransport(port, encoding = 'utf-8') {
	    const socket = (0, net_1.createConnection)(port, '127.0.0.1');
	    return [
	        new SocketMessageReader(socket, encoding),
	        new SocketMessageWriter(socket, encoding)
	    ];
	}
	exports.createServerSocketTransport = createServerSocketTransport;
	function isReadableStream(value) {
	    const candidate = value;
	    return candidate.read !== undefined && candidate.addListener !== undefined;
	}
	function isWritableStream(value) {
	    const candidate = value;
	    return candidate.write !== undefined && candidate.addListener !== undefined;
	}
	function createMessageConnection(input, output, logger, options) {
	    if (!logger) {
	        logger = api_1.NullLogger;
	    }
	    const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
	    const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
	    if (api_1.ConnectionStrategy.is(options)) {
	        options = { connectionStrategy: options };
	    }
	    return (0, api_1.createMessageConnection)(reader, writer, logger, options);
	}
	exports.createMessageConnection = createMessageConnection; 
} (main$2));

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */

var node$2 = main$2;

var api$1 = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
var DocumentUri;
(function (DocumentUri) {
    function is(value) {
        return typeof value === 'string';
    }
    DocumentUri.is = is;
})(DocumentUri || (DocumentUri = {}));
var URI;
(function (URI) {
    function is(value) {
        return typeof value === 'string';
    }
    URI.is = is;
})(URI || (URI = {}));
var integer;
(function (integer) {
    integer.MIN_VALUE = -2147483648;
    integer.MAX_VALUE = 2147483647;
    function is(value) {
        return typeof value === 'number' && integer.MIN_VALUE <= value && value <= integer.MAX_VALUE;
    }
    integer.is = is;
})(integer || (integer = {}));
var uinteger;
(function (uinteger) {
    uinteger.MIN_VALUE = 0;
    uinteger.MAX_VALUE = 2147483647;
    function is(value) {
        return typeof value === 'number' && uinteger.MIN_VALUE <= value && value <= uinteger.MAX_VALUE;
    }
    uinteger.is = is;
})(uinteger || (uinteger = {}));
/**
 * The Position namespace provides helper functions to work with
 * {@link Position} literals.
 */
var Position;
(function (Position) {
    /**
     * Creates a new Position literal from the given line and character.
     * @param line The position's line.
     * @param character The position's character.
     */
    function create(line, character) {
        if (line === Number.MAX_VALUE) {
            line = uinteger.MAX_VALUE;
        }
        if (character === Number.MAX_VALUE) {
            character = uinteger.MAX_VALUE;
        }
        return { line: line, character: character };
    }
    Position.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Position} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Is$1.uinteger(candidate.line) && Is$1.uinteger(candidate.character);
    }
    Position.is = is;
})(Position || (Position = {}));
/**
 * The Range namespace provides helper functions to work with
 * {@link Range} literals.
 */
var Range;
(function (Range) {
    function create(one, two, three, four) {
        if (Is$1.uinteger(one) && Is$1.uinteger(two) && Is$1.uinteger(three) && Is$1.uinteger(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
        }
        else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
        }
        else {
            throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
        }
    }
    Range.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Range} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
    }
    Range.is = is;
})(Range || (Range = {}));
/**
 * The Location namespace provides helper functions to work with
 * {@link Location} literals.
 */
var Location;
(function (Location) {
    /**
     * Creates a Location literal.
     * @param uri The location's uri.
     * @param range The location's range.
     */
    function create(uri, range) {
        return { uri: uri, range: range };
    }
    Location.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Location} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Range.is(candidate.range) && (Is$1.string(candidate.uri) || Is$1.undefined(candidate.uri));
    }
    Location.is = is;
})(Location || (Location = {}));
/**
 * The LocationLink namespace provides helper functions to work with
 * {@link LocationLink} literals.
 */
var LocationLink;
(function (LocationLink) {
    /**
     * Creates a LocationLink literal.
     * @param targetUri The definition's uri.
     * @param targetRange The full range of the definition.
     * @param targetSelectionRange The span of the symbol definition at the target.
     * @param originSelectionRange The span of the symbol being defined in the originating source file.
     */
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
    }
    LocationLink.create = create;
    /**
     * Checks whether the given literal conforms to the {@link LocationLink} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is$1.string(candidate.targetUri)
            && Range.is(candidate.targetSelectionRange)
            && (Range.is(candidate.originSelectionRange) || Is$1.undefined(candidate.originSelectionRange));
    }
    LocationLink.is = is;
})(LocationLink || (LocationLink = {}));
/**
 * The Color namespace provides helper functions to work with
 * {@link Color} literals.
 */
var Color;
(function (Color) {
    /**
     * Creates a new Color literal.
     */
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha,
        };
    }
    Color.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Color} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Is$1.numberRange(candidate.red, 0, 1)
            && Is$1.numberRange(candidate.green, 0, 1)
            && Is$1.numberRange(candidate.blue, 0, 1)
            && Is$1.numberRange(candidate.alpha, 0, 1);
    }
    Color.is = is;
})(Color || (Color = {}));
/**
 * The ColorInformation namespace provides helper functions to work with
 * {@link ColorInformation} literals.
 */
var ColorInformation;
(function (ColorInformation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(range, color) {
        return {
            range: range,
            color: color,
        };
    }
    ColorInformation.create = create;
    /**
     * Checks whether the given literal conforms to the {@link ColorInformation} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
    }
    ColorInformation.is = is;
})(ColorInformation || (ColorInformation = {}));
/**
 * The Color namespace provides helper functions to work with
 * {@link ColorPresentation} literals.
 */
var ColorPresentation;
(function (ColorPresentation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits,
        };
    }
    ColorPresentation.create = create;
    /**
     * Checks whether the given literal conforms to the {@link ColorInformation} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Is$1.string(candidate.label)
            && (Is$1.undefined(candidate.textEdit) || TextEdit.is(candidate))
            && (Is$1.undefined(candidate.additionalTextEdits) || Is$1.typedArray(candidate.additionalTextEdits, TextEdit.is));
    }
    ColorPresentation.is = is;
})(ColorPresentation || (ColorPresentation = {}));
/**
 * A set of predefined range kinds.
 */
var FoldingRangeKind;
(function (FoldingRangeKind) {
    /**
     * Folding range for a comment
     */
    FoldingRangeKind.Comment = 'comment';
    /**
     * Folding range for an import or include
     */
    FoldingRangeKind.Imports = 'imports';
    /**
     * Folding range for a region (e.g. `#region`)
     */
    FoldingRangeKind.Region = 'region';
})(FoldingRangeKind || (FoldingRangeKind = {}));
/**
 * The folding range namespace provides helper functions to work with
 * {@link FoldingRange} literals.
 */
var FoldingRange;
(function (FoldingRange) {
    /**
     * Creates a new FoldingRange literal.
     */
    function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if (Is$1.defined(startCharacter)) {
            result.startCharacter = startCharacter;
        }
        if (Is$1.defined(endCharacter)) {
            result.endCharacter = endCharacter;
        }
        if (Is$1.defined(kind)) {
            result.kind = kind;
        }
        if (Is$1.defined(collapsedText)) {
            result.collapsedText = collapsedText;
        }
        return result;
    }
    FoldingRange.create = create;
    /**
     * Checks whether the given literal conforms to the {@link FoldingRange} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Is$1.uinteger(candidate.startLine) && Is$1.uinteger(candidate.startLine)
            && (Is$1.undefined(candidate.startCharacter) || Is$1.uinteger(candidate.startCharacter))
            && (Is$1.undefined(candidate.endCharacter) || Is$1.uinteger(candidate.endCharacter))
            && (Is$1.undefined(candidate.kind) || Is$1.string(candidate.kind));
    }
    FoldingRange.is = is;
})(FoldingRange || (FoldingRange = {}));
/**
 * The DiagnosticRelatedInformation namespace provides helper functions to work with
 * {@link DiagnosticRelatedInformation} literals.
 */
var DiagnosticRelatedInformation;
(function (DiagnosticRelatedInformation) {
    /**
     * Creates a new DiagnosticRelatedInformation literal.
     */
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation.create = create;
    /**
     * Checks whether the given literal conforms to the {@link DiagnosticRelatedInformation} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Location.is(candidate.location) && Is$1.string(candidate.message);
    }
    DiagnosticRelatedInformation.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
/**
 * The diagnostic's severity.
 */
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    /**
     * Reports an error.
     */
    DiagnosticSeverity.Error = 1;
    /**
     * Reports a warning.
     */
    DiagnosticSeverity.Warning = 2;
    /**
     * Reports an information.
     */
    DiagnosticSeverity.Information = 3;
    /**
     * Reports a hint.
     */
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
/**
 * The diagnostic tags.
 *
 * @since 3.15.0
 */
var DiagnosticTag;
(function (DiagnosticTag) {
    /**
     * Unused or unnecessary code.
     *
     * Clients are allowed to render diagnostics with this tag faded out instead of having
     * an error squiggle.
     */
    DiagnosticTag.Unnecessary = 1;
    /**
     * Deprecated or obsolete code.
     *
     * Clients are allowed to rendered diagnostics with this tag strike through.
     */
    DiagnosticTag.Deprecated = 2;
})(DiagnosticTag || (DiagnosticTag = {}));
/**
 * The CodeDescription namespace provides functions to deal with descriptions for diagnostic codes.
 *
 * @since 3.16.0
 */
var CodeDescription;
(function (CodeDescription) {
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Is$1.string(candidate.href);
    }
    CodeDescription.is = is;
})(CodeDescription || (CodeDescription = {}));
/**
 * The Diagnostic namespace provides helper functions to work with
 * {@link Diagnostic} literals.
 */
var Diagnostic;
(function (Diagnostic) {
    /**
     * Creates a new Diagnostic literal.
     */
    function create(range, message, severity, code, source, relatedInformation) {
        var result = { range: range, message: message };
        if (Is$1.defined(severity)) {
            result.severity = severity;
        }
        if (Is$1.defined(code)) {
            result.code = code;
        }
        if (Is$1.defined(source)) {
            result.source = source;
        }
        if (Is$1.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
        }
        return result;
    }
    Diagnostic.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Diagnostic} interface.
     */
    function is(value) {
        var _a;
        var candidate = value;
        return Is$1.defined(candidate)
            && Range.is(candidate.range)
            && Is$1.string(candidate.message)
            && (Is$1.number(candidate.severity) || Is$1.undefined(candidate.severity))
            && (Is$1.integer(candidate.code) || Is$1.string(candidate.code) || Is$1.undefined(candidate.code))
            && (Is$1.undefined(candidate.codeDescription) || (Is$1.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)))
            && (Is$1.string(candidate.source) || Is$1.undefined(candidate.source))
            && (Is$1.undefined(candidate.relatedInformation) || Is$1.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
    }
    Diagnostic.is = is;
})(Diagnostic || (Diagnostic = {}));
/**
 * The Command namespace provides helper functions to work with
 * {@link Command} literals.
 */
var Command;
(function (Command) {
    /**
     * Creates a new Command literal.
     */
    function create(title, command) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result = { title: title, command: command };
        if (Is$1.defined(args) && args.length > 0) {
            result.arguments = args;
        }
        return result;
    }
    Command.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Command} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Is$1.string(candidate.title) && Is$1.string(candidate.command);
    }
    Command.is = is;
})(Command || (Command = {}));
/**
 * The TextEdit namespace provides helper function to create replace,
 * insert and delete edits more easily.
 */
var TextEdit;
(function (TextEdit) {
    /**
     * Creates a replace text edit.
     * @param range The range of text to be replaced.
     * @param newText The new text.
     */
    function replace(range, newText) {
        return { range: range, newText: newText };
    }
    TextEdit.replace = replace;
    /**
     * Creates an insert text edit.
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     */
    function insert(position, newText) {
        return { range: { start: position, end: position }, newText: newText };
    }
    TextEdit.insert = insert;
    /**
     * Creates a delete text edit.
     * @param range The range of text to be deleted.
     */
    function del(range) {
        return { range: range, newText: '' };
    }
    TextEdit.del = del;
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate)
            && Is$1.string(candidate.newText)
            && Range.is(candidate.range);
    }
    TextEdit.is = is;
})(TextEdit || (TextEdit = {}));
var ChangeAnnotation;
(function (ChangeAnnotation) {
    function create(label, needsConfirmation, description) {
        var result = { label: label };
        if (needsConfirmation !== undefined) {
            result.needsConfirmation = needsConfirmation;
        }
        if (description !== undefined) {
            result.description = description;
        }
        return result;
    }
    ChangeAnnotation.create = create;
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Is$1.string(candidate.label) &&
            (Is$1.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === undefined) &&
            (Is$1.string(candidate.description) || candidate.description === undefined);
    }
    ChangeAnnotation.is = is;
})(ChangeAnnotation || (ChangeAnnotation = {}));
var ChangeAnnotationIdentifier;
(function (ChangeAnnotationIdentifier) {
    function is(value) {
        var candidate = value;
        return Is$1.string(candidate);
    }
    ChangeAnnotationIdentifier.is = is;
})(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
var AnnotatedTextEdit;
(function (AnnotatedTextEdit) {
    /**
     * Creates an annotated replace text edit.
     *
     * @param range The range of text to be replaced.
     * @param newText The new text.
     * @param annotation The annotation.
     */
    function replace(range, newText, annotation) {
        return { range: range, newText: newText, annotationId: annotation };
    }
    AnnotatedTextEdit.replace = replace;
    /**
     * Creates an annotated insert text edit.
     *
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     * @param annotation The annotation.
     */
    function insert(position, newText, annotation) {
        return { range: { start: position, end: position }, newText: newText, annotationId: annotation };
    }
    AnnotatedTextEdit.insert = insert;
    /**
     * Creates an annotated delete text edit.
     *
     * @param range The range of text to be deleted.
     * @param annotation The annotation.
     */
    function del(range, annotation) {
        return { range: range, newText: '', annotationId: annotation };
    }
    AnnotatedTextEdit.del = del;
    function is(value) {
        var candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit.is = is;
})(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
/**
 * The TextDocumentEdit namespace provides helper function to create
 * an edit that manipulates a text document.
 */
var TextDocumentEdit;
(function (TextDocumentEdit) {
    /**
     * Creates a new `TextDocumentEdit`
     */
    function create(textDocument, edits) {
        return { textDocument: textDocument, edits: edits };
    }
    TextDocumentEdit.create = create;
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate)
            && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument)
            && Array.isArray(candidate.edits);
    }
    TextDocumentEdit.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function (CreateFile) {
    function create(uri, options, annotation) {
        var result = {
            kind: 'create',
            uri: uri
        };
        if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
            result.options = options;
        }
        if (annotation !== undefined) {
            result.annotationId = annotation;
        }
        return result;
    }
    CreateFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'create' && Is$1.string(candidate.uri) && (candidate.options === undefined ||
            ((candidate.options.overwrite === undefined || Is$1.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is$1.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile.is = is;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function (RenameFile) {
    function create(oldUri, newUri, options, annotation) {
        var result = {
            kind: 'rename',
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
            result.options = options;
        }
        if (annotation !== undefined) {
            result.annotationId = annotation;
        }
        return result;
    }
    RenameFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'rename' && Is$1.string(candidate.oldUri) && Is$1.string(candidate.newUri) && (candidate.options === undefined ||
            ((candidate.options.overwrite === undefined || Is$1.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is$1.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile.is = is;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function (DeleteFile) {
    function create(uri, options, annotation) {
        var result = {
            kind: 'delete',
            uri: uri
        };
        if (options !== undefined && (options.recursive !== undefined || options.ignoreIfNotExists !== undefined)) {
            result.options = options;
        }
        if (annotation !== undefined) {
            result.annotationId = annotation;
        }
        return result;
    }
    DeleteFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'delete' && Is$1.string(candidate.uri) && (candidate.options === undefined ||
            ((candidate.options.recursive === undefined || Is$1.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === undefined || Is$1.boolean(candidate.options.ignoreIfNotExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile.is = is;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function (WorkspaceEdit) {
    function is(value) {
        var candidate = value;
        return candidate &&
            (candidate.changes !== undefined || candidate.documentChanges !== undefined) &&
            (candidate.documentChanges === undefined || candidate.documentChanges.every(function (change) {
                if (Is$1.string(change.kind)) {
                    return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                }
                else {
                    return TextDocumentEdit.is(change);
                }
            }));
    }
    WorkspaceEdit.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextEditChangeImpl = /** @class */ (function () {
    function TextEditChangeImpl(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl.prototype.insert = function (position, newText, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
            edit = TextEdit.insert(position, newText);
        }
        else if (ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = AnnotatedTextEdit.insert(position, newText, annotation);
        }
        else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
            return id;
        }
    };
    TextEditChangeImpl.prototype.replace = function (range, newText, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
            edit = TextEdit.replace(range, newText);
        }
        else if (ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = AnnotatedTextEdit.replace(range, newText, annotation);
        }
        else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
            return id;
        }
    };
    TextEditChangeImpl.prototype.delete = function (range, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
            edit = TextEdit.del(range);
        }
        else if (ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = AnnotatedTextEdit.del(range, annotation);
        }
        else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
            return id;
        }
    };
    TextEditChangeImpl.prototype.add = function (edit) {
        this.edits.push(edit);
    };
    TextEditChangeImpl.prototype.all = function () {
        return this.edits;
    };
    TextEditChangeImpl.prototype.clear = function () {
        this.edits.splice(0, this.edits.length);
    };
    TextEditChangeImpl.prototype.assertChangeAnnotations = function (value) {
        if (value === undefined) {
            throw new Error("Text edit change is not configured to manage change annotations.");
        }
    };
    return TextEditChangeImpl;
}());
/**
 * A helper class
 */
var ChangeAnnotations = /** @class */ (function () {
    function ChangeAnnotations(annotations) {
        this._annotations = annotations === undefined ? Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
    }
    ChangeAnnotations.prototype.all = function () {
        return this._annotations;
    };
    Object.defineProperty(ChangeAnnotations.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    ChangeAnnotations.prototype.manage = function (idOrAnnotation, annotation) {
        var id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
            id = idOrAnnotation;
        }
        else {
            id = this.nextId();
            annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== undefined) {
            throw new Error("Id ".concat(id, " is already in use."));
        }
        if (annotation === undefined) {
            throw new Error("No annotation provided for id ".concat(id));
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
    };
    ChangeAnnotations.prototype.nextId = function () {
        this._counter++;
        return this._counter.toString();
    };
    return ChangeAnnotations;
}());
/**
 * A workspace change helps constructing changes to a workspace.
 */
var WorkspaceChange = /** @class */ (function () {
    function WorkspaceChange(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== undefined) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function (change) {
                    if (TextDocumentEdit.is(change)) {
                        var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            }
            else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function (key) {
                    var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                    _this._textEditChanges[key] = textEditChange;
                });
            }
        }
        else {
            this._workspaceEdit = {};
        }
    }
    Object.defineProperty(WorkspaceChange.prototype, "edit", {
        /**
         * Returns the underlying {@link WorkspaceEdit} literal
         * use to be returned from a workspace edit operation like rename.
         */
        get: function () {
            this.initDocumentChanges();
            if (this._changeAnnotations !== undefined) {
                if (this._changeAnnotations.size === 0) {
                    this._workspaceEdit.changeAnnotations = undefined;
                }
                else {
                    this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
            }
            return this._workspaceEdit;
        },
        enumerable: false,
        configurable: true
    });
    WorkspaceChange.prototype.getTextEditChange = function (key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var textDocument = { uri: key.uri, version: key.version };
            var result = this._textEditChanges[textDocument.uri];
            if (!result) {
                var edits = [];
                var textDocumentEdit = {
                    textDocument: textDocument,
                    edits: edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
            }
            return result;
        }
        else {
            this.initChanges();
            if (this._workspaceEdit.changes === undefined) {
                throw new Error('Workspace edit is not configured for normal text edit changes.');
            }
            var result = this._textEditChanges[key];
            if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange.prototype.initDocumentChanges = function () {
        if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
            this._changeAnnotations = new ChangeAnnotations();
            this._workspaceEdit.documentChanges = [];
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
    };
    WorkspaceChange.prototype.initChanges = function () {
        if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
            this._workspaceEdit.changes = Object.create(null);
        }
    };
    WorkspaceChange.prototype.createFile = function (uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
            operation = CreateFile.create(uri, options);
        }
        else {
            id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
            return id;
        }
    };
    WorkspaceChange.prototype.renameFile = function (oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
            operation = RenameFile.create(oldUri, newUri, options);
        }
        else {
            id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
            return id;
        }
    };
    WorkspaceChange.prototype.deleteFile = function (uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
            operation = DeleteFile.create(uri, options);
        }
        else {
            id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
            return id;
        }
    };
    return WorkspaceChange;
}());
/**
 * The TextDocumentIdentifier namespace provides helper functions to work with
 * {@link TextDocumentIdentifier} literals.
 */
var TextDocumentIdentifier;
(function (TextDocumentIdentifier) {
    /**
     * Creates a new TextDocumentIdentifier literal.
     * @param uri The document's uri.
     */
    function create(uri) {
        return { uri: uri };
    }
    TextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the {@link TextDocumentIdentifier} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Is$1.string(candidate.uri);
    }
    TextDocumentIdentifier.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
/**
 * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
 * {@link VersionedTextDocumentIdentifier} literals.
 */
var VersionedTextDocumentIdentifier;
(function (VersionedTextDocumentIdentifier) {
    /**
     * Creates a new VersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param version The document's version.
     */
    function create(uri, version) {
        return { uri: uri, version: version };
    }
    VersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the {@link VersionedTextDocumentIdentifier} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Is$1.string(candidate.uri) && Is$1.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
/**
 * The OptionalVersionedTextDocumentIdentifier namespace provides helper functions to work with
 * {@link OptionalVersionedTextDocumentIdentifier} literals.
 */
var OptionalVersionedTextDocumentIdentifier;
(function (OptionalVersionedTextDocumentIdentifier) {
    /**
     * Creates a new OptionalVersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param version The document's version.
     */
    function create(uri, version) {
        return { uri: uri, version: version };
    }
    OptionalVersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the {@link OptionalVersionedTextDocumentIdentifier} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Is$1.string(candidate.uri) && (candidate.version === null || Is$1.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier.is = is;
})(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
/**
 * The TextDocumentItem namespace provides helper functions to work with
 * {@link TextDocumentItem} literals.
 */
var TextDocumentItem;
(function (TextDocumentItem) {
    /**
     * Creates a new TextDocumentItem literal.
     * @param uri The document's uri.
     * @param languageId The document's language identifier.
     * @param version The document's version number.
     * @param text The document's text.
     */
    function create(uri, languageId, version, text) {
        return { uri: uri, languageId: languageId, version: version, text: text };
    }
    TextDocumentItem.create = create;
    /**
     * Checks whether the given literal conforms to the {@link TextDocumentItem} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Is$1.string(candidate.uri) && Is$1.string(candidate.languageId) && Is$1.integer(candidate.version) && Is$1.string(candidate.text);
    }
    TextDocumentItem.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. This kinds
 * are reserved for internal usage.
 */
var MarkupKind;
(function (MarkupKind) {
    /**
     * Plain text is supported as a content format
     */
    MarkupKind.PlainText = 'plaintext';
    /**
     * Markdown is supported as a content format
     */
    MarkupKind.Markdown = 'markdown';
    /**
     * Checks whether the given value is a value of the {@link MarkupKind} type.
     */
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
    }
    MarkupKind.is = is;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function (MarkupContent) {
    /**
     * Checks whether the given value conforms to the {@link MarkupContent} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is$1.string(candidate.value);
    }
    MarkupContent.is = is;
})(MarkupContent || (MarkupContent = {}));
/**
 * The kind of a completion entry.
 */
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind.Text = 1;
    CompletionItemKind.Method = 2;
    CompletionItemKind.Function = 3;
    CompletionItemKind.Constructor = 4;
    CompletionItemKind.Field = 5;
    CompletionItemKind.Variable = 6;
    CompletionItemKind.Class = 7;
    CompletionItemKind.Interface = 8;
    CompletionItemKind.Module = 9;
    CompletionItemKind.Property = 10;
    CompletionItemKind.Unit = 11;
    CompletionItemKind.Value = 12;
    CompletionItemKind.Enum = 13;
    CompletionItemKind.Keyword = 14;
    CompletionItemKind.Snippet = 15;
    CompletionItemKind.Color = 16;
    CompletionItemKind.File = 17;
    CompletionItemKind.Reference = 18;
    CompletionItemKind.Folder = 19;
    CompletionItemKind.EnumMember = 20;
    CompletionItemKind.Constant = 21;
    CompletionItemKind.Struct = 22;
    CompletionItemKind.Event = 23;
    CompletionItemKind.Operator = 24;
    CompletionItemKind.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
/**
 * Defines whether the insert text in a completion item should be interpreted as
 * plain text or a snippet.
 */
var InsertTextFormat;
(function (InsertTextFormat) {
    /**
     * The primary text to be inserted is treated as a plain string.
     */
    InsertTextFormat.PlainText = 1;
    /**
     * The primary text to be inserted is treated as a snippet.
     *
     * A snippet can define tab stops and placeholders with `$1`, `$2`
     * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
     * the end of the snippet. Placeholders with equal identifiers are linked,
     * that is typing in one will update others too.
     *
     * See also: https://microsoft.github.io/language-server-protocol/specifications/specification-current/#snippet_syntax
     */
    InsertTextFormat.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
/**
 * Completion item tags are extra annotations that tweak the rendering of a completion
 * item.
 *
 * @since 3.15.0
 */
var CompletionItemTag;
(function (CompletionItemTag) {
    /**
     * Render a completion as obsolete, usually using a strike-out.
     */
    CompletionItemTag.Deprecated = 1;
})(CompletionItemTag || (CompletionItemTag = {}));
/**
 * The InsertReplaceEdit namespace provides functions to deal with insert / replace edits.
 *
 * @since 3.16.0
 */
var InsertReplaceEdit;
(function (InsertReplaceEdit) {
    /**
     * Creates a new insert / replace edit
     */
    function create(newText, insert, replace) {
        return { newText: newText, insert: insert, replace: replace };
    }
    InsertReplaceEdit.create = create;
    /**
     * Checks whether the given literal conforms to the {@link InsertReplaceEdit} interface.
     */
    function is(value) {
        var candidate = value;
        return candidate && Is$1.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
    }
    InsertReplaceEdit.is = is;
})(InsertReplaceEdit || (InsertReplaceEdit = {}));
/**
 * How whitespace and indentation is handled during completion
 * item insertion.
 *
 * @since 3.16.0
 */
var InsertTextMode;
(function (InsertTextMode) {
    /**
     * The insertion or replace strings is taken as it is. If the
     * value is multi line the lines below the cursor will be
     * inserted using the indentation defined in the string value.
     * The client will not apply any kind of adjustments to the
     * string.
     */
    InsertTextMode.asIs = 1;
    /**
     * The editor adjusts leading whitespace of new lines so that
     * they match the indentation up to the cursor of the line for
     * which the item is accepted.
     *
     * Consider a line like this: <2tabs><cursor><3tabs>foo. Accepting a
     * multi line completion item is indented using 2 tabs and all
     * following lines inserted will be indented using 2 tabs as well.
     */
    InsertTextMode.adjustIndentation = 2;
})(InsertTextMode || (InsertTextMode = {}));
var CompletionItemLabelDetails;
(function (CompletionItemLabelDetails) {
    function is(value) {
        var candidate = value;
        return candidate && (Is$1.string(candidate.detail) || candidate.detail === undefined) &&
            (Is$1.string(candidate.description) || candidate.description === undefined);
    }
    CompletionItemLabelDetails.is = is;
})(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
/**
 * The CompletionItem namespace provides functions to deal with
 * completion items.
 */
var CompletionItem;
(function (CompletionItem) {
    /**
     * Create a completion item and seed it with a label.
     * @param label The completion item's label
     */
    function create(label) {
        return { label: label };
    }
    CompletionItem.create = create;
})(CompletionItem || (CompletionItem = {}));
/**
 * The CompletionList namespace provides functions to deal with
 * completion lists.
 */
var CompletionList;
(function (CompletionList) {
    /**
     * Creates a new completion list.
     *
     * @param items The completion items.
     * @param isIncomplete The list is not complete.
     */
    function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
    }
    CompletionList.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function (MarkedString) {
    /**
     * Creates a marked string from plain text.
     *
     * @param plainText The plain text.
     */
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
    }
    MarkedString.fromPlainText = fromPlainText;
    /**
     * Checks whether the given value conforms to the {@link MarkedString} type.
     */
    function is(value) {
        var candidate = value;
        return Is$1.string(candidate) || (Is$1.objectLiteral(candidate) && Is$1.string(candidate.language) && Is$1.string(candidate.value));
    }
    MarkedString.is = is;
})(MarkedString || (MarkedString = {}));
var Hover;
(function (Hover) {
    /**
     * Checks whether the given value conforms to the {@link Hover} interface.
     */
    function is(value) {
        var candidate = value;
        return !!candidate && Is$1.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
            MarkedString.is(candidate.contents) ||
            Is$1.typedArray(candidate.contents, MarkedString.is)) && (value.range === undefined || Range.is(value.range));
    }
    Hover.is = is;
})(Hover || (Hover = {}));
/**
 * The ParameterInformation namespace provides helper functions to work with
 * {@link ParameterInformation} literals.
 */
var ParameterInformation;
(function (ParameterInformation) {
    /**
     * Creates a new parameter information literal.
     *
     * @param label A label string.
     * @param documentation A doc string.
     */
    function create(label, documentation) {
        return documentation ? { label: label, documentation: documentation } : { label: label };
    }
    ParameterInformation.create = create;
})(ParameterInformation || (ParameterInformation = {}));
/**
 * The SignatureInformation namespace provides helper functions to work with
 * {@link SignatureInformation} literals.
 */
var SignatureInformation;
(function (SignatureInformation) {
    function create(label, documentation) {
        var parameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
        }
        var result = { label: label };
        if (Is$1.defined(documentation)) {
            result.documentation = documentation;
        }
        if (Is$1.defined(parameters)) {
            result.parameters = parameters;
        }
        else {
            result.parameters = [];
        }
        return result;
    }
    SignatureInformation.create = create;
})(SignatureInformation || (SignatureInformation = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind.Text = 1;
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind.Read = 2;
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * DocumentHighlight namespace to provide helper functions to work with
 * {@link DocumentHighlight} literals.
 */
var DocumentHighlight;
(function (DocumentHighlight) {
    /**
     * Create a DocumentHighlight object.
     * @param range The range the highlight applies to.
     * @param kind The highlight kind
     */
    function create(range, kind) {
        var result = { range: range };
        if (Is$1.number(kind)) {
            result.kind = kind;
        }
        return result;
    }
    DocumentHighlight.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind.File = 1;
    SymbolKind.Module = 2;
    SymbolKind.Namespace = 3;
    SymbolKind.Package = 4;
    SymbolKind.Class = 5;
    SymbolKind.Method = 6;
    SymbolKind.Property = 7;
    SymbolKind.Field = 8;
    SymbolKind.Constructor = 9;
    SymbolKind.Enum = 10;
    SymbolKind.Interface = 11;
    SymbolKind.Function = 12;
    SymbolKind.Variable = 13;
    SymbolKind.Constant = 14;
    SymbolKind.String = 15;
    SymbolKind.Number = 16;
    SymbolKind.Boolean = 17;
    SymbolKind.Array = 18;
    SymbolKind.Object = 19;
    SymbolKind.Key = 20;
    SymbolKind.Null = 21;
    SymbolKind.EnumMember = 22;
    SymbolKind.Struct = 23;
    SymbolKind.Event = 24;
    SymbolKind.Operator = 25;
    SymbolKind.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
/**
 * Symbol tags are extra annotations that tweak the rendering of a symbol.
 *
 * @since 3.16
 */
var SymbolTag;
(function (SymbolTag) {
    /**
     * Render a symbol as obsolete, usually using a strike-out.
     */
    SymbolTag.Deprecated = 1;
})(SymbolTag || (SymbolTag = {}));
var SymbolInformation;
(function (SymbolInformation) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the location of the symbol.
     * @param uri The resource of the location of symbol.
     * @param containerName The name of the symbol containing the symbol.
     */
    function create(name, kind, range, uri, containerName) {
        var result = {
            name: name,
            kind: kind,
            location: { uri: uri, range: range }
        };
        if (containerName) {
            result.containerName = containerName;
        }
        return result;
    }
    SymbolInformation.create = create;
})(SymbolInformation || (SymbolInformation = {}));
var WorkspaceSymbol;
(function (WorkspaceSymbol) {
    /**
     * Create a new workspace symbol.
     *
     * @param name The name of the symbol.
     * @param kind The kind of the symbol.
     * @param uri The resource of the location of the symbol.
     * @param range An options range of the location.
     * @returns A WorkspaceSymbol.
     */
    function create(name, kind, uri, range) {
        return range !== undefined
            ? { name: name, kind: kind, location: { uri: uri, range: range } }
            : { name: name, kind: kind, location: { uri: uri } };
    }
    WorkspaceSymbol.create = create;
})(WorkspaceSymbol || (WorkspaceSymbol = {}));
var DocumentSymbol;
(function (DocumentSymbol) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param detail The detail of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the symbol.
     * @param selectionRange The selectionRange of the symbol.
     * @param children Children of the symbol.
     */
    function create(name, detail, kind, range, selectionRange, children) {
        var result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== undefined) {
            result.children = children;
        }
        return result;
    }
    DocumentSymbol.create = create;
    /**
     * Checks whether the given literal conforms to the {@link DocumentSymbol} interface.
     */
    function is(value) {
        var candidate = value;
        return candidate &&
            Is$1.string(candidate.name) && Is$1.number(candidate.kind) &&
            Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
            (candidate.detail === undefined || Is$1.string(candidate.detail)) &&
            (candidate.deprecated === undefined || Is$1.boolean(candidate.deprecated)) &&
            (candidate.children === undefined || Array.isArray(candidate.children)) &&
            (candidate.tags === undefined || Array.isArray(candidate.tags));
    }
    DocumentSymbol.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
/**
 * A set of predefined code action kinds
 */
var CodeActionKind;
(function (CodeActionKind) {
    /**
     * Empty kind.
     */
    CodeActionKind.Empty = '';
    /**
     * Base kind for quickfix actions: 'quickfix'
     */
    CodeActionKind.QuickFix = 'quickfix';
    /**
     * Base kind for refactoring actions: 'refactor'
     */
    CodeActionKind.Refactor = 'refactor';
    /**
     * Base kind for refactoring extraction actions: 'refactor.extract'
     *
     * Example extract actions:
     *
     * - Extract method
     * - Extract function
     * - Extract variable
     * - Extract interface from class
     * - ...
     */
    CodeActionKind.RefactorExtract = 'refactor.extract';
    /**
     * Base kind for refactoring inline actions: 'refactor.inline'
     *
     * Example inline actions:
     *
     * - Inline function
     * - Inline variable
     * - Inline constant
     * - ...
     */
    CodeActionKind.RefactorInline = 'refactor.inline';
    /**
     * Base kind for refactoring rewrite actions: 'refactor.rewrite'
     *
     * Example rewrite actions:
     *
     * - Convert JavaScript function to class
     * - Add or remove parameter
     * - Encapsulate field
     * - Make method static
     * - Move method to base class
     * - ...
     */
    CodeActionKind.RefactorRewrite = 'refactor.rewrite';
    /**
     * Base kind for source actions: `source`
     *
     * Source code actions apply to the entire file.
     */
    CodeActionKind.Source = 'source';
    /**
     * Base kind for an organize imports source action: `source.organizeImports`
     */
    CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
    /**
     * Base kind for auto-fix source actions: `source.fixAll`.
     *
     * Fix all actions automatically fix errors that have a clear fix that do not require user input.
     * They should not suppress errors or perform unsafe fixes such as generating new types or classes.
     *
     * @since 3.15.0
     */
    CodeActionKind.SourceFixAll = 'source.fixAll';
})(CodeActionKind || (CodeActionKind = {}));
/**
 * The reason why code actions were requested.
 *
 * @since 3.17.0
 */
var CodeActionTriggerKind;
(function (CodeActionTriggerKind) {
    /**
     * Code actions were explicitly requested by the user or by an extension.
     */
    CodeActionTriggerKind.Invoked = 1;
    /**
     * Code actions were requested automatically.
     *
     * This typically happens when current selection in a file changes, but can
     * also be triggered when file content changes.
     */
    CodeActionTriggerKind.Automatic = 2;
})(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
/**
 * The CodeActionContext namespace provides helper functions to work with
 * {@link CodeActionContext} literals.
 */
var CodeActionContext;
(function (CodeActionContext) {
    /**
     * Creates a new CodeActionContext literal.
     */
    function create(diagnostics, only, triggerKind) {
        var result = { diagnostics: diagnostics };
        if (only !== undefined && only !== null) {
            result.only = only;
        }
        if (triggerKind !== undefined && triggerKind !== null) {
            result.triggerKind = triggerKind;
        }
        return result;
    }
    CodeActionContext.create = create;
    /**
     * Checks whether the given literal conforms to the {@link CodeActionContext} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Is$1.typedArray(candidate.diagnostics, Diagnostic.is)
            && (candidate.only === undefined || Is$1.typedArray(candidate.only, Is$1.string))
            && (candidate.triggerKind === undefined || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
    }
    CodeActionContext.is = is;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function (CodeAction) {
    function create(title, kindOrCommandOrEdit, kind) {
        var result = { title: title };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === 'string') {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        }
        else if (Command.is(kindOrCommandOrEdit)) {
            result.command = kindOrCommandOrEdit;
        }
        else {
            result.edit = kindOrCommandOrEdit;
        }
        if (checkKind && kind !== undefined) {
            result.kind = kind;
        }
        return result;
    }
    CodeAction.create = create;
    function is(value) {
        var candidate = value;
        return candidate && Is$1.string(candidate.title) &&
            (candidate.diagnostics === undefined || Is$1.typedArray(candidate.diagnostics, Diagnostic.is)) &&
            (candidate.kind === undefined || Is$1.string(candidate.kind)) &&
            (candidate.edit !== undefined || candidate.command !== undefined) &&
            (candidate.command === undefined || Command.is(candidate.command)) &&
            (candidate.isPreferred === undefined || Is$1.boolean(candidate.isPreferred)) &&
            (candidate.edit === undefined || WorkspaceEdit.is(candidate.edit));
    }
    CodeAction.is = is;
})(CodeAction || (CodeAction = {}));
/**
 * The CodeLens namespace provides helper functions to work with
 * {@link CodeLens} literals.
 */
var CodeLens;
(function (CodeLens) {
    /**
     * Creates a new CodeLens literal.
     */
    function create(range, data) {
        var result = { range: range };
        if (Is$1.defined(data)) {
            result.data = data;
        }
        return result;
    }
    CodeLens.create = create;
    /**
     * Checks whether the given literal conforms to the {@link CodeLens} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Range.is(candidate.range) && (Is$1.undefined(candidate.command) || Command.is(candidate.command));
    }
    CodeLens.is = is;
})(CodeLens || (CodeLens = {}));
/**
 * The FormattingOptions namespace provides helper functions to work with
 * {@link FormattingOptions} literals.
 */
var FormattingOptions;
(function (FormattingOptions) {
    /**
     * Creates a new FormattingOptions literal.
     */
    function create(tabSize, insertSpaces) {
        return { tabSize: tabSize, insertSpaces: insertSpaces };
    }
    FormattingOptions.create = create;
    /**
     * Checks whether the given literal conforms to the {@link FormattingOptions} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Is$1.uinteger(candidate.tabSize) && Is$1.boolean(candidate.insertSpaces);
    }
    FormattingOptions.is = is;
})(FormattingOptions || (FormattingOptions = {}));
/**
 * The DocumentLink namespace provides helper functions to work with
 * {@link DocumentLink} literals.
 */
var DocumentLink;
(function (DocumentLink) {
    /**
     * Creates a new DocumentLink literal.
     */
    function create(range, target, data) {
        return { range: range, target: target, data: data };
    }
    DocumentLink.create = create;
    /**
     * Checks whether the given literal conforms to the {@link DocumentLink} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Range.is(candidate.range) && (Is$1.undefined(candidate.target) || Is$1.string(candidate.target));
    }
    DocumentLink.is = is;
})(DocumentLink || (DocumentLink = {}));
/**
 * The SelectionRange namespace provides helper function to work with
 * SelectionRange literals.
 */
var SelectionRange;
(function (SelectionRange) {
    /**
     * Creates a new SelectionRange
     * @param range the range.
     * @param parent an optional parent.
     */
    function create(range, parent) {
        return { range: range, parent: parent };
    }
    SelectionRange.create = create;
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
    }
    SelectionRange.is = is;
})(SelectionRange || (SelectionRange = {}));
/**
 * A set of predefined token types. This set is not fixed
 * an clients can specify additional token types via the
 * corresponding client capabilities.
 *
 * @since 3.16.0
 */
var SemanticTokenTypes;
(function (SemanticTokenTypes) {
    SemanticTokenTypes["namespace"] = "namespace";
    /**
     * Represents a generic type. Acts as a fallback for types which can't be mapped to
     * a specific type like class or enum.
     */
    SemanticTokenTypes["type"] = "type";
    SemanticTokenTypes["class"] = "class";
    SemanticTokenTypes["enum"] = "enum";
    SemanticTokenTypes["interface"] = "interface";
    SemanticTokenTypes["struct"] = "struct";
    SemanticTokenTypes["typeParameter"] = "typeParameter";
    SemanticTokenTypes["parameter"] = "parameter";
    SemanticTokenTypes["variable"] = "variable";
    SemanticTokenTypes["property"] = "property";
    SemanticTokenTypes["enumMember"] = "enumMember";
    SemanticTokenTypes["event"] = "event";
    SemanticTokenTypes["function"] = "function";
    SemanticTokenTypes["method"] = "method";
    SemanticTokenTypes["macro"] = "macro";
    SemanticTokenTypes["keyword"] = "keyword";
    SemanticTokenTypes["modifier"] = "modifier";
    SemanticTokenTypes["comment"] = "comment";
    SemanticTokenTypes["string"] = "string";
    SemanticTokenTypes["number"] = "number";
    SemanticTokenTypes["regexp"] = "regexp";
    SemanticTokenTypes["operator"] = "operator";
    /**
     * @since 3.17.0
     */
    SemanticTokenTypes["decorator"] = "decorator";
})(SemanticTokenTypes || (SemanticTokenTypes = {}));
/**
 * A set of predefined token modifiers. This set is not fixed
 * an clients can specify additional token types via the
 * corresponding client capabilities.
 *
 * @since 3.16.0
 */
var SemanticTokenModifiers;
(function (SemanticTokenModifiers) {
    SemanticTokenModifiers["declaration"] = "declaration";
    SemanticTokenModifiers["definition"] = "definition";
    SemanticTokenModifiers["readonly"] = "readonly";
    SemanticTokenModifiers["static"] = "static";
    SemanticTokenModifiers["deprecated"] = "deprecated";
    SemanticTokenModifiers["abstract"] = "abstract";
    SemanticTokenModifiers["async"] = "async";
    SemanticTokenModifiers["modification"] = "modification";
    SemanticTokenModifiers["documentation"] = "documentation";
    SemanticTokenModifiers["defaultLibrary"] = "defaultLibrary";
})(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
/**
 * @since 3.16.0
 */
var SemanticTokens;
(function (SemanticTokens) {
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && (candidate.resultId === undefined || typeof candidate.resultId === 'string') &&
            Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === 'number');
    }
    SemanticTokens.is = is;
})(SemanticTokens || (SemanticTokens = {}));
/**
 * The InlineValueText namespace provides functions to deal with InlineValueTexts.
 *
 * @since 3.17.0
 */
var InlineValueText;
(function (InlineValueText) {
    /**
     * Creates a new InlineValueText literal.
     */
    function create(range, text) {
        return { range: range, text: text };
    }
    InlineValueText.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is$1.string(candidate.text);
    }
    InlineValueText.is = is;
})(InlineValueText || (InlineValueText = {}));
/**
 * The InlineValueVariableLookup namespace provides functions to deal with InlineValueVariableLookups.
 *
 * @since 3.17.0
 */
var InlineValueVariableLookup;
(function (InlineValueVariableLookup) {
    /**
     * Creates a new InlineValueText literal.
     */
    function create(range, variableName, caseSensitiveLookup) {
        return { range: range, variableName: variableName, caseSensitiveLookup: caseSensitiveLookup };
    }
    InlineValueVariableLookup.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is$1.boolean(candidate.caseSensitiveLookup)
            && (Is$1.string(candidate.variableName) || candidate.variableName === undefined);
    }
    InlineValueVariableLookup.is = is;
})(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
/**
 * The InlineValueEvaluatableExpression namespace provides functions to deal with InlineValueEvaluatableExpression.
 *
 * @since 3.17.0
 */
var InlineValueEvaluatableExpression;
(function (InlineValueEvaluatableExpression) {
    /**
     * Creates a new InlineValueEvaluatableExpression literal.
     */
    function create(range, expression) {
        return { range: range, expression: expression };
    }
    InlineValueEvaluatableExpression.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range)
            && (Is$1.string(candidate.expression) || candidate.expression === undefined);
    }
    InlineValueEvaluatableExpression.is = is;
})(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
/**
 * The InlineValueContext namespace provides helper functions to work with
 * {@link InlineValueContext} literals.
 *
 * @since 3.17.0
 */
var InlineValueContext;
(function (InlineValueContext) {
    /**
     * Creates a new InlineValueContext literal.
     */
    function create(frameId, stoppedLocation) {
        return { frameId: frameId, stoppedLocation: stoppedLocation };
    }
    InlineValueContext.create = create;
    /**
     * Checks whether the given literal conforms to the {@link InlineValueContext} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Range.is(value.stoppedLocation);
    }
    InlineValueContext.is = is;
})(InlineValueContext || (InlineValueContext = {}));
/**
 * Inlay hint kinds.
 *
 * @since 3.17.0
 */
var InlayHintKind;
(function (InlayHintKind) {
    /**
     * An inlay hint that for a type annotation.
     */
    InlayHintKind.Type = 1;
    /**
     * An inlay hint that is for a parameter.
     */
    InlayHintKind.Parameter = 2;
    function is(value) {
        return value === 1 || value === 2;
    }
    InlayHintKind.is = is;
})(InlayHintKind || (InlayHintKind = {}));
var InlayHintLabelPart;
(function (InlayHintLabelPart) {
    function create(value) {
        return { value: value };
    }
    InlayHintLabelPart.create = create;
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate)
            && (candidate.tooltip === undefined || Is$1.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
            && (candidate.location === undefined || Location.is(candidate.location))
            && (candidate.command === undefined || Command.is(candidate.command));
    }
    InlayHintLabelPart.is = is;
})(InlayHintLabelPart || (InlayHintLabelPart = {}));
var InlayHint;
(function (InlayHint) {
    function create(position, label, kind) {
        var result = { position: position, label: label };
        if (kind !== undefined) {
            result.kind = kind;
        }
        return result;
    }
    InlayHint.create = create;
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && Position.is(candidate.position)
            && (Is$1.string(candidate.label) || Is$1.typedArray(candidate.label, InlayHintLabelPart.is))
            && (candidate.kind === undefined || InlayHintKind.is(candidate.kind))
            && (candidate.textEdits === undefined) || Is$1.typedArray(candidate.textEdits, TextEdit.is)
            && (candidate.tooltip === undefined || Is$1.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
            && (candidate.paddingLeft === undefined || Is$1.boolean(candidate.paddingLeft))
            && (candidate.paddingRight === undefined || Is$1.boolean(candidate.paddingRight));
    }
    InlayHint.is = is;
})(InlayHint || (InlayHint = {}));
var WorkspaceFolder;
(function (WorkspaceFolder) {
    function is(value) {
        var candidate = value;
        return Is$1.objectLiteral(candidate) && URI.is(candidate.uri) && Is$1.string(candidate.name);
    }
    WorkspaceFolder.is = is;
})(WorkspaceFolder || (WorkspaceFolder = {}));
var EOL = ['\n', '\r\n', '\r'];
/**
 * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
 */
var TextDocument;
(function (TextDocument) {
    /**
     * Creates a new ITextDocument literal from the given uri and content.
     * @param uri The document's uri.
     * @param languageId The document's language Id.
     * @param version The document's version.
     * @param content The document's content.
     */
    function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument.create = create;
    /**
     * Checks whether the given literal conforms to the {@link ITextDocument} interface.
     */
    function is(value) {
        var candidate = value;
        return Is$1.defined(candidate) && Is$1.string(candidate.uri) && (Is$1.undefined(candidate.languageId) || Is$1.string(candidate.languageId)) && Is$1.uinteger(candidate.lineCount)
            && Is$1.func(candidate.getText) && Is$1.func(candidate.positionAt) && Is$1.func(candidate.offsetAt) ? true : false;
    }
    TextDocument.is = is;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function (a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        var lastModifiedOffset = text.length;
        for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
                text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            }
            else {
                throw new Error('Overlapping edit');
            }
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) {
            // sorted
            return data;
        }
        var p = (data.length / 2) | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
                // smaller_equal -> take left to preserve order
                data[i++] = left[leftIdx++];
            }
            else {
                // greater -> take right
                data[i++] = right[rightIdx++];
            }
        }
        while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
        }
        return data;
    }
})(TextDocument || (TextDocument = {}));
/**
 * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
 */
var FullTextDocument = /** @class */ (function () {
    function FullTextDocument(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = undefined;
    }
    Object.defineProperty(FullTextDocument.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    FullTextDocument.prototype.getText = function (range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument.prototype.update = function (event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = undefined;
    };
    FullTextDocument.prototype.getLineOffsets = function () {
        if (this._lineOffsets === undefined) {
            var lineOffsets = [];
            var text = this._content;
            var isLineStart = true;
            for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = (ch === '\r' || ch === '\n');
                if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
                    i++;
                }
            }
            if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
            }
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    };
    FullTextDocument.prototype.positionAt = function (offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
            return Position.create(0, offset);
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        var line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument.prototype.offsetAt = function (position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument.prototype, "lineCount", {
        get: function () {
            return this.getLineOffsets().length;
        },
        enumerable: false,
        configurable: true
    });
    return FullTextDocument;
}());
var Is$1;
(function (Is) {
    var toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== 'undefined';
    }
    Is.defined = defined;
    function undefined$1(value) {
        return typeof value === 'undefined';
    }
    Is.undefined = undefined$1;
    function boolean(value) {
        return value === true || value === false;
    }
    Is.boolean = boolean;
    function string(value) {
        return toString.call(value) === '[object String]';
    }
    Is.string = string;
    function number(value) {
        return toString.call(value) === '[object Number]';
    }
    Is.number = number;
    function numberRange(value, min, max) {
        return toString.call(value) === '[object Number]' && min <= value && value <= max;
    }
    Is.numberRange = numberRange;
    function integer(value) {
        return toString.call(value) === '[object Number]' && -2147483648 <= value && value <= 2147483647;
    }
    Is.integer = integer;
    function uinteger(value) {
        return toString.call(value) === '[object Number]' && 0 <= value && value <= 2147483647;
    }
    Is.uinteger = uinteger;
    function func(value) {
        return toString.call(value) === '[object Function]';
    }
    Is.func = func;
    function objectLiteral(value) {
        // Strictly speaking class instances pass this check as well. Since the LSP
        // doesn't use classes we ignore this for now. If we do we need to add something
        // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
        return value !== null && typeof value === 'object';
    }
    Is.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is.typedArray = typedArray;
})(Is$1 || (Is$1 = {}));

var main$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get AnnotatedTextEdit () { return AnnotatedTextEdit; },
	get ChangeAnnotation () { return ChangeAnnotation; },
	get ChangeAnnotationIdentifier () { return ChangeAnnotationIdentifier; },
	get CodeAction () { return CodeAction; },
	get CodeActionContext () { return CodeActionContext; },
	get CodeActionKind () { return CodeActionKind; },
	get CodeActionTriggerKind () { return CodeActionTriggerKind; },
	get CodeDescription () { return CodeDescription; },
	get CodeLens () { return CodeLens; },
	get Color () { return Color; },
	get ColorInformation () { return ColorInformation; },
	get ColorPresentation () { return ColorPresentation; },
	get Command () { return Command; },
	get CompletionItem () { return CompletionItem; },
	get CompletionItemKind () { return CompletionItemKind; },
	get CompletionItemLabelDetails () { return CompletionItemLabelDetails; },
	get CompletionItemTag () { return CompletionItemTag; },
	get CompletionList () { return CompletionList; },
	get CreateFile () { return CreateFile; },
	get DeleteFile () { return DeleteFile; },
	get Diagnostic () { return Diagnostic; },
	get DiagnosticRelatedInformation () { return DiagnosticRelatedInformation; },
	get DiagnosticSeverity () { return DiagnosticSeverity; },
	get DiagnosticTag () { return DiagnosticTag; },
	get DocumentHighlight () { return DocumentHighlight; },
	get DocumentHighlightKind () { return DocumentHighlightKind; },
	get DocumentLink () { return DocumentLink; },
	get DocumentSymbol () { return DocumentSymbol; },
	get DocumentUri () { return DocumentUri; },
	EOL: EOL,
	get FoldingRange () { return FoldingRange; },
	get FoldingRangeKind () { return FoldingRangeKind; },
	get FormattingOptions () { return FormattingOptions; },
	get Hover () { return Hover; },
	get InlayHint () { return InlayHint; },
	get InlayHintKind () { return InlayHintKind; },
	get InlayHintLabelPart () { return InlayHintLabelPart; },
	get InlineValueContext () { return InlineValueContext; },
	get InlineValueEvaluatableExpression () { return InlineValueEvaluatableExpression; },
	get InlineValueText () { return InlineValueText; },
	get InlineValueVariableLookup () { return InlineValueVariableLookup; },
	get InsertReplaceEdit () { return InsertReplaceEdit; },
	get InsertTextFormat () { return InsertTextFormat; },
	get InsertTextMode () { return InsertTextMode; },
	get Location () { return Location; },
	get LocationLink () { return LocationLink; },
	get MarkedString () { return MarkedString; },
	get MarkupContent () { return MarkupContent; },
	get MarkupKind () { return MarkupKind; },
	get OptionalVersionedTextDocumentIdentifier () { return OptionalVersionedTextDocumentIdentifier; },
	get ParameterInformation () { return ParameterInformation; },
	get Position () { return Position; },
	get Range () { return Range; },
	get RenameFile () { return RenameFile; },
	get SelectionRange () { return SelectionRange; },
	get SemanticTokenModifiers () { return SemanticTokenModifiers; },
	get SemanticTokenTypes () { return SemanticTokenTypes; },
	get SemanticTokens () { return SemanticTokens; },
	get SignatureInformation () { return SignatureInformation; },
	get SymbolInformation () { return SymbolInformation; },
	get SymbolKind () { return SymbolKind; },
	get SymbolTag () { return SymbolTag; },
	get TextDocument () { return TextDocument; },
	get TextDocumentEdit () { return TextDocumentEdit; },
	get TextDocumentIdentifier () { return TextDocumentIdentifier; },
	get TextDocumentItem () { return TextDocumentItem; },
	get TextEdit () { return TextEdit; },
	get URI () { return URI; },
	get VersionedTextDocumentIdentifier () { return VersionedTextDocumentIdentifier; },
	WorkspaceChange: WorkspaceChange,
	get WorkspaceEdit () { return WorkspaceEdit; },
	get WorkspaceFolder () { return WorkspaceFolder; },
	get WorkspaceSymbol () { return WorkspaceSymbol; },
	get integer () { return integer; },
	get uinteger () { return uinteger; }
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(main$1);

var messages = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProtocolNotificationType = exports.ProtocolNotificationType0 = exports.ProtocolRequestType = exports.ProtocolRequestType0 = exports.RegistrationType = exports.MessageDirection = void 0;
	const vscode_jsonrpc_1 = main$2;
	(function (MessageDirection) {
	    MessageDirection["clientToServer"] = "clientToServer";
	    MessageDirection["serverToClient"] = "serverToClient";
	    MessageDirection["both"] = "both";
	})(exports.MessageDirection || (exports.MessageDirection = {}));
	class RegistrationType {
	    constructor(method) {
	        this.method = method;
	    }
	}
	exports.RegistrationType = RegistrationType;
	class ProtocolRequestType0 extends vscode_jsonrpc_1.RequestType0 {
	    constructor(method) {
	        super(method);
	    }
	}
	exports.ProtocolRequestType0 = ProtocolRequestType0;
	class ProtocolRequestType extends vscode_jsonrpc_1.RequestType {
	    constructor(method) {
	        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
	    }
	}
	exports.ProtocolRequestType = ProtocolRequestType;
	class ProtocolNotificationType0 extends vscode_jsonrpc_1.NotificationType0 {
	    constructor(method) {
	        super(method);
	    }
	}
	exports.ProtocolNotificationType0 = ProtocolNotificationType0;
	class ProtocolNotificationType extends vscode_jsonrpc_1.NotificationType {
	    constructor(method) {
	        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
	    }
	}
	exports.ProtocolNotificationType = ProtocolNotificationType; 
} (messages));

var protocol = {};

var is = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(is, "__esModule", { value: true });
is.objectLiteral = is.typedArray = is.stringArray = is.array = is.func = is.error = is.number = is.string = is.boolean = void 0;
function boolean(value) {
    return value === true || value === false;
}
is.boolean = boolean;
function string(value) {
    return typeof value === 'string' || value instanceof String;
}
is.string = string;
function number(value) {
    return typeof value === 'number' || value instanceof Number;
}
is.number = number;
function error(value) {
    return value instanceof Error;
}
is.error = error;
function func(value) {
    return typeof value === 'function';
}
is.func = func;
function array(value) {
    return Array.isArray(value);
}
is.array = array;
function stringArray(value) {
    return array(value) && value.every(elem => string(elem));
}
is.stringArray = stringArray;
function typedArray(value, check) {
    return Array.isArray(value) && value.every(check);
}
is.typedArray = typedArray;
function objectLiteral(value) {
    // Strictly speaking class instances pass this check as well. Since the LSP
    // doesn't use classes we ignore this for now. If we do we need to add something
    // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
    return value !== null && typeof value === 'object';
}
is.objectLiteral = objectLiteral;

var protocol_implementation = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImplementationRequest = void 0;
	const messages_1 = messages;
	(function (ImplementationRequest) {
	    ImplementationRequest.method = 'textDocument/implementation';
	    ImplementationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    ImplementationRequest.type = new messages_1.ProtocolRequestType(ImplementationRequest.method);
	})(exports.ImplementationRequest || (exports.ImplementationRequest = {})); 
} (protocol_implementation));

var protocol_typeDefinition = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TypeDefinitionRequest = void 0;
	const messages_1 = messages;
	(function (TypeDefinitionRequest) {
	    TypeDefinitionRequest.method = 'textDocument/typeDefinition';
	    TypeDefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    TypeDefinitionRequest.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest.method);
	})(exports.TypeDefinitionRequest || (exports.TypeDefinitionRequest = {})); 
} (protocol_typeDefinition));

var protocol_workspaceFolder = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = void 0;
	const messages_1 = messages;
	(function (WorkspaceFoldersRequest) {
	    WorkspaceFoldersRequest.method = 'workspace/workspaceFolders';
	    WorkspaceFoldersRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    WorkspaceFoldersRequest.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest.method);
	})(exports.WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = {}));
	(function (DidChangeWorkspaceFoldersNotification) {
	    DidChangeWorkspaceFoldersNotification.method = 'workspace/didChangeWorkspaceFolders';
	    DidChangeWorkspaceFoldersNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidChangeWorkspaceFoldersNotification.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification.method);
	})(exports.DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = {})); 
} (protocol_workspaceFolder));

var protocol_configuration = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ConfigurationRequest = void 0;
	const messages_1 = messages;
	(function (ConfigurationRequest) {
	    ConfigurationRequest.method = 'workspace/configuration';
	    ConfigurationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    ConfigurationRequest.type = new messages_1.ProtocolRequestType(ConfigurationRequest.method);
	})(exports.ConfigurationRequest || (exports.ConfigurationRequest = {})); 
} (protocol_configuration));

var protocol_colorProvider = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ColorPresentationRequest = exports.DocumentColorRequest = void 0;
	const messages_1 = messages;
	(function (DocumentColorRequest) {
	    DocumentColorRequest.method = 'textDocument/documentColor';
	    DocumentColorRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentColorRequest.type = new messages_1.ProtocolRequestType(DocumentColorRequest.method);
	})(exports.DocumentColorRequest || (exports.DocumentColorRequest = {}));
	(function (ColorPresentationRequest) {
	    ColorPresentationRequest.method = 'textDocument/colorPresentation';
	    ColorPresentationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    ColorPresentationRequest.type = new messages_1.ProtocolRequestType(ColorPresentationRequest.method);
	})(exports.ColorPresentationRequest || (exports.ColorPresentationRequest = {})); 
} (protocol_colorProvider));

var protocol_foldingRange = {};

(function (exports) {
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FoldingRangeRequest = void 0;
	const messages_1 = messages;
	(function (FoldingRangeRequest) {
	    FoldingRangeRequest.method = 'textDocument/foldingRange';
	    FoldingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    FoldingRangeRequest.type = new messages_1.ProtocolRequestType(FoldingRangeRequest.method);
	})(exports.FoldingRangeRequest || (exports.FoldingRangeRequest = {})); 
} (protocol_foldingRange));

var protocol_declaration = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DeclarationRequest = void 0;
	const messages_1 = messages;
	(function (DeclarationRequest) {
	    DeclarationRequest.method = 'textDocument/declaration';
	    DeclarationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DeclarationRequest.type = new messages_1.ProtocolRequestType(DeclarationRequest.method);
	})(exports.DeclarationRequest || (exports.DeclarationRequest = {})); 
} (protocol_declaration));

var protocol_selectionRange = {};

(function (exports) {
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SelectionRangeRequest = void 0;
	const messages_1 = messages;
	(function (SelectionRangeRequest) {
	    SelectionRangeRequest.method = 'textDocument/selectionRange';
	    SelectionRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SelectionRangeRequest.type = new messages_1.ProtocolRequestType(SelectionRangeRequest.method);
	})(exports.SelectionRangeRequest || (exports.SelectionRangeRequest = {})); 
} (protocol_selectionRange));

var protocol_progress = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = void 0;
	const vscode_jsonrpc_1 = main$2;
	const messages_1 = messages;
	(function (WorkDoneProgress) {
	    WorkDoneProgress.type = new vscode_jsonrpc_1.ProgressType();
	    function is(value) {
	        return value === WorkDoneProgress.type;
	    }
	    WorkDoneProgress.is = is;
	})(exports.WorkDoneProgress || (exports.WorkDoneProgress = {}));
	(function (WorkDoneProgressCreateRequest) {
	    WorkDoneProgressCreateRequest.method = 'window/workDoneProgress/create';
	    WorkDoneProgressCreateRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    WorkDoneProgressCreateRequest.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest.method);
	})(exports.WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = {}));
	(function (WorkDoneProgressCancelNotification) {
	    WorkDoneProgressCancelNotification.method = 'window/workDoneProgress/cancel';
	    WorkDoneProgressCancelNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    WorkDoneProgressCancelNotification.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification.method);
	})(exports.WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = {})); 
} (protocol_progress));

var protocol_callHierarchy = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) TypeFox, Microsoft and others. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.CallHierarchyPrepareRequest = void 0;
	const messages_1 = messages;
	(function (CallHierarchyPrepareRequest) {
	    CallHierarchyPrepareRequest.method = 'textDocument/prepareCallHierarchy';
	    CallHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CallHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest.method);
	})(exports.CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = {}));
	(function (CallHierarchyIncomingCallsRequest) {
	    CallHierarchyIncomingCallsRequest.method = 'callHierarchy/incomingCalls';
	    CallHierarchyIncomingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CallHierarchyIncomingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest.method);
	})(exports.CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = {}));
	(function (CallHierarchyOutgoingCallsRequest) {
	    CallHierarchyOutgoingCallsRequest.method = 'callHierarchy/outgoingCalls';
	    CallHierarchyOutgoingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CallHierarchyOutgoingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest.method);
	})(exports.CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = {})); 
} (protocol_callHierarchy));

var protocol_semanticTokens = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.SemanticTokensRegistrationType = exports.TokenFormat = void 0;
	const messages_1 = messages;
	(function (TokenFormat) {
	    TokenFormat.Relative = 'relative';
	})(exports.TokenFormat || (exports.TokenFormat = {}));
	var SemanticTokensRegistrationType;
	(function (SemanticTokensRegistrationType) {
	    SemanticTokensRegistrationType.method = 'textDocument/semanticTokens';
	    SemanticTokensRegistrationType.type = new messages_1.RegistrationType(SemanticTokensRegistrationType.method);
	})(SemanticTokensRegistrationType = exports.SemanticTokensRegistrationType || (exports.SemanticTokensRegistrationType = {}));
	(function (SemanticTokensRequest) {
	    SemanticTokensRequest.method = 'textDocument/semanticTokens/full';
	    SemanticTokensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SemanticTokensRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRequest.method);
	    SemanticTokensRequest.registrationMethod = SemanticTokensRegistrationType.method;
	})(exports.SemanticTokensRequest || (exports.SemanticTokensRequest = {}));
	(function (SemanticTokensDeltaRequest) {
	    SemanticTokensDeltaRequest.method = 'textDocument/semanticTokens/full/delta';
	    SemanticTokensDeltaRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SemanticTokensDeltaRequest.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest.method);
	    SemanticTokensDeltaRequest.registrationMethod = SemanticTokensRegistrationType.method;
	})(exports.SemanticTokensDeltaRequest || (exports.SemanticTokensDeltaRequest = {}));
	(function (SemanticTokensRangeRequest) {
	    SemanticTokensRangeRequest.method = 'textDocument/semanticTokens/range';
	    SemanticTokensRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SemanticTokensRangeRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest.method);
	    SemanticTokensRangeRequest.registrationMethod = SemanticTokensRegistrationType.method;
	})(exports.SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = {}));
	(function (SemanticTokensRefreshRequest) {
	    SemanticTokensRefreshRequest.method = `workspace/semanticTokens/refresh`;
	    SemanticTokensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    SemanticTokensRefreshRequest.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest.method);
	})(exports.SemanticTokensRefreshRequest || (exports.SemanticTokensRefreshRequest = {})); 
} (protocol_semanticTokens));

var protocol_showDocument = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ShowDocumentRequest = void 0;
	const messages_1 = messages;
	(function (ShowDocumentRequest) {
	    ShowDocumentRequest.method = 'window/showDocument';
	    ShowDocumentRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    ShowDocumentRequest.type = new messages_1.ProtocolRequestType(ShowDocumentRequest.method);
	})(exports.ShowDocumentRequest || (exports.ShowDocumentRequest = {})); 
} (protocol_showDocument));

var protocol_linkedEditingRange = {};

(function (exports) {
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LinkedEditingRangeRequest = void 0;
	const messages_1 = messages;
	(function (LinkedEditingRangeRequest) {
	    LinkedEditingRangeRequest.method = 'textDocument/linkedEditingRange';
	    LinkedEditingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    LinkedEditingRangeRequest.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest.method);
	})(exports.LinkedEditingRangeRequest || (exports.LinkedEditingRangeRequest = {})); 
} (protocol_linkedEditingRange));

var protocol_fileOperations = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.DidRenameFilesNotification = exports.WillRenameFilesRequest = exports.DidCreateFilesNotification = exports.WillCreateFilesRequest = exports.FileOperationPatternKind = void 0;
	const messages_1 = messages;
	(function (FileOperationPatternKind) {
	    /**
	     * The pattern matches a file only.
	     */
	    FileOperationPatternKind.file = 'file';
	    /**
	     * The pattern matches a folder only.
	     */
	    FileOperationPatternKind.folder = 'folder';
	})(exports.FileOperationPatternKind || (exports.FileOperationPatternKind = {}));
	(function (WillCreateFilesRequest) {
	    WillCreateFilesRequest.method = 'workspace/willCreateFiles';
	    WillCreateFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WillCreateFilesRequest.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest.method);
	})(exports.WillCreateFilesRequest || (exports.WillCreateFilesRequest = {}));
	(function (DidCreateFilesNotification) {
	    DidCreateFilesNotification.method = 'workspace/didCreateFiles';
	    DidCreateFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidCreateFilesNotification.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification.method);
	})(exports.DidCreateFilesNotification || (exports.DidCreateFilesNotification = {}));
	(function (WillRenameFilesRequest) {
	    WillRenameFilesRequest.method = 'workspace/willRenameFiles';
	    WillRenameFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WillRenameFilesRequest.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest.method);
	})(exports.WillRenameFilesRequest || (exports.WillRenameFilesRequest = {}));
	(function (DidRenameFilesNotification) {
	    DidRenameFilesNotification.method = 'workspace/didRenameFiles';
	    DidRenameFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidRenameFilesNotification.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification.method);
	})(exports.DidRenameFilesNotification || (exports.DidRenameFilesNotification = {}));
	(function (DidDeleteFilesNotification) {
	    DidDeleteFilesNotification.method = 'workspace/didDeleteFiles';
	    DidDeleteFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidDeleteFilesNotification.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification.method);
	})(exports.DidDeleteFilesNotification || (exports.DidDeleteFilesNotification = {}));
	(function (WillDeleteFilesRequest) {
	    WillDeleteFilesRequest.method = 'workspace/willDeleteFiles';
	    WillDeleteFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WillDeleteFilesRequest.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest.method);
	})(exports.WillDeleteFilesRequest || (exports.WillDeleteFilesRequest = {})); 
} (protocol_fileOperations));

var protocol_moniker = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = void 0;
	const messages_1 = messages;
	(function (UniquenessLevel) {
	    /**
	     * The moniker is only unique inside a document
	     */
	    UniquenessLevel.document = 'document';
	    /**
	     * The moniker is unique inside a project for which a dump got created
	     */
	    UniquenessLevel.project = 'project';
	    /**
	     * The moniker is unique inside the group to which a project belongs
	     */
	    UniquenessLevel.group = 'group';
	    /**
	     * The moniker is unique inside the moniker scheme.
	     */
	    UniquenessLevel.scheme = 'scheme';
	    /**
	     * The moniker is globally unique
	     */
	    UniquenessLevel.global = 'global';
	})(exports.UniquenessLevel || (exports.UniquenessLevel = {}));
	(function (MonikerKind) {
	    /**
	     * The moniker represent a symbol that is imported into a project
	     */
	    MonikerKind.$import = 'import';
	    /**
	     * The moniker represents a symbol that is exported from a project
	     */
	    MonikerKind.$export = 'export';
	    /**
	     * The moniker represents a symbol that is local to a project (e.g. a local
	     * variable of a function, a class not visible outside the project, ...)
	     */
	    MonikerKind.local = 'local';
	})(exports.MonikerKind || (exports.MonikerKind = {}));
	(function (MonikerRequest) {
	    MonikerRequest.method = 'textDocument/moniker';
	    MonikerRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    MonikerRequest.type = new messages_1.ProtocolRequestType(MonikerRequest.method);
	})(exports.MonikerRequest || (exports.MonikerRequest = {})); 
} (protocol_moniker));

var protocol_typeHierarchy = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) TypeFox, Microsoft and others. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TypeHierarchySubtypesRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
	const messages_1 = messages;
	(function (TypeHierarchyPrepareRequest) {
	    TypeHierarchyPrepareRequest.method = 'textDocument/prepareTypeHierarchy';
	    TypeHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    TypeHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest.method);
	})(exports.TypeHierarchyPrepareRequest || (exports.TypeHierarchyPrepareRequest = {}));
	(function (TypeHierarchySupertypesRequest) {
	    TypeHierarchySupertypesRequest.method = 'typeHierarchy/supertypes';
	    TypeHierarchySupertypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    TypeHierarchySupertypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest.method);
	})(exports.TypeHierarchySupertypesRequest || (exports.TypeHierarchySupertypesRequest = {}));
	(function (TypeHierarchySubtypesRequest) {
	    TypeHierarchySubtypesRequest.method = 'typeHierarchy/subtypes';
	    TypeHierarchySubtypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    TypeHierarchySubtypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest.method);
	})(exports.TypeHierarchySubtypesRequest || (exports.TypeHierarchySubtypesRequest = {})); 
} (protocol_typeHierarchy));

var protocol_inlineValue = {};

(function (exports) {
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InlineValueRefreshRequest = exports.InlineValueRequest = void 0;
	const messages_1 = messages;
	(function (InlineValueRequest) {
	    InlineValueRequest.method = 'textDocument/inlineValue';
	    InlineValueRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    InlineValueRequest.type = new messages_1.ProtocolRequestType(InlineValueRequest.method);
	})(exports.InlineValueRequest || (exports.InlineValueRequest = {}));
	(function (InlineValueRefreshRequest) {
	    InlineValueRefreshRequest.method = `workspace/inlineValue/refresh`;
	    InlineValueRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    InlineValueRefreshRequest.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest.method);
	})(exports.InlineValueRefreshRequest || (exports.InlineValueRefreshRequest = {})); 
} (protocol_inlineValue));

var protocol_inlayHint = {};

(function (exports) {
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = void 0;
	const messages_1 = messages;
	(function (InlayHintRequest) {
	    InlayHintRequest.method = 'textDocument/inlayHint';
	    InlayHintRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    InlayHintRequest.type = new messages_1.ProtocolRequestType(InlayHintRequest.method);
	})(exports.InlayHintRequest || (exports.InlayHintRequest = {}));
	(function (InlayHintResolveRequest) {
	    InlayHintResolveRequest.method = 'inlayHint/resolve';
	    InlayHintResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    InlayHintResolveRequest.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest.method);
	})(exports.InlayHintResolveRequest || (exports.InlayHintResolveRequest = {}));
	(function (InlayHintRefreshRequest) {
	    InlayHintRefreshRequest.method = `workspace/inlayHint/refresh`;
	    InlayHintRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    InlayHintRefreshRequest.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest.method);
	})(exports.InlayHintRefreshRequest || (exports.InlayHintRefreshRequest = {})); 
} (protocol_inlayHint));

var protocol_diagnostic = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = void 0;
	const vscode_jsonrpc_1 = main$2;
	const Is = is;
	const messages_1 = messages;
	(function (DiagnosticServerCancellationData) {
	    function is(value) {
	        const candidate = value;
	        return candidate && Is.boolean(candidate.retriggerRequest);
	    }
	    DiagnosticServerCancellationData.is = is;
	})(exports.DiagnosticServerCancellationData || (exports.DiagnosticServerCancellationData = {}));
	(function (DocumentDiagnosticReportKind) {
	    /**
	     * A diagnostic report with a full
	     * set of problems.
	     */
	    DocumentDiagnosticReportKind.Full = 'full';
	    /**
	     * A report indicating that the last
	     * returned report is still accurate.
	     */
	    DocumentDiagnosticReportKind.Unchanged = 'unchanged';
	})(exports.DocumentDiagnosticReportKind || (exports.DocumentDiagnosticReportKind = {}));
	(function (DocumentDiagnosticRequest) {
	    DocumentDiagnosticRequest.method = 'textDocument/diagnostic';
	    DocumentDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentDiagnosticRequest.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest.method);
	    DocumentDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType();
	})(exports.DocumentDiagnosticRequest || (exports.DocumentDiagnosticRequest = {}));
	(function (WorkspaceDiagnosticRequest) {
	    WorkspaceDiagnosticRequest.method = 'workspace/diagnostic';
	    WorkspaceDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WorkspaceDiagnosticRequest.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest.method);
	    WorkspaceDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType();
	})(exports.WorkspaceDiagnosticRequest || (exports.WorkspaceDiagnosticRequest = {}));
	(function (DiagnosticRefreshRequest) {
	    DiagnosticRefreshRequest.method = `workspace/diagnostic/refresh`;
	    DiagnosticRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    DiagnosticRefreshRequest.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest.method);
	})(exports.DiagnosticRefreshRequest || (exports.DiagnosticRefreshRequest = {})); 
} (protocol_diagnostic));

var protocol_notebook = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = void 0;
	const vscode_languageserver_types_1 = require$$1;
	const Is = is;
	const messages_1 = messages;
	/**
	 * A notebook cell kind.
	 *
	 * @since 3.17.0
	 */
	var NotebookCellKind;
	(function (NotebookCellKind) {
	    /**
	     * A markup-cell is formatted source that is used for display.
	     */
	    NotebookCellKind.Markup = 1;
	    /**
	     * A code-cell is source code.
	     */
	    NotebookCellKind.Code = 2;
	    function is(value) {
	        return value === 1 || value === 2;
	    }
	    NotebookCellKind.is = is;
	})(NotebookCellKind = exports.NotebookCellKind || (exports.NotebookCellKind = {}));
	var ExecutionSummary;
	(function (ExecutionSummary) {
	    function create(executionOrder, success) {
	        const result = { executionOrder };
	        if (success === true || success === false) {
	            result.success = success;
	        }
	        return result;
	    }
	    ExecutionSummary.create = create;
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === undefined || Is.boolean(candidate.success));
	    }
	    ExecutionSummary.is = is;
	    function equals(one, other) {
	        if (one === other) {
	            return true;
	        }
	        if (one === null || one === undefined || other === null || other === undefined) {
	            return false;
	        }
	        return one.executionOrder === other.executionOrder && one.success === other.success;
	    }
	    ExecutionSummary.equals = equals;
	})(ExecutionSummary = exports.ExecutionSummary || (exports.ExecutionSummary = {}));
	var NotebookCell;
	(function (NotebookCell) {
	    function create(kind, document) {
	        return { kind, document };
	    }
	    NotebookCell.create = create;
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) &&
	            (candidate.metadata === undefined || Is.objectLiteral(candidate.metadata));
	    }
	    NotebookCell.is = is;
	    function diff(one, two) {
	        const result = new Set();
	        if (one.document !== two.document) {
	            result.add('document');
	        }
	        if (one.kind !== two.kind) {
	            result.add('kind');
	        }
	        if (one.executionSummary !== two.executionSummary) {
	            result.add('executionSummary');
	        }
	        if ((one.metadata !== undefined || two.metadata !== undefined) && !equalsMetadata(one.metadata, two.metadata)) {
	            result.add('metadata');
	        }
	        if ((one.executionSummary !== undefined || two.executionSummary !== undefined) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
	            result.add('executionSummary');
	        }
	        return result;
	    }
	    NotebookCell.diff = diff;
	    function equalsMetadata(one, other) {
	        if (one === other) {
	            return true;
	        }
	        if (one === null || one === undefined || other === null || other === undefined) {
	            return false;
	        }
	        if (typeof one !== typeof other) {
	            return false;
	        }
	        if (typeof one !== 'object') {
	            return false;
	        }
	        const oneArray = Array.isArray(one);
	        const otherArray = Array.isArray(other);
	        if (oneArray !== otherArray) {
	            return false;
	        }
	        if (oneArray && otherArray) {
	            if (one.length !== other.length) {
	                return false;
	            }
	            for (let i = 0; i < one.length; i++) {
	                if (!equalsMetadata(one[i], other[i])) {
	                    return false;
	                }
	            }
	        }
	        if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
	            const oneKeys = Object.keys(one);
	            const otherKeys = Object.keys(other);
	            if (oneKeys.length !== otherKeys.length) {
	                return false;
	            }
	            oneKeys.sort();
	            otherKeys.sort();
	            if (!equalsMetadata(oneKeys, otherKeys)) {
	                return false;
	            }
	            for (let i = 0; i < oneKeys.length; i++) {
	                const prop = oneKeys[i];
	                if (!equalsMetadata(one[prop], other[prop])) {
	                    return false;
	                }
	            }
	        }
	        return true;
	    }
	})(NotebookCell = exports.NotebookCell || (exports.NotebookCell = {}));
	(function (NotebookDocument) {
	    function create(uri, notebookType, version, cells) {
	        return { uri, notebookType, version, cells };
	    }
	    NotebookDocument.create = create;
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
	    }
	    NotebookDocument.is = is;
	})(exports.NotebookDocument || (exports.NotebookDocument = {}));
	var NotebookDocumentSyncRegistrationType;
	(function (NotebookDocumentSyncRegistrationType) {
	    NotebookDocumentSyncRegistrationType.method = 'notebookDocument/sync';
	    NotebookDocumentSyncRegistrationType.messageDirection = messages_1.MessageDirection.clientToServer;
	    NotebookDocumentSyncRegistrationType.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType.method);
	})(NotebookDocumentSyncRegistrationType = exports.NotebookDocumentSyncRegistrationType || (exports.NotebookDocumentSyncRegistrationType = {}));
	(function (DidOpenNotebookDocumentNotification) {
	    DidOpenNotebookDocumentNotification.method = 'notebookDocument/didOpen';
	    DidOpenNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidOpenNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification.method);
	    DidOpenNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(exports.DidOpenNotebookDocumentNotification || (exports.DidOpenNotebookDocumentNotification = {}));
	(function (NotebookCellArrayChange) {
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === undefined || Is.typedArray(candidate.cells, NotebookCell.is));
	    }
	    NotebookCellArrayChange.is = is;
	    function create(start, deleteCount, cells) {
	        const result = { start, deleteCount };
	        if (cells !== undefined) {
	            result.cells = cells;
	        }
	        return result;
	    }
	    NotebookCellArrayChange.create = create;
	})(exports.NotebookCellArrayChange || (exports.NotebookCellArrayChange = {}));
	(function (DidChangeNotebookDocumentNotification) {
	    DidChangeNotebookDocumentNotification.method = 'notebookDocument/didChange';
	    DidChangeNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidChangeNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification.method);
	    DidChangeNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(exports.DidChangeNotebookDocumentNotification || (exports.DidChangeNotebookDocumentNotification = {}));
	(function (DidSaveNotebookDocumentNotification) {
	    DidSaveNotebookDocumentNotification.method = 'notebookDocument/didSave';
	    DidSaveNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidSaveNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification.method);
	    DidSaveNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(exports.DidSaveNotebookDocumentNotification || (exports.DidSaveNotebookDocumentNotification = {}));
	(function (DidCloseNotebookDocumentNotification) {
	    DidCloseNotebookDocumentNotification.method = 'notebookDocument/didClose';
	    DidCloseNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidCloseNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification.method);
	    DidCloseNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(exports.DidCloseNotebookDocumentNotification || (exports.DidCloseNotebookDocumentNotification = {})); 
} (protocol_notebook));

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.RelativePattern = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeErrorCodes = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.PositionEncodingKind = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.NotebookCellTextDocumentFilter = exports.NotebookDocumentFilter = exports.TextDocumentFilter = void 0;
	exports.TypeHierarchySubtypesRequest = exports.TypeHierarchyPrepareRequest = exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolResolveRequest = void 0;
	exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = exports.InlineValueRefreshRequest = exports.InlineValueRequest = exports.TypeHierarchySupertypesRequest = void 0;
	const messages_1 = messages;
	const vscode_languageserver_types_1 = require$$1;
	const Is = is;
	const protocol_implementation_1 = protocol_implementation;
	Object.defineProperty(exports, "ImplementationRequest", { enumerable: true, get: function () { return protocol_implementation_1.ImplementationRequest; } });
	const protocol_typeDefinition_1 = protocol_typeDefinition;
	Object.defineProperty(exports, "TypeDefinitionRequest", { enumerable: true, get: function () { return protocol_typeDefinition_1.TypeDefinitionRequest; } });
	const protocol_workspaceFolder_1 = protocol_workspaceFolder;
	Object.defineProperty(exports, "WorkspaceFoldersRequest", { enumerable: true, get: function () { return protocol_workspaceFolder_1.WorkspaceFoldersRequest; } });
	Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function () { return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification; } });
	const protocol_configuration_1 = protocol_configuration;
	Object.defineProperty(exports, "ConfigurationRequest", { enumerable: true, get: function () { return protocol_configuration_1.ConfigurationRequest; } });
	const protocol_colorProvider_1 = protocol_colorProvider;
	Object.defineProperty(exports, "DocumentColorRequest", { enumerable: true, get: function () { return protocol_colorProvider_1.DocumentColorRequest; } });
	Object.defineProperty(exports, "ColorPresentationRequest", { enumerable: true, get: function () { return protocol_colorProvider_1.ColorPresentationRequest; } });
	const protocol_foldingRange_1 = protocol_foldingRange;
	Object.defineProperty(exports, "FoldingRangeRequest", { enumerable: true, get: function () { return protocol_foldingRange_1.FoldingRangeRequest; } });
	const protocol_declaration_1 = protocol_declaration;
	Object.defineProperty(exports, "DeclarationRequest", { enumerable: true, get: function () { return protocol_declaration_1.DeclarationRequest; } });
	const protocol_selectionRange_1 = protocol_selectionRange;
	Object.defineProperty(exports, "SelectionRangeRequest", { enumerable: true, get: function () { return protocol_selectionRange_1.SelectionRangeRequest; } });
	const protocol_progress_1 = protocol_progress;
	Object.defineProperty(exports, "WorkDoneProgress", { enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgress; } });
	Object.defineProperty(exports, "WorkDoneProgressCreateRequest", { enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgressCreateRequest; } });
	Object.defineProperty(exports, "WorkDoneProgressCancelNotification", { enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgressCancelNotification; } });
	const protocol_callHierarchy_1 = protocol_callHierarchy;
	Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest; } });
	Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest; } });
	Object.defineProperty(exports, "CallHierarchyPrepareRequest", { enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyPrepareRequest; } });
	const protocol_semanticTokens_1 = protocol_semanticTokens;
	Object.defineProperty(exports, "TokenFormat", { enumerable: true, get: function () { return protocol_semanticTokens_1.TokenFormat; } });
	Object.defineProperty(exports, "SemanticTokensRequest", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRequest; } });
	Object.defineProperty(exports, "SemanticTokensDeltaRequest", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensDeltaRequest; } });
	Object.defineProperty(exports, "SemanticTokensRangeRequest", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRangeRequest; } });
	Object.defineProperty(exports, "SemanticTokensRefreshRequest", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRefreshRequest; } });
	Object.defineProperty(exports, "SemanticTokensRegistrationType", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRegistrationType; } });
	const protocol_showDocument_1 = protocol_showDocument;
	Object.defineProperty(exports, "ShowDocumentRequest", { enumerable: true, get: function () { return protocol_showDocument_1.ShowDocumentRequest; } });
	const protocol_linkedEditingRange_1 = protocol_linkedEditingRange;
	Object.defineProperty(exports, "LinkedEditingRangeRequest", { enumerable: true, get: function () { return protocol_linkedEditingRange_1.LinkedEditingRangeRequest; } });
	const protocol_fileOperations_1 = protocol_fileOperations;
	Object.defineProperty(exports, "FileOperationPatternKind", { enumerable: true, get: function () { return protocol_fileOperations_1.FileOperationPatternKind; } });
	Object.defineProperty(exports, "DidCreateFilesNotification", { enumerable: true, get: function () { return protocol_fileOperations_1.DidCreateFilesNotification; } });
	Object.defineProperty(exports, "WillCreateFilesRequest", { enumerable: true, get: function () { return protocol_fileOperations_1.WillCreateFilesRequest; } });
	Object.defineProperty(exports, "DidRenameFilesNotification", { enumerable: true, get: function () { return protocol_fileOperations_1.DidRenameFilesNotification; } });
	Object.defineProperty(exports, "WillRenameFilesRequest", { enumerable: true, get: function () { return protocol_fileOperations_1.WillRenameFilesRequest; } });
	Object.defineProperty(exports, "DidDeleteFilesNotification", { enumerable: true, get: function () { return protocol_fileOperations_1.DidDeleteFilesNotification; } });
	Object.defineProperty(exports, "WillDeleteFilesRequest", { enumerable: true, get: function () { return protocol_fileOperations_1.WillDeleteFilesRequest; } });
	const protocol_moniker_1 = protocol_moniker;
	Object.defineProperty(exports, "UniquenessLevel", { enumerable: true, get: function () { return protocol_moniker_1.UniquenessLevel; } });
	Object.defineProperty(exports, "MonikerKind", { enumerable: true, get: function () { return protocol_moniker_1.MonikerKind; } });
	Object.defineProperty(exports, "MonikerRequest", { enumerable: true, get: function () { return protocol_moniker_1.MonikerRequest; } });
	const protocol_typeHierarchy_1 = protocol_typeHierarchy;
	Object.defineProperty(exports, "TypeHierarchyPrepareRequest", { enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest; } });
	Object.defineProperty(exports, "TypeHierarchySubtypesRequest", { enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest; } });
	Object.defineProperty(exports, "TypeHierarchySupertypesRequest", { enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest; } });
	const protocol_inlineValue_1 = protocol_inlineValue;
	Object.defineProperty(exports, "InlineValueRequest", { enumerable: true, get: function () { return protocol_inlineValue_1.InlineValueRequest; } });
	Object.defineProperty(exports, "InlineValueRefreshRequest", { enumerable: true, get: function () { return protocol_inlineValue_1.InlineValueRefreshRequest; } });
	const protocol_inlayHint_1 = protocol_inlayHint;
	Object.defineProperty(exports, "InlayHintRequest", { enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintRequest; } });
	Object.defineProperty(exports, "InlayHintResolveRequest", { enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintResolveRequest; } });
	Object.defineProperty(exports, "InlayHintRefreshRequest", { enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintRefreshRequest; } });
	const protocol_diagnostic_1 = protocol_diagnostic;
	Object.defineProperty(exports, "DiagnosticServerCancellationData", { enumerable: true, get: function () { return protocol_diagnostic_1.DiagnosticServerCancellationData; } });
	Object.defineProperty(exports, "DocumentDiagnosticReportKind", { enumerable: true, get: function () { return protocol_diagnostic_1.DocumentDiagnosticReportKind; } });
	Object.defineProperty(exports, "DocumentDiagnosticRequest", { enumerable: true, get: function () { return protocol_diagnostic_1.DocumentDiagnosticRequest; } });
	Object.defineProperty(exports, "WorkspaceDiagnosticRequest", { enumerable: true, get: function () { return protocol_diagnostic_1.WorkspaceDiagnosticRequest; } });
	Object.defineProperty(exports, "DiagnosticRefreshRequest", { enumerable: true, get: function () { return protocol_diagnostic_1.DiagnosticRefreshRequest; } });
	const protocol_notebook_1 = protocol_notebook;
	Object.defineProperty(exports, "NotebookCellKind", { enumerable: true, get: function () { return protocol_notebook_1.NotebookCellKind; } });
	Object.defineProperty(exports, "ExecutionSummary", { enumerable: true, get: function () { return protocol_notebook_1.ExecutionSummary; } });
	Object.defineProperty(exports, "NotebookCell", { enumerable: true, get: function () { return protocol_notebook_1.NotebookCell; } });
	Object.defineProperty(exports, "NotebookDocument", { enumerable: true, get: function () { return protocol_notebook_1.NotebookDocument; } });
	Object.defineProperty(exports, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function () { return protocol_notebook_1.NotebookDocumentSyncRegistrationType; } });
	Object.defineProperty(exports, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function () { return protocol_notebook_1.DidOpenNotebookDocumentNotification; } });
	Object.defineProperty(exports, "NotebookCellArrayChange", { enumerable: true, get: function () { return protocol_notebook_1.NotebookCellArrayChange; } });
	Object.defineProperty(exports, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function () { return protocol_notebook_1.DidChangeNotebookDocumentNotification; } });
	Object.defineProperty(exports, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function () { return protocol_notebook_1.DidSaveNotebookDocumentNotification; } });
	Object.defineProperty(exports, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function () { return protocol_notebook_1.DidCloseNotebookDocumentNotification; } });
	/**
	 * The TextDocumentFilter namespace provides helper functions to work with
	 * {@link TextDocumentFilter} literals.
	 *
	 * @since 3.17.0
	 */
	var TextDocumentFilter;
	(function (TextDocumentFilter) {
	    function is(value) {
	        const candidate = value;
	        return Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern);
	    }
	    TextDocumentFilter.is = is;
	})(TextDocumentFilter = exports.TextDocumentFilter || (exports.TextDocumentFilter = {}));
	/**
	 * The NotebookDocumentFilter namespace provides helper functions to work with
	 * {@link NotebookDocumentFilter} literals.
	 *
	 * @since 3.17.0
	 */
	var NotebookDocumentFilter;
	(function (NotebookDocumentFilter) {
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
	    }
	    NotebookDocumentFilter.is = is;
	})(NotebookDocumentFilter = exports.NotebookDocumentFilter || (exports.NotebookDocumentFilter = {}));
	/**
	 * The NotebookCellTextDocumentFilter namespace provides helper functions to work with
	 * {@link NotebookCellTextDocumentFilter} literals.
	 *
	 * @since 3.17.0
	 */
	var NotebookCellTextDocumentFilter;
	(function (NotebookCellTextDocumentFilter) {
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate)
	            && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook))
	            && (candidate.language === undefined || Is.string(candidate.language));
	    }
	    NotebookCellTextDocumentFilter.is = is;
	})(NotebookCellTextDocumentFilter = exports.NotebookCellTextDocumentFilter || (exports.NotebookCellTextDocumentFilter = {}));
	/**
	 * The DocumentSelector namespace provides helper functions to work with
	 * {@link DocumentSelector}s.
	 */
	var DocumentSelector;
	(function (DocumentSelector) {
	    function is(value) {
	        if (!Array.isArray(value)) {
	            return false;
	        }
	        for (let elem of value) {
	            if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
	                return false;
	            }
	        }
	        return true;
	    }
	    DocumentSelector.is = is;
	})(DocumentSelector = exports.DocumentSelector || (exports.DocumentSelector = {}));
	(function (RegistrationRequest) {
	    RegistrationRequest.method = 'client/registerCapability';
	    RegistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    RegistrationRequest.type = new messages_1.ProtocolRequestType(RegistrationRequest.method);
	})(exports.RegistrationRequest || (exports.RegistrationRequest = {}));
	(function (UnregistrationRequest) {
	    UnregistrationRequest.method = 'client/unregisterCapability';
	    UnregistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    UnregistrationRequest.type = new messages_1.ProtocolRequestType(UnregistrationRequest.method);
	})(exports.UnregistrationRequest || (exports.UnregistrationRequest = {}));
	(function (ResourceOperationKind) {
	    /**
	     * Supports creating new files and folders.
	     */
	    ResourceOperationKind.Create = 'create';
	    /**
	     * Supports renaming existing files and folders.
	     */
	    ResourceOperationKind.Rename = 'rename';
	    /**
	     * Supports deleting existing files and folders.
	     */
	    ResourceOperationKind.Delete = 'delete';
	})(exports.ResourceOperationKind || (exports.ResourceOperationKind = {}));
	(function (FailureHandlingKind) {
	    /**
	     * Applying the workspace change is simply aborted if one of the changes provided
	     * fails. All operations executed before the failing operation stay executed.
	     */
	    FailureHandlingKind.Abort = 'abort';
	    /**
	     * All operations are executed transactional. That means they either all
	     * succeed or no changes at all are applied to the workspace.
	     */
	    FailureHandlingKind.Transactional = 'transactional';
	    /**
	     * If the workspace edit contains only textual file changes they are executed transactional.
	     * If resource changes (create, rename or delete file) are part of the change the failure
	     * handling strategy is abort.
	     */
	    FailureHandlingKind.TextOnlyTransactional = 'textOnlyTransactional';
	    /**
	     * The client tries to undo the operations already executed. But there is no
	     * guarantee that this is succeeding.
	     */
	    FailureHandlingKind.Undo = 'undo';
	})(exports.FailureHandlingKind || (exports.FailureHandlingKind = {}));
	(function (PositionEncodingKind) {
	    /**
	     * Character offsets count UTF-8 code units (e.g. bytes).
	     */
	    PositionEncodingKind.UTF8 = 'utf-8';
	    /**
	     * Character offsets count UTF-16 code units.
	     *
	     * This is the default and must always be supported
	     * by servers
	     */
	    PositionEncodingKind.UTF16 = 'utf-16';
	    /**
	     * Character offsets count UTF-32 code units.
	     *
	     * Implementation note: these are the same as Unicode codepoints,
	     * so this `PositionEncodingKind` may also be used for an
	     * encoding-agnostic representation of character offsets.
	     */
	    PositionEncodingKind.UTF32 = 'utf-32';
	})(exports.PositionEncodingKind || (exports.PositionEncodingKind = {}));
	(function (StaticRegistrationOptions) {
	    function hasId(value) {
	        const candidate = value;
	        return candidate && Is.string(candidate.id) && candidate.id.length > 0;
	    }
	    StaticRegistrationOptions.hasId = hasId;
	})(exports.StaticRegistrationOptions || (exports.StaticRegistrationOptions = {}));
	(function (TextDocumentRegistrationOptions) {
	    function is(value) {
	        const candidate = value;
	        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
	    }
	    TextDocumentRegistrationOptions.is = is;
	})(exports.TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = {}));
	(function (WorkDoneProgressOptions) {
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && (candidate.workDoneProgress === undefined || Is.boolean(candidate.workDoneProgress));
	    }
	    WorkDoneProgressOptions.is = is;
	    function hasWorkDoneProgress(value) {
	        const candidate = value;
	        return candidate && Is.boolean(candidate.workDoneProgress);
	    }
	    WorkDoneProgressOptions.hasWorkDoneProgress = hasWorkDoneProgress;
	})(exports.WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = {}));
	(function (InitializeRequest) {
	    InitializeRequest.method = 'initialize';
	    InitializeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    InitializeRequest.type = new messages_1.ProtocolRequestType(InitializeRequest.method);
	})(exports.InitializeRequest || (exports.InitializeRequest = {}));
	(function (InitializeErrorCodes) {
	    /**
	     * If the protocol version provided by the client can't be handled by the server.
	     *
	     * @deprecated This initialize error got replaced by client capabilities. There is
	     * no version handshake in version 3.0x
	     */
	    InitializeErrorCodes.unknownProtocolVersion = 1;
	})(exports.InitializeErrorCodes || (exports.InitializeErrorCodes = {}));
	(function (InitializedNotification) {
	    InitializedNotification.method = 'initialized';
	    InitializedNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    InitializedNotification.type = new messages_1.ProtocolNotificationType(InitializedNotification.method);
	})(exports.InitializedNotification || (exports.InitializedNotification = {}));
	(function (ShutdownRequest) {
	    ShutdownRequest.method = 'shutdown';
	    ShutdownRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    ShutdownRequest.type = new messages_1.ProtocolRequestType0(ShutdownRequest.method);
	})(exports.ShutdownRequest || (exports.ShutdownRequest = {}));
	(function (ExitNotification) {
	    ExitNotification.method = 'exit';
	    ExitNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    ExitNotification.type = new messages_1.ProtocolNotificationType0(ExitNotification.method);
	})(exports.ExitNotification || (exports.ExitNotification = {}));
	(function (DidChangeConfigurationNotification) {
	    DidChangeConfigurationNotification.method = 'workspace/didChangeConfiguration';
	    DidChangeConfigurationNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidChangeConfigurationNotification.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification.method);
	})(exports.DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = {}));
	(function (MessageType) {
	    /**
	     * An error message.
	     */
	    MessageType.Error = 1;
	    /**
	     * A warning message.
	     */
	    MessageType.Warning = 2;
	    /**
	     * An information message.
	     */
	    MessageType.Info = 3;
	    /**
	     * A log message.
	     */
	    MessageType.Log = 4;
	})(exports.MessageType || (exports.MessageType = {}));
	(function (ShowMessageNotification) {
	    ShowMessageNotification.method = 'window/showMessage';
	    ShowMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
	    ShowMessageNotification.type = new messages_1.ProtocolNotificationType(ShowMessageNotification.method);
	})(exports.ShowMessageNotification || (exports.ShowMessageNotification = {}));
	(function (ShowMessageRequest) {
	    ShowMessageRequest.method = 'window/showMessageRequest';
	    ShowMessageRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    ShowMessageRequest.type = new messages_1.ProtocolRequestType(ShowMessageRequest.method);
	})(exports.ShowMessageRequest || (exports.ShowMessageRequest = {}));
	(function (LogMessageNotification) {
	    LogMessageNotification.method = 'window/logMessage';
	    LogMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
	    LogMessageNotification.type = new messages_1.ProtocolNotificationType(LogMessageNotification.method);
	})(exports.LogMessageNotification || (exports.LogMessageNotification = {}));
	(function (TelemetryEventNotification) {
	    TelemetryEventNotification.method = 'telemetry/event';
	    TelemetryEventNotification.messageDirection = messages_1.MessageDirection.serverToClient;
	    TelemetryEventNotification.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification.method);
	})(exports.TelemetryEventNotification || (exports.TelemetryEventNotification = {}));
	(function (TextDocumentSyncKind) {
	    /**
	     * Documents should not be synced at all.
	     */
	    TextDocumentSyncKind.None = 0;
	    /**
	     * Documents are synced by always sending the full content
	     * of the document.
	     */
	    TextDocumentSyncKind.Full = 1;
	    /**
	     * Documents are synced by sending the full content on open.
	     * After that only incremental updates to the document are
	     * send.
	     */
	    TextDocumentSyncKind.Incremental = 2;
	})(exports.TextDocumentSyncKind || (exports.TextDocumentSyncKind = {}));
	(function (DidOpenTextDocumentNotification) {
	    DidOpenTextDocumentNotification.method = 'textDocument/didOpen';
	    DidOpenTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidOpenTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification.method);
	})(exports.DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = {}));
	(function (TextDocumentContentChangeEvent) {
	    /**
	     * Checks whether the information describes a delta event.
	     */
	    function isIncremental(event) {
	        let candidate = event;
	        return candidate !== undefined && candidate !== null &&
	            typeof candidate.text === 'string' && candidate.range !== undefined &&
	            (candidate.rangeLength === undefined || typeof candidate.rangeLength === 'number');
	    }
	    TextDocumentContentChangeEvent.isIncremental = isIncremental;
	    /**
	     * Checks whether the information describes a full replacement event.
	     */
	    function isFull(event) {
	        let candidate = event;
	        return candidate !== undefined && candidate !== null &&
	            typeof candidate.text === 'string' && candidate.range === undefined && candidate.rangeLength === undefined;
	    }
	    TextDocumentContentChangeEvent.isFull = isFull;
	})(exports.TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = {}));
	(function (DidChangeTextDocumentNotification) {
	    DidChangeTextDocumentNotification.method = 'textDocument/didChange';
	    DidChangeTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidChangeTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification.method);
	})(exports.DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = {}));
	(function (DidCloseTextDocumentNotification) {
	    DidCloseTextDocumentNotification.method = 'textDocument/didClose';
	    DidCloseTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidCloseTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification.method);
	})(exports.DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = {}));
	(function (DidSaveTextDocumentNotification) {
	    DidSaveTextDocumentNotification.method = 'textDocument/didSave';
	    DidSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification.method);
	})(exports.DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = {}));
	(function (TextDocumentSaveReason) {
	    /**
	     * Manually triggered, e.g. by the user pressing save, by starting debugging,
	     * or by an API call.
	     */
	    TextDocumentSaveReason.Manual = 1;
	    /**
	     * Automatic after a delay.
	     */
	    TextDocumentSaveReason.AfterDelay = 2;
	    /**
	     * When the editor lost focus.
	     */
	    TextDocumentSaveReason.FocusOut = 3;
	})(exports.TextDocumentSaveReason || (exports.TextDocumentSaveReason = {}));
	(function (WillSaveTextDocumentNotification) {
	    WillSaveTextDocumentNotification.method = 'textDocument/willSave';
	    WillSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    WillSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification.method);
	})(exports.WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = {}));
	(function (WillSaveTextDocumentWaitUntilRequest) {
	    WillSaveTextDocumentWaitUntilRequest.method = 'textDocument/willSaveWaitUntil';
	    WillSaveTextDocumentWaitUntilRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WillSaveTextDocumentWaitUntilRequest.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest.method);
	})(exports.WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = {}));
	(function (DidChangeWatchedFilesNotification) {
	    DidChangeWatchedFilesNotification.method = 'workspace/didChangeWatchedFiles';
	    DidChangeWatchedFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidChangeWatchedFilesNotification.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification.method);
	})(exports.DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = {}));
	(function (FileChangeType) {
	    /**
	     * The file got created.
	     */
	    FileChangeType.Created = 1;
	    /**
	     * The file got changed.
	     */
	    FileChangeType.Changed = 2;
	    /**
	     * The file got deleted.
	     */
	    FileChangeType.Deleted = 3;
	})(exports.FileChangeType || (exports.FileChangeType = {}));
	(function (RelativePattern) {
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
	    }
	    RelativePattern.is = is;
	})(exports.RelativePattern || (exports.RelativePattern = {}));
	(function (WatchKind) {
	    /**
	     * Interested in create events.
	     */
	    WatchKind.Create = 1;
	    /**
	     * Interested in change events
	     */
	    WatchKind.Change = 2;
	    /**
	     * Interested in delete events
	     */
	    WatchKind.Delete = 4;
	})(exports.WatchKind || (exports.WatchKind = {}));
	(function (PublishDiagnosticsNotification) {
	    PublishDiagnosticsNotification.method = 'textDocument/publishDiagnostics';
	    PublishDiagnosticsNotification.messageDirection = messages_1.MessageDirection.serverToClient;
	    PublishDiagnosticsNotification.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification.method);
	})(exports.PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = {}));
	(function (CompletionTriggerKind) {
	    /**
	     * Completion was triggered by typing an identifier (24x7 code
	     * complete), manual invocation (e.g Ctrl+Space) or via API.
	     */
	    CompletionTriggerKind.Invoked = 1;
	    /**
	     * Completion was triggered by a trigger character specified by
	     * the `triggerCharacters` properties of the `CompletionRegistrationOptions`.
	     */
	    CompletionTriggerKind.TriggerCharacter = 2;
	    /**
	     * Completion was re-triggered as current completion list is incomplete
	     */
	    CompletionTriggerKind.TriggerForIncompleteCompletions = 3;
	})(exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
	(function (CompletionRequest) {
	    CompletionRequest.method = 'textDocument/completion';
	    CompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CompletionRequest.type = new messages_1.ProtocolRequestType(CompletionRequest.method);
	})(exports.CompletionRequest || (exports.CompletionRequest = {}));
	(function (CompletionResolveRequest) {
	    CompletionResolveRequest.method = 'completionItem/resolve';
	    CompletionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CompletionResolveRequest.type = new messages_1.ProtocolRequestType(CompletionResolveRequest.method);
	})(exports.CompletionResolveRequest || (exports.CompletionResolveRequest = {}));
	(function (HoverRequest) {
	    HoverRequest.method = 'textDocument/hover';
	    HoverRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    HoverRequest.type = new messages_1.ProtocolRequestType(HoverRequest.method);
	})(exports.HoverRequest || (exports.HoverRequest = {}));
	(function (SignatureHelpTriggerKind) {
	    /**
	     * Signature help was invoked manually by the user or by a command.
	     */
	    SignatureHelpTriggerKind.Invoked = 1;
	    /**
	     * Signature help was triggered by a trigger character.
	     */
	    SignatureHelpTriggerKind.TriggerCharacter = 2;
	    /**
	     * Signature help was triggered by the cursor moving or by the document content changing.
	     */
	    SignatureHelpTriggerKind.ContentChange = 3;
	})(exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {}));
	(function (SignatureHelpRequest) {
	    SignatureHelpRequest.method = 'textDocument/signatureHelp';
	    SignatureHelpRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SignatureHelpRequest.type = new messages_1.ProtocolRequestType(SignatureHelpRequest.method);
	})(exports.SignatureHelpRequest || (exports.SignatureHelpRequest = {}));
	(function (DefinitionRequest) {
	    DefinitionRequest.method = 'textDocument/definition';
	    DefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DefinitionRequest.type = new messages_1.ProtocolRequestType(DefinitionRequest.method);
	})(exports.DefinitionRequest || (exports.DefinitionRequest = {}));
	(function (ReferencesRequest) {
	    ReferencesRequest.method = 'textDocument/references';
	    ReferencesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    ReferencesRequest.type = new messages_1.ProtocolRequestType(ReferencesRequest.method);
	})(exports.ReferencesRequest || (exports.ReferencesRequest = {}));
	(function (DocumentHighlightRequest) {
	    DocumentHighlightRequest.method = 'textDocument/documentHighlight';
	    DocumentHighlightRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentHighlightRequest.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest.method);
	})(exports.DocumentHighlightRequest || (exports.DocumentHighlightRequest = {}));
	(function (DocumentSymbolRequest) {
	    DocumentSymbolRequest.method = 'textDocument/documentSymbol';
	    DocumentSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentSymbolRequest.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest.method);
	})(exports.DocumentSymbolRequest || (exports.DocumentSymbolRequest = {}));
	(function (CodeActionRequest) {
	    CodeActionRequest.method = 'textDocument/codeAction';
	    CodeActionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CodeActionRequest.type = new messages_1.ProtocolRequestType(CodeActionRequest.method);
	})(exports.CodeActionRequest || (exports.CodeActionRequest = {}));
	(function (CodeActionResolveRequest) {
	    CodeActionResolveRequest.method = 'codeAction/resolve';
	    CodeActionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CodeActionResolveRequest.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest.method);
	})(exports.CodeActionResolveRequest || (exports.CodeActionResolveRequest = {}));
	(function (WorkspaceSymbolRequest) {
	    WorkspaceSymbolRequest.method = 'workspace/symbol';
	    WorkspaceSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WorkspaceSymbolRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest.method);
	})(exports.WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = {}));
	(function (WorkspaceSymbolResolveRequest) {
	    WorkspaceSymbolResolveRequest.method = 'workspaceSymbol/resolve';
	    WorkspaceSymbolResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WorkspaceSymbolResolveRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest.method);
	})(exports.WorkspaceSymbolResolveRequest || (exports.WorkspaceSymbolResolveRequest = {}));
	(function (CodeLensRequest) {
	    CodeLensRequest.method = 'textDocument/codeLens';
	    CodeLensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CodeLensRequest.type = new messages_1.ProtocolRequestType(CodeLensRequest.method);
	})(exports.CodeLensRequest || (exports.CodeLensRequest = {}));
	(function (CodeLensResolveRequest) {
	    CodeLensResolveRequest.method = 'codeLens/resolve';
	    CodeLensResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CodeLensResolveRequest.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest.method);
	})(exports.CodeLensResolveRequest || (exports.CodeLensResolveRequest = {}));
	(function (CodeLensRefreshRequest) {
	    CodeLensRefreshRequest.method = `workspace/codeLens/refresh`;
	    CodeLensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    CodeLensRefreshRequest.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest.method);
	})(exports.CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = {}));
	(function (DocumentLinkRequest) {
	    DocumentLinkRequest.method = 'textDocument/documentLink';
	    DocumentLinkRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentLinkRequest.type = new messages_1.ProtocolRequestType(DocumentLinkRequest.method);
	})(exports.DocumentLinkRequest || (exports.DocumentLinkRequest = {}));
	(function (DocumentLinkResolveRequest) {
	    DocumentLinkResolveRequest.method = 'documentLink/resolve';
	    DocumentLinkResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentLinkResolveRequest.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest.method);
	})(exports.DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = {}));
	(function (DocumentFormattingRequest) {
	    DocumentFormattingRequest.method = 'textDocument/formatting';
	    DocumentFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest.method);
	})(exports.DocumentFormattingRequest || (exports.DocumentFormattingRequest = {}));
	(function (DocumentRangeFormattingRequest) {
	    DocumentRangeFormattingRequest.method = 'textDocument/rangeFormatting';
	    DocumentRangeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentRangeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest.method);
	})(exports.DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = {}));
	(function (DocumentOnTypeFormattingRequest) {
	    DocumentOnTypeFormattingRequest.method = 'textDocument/onTypeFormatting';
	    DocumentOnTypeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentOnTypeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest.method);
	})(exports.DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = {}));
	(function (PrepareSupportDefaultBehavior) {
	    /**
	     * The client's default behavior is to select the identifier
	     * according the to language's syntax rule.
	     */
	    PrepareSupportDefaultBehavior.Identifier = 1;
	})(exports.PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = {}));
	(function (RenameRequest) {
	    RenameRequest.method = 'textDocument/rename';
	    RenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    RenameRequest.type = new messages_1.ProtocolRequestType(RenameRequest.method);
	})(exports.RenameRequest || (exports.RenameRequest = {}));
	(function (PrepareRenameRequest) {
	    PrepareRenameRequest.method = 'textDocument/prepareRename';
	    PrepareRenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    PrepareRenameRequest.type = new messages_1.ProtocolRequestType(PrepareRenameRequest.method);
	})(exports.PrepareRenameRequest || (exports.PrepareRenameRequest = {}));
	(function (ExecuteCommandRequest) {
	    ExecuteCommandRequest.method = 'workspace/executeCommand';
	    ExecuteCommandRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    ExecuteCommandRequest.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest.method);
	})(exports.ExecuteCommandRequest || (exports.ExecuteCommandRequest = {}));
	(function (ApplyWorkspaceEditRequest) {
	    ApplyWorkspaceEditRequest.method = 'workspace/applyEdit';
	    ApplyWorkspaceEditRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    ApplyWorkspaceEditRequest.type = new messages_1.ProtocolRequestType('workspace/applyEdit');
	})(exports.ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = {})); 
} (protocol));

var connection$1 = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(connection$1, "__esModule", { value: true });
connection$1.createProtocolConnection = void 0;
const vscode_jsonrpc_1 = main$2;
function createProtocolConnection(input, output, logger, options) {
    if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
    }
    return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
}
connection$1.createProtocolConnection = createProtocolConnection;

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
	__exportStar(main$2, exports);
	__exportStar(require$$1, exports);
	__exportStar(messages, exports);
	__exportStar(protocol, exports);
	var connection_1 = connection$1;
	Object.defineProperty(exports, "createProtocolConnection", { enumerable: true, get: function () { return connection_1.createProtocolConnection; } });
	(function (LSPErrorCodes) {
	    /**
	    * This is the start range of LSP reserved error codes.
	    * It doesn't denote a real error code.
	    *
	    * @since 3.16.0
	    */
	    LSPErrorCodes.lspReservedErrorRangeStart = -32899;
	    /**
	     * A request failed but it was syntactically correct, e.g the
	     * method name was known and the parameters were valid. The error
	     * message should contain human readable information about why
	     * the request failed.
	     *
	     * @since 3.17.0
	     */
	    LSPErrorCodes.RequestFailed = -32803;
	    /**
	     * The server cancelled the request. This error code should
	     * only be used for requests that explicitly support being
	     * server cancellable.
	     *
	     * @since 3.17.0
	     */
	    LSPErrorCodes.ServerCancelled = -32802;
	    /**
	     * The server detected that the content of a document got
	     * modified outside normal conditions. A server should
	     * NOT send this error code if it detects a content change
	     * in it unprocessed messages. The result even computed
	     * on an older state might still be useful for the client.
	     *
	     * If a client decides that a result is not of any use anymore
	     * the client should cancel the request.
	     */
	    LSPErrorCodes.ContentModified = -32801;
	    /**
	     * The client has canceled a request and a server as detected
	     * the cancel.
	     */
	    LSPErrorCodes.RequestCancelled = -32800;
	    /**
	    * This is the end range of LSP reserved error codes.
	    * It doesn't denote a real error code.
	    *
	    * @since 3.16.0
	    */
	    LSPErrorCodes.lspReservedErrorRangeEnd = -32800;
	})(exports.LSPErrorCodes || (exports.LSPErrorCodes = {})); 
} (api$1));

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createProtocolConnection = void 0;
	const node_1 = node$2;
	__exportStar(node$2, exports);
	__exportStar(api$1, exports);
	function createProtocolConnection(input, output, logger, options) {
	    return (0, node_1.createMessageConnection)(input, output, logger, options);
	}
	exports.createProtocolConnection = createProtocolConnection; 
} (main$3));

var uuid = {};

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(uuid, "__esModule", { value: true });
uuid.generateUuid = uuid.parse = uuid.isUUID = uuid.v4 = uuid.empty = void 0;
class ValueUUID {
    constructor(_value) {
        this._value = _value;
        // empty
    }
    asHex() {
        return this._value;
    }
    equals(other) {
        return this.asHex() === other.asHex();
    }
}
class V4UUID extends ValueUUID {
    constructor() {
        super([
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            '-',
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            '-',
            '4',
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            '-',
            V4UUID._oneOf(V4UUID._timeHighBits),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            '-',
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
        ].join(''));
    }
    static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
    }
    static _randomHex() {
        return V4UUID._oneOf(V4UUID._chars);
    }
}
V4UUID._chars = ['0', '1', '2', '3', '4', '5', '6', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
V4UUID._timeHighBits = ['8', '9', 'a', 'b'];
/**
 * An empty UUID that contains only zeros.
 */
uuid.empty = new ValueUUID('00000000-0000-0000-0000-000000000000');
function v4() {
    return new V4UUID();
}
uuid.v4 = v4;
const _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function isUUID(value) {
    return _UUIDPattern.test(value);
}
uuid.isUUID = isUUID;
/**
 * Parses a UUID that is of the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
 * @param value A uuid string.
 */
function parse(value) {
    if (!isUUID(value)) {
        throw new Error('invalid uuid');
    }
    return new ValueUUID(value);
}
uuid.parse = parse;
function generateUuid() {
    return v4().asHex();
}
uuid.generateUuid = generateUuid;

var progress = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(progress, "__esModule", { value: true });
progress.attachPartialResult = progress.ProgressFeature = progress.attachWorkDone = void 0;
const vscode_languageserver_protocol_1$e = main$3;
const uuid_1 = uuid;
class WorkDoneProgressReporterImpl {
    constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        WorkDoneProgressReporterImpl.Instances.set(this._token, this);
    }
    begin(title, percentage, message, cancellable) {
        let param = {
            kind: 'begin',
            title,
            percentage,
            message,
            cancellable
        };
        this._connection.sendProgress(vscode_languageserver_protocol_1$e.WorkDoneProgress.type, this._token, param);
    }
    report(arg0, arg1) {
        let param = {
            kind: 'report'
        };
        if (typeof arg0 === 'number') {
            param.percentage = arg0;
            if (arg1 !== undefined) {
                param.message = arg1;
            }
        }
        else {
            param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1$e.WorkDoneProgress.type, this._token, param);
    }
    done() {
        WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1$e.WorkDoneProgress.type, this._token, { kind: 'end' });
    }
}
WorkDoneProgressReporterImpl.Instances = new Map();
class WorkDoneProgressServerReporterImpl extends WorkDoneProgressReporterImpl {
    constructor(connection, token) {
        super(connection, token);
        this._source = new vscode_languageserver_protocol_1$e.CancellationTokenSource();
    }
    get token() {
        return this._source.token;
    }
    done() {
        this._source.dispose();
        super.done();
    }
    cancel() {
        this._source.cancel();
    }
}
class NullProgressReporter {
    constructor() {
    }
    begin() {
    }
    report() {
    }
    done() {
    }
}
class NullProgressServerReporter extends NullProgressReporter {
    constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1$e.CancellationTokenSource();
    }
    get token() {
        return this._source.token;
    }
    done() {
        this._source.dispose();
    }
    cancel() {
        this._source.cancel();
    }
}
function attachWorkDone(connection, params) {
    if (params === undefined || params.workDoneToken === undefined) {
        return new NullProgressReporter();
    }
    const token = params.workDoneToken;
    delete params.workDoneToken;
    return new WorkDoneProgressReporterImpl(connection, token);
}
progress.attachWorkDone = attachWorkDone;
const ProgressFeature = (Base) => {
    return class extends Base {
        constructor() {
            super();
            this._progressSupported = false;
        }
        initialize(capabilities) {
            super.initialize(capabilities);
            if (capabilities?.window?.workDoneProgress === true) {
                this._progressSupported = true;
                this.connection.onNotification(vscode_languageserver_protocol_1$e.WorkDoneProgressCancelNotification.type, (params) => {
                    let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
                    if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                        progress.cancel();
                    }
                });
            }
        }
        attachWorkDoneProgress(token) {
            if (token === undefined) {
                return new NullProgressReporter();
            }
            else {
                return new WorkDoneProgressReporterImpl(this.connection, token);
            }
        }
        createWorkDoneProgress() {
            if (this._progressSupported) {
                const token = (0, uuid_1.generateUuid)();
                return this.connection.sendRequest(vscode_languageserver_protocol_1$e.WorkDoneProgressCreateRequest.type, { token }).then(() => {
                    const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
                    return result;
                });
            }
            else {
                return Promise.resolve(new NullProgressServerReporter());
            }
        }
    };
};
progress.ProgressFeature = ProgressFeature;
var ResultProgress;
(function (ResultProgress) {
    ResultProgress.type = new vscode_languageserver_protocol_1$e.ProgressType();
})(ResultProgress || (ResultProgress = {}));
class ResultProgressReporterImpl {
    constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
    }
    report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
    }
}
function attachPartialResult(connection, params) {
    if (params === undefined || params.partialResultToken === undefined) {
        return undefined;
    }
    const token = params.partialResultToken;
    delete params.partialResultToken;
    return new ResultProgressReporterImpl(connection, token);
}
progress.attachPartialResult = attachPartialResult;

var configuration = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(configuration, "__esModule", { value: true });
configuration.ConfigurationFeature = void 0;
const vscode_languageserver_protocol_1$d = main$3;
const Is = is$2;
const ConfigurationFeature = (Base) => {
    return class extends Base {
        getConfiguration(arg) {
            if (!arg) {
                return this._getConfiguration({});
            }
            else if (Is.string(arg)) {
                return this._getConfiguration({ section: arg });
            }
            else {
                return this._getConfiguration(arg);
            }
        }
        _getConfiguration(arg) {
            let params = {
                items: Array.isArray(arg) ? arg : [arg]
            };
            return this.connection.sendRequest(vscode_languageserver_protocol_1$d.ConfigurationRequest.type, params).then((result) => {
                if (Array.isArray(result)) {
                    return Array.isArray(arg) ? result : result[0];
                }
                else {
                    return Array.isArray(arg) ? [] : null;
                }
            });
        }
    };
};
configuration.ConfigurationFeature = ConfigurationFeature;

var workspaceFolder = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(workspaceFolder, "__esModule", { value: true });
workspaceFolder.WorkspaceFoldersFeature = void 0;
const vscode_languageserver_protocol_1$c = main$3;
const WorkspaceFoldersFeature = (Base) => {
    return class extends Base {
        constructor() {
            super();
            this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
            super.initialize(capabilities);
            let workspaceCapabilities = capabilities.workspace;
            if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
                this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1$c.Emitter();
                this.connection.onNotification(vscode_languageserver_protocol_1$c.DidChangeWorkspaceFoldersNotification.type, (params) => {
                    this._onDidChangeWorkspaceFolders.fire(params.event);
                });
            }
        }
        fillServerCapabilities(capabilities) {
            super.fillServerCapabilities(capabilities);
            const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
            this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === 'string';
        }
        getWorkspaceFolders() {
            return this.connection.sendRequest(vscode_languageserver_protocol_1$c.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
            if (!this._onDidChangeWorkspaceFolders) {
                throw new Error('Client doesn\'t support sending workspace folder change events.');
            }
            if (!this._notificationIsAutoRegistered && !this._unregistration) {
                this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1$c.DidChangeWorkspaceFoldersNotification.type);
            }
            return this._onDidChangeWorkspaceFolders.event;
        }
    };
};
workspaceFolder.WorkspaceFoldersFeature = WorkspaceFoldersFeature;

var callHierarchy = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(callHierarchy, "__esModule", { value: true });
callHierarchy.CallHierarchyFeature = void 0;
const vscode_languageserver_protocol_1$b = main$3;
const CallHierarchyFeature = (Base) => {
    return class extends Base {
        get callHierarchy() {
            return {
                onPrepare: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1$b.CallHierarchyPrepareRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
                    });
                },
                onIncomingCalls: (handler) => {
                    const type = vscode_languageserver_protocol_1$b.CallHierarchyIncomingCallsRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
                onOutgoingCalls: (handler) => {
                    const type = vscode_languageserver_protocol_1$b.CallHierarchyOutgoingCallsRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                }
            };
        }
    };
};
callHierarchy.CallHierarchyFeature = CallHierarchyFeature;

var semanticTokens = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(semanticTokens, "__esModule", { value: true });
semanticTokens.SemanticTokensBuilder = semanticTokens.SemanticTokensDiff = semanticTokens.SemanticTokensFeature = void 0;
const vscode_languageserver_protocol_1$a = main$3;
const SemanticTokensFeature = (Base) => {
    return class extends Base {
        get semanticTokens() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1$a.SemanticTokensRefreshRequest.type);
                },
                on: (handler) => {
                    const type = vscode_languageserver_protocol_1$a.SemanticTokensRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
                onDelta: (handler) => {
                    const type = vscode_languageserver_protocol_1$a.SemanticTokensDeltaRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
                onRange: (handler) => {
                    const type = vscode_languageserver_protocol_1$a.SemanticTokensRangeRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                }
            };
        }
    };
};
semanticTokens.SemanticTokensFeature = SemanticTokensFeature;
class SemanticTokensDiff {
    constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
    }
    computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
            startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
            let originalEndIndex = originalLength - 1;
            let modifiedEndIndex = modifiedLength - 1;
            while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
                originalEndIndex--;
                modifiedEndIndex--;
            }
            // if one moved behind the start index move them forward again
            if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
                originalEndIndex++;
                modifiedEndIndex++;
            }
            const deleteCount = originalEndIndex - startIndex + 1;
            const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
            // If we moved behind the start index we could have missed a simple delete.
            if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
                return [
                    { start: startIndex, deleteCount: deleteCount - 1 }
                ];
            }
            else {
                return [
                    { start: startIndex, deleteCount, data: newData }
                ];
            }
        }
        else if (startIndex < modifiedLength) {
            return [
                { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
            ];
        }
        else if (startIndex < originalLength) {
            return [
                { start: startIndex, deleteCount: originalLength - startIndex }
            ];
        }
        else {
            // The two arrays are the same.
            return [];
        }
    }
}
semanticTokens.SemanticTokensDiff = SemanticTokensDiff;
class SemanticTokensBuilder {
    constructor() {
        this._prevData = undefined;
        this.initialize();
    }
    initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataLen = 0;
    }
    push(line, char, length, tokenType, tokenModifiers) {
        let pushLine = line;
        let pushChar = char;
        if (this._dataLen > 0) {
            pushLine -= this._prevLine;
            if (pushLine === 0) {
                pushChar -= this._prevChar;
            }
        }
        this._data[this._dataLen++] = pushLine;
        this._data[this._dataLen++] = pushChar;
        this._data[this._dataLen++] = length;
        this._data[this._dataLen++] = tokenType;
        this._data[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
    }
    get id() {
        return this._id.toString();
    }
    previousResult(id) {
        if (this.id === id) {
            this._prevData = this._data;
        }
        this.initialize();
    }
    build() {
        this._prevData = undefined;
        return {
            resultId: this.id,
            data: this._data
        };
    }
    canBuildEdits() {
        return this._prevData !== undefined;
    }
    buildEdits() {
        if (this._prevData !== undefined) {
            return {
                resultId: this.id,
                edits: (new SemanticTokensDiff(this._prevData, this._data)).computeDiff()
            };
        }
        else {
            return this.build();
        }
    }
}
semanticTokens.SemanticTokensBuilder = SemanticTokensBuilder;

var showDocument = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(showDocument, "__esModule", { value: true });
showDocument.ShowDocumentFeature = void 0;
const vscode_languageserver_protocol_1$9 = main$3;
const ShowDocumentFeature = (Base) => {
    return class extends Base {
        showDocument(params) {
            return this.connection.sendRequest(vscode_languageserver_protocol_1$9.ShowDocumentRequest.type, params);
        }
    };
};
showDocument.ShowDocumentFeature = ShowDocumentFeature;

var fileOperations = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(fileOperations, "__esModule", { value: true });
fileOperations.FileOperationsFeature = void 0;
const vscode_languageserver_protocol_1$8 = main$3;
const FileOperationsFeature = (Base) => {
    return class extends Base {
        onDidCreateFiles(handler) {
            return this.connection.onNotification(vscode_languageserver_protocol_1$8.DidCreateFilesNotification.type, (params) => {
                handler(params);
            });
        }
        onDidRenameFiles(handler) {
            return this.connection.onNotification(vscode_languageserver_protocol_1$8.DidRenameFilesNotification.type, (params) => {
                handler(params);
            });
        }
        onDidDeleteFiles(handler) {
            return this.connection.onNotification(vscode_languageserver_protocol_1$8.DidDeleteFilesNotification.type, (params) => {
                handler(params);
            });
        }
        onWillCreateFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1$8.WillCreateFilesRequest.type, (params, cancel) => {
                return handler(params, cancel);
            });
        }
        onWillRenameFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1$8.WillRenameFilesRequest.type, (params, cancel) => {
                return handler(params, cancel);
            });
        }
        onWillDeleteFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1$8.WillDeleteFilesRequest.type, (params, cancel) => {
                return handler(params, cancel);
            });
        }
    };
};
fileOperations.FileOperationsFeature = FileOperationsFeature;

var linkedEditingRange = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(linkedEditingRange, "__esModule", { value: true });
linkedEditingRange.LinkedEditingRangeFeature = void 0;
const vscode_languageserver_protocol_1$7 = main$3;
const LinkedEditingRangeFeature = (Base) => {
    return class extends Base {
        onLinkedEditingRange(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1$7.LinkedEditingRangeRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
            });
        }
    };
};
linkedEditingRange.LinkedEditingRangeFeature = LinkedEditingRangeFeature;

var typeHierarchy = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(typeHierarchy, "__esModule", { value: true });
typeHierarchy.TypeHierarchyFeature = void 0;
const vscode_languageserver_protocol_1$6 = main$3;
const TypeHierarchyFeature = (Base) => {
    return class extends Base {
        get typeHierarchy() {
            return {
                onPrepare: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1$6.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
                    });
                },
                onSupertypes: (handler) => {
                    const type = vscode_languageserver_protocol_1$6.TypeHierarchySupertypesRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
                onSubtypes: (handler) => {
                    const type = vscode_languageserver_protocol_1$6.TypeHierarchySubtypesRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                }
            };
        }
    };
};
typeHierarchy.TypeHierarchyFeature = TypeHierarchyFeature;

var inlineValue = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(inlineValue, "__esModule", { value: true });
inlineValue.InlineValueFeature = void 0;
const vscode_languageserver_protocol_1$5 = main$3;
const InlineValueFeature = (Base) => {
    return class extends Base {
        get inlineValue() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1$5.InlineValueRefreshRequest.type);
                },
                on: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1$5.InlineValueRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params));
                    });
                }
            };
        }
    };
};
inlineValue.InlineValueFeature = InlineValueFeature;

var inlayHint = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(inlayHint, "__esModule", { value: true });
inlayHint.InlayHintFeature = void 0;
const vscode_languageserver_protocol_1$4 = main$3;
const InlayHintFeature = (Base) => {
    return class extends Base {
        get inlayHint() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1$4.InlayHintRefreshRequest.type);
                },
                on: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1$4.InlayHintRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params));
                    });
                },
                resolve: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1$4.InlayHintResolveRequest.type, (params, cancel) => {
                        return handler(params, cancel);
                    });
                }
            };
        }
    };
};
inlayHint.InlayHintFeature = InlayHintFeature;

var diagnostic = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(diagnostic, "__esModule", { value: true });
diagnostic.DiagnosticFeature = void 0;
const vscode_languageserver_protocol_1$3 = main$3;
const DiagnosticFeature = (Base) => {
    return class extends Base {
        get diagnostics() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1$3.DiagnosticRefreshRequest.type);
                },
                on: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1$3.DocumentDiagnosticRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1$3.DocumentDiagnosticRequest.partialResult, params));
                    });
                },
                onWorkspace: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1$3.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1$3.WorkspaceDiagnosticRequest.partialResult, params));
                    });
                }
            };
        }
    };
};
diagnostic.DiagnosticFeature = DiagnosticFeature;

var notebook = {};

var textDocuments = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(textDocuments, "__esModule", { value: true });
textDocuments.TextDocuments = void 0;
const vscode_languageserver_protocol_1$2 = main$3;
/**
 * A manager for simple text documents. The manager requires at a minimum that
 * the server registered for the following text document sync events in the
 * initialize handler or via dynamic registration:
 *
 * - open and close events.
 * - change events.
 *
 * Registering for save and will save events is optional.
 */
class TextDocuments {
    /**
     * Create a new text document manager.
     */
    constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1$2.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1$2.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1$2.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1$2.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1$2.Emitter();
    }
    /**
     * An event that fires when a text document managed by this manager
     * has been opened.
     */
    get onDidOpen() {
        return this._onDidOpen.event;
    }
    /**
     * An event that fires when a text document managed by this manager
     * has been opened or the content changes.
     */
    get onDidChangeContent() {
        return this._onDidChangeContent.event;
    }
    /**
     * An event that fires when a text document managed by this manager
     * will be saved.
     */
    get onWillSave() {
        return this._onWillSave.event;
    }
    /**
     * Sets a handler that will be called if a participant wants to provide
     * edits during a text document save.
     */
    onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
    }
    /**
     * An event that fires when a text document managed by this manager
     * has been saved.
     */
    get onDidSave() {
        return this._onDidSave.event;
    }
    /**
     * An event that fires when a text document managed by this manager
     * has been closed.
     */
    get onDidClose() {
        return this._onDidClose.event;
    }
    /**
     * Returns the document for the given URI. Returns undefined if
     * the document is not managed by this instance.
     *
     * @param uri The text document's URI to retrieve.
     * @return the text document or `undefined`.
     */
    get(uri) {
        return this._syncedDocuments.get(uri);
    }
    /**
     * Returns all text documents managed by this instance.
     *
     * @return all text documents.
     */
    all() {
        return Array.from(this._syncedDocuments.values());
    }
    /**
     * Returns the URIs of all text documents managed by this instance.
     *
     * @return the URI's of all text documents.
     */
    keys() {
        return Array.from(this._syncedDocuments.keys());
    }
    /**
     * Listens for `low level` notification on the given connection to
     * update the text documents managed by this instance.
     *
     * Please note that the connection only provides handlers not an event model. Therefore
     * listening on a connection will overwrite the following handlers on a connection:
     * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
     * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
     *
     * Use the corresponding events on the TextDocuments instance instead.
     *
     * @param connection The connection to listen on.
     */
    listen(connection) {
        connection.__textDocumentSync = vscode_languageserver_protocol_1$2.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection.onDidOpenTextDocument((event) => {
            const td = event.textDocument;
            const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
            this._syncedDocuments.set(td.uri, document);
            const toFire = Object.freeze({ document });
            this._onDidOpen.fire(toFire);
            this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection.onDidChangeTextDocument((event) => {
            const td = event.textDocument;
            const changes = event.contentChanges;
            if (changes.length === 0) {
                return;
            }
            const { version } = td;
            if (version === null || version === undefined) {
                throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
            }
            let syncedDocument = this._syncedDocuments.get(td.uri);
            if (syncedDocument !== undefined) {
                syncedDocument = this._configuration.update(syncedDocument, changes, version);
                this._syncedDocuments.set(td.uri, syncedDocument);
                this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
            }
        }));
        disposables.push(connection.onDidCloseTextDocument((event) => {
            let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
            if (syncedDocument !== undefined) {
                this._syncedDocuments.delete(event.textDocument.uri);
                this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
            }
        }));
        disposables.push(connection.onWillSaveTextDocument((event) => {
            let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
            if (syncedDocument !== undefined) {
                this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
            }
        }));
        disposables.push(connection.onWillSaveTextDocumentWaitUntil((event, token) => {
            let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
            if (syncedDocument !== undefined && this._willSaveWaitUntil) {
                return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
            }
            else {
                return [];
            }
        }));
        disposables.push(connection.onDidSaveTextDocument((event) => {
            let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
            if (syncedDocument !== undefined) {
                this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
            }
        }));
        return vscode_languageserver_protocol_1$2.Disposable.create(() => { disposables.forEach(disposable => disposable.dispose()); });
    }
}
textDocuments.TextDocuments = TextDocuments;

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(notebook, "__esModule", { value: true });
notebook.NotebookDocuments = notebook.NotebookSyncFeature = void 0;
const vscode_languageserver_protocol_1$1 = main$3;
const textDocuments_1 = textDocuments;
const NotebookSyncFeature = (Base) => {
    return class extends Base {
        get synchronization() {
            return {
                onDidOpenNotebookDocument: (handler) => {
                    return this.connection.onNotification(vscode_languageserver_protocol_1$1.DidOpenNotebookDocumentNotification.type, (params) => {
                        handler(params);
                    });
                },
                onDidChangeNotebookDocument: (handler) => {
                    return this.connection.onNotification(vscode_languageserver_protocol_1$1.DidChangeNotebookDocumentNotification.type, (params) => {
                        handler(params);
                    });
                },
                onDidSaveNotebookDocument: (handler) => {
                    return this.connection.onNotification(vscode_languageserver_protocol_1$1.DidSaveNotebookDocumentNotification.type, (params) => {
                        handler(params);
                    });
                },
                onDidCloseNotebookDocument: (handler) => {
                    return this.connection.onNotification(vscode_languageserver_protocol_1$1.DidCloseNotebookDocumentNotification.type, (params) => {
                        handler(params);
                    });
                }
            };
        }
    };
};
notebook.NotebookSyncFeature = NotebookSyncFeature;
class CellTextDocumentConnection {
    onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1$1.Disposable.create(() => { this.openHandler = undefined; });
    }
    openTextDocument(params) {
        this.openHandler && this.openHandler(params);
    }
    onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1$1.Disposable.create(() => { this.changeHandler = handler; });
    }
    changeTextDocument(params) {
        this.changeHandler && this.changeHandler(params);
    }
    onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1$1.Disposable.create(() => { this.closeHandler = undefined; });
    }
    closeTextDocument(params) {
        this.closeHandler && this.closeHandler(params);
    }
    onWillSaveTextDocument() {
        return CellTextDocumentConnection.NULL_DISPOSE;
    }
    onWillSaveTextDocumentWaitUntil() {
        return CellTextDocumentConnection.NULL_DISPOSE;
    }
    onDidSaveTextDocument() {
        return CellTextDocumentConnection.NULL_DISPOSE;
    }
}
CellTextDocumentConnection.NULL_DISPOSE = Object.freeze({ dispose: () => { } });
class NotebookDocuments {
    constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
            this._cellTextDocuments = configurationOrTextDocuments;
        }
        else {
            this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = new Map();
        this.notebookCellMap = new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1$1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1$1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1$1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1$1.Emitter();
    }
    get cellTextDocuments() {
        return this._cellTextDocuments;
    }
    getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
    }
    getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
    }
    getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
    }
    findNotebookDocumentForCell(cell) {
        const key = typeof cell === 'string' ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
    }
    get onDidOpen() {
        return this._onDidOpen.event;
    }
    get onDidSave() {
        return this._onDidSave.event;
    }
    get onDidChange() {
        return this._onDidChange.event;
    }
    get onDidClose() {
        return this._onDidClose.event;
    }
    /**
     * Listens for `low level` notification on the given connection to
     * update the notebook documents managed by this instance.
     *
     * Please note that the connection only provides handlers not an event model. Therefore
     * listening on a connection will overwrite the following handlers on a connection:
     * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
     *  and `onDidCloseNotebookDocument`.
     *
     * @param connection The connection to listen on.
     */
    listen(connection) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection.notebooks.synchronization.onDidOpenNotebookDocument((params) => {
            this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
            for (const cellTextDocument of params.cellTextDocuments) {
                cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
            }
            this.updateCellMap(params.notebookDocument);
            this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection.notebooks.synchronization.onDidChangeNotebookDocument((params) => {
            const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
            if (notebookDocument === undefined) {
                return;
            }
            notebookDocument.version = params.notebookDocument.version;
            const oldMetadata = notebookDocument.metadata;
            let metadataChanged = false;
            const change = params.change;
            if (change.metadata !== undefined) {
                metadataChanged = true;
                notebookDocument.metadata = change.metadata;
            }
            const opened = [];
            const closed = [];
            const data = [];
            const text = [];
            if (change.cells !== undefined) {
                const changedCells = change.cells;
                if (changedCells.structure !== undefined) {
                    const array = changedCells.structure.array;
                    notebookDocument.cells.splice(array.start, array.deleteCount, ...(array.cells !== undefined ? array.cells : []));
                    // Additional open cell text documents.
                    if (changedCells.structure.didOpen !== undefined) {
                        for (const open of changedCells.structure.didOpen) {
                            cellTextDocumentConnection.openTextDocument({ textDocument: open });
                            opened.push(open.uri);
                        }
                    }
                    // Additional closed cell test documents.
                    if (changedCells.structure.didClose) {
                        for (const close of changedCells.structure.didClose) {
                            cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                            closed.push(close.uri);
                        }
                    }
                }
                if (changedCells.data !== undefined) {
                    const cellUpdates = new Map(changedCells.data.map(cell => [cell.document, cell]));
                    for (let i = 0; i <= notebookDocument.cells.length; i++) {
                        const change = cellUpdates.get(notebookDocument.cells[i].document);
                        if (change !== undefined) {
                            const old = notebookDocument.cells.splice(i, 1, change);
                            data.push({ old: old[0], new: change });
                            cellUpdates.delete(change.document);
                            if (cellUpdates.size === 0) {
                                break;
                            }
                        }
                    }
                }
                if (changedCells.textContent !== undefined) {
                    for (const cellTextDocument of changedCells.textContent) {
                        cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                        text.push(cellTextDocument.document.uri);
                    }
                }
            }
            // Update internal data structure.
            this.updateCellMap(notebookDocument);
            const changeEvent = { notebookDocument };
            if (metadataChanged) {
                changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
            }
            const added = [];
            for (const open of opened) {
                added.push(this.getNotebookCell(open));
            }
            const removed = [];
            for (const close of closed) {
                removed.push(this.getNotebookCell(close));
            }
            const textContent = [];
            for (const change of text) {
                textContent.push(this.getNotebookCell(change));
            }
            if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
                changeEvent.cells = { added, removed, changed: { data, textContent } };
            }
            if (changeEvent.metadata !== undefined || changeEvent.cells !== undefined) {
                this._onDidChange.fire(changeEvent);
            }
        }));
        disposables.push(connection.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
            const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
            if (notebookDocument === undefined) {
                return;
            }
            this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection.notebooks.synchronization.onDidCloseNotebookDocument((params) => {
            const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
            if (notebookDocument === undefined) {
                return;
            }
            this._onDidClose.fire(notebookDocument);
            for (const cellTextDocument of params.cellTextDocuments) {
                cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
            }
            this.notebookDocuments.delete(params.notebookDocument.uri);
            for (const cell of notebookDocument.cells) {
                this.notebookCellMap.delete(cell.document);
            }
        }));
        return vscode_languageserver_protocol_1$1.Disposable.create(() => { disposables.forEach(disposable => disposable.dispose()); });
    }
    updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
            this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
    }
}
notebook.NotebookDocuments = NotebookDocuments;

var moniker = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(moniker, "__esModule", { value: true });
moniker.MonikerFeature = void 0;
const vscode_languageserver_protocol_1 = main$3;
const MonikerFeature = (Base) => {
    return class extends Base {
        get moniker() {
            return {
                on: (handler) => {
                    const type = vscode_languageserver_protocol_1.MonikerRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
            };
        }
    };
};
moniker.MonikerFeature = MonikerFeature;

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createConnection = exports.combineFeatures = exports.combineNotebooksFeatures = exports.combineLanguagesFeatures = exports.combineWorkspaceFeatures = exports.combineWindowFeatures = exports.combineClientFeatures = exports.combineTracerFeatures = exports.combineTelemetryFeatures = exports.combineConsoleFeatures = exports._NotebooksImpl = exports._LanguagesImpl = exports.BulkUnregistration = exports.BulkRegistration = exports.ErrorMessageTracker = void 0;
	const vscode_languageserver_protocol_1 = main$3;
	const Is = is$2;
	const UUID = uuid;
	const progress_1 = progress;
	const configuration_1 = configuration;
	const workspaceFolder_1 = workspaceFolder;
	const callHierarchy_1 = callHierarchy;
	const semanticTokens_1 = semanticTokens;
	const showDocument_1 = showDocument;
	const fileOperations_1 = fileOperations;
	const linkedEditingRange_1 = linkedEditingRange;
	const typeHierarchy_1 = typeHierarchy;
	const inlineValue_1 = inlineValue;
	const inlayHint_1 = inlayHint;
	const diagnostic_1 = diagnostic;
	const notebook_1 = notebook;
	const moniker_1 = moniker;
	function null2Undefined(value) {
	    if (value === null) {
	        return undefined;
	    }
	    return value;
	}
	/**
	 * Helps tracking error message. Equal occurrences of the same
	 * message are only stored once. This class is for example
	 * useful if text documents are validated in a loop and equal
	 * error message should be folded into one.
	 */
	class ErrorMessageTracker {
	    constructor() {
	        this._messages = Object.create(null);
	    }
	    /**
	     * Add a message to the tracker.
	     *
	     * @param message The message to add.
	     */
	    add(message) {
	        let count = this._messages[message];
	        if (!count) {
	            count = 0;
	        }
	        count++;
	        this._messages[message] = count;
	    }
	    /**
	     * Send all tracked messages to the connection's window.
	     *
	     * @param connection The connection established between client and server.
	     */
	    sendErrors(connection) {
	        Object.keys(this._messages).forEach(message => {
	            connection.window.showErrorMessage(message);
	        });
	    }
	}
	exports.ErrorMessageTracker = ErrorMessageTracker;
	class RemoteConsoleImpl {
	    constructor() {
	    }
	    rawAttach(connection) {
	        this._rawConnection = connection;
	    }
	    attach(connection) {
	        this._connection = connection;
	    }
	    get connection() {
	        if (!this._connection) {
	            throw new Error('Remote is not attached to a connection yet.');
	        }
	        return this._connection;
	    }
	    fillServerCapabilities(_capabilities) {
	    }
	    initialize(_capabilities) {
	    }
	    error(message) {
	        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
	    }
	    warn(message) {
	        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
	    }
	    info(message) {
	        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
	    }
	    log(message) {
	        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
	    }
	    send(type, message) {
	        if (this._rawConnection) {
	            this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
	                (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
	            });
	        }
	    }
	}
	class _RemoteWindowImpl {
	    constructor() {
	    }
	    attach(connection) {
	        this._connection = connection;
	    }
	    get connection() {
	        if (!this._connection) {
	            throw new Error('Remote is not attached to a connection yet.');
	        }
	        return this._connection;
	    }
	    initialize(_capabilities) {
	    }
	    fillServerCapabilities(_capabilities) {
	    }
	    showErrorMessage(message, ...actions) {
	        let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
	        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
	    }
	    showWarningMessage(message, ...actions) {
	        let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
	        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
	    }
	    showInformationMessage(message, ...actions) {
	        let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
	        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
	    }
	}
	const RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
	(function (BulkRegistration) {
	    /**
	     * Creates a new bulk registration.
	     * @return an empty bulk registration.
	     */
	    function create() {
	        return new BulkRegistrationImpl();
	    }
	    BulkRegistration.create = create;
	})(exports.BulkRegistration || (exports.BulkRegistration = {}));
	class BulkRegistrationImpl {
	    constructor() {
	        this._registrations = [];
	        this._registered = new Set();
	    }
	    add(type, registerOptions) {
	        const method = Is.string(type) ? type : type.method;
	        if (this._registered.has(method)) {
	            throw new Error(`${method} is already added to this registration`);
	        }
	        const id = UUID.generateUuid();
	        this._registrations.push({
	            id: id,
	            method: method,
	            registerOptions: registerOptions || {}
	        });
	        this._registered.add(method);
	    }
	    asRegistrationParams() {
	        return {
	            registrations: this._registrations
	        };
	    }
	}
	(function (BulkUnregistration) {
	    function create() {
	        return new BulkUnregistrationImpl(undefined, []);
	    }
	    BulkUnregistration.create = create;
	})(exports.BulkUnregistration || (exports.BulkUnregistration = {}));
	class BulkUnregistrationImpl {
	    constructor(_connection, unregistrations) {
	        this._connection = _connection;
	        this._unregistrations = new Map();
	        unregistrations.forEach(unregistration => {
	            this._unregistrations.set(unregistration.method, unregistration);
	        });
	    }
	    get isAttached() {
	        return !!this._connection;
	    }
	    attach(connection) {
	        this._connection = connection;
	    }
	    add(unregistration) {
	        this._unregistrations.set(unregistration.method, unregistration);
	    }
	    dispose() {
	        let unregistrations = [];
	        for (let unregistration of this._unregistrations.values()) {
	            unregistrations.push(unregistration);
	        }
	        let params = {
	            unregisterations: unregistrations
	        };
	        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
	            this._connection.console.info(`Bulk unregistration failed.`);
	        });
	    }
	    disposeSingle(arg) {
	        const method = Is.string(arg) ? arg : arg.method;
	        const unregistration = this._unregistrations.get(method);
	        if (!unregistration) {
	            return false;
	        }
	        let params = {
	            unregisterations: [unregistration]
	        };
	        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
	            this._unregistrations.delete(method);
	        }, (_error) => {
	            this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
	        });
	        return true;
	    }
	}
	class RemoteClientImpl {
	    attach(connection) {
	        this._connection = connection;
	    }
	    get connection() {
	        if (!this._connection) {
	            throw new Error('Remote is not attached to a connection yet.');
	        }
	        return this._connection;
	    }
	    initialize(_capabilities) {
	    }
	    fillServerCapabilities(_capabilities) {
	    }
	    register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
	        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
	            return this.registerMany(typeOrRegistrations);
	        }
	        else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
	            return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
	        }
	        else {
	            return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
	        }
	    }
	    registerSingle1(unregistration, type, registerOptions) {
	        const method = Is.string(type) ? type : type.method;
	        const id = UUID.generateUuid();
	        let params = {
	            registrations: [{ id, method, registerOptions: registerOptions || {} }]
	        };
	        if (!unregistration.isAttached) {
	            unregistration.attach(this.connection);
	        }
	        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
	            unregistration.add({ id: id, method: method });
	            return unregistration;
	        }, (_error) => {
	            this.connection.console.info(`Registering request handler for ${method} failed.`);
	            return Promise.reject(_error);
	        });
	    }
	    registerSingle2(type, registerOptions) {
	        const method = Is.string(type) ? type : type.method;
	        const id = UUID.generateUuid();
	        let params = {
	            registrations: [{ id, method, registerOptions: registerOptions || {} }]
	        };
	        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
	            return vscode_languageserver_protocol_1.Disposable.create(() => {
	                this.unregisterSingle(id, method).catch(() => { this.connection.console.info(`Un-registering capability with id ${id} failed.`); });
	            });
	        }, (_error) => {
	            this.connection.console.info(`Registering request handler for ${method} failed.`);
	            return Promise.reject(_error);
	        });
	    }
	    unregisterSingle(id, method) {
	        let params = {
	            unregisterations: [{ id, method }]
	        };
	        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
	            this.connection.console.info(`Un-registering request handler for ${id} failed.`);
	        });
	    }
	    registerMany(registrations) {
	        let params = registrations.asRegistrationParams();
	        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
	            return new BulkUnregistrationImpl(this._connection, params.registrations.map(registration => { return { id: registration.id, method: registration.method }; }));
	        }, (_error) => {
	            this.connection.console.info(`Bulk registration failed.`);
	            return Promise.reject(_error);
	        });
	    }
	}
	class _RemoteWorkspaceImpl {
	    constructor() {
	    }
	    attach(connection) {
	        this._connection = connection;
	    }
	    get connection() {
	        if (!this._connection) {
	            throw new Error('Remote is not attached to a connection yet.');
	        }
	        return this._connection;
	    }
	    initialize(_capabilities) {
	    }
	    fillServerCapabilities(_capabilities) {
	    }
	    applyEdit(paramOrEdit) {
	        function isApplyWorkspaceEditParams(value) {
	            return value && !!value.edit;
	        }
	        let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
	        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
	    }
	}
	const RemoteWorkspaceImpl = (0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl)));
	class TracerImpl {
	    constructor() {
	        this._trace = vscode_languageserver_protocol_1.Trace.Off;
	    }
	    attach(connection) {
	        this._connection = connection;
	    }
	    get connection() {
	        if (!this._connection) {
	            throw new Error('Remote is not attached to a connection yet.');
	        }
	        return this._connection;
	    }
	    initialize(_capabilities) {
	    }
	    fillServerCapabilities(_capabilities) {
	    }
	    set trace(value) {
	        this._trace = value;
	    }
	    log(message, verbose) {
	        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
	            return;
	        }
	        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
	            message: message,
	            verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : undefined
	        }).catch(() => {
	            // Very hard to decide what to do. We tried to send a log
	            // message which failed so we can't simply send another :-(.
	        });
	    }
	}
	class TelemetryImpl {
	    constructor() {
	    }
	    attach(connection) {
	        this._connection = connection;
	    }
	    get connection() {
	        if (!this._connection) {
	            throw new Error('Remote is not attached to a connection yet.');
	        }
	        return this._connection;
	    }
	    initialize(_capabilities) {
	    }
	    fillServerCapabilities(_capabilities) {
	    }
	    logEvent(data) {
	        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
	            this.connection.console.log(`Sending TelemetryEventNotification failed`);
	        });
	    }
	}
	class _LanguagesImpl {
	    constructor() {
	    }
	    attach(connection) {
	        this._connection = connection;
	    }
	    get connection() {
	        if (!this._connection) {
	            throw new Error('Remote is not attached to a connection yet.');
	        }
	        return this._connection;
	    }
	    initialize(_capabilities) {
	    }
	    fillServerCapabilities(_capabilities) {
	    }
	    attachWorkDoneProgress(params) {
	        return (0, progress_1.attachWorkDone)(this.connection, params);
	    }
	    attachPartialResultProgress(_type, params) {
	        return (0, progress_1.attachPartialResult)(this.connection, params);
	    }
	}
	exports._LanguagesImpl = _LanguagesImpl;
	const LanguagesImpl = (0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl))))))));
	class _NotebooksImpl {
	    constructor() {
	    }
	    attach(connection) {
	        this._connection = connection;
	    }
	    get connection() {
	        if (!this._connection) {
	            throw new Error('Remote is not attached to a connection yet.');
	        }
	        return this._connection;
	    }
	    initialize(_capabilities) {
	    }
	    fillServerCapabilities(_capabilities) {
	    }
	    attachWorkDoneProgress(params) {
	        return (0, progress_1.attachWorkDone)(this.connection, params);
	    }
	    attachPartialResultProgress(_type, params) {
	        return (0, progress_1.attachPartialResult)(this.connection, params);
	    }
	}
	exports._NotebooksImpl = _NotebooksImpl;
	const NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
	function combineConsoleFeatures(one, two) {
	    return function (Base) {
	        return two(one(Base));
	    };
	}
	exports.combineConsoleFeatures = combineConsoleFeatures;
	function combineTelemetryFeatures(one, two) {
	    return function (Base) {
	        return two(one(Base));
	    };
	}
	exports.combineTelemetryFeatures = combineTelemetryFeatures;
	function combineTracerFeatures(one, two) {
	    return function (Base) {
	        return two(one(Base));
	    };
	}
	exports.combineTracerFeatures = combineTracerFeatures;
	function combineClientFeatures(one, two) {
	    return function (Base) {
	        return two(one(Base));
	    };
	}
	exports.combineClientFeatures = combineClientFeatures;
	function combineWindowFeatures(one, two) {
	    return function (Base) {
	        return two(one(Base));
	    };
	}
	exports.combineWindowFeatures = combineWindowFeatures;
	function combineWorkspaceFeatures(one, two) {
	    return function (Base) {
	        return two(one(Base));
	    };
	}
	exports.combineWorkspaceFeatures = combineWorkspaceFeatures;
	function combineLanguagesFeatures(one, two) {
	    return function (Base) {
	        return two(one(Base));
	    };
	}
	exports.combineLanguagesFeatures = combineLanguagesFeatures;
	function combineNotebooksFeatures(one, two) {
	    return function (Base) {
	        return two(one(Base));
	    };
	}
	exports.combineNotebooksFeatures = combineNotebooksFeatures;
	function combineFeatures(one, two) {
	    function combine(one, two, func) {
	        if (one && two) {
	            return func(one, two);
	        }
	        else if (one) {
	            return one;
	        }
	        else {
	            return two;
	        }
	    }
	    let result = {
	        __brand: 'features',
	        console: combine(one.console, two.console, combineConsoleFeatures),
	        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
	        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
	        client: combine(one.client, two.client, combineClientFeatures),
	        window: combine(one.window, two.window, combineWindowFeatures),
	        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
	        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
	        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
	    };
	    return result;
	}
	exports.combineFeatures = combineFeatures;
	function createConnection(connectionFactory, watchDog, factories) {
	    const logger = (factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl());
	    const connection = connectionFactory(logger);
	    logger.rawAttach(connection);
	    const tracer = (factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl());
	    const telemetry = (factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl());
	    const client = (factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl());
	    const remoteWindow = (factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl());
	    const workspace = (factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl());
	    const languages = (factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl());
	    const notebooks = (factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl());
	    const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
	    function asPromise(value) {
	        if (value instanceof Promise) {
	            return value;
	        }
	        else if (Is.thenable(value)) {
	            return new Promise((resolve, reject) => {
	                value.then((resolved) => resolve(resolved), (error) => reject(error));
	            });
	        }
	        else {
	            return Promise.resolve(value);
	        }
	    }
	    let shutdownHandler = undefined;
	    let initializeHandler = undefined;
	    let exitHandler = undefined;
	    let protocolConnection = {
	        listen: () => connection.listen(),
	        sendRequest: (type, ...params) => connection.sendRequest(Is.string(type) ? type : type.method, ...params),
	        onRequest: (type, handler) => connection.onRequest(type, handler),
	        sendNotification: (type, param) => {
	            const method = Is.string(type) ? type : type.method;
	            if (arguments.length === 1) {
	                return connection.sendNotification(method);
	            }
	            else {
	                return connection.sendNotification(method, param);
	            }
	        },
	        onNotification: (type, handler) => connection.onNotification(type, handler),
	        onProgress: connection.onProgress,
	        sendProgress: connection.sendProgress,
	        onInitialize: (handler) => {
	            initializeHandler = handler;
	            return {
	                dispose: () => {
	                    initializeHandler = undefined;
	                }
	            };
	        },
	        onInitialized: (handler) => connection.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
	        onShutdown: (handler) => {
	            shutdownHandler = handler;
	            return {
	                dispose: () => {
	                    shutdownHandler = undefined;
	                }
	            };
	        },
	        onExit: (handler) => {
	            exitHandler = handler;
	            return {
	                dispose: () => {
	                    exitHandler = undefined;
	                }
	            };
	        },
	        get console() { return logger; },
	        get telemetry() { return telemetry; },
	        get tracer() { return tracer; },
	        get client() { return client; },
	        get window() { return remoteWindow; },
	        get workspace() { return workspace; },
	        get languages() { return languages; },
	        get notebooks() { return notebooks; },
	        onDidChangeConfiguration: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
	        onDidChangeWatchedFiles: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
	        __textDocumentSync: undefined,
	        onDidOpenTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
	        onDidChangeTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
	        onDidCloseTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
	        onWillSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
	        onWillSaveTextDocumentWaitUntil: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
	        onDidSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
	        sendDiagnostics: (params) => connection.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
	        onHover: (handler) => connection.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
	        }),
	        onCompletion: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onCompletionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
	        onSignatureHelp: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
	        }),
	        onDeclaration: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onTypeDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onImplementation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onReferences: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onDocumentHighlight: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onDocumentSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onWorkspaceSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onWorkspaceSymbolResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
	        onCodeAction: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onCodeActionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
	            return handler(params, cancel);
	        }),
	        onCodeLens: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onCodeLensResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
	            return handler(params, cancel);
	        }),
	        onDocumentFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
	        }),
	        onDocumentRangeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
	        }),
	        onDocumentOnTypeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
	            return handler(params, cancel);
	        }),
	        onRenameRequest: (handler) => connection.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
	        }),
	        onPrepareRename: (handler) => connection.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
	            return handler(params, cancel);
	        }),
	        onDocumentLinks: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onDocumentLinkResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
	            return handler(params, cancel);
	        }),
	        onDocumentColor: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onColorPresentation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onFoldingRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onSelectionRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
	        }),
	        onExecuteCommand: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
	            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
	        }),
	        dispose: () => connection.dispose()
	    };
	    for (let remote of allRemotes) {
	        remote.attach(protocolConnection);
	    }
	    connection.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
	        watchDog.initialize(params);
	        if (Is.string(params.trace)) {
	            tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
	        }
	        for (let remote of allRemotes) {
	            remote.initialize(params.capabilities);
	        }
	        if (initializeHandler) {
	            let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection, params), undefined);
	            return asPromise(result).then((value) => {
	                if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
	                    return value;
	                }
	                let result = value;
	                if (!result) {
	                    result = { capabilities: {} };
	                }
	                let capabilities = result.capabilities;
	                if (!capabilities) {
	                    capabilities = {};
	                    result.capabilities = capabilities;
	                }
	                if (capabilities.textDocumentSync === undefined || capabilities.textDocumentSync === null) {
	                    capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
	                }
	                else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
	                    capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
	                }
	                for (let remote of allRemotes) {
	                    remote.fillServerCapabilities(capabilities);
	                }
	                return result;
	            });
	        }
	        else {
	            let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
	            for (let remote of allRemotes) {
	                remote.fillServerCapabilities(result.capabilities);
	            }
	            return result;
	        }
	    });
	    connection.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
	        watchDog.shutdownReceived = true;
	        if (shutdownHandler) {
	            return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
	        }
	        else {
	            return undefined;
	        }
	    });
	    connection.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
	        try {
	            if (exitHandler) {
	                exitHandler();
	            }
	        }
	        finally {
	            if (watchDog.shutdownReceived) {
	                watchDog.exit(0);
	            }
	            else {
	                watchDog.exit(1);
	            }
	        }
	    });
	    connection.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
	        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
	    });
	    return protocolConnection;
	}
	exports.createConnection = createConnection; 
} (server));

var files = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.resolveModulePath = exports.FileSystem = exports.resolveGlobalYarnPath = exports.resolveGlobalNodePath = exports.resolve = exports.uriToFilePath = void 0;
	const url = require$$0$1;
	const path = require$$1$1;
	const fs = require$$2$1;
	const child_process_1 = require$$3$1;
	/**
	 * @deprecated Use the `vscode-uri` npm module which provides a more
	 * complete implementation of handling VS Code URIs.
	 */
	function uriToFilePath(uri) {
	    let parsed = url.parse(uri);
	    if (parsed.protocol !== 'file:' || !parsed.path) {
	        return undefined;
	    }
	    let segments = parsed.path.split('/');
	    for (var i = 0, len = segments.length; i < len; i++) {
	        segments[i] = decodeURIComponent(segments[i]);
	    }
	    if (process.platform === 'win32' && segments.length > 1) {
	        let first = segments[0];
	        let second = segments[1];
	        // Do we have a drive letter and we started with a / which is the
	        // case if the first segement is empty (see split above)
	        if (first.length === 0 && second.length > 1 && second[1] === ':') {
	            // Remove first slash
	            segments.shift();
	        }
	    }
	    return path.normalize(segments.join('/'));
	}
	exports.uriToFilePath = uriToFilePath;
	function isWindows() {
	    return process.platform === 'win32';
	}
	function resolve(moduleName, nodePath, cwd, tracer) {
	    const nodePathKey = 'NODE_PATH';
	    const app = [
	        'var p = process;',
	        'p.on(\'message\',function(m){',
	        'if(m.c===\'e\'){',
	        'p.exit(0);',
	        '}',
	        'else if(m.c===\'rs\'){',
	        'try{',
	        'var r=require.resolve(m.a);',
	        'p.send({c:\'r\',s:true,r:r});',
	        '}',
	        'catch(err){',
	        'p.send({c:\'r\',s:false});',
	        '}',
	        '}',
	        '});'
	    ].join('');
	    return new Promise((resolve, reject) => {
	        let env = process.env;
	        let newEnv = Object.create(null);
	        Object.keys(env).forEach(key => newEnv[key] = env[key]);
	        if (nodePath && fs.existsSync(nodePath) /* see issue 545 */) {
	            if (newEnv[nodePathKey]) {
	                newEnv[nodePathKey] = nodePath + path.delimiter + newEnv[nodePathKey];
	            }
	            else {
	                newEnv[nodePathKey] = nodePath;
	            }
	            if (tracer) {
	                tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
	            }
	        }
	        newEnv['ELECTRON_RUN_AS_NODE'] = '1';
	        try {
	            let cp = (0, child_process_1.fork)('', [], {
	                cwd: cwd,
	                env: newEnv,
	                execArgv: ['-e', app]
	            });
	            if (cp.pid === void 0) {
	                reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
	                return;
	            }
	            cp.on('error', (error) => {
	                reject(error);
	            });
	            cp.on('message', (message) => {
	                if (message.c === 'r') {
	                    cp.send({ c: 'e' });
	                    if (message.s) {
	                        resolve(message.r);
	                    }
	                    else {
	                        reject(new Error(`Failed to resolve module: ${moduleName}`));
	                    }
	                }
	            });
	            let message = {
	                c: 'rs',
	                a: moduleName
	            };
	            cp.send(message);
	        }
	        catch (error) {
	            reject(error);
	        }
	    });
	}
	exports.resolve = resolve;
	/**
	 * Resolve the global npm package path.
	 * @deprecated Since this depends on the used package manager and their version the best is that servers
	 * implement this themselves since they know best what kind of package managers to support.
	 * @param tracer the tracer to use
	 */
	function resolveGlobalNodePath(tracer) {
	    let npmCommand = 'npm';
	    const env = Object.create(null);
	    Object.keys(process.env).forEach(key => env[key] = process.env[key]);
	    env['NO_UPDATE_NOTIFIER'] = 'true';
	    const options = {
	        encoding: 'utf8',
	        env
	    };
	    if (isWindows()) {
	        npmCommand = 'npm.cmd';
	        options.shell = true;
	    }
	    let handler = () => { };
	    try {
	        process.on('SIGPIPE', handler);
	        let stdout = (0, child_process_1.spawnSync)(npmCommand, ['config', 'get', 'prefix'], options).stdout;
	        if (!stdout) {
	            if (tracer) {
	                tracer(`'npm config get prefix' didn't return a value.`);
	            }
	            return undefined;
	        }
	        let prefix = stdout.trim();
	        if (tracer) {
	            tracer(`'npm config get prefix' value is: ${prefix}`);
	        }
	        if (prefix.length > 0) {
	            if (isWindows()) {
	                return path.join(prefix, 'node_modules');
	            }
	            else {
	                return path.join(prefix, 'lib', 'node_modules');
	            }
	        }
	        return undefined;
	    }
	    catch (err) {
	        return undefined;
	    }
	    finally {
	        process.removeListener('SIGPIPE', handler);
	    }
	}
	exports.resolveGlobalNodePath = resolveGlobalNodePath;
	/*
	 * Resolve the global yarn pakage path.
	 * @deprecated Since this depends on the used package manager and their version the best is that servers
	 * implement this themselves since they know best what kind of package managers to support.
	 * @param tracer the tracer to use
	 */
	function resolveGlobalYarnPath(tracer) {
	    let yarnCommand = 'yarn';
	    let options = {
	        encoding: 'utf8'
	    };
	    if (isWindows()) {
	        yarnCommand = 'yarn.cmd';
	        options.shell = true;
	    }
	    let handler = () => { };
	    try {
	        process.on('SIGPIPE', handler);
	        let results = (0, child_process_1.spawnSync)(yarnCommand, ['global', 'dir', '--json'], options);
	        let stdout = results.stdout;
	        if (!stdout) {
	            if (tracer) {
	                tracer(`'yarn global dir' didn't return a value.`);
	                if (results.stderr) {
	                    tracer(results.stderr);
	                }
	            }
	            return undefined;
	        }
	        let lines = stdout.trim().split(/\r?\n/);
	        for (let line of lines) {
	            try {
	                let yarn = JSON.parse(line);
	                if (yarn.type === 'log') {
	                    return path.join(yarn.data, 'node_modules');
	                }
	            }
	            catch (e) {
	                // Do nothing. Ignore the line
	            }
	        }
	        return undefined;
	    }
	    catch (err) {
	        return undefined;
	    }
	    finally {
	        process.removeListener('SIGPIPE', handler);
	    }
	}
	exports.resolveGlobalYarnPath = resolveGlobalYarnPath;
	var FileSystem;
	(function (FileSystem) {
	    let _isCaseSensitive = undefined;
	    function isCaseSensitive() {
	        if (_isCaseSensitive !== void 0) {
	            return _isCaseSensitive;
	        }
	        if (process.platform === 'win32') {
	            _isCaseSensitive = false;
	        }
	        else {
	            // convert current file name to upper case / lower case and check if file exists
	            // (guards against cases when name is already all uppercase or lowercase)
	            _isCaseSensitive = !fs.existsSync(__filename.toUpperCase()) || !fs.existsSync(__filename.toLowerCase());
	        }
	        return _isCaseSensitive;
	    }
	    FileSystem.isCaseSensitive = isCaseSensitive;
	    function isParent(parent, child) {
	        if (isCaseSensitive()) {
	            return path.normalize(child).indexOf(path.normalize(parent)) === 0;
	        }
	        else {
	            return path.normalize(child).toLowerCase().indexOf(path.normalize(parent).toLowerCase()) === 0;
	        }
	    }
	    FileSystem.isParent = isParent;
	})(FileSystem = exports.FileSystem || (exports.FileSystem = {}));
	function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
	    if (nodePath) {
	        if (!path.isAbsolute(nodePath)) {
	            nodePath = path.join(workspaceRoot, nodePath);
	        }
	        return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
	            if (FileSystem.isParent(nodePath, value)) {
	                return value;
	            }
	            else {
	                return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
	            }
	        }).then(undefined, (_error) => {
	            return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
	        });
	    }
	    else {
	        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
	    }
	}
	exports.resolveModulePath = resolveModulePath; 
} (files));

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */

var node$1 = main$3;

var api = {};

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProposedFeatures = exports.NotebookDocuments = exports.TextDocuments = exports.SemanticTokensBuilder = void 0;
	const semanticTokens_1 = semanticTokens;
	Object.defineProperty(exports, "SemanticTokensBuilder", { enumerable: true, get: function () { return semanticTokens_1.SemanticTokensBuilder; } });
	__exportStar(main$3, exports);
	const textDocuments_1 = textDocuments;
	Object.defineProperty(exports, "TextDocuments", { enumerable: true, get: function () { return textDocuments_1.TextDocuments; } });
	const notebook_1 = notebook;
	Object.defineProperty(exports, "NotebookDocuments", { enumerable: true, get: function () { return notebook_1.NotebookDocuments; } });
	__exportStar(server, exports);
	(function (ProposedFeatures) {
	    ProposedFeatures.all = {
	        __brand: 'features',
	    };
	})(exports.ProposedFeatures || (exports.ProposedFeatures = {})); 
} (api));

(function (exports) {
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	/// <reference path="../../typings/thenable.d.ts" />
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createConnection = exports.Files = void 0;
	const Is = is$2;
	const server_1 = server;
	const fm = files;
	const node_1 = node$1;
	__exportStar(node$1, exports);
	__exportStar(api, exports);
	(function (Files) {
	    Files.uriToFilePath = fm.uriToFilePath;
	    Files.resolveGlobalNodePath = fm.resolveGlobalNodePath;
	    Files.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
	    Files.resolve = fm.resolve;
	    Files.resolveModulePath = fm.resolveModulePath;
	})(exports.Files || (exports.Files = {}));
	function endProtocolConnection() {
	    {
	        return;
	    }
	}
	let _shutdownReceived = false;
	let exitTimer = undefined;
	function setupExitTimer() {
	    const argName = '--clientProcessId';
	    function runTimer(value) {
	        try {
	            let processId = parseInt(value);
	            if (!isNaN(processId)) {
	                exitTimer = setInterval(() => {
	                    try {
	                        process.kill(processId, 0);
	                    }
	                    catch (ex) {
	                        // Parent process doesn't exist anymore. Exit the server.
	                        endProtocolConnection();
	                        process.exit(_shutdownReceived ? 0 : 1);
	                    }
	                }, 3000);
	            }
	        }
	        catch (e) {
	            // Ignore errors;
	        }
	    }
	    for (let i = 2; i < process.argv.length; i++) {
	        let arg = process.argv[i];
	        if (arg === argName && i + 1 < process.argv.length) {
	            runTimer(process.argv[i + 1]);
	            return;
	        }
	        else {
	            let args = arg.split('=');
	            if (args[0] === argName) {
	                runTimer(args[1]);
	            }
	        }
	    }
	}
	setupExitTimer();
	const watchDog = {
	    initialize: (params) => {
	        const processId = params.processId;
	        if (Is.number(processId) && exitTimer === undefined) {
	            // We received a parent process id. Set up a timer to periodically check
	            // if the parent is still alive.
	            setInterval(() => {
	                try {
	                    process.kill(processId, 0);
	                }
	                catch (ex) {
	                    // Parent process doesn't exist anymore. Exit the server.
	                    process.exit(_shutdownReceived ? 0 : 1);
	                }
	            }, 3000);
	        }
	    },
	    get shutdownReceived() {
	        return _shutdownReceived;
	    },
	    set shutdownReceived(value) {
	        _shutdownReceived = value;
	    },
	    exit: (code) => {
	        process.exit(code);
	    }
	};
	function createConnection(arg1, arg2, arg3, arg4) {
	    let factories;
	    let input;
	    let output;
	    let options;
	    if (arg1 !== void 0 && arg1.__brand === 'features') {
	        factories = arg1;
	        arg1 = arg2;
	        arg2 = arg3;
	        arg3 = arg4;
	    }
	    if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
	        options = arg1;
	    }
	    else {
	        input = arg1;
	        output = arg2;
	        options = arg3;
	    }
	    return _createConnection(input, output, options, factories);
	}
	exports.createConnection = createConnection;
	function _createConnection(input, output, options, factories) {
	    if (!input && !output && process.argv.length > 2) {
	        let port = void 0;
	        let pipeName = void 0;
	        let argv = process.argv.slice(2);
	        for (let i = 0; i < argv.length; i++) {
	            let arg = argv[i];
	            if (arg === '--node-ipc') {
	                input = new node_1.IPCMessageReader(process);
	                output = new node_1.IPCMessageWriter(process);
	                break;
	            }
	            else if (arg === '--stdio') {
	                input = process.stdin;
	                output = process.stdout;
	                break;
	            }
	            else if (arg === '--socket') {
	                port = parseInt(argv[i + 1]);
	                break;
	            }
	            else if (arg === '--pipe') {
	                pipeName = argv[i + 1];
	                break;
	            }
	            else {
	                var args = arg.split('=');
	                if (args[0] === '--socket') {
	                    port = parseInt(args[1]);
	                    break;
	                }
	                else if (args[0] === '--pipe') {
	                    pipeName = args[1];
	                    break;
	                }
	            }
	        }
	        if (port) {
	            let transport = (0, node_1.createServerSocketTransport)(port);
	            input = transport[0];
	            output = transport[1];
	        }
	        else if (pipeName) {
	            let transport = (0, node_1.createServerPipeTransport)(pipeName);
	            input = transport[0];
	            output = transport[1];
	        }
	    }
	    var commandLineMessage = 'Use arguments of createConnection or set command line parameters: \'--node-ipc\', \'--stdio\' or \'--socket={number}\'';
	    if (!input) {
	        throw new Error('Connection input stream is not set. ' + commandLineMessage);
	    }
	    if (!output) {
	        throw new Error('Connection output stream is not set. ' + commandLineMessage);
	    }
	    // Backwards compatibility
	    if (Is.func(input.read) && Is.func(input.on)) {
	        let inputStream = input;
	        inputStream.on('end', () => {
	            process.exit(_shutdownReceived ? 0 : 1);
	        });
	        inputStream.on('close', () => {
	            process.exit(_shutdownReceived ? 0 : 1);
	        });
	    }
	    const connectionFactory = (logger) => {
	        const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
	        return result;
	    };
	    return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
	} 
} (main$4));

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */

var node = main$4;

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var main = {exports: {}};

(function (module, exports) {
	var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	};
	(function (factory) {
	    {
	        var v = factory(commonjsRequire, exports);
	        if (v !== undefined) module.exports = v;
	    }
	})(function (require, exports) {
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.TextDocument = void 0;
	    var FullTextDocument = /** @class */ (function () {
	        function FullTextDocument(uri, languageId, version, content) {
	            this._uri = uri;
	            this._languageId = languageId;
	            this._version = version;
	            this._content = content;
	            this._lineOffsets = undefined;
	        }
	        Object.defineProperty(FullTextDocument.prototype, "uri", {
	            get: function () {
	                return this._uri;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        Object.defineProperty(FullTextDocument.prototype, "languageId", {
	            get: function () {
	                return this._languageId;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        Object.defineProperty(FullTextDocument.prototype, "version", {
	            get: function () {
	                return this._version;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        FullTextDocument.prototype.getText = function (range) {
	            if (range) {
	                var start = this.offsetAt(range.start);
	                var end = this.offsetAt(range.end);
	                return this._content.substring(start, end);
	            }
	            return this._content;
	        };
	        FullTextDocument.prototype.update = function (changes, version) {
	            for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
	                var change = changes_1[_i];
	                if (FullTextDocument.isIncremental(change)) {
	                    // makes sure start is before end
	                    var range = getWellformedRange(change.range);
	                    // update content
	                    var startOffset = this.offsetAt(range.start);
	                    var endOffset = this.offsetAt(range.end);
	                    this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
	                    // update the offsets
	                    var startLine = Math.max(range.start.line, 0);
	                    var endLine = Math.max(range.end.line, 0);
	                    var lineOffsets = this._lineOffsets;
	                    var addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
	                    if (endLine - startLine === addedLineOffsets.length) {
	                        for (var i = 0, len = addedLineOffsets.length; i < len; i++) {
	                            lineOffsets[i + startLine + 1] = addedLineOffsets[i];
	                        }
	                    }
	                    else {
	                        if (addedLineOffsets.length < 10000) {
	                            lineOffsets.splice.apply(lineOffsets, __spreadArray([startLine + 1, endLine - startLine], addedLineOffsets, false));
	                        }
	                        else { // avoid too many arguments for splice
	                            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
	                        }
	                    }
	                    var diff = change.text.length - (endOffset - startOffset);
	                    if (diff !== 0) {
	                        for (var i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
	                            lineOffsets[i] = lineOffsets[i] + diff;
	                        }
	                    }
	                }
	                else if (FullTextDocument.isFull(change)) {
	                    this._content = change.text;
	                    this._lineOffsets = undefined;
	                }
	                else {
	                    throw new Error('Unknown change event received');
	                }
	            }
	            this._version = version;
	        };
	        FullTextDocument.prototype.getLineOffsets = function () {
	            if (this._lineOffsets === undefined) {
	                this._lineOffsets = computeLineOffsets(this._content, true);
	            }
	            return this._lineOffsets;
	        };
	        FullTextDocument.prototype.positionAt = function (offset) {
	            offset = Math.max(Math.min(offset, this._content.length), 0);
	            var lineOffsets = this.getLineOffsets();
	            var low = 0, high = lineOffsets.length;
	            if (high === 0) {
	                return { line: 0, character: offset };
	            }
	            while (low < high) {
	                var mid = Math.floor((low + high) / 2);
	                if (lineOffsets[mid] > offset) {
	                    high = mid;
	                }
	                else {
	                    low = mid + 1;
	                }
	            }
	            // low is the least x for which the line offset is larger than the current offset
	            // or array.length if no line offset is larger than the current offset
	            var line = low - 1;
	            return { line: line, character: offset - lineOffsets[line] };
	        };
	        FullTextDocument.prototype.offsetAt = function (position) {
	            var lineOffsets = this.getLineOffsets();
	            if (position.line >= lineOffsets.length) {
	                return this._content.length;
	            }
	            else if (position.line < 0) {
	                return 0;
	            }
	            var lineOffset = lineOffsets[position.line];
	            var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
	            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
	        };
	        Object.defineProperty(FullTextDocument.prototype, "lineCount", {
	            get: function () {
	                return this.getLineOffsets().length;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        FullTextDocument.isIncremental = function (event) {
	            var candidate = event;
	            return candidate !== undefined && candidate !== null &&
	                typeof candidate.text === 'string' && candidate.range !== undefined &&
	                (candidate.rangeLength === undefined || typeof candidate.rangeLength === 'number');
	        };
	        FullTextDocument.isFull = function (event) {
	            var candidate = event;
	            return candidate !== undefined && candidate !== null &&
	                typeof candidate.text === 'string' && candidate.range === undefined && candidate.rangeLength === undefined;
	        };
	        return FullTextDocument;
	    }());
	    var TextDocument;
	    (function (TextDocument) {
	        /**
	         * Creates a new text document.
	         *
	         * @param uri The document's uri.
	         * @param languageId  The document's language Id.
	         * @param version The document's initial version number.
	         * @param content The document's content.
	         */
	        function create(uri, languageId, version, content) {
	            return new FullTextDocument(uri, languageId, version, content);
	        }
	        TextDocument.create = create;
	        /**
	         * Updates a TextDocument by modifying its content.
	         *
	         * @param document the document to update. Only documents created by TextDocument.create are valid inputs.
	         * @param changes the changes to apply to the document.
	         * @param version the changes version for the document.
	         * @returns The updated TextDocument. Note: That's the same document instance passed in as first parameter.
	         *
	         */
	        function update(document, changes, version) {
	            if (document instanceof FullTextDocument) {
	                document.update(changes, version);
	                return document;
	            }
	            else {
	                throw new Error('TextDocument.update: document must be created by TextDocument.create');
	            }
	        }
	        TextDocument.update = update;
	        function applyEdits(document, edits) {
	            var text = document.getText();
	            var sortedEdits = mergeSort(edits.map(getWellformedEdit), function (a, b) {
	                var diff = a.range.start.line - b.range.start.line;
	                if (diff === 0) {
	                    return a.range.start.character - b.range.start.character;
	                }
	                return diff;
	            });
	            var lastModifiedOffset = 0;
	            var spans = [];
	            for (var _i = 0, sortedEdits_1 = sortedEdits; _i < sortedEdits_1.length; _i++) {
	                var e = sortedEdits_1[_i];
	                var startOffset = document.offsetAt(e.range.start);
	                if (startOffset < lastModifiedOffset) {
	                    throw new Error('Overlapping edit');
	                }
	                else if (startOffset > lastModifiedOffset) {
	                    spans.push(text.substring(lastModifiedOffset, startOffset));
	                }
	                if (e.newText.length) {
	                    spans.push(e.newText);
	                }
	                lastModifiedOffset = document.offsetAt(e.range.end);
	            }
	            spans.push(text.substr(lastModifiedOffset));
	            return spans.join('');
	        }
	        TextDocument.applyEdits = applyEdits;
	    })(TextDocument || (exports.TextDocument = TextDocument = {}));
	    function mergeSort(data, compare) {
	        if (data.length <= 1) {
	            // sorted
	            return data;
	        }
	        var p = (data.length / 2) | 0;
	        var left = data.slice(0, p);
	        var right = data.slice(p);
	        mergeSort(left, compare);
	        mergeSort(right, compare);
	        var leftIdx = 0;
	        var rightIdx = 0;
	        var i = 0;
	        while (leftIdx < left.length && rightIdx < right.length) {
	            var ret = compare(left[leftIdx], right[rightIdx]);
	            if (ret <= 0) {
	                // smaller_equal -> take left to preserve order
	                data[i++] = left[leftIdx++];
	            }
	            else {
	                // greater -> take right
	                data[i++] = right[rightIdx++];
	            }
	        }
	        while (leftIdx < left.length) {
	            data[i++] = left[leftIdx++];
	        }
	        while (rightIdx < right.length) {
	            data[i++] = right[rightIdx++];
	        }
	        return data;
	    }
	    function computeLineOffsets(text, isAtLineStart, textOffset) {
	        if (textOffset === void 0) { textOffset = 0; }
	        var result = isAtLineStart ? [textOffset] : [];
	        for (var i = 0; i < text.length; i++) {
	            var ch = text.charCodeAt(i);
	            if (ch === 13 /* CharCode.CarriageReturn */ || ch === 10 /* CharCode.LineFeed */) {
	                if (ch === 13 /* CharCode.CarriageReturn */ && i + 1 < text.length && text.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */) {
	                    i++;
	                }
	                result.push(textOffset + i + 1);
	            }
	        }
	        return result;
	    }
	    function getWellformedRange(range) {
	        var start = range.start;
	        var end = range.end;
	        if (start.line > end.line || (start.line === end.line && start.character > end.character)) {
	            return { start: end, end: start };
	        }
	        return range;
	    }
	    function getWellformedEdit(textEdit) {
	        var range = getWellformedRange(textEdit.range);
	        if (range !== textEdit.range) {
	            return { newText: textEdit.newText, range: range };
	        }
	        return textEdit;
	    }
	}); 
} (main, main.exports));

var mainExports = main.exports;

Object.defineProperty(server$1, "__esModule", { value: true });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
const node_1 = node;
const vscode_languageserver_textdocument_1 = mainExports;
// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
// Create a simple text document manager.
const documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
connection.onInitialize((params) => {
    const capabilities = params.capabilities;
    // Does the client support the `workspace/configuration` request?
    // If not, we fall back using global settings.
    hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation);
    const result = {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
            // Tell the client that this server supports code completion.
            completionProvider: {
                resolveProvider: true
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});
connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(node_1.DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            connection.console.log('Workspace folder change event received.');
        });
    }
});
// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings = { maxNumberOfProblems: 1000 };
let globalSettings = defaultSettings;
// Cache the settings of all open documents
const documentSettings = new Map();
connection.onDidChangeConfiguration(change => {
    if (hasConfigurationCapability) {
        // Reset all cached document settings
        documentSettings.clear();
    }
    else {
        globalSettings = ((change.settings.languageServerExample || defaultSettings));
    }
    // Revalidate all open text documents
    documents.all().forEach(validateTextDocument);
});
function getDocumentSettings(resource) {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: 'languageServerExample'
        });
        documentSettings.set(resource, result);
    }
    return result;
}
// Only keep settings for open documents
documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});
async function validateTextDocument(textDocument) {
    // In this simple example we get the settings for every validate run.
    const settings = await getDocumentSettings(textDocument.uri);
    // The validator creates diagnostics for all uppercase words length 2 and more
    const text = textDocument.getText();
    const pattern = /\b[A-Z]{2,}\b/g;
    let m;
    let problems = 0;
    const diagnostics = [];
    while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
        problems++;
        const diagnostic = {
            severity: node_1.DiagnosticSeverity.Warning,
            range: {
                start: textDocument.positionAt(m.index),
                end: textDocument.positionAt(m.index + m[0].length)
            },
            message: `${m[0]} is all uppercase.`,
            source: 'ex'
        };
        if (hasDiagnosticRelatedInformationCapability) {
            diagnostic.relatedInformation = [
                {
                    location: {
                        uri: textDocument.uri,
                        range: Object.assign({}, diagnostic.range)
                    },
                    message: 'Spelling matters'
                },
                {
                    location: {
                        uri: textDocument.uri,
                        range: Object.assign({}, diagnostic.range)
                    },
                    message: 'Particularly for names'
                }
            ];
        }
        diagnostics.push(diagnostic);
    }
    // Send the computed diagnostics to VSCode.
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}
connection.onDidChangeWatchedFiles(_change => {
    // Monitored files have change in VSCode
    connection.console.log('We received an file change event');
});
// This handler provides the initial list of the completion items.
connection.onCompletion((_textDocumentPosition) => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    return [
        {
            label: 'TypeScript',
            kind: node_1.CompletionItemKind.Text,
            data: 1
        },
        {
            label: 'JavaScript',
            kind: node_1.CompletionItemKind.Text,
            data: 2
        }
    ];
});
// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item) => {
    if (item.data === 1) {
        item.detail = 'TypeScript details';
        item.documentation = 'TypeScript documentation';
    }
    else if (item.data === 2) {
        item.detail = 'JavaScript details';
        item.documentation = 'JavaScript documentation';
    }
    return item;
});
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);
// Listen on the connection
connection.listen();

module.exports = server$1;
