import { useState, useEffect } from 'react'
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('./search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMsg('Something went wrong!');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [results, errorMsg, searchApi];
}

