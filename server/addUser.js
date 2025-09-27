import supabase from "./supabase-client.js";

export default async function addUser(req){

    const {data, error} = await supabase
        .from("login-credentials")
        .insert([{name: req.body.name, email: req.body.email, password: req.body.password}])
        .select()

    if (error) {
        console.log("Error adding user details", error)
    }

}