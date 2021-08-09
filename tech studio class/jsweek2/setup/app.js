// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];



// target all component for manipulation usinng the dom api

const img = document.querySelector('#person-img')
const author = document.querySelector('#author')
const job = document.querySelector('#job')
const info = document.querySelector('#info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn  = document.querySelector('.random-btn')

// console.log(img, author, job, info, prevBtn, nextBtn, randomBtn);

let currentPerson = 0
console.log(currentPerson);

window.addEventListener('DOMContentLoaded', function(){
  const person = reviews[currentPerson]
  img.src = person.img
  author.textContent = person.name
  job.textContent = person.job
  info.textContent = person.text
  
} )


// create a show person function based on the list of object
function showPerson(individual){
  const person = reviews[individual]
  img.src = person.img
  author.textContent = person.name
  job.textContent = person.job
  info.textContent = person.text

}

nextBtn.addEventListener('click',function(){
  currentPerson++ 
  if(currentPerson > reviews.length - 1){
    currentPerson =0
  }

  
  showPerson(currentPerson);

} )
prevBtn.addEventListener('click',function(){
  currentPerson-- 
  if(currentPerson < 0 ){
    currentPerson = reviews.length - 1
  }

  showPerson(currentPerson);

} )

randomBtn.addEventListener('click', function(){
  randomperson= Math.floor(Math.random() * reviews.length )
  showPerson(randomperson)
})
















