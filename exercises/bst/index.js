// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // recursive solution
  insert(newData) {
    if (newData < this.data) {
      if (this.left === null) { this.left = new Node(newData); return; }
      this.left.insert(newData);
    } else {
      if (this.right === null) { this.right = new Node(newData); return; }
      this.right.insert(newData);
    }
  }

  // recursive solution
  contains(seekData) {
    let currNode = this;
    if (seekData === currNode.data) {
      return currNode;
    } else if (seekData < currNode.data && currNode.left) {
      return currNode.left.contains(seekData);
    } else if (seekData >= currNode.data && currNode.right){
      return currNode.right.contains(seekData);
    }
    return null;
  }

}

module.exports = Node;




// Iterative solution - I prefer this one.
// contains(seekData) {
//   let currNode = this;
//   while (currNode) {
//     if (seekData === currNode.data) {
//       return currNode;
//     } else if (seekData < currNode.data) {
//         currNode = currNode.left; 
//     } else {
//         currNode = currNode.right;
//     }
//   }
//   return null;
// }

// ITERATIVE SOLUTION
// insert(newData) {
//   // compare input data with current Node data until in position
//   // I went with just inserting at the ends of the binary tree.... what about
//   // inserting node into the middle of one? would that likely be more efficient?

//   let currNode = this;
//   while (currNode) {
//     if (newData < currNode.data) {
//       if (!currNode.left) { currNode.left = new Node(newData); return; }
//       currNode = currNode.left; 
//     } else {
//       if (!currNode.right) { currNode.right = new Node(newData); return; }
//       currNode = currNode.right;
//     }
//   }
// }


// contains(seekData) {
//   let currNode = this;
//   while (currNode) {
//     if (seekData === currNode.data) {
//       return currNode;
//     } else if (seekData < currNode.data) {
//         currNode = currNode.left; 
//     } else {
//         currNode = currNode.right;
//     }
//   }
//   return null;
// }