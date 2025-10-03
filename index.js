//Merging Author and Comment Data

/*async function fetchData(userID) {
    try {
        //make an API request
       let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user${userID=1}`);
       //check if the request is ok
       if (!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
       }
       //perse the json data
       let data = await response.json();
       return data;

    } catch (error) {
        console.error(`could not fetch data: ${error}`)
        return null;
    }
}
async function displayUser() {
    //const userId= await fetchData(userId=1);
    const user = await fetchData(1);
    if (user){
        console.log(`user id: ${user.id}`);
        console.log(`user title: ${user.title}`);
    }
    else {
        console.log(` no user data available`);
    }
    
}*/

// Handling Product Data and Price Calculation
async function fetchProducts(){
    try{
        let response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        let products = await response.json();
        return products;

    }
    catch (error){
        console.error(`could not fetch products: ${error}`);
        return null;
    }
    async function displayProducts(){
        const productData = await fetchData();
        if (productData ){
            productData.product .array.forEach(products => {
                console.log(`product id: ${products.id}`);
                console.log(`product title: ${products.title}`);
                console.log(`product price: ${products.price}`);

                
            });
        }
    }

}

