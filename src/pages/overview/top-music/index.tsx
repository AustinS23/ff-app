import React from "react";
import Card from "../../../components/card"
import Tab, { TabItem } from "../../../components/tab";

const tabs: TabItem[] = [
    { name: 'Artists', content: () => <div>TODO</div> },
    { name: 'Songs', content: () => <div>TODO</div> },
    { name: 'Moods', badge: 20, content: () => <div>TODO</div> },
];

const TopMusic = () => {
    return (
        <section>
            <h3 className="mb-5">Top Music</h3>
            <Card>
                <Tab items={tabs} />
            </Card>

        </section>
    );
};

export default TopMusic;