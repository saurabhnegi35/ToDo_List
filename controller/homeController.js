//const db = require('./config/mongoose')
const TodoLists = require('../models/todo_list')
// function for redirecting to main home page
module.exports.home = function(req,res){
    // fetching using mongoose
    TodoLists.find({},function(err,todo){
        if(err){
            console.log('error in fetching data');
            return
        }
        
        return res.render('homePage',{
            title:"Home",
            todoList:todo
           
        });
    });
}
// function for new Data
function DateValeu(dueDate){
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'] // static value for implementing month value


    newdate = '';
    let month = '';
    // checking months 
    if(dueDate[1] == '01'){
        month=months[0];
    }
    else if(dueDate[1] == '02'){
        month=months[1];
    }else if(dueDate[1] == '03'){
        month=months[2];
    }else if(dueDate[1] == '04'){
        month=months[3];
    }else if(dueDate[1] == '04'){
        month=months[3];
    }else if(dueDate[1] == '05'){
        month=months[4];
    }else if(dueDate[1] == '06'){
        month=months[5];
    }else if(dueDate[1] == '07'){
        month=months[6];
    }else if(dueDate[1] == '08'){
        month=months[7];
    }else if(dueDate[1] == '09'){
        month=months[8];
    }else if(dueDate[1] == '10'){
        month=months[9];
    }else if(dueDate[1] == '11'){
        month=months[10];
    }else if(dueDate[1] == '12'){
        month=months[11];
    }
    newdate =dueDate[2]+'-'+month+'-'+dueDate[0] // displaying date in dd-mm-yyyy formate
    return newdate;
}

// function for creating toto list
module.exports.createTodo = function(req,res){
    dueDate =req.body.dateValue.split('-'); // splitting date and taking montha value
   let newdate='';
    newdate= DateValeu(dueDate);     
    TodoLists.create({ // crating new todo and storing into DB
        desc:req.body.desc,
        category:req.body.category,
        dueDate: newdate
    },function(err,newArr){
        if(err){
            console.log('Oops an error has occures ');
            return;
        }
        return res.redirect('/');
    })
}
// function for deleting todo list
module.exports.deleteTodo = function(req,res){ 
    sp = req.query.id; // getting the id from ui
    newsp = sp.split(','); 
    for(let i=0;i<newsp.length;i++){ // looping over newsp  to delete all the checked value
        TodoLists.findByIdAndDelete(newsp[i],function(err){
            if(err){
                console.log('err');
                return;
            }
        })
    }
return res.redirect('/');
}
// function for fetching data for edit page
module.exports.EditPage = function(req,res){ // here we are fetching the data whic need to be edited
    console.log('aaa',req.query)
    TodoLists.findById(req.query.id,function(err,todoLists){
        if(err){ console.log('hi man!! it an error'); return}
        return res.render('editPage',{
        title:'Edit Page',
        todolist:todoLists
        });
    });
}
// function for updatind tada after the todo is being edited
module.exports.editDetails = function(req,res){
    dueDate =req.body.dueDate.split('-'); // splitting date and taking montha value
    let newdate='';
    newdate= DateValeu(dueDate);     
     TodoLists.updateOne({_id:req.query.id},{$set:{desc:req.body.desc,category:req.body.category,dueDate:newdate}} ,function(err,todoData){
        if(err){console.log('error while updating'); return}
        return res.redirect('/');
    });
}

