let btn = document.querySelector("#new");
let quote =document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes=[{quote:'We cannot solve problems with the kind of thinking we employed when we came up with them.',
person:' Albert Einstein'

},
{
    quote:"“Learn as if you will live forever, live like you will die tomorrow.”",
    person: "Mahatma Gandhi"
},
{
    quote:"“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",
    person:"Mark Twain"
},];

btn.addEventListener('click',function()
{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[]
})   