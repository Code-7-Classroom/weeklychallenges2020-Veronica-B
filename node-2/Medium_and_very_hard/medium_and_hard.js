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

app.post(`/employees`, (req,res)=>{
    if (!data){
        res.status(404).send(`couldnt find the employees rip`)
    }else{
        // console.log(data)
        data['employees'].push({
        "name":"Roderick",
        "id":11,
        "money":50000,
        "department":"Cook"});

        res.send(data)
    }
   
})

app.put(`/employees/:id`, (req,res)=>{
    if (!data){
        res.status(404).send(`couldnt find the employees rip`)
    }else{
        update=data['employees'].find((employee)=>{
         return parseInt(req.params.id)===employee.id
        })

        update.money=75000

        res.send(data)
    }
   
})

app.delete(`/employees/:id`, (req,res)=>{
    if (!data){
        res.status(404).send(`couldnt find the employees rip`)
    }else{
        // console.log(data)
        data['employees'].splice(req.params.id-1, 1)

        res.send(data)
    }
   
})

app.get('/employees/:id', (req,res)=>{
    const sData=data.employees.find(function(employee){
        console.log(parseInt(req.params.id))
        return parseInt(req.params.id)===employee.id
    })
        if (!sData){
            res.status(404).send(`Couldn't find the employee id`)
        }else{
        res.send(sData)
        }
      })
