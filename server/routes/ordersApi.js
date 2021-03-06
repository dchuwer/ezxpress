const express = require('express');
const router = express.Router();
const order = require('../DataAccsess/orders');
const expressJwt = require('express-jwt');
const checkIfAuthenticated = expressJwt({
  secret: 'thisIsTopSecret'
}); 


router.get('/',checkIfAuthenticated, (req, res) => {
    order.getOrders(req.user).then(data => {
        console.log("===============================================================")
        console.log(data)
        res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

// router.get('/', (req, res) => {
//     order.getAll(req.user).then(data => {
//         res.send(JSON.stringify(data));
//     }).catch((error) => {
//         res.send("error:" + error)
//     });
// });

router.post('/add', (req, res) => {
    order.create(req.body).then(data => {
        res.send((data));
  }).catch((error) => {
    res.send("error:" + error)
});
});

 router.put('/update/:id',(req,res)=>{
     dataUpdate = req.body
     orderId = req.params.id;
     console.log(orderId)
     order.update(dataUpdate, orderId).then( () => {
        order.getAll().then( data => { 
            console.log("volta do update ...")
            console.log(data)
          res.send((data));
         })
        })  
    err => {
            console.error(err)
          } 
 });

 

router.delete('/delete/:id', (req, res) => {
    order.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

module.exports = router;