<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ env('APP_WEB_NAME') }}</title>
    <!-- Styles -->
    <link href="{{ asset('css/web/web.css') }}" rel="stylesheet">
    <!-- Icons -->
	<link href="{{ asset('vendor/font-awesome/css/all.min.css')}}" rel="stylesheet">
</head>
<body>
    <div id="app" class="wrapper">
        @yield('content')
    </div>
    @yield('scripts')
    {{-- resources\web\js\web.js --}}
    <script src="{{ asset('js/web/web.js') }}"></script>   
</body>
</html>
