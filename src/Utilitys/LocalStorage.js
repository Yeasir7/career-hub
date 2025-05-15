const getStoredJobApplications = () =>{
    const storedJobApplications = localStorage.getItem("job-application");
    if(storedJobApplications){
        return JSON.parse(storedJobApplications)
    }
    return [];
}

const saveStoredJobApplications = id =>{
    const storedJobApplications = getStoredJobApplications();
    const exist = storedJobApplications.find(jobId => jobId === id);
    if(!exist){
        storedJobApplications.push(id);
        localStorage.setItem("job-application", JSON.stringify(storedJobApplications));
    }
}

export { getStoredJobApplications ,saveStoredJobApplications}