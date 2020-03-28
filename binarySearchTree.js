class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode
      return this;
    }
    let current  = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while(current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return true;
      }
    }
    return false;
  }
  
  bfs(root) {
      const queue = [];
      const visited = [];
      const node;

      queue.push(this.root);
      
      while(queue.length > 0) {
        node = queue.shift();
        visited.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return visited;
  }
  DFSPreOrder() {
    const visited = [];
    const current = this.root;
    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }

  DFSPostOrder() {
    const visited = [];
    const current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(current);
    return visited;
  }

  DFSInORder() {
    const visited = [];
    const current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
}
