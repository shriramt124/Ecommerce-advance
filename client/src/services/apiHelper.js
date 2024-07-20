const url = "http://localhost:8000/api/product";

export async function getAllProducts(queries) {
   let urls = `${url}/getAllProducts`;
   if(queries){
    urls += `?${queries}`;
   }
    const res = await fetch(urls, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(res);
    if (!res.status) {
        throw new Error("error in loading data");
    }
    const { data } = await res.json();
    return data;

}
