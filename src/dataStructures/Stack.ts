class Node<T> {
  val: T
  next: Node<T> | null

  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

export class Stack<T> {
  size: number
  first: null | Node<T>
  last: null | Node<T>

  constructor() {
    this.size = 0
    this.last = null
    this.first = null
  }

  push(value: T) {
    const newNode = new Node(value)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      const currentFirst = this.first
      this.first = newNode
      this.first.next = currentFirst
    }

    this.size++

    return this.size
  }

  pop() {
    if (this.size === 0) {
      return null
    }

    const temp = this.first

    if (this.first === this.last) {
      this.last = null
    }

    if (this.first) {
      this.first = this.first?.next
    }

    this.size--

    return temp?.val
  }
}
