import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DocumentUploadController::setToNull
* @see app/Http/Controllers/DocumentUploadController.php:53
* @route '/dashboard/{candidate}/document/{document}'
*/
export const setToNull = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: setToNull.url(args, options),
    method: 'patch',
})

setToNull.definition = {
    methods: ["patch"],
    url: '/dashboard/{candidate}/document/{document}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\DocumentUploadController::setToNull
* @see app/Http/Controllers/DocumentUploadController.php:53
* @route '/dashboard/{candidate}/document/{document}'
*/
setToNull.url = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return setToNull.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentUploadController::setToNull
* @see app/Http/Controllers/DocumentUploadController.php:53
* @route '/dashboard/{candidate}/document/{document}'
*/
setToNull.patch = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: setToNull.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
const DocumentUploadController = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: DocumentUploadController.url(args, options),
    method: 'post',
})

DocumentUploadController.definition = {
    methods: ["post"],
    url: '/dashboard/{candidate}/document/{document}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
DocumentUploadController.url = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return DocumentUploadController.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
DocumentUploadController.post = (args: { candidate: string | { id: string }, document: number | { id: number } } | [candidate: string | { id: string }, document: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: DocumentUploadController.url(args, options),
    method: 'post',
})

DocumentUploadController.setToNull = setToNull

export default DocumentUploadController