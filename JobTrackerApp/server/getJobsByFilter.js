import supabase from "./supabase-client.js";

export default async function getJobsByFilter(req){

    const filter = req.params.filter;

    const {data, error} = await supabase
        .from("jobs")
        .select("*")
        .eq('status', filter)

    if (error) {
        console.log("Error adding job details", error)
    }

    return data;
}