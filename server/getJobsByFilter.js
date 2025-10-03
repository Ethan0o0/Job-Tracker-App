import supabase from "./supabase-client.js";

export default async function getJobsByFilter(req){

    const filter = req.params.filter;
    const id = req.user.id;

    // console.log(filter, id, "DATA IS HERE")
    // console.log("REACHED FILTER")

    const {data, error} = await supabase
        .from("jobs")
        .select("*")
        .eq('status', filter)
        .eq('user_id', id)

    if (error) {
        console.log("Error adding job details", error)
    }

    return data;
}