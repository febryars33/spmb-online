<!DOCTYPE html>
<html lang="en" data-bs-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="/favicon-96x96.png?v=20260410" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=20260410" />
    <link rel="shortcut icon" href="/favicon.ico?v=20260410" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=20260410" />
    <meta name="apple-mobile-web-app-title" content="SPMB PGRI" />
    <link rel="manifest" href="/site.webmanifest?v=20260410" />
    @vite(['resources/scss/app.scss', 'resources/js/app.ts'])
    <x-inertia::head>
        <title>{{ config('app.name') }}</title>
        <meta name="description" content="My application description">
    </x-inertia::head>
</head>

<body>
    <x-inertia::app />
</body>

</html>
