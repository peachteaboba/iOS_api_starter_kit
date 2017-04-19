/**
 * Created by AF1 on 4/18/17.
 */

// Require Mongoose
var mongoose = require('mongoose');

// Require the model and save it in a variable
var Task = mongoose.model('Task');



module.exports = (function() {
    return {

        index: function(req, res) {
          // Find all tasks and then return that data in res.json()
          res.json({message: "now you do it!"});

        }





    }
})();
