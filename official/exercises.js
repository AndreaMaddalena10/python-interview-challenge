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

    }


};