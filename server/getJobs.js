import supabase from "./supabase-client.js";

export default async function getJobs(req){

    // console.log(req.params.id)
    // console.log("REACHED ONLY GET JOBS")

    const {data, error} = await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", req.params.id)

    if (error) {
        console.log("Error adding job details", error)
    }

    return data;
}