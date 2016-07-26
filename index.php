<!DOCTYPE HTML>
<html lang="pt-br">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Spaceman 1.9.0</title>
    <link rel="icon" href="img/icon.png" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="css/global-styles.css" type="text/css" media="screen" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
</head>

<body>
	
    <div class="screen-cover fixed full-size hide"></div>

    <!--============================ HEADER ============================-->
    <header class="bg-darker text-white">
        <div class="wrapper">
            <div class="row">
                <div class="col-6 vcenter">
                    <h3 class="inline text-uppercase">Spaceman</h3>
                    <small>1.9.0</small>
                </div><!--
                AVOID DISPLAY INLINE LINE BREAK
                --><div class="col-6 vcenter">
                
                    <!--============================ NAVIGATION ============================-->
                    <nav class="main-nav fright">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li class="menu-item-has-children">
                                <a href="#">About</a>
								<ul>
                                    <li class="menu-item-has-children">
										<a href="#">Lorem Ipsum</a>
                                        <ul>
                                            <li><a href="#">Dolor Sit Amet</a></li>
                                            <li><a href="#">Lorem Ipsum</a></li>
                                        </ul>
                                    </li>
									<li class="menu-item-has-children">
										<a href="#">Dolor Sit Amet</a>
										<ul>
											<li><a href="#">Lorem Ipsum</a></li>
											<li><a href="#">Dolor Sit</a></li>
											<li> <a href="#">In Faucibus</a></li>
											<li><a href="#">Velit Semper</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
                    </nav>
                    <!--============================ /NAVIGATION ============================-->
                
                    <button class="nav-btn show-md text-white fright"> 
                        <i class="fa fa-bars fa-2x"></i> 
                    </button>
                
                </div>
            </div>
        </div>
    </header>
    <!--============================ /HEADER ============================-->

    <!--============================ SLIDER ============================-->
    <div class="flexslider">
        <ul class="slides">
            <li><img src="img/slide.jpg" alt=""></li>
        </ul>
    </div>
    <!--============================ /SLIDER ============================-->

	<?php // include 'gui.htm'; ?>
	
	<!--============================ MAIN CONTENT ============================--> 
	<section class="main-content spacer-10">
		<div class="wrapper">
			<div class="row">
				<div class="col-md-8">
					<h5>
						<i class="fa fa-rocket fa-fw" aria-hidden="true"></i>
						HTML/CSS boilerplate from outerspace
					</h5>
					<hr class="bg-dark spacer-10">
					<p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. We want to explore. We’re curious people. Look back over history, people have put their lives at stake to go out and explore… We believe in what we’re doing. Now it’s time to go.</p><br/><p>-Houston, Tranquillity Base here. The Eagle has landed.</p>
				</div>
				<div class="clear show-md pad-05"></div>
				<div class="col-md-4">
					<blockquote class="bg-lightgrey pad-15">
						<p class="spacer-bottom-05"><i>"The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin."</i></p>
						<small><i>Major Tom - CEO</i></small>
					</blockquote>
				</div>
			</div>
		</div>
	</section>
	<!--============================ /MAIN CONTENT ============================-->
	
    <!--============================ FOOTER ============================-->
    <footer class="bg-darker text-white">
        <div class="wrapper">
            <div class="row">
                <div class="col-12 pad-05 align-center">
                    <small>Spaceman Framework 1.9.0 - Desenvolvido por <a class="no-underline" href="http://victordiego.com/" target="_blank">V.</a></small>
                </div>
            </div>
        </div>
    </footer>
    <!--============================ /FOOTER ============================-->

    <!--============================ SCRIPTS ============================-->
    <script src="js/jquery.min.js"></script>
    <script src="js/global-js.js"></script>
    <script type="text/javascript">
        $(window).load(function() {
            $('.flexslider').flexslider({
                controlNav: false,
            });
        });
    </script>
    <!--============================ /SCRIPTS ============================-->

</body>
</html>