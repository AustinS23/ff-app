import Page from '../../components/page';
import { default as OverviewSection } from './overview';
import { default as TopMusicSection } from './top-music';

const Overview = () => {
    return (
        <Page>
            <OverviewSection />
            <TopMusicSection />
        </Page>
    );
}

export default Overview;