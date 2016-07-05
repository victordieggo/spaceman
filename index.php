<!DOCTYPE HTML>
<html lang="pt-br">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Spaceman Framework 1.8.5</title>
    <link rel="icon" href="img/icon.png" />
    <link rel="stylesheet" href="css/global-styles.css" type="text/css" media="screen" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
</head>

<body class="bg-light-grey">
	
    <div class="screen-cover fixed full-width hide"></div>
    
    <!--============================ HEADER-TOP ============================-->
    <div class="bg-dark hide-sm">
        <div class="wrapper">
            <div class="row text-white">
                <div class="col-6 no-spacer">
                    <p><small>Version 1.8.5</small></p>
                </div>
                <div class="col-6 align-right no-spacer">
                    <p><small>I'm gonna chase you out of earth!</small></p>
                </div>
            </div>
        </div>
    </div>
    <!--============================ /HEADER-TOP ============================-->

    <!--============================ HEADER ============================-->
    <header class="wrapper bg-primary">
        <div class="row">
            <div class="col-12">

                <a class="logo fleft vcenter" href=""></a>

                <!--============================ NAVIGATION ============================-->
                <nav class="main-nav vcenter">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li class="menu-item-has-children">
							<a href="#">Sobre</a>
							<ul>
								<li class="menu-item-has-children">
									<a href="#">Serviços</a>
									<ul>
										<li><a href="#">Serviços</a></li>
										<li><a href="#">Serviços</a></li>
									</ul>
								</li>
								<li class="menu-item-has-children">
									<a href="#">Serviços</a>
									<ul>
										<li><a href="#">Fale Conosco</a></li>
										<li class="menu-item-has-children">
											<a href="#">Fale Conosco</a>
											<ul>
												<li class="menu-item-has-children">
													<a href="#">Fale Conosco</a>
													<ul>
														<li><a href="#">Serviços</a></li>
														<li><a href="#">Serviços</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children">
													<a href="#">Fale Conosco</a>
													<ul>
														<li><a href="#">Serviços</a></li>
														<li><a href="#">Serviços</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><a href="#">Fale Conosco</a></li>
									</ul>
								</li>
							</ul>
						</li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                    </ul>
                </nav>
                <!--============================ /NAVIGATION ============================-->
                
                <button class="nav-btn show-md fright">
                    <i class="fa fa-bars fa-2x"></i>
                </button>
				
            </div>
        </div>
    </header>
    <!--============================ /HEADER ============================-->

    <!--============================ SLIDER ============================-->
    <div class="wrapper">
        <div class="flexslider">
            <ul class="slides">
                <li><img src="img/slide1.jpg" alt=""></li>
                <li><img src="img/slide2.jpg" alt=""></li>
            </ul>
        </div>
    </div>
    <!--============================ /SLIDER ============================-->
    
    <?php include 'GUI.htm'; ?>

    <!--============================ MAIN CONTENT ============================-->
    <section class="wrapper bg-white">
        <div class="row">
			
            <div class="col-md-4">
                <img src="img/thumb.jpg" alt="thumb">
                <h3>Lorem Ipsum</h3>
                <hr class="spacer-10">
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>

            <div class="col-md-4">
                <img src="img/thumb.jpg" alt="thumb">
                <h3>Lorem Ipsum</h3>
                <hr class="spacer-10">
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>

            <div class="col-md-4">
                <img src="img/thumb.jpg" alt="thumb">
                <h3>Lorem Ipsum</h3>
                <hr class="spacer-10">
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>

        </div>
    </section>
    <!--============================ /MAIN CONTENT ============================-->

    <!--============================ FOOTER ============================-->
    <footer>
        <div class="wrapper bg-dark text-white">
            <div class="row">

                <div class="col-md-3">
                    <h5>Lorem Ipsum</h5>
                    <hr class="spacer-10">
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>

                <div class="col-md-3">
                    <h5>Lorem Ipsum</h5>
                    <hr class="spacer-10">
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>

                <div class="col-md-3">
                    <h5>Lorem Ipsum</h5>
                    <hr class="spacer-10">
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>

                <div class="col-md-3">
                    <h5>Lorem Ipsum</h5>
                    <hr class="spacer-10">
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>

            </div>
        </div>

        <div class="bg-darker">
            <div class="row text-white">
                <div class="col-12 pad-05 align-center no-spacer">
                    <p><small>© 2016 Spaceman 1.8.5 Framework. Desenvolvido por <a class="no-underline" href="">V.</a></small>
                    </p>
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