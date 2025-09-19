import AddJob from "../components/addjob";
import JobTable from "../components/jobtable";

export default function MainPage(props){
    return(
        <>
            <AddJob addJobBtn={props.addJobBtn}/>
            <JobTable />
        </>
    )
}