async function GetPerson(name) {
  var endpoint1 = `https://api.github.com/users/${name}`;
  var endpoint2 = "https://mma-ufc-news.p.rapidapi.com/latest";
  const Pos = await fetch(endpoint2, {});
  const json = await Pos.json();

  console.log(JSON.stringify(json, undefined, 2));
}

//GetPerson("Mengkheang0");

const input = document.getElementById("search");
const btn = document.getElementById("btn");
const content = document.getElementById("content");

btn.addEventListener("click", (e) => {
    e.preventDefault();
  if (input.value.length > 0) {

    content.innerText ="";
    async function getRepos(name)
    {
        var endpoint = `https://api.github.com/users/${name}`;
        var Repos = await fetch(endpoint);
        var Json = await Repos.json();

        var endpoint2 = Json.repos_url;
        var Repos2 = await fetch(endpoint2);
        var Json2 = await Repos2.json();

        Json2.forEach(element => {

            var box = document.createElement('span');
            box.innerHTML = `
            <div class="card" style="width: 14rem;">
            <img class="card-img-top" src="./images/convert.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title fw-bold">${element.name}</h5>
              <p class="card-text">${element.description}</p>
              <a href="${element.html_url}" class="btn btn-primary">Visit</a>
            </div>
          </div>
            `;
            content.appendChild(box);

        });

        
    }
    getRepos(input.value);

    
  } else {
    alert("input can't be empty or valid user account");
  }
});
