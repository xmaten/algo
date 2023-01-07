class Node<T> {
  val: T
  next: Node<T> | null
  prev: Node<T> | null

  constructor(val: T) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList<T> {
  length: number
  head: null | Node<T>
  tail: null | Node<T>

  constructor() {
    this.length = 0
    this.tail = null
    this.head = null
  }

  push(value: T) {
    const newNode = new Node(value)

    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++

    return this
  }

  pop() {
    if (!this.head) {
      return undefined
    }

    const poppedNode = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else if (poppedNode) {
      this.tail = poppedNode?.next

      if (this.tail) {
        this.tail.next = null
      }

      poppedNode.prev = null
    }

    this.length--

    return poppedNode
  }
}
