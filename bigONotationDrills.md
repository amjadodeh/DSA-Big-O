# 1. What is the Big O for this?

1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

`Constant / O(1)`

2. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

`Linear / O(n)`

# 2. Even or odd

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
```

`Constant / O(1)`

    This algorithm performs only a single operation and returns the result of the conditional statement. The value we pass to it doesn't effect the algorithm's running time.

# 3. Are you here?

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

`Polynomial / O(n^k)`

    This algorithm requires 2 levels of looping. Because of the nested loop, we have a polynomial time complexity.

# 4. Doubler

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

`Linear / O(n)`

    This algorithm preforms an operation on each element of the array. The operation itself will take the same amount of time no matter how big the input. This means that we have a linear relationship between the length of the input array and the number of operations required for the loop part of the function to complete.

# 5. Naive search

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

`Linear / O(n)`

    This algorithm checks every element of the array. The time complexity depends on the number of elements in the array.

# 6. Creating pairs:

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

`Polynomial / O(n^k)`

    This algorithm has polynomial-time complexity besause it is using a nested loop to complete the function.

# 7. Compute the sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

```JavaScript
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

`Linear / O(n)`

    This function prints the Fibonacci sequence of a given number. The first iteration would push a zero into an empty array. The second iteration would push a 1 into the array. If 'i' is not equal to 1 or 2 the next iterations would push the sum of the two prior values in the array (Fibonacci style).

# 8. An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```JavaScript
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

`Logarithmic / O(log(n))`

    This algorithm is the next best thing after constant time. Every time the loop runs, the running time increases slowly. While searching for an item in an array, the function eliminates sections of the array at each round of the search.

# 9. Random element

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

`Constant / O(1)`

    This function performs no loops and runs only a single operation. The run time is consistant no matter how big the array.

# 10. What Am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```JavaScript
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```

`Logarithmic / O(log(n))`

    This function uses the modulo operator to check if the input number is a prime number. If the number is less than 2 or a decimal, the function returns false. If the number can be devided by any number up to itself it returns false. If not, it returns true.

# 11. Tower of Hanoi

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

    There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.

    The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

Input:

| Rod A         | Rod B | Rod C |
| ------------- | ----- | ----- |
| ----          |       |       |
| ---------     |       |       |
| ------------- |       |       |

Output:

| Rod A | Rod B | Rod C         |
| ----- | ----- | ------------- |
|       |       | ----          |
|       |       | ---------     |
|       |       | ------------- |

## Derive an algorithm to solve the Tower of Hanoi puzzle.

`2^n - 1, with n being the number of disks`

## Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

```JavaScript
let tick = 0

const towerOfHanoi = (n, start, end) => {
    const otherRod = 6 - (start + end)

    if (n === 0) return;

    towerOfHanoi(n-1, start, otherRod);

    tick += 1
    console.log(`${tick}. Move disk from ${start} to ${end}`);

    towerOfHanoi(n-1, otherRod, end);
}

tick = 0
console.log(towerOfHanoi(3, 1, 3));
```

## If you are given 5 disks, how do the rods look like after 7 recursive calls?

`The top disks are on rod 3 and bottom 2 on rod 1. You should ask me what happens if given 100 disks. Yeah, I totally did that.`

## How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

`7, 15, and 31`

## What is the runtime of your algorithm?

`Exponential / O(2^n)`

# 12. Iterative version

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

`Done.`

# 13. Recursive Big O

Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

1. Counting Sheep

`Linear / O(n)`

2. Power Calculator

`Linear / O(n)`

3. Reverse String

`Linear / O(n)`

4. nth Triangular Number

`Linear / O(n)`

5. String Splitter

`Linear / O(n)`

6. Fibonacci

`Linear / O(n)`

7. Factorial

`Linear / O(n)`

8. Find a way out of the maze

`Linear / O(n)`

9. Find ALL the ways out of the maze

`Linear / O(n)`

10. Anagrams

`Linear / O(n)`

11. Organization Chart

`Linear / O(n)`

12. Binary Representation

`Logarithmic / O(log(n))`

# 14. Iterative Big O

Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

1. Counting Sheep

`Linear / O(n)`

2. Power Calculator

`Linear / O(n)`

3. Reverse String

`Linear / O(n)`

4. nth Triangular Number

`Linear / O(n)`

5. String Splitter

`Linear / O(n)`

6. Fibonacci

`Linear / O(n)`

7. Factorial

`Linear / O(n)`
