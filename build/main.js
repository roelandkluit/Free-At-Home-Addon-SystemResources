var os = require('os');
var http = require('http');
var hostname = '0.0.0.0';
var port = 3000;
function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
var server = http.createServer(function (req, res) {
    var retString;
    var avg_load = os.loadavg();
    retString = "<html><title>System Utilization</title>";
    retString += "Load average (1 minute): " + String(avg_load[0]) + '<br>';
    retString += "Load average (5 minute): " + String(avg_load[1]) + '<br>';
    retString += "Load average (15 minute): " + String(avg_load[2]) + '<br>';
    retString += "Total memory: " + numberWithDots(os.totalmem()) + '<br>';
    retString += "Free memory: " + numberWithDots(os.freemem()) + '<br>';
    /*for (const [key, value] of Object.entries(process.env))
    {
      retString += (key + "=" + value + "<br>");
    }*/
    retString += '</html>';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(retString);
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
//# sourceMappingURL=main.js.map