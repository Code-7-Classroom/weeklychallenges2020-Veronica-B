let express = require('express');
let app= express();

let data=require(`./employee.json`);


const port=process.env.PORT || 2000;


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

app.get(`/employees`, (req,res)=>{
    if (!data){
        res.status(404).send(`couldnt find the employees rip`)
    }
    res.send(data)
})

app.get('/employees/:id', (req,res)=>{
    const sData=data.employees.find(function(employee){
        console.log(employee.id)
        return parseInt(req.params.id)===employee.id
    })
        if (!sData){
            res.status(404).send(`Couldn't find the employee id`)
        }
        res.send(sData)
      })
