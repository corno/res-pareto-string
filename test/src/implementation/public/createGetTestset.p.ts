
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub"
import { f_splitString } from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($d) => {
    return () => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function createTest(name: string, expected: string, actual: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        expected: expected,
                        actual: actual,
                    }]
                }]
            })
        }
        function createBooleanTest(name: string, test: boolean) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: test
                    }]
                }]
            })
        }
        function fail(name: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: false
                    }]
                }]
            })
        }

        const secondPartOfSplitString = pub.f_splitStringIn2({
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
            pub.f_startsWith({
                contextString: "XBla",
                searchString: "X",
            })
        )
        createBooleanTest(
            "doesNotstartWith",
            !pub.f_startsWith({
                contextString: "YBla",
                searchString: "X",
            })
        )

        createTest("splitString", "abcd", f_splitString({
            value: "a-b-c-d",
            splitter: "-"
        }).reduce("", (current, $) => current + $))
        createTest("splitStringTrailingSplitter", "abcd", f_splitString({
            value: "a-b-c-d-",
            splitter: "-"
        }).reduce("", (current, $) => current + $))

        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}