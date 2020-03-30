interface PropsInt {
    limit: number;
}

export default class LimitedArray {
    public data: any[] = [];
    public limit: number = 0;

    constructor(props: PropsInt) {
        this.limit = (props && typeof props.limit === 'number') ? Math.abs(props.limit) : 10;
    }

    setLimit(limit: number): boolean {
        this.limit = (limit && typeof limit === 'number') ? Math.abs(limit) : this.limit;
        return this.checkLimit();
    }

    checkLimit(): boolean {
        let diff = this.data.length - this.limit;

        if (diff <= 0) {
            return false;
        }

        let l = Array(diff).fill(0);

        l.forEach(() => {
            this.data.shift();
        });

        return true;
    }

    add(data: any): boolean {
        this.data.push(data);
        return this.checkLimit();
    }

    splice(from: number, to: number) {
        this.data.splice(from, to);
    }

    getData(): any[] {
        return this.data.map(item => item);
    }

    at(index: number): any {
        return this.data[index];
    }

    getLength(): number {
        return this.data.length;
    }

    reset() {
        this.data = [];
    }
}