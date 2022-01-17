let mealsData = [];
const form = document.querySelector("form");

async function fetchMeals(reseachMeal) {
  await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + reseachMeal + ""
  )
    .then((res) => res.json())
    .then((data) => (mealsData = data.meals));

  console.log(mealsData);
  mealsDisplay();
}

function mealsDisplay() {
  mealsContianer.innerHTML = mealsData
  .slice(0, 12)

    .map(
      (meals) =>
        `
      <div class="card">
      <h2>${meals.strMeal}</h2>
      <span>${meals.strArea}</span>
      <img src="${meals.strMealThumb}" alt="Image of ${meals.strMeal}">
      <iframe src="${meals.strYoutube.replace("watch?v=","embed/")}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      `
    )
    .join("");
}

// window.addEventListener("load", );
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchMeals(meal_name.value);
});
