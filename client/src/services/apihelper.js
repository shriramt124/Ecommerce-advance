

export const login = async (username, password) => {
    try {
        const res = await fetch("http://localhost:8000/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })
        const data = await res.json()
        if (!res.ok) {

            throw Error(data.message);
        }
        localStorage.setItem('token', data.token);
        return data;

    } catch (error) {
        throw Error(error.message);
    }


}
export const signup = async (newuser) => {
    try {
        const res = await fetch("http://localhost:8000/api/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newuser)
        })
        const { data } = res.json();
        if (!res.ok) {
            throw Error("failed to signup")
        }
       

        return data;
    } catch (error) {
        throw Error("failed creating your order");




    }
}


export const getAllProducts = async (query) => {
    try {
        let url = `http://localhost:8000/api/product/getAllProducts`;
        if (query) {
            url = url + `?${query}`;
        }
        const res = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json();
        if (!res.ok) {
            throw Error(data.message);
        }
        return data;
    } catch (error) {
        throw Error(data.message);
    }
}

export const getSingleProduct = async (id) => {
    try {
        const res = await fetch(`http://localhost:8000/api/product/productDetail/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json",
                "Authorization": `${localStorage.getItem("token")}`
             },

        })
        const data = await res.json();
        if (!res.ok) {
            throw Error(data.message);
        }
        return data;
    } catch (error) {
        throw Error(error.message);

    }
}

export const getCurrentUser = async ()=>{
    try {
        const res = await fetch("http://localhost:8000/api/user/currentUser",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${localStorage.getItem('token')}`
            }
        })
        const data = await res.json();
        if(!res.ok){
            throw Error(data.message);
        }
        return data;
    } catch (error) {
         throw Error(error.message);
    }
}

export const updateProfile = async (newuser)=>{
        try {
        const res = await fetch("http://localhost:8000/api/user/")
            
        } catch (error) {
            
        }
}