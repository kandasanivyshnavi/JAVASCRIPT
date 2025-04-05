let person = 
{
    name:"mamatha",
    hobbies : ['movies','music','dancing'],
    age :1,
    address :
    {
        town:"amaravathi",
        dNo : 8,
        state : "AP"
    } 
};

console.log(person);
console.log(person.hobbies);
console.log(person.address.town);
console.log(person.name, person.age);

/*
{
  name: 'mamatha',
  hobbies: [ 'movies', 'music', 'dancing' ],
  age: 1,
  address: { town: 'amaravathi', dNo: 8, state: 'AP' }
}
[ 'movies', 'music', 'dancing' ]
amaravathi
mamatha 1
*/

//....list of object .....


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
console.log(todo);
console.log(todo[1]);
console.log(todo[1].id, todo[0].job);

/*
mamatha 1
[
  { id: 1, job: 'drinking 2l of water' },
  { id: 2, job: 'attending meeting' }
]
{ id: 2, job: 'attending meeting' }
2 drinking 2l of water
*/
