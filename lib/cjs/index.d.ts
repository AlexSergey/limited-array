interface PropsInt {
    limit: number;
}
export default class LimitedArray {
    data: any[];
    limit: number;
    constructor(props: PropsInt);
    setLimit(limit: number): boolean;
    checkLimit(): boolean;
    add(data: any): boolean;
    splice(from: number, to: number): void;
    getData(): any[];
    at(index: number): any;
    getLength(): number;
    reset(): void;
}
export {};
