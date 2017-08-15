class Queue {
    constructor() {
        this._queue = [];
    }

    enqueue(value) {
        this._queue.push({value: value});
    }

    dequeue() {
        if(!this.isEmpty()) {
            let item = this._queue.shift();
            return item;
        }
    }

    peek() {
        return this._queue[0].value;
    }

    isEmpty() {
        return this._queue.length === 0;
    }
}

var queue = new Queue();
queue.enqueue(5);
queue.enqueue(33);
queue.enqueue(12);
queue.enqueue(14);
console.log(queue.peek());

// console.log(queue);