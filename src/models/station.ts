export type StationID = number & { _brand: 'StationID' };

export interface IStation {
    id: StationID;
    /**
     * Название станции
     */
    name: string;
}
