import "reflect-metadata";

class Point {
    constructor(public x: number, public  y: number) {
    }
}

class Line {
    private _start: Point = new Point(0, 0);
    private _end: Point = new Point(10, 10);

    @validate
    @Reflect.metadata("design:type", Point)
    set start(value: Point) {
        this._start = value;
    }

    get start() {
        return this._start;
    }

    @validate
    set end(value: Point) {
        this._end = value;
    }

    get end() {
        return this._end;
    }
}

function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
    let set =  descriptor.set!;

    descriptor.set = function (value: T) {
        console.log('target ? ', target);
        console.log('propertyKey ? ', propertyKey);
        console.log('descriptor ? ', descriptor);

        let type = Reflect.getMetadata("design:type", target, propertyKey);

        console.log('type ? ', type);

        if (!(value instanceof type)) {
            throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
        }

        set.call(this, value);
    }
}

const line = new Line();
line.start = new Point(0, 0);