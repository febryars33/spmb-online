<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/scss/app.scss')
    @vite('resources/js/app.ts')
    <x-inertia::head>
        <title>{{ config('app.name') }}</title>
        <meta name="description" content="My application description">
    </x-inertia::head>
</head>

<body>
    <x-inertia::app />
</body>

</html>
