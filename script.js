const foods = [
  { name: "טונה", image: "images/tuna.png" },
  { name: "ביצה", image: "images/egg.png" },
  { name: "חביתה", image: "images/omelet.png" },
  { name: "לחם", image: "images/bread.png" },
  { name: "טוסט", image: "images/toast.png" },
  { name: "גבינה צהובה", image: "images/yellow-cheese.png" },
  { name: "גבינה לבנה", image: "images/white-cheese.png" },
  { name: "קוטג'", image: "images/cottage.png" },
  { name: "חמאת בוטנים", image: "images/peanut-butter.png" },
  { name: "קורנפלקס", image: "images/cornflakes.png" },
  { name: "שוקו", image: "images/choco.png" },
  { name: "אקטימל", image: "images/actimel.png" }
];

const foodsContainer = document.getElementById("foods");

foods.forEach(food => {
  const card = document.createElement("div");
  card.className = "food-card";

  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    <span>${food.name}</span>
  `;

  foodsContainer.appendChild(card);
});

Sortable.create(foodsContainer, {
  group: {
    name: "foods",
    pull: "clone",
    put: false
  },
  sort: false,
  animation: 150
});

Sortable.create(document.getElementById("morningBox"), {
  group: "foods",
  animation: 150
});

Sortable.create(document.getElementById("snackBox"), {
  group: "foods",
  animation: 150
});

document.getElementById("resetBtn").onclick = () => {
  document.getElementById("morningBox").innerHTML = "";
  document.getElementById("snackBox").innerHTML = "";
  document.getElementById("message").textContent = "";
};

document.getElementById("finishBtn").onclick = () => {
  document.getElementById("message").textContent =
    "כל הכבוד אלכס! 🌟";
};
