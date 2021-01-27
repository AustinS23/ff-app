import { fireEvent, render } from "@testing-library/react"
import Tab from "."

describe('<Tab />', () => {
    const tabItems = [
        { name: 'a', content: () => <span>content for a</span> },
        { name: 'b', content: () => <span>content for b</span> },
        { name: 'c', content: () => <span>content for c</span>, badge: 10 },
    ];

    it('renders all the tabs', () => {
        const component = render(<Tab items={tabItems} />);
        expect(component.queryAllByRole('tab')).toHaveLength(tabItems.length);
    });

    it('renders the selected tab content', () => {
        const component = render(<Tab items={tabItems} />);
        expect(component.getByText('content for a')).toBeInTheDocument();
    });

    it('changes tab as expected', () => {
        const component = render(<Tab items={tabItems} />);
        fireEvent.click(component.queryAllByRole('tab')[1]);
        expect(component.getByText('content for b')).toBeInTheDocument();
    });
})