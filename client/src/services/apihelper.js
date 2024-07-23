

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
    localStorage.setItem('token',data.token);
    return data;
 
    } catch (error) {
        throw Error(error.message);
    }
   

}
export const signup = async (newuser) => {
    try{
    const res = await fetch("http://localhost:8000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newuser)
    })
    
    if (!res.ok) {
        throw Error("failed to signup")
    }
    const {data} = res.json();
   
    return data;
}catch(error){
    throw Error("failed creating your order");
    
}
}

