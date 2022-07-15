export enum StationInputType {
    from = 'from',
    to = 'to',
}

interface IProps {
    type: StationInputType;
}

export function StationInput(props: IProps) {
    return <input id={'station-input-' + props.type} />;
}
