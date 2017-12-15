// A special array class that can only store the number of items specified by the `limit` argument
class LimitedArray {
  constructor(limit) {
    // You should not be directly accessing this array from your hash table methods
    // Use the getter and setter methods included in this class to manipulate data in this class
    this.storage = [];
    this.limit = limit;
  }

  checkLimit(index) {
    if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
    if (this.limit <= index) {
      throw new Error('The supplied index lies out of the array\'s bounds');
    }
  }

  each(cb) {
    for (let i = 0; i < this.storage.length; i++) {
      cb(this.storage[i], i);
    }
  }
  // Use this getter function to fetch elements from this class
  get(index) {
    this.checkLimit(index);
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }
  // Use this setter function to add elements to this class
  set(index, value) {
    this.checkLimit(index);
    this.storage[index] = value;
  }
}

// LinkedList class for hash table buckets
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(key, value) {
    const newNode = {
      next: null,
      key,
      value,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  removeHead() {
    if (this.head === null) return;
    if (this.head.next === null) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      return head.value;
    }
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  contains(key, passValue = false) {
    if (this.head === null) return false;
    const searchLinkedList = (node) => {
      if (node.key === key) if (passValue) return node.value || true;
      if (node.next === null) if (passValue) return undefined || false;
      return searchLinkedList(node.next);
    };
    return searchLinkedList(this.head);
  }

  filterBy(key, action) {
    if (this.head === null) return this;
    if (this.head === this.tail) {
      if (this.head.key === key) {
        if (action === 'remove') return undefined;
        if (action === 'insert') {
          this.head = null;
          this.tail = null;
          return this;
        } // else throw an error
      }
      return this;
    }
    let node = this.head;
    do {
      if (node.next.key === key) {
        node.next = node.next.next;
      }
      node = node.next;
    } while (node.next.next !== null);
    return this;
  }
}

/* eslint-disable no-bitwise, operator-assignment */
// This is hash function you'll be using to hash keys
// There's some bit-shifting magic going on here, but essentially, all it is doing is performing the modulo operator
// on the given `str` arg (the key) modded by the limit of the limited array
// This simply ensures that the hash function always returns an index that is within the boundaries of the limited array
const getIndexBelowMax = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = {
  LimitedArray,
  LinkedList,
  getIndexBelowMax,
};
