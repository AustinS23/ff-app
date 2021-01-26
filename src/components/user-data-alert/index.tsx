import { useEffect, useState } from "react"
import { getLocalStorageItem, setLocalStorageItem } from "../../helpers/storage";


const AGREE_TO_COLLECT_DATA = 'agree_to_collect_data';

const UserDataAlert = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);

    useEffect(() => {
        const agreeToCollectData = getLocalStorageItem<boolean>(AGREE_TO_COLLECT_DATA);

        if (agreeToCollectData === null) {
            setShouldDisplay(true);
        }
    }, []);

    if (!shouldDisplay) return null;

    return (
        <div className="alert alert-primary shadow d-flex flex-column align-items-center fixed-bottom" role="alert">
            <h3>Welcome!</h3>
            <p>Before you get to carried away, do you agree to us collecting anonimized statistics about your usage of our app?</p>
            <div>
                <button
                    type="button"
                    className="btn btn-outline-info btn-lg rounded-pill d-inline-flex align-items-center"
                    onClick={() => {
                        setLocalStorageItem(AGREE_TO_COLLECT_DATA)(false);
                        setShouldDisplay(false);
                    }}>
                    <i className="material-icons md-24 mr-2">clear</i>
                    Disagree
                </button>
                <button
                    type="button"
                    className="btn btn-info btn-lg rounded-pill ml-3 d-inline-flex align-items-center"
                    onClick={() => {
                        setLocalStorageItem(AGREE_TO_COLLECT_DATA)(true);
                        setShouldDisplay(false);
                    }}>
                    <i className="material-icons md-24 mr-2">done</i>
                    I agree
                </button>
            </div>
        </div>
    );
};

export default UserDataAlert;