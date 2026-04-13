import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\XenditTestController::__invoke
* @see app/Http/Controllers/XenditTestController.php:13
* @route '/xendit-test'
*/
const XenditTestController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: XenditTestController.url(options),
    method: 'get',
})

XenditTestController.definition = {
    methods: ["get","head"],
    url: '/xendit-test',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\XenditTestController::__invoke
* @see app/Http/Controllers/XenditTestController.php:13
* @route '/xendit-test'
*/
XenditTestController.url = (options?: RouteQueryOptions) => {
    return XenditTestController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\XenditTestController::__invoke
* @see app/Http/Controllers/XenditTestController.php:13
* @route '/xendit-test'
*/
XenditTestController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: XenditTestController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\XenditTestController::__invoke
* @see app/Http/Controllers/XenditTestController.php:13
* @route '/xendit-test'
*/
XenditTestController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: XenditTestController.url(options),
    method: 'head',
})

export default XenditTestController