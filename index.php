<!DOCTYPE HTML>
<html lang="pt-br">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Spaceman Framework</title>
    <link rel="icon" href="img/icon.png" />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,600' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/global-styles.css" type="text/css" media="screen" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
</head>

<body>

    <!-- BEGIN HEADER-TOP -->
    <div id="header-top">
        <div class="wrapper">
            <div class="grid txt-white txt-small">
                <div class="sixcol">
                    Version 1.6.2
                </div>
                <div class="sixcol align-right">
                    I'm gonna chase you out of earth!
                </div>
            </div>
        </div>
    </div>
    <!-- END HEADER TOP-->

    <!-- BEGIN HEADER -->
    <header class="wrapper">
        <div class="grid">
            <div class="sixcol">
                <a class="logo" href=""></a>
            </div>
            <div class="sixcol align-right">
                <!-- BEGIN NAVIGATION -->
                <nav>
                    <ul class="menu">
                        <li><a href="">Home</a>
                        </li>
                        <li><a href="">Sobre</a>
                        </li>
                        <li><a href="">Aliens</a>
                        </li>
                        <li><a href="">Fale</a>
                        </li>
                    </ul>
                </nav>
                <!-- END NAVIGATION -->
            </div>
        </div>
    </header>
    <!-- END HEADER -->

    <!-- BEGIN SLIDER -->
    <div class="wrapper">
        <div class="flexslider">
            <ul class="slides">
                <li><img src="img/slide1.jpg" alt="" />
                </li>
            </ul>
        </div>
    </div>
    <!-- END SLIDER -->
	
    <!-- BEGIN CONTENT -->
    <div id="content" class="wrapper">
        <div class="grid">
            <div class="threecol">
                <img src="img/thumb.jpg" alt="thumb" />
                <h2>Lorem Ipsum</h2>
                <hr/>
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
            <div class="threecol">
                <img src="img/thumb.jpg" alt="thumb" />
                <h2>Lorem Ipsum</h2>
                <hr/>
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
            <div class="threecol">
                <img src="img/thumb.jpg" alt="thumb" />
                <h2>Lorem Ipsum</h2>
                <hr/>
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
            <div class="threecol">
                <img src="img/thumb.jpg" alt="thumb" />
                <h2>Lorem Ipsum</h2>
                <hr/>
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>

            <div class="twelvecol">
                <hr/>
            </div>

            <div class="fourcol">
                <img src="img/thumb.jpg" alt="thumb" />
                <h2>Lorem Ipsum</h2>
                <hr/>
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
            <div class="fourcol">
                <img src="img/thumb.jpg" alt="thumb" />
                <h2>Lorem Ipsum</h2>
                <hr/>
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
            <div class="fourcol">
                <img src="img/thumb.jpg" alt="thumb" />
                <h2>Lorem Ipsum</h2>
                <hr/>
                <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket. Bresaola shankle leberkas t-bone strip steak, capicola chuck hamburger bacon pork meatloaf ball...</p>
            </div>
        </div>
    </div>
    <!-- END CONTENT -->

    <!-- BEGIN FOOTER -->
    <footer>
        <div class="wrapper txt-white">
            <div class="grid">
                <div class="threecol">
                    <h3>Lorem Ipsum</h3>
                    <hr/>
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>
                <div class="threecol">
                    <h3>Lorem Ipsum</h3>
                    <hr/>
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>
                <div class="threecol">
                    <h3>Lorem Ipsum</h3>
                    <hr/>
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>
                <div class="threecol">
                    <h3>Lorem Ipsum</h3>
                    <hr/>
                    <p>Bacon ipsum dolor amet strip steak flank beef pastrami tail, shoulder kielbasa tenderloin fatback brisket...</p>
                </div>
            </div>
        </div>
    </footer>
    <!-- END FOOTER -->

    <div id="copyright">
        <div class="grid txt-white txt-small">
            <div class="twelvecol align-center">
                <p>© 2015 Spaceman 1.6.2 Framework. | Desenvolvido por V. de Várias Fita.</p>
            </div>
        </div>
    </div>

    <!-- BEGIN JQUERY // PLACED AT THE BOTTOM OF THE PAGE FOR FASTER LOADING -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="js/global-js.js"></script>
    <script type="text/javascript">
        $(window).load(function() {
            $('.flexslider').flexslider({
                controlNav: false,
            });
        });
    </script>
    <!-- END JQUERY -->

</body>
</html>