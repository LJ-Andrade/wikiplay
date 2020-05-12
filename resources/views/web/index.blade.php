@extends('web.includes.main')

@section('content')
	<web-main></web-main>
	{{-- <div class="container">
		<div class="row">
			<h1>Sitio Web</h1>
			<h3><a href="{{ url('/vadmin')}}">Ir al administrador</a></h3>
			@if (session('status'))
				<div class="alert alert-success" role="alert">
					{{ session('status') }}
				</div>
			@endif

			@if(Auth::check())
				<div class="card" style="width: 18rem;">
					<div class="card-body">
						<h5 class="card-title">Logueado</h5>
						<p class="card-text">Bienvenido {{ Auth::user()->name }}</p>
						<a href="#" class="btn btn-primary">Ver mi perfíl</a>
					</div>
				</div>
			@endif
		</div>
	</div> --}}
@endsection