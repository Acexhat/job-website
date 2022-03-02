import React from 'react';
import { useStyles } from './style';
import Header from '../components/Header';
import JobDisplayLayout from './jobDisplayLayout';
import SearchBar from '../components/Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchKeyword } from '../store/Actions/formActions';

export const Dashboard = () => {
    const disp = useDispatch();
    const classes = useStyles();

    const { jobData } = useSelector((state) => state.form)

    // Creating search keywords from data;
    React.useEffect(() => {
        let searchKeyword = new Set();
        jobData.forEach(element => {
            searchKeyword.add(element.role);
            searchKeyword.add(element.level);
            element.tags.forEach((elem) => {
                searchKeyword.add(elem);
            })
        });
        let searchArray = [...searchKeyword]
        disp(setSearchKeyword(searchArray));
    }, [jobData])

    return (
        <div className={classes.root}>
            <Header />
            <SearchBar />
            <JobDisplayLayout />
        </div>
    )
}