import './index.css'

export type DropdownItem<T> = {
    name: string;
    value: T;
}

export type DropdownProps<T> = {
    items: DropdownItem<T>[];
    selectedItem?: DropdownItem<T>
    onSelectItem: (item: DropdownItem<T>) => void;
}

function Dropdown<T>({ items, selectedItem, onSelectItem }: DropdownProps<T>) {
    return <div className="dropdown">
        <button
            className="btn btn-outline-info dropdown-toggle dropdown-button rounded-pill px-4 d-flex align-items-center justify-content-between"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            {selectedItem?.name}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
                items.map((item) => (
                    <a key={item.name} className="dropdown-item" href="#" onClick={() => onSelectItem(item)}>{item.name}</a>
                ))
            }
        </div>
    </div>
}

export default Dropdown;