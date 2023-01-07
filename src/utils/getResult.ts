import { NUMBERS, UNSORTED_NUM_ARRAY, US_STATES } from '../constants'

import { linearSearch } from '../search/linear'
import { binarySearch } from '../search/binary'
import { naiveStringSearch } from '../search/naiveStringSearch'

import { bubbleSort } from '../sort/bubbleSort'
import { selectionSort } from '../sort/selectionSort'
import { insertionSort } from '../sort/insertionSort'
import { mergeSort } from '../sort/mergeSort'
import { quickSort } from '../sort/quickSort'
import { radixSort } from '../sort/radixSort'

import { SinglyLinkedList } from '../dataStructures/SinglyLinkedList'
import { BinarySearchTree } from '../dataStructures/BinarySearchTree'

type Option =
  | 'linearSearch'
  | 'binarySearch'
  | 'naiveSearch'
  | 'bubbleSort'
  | 'selectionSort'
  | 'insertionSort'
  | 'mergeSort'
  | 'quickSort'
  | 'radixSort'
  | 'singlyLinkedList'
  | 'bst'

export const getResult = (option?: Option) => {
  let result = null

  switch (option) {
    case 'linearSearch':
      result = linearSearch(US_STATES, 'California')
      break
    case 'binarySearch':
      result = binarySearch(NUMBERS, 30)
      break
    case 'naiveSearch':
      result = naiveStringSearch('lorie lold', 'lol')
      break
    case 'bubbleSort':
      result = bubbleSort<number>(UNSORTED_NUM_ARRAY)
      break
    case 'selectionSort':
      result = selectionSort<number>(UNSORTED_NUM_ARRAY)
      break
    case 'insertionSort':
      result = insertionSort<number>(UNSORTED_NUM_ARRAY)
      break
    case 'mergeSort':
      result = mergeSort<number>(UNSORTED_NUM_ARRAY)
      break
    case 'quickSort':
      result = quickSort<number>(UNSORTED_NUM_ARRAY)
      break
    case 'radixSort':
      result = radixSort(UNSORTED_NUM_ARRAY)
      break
    case 'singlyLinkedList':
      const list = new SinglyLinkedList<string | number>()
      list.push('Hi')
      list.push('You')
      list.push('There')
      list.pop()
      result = list
      break
    case 'bst':
      const tree = new BinarySearchTree<number>()
      tree.insert(10)
      tree.insert(6)
      tree.insert(15)
      tree.insert(3)
      tree.insert(8)
      tree.insert(20)

      const res = tree.dfsInOrder()
      result = res
      break
    default:
      result = radixSort(UNSORTED_NUM_ARRAY)
  }

  return result
}
