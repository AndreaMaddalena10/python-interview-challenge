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


            if obtained is value:

                fail(
                    "The function must always return a new list, "
                    "not the original input list."
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

            success(
                "The function always returns a new list"
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
                (49.99,),
                {
                    "discount": 10,
                    "tax": 7.5
                },
                48.37
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

    difficulty: "Easy",

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
            Override values such as
            <code>False</code>, <code>0</code> and
            an empty string are still valid values and
            must be applied normally.
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
            ),

            (
                {
                    "debug": True,
                    "timeout": 30,
                    "name": "production"
                },

                {
                    "debug": False,
                    "timeout": 0,
                    "name": ""
                },

                {
                    "debug": False,
                    "timeout": 0,
                    "name": ""
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
                "Falsy override values are handled correctly"
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
            original list.
        </p>

        <p>
            Preserve the original order.
        </p>

        <p>
            You may assume that every value in
            <code>numbers</code> is an integer.
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


            if obtained is value:

                fail(
                    "The function must return a new list, "
                    "not the original input list."
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

            success(
                "A new list is returned"
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
                If no character appears exactly once,,
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


    if not isinstance(
        BankAccount,
        type
    ):

        fail(
            "You must define a class called BankAccount."
        )


    else:

        success(
            "Class BankAccount found"
        )


        tests_ok = True


        try:

            account = BankAccount(
                100
            )

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


                if not callable(
                    method
                ):

                    fail(
                        f"You must define a method called {method_name}()."
                    )

                    tests_ok = False

                    break


        if tests_ok:

            if (
                account.get_balance()
                != 100
            ):

                fail(
                    "The initial balance was not stored correctly.\\n"
                    "Expected: 100\\n"
                    f"Obtained: {account.get_balance()}"
                )

                tests_ok = False


        if tests_ok:

            account.deposit(
                50
            )


            if (
                account.get_balance()
                != 150
            ):

                fail(
                    "deposit() did not update the balance correctly.\\n"
                    "Expected: 150\\n"
                    f"Obtained: {account.get_balance()}"
                )

                tests_ok = False


        if tests_ok:

            result = account.withdraw(
                40
            )


            if result is not True:

                fail(
                    "A successful withdrawal must return True."
                )

                tests_ok = False


            elif (
                account.get_balance()
                != 110
            ):

                fail(
                    "The balance after a successful withdrawal is incorrect.\\n"
                    "Expected: 110\\n"
                    f"Obtained: {account.get_balance()}"
                )

                tests_ok = False


        if tests_ok:

            balance_before = (
                account.get_balance()
            )


            result = account.withdraw(
                200
            )


            if result is not False:

                fail(
                    "A withdrawal with insufficient funds must return False."
                )

                tests_ok = False


            elif (
                account.get_balance()
                != balance_before
            ):

                fail(
                    "The balance must remain unchanged when a withdrawal fails."
                )

                tests_ok = False


        if tests_ok:

            account2 = BankAccount(
                50
            )

            account2.deposit(
                25
            )


            if (
                account2.get_balance()
                != 75
            ):

                fail(
                    "A second BankAccount instance does not behave correctly."
                )

                tests_ok = False


            elif (
                account.get_balance()
                != 110
            ):

                fail(
                    "Different BankAccount instances must maintain independent balances."
                )

                tests_ok = False


        if tests_ok:

            account3 = BankAccount(
                30
            )


            result = account3.withdraw(
                30
            )


            if result is not True:

                fail(
                    "Withdrawing the exact available balance should succeed."
                )

                tests_ok = False


            elif (
                account3.get_balance()
                != 0
            ):

                fail(
                    "Withdrawing the exact balance should leave 0."
                )

                tests_ok = False


        if tests_ok:

            account4 = BankAccount(
                10.5
            )

            account4.deposit(
                4.5
            )


            if (
                account4.get_balance()
                != 15.0
            ):

                fail(
                    "The class should also work with numeric decimal balances."
                )

                tests_ok = False


        # =========================================
        # ZERO INITIAL BALANCE
        # =========================================

        if tests_ok:

            account5 = BankAccount(
                0
            )


            if (
                account5.get_balance()
                != 0
            ):

                fail(
                    "A zero initial balance must be stored correctly."
                )

                tests_ok = False


            else:

                account5.deposit(
                    10
                )


                if (
                    account5.get_balance()
                    != 10
                ):

                    fail(
                        "Deposits must also work correctly "
                        "from a zero balance."
                    )

                    tests_ok = False


        if tests_ok:

            success(
                "Initial balance is handled correctly"
            )

            success(
                "Zero initial balance is handled correctly"
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
            in its constructor.
        </p>

        <p>
            Store these values in the instance attributes
            <code>self.name</code> and
            <code>self.salary</code>.
        </p>

        <p>
            Employee must provide a method
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
            Developer must reuse the parent class
            initialization for <code>name</code> and
            <code>salary</code>, then store
            <code>language</code> in
            <code>self.language</code>.
        </p>

        <p>
            Developer must override
            <code>describe()</code> so that:
        </p>

        <pre>Developer("Sam", 40000, "Python").describe()
→ "Sam earns 40000 and codes in Python"</pre>

        <p>
            Your implementation does not need to match
            a predefined solution, but the inheritance,
            parent initialization and method override
            requirements must be respected.
        </p>
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


    # =========================================
    # CLASS EXISTENCE
    # =========================================

    if not isinstance(
        Employee,
        type
    ):

        fail(
            "You must define a class called Employee."
        )

        tests_ok = False


    if (
        tests_ok
        and not isinstance(
            Developer,
            type
        )
    ):

        fail(
            "You must define a class called Developer."
        )

        tests_ok = False


    if tests_ok:

        success(
            "Classes Employee and Developer found"
        )


    # =========================================
    # INHERITANCE
    # =========================================

    if (
        tests_ok
        and not issubclass(
            Developer,
            Employee
        )
    ):

        fail(
            "Developer must inherit from Employee."
        )

        tests_ok = False


    # =========================================
    # EMPLOYEE CONSTRUCTION
    # =========================================

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


    # =========================================
    # EMPLOYEE ATTRIBUTES
    # =========================================

    if tests_ok:

        if getattr(
            employee,
            "name",
            None
        ) != "Alex":

            fail(
                "Employee must store name in self.name."
            )

            tests_ok = False


        elif getattr(
            employee,
            "salary",
            None
        ) != 30000:

            fail(
                "Employee must store salary in self.salary."
            )

            tests_ok = False


    # =========================================
    # EMPLOYEE DESCRIBE
    # =========================================

    if tests_ok:

        describe = getattr(
            employee,
            "describe",
            None
        )


        if not callable(
            describe
        ):

            fail(
                "Employee must define describe()."
            )

            tests_ok = False


        elif (
            describe()
            != "Alex earns 30000"
        ):

            fail(
                "Employee.describe() returned an incorrect result.\\n"
                'Expected: "Alex earns 30000"\\n'
                f"Obtained: {repr(describe())}"
            )

            tests_ok = False


    # =========================================
    # DEVELOPER CONSTRUCTION
    # =========================================

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


    # =========================================
    # DEVELOPER ATTRIBUTES
    # =========================================

    if tests_ok:

        if getattr(
            developer,
            "name",
            None
        ) != "Sam":

            fail(
                "Developer must correctly initialize self.name."
            )

            tests_ok = False


        elif getattr(
            developer,
            "salary",
            None
        ) != 40000:

            fail(
                "Developer must correctly initialize self.salary."
            )

            tests_ok = False


        elif getattr(
            developer,
            "language",
            None
        ) != "Python":

            fail(
                "Developer must store language in self.language."
            )

            tests_ok = False


    # =========================================
    # TRUE METHOD OVERRIDE
    # =========================================

    if tests_ok:

        if (
            "describe"
            not in Developer.__dict__
        ):

            fail(
                "Developer must override describe()."
            )

            tests_ok = False


    # =========================================
    # DEVELOPER DESCRIBE
    # =========================================

    if tests_ok:

        describe = getattr(
            developer,
            "describe",
            None
        )


        if not callable(
            describe
        ):

            fail(
                "Developer must provide describe()."
            )

            tests_ok = False


        elif (
            describe()
            != "Sam earns 40000 and codes in Python"
        ):

            fail(
                "Developer.describe() returned an incorrect result.\\n"
                'Expected: "Sam earns 40000 and codes in Python"\\n'
                f"Obtained: {repr(describe())}"
            )

            tests_ok = False


    # =========================================
    # DIFFERENT VALUES
    # =========================================

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


        if (
            employee2.describe()
            != "Maya earns 52000"
        ):

            fail(
                "Employee.describe() does not work correctly "
                "with different values."
            )

            tests_ok = False


        elif (
            developer2.describe()
            != "Luca earns 61000 and codes in JavaScript"
        ):

            fail(
                "Developer.describe() does not work correctly "
                "with different values."
            )

            tests_ok = False


    # =========================================
    # PARENT INITIALIZATION MUST BE REUSED
    # =========================================

    if tests_ok:

        parent_init_called = {
            "value": False
        }


        original_init = (
            Employee.__init__
        )


        def tracked_init(
            self,
            name,
            salary
        ):

            parent_init_called[
                "value"
            ] = True


            original_init(
                self,
                name,
                salary
            )


        Employee.__init__ = (
            tracked_init
        )


        try:

            Developer(
                "Test",
                1,
                "Python"
            )

        finally:

            Employee.__init__ = (
                original_init
            )


        if not parent_init_called[
            "value"
        ]:

            fail(
                "Developer must reuse Employee's "
                "initialization for name and salary."
            )

            tests_ok = False


    # =========================================
    # SUCCESS
    # =========================================

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
            "Developer correctly overrides describe()"
        )

        success(
            "describe() returns the expected results"
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
            ),

            (
                "__challenge_011_h.txt",
                "hello\\n3.14\\n   \\n\\t\\nPython\\n",
                []
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
                "Files with no valid integers return an empty list"
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
                    "The function must return a list.\\n"
                    f"Returned type: {type(obtained).__name__}"
                )

                tests_ok = False

                break


            if obtained is value:

                fail(
                    "The function must return a new list, "
                    "not the original input list."
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
                    "The original input list must not be modified.\\n"
                    f"Before: {original_input}\\n"
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

            success(
                "A new list is returned"
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
                    ["api", "users"],
                    ["users", "api"],
                    ["api", "users"]
                ],
                {
                    (
                        "api",
                        "users"
                    ): 2,

                    (
                        "users",
                        "api"
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
                "Path order is preserved when determining distinct paths"
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
            <code>valid_integers()</code> must return a
            generator object.
        </p>

        <p>
            The result must be produced lazily.
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
            # NEW LIST REQUIREMENT
            # -----------------------------------------

            if obtained is names:

                fail(
                    "The function must return a new list, "
                    "not the original names sequence."
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
            "A new list is returned"
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
                if multiple students share the highest
                average, <code>top_student</code> must
                be the first of them in the original
                input order;
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
        ),

        (
            [
                {
                    "name": "Zoe",
                    "scores": [
                        90,
                        90
                    ]
                },
                {
                    "name": "Amy",
                    "scores": [
                        90
                    ]
                },
                {
                    "name": "Bob",
                    "scores": [
                        80
                    ]
                }
            ],
            {
                "top_student": "Zoe",
                "class_average": 86.66666666666667,
                "all_passed": True,
                "any_perfect": False,
                "ranking": [
                    "Zoe",
                    "Amy",
                    "Bob"
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


            class_average = obtained[
                "class_average"
            ]


            if (
                not isinstance(
                    class_average,
                    (
                        int,
                        float
                    )
                )
                or isinstance(
                    class_average,
                    bool
                )
            ):

                fail(
                    "class_average must be a numeric value."
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
            "Tied top students preserve their original relative order"
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


            # Dictionary literal or comprehension.
            if isinstance(
                node,
                (
                    ast.Dict,
                    ast.DictComp
                )
            ):

                uses_dictionary = True


            # Function calls.
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


                    elif (
                        node.func.attr
                        == "fromkeys"
                        and isinstance(
                            node.func.value,
                            ast.Name
                        )
                        and node.func.value.id
                        == "dict"
                    ):

                        uses_dictionary = True


            # Detect nested explicit loops.
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
            Return a <strong>list</strong> containing the
            indexes of two different elements whose values
            add up to <code>target</code>.
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
        sorts_input = False
        uses_index_method = False
        repeated_list_membership = False


        for node in ast.walk(
            function_node
        ):


            # Dictionary literal or comprehension.
            if isinstance(
                node,
                (
                    ast.Dict,
                    ast.DictComp
                )
            ):

                uses_dictionary = True


            # Function and method calls.
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


                    elif (
                        node.func.id == "sorted"
                        and node.args
                        and isinstance(
                            node.args[0],
                            ast.Name
                        )
                        and node.args[0].id
                        == "numbers"
                    ):

                        sorts_input = True


                elif isinstance(
                    node.func,
                    ast.Attribute
                ):

                    if (
                        node.func.attr == "sort"
                        and isinstance(
                            node.func.value,
                            ast.Name
                        )
                        and node.func.value.id
                        == "numbers"
                    ):

                        sorts_input = True


                    elif node.func.attr == "index":

                        uses_index_method = True


            # Detect explicit nested loops.
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


        elif sorts_input:

            fail(
                "Do not sort the original numbers list "
                "to solve this challenge."
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
            "Numeric decimal values are handled correctly"
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

},


/* =====================================================
   CHALLENGE 021
   Transaction Audit Pipeline
===================================================== */

21: {

    chapter: 11,

    number: "021",

    difficulty: "Hard",

    layout: "macro",

    title:
        "Transaction Audit Pipeline",


    description: `
        <p>
            Build a complete transaction-processing pipeline using
            <strong>two functions that work together</strong>.
        </p>

        <p>
            The first function must read and validate transactions
            lazily from a file:
        </p>

        <pre>def iter_transactions(filename):
    pass</pre>

        <p>
            The second function must process those transactions and
            build a final report:
        </p>

        <pre>def build_transaction_report(filename):
    pass</pre>

        <h3>Input Format</h3>

        <p>
            The file contains one transaction per line in this format:
        </p>

        <pre>transaction_id,user,type,amount</pre>

        <p>
            Example:
        </p>

        <pre>T001,Alex,deposit,100
T002,Sam,withdraw,40
invalid line
T003,Alex,withdraw,25
T004,Sam,deposit,80
T002,Sam,withdraw,40</pre>

        <h3>Part 1 — iter_transactions()</h3>

        <p>
            <code>iter_transactions(filename)</code> must be a
            <strong>generator function</strong>.
        </p>

        <p>
            For every valid line, yield a dictionary with exactly
            these keys:
        </p>

        <pre>{
    "id": "T001",
    "user": "alex",
    "type": "deposit",
    "amount": 100
}</pre>

        <p>
            Apply the following rules:
        </p>

        <ul>
            <li>
                remove surrounding whitespace from every field;
            </li>

            <li>
                convert the user name to lowercase;
            </li>

            <li>
                convert the transaction type to lowercase;
            </li>

            <li>
                the type must be either
                <code>"deposit"</code> or
                <code>"withdraw"</code>;
            </li>

            <li>
                the amount must be successfully converted using
                <code>int()</code>;
            </li>

            <li>
                the amount must be greater than or equal to zero;
            </li>

            <li>
                the transaction ID cannot be empty;
            </li>

            <li>
                the user cannot be empty;
            </li>

            <li>
                a valid line must contain exactly four
                comma-separated fields;
            </li>

            <li>
                invalid lines must be ignored;
            </li>

            <li>
                a missing file must behave like an empty input
                instead of crashing the program.
            </li>
        </ul>

        <p>
            The file must be processed
            <strong>lazily</strong>.
            Do not load the complete file before producing the first
            valid transaction.
        </p>

        <p>
            As soon as a valid transaction is found, yield it before
            reading any later line from the file.
        </p>

        <h3>Part 2 — build_transaction_report()</h3>

        <p>
            <code>build_transaction_report(filename)</code>
            must use:
        </p>

        <pre>iter_transactions(filename)</pre>

        <p>
            Every transaction is identified by its
            <code>"id"</code>.
        </p>

        <p>
            If the same <strong>valid</strong> transaction ID appears
            more than once, only the first occurrence must be
            processed.
        </p>

        <p>
            Every later valid occurrence of that same ID must be
            ignored and counted as a duplicate.
        </p>

        <p>
            Invalid lines are ignored completely and therefore do not
            count as duplicate transactions.
        </p>

        <p>
            Use a <strong>set</strong> to keep track of transaction
            IDs that have already been processed.
        </p>

        <p>
            A deposit increases the user's balance.
            A withdrawal decreases it.
        </p>

        <h3>Required Result</h3>

        <p>
            Return a dictionary containing exactly these keys:
        </p>

        <pre>{
    "balances": ...,
    "ranking": ...,
    "top_user": ...,
    "total_deposits": ...,
    "total_withdrawals": ...,
    "processed_transactions": ...,
    "duplicate_transactions": ...,
    "all_balances_non_negative": ...,
    "any_negative_balance": ...
}</pre>

        <h3>Ranking</h3>

        <p>
            <code>ranking</code> must contain the users ordered from
            the highest balance to the lowest balance.
        </p>

        <p>
            If two or more users have the same balance, their relative
            order must remain the order in which they first appeared
            among the processed transactions.
        </p>

        <p>
            <code>top_user</code> must contain the first user in the
            ranking.
        </p>

        <p>
            If no valid transaction is processed,
            <code>top_user</code> must be:
        </p>

        <pre>None</pre>

        <h3>Balance Checks</h3>

        <p>
            A balance equal to <code>0</code> is considered
            non-negative.
        </p>

        <p>
            Therefore:
        </p>

        <ul>
            <li>
                <code>all_balances_non_negative</code> is true when
                every balance is greater than or equal to zero;
            </li>

            <li>
                <code>any_negative_balance</code> is true only when
                at least one balance is strictly less than zero.
            </li>
        </ul>

        <h3>Required Techniques</h3>

        <p>
            Your solution must:
        </p>

        <ul>
            <li>
                make <code>iter_transactions()</code> a generator;
            </li>

            <li>
                read the file progressively;
            </li>

            <li>
                handle malformed data without crashing;
            </li>

            <li>
                handle <code>FileNotFoundError</code>;
            </li>

            <li>
                make <code>build_transaction_report()</code> call
                <code>iter_transactions()</code>;
            </li>

            <li>
                use a set to track processed transaction IDs;
            </li>

            <li>
                use <code>sorted()</code> for the ranking;
            </li>

            <li>
                use <code>all()</code>;
            </li>

            <li>
                use <code>any()</code>.
            </li>
        </ul>

        <h3>Example Result</h3>

        <p>
            For the example file above, the result should be:
        </p>

        <pre>{
    "balances": {
        "alex": 75,
        "sam": 40
    },
    "ranking": [
        "alex",
        "sam"
    ],
    "top_user": "alex",
    "total_deposits": 180,
    "total_withdrawals": 65,
    "processed_transactions": 4,
    "duplicate_transactions": 1,
    "all_balances_non_negative": True,
    "any_negative_balance": False
}</pre>

        <p>
            This is a cumulative challenge.
            Your implementation does not need to match a predefined
            solution, but it must satisfy all required behavior and
            techniques.
        </p>
    `,


    starterCode:
`def iter_transactions(filename):
    pass


def build_transaction_report(filename):
    pass


example_filename = "__example_transactions_021.txt"


with open(
    example_filename,
    "w",
    encoding="utf-8"
) as file:

    file.write(
        """T001,Alex,deposit,100
T002,Sam,withdraw,40
invalid line
T003,Alex,withdraw,25
T004,Sam,deposit,80
T002,Sam,withdraw,40
"""
    )


print(
    build_transaction_report(
        example_filename
    )
)`,


    checker:
`
import ast
import contextlib
import inspect
import io
import os

from types import GeneratorType


# =====================================================
# PARSE USER CODE
# =====================================================

try:

    tree = ast.parse(
        user_code
    )

except SyntaxError as error:

    fail(
        "Your code contains a syntax error: "
        + str(error)
    )

    tree = None


if tree is not None:

    function_nodes = {
        node.name: node
        for node in tree.body
        if isinstance(
            node,
            ast.FunctionDef
        )
    }


    iter_node = function_nodes.get(
        "iter_transactions"
    )

    report_node = function_nodes.get(
        "build_transaction_report"
    )


    # =================================================
    # REQUIRED FUNCTION DEFINITIONS
    # =================================================

    definitions_ok = True


    if iter_node is None:

        fail(
            "You must define a function called "
            "iter_transactions()."
        )

        definitions_ok = False


    if report_node is None:

        fail(
            "You must define a function called "
            "build_transaction_report()."
        )

        definitions_ok = False


    if definitions_ok:

        success(
            "Both required functions were found"
        )


        # =============================================
        # CHECK GENERATOR SYNTAX
        # =============================================

        uses_yield = any(
            isinstance(
                node,
                (
                    ast.Yield,
                    ast.YieldFrom
                )
            )
            for node in ast.walk(
                iter_node
            )
        )


        if not uses_yield:

            fail(
                "iter_transactions() must use yield "
                "and behave as a generator."
            )

        else:

            success(
                "yield detected in iter_transactions()"
            )


        # =============================================
        # CHECK FOR EAGER FILE READING
        # =============================================

        forbidden_file_methods = set()


        for node in ast.walk(
            iter_node
        ):

            if (
                isinstance(
                    node,
                    ast.Call
                )
                and isinstance(
                    node.func,
                    ast.Attribute
                )
                and node.func.attr in {
                    "read",
                    "readlines",
                    "read_text"
                }
            ):

                forbidden_file_methods.add(
                    node.func.attr
                )


        if forbidden_file_methods:

            fail(
                "iter_transactions() must read the file "
                "progressively. Do not use read(), "
                "readlines() or read_text()."
            )

        else:

            success(
                "No eager whole-file read detected"
            )


        # =============================================
        # CHECK THAT REPORT USES GENERATOR FUNCTION
        # =============================================

        report_calls = []


        for node in ast.walk(
            report_node
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
            ):

                report_calls.append(
                    node.func.id
                )


        if (
            "iter_transactions"
            not in report_calls
        ):

            fail(
                "build_transaction_report() must call "
                "iter_transactions()."
            )

        else:

            success(
                "build_transaction_report() uses "
                "iter_transactions()"
            )


        # =============================================
        # CHECK SET USAGE
        # =============================================

        uses_set = any(
            isinstance(
                node,
                ast.Set
            )
            or (
                isinstance(
                    node,
                    ast.Call
                )
                and isinstance(
                    node.func,
                    ast.Name
                )
                and node.func.id == "set"
            )
            for node in ast.walk(
                report_node
            )
        )


        if not uses_set:

            fail(
                "Use a set inside "
                "build_transaction_report() to track "
                "processed transaction IDs."
            )

        else:

            success(
                "Set-based duplicate tracking detected"
            )


        # =============================================
        # CHECK REQUIRED BUILT-INS
        # =============================================

        required_calls = {
            "sorted",
            "all",
            "any"
        }


        missing_calls = (
            required_calls
            - set(
                report_calls
            )
        )


        if missing_calls:

            fail(
                "build_transaction_report() must use: "
                + ", ".join(
                    sorted(
                        missing_calls
                    )
                )
                + "."
            )

        else:

            success(
                "sorted(), all() and any() detected"
            )


        # =============================================
        # LOAD USER CODE
        # =============================================

        namespace = {
            "__name__": "__challenge_checker__"
        }


        runtime_ready = True


        try:

            hidden_output = io.StringIO()

            with contextlib.redirect_stdout(
                hidden_output
            ):

                exec(
                    user_code,
                    namespace
                )


        except Exception as error:

            fail(
                "Error while loading your code: "
                + str(error)
            )

            runtime_ready = False


        if runtime_ready:

            iter_function = namespace.get(
                "iter_transactions"
            )

            report_function = namespace.get(
                "build_transaction_report"
            )


            if not callable(
                iter_function
            ):

                fail(
                    "iter_transactions() must be callable."
                )

                runtime_ready = False


            if not callable(
                report_function
            ):

                fail(
                    "build_transaction_report() must be callable."
                )

                runtime_ready = False


            if runtime_ready:

                success(
                    "Both functions are callable"
                )


        # =============================================
        # RUNTIME TESTS
        # =============================================

        if runtime_ready:

            test_files = []


            def write_test_file(
                filename,
                lines
            ):

                with open(
                    filename,
                    "w",
                    encoding="utf-8"
                ) as file:

                    file.write(
                        chr(10).join(
                            lines
                        )
                    )

                    file.write(
                        chr(10)
                    )


                test_files.append(
                    filename
                )


            # =========================================
            # GENERATOR OBJECT TEST
            # =========================================

            if not inspect.isgeneratorfunction(
                iter_function
            ):

                fail(
                    "iter_transactions() must be a "
                    "generator function."
                )

            else:

                success(
                    "iter_transactions() is a generator function"
                )


            # =========================================
            # PARSING AND VALIDATION
            # =========================================

            parsing_filename = (
                "__challenge021_parsing.txt"
            )


            write_test_file(
                parsing_filename,
                [
                    "  T001 , Alice , DePoSiT , 100  ",
                    "invalid line",
                    " T002 , BOB , withdraw , 25 ",
                    "T003,,deposit,10",
                    "T004,Sam,refund,10",
                    "T005,Sam,deposit,-1",
                    "T006,Sam,deposit,3.5",
                    "T007,Élodie,DEPOSIT,+7",
                    "T008,Too,Many,Fields,10",
                    "T009,Zero,deposit,0"
                ]
            )


            expected_transactions = [
                {
                    "id": "T001",
                    "user": "alice",
                    "type": "deposit",
                    "amount": 100
                },
                {
                    "id": "T002",
                    "user": "bob",
                    "type": "withdraw",
                    "amount": 25
                },
                {
                    "id": "T007",
                    "user": "élodie",
                    "type": "deposit",
                    "amount": 7
                },
                {
                    "id": "T009",
                    "user": "zero",
                    "type": "deposit",
                    "amount": 0
                }
            ]


            try:

                result = iter_function(
                    parsing_filename
                )


                if not isinstance(
                    result,
                    GeneratorType
                ):

                    fail(
                        "iter_transactions() must return "
                        "a generator object."
                    )


                else:

                    obtained_transactions = list(
                        result
                    )


                    if (
                        obtained_transactions
                        != expected_transactions
                    ):

                        fail(
                            "Transaction parsing or validation "
                            "is incorrect.\\n"
                            "Expected: "
                            + str(
                                expected_transactions
                            )
                            + "\\nObtained: "
                            + str(
                                obtained_transactions
                            )
                        )


                    else:

                        success(
                            "Parsing, normalization and "
                            "validation are correct"
                        )


            except Exception as error:

                fail(
                    "iter_transactions() raised an error "
                    "while processing the parsing test: "
                    + str(error)
                )


            # =========================================
            # MISSING FILE TEST
            # =========================================

            missing_filename = (
                "__challenge021_missing_file.txt"
            )


            if os.path.exists(
                missing_filename
            ):

                os.remove(
                    missing_filename
                )


            try:

                missing_result = list(
                    iter_function(
                        missing_filename
                    )
                )


                if missing_result != []:

                    fail(
                        "A missing file should produce "
                        "no transactions."
                    )


                else:

                    success(
                        "Missing files are handled correctly"
                    )


            except FileNotFoundError:

                fail(
                    "iter_transactions() must handle "
                    "FileNotFoundError."
                )


            except Exception as error:

                fail(
                    "Unexpected error while testing a "
                    "missing file: "
                    + str(error)
                )


            # =========================================
            # LAZY FILE CONSUMPTION
            # =========================================

            class TrackingFile:

                def __init__(
                    self,
                    lines
                ):

                    self.lines = lines
                    self.index = 0
                    self.consumed = 0


                def __enter__(
                    self
                ):

                    return self


                def __exit__(
                    self,
                    exc_type,
                    exc_value,
                    traceback
                ):

                    return False


                def __iter__(
                    self
                ):

                    return self


                def __next__(
                    self
                ):

                    if (
                        self.index
                        >= len(
                            self.lines
                        )
                    ):

                        raise StopIteration


                    value = self.lines[
                        self.index
                    ]


                    self.index += 1
                    self.consumed += 1


                    return value


                def close(
                    self
                ):

                    pass


            tracking_file = TrackingFile(
                [
                    "invalid line" + chr(10),

                    "L1,Lazy,deposit,10"
                    + chr(10),

                    "L2,Later,deposit,20"
                    + chr(10),

                    "L3,Last,deposit,30"
                    + chr(10)
                ]
            )


            def fake_open(
                *args,
                **kwargs
            ):

                return tracking_file


            original_open_exists = (
                "open" in namespace
            )


            original_open = namespace.get(
                "open"
            )


            namespace[
                "open"
            ] = fake_open


            try:

                lazy_generator = iter_function(
                    "ignored_filename.txt"
                )


                before_next = (
                    tracking_file.consumed
                )


                first_transaction = next(
                    lazy_generator
                )


                after_next = (
                    tracking_file.consumed
                )


                expected_first = {
                    "id": "L1",
                    "user": "lazy",
                    "type": "deposit",
                    "amount": 10
                }


                if before_next != 0:

                    fail(
                        "The file must not be consumed "
                        "when the generator is only created."
                    )


                elif (
                    first_transaction
                    != expected_first
                ):

                    fail(
                        "The first lazily produced "
                        "transaction is incorrect."
                    )


                elif after_next != 2:

                    fail(
                        "iter_transactions() consumed more "
                        "lines than necessary before its "
                        "first yield."
                    )


                else:

                    success(
                        "File processing is genuinely lazy"
                    )


            except Exception as error:

                fail(
                    "Lazy-processing test failed: "
                    + str(error)
                )


            finally:

                if original_open_exists:

                    namespace[
                        "open"
                    ] = original_open

                else:

                    namespace.pop(
                        "open",
                        None
                    )


            # =========================================
            # REPORT TEST 1 — MAIN EXAMPLE
            # =========================================

            report_filename_1 = (
                "__challenge021_report_1.txt"
            )


            write_test_file(
                report_filename_1,
                [
                    "T001,Alex,deposit,100",
                    "T002,Sam,withdraw,40",
                    "invalid line",
                    "T003,Alex,withdraw,25",
                    "T004,Sam,deposit,80",
                    "T002,Sam,withdraw,40"
                ]
            )


            expected_report_1 = {
                "balances": {
                    "alex": 75,
                    "sam": 40
                },

                "ranking": [
                    "alex",
                    "sam"
                ],

                "top_user": "alex",

                "total_deposits": 180,

                "total_withdrawals": 65,

                "processed_transactions": 4,

                "duplicate_transactions": 1,

                "all_balances_non_negative": True,

                "any_negative_balance": False
            }


            # =========================================
            # REPORT TEST 2 — NORMALIZATION + NEGATIVE
            # =========================================

            report_filename_2 = (
                "__challenge021_report_2.txt"
            )


            write_test_file(
                report_filename_2,
                [
                    " A1 , Alice Smith , DePoSiT , 50 ",
                    "A2,Bob,refund,20",
                    "A3,Bob,withdraw,-5",
                    "A4,Bob,withdraw,abc",
                    "A5,Bob,withdraw,15",
                    "A6,ALICE SMITH,withdraw,10",
                    "A7,,deposit,500"
                ]
            )


            expected_report_2 = {
                "balances": {
                    "alice smith": 40,
                    "bob": -15
                },

                "ranking": [
                    "alice smith",
                    "bob"
                ],

                "top_user": "alice smith",

                "total_deposits": 50,

                "total_withdrawals": 25,

                "processed_transactions": 3,

                "duplicate_transactions": 0,

                "all_balances_non_negative": False,

                "any_negative_balance": True
            }


            # =========================================
            # REPORT TEST 3 — STABLE TIE + DUPLICATE
            # =========================================

            report_filename_3 = (
                "__challenge021_report_3.txt"
            )


            write_test_file(
                report_filename_3,
                [
                    "T1,Zoe,deposit,20",
                    "T2,Adam,deposit,50",
                    "T3,Mia,deposit,50",
                    "T4,Zoe,deposit,30",
                    "T1,Zoe,withdraw,1000"
                ]
            )


            expected_report_3 = {
                "balances": {
                    "zoe": 50,
                    "adam": 50,
                    "mia": 50
                },

                "ranking": [
                    "zoe",
                    "adam",
                    "mia"
                ],

                "top_user": "zoe",

                "total_deposits": 150,

                "total_withdrawals": 0,

                "processed_transactions": 4,

                "duplicate_transactions": 1,

                "all_balances_non_negative": True,

                "any_negative_balance": False
            }


            # =========================================
            # REPORT TEST 4 — NO VALID TRANSACTIONS
            # =========================================

            report_filename_4 = (
                "__challenge021_report_4.txt"
            )


            write_test_file(
                report_filename_4,
                [
                    "invalid",
                    "T1,,deposit,10",
                    "T2,Alex,unknown,10",
                    "T3,Alex,deposit,-1",
                    "T4,Alex,withdraw,nope",
                    "T5,Alex,deposit,1,extra"
                ]
            )


            expected_report_4 = {
                "balances": {},

                "ranking": [],

                "top_user": None,

                "total_deposits": 0,

                "total_withdrawals": 0,

                "processed_transactions": 0,

                "duplicate_transactions": 0,

                "all_balances_non_negative": True,

                "any_negative_balance": False
            }


            # =========================================
            # REPORT TEST 5 — INVALID DUPLICATE
            # =========================================

            report_filename_5 = (
                "__challenge021_report_5.txt"
            )


            write_test_file(
                report_filename_5,
                [
                    "T1,Alex,deposit,10",
                    "T1,Alex,deposit,abc",
                    "T2,Sam,deposit,5"
                ]
            )


            expected_report_5 = {
                "balances": {
                    "alex": 10,
                    "sam": 5
                },

                "ranking": [
                    "alex",
                    "sam"
                ],

                "top_user": "alex",

                "total_deposits": 15,

                "total_withdrawals": 0,

                "processed_transactions": 2,

                "duplicate_transactions": 0,

                "all_balances_non_negative": True,

                "any_negative_balance": False
            }


            # =========================================
            # REPORT TEST 6 — ZERO BALANCE
            # =========================================

            report_filename_6 = (
                "__challenge021_report_6.txt"
            )


            write_test_file(
                report_filename_6,
                [
                    "T1,Alex,deposit,10",
                    "T2,Alex,withdraw,10"
                ]
            )


            expected_report_6 = {
                "balances": {
                    "alex": 0
                },

                "ranking": [
                    "alex"
                ],

                "top_user": "alex",

                "total_deposits": 10,

                "total_withdrawals": 10,

                "processed_transactions": 2,

                "duplicate_transactions": 0,

                "all_balances_non_negative": True,

                "any_negative_balance": False
            }


            # =========================================
            # REPORT TEST 7 — DUPLICATE WITH NEW USER
            # =========================================

            report_filename_7 = (
                "__challenge021_report_7.txt"
            )


            write_test_file(
                report_filename_7,
                [
                    "D1,Alex,deposit,10",
                    "D2,Sam,deposit,5",
                    "D1,Ghost,withdraw,999"
                ]
            )


            expected_report_7 = {
                "balances": {
                    "alex": 10,
                    "sam": 5
                },

                "ranking": [
                    "alex",
                    "sam"
                ],

                "top_user": "alex",

                "total_deposits": 15,

                "total_withdrawals": 0,

                "processed_transactions": 2,

                "duplicate_transactions": 1,

                "all_balances_non_negative": True,

                "any_negative_balance": False
            }


            # =========================================
            # RUN REPORT TESTS
            # =========================================

            report_tests = [
                (
                    report_filename_1,
                    expected_report_1
                ),
                (
                    report_filename_2,
                    expected_report_2
                ),
                (
                    report_filename_3,
                    expected_report_3
                ),
                (
                    report_filename_4,
                    expected_report_4
                ),
                (
                    report_filename_5,
                    expected_report_5
                ),
                (
                    report_filename_6,
                    expected_report_6
                ),
                (
                    report_filename_7,
                    expected_report_7
                )
            ]


            reports_ok = True


            for (
                filename,
                expected
            ) in report_tests:

                try:

                    obtained = report_function(
                        filename
                    )


                except Exception as error:

                    fail(
                        "build_transaction_report() "
                        "raised an error: "
                        + str(error)
                    )

                    reports_ok = False

                    break


                if not isinstance(
                    obtained,
                    dict
                ):

                    fail(
                        "build_transaction_report() "
                        "must return a dictionary."
                    )

                    reports_ok = False

                    break


                expected_keys = set(
                    expected.keys()
                )


                obtained_keys = set(
                    obtained.keys()
                )


                if (
                    obtained_keys
                    != expected_keys
                ):

                    fail(
                        "The report must contain exactly "
                        "the required keys.\\n"
                        "Expected keys: "
                        + str(
                            list(
                                expected.keys()
                            )
                        )
                        + "\\nObtained keys: "
                        + str(
                            list(
                                obtained.keys()
                            )
                        )
                    )

                    reports_ok = False

                    break


                if obtained != expected:

                    fail(
                        "A transaction report is incorrect.\\n"
                        "Expected: "
                        + str(
                            expected
                        )
                        + "\\nObtained: "
                        + str(
                            obtained
                        )
                    )

                    reports_ok = False

                    break


            if reports_ok:

                success(
                    "All transaction report tests passed"
                )


            # =========================================
            # MISSING FILE REPORT
            # =========================================

            empty_report = {
                "balances": {},

                "ranking": [],

                "top_user": None,

                "total_deposits": 0,

                "total_withdrawals": 0,

                "processed_transactions": 0,

                "duplicate_transactions": 0,

                "all_balances_non_negative": True,

                "any_negative_balance": False
            }


            try:

                missing_report = (
                    report_function(
                        missing_filename
                    )
                )


                if (
                    missing_report
                    != empty_report
                ):

                    fail(
                        "build_transaction_report() must "
                        "return the empty report when the "
                        "file does not exist."
                    )


                else:

                    success(
                        "Missing-file report is correct"
                    )


            except Exception as error:

                fail(
                    "build_transaction_report() failed "
                    "for a missing file: "
                    + str(error)
                )


            # =========================================
            # CLEANUP
            # =========================================

            for filename in test_files:

                try:

                    if os.path.exists(
                        filename
                    ):

                        os.remove(
                            filename
                        )


                except Exception:

                    pass
`

},








/* =====================================================
   CHALLENGE 022
   Inventory & Order Fulfillment Engine
===================================================== */

22: {

    chapter: 11,

    number: "022",

    difficulty: "Hard",

    layout: "macro",

    title:
        "Inventory & Order Fulfillment Engine",

    description: `
        <p>
            Build a stateful inventory and order-processing system
            using a Python class.
        </p>

        <p>
            You must implement:
        </p>

        <pre>class Inventory:

    def __init__(self, products):
        pass

    def process_orders(self, orders):
        pass

    def iter_available_products(self):
        pass</pre>

        <h3>Products</h3>

        <p>
            The constructor receives a list of product dictionaries:
        </p>

        <pre>[
    {
        "sku": "P100",
        "name": "Keyboard",
        "price": 50.0,
        "stock": 4
    },
    {
        "sku": "P200",
        "name": "Mouse",
        "price": 25.0,
        "stock": 3
    }
]</pre>

        <p>
            You may assume that product dictionaries contain all the
            required keys and that product SKUs are unique.
        </p>

        <p>
            You may also assume that every product has a
            <strong>non-negative integer stock</strong>.
        </p>

        <h3>Internal Inventory</h3>

        <p>
            Store the internal inventory in an attribute called
            <code>self.products</code>.
        </p>

        <p>
            <code>self.products</code> must be a
            <strong>dictionary keyed by SKU</strong>.
        </p>

        <p>
            For example:
        </p>

        <pre>{
    "P100": {
        "sku": "P100",
        "name": "Keyboard",
        "price": 50.0,
        "stock": 4
    },

    "P200": {
        "sku": "P200",
        "name": "Mouse",
        "price": 25.0,
        "stock": 3
    }
}</pre>

        <p>
            The internal product dictionaries must be independent
            from the dictionaries received by the constructor.
        </p>

        <p>
            Changing the inventory must therefore
            <strong>not modify the original products input</strong>.
        </p>

        <p>
            Do not use <code>copy.deepcopy()</code>.
        </p>

        <h3>Orders</h3>

        <p>
            <code>process_orders()</code> receives a list of orders:
        </p>

        <pre>[
    {
        "id": "O1",
        "items": [
            {
                "sku": "P100",
                "quantity": 2
            },
            {
                "sku": "P200",
                "quantity": 1
            }
        ]
    }
]</pre>

        <p>
            You may assume that every order contains an
            <code>"id"</code> and an <code>"items"</code> list,
            and that every item contains
            <code>"sku"</code> and <code>"quantity"</code>.
        </p>

        <p>
            An order whose <code>"items"</code> list is empty is
            valid. It is accepted without changing stock or revenue.
        </p>

        <p>
            <code>process_orders()</code> must not modify the
            <code>orders</code> input, the order dictionaries or
            their nested item dictionaries.
        </p>

        <h3>Duplicate Orders</h3>

        <p>
            Use a <strong>set</strong> to keep track of order IDs
            inside each call to <code>process_orders()</code>.
        </p>

        <p>
            The first occurrence of an order ID is evaluated normally,
            whether it is ultimately accepted or rejected.
        </p>

        <p>
            Every later occurrence of the same order ID in that batch
            must be ignored immediately and counted in:
        </p>

        <pre>"duplicate_orders"</pre>

        <p>
            A duplicate order must not be validated again and must
            never modify stock, revenue, sold quantities,
            accepted orders or rejected orders.
        </p>

        <p>
            Duplicate orders must also be ignored when calculating
            <code>all_orders_fulfilled</code>.
        </p>

        <p>
            Duplicate tracking applies only to the current call to
            <code>process_orders()</code>.
        </p>

        <p>
            An order ID used in an earlier call may therefore be used
            again in a later call.
        </p>

        <h3>Item Validation</h3>

        <p>
            An item can be fulfilled only if:
        </p>

        <ul>
            <li>
                its SKU exists in the inventory;
            </li>

            <li>
                its quantity has type <code>int</code>;
            </li>

            <li>
                boolean values such as <code>True</code> and
                <code>False</code> are not valid quantities;
            </li>

            <li>
                its quantity is greater than zero;
            </li>

            <li>
                enough stock is available.
            </li>
        </ul>

        <h3>Repeated SKUs Inside an Order</h3>

        <p>
            The same SKU may appear multiple times inside one order.
        </p>

        <p>
            You must first combine those quantities before deciding
            whether the order can be fulfilled.
        </p>

        <p>
            For example:
        </p>

        <pre>[
    {
        "sku": "P100",
        "quantity": 2
    },
    {
        "sku": "P100",
        "quantity": 3
    }
]</pre>

        <p>
            requires a total quantity of:
        </p>

        <pre>5</pre>

        <p>
            If only four units are available, the entire order must
            be rejected.
        </p>

        <h3>Atomic Order Processing</h3>

        <p>
            An order must be accepted only if
            <strong>every requested item can be fulfilled</strong>.
        </p>

        <p>
            If even one item cannot be fulfilled, the whole order is
            rejected and the inventory must remain exactly as it was
            before that order.
        </p>

        <p>
            In other words:
        </p>

        <pre>validate the complete order
        ↓
decide whether it can be fulfilled
        ↓
only then modify stock</pre>

        <h3>Persistent Inventory State</h3>

        <p>
            The <code>Inventory</code> object is stateful.
        </p>

        <p>
            If <code>process_orders()</code> is called more than once
            on the same object, every new call must continue from the
            stock remaining after previous calls.
        </p>

        <p>
            Do not restore the original stock at the beginning of a
            new call.
        </p>

        <p>
            The report returned by each call describes only the orders
            passed to that specific call, while
            <code>remaining_stock</code> reflects the current inventory
            after that batch has been processed.
        </p>

        <h3>Revenue</h3>

        <p>
            Only accepted orders contribute to revenue.
        </p>

        <p>
            For every fulfilled item:
        </p>

        <pre>price * quantity</pre>

        <p>
            must be added to the revenue for the current call.
        </p>

        <h3>Sold Quantities</h3>

        <p>
            Track how many units of every product were actually sold
            during the current call to
            <code>process_orders()</code>.
        </p>

        <p>
            The result must contain every product from the inventory,
            including products with zero sales in that batch.
        </p>

        <h3>Ranking</h3>

        <p>
            Create a ranking containing all product SKUs ordered by
            quantity sold during the current call, from highest to
            lowest.
        </p>

        <p>
            Use <code>sorted()</code>.
        </p>

        <p>
            If two products have the same sold quantity, preserve
            their relative order from the original inventory.
        </p>

        <p>
            <code>top_product</code> is the first SKU in that ranking.
        </p>

        <p>
            If the inventory is empty:
        </p>

        <pre>"top_product": None</pre>

        <h3>all_orders_fulfilled</h3>

        <p>
            Use <code>all()</code>.
        </p>

        <p>
            This value must be true only if every
            <strong>non-duplicate</strong> order evaluated during the
            current call was accepted.
        </p>

        <p>
            Duplicate orders are ignored for this calculation.
        </p>

        <p>
            If no orders are evaluated, the result must be:
        </p>

        <pre>True</pre>

        <h3>any_out_of_stock</h3>

        <p>
            Use <code>any()</code>.
        </p>

        <p>
            This value must be true when at least one product has no
            stock remaining after the current batch has been
            processed.
        </p>

        <h3>Required Report</h3>

        <p>
            <code>process_orders()</code> must return a dictionary
            containing exactly these keys:
        </p>

        <pre>{
    "accepted_orders": ...,
    "rejected_orders": ...,
    "duplicate_orders": ...,
    "revenue": ...,
    "remaining_stock": ...,
    "sold_quantities": ...,
    "top_product": ...,
    "ranking": ...,
    "all_orders_fulfilled": ...,
    "any_out_of_stock": ...
}</pre>

        <p>
            Accepted and rejected order IDs must remain in the order
            in which those orders were evaluated.
        </p>

        <h3>iter_available_products()</h3>

        <p>
            This method must be a
            <strong>generator function</strong>.
        </p>

        <p>
            It must always inspect the
            <strong>current inventory state</strong>.
        </p>

        <p>
            Yield only products whose current stock is greater than
            zero.
        </p>

        <p>
            Products must be yielded in their original inventory
            order, not alphabetically by SKU.
        </p>

        <p>
            Each yielded dictionary must be an independent copy of
            the internal product dictionary.
        </p>

        <p>
            Therefore, modifying a dictionary returned by the
            generator must not modify the inventory itself.
        </p>

        <h3>Required Techniques</h3>

        <ul>
            <li>
                use a class;
            </li>

            <li>
                store products in <code>self.products</code>;
            </li>

            <li>
                make <code>self.products</code> a dictionary keyed by
                SKU;
            </li>

            <li>
                keep internal product dictionaries independent from
                the constructor input;
            </li>

            <li>
                do not use <code>deepcopy()</code>;
            </li>

            <li>
                do not modify the orders input;
            </li>

            <li>
                use a set for duplicate order IDs;
            </li>

            <li>
                correctly aggregate repeated SKUs inside an order;
            </li>

            <li>
                process orders atomically;
            </li>

            <li>
                preserve inventory state across multiple calls;
            </li>

            <li>
                use <code>sorted()</code>;
            </li>

            <li>
                use <code>all()</code>;
            </li>

            <li>
                use <code>any()</code>;
            </li>

            <li>
                make <code>iter_available_products()</code> a
                generator.
            </li>
        </ul>
    `,

    starterCode:
`class Inventory:

    def __init__(self, products):
        pass


    def process_orders(self, orders):
        pass


    def iter_available_products(self):
        pass



products = [
    {
        "sku": "P100",
        "name": "Keyboard",
        "price": 50.0,
        "stock": 4
    },
    {
        "sku": "P200",
        "name": "Mouse",
        "price": 25.0,
        "stock": 3
    },
    {
        "sku": "P300",
        "name": "Monitor",
        "price": 200.0,
        "stock": 1
    }
]


orders = [
    {
        "id": "O1",
        "items": [
            {
                "sku": "P100",
                "quantity": 2
            },
            {
                "sku": "P200",
                "quantity": 1
            }
        ]
    },
    {
        "id": "O2",
        "items": [
            {
                "sku": "P100",
                "quantity": 3
            }
        ]
    },
    {
        "id": "O3",
        "items": [
            {
                "sku": "P300",
                "quantity": 1
            },
            {
                "sku": "P200",
                "quantity": 2
            }
        ]
    },
    {
        "id": "O1",
        "items": [
            {
                "sku": "P100",
                "quantity": 1
            }
        ]
    }
]


inventory = Inventory(products)

print(
    inventory.process_orders(
        orders
    )
)

print(
    list(
        inventory.iter_available_products()
    )
)`,

    checker:
`
import ast
import contextlib
import copy
import inspect
import io

from types import GeneratorType


# =====================================================
# PARSE USER CODE
# =====================================================

try:

    tree = ast.parse(
        user_code
    )

except SyntaxError as error:

    fail(
        "Your code contains a syntax error: "
        + str(error)
    )

    tree = None


if tree is not None:

    # =================================================
    # FIND INVENTORY CLASS
    # =================================================

    inventory_node = None


    for node in tree.body:

        if (
            isinstance(
                node,
                ast.ClassDef
            )
            and node.name == "Inventory"
        ):

            inventory_node = node
            break


    if inventory_node is None:

        fail(
            "You must define a class called Inventory."
        )


    else:

        success(
            "Inventory class found"
        )


        method_nodes = {
            node.name: node
            for node in inventory_node.body
            if isinstance(
                node,
                ast.FunctionDef
            )
        }


        init_node = method_nodes.get(
            "__init__"
        )

        process_node = method_nodes.get(
            "process_orders"
        )

        generator_node = method_nodes.get(
            "iter_available_products"
        )


        methods_ok = True


        if init_node is None:

            fail(
                "Inventory must define __init__()."
            )

            methods_ok = False


        if process_node is None:

            fail(
                "Inventory must define process_orders()."
            )

            methods_ok = False


        if generator_node is None:

            fail(
                "Inventory must define "
                "iter_available_products()."
            )

            methods_ok = False


        if methods_ok:

            success(
                "All required methods were found"
            )


            # =========================================
            # GENERATOR SYNTAX
            # =========================================

            uses_yield = any(

                isinstance(
                    node,
                    (
                        ast.Yield,
                        ast.YieldFrom
                    )
                )

                for node in ast.walk(
                    generator_node
                )
            )


            if not uses_yield:

                fail(
                    "iter_available_products() must "
                    "use yield."
                )

            else:

                success(
                    "yield detected in "
                    "iter_available_products()"
                )


            # =========================================
            # REQUIRED BUILT-INS
            # =========================================

            direct_calls = []


            for node in ast.walk(
                inventory_node
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
                ):

                    direct_calls.append(
                        node.func.id
                    )


            required_calls = {
                "sorted",
                "all",
                "any"
            }


            missing_calls = (
                required_calls
                - set(
                    direct_calls
                )
            )


            if missing_calls:

                fail(
                    "Your Inventory class must use: "
                    + ", ".join(
                        sorted(
                            missing_calls
                        )
                    )
                    + "."
                )

            else:

                success(
                    "sorted(), all() and any() detected"
                )


            # =========================================
            # SET USAGE
            # =========================================

            uses_set = any(

                isinstance(
                    node,
                    ast.Set
                )

                or (

                    isinstance(
                        node,
                        ast.Call
                    )

                    and isinstance(
                        node.func,
                        ast.Name
                    )

                    and node.func.id == "set"

                )

                for node in ast.walk(
                    inventory_node
                )
            )


            if not uses_set:

                fail(
                    "Use a set inside the Inventory class "
                    "to track duplicate order IDs."
                )

            else:

                success(
                    "Set usage detected"
                )


            # =========================================
            # DEEPCOPY MUST NOT BE USED
            # =========================================

            uses_deepcopy = False


            for node in ast.walk(
                inventory_node
            ):

                if not isinstance(
                    node,
                    ast.Call
                ):

                    continue


                if (
                    isinstance(
                        node.func,
                        ast.Name
                    )
                    and node.func.id == "deepcopy"
                ):

                    uses_deepcopy = True


                if (
                    isinstance(
                        node.func,
                        ast.Attribute
                    )
                    and node.func.attr == "deepcopy"
                ):

                    uses_deepcopy = True


            if uses_deepcopy:

                fail(
                    "Do not use deepcopy() for this "
                    "challenge."
                )

            else:

                success(
                    "No deepcopy() usage detected"
                )


        # =============================================
        # LOAD USER CODE
        # =============================================

        namespace = {
            "__name__": "__challenge_checker__"
        }


        runtime_ready = True


        try:

            hidden_output = io.StringIO()


            with contextlib.redirect_stdout(
                hidden_output
            ):

                exec(
                    user_code,
                    namespace
                )


        except Exception as error:

            fail(
                "Error while loading your code: "
                + str(error)
            )

            runtime_ready = False


        if runtime_ready:

            Inventory = namespace.get(
                "Inventory"
            )


            if not inspect.isclass(
                Inventory
            ):

                fail(
                    "Inventory must be a class."
                )

                runtime_ready = False


            else:

                success(
                    "Inventory is a class"
                )


        # =============================================
        # RUNTIME TESTS
        # =============================================

        if runtime_ready:

            # =========================================
            # CONSTRUCTOR / COPY TEST
            # =========================================

            source_products = [
                {
                    "sku": "C1",
                    "name": "Copy One",
                    "price": 10.0,
                    "stock": 2
                },
                {
                    "sku": "C2",
                    "name": "Copy Two",
                    "price": 20.0,
                    "stock": 0
                }
            ]


            constructor_ok = True


            try:

                inventory = Inventory(
                    source_products
                )


            except Exception as error:

                fail(
                    "Inventory() raised an error: "
                    + str(error)
                )

                constructor_ok = False


            if constructor_ok:

                if not hasattr(
                    inventory,
                    "products"
                ):

                    fail(
                        "Store the internal inventory "
                        "in self.products."
                    )

                    constructor_ok = False


            if constructor_ok:

                if not isinstance(
                    inventory.products,
                    dict
                ):

                    fail(
                        "self.products must be a dictionary "
                        "keyed by SKU."
                    )

                    constructor_ok = False


            # Only the SKU mapping is required here.
            # Internal dictionary ordering is deliberately
            # NOT enforced by the checker.

            if constructor_ok:

                expected_keys = {
                    "C1",
                    "C2"
                }


                obtained_keys = set(
                    inventory.products.keys()
                )


                if (
                    obtained_keys
                    != expected_keys
                ):

                    fail(
                        "self.products must contain exactly "
                        "the product SKUs as dictionary keys."
                    )

                    constructor_ok = False


            if constructor_ok:

                try:

                    source_products[0][
                        "stock"
                    ] = 999


                    internal_stock = (
                        inventory.products[
                            "C1"
                        ][
                            "stock"
                        ]
                    )


                    if internal_stock != 2:

                        fail(
                            "Internal product dictionaries "
                            "must be independent from the "
                            "constructor input."
                        )

                        constructor_ok = False


                except Exception as error:

                    fail(
                        "Could not verify independent "
                        "product dictionaries: "
                        + str(error)
                    )

                    constructor_ok = False


            if constructor_ok:

                if (
                    inventory.products[
                        "C1"
                    ]
                    is source_products[0]
                ):

                    fail(
                        "Do not store the original product "
                        "dictionary objects directly."
                    )

                    constructor_ok = False


            if constructor_ok:

                success(
                    "Internal inventory structure and "
                    "copying are correct"
                )


            # =========================================
            # GENERATOR TEST
            # NON-ALPHABETICAL INVENTORY ORDER
            # =========================================

            generator_products = [
                {
                    "sku": "Z9",
                    "name": "First",
                    "price": 10.0,
                    "stock": 2
                },
                {
                    "sku": "A1",
                    "name": "Empty",
                    "price": 20.0,
                    "stock": 0
                },
                {
                    "sku": "M5",
                    "name": "Third",
                    "price": 30.0,
                    "stock": 1
                }
            ]


            generator_ok = True


            try:

                generator_inventory = Inventory(
                    generator_products
                )


                generator_method = (
                    generator_inventory
                    .iter_available_products
                )


                if not inspect.isgeneratorfunction(
                    generator_method
                ):

                    fail(
                        "iter_available_products() must "
                        "be a generator function."
                    )

                    generator_ok = False


                else:

                    produced = generator_method()


                    if not isinstance(
                        produced,
                        GeneratorType
                    ):

                        fail(
                            "iter_available_products() must "
                            "return a generator object."
                        )

                        generator_ok = False


                    else:

                        available_products = list(
                            produced
                        )


            except Exception as error:

                fail(
                    "iter_available_products() raised "
                    "an error: "
                    + str(error)
                )

                generator_ok = False


            if generator_ok:

                expected_available = [
                    {
                        "sku": "Z9",
                        "name": "First",
                        "price": 10.0,
                        "stock": 2
                    },
                    {
                        "sku": "M5",
                        "name": "Third",
                        "price": 30.0,
                        "stock": 1
                    }
                ]


                if (
                    available_products
                    != expected_available
                ):

                    fail(
                        "iter_available_products() returned "
                        "the wrong products or order.\\n"
                        "Expected: "
                        + str(
                            expected_available
                        )
                        + "\\nObtained: "
                        + str(
                            available_products
                        )
                    )

                    generator_ok = False


            if generator_ok:

                available_products[0][
                    "stock"
                ] = 999


                if (
                    generator_inventory.products[
                        "Z9"
                    ][
                        "stock"
                    ]
                    != 2
                ):

                    fail(
                        "Products yielded by "
                        "iter_available_products() must "
                        "be independent copies."
                    )

                    generator_ok = False


            if generator_ok:

                success(
                    "Available-products generator is correct"
                )


            # =========================================
            # REPORT TEST HELPER
            # =========================================

            def run_report_test(
                products,
                orders,
                expected,
                label
            ):

                products_snapshot = copy.deepcopy(
                    products
                )

                orders_snapshot = copy.deepcopy(
                    orders
                )


                try:

                    test_inventory = Inventory(
                        products
                    )


                    result = (
                        test_inventory
                        .process_orders(
                            orders
                        )
                    )


                except Exception as error:

                    fail(
                        label
                        + " raised an error: "
                        + str(error)
                    )

                    return False


                if not isinstance(
                    result,
                    dict
                ):

                    fail(
                        label
                        + ": process_orders() must "
                        "return a dictionary."
                    )

                    return False


                expected_keys = set(
                    expected.keys()
                )


                obtained_keys = set(
                    result.keys()
                )


                if (
                    obtained_keys
                    != expected_keys
                ):

                    fail(
                        label
                        + ": the report must contain "
                        "exactly the required keys.\\n"
                        "Expected keys: "
                        + str(
                            list(
                                expected.keys()
                            )
                        )
                        + "\\nObtained keys: "
                        + str(
                            list(
                                result.keys()
                            )
                        )
                    )

                    return False


                if result != expected:

                    fail(
                        label
                        + " produced an incorrect report.\\n"
                        "Expected: "
                        + str(
                            expected
                        )
                        + "\\nObtained: "
                        + str(
                            result
                        )
                    )

                    return False


                if (
                    products
                    != products_snapshot
                ):

                    fail(
                        label
                        + ": processing orders must not "
                        "modify the original products input."
                    )

                    return False


                if (
                    orders
                    != orders_snapshot
                ):

                    fail(
                        label
                        + ": process_orders() must not "
                        "modify the orders input or its "
                        "nested item dictionaries."
                    )

                    return False


                try:

                    internal_stock = {
                        sku: product[
                            "stock"
                        ]
                        for (
                            sku,
                            product
                        ) in (
                            test_inventory
                            .products
                            .items()
                        )
                    }


                except Exception as error:

                    fail(
                        label
                        + ": could not inspect the "
                        "internal inventory state: "
                        + str(error)
                    )

                    return False


                if (
                    internal_stock
                    != expected[
                        "remaining_stock"
                    ]
                ):

                    fail(
                        label
                        + ": the returned remaining stock "
                        "does not match the actual "
                        "Inventory state."
                    )

                    return False


                return True


            # =========================================
            # REPORT TEST 1
            # ATOMICITY + DUPLICATES + REPEATED SKU
            # =========================================

            products_1 = [
                {
                    "sku": "Z9",
                    "name": "Zenith",
                    "price": 30.0,
                    "stock": 4
                },
                {
                    "sku": "A1",
                    "name": "Alpha",
                    "price": 20.0,
                    "stock": 3
                },
                {
                    "sku": "M5",
                    "name": "Metro",
                    "price": 50.0,
                    "stock": 1
                },
                {
                    "sku": "K2",
                    "name": "Kappa",
                    "price": 10.0,
                    "stock": 2
                }
            ]


            orders_1 = [
                {
                    "id": "O1",
                    "items": [
                        {
                            "sku": "Z9",
                            "quantity": 2
                        },
                        {
                            "sku": "A1",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "id": "O2",
                    "items": [
                        {
                            "sku": "Z9",
                            "quantity": 2
                        },
                        {
                            "sku": "Z9",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "id": "O3",
                    "items": [
                        {
                            "sku": "M5",
                            "quantity": 1
                        },
                        {
                            "sku": "K2",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "id": "O1",
                    "items": [
                        {
                            "sku": "A1",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "id": "O4",
                    "items": [
                        {
                            "sku": "A1",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "id": "O5",
                    "items": [
                        {
                            "sku": "Z9",
                            "quantity": 1
                        },
                        {
                            "sku": "X404",
                            "quantity": 1
                        }
                    ]
                }
            ]


            expected_1 = {
                "accepted_orders": [
                    "O1",
                    "O3",
                    "O4"
                ],
                "rejected_orders": [
                    "O2",
                    "O5"
                ],
                "duplicate_orders": 1,
                "revenue": 190.0,
                "remaining_stock": {
                    "Z9": 2,
                    "A1": 0,
                    "M5": 0,
                    "K2": 0
                },
                "sold_quantities": {
                    "Z9": 2,
                    "A1": 3,
                    "M5": 1,
                    "K2": 2
                },
                "top_product": "A1",
                "ranking": [
                    "A1",
                    "Z9",
                    "K2",
                    "M5"
                ],
                "all_orders_fulfilled": False,
                "any_out_of_stock": True
            }


            # =========================================
            # REPORT TEST 2
            # REPEATED SKU CAN BE VALID
            # =========================================

            products_2 = [
                {
                    "sku": "P1",
                    "name": "Product One",
                    "price": 12.5,
                    "stock": 5
                },
                {
                    "sku": "P2",
                    "name": "Product Two",
                    "price": 5.0,
                    "stock": 2
                }
            ]


            orders_2 = [
                {
                    "id": "R1",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": 2
                        },
                        {
                            "sku": "P1",
                            "quantity": 3
                        }
                    ]
                },
                {
                    "id": "R2",
                    "items": [
                        {
                            "sku": "P2",
                            "quantity": 1
                        }
                    ]
                }
            ]


            expected_2 = {
                "accepted_orders": [
                    "R1",
                    "R2"
                ],
                "rejected_orders": [],
                "duplicate_orders": 0,
                "revenue": 67.5,
                "remaining_stock": {
                    "P1": 0,
                    "P2": 1
                },
                "sold_quantities": {
                    "P1": 5,
                    "P2": 1
                },
                "top_product": "P1",
                "ranking": [
                    "P1",
                    "P2"
                ],
                "all_orders_fulfilled": True,
                "any_out_of_stock": True
            }


            # =========================================
            # REPORT TEST 3
            # STABLE RANKING TIES
            # =========================================

            products_3 = [
                {
                    "sku": "ZETA",
                    "name": "Zeta",
                    "price": 10.0,
                    "stock": 2
                },
                {
                    "sku": "ALPHA",
                    "name": "Alpha",
                    "price": 10.0,
                    "stock": 2
                },
                {
                    "sku": "MIKE",
                    "name": "Mike",
                    "price": 10.0,
                    "stock": 2
                }
            ]


            orders_3 = [
                {
                    "id": "T1",
                    "items": [
                        {
                            "sku": "ALPHA",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "id": "T2",
                    "items": [
                        {
                            "sku": "MIKE",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "id": "T3",
                    "items": [
                        {
                            "sku": "ZETA",
                            "quantity": 1
                        }
                    ]
                }
            ]


            expected_3 = {
                "accepted_orders": [
                    "T1",
                    "T2",
                    "T3"
                ],
                "rejected_orders": [],
                "duplicate_orders": 0,
                "revenue": 30.0,
                "remaining_stock": {
                    "ZETA": 1,
                    "ALPHA": 1,
                    "MIKE": 1
                },
                "sold_quantities": {
                    "ZETA": 1,
                    "ALPHA": 1,
                    "MIKE": 1
                },
                "top_product": "ZETA",
                "ranking": [
                    "ZETA",
                    "ALPHA",
                    "MIKE"
                ],
                "all_orders_fulfilled": True,
                "any_out_of_stock": False
            }


            # =========================================
            # REPORT TEST 4
            # INVALID QUANTITIES + ATOMICITY
            # =========================================

            products_4 = [
                {
                    "sku": "P1",
                    "name": "One",
                    "price": 10.0,
                    "stock": 3
                },
                {
                    "sku": "P2",
                    "name": "Two",
                    "price": 20.0,
                    "stock": 3
                }
            ]


            orders_4 = [
                {
                    "id": "I1",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": 0
                        }
                    ]
                },
                {
                    "id": "I2",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": -1
                        }
                    ]
                },
                {
                    "id": "I3",
                    "items": [
                        {
                            "sku": "UNKNOWN",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "id": "I4",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": 4
                        }
                    ]
                },
                {
                    "id": "I5",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": 2
                        },
                        {
                            "sku": "P2",
                            "quantity": 4
                        }
                    ]
                },
                {
                    "id": "I6",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "id": "I7",
                    "items": [
                        {
                            "sku": "P2",
                            "quantity": 1.5
                        }
                    ]
                },
                {
                    "id": "I8",
                    "items": [
                        {
                            "sku": "P2",
                            "quantity": True
                        }
                    ]
                },
                {
                    "id": "I9",
                    "items": [
                        {
                            "sku": "P2",
                            "quantity": False
                        }
                    ]
                }
            ]


            expected_4 = {
                "accepted_orders": [
                    "I6"
                ],
                "rejected_orders": [
                    "I1",
                    "I2",
                    "I3",
                    "I4",
                    "I5",
                    "I7",
                    "I8",
                    "I9"
                ],
                "duplicate_orders": 0,
                "revenue": 20.0,
                "remaining_stock": {
                    "P1": 1,
                    "P2": 3
                },
                "sold_quantities": {
                    "P1": 2,
                    "P2": 0
                },
                "top_product": "P1",
                "ranking": [
                    "P1",
                    "P2"
                ],
                "all_orders_fulfilled": False,
                "any_out_of_stock": False
            }


            # =========================================
            # REPORT TEST 5
            # DUPLICATE AFTER REJECTED FIRST ORDER
            # =========================================

            products_5 = [
                {
                    "sku": "P1",
                    "name": "Single",
                    "price": 10.0,
                    "stock": 1
                }
            ]


            orders_5 = [
                {
                    "id": "D1",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "id": "D1",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": 1
                        }
                    ]
                }
            ]


            expected_5 = {
                "accepted_orders": [],
                "rejected_orders": [
                    "D1"
                ],
                "duplicate_orders": 1,
                "revenue": 0,
                "remaining_stock": {
                    "P1": 1
                },
                "sold_quantities": {
                    "P1": 0
                },
                "top_product": "P1",
                "ranking": [
                    "P1"
                ],
                "all_orders_fulfilled": False,
                "any_out_of_stock": False
            }


            # =========================================
            # REPORT TEST 6
            # EMPTY ORDER BATCH
            # =========================================

            products_6 = [
                {
                    "sku": "P1",
                    "name": "Empty Stock",
                    "price": 10.0,
                    "stock": 0
                },
                {
                    "sku": "P2",
                    "name": "Available",
                    "price": 20.0,
                    "stock": 2
                }
            ]


            orders_6 = []


            expected_6 = {
                "accepted_orders": [],
                "rejected_orders": [],
                "duplicate_orders": 0,
                "revenue": 0,
                "remaining_stock": {
                    "P1": 0,
                    "P2": 2
                },
                "sold_quantities": {
                    "P1": 0,
                    "P2": 0
                },
                "top_product": "P1",
                "ranking": [
                    "P1",
                    "P2"
                ],
                "all_orders_fulfilled": True,
                "any_out_of_stock": True
            }


            # =========================================
            # REPORT TEST 7
            # EMPTY INVENTORY
            # =========================================

            products_7 = []

            orders_7 = []


            expected_7 = {
                "accepted_orders": [],
                "rejected_orders": [],
                "duplicate_orders": 0,
                "revenue": 0,
                "remaining_stock": {},
                "sold_quantities": {},
                "top_product": None,
                "ranking": [],
                "all_orders_fulfilled": True,
                "any_out_of_stock": False
            }


            # =========================================
            # REPORT TEST 8
            # DUPLICATE BEFORE VALIDATION
            # =========================================

            products_8 = [
                {
                    "sku": "P1",
                    "name": "Duplicate Test",
                    "price": 10.0,
                    "stock": 2
                }
            ]


            orders_8 = [
                {
                    "id": "DUP1",
                    "items": [
                        {
                            "sku": "P1",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "id": "DUP1",
                    "items": [
                        {
                            "sku": "UNKNOWN",
                            "quantity": True
                        }
                    ]
                }
            ]


            expected_8 = {
                "accepted_orders": [
                    "DUP1"
                ],
                "rejected_orders": [],
                "duplicate_orders": 1,
                "revenue": 10.0,
                "remaining_stock": {
                    "P1": 1
                },
                "sold_quantities": {
                    "P1": 1
                },
                "top_product": "P1",
                "ranking": [
                    "P1"
                ],
                "all_orders_fulfilled": True,
                "any_out_of_stock": False
            }


            # =========================================
            # REPORT TEST 9
            # EMPTY ORDER IS VALID
            # =========================================

            products_9 = [
                {
                    "sku": "P1",
                    "name": "Empty Order Test",
                    "price": 10.0,
                    "stock": 2
                }
            ]


            orders_9 = [
                {
                    "id": "EMPTY1",
                    "items": []
                }
            ]


            expected_9 = {
                "accepted_orders": [
                    "EMPTY1"
                ],
                "rejected_orders": [],
                "duplicate_orders": 0,
                "revenue": 0,
                "remaining_stock": {
                    "P1": 2
                },
                "sold_quantities": {
                    "P1": 0
                },
                "top_product": "P1",
                "ranking": [
                    "P1"
                ],
                "all_orders_fulfilled": True,
                "any_out_of_stock": False
            }


            # =========================================
            # RUN STANDARD REPORT TESTS
            # =========================================

            report_tests = [
                (
                    products_1,
                    orders_1,
                    expected_1,
                    "Main fulfillment test"
                ),
                (
                    products_2,
                    orders_2,
                    expected_2,
                    "Repeated-SKU acceptance test"
                ),
                (
                    products_3,
                    orders_3,
                    expected_3,
                    "Stable-ranking test"
                ),
                (
                    products_4,
                    orders_4,
                    expected_4,
                    "Validation and atomicity test"
                ),
                (
                    products_5,
                    orders_5,
                    expected_5,
                    "Rejected-order duplicate test"
                ),
                (
                    products_6,
                    orders_6,
                    expected_6,
                    "Empty-order-batch test"
                ),
                (
                    products_7,
                    orders_7,
                    expected_7,
                    "Empty-inventory test"
                ),
                (
                    products_8,
                    orders_8,
                    expected_8,
                    "Duplicate-before-validation test"
                ),
                (
                    products_9,
                    orders_9,
                    expected_9,
                    "Empty-order acceptance test"
                )
            ]


            reports_ok = True


            for (
                products,
                orders,
                expected,
                label
            ) in report_tests:

                if not run_report_test(
                    products,
                    orders,
                    expected,
                    label
                ):

                    reports_ok = False
                    break


            if reports_ok:

                success(
                    "All standard inventory and "
                    "order-processing tests passed"
                )


            # =========================================
            # STATE PERSISTENCE TEST
            # DUPLICATE TRACKING RESETS PER CALL
            # =========================================

            stateful_ok = True


            stateful_products = [
                {
                    "sku": "S1",
                    "name": "Stateful Product",
                    "price": 10.0,
                    "stock": 2
                }
            ]


            stateful_source_snapshot = copy.deepcopy(
                stateful_products
            )


            try:

                stateful_inventory = Inventory(
                    stateful_products
                )


                first_batch = [
                    {
                        "id": "B1",
                        "items": [
                            {
                                "sku": "S1",
                                "quantity": 1
                            }
                        ]
                    }
                ]


                first_batch_snapshot = copy.deepcopy(
                    first_batch
                )


                first_report = (
                    stateful_inventory
                    .process_orders(
                        first_batch
                    )
                )


                expected_first_report = {
                    "accepted_orders": [
                        "B1"
                    ],
                    "rejected_orders": [],
                    "duplicate_orders": 0,
                    "revenue": 10.0,
                    "remaining_stock": {
                        "S1": 1
                    },
                    "sold_quantities": {
                        "S1": 1
                    },
                    "top_product": "S1",
                    "ranking": [
                        "S1"
                    ],
                    "all_orders_fulfilled": True,
                    "any_out_of_stock": False
                }


                if (
                    first_report
                    != expected_first_report
                ):

                    fail(
                        "The first state-persistence "
                        "report is incorrect.\\n"
                        "Expected: "
                        + str(
                            expected_first_report
                        )
                        + "\\nObtained: "
                        + str(
                            first_report
                        )
                    )

                    stateful_ok = False


                if (
                    stateful_ok
                    and first_batch
                    != first_batch_snapshot
                ):

                    fail(
                        "process_orders() must not modify "
                        "the orders input."
                    )

                    stateful_ok = False


                # Same ID deliberately used again.
                # Duplicate IDs are local to each call.

                second_batch = [
                    {
                        "id": "B1",
                        "items": [
                            {
                                "sku": "S1",
                                "quantity": 1
                            }
                        ]
                    }
                ]


                second_batch_snapshot = copy.deepcopy(
                    second_batch
                )


                second_report = (
                    stateful_inventory
                    .process_orders(
                        second_batch
                    )
                )


                expected_second_report = {
                    "accepted_orders": [
                        "B1"
                    ],
                    "rejected_orders": [],
                    "duplicate_orders": 0,
                    "revenue": 10.0,
                    "remaining_stock": {
                        "S1": 0
                    },
                    "sold_quantities": {
                        "S1": 1
                    },
                    "top_product": "S1",
                    "ranking": [
                        "S1"
                    ],
                    "all_orders_fulfilled": True,
                    "any_out_of_stock": True
                }


                if (
                    stateful_ok
                    and second_report
                    != expected_second_report
                ):

                    fail(
                        "Inventory state must persist "
                        "between calls, but duplicate "
                        "order IDs must reset for each "
                        "new call.\\n"
                        "Expected second report: "
                        + str(
                            expected_second_report
                        )
                        + "\\nObtained: "
                        + str(
                            second_report
                        )
                    )

                    stateful_ok = False


                if (
                    stateful_ok
                    and second_batch
                    != second_batch_snapshot
                ):

                    fail(
                        "process_orders() must not modify "
                        "orders passed to later calls."
                    )

                    stateful_ok = False


                if (
                    stateful_ok
                    and stateful_inventory.products[
                        "S1"
                    ][
                        "stock"
                    ]
                    != 0
                ):

                    fail(
                        "The second call must continue "
                        "from the stock left by the first "
                        "call."
                    )

                    stateful_ok = False


                if (
                    stateful_ok
                    and stateful_products
                    != stateful_source_snapshot
                ):

                    fail(
                        "Multiple process_orders() calls "
                        "must not modify the original "
                        "products input."
                    )

                    stateful_ok = False


            except Exception as error:

                fail(
                    "State-persistence test raised "
                    "an error: "
                    + str(error)
                )

                stateful_ok = False


            if stateful_ok:

                success(
                    "Inventory state persists correctly "
                    "while duplicate tracking resets "
                    "between process_orders() calls"
                )


            # =========================================
            # GENERATOR MUST USE CURRENT STATE
            # AND ORIGINAL INVENTORY ORDER
            # =========================================

            current_generator_ok = True


            current_products = [
                {
                    "sku": "Z9",
                    "name": "First Current",
                    "price": 10.0,
                    "stock": 2
                },
                {
                    "sku": "A1",
                    "name": "Second Current",
                    "price": 20.0,
                    "stock": 1
                },
                {
                    "sku": "M5",
                    "name": "Third Current",
                    "price": 30.0,
                    "stock": 1
                }
            ]


            try:

                current_inventory = Inventory(
                    current_products
                )


                depletion_orders = [
                    {
                        "id": "G1",
                        "items": [
                            {
                                "sku": "M5",
                                "quantity": 1
                            }
                        ]
                    }
                ]


                depletion_snapshot = copy.deepcopy(
                    depletion_orders
                )


                current_inventory.process_orders(
                    depletion_orders
                )


                if (
                    depletion_orders
                    != depletion_snapshot
                ):

                    fail(
                        "process_orders() modified the "
                        "orders input during the generator "
                        "state test."
                    )

                    current_generator_ok = False


                current_available = list(
                    current_inventory
                    .iter_available_products()
                )


                expected_current_available = [
                    {
                        "sku": "Z9",
                        "name": "First Current",
                        "price": 10.0,
                        "stock": 2
                    },
                    {
                        "sku": "A1",
                        "name": "Second Current",
                        "price": 20.0,
                        "stock": 1
                    }
                ]


                if (
                    current_generator_ok
                    and current_available
                    != expected_current_available
                ):

                    fail(
                        "iter_available_products() must "
                        "use the current inventory state "
                        "and preserve original inventory "
                        "order.\\n"
                        "Expected: "
                        + str(
                            expected_current_available
                        )
                        + "\\nObtained: "
                        + str(
                            current_available
                        )
                    )

                    current_generator_ok = False


                if (
                    current_generator_ok
                    and current_available
                ):

                    current_available[0][
                        "stock"
                    ] = 999


                    if (
                        current_inventory.products[
                            "Z9"
                        ][
                            "stock"
                        ]
                        != 2
                    ):

                        fail(
                            "Products yielded after order "
                            "processing must still be "
                            "independent copies."
                        )

                        current_generator_ok = False


            except Exception as error:

                fail(
                    "Current-state generator test raised "
                    "an error: "
                    + str(error)
                )

                current_generator_ok = False


            if current_generator_ok:

                success(
                    "Generator uses current inventory state "
                    "and preserves original product order"
                )
`

},








};