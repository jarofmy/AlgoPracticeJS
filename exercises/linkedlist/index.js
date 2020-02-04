// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    let node = this.head;
    return node;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (node.next) {
        node = node.next;
      } else {
        return node;
      }
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return
    }
    let previous_node = null;
    let node = this.head;
    while (node.next) {
      previous_node = node;
      node = node.next;
    }
    previous_node.next = null;
  }

  insertLast(data) {
    const last_node = this.getLast();
    if (last_node){
      last_node.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(integer) {
    let node = this.head;
    let counter = 0;

    while(node) {
      if (counter === integer) {
        return node;
      }
      counter ++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    // find target, find prev and next
    if(!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let target = this.getAt(index);
    let prev = this.getAt(index - 1);
    let next = this.getAt(index + 1);

    if (!target) {
      return null;
    }

    if (!next) {
      prev.next = null
    } else {
      prev.next = next;
    }
  }

  insertAt(data, index) {
    if(!this.head) {
      return this.insertFirst(data);
    }

    if (index === 0) {
      const new_node = new Node(data, this.head);
      this.head = new_node;
      return;
    }

    let target = this.getAt(index);
    let prev = this.getAt(index - 1) || this.getLast();
    let next = this.getAt(index + 1);

    const new_node = new Node(data, prev.next);
    prev.next = new_node;
  }

  forEach(fn) {
    if(!this.head) {
      return null;
    }
    let node = this.head;
    let previous_node = null;
    while (node) {
      previous_node = node;
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
