@extends('adminlte::page')

@section('title', 'Home')

@section('content_header')
@stop

@section('content')

<div class="hero_area py-1">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="#">
            <span>
              AstraZeneca
            </span>
            <img src="/img/logo/logo_BackG.png" width="40" alt="Logo">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                {{-- <li class="nav-item ">
                  <a class="nav-link" href="#"> Tour </a>
                </li> --}}
                </li>
              </ul>
              <div class="user_option">
                <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
    <!-- slider section -->
    <section class=" slider_section position-relative">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="col-lg-10 col-md-11 mx-auto">
                <div class="detail-box">
                  <div>
                    <h2>
                      Az Insight
                    </h2>
                    <h1>
                      Science and Innovation
                    </h1>
                    <h3>
                      Creating the next generation of therapeutics using an array of drug modalities, for example, advanced biologics, nucleotide-based and cell therapies.
Leading in convergence of science, data and technology.
Advancing our pipeline.
                    </p>
                    <div class="">
                      <a href="https://www.astrazeneca.com/">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="col-lg-10 col-md-11 mx-auto">
                <div class="detail-box">
                  <div>
                    <h2>
                      Az Insight
                    </h2>
                    <h1>
                      Growth and Therapy
Area Leadership
                    </h1>
                    <h3>
                      Leveraging our innovative science to create a more personalised, precise and accessible healthcare experience.
Engaging with the entire healthcare ecosystem and unlocking visionary partnerships that drive positive change and outcomes.
Creating industry-leading growth across our therapy areas and regions.
Continuing to implement our Operations 2025 programme.
                    </h3>
                    <div class="">
                      <a href="https://www.astrazeneca.com/">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="col-lg-10 col-md-11 mx-auto">
                <div class="detail-box">
                  <div>
                    <h2>
                      Az Insight
                    </h2>
                    <h1>
                      People and Sustainability
                    </h1>
                    <h3>
                      Continuing to make AstraZeneca a great place to work.
                      Making it easier to work across our Group to deliver sustainable growth.
                      Ensuring we operate in the smartest way, increasing the speed of delivery of medicines to patients through our Future of Work initiative.
                      Harnessing the power of Science and Innovation in ways that positively impact patients, healthcare systems, and the environment.
                      Progressing our Sustainability strategy across three integrated priority pillars: access to healthcare, environmental protection, and ethics and transparency.
                    </h3>
                    <div class="">
                      <a href="https://www.astrazeneca.com/">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
      </div>
    </section>
    <!-- end slider section -->
  </div>

  <!-- heathy section -->

  <section class="heathy_section layout_padding">
    <div class="container">

      <div class="row text-center">
        <div class="col-md-12 mx-auto">
          <div class="detail-box">
            <h1>
                Virtual Tour
              </h1>
            <h2>
              Experience AstraZeneca like never before. Join us on a virtual journey through our facilities, where science and technology unite for a healthier tomorrow.
            </h2>
            <div class="col bg-dangerx">
                <button hidden type="button" id="bmodal" class="btn btn-primary button" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" title="This is a tooltip">
                    Main
                </button>
                <div id="mapa" class="mt-5">
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Main</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`

            </div>
            <div id="canvas" class="modal-body">
            </div>
            <div class="modal-footer text-start">
              <h4>Contacto de esta area: Manuel Chavez 618-179-88-99</h4>
            </div>
          </div>
        </div>
      </div>

  <!-- end heathy section -->




  <!-- info section -->
  <section class="info_section layout_padding2 mb-3 py-4">
    <div class="container-fluid text-center">
      <h4>
        All Rights Reserved. Design by OrricoHacks
      </h4>
    </div>
  </section>

@stop

@section('content_footer')

@stop

@section('css')
    {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
    @vite('resources/sass/app.scss')
    {{-- @vite('resources/js/app.js') --}}
@stop

@section('js')
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
    @vite('resources/js/app.js')
@stop
