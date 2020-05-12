<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>{{ config('app.name', 'Vadmin') }}</title>
	<link rel="apple-touch-icon" sizes="60x60" href="{{ asset('images/vadmin/favicon.png') }}">
	<link rel="apple-touch-icon" sizes="76x76" href="{{ asset('images/vadmin/favicon.png') }}">
	<link rel="apple-touch-icon" sizes="120x120" href="{{ asset('images/vadmin/favicon.png') }}">
	<link rel="apple-touch-icon" sizes="152x152" href="{{ asset('images/vadmin/favicon.png') }}">
	<link rel="shortcut icon" type="image/x-icon" href="{{ asset('images/vadmin/favicon.png') }}">
	<link rel="shortcut icon" type="image/png" href="{{ asset('images/vadmin/favicon.png') }}">
	<!-- Icons -->
	<link href="{{ asset('vendor/font-awesome/css/all.min.css')}}" rel="stylesheet">
	<!-- Styles -->
	<link href="{{ asset('css/vadmin/vadmin.css') }}" rel="stylesheet">
	@yield('styles')
</head>
	<body id="Body">
		@auth
			{{-- If auth show allowed sections --}}
			@yield('content')
		@else
			{{-- If not auth show auth sections --}}
			<div class="auth-section">
				@yield('auth-component')
			</div>
		@endauth

		<script src="{{ asset('js/vadmin/vadmin.js') }}"></script>        
		@yield('scripts') 
	</body>
</html>
