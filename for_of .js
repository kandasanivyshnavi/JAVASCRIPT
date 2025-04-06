
let todo = 
[
    {
        id : 1,
        job : "drinking 2l of water",

    },
    {
        id : 2,
        job : 'attending meeting',

    }

];

for(let todos of todo)
{
    console.log(todos.job);
}

/* output:
drinking 2l of water
attending meeting
*/

/*
this kind of loop is called as for..of loop in js 
*/
