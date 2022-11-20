import './RouteSearch.css';

import { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import { IStation, StationID } from '../models/station/types';
import { changeUserName, CHANGE_USER_NAME } from '../models/user/actions';
import { IUser } from '../models/user/types';

import { Button } from './Button';
import { StationInput, StationInputType } from './StationInput';

interface IProps {
    stations: IStation[];

    onSubmit?(sourceId: StationID, destinationId: StationID): void;
}

export function RouteSearch({ stations, onSubmit }: IProps) {
    console.log('render RouteSearch');

    const [sourceId, setSourceId] = useState<StationID>('' as any);
    const [destinationId, setDestId] = useState<StationID>('' as any);

    const dispatch = useDispatch();

    function handleChangeSourceId(id: StationID) {
        dispatch({
            type: 'SET_SOURCE_ID',
            payload: id,
        });
        setSourceId(id);
    }

    function handleChangeDestId(id: StationID) {
        dispatch({
            type: 'SET_DESTINATION_ID',
            payload: id,
        });
        setDestId(id);
    }

    function handleSubmit() {
        onSubmit?.(sourceId, destinationId);
    }

    function clickHandler() {
        dispatch(changeUserName('sdfsdfsdf'));
    }

    const user = useSelector<any, IUser>((state) => state.user);

    return (
        <div className="RouteSearch">
            <div onClick={clickHandler}>Привет {user.name}</div>
            <StationInput
                type={StationInputType.src}
                stations={stations}
                onChange={handleChangeSourceId}
            />
            <div>Arrow</div>
            <StationInput
                type={StationInputType.dst}
                stations={stations}
                onChange={handleChangeDestId}
            />
            <Button onClick={handleSubmit}>Search</Button>
        </div>
    );
}
