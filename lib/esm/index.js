export default class LimitedArray {
    constructor(props) {
        this.data = [];
        this.limit = 0;
        this.limit = (props && typeof props.limit === 'number') ? Math.abs(props.limit) : 10;
    }
    setLimit(limit) {
        this.limit = (limit && typeof limit === 'number') ? Math.abs(limit) : this.limit;
        return this.checkLimit();
    }
    checkLimit() {
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
    add(data) {
        this.data.push(data);
        return this.checkLimit();
    }
    splice(from, to) {
        this.data.splice(from, to);
    }
    getData() {
        return this.data.map(item => item);
    }
    at(index) {
        return this.data[index];
    }
    getLength() {
        return this.data.length;
    }
    reset() {
        this.data = [];
    }
}
