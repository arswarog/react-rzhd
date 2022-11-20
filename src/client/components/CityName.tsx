import { IStation } from '../models/station/types';

interface IProps {
    station: IStation;
}

export function StationName({ station }: IProps) {
    return <div>{station.name}</div>;
}
