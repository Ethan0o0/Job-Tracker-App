import supabase from "./supabase-client.js";

export default async function getJobs(){

    const {data, error} = await supabase
        .from("jobs")
        .select("*")

    if (error) {
        console.log("Error adding job details", error)
    }

    return data;
}