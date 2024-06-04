    const searchBox = document.getElementById("searchBox");
    const searchBtn = document.getElementById("searchBtn");
    const cardContainer =  document.getElementById("recipeContainer");
        
    
  const fetchData = async (query)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    cardContainer.innerHTML = `<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">Fetching recipes</div>
  </div>`
    const data= await fetch(url);
    const response =await data.json();
    cardContainer.innerHTML = '';
    response.meals.forEach(meal=>{
        console.log(meal); 
        const card = document.createElement('div');
        card.className = "col-md-4 mb-4"; 
card.innerHTML = `
<div class="card" style="width: 100%;">
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0, 100)}...</p>
  <a href="${meal.strSource || '#'}" class="btn btn-primary">View Recipe</a>
</div>`
cardContainer.appendChild(card);
    })
  }


    searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const searchValue = searchBox.value.trim();
            fetchData(searchValue);
        });
