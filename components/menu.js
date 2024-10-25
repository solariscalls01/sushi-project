// components/Menu.js
import { useEffect, useState } from 'react';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const response = await fetch('/api/menu');
            if (response.ok) {
                const data = await response.json();
                setMenuItems(data);
            } else {
                console.error('Failed to fetch menu items');
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
