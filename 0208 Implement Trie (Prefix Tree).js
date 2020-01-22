// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie()

// trie.insert("apple")
// trie.search("apple")   // returns true
// trie.search("app")     // returns false
// trie.startsWith("app") // returns true
// trie.insert("app")
// trie.search("app")     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

/**
 * Initialize your data structure here.
 */

const TrieNode = function(letter) {
  this.letter = letter
  this.children = {}
}

const Trie = function() {
    this.head = new TrieNode(null)
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.head

    for (let letter of word) {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new TrieNode(letter)
      }
      currentNode = currentNode.children[letter]
    }

    currentNode.children.wordEnd = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.head

    for (let letter of word) {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter]
      } else {
        return false
      }
    }

  return !!currentNode.children.wordEnd
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.head

    for (let letter of prefix) {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter]
      } else {
        return false
      }
    }

  return true
}

const trie = new Trie()
trie.insert("apple")
console.log(trie.search("apple")   , 'returns true')
console.log(trie.search("app")     , 'returns false')
console.log(trie.startsWith("app") , 'returns true')
trie.insert("app")
console.log(trie.search("app")     , 'returns true')