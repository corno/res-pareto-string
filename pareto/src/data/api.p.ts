import * as pr from 'pareto-core-raw'

import {
    string,
    nested,
    array,
    typeReference,
    callback,
    interfaceReference,
    procedure,
    null_,
    method,
    number, dictionary, group, member, taggedUnion, types, _function, parameter, template,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({
            "Optional": {
                'parameters': d({ "Type": {}, }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({}),
                })
            }
        }),
        'types': types({
            "SplitData": group({
                "value": member(string()),
                "splitter": member(string()),
            }),
            "SplitIn2Result": group({
                "first": member(string()),
                "second": member(template("Optional", {
                    "Type": string(),
                })),
            }),
            "SplitResult": array(string()),
            "StartsWithData": group({
                "contextString": member(string()),
                "searchString": member(string()),
            }),
            "SubstrData": group({
                "value": member(string()),
                "begin": member(number()),
                "length": member(number()),
            }),
        }),
        'interfaces': d({
        }),
        'functions': d({
            "Substr": _function(typeReference("SubstrData"), typeReference("common", "String")),
            "Split": _function(typeReference("SplitData"), typeReference("SplitResult")),
            "SplitIn2": _function(typeReference("SplitData"), typeReference("SplitIn2Result")),
            "Length": _function(typeReference("common", "String"), typeReference("common", "Number")),
            "TrimEnd": _function(typeReference("common", "String"), typeReference("common", "String")),
            "StartsWith": _function(typeReference("StartsWithData"), typeReference("common", "Boolean")),
        }),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "split": algorithm(definitionReference("Split")),
            "splitIn2": algorithm(definitionReference("SplitIn2")),
            "length": algorithm(definitionReference("Length")),
            "substr": algorithm(definitionReference("Substr")),
            "trimEnd": algorithm(definitionReference("TrimEnd")),
            "startsWith": algorithm(definitionReference("StartsWith")),
        })
    },
}