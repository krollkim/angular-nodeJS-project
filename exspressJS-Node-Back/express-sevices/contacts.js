import { con } from "../sqlConnect";

export function getContact(req, res) {
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

export function getContacts(req,res){
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

    export function addContact(req,res){
    
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


    
    export function updateContact(req, res) {
        con.query("UPDATE `contacts` SET `firstName`=?, `lastName`=?, `birthday`=?, `email`=?, `phone`=?, `state`=?, `city`=?, `street`=?, `postalCode`=? WHERE `id`=?", [req.body.firstName, req.body.lastName, req.body.birthday, req.body.email, req.body.phone, req.body.state, req.body.city, req.body.street, req.body.postalCode, req.params.id], (err, result) => {
            if (err) {
              console.log(err);
            }
            res.send();
      });
    }

  
    export function removeContact(req,res){

        con.query("UPDATE `contacts` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
            
                if (err) {
                    console.log(err);
                }
                 res.send(result);
            })
        }