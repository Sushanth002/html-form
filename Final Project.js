function firstnamefield()//creating function for first name
{
    var first=document.getElementById("first").value;//assigning the value
    if(first.length != "")//checking the input with if 
    {
        document.getElementById("message1").innerHTML="Done";//printing the output
    }
    else
    {
        document.getElementById("message1").innerHTML="Please type your first name";
    }
}
function lastnamefield()//creating function for last name
{
    var last=document.getElementById("last").value;//assigning the value
    if(last.length != "")//checking the input with if 
    {
        document.getElementById("message2").innerHTML="Done";//printing the output
    }
    else
    {
        document.getElementById("message2").innerHTML="Please type your last name";
    }
}
