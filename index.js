const server = require('server');

const { get, post } = server.router;
const { render,  json } = server.reply;

var data1 = {hello: "World!", foo: "bar", goodbye:"bye bye~"};
var data2 = {name: "baek", age: 1, address:"seoul", arr: [1,2,3,4,5,6,7,8,9]};

const root = get('/', ctx => {
    return json(data1);
});

const sub = get('/sub', ctx => {
    return json(data2);
});
server({port:5000}, root, sub);
