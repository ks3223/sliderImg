let img = document.querySelector('#img');
let arr=["https://proprikol.ru/wp-content/uploads/2019/12/krasivye-kartinki-pro-zimu-72.jpg",
"https://kartinki.pics/uploads/posts/2022-03/thumbs/1646733179_2-kartinkin-net-p-kartinki-prirodi-leto-2.jpg",
"https://binomen.ru/photo/uploads/posts/2023-11/1698906869_binomen-ru-p-osennyaya-dubovaya-roshcha-krasivo-1.jpg"
]
let ar1 = document.querySelector('#ar1');
let ar2 = document.querySelector('#ar2');
let i = 0;
img.scr = arr[0];
if (i == 0){
    img.scr = arr[i];
}
console.log(i);
ar1.addEventListener('click',()=>{
i--;
img.src = arr[i];
if (i < 0){
    i=2;
    img.src = arr[i];
}
if (i > arr.length){
    i=0;
}
console.log(i);
})
ar2.addEventListener('click',()=>{
i++;
img.src = arr[i];   
if (i == arr.length){
    i=0;
    img.src = arr[i];
}
console.log(i);
})
