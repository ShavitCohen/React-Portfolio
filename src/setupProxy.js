const path = require('path');

module.exports = function(app) {
    app.get("/sw.js", (req, res) => {
        res.sendFile(path.resolve(__dirname, "sw.js"));
    });
};
