let pyodide = null;

let currentExercise = null;

let currentExerciseId = null;

let editor = null;


/* =====================================================
   HELPERS
===================================================== */

function formatExerciseNumber(number) {

    return String(number).padStart(
        2,
        "0"
    );
}


function setButtonsDisabled(disabled) {

    document.getElementById(
        "runButton"
    ).disabled = disabled;


    document.getElementById(
        "checkButton"
    ).disabled = disabled;
}


function clearLayoutClasses() {

    document.body.classList.remove(
        "layout-compact",
        "layout-standard",
        "layout-large",
        "layout-macro"
    );
}



/* =====================================================
   CODE EDITOR
===================================================== */

function initEditor() {

    const textarea =
        document.getElementById(
            "code"
        );


    editor =
        CodeMirror.fromTextArea(
            textarea,
            {

                mode: "python",

                theme: "material-darker",

                lineNumbers: true,

                lineWrapping: false,

                indentUnit: 4,

                tabSize: 4,

                indentWithTabs: false,

                smartIndent: true,

                electricChars: true,

                autoCloseBrackets: true,

                matchBrackets: true,

                styleActiveLine: true,

                viewportMargin: Infinity,


                extraKeys: {

                    Tab: function (cm) {

                        if (
                            cm.somethingSelected()
                        ) {

                            cm.indentSelection(
                                "add"
                            );

                        } else {

                            cm.replaceSelection(
                                "    ",
                                "end"
                            );
                        }
                    },


                    "Shift-Tab":
                        function (cm) {

                            cm.indentSelection(
                                "subtract"
                            );
                        }

                }

            }
        );
}



function getEditorCode() {

    if (!editor) {
        return "";
    }

    return editor.getValue();
}



function setEditorCode(code) {

    if (!editor) {
        return;
    }


    editor.setValue(
        code || ""
    );


    editor.clearHistory();


    editor.setCursor({
        line: 0,
        ch: 0
    });


    requestAnimationFrame(
        () => {

            editor.refresh();

        }
    );
}



/* =====================================================
   LOAD EXERCISE
===================================================== */

function loadExercise() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    currentExerciseId =
        params.get("exercise")
        || "1";


    currentExercise =
        exercises[currentExerciseId];


    if (!currentExercise) {

        document.getElementById(
            "exerciseTitle"
        ).innerText =
            "Exercise not found";


        document.getElementById(
            "exerciseDescription"
        ).innerHTML =
            `
            <p>
                L'esercizio
                <strong>${currentExerciseId}</strong>
                non esiste.
            </p>
            `;


        setButtonsDisabled(
            true
        );


        return false;
    }



    /* -------------------------
       LAYOUT
    ------------------------- */

    clearLayoutClasses();


    const layout =
        currentExercise.layout
        || "standard";


    document.body.classList.add(
        "layout-" + layout
    );



    /* -------------------------
       METADATA
    ------------------------- */

    document.getElementById(
        "chapterMeta"
    ).innerText =
        "Chapter "
        + currentExercise.chapter;


    document.getElementById(
        "exerciseMeta"
    ).innerText =
        "Exercise "
        + formatExerciseNumber(
            currentExercise.number
        );



    /* -------------------------
       DIFFICULTY
    ------------------------- */

    const difficultyBadge =
        document.getElementById(
            "difficultyBadge"
        );


    difficultyBadge.innerText =
        currentExercise.difficulty;


    difficultyBadge.className =
        "difficulty-badge";


    difficultyBadge.classList.add(
        "difficulty-"
        + currentExercise
            .difficulty
            .toLowerCase()
    );



    /* -------------------------
       TITLE
    ------------------------- */

    document.getElementById(
        "exerciseTitle"
    ).innerText =
        currentExercise.title;



    /* -------------------------
       DESCRIPTION
    ------------------------- */

    document.getElementById(
        "exerciseDescription"
    ).innerHTML =
        currentExercise.description;



    /* -------------------------
       STARTER CODE
    ------------------------- */

    setEditorCode(
        currentExercise.starterCode
    );



    /* -------------------------
       BROWSER TITLE
    ------------------------- */

    document.title =
        currentExercise.title
        + " | Python Interview Challenge";


    requestAnimationFrame(
        () => {

            if (editor) {
                editor.refresh();
            }

        }
    );


    return true;
}



/* =====================================================
   INITIALIZE PYTHON
===================================================== */

async function initPython() {

    const status =
        document.getElementById(
            "pythonStatus"
        );


    try {

        pyodide =
            await loadPyodide();


        status.className =
            "python-status ready";


        status.innerHTML =
            `
            <span class="status-dot"></span>
            Python ready
            `;


        if (currentExercise) {

            setButtonsDisabled(
                false
            );
        }


    } catch (error) {

        status.className =
            "python-status error";


        status.innerHTML =
            `
            <span class="status-dot"></span>
            Python error
            `;


        console.error(
            "Errore durante il caricamento di Pyodide:",
            error
        );
    }
}



/* =====================================================
   RUN CODE
===================================================== */

async function runCode() {

    if (!pyodide) {
        return;
    }


    const code =
        getEditorCode();


    const output =
        document.getElementById(
            "output"
        );


    const checker =
        document.getElementById(
            "checker"
        );


    checker.innerText = "";

    checker.className =
        "checker-box";


    output.innerText =
        "Running...";


    setButtonsDisabled(
        true
    );


    pyodide.globals.set(
        "user_code",
        code
    );


    try {

        const result =
            await pyodide.runPythonAsync(`

import io
import traceback
from contextlib import redirect_stdout, redirect_stderr

buffer = io.StringIO()

namespace = {}

try:

    with redirect_stdout(buffer), redirect_stderr(buffer):

        exec(user_code, namespace)

except Exception:

    traceback.print_exc(file=buffer)

buffer.getvalue()

            `);


        const text =
            String(result);


        if (
            text.trim() === ""
        ) {

            output.innerText =
                "(The program produced no output)";

        } else {

            output.innerText =
                text.trimEnd();
        }


    } catch (error) {

        output.innerText =
            "Internal execution error:\n"
            + error;


        console.error(
            error
        );

    } finally {

        setButtonsDisabled(
            false
        );
    }
}



/* =====================================================
   CHECK SOLUTION
===================================================== */

async function checkSolution() {

    if (
        !pyodide
        || !currentExercise
    ) {

        return;
    }


    const code =
        getEditorCode();


    const checkerBox =
        document.getElementById(
            "checker"
        );


    checkerBox.className =
        "checker-box neutral";


    checkerBox.innerText =
        "Checking solution...";


    setButtonsDisabled(
        true
    );


    pyodide.globals.set(
        "user_code",
        code
    );


    pyodide.globals.set(
        "checker_code",
        currentExercise
            .checker
            .trim()
    );


    try {

        const jsonResult =
            await pyodide.runPythonAsync(`

import ast
import io
import json
import textwrap
import traceback

from contextlib import redirect_stdout, redirect_stderr


report = {

    "success": True,

    "checks": []

}



def success(message):

    report["checks"].append({

        "ok": True,

        "message": str(message)

    })



def fail(message):

    report["success"] = False

    report["checks"].append({

        "ok": False,

        "message": str(message)

    })



# =====================================================
# CHECK USER CODE SYNTAX
# =====================================================

try:

    ast.parse(user_code)


except SyntaxError as error:

    line_number = (
        error.lineno
        if error.lineno is not None
        else "?"
    )


    fail(
        f"Errore di sintassi alla riga "
        f"{line_number}: "
        f"{error.msg}"
    )



# =====================================================
# RUN EXERCISE CHECKER
# =====================================================

else:

    clean_checker_code = (
        textwrap
        .dedent(checker_code)
        .strip()
    )


    checker_environment = {

        "user_code":
            user_code,

        "success":
            success,

        "fail":
            fail

    }


    try:

        hidden_output = io.StringIO()


        with redirect_stdout(hidden_output), redirect_stderr(hidden_output):

            exec(
                clean_checker_code,
                checker_environment
            )


    except Exception:

        fail(
            "Errore durante il controllo:\\n"
            + traceback.format_exc()
        )



json.dumps(report)

            `);


        const result =
            JSON.parse(
                String(jsonResult)
            );


        let text = "";


        for (
            const check
            of result.checks
        ) {

            text +=
                (
                    check.ok
                    ? "✓ "
                    : "✕ "
                )
                + check.message
                + "\n";
        }



        if (
            result.success
        ) {

            checkerBox.className =
                "checker-box success";


            text +=
                "\nSolution correct.";

        } else {

            checkerBox.className =
                "checker-box error";


            text +=
                "\nThe solution is not correct yet.";
        }


        checkerBox.innerText =
            text;


    } catch (error) {

        checkerBox.className =
            "checker-box error";


        checkerBox.innerText =
            "Internal checker error:\n"
            + error;


        console.error(
            error
        );

    } finally {

        setButtonsDisabled(
            false
        );
    }
}



/* =====================================================
   RESET
===================================================== */

function resetCode() {

    if (!currentExercise) {
        return;
    }


    setEditorCode(
        currentExercise.starterCode
    );


    document.getElementById(
        "output"
    ).innerText =
        "Run your code to see the output.";


    const checker =
        document.getElementById(
            "checker"
        );


    checker.innerText = "";

    checker.className =
        "checker-box";
}



/* =====================================================
   BUTTON EVENTS
===================================================== */

document
    .getElementById(
        "runButton"
    )
    .addEventListener(
        "click",
        runCode
    );


document
    .getElementById(
        "checkButton"
    )
    .addEventListener(
        "click",
        checkSolution
    );


document
    .getElementById(
        "resetButton"
    )
    .addEventListener(
        "click",
        resetCode
    );



/* =====================================================
   START APPLICATION
===================================================== */

initEditor();

loadExercise();

initPython();