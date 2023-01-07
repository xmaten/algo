class Node<T> {
  value: T
  left: Node<T> | null
  right: Node<T> | null

  constructor(val: T) {
    this.value = val
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree<T> {
  root: Node<T> | null

  constructor() {
    this.root = null
  }

  insert(value: T) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (true) {
      if (value === current.value) {
        return undefined
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }

        current = current.left
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode
          return this
        }

        current = current.right
      }
    }
  }

  find(value: T) {
    if (!this.root) {
      return false
    }

    let current = this.root
    let found = false

    while (current && !found) {
      if (value < current.value) {
        current = current.left!
      } else if (value > current.value) {
        current = current.right!
      } else {
        found = true
      }
    }

    if (!found) {
      return false
    }

    return current
  }

  bfs() {
    const queue = []
    const data = []
    let node = this.root

    queue.push(node)

    while (queue.length) {
      node = queue.shift() as Node<T>

      if (node) {
        data.push(node.value)

        if (node.left) {
          queue.push(node.left)
        }

        if (node.right) {
          queue.push(node.right)
        }
      }
    }

    return data
  }

  dfsPreOrder() {
    if (!this.root) {
      return []
    }

    return traversePreOrder(this.root)
  }

  dfsPostOrder() {
    if (!this.root) {
      return []
    }

    return traversePostOrder(this.root)
  }

  dfsInOrder() {
    if (!this.root) {
      return []
    }

    return traverseInOrder(this.root)
  }
}

const traversePreOrder = <T>(node: Node<T>): T[] => {
  const data = []

  data.push(node.value)

  if (node.left) {
    data.push(...traversePreOrder(node.left))
  }

  if (node.right) {
    data.push(...traversePreOrder(node.right))
  }

  return data
}

const traversePostOrder = <T>(node: Node<T>): T[] => {
  const data = []

  if (node.left) {
    data.push(...traversePostOrder(node.left))
  }

  if (node.right) {
    data.push(...traversePostOrder(node.right))
  }

  data.push(node.value)

  return data
}

const traverseInOrder = <T>(node: Node<T>): T[] => {
  const data = []

  if (node.left) {
    data.push(...traverseInOrder(node.left))
  }

  data.push(node.value)

  if (node.right) {
    data.push(...traverseInOrder(node.right))
  }

  return data
}
