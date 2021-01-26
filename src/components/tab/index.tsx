import clsx from "clsx";
import { ReactNode, useState } from "react"
import "./index.css";

export type TabItem = {
    name: string;
    badge?: number;
    content: () => ReactNode;
}

export type TabProps = {
    items: TabItem[];
}

const Tab = ({ items }: TabProps) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div>
            <div role="tablist">
                {
                    items.map(({ name, badge }, index) => (
                        <button
                            key={name}
                            aria-selected={index === currentTabIndex}
                            role="tab"
                            onClick={() => setCurrentTabIndex(index)}
                            className={clsx('py-3 tab-item font-weight-bold d-inline-flex justify-content-center align-items-center', index === currentTabIndex && 'active')}>
                            {name}
                            {badge && <span className="badge badge-warning text-white ml-1">{badge}</span>}
                        </button>
                    ))
                }
            </div>
            <div role="tabpanel">
                {items[currentTabIndex]?.content()}
            </div>
        </div>
    );
};

export default Tab;