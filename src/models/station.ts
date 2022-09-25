export type StationID = number & { _brand: 'StationID' };

export const noStation = 0 as StationID;

export interface IStation {
    id: StationID;
    /**
     * Название станции
     */
    name: string;
}
