class Point {
    constructor(A,B) {
        this.a=A.x;
        this.b=A.y;
        this.c=B.x;
        this.d=B.y;
    }

    length(){
        return `Line(Point(${this.a},${this.b}), Point(${this.c},${this.d})) is ${Math.sqrt(Math.pow(this.c-this.a,2)+Math.pow(this.d-this.b,2)).toPrecision(3)}`;
    }

}

let A = {
    "x": 0,
    "y": 0
}

let B = {
    "x": 2,
    "y": 3
}

let p = new Point(A,B);

console.log(p.length());