
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"

import * as gpub from "../../../../../pub"

import { CgetTestSet } from "../definition/api.generated"

export const $$:CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function createTest(name: string, expected: string, actual: string) {
        builder.add(name, {
            'type': ['test', {
                type: ['short string', {
                    expected: expected,
                    actual: actual,
                }]
            }]
        })
    }
    function createBooleanTest(name: string, test: boolean) {
        builder.add(name, {
            'type': ['test', {
                type: ['boolean', test]
            }]
        })
    }
    function fail(name: string) {
        builder.add(name, {
            'type': ['test', {
                type: ['boolean', false]
            }]
        })
    }

    const secondPartOfSplitString = gpub.$r.splitIn2({
        value: "bar-foo",
        splitter: "-",
    }).second
    if (secondPartOfSplitString[0] === true) {
        createTest("splitIn2", "foo", secondPartOfSplitString[1])

    } else {
        fail("unexpected null")
    }

    const xxx = gpub.$r.replaceAll({
       'value': "a\"b\"c",
        'pattern': "\"",
        'replacement': "_",
    })
    createTest("replaceAll", "a_b_c", xxx)

    createBooleanTest(
        "startsWith",
        gpub.$r.startsWith({
            contextString: "XBla",
            searchString: "X",
        })
    )
    createBooleanTest(
        "doesNotstartWith",
        !gpub.$r.startsWith({
            contextString: "YBla",
            searchString: "X",
        })
    )

    // createTest("splitString", "abcd", pub.$r.split({
    //     value: "a-b-c-d",
    //     splitter: "-"
    // }).reduce("", (current, $) => current + $))
    // createTest("splitStringTrailingSplitter", "abcd", pub.$r.split({
    //     value: "a-b-c-d-",
    //     splitter: "-"
    // }).reduce("", (current, $) => current + $))

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}