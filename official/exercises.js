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

    }


};