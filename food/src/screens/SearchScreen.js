import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, errorMsg, searchApi] = useResults();

    const filterListByPrice = (price) => {
        return results.filter((res) => {
            return res.price === price
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmitted={() => { searchApi(term) }}
            />
            {errorMsg ? <Text style={styles.textStyle}>{errorMsg}</Text > : null}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList
                    title='Cost Effective'
                    results={filterListByPrice('$')}
                />
                <ResultsList
                    title='Bit Pricier'
                    results={filterListByPrice('$$')}
                />
                <ResultsList
                    title='Big Spender'
                    results={filterListByPrice('$$$')}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'black'
    }
});

export default SearchScreen
