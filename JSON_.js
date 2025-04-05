/*
JSON, or JavaScript Object Notation, is a lightweight, human-readable text-based format for storing and exchanging data, 
commonly used in web applications to transmit data between a server and a client. 
It uses key-value pairs and arrays to represent structured data
an open standard format for creating and storing files or exchanging data that uses comprehensible 
and human-readable text made up of attributes and serializable values

*/

// ............JSON .......//

let todoList = 
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

let todoList_to_JSON = JSON.stringify(todoList);
console.log(todoList_to_JSON);


// output :   [{"id":1,"job":"drinking 2l of water"},{"id":2,"job":"attending meeting"}]


//   JOIN.stringify();






