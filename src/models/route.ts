export interface IRoute {
    /**
     * ID
     */
    id: number;
    /**
     * Номер маршрута
     */
    name: string;
    /**
     * Индентификаторы станций
     */
    stations: number[];
}
