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

    }

};