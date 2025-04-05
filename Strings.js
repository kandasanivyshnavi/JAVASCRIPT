
// .......................................................//

//STRING METHODS AND PROPERTIES
 /* method  must ends with ()
 properties should not have ()
  eg : length is  a property not a method 
  eg : toUpperCase() is a method 
  */


// length property

let  sentense = 'vyshnavi , mamatha , manasa are sisters';

console.log(sentense.length);
console.log(sentense.toUpperCase());
console.log(sentense.toLowerCase());
console.log(sentense.split(','));
console.log(sentense.split(''));

/* output :
39
VYSHNAVI , MAMATHA , MANASA ARE SISTERS
vyshnavi , mamatha , manasa are sisters
[ 'vyshnavi ', ' mamatha ', ' manasa are sisters' ]
[
  'v', 'y', 's', 'h', 'n', 'a', 'v',
  'i', ' ', ',', ' ', 'm', 'a', 'm',
  'a', 't', 'h', 'a', ' ', ',', ' ',
  'm', 'a', 'n', 'a', 's', 'a', ' ',
  'a', 'r', 'e', ' ', 's', 'i', 's',
  't', 'e', 'r', 's'
]
*/
