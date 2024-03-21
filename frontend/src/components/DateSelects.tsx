import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { authBirthDate } from "../helpers/authBirthDate";

const DateSelects = () => {

    const [year, setYear] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [day, setDay] = React.useState('');

    const handleChangeMonth = (e) => {
        setMonth(e.target.value);
    };

    const handleChangeDay = (e) => {
        setDay(e.target.value);
    };

    const handleChangeYear = (e) => {
        setYear(e.target.value);
    };

    const { renderMonths, renderDays, renderYears } = authBirthDate(month, year)


    return (
        <>
            <Typography className="date__box_title" variant="h6" fontSize={17} fontWeight={600}>Date of birth</Typography>
            <Box sx={{ minWidth: 120 }} display={'flex'} columnGap={1}>
                <FormControl fullWidth size="small" required>
                    <InputLabel id="month-label">Month</InputLabel>
                    <Select
                        labelId="month-label"
                        id="month-select"
                        value={month}
                        label="Month"
                        autoWidth
                        onChange={handleChangeMonth}
                        MenuProps={{transitionDuration: 0.1}}  
                    >
                        {
                            renderMonths()
                                .map((month, index) => (
                                    <MenuItem key={index + 1} value={index + 1}>{month}</MenuItem>
                                ))
                        }
                    </Select>
                </FormControl>
                <FormControl fullWidth size="small" required>
                    <InputLabel id="year-label">Year</InputLabel>
                    <Select
                        labelId="year-label"
                        id="year-select"
                        value={year}
                        label="Year"
                        autoWidth
                        onChange={handleChangeYear}
                        MenuProps={{transitionDuration: 0.1}} 
                    >
                        {
                            renderYears()
                                .map((year, index) => (
                                    <MenuItem key={index + 1} value={year}>{year}</MenuItem>
                                ))
                        }
                    </Select>
                </FormControl>
                <FormControl fullWidth size="small" required>
                    <InputLabel id="day-label">Day</InputLabel>
                    <Select
                        labelId="day-label"
                        id="day-select"
                        value={day}
                        label="Day"
                        autoWidth
                        onChange={handleChangeDay}
                        MenuProps={{transitionDuration: 0.1}}
                    >
                        {
                            renderDays()
                                .map((_, index) => (
                                    <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
                                ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default DateSelects