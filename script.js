//local review data
const reviews = [{
    id: 1,
    author: 'susan smith',
    job: 'web-developer',
    img: "./img/pic-1.png",
   info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut doloribus obcaecati magni officiis sint laborum quae sapiente iusto natus assumenda"
   
},
{
    id: 2,
    author: 'Laura smith',
    job: 'web-designer',
    img: "./img/pic-2.png",
   info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut doloribus obcaecati magni officiis sint laborum quae sapiente iusto natus assumenda"
   
},
{
    id: 3,
    author: 'Mike smith',
    job: 'ux-designer',
    img: "./img/pic-3.png",
   info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut doloribus obcaecati magni officiis sint laborum quae sapiente iusto natus assumenda"
   
}
];


//selct items

const img = document.getElementById('img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const randomBtn = document.querySelector('.btn');

let currentItem = 0;

// load inital item

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// show person fuction

function showPerson(person) {
     const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

//show next person

next.addEventListener('click', function () {
     currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    } 
        showPerson(currentItem);
    
});

//show prev person
prev.addEventListener('click', function () {
     currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    } 
        showPerson(currentItem);
    
});

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

