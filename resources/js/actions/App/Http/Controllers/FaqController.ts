import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FaqController::__invoke
* @see app/Http/Controllers/FaqController.php:13
* @route '/faq'
*/
const FaqController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FaqController.url(options),
    method: 'get',
})

FaqController.definition = {
    methods: ["get","head"],
    url: '/faq',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaqController::__invoke
* @see app/Http/Controllers/FaqController.php:13
* @route '/faq'
*/
FaqController.url = (options?: RouteQueryOptions) => {
    return FaqController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::__invoke
* @see app/Http/Controllers/FaqController.php:13
* @route '/faq'
*/
FaqController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FaqController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FaqController::__invoke
* @see app/Http/Controllers/FaqController.php:13
* @route '/faq'
*/
FaqController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FaqController.url(options),
    method: 'head',
})

export default FaqController