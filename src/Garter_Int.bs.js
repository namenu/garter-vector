// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Int = require("bs-platform/lib/js/belt_Int.js");

function fromStringExn(s) {
  var n = Belt_Int.fromString(s);
  if (n !== undefined) {
    return n;
  }
  throw {
        RE_EXN_ID: "Failure",
        _1: "fromStringExn",
        Error: new Error()
      };
}

exports.fromStringExn = fromStringExn;
/* No side effect */
