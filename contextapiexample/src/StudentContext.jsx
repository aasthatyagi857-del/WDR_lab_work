import{createcontext,useState }from "react";


export const StudentContext = createcontext();
// create a provider component
export function StudentProvider();
{
    //creating state variable of array type to student data 
    const [student,setStudent] = useState([]);
    //fuction to add new student data into the array 
    const addStudent = (student )  =>{
        setStudent((prev) => [...prev,student])
    };
    //funcation to update the student data 
    //funcation to delete the student data 
    return(
        
    )

}