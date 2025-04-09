class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  insertLast(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  insertAt(value, pos) {
    const newNode = new Node(value);

    if (pos == 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let i = 1;
    while (i != pos) {
      prev = current;
      current = current.next;
      i++;
    }

    prev.next = newNode;
    newNode.next = current;
  }

  removeFirst() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  display(head = this.head) {
    let current = head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(30);
ll.insertFirst(20);
ll.insertFirst(10);

ll.insertLast(40);
ll.insertLast(50);

// ll.insertAt(25, 6);

// ll.removeFirst();
// ll.removeLast();

ll.display();
