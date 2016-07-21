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

	<?php include 'gui.htm'; ?>

    <!--============================ FOOTER ============================-->
    <footer class="bg-darker text-white">
        <div class="wrapper">
            <div class="row">
                <div class="col-12 pad-05 align-center">
                    <small>Spaceman Framework 1.9.0 - Desenvolvido por <a class="no-underline" href="" target="_blank">V.</a></small>
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