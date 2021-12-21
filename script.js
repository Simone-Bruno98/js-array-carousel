const imgArr = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const titleArr = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const textArr = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let mainContent = '';

//Showcase cycle

for (let i = 0; i < imgArr.length; i++) {
     
    mainContent += `
    <div id="img-${[i+1]}" class="position-relative d-none">
        <img src="${imgArr[i]}">
        <div id="textbox" class="p-3 text-end"><h5 id="title">${titleArr[i]}</h5><span id="description">${textArr[i]}</span></div> 
    </div>
    `
      
}

document.getElementById('main').innerHTML = mainContent;

let thumbsContent = '';

//Image Cycle

for (let i = 0; i < imgArr.length; i++) {
    if(i == 0){
        thumbsContent += `
        <img src="${imgArr[i]}">
        <div id="freccia-su">
            <i class="bi bi-arrow-up"></i>
        </div>    
        `
    }else if(i == 4){
        thumbsContent += `
        <img src="${imgArr[i]}">
        <div id="freccia-giu">
            <i class="bi bi-arrow-down"></i>
        </div>    
        `
    }else{
    thumbsContent += `
    <img src="${imgArr[i]}">
    `
    }
}


document.getElementById('thumbnails').innerHTML = thumbsContent;

//arrows

let prevArrow = document.getElementById('freccia-su');
let nextArrow = document.getElementById('freccia-giu');

//first image for default

let x = 1;
let activated = document.getElementById('img-' + x);
activated.classList.add('active'); 

//up arrow

prevArrow.addEventListener('click', function(){
    if(x == 1){
        x = 5;
        activated.classList.remove('active');
        activated = document.getElementById('img-' + x);
        activated.classList.add('active'); 
    }else{
        activated.classList.remove('active');
        x--;      
        activated = document.getElementById('img-' + x);       
        activated.classList.add('active'); 
    }
});

//down arrow

nextArrow.addEventListener('click', function(){
        if(x == 5){
            x = 1;  
            activated.classList.remove('active');
            activated = document.getElementById('img-' + x);
            activated.classList.add('active'); 
        }else{
            activated.classList.remove('active');
            x++;      
            activated = document.getElementById('img-' + x);       
            activated.classList.add('active'); 
        }
});