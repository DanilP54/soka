import React from "react";
import { Box, Select, Typography, Option, IconButton, Stack } from "@mui/joy"
import { authBirthDate } from "../helpers/authBirthDate";
import { IoMdClose } from "react-icons/io";

const DateSelects = () => {

    const [year, setYear] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [day, setDay] = React.useState('');

    const actionMonth = React.useRef<HTMLElement>(null);
    const actionYear = React.useRef(null);
    const actionDay = React.useRef(null);

    const { renderMonths, renderDays, renderYears } = authBirthDate(month, year)

    return (
        <Stack spacing={3}>
            <Typography className="date__box_title" level="body-lg" fontSize={17} fontWeight={600}>Date of birth</Typography>
            <Box height={40} sx={{ minWidth: 120 }} display={'flex'} justifyContent={'space-between'} columnGap={1}>
                <Select
                    action={actionMonth}
                    value={month}
                    placeholder="Month..."
                    onChange={(e, newValue) => setMonth(newValue)}
                    {...(month && {
                        endDecorator: (
                            <IconButton
                                size="sm"
                                variant="plain"
                                color="neutral"
                                onMouseDown={(event) => {
                                    event.stopPropagation();
                                }}
                                onClick={() => {
                                    setMonth('');
                                    actionMonth.current?.focusVisible();
                                }}
                            >
                                <IoMdClose />
                            </IconButton>
                        ),
                        indicator: null,
                    })}
                    sx={{ minWidth: 140 }}
                >
                    {
                        renderMonths()
                            .map((month, index) => (
                                <Option key={index + 1} value={index + 1}>{month}</Option>
                            ))
                    }
                </Select>
                <Select
                    action={actionYear}
                    value={year}
                    placeholder="Year..."
                    onChange={(e, newValue) => setYear(newValue)}
                    {...(year && {
                        endDecorator: (
                            <IconButton
                                size="sm"
                                variant="plain"
                                color="neutral"
                                onMouseDown={(event) => {
                                    event.stopPropagation();
                                }}
                                onClick={() => {
                                    setYear('');
                                    actionYear.current?.focusVisible();
                                }}
                            >
                                <IoMdClose />
                            </IconButton>
                        ),
                        indicator: null,
                    })}
                    sx={{ minWidth: 110 }}
                >
                    {
                        renderYears()
                            .map((year, index) => (
                                <Option key={index + 1} value={year}>{year}</Option>
                            ))
                    }
                </Select>
                <Select
                    action={actionDay}
                    value={day}
                    placeholder="Day..."
                    onChange={(e, newValue) => setDay(newValue)}
                    {...(day && {
                        endDecorator: (
                            <IconButton
                                size="sm"
                                variant="plain"
                                color="neutral"
                                onMouseDown={(event) => {
                                    event.stopPropagation();
                                }}
                                onClick={() => {
                                    setDay('');
                                    actionDay.current?.focusVisible();
                                }}
                            >
                                <IoMdClose />
                            </IconButton>
                        ),
                        indicator: null,
                    })}
                    sx={{ minWidth: 90}}
                >
                    {
                        renderDays()
                            .map((_, index) => (
                                <Option key={index + 1} value={index + 1}>{index + 1}</Option>
                            ))
                    }
                </Select>
            </Box >
        </Stack>
    )
}

export default DateSelects