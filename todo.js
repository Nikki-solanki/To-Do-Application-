//Array to hold todo
var count = 0 
var editingFlag = -1
 var todoArray = [
    {
        id:count++,
        text:"Todo1",
        completed: false

    },
    {
       id:count++, 
        text:"Todo2",
        completed: false
    },
    {
        id:count++,
        text:"Todo3",
        completed: true
    },
    {
        id:count++,
        text:"Todo4",
        completed: false
    },
    {
        id:count++,
        text:"Todo5",
        completed: false
    }
]
const deleteTodo = (id)=>
{
    todoArray =  todoArray.filter(todoTemp =>
    {
        if (id === todoTemp.id)
        {
            return false
        }
        else
        {
            return true
        }
    })
    updateFrontend()
}

const updateFrontend = () =>
{
    var todoList = document.getElementById("todoList")
    todoList.innerHTML = "";
    todoArray.map(todoTemp=>{
        console.log(todoTemp)
        console.log(todoTemp.completed)
        let checkboxInput = ""
        let textTodo = todoTemp.text
        if(todoTemp.completed)
        {
            checkboxInput="<input type='checkbox' checked onchange='onCheckedChange("+todoTemp.id+")'/>"
            textTodo ="<s>"+textTodo+"</s>"
        }
        else{
            checkboxInput="<input type='checkbox' onchange='onCheckedChange("+todoTemp.id+")'/>"
        }
        if(editingFlag === todoTemp.id)
        {
            todoList.innerHTML = todoList.innerHTML +
        "<li>"+
            checkboxInput+
            "<input id='todoEdit' type='text' value="+(todoTemp.text)+"></input>"+
            (todoTemp.completed?
            "":
            "  <button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
            "  <button onclick=saveEditiedTodo("+todoTemp.id+")>Save</button>")+

            "</li>"
        }
        else
        {
            todoList.innerHTML = todoList.innerHTML +
            "<li>"+
                checkboxInput+
                textTodo+
            //todoTemp.text+
            (todoTemp.completed?
            "":
            "  <button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
            "  <button onclick=editTodo("+todoTemp.id+") >Edit</button>")+
            "</li>"
        }
    // return todoTemp
    })
    
}
const saveEditiedTodo=(id)=>
{
    console.log(id)
    todoArray=todoArray.map(todoTemp=>
    {
        if(id ===todoTemp.id)
        {
            todoTemp.text=document.getElementById("todoEdit").value
            return todoTemp
        }
        else{
            return todoTemp
        }
    })
    editingFlag= -1
    updateFrontend()
}

const editTodo=(id)=>
{
    console.log(id)
    editingFlag=id
    updateFrontend()
}

//function,=>

const addTodo = ()=>
{
   let todoText = document.getElementById("todoInput").value
    if(todoText === "")
    {
        alert("Todo can't be blank ,please enter something fot todo !")
    }
    else
    {
        
        todoArray.push(
        {
            id :count++,
            text:todoText,
            completed: false
        })

        //backing the input
        document.getElementById("todoInput").value =""
        console.log(todoArray)
        updateFrontend()
        
    }
}
const onCheckedChange = (id)=>
{
    console.log("onCheckedChange: "+id)
    //data update
    todoArray= todoArray.map(todoTemp=>
    {
        if(id === todoTemp.id)
        {
            todoTemp.completed = !todoTemp.completed
        }
        return todoTemp
    })
    //update frontend
    updateFrontend()
}