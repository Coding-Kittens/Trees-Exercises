/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toVisit = [this.root];
    let sum = 0;
    while (toVisit.length) {
      let currentNode = toVisit.pop();
      if (currentNode) {
        sum += currentNode.val;
        for (let children of currentNode.children) {
          toVisit.push(children);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisit = [this.root];
    let count = 0;
    while (toVisit.length) {
      let currentNode = toVisit.pop();
      if (currentNode) {
        if (currentNode.val % 2 === 0) {
          count++;
        }
        for (let children of currentNode.children) {
          toVisit.push(children);
        }
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toVisit = [this.root];
    let count = 0;
    while (toVisit.length) {
      let currentNode = toVisit.pop();
      if (currentNode) {
        if (currentNode.val > lowerBound) {
          count++;
        }
        for (let children of currentNode.children) {
          toVisit.push(children);
        }
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
