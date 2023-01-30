import * as pr from 'pareto-core-raw'

import {
    string,
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method,
    number, dictionary, group, member, taggedUnion, types, parameter, template, func, data,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

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
            "Substr": func(typeReference("SubstrData"), null, null, data(typeReference("common", "String"), false)),
            "Split": func(typeReference("SplitData"), null, null, data(typeReference("SplitResult"), false)),
            "SplitIn2": func(typeReference("SplitData"), null, null, data(typeReference("SplitIn2Result"), false)),
            "Length": func(typeReference("common", "String"), null, null, data(typeReference("common", "Number"), false)),
            "TrimEnd": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"), false)),
            "StartsWith": func(typeReference("StartsWithData"), null, null, data(typeReference("common", "Boolean"), false)),
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