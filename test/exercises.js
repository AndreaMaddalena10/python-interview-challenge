const exercises = {


    /* =====================================================
       EXERCISE 1
    ===================================================== */

    1: {

        chapter: 1,

        number: 1,

        difficulty: "Easy",

        layout: "compact",

        title: "Square Function",

        description: `
            <p>
                Scrivi una funzione <code>square(n)</code>
                che restituisca il quadrato del numero ricevuto.
            </p>

            <p>
                <strong>Requisito:</strong>
                utilizza l'operatore <code>**</code>.
            </p>

            <p>
                Esempio:
                <code>square(5) → 25</code>
            </p>
        `,

        starterCode:
`def square(n):
    pass

print(square(5))`,

        checker:
`
import ast


tree = ast.parse(user_code)


function_node = None


for node in tree.body:

    if (
        isinstance(node, ast.FunctionDef)
        and node.name == "square"
    ):

        function_node = node
        break



if function_node is None:

    fail(
        "Devi definire una funzione chiamata square()."
    )


else:

    success(
        "Funzione square() trovata"
    )


    # --------------------------------
    # CONTROLLO UTILIZZO **
    # --------------------------------

    uses_power = any(

        isinstance(node, ast.BinOp)
        and isinstance(node.op, ast.Pow)

        for node in ast.walk(function_node)

    )


    if uses_power:

        success(
            "Operatore ** utilizzato"
        )

    else:

        fail(
            "La consegna richiede di utilizzare l'operatore **."
        )


    # --------------------------------
    # ESECUZIONE
    # --------------------------------

    namespace = {}


    try:

        exec(
            user_code,
            namespace
        )


        square = namespace.get(
            "square"
        )


        if not callable(square):

            fail(
                "square deve essere una funzione."
            )


        else:

            tests = [

                (0, 0),

                (2, 4),

                (5, 25),

                (-3, 9),

                (1.5, 2.25)

            ]


            tests_ok = True


            for value, expected in tests:

                obtained = square(
                    value
                )


                if obtained != expected:

                    fail(
                        f"square({value})\\n"
                        f"Atteso: {expected}\\n"
                        f"Ottenuto: {obtained}"
                    )

                    tests_ok = False

                    break


            if tests_ok:

                success(
                    "Tutti i test superati"
                )


    except Exception as error:

        fail(
            "Errore durante l'esecuzione: "
            + str(error)
        )
`

    },



    /* =====================================================
       EXERCISE 2
    ===================================================== */

    2: {

        chapter: 1,

        number: 2,

        difficulty: "Easy",

        layout: "standard",

        title: "Even Numbers",

        description: `
            <p>
                Scrivi una funzione
                <code>even_numbers(numbers)</code>
                che riceva una lista di numeri e restituisca
                una lista contenente soltanto i numeri pari.
            </p>

            <p>
                Mantieni lo stesso ordine degli elementi.
            </p>

            <p>
                Esempio:
            </p>

            <pre>[1, 2, 3, 4, 5, 6] → [2, 4, 6]</pre>
        `,

        starterCode:
`def even_numbers(numbers):
    pass

print(even_numbers([1, 2, 3, 4, 5, 6]))`,

        checker:
`
namespace = {}


try:

    exec(
        user_code,
        namespace
    )


    function = namespace.get(
        "even_numbers"
    )


    if not callable(function):

        fail(
            "Devi definire una funzione chiamata even_numbers()."
        )


    else:

        success(
            "Funzione even_numbers() trovata"
        )


        tests = [

            (
                [1, 2, 3, 4, 5, 6],
                [2, 4, 6]
            ),

            (
                [1, 3, 5],
                []
            ),

            (
                [2, 4, 6],
                [2, 4, 6]
            ),

            (
                [],
                []
            ),

            (
                [-4, -3, -2, -1, 0, 1],
                [-4, -2, 0]
            ),

            (
                [10, 7, 8, 3, 2],
                [10, 8, 2]
            )

        ]


        tests_ok = True


        for value, expected in tests:

            obtained = function(
                value.copy()
            )


            if obtained != expected:

                fail(
                    f"Input: {value}\\n"
                    f"Atteso: {expected}\\n"
                    f"Ottenuto: {obtained}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "Tutti i test superati"
            )


except Exception as error:

    fail(
        "Errore durante l'esecuzione: "
        + str(error)
    )
`

    },



    /* =====================================================
       EXERCISE 3
    ===================================================== */

    3: {

        chapter: 1,

        number: 3,

        difficulty: "Medium",

        layout: "standard",

        title: "Person Class",

        description: `
            <p>
                Crea una classe <code>Person</code>.
            </p>

            <p>
                Il costruttore deve ricevere
                <code>name</code> e <code>age</code>
                e salvarli negli attributi corrispondenti.
            </p>

            <p>
                Crea inoltre un metodo
                <code>introduce()</code>
                che restituisca una frase nel formato:
            </p>

            <pre>Mi chiamo Andrea e ho 24 anni.</pre>
        `,

        starterCode:
`class Person:

    def __init__(self, name, age):
        pass

    def introduce(self):
        pass


person = Person("Andrea", 24)

print(person.introduce())`,

        checker:
`
namespace = {}


try:

    exec(
        user_code,
        namespace
    )


    Person = namespace.get(
        "Person"
    )


    if not isinstance(Person, type):

        fail(
            "Devi creare una classe chiamata Person."
        )


    else:

        success(
            "Classe Person trovata"
        )


        # --------------------------------
        # ATTRIBUTI
        # --------------------------------

        person = Person(
            "Andrea",
            24
        )


        if (
            getattr(person, "name", None) == "Andrea"
            and
            getattr(person, "age", None) == 24
        ):

            success(
                "Attributi name e age corretti"
            )

        else:

            fail(
                "Gli attributi name e age non sono corretti."
            )


        # --------------------------------
        # METODO INTRODUCE
        # --------------------------------

        method = getattr(
            person,
            "introduce",
            None
        )


        if not callable(method):

            fail(
                "Devi creare il metodo introduce()."
            )


        else:

            tests = [

                (
                    Person("Andrea", 24),
                    "Mi chiamo Andrea e ho 24 anni."
                ),

                (
                    Person("Laura", 30),
                    "Mi chiamo Laura e ho 30 anni."
                ),

                (
                    Person("Marco", 18),
                    "Mi chiamo Marco e ho 18 anni."
                )

            ]


            tests_ok = True


            for obj, expected in tests:

                obtained = obj.introduce()


                if obtained != expected:

                    fail(
                        f"Atteso:\\n"
                        f"{expected}\\n\\n"
                        f"Ottenuto:\\n"
                        f"{obtained}"
                    )

                    tests_ok = False

                    break


            if tests_ok:

                success(
                    "Metodo introduce() corretto"
                )


except Exception as error:

    fail(
        "Errore durante l'esecuzione: "
        + str(error)
    )
`

    }

};