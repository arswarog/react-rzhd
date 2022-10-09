export type RouteID = number & { _brand: 'RouteID' };

export interface IRoute {
    /**
     * ID
     */
    id: RouteID;
    /**
     * Номер маршрута
     */
    name: string;
    /**
     * Индентификаторы станций
     */
    stations: number[];
}
