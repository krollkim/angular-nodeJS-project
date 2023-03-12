const con = require("../sqlConnect").con;

exports.getCustomer = function(req, res) {
    con.query("SELECT * FROM `customers` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            return;
        }

        if(result.length){
            res.send(result[0]);
        }
        else{
            res.send();
        }
        
    });
}

exports.getCustomers = function(req,res){
    let isDeleted = 0;

    if (req.query.deleted) {
        isDeleted = 1;
    }
    
    con.query("SELECT * FROM `customers` WHERE isDeleted = ?", [isDeleted], (err, result) => {
        if (err) {
            return;
        }
         res.send(result);
        })
    }

    exports.addCustomer = function(req,res){
    
        con.query("INSERT INTO `customers` (`firstName`, `lastName`, `email`, `phone`, `address`, `createdAt`, `notes`) VALUES  (?, ?, ?, ?, ?, CURRENT_TIME, ?)", [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.address, req.body.notes], (err, result) => {
            
                if (err) {
                    return;
                }
                
             con.query("SELECT * FROM `customers` WHERE `id` = ?", [result.insertId], (err, result) => {
            
                if (err) {
                    return;
                }
                 res.send(result[0]);
            });
        });
    }

    exports.updateCustomer = function(req, res) {
    con.query("UPDATE `customers` SET `firstName` = ?, `lastName` = ?, `email` = ?, `phone` = ?, `address` = ?, `notes` = ? WHERE `id` = ?", [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.address, req.body.notes, req.params.id], (err, result) => {
        if (err) {
            return;
        }
        res.send();
    });
}
    exports.removeCustomer = function(req,res){

        con.query("UPDATE `customers` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
            
                if (err) {
                    return;
                }
                 res.send(result);
            })
        }