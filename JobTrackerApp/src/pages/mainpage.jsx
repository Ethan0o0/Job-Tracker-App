import AddJob from "../components/addjob";
import JobTable from "../components/jobtable";

export default function MainPage(props){
    return(
        <>
            <AddJob addJobBtn={props.addJobBtn} filter={props.filter}/>
            <JobTable jobs={props.jobs} status={props.status} delete={props.delete}/>
        </>
    )
}