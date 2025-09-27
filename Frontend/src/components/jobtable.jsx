export default function JobTable(props){


    const jobData = props.jobs.map( (job) => {
        return(
            <tr key={job.id}>
                <td>{job.company}</td>
                <td>{job.job_title}</td>
                <td><select name="status" id="status" defaultValue={job.status} onChange={ (e) => props.status(job, e.target.value)}>
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </td>
                <td>{job.date}</td>
                <td>{job.notes}</td>
                <td><button onClick={(e) => props.delete(job.id)}>delete</button></td>
            </tr>
        )
    })

    return(
        <div className="table-container">
            <table className="job-table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Application Status</th>
                        <th>Application Date</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobData}
                </tbody>
            </table>
        </div>
    )
}