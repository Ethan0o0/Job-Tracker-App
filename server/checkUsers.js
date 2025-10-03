import supabase from "./supabase-client.js";

export default async function checkUsers(req){

    const {email, password} = req.body

    // console.log(email, password, "DATA IS HERE")

    const {data, error} = await supabase
        .from("login-credentials")
        .select("*")
        .eq("email", email)
        .eq("password", password)

    if (error) {
        console.log("Error adding user details", error)
    }

    const userInfo = {id: data[0].id, name: data[0].name};
    // console.log(userInfo)

    if (data.length == 0){
        return false;
    }

    // req.session.user_id = userInfo.id;
    // req.session.name = userInfo.name;

    return userInfo;

}