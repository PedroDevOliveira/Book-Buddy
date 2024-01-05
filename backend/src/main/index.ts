let readingHistory: number[] = [];

interface IReadingRecord {
    pagesReadToday: number,
    averagePagesRead: number
}

function updateReading(lastPage: number, currentPage: number): IReadingRecord {
    if (lastPage > currentPage) throw new Error('LastPage should be greater than current page')
    let pagesReadToday: number = currentPage - lastPage;
    readingHistory.push(pagesReadToday);

    let totalPagesRead: number = readingHistory.reduce((totalPages: number, pagesInSession: number) => totalPages + pagesInSession, 0);
    let averagePagesRead: number = parseFloat((totalPagesRead / readingHistory.length).toFixed(2));

    return {
        pagesReadToday: pagesReadToday,
        averagePagesRead: averagePagesRead
    };
}

try {
    console.log(updateReading(90, 130));
    console.log(updateReading(130, 160));
    console.log(updateReading(160, 200));
    // console.log(updateReading(160, 100));
} catch (err) {
    console.error(err)
}