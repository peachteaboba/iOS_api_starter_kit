/**
 * Created by AF1 on 4/18/17.
 */


// Require the controllers
var tasks = require('./../controllers/tasks.js');

// Define the routes
module.exports = function(app) {

    // Tasks routes ===================================================
    app.get('/tasks', function(req, res) {
        tasks.index(req, res);
    });


};
