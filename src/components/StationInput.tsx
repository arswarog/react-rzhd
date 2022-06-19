export enum StationInputType {
    from = 'from',
    to = 'to'
}

function StationInput(type: StationInputType) {
    return <input id={'station-input-' + type}/>
}
