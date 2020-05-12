@extends('vadmin.core.layouts.main')

@section('auth-component')
<div class="container">
    <div class="row justify-content-center">
        <div class="text-center">
            <img src="{{ asset('images/vadmin/logo.png')}}" style="max-width:250px" alt="Vadmin Logo">
            <p class="white-text light">Gestor de contenido</p>
        </div>
    </div>
    <div class="row justify-content-center pt-3">
        <div class="col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body pb-0">
                    <h4>Ingreso al sistema</h4>
                    <hr>
                    <form  method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group">
                            <label>Email / Usuario</label>
                            <input  type="username" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required  autofocus>
                            @if($errors->any())
                                <h4>{{$errors->first()}}</h4>
                            @endif

                            
                            
                            @error('username')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $error }}</strong>
                            </span>
                            @enderror
                        </div>
                        
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                            
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        
                        @if (session('error'))
                            <div class="alert alert-success">
                                {{ session('error') }}
                            </div>
                        @endif

                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label class="form-check-label" for="remember"> Recordarme </label>
                            </div>
                        </div>  
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
                            <a class="btn text-btn btn-block mt-3" href="{{ route('register') }}">Registrarme</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script>
        let el = document.getElementById("Body");
        el.classList.add("login-register-background");
    </script>
@endsection