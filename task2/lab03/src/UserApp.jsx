import {useState} from "react";
import UserProfile from "./UserProfile";

function UserApp() {
    const [userId, setUserId] = useState(1);

    const refresh = () => {
        const randomId = Math.floor(Math.random() * 10) + 1;
        setUserId(randomId);
    }
    return (
        <div>
            <h2>User Loader</h2>

            <button onClick={() => setUserId(1)}>User1</button>
            <button onClick={() => setUserId(2)}>User2</button>
            <button onClick={() => setUserId(3)}>User3</button>
            <button onClick={refresh}>Random User</button>

            <button onClick={refresh}>Refresh User</button>
            <UserProfile userId={userId} />
        </div>
    );
}
export default UserApp;