class Node<T> {
  val: T
  next: Node<T> | null

  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

export class Queue<T> {
  size: number
  first: null | Node<T>
  last: null | Node<T>

  constructor() {
    this.size = 0
    this.last = null
    this.first = null
  }

  enqueue(value: T) {
    const newNode = new Node(value)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      if (this.last) {
        this.last.next = newNode
        this.last = newNode
      }
    }

    this.size++

    return this.size
  }

  dequeue() {
    if (!this.first) {
      return null
    }

    const temp = this.first
    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next

    this.size--

    return temp.val
  }
}
