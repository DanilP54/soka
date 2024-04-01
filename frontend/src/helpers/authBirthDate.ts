import { getDaysInMonth, format } from "date-fns";

export const authBirthDate = (month: string, year: string) => {

    const renderMonths = () => {
        const months = Array.from({ length: 12 }, (_, index) => {
            const date = new Date(0, index);
            return format(date, 'MMMM');
        });
        return months;
    };

    const renderDays = () => {
        if (!month || !year) {
            return Array.from({ length: 30 })
        }
        const daysInSelectedMonth = getDaysInMonth(new Date(+year, +month - 1));
        return Array.from({ length: daysInSelectedMonth });
    };

    const renderYears = () => {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 90;
        const endYear = currentYear;
        const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => (
            startYear + index
        ));
        return years.reverse();
    };

    return {
        renderMonths,
        renderDays,
        renderYears
    }
}


