"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    // Response.data has properties of:
    // id
    // title
    // finished
    var todo = response.data;
    console.log("todo =", todo);
    var ID = todo.ID;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("\n    The Todo with ID:".concat(ID, "\n    has a title of: ").concat(title, "\n    Is it finished? ").concat(finished, "\n  "));
});
