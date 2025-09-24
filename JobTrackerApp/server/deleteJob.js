import supabase from "./supabase-client.js";

export default async function deleteJob(req){

    // console.log("This is the body", req.body);

    const {data, error} = await supabase
        .from("jobs")
        .delete()
        .eq("id", req.params.id)

    // console.log("This is the data", data)

    if (error) {
        console.log("Error deleting job", error)
    }

}