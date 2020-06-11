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