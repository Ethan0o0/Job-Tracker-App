export default function JobTable(){
    return(
        <div className="table-container">
            <table className="job-table">
                <tr>
                    <th>Company</th>
                    <th>Job Title</th>
                    <th>Application Status</th>
                    <th>Application Date</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>TestCompany</td>
                    <td>FakeEngineer</td>
                    <td><select name="status" id="status">
                            <option value="applied">Applied</option>
                            <option value="interview">Interview</option>
                            <option value="offer">Offer</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </td>
                    <td>09/16/2025</td>
                    <td>test notes to put onto here</td>
                    <td><button>delete</button></td>
                </tr>
            </table>
        </div>
    )
}