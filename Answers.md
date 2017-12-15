## Question 1
1. What are the order of insertions/removals for the following data structures?
   - **Stack**
   - **Queue**

*Stacks* use LIFO, or last in first out  where *Queues* use FIFO (first in, first out) for insertion/deletion.

## Question 2
2. What is the retreival time complexity for the following data structures?
   - **Linked List**
   - **Hash Table**
   - **Binary Search Trees**

- The time complexity of retrieval for *linked lists* is **O(n)**, or just the number of elements. This is worst case scenario, when the target is at the end of the *linked list*.
- The time complexity of retrieval for *hash tables* is amortized to **O(1)**, but the worst case is O(n) (when there are a lot of elements hashed to one bucket).
- As long as the *binary search tree* is balanced, the time complexity of retrieval is **O(log n)**. This is because as you traverse further and further down the tree, less and less values are discarded (the most is at the root node where 1/2 of the elements are no longer considered.).

##Question 3
2. What are some advantages to using a Hash Tables over an array in JavaScript?
As long as the *hash table* doesn't have too many elements, the hashing will allow search and retrieval to happen in O(1) time. However, in an *Array*, search and retrieval must iterate through each element. I believe you can also add a layer of security to values because of the hash function (not entirely sure about this though).