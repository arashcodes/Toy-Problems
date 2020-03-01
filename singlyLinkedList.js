class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
      this.length += 1;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    let pre = temp;
    while(temp.next !== null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    pre.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  shift() {
    if (this.length === 0) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
      this.length++;
      return this;
    }
    const oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx > this.length - 1) return null;
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node;
  }
  set(idx, value) {
    if (!this.get(idx)) return false;
    let node = this.get(idx);
    node.val = value;
    return this;
  }
}