const foods = [
  { id: "tuna", name: "טונה", image: "images/tuna.png" },
  { id: "egg", name: "ביצה", image: "images/egg.png" },
  { id: "omelet", name: "חביתה", image: "images/omelet.png" },
  { id: "bread", name: "לחם", image: "images/bread.png" },
  { id: "toast", name: "טוסט", image: "images/toast.png" },
  { id: "yellow-cheese", name: "גבינה צהובה", image: "images/yellow-cheese.png" },
  { id: "white-cheese", name: "גבינה לבנה", image: "images/white-cheese.png" },
  { id: "cottage", name: "קוטג'", image: "images/cottage.png" },
  { id: "peanut-butter", name: "חמאת בוטנים", image: "images/peanut-butter.png" },
  { id: "cornflakes", name: "קורנפלקס", image: "images/cornflakes.png" },
  { id: "choco", name: "שוקו", image: "images/choco.png" },
  { id: "actimel", name: "אקטימל", image: "images/actimel.png" }
];

const foodsContainer = document.getElementById("foods");
const morningBox = document.getElementById("morningBox");
const snackBox = document.getElementById("snackBox");

let dragged = null;

foods.forEach(food => {
  const card = document.createElement("div");
  card.className = "food-card";
  card.draggable = true;
  card.dataset.food = food.id;

  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    <span>${food.name}</span>
  `;

  card.addEventListener("dragstart", () => {
    dragged = card;
  });

  foodsContainer.appendChild(card);
});

function setupDrop(box) {

  box.addEventListener("dragover", e => {
    e.preventDefault();
  });

  box.addEventListener("drop", e => {
    e.preventDefault();

    if (!dragged) return;

    const exists = [...box.querySelectorAll(".food-card")]
      .some(card => card.dataset.food === dragged.dataset.food);

    if (exists) return;

    const copy = dragged.cloneNode(true);

    copy.draggable = false;

    copy.addEventListener("click", () => {
      copy.remove();
    });

    box.appendChild(copy);
    
  });setupDrop(morningBox);
setupDrop(snackBox);

document.getElementById("resetBtn").addEventListener("click", () => {
  morningBox.innerHTML = "";
  snackBox.innerHTML = "";
  document.getElementById("message").textContent = "";
});

document.getElementById("finishBtn").addEventListener("click", () => {

  const total =
    morningBox.querySelectorAll(".food-card").length +
    snackBox.querySelectorAll(".food-card").length;

  if (total === 0) {
    alert("בחר לפחות מאכל אחד 😊");
    return;
  }

  document.getElementById("message").textContent =
    "כל הכבוד אלכס! 🎉 הקופסה מוכנה!";
});

}
