const con = require("../sqlConnect").con;

exports.getContact = function(req, res) {
    con.query("SELECT * FROM `contacts` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        if(result.length){
            res.send(result[0]);
        }
        else{
            res.send();
        }
        
    });
}

exports.getContacts = function(req,res){
    let isDeleted = 0;

    if (req.query.deleted) {
        isDeleted = 1;
    }
    
    con.query("SELECT * FROM `contacts` WHERE isDeleted = ?", [isDeleted], (err, result) => {
        if (err) {
            console.log(err);
        }
         res.send(result);
        })
    }

    exports.addContact = function(req,res){
    
        con.query("INSERT INTO `contacts` (`firstName`, `lastName`,`birthday`, `email`, `phone`, `state`, `city`, `street`, `postalCode`) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.body.firstName, req.body.lastName, req.body.birthday, req.body.email, req.body.phone, req.body.state, req.body.city, req.body.street, req.body.postalCode], (err, result) => {
            
                if (err) {
                    console.log(err);
                }
                
             con.query("SELECT * FROM `contacts` WHERE `id` = ?", [result.insertId], (err, result) => {
            
                if (err) {
                    console.log(err);
                }
                 res.send(result[0]);
            });
        });
    }


    
    exports.updateContact = function(req, res) {
        con.query("UPDATE `contacts` SET `firstName`=?, `lastName`=?, `birthday`=?, `email`=?, `phone`=?, `state`=?, `city`=?, `street`=?, `postalCode`=? WHERE `id`=?", [req.body.firstName, req.body.lastName, req.body.birthday, req.body.email, req.body.phone, req.body.state, req.body.city, req.body.street, req.body.postalCode, req.params.id], (err, result) => {
            if (err) {
              console.log(err);
            }
            res.send();
      });
    }

  
    exports.removeContact = function(req,res){

        con.query("UPDATE `contacts` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
            
                if (err) {
                    console.log(err);
                }
                 res.send(result);
            })
        }