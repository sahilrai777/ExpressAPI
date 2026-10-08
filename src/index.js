import express from 'express'
import morgan from 'morgan';



//create a new express app/server object
const app = express();

app.use(morgan('combined'));

function mid1(req, res, next){
  console.log('mid1');
  next();
}

app.get('/ping', mid1, (req, res) => {
  console.log(req.params);
  return res.json({
     message : 'pong'
  })
});//what to do if someone makes a GET request to /ping

 app.post('/ping', (req, res) => 
  { console.log(req.body); 
  return res.json({ message: 'POST request received', data: req.body }); });


app.listen(3000,()=>{
  console.log('Server in running on port 3000 ')
});