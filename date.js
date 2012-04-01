var date = [];
var i;
for(i=0; i<3; i++)
{
    user_data = prompt("Enter number:");
    date.push(user_data);
}

var today=new Date(date[0],date[1],date[2]);
console.log(today);
//today now is set to be 280 days into the future
today.setDate(today.getDate()+280); 

console.log(today);