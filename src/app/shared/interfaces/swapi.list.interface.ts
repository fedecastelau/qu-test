export interface SwapiList {
    /* Total of results */
    count: number

    /* URL to get the next set of results */
    next: string | null;

    /* URL to get the previous set of results */
    previous: string | null;

    /* List of result */
    results: any[]
}