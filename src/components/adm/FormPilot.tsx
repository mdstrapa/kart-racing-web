import {useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";

const FormPilot = () => {
    const [fullName, setFullName] = useState('');
    const [alias, setAlias] = useState('');

    const addNewPilot = () => {
        kartRacingApi.post('/pilotEntities', {
            fullName,
            alias
        })
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <h4>Add Pilot</h4>
                <table>
                    <tbody>
                    <tr>
                        <td>Full Name:</td>
                        <td><input type="text" name="fullName" value={fullName}
                                   onChange={event => setFullName(event.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Alias:</td>
                        <td><input type="text" name="alias" value={alias}
                                   onChange={event => setAlias(event.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>
                            <button className="btn btn-light" onClick={addNewPilot}>Save</button>
                        </td>
                        <td>
                            <button className="btn btn-light"><Link to="/pilot">Cancel</Link></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FormPilot