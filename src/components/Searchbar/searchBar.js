import React from 'react';
import { useStyles } from './style';
import { Autocomplete } from '@mui/material';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CustomRenderOption from '../../utils/customRenderOption';
import { useDispatch } from 'react-redux';
import { addTag } from '../../store/Actions/formActions';

export const SearchBar = () => {
    const classes = useStyles();
    const disp = useDispatch();
    const [searchValue, setSearchValue] = React.useState("");
    const { searchData } = useSelector((state) => state.form);
    const handleSearchBarInput = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmitClick = () => {
        disp(addTag(searchValue));
    }

    return (
        <div className={classes.root}>
            <Autocomplete
                freeSolo
                disableClearable
                id="job-search"
                options={searchData}
                getOptionLabel={(option) => option}
                closeIcon=""
                // onChange={(e, value) => console.log(e.target, value.title)}
                classes={{
                    root: classes.auto_root
                }}
                onChange={(event, autocompleteValue) => {
                    alert(autocompleteValue);
                }}
                renderInput={params => (
                    <TextField
                        {...params}
                        disableClearable
                        placeholder="Search"
                        id="job-textField"
                        value={searchValue}
                        autoSelect={true}
                        margin="normal"
                        variant="outlined"
                        onChange={handleSearchBarInput}
                        fullWidth
                        InputLabelProps={{ shrink: false }}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <div
                                    className={searchValue?.length > 0 ? classes.submit_btn_active : classes.submit_btn}
                                    onClick={handleSubmitClick}
                                >
                                    Submit
                                </div>
                            ),
                            classes: {
                                input: classes.input_root
                            }
                        }}
                    />
                )}
                renderOption={(option) => {
                    return (
                        <CustomRenderOption option={option} value={searchValue} />
                    )
                }}
            />
        </div>
    )
}