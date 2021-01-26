import { ReactNode } from "react";

export type TableProps<T> = {
    dataSource: T[];
    columns: Array<{
        name: string; field: keyof T, width?: string
    }>;
    actions: Array<(item: T) => ReactNode>
}

function Table<T>({ dataSource, columns, actions }: TableProps<T>) {
    return <div role="table" className="py-4">
        <div role="rowgroup">
            <div role="row" className="border-top text-uppercase w-100 d-flex text-black-50 font-weight-bold px-3 py-1">
                <span style={{ width: "30px" }} role="columnheader">#</span>
                {
                    columns.map(({ name, width = 'auto' }) => (
                        <span
                            role="columnheader"
                            key={name}
                            style={{ width }}
                            className="flex-grow-1"
                        >
                            {name}
                        </span>
                    ))
                }
                <span style={{ width: "70px" }} role="columnheader" />
            </div>
        </div>
        <div role="rowgroup">
            {dataSource.map((item, index) => {
                return (
                    <div role="row" className="border-top w-100 d-flex px-3 py-1">
                        <span style={{ width: "30px" }} role="cell">{index + 1}</span>
                        {
                            columns.map(({ field, width = 'auto' }) => (
                                <span
                                    role="cell"
                                    key={field as string}
                                    style={{ width }}
                                    className="flex-grow-1"
                                >
                                    {item[field]}
                                </span>
                            ))
                        }
                        <span
                            style={{ width: "70px" }}
                            role="columnheader"
                            className="d-flex justify-content-around">
                            {actions.map(action => action(item))}
                        </span>
                    </div>
                )
            })}
        </div>
    </div>
}

export default Table;