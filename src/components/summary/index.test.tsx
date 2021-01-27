import { render } from "@testing-library/react"
import Summary from "."

describe('<Summary />', () => {
    it('renders as expected when delta is greater than zero', () => {
        const component = render(<Summary title="test" currentIndex={100} delta={10} />)
        expect(component.getByText('arrow_upward')).toBeInTheDocument();
        expect(component.getByText('test')).toBeInTheDocument();
    });

    it('renders as expected when delta is less than zero', () => {
        const component = render(<Summary title="test" currentIndex={100} delta={-20} />)
        expect(component.getByText('arrow_downward')).toBeInTheDocument();
        expect(component.getByText('test')).toBeInTheDocument();
    });
})