
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as mtest from "lib-pareto-test"

import * as api from "../api"

import * as pub from "../../../../../pub"

export const $$: api.CgetTestSet = () => {

    const builder = pm.createUnsafeDictionaryBuilder<mtest.TTestElement>()
    function createTest(name: string, expected: string, actual: string) {
        builder.add(name, {
            type: ["test", {
                type: ["short string", {
                    expected: expected,
                    actual: actual,
                }]
            }]
        })
    }
    function createBooleanTest(name: string, test: boolean) {
        builder.add(name, {
            type: ["test", {
                type: ["boolean",test]
            }]
        })
    }
    function fail(name: string) {
        builder.add(name, {
            type: ["test", {
                type: ["boolean", false]
            }]
        })
    }

    const secondPartOfSplitString = pub.$a.splitIn2({
        value: "bar-foo",
        splitter: "-",
    }).second
    if (secondPartOfSplitString === null) {
        fail("unexpected null")
    } else {
        createTest("splitIn2", "foo", secondPartOfSplitString)
    }

    createBooleanTest(
        "startsWith",
        pub.$a.startsWith({
            contextString: "XBla",
            searchString: "X",
        })
    )
    createBooleanTest(
        "doesNotstartWith",
        !pub.$a.startsWith({
            contextString: "YBla",
            searchString: "X",
        })
    )

    createTest("splitString", "abcd", pub.$a.split({
        value: "a-b-c-d",
        splitter: "-"
    }).reduce("", (current, $) => current + $))
    createTest("splitStringTrailingSplitter", "abcd", pub.$a.split({
        value: "a-b-c-d-",
        splitter: "-"
    }).reduce("", (current, $) => current + $))

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}