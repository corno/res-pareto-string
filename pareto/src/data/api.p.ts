import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    optional,
    array,
    typeReference,
    externalTypeReference,
    callback,
    interfaceReference,
    externalNamespacedTypeReference,
    procedure,
    null_,
    method,
    number,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'namespace': {
            'types': types({
                "SplitData": group({
                    "value": member(str()),
                    "splitter": member(str()),
                }),
                "SplitIn2Result": group({
                    "first": member(str()),
                    "second": member(optional(str())),
                }),
                "SplitResult": array(str()),
                "StartsWithData": group({
                    "contextString": member(str()),
                    "searchString": member(str()),
                }),
                "SubstrData": group({
                    "value": member(str()),
                    "begin": member(number()),
                    "length": member(number()),
                }),
            }),
            'interfaces': d({
            }),

        },
        'functions': d({
            "Substr": _function(typeReference("SubstrData"), externalTypeReference("common", "String")),
            "Split": _function(typeReference("SplitData"), typeReference("SplitResult")),
            "SplitIn2": _function(typeReference("SplitData"), typeReference("SplitIn2Result")),
            "StringLength": _function(externalTypeReference("common", "String"), externalTypeReference("common", "Number")),
            "TrimEnd": _function(externalTypeReference("common", "String"), externalTypeReference("common", "String")),
            "StartsWith": _function(typeReference("StartsWithData"), externalTypeReference("common", "Boolean")),
        }),
    },
    'api': {
        'imports': d({
            //"common": "glo-pareto-common",
        }),
        'algorithms': d({
            "split": {
                'definition': {
                    'function': "Split",
                },
                'type': ['reference', null],
            },
            "splitIn2": {
                'definition': {
                    'function': "SplitIn2",
                },
                'type': ['reference', null],
            },
            "stringLength": {
                'definition': {
                    'function': "StringLength",
                },
                'type': ['reference', null],
            },
            "substr": {
                'definition': {
                    'function': "Substr",
                },
                'type': ['reference', null],
            },
            "trimEnd": {
                'definition': {
                    'function': "TrimEnd",
                },
                'type': ['reference', null],
            },
            "startsWith": {
                'definition': {
                    'function': "StartsWith",
                },
                'type': ['reference', null],
            },
        })
    },
}