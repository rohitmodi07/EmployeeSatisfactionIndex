import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService{

    saveResponse(responseDetails){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/save', responseDetails);
    }
}

export default new EmployeeService();