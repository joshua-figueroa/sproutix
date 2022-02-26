import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "styles/searchbox.scss"

const SearchBox = () => {
    const [event, setEvent] = useState("UI UX Promotion");
    const [location, setLocation] = useState("Jakarta Selatan")
    const [date, setDate] = useState("any")

    const handleChange = (event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setter: React.Dispatch<React.SetStateAction<string>>) => setter(event.target.value);

    return (
        <div className='search-box'>
            <TextField id="looking-for" label="Looking for" variant="standard" value={event} onChange={(text) => handleChange(text, setEvent)} />
            <TextField id="in" label="In" variant="standard" value={location} onChange={(text) => handleChange(text, setLocation)} />
            <FormControl variant="standard" defaultValue={date}>
                <InputLabel id="demo-simple-select-standard-label">When</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="When"
                    value={date}
                    onChange={(event) => handleChange(event, setDate)}
                    IconComponent={ExpandMoreIcon}
                >
                    <MenuItem value="any">
                        Any Date
                    </MenuItem>
                </Select>
            </FormControl>
            <Button variant="primary">
                <SearchIcon />
            </Button>
        </div>
    )
}

export default SearchBox