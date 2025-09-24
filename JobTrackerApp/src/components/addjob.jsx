export default function AddJob(props){
    return(
        <>
        <div id="add-job">
            <button id="add-job-button" onClick={props.addJobBtn}>+   Add Job</button>
        </div>
        <div id="filter-container">
            <select name="filter" id="filter-options" defaultValue="all" onChange={ (e) => props.filter(e.target.value)}>
                <option value="all">Filter by all</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer</option>
            </select>
        </div>
        </>
    )
}