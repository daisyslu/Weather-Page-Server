let express = require('express');
let app = express();

// app.get('/',(request, response)=>{
//     response.send("Hello");
// })

// app.get('/about',(request, response)=>{
//     response.send("this is an about page");
// })

app.use('/', express.static('Project-1'));

app.listen(3000,()=>{
    console.log("app is listening at localhost:3000")
})