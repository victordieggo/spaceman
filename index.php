<!DOCTYPE HTML>
<html lang="pt-br">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Spaceman Framework 1.7.6</title>
    <link rel="icon" href="img/icon.png" />
    <link rel="stylesheet" href="css/global-styles.css" type="text/css" media="screen" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
</head>

<body class="bg-grey">

    <!-- BEGIN HEADER-TOP -->
    <div class="bg-dark hide-sm">
        <div class="wrapper">
            <div class="row txt-white small">
                <div class="sixcol no-spacer">
                    <p>Version 1.7.6</p>
                </div>
                <div class="sixcol align-right no-spacer">
                    <p>I'm gonna chase you out of earth!</p>
                </div>
            </div>
        </div>
    </div>
    <!-- END HEADER TOP-->

    <!-- BEGIN HEADER -->
    <header class="wrapper bg-primary">
        <div class="row">
            <div class="twelvecol">

                <a class="logo fleft vcenter" href=""></a>
				
                <!-- BEGIN NAVIGATION -->
                <nav class="main-nav vcenter">
                    <ul class="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                    </ul>
                </nav>
                <!-- END NAVIGATION -->
				
                <button class="nav-btn bg-main show-md fright">
                    <i class="fa fa-bars fa-2x txt-purple"></i>
                </button>

            </div>
        </div>
    </header>
    <!-- END HEADER -->

    <!-- BEGIN SLIDER -->
    <div class="wrapper">
        <div class="flexslider">
            <ul class="slides">
                <li><img src="img/slide1.jpg" alt=""></li>
                <li><img src="img/slide2.jpg" alt=""></li>
            </ul>
        </div>
    </div>
    <!-- END SLIDER -->

    <!-- BEGIN CONTENT -->
    <section class="wrapper">
        <div class="row bg-white">
            <div class="fourcol stretch">
                <img src="img/thumb.jpg" alt="thumb">
                <h3>Lorem Ipsum</h3>
                <hr class="spacer-10">
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
			
            <div class="fourcol stretch">
                <img src="img/thumb.jpg" alt="thumb">
                <h3>Lorem Ipsum</h3>
                <hr class="spacer-10">
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
			
            <div class="fourcol stretch">
                <img src="img/thumb.jpg" alt="thumb">
                <h3>Lorem Ipsum</h3>
                <hr class="spacer-10">
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
        </div>
    </section>
    <!-- END CONTENT -->

    <!-- BEGIN FOOTER -->
    <footer>
		
        <div class="wrapper bg-dark txt-white">
            <div class="row">

                <div class="threecol stretch-mid">
                    <h5>Lorem Ipsum</h5>
                    <hr class="spacer-10">
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>

                <div class="threecol stretch-mid">
                    <h5>Lorem Ipsum</h5>
                    <hr class="spacer-10">
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>

                <div class="threecol stretch-mid">
                    <h5>Lorem Ipsum</h5>
                    <hr class="spacer-10">
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>

                <div class="threecol stretch-mid">
                    <h5>Lorem Ipsum</h5>
                    <hr class="spacer-10">
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>
				
			</div>
		</div>
		
		<div class="bg-darker">
            <div class="row txt-white">
                <div class="twelvecol pad-05 align-center small no-spacer">
                    <p>© 2015 Spaceman 1.7.6 Framework. | Desenvolvido por <a class="no-underline" href="">V. de Várias Fita</a>.</p>
                </div>
            </div>
        </div>
		
    </footer>
    <!-- END FOOTER -->

    <!-- BEGIN JQUERY // PLACED AT THE BOTTOM OF THE PAGE FOR FASTER LOADING -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="js/global-js.js"></script>
    <script type="text/javascript">
        $(window).load(function () {
            $('.flexslider').flexslider({
                controlNav: false,
            });
        });
    </script>
    <!-- END JQUERY -->

</body>
</html>