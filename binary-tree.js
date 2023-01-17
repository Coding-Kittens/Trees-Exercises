/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    let depth = 1;

    let toVisit = [this.root];
    let nextLayer = [];

    while (toVisit.length) {
      let currentNode = toVisit.shift();

      if (currentNode.left) nextLayer.push(currentNode.left);
      if (currentNode.right) nextLayer.push(currentNode.right);

      if (!toVisit.length) {
        if (nextLayer.length) depth++;
        toVisit = nextLayer;
        nextLayer = [];
      }

      if (!currentNode.left || !currentNode.right) return depth++;
    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    let depth = 1;

    let toVisit = [this.root];
    let nextLayer = [];

    while (toVisit.length) {
      let currentNode = toVisit.shift();

      if (currentNode.left) nextLayer.push(currentNode.left);
      if (currentNode.right) nextLayer.push(currentNode.right);

      if (!toVisit.length) {
        if (nextLayer.length) depth++;
        toVisit = nextLayer;
        nextLayer = [];
      }
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;

    const sumNums = (node) => {
      if (!node) return 0;
      let leftSum = sumNums(node.left);
      let rightSum = sumNums(node.right);
      sum = Math.max(sum, node.val + rightSum + leftSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    };

    sumNums(this.root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let val = null;

    let toVisit = [this.root];

    while (toVisit.length) {
      let currentNode = toVisit.shift();
      if (currentNode.val > lowerBound && (currentNode.val < val || !val)) {
        val = currentNode.val;
      }
      if (currentNode.left) toVisit.push(currentNode.left);
      if (currentNode.right) toVisit.push(currentNode.right);
    }
    return val;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
