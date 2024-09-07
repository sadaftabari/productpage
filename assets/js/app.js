let json = [];
async function product() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`your error is:${response.status}`);

    json = await response.json();
    generateproducts();
  } catch {}
}
function generateproducts() {
  json.map((item) => {
    const card = $(`<div class="col-4">
         <div class="card mb-4">
        <div class="card-body"><span class="header-card-text text-black p-1">category:${item.category}</span></div>
       <div class="img-box"> <img class="card-img-top" src="${item.image}" alt="Card image cap"></div>
        <div class="card-body card-body-btm d-flex flex-column align-items-center justify-content-between">
        <span class="price bg-black rounded-5 p-2 text-white">price($):${item.price}</span>
        <h5 class="card-title">${item.title}</h5>
       <button type="button" class="btn  btn-lg btn-block w-100 btn-outline-dark">see more</button>
  </div>
</div>
        </div>
     `);

    $(".product-box").append(card);
  });
}
product();

/* <div class="card ">
<img src="${item.image}" class="card-img-top" alt="..." />
<div class="card-body">
  <h5 class="card-title">${item.title}</h5>
  <p class="card-text">
    ${item.description}
  </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"> 💵price($):${item.price}</li>
  <li class="list-group-item">📋category: ${item.category}</li>
 
</ul>

</div> */
