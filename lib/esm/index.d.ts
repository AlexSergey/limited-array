interface PropsInt {
    limit: number;
}
export default class LimitedArray<T> {
    data: T[];
    limit: number;
    constructor(props?: PropsInt);
    setLimit(limit: number): boolean;
    checkLimit(): boolean;
    add(data: any): boolean;
    splice(from: number, to: number): void;
    getData(): T[];
    at(index: number): T;
    getLength(): number;
    reset(): void;
}
export {};
