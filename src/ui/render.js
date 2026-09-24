export function renderPrograms(arr) {
    const cardStr = arr.map(obj =>
        `
        <div class="card">
            <h3>${obj.title}</h3>
            <h4>Kategória: ${obj.category}</h4>
            <p>Ár: ${obj.price} Ft</p>
            <p>Maximális létszám: ${obj.capacity}</p>
            <p>Szabad helyek: ${obj.capacity - obj.participants}</p>
            <p>${obj.indoor ? "beltéri" : "kültéri"}</p>
        </div>
        `
    ).join("");
    document.querySelector(".programs").innerHTML = cardStr;
}

export function renderCateg(arr) {
    let categories = arr.map(obj => obj.category);
    categories = [...new Set(categories)];
    const btnStr = categories.map(ctg =>
        `
        <button>${ctg}</button>
        `
    ).join("");
    document.querySelector("header").innerHTML = "<button class='activeBtn'>összes</button>" + btnStr;
}

export function renderFooter(arr) {
    const ossz_resztv = arr.reduce((acc, obj) => acc + obj.participants, 0);
    const atl_resztv_dij = arr.reduce((acc, obj) => acc + obj.price, 0) / arr.length;
    const jelen_bevetel = arr.reduce((acc, obj) => acc + obj.price * obj.participants, 0);
    const belteri_sum = arr.reduce((acc, obj) => obj.indoor ? acc + 1 : acc, 0);
    const kulteri_sum = arr.reduce((acc, obj) => obj.indoor ? acc : acc + 1, 0);
    document.querySelector("footer").innerHTML =
        `
    <p>Összes résztvevő: ${ossz_resztv}, Átlagos részvételi díj: ${atl_resztv_dij} Ft, Jelenlegi bevétel: ${jelen_bevetel} Ft, Beltéri programok: ${belteri_sum}, Kültéri programok: ${kulteri_sum}</p>
    `;
}