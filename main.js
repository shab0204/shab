
// for ( let i= 1 ; i <= 100;i++){
//     console.log(i);
// }

// for ( let i= -100 ; i <= 1; i++){
//     console.log(i);
// }
// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }

// for(let i = 1 ; i <= 100;i++){
//     if(i % 2 === 0)
//     console.log(i);
// }
// for(let i= 1 ; i <= 100;i++){
//     if(i % 3 === 0)
//     console.log(i);
// }
// let numbersPush = []
// for ( let i= 1 ; i <= 100;i++){
//     console.log(numbersPush.push(i));
// }
// let numbersPush = []
// for(let i= 2 ; i <= 100; i += 2 ){
  
//      numbersPush.push(i)
//      console.log((i));
// for(let i = 1 ;i<=100;i++){
//     if(i % 2 === 0 ){
//         numbersPush.push(i)
//         console.log(numbersPush);;
//     }
// }
    
// }
// let numbersPush = []
// for ( let i= 1 ; i <= 10; i++){
//         console.log(numbersPush.push(i));
//     }
// let numbers = [ 2,3,-4,-5,8,-7,-9,78,-4]
// let numbersNegative = numbers.filter(number => number < 0)
// const numbersCount = numbersNegative.length
// console.log(numbersCount);
// let numbers = [ 2,3,-4,-5,8,-7,-9,78,-4]
// let positivNumbers = numbers.filter(number => number > 0)
// console.log(positivNumbers);

// let string = 'year'
// string = string.slice(0,-2,)+string.slice(-1)
// console.log(string);
// setInterval(() => {
//     if (document.body.style.background == "white") {
//     document.body.style.background = "blue";
//     } else if (document.body.style.background == "green"){
//     document.body.style.background = "white";
//     }
//     else{
//         document.body.style.background = "green";
//     }
//     },300);
// document.body.style.background = "yellow";              /* заменим цвет фона на желтьій, */


// let timerId = setInterval(() => {                        /* каждую 1 сек изменим цвет фона на ...*/
//     if (document.body.style.background == "yellow") {
//         document.body.style.background = "red";
//     } else if (document.body.style.background == "green") {
//         document.body.style.background = "yellow";
//     } else {
//         document.body.style.background = "green";
//     }
// }, 1000
// );

// let timerId1 = setTimeout( () => {                        /* а через 12 секунд вернём как было*/
//     clearInterval(timerId);
//     document.body.style.background = "yellow"; 
//     alert("Stop"); 
// }, 12000 
// );
const rootElem = document.getElementById('root')
const postObj = {
    title:'Пост об Д',
    img:'https://trikky.ru/wp-content/blogs.dir/1/files/2020/04/22/1564314090_3.jpg',
    likes:'87',
    user:'Буми'
}
const post = document.getElementById('post')
document.getElementById("title").innerHTML = postObj.title;
document.getElementById("img").src = postObj.img;
document.getElementById("likes").innerHTML = postObj.likes;
document.getElementById("user").innerHTML = postObj.user;