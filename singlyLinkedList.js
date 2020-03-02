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
    let foundNode = this.get(idx);
    if(foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    } else if (idx === 0) {
      return !!this.unshift(val)
    } else if (idx === this.length) {
      return !!this.push(val)
    } else {
      let pre = this.get(idx - 1);
      let after = pre.next;
      let newNode = new Node(val);
      pre.next = newNode;
      newNode.next = after;
      this.length++;
      return true;
    }
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let pre = this.get(idx - 1);
    let temp = this.get(idx);
    pre.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let prev = this.tail;
    let curr = prev.next;
    let next = curr.next;
    while(this.head.next === null) {
      curr.next = prev;
      prev = curr;
      curr = next;
      if (next.next !== null) next = next.next;
    }
    this.tail.next = null;
    return this;
  }
}