let connection; 
const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};
const w = "Move: up"

const a = "Move: left"

const s = "Move: down"

const d = "Move: right"

const handleUserInput = function () {
const stdin = process.stdin
const interval = function(key) {
  setInterval(() => {
    connection.write(key)
  },100);
}
if(key === '\u0003') {
  stdin.write('Game exit')
  process.exit()
}
if(key === w) {
  interval("Move: up")
}
if(key==='s') {
  interval("Move: down")
}
if(key === 'a') {
  interval("Move: left")
}
if(key === 'd'){
  interval("Move: right")
}

};


module.exports = {setupInput};