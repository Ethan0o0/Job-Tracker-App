import supabase from "./supabase-client.js";

export default function addJob(req){

    // console.log(req.body, "This is the body");

    const {data, error} = supabase
        .from("jobs")
        .insert([{company: req.body.company, job_title: req.body.job_title, status: req.body.status, 
            date: req.body.date, notes: req.body.notes}]).select()

    console.log(data, "this is data logged");

    if (error) {
        console.log("Error adding job details", error)
    }

}