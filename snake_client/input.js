const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

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
};


module.exports = {setupInput};