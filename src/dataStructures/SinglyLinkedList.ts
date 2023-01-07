class Node<T> {
  val: T
  next: Node<T> | null

  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

export class SinglyLinkedList<T> {
  length: number
  head: null | Node<T>
  tail: null | Node<T>

  constructor() {
    this.length = 0
    this.tail = null
    this.head = null
  }

  push(val: T) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++

    return this
  }

  pop() {
    if (this.length === 0) {
      return undefined
    }

    let current = this.head
    let newTail = this.head
    while (current?.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    if (this.tail) {
      this.tail.next = null
    }

    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  shift() {
    if (!this.head) {
      return undefined
    }

    const currentHead = this.head

    this.head = this.head.next
    this.length--

    return currentHead
  }

  unshift(value: T) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  get(index: number) {
    if (index <= 0 || index >= this.length) {
      return null
    }

    let counter = 0
    let current = this.head

    while (counter !== index) {
      if (current) {
        current = current.next
      }

      counter++
    }

    return current
  }

  set(index: number, value: T) {
    const node = this.get(index)

    if (!node) {
      return false
    }

    node.val = value

    return true
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) {
      return false
    }

    if (index === this.length) {
      return !!this.push(value)
    }

    if (index === 0) {
      return !!this.unshift(value)
    }

    const newNode = new Node(value)
    const prev = this.get(index - 1)
    const temp = prev?.next

    if (prev && temp) {
      prev.next = newNode
      newNode.next = temp
    }

    this.length++

    return true
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined
    }

    if (index === this.length - 1) {
      return this.pop()
    }

    if (index === 0) {
      return this.shift()
    }

    const prevNode = this.get(index - 1)
    const removed = prevNode?.next

    if (prevNode && removed) {
      prevNode.next = removed.next
    }

    this.length--

    return removed
  }

  print() {
    const arr = []
    let current = this.head

    while (current) {
      arr.push(current.val)
      current = current.next
    }

    console.log(arr)
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next = null
    let prev = null

    for (let i = 0; i < this.length; i++) {
      if (node) {
        next = node.next
        node.next = prev
        prev = node
        node = next
      }
    }

    return this
  }
}
