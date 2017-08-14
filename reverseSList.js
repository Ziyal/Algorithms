
function Node(data) {
    this.data = data;
    this.next = null;
}

function SList() {
    this.head = null;
}

SList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list 
    if (!currentNode) {
        this.head = node;
        this._length++;
         
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    // this._length++;
     
    return node;
};

var list = new SList();
list.add(5);
list.add(7);
list.add(2);

console.log(list);

SList.prototype.reverse = function() {
    current = this.head;
    previous = null;
    forward = null;

    while(current) {
        forward = current.next;
        current.next = previous;
        previous = current;
        current = current.next;
    }
    return SList;
}

list.reverse();
console.log(list);