import React, { useState } from "react";
import Card from "../../../components/card"
import Dropdown, { DropdownItem } from "../../../components/dropdown";
import Tab, { TabItem } from "../../../components/tab";
import './index.css';
import ArtistsTab from "./tabs/artists-tab";

const tabs: TabItem[] = [
    { name: 'Artists', content: () => <ArtistsTab /> },
    { name: 'Songs', content: () => <div>TODO</div> },
    { name: 'Moods', badge: 20, content: () => <div>TODO</div> },
];

const orderByDropdownItems: DropdownItem<string>[] = [
    { name: "Artist name", value: "name" },
    { name: "Most played", value: "plays" },
    { name: "Most songs", value: "songs" },
];

const TopMusic = () => {
    const [orderBy, setOrderBy] = useState({ name: "Most played", value: "plays" });
    return (
        <section>
            <h3 className="mb-5">Top Music</h3>
            <Card>
                <div className="d-flex align-items-center order-by">
                    <span className="pr-2">Order by</span>
                    <Dropdown
                        items={orderByDropdownItems}
                        selectedItem={orderBy}
                        onSelectItem={setOrderBy}
                    />
                </div>
                <Tab items={tabs} />
            </Card>

        </section>
    );
};

export default TopMusic;