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

    },


        /* =====================================================
       CHALLENGE 013
       Copy Nested Records Independently
    ===================================================== */

    13: {

        chapter: 7,

        number: "013",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Copy Nested Records Independently",


        description: `
            <p>
                Write a function
                <code>copy_records(records)</code>.
            </p>

            <p>
                The function receives a list of dictionaries.
            </p>

            <p>
                Every dictionary represents a record and
                contains a <code>"skills"</code> key whose
                value is a list.
            </p>

            <p>
                Return a new structure where:
            </p>

            <ul>
                <li>
                    the outer list is a new object;
                </li>

                <li>
                    every record dictionary is a new object;
                </li>

                <li>
                    every <code>"skills"</code> list is a
                    new object;
                </li>

                <li>
                    the values remain equal to the original
                    structure;
                </li>

                <li>
                    modifying the returned records or skills
                    must not modify the original data.
                </li>
            </ul>

            <p>
                Example:
            </p>

            <pre>records = [
    {
        "name": "Alex",
        "skills": ["Python", "SQL"]
    },
    {
        "name": "Sam",
        "skills": ["Java"]
    }
]

copied = copy_records(records)

copied[0]["skills"].append("Git")</pre>

            <p>
                After the modification,
                <code>copied[0]["skills"]</code> should be:
            </p>

            <pre>["Python", "SQL", "Git"]</pre>

            <p>
                while:
            </p>

            <pre>records[0]["skills"]</pre>

            <p>
                must still be:
            </p>

            <pre>["Python", "SQL"]</pre>

            <p>
                You may assume:
            </p>

            <ul>
                <li>
                    <code>records</code> is a list;
                </li>

                <li>
                    every direct element is a dictionary;
                </li>

                <li>
                    every dictionary contains a
                    <code>"skills"</code> list;
                </li>

                <li>
                    all other dictionary values are
                    immutable;
                </li>

                <li>
                    no deeper mutable structures need to be
                    copied.
                </li>
            </ul>

            <p>
                <strong>Important:</strong>
                do not use <code>copy.deepcopy()</code>.
            </p>

            <p>
                The goal is to decide which levels of the
                structure actually need to be copied.
            </p>
        `,


        starterCode:
`def copy_records(records):
    pass


records = [
    {
        "name": "Alex",
        "skills": ["Python", "SQL"]
    },
    {
        "name": "Sam",
        "skills": ["Java"]
    }
]

print(
    copy_records(records)
)`,


        checker:
`
namespace = {}

try:

    import ast
    import copy


    tests_ok = True


    # -------------------------------------------------
    # DEEPCOPY IS NOT ALLOWED
    # -------------------------------------------------

    tree = ast.parse(
        user_code
    )


    uses_deepcopy = False


    for node in ast.walk(
        tree
    ):

        if isinstance(
            node,
            ast.ImportFrom
        ):

            if node.module == "copy":

                for alias in node.names:

                    if alias.name == "deepcopy":

                        uses_deepcopy = True


        if isinstance(
            node,
            ast.Call
        ):

            if isinstance(
                node.func,
                ast.Attribute
            ):

                if (
                    node.func.attr
                    == "deepcopy"
                ):

                    uses_deepcopy = True


            elif isinstance(
                node.func,
                ast.Name
            ):

                if (
                    node.func.id
                    == "deepcopy"
                ):

                    uses_deepcopy = True


    if uses_deepcopy:

        fail(
            "Do not use copy.deepcopy() for this challenge. "
            "Copy only the levels that need to become independent."
        )

        tests_ok = False


    # -------------------------------------------------
    # LOAD USER FUNCTION
    # -------------------------------------------------

    if tests_ok:

        exec(
            user_code,
            namespace
        )


        function = namespace.get(
            "copy_records"
        )


        if not callable(
            function
        ):

            fail(
                "You must define a function called copy_records()."
            )

            tests_ok = False


        else:

            success(
                "Function copy_records() found"
            )


    # -------------------------------------------------
    # TEST CASES
    # -------------------------------------------------

    tests = [

        [
            {
                "name": "Alex",
                "skills": [
                    "Python",
                    "SQL"
                ],
                "active": True
            },
            {
                "name": "Sam",
                "skills": [
                    "Java"
                ],
                "active": False
            }
        ],

        [],

        [
            {
                "name": "Taylor",
                "skills": [],
                "level": 1
            }
        ],

        [
            {
                "name": "A",
                "skills": [
                    "Python"
                ]
            },
            {
                "name": "A",
                "skills": [
                    "Python"
                ]
            }
        ],

        [
            {
                "name": "One",
                "skills": [
                    "A",
                    "B"
                ],
                "score": 10
            },
            {
                "name": "Two",
                "skills": [
                    "C"
                ],
                "score": 20
            },
            {
                "name": "Three",
                "skills": [
                    "D",
                    "E",
                    "F"
                ],
                "score": 30
            }
        ]

    ]


    if tests_ok:

        for records in tests:


            original_snapshot = (
                copy.deepcopy(
                    records
                )
            )


            original_record_refs = list(
                records
            )


            original_skill_refs = [
                record["skills"]
                for record in records
            ]


            obtained = function(
                records
            )


            # -----------------------------------------
            # RETURN TYPE
            # -----------------------------------------

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


            # -----------------------------------------
            # OUTER LIST INDEPENDENCE
            # -----------------------------------------

            if obtained is records:

                fail(
                    "The returned outer list must be a new object."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # INITIAL VALUE EQUALITY
            # -----------------------------------------

            if obtained != original_snapshot:

                fail(
                    "The copied structure must initially contain "
                    "the same values as the original.\\n"
                    f"Expected: {original_snapshot}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            # -----------------------------------------
            # INPUT MUST REMAIN UNCHANGED
            # -----------------------------------------

            if records != original_snapshot:

                fail(
                    "The original structure was modified."
                )

                tests_ok = False

                break


            if len(
                obtained
            ) != len(
                records
            ):

                fail(
                    "The returned list must contain the same number of records."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # ORIGINAL OBJECTS MUST NOT BE REPLACED
            # -----------------------------------------

            for index in range(
                len(records)
            ):

                if (
                    records[index]
                    is not
                    original_record_refs[index]
                ):

                    fail(
                        "The function must not replace record objects "
                        "inside the original list."
                    )

                    tests_ok = False

                    break


                if (
                    records[index]["skills"]
                    is not
                    original_skill_refs[index]
                ):

                    fail(
                        "The function must not replace the original "
                        "skills lists."
                    )

                    tests_ok = False

                    break


            if not tests_ok:

                break


            # -----------------------------------------
            # DICTIONARY + SKILLS INDEPENDENCE
            # -----------------------------------------

            for index in range(
                len(records)
            ):

                if not isinstance(
                    obtained[index],
                    dict
                ):

                    fail(
                        "Every returned record must be a dictionary."
                    )

                    tests_ok = False

                    break


                if (
                    obtained[index]
                    is records[index]
                ):

                    fail(
                        "Every record dictionary must be a new object.\\n"
                        f"Shared dictionary found at index {index}."
                    )

                    tests_ok = False

                    break


                if not isinstance(
                    obtained[index]["skills"],
                    list
                ):

                    fail(
                        'Every "skills" value must remain a list.'
                    )

                    tests_ok = False

                    break


                if (
                    obtained[index]["skills"]
                    is
                    records[index]["skills"]
                ):

                    fail(
                        'Every "skills" list must be an independent object.\\n'
                        f"Shared skills list found at index {index}."
                    )

                    tests_ok = False

                    break


            if not tests_ok:

                break


            # -----------------------------------------
            # RETURNED RECORDS MUST NOT SHARE COPIES
            # WITH EACH OTHER
            # -----------------------------------------

            record_ids = [
                id(record)
                for record in obtained
            ]


            if (
                len(record_ids)
                != len(set(record_ids))
            ):

                fail(
                    "Each returned record must be a separate dictionary object."
                )

                tests_ok = False

                break


            skill_ids = [
                id(record["skills"])
                for record in obtained
            ]


            if (
                len(skill_ids)
                != len(set(skill_ids))
            ):

                fail(
                    "Each returned skills list must be a separate list object."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # ACTUAL MUTATION TEST
            # -----------------------------------------

            if obtained:

                obtained[0][
                    "name"
                ] = "__changed_name__"


                obtained[0][
                    "skills"
                ].append(
                    "__new_skill__"
                )


                if (
                    records
                    != original_snapshot
                ):

                    fail(
                        "Changing the copied structure must not "
                        "modify the original structure."
                    )

                    tests_ok = False

                    break


    if tests_ok:

        success(
            "The outer list is independent"
        )

        success(
            "Every record dictionary is independent"
        )

        success(
            "Every skills list is independent"
        )

        success(
            "The copied values are initially equal to the original"
        )

        success(
            "Mutating the copy does not affect the original"
        )

        success(
            "The original structure remains unchanged"
        )

        success(
            "Only the required levels are copied without deepcopy()"
        )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },



    /* =====================================================
       CHALLENGE 014
       Count Repeated Paths
    ===================================================== */

    14: {

        chapter: 7,

        number: "014",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Count Repeated Paths",


        description: `
            <p>
                Write a function
                <code>count_paths(paths)</code>.
            </p>

            <p>
                The function receives a list of paths.
            </p>

            <p>
                Each path is represented by a list of
                strings.
            </p>

            <p>
                Count how many times each distinct path
                appears.
            </p>

            <p>
                Return a dictionary where:
            </p>

            <ul>
                <li>
                    each key is the path represented as a
                    tuple;
                </li>

                <li>
                    each value is the number of times that
                    path appeared.
                </li>
            </ul>

            <p>
                Example:
            </p>

            <pre>paths = [
    ["api", "users"],
    ["api", "posts"],
    ["api", "users"],
    ["admin", "users"]
]</pre>

            <p>
                Then:
            </p>

            <pre>count_paths(paths)

→ {
    ("api", "users"): 2,
    ("api", "posts"): 1,
    ("admin", "users"): 1
}</pre>

            <p>
                The original list and its inner path lists
                must remain unchanged.
            </p>

            <p>
                For this challenge, you may assume:
            </p>

            <ul>
                <li>
                    <code>paths</code> is a list;
                </li>

                <li>
                    every direct element is a list;
                </li>

                <li>
                    every path contains only strings;
                </li>

                <li>
                    input validation is not required.
                </li>
            </ul>

            <p>
                Remember that dictionary keys must be
                hashable.
            </p>
        `,


        starterCode:
`def count_paths(paths):
    pass


paths = [
    ["api", "users"],
    ["api", "posts"],
    ["api", "users"],
    ["admin", "users"]
]

print(
    count_paths(paths)
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
        "count_paths"
    )


    if not callable(
        function
    ):

        fail(
            "You must define a function called count_paths()."
        )


    else:

        success(
            "Function count_paths() found"
        )


        tests_ok = True


        tests = [

            (
                [
                    ["api", "users"],
                    ["api", "posts"],
                    ["api", "users"],
                    ["admin", "users"]
                ],
                {
                    (
                        "api",
                        "users"
                    ): 2,

                    (
                        "api",
                        "posts"
                    ): 1,

                    (
                        "admin",
                        "users"
                    ): 1
                }
            ),

            (
                [],
                {}
            ),

            (
                [
                    ["python"],
                    ["python"],
                    ["java"],
                    ["python"]
                ],
                {
                    (
                        "python",
                    ): 3,

                    (
                        "java",
                    ): 1
                }
            ),

            (
                [
                    [],
                    ["api"],
                    [],
                    ["api", "users"],
                    ["api"]
                ],
                {
                    (): 2,

                    (
                        "api",
                    ): 2,

                    (
                        "api",
                        "users"
                    ): 1
                }
            ),

            (
                [
                    ["a", "b", "c"],
                    ["a", "b"],
                    ["a", "b", "c"],
                    ["a"],
                    ["a", "b"]
                ],
                {
                    (
                        "a",
                        "b",
                        "c"
                    ): 2,

                    (
                        "a",
                        "b"
                    ): 2,

                    (
                        "a",
                    ): 1
                }
            ),

            (
                [
                    ["caffè", "utenti"],
                    ["caffè", "utenti"],
                    ["東京"]
                ],
                {
                    (
                        "caffè",
                        "utenti"
                    ): 2,

                    (
                        "東京",
                    ): 1
                }
            )

        ]


        for (
            paths,
            expected
        ) in tests:


            original_values = [
                path.copy()
                for path in paths
            ]


            original_refs = list(
                paths
            )


            obtained = function(
                paths
            )


            # -----------------------------------------
            # RETURN TYPE
            # -----------------------------------------

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


            # -----------------------------------------
            # RESULT
            # -----------------------------------------

            if obtained != expected:

                fail(
                    f"Input: {original_values}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            # -----------------------------------------
            # KEYS MUST BE TUPLES
            # -----------------------------------------

            if any(
                type(key) is not tuple
                for key in obtained
            ):

                fail(
                    "Every dictionary key must be a tuple representing a path."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # COUNTS MUST BE INTEGERS
            # -----------------------------------------

            if any(
                type(count) is not int
                for count in obtained.values()
            ):

                fail(
                    "Every path count must be an integer."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # ORIGINAL VALUES MUST REMAIN UNCHANGED
            # -----------------------------------------

            if paths != original_values:

                fail(
                    "The original paths must not be modified.\\n"
                    f"Before: {original_values}\\n"
                    f"After: {paths}"
                )

                tests_ok = False

                break


            # -----------------------------------------
            # ORIGINAL INNER LISTS MUST NOT BE REPLACED
            # -----------------------------------------

            if len(
                paths
            ) != len(
                original_refs
            ):

                fail(
                    "The original paths list must not be modified."
                )

                tests_ok = False

                break


            for index in range(
                len(paths)
            ):

                if (
                    paths[index]
                    is not
                    original_refs[index]
                ):

                    fail(
                        "The function must not replace the original inner path lists."
                    )

                    tests_ok = False

                    break


            if not tests_ok:

                break


        if tests_ok:

            success(
                "Repeated paths are counted correctly"
            )

            success(
                "Distinct paths remain separate"
            )

            success(
                "Dictionary keys are tuples"
            )

            success(
                "Empty and single-element paths are handled correctly"
            )

            success(
                "The original input remains unchanged"
            )

            success(
                "The solution uses hashable path representations correctly"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },






        /* =====================================================
       CHALLENGE 015
       Chunk an Iterable Lazily
    ===================================================== */

    15: {

        chapter: 8,

        number: "015",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Chunk an Iterable Lazily",


        description: `
            <p>
                Write a function
                <code>lazy_chunks(values, size)</code>.
            </p>

            <p>
                The function receives an
                <strong>iterable</strong> and must lazily
                produce lists containing at most
                <code>size</code> elements each.
            </p>

            <p>
                The original order of the values must be
                preserved.
            </p>

            <p>
                Every complete chunk should contain exactly
                <code>size</code> elements.
            </p>

            <p>
                The final chunk may contain fewer elements
                if the iterable is exhausted.
            </p>

            <p>
                Example:
            </p>

            <pre>list(
    lazy_chunks(
        [1, 2, 3, 4, 5],
        2
    )
)

→ [
    [1, 2],
    [3, 4],
    [5]
]</pre>

            <p>
                Another example:
            </p>

            <pre>list(
    lazy_chunks(
        ["a", "b", "c", "d"],
        3
    )
)

→ [
    ["a", "b", "c"],
    ["d"]
]</pre>

            <p>
                For this challenge, you may assume:
            </p>

            <ul>
                <li>
                    <code>size</code> is an integer greater
                    than <code>0</code>;
                </li>

                <li>
                    <code>values</code> can be any iterable;
                </li>

                <li>
                    input validation is not required.
                </li>
            </ul>

            <p>
                <strong>Important:</strong>
                the function must be a generator function.
            </p>

            <p>
                It must process the input lazily.
                It must not convert the complete iterable
                into a list before producing the first
                chunk.
            </p>

            <p>
                When one chunk is requested, the function
                should consume only the values needed to
                build that chunk.
            </p>

            <p>
                Each produced chunk must be a new list.
            </p>
        `,


        starterCode:
`def lazy_chunks(values, size):
    pass


result = lazy_chunks(
    [1, 2, 3, 4, 5],
    2
)

print(
    list(result)
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
        "lazy_chunks"
    )


    if not callable(function):

        fail(
            "You must define a function called lazy_chunks()."
        )


    else:

        success(
            "Function lazy_chunks() found"
        )


        import inspect
        import types


        tests_ok = True


        # -------------------------------------------------
        # GENERATOR FUNCTION REQUIREMENT
        # -------------------------------------------------

        if not inspect.isgeneratorfunction(
            function
        ):

            fail(
                "lazy_chunks() must be a generator function."
            )

            tests_ok = False


        # -------------------------------------------------
        # STANDARD VALUE TESTS
        # -------------------------------------------------

        tests = [

            (
                [],
                3,
                []
            ),

            (
                [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                2,
                [
                    [1, 2],
                    [3, 4],
                    [5]
                ]
            ),

            (
                (
                    "a",
                    "b",
                    "c",
                    "d"
                ),
                3,
                [
                    ["a", "b", "c"],
                    ["d"]
                ]
            ),

            (
                [
                    10,
                    20,
                    30
                ],
                1,
                [
                    [10],
                    [20],
                    [30]
                ]
            ),

            (
                [
                    1,
                    2,
                    3,
                    4
                ],
                4,
                [
                    [1, 2, 3, 4]
                ]
            ),

            (
                [
                    1,
                    2,
                    3
                ],
                10,
                [
                    [1, 2, 3]
                ]
            )

        ]


        if tests_ok:

            for (
                values,
                size,
                expected
            ) in tests:


                result = function(
                    values,
                    size
                )


                if not isinstance(
                    result,
                    types.GeneratorType
                ):

                    fail(
                        "Each call to lazy_chunks() must return a generator object."
                    )

                    tests_ok = False

                    break


                obtained = list(
                    result
                )


                if obtained != expected:

                    fail(
                        f"Input: {values}\\n"
                        f"Chunk size: {size}\\n"
                        f"Expected: {expected}\\n"
                        f"Obtained: {obtained}"
                    )

                    tests_ok = False

                    break


                if any(
                    not isinstance(
                        chunk,
                        list
                    )
                    for chunk in obtained
                ):

                    fail(
                        "Every produced chunk must be a list."
                    )

                    tests_ok = False

                    break


                chunk_ids = [
                    id(chunk)
                    for chunk in obtained
                ]


                if (
                    len(chunk_ids)
                    != len(set(chunk_ids))
                ):

                    fail(
                        "Each produced chunk must be a separate list object."
                    )

                    tests_ok = False

                    break


        # -------------------------------------------------
        # ITERATOR INPUT TEST
        # -------------------------------------------------
        #
        # values is not guaranteed to be a list.
        # Solutions that depend on indexing or slicing
        # should not work for every valid input.

        if tests_ok:

            source = iter(
                [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ]
            )


            result = function(
                source,
                4
            )


            obtained = list(
                result
            )


            expected = [
                [1, 2, 3, 4],
                [5, 6]
            ]


            if obtained != expected:

                fail(
                    "The function must work with iterators, not only lists.\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False


        # -------------------------------------------------
        # GENERATOR-EXPRESSION INPUT TEST
        # -------------------------------------------------

        if tests_ok:

            source = (
                number * number
                for number in range(5)
            )


            obtained = list(
                function(
                    source,
                    2
                )
            )


            expected = [
                [0, 1],
                [4, 9],
                [16]
            ]


            if obtained != expected:

                fail(
                    "The function must accept any iterable, including generators.\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False


        # -------------------------------------------------
        # LAZINESS TEST
        # -------------------------------------------------

        if tests_ok:

            class TrackingIterable:

                def __init__(
                    self,
                    values
                ):

                    self.values = values

                    self.consumed = 0


                def __iter__(
                    self
                ):

                    for value in self.values:

                        self.consumed += 1

                        yield value


            source = TrackingIterable(
                [
                    10,
                    20,
                    30,
                    40,
                    50,
                    60,
                    70,
                    80
                ]
            )


            result = function(
                source,
                3
            )


            # Creating the generator must not consume input.
            if source.consumed != 0:

                fail(
                    "The input iterable was consumed before iteration began."
                )

                tests_ok = False


            else:

                first_chunk = next(
                    result
                )


                if first_chunk != [
                    10,
                    20,
                    30
                ]:

                    fail(
                        "The first chunk is incorrect.\\n"
                        "Expected: [10, 20, 30]\\n"
                        f"Obtained: {first_chunk}"
                    )

                    tests_ok = False


                elif source.consumed != 3:

                    fail(
                        "The function consumed values that belong to later chunks.\\n"
                        "After requesting the first chunk of size 3, "
                        "exactly 3 input values should have been consumed.\\n"
                        f"Consumed: {source.consumed}"
                    )

                    tests_ok = False


                else:

                    second_chunk = next(
                        result
                    )


                    if second_chunk != [
                        40,
                        50,
                        60
                    ]:

                        fail(
                            "The second chunk is incorrect.\\n"
                            "Expected: [40, 50, 60]\\n"
                            f"Obtained: {second_chunk}"
                        )

                        tests_ok = False


                    elif source.consumed != 6:

                        fail(
                            "The generator should consume only the values needed for each requested chunk.\\n"
                            f"Consumed after two chunks: {source.consumed}"
                        )

                        tests_ok = False


        # -------------------------------------------------
        # FINAL PARTIAL CHUNK + EXHAUSTION
        # -------------------------------------------------

        if tests_ok:

            generator = function(
                [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                2
            )


            first = next(
                generator
            )

            second = next(
                generator
            )

            third = next(
                generator
            )


            if first != [1, 2]:

                fail(
                    "The first chunk is incorrect."
                )

                tests_ok = False


            elif second != [3, 4]:

                fail(
                    "The second chunk is incorrect."
                )

                tests_ok = False


            elif third != [5]:

                fail(
                    "The final partial chunk is incorrect."
                )

                tests_ok = False


            else:

                sentinel = object()


                exhausted = next(
                    generator,
                    sentinel
                )


                if exhausted is not sentinel:

                    fail(
                        "The generator should be exhausted after the final chunk."
                    )

                    tests_ok = False


        if tests_ok:

            success(
                "The function is a real generator function"
            )

            success(
                "Values are grouped into chunks correctly"
            )

            success(
                "The original order is preserved"
            )

            success(
                "Final partial chunks are handled correctly"
            )

            success(
                "Lists, tuples, iterators and generators are supported"
            )

            success(
                "Each chunk is a separate list object"
            )

            success(
                "Input values are consumed lazily"
            )

            success(
                "Later chunks are not consumed before they are requested"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },






    /* =====================================================
       CHALLENGE 016
       Read Valid Integers Lazily
    ===================================================== */

    16: {

        chapter: 8,

        number: "016",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Read Valid Integers Lazily",


        description: `
            <p>
                Write a function
                <code>valid_integers(values)</code>.
            </p>

            <p>
                The function receives an
                <strong>iterable of strings</strong>.
            </p>

            <p>
                It must lazily produce only the values that
                can successfully be converted to integers.
            </p>

            <p>
                Invalid integer strings must be ignored.
            </p>

            <p>
                Example:
            </p>

            <pre>result = valid_integers([
    "10",
    "Python",
    "25",
    "3.5",
    "-4"
])

list(result)
→ [10, 25, -4]</pre>

            <p>
                You may assume that every input item is a
                string.
            </p>

            <p>
                Therefore the conversion failure you need to
                handle is <code>ValueError</code>.
            </p>

            <p>
                <strong>Important:</strong>
                the result must be produced lazily.
            </p>

            <p>
                The function must not first construct a
                complete list of converted values and only
                then return or iterate over that list.
            </p>
        `,


        starterCode:
`def valid_integers(values):
    pass


result = valid_integers([
    "10",
    "Python",
    "25",
    "3.5",
    "-4"
])

print(
    list(result)
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
        "valid_integers"
    )


    if not callable(function):

        fail(
            "You must define a function called valid_integers()."
        )


    else:

        success(
            "Function valid_integers() found"
        )


        import types


        tests_ok = True


        tests = [

            (
                [],
                []
            ),

            (
                [
                    "1",
                    "2",
                    "3"
                ],
                [
                    1,
                    2,
                    3
                ]
            ),

            (
                [
                    "Python"
                ],
                []
            ),

            (
                [
                    "10",
                    "x",
                    "-2"
                ],
                [
                    10,
                    -2
                ]
            ),

            (
                [
                    "3.5",
                    "5"
                ],
                [
                    5
                ]
            ),

            (
                [
                    "10",
                    "Python",
                    "25",
                    "3.5",
                    "-4"
                ],
                [
                    10,
                    25,
                    -4
                ]
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
                [
                    8,
                    4,
                    3,
                    0
                ]
            )

        ]


        for (
            values,
            expected
        ) in tests:


            result = function(
                values
            )


            if not isinstance(
                result,
                types.GeneratorType
            ):

                fail(
                    "valid_integers() must return a generator object."
                )

                tests_ok = False

                break


            obtained = list(
                result
            )


            if obtained != expected:

                fail(
                    f"Input: {values}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            if any(
                type(item) is not int
                for item in obtained
            ):

                fail(
                    "The generator must produce integers."
                )

                tests_ok = False

                break


        # -------------------------------------------------
        # LAZINESS TEST
        # -------------------------------------------------
        #
        # This custom iterable records how many source
        # elements have actually been requested.
        #
        # A correct lazy implementation should not consume
        # the entire source before the caller asks for all
        # output values.

        if tests_ok:

            class TrackingIterable:

                def __init__(
                    self,
                    values
                ):

                    self.values = values

                    self.consumed = 0


                def __iter__(
                    self
                ):

                    for value in self.values:

                        self.consumed += 1

                        yield value


            source = TrackingIterable(
                [
                    "10",
                    "20",
                    "Python",
                    "30",
                    "40"
                ]
            )


            result = function(
                source
            )


            if not isinstance(
                result,
                types.GeneratorType
            ):

                fail(
                    "valid_integers() must return a generator object."
                )

                tests_ok = False


            elif source.consumed != 0:

                fail(
                    "The input iterable was consumed before any value was requested. "
                    "The function must behave lazily."
                )

                tests_ok = False


            else:

                first_value = next(
                    result
                )


                if first_value != 10:

                    fail(
                        "The first produced integer is incorrect.\\n"
                        f"Expected: 10\\n"
                        f"Obtained: {first_value}"
                    )

                    tests_ok = False


                elif source.consumed >= 5:

                    fail(
                        "The entire input iterable was consumed before only the first output value was needed. "
                        "The function must process values lazily."
                    )

                    tests_ok = False


                else:

                    remaining = list(
                        result
                    )


                    if remaining != [
                        20,
                        30,
                        40
                    ]:

                        fail(
                            "The remaining lazy values were produced incorrectly.\\n"
                            "Expected: [20, 30, 40]\\n"
                            f"Obtained: {remaining}"
                        )

                        tests_ok = False


        # Test laziness when invalid values appear before
        # the first valid integer.
        if tests_ok:

            source = TrackingIterable(
                [
                    "invalid",
                    "still invalid",
                    "7",
                    "8",
                    "9"
                ]
            )


            result = function(
                source
            )


            first_value = next(
                result
            )


            if first_value != 7:

                fail(
                    "Invalid strings must be skipped until a valid integer is found."
                )

                tests_ok = False


            elif source.consumed >= 5:

                fail(
                    "The generator consumed the complete input unnecessarily."
                )

                tests_ok = False


        if tests_ok:

            success(
                "The function returns a generator"
            )

            success(
                "Valid strings are converted to integers correctly"
            )

            success(
                "Invalid integer strings are ignored correctly"
            )

            success(
                "Signed and whitespace-surrounded integers are handled correctly"
            )

            success(
                "Values are produced lazily"
            )

            success(
                "The complete input is not consumed before it is needed"
            )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },


        /* =====================================================
       CHALLENGE 017
       Build a Ranked Student Report
    ===================================================== */

    17: {

        chapter: 9,

        number: "017",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Build a Ranked Student Report",


        description: `
            <p>
                Write a function
                <code>ranked_report(names, scores)</code>.
            </p>

            <p>
                The function receives two sequences:
                <code>names</code> and <code>scores</code>.
            </p>

            <p>
                Each name corresponds to the score at the
                same position.
            </p>

            <p>
                Return a new list of strings ranking the
                students from the highest score to the
                lowest.
            </p>

            <p>
                Each line must use this format:
            </p>

            <pre>1. Sam: 95
2. Maya: 90
3. Alex: 80</pre>

            <p>
                Example:
            </p>

            <pre>ranked_report(
    [
        "Alex",
        "Sam",
        "Maya",
        "Leo"
    ],
    [
        80,
        95,
        90,
        70
    ]
)

→ [
    "1. Sam: 95",
    "2. Maya: 90",
    "3. Alex: 80",
    "4. Leo: 70"
]</pre>

            <p>
                Requirements:
            </p>

            <ul>
                <li>
                    use <code>zip()</code> to associate
                    names with scores;
                </li>

                <li>
                    use <code>sorted()</code> to create the
                    ranking;
                </li>

                <li>
                    use
                    <code>enumerate(..., start=1)</code>
                    to create the displayed positions;
                </li>

                <li>
                    sort from highest score to lowest score;
                </li>

                <li>
                    if two students have the same score,
                    preserve their original relative order;
                </li>

                <li>
                    do not modify either input sequence.
                </li>
            </ul>

            <p>
                You may assume:
            </p>

            <ul>
                <li>
                    <code>names</code> and
                    <code>scores</code> have the same
                    length;
                </li>

                <li>
                    all values are already valid;
                </li>

                <li>
                    input validation is not required.
                </li>
            </ul>

            <p>
                Different clear implementations are valid,
                as long as the required Python tools are
                used appropriately.
            </p>
        `,


        starterCode:
`def ranked_report(names, scores):
    pass


names = [
    "Alex",
    "Sam",
    "Maya",
    "Leo"
]

scores = [
    80,
    95,
    90,
    70
]

print(
    ranked_report(
        names,
        scores
    )
)`,


        checker:
`
namespace = {}

try:

    import ast


    tests_ok = True


    # -------------------------------------------------
    # FIND THE FUNCTION
    # -------------------------------------------------

    tree = ast.parse(
        user_code
    )


    function_node = None


    for node in tree.body:

        if (
            isinstance(
                node,
                ast.FunctionDef
            )
            and node.name
            == "ranked_report"
        ):

            function_node = node

            break


    if function_node is None:

        fail(
            "You must define a function called ranked_report()."
        )

        tests_ok = False


    # -------------------------------------------------
    # REQUIRED PYTHON TOOLS
    # -------------------------------------------------

    if tests_ok:

        uses_zip = False
        uses_sorted = False
        uses_enumerate = False
        enumerate_starts_at_one = False


        for node in ast.walk(
            function_node
        ):

            if not isinstance(
                node,
                ast.Call
            ):

                continue


            if isinstance(
                node.func,
                ast.Name
            ):

                if node.func.id == "zip":

                    uses_zip = True


                elif node.func.id == "sorted":

                    uses_sorted = True


                elif node.func.id == "enumerate":

                    uses_enumerate = True


                    # enumerate(values, 1)
                    if (
                        len(node.args) >= 2
                        and isinstance(
                            node.args[1],
                            ast.Constant
                        )
                        and node.args[1].value == 1
                    ):

                        enumerate_starts_at_one = True


                    # enumerate(values, start=1)
                    for keyword in node.keywords:

                        if (
                            keyword.arg == "start"
                            and isinstance(
                                keyword.value,
                                ast.Constant
                            )
                            and keyword.value.value == 1
                        ):

                            enumerate_starts_at_one = True


        if not uses_zip:

            fail(
                "Use zip() to associate each name with its corresponding score."
            )

            tests_ok = False


        elif not uses_sorted:

            fail(
                "Use sorted() to create the ranking."
            )

            tests_ok = False


        elif not uses_enumerate:

            fail(
                "Use enumerate() to create the ranking positions."
            )

            tests_ok = False


        elif not enumerate_starts_at_one:

            fail(
                "Use enumerate(..., start=1) so that ranking positions begin at 1."
            )

            tests_ok = False


    # -------------------------------------------------
    # LOAD USER FUNCTION
    # -------------------------------------------------

    if tests_ok:

        exec(
            user_code,
            namespace
        )


        function = namespace.get(
            "ranked_report"
        )


        if not callable(
            function
        ):

            fail(
                "ranked_report must be callable."
            )

            tests_ok = False


        else:

            success(
                "Function ranked_report() found"
            )


    # -------------------------------------------------
    # TEST CASES
    # -------------------------------------------------

    tests = [

        (
            [
                "Alex",
                "Sam",
                "Maya",
                "Leo"
            ],
            [
                80,
                95,
                90,
                70
            ],
            [
                "1. Sam: 95",
                "2. Maya: 90",
                "3. Alex: 80",
                "4. Leo: 70"
            ]
        ),

        (
            [],
            [],
            []
        ),

        (
            [
                "Alex"
            ],
            [
                100
            ],
            [
                "1. Alex: 100"
            ]
        ),

        (
            [
                "A",
                "B",
                "C"
            ],
            [
                90,
                90,
                80
            ],
            [
                "1. A: 90",
                "2. B: 90",
                "3. C: 80"
            ]
        ),

        (
            [
                "First",
                "Second",
                "Third",
                "Fourth"
            ],
            [
                70,
                100,
                70,
                100
            ],
            [
                "1. Second: 100",
                "2. Fourth: 100",
                "3. First: 70",
                "4. Third: 70"
            ]
        ),

        (
            (
                "Python",
                "Java",
                "SQL"
            ),
            (
                85,
                60,
                95
            ),
            [
                "1. SQL: 95",
                "2. Python: 85",
                "3. Java: 60"
            ]
        )

    ]


    if tests_ok:

        for (
            names,
            scores,
            expected
        ) in tests:


            names_before = list(
                names
            )

            scores_before = list(
                scores
            )


            obtained = function(
                names,
                scores
            )


            # -----------------------------------------
            # RETURN TYPE
            # -----------------------------------------

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


            # -----------------------------------------
            # EXACT RESULT
            # -----------------------------------------

            if obtained != expected:

                fail(
                    f"Names: {names_before}\\n"
                    f"Scores: {scores_before}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            if any(
                type(line) is not str
                for line in obtained
            ):

                fail(
                    "Every item in the returned report must be a string."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # ORIGINAL INPUTS MUST REMAIN UNCHANGED
            # -----------------------------------------

            if list(names) != names_before:

                fail(
                    "The names sequence must not be modified."
                )

                tests_ok = False

                break


            if list(scores) != scores_before:

                fail(
                    "The scores sequence must not be modified."
                )

                tests_ok = False

                break


    if tests_ok:

        success(
            "zip() is used to associate names and scores"
        )

        success(
            "sorted() is used to create the ranking"
        )

        success(
            "enumerate(..., start=1) is used correctly"
        )

        success(
            "Students are ordered from highest to lowest score"
        )

        success(
            "Equal scores preserve the original relative order"
        )

        success(
            "The report format is correct"
        )

        success(
            "The original input sequences remain unchanged"
        )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },



        /* =====================================================
       CHALLENGE 018
       Analyze Student Performance
    ===================================================== */

    18: {

        chapter: 9,

        number: "018",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Analyze Student Performance",


        description: `
            <p>
                Write a function
                <code>analyze_students(students)</code>.
            </p>

            <p>
                The function receives a list of student
                dictionaries.
            </p>

            <p>
                Each student has:
            </p>

            <ul>
                <li>
                    a <code>"name"</code>;
                </li>

                <li>
                    a non-empty list of
                    <code>"scores"</code>.
                </li>
            </ul>

            <p>
                Example input:
            </p>

            <pre>[
    {
        "name": "Alex",
        "scores": [80, 70, 90]
    },
    {
        "name": "Sam",
        "scores": [100, 95, 90]
    },
    {
        "name": "Maya",
        "scores": [60, 65, 70]
    }
]</pre>

            <p>
                Return a dictionary containing:
            </p>

            <ul>
                <li>
                    <code>"top_student"</code>:
                    the name of the student with the highest
                    average;
                </li>

                <li>
                    <code>"class_average"</code>:
                    the average of the students'
                    individual averages;
                </li>

                <li>
                    <code>"all_passed"</code>:
                    whether every student has every score
                    greater than or equal to <code>60</code>;
                </li>

                <li>
                    <code>"any_perfect"</code>:
                    whether at least one score anywhere in
                    the class is exactly <code>100</code>;
                </li>

                <li>
                    <code>"ranking"</code>:
                    a list of student names ordered by
                    average from highest to lowest.
                </li>
            </ul>

            <p>
                For the example above, the result is:
            </p>

            <pre>{
    "top_student": "Sam",
    "class_average": 80.0,
    "all_passed": True,
    "any_perfect": True,
    "ranking": [
        "Sam",
        "Alex",
        "Maya"
    ]
}</pre>

            <p>
                Important details:
            </p>

            <ul>
                <li>
                    calculate each student's average from
                    their own scores;
                </li>

                <li>
                    <code>class_average</code> is the
                    average of those student averages,
                    not necessarily the average of every
                    individual score combined;
                </li>

                <li>
                    if students have equal averages,
                    preserve their original relative order;
                </li>

                <li>
                    the original input structure must not
                    be modified.
                </li>
            </ul>

            <p>
                Use the appropriate Python built-ins:
                <code>sum()</code>,
                <code>all()</code>,
                <code>any()</code> and
                <code>sorted()</code>.
            </p>

            <p>
                Avoid unnecessarily calculating the same
                student's average multiple times.
            </p>

            <p>
                You may assume:
            </p>

            <ul>
                <li>
                    there is at least one student;
                </li>

                <li>
                    every student has at least one score;
                </li>

                <li>
                    all names and scores are already valid;
                </li>

                <li>
                    input validation is not required.
                </li>
            </ul>
        `,


        starterCode:
`def analyze_students(students):
    pass


students = [
    {
        "name": "Alex",
        "scores": [80, 70, 90]
    },
    {
        "name": "Sam",
        "scores": [100, 95, 90]
    },
    {
        "name": "Maya",
        "scores": [60, 65, 70]
    }
]

print(
    analyze_students(students)
)`,


        checker:
`
namespace = {}

try:

    import ast
    import copy


    tests_ok = True


    # -------------------------------------------------
    # FIND FUNCTION
    # -------------------------------------------------

    tree = ast.parse(
        user_code
    )


    function_node = None


    for node in tree.body:

        if (
            isinstance(
                node,
                ast.FunctionDef
            )
            and node.name
            == "analyze_students"
        ):

            function_node = node

            break


    if function_node is None:

        fail(
            "You must define a function called analyze_students()."
        )

        tests_ok = False


    # -------------------------------------------------
    # REQUIRED BUILT-INS
    # -------------------------------------------------

    if tests_ok:

        required_calls = {
            "sum": False,
            "all": False,
            "any": False,
            "sorted": False
        }


        for node in ast.walk(
            function_node
        ):

            if (
                isinstance(
                    node,
                    ast.Call
                )
                and isinstance(
                    node.func,
                    ast.Name
                )
                and node.func.id
                in required_calls
            ):

                required_calls[
                    node.func.id
                ] = True


        missing = [
            name
            for name, used
            in required_calls.items()
            if not used
        ]


        if missing:

            fail(
                "Use the appropriate required Python built-ins.\\n"
                "Missing: "
                + ", ".join(
                    missing
                )
            )

            tests_ok = False


    # -------------------------------------------------
    # LOAD USER FUNCTION
    # -------------------------------------------------

    if tests_ok:

        exec(
            user_code,
            namespace
        )


        function = namespace.get(
            "analyze_students"
        )


        if not callable(
            function
        ):

            fail(
                "analyze_students must be callable."
            )

            tests_ok = False


        else:

            success(
                "Function analyze_students() found"
            )


    # -------------------------------------------------
    # TEST CASES
    # -------------------------------------------------

    tests = [

        (
            [
                {
                    "name": "Alex",
                    "scores": [
                        80,
                        70,
                        90
                    ]
                },
                {
                    "name": "Sam",
                    "scores": [
                        100,
                        95,
                        90
                    ]
                },
                {
                    "name": "Maya",
                    "scores": [
                        60,
                        65,
                        70
                    ]
                }
            ],
            {
                "top_student": "Sam",
                "class_average": 80.0,
                "all_passed": True,
                "any_perfect": True,
                "ranking": [
                    "Sam",
                    "Alex",
                    "Maya"
                ]
            }
        ),

        (
            [
                {
                    "name": "A",
                    "scores": [
                        100
                    ]
                },
                {
                    "name": "B",
                    "scores": [
                        0,
                        0,
                        0
                    ]
                }
            ],
            {
                "top_student": "A",
                "class_average": 50.0,
                "all_passed": False,
                "any_perfect": True,
                "ranking": [
                    "A",
                    "B"
                ]
            }
        ),

        (
            [
                {
                    "name": "Alex",
                    "scores": [
                        80,
                        80
                    ]
                },
                {
                    "name": "Sam",
                    "scores": [
                        90,
                        70
                    ]
                },
                {
                    "name": "Maya",
                    "scores": [
                        75,
                        75
                    ]
                }
            ],
            {
                "top_student": "Alex",
                "class_average": 78.33333333333333,
                "all_passed": True,
                "any_perfect": False,
                "ranking": [
                    "Alex",
                    "Sam",
                    "Maya"
                ]
            }
        ),

        (
            [
                {
                    "name": "Solo",
                    "scores": [
                        100,
                        100
                    ]
                }
            ],
            {
                "top_student": "Solo",
                "class_average": 100.0,
                "all_passed": True,
                "any_perfect": True,
                "ranking": [
                    "Solo"
                ]
            }
        ),

        (
            [
                {
                    "name": "One",
                    "scores": [
                        59,
                        100
                    ]
                },
                {
                    "name": "Two",
                    "scores": [
                        80,
                        80
                    ]
                },
                {
                    "name": "Three",
                    "scores": [
                        90
                    ]
                }
            ],
            {
                "top_student": "Three",
                "class_average": 83.16666666666667,
                "all_passed": False,
                "any_perfect": True,
                "ranking": [
                    "Three",
                    "Two",
                    "One"
                ]
            }
        )

    ]


    if tests_ok:

        for (
            students,
            expected
        ) in tests:


            original_snapshot = (
                copy.deepcopy(
                    students
                )
            )


            original_student_refs = list(
                students
            )


            original_scores_refs = [
                student["scores"]
                for student in students
            ]


            obtained = function(
                students
            )


            # -----------------------------------------
            # RETURN TYPE
            # -----------------------------------------

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


            # -----------------------------------------
            # REQUIRED KEYS
            # -----------------------------------------

            expected_keys = {
                "top_student",
                "class_average",
                "all_passed",
                "any_perfect",
                "ranking"
            }


            if set(
                obtained.keys()
            ) != expected_keys:

                fail(
                    "The returned dictionary must contain exactly these keys:\\n"
                    "top_student, class_average, all_passed, any_perfect, ranking"
                )

                tests_ok = False

                break


            # -----------------------------------------
            # TYPE CHECKS
            # -----------------------------------------

            if type(
                obtained[
                    "top_student"
                ]
            ) is not str:

                fail(
                    "top_student must be a string."
                )

                tests_ok = False

                break


            if type(
                obtained[
                    "class_average"
                ]
            ) is not float:

                fail(
                    "class_average must be a float."
                )

                tests_ok = False

                break


            if type(
                obtained[
                    "all_passed"
                ]
            ) is not bool:

                fail(
                    "all_passed must be a Boolean."
                )

                tests_ok = False

                break


            if type(
                obtained[
                    "any_perfect"
                ]
            ) is not bool:

                fail(
                    "any_perfect must be a Boolean."
                )

                tests_ok = False

                break


            if not isinstance(
                obtained[
                    "ranking"
                ],
                list
            ):

                fail(
                    "ranking must be a list."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # RESULT CHECK
            # -----------------------------------------

            if (
                obtained[
                    "top_student"
                ]
                != expected[
                    "top_student"
                ]
            ):

                fail(
                    "top_student is incorrect.\\n"
                    f"Expected: {expected['top_student']}\\n"
                    f"Obtained: {obtained['top_student']}"
                )

                tests_ok = False

                break


            if abs(
                obtained[
                    "class_average"
                ]
                - expected[
                    "class_average"
                ]
            ) > 1e-9:

                fail(
                    "class_average is incorrect.\\n"
                    f"Expected: {expected['class_average']}\\n"
                    f"Obtained: {obtained['class_average']}"
                )

                tests_ok = False

                break


            if (
                obtained[
                    "all_passed"
                ]
                != expected[
                    "all_passed"
                ]
            ):

                fail(
                    "all_passed is incorrect.\\n"
                    f"Expected: {expected['all_passed']}\\n"
                    f"Obtained: {obtained['all_passed']}"
                )

                tests_ok = False

                break


            if (
                obtained[
                    "any_perfect"
                ]
                != expected[
                    "any_perfect"
                ]
            ):

                fail(
                    "any_perfect is incorrect.\\n"
                    f"Expected: {expected['any_perfect']}\\n"
                    f"Obtained: {obtained['any_perfect']}"
                )

                tests_ok = False

                break


            if (
                obtained[
                    "ranking"
                ]
                != expected[
                    "ranking"
                ]
            ):

                fail(
                    "ranking is incorrect.\\n"
                    f"Expected: {expected['ranking']}\\n"
                    f"Obtained: {obtained['ranking']}"
                )

                tests_ok = False

                break


            # -----------------------------------------
            # INPUT MUST REMAIN UNCHANGED
            # -----------------------------------------

            if students != original_snapshot:

                fail(
                    "The original students structure must not be modified."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # ORIGINAL OBJECTS MUST NOT BE REPLACED
            # -----------------------------------------

            for index in range(
                len(students)
            ):

                if (
                    students[index]
                    is not
                    original_student_refs[index]
                ):

                    fail(
                        "The original student dictionaries must not be replaced."
                    )

                    tests_ok = False

                    break


                if (
                    students[index][
                        "scores"
                    ]
                    is not
                    original_scores_refs[index]
                ):

                    fail(
                        "The original score lists must not be replaced."
                    )

                    tests_ok = False

                    break


            if not tests_ok:

                break


    if tests_ok:

        success(
            "Student averages are calculated correctly"
        )

        success(
            "The class average is calculated from student averages"
        )

        success(
            "The top student is identified correctly"
        )

        success(
            "The ranking is ordered correctly"
        )

        success(
            "Equal averages preserve their original relative order"
        )

        success(
            "all() is used for passing conditions"
        )

        success(
            "any() is used for perfect-score detection"
        )

        success(
            "Appropriate Python built-ins are used"
        )

        success(
            "The original input structure remains unchanged"
        )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },


        /* =====================================================
       CHALLENGE 019
       Most Frequent Value, First on Ties
    ===================================================== */

    19: {

        chapter: 10,

        number: "019",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Most Frequent Value, First on Ties",


        description: `
            <p>
                Write a function
                <code>most_frequent(values)</code>.
            </p>

            <p>
                Return the value that appears most
                frequently.
            </p>

            <p>
                If two or more values share the highest
                frequency, return the one that appeared
                first in the original input.
            </p>

            <p>
                Example:
            </p>

            <pre>most_frequent([
    "python",
    "java",
    "java",
    "python",
    "sql"
])

→ "python"</pre>

            <p>
                Both <code>"python"</code> and
                <code>"java"</code> appear twice, but
                <code>"python"</code> appeared first.
            </p>

            <p>
                Requirements:
            </p>

            <ul>
                <li>
                    build a frequency table using a
                    dictionary;
                </li>

                <li>
                    do not repeatedly scan the complete
                    input for every value;
                </li>

                <li>
                    do not sort the input to determine the
                    answer;
                </li>

                <li>
                    preserve the original input;
                </li>

                <li>
                    aim for
                    <code>O(n)</code> average time.
                </li>
            </ul>

            <p>
                Two separate linear passes are completely
                acceptable:
                <code>O(n) + O(n)</code> is still
                <code>O(n)</code>.
            </p>

            <p>
                You may assume:
            </p>

            <ul>
                <li>
                    <code>values</code> is not empty;
                </li>

                <li>
                    every value is hashable;
                </li>

                <li>
                    input validation is not required.
                </li>
            </ul>

            <p>
                Build the frequency table yourself using a
                regular dictionary. Do not use
                <code>collections.Counter</code>.
            </p>
        `,


        starterCode:
`def most_frequent(values):
    pass


values = [
    "python",
    "java",
    "java",
    "python",
    "sql"
]

print(
    most_frequent(values)
)`,


        checker:
`
namespace = {}

try:

    import ast
    import copy


    tests_ok = True


    # -------------------------------------------------
    # FIND FUNCTION
    # -------------------------------------------------

    tree = ast.parse(
        user_code
    )


    function_node = None


    for node in tree.body:

        if (
            isinstance(
                node,
                ast.FunctionDef
            )
            and node.name
            == "most_frequent"
        ):

            function_node = node

            break


    if function_node is None:

        fail(
            "You must define a function called most_frequent()."
        )

        tests_ok = False


    # -------------------------------------------------
    # CHECK REQUIRED APPROACH
    # -------------------------------------------------

    if tests_ok:

        uses_dictionary = False
        uses_counter = False
        uses_sorting = False
        uses_count_method = False
        nested_loops = False


        for node in ast.walk(
            function_node
        ):

            # Dictionary literal or comprehension
            if isinstance(
                node,
                (
                    ast.Dict,
                    ast.DictComp
                )
            ):

                uses_dictionary = True


            # Function calls
            if isinstance(
                node,
                ast.Call
            ):

                if isinstance(
                    node.func,
                    ast.Name
                ):

                    if node.func.id == "dict":

                        uses_dictionary = True


                    elif node.func.id == "sorted":

                        uses_sorting = True


                    elif node.func.id == "Counter":

                        uses_counter = True


                elif isinstance(
                    node.func,
                    ast.Attribute
                ):

                    if node.func.attr == "sort":

                        uses_sorting = True


                    elif node.func.attr == "count":

                        uses_count_method = True


                    elif node.func.attr == "Counter":

                        uses_counter = True


            # Detect nested explicit loops
            if isinstance(
                node,
                (
                    ast.For,
                    ast.While
                )
            ):

                for child in ast.walk(
                    node
                ):

                    if (
                        child is not node
                        and isinstance(
                            child,
                            (
                                ast.For,
                                ast.While
                            )
                        )
                    ):

                        nested_loops = True

                        break


        if uses_counter:

            fail(
                "Do not use collections.Counter for this challenge. "
                "Build the frequency dictionary yourself."
            )

            tests_ok = False


        elif not uses_dictionary:

            fail(
                "Use a dictionary to store value frequencies."
            )

            tests_ok = False


        elif uses_sorting:

            fail(
                "Sorting is not required for this problem. "
                "Find the answer without sorted() or .sort()."
            )

            tests_ok = False


        elif uses_count_method:

            fail(
                "Do not repeatedly use .count() to calculate frequencies. "
                "Build a frequency dictionary instead."
            )

            tests_ok = False


        elif nested_loops:

            fail(
                "Avoid nested loops over the input. "
                "The challenge should run in O(n) average time."
            )

            tests_ok = False


    # -------------------------------------------------
    # LOAD USER FUNCTION
    # -------------------------------------------------

    if tests_ok:

        exec(
            user_code,
            namespace
        )


        function = namespace.get(
            "most_frequent"
        )


        if not callable(
            function
        ):

            fail(
                "most_frequent must be callable."
            )

            tests_ok = False


        else:

            success(
                "Function most_frequent() found"
            )


    # -------------------------------------------------
    # TEST CASES
    # -------------------------------------------------

    tests = [

        (
            [
                "python",
                "java",
                "python",
                "sql",
                "python",
                "java"
            ],
            "python"
        ),

        (
            [
                "python",
                "java",
                "java",
                "python",
                "sql"
            ],
            "python"
        ),

        (
            [
                1,
                2,
                2,
                1
            ],
            1
        ),

        (
            [
                3,
                1,
                3,
                1,
                2,
                2
            ],
            3
        ),

        (
            [
                42
            ],
            42
        ),

        (
            [
                -1,
                4,
                -1,
                4,
                4
            ],
            4
        ),

        (
            [
                (
                    1,
                    2
                ),
                (
                    3,
                    4
                ),
                (
                    1,
                    2
                )
            ],
            (
                1,
                2
            )
        )

    ]


    if tests_ok:

        for (
            values,
            expected
        ) in tests:


            original_snapshot = (
                copy.deepcopy(
                    values
                )
            )


            obtained = function(
                values
            )


            # -----------------------------------------
            # RESULT
            # -----------------------------------------

            if obtained != expected:

                fail(
                    f"Input: {original_snapshot}\\n"
                    f"Expected: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            # -----------------------------------------
            # INPUT MUST REMAIN UNCHANGED
            # -----------------------------------------

            if values != original_snapshot:

                fail(
                    "The original input must not be modified.\\n"
                    f"Before: {original_snapshot}\\n"
                    f"After: {values}"
                )

                tests_ok = False

                break


    if tests_ok:

        success(
            "A dictionary is used for frequency counting"
        )

        success(
            "The most frequent value is returned correctly"
        )

        success(
            "Ties are resolved using first appearance"
        )

        success(
            "Integer, string and tuple values are handled"
        )

        success(
            "The solution avoids repeated full-list counting"
        )

        success(
            "The solution avoids unnecessary sorting"
        )

        success(
            "The original input remains unchanged"
        )

        success(
            "The approach is compatible with O(n) average time"
        )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    },





        /* =====================================================
       CHALLENGE 020
       Two Sum with Efficient Lookup
    ===================================================== */

    20: {

        chapter: 10,

        number: "020",

        difficulty: "Medium",

        layout: "standard",

        title:
            "Two Sum with Efficient Lookup",


        description: `
            <p>
                Write a function
                <code>two_sum(numbers, target)</code>.
            </p>

            <p>
                Return the indexes of two different elements
                whose values add up to
                <code>target</code>.
            </p>

            <p>
                Example:
            </p>

            <pre>two_sum(
    [2, 7, 11, 15],
    9
)

→ [0, 1]</pre>

            <p>
                because:
            </p>

            <pre>2 + 7 = 9</pre>

            <p>
                Another example:
            </p>

            <pre>two_sum(
    [3, 2, 4],
    6
)

→ [1, 2]</pre>

            <p>
                Requirements:
            </p>

            <ul>
                <li>
                    use a dictionary for efficient lookup;
                </li>

                <li>
                    avoid comparing every possible pair;
                </li>

                <li>
                    aim for
                    <code>O(n)</code> average time;
                </li>

                <li>
                    do not use the same list position twice;
                </li>

                <li>
                    return the two indexes in increasing
                    order;
                </li>

                <li>
                    do not modify the original input.
                </li>
            </ul>

            <p>
                Think about the current number:
            </p>

            <pre>number</pre>

            <p>
                and the value still needed:
            </p>

            <pre>needed = target - number</pre>

            <p>
                A dictionary can remember values and their
                indexes so that you do not need to scan the
                list again for every element.
            </p>

            <p>
                You may assume:
            </p>

            <ul>
                <li>
                    <code>numbers</code> contains numeric
                    values;
                </li>

                <li>
                    there is exactly one valid solution;
                </li>

                <li>
                    input validation is not required.
                </li>
            </ul>

            <p>
                A nested-loop
                <code>O(n²)</code> solution may be a useful
                first idea during an interview, but it does
                not satisfy the final requirement of this
                challenge.
            </p>
        `,


        starterCode:
`def two_sum(numbers, target):
    pass


numbers = [
    2,
    7,
    11,
    15
]

print(
    two_sum(
        numbers,
        9
    )
)`,


        checker:
`
namespace = {}

try:

    import ast
    import copy


    tests_ok = True


    # -------------------------------------------------
    # FIND FUNCTION
    # -------------------------------------------------

    tree = ast.parse(
        user_code
    )


    function_node = None


    for node in tree.body:

        if (
            isinstance(
                node,
                ast.FunctionDef
            )
            and node.name
            == "two_sum"
        ):

            function_node = node

            break


    if function_node is None:

        fail(
            "You must define a function called two_sum()."
        )

        tests_ok = False


    # -------------------------------------------------
    # CHECK REQUIRED APPROACH
    # -------------------------------------------------

    if tests_ok:

        uses_dictionary = False
        nested_loops = False
        uses_sorting = False
        uses_index_method = False
        repeated_list_membership = False


        for node in ast.walk(
            function_node
        ):

            # Dictionary literal or comprehension
            if isinstance(
                node,
                (
                    ast.Dict,
                    ast.DictComp
                )
            ):

                uses_dictionary = True


            if isinstance(
                node,
                ast.Call
            ):

                if isinstance(
                    node.func,
                    ast.Name
                ):

                    if node.func.id == "dict":

                        uses_dictionary = True


                    elif node.func.id == "sorted":

                        uses_sorting = True


                elif isinstance(
                    node.func,
                    ast.Attribute
                ):

                    if node.func.attr == "sort":

                        uses_sorting = True


                    elif node.func.attr == "index":

                        uses_index_method = True


            # Detect explicit nested loops
            if isinstance(
                node,
                (
                    ast.For,
                    ast.While
                )
            ):

                for child in ast.walk(
                    node
                ):

                    if (
                        child is not node
                        and isinstance(
                            child,
                            (
                                ast.For,
                                ast.While
                            )
                        )
                    ):

                        nested_loops = True

                        break


            # Detect:
            # needed in numbers
            # which would repeatedly scan the input list.
            if isinstance(
                node,
                ast.Compare
            ):

                for (
                    operator,
                    comparator
                ) in zip(
                    node.ops,
                    node.comparators
                ):

                    if (
                        isinstance(
                            operator,
                            (
                                ast.In,
                                ast.NotIn
                            )
                        )
                        and isinstance(
                            comparator,
                            ast.Name
                        )
                        and comparator.id
                        == "numbers"
                    ):

                        repeated_list_membership = True


        if not uses_dictionary:

            fail(
                "Use a dictionary for efficient value lookup."
            )

            tests_ok = False


        elif nested_loops:

            fail(
                "Do not compare every possible pair with nested loops. "
                "Aim for O(n) average time."
            )

            tests_ok = False


        elif uses_sorting:

            fail(
                "Sorting is not required for Two Sum and would increase "
                "the time complexity unnecessarily."
            )

            tests_ok = False


        elif uses_index_method:

            fail(
                "Avoid repeatedly searching the list with .index(). "
                "Use the dictionary to remember indexes."
            )

            tests_ok = False


        elif repeated_list_membership:

            fail(
                "Do not repeatedly search the original numbers list "
                "with membership checks. Use dictionary lookup instead."
            )

            tests_ok = False


    # -------------------------------------------------
    # LOAD USER FUNCTION
    # -------------------------------------------------

    if tests_ok:

        exec(
            user_code,
            namespace
        )


        function = namespace.get(
            "two_sum"
        )


        if not callable(
            function
        ):

            fail(
                "two_sum must be callable."
            )

            tests_ok = False


        else:

            success(
                "Function two_sum() found"
            )


    # -------------------------------------------------
    # TEST CASES
    # -------------------------------------------------

    tests = [

        (
            [
                2,
                7,
                11,
                15
            ],
            9,
            [
                0,
                1
            ]
        ),

        (
            [
                3,
                2,
                4
            ],
            6,
            [
                1,
                2
            ]
        ),

        (
            [
                3,
                3
            ],
            6,
            [
                0,
                1
            ]
        ),

        (
            [
                -3,
                4,
                3,
                90
            ],
            0,
            [
                0,
                2
            ]
        ),

        (
            [
                0,
                4,
                3,
                0
            ],
            0,
            [
                0,
                3
            ]
        ),

        (
            [
                10,
                -2,
                5,
                7
            ],
            3,
            [
                1,
                2
            ]
        ),

        (
            [
                1.5,
                2.5,
                8.0
            ],
            4.0,
            [
                0,
                1
            ]
        )

    ]


    if tests_ok:

        for (
            numbers,
            target,
            expected
        ) in tests:


            original_snapshot = (
                copy.deepcopy(
                    numbers
                )
            )


            obtained = function(
                numbers,
                target
            )


            # -----------------------------------------
            # RETURN TYPE
            # -----------------------------------------

            if not isinstance(
                obtained,
                list
            ):

                fail(
                    "The function must return a list of two indexes.\\n"
                    f"Returned type: {type(obtained).__name__}"
                )

                tests_ok = False

                break


            # -----------------------------------------
            # EXACTLY TWO INDEXES
            # -----------------------------------------

            if len(
                obtained
            ) != 2:

                fail(
                    "Return exactly two indexes."
                )

                tests_ok = False

                break


            if any(
                type(index) is not int
                for index in obtained
            ):

                fail(
                    "Both returned indexes must be integers."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # VALID INDEXES
            # -----------------------------------------

            first_index = obtained[0]
            second_index = obtained[1]


            if not (
                0 <= first_index
                < len(numbers)
                and
                0 <= second_index
                < len(numbers)
            ):

                fail(
                    "The returned indexes must be valid positions "
                    "inside numbers."
                )

                tests_ok = False

                break


            if (
                first_index
                == second_index
            ):

                fail(
                    "The same list position cannot be used twice."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # INDEX ORDER
            # -----------------------------------------

            if (
                first_index
                >= second_index
            ):

                fail(
                    "Return the indexes in increasing order."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # VALUES MUST PRODUCE TARGET
            # -----------------------------------------

            if (
                numbers[first_index]
                + numbers[second_index]
                != target
            ):

                fail(
                    "The values at the returned indexes do not "
                    "add up to the target."
                )

                tests_ok = False

                break


            # -----------------------------------------
            # EXPECTED UNIQUE SOLUTION
            # -----------------------------------------

            if obtained != expected:

                fail(
                    f"Numbers: {original_snapshot}\\n"
                    f"Target: {target}\\n"
                    f"Expected indexes: {expected}\\n"
                    f"Obtained: {obtained}"
                )

                tests_ok = False

                break


            # -----------------------------------------
            # INPUT MUST REMAIN UNCHANGED
            # -----------------------------------------

            if numbers != original_snapshot:

                fail(
                    "The original numbers list must not be modified."
                )

                tests_ok = False

                break


    if tests_ok:

        success(
            "A dictionary is used for efficient lookup"
        )

        success(
            "The correct pair of indexes is returned"
        )

        success(
            "Duplicate values are handled correctly"
        )

        success(
            "Negative numbers and zero are handled correctly"
        )

        success(
            "The same position is never used twice"
        )

        success(
            "Indexes are returned in increasing order"
        )

        success(
            "The original input remains unchanged"
        )

        success(
            "The solution avoids an O(n²) pair-by-pair search"
        )

        success(
            "The approach is compatible with O(n) average time"
        )


except Exception as error:

    fail(
        "Error during execution: "
        + str(error)
    )
`

    }


};