const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0
    }

    append(data) {
        const newNode = new Node(data, this._tail);

        this._head = this._head || newNode;
        if (this._tail) this._tail.next = newNode;
        this._tail = newNode;
        this.length++;

        return this
    }

    head() {
        return this._head ? this._head.data : null
    }

    tail() {
        return this._tail ? this._tail.data : null
    }

    _at(index) {
        let atIndexNode = this._head;
        for (let i = 0; i < index; i++) {
            atIndexNode = atIndexNode.next
        }
        return atIndexNode
    }

    at(index) {
        return this._at(index).data
    }

    insertAt(index, data) {
        const prevNode = this._at(index - 1);
        const nextNode = this._at(index);

        if (prevNode && nextNode) {
            const newNode = new Node(data, prevNode, nextNode);
            prevNode.next = newNode;
            nextNode.prev = newNode;
            this.length++
        } else {
            this.append(data)
        }

        return this
    }

    isEmpty() {
        return !this.length
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this
    }

    deleteAt(index) {
        const prevNode = this._at(index - 1);
        const nextNode = this._at(index + 1);

        if (prevNode) {
            prevNode.next = nextNode;
        }
        if (nextNode) {
            nextNode.prev = prevNode
        }

        return this
    }

    reverse() {
        // not implemented

        return this
    }

    indexOf(data) {
        let indexNode = this._tail;
        let index = this.length - 1;
        for (; index !== -1 && indexNode.data !== data; index--) {
            indexNode = indexNode.prev
        }
        return index
    }
}

module.exports = LinkedList;
