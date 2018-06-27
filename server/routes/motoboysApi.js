const express = require('express');
const router = express.Router();
const motoboy = require('../DataAccsess/motoboys');

router.get('/', (req, res) => { 
    motoboy.getAll().then(data => {
    res.send(JSON.stringify(data));
    })
});

router.get('/:id', (req, res) => {
    var motoBoy = motoboy.getOneById(req.params.id).then((data)=>{
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send("error:" + error)
    });
});

router.get('/customer/:email/:password', async (req, res) => {
    // debugger;
    console.log(req.params.email);
    console.log(req.params.password);
    customer.getMotoBoy(req.params.email, req.params.password).then(data => {
      console.log(data)
      //res.send(data);
      res.send(JSON.stringify(data));
    }, err => {
      console.error(err)
    });
})

router.post('/add', (req, res) => {
    motoboy.create(req.body).then(data => {
    res.send(JSON.stringify(data));
  })
});

router.put('/update/:id', (req, res) => {
    motoboy.update(req.body.motoboy, req.params.id).then(() => {
        res.send(JSON.stringify(req.body.motoboy));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

router.delete('/delete/:id', (req, res) => {
    motoboy.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    })
});

module.exports = router;