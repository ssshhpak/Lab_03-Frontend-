import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = (signal) => {
        setLoading(true);
        setError(null);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal })
        .then((response => {
            if (!response.ok) {
                throw new Error("Failed to load user");
            }
            return response.json();
            }))
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((err) => {
            if (err.name !== 'AbortError') {
                setError(err.message);
                setLoading(false);
            }
        });

        useEffect(() => {
            const controller = new AbortController();
            fetchUser(controller.signal);

            return () => {
                controller.abort();
            }; 
        }, [userId]);

        return (
            <div style={{ border: '1px solid black', padding: '15px', margin: '10px' }}>
                <h3>User Profile</h3>

                {loading && <p>Loading user data...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                {user && (
                    <div>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                )}
            </div>
        );
    }
}
export default UserProfile;