function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(1);
bst.push(4);
bst.push(5);
bst.push(0);
bst.push(6);
bst.push(7);
console.log(bst.root.right)



function isValidBST(tree) {
  if (!tree) {
    throw new Error('invalid tree');
  }
  return isValidBSTRecursive(tree.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function isValidBSTRecursive(node, min, max) {
    // console.log("MIN: ", min, "MAX: ", max)
  if (node) {
    if (node.val < min || node.val > max) {
      return false;
    }
    return isValidBSTRecursive(node.left, min, node.value) &&
      isValidBSTRecursive(node.right, node.value, max);
  }
  return true;
}

console.log(isValidBST(bst));