import '../components/css/addjob.css'

export default function AddJobForm(){
    return(
        <div className='addjob-container'>
            <form action="" className="addjob-form">
                <div>
                    <label htmlFor="company">Company Name</label><br />
                    <input type="text" id="company" name="company" />
                </div>
                <div>
                    <label htmlFor="job-title">Job Title</label><br />
                    <input type="text" id="job-title" name="job-title"/>
                </div>
                <div>
                    <select name="status" id="status">
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Application Date</label><br />
                    <input type="date" id="date" name="date" />
                </div>
                <div>
                    <label htmlFor="notes">Notes</label><br />
                    <input type="text" id="notes" name="notes"/>
                </div>
                <input type="submit" value='submit' id='submit-button'/>
            </form>
        </div>
    )
}