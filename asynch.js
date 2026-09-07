function fetchUser(){
     return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const sucess=Math.random()>0.5

            if(sucess){
                resolve({
                    Id:"2",
                    Name:"John Doe",
                    email:"John@gmail.com",
                    Role:"Software Developer",
                })
            }else{
                reject(new Error ("Unable to fetch user data "));                
            }
        }, 2000);
     })
}
async function getUserProfile(){
    try{
        console.log("Fetching user....");

        const user=await fetchUser();

        console.log("User datails");
        console.log("Id:",user.id);
        console.log("Name:",user.Name);
        console.log("Email:",user.email);
        console.log("Role:",user.Role);
    }catch(error){
        console.log("Error",error.message);
    }
}
getUserProfile();


/////////////////////2//////////////////