import { IStation } from '../models/station';

interface IProps {
    stations: IStation[];
}

export const CityList=({ stations }: IProps)=> (
    <ul className="city-list" id="city-list">
    {
        stations.map((station)=>(
            <li> {station.name} </li>

        ))
    }
    </ul>
)
