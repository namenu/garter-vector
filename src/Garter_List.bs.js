// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

function takeExn(list, cnt) {
  var l = Belt_List.take(list, cnt);
  if (l !== undefined) {
    return l;
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function dropExn(list, cnt) {
  var l = Belt_List.drop(list, cnt);
  if (l !== undefined) {
    return l;
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

exports.takeExn = takeExn;
exports.dropExn = dropExn;
/* No side effect */
