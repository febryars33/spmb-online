import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:25
* @route '/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:25
* @route '/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:25
* @route '/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:25
* @route '/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\HomeController::store
* @see app/Http/Controllers/Dashboard/HomeController.php:41
* @route '/dashboard'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\HomeController::store
* @see app/Http/Controllers/Dashboard/HomeController.php:41
* @route '/dashboard'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\HomeController::store
* @see app/Http/Controllers/Dashboard/HomeController.php:41
* @route '/dashboard'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const HomeController = { index, store }

export default HomeController