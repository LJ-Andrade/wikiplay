<nav class="top-navbar navbar navbar-expand-lg">
    <div class="container-fluid p-0">
        @auth
            <button type="button" id="SidebarCollapse" class="btn sidebar-toggler">
                {{-- <i class="fas fa-align-left"></i>
                <span></span> --}}
            </button>
            <div class="btn-group user-dropdown pull-right">
                {{-- <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ ucfirst(Auth::user()->username) }} 
                </button> --}}
                <a type="button" class="dropdown-image" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="text">{{ ucfirst(Auth::user()->username) }} </span>
                    <img src="{{ asset('images/vadmin/logo-gen.jpg')}}" alt="User Image">
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    
                    <a class="dropdown-item" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                        {{-- {{ __('Logout') }} --}}
                        Desconectar
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>

                </div>
            </div>
        @else
            <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                </li>
                @if (Route::has('register'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                    </li>
                @endif
            </ul>
        @endauth
    </div>
</nav>
