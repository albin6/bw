class HashTable {
  constructor() {
    this.table = new Array(10).fill(null).map(() => []);
    this.size = 10;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash *= key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);

    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        return true;
      }
    }

    return false;
  }

  get(key) {
    const index = this.hash(key);

    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        return bucket[i];
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);

    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        bucket.splice(i, 1);
        return;
      }
    }

    return false;
  }
}
