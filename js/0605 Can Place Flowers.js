// Suppose you have a long flowerbed in which some of the plots are planted and some are not.
// However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty),
// and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// as single line for fun
const canPlaceFlowers = (flowerbed, n) => flowerbed.reduce((a, pot, i) => a + (!(pot || flowerbed[i - 1] || flowerbed[i + 1]) ? (flowerbed[i] = 1) : 0), 0) <= n


const t = [1,0,0,0,1]
console.log(canPlaceFlowers(t, 1))
console.log(t)
console.log(canPlaceFlowers([1,0,0,0,1], 2))