module.exports = function(robot) {
  return robot.respond(/host lookup (.*)$/i, function(msg) {
    var command, hostname;
    hostname = msg.match[1];
    this.exec = require('child_process').exec;
    command = "host " + hostname;
    msg.send("Looking up " + hostname + "...");
    msg.send("This is the command " + command + ".");
    return this.exec(command, function(error, stdout, stderr) {
      msg.send(error);
      msg.send(stdout);
      return msg.send(stderr);
    });
  });
};
