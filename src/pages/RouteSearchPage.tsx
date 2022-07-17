import { RouteSearch } from '../components/RouteSearch';
import { TicketList } from '../components/TicketList';

export function RouteSearchPage() {
    return (
        <div>
            <RouteSearch></RouteSearch>
            <TicketList tickets={[]} />
        </div>
    );
}
