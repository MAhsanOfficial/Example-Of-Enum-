// What is Enum ? .
// Enum ko hum "Enumeration" bhi kehte hain...or enum ky Undr predefined lists hoti jo k ek constant value hoti hai ...
// // constant value ek aysi value hoti ha jo k pir dobara change nhi ho sakhy...Or Enum Humesha index value return kr ta..
// // // Similar ha array likin me us ki key pair defined kr sakhte hain jo k developer ko asani se samj a jai ga ...
// // // Agr ap Key Property Ki value nhi defined karege to wo humesha uska answer index me ayga or wo index number ...
// // // har value me increment ko surat me hoga ....


// There are two condition of "Enum".
// 1)Numeric.
// 2)Strings.



// Example Of Enum :=>
// Enum Humesha constant ki value ki decleared kr ta jo k baat me change na ho mean ky... 1week me 7 days hote hain ...
// or wo days fixed hain 8 days kabi nhi ho sakhte ...or un ky name bhi fixed hain ...




// Is Enum me mene Enum k undr data nhi dia mean k is k andr koi value nhi di.likin wo pir bhi index ki surat me ...
// return kr rha ha ...
enum days{                      // these are constant data in enum because in not change in enum ...
    mon,                      
    tue,
    wed,
    thur,
    fri,
    sat,
    sun
}
let day1 = days.tue
console.log(day1);             // is enum ki key ka answer 1 aya ...kiun index no se start hori ha or increment kr rahi..
                             //// value .






enum days2{                  // is par humne ab numeric value di ha us hisab se us ki value age increment howa ha ...
 mon,                       // agr nhi dete to wo apne index k number k hisab se age increment kr ta magr jab humne value...
 tue,                       // di ha to wo apne index k number k hisab se age increment krta...
 wed,
 thur=12,                
 fri,
 sat,
 sun
  }
   let day2 = days.sat
console.log(day2);                 // is ka answer 14 aya kiun k apne is phele wali value thur ki 12 thi to increment ...
                                   // howi to 2 value ho age gai to 14 hogai ...




                                

 enum days3{                 
  mon="monday",                       
 tue="tuesday",                    
 wed="wednesday",
 thur="thursday",                
fri="friday",
 sat="saturaday",
sun="sunday"
      }
  let day3 = days.sat   /// to ab iski value saturaday hogai ha kiun k humne is me string me value di or uska answer...
 console.log(day3);    // // dia ha hume... 
 
 

 /// /// Real Example Of "Enum"
 // Enum use karne ka basic maqsad ye ha k agr hum koi game bana te hain jis pe hum arrow lagate hain "LEFT","RIGHT",
 // "UP","DOWN" ab jis ne game banai ha us ne ek enum me hi ye sab ki key value rakh di ha or jis function me zarorat 
 //  thi us par us enum ki type di or us ki ko mention krdia to us k mutabiq wo enum ne apna kam kiya mean k enum ...
 // enum option ki tarah k kisi me apne enum ki type di or us option acess kiya ...