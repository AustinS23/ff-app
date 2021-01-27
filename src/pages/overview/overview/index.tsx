import { useEffect, useState } from "react";
import Summary from "../../../components/summary"
import { Summary as SummaryItem } from "../../../service/models/summary";
import service from "../../../service";

const Overview = () => {

    const [summaries, setSummaries] = useState<SummaryItem[]>();
    useEffect(() => {
        async function loadData() {
            const result = await service.getSummaries();
            setSummaries(result);
        }

        loadData()
    }, []);

    if (!summaries) {
        // TODO: Loading screen
        return null;
    }

    return (
        <section>
            <h3>Overview</h3>
            <div className="d-flex flex-column flex-lg-row align-items-start py-5">
                {summaries.map((summary) => (
                    <Summary key={summary.title} {...summary} />
                ))
                }
            </div>
        </section>
    );
}

export default Overview;