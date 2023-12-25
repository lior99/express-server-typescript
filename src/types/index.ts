export type subArrayElement =  number | miscItem;

export type miscItem = {
    type: string,
    guid: string,
    count?: number
}

export type customResponse = {
    id: number,
    subObject: {
        name: string,
        positive: boolean,
        innerArray: Array<subArrayElement>
    }
}