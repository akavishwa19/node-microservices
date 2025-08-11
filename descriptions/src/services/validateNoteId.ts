import axios from "axios";

const validateNoteId = async (id:string):Promise<boolean>=>{
    try {
        const data = await axios.get(`http://localhost:8000/api/v1/notes/${id}`);
        if(data.status==200){
            return true;
        }
        return false;
    } catch (error:any) {
        console.log(error?.message)
        return false;
    }
}

export default validateNoteId;