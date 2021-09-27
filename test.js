function isValidBST(root) {
  if (root == null) {
    return true;
  }
  return isBST(root, 0, 100);
}

function isBST(root, min, max) {
  if (root == null) {
    return true;
  }
  console.log(min, root.val, max);
  if (min >= root.val || max <= root.val) {
    return false;
  }
  return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}
const root = {
  val: 20,
  left: {
    val: 16,
    left: {
      val: 15,
      left: {
        val: 12,
      },
      right: {
        val: 15.5,
      },
    },
    right: {
      val: 19,
    },
  },
  right: {
    val: 25,
    left: {
      val: 22,
      left: {
        val: 20.1,
      },
      right: {
        val: 24,
      },
    },
    right: {
      val: 30,
      left: {
        val: 26,
      },
      right: {
        val: 32,
      },
    },
  },
};
// const tt = isValidBST(root);
// console.log(tt);
function searchBST(root, val) {
  while (root != null) {
    if (root.val == val) {
      return root;
    } else if (root.val > val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return null;
}
console.log(searchBST(root, 15));
