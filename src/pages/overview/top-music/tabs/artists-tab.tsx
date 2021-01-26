import { useEffect, useState } from "react"
import Table, { TableProps } from "../../../../components/table"
import service from "../../../../service"
import { Artist } from "../../../../service/models/artist"

const artistTableColumns: TableProps<Artist>['columns'] = [
    { name: 'Artists', field: 'name', width: '60%' },
    { name: 'Plays', field: 'plays' },
    { name: 'Songs', field: 'songs' },
]

const ArtistsTab = () => {
    const [artists, setArtists] = useState<Artist[]>();

    useEffect(() => {
        async function fetchData() {
            const result = await service.getArtists();
            setArtists(result);
        }

        fetchData();
    }, []);

    if (!artists) {
        // TODO: Loading screen
        return null;
    }

    return (
        <Table
            columns={artistTableColumns}
            dataSource={artists}
            actions={
                [
                    () => <i key="delete" className="material-icons md-12 text-danger">delete</i>,
                    () => <i key="share" className="material-icons md-12">share</i>,
                ]
            } />
    );
};

export default ArtistsTab;

