import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:16
* @route '/document-upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/document-upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:16
* @route '/document-upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:16
* @route '/document-upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

const document = {
    upload: Object.assign(upload, upload),
}

export default document