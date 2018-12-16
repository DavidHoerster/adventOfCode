(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		value
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		value
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$or = _Basics_or;
var author$project$Main$checkCoordForIntactnessHelper = F2(
	function (curr, rest) {
		var result = function () {
			if (rest.b) {
				var x = rest.a;
				var xs = rest.b;
				return _Utils_eq(curr.claim, x.claim) ? A2(author$project$Main$checkCoordForIntactnessHelper, curr, xs) : ((((_Utils_cmp(x.fromLeft, curr.fromLeft) < 1) && (_Utils_cmp(curr.fromLeft, x.maxCol) < 1)) || (((_Utils_cmp(x.fromLeft, curr.maxCol) < 1) && (_Utils_cmp(curr.maxCol, x.maxCol) < 1)) || ((_Utils_cmp(curr.fromLeft, x.fromLeft) < 1) && (_Utils_cmp(curr.maxCol, x.maxCol) > -1)))) ? ((((_Utils_cmp(x.fromTop, curr.fromTop) < 1) && (_Utils_cmp(curr.fromTop, x.maxRow) < 1)) || (((_Utils_cmp(x.fromTop, curr.maxRow) < 1) && (_Utils_cmp(curr.maxRow, x.maxRow) < 1)) || ((_Utils_cmp(curr.fromTop, x.fromTop) < 1) && (_Utils_cmp(curr.maxRow, x.maxRow) > -1)))) ? false : A2(author$project$Main$checkCoordForIntactnessHelper, curr, xs)) : A2(author$project$Main$checkCoordForIntactnessHelper, curr, xs));
			} else {
				return true;
			}
		}();
		return result;
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? elm$core$Maybe$Nothing : elm$core$List$head(
			A2(elm$core$List$drop, idx, xs));
	});
var author$project$Main$checkCoordForIntactness2 = F3(
	function (curr, coords, claimIndexBeingChecked) {
		checkCoordForIntactness2:
		while (true) {
			if (elm$core$List$isEmpty(coords)) {
				return -2;
			} else {
				var isIntact = A2(author$project$Main$checkCoordForIntactnessHelper, curr, coords);
				if (isIntact) {
					return curr.claim;
				} else {
					var newCoord = A2(elm_community$list_extra$List$Extra$getAt, claimIndexBeingChecked + 1, coords);
					if (newCoord.$ === 'Just') {
						var aCoord = newCoord.a;
						var $temp$curr = aCoord,
							$temp$coords = coords,
							$temp$claimIndexBeingChecked = claimIndexBeingChecked + 1;
						curr = $temp$curr;
						coords = $temp$coords;
						claimIndexBeingChecked = $temp$claimIndexBeingChecked;
						continue checkCoordForIntactness2;
					} else {
						return (-3) * (claimIndexBeingChecked + 1);
					}
				}
			}
		}
	});
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$indexes = _String_indexes;
var elm$core$String$toInt = _String_toInt;
var author$project$Main$convertStringToCoord = function (item) {
	var coord_str = A2(elm$core$String$dropLeft, 1, item);
	var coord_str_len = elm$core$String$length(coord_str);
	var x_idx = function () {
		var _n8 = elm$core$List$head(
			A2(elm$core$String$indexes, 'x', coord_str));
		if (_n8.$ === 'Just') {
			var aX = _n8.a;
			return aX;
		} else {
			return -13;
		}
	}();
	var height = function () {
		var _n7 = elm$core$String$toInt(
			A3(elm$core$String$slice, x_idx + 1, coord_str_len, coord_str));
		if (_n7.$ === 'Just') {
			var aHeight = _n7.a;
			return aHeight;
		} else {
			return -18;
		}
	}();
	var comma_idx = function () {
		var _n6 = elm$core$List$head(
			A2(elm$core$String$indexes, ',', coord_str));
		if (_n6.$ === 'Just') {
			var aComma = _n6.a;
			return aComma;
		} else {
			return -11;
		}
	}();
	var colon_idx = function () {
		var _n5 = elm$core$List$head(
			A2(elm$core$String$indexes, ': ', coord_str));
		if (_n5.$ === 'Just') {
			var aColon = _n5.a;
			return aColon;
		} else {
			return -12;
		}
	}();
	var fromTop = function () {
		var _n4 = elm$core$String$toInt(
			A3(elm$core$String$slice, comma_idx + 1, colon_idx, coord_str));
		if (_n4.$ === 'Just') {
			var aTop = _n4.a;
			return aTop;
		} else {
			return -16;
		}
	}();
	var width = function () {
		var _n3 = elm$core$String$toInt(
			A3(elm$core$String$slice, colon_idx + 2, x_idx, coord_str));
		if (_n3.$ === 'Just') {
			var aWidth = _n3.a;
			return aWidth;
		} else {
			return -17;
		}
	}();
	var at_idx = function () {
		var _n2 = elm$core$List$head(
			A2(elm$core$String$indexes, ' @ ', coord_str));
		if (_n2.$ === 'Just') {
			var aAt = _n2.a;
			return aAt;
		} else {
			return -10;
		}
	}();
	var claim = function () {
		var _n1 = elm$core$String$toInt(
			A3(elm$core$String$slice, 0, at_idx, coord_str));
		if (_n1.$ === 'Just') {
			var aClaim = _n1.a;
			return aClaim;
		} else {
			return -14;
		}
	}();
	var fromLeft = function () {
		var _n0 = elm$core$String$toInt(
			A3(elm$core$String$slice, at_idx + 3, comma_idx, coord_str));
		if (_n0.$ === 'Just') {
			var aLeft = _n0.a;
			return aLeft;
		} else {
			return -15;
		}
	}();
	return {claim: claim, fromLeft: fromLeft, fromTop: fromTop, height: height, maxCol: (fromLeft + width) - 1, maxRow: (fromTop + height) - 1, width: width};
};
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$String$lines = _String_lines;
var author$project$Main$convertDataToCoords = function (data) {
	return A2(
		elm$core$List$map,
		author$project$Main$convertStringToCoord,
		elm$core$String$lines(data));
};
var author$project$Main$input = '#1 @ 704,926: 5x4\n#2 @ 272,413: 16x11\n#3 @ 579,814: 26x29\n#4 @ 526,479: 20x15\n#5 @ 401,179: 15x11\n#6 @ 916,565: 22x15\n#7 @ 276,610: 28x29\n#8 @ 235,942: 9x5\n#9 @ 574,938: 15x26\n#10 @ 768,180: 19x18\n#11 @ 782,9: 26x17\n#12 @ 579,718: 17x21\n#13 @ 344,683: 13x22\n#14 @ 212,343: 13x27\n#15 @ 61,211: 22x10\n#16 @ 184,929: 10x27\n#17 @ 405,911: 27x28\n#18 @ 333,433: 22x26\n#19 @ 211,442: 25x29\n#20 @ 346,516: 18x20\n#21 @ 774,538: 12x12\n#22 @ 122,486: 18x23\n#23 @ 35,289: 16x23\n#24 @ 963,538: 25x22\n#25 @ 681,488: 15x27\n#26 @ 199,207: 14x14\n#27 @ 31,426: 28x14\n#28 @ 253,717: 29x17\n#29 @ 799,142: 12x12\n#30 @ 614,209: 18x20\n#31 @ 361,252: 26x19\n#32 @ 832,730: 17x25\n#33 @ 787,625: 11x12\n#34 @ 862,760: 28x23\n#35 @ 840,407: 15x19\n#36 @ 836,410: 26x10\n#37 @ 772,536: 20x21\n#38 @ 169,391: 15x12\n#39 @ 799,921: 23x16\n#40 @ 163,398: 11x15\n#41 @ 231,210: 18x10\n#42 @ 638,289: 10x26\n#43 @ 339,430: 21x27\n#44 @ 303,88: 20x15\n#45 @ 102,216: 26x21\n#46 @ 496,577: 12x23\n#47 @ 254,333: 14x28\n#48 @ 763,544: 21x12\n#49 @ 274,682: 19x26\n#50 @ 748,231: 13x14\n#51 @ 708,930: 12x14\n#52 @ 594,627: 29x17\n#53 @ 513,571: 24x21\n#54 @ 353,181: 19x28\n#55 @ 155,857: 27x26\n#56 @ 729,277: 24x17\n#57 @ 838,575: 15x12\n#58 @ 202,9: 20x17\n#59 @ 657,929: 13x14\n#60 @ 835,405: 10x19\n#61 @ 687,419: 22x22\n#62 @ 392,85: 12x10\n#63 @ 458,200: 19x15\n#64 @ 684,478: 26x25\n#65 @ 904,272: 26x10\n#66 @ 778,291: 23x11\n#67 @ 953,385: 27x29\n#68 @ 788,536: 27x11\n#69 @ 569,859: 26x21\n#70 @ 242,123: 29x15\n#71 @ 870,260: 13x17\n#72 @ 721,739: 21x11\n#73 @ 859,567: 23x19\n#74 @ 904,810: 21x24\n#75 @ 355,84: 29x24\n#76 @ 458,137: 26x14\n#77 @ 527,125: 15x29\n#78 @ 100,259: 13x27\n#79 @ 859,436: 16x28\n#80 @ 640,700: 19x25\n#81 @ 68,298: 21x11\n#82 @ 939,728: 26x17\n#83 @ 866,652: 19x17\n#84 @ 142,165: 17x25\n#85 @ 375,743: 18x20\n#86 @ 105,210: 13x13\n#87 @ 183,743: 17x17\n#88 @ 203,690: 13x15\n#89 @ 320,139: 22x22\n#90 @ 815,950: 23x23\n#91 @ 918,469: 16x28\n#92 @ 55,890: 22x15\n#93 @ 706,27: 26x11\n#94 @ 606,839: 26x11\n#95 @ 885,591: 19x22\n#96 @ 532,510: 21x12\n#97 @ 970,460: 19x15\n#98 @ 368,133: 16x11\n#99 @ 291,551: 22x28\n#100 @ 591,329: 26x16\n#101 @ 604,604: 25x22\n#102 @ 270,971: 10x11\n#103 @ 375,757: 27x22\n#104 @ 907,703: 24x26\n#105 @ 825,281: 27x15\n#106 @ 710,101: 23x14\n#107 @ 596,261: 26x26\n#108 @ 160,432: 20x22\n#109 @ 575,808: 15x11\n#110 @ 669,109: 16x18\n#111 @ 372,686: 20x16\n#112 @ 1,144: 20x13\n#113 @ 99,154: 12x14\n#114 @ 586,33: 26x20\n#115 @ 346,824: 27x14\n#116 @ 541,939: 27x22\n#117 @ 731,898: 21x20\n#118 @ 352,660: 23x23\n#119 @ 81,703: 13x20\n#120 @ 405,401: 14x16\n#121 @ 906,269: 12x17\n#122 @ 902,544: 23x20\n#123 @ 90,22: 28x28\n#124 @ 718,17: 10x28\n#125 @ 428,753: 11x21\n#126 @ 683,743: 20x20\n#127 @ 391,568: 12x29\n#128 @ 944,800: 18x12\n#129 @ 750,513: 14x13\n#130 @ 73,202: 27x23\n#131 @ 185,647: 19x19\n#132 @ 168,173: 22x13\n#133 @ 680,152: 11x22\n#134 @ 360,53: 21x16\n#135 @ 352,507: 12x20\n#136 @ 165,494: 13x10\n#137 @ 945,499: 7x3\n#138 @ 914,300: 14x10\n#139 @ 445,970: 20x18\n#140 @ 630,66: 13x11\n#141 @ 476,423: 24x22\n#142 @ 860,898: 11x16\n#143 @ 85,332: 21x20\n#144 @ 198,686: 27x28\n#145 @ 623,320: 16x26\n#146 @ 872,927: 20x24\n#147 @ 980,935: 14x19\n#148 @ 699,599: 11x15\n#149 @ 100,500: 19x27\n#150 @ 903,496: 24x14\n#151 @ 299,9: 13x10\n#152 @ 33,47: 11x26\n#153 @ 453,551: 18x27\n#154 @ 77,454: 12x16\n#155 @ 329,630: 19x10\n#156 @ 305,341: 10x19\n#157 @ 754,921: 11x15\n#158 @ 137,600: 20x22\n#159 @ 582,260: 21x19\n#160 @ 638,538: 17x27\n#161 @ 297,585: 21x12\n#162 @ 303,459: 17x12\n#163 @ 848,890: 15x19\n#164 @ 76,479: 18x13\n#165 @ 179,790: 24x22\n#166 @ 642,941: 18x29\n#167 @ 539,150: 6x7\n#168 @ 927,64: 15x18\n#169 @ 665,843: 12x18\n#170 @ 409,940: 27x18\n#171 @ 915,51: 12x28\n#172 @ 956,142: 11x21\n#173 @ 612,418: 12x28\n#174 @ 281,889: 22x10\n#175 @ 654,930: 22x22\n#176 @ 932,577: 23x11\n#177 @ 67,283: 26x20\n#178 @ 856,135: 17x27\n#179 @ 649,559: 15x24\n#180 @ 51,14: 18x18\n#181 @ 366,85: 20x21\n#182 @ 666,695: 10x16\n#183 @ 628,698: 16x15\n#184 @ 379,765: 22x19\n#185 @ 550,857: 22x25\n#186 @ 822,660: 22x17\n#187 @ 314,18: 28x19\n#188 @ 675,210: 28x21\n#189 @ 371,441: 19x19\n#190 @ 331,16: 24x24\n#191 @ 644,328: 5x3\n#192 @ 17,426: 15x14\n#193 @ 115,508: 22x10\n#194 @ 652,312: 26x12\n#195 @ 590,232: 15x25\n#196 @ 332,367: 26x15\n#197 @ 316,152: 22x24\n#198 @ 298,608: 25x20\n#199 @ 604,770: 18x13\n#200 @ 697,875: 11x21\n#201 @ 384,376: 16x23\n#202 @ 307,341: 23x16\n#203 @ 492,200: 18x11\n#204 @ 971,4: 10x11\n#205 @ 71,933: 10x21\n#206 @ 769,185: 18x14\n#207 @ 297,632: 23x18\n#208 @ 665,921: 25x10\n#209 @ 828,553: 16x24\n#210 @ 338,857: 22x11\n#211 @ 8,135: 17x18\n#212 @ 526,481: 19x28\n#213 @ 144,497: 16x26\n#214 @ 583,362: 23x26\n#215 @ 39,425: 13x21\n#216 @ 333,244: 21x16\n#217 @ 901,959: 17x29\n#218 @ 765,424: 23x10\n#219 @ 178,252: 15x19\n#220 @ 131,785: 19x12\n#221 @ 84,287: 12x11\n#222 @ 215,958: 21x19\n#223 @ 550,122: 19x26\n#224 @ 847,554: 18x17\n#225 @ 71,492: 21x25\n#226 @ 542,649: 22x11\n#227 @ 550,282: 24x11\n#228 @ 685,115: 25x11\n#229 @ 379,221: 27x12\n#230 @ 363,732: 26x17\n#231 @ 707,22: 18x12\n#232 @ 542,371: 12x13\n#233 @ 626,615: 16x21\n#234 @ 191,733: 25x25\n#235 @ 314,88: 16x29\n#236 @ 113,254: 21x15\n#237 @ 322,2: 22x20\n#238 @ 672,43: 21x22\n#239 @ 799,513: 15x27\n#240 @ 84,31: 26x18\n#241 @ 727,957: 12x26\n#242 @ 551,874: 15x13\n#243 @ 176,379: 18x23\n#244 @ 649,121: 16x15\n#245 @ 540,556: 27x15\n#246 @ 802,148: 21x13\n#247 @ 941,382: 25x15\n#248 @ 611,620: 27x11\n#249 @ 823,953: 14x14\n#250 @ 638,407: 13x27\n#251 @ 333,20: 16x11\n#252 @ 152,819: 20x11\n#253 @ 433,384: 25x29\n#254 @ 224,939: 29x12\n#255 @ 500,961: 18x18\n#256 @ 348,562: 11x15\n#257 @ 330,242: 22x27\n#258 @ 734,279: 23x13\n#259 @ 663,413: 22x20\n#260 @ 75,881: 14x27\n#261 @ 21,72: 26x21\n#262 @ 56,247: 18x24\n#263 @ 220,338: 16x13\n#264 @ 801,933: 16x29\n#265 @ 670,821: 27x29\n#266 @ 672,733: 27x20\n#267 @ 2,143: 14x10\n#268 @ 583,957: 15x29\n#269 @ 896,626: 7x12\n#270 @ 422,972: 18x15\n#271 @ 871,726: 23x14\n#272 @ 68,52: 14x17\n#273 @ 841,711: 28x24\n#274 @ 424,314: 11x16\n#275 @ 814,73: 13x27\n#276 @ 305,106: 24x18\n#277 @ 928,394: 18x27\n#278 @ 94,532: 23x28\n#279 @ 248,53: 17x24\n#280 @ 164,516: 18x27\n#281 @ 597,824: 28x26\n#282 @ 931,307: 25x10\n#283 @ 732,661: 19x20\n#284 @ 179,560: 28x28\n#285 @ 288,542: 18x10\n#286 @ 206,229: 26x22\n#287 @ 52,352: 28x15\n#288 @ 400,221: 21x26\n#289 @ 741,518: 27x10\n#290 @ 917,746: 24x26\n#291 @ 788,916: 15x22\n#292 @ 639,311: 29x17\n#293 @ 752,139: 23x29\n#294 @ 431,740: 17x12\n#295 @ 490,589: 10x20\n#296 @ 255,930: 25x18\n#297 @ 374,416: 10x27\n#298 @ 398,850: 13x25\n#299 @ 330,700: 21x15\n#300 @ 562,407: 21x28\n#301 @ 275,283: 14x20\n#302 @ 583,771: 25x23\n#303 @ 730,52: 16x18\n#304 @ 321,80: 21x21\n#305 @ 511,963: 11x28\n#306 @ 682,729: 29x18\n#307 @ 7,718: 13x24\n#308 @ 791,111: 12x22\n#309 @ 576,729: 16x24\n#310 @ 541,131: 16x27\n#311 @ 183,835: 24x25\n#312 @ 142,144: 20x18\n#313 @ 604,492: 23x20\n#314 @ 510,479: 28x17\n#315 @ 90,129: 20x24\n#316 @ 95,289: 16x14\n#317 @ 296,814: 29x29\n#318 @ 545,162: 23x15\n#319 @ 829,943: 16x16\n#320 @ 686,876: 17x11\n#321 @ 416,80: 23x25\n#322 @ 681,112: 28x12\n#323 @ 453,755: 21x16\n#324 @ 892,455: 23x19\n#325 @ 61,573: 13x28\n#326 @ 443,555: 19x10\n#327 @ 274,886: 13x24\n#328 @ 972,341: 24x23\n#329 @ 547,337: 24x15\n#330 @ 657,731: 17x25\n#331 @ 350,97: 27x10\n#332 @ 86,457: 16x27\n#333 @ 432,802: 14x18\n#334 @ 318,255: 29x13\n#335 @ 406,440: 24x11\n#336 @ 969,363: 29x11\n#337 @ 664,28: 25x10\n#338 @ 889,199: 21x29\n#339 @ 247,405: 27x12\n#340 @ 476,509: 24x27\n#341 @ 675,747: 19x26\n#342 @ 826,633: 24x15\n#343 @ 802,781: 11x28\n#344 @ 977,488: 11x27\n#345 @ 119,443: 18x27\n#346 @ 372,455: 18x22\n#347 @ 392,242: 20x28\n#348 @ 587,805: 29x16\n#349 @ 853,898: 20x15\n#350 @ 928,707: 10x11\n#351 @ 269,701: 11x12\n#352 @ 619,323: 27x10\n#353 @ 450,597: 18x12\n#354 @ 721,858: 17x21\n#355 @ 93,521: 22x15\n#356 @ 113,664: 17x26\n#357 @ 938,161: 10x26\n#358 @ 601,503: 25x11\n#359 @ 737,162: 11x15\n#360 @ 132,497: 17x26\n#361 @ 463,543: 23x28\n#362 @ 648,608: 4x5\n#363 @ 672,367: 10x13\n#364 @ 5,906: 28x10\n#365 @ 607,863: 23x28\n#366 @ 896,320: 19x17\n#367 @ 151,384: 11x14\n#368 @ 364,740: 25x17\n#369 @ 85,112: 21x22\n#370 @ 391,872: 23x25\n#371 @ 391,226: 25x18\n#372 @ 131,673: 28x21\n#373 @ 229,921: 28x24\n#374 @ 325,523: 22x26\n#375 @ 127,517: 23x24\n#376 @ 556,607: 26x27\n#377 @ 446,356: 29x28\n#378 @ 441,604: 15x10\n#379 @ 716,571: 26x15\n#380 @ 388,752: 19x14\n#381 @ 672,342: 17x16\n#382 @ 155,316: 28x15\n#383 @ 525,513: 15x16\n#384 @ 882,828: 29x15\n#385 @ 784,907: 10x23\n#386 @ 419,419: 10x22\n#387 @ 498,95: 13x19\n#388 @ 613,461: 18x18\n#389 @ 87,779: 24x16\n#390 @ 689,927: 19x26\n#391 @ 923,639: 17x10\n#392 @ 163,500: 21x23\n#393 @ 824,856: 27x21\n#394 @ 337,467: 29x10\n#395 @ 492,122: 29x12\n#396 @ 426,832: 21x27\n#397 @ 856,446: 29x26\n#398 @ 405,195: 6x6\n#399 @ 283,159: 25x26\n#400 @ 219,314: 16x23\n#401 @ 594,799: 12x25\n#402 @ 898,297: 17x12\n#403 @ 738,434: 16x24\n#404 @ 395,842: 27x25\n#405 @ 661,482: 29x13\n#406 @ 650,235: 25x13\n#407 @ 547,370: 26x29\n#408 @ 395,665: 25x29\n#409 @ 227,152: 28x22\n#410 @ 873,327: 24x13\n#411 @ 778,631: 17x12\n#412 @ 228,833: 29x12\n#413 @ 62,469: 23x20\n#414 @ 702,920: 10x20\n#415 @ 347,868: 18x25\n#416 @ 21,436: 11x28\n#417 @ 960,75: 14x14\n#418 @ 292,732: 20x22\n#419 @ 15,176: 20x23\n#420 @ 358,87: 18x14\n#421 @ 609,206: 22x29\n#422 @ 384,151: 15x29\n#423 @ 761,648: 25x24\n#424 @ 368,949: 25x15\n#425 @ 257,391: 14x19\n#426 @ 324,33: 29x10\n#427 @ 846,658: 29x19\n#428 @ 332,363: 28x27\n#429 @ 135,686: 27x13\n#430 @ 94,505: 28x14\n#431 @ 580,779: 25x27\n#432 @ 130,856: 25x24\n#433 @ 697,549: 24x20\n#434 @ 685,872: 26x13\n#435 @ 386,673: 16x23\n#436 @ 2,110: 10x26\n#437 @ 461,123: 29x29\n#438 @ 319,248: 23x13\n#439 @ 862,782: 18x18\n#440 @ 84,366: 11x13\n#441 @ 282,388: 16x29\n#442 @ 723,66: 12x19\n#443 @ 274,128: 12x21\n#444 @ 532,140: 17x23\n#445 @ 831,790: 24x25\n#446 @ 457,375: 20x23\n#447 @ 412,199: 20x24\n#448 @ 42,955: 20x22\n#449 @ 656,239: 13x5\n#450 @ 110,479: 18x27\n#451 @ 972,347: 27x23\n#452 @ 374,670: 14x23\n#453 @ 547,648: 11x23\n#454 @ 359,842: 14x24\n#455 @ 291,620: 17x23\n#456 @ 246,742: 17x14\n#457 @ 79,326: 21x21\n#458 @ 516,132: 13x14\n#459 @ 427,68: 18x11\n#460 @ 550,834: 10x12\n#461 @ 420,413: 22x10\n#462 @ 905,375: 29x16\n#463 @ 178,782: 16x27\n#464 @ 904,805: 15x29\n#465 @ 663,120: 27x24\n#466 @ 742,331: 23x15\n#467 @ 834,558: 23x22\n#468 @ 219,764: 21x20\n#469 @ 669,726: 29x27\n#470 @ 608,845: 27x25\n#471 @ 841,462: 29x18\n#472 @ 793,808: 17x28\n#473 @ 916,737: 16x27\n#474 @ 958,845: 15x12\n#475 @ 468,264: 25x18\n#476 @ 134,984: 22x12\n#477 @ 114,514: 10x13\n#478 @ 753,189: 23x29\n#479 @ 24,496: 21x27\n#480 @ 375,731: 14x21\n#481 @ 170,820: 18x16\n#482 @ 243,53: 18x11\n#483 @ 566,8: 10x29\n#484 @ 160,741: 28x11\n#485 @ 796,750: 20x10\n#486 @ 949,32: 23x9\n#487 @ 339,347: 25x13\n#488 @ 369,107: 19x28\n#489 @ 61,409: 26x13\n#490 @ 756,923: 6x9\n#491 @ 400,976: 18x10\n#492 @ 573,648: 19x29\n#493 @ 160,583: 26x25\n#494 @ 493,94: 10x25\n#495 @ 689,748: 13x23\n#496 @ 752,441: 20x14\n#497 @ 627,4: 27x29\n#498 @ 745,435: 11x18\n#499 @ 48,492: 17x21\n#500 @ 753,363: 29x28\n#501 @ 477,85: 15x17\n#502 @ 159,777: 20x16\n#503 @ 10,580: 12x29\n#504 @ 646,900: 24x14\n#505 @ 233,258: 20x25\n#506 @ 973,284: 13x22\n#507 @ 984,912: 10x24\n#508 @ 422,209: 22x11\n#509 @ 674,729: 27x20\n#510 @ 564,223: 29x13\n#511 @ 439,833: 15x24\n#512 @ 409,407: 3x5\n#513 @ 53,965: 21x21\n#514 @ 384,39: 15x11\n#515 @ 190,239: 18x18\n#516 @ 48,441: 26x11\n#517 @ 231,928: 13x27\n#518 @ 326,630: 23x19\n#519 @ 16,685: 16x17\n#520 @ 295,739: 13x6\n#521 @ 276,566: 20x14\n#522 @ 288,532: 11x13\n#523 @ 400,616: 11x11\n#524 @ 593,45: 26x21\n#525 @ 183,817: 19x28\n#526 @ 42,658: 11x22\n#527 @ 560,645: 20x24\n#528 @ 259,320: 13x24\n#529 @ 602,316: 21x23\n#530 @ 426,723: 5x3\n#531 @ 385,939: 13x14\n#532 @ 717,766: 14x24\n#533 @ 0,112: 14x14\n#534 @ 114,46: 12x18\n#535 @ 820,413: 10x25\n#536 @ 517,131: 16x13\n#537 @ 60,318: 16x28\n#538 @ 61,333: 17x11\n#539 @ 791,895: 14x23\n#540 @ 49,241: 14x17\n#541 @ 66,302: 17x15\n#542 @ 843,477: 12x11\n#543 @ 876,3: 21x15\n#544 @ 686,733: 27x24\n#545 @ 657,613: 29x16\n#546 @ 470,615: 13x10\n#547 @ 228,246: 25x19\n#548 @ 697,750: 25x25\n#549 @ 485,738: 24x16\n#550 @ 70,890: 16x27\n#551 @ 671,360: 12x10\n#552 @ 760,58: 29x13\n#553 @ 411,397: 19x21\n#554 @ 403,188: 16x27\n#555 @ 870,151: 23x25\n#556 @ 490,582: 27x12\n#557 @ 290,438: 19x22\n#558 @ 87,358: 24x15\n#559 @ 497,199: 19x27\n#560 @ 788,634: 26x16\n#561 @ 372,122: 7x9\n#562 @ 890,946: 13x11\n#563 @ 826,948: 23x20\n#564 @ 320,179: 11x12\n#565 @ 697,404: 26x24\n#566 @ 477,727: 11x14\n#567 @ 9,692: 15x21\n#568 @ 282,959: 21x23\n#569 @ 771,70: 10x13\n#570 @ 566,224: 21x22\n#571 @ 738,149: 10x18\n#572 @ 140,942: 14x11\n#573 @ 617,703: 18x18\n#574 @ 569,793: 22x24\n#575 @ 43,490: 15x10\n#576 @ 57,67: 25x24\n#577 @ 837,116: 20x11\n#578 @ 949,61: 24x17\n#579 @ 826,726: 26x16\n#580 @ 249,252: 15x24\n#581 @ 193,118: 17x18\n#582 @ 889,309: 27x12\n#583 @ 147,752: 23x15\n#584 @ 20,71: 18x21\n#585 @ 259,68: 25x12\n#586 @ 477,197: 24x13\n#587 @ 398,149: 24x28\n#588 @ 216,338: 16x20\n#589 @ 871,244: 16x17\n#590 @ 356,20: 14x21\n#591 @ 408,976: 15x24\n#592 @ 890,575: 12x23\n#593 @ 859,758: 13x19\n#594 @ 388,196: 13x18\n#595 @ 392,156: 10x20\n#596 @ 401,903: 23x29\n#597 @ 640,611: 12x28\n#598 @ 149,679: 13x26\n#599 @ 362,535: 18x24\n#600 @ 814,60: 26x25\n#601 @ 651,820: 11x17\n#602 @ 613,459: 26x17\n#603 @ 731,440: 19x26\n#604 @ 582,126: 12x19\n#605 @ 818,796: 28x28\n#606 @ 434,910: 13x14\n#607 @ 937,783: 16x20\n#608 @ 293,172: 14x16\n#609 @ 136,725: 17x28\n#610 @ 204,85: 14x14\n#611 @ 766,785: 18x28\n#612 @ 46,588: 28x29\n#613 @ 918,352: 21x26\n#614 @ 826,956: 11x14\n#615 @ 69,625: 17x10\n#616 @ 572,823: 22x25\n#617 @ 739,284: 15x15\n#618 @ 244,932: 20x23\n#619 @ 579,794: 11x17\n#620 @ 508,411: 16x13\n#621 @ 412,440: 20x18\n#622 @ 919,326: 29x17\n#623 @ 400,928: 14x19\n#624 @ 263,677: 20x13\n#625 @ 394,367: 15x17\n#626 @ 26,161: 29x27\n#627 @ 384,192: 15x13\n#628 @ 464,536: 18x29\n#629 @ 788,550: 29x10\n#630 @ 146,776: 12x13\n#631 @ 328,27: 14x13\n#632 @ 100,217: 18x24\n#633 @ 912,720: 14x12\n#634 @ 890,190: 28x29\n#635 @ 322,28: 19x14\n#636 @ 276,688: 24x28\n#637 @ 245,409: 29x25\n#638 @ 232,252: 23x17\n#639 @ 31,179: 10x15\n#640 @ 701,688: 11x13\n#641 @ 321,456: 27x19\n#642 @ 468,541: 19x23\n#643 @ 410,964: 23x28\n#644 @ 107,201: 14x28\n#645 @ 681,348: 17x16\n#646 @ 642,326: 10x10\n#647 @ 663,431: 27x14\n#648 @ 650,281: 11x18\n#649 @ 771,945: 25x28\n#650 @ 957,879: 18x15\n#651 @ 806,481: 13x10\n#652 @ 4,668: 29x24\n#653 @ 263,327: 23x27\n#654 @ 603,807: 10x24\n#655 @ 425,436: 17x11\n#656 @ 97,648: 29x23\n#657 @ 173,412: 17x28\n#658 @ 569,807: 17x20\n#659 @ 444,58: 28x24\n#660 @ 740,320: 20x12\n#661 @ 435,917: 20x14\n#662 @ 642,918: 28x15\n#663 @ 626,12: 21x21\n#664 @ 888,11: 29x20\n#665 @ 752,441: 20x22\n#666 @ 446,911: 18x10\n#667 @ 226,969: 12x27\n#668 @ 79,617: 29x16\n#669 @ 26,915: 15x23\n#670 @ 162,366: 21x19\n#671 @ 860,772: 19x26\n#672 @ 111,242: 15x20\n#673 @ 914,827: 15x16\n#674 @ 388,185: 10x16\n#675 @ 24,169: 16x19\n#676 @ 892,615: 18x28\n#677 @ 797,874: 10x23\n#678 @ 903,535: 10x26\n#679 @ 253,55: 4x5\n#680 @ 428,292: 13x12\n#681 @ 637,132: 16x27\n#682 @ 725,871: 14x24\n#683 @ 704,235: 28x12\n#684 @ 52,9: 16x15\n#685 @ 573,187: 29x24\n#686 @ 621,809: 10x18\n#687 @ 639,52: 29x28\n#688 @ 315,352: 24x18\n#689 @ 636,117: 27x24\n#690 @ 851,418: 15x29\n#691 @ 127,157: 28x15\n#692 @ 350,128: 13x17\n#693 @ 785,723: 15x26\n#694 @ 685,32: 11x16\n#695 @ 640,958: 25x19\n#696 @ 414,556: 22x10\n#697 @ 457,653: 29x13\n#698 @ 385,444: 25x20\n#699 @ 275,545: 21x13\n#700 @ 700,875: 15x20\n#701 @ 50,581: 14x24\n#702 @ 622,881: 10x10\n#703 @ 398,409: 25x15\n#704 @ 205,688: 18x15\n#705 @ 368,122: 14x26\n#706 @ 319,470: 12x23\n#707 @ 380,575: 11x23\n#708 @ 721,563: 21x12\n#709 @ 512,826: 13x26\n#710 @ 505,795: 11x27\n#711 @ 466,610: 21x24\n#712 @ 570,549: 29x15\n#713 @ 197,224: 28x17\n#714 @ 6,573: 23x29\n#715 @ 88,915: 18x28\n#716 @ 744,223: 10x21\n#717 @ 708,671: 19x18\n#718 @ 852,905: 15x21\n#719 @ 438,730: 15x24\n#720 @ 537,957: 14x18\n#721 @ 269,122: 20x11\n#722 @ 908,320: 25x13\n#723 @ 666,144: 21x26\n#724 @ 377,694: 24x28\n#725 @ 278,827: 18x22\n#726 @ 451,368: 12x11\n#727 @ 973,240: 16x14\n#728 @ 786,533: 13x18\n#729 @ 560,865: 16x10\n#730 @ 381,411: 25x28\n#731 @ 969,250: 25x21\n#732 @ 739,435: 21x10\n#733 @ 320,252: 18x24\n#734 @ 769,617: 13x23\n#735 @ 565,497: 24x10\n#736 @ 572,418: 14x10\n#737 @ 767,782: 11x12\n#738 @ 683,756: 18x29\n#739 @ 275,402: 28x26\n#740 @ 288,413: 18x23\n#741 @ 731,670: 28x13\n#742 @ 328,532: 21x13\n#743 @ 531,236: 23x22\n#744 @ 733,866: 10x12\n#745 @ 736,715: 18x12\n#746 @ 95,227: 22x27\n#747 @ 984,7: 5x13\n#748 @ 632,122: 10x15\n#749 @ 372,451: 14x15\n#750 @ 64,553: 15x10\n#751 @ 476,968: 26x24\n#752 @ 328,926: 11x24\n#753 @ 48,859: 20x16\n#754 @ 736,261: 27x21\n#755 @ 233,835: 15x24\n#756 @ 180,390: 11x23\n#757 @ 316,19: 17x9\n#758 @ 513,735: 29x24\n#759 @ 611,427: 27x12\n#760 @ 222,702: 29x26\n#761 @ 772,798: 18x25\n#762 @ 329,337: 21x12\n#763 @ 325,172: 27x17\n#764 @ 279,970: 12x19\n#765 @ 968,472: 28x18\n#766 @ 274,974: 15x14\n#767 @ 246,927: 19x21\n#768 @ 573,545: 24x29\n#769 @ 977,235: 13x12\n#770 @ 193,810: 28x29\n#771 @ 341,110: 22x28\n#772 @ 651,904: 18x12\n#773 @ 34,163: 14x29\n#774 @ 753,492: 4x18\n#775 @ 84,502: 28x15\n#776 @ 871,445: 19x16\n#777 @ 850,420: 17x19\n#778 @ 27,401: 14x29\n#779 @ 454,320: 24x14\n#780 @ 544,497: 12x25\n#781 @ 628,68: 20x18\n#782 @ 373,39: 24x27\n#783 @ 735,723: 19x13\n#784 @ 786,430: 21x29\n#785 @ 872,136: 14x20\n#786 @ 345,599: 13x27\n#787 @ 43,867: 10x15\n#788 @ 290,613: 25x22\n#789 @ 915,352: 22x26\n#790 @ 384,742: 28x11\n#791 @ 645,587: 25x27\n#792 @ 371,29: 25x11\n#793 @ 569,775: 23x20\n#794 @ 404,185: 11x17\n#795 @ 758,192: 5x3\n#796 @ 261,311: 19x13\n#797 @ 377,76: 26x12\n#798 @ 390,209: 16x29\n#799 @ 715,978: 28x10\n#800 @ 313,12: 25x21\n#801 @ 576,644: 26x21\n#802 @ 133,583: 20x26\n#803 @ 776,559: 28x14\n#804 @ 76,824: 15x15\n#805 @ 443,300: 14x21\n#806 @ 939,302: 18x18\n#807 @ 972,0: 16x11\n#808 @ 468,970: 19x17\n#809 @ 446,61: 26x26\n#810 @ 369,154: 12x17\n#811 @ 487,552: 23x23\n#812 @ 793,730: 17x28\n#813 @ 547,134: 10x21\n#814 @ 874,902: 16x10\n#815 @ 892,269: 29x12\n#816 @ 692,684: 12x20\n#817 @ 828,876: 21x19\n#818 @ 571,789: 29x13\n#819 @ 397,606: 28x10\n#820 @ 187,240: 21x12\n#821 @ 448,513: 20x23\n#822 @ 818,279: 18x16\n#823 @ 444,553: 12x16\n#824 @ 861,74: 17x20\n#825 @ 655,504: 10x15\n#826 @ 142,494: 10x19\n#827 @ 634,889: 23x16\n#828 @ 777,414: 13x28\n#829 @ 257,485: 20x27\n#830 @ 281,418: 27x27\n#831 @ 514,975: 13x16\n#832 @ 131,932: 16x20\n#833 @ 348,511: 28x28\n#834 @ 646,604: 10x16\n#835 @ 800,294: 11x22\n#836 @ 709,860: 15x29\n#837 @ 289,935: 24x25\n#838 @ 202,218: 10x23\n#839 @ 271,482: 28x12\n#840 @ 241,856: 15x18\n#841 @ 561,106: 25x15\n#842 @ 927,717: 27x22\n#843 @ 642,504: 16x16\n#844 @ 636,539: 18x17\n#845 @ 697,608: 14x19\n#846 @ 332,829: 20x23\n#847 @ 677,135: 19x23\n#848 @ 557,759: 20x19\n#849 @ 177,98: 17x26\n#850 @ 522,603: 17x28\n#851 @ 550,205: 28x21\n#852 @ 396,377: 16x14\n#853 @ 249,696: 22x14\n#854 @ 17,92: 22x18\n#855 @ 345,538: 10x28\n#856 @ 364,166: 21x21\n#857 @ 417,719: 24x12\n#858 @ 510,787: 22x28\n#859 @ 985,692: 11x18\n#860 @ 789,442: 24x19\n#861 @ 73,917: 11x21\n#862 @ 290,452: 27x15\n#863 @ 231,310: 16x12\n#864 @ 484,681: 24x17\n#865 @ 193,829: 10x27\n#866 @ 569,107: 10x13\n#867 @ 120,434: 11x15\n#868 @ 349,475: 11x15\n#869 @ 530,147: 19x15\n#870 @ 359,186: 26x12\n#871 @ 227,776: 16x29\n#872 @ 519,40: 27x23\n#873 @ 959,898: 28x22\n#874 @ 785,484: 19x14\n#875 @ 697,749: 16x24\n#876 @ 154,171: 11x5\n#877 @ 100,34: 14x26\n#878 @ 382,604: 24x13\n#879 @ 909,962: 19x12\n#880 @ 902,827: 21x29\n#881 @ 718,232: 22x13\n#882 @ 627,819: 20x29\n#883 @ 475,93: 19x10\n#884 @ 848,426: 28x19\n#885 @ 563,225: 29x28\n#886 @ 14,575: 8x16\n#887 @ 577,131: 22x27\n#888 @ 296,518: 16x18\n#889 @ 752,720: 26x13\n#890 @ 226,829: 18x20\n#891 @ 333,588: 18x17\n#892 @ 214,347: 17x24\n#893 @ 921,386: 12x15\n#894 @ 29,603: 28x24\n#895 @ 250,139: 10x23\n#896 @ 267,705: 18x25\n#897 @ 610,374: 12x20\n#898 @ 478,879: 11x19\n#899 @ 978,512: 14x29\n#900 @ 307,739: 27x26\n#901 @ 375,740: 12x18\n#902 @ 284,17: 19x21\n#903 @ 588,765: 22x27\n#904 @ 47,604: 14x13\n#905 @ 823,797: 14x22\n#906 @ 311,116: 23x24\n#907 @ 38,597: 28x24\n#908 @ 449,981: 28x14\n#909 @ 852,122: 15x15\n#910 @ 957,745: 14x10\n#911 @ 436,80: 27x15\n#912 @ 280,619: 25x27\n#913 @ 726,742: 14x11\n#914 @ 422,240: 24x24\n#915 @ 394,362: 22x20\n#916 @ 324,13: 14x4\n#917 @ 521,558: 19x11\n#918 @ 743,909: 19x20\n#919 @ 72,559: 16x19\n#920 @ 718,129: 13x13\n#921 @ 652,467: 19x22\n#922 @ 418,462: 20x25\n#923 @ 947,304: 29x11\n#924 @ 815,155: 26x12\n#925 @ 482,470: 28x10\n#926 @ 188,624: 18x17\n#927 @ 432,72: 18x13\n#928 @ 760,928: 28x23\n#929 @ 797,136: 18x25\n#930 @ 872,572: 20x27\n#931 @ 552,513: 28x22\n#932 @ 794,3: 21x10\n#933 @ 119,721: 17x14\n#934 @ 273,924: 10x12\n#935 @ 672,148: 10x18\n#936 @ 239,725: 20x25\n#937 @ 724,29: 18x27\n#938 @ 574,885: 28x29\n#939 @ 900,19: 11x14\n#940 @ 632,503: 28x16\n#941 @ 133,763: 29x24\n#942 @ 546,227: 11x11\n#943 @ 58,468: 26x22\n#944 @ 176,566: 28x22\n#945 @ 282,923: 20x17\n#946 @ 403,439: 19x12\n#947 @ 942,98: 18x18\n#948 @ 746,920: 19x16\n#949 @ 130,75: 13x27\n#950 @ 338,959: 19x11\n#951 @ 343,166: 16x17\n#952 @ 745,931: 10x10\n#953 @ 191,16: 17x21\n#954 @ 821,729: 18x16\n#955 @ 790,757: 29x14\n#956 @ 613,301: 15x27\n#957 @ 403,743: 19x23\n#958 @ 972,50: 14x19\n#959 @ 264,964: 14x24\n#960 @ 129,59: 13x22\n#961 @ 917,362: 17x6\n#962 @ 162,152: 24x11\n#963 @ 696,565: 29x18\n#964 @ 420,222: 27x19\n#965 @ 294,619: 27x15\n#966 @ 51,459: 29x26\n#967 @ 728,228: 19x15\n#968 @ 155,129: 15x27\n#969 @ 412,774: 29x15\n#970 @ 63,338: 12x28\n#971 @ 539,860: 26x22\n#972 @ 730,866: 24x16\n#973 @ 652,919: 18x21\n#974 @ 930,390: 12x14\n#975 @ 300,138: 26x19\n#976 @ 632,827: 17x21\n#977 @ 801,820: 18x14\n#978 @ 754,341: 10x28\n#979 @ 773,487: 27x16\n#980 @ 635,405: 14x17\n#981 @ 319,437: 25x13\n#982 @ 687,852: 26x29\n#983 @ 301,684: 16x12\n#984 @ 523,445: 15x22\n#985 @ 598,336: 20x27\n#986 @ 562,228: 21x12\n#987 @ 452,63: 16x17\n#988 @ 371,549: 10x28\n#989 @ 874,747: 15x14\n#990 @ 180,158: 12x17\n#991 @ 611,49: 27x22\n#992 @ 491,101: 28x27\n#993 @ 393,690: 13x15\n#994 @ 809,281: 19x26\n#995 @ 314,718: 28x29\n#996 @ 601,375: 27x21\n#997 @ 171,541: 16x26\n#998 @ 983,897: 16x29\n#999 @ 541,668: 11x14\n#1000 @ 377,144: 17x23\n#1001 @ 335,812: 18x24\n#1002 @ 644,591: 18x14\n#1003 @ 833,577: 26x22\n#1004 @ 758,290: 26x15\n#1005 @ 445,294: 12x17\n#1006 @ 726,243: 13x25\n#1007 @ 97,941: 23x11\n#1008 @ 503,558: 23x24\n#1009 @ 912,78: 21x10\n#1010 @ 745,940: 23x19\n#1011 @ 556,106: 20x29\n#1012 @ 737,711: 14x13\n#1013 @ 900,760: 27x13\n#1014 @ 854,674: 10x16\n#1015 @ 213,720: 16x28\n#1016 @ 88,507: 19x17\n#1017 @ 147,363: 16x29\n#1018 @ 284,574: 16x22\n#1019 @ 833,654: 29x10\n#1020 @ 567,823: 15x21\n#1021 @ 445,662: 13x12\n#1022 @ 189,709: 16x27\n#1023 @ 907,194: 29x24\n#1024 @ 153,904: 12x17\n#1025 @ 397,714: 17x11\n#1026 @ 52,273: 15x29\n#1027 @ 383,223: 23x24\n#1028 @ 462,129: 14x12\n#1029 @ 551,577: 17x25\n#1030 @ 755,190: 16x10\n#1031 @ 137,509: 7x10\n#1032 @ 131,328: 12x25\n#1033 @ 232,740: 12x20\n#1034 @ 163,108: 28x15\n#1035 @ 100,704: 22x28\n#1036 @ 967,705: 26x25\n#1037 @ 715,412: 24x29\n#1038 @ 464,41: 10x18\n#1039 @ 612,506: 8x3\n#1040 @ 655,710: 23x24\n#1041 @ 834,312: 26x28\n#1042 @ 899,326: 20x11\n#1043 @ 133,148: 19x27\n#1044 @ 12,163: 16x17\n#1045 @ 316,105: 26x13\n#1046 @ 104,512: 28x15\n#1047 @ 532,119: 10x18\n#1048 @ 190,940: 26x17\n#1049 @ 729,918: 20x17\n#1050 @ 874,556: 19x26\n#1051 @ 202,542: 20x21\n#1052 @ 71,404: 23x11\n#1053 @ 869,332: 10x13\n#1054 @ 482,662: 24x27\n#1055 @ 510,754: 21x10\n#1056 @ 341,301: 27x18\n#1057 @ 178,163: 29x16\n#1058 @ 884,473: 20x21\n#1059 @ 86,490: 10x27\n#1060 @ 349,299: 11x15\n#1061 @ 565,35: 17x12\n#1062 @ 364,469: 18x11\n#1063 @ 141,866: 24x14\n#1064 @ 936,53: 25x29\n#1065 @ 492,801: 16x10\n#1066 @ 310,686: 18x19\n#1067 @ 491,579: 15x10\n#1068 @ 749,937: 18x21\n#1069 @ 331,880: 20x19\n#1070 @ 618,510: 10x10\n#1071 @ 622,696: 18x23\n#1072 @ 53,592: 21x21\n#1073 @ 623,218: 29x14\n#1074 @ 150,821: 11x16\n#1075 @ 109,291: 23x27\n#1076 @ 301,915: 24x12\n#1077 @ 427,308: 29x14\n#1078 @ 428,763: 27x12\n#1079 @ 295,79: 17x13\n#1080 @ 942,848: 21x10\n#1081 @ 708,941: 28x15\n#1082 @ 91,100: 29x26\n#1083 @ 84,151: 24x21\n#1084 @ 144,387: 25x12\n#1085 @ 209,103: 11x20\n#1086 @ 212,232: 27x11\n#1087 @ 679,15: 12x24\n#1088 @ 342,960: 25x22\n#1089 @ 296,385: 26x14\n#1090 @ 573,72: 23x19\n#1091 @ 137,890: 19x23\n#1092 @ 332,937: 24x19\n#1093 @ 327,809: 13x27\n#1094 @ 947,29: 29x20\n#1095 @ 580,213: 13x18\n#1096 @ 530,926: 17x21\n#1097 @ 232,800: 26x18\n#1098 @ 486,543: 26x24\n#1099 @ 305,520: 24x27\n#1100 @ 878,87: 20x29\n#1101 @ 646,809: 11x28\n#1102 @ 530,814: 24x22\n#1103 @ 709,124: 18x24\n#1104 @ 770,777: 13x22\n#1105 @ 296,436: 12x18\n#1106 @ 954,721: 22x27\n#1107 @ 606,851: 21x15\n#1108 @ 719,929: 18x19\n#1109 @ 861,896: 16x21\n#1110 @ 780,130: 16x10\n#1111 @ 159,280: 25x25\n#1112 @ 518,816: 26x21\n#1113 @ 438,299: 26x25\n#1114 @ 532,439: 20x24\n#1115 @ 536,437: 26x28\n#1116 @ 827,431: 29x29\n#1117 @ 188,751: 27x10\n#1118 @ 914,165: 28x25\n#1119 @ 587,57: 17x22\n#1120 @ 331,213: 17x29\n#1121 @ 979,54: 11x26\n#1122 @ 420,404: 13x23\n#1123 @ 208,553: 17x27\n#1124 @ 751,664: 11x16\n#1125 @ 812,530: 28x22\n#1126 @ 574,79: 19x10\n#1127 @ 881,301: 16x22\n#1128 @ 830,920: 26x24\n#1129 @ 312,477: 12x16\n#1130 @ 279,512: 15x22\n#1131 @ 643,569: 22x26\n#1132 @ 220,821: 25x24\n#1133 @ 68,10: 20x29\n#1134 @ 805,487: 28x17\n#1135 @ 128,518: 29x18\n#1136 @ 251,702: 11x15\n#1137 @ 472,874: 20x12\n#1138 @ 768,142: 23x20\n#1139 @ 527,755: 21x24\n#1140 @ 504,944: 29x23\n#1141 @ 359,23: 7x14\n#1142 @ 529,551: 15x22\n#1143 @ 544,570: 19x12\n#1144 @ 949,751: 18x19\n#1145 @ 675,798: 22x16\n#1146 @ 420,780: 14x13\n#1147 @ 387,238: 14x17\n#1148 @ 242,935: 25x26\n#1149 @ 45,774: 20x10\n#1150 @ 710,666: 28x19\n#1151 @ 702,222: 18x18\n#1152 @ 951,877: 12x13\n#1153 @ 849,664: 10x21\n#1154 @ 397,675: 18x27\n#1155 @ 132,667: 21x23\n#1156 @ 979,5: 15x20\n#1157 @ 741,490: 25x25\n#1158 @ 899,467: 16x11\n#1159 @ 94,492: 29x10\n#1160 @ 377,100: 20x11\n#1161 @ 557,519: 24x21\n#1162 @ 649,818: 17x24\n#1163 @ 680,281: 23x18\n#1164 @ 82,651: 12x21\n#1165 @ 486,504: 19x22\n#1166 @ 137,483: 25x22\n#1167 @ 601,833: 27x29\n#1168 @ 552,288: 16x14\n#1169 @ 682,809: 26x11\n#1170 @ 421,825: 27x27\n#1171 @ 382,239: 10x25\n#1172 @ 892,265: 20x29\n#1173 @ 324,261: 8x3\n#1174 @ 47,166: 12x23\n#1175 @ 527,60: 13x12\n#1176 @ 672,679: 24x25\n#1177 @ 12,185: 16x16\n#1178 @ 661,426: 18x16\n#1179 @ 239,782: 17x24\n#1180 @ 773,616: 23x11\n#1181 @ 736,208: 29x28\n#1182 @ 936,402: 21x12\n#1183 @ 86,240: 17x23\n#1184 @ 976,512: 21x19\n#1185 @ 711,553: 17x10\n#1186 @ 885,722: 10x14\n#1187 @ 418,718: 27x26\n#1188 @ 217,77: 13x29\n#1189 @ 84,881: 11x13\n#1190 @ 960,88: 14x21\n#1191 @ 352,132: 24x23\n#1192 @ 282,126: 27x28\n#1193 @ 103,518: 16x11\n#1194 @ 679,756: 23x17\n#1195 @ 738,442: 19x13\n#1196 @ 870,126: 13x29\n#1197 @ 859,555: 16x14\n#1198 @ 115,138: 21x14\n#1199 @ 343,537: 16x19\n#1200 @ 678,285: 28x16\n#1201 @ 655,906: 22x22\n#1202 @ 447,737: 20x24\n#1203 @ 343,567: 17x21\n#1204 @ 357,413: 10x18\n#1205 @ 298,153: 23x22\n#1206 @ 415,322: 21x26\n#1207 @ 284,393: 21x29\n#1208 @ 278,897: 23x26\n#1209 @ 964,146: 11x12\n#1210 @ 114,967: 23x28\n#1211 @ 27,647: 25x28\n#1212 @ 974,234: 17x28\n#1213 @ 351,141: 20x14\n#1214 @ 885,176: 26x19\n#1215 @ 682,406: 16x20\n#1216 @ 959,941: 11x21\n#1217 @ 875,255: 13x22\n#1218 @ 724,564: 17x21\n#1219 @ 268,169: 19x27\n#1220 @ 684,406: 25x21\n#1221 @ 539,348: 22x28\n#1222 @ 726,786: 12x11\n#1223 @ 709,113: 17x20\n#1224 @ 943,495: 14x12\n#1225 @ 396,162: 18x19\n#1226 @ 297,826: 12x16\n#1227 @ 951,948: 20x17\n#1228 @ 152,169: 19x11\n#1229 @ 775,642: 21x10\n#1230 @ 616,220: 21x11\n#1231 @ 595,48: 13x13\n#1232 @ 300,381: 17x29\n#1233 @ 652,284: 18x13\n#1234 @ 807,630: 22x11\n#1235 @ 874,237: 24x15\n#1236 @ 127,235: 15x21\n#1237 @ 83,477: 29x23\n#1238 @ 946,106: 12x16\n#1239 @ 924,700: 29x25\n#1240 @ 771,441: 12x10\n#1241 @ 461,253: 15x25\n#1242 @ 354,828: 24x12\n#1243 @ 410,807: 25x20\n#1244 @ 89,511: 10x15\n#1245 @ 326,216: 11x23\n#1246 @ 522,608: 23x13\n#1247 @ 371,100: 10x14\n#1248 @ 268,294: 11x20\n#1249 @ 880,97: 21x13\n#1250 @ 635,501: 10x14\n#1251 @ 511,755: 15x12\n#1252 @ 435,918: 13x20\n#1253 @ 494,406: 20x24\n#1254 @ 822,643: 29x24\n#1255 @ 902,702: 29x11\n#1256 @ 3,731: 23x10\n#1257 @ 728,671: 19x20\n#1258 @ 34,655: 25x21\n#1259 @ 358,164: 16x26\n#1260 @ 813,425: 29x19\n#1261 @ 273,439: 22x21\n#1262 @ 47,764: 10x11\n#1263 @ 898,444: 24x12\n#1264 @ 466,533: 26x24\n#1265 @ 879,571: 16x28\n#1266 @ 460,204: 14x4\n#1267 @ 40,290: 14x10\n#1268 @ 109,452: 25x28\n#1269 @ 275,556: 16x27\n#1270 @ 20,174: 29x25\n#1271 @ 937,727: 11x20\n#1272 @ 175,863: 19x28\n#1273 @ 333,63: 13x28\n#1274 @ 859,72: 27x16\n#1275 @ 102,215: 13x29\n#1276 @ 232,921: 22x15\n#1277 @ 563,860: 28x24\n#1278 @ 243,401: 16x22\n#1279 @ 735,896: 14x28\n#1280 @ 644,64: 24x15\n#1281 @ 104,760: 24x29\n#1282 @ 269,880: 13x23\n#1283 @ 291,802: 13x26\n#1284 @ 392,202: 11x13\n#1285 @ 480,115: 15x26\n#1286 @ 645,269: 18x24\n#1287 @ 849,306: 21x17\n#1288 @ 635,683: 24x22\n#1289 @ 548,118: 17x22\n#1290 @ 93,61: 25x11\n#1291 @ 209,444: 11x28\n#1292 @ 74,696: 25x27\n#1293 @ 646,554: 15x24\n#1294 @ 189,654: 13x14\n#1295 @ 674,613: 25x25\n#1296 @ 893,826: 13x28\n#1297 @ 797,405: 24x17\n#1298 @ 614,711: 10x27\n#1299 @ 82,670: 22x23\n#1300 @ 760,919: 26x29\n#1301 @ 357,464: 10x23\n#1302 @ 378,716: 24x16\n#1303 @ 433,700: 24x22\n#1304 @ 366,835: 22x12\n#1305 @ 925,42: 24x14\n#1306 @ 822,538: 12x26\n#1307 @ 231,210: 19x11\n#1308 @ 966,351: 14x22\n#1309 @ 151,485: 29x29\n#1310 @ 86,458: 27x12\n#1311 @ 382,169: 26x29\n#1312 @ 269,456: 19x18\n#1313 @ 562,557: 23x25\n#1314 @ 509,444: 17x23\n#1315 @ 118,308: 20x26\n#1316 @ 33,609: 11x22\n#1317 @ 288,590: 22x14\n#1318 @ 831,468: 22x15\n#1319 @ 305,136: 25x26\n#1320 @ 17,125: 18x21\n#1321 @ 911,627: 18x25\n#1322 @ 241,755: 16x18\n#1323 @ 668,402: 15x16\n#1324 @ 683,684: 28x19\n#1325 @ 580,902: 16x14\n#1326 @ 536,135: 24x23\n#1327 @ 295,162: 29x18\n#1328 @ 494,467: 21x20\n#1329 @ 377,611: 29x23\n#1330 @ 593,377: 22x13\n#1331 @ 30,500: 4x17\n#1332 @ 556,501: 15x18\n#1333 @ 61,800: 23x29\n#1334 @ 3,578: 15x23\n#1335 @ 742,287: 19x15\n#1336 @ 530,922: 11x27\n#1337 @ 707,677: 12x28\n#1338 @ 485,440: 24x16\n#1339 @ 738,439: 19x16\n#1340 @ 329,362: 24x27\n#1341 @ 106,131: 25x28\n#1342 @ 419,468: 27x14\n#1343 @ 49,271: 28x23\n#1344 @ 563,615: 24x13\n#1345 @ 909,22: 20x22\n#1346 @ 155,284: 12x29\n#1347 @ 110,211: 23x17\n#1348 @ 391,560: 28x24\n#1349 @ 184,622: 21x15\n#1350 @ 412,550: 29x24\n#1351 @ 277,615: 24x27\n#1352 @ 7,180: 28x13\n#1353 @ 495,203: 10x23\n#1354 @ 724,241: 10x15\n#1355 @ 831,769: 29x16\n#1356 @ 721,409: 12x15\n#1357 @ 594,63: 27x13\n#1358 @ 789,430: 23x28\n#1359 @ 526,810: 18x15';
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$append = _Utils_append;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$init = function () {
	var coords = author$project$Main$convertDataToCoords(author$project$Main$input);
	var idx = function () {
		var _n0 = A2(elm_community$list_extra$List$Extra$getAt, 0, coords);
		if (_n0.$ === 'Just') {
			var aCoord = _n0.a;
			return aCoord;
		} else {
			return {claim: 0, fromLeft: 0, fromTop: 0, height: 0, maxCol: 0, maxRow: 0, width: 0};
		}
	}();
	var claim = A3(author$project$Main$checkCoordForIntactness2, idx, coords, 0);
	return _Utils_Tuple2(claim, elm$core$Platform$Cmd$none);
}();
var author$project$Main$update = F2(
	function (msg, model) {
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	});
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$img = _VirtualDom_node('img');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var author$project$Main$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$img,
				_List_fromArray(
					[
						elm$html$Html$Attributes$src('/logo.svg')
					]),
				_List_Nil),
				A2(
				elm$html$Html$h1,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text('Your Elm App is working!')
					])),
				A2(
				elm$html$Html$h1,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text(
						'Answer is :: ' + elm$core$String$fromInt(model))
					]))
			]));
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var author$project$Main$main = elm$browser$Browser$element(
	{
		init: function (_n0) {
			return author$project$Main$init;
		},
		subscriptions: elm$core$Basics$always(elm$core$Platform$Sub$none),
		update: author$project$Main$update,
		view: author$project$Main$view
	});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));