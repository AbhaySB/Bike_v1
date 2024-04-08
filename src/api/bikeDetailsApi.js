import { useState, useEffect } from 'react';
import axios from 'axios';

const useBikeData = () => {
    const [bikeData, setBikeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.api-ninjas.com/v1/motorcycles', {
                    params: {
                        make: 'kawasaki',
                        model: 'ninja'
                    },
                    headers: {
                        'X-Api-Key': process.env.BIKE_API_KEY || 'U2FaK0P+UIOXnRUnNs0Vkg==4FgDUMbI0PC95wS1',
                        'Content-Type': 'application/json'
                    }
                });
                setBikeData(response.data);
                localStorage.setItem("bikeData", JSON.stringify(response.data));
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchData();
    }, []);

    const getData = () => {
        const storedData = localStorage.getItem("bikeData");
        return storedData ? JSON.parse(storedData) : null;
    };

    return { bikeData, getData };
};

export default useBikeData;