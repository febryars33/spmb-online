import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DocumentUploadController::nullMethod
* @see app/Http/Controllers/DocumentUploadController.php:53
* @route '/dashboard/{candidate}/document/{document}'
*/
export const nullMethod = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: nullMethod.url(args, options),
    method: 'patch',
})

nullMethod.definition = {
    methods: ["patch"],
    url: '/dashboard/{candidate}/document/{document}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\DocumentUploadController::nullMethod
* @see app/Http/Controllers/DocumentUploadController.php:53
* @route '/dashboard/{candidate}/document/{document}'
*/
nullMethod.url = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
            document: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return nullMethod.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentUploadController::nullMethod
* @see app/Http/Controllers/DocumentUploadController.php:53
* @route '/dashboard/{candidate}/document/{document}'
*/
nullMethod.patch = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: nullMethod.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
export const upload = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(args, options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/dashboard/{candidate}/document/{document}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
upload.url = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
            document: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
        document: typeof args.document === 'object'
        ? args.document.id
        : args.document,
    }

    return upload.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
upload.post = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(args, options),
    method: 'post',
})

const document = {
    null: Object.assign(nullMethod, nullMethod),
    upload: Object.assign(upload, upload),
}

export default document