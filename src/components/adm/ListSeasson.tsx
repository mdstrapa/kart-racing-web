import {useEffect, useState} from "react";
import AdmHeader from "./AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";
import {ListButtons} from "../common/ListButtons";
import './List.css'

interface Season {
    title: string
}

const ListSeason = () => {
    const [seasonList, setSeasonList] = useState<Season[]>([]);

    useEffect(() => {
        getSeasonList();
    }, []);

    const getSeasonList = () => {
        kartRacingApi.get("/seasonEntities")
            .then(res => {
                setSeasonList(res.data._embedded.seasonEntities);
            });
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="list">
                <div className="title">Season List</div>
                <ListButtons />
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>{seasonList.map((d) =>
                        <tr key={d.title}>
                            <td>{d.title}</td>
                        </tr>)}</tbody>
                </table>
            </div>
        </div>
    );
}

export default ListSeason;