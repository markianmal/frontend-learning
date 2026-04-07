const dates = ["2008-8-21", "2007-10-24", "2007-2-13"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates)

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
