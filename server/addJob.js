import supabase from "./supabase-client.js";

export default async function addJob(req){

    const {data, error} = await supabase
        .from("jobs")
        .insert([{company: req.body.company, job_title: req.body.job_title, status: req.body.status, 
            date: req.body.date, notes: req.body.notes, user_id: req.user.id}]).select()

    if (error) {
        console.log("Error adding job details", error)
    }

    // req.session.user_id = req.user.id;

}