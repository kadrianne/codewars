# 2020.06.15 - How many days are we represented in a foreign country?

def days_represented(trips):
    days_represented = {}
    count = 0
    for day in range(1,366):
        days_represented[day] = 0

    for start,end in trips:
        for date in range(start,end + 1):
            days_represented[date] = True

    for value in days_represented.values():
        if value == True:
            count += 1
    return count

# 2020.06.11 - Welcome!
def greet(language):
    return {
        'czech': 'Vitejte',
        'danish': 'Velkomst',
        'dutch': 'Welkom',
        'english': 'Welcome',
        'estonian': 'Tere tulemast',
        'finnish': 'Tervetuloa',
        'flemish': 'Welgekomen',
        'french': 'Bienvenue',
        'german': 'Willkommen',
        'irish': 'Failte',
        'italian': 'Benvenuto',
        'latvian': 'Gaidits',
        'lithuanian': 'Laukiamas',
        'polish': 'Witamy',
        'spanish': 'Bienvenido',
        'swedish': 'Valkommen',
        'welsh': 'Croeso'
    }.get(language, 'Welcome')