function Node(data) {
    this.data = data;
    this.next = null;
}

function SList() {
    this.head = null;
    this.length = 0;
}

SList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list 
    if (!currentNode) {
        this.head = node;
        this.length++;
         
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this.length++;
     
    return node;
};

var list = new SList();
list.add(5);
list.add(7);
list.add(2);
list.add(5);
list.add(3);

console.log(list.length);