import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\LoginController::__invoke
* @see app/Http/Controllers/Auth/LoginController.php:14
* @route '/login'
*/
const LoginController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LoginController.url(options),
    method: 'get',
})

LoginController.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\LoginController::__invoke
* @see app/Http/Controllers/Auth/LoginController.php:14
* @route '/login'
*/
LoginController.url = (options?: RouteQueryOptions) => {
    return LoginController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LoginController::__invoke
* @see app/Http/Controllers/Auth/LoginController.php:14
* @route '/login'
*/
LoginController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: LoginController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\LoginController::__invoke
* @see app/Http/Controllers/Auth/LoginController.php:14
* @route '/login'
*/
LoginController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: LoginController.url(options),
    method: 'head',
})

export default LoginController