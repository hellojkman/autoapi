const express =require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const park = [
  { id:0, name:"10"},
  { id:1, name:"9"},
  { id:2, name:"8"},
  { id:3, name:"7"},
  { id:4, name:"6"},
  { id:5, name:"5"},
  { id:6, name:"4"},
  { id:7, name:"3"},
  { id:8, name:"2"},
  { id:9, name:"1"},
  { id:10, name:"0"}
];

const park_area = 10

//simple api

app.get("/Hello", (req, res) => {
  res.json({Total:park_area});
})


//path parameter, request parm 0, response 0

app.get("/api/park/:park_id", (req, res) => {
  const park_id = req.params.park_id
  const bark = park.filter(data => data.id == park_id);
    if(park_id > park_area)
    res.json({status:"ok", "이 주차장의 최대 주차 대수" : park_area})
  res.json({Total:park_area, park:bark});
})

//post, request body, response 0

app.post("/api/park/parkBody", (req, res) => {
  const park_id = req.body.id
  const bark = park.filter(data => data.id == park_id);
    if(park_id > park_area)
    res.json({status:"ok", "이 주차장의 최대 주차 대수" : park_area})
  res.json({Total:park_area, park:bark});
})

//path parameter, request parm 0, response 0

app.get("/api/park/number/:car_id", (req, res) => {
  const car_id = req.params.car_id
    if(car_id > park_area)
    res.json({status:"ok", "이 주차장의 최대 주차 대수" : park_area})
  var Free_space = park_area - car_id
  res.json({Total:park_area, Free_space:Free_space});
})

// Query parameter, request param O, response O

app.get("/api/park/number/car/car", (req, res) => {
  const car = req.query.car_id
  console.log(car)
    if(car > park_area)
    res.json({status:"ok", "이 주차장의 최대 주차 대수" : park_area})
  var Free_space = park_area - car
  console.log(Free_space)
  res.json({Total:park_area, Free_space:Free_space});
})






//post, request body, response 0

app.post("/api/park/number/carBody", (req, res) => {
  const car_id = req.body.id
    if(car_id > park_area)
    res.json({status:"ok", "이 주차장의 최대 주차 대수" : park_area})
  var Free_space = park_area - car_id
  res.json({Total:park_area, Feee_space:Free_space});
})

module.exports = app;
