
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

// var obj = [1,2,3,7]
// var obj2 = [19,18,17]
// var obj3 = [5,6,4,2]
// function boom(ob) {
  
//     if (ob.includes(7)  ) {
//         return "boom"
        
//       }  
//       else {
//         for (let index = 0; index < ob.length; index++) 
//          if (ob[index].toString().split('').includes('7'))  {
//          return  "boom"       
    
            
            
//         }
    
//       }
//     return "sayeb alina bla taty7 9daer"



// }
// console.log(boom(obj2));

// function ovs(string) {

    
// }

// var x = 'bonjour hamadi'


// function oddLengthReverse (str) {

//   // splitin the string to seperate words 
//     var tab = str.split(' ')

//     /// looping the new array 
//     for (let i = 0; i < tab.length; i++) {
//       // checking if the current word have an odd length
//       if(!(tab[i].length %2 == 0)){
//         // if the current word have an odd length // split to an array an then reverese it 
//         // creqting a helper variable that zill store the reversed array string 
//          var aux = tab[i].split('').reverse()
//          // revert the convert string to array back to a string 
//          var aux_1 = ''
//          for(var j = 0 ;j < aux.length;j++){
//           aux_1 = aux_1+ aux[j]
//          }
//          // replace the non reversed string with the new reversed string in the original array 
//          tab[i]=aux_1
//         }
        
//     }
//    var final = ''
//     for (let i = 0; i < tab.length; i++) {
//       final = final+' '+tab[i]
      
//     }
//    return final 
// } 
// console.log(oddLengthReverse(x));
