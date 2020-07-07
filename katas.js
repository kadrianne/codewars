// 2020.07.07
    // LeetCode - July 7 Challenge - Island Perimeter
    function islandPerimeter(grid) {
        const width = grid.length - 1
        const height = grid[0].length - 1
        let perimeter = 0
    
        for(let x = 0; x <= width; x++){
            for(let y = 0; y <= height; y++){
                if(grid[x][y] === 1){
                    if(x === 0){
                        perimeter += 1
                    }
                    if(y === 0){
                        perimeter += 1
                    }
                    if(x === width){
                        perimeter += 1
                    }
                    if(y === height){
                        perimeter += 1
                    }
                    if(x-1 >= 0 && grid[x-1][y] === 0){
                        perimeter += 1
                    }
                    if(x+1 <= width && grid[x+1][y] === 0){
                        perimeter += 1
                    }
                    if(y-1 >= 0 && grid[x][y-1] === 0){
                        perimeter += 1
                    }
                    if(y+1 <= height && grid[x][y+1] === 0){
                        perimeter += 1
                    }
                }
            }
        }
        return perimeter
    };
    
// 2020.07.06
    // LeetCode - July 6 Challenge - Plus One
    function plusOne(digits) {
        let lastDigit = digits.length - 1
        if (digits[lastDigit] == 9){
            let i = 0
            while (digits[lastDigit-i] == 9){
                digits[lastDigit-i] = 0
                i++
            }
            if (digits[lastDigit-i] >= 0){
                digits[lastDigit-i] += 1
            } else {
                digits.unshift(1)
            }
        } else {
            digits[lastDigit] += 1
        }
        return digits
    };

// 2020.06.30
    // LeetCode - 344. Reverse String
    const reverseString = function(s) {
        for(let i = 0; i <= s.length-1; i++){
            s.unshift(s[i])
            s.splice(i+1,1)
        }
    };

// 2020.06.29
    // 7kyu - Halving Sum
    function halvingSum(n) {
        let i = 2
        let sum = n
        while (n / i >= 1) {
            sum += Math.floor(n / i)    
            i = i * 2
        }
        return sum
    }

// 2020.06.12
    // 6kyu - Adjacent repeated words in a string
    function countAdjacentPairs(searchString) {
        const string = searchString.toLowerCase()
        const words = string.split(/\s+/)
        let count = 0
        let i = 0
        while (i < words.length) {
            let firstWord = words[i]
            let j = i + 1
            let nextWord = words[j]
            
            if (firstWord === nextWord) {
                count++
            
                while (firstWord === nextWord && j <= words.length) {
                    j++
                    nextWord = words[j]
                }
                
                i = j
            } else {
                i++
            }
        }
        return count
    }

// 2020.06.11
    // 8kyu - Welcome!
    function greet(language){
        const messages = {
            english: 'Welcome',
            czech: 'Vitejte',
            danish: 'Velkomst',
            dutch: 'Welkom',
            estonian: 'Tere tulemast',
            finnish: 'Tervetuloa',
            flemish: 'Welgekomen',
            french: 'Bienvenue',
            german: 'Willkommen',
            irish: 'Failte',
            italian: 'Benvenuto',
            latvian: 'Gaidits',
            lithuanian: 'Laukiamas',
            polish: 'Witamy',
            spanish: 'Bienvenido',
            swedish: 'Valkommen',
            welsh: 'Croeso'
        }

        return messages[language] || messages['english']
    }

    // 6kyu - Persistent Bugger.
    function persistence(num) {
        let splitNumber = `${num}`.split("")
        let count = 0
        
        while (splitNumber.length > 1) {
        let product = splitNumber.reduce((accumulator,number) => accumulator * number)
        splitNumber = `${product}`.split("")
        count++
        }
        
        return count
    }