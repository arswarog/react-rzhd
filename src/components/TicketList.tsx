import './TicketList.css';

export interface ITicket {
    src: string;
    dst: string;
    stop_number: number;
}

interface IProps {
    tickets: ITicket[];
}

export function TicketList({ tickets }: IProps) {
    if (tickets.length === 0)
        return (
            <div className="ticket-list">
                <div className=" ticket unavail">
                    <span>This route is not available yet</span>
                </div>
            </div>
        );

    return (
        <div className="ticket-list">
            {tickets.map((ticket: ITicket) => (
                <div className="ticket">
                    <span className="ticket--src">{ticket.src}</span>
                    <span className="ticket--dash">-</span>
                    <span className="ticket--dst">{ticket.dst}</span>
                    <br />
                    <span className="ticket--stop-number">{ticket.stop_number}</span>
                </div>
            ))}
        </div>
    );
}
