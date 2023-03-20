import * as pd from 'pareto-core-data'

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "a pareto wrapper around basic string operations as Pareto lacks them (yes, really, by design, the idea is to find a way how not to need them, and if you really do, then use this library)",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
    }),
    'type': ['resource', {
        'definition': {
            'glossary': {
                'root': glossary,
                'imports': d({
                    "common": external("glo-pareto-common"),
                }),
            },
            'api': {
                'root': api,
                'imports': d({
                    "this": this_(),
                }),
            },
        },
        'temp': {
            'nativeDependencies': d({

            }),
            'devDependencies': d({
            }),
        },

        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'types': d({}),
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                            
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                            
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        },
    }],
}