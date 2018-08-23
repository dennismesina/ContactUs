var express = require('express');

var routes = function(Message){
    var messageRouter = express.Router();

    messageRouter.route('/')
        .post(function(req, res){
          var message = new Message(req.body);
    
          message.save();
          res.status(201).send(message);
        })
        .get(function(req,res){
          var query = {};
          if(req.query.user){
            query.user = req.query.user;
          }
          Message.find(query, function(err,messages){
            if(err){
              res.status(500).send(err);
            }
            else{
              res.json(messages);
            }
          })
        });
    
    messageRouter.route('/:messageId')
        .get(function(req,res){
          Message.findById(req.params.messageId, function(err,messages){
            if(err){
              res.status(500).send(err);
            }
            else{
              res.json(message);
            }
          })
        });
    return messageRouter;
};

module.exports = routes;