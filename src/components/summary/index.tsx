import clsx from "clsx";
import { Summary as SummaryItem } from "../../service/models/summary";
import './index.css';

export type SummaryProps = SummaryItem

const Summary = ({ title, currentIndex, delta }: SummaryProps) => {
    return (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className={clsx(
                'rounded-circle d-flex flex-column justify-content-center align-items-center circle shadow-lg',
                delta >= 0 ? 'bg-success increase' : 'bg-danger decrease'
            )}>
                <div className="font-weight-bold current-index">
                    {new Intl.NumberFormat().format(currentIndex)}
                </div>
                <div className="delta d-flex align-items-center">
                    <i className="material-icons md-12">
                        {delta >= 0 ? 'arrow_upward' : 'arrow_downward'}
                    </i>
                    <span>{`${Math.abs(delta)} `}<i>last 30 days</i></span>
                </div>
            </div>
            <h4 className="mt-3 text-center px-3 pb-4 text-black-50">{title}</h4>
        </div>
    )
};

export default Summary;