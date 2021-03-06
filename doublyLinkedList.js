class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = this. tail = newNode;
      this.length++;
      return this;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    const mid = this.length / 2;
    let res;
    if (idx <= mid) {
      let counter = 0;
      res = this.head;
      while (counter !== idx) {
        res = res.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      res = this.tail;
      while (counter !== idx) {
        res = res.prev;
        counter--;
      }
    }
    return res;
  }

  set(idx, value) {
    const node = this.get(idx);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(idx - 1);
      newNode.next = prevNode.next;
      prevNode.next.prev = newNode;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      this.length++;
    }
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length) {
      return this.pop();
    } else {
      const target = this.get(idx);
      const before = target.prev;
      const after = target.next;
      before.next = after;
      after.prev = before;
      target.next = target.prev = null;
      this.length--;
      return target;
    }
  }
}