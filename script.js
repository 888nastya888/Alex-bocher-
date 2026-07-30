const foods = [
  { id: "tuna", name: "טונה עם מיונז", image: "images/tuna.png" },
  { id: "cornflakes", name: "קורנפלקס", image: "images/cornflakes.png" },
  { id: "actimel", name: "אקטימל", image: "images/actimel.png" },
  { id: "omelet", name: "חביטה", image: "images/omelet.png" },
  { id: "egg", name: "ביצה קשה", image: "images/egg.png" },
  { id: "bread", name: "לחם", image: "images/bread.png" },
  { id: "white-cheese", name: "גבינה לבנה", image: "images/white-cheese.png" },
  { id: "yellow-cheese", name: "גבינה צהובה", image: "images/yellow-cheese.png" },
  { id: "cottage", name: "קוטג'", image: "images/cottage.png" },
  { id: "toast", name: "טוסט עם גבינה צהובה", image: "images/toast.png" },
  { id: "choco", name: "שוקו", image: "images/choco.png" },
  { id: "peanut", name: "חמאת בוטנים", image: "images/peanut-butter.png" }
];

const foodsContainer = document.getElementById("foods");

foods.forEach(food => {

    const card = document.createElement("div");

    card.className = "food-card";

    card.draggable = true;

    card.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <span>${food.name}</span>
    `;

    card.dataset.food = food.id;

    foodsContainer.appendChild(card);

});

let dragged = null;

document.addEventListener("dragstart", e => {

    if(e.target.classList.contains("food-card")){

        dragged = e.target;

    }

});

document.querySelectorAll(".dropzone").forEach(box=>{

    box.addEventListener("dragover",e=>{

        e.preventDefault();

    });

    box.addEventListener("drop",e=>{

        e.preventDefault();

        if(dragged){

            box.appendChild(dragged);

        }

    });

});

document.getElementById("finishBtn").onclick=()=>{

    const total=document.querySelectorAll(".dropzone .food-card").length;

    if(total===0){

        alert("בחר לפחות מאכל אחד 😊");

        return;

    }

    alert("כל הכבוד אלכס! 🎉");

};

document.getElementById("resetBtn").onclick=()=>{

    foodsContainer.innerHTML="";

    foods.forEach(food=>{

        const card=document.createElement("div");

        card.className="food-card";

        card.draggable=true;

        card.innerHTML=`
        <img src="${food.image}">
        <span>${food.name}</span>
        `;

        foodsContainer.appendChild(card);

    });

    location.reload();

};
