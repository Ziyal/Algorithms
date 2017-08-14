// Check if a binary tree is a binary search tree


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
bst.push(9);
bst.push(15);
bst.push(6);
bst.push(8);
bst.push(5);
bst.push(13);
bst.push(20);

// Begin Function

function validateBst(tree) {
    if(tree) {
        return validateBstRecurse(tree.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    } else {
        console.log("BST error");
        return false;
    }
}

function validateBstRecurse(node, min, max) {
    // console.log(node, min, max)

    if(node) {
        if(node.val < min || node.val > max) {
            console.log("Not valid");
            return false;
        }
        return validateBstRecurse(node.left, node.val, max) && validateBstRecurse(node.right, min, node.val);
    }
    // console.log("Valid BST");
    return true;
    
}


console.log(bst.root)
console.log(validateBst(bst));