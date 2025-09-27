import supabase from "./supabase-client.js";

export default async function updateStatus(req){

    // console.log("This is the body", req.body.id);

    const {data, error} = await supabase
        .from("jobs")
        .update({status: req.body.status})
        .eq("id", req.params.id)

    if (error) {
        console.log("Error adding job details", error)
    }

}