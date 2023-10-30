import axios from "axios";

class DataService {

    public async getGender(name: string): Promise<string> {
        const response = await axios.get(`https://api.genderize.io?name=${name}`);
        return response.data.gender;
        
    }

    
    public async getNationality(name: string) {
        const response = await axios.get(`https://api.nationalize.io?name=${name}`);
        return response.data.count;
        
    }
}

const dataService = new DataService();

export default dataService;

