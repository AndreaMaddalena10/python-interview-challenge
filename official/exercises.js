const exercises = {

    /* =====================================================
       CHALLENGE 001
       Remove Duplicates While Preserving Order
    ===================================================== */

    1: {

        chapter: 1,

        number: "001",

        difficulty: "Easy",

        layout: "standard",

        title:
            "Remove Duplicates While Preserving Order",


        description: `
            <p>
                Write a function
                <code>remove_duplicates(items)</code>
                that returns a <strong>new list</strong>
                containing each value only once.
            </p>

            <p>
                The order of the first appearance of each
                element must be preserved.
            </p>

            <p>
                You may assume that every element inside
                <code>items</code> is <strong>hashable</strong>.
            </p>

            <p>
                Example:
            </p>

            <pre>remove_duplicates([1, 2, 2, 3, 1]) → [1, 2, 3]</pre>

            <p>
                Your implementation does not need to match
                a predefined solution. It only needs to
                satisfy the required behavior.
            </p>
        `,


        starterCode:
`def remove_duplicates(items):
    pass


print(remove_duplicates([1, 2, 2, 3, 1]))`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "remove_duplicates"
    )


    if not callable(function):

        fail(
            "You must define a function called remove_duplicates()."
        )


    else:

        success(
            "Function remove_duplicates() found"
        )


        tests = [

            (
                [],
                []
            ),

            (
                [1],
                [1]
            ),

            (
                [1, 1, 1],
                [1]
            ),

            (
                [1, 2, 2, 3, 1],
                [1, 2, 3]
            ),

            (
                ["python", "java", "python", "javascript"],
                ["python", "java", "javascript"]
            ),

            (
                ["a", "b", "a", "c", "b", "d"],
                ["a", "b", "c", "d"]
            ),

            (
                [3, 1, 3, 2, 1, 4],
                [3, 1, 2, 4]
            ),

            (
                [(1, 2), (1, 2), (3, 4)],
                [(1, 2), (3, 4)]
            )

        ]


        tests_ok = True


        for value, expected in tests:

            original_input = value.copy()

            obtained = function(
                value
            )


            if not isinstance(
                obtained,
                list
            ):

                fail(
                    "The function must return a list.\\n"
                    f"Returned type: {type(obtained).__name__}"
                )

                tests_ok = False

                break


            if obtained != expected:

                fail(
                    f"Input: {original_input}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "Duplicates are removed correctly"
            )

            success(
                "The order of first appearance is preserved"
            )


            identity_test = [
                1,
                2,
                3
            ]


            identity_result = function(
                identity_test
            )


            if identity_result is identity_test:

                fail(
                    "The function must return a new list, "
                    "not the original input list."
                )

            else:

                success(
                    "The function returns a new list"
                )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },



    /* =====================================================
       CHALLENGE 002
       Count Word Occurrences
    ===================================================== */

    2: {

        chapter: 1,

        number: "002",

        difficulty: "Easy",

        layout: "standard",

        title:
            "Count Word Occurrences",


        description: `
            <p>
                Write a function
                <code>count_words(words)</code>
                that returns a dictionary containing the
                number of occurrences of each word.
            </p>

            <p>
                Example:
            </p>

            <pre>count_words(["python", "java", "python"])</pre>

            <p>
                Expected result:
            </p>

            <pre>{"python": 2, "java": 1}</pre>

            <p>
                There may be several valid ways to solve
                the problem. Your solution will be tested
                by its behavior.
            </p>
        `,


        starterCode:
`def count_words(words):
    pass


print(count_words(["python", "java", "python"]))`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "count_words"
    )


    if not callable(function):

        fail(
            "You must define a function called count_words()."
        )


    else:

        success(
            "Function count_words() found"
        )


        tests = [

            (
                [],
                {}
            ),

            (
                ["python"],
                {
                    "python": 1
                }
            ),

            (
                ["python", "java", "python"],
                {
                    "python": 2,
                    "java": 1
                }
            ),

            (
                ["python", "python", "python"],
                {
                    "python": 3
                }
            ),

            (
                ["a", "b", "a", "c", "b", "a"],
                {
                    "a": 3,
                    "b": 2,
                    "c": 1
                }
            ),

            (
                ["java", "python", "javascript", "java"],
                {
                    "java": 2,
                    "python": 1,
                    "javascript": 1
                }
            )

        ]


        tests_ok = True


        for value, expected in tests:

            obtained = function(
                value.copy()
            )


            if not isinstance(
                obtained,
                dict
            ):

                fail(
                    "The function must return a dictionary.\\n"
                    f"Returned type: {type(obtained).__name__}"
                )

                tests_ok = False

                break


            if obtained != expected:

                fail(
                    f"Input: {value}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "All word counts are correct"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },

        /* =====================================================
       CHALLENGE 003
       Calculate the Final Price
    ===================================================== */

    3: {

        chapter: 2,

        number: "003",

        difficulty: "Easy",

        layout: "standard",

        title:
            "Calculate the Final Price",


        description: `
            <p>
                Write a function
                <code>final_price(price, discount=0, tax=0)</code>.
            </p>

            <p>
                The function must:
            </p>

            <ul>
                <li>
                    apply the percentage discount to the
                    original price;
                </li>

                <li>
                    apply the percentage tax to the
                    discounted price;
                </li>

                <li>
                    return the final amount rounded to
                    two decimal places.
                </li>
            </ul>

            <p>
                You may assume that:
            </p>

            <ul>
                <li>
                    <code>price</code> is a non-negative
                    numeric value;
                </li>

                <li>
                    <code>discount</code> is between
                    <code>0</code> and <code>100</code>;
                </li>

                <li>
                    <code>tax</code> is a non-negative
                    percentage.
                </li>
            </ul>

            <p>
                Input validation is not required.
            </p>

            <p>
                Example:
            </p>

            <pre>final_price(100, discount=20, tax=10) → 88.0</pre>

            <p>
                Your implementation does not need to match
                a predefined solution. Only the required
                behavior matters.
            </p>
        `,


        starterCode:
`def final_price(price, discount=0, tax=0):
    pass


print(final_price(100, discount=20, tax=10))`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "final_price"
    )


    if not callable(function):

        fail(
            "You must define a function called final_price()."
        )


    else:

        success(
            "Function final_price() found"
        )


        tests = [

            (
                (100,),
                {},
                100.0
            ),

            (
                (100,),
                {
                    "discount": 20
                },
                80.0
            ),

            (
                (100,),
                {
                    "tax": 10
                },
                110.0
            ),

            (
                (100,),
                {
                    "discount": 20,
                    "tax": 10
                },
                88.0
            ),

            (
                (100, 20, 10),
                {},
                88.0
            ),

            (
                (49.99,),
                {
                    "discount": 10,
                    "tax": 5
                },
                47.24
            ),

            (
                (200,),
                {
                    "discount": 33,
                    "tax": 7.5
                },
                144.05
            ),

            (
                (80,),
                {
                    "discount": 100,
                    "tax": 20
                },
                0.0
            )

        ]


        tests_ok = True


        for args, kwargs, expected in tests:

            obtained = function(
                *args,
                **kwargs
            )


            if obtained != expected:

                fail(
                    f"Arguments: {args}\\n"
                    f"Keyword arguments: {kwargs}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "All price calculations are correct"
            )

            success(
                "Discount and tax are applied correctly"
            )

            success(
                "Results are rounded correctly"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },



    /* =====================================================
       CHALLENGE 004
       Merge Configuration Settings
    ===================================================== */

    4: {

        chapter: 2,

        number: "004",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Merge Configuration Settings",


        description: `
            <p>
                Write a function
                <code>merge_settings(defaults, **overrides)</code>.
            </p>

            <p>
                The function receives:
            </p>

            <ul>
                <li>
                    a dictionary containing the default
                    settings;
                </li>

                <li>
                    zero or more keyword arguments containing
                    values that should override those defaults.
                </li>
            </ul>

            <p>
                Return a <strong>new dictionary</strong>
                containing the merged configuration.
            </p>

            <p>
                Values supplied through
                <code>overrides</code> must replace matching
                values from <code>defaults</code>.
            </p>

            <p>
                The original
                <code>defaults</code>
                dictionary must not be modified.
            </p>

            <p>
                Example:
            </p>

            <pre>defaults = {
    "theme": "light",
    "notifications": True,
    "language": "en"
}

merge_settings(
    defaults,
    theme="dark",
    language="es"
)

→ {
    "theme": "dark",
    "notifications": True,
    "language": "es"
}</pre>

            <p>
                You only need to avoid modifying the
                top-level <code>defaults</code> dictionary.
                A deep copy of nested values is not required.
            </p>

            <p>
                There are multiple valid ways to solve
                this challenge.
            </p>
        `,


        starterCode:
`def merge_settings(defaults, **overrides):
    pass


settings = {
    "theme": "light",
    "notifications": True,
    "language": "en"
}

print(
    merge_settings(
        settings,
        theme="dark",
        language="es"
    )
)`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "merge_settings"
    )


    if not callable(function):

        fail(
            "You must define a function called merge_settings()."
        )


    else:

        success(
            "Function merge_settings() found"
        )


        tests = [

            (
                {
                    "theme": "light",
                    "notifications": True,
                    "language": "en"
                },

                {
                    "theme": "dark",
                    "language": "es"
                },

                {
                    "theme": "dark",
                    "notifications": True,
                    "language": "es"
                }
            ),

            (
                {
                    "theme": "light"
                },

                {},

                {
                    "theme": "light"
                }
            ),

            (
                {},

                {
                    "debug": True
                },

                {
                    "debug": True
                }
            ),

            (
                {
                    "timeout": 30,
                    "retries": 3
                },

                {
                    "timeout": 10,
                    "secure": True
                },

                {
                    "timeout": 10,
                    "retries": 3,
                    "secure": True
                }
            ),

            (
                {
                    "language": "en",
                    "volume": 50,
                    "dark_mode": False
                },

                {
                    "volume": 75,
                    "dark_mode": True
                },

                {
                    "language": "en",
                    "volume": 75,
                    "dark_mode": True
                }
            )

        ]


        tests_ok = True


        for defaults, overrides, expected in tests:

            original_defaults = defaults.copy()


            obtained = function(
                defaults,
                **overrides
            )


            if not isinstance(
                obtained,
                dict
            ):

                fail(
                    "The function must return a dictionary.\\n"
                    f"Returned type: {type(obtained).__name__}"
                )

                tests_ok = False

                break


            if obtained != expected:

                fail(
                    f"Defaults: {original_defaults}\\n"
                    f"Overrides: {overrides}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            if defaults != original_defaults:

                fail(
                    "The original defaults dictionary "
                    "must not be modified.\\n"
                    f"Before: {original_defaults}\\n"
                    f"After: {defaults}"
                )

                tests_ok = False

                break


            if obtained is defaults:

                fail(
                    "The function must return a new dictionary, "
                    "not the original defaults dictionary."
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "Default settings are preserved correctly"
            )

            success(
                "Overrides are applied correctly"
            )

            success(
                "The original dictionary is not modified"
            )

            success(
                "A new dictionary is returned"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },


        /* =====================================================
       CHALLENGE 005
       Find the First Duplicate
    ===================================================== */

    5: {

        chapter: 3,

        number: "005",

        difficulty: "Easy",

        layout: "standard",

        title:
            "Find the First Duplicate",


        description: `
            <p>
                Write a function
                <code>first_duplicate(items)</code>.
            </p>

            <p>
                Return the first value that appears for a
                second time while reading the input from
                left to right.
            </p>

            <p>
                If there are no duplicates, return
                <code>None</code>.
            </p>

            <p>
                You may assume that every element inside
                <code>items</code> is <strong>hashable</strong>.
            </p>

            <p>
                Example:
            </p>

            <pre>first_duplicate([1, 2, 3, 2, 1]) → 2</pre>

            <p>
                The value <code>2</code> is returned because
                its second occurrence appears before the
                second occurrence of <code>1</code>.
            </p>

            <p>
                Your implementation does not need to match
                a predefined solution. Only the required
                behavior matters.
            </p>
        `,


        starterCode:
`def first_duplicate(items):
    pass


print(first_duplicate([1, 2, 3, 2, 1]))`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "first_duplicate"
    )


    if not callable(function):

        fail(
            "You must define a function called first_duplicate()."
        )


    else:

        success(
            "Function first_duplicate() found"
        )


        tests = [

            (
                [],
                None
            ),

            (
                [1],
                None
            ),

            (
                [1, 2, 3],
                None
            ),

            (
                [1, 2, 3, 2, 1],
                2
            ),

            (
                ["a", "b", "a"],
                "a"
            ),

            (
                ["python", "java", "python"],
                "python"
            ),

            (
                [5, 5, 6, 6],
                5
            ),

            (
                [1, 2, 1, 2],
                1
            ),

            (
                [3, 1, 2, 3, 2, 1],
                3
            ),

            (
                [(1, 2), (3, 4), (1, 2)],
                (1, 2)
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
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "The first duplicate is identified correctly"
            )

            success(
                "Inputs without duplicates return None"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },



    /* =====================================================
       CHALLENGE 006
       Square Only the Even Numbers
    ===================================================== */

    6: {

        chapter: 3,

        number: "006",

        difficulty: "Easy",

        layout: "standard",

        title:
            "Square Only the Even Numbers",


        description: `
            <p>
                Write a function
                <code>square_evens(numbers)</code>.
            </p>

            <p>
                Return a <strong>new list</strong> containing
                the square of every even number in the
                original iterable.
            </p>

            <p>
                Preserve the original order.
            </p>

            <p>
                The original input must not be modified.
            </p>

            <p>
                Example:
            </p>

            <pre>square_evens([1, 2, 3, 4, 5, 6]) → [4, 16, 36]</pre>

            <p>
                <strong>Bonus:</strong>
                try solving the problem once with a normal
                <code>for</code> loop and once with a list
                comprehension.
            </p>

            <p>
                Both implementations can be correct.
                The platform evaluates behavior, not whether
                your source code matches a specific solution.
            </p>
        `,


        starterCode:
`def square_evens(numbers):
    pass


print(square_evens([1, 2, 3, 4, 5, 6]))`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "square_evens"
    )


    if not callable(function):

        fail(
            "You must define a function called square_evens()."
        )


    else:

        success(
            "Function square_evens() found"
        )


        tests = [

            (
                [],
                []
            ),

            (
                [1, 3, 5],
                []
            ),

            (
                [2],
                [4]
            ),

            (
                [1, 2, 3, 4],
                [4, 16]
            ),

            (
                [1, 2, 3, 4, 5, 6],
                [4, 16, 36]
            ),

            (
                [-2, -1, 0, 2],
                [4, 0, 4]
            ),

            (
                [8, 3, 6, 5, 2],
                [64, 36, 4]
            )

        ]


        tests_ok = True


        for value, expected in tests:

            original_input = value.copy()

            obtained = function(
                value
            )


            if not isinstance(
                obtained,
                list
            ):

                fail(
                    "The function must return a list.\\n"
                    f"Returned type: {type(obtained).__name__}"
                )

                tests_ok = False

                break


            if obtained != expected:

                fail(
                    f"Input: {original_input}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            if value != original_input:

                fail(
                    "The original input must not be modified.\\n"
                    f"Before: {original_input}\\n"
                    f"After: {value}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "Only even numbers are selected"
            )

            success(
                "Even numbers are squared correctly"
            )

            success(
                "The original order is preserved"
            )

            success(
                "The original input is not modified"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },



        /* =====================================================
       CHALLENGE 007
       First Non-Repeating Character
    ===================================================== */

    7: {

        chapter: 4,

        number: "007",

        difficulty: "Easy",

        layout: "standard",

        title:
            "First Non-Repeating Character",


        description: `
            <p>
                Write a function
                <code>first_unique_character(text)</code>.
            </p>

            <p>
                Return the first character that appears
                exactly once in the string.
            </p>

            <p>
                If every character appears more than once,
                return <code>None</code>.
            </p>

            <p>
                The comparison is
                <strong>case-sensitive</strong>.
            </p>

            <p>
                Example:
            </p>

            <pre>first_unique_character("swiss") → "w"</pre>

            <p>
                Lowercase and uppercase characters are
                considered different.
            </p>

            <p>
                Your implementation does not need to match
                a predefined solution. Only the required
                behavior matters.
            </p>
        `,


        starterCode:
`def first_unique_character(text):
    pass


print(first_unique_character("swiss"))`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "first_unique_character"
    )


    if not callable(function):

        fail(
            "You must define a function called first_unique_character()."
        )


    else:

        success(
            "Function first_unique_character() found"
        )


        tests = [

            (
                "",
                None
            ),

            (
                "a",
                "a"
            ),

            (
                "aabbcc",
                None
            ),

            (
                "swiss",
                "w"
            ),

            (
                "Python",
                "P"
            ),

            (
                "aAbA",
                "a"
            ),

            (
                "aabbcddee",
                "c"
            ),

            (
                "1122334",
                "4"
            ),

            (
                "xxyyZzz",
                "Z"
            )

        ]


        tests_ok = True


        for value, expected in tests:

            obtained = function(
                value
            )


            if obtained != expected:

                fail(
                    f"Input: {repr(value)}\\n"
                    f"Expected: {repr(expected)}\\n"
                    f"Obtained: {repr(obtained)}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "The first non-repeating character is identified correctly"
            )

            success(
                "Case-sensitive comparisons are handled correctly"
            )

            success(
                "Inputs without unique characters return None"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },



    /* =====================================================
       CHALLENGE 008
       Normalize a Username
    ===================================================== */

    8: {

        chapter: 4,

        number: "008",

        difficulty: "Easy",

        layout: "standard",

        title:
            "Normalize a Username",


        description: `
            <p>
                Write a function
                <code>normalize_username(name)</code>.
            </p>

            <p>
                The function must:
            </p>

            <ul>
                <li>
                    remove whitespace from the beginning
                    and end;
                </li>

                <li>
                    convert the string to lowercase;
                </li>

                <li>
                    replace every internal regular space
                    <code>" "</code> with an underscore;
                </li>

                <li>
                    return the resulting string.
                </li>
            </ul>

            <p>
                Example:
            </p>

            <pre>normalize_username("   John Smith   ") → "john_smith"</pre>

            <p>
                Multiple internal spaces must be replaced
                individually.
            </p>

            <p>
                For example:
            </p>

            <pre>normalize_username("John  Smith") → "john__smith"</pre>

            <p>
                You do not need to collapse repeated spaces
                or normalize internal tabs.
            </p>

            <p>
                The platform evaluates the returned behavior,
                not whether your source code matches a
                predefined solution.
            </p>
        `,


        starterCode:
`def normalize_username(name):
    pass


print(normalize_username("   John Smith   "))`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "normalize_username"
    )


    if not callable(function):

        fail(
            "You must define a function called normalize_username()."
        )


    else:

        success(
            "Function normalize_username() found"
        )


        tests = [

            (
                "John Smith",
                "john_smith"
            ),

            (
                "   John Smith   ",
                "john_smith"
            ),

            (
                "PYTHON DEV",
                "python_dev"
            ),

            (
                "Alice",
                "alice"
            ),

            (
                "   BOB   ",
                "bob"
            ),

            (
                "John  Smith",
                "john__smith"
            ),

            (
                "",
                ""
            ),

            (
                "   ",
                ""
            ),

            (
                "\\tPython Dev\\n",
                "python_dev"
            ),

            (
                "Python\\tDev",
                "python\\tdev"
            )

        ]


        tests_ok = True


        for value, expected in tests:

            obtained = function(
                value
            )


            if not isinstance(
                obtained,
                str
            ):

                fail(
                    "The function must return a string.\\n"
                    f"Returned type: {type(obtained).__name__}"
                )

                tests_ok = False

                break


            if obtained != expected:

                fail(
                    f"Input: {repr(value)}\\n"
                    f"Expected: {repr(expected)}\\n"
                    f"Obtained: {repr(obtained)}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "Leading and trailing whitespace is removed correctly"
            )

            success(
                "Text is converted to lowercase correctly"
            )

            success(
                "Regular internal spaces are replaced with underscores"
            )

            success(
                "Repeated internal spaces are preserved as repeated underscores"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },


        /* =====================================================
       CHALLENGE 009
       Build a Bank Account
    ===================================================== */

    9: {

        chapter: 5,

        number: "009",

        difficulty: "Easy",

        layout: "standard",

        title:
            "Build a Bank Account",


        description: `
            <p>
                Create a class
                <code>BankAccount</code>.
            </p>

            <p>
                The constructor must accept an initial
                balance.
            </p>

            <pre>account = BankAccount(100)</pre>

            <p>
                You may assume that:
            </p>

            <ul>
                <li>the initial balance is non-negative;</li>
                <li>deposit amounts are positive;</li>
                <li>withdrawal amounts are positive;</li>
                <li>input validation is not required.</li>
            </ul>

            <p>
                Your class must provide three methods.
            </p>

            <p>
                <code>deposit(amount)</code> adds the amount
                to the current balance.
            </p>

            <p>
                <code>withdraw(amount)</code> subtracts the
                amount only when sufficient funds are
                available.
            </p>

            <p>
                It must return <code>True</code> when the
                withdrawal succeeds and <code>False</code>
                when the balance is insufficient.
            </p>

            <p>
                If a withdrawal fails, the balance must
                remain unchanged.
            </p>

            <p>
                <code>get_balance()</code> returns the
                current balance.
            </p>

            <p>
                The internal attribute used to store the
                balance does not need to have a specific
                name.
            </p>
        `,


        starterCode:
`class BankAccount:
    pass


account = BankAccount(100)
account.deposit(50)

print(account.get_balance())`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    BankAccount = namespace.get(
        "BankAccount"
    )


    if not isinstance(BankAccount, type):

        fail(
            "You must define a class called BankAccount."
        )


    else:

        success(
            "Class BankAccount found"
        )


        tests_ok = True


        try:

            account = BankAccount(100)

        except Exception as error:

            fail(
                "BankAccount(100) could not be created.\\n"
                + str(error)
            )

            tests_ok = False


        if tests_ok:

            required_methods = [
                "deposit",
                "withdraw",
                "get_balance"
            ]


            for method_name in required_methods:

                method = getattr(
                    account,
                    method_name,
                    None
                )


                if not callable(method):

                    fail(
                        f"You must define a method called {method_name}()."
                    )

                    tests_ok = False

                    break


        if tests_ok:

            if account.get_balance() != 100:

                fail(
                    "The initial balance was not stored correctly.\\n"
                    "Expected: 100\\n"
                    f"Obtained: {account.get_balance()}"
                )

                tests_ok = False


        if tests_ok:

            account.deposit(50)

            if account.get_balance() != 150:

                fail(
                    "deposit() did not update the balance correctly.\\n"
                    "Expected: 150\\n"
                    f"Obtained: {account.get_balance()}"
                )

                tests_ok = False


        if tests_ok:

            result = account.withdraw(40)

            if result is not True:

                fail(
                    "A successful withdrawal must return True."
                )

                tests_ok = False

            elif account.get_balance() != 110:

                fail(
                    "The balance after a successful withdrawal is incorrect.\\n"
                    "Expected: 110\\n"
                    f"Obtained: {account.get_balance()}"
                )

                tests_ok = False


        if tests_ok:

            balance_before = account.get_balance()

            result = account.withdraw(200)

            if result is not False:

                fail(
                    "A withdrawal with insufficient funds must return False."
                )

                tests_ok = False

            elif account.get_balance() != balance_before:

                fail(
                    "The balance must remain unchanged when a withdrawal fails."
                )

                tests_ok = False


        if tests_ok:

            account2 = BankAccount(50)

            account2.deposit(25)

            if account2.get_balance() != 75:

                fail(
                    "A second BankAccount instance does not behave correctly."
                )

                tests_ok = False

            elif account.get_balance() != 110:

                fail(
                    "Different BankAccount instances must maintain independent balances."
                )

                tests_ok = False


        if tests_ok:

            account3 = BankAccount(30)

            result = account3.withdraw(30)

            if result is not True:

                fail(
                    "Withdrawing the exact available balance should succeed."
                )

                tests_ok = False

            elif account3.get_balance() != 0:

                fail(
                    "Withdrawing the exact balance should leave 0."
                )

                tests_ok = False


        if tests_ok:

            account4 = BankAccount(10.5)

            account4.deposit(4.5)

            if account4.get_balance() != 15.0:

                fail(
                    "The class should also work with numeric decimal balances."
                )

                tests_ok = False


        if tests_ok:

            success(
                "Initial balance is handled correctly"
            )

            success(
                "Deposits update the account correctly"
            )

            success(
                "Withdrawals behave correctly"
            )

            success(
                "Failed withdrawals leave the balance unchanged"
            )

            success(
                "Different accounts maintain independent state"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },



    /* =====================================================
       CHALLENGE 010
       Employee and Developer
    ===================================================== */

    10: {

        chapter: 5,

        number: "010",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Employee and Developer",


        description: `
            <p>
                Create two classes:
            </p>

            <pre>class Employee:
    pass

class Developer(Employee):
    pass</pre>

            <p>
                <strong>Employee</strong> must accept
                <code>name</code> and <code>salary</code>
                in its constructor and store both values.
            </p>

            <p>
                It must provide a method
                <code>describe()</code>.
            </p>

            <pre>Employee("Alex", 30000).describe()
→ "Alex earns 30000"</pre>

            <p>
                <strong>Developer</strong> must inherit from
                <code>Employee</code>.
            </p>

            <p>
                Its constructor must additionally accept
                <code>language</code>.
            </p>

            <p>
                Developer should reuse the parent class
                initialization for <code>name</code> and
                <code>salary</code>, then store its own
                <code>language</code>.
            </p>

            <p>
                Override <code>describe()</code> so that:
            </p>

            <pre>Developer("Sam", 40000, "Python").describe()
→ "Sam earns 40000 and codes in Python"</pre>
        `,


        starterCode:
`class Employee:
    pass


class Developer(Employee):
    pass


developer = Developer("Sam", 40000, "Python")
print(developer.describe())`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    Employee = namespace.get(
        "Employee"
    )

    Developer = namespace.get(
        "Developer"
    )


    tests_ok = True


    if not isinstance(Employee, type):

        fail(
            "You must define a class called Employee."
        )

        tests_ok = False


    if tests_ok and not isinstance(Developer, type):

        fail(
            "You must define a class called Developer."
        )

        tests_ok = False


    if tests_ok:

        success(
            "Classes Employee and Developer found"
        )


    if tests_ok and not issubclass(
        Developer,
        Employee
    ):

        fail(
            "Developer must inherit from Employee."
        )

        tests_ok = False


    if tests_ok:

        try:

            employee = Employee(
                "Alex",
                30000
            )

        except Exception as error:

            fail(
                "Employee('Alex', 30000) could not be created.\\n"
                + str(error)
            )

            tests_ok = False


    if tests_ok:

        if getattr(
            employee,
            "name",
            None
        ) != "Alex":

            fail(
                "Employee must store the name attribute."
            )

            tests_ok = False

        elif getattr(
            employee,
            "salary",
            None
        ) != 30000:

            fail(
                "Employee must store the salary attribute."
            )

            tests_ok = False


    if tests_ok:

        describe = getattr(
            employee,
            "describe",
            None
        )

        if not callable(describe):

            fail(
                "Employee must define describe()."
            )

            tests_ok = False

        elif describe() != "Alex earns 30000":

            fail(
                "Employee.describe() returned an incorrect result.\\n"
                'Expected: "Alex earns 30000"\\n'
                f"Obtained: {repr(describe())}"
            )

            tests_ok = False


    if tests_ok:

        try:

            developer = Developer(
                "Sam",
                40000,
                "Python"
            )

        except Exception as error:

            fail(
                "Developer('Sam', 40000, 'Python') could not be created.\\n"
                + str(error)
            )

            tests_ok = False


    if tests_ok:

        if getattr(
            developer,
            "name",
            None
        ) != "Sam":

            fail(
                "Developer must correctly initialize name."
            )

            tests_ok = False

        elif getattr(
            developer,
            "salary",
            None
        ) != 40000:

            fail(
                "Developer must correctly initialize salary."
            )

            tests_ok = False

        elif getattr(
            developer,
            "language",
            None
        ) != "Python":

            fail(
                "Developer must store the language attribute."
            )

            tests_ok = False


    if tests_ok:

        describe = getattr(
            developer,
            "describe",
            None
        )

        if not callable(describe):

            fail(
                "Developer must provide describe()."
            )

            tests_ok = False

        elif describe() != "Sam earns 40000 and codes in Python":

            fail(
                "Developer.describe() returned an incorrect result.\\n"
                'Expected: "Sam earns 40000 and codes in Python"\\n'
                f"Obtained: {repr(describe())}"
            )

            tests_ok = False


    if tests_ok:

        employee2 = Employee(
            "Maya",
            52000
        )

        developer2 = Developer(
            "Luca",
            61000,
            "JavaScript"
        )


        if employee2.describe() != "Maya earns 52000":

            fail(
                "Employee.describe() does not work correctly with different values."
            )

            tests_ok = False

        elif developer2.describe() != "Luca earns 61000 and codes in JavaScript":

            fail(
                "Developer.describe() does not work correctly with different values."
            )

            tests_ok = False


    if tests_ok:

        parent_init_called = {
            "value": False
        }

        original_init = Employee.__init__


        def tracked_init(
            self,
            name,
            salary
        ):

            parent_init_called["value"] = True

            original_init(
                self,
                name,
                salary
            )


        Employee.__init__ = tracked_init


        try:

            Developer(
                "Test",
                1,
                "Python"
            )

        finally:

            Employee.__init__ = original_init


        if not parent_init_called["value"]:

            fail(
                "Developer should reuse Employee's initialization for name and salary."
            )

            tests_ok = False


    if tests_ok:

        success(
            "Developer correctly inherits from Employee"
        )

        success(
            "Employee attributes are initialized correctly"
        )

        success(
            "Developer reuses the parent initialization"
        )

        success(
            "Developer stores its own language attribute"
        )

        success(
            "describe() is overridden correctly"
        )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },




        /* =====================================================
       CHALLENGE 011
       Read Valid Integers From a File
    ===================================================== */

    11: {

        chapter: 6,

        number: "011",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Read Valid Integers From a File",


        description: `
            <p>
                Write a function
                <code>read_valid_integers(filename)</code>.
            </p>

            <p>
                The file contains one value per line.
            </p>

            <p>
                Your function must:
            </p>

            <ul>
                <li>
                    open the file in text mode using UTF-8;
                </li>

                <li>
                    process the file line by line;
                </li>

                <li>
                    remove surrounding whitespace from each line;
                </li>

                <li>
                    attempt to convert each line to an integer;
                </li>

                <li>
                    ignore lines that cannot be converted;
                </li>

                <li>
                    return a list containing only valid integers;
                </li>

                <li>
                    return an empty list if the file does not exist;
                </li>

                <li>
                    not modify the file.
                </li>
            </ul>

            <p>
                Example file:
            </p>

            <pre>10
Python
25
3.5
-7</pre>

            <p>
                Then:
            </p>

            <pre>read_valid_integers("numbers.txt")
→ [10, 25, -7]</pre>

            <p>
                For this challenge, you only need to handle
                <code>FileNotFoundError</code> and
                <code>ValueError</code>.
            </p>

            <p>
                Other file-system errors are outside the
                required behavior.
            </p>
        `,


        starterCode:
`def read_valid_integers(filename):
    pass


# Example file used when you press Run
with open(
    "__example_numbers.txt",
    "w",
    encoding="utf-8"
) as file:
    file.write(
        "10\\nPython\\n25\\n3.5\\n-7\\n"
    )


print(
    read_valid_integers(
        "__example_numbers.txt"
    )
)`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "read_valid_integers"
    )


    if not callable(function):

        fail(
            "You must define a function called read_valid_integers()."
        )


    else:

        success(
            "Function read_valid_integers() found"
        )


        import os


        test_files = [

            (
                "__challenge_011_a.txt",
                "1\\n2\\n3\\n",
                [1, 2, 3]
            ),

            (
                "__challenge_011_b.txt",
                "10\\nPython\\n-2\\n4.5\\n",
                [10, -2]
            ),

            (
                "__challenge_011_c.txt",
                "   7   \\n\\n+5\\n0\\ncaffè\\n003\\n",
                [7, 5, 0, 3]
            ),

            (
                "__challenge_011_d.txt",
                "-10\\n  20\\nhello\\n30   \\n",
                [-10, 20, 30]
            ),

            (
                "__challenge_011_e.txt",
                "",
                []
            ),

            (
                "__challenge_011_f.txt",
                "42",
                [42]
            ),

            (
                "__challenge_011_g.txt",
                "1 2\\n3.0\\n-0\\n+12\\n",
                [0, 12]
            )

        ]


        missing_file = (
            "__challenge_011_missing.txt"
        )


        tests_ok = True


        try:

            # Make sure the missing-file test really starts
            # with a file that does not exist.
            if os.path.exists(
                missing_file
            ):

                os.remove(
                    missing_file
                )


            for (
                filename,
                content,
                expected
            ) in test_files:


                # Create the temporary test file.
                with open(
                    filename,
                    "w",
                    encoding="utf-8"
                ) as test_file:

                    test_file.write(
                        content
                    )


                # Save its exact original content.
                with open(
                    filename,
                    "r",
                    encoding="utf-8"
                ) as test_file:

                    original_content = (
                        test_file.read()
                    )


                # Run the user's function.
                obtained = function(
                    filename
                )


                # The function must return a list.
                if not isinstance(
                    obtained,
                    list
                ):

                    fail(
                        "The function must return a list.\\n"
                        f"Returned type: {type(obtained).__name__}"
                    )

                    tests_ok = False

                    break


                # Every returned value must actually be an int.
                if any(
                    type(item) is not int
                    for item in obtained
                ):

                    fail(
                        "The returned list must contain only integers.\\n"
                        f"Obtained: {obtained}"
                    )

                    tests_ok = False

                    break


                # Check the returned values and their order.
                if obtained != expected:

                    fail(
                        f"File content: {repr(content)}\\n"
                        f"Expected: {expected}\\n"
                        f"Obtained: {obtained}"
                    )

                    tests_ok = False

                    break


                # The original file must still exist.
                if not os.path.exists(
                    filename
                ):

                    fail(
                        "The function must not delete the original file."
                    )

                    tests_ok = False

                    break


                # Read the file again after the function call.
                with open(
                    filename,
                    "r",
                    encoding="utf-8"
                ) as test_file:

                    content_after = (
                        test_file.read()
                    )


                # Its content must be exactly unchanged.
                if (
                    content_after
                    != original_content
                ):

                    fail(
                        "The original file must not be modified.\\n"
                        f"Before: {repr(original_content)}\\n"
                        f"After: {repr(content_after)}"
                    )

                    tests_ok = False

                    break


            # Missing-file behavior.
            if tests_ok:

                obtained = function(
                    missing_file
                )


                if not isinstance(
                    obtained,
                    list
                ):

                    fail(
                        "A missing file must return an empty list."
                    )

                    tests_ok = False


                elif obtained != []:

                    fail(
                        "A missing file must return an empty list.\\n"
                        f"Obtained: {obtained}"
                    )

                    tests_ok = False


                elif os.path.exists(
                    missing_file
                ):

                    fail(
                        "The function must not create a file when the requested file does not exist."
                    )

                    tests_ok = False


        finally:

            # Remove every temporary file created
            # by the checker.
            for (
                filename,
                _,
                _
            ) in test_files:

                if os.path.exists(
                    filename
                ):

                    os.remove(
                        filename
                    )


            if os.path.exists(
                missing_file
            ):

                os.remove(
                    missing_file
                )


        if tests_ok:

            success(
                "Valid integer lines are converted correctly"
            )

            success(
                "Invalid lines are ignored correctly"
            )

            success(
                "Negative, signed and zero values are handled correctly"
            )

            success(
                "Surrounding whitespace is handled correctly"
            )

            success(
                "Empty files are handled correctly"
            )

            success(
                "Missing files return an empty list"
            )

            success(
                "The original file remains unchanged"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },


 



    /* =====================================================
       CHALLENGE 012
       Parse Valid Numbers
    ===================================================== */

    12: {

        chapter: 6,

        number: "012",

        difficulty: "Easy",

        layout: "standard",

        title:
            "Parse Valid Numbers",


        description: `
            <p>
                Write a function
                <code>parse_numbers(values)</code>.
            </p>

            <p>
                The function receives a list of strings.
            </p>

            <p>
                Try to convert every item to an integer.
            </p>

            <p>
                If a value cannot be converted, ignore it
                instead of stopping the program.
            </p>

            <p>
                Return a <strong>new list</strong> containing
                only successfully converted integers.
            </p>

            <p>
                The original list must not be modified.
            </p>

            <p>
                Example:
            </p>

            <pre>parse_numbers([
    "10",
    "Python",
    "25",
    "3.5",
    "-7"
])

→ [10, 25, -7]</pre>

            <p>
                A string such as <code>"3.5"</code> is not
                a valid integer for <code>int(...)</code>
                and must therefore be ignored.
            </p>

            <p>
                Different implementations are valid as long
                as the required behavior is respected.
            </p>
        `,


        starterCode:
`def parse_numbers(values):
    pass


print(parse_numbers([
    "10",
    "Python",
    "25",
    "3.5",
    "-7"
]))`,


        checker:
`
namespace = {}

try:

    exec(
        user_code,
        namespace
    )

    function = namespace.get(
        "parse_numbers"
    )


    if not callable(function):

        fail(
            "You must define a function called parse_numbers()."
        )


    else:

        success(
            "Function parse_numbers() found"
        )


        tests = [

            (
                [],
                []
            ),

            (
                ["1", "2", "3"],
                [1, 2, 3]
            ),

            (
                ["Python"],
                []
            ),

            (
                ["10", "x", "-2"],
                [10, -2]
            ),

            (
                ["3.5", "5"],
                [5]
            ),

            (
                [
                    "10",
                    "Python",
                    "25",
                    "3.5",
                    "-7"
                ],
                [10, 25, -7]
            ),

            (
                [
                    "   8   ",
                    "+4",
                    "003",
                    "",
                    "   ",
                    "-0"
                ],
                [8, 4, 3, 0]
            ),

            (
                [
                    "-10",
                    "0",
                    "hello",
                    "42"
                ],
                [-10, 0, 42]
            )

        ]


        tests_ok = True


        for value, expected in tests:

            original_input = (
                value.copy()
            )


            obtained = function(
                value
            )


            if not isinstance(
                obtained,
                list
            ):

                fail(
                    "The function must return a list.\\\\n"
                    f"Returned type: {type(obtained).__name__}"
                )

                tests_ok = False

                break


            if obtained != expected:

                fail(
                    f"Input: {original_input}\\\\n"
                    f"Expected: {expected}\\\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            if value != original_input:

                fail(
                    "The original input list must not be modified.\\\\n"
                    f"Before: {original_input}\\\\n"
                    f"After: {value}"
                )

                tests_ok = False

                break


        if tests_ok:

            success(
                "Valid integers are converted correctly"
            )

            success(
                "Invalid values are ignored correctly"
            )

            success(
                "Negative and signed integers are handled correctly"
            )

            success(
                "Surrounding whitespace is handled correctly"
            )

            success(
                "The original list is not modified"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    }


};