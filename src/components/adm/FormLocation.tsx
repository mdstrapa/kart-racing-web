import {Component, useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

const FormLocation = () => {
    const [locationTitle,setLocationTile] = useState('')

    const addNewLocation = () => {
        kartRacingApi.post('/locationEntities', {
            title: locationTitle
        })
    }


    return (
        <div>
            <AdmHeader/>
            <h4>Add Location</h4>
            Title
            <input type="text" name="title" value={locationTitle} onChange={event => setLocationTile(event.target.value)}/>

            <table>
                <tr>
                    <td>
                        <button className="btn btn-light" onClick={addNewLocation}>Save</button>
                    </td>
                    <td>
                        <button className="btn btn-light"><Link to="/location">Cancel</Link></button>
                    </td>
                </tr>
            </table>
        </div>
    );

}

export default FormLocation;