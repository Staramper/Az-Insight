<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    @vite('resources/js/app.js')
    <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <!-- x@vite('resources/css/app.css') -->
    @vite('resources/sass/app.scss')
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
</head>

<body>
    <div id="app" class="d-flex flex-column h-screen justify-content-between fondo">
        <header>
            @include('partials.navs.nav')
        </header>

        <main class="py-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-10 col-lg-9 mx-auto">
                        <div class="container-fluid">
                            @yield('content')
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="py-3"></div>

        <footer class="bg-dark text-center text-light py-2 shadow fixed-bottom">
            OrricoHacks | Copyright @ {{ date('Y') }}
        </footer>
    </div>
</body>

</html>
