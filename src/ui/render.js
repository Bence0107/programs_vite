export function renderPrograms(arr) {
    const cardStr = arr.map(obj =>
        `
        <div class="card">
            <h3>${obj.title}</h3>
            <h4>Kategória: ${obj.category}</h4>
            <p>Ár: ${obj.price}</p>
            <p>Résztvevők: ${obj.participants}</p>
            <p>Helyek: ${obj.capacity}</p>
            <p>${obj.indoor ? "beltéri" : "kültéri"}</p>
        </div>
        `
    ).join("");
    document.querySelector(".programs").innerHTML = cardStr;
}

export function renderCateg(arr) {
    let categories = arr.map(obj => obj.category);
    console.log(categories);
    categories = [...new Set(categories)];
    console.log(categories);
    categories = [...categories, "összes"]
    const btnStr = categories.map(ctg =>
        `
        <button>${ctg}</button>
        `
    ).join("");
    document.querySelector("header").innerHTML = btnStr;
}