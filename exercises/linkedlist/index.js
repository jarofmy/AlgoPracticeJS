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
    while (node) {
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

    if (!node) {
      return this.head;
    }

    while (node && node.next) {
      node = node.next;
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

    if(!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = null;
    let node = this.head;

    while (node && node.next) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(integer) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === integer) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if(!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previous_node = this.getAt(index - 1);
    let target_node = this.getAt(index);
    let next_node = this.getAt(index + 1);

    if (!target_node) {
      return null;
    }
    if (!next_node) {
      previous_node.next = null;
    } else {
      previous_node.next = next_node;
    }
  }

  insertAt(data, index) {
    // Create a new node, and assign at provided index
    if(!this.head) {
      this.insertFirst(data);
    }

    if (index === 0) {
      const new_node = new Node(data, this.head);
      this.head = new_node;
      return;
    }

    let previous_node = this.getAt(index - 1) || this.getLast();
    let target_node = this.getAt(index);
    let next_node = this.getAt(index + 1);

    const node = new Node(data, previous_node.next);
    previous_node.next = node;

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
