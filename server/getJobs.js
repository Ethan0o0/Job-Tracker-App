import supabase from "./supabase-client.js";

export default async function getJobs(req){

    const {data, error} = await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", req.user.id)

    if (error) {
        console.log("Error adding job details", error)
    }

    return data;
}