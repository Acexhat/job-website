import React from 'react';
import { useStyles } from './style';
import TagBar from '../../components/Tagbar';
import JobCard from '../../components/Cards';
import { companyData } from '../../data';
import { useSelector } from 'react-redux';

/**
 * Required
 * To_do:
 * 1. SearchBar -- should be relative to app or -negative top
 * 2. TagBar -- margin Top some and start inside Job DisplayLayout
 * 3. job cards -- Will come under scrollable div
 */

export const JobDisplayLayout = () => {
    const [filteredJobs, setFilteredJobs] = React.useState([]);
    const { jobData, tags } = useSelector((state) => state.form)
    const classes = useStyles();

    React.useEffect(() => {
        if (tags.length > 0) {
            let filteredArr = [];
            jobData?.forEach(element => {
                if (tags.some(elem => elem == element.level)) {
                    filteredArr.push(element);
                }
                else if (tags.some(elem => elem == element.role)) {
                    filteredArr.push(element);
                }
                else if (tags.some(item => element.tags.includes(item))) {
                    filteredArr.push(element);
                }
            });
            setFilteredJobs(filteredArr);
        } else {
            setFilteredJobs(jobData);
        }
    }, [tags])

    return (
        <div className={classes.root}>
            {tags.length > 0 ? <TagBar list={tags} /> : null}
            <div className={`${tags?.length > 0 ? classes.flexWrapper : classes.flexWrapper_withoutTag}`}>
                <div className={classes.jobFeild}>
                    {filteredJobs?.map((elem) => {
                        return (
                            <JobCard data={elem} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}