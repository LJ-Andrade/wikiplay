@extends('vadmin.core.layouts.main')

@section('content')
	<div id="app">
		<vadmin-main :user="{{ Auth::user() }}"></vadmin-main>
	</div>
@endsection
