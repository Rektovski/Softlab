class Point {
    #x1 = 0;
    #y1 = 0;

    constructor(x, y) {
        this.x2 = x;
        this.y2 = y;
    }

    distance(x, y) {
        return `Point(${this.x2}, ${this.y2}) is ${Math.sqrt(Math.pow(this.x2 - this.#x1, 2) + Math.pow(this.y2 - this.#y1, 2)).toPrecision(3)}`;
    }
}

let p = new Point(2,3);

console.log(p.distance());