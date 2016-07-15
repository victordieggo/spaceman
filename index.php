<!DOCTYPE HTML>
<html lang="pt-br">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Spaceman 1.9</title>
    <link rel="icon" href="img/icon.png" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400" rel="stylesheet">
    <link rel="stylesheet" href="css/global-styles.css" type="text/css" media="screen" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
</head>

<body>
	
    <div class="screen-cover fixed full-width hide"></div>

    <!--============================ HEADER ============================-->
    <header class="bg-darker text-white">
        <div class="wrapper">
            <div class="row">
                <div class="col-6 vcenter">
                    <h3 class="inline text-uppercase">Spaceman</h3>
                    <small>1.9</small>
                </div><!--
                AVOID DISPLAY INLINE LINE BREAK
                --><div class="col-6 vcenter align-right">
                
                    <!--============================ NAVIGATION ============================-->
                    <nav class="main-nav inline-block align-left">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li class="menu-item-has-children">
                                <a href="#">Sobre</a>
                                <ul>
                                    <li class="menu-item-has-children"> <a href="#">Serviços</a>
                                        <ul>
                                            <li><a href="#">Serviços</a></li>
                                            <li><a href="#">Serviços</a></li>
                                        </ul>
                                    </li>
                                <li class="menu-item-has-children"> <a href="#">Serviços</a>
                                    <ul>
                                        <li><a href="#">Fale Conosco</a></li>
                                        <li><a href="#">Dolor Sit</a></li>
                                        <li> <a href="#">Fale Conosco</a></li>
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

    <!--============================ MAIN CONTENT ============================-->
    <section class="wrapper">
        <div class="row bg-white">

			<div class="col-12 bg-dark text-white pad-10">
				<h3>GUI - VISUAL GUIDE</h3>
			</div>

			<!-- BEGIN BOTÕES/INPUTS -->
			<div class="col-md-7">
				<h1>h1 <strong>lorem</strong> ipsum dolor sit amet</h1>
				<h2>h2 lorem ipsum dolor sit amet</h2>
				<h3>h3 lorem ipsum dolor sit amet</h3>
				<h4>h4 lorem ipsum dolor sit amet</h4>
				<h5>h5 lorem ipsum dolor sit amet</h5>
				<h6>h6 lorem ipsum dolor sit amet</h6>
			</div>

			<div class="col-md-5">
				<p>p lorem ipsum dolor sit amet</p>
				<p><strong>p strong lorem ipsum dolor sit amet</strong></p>
				<p><i>p italic lorem ipsum dolor sit amet</i></p>
				<p><small>p small lorem ipsum dolor sit amet</small></p>
				<hr class="bg-dark spacer-10">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et enim dui. Nunc accumsan tortor sit amet risus malesuada, eu viverra eros hendrerit. Sed nec ipsum eu tellus viverra finibus ut eget justo.</p>
			</div>

			<div class="col-12">
				<a class="btn btn-small">btn</a>
				<a class="btn btn-small btn-sucess">btn sucess</a>
				<button class="btn btn-small btn-info">btn info</button>
				<input class="btn btn-small btn-warning" type="button" value="btn warning" />
				<input class="btn btn-small btn-danger" type="submit" value="btn danger" />
				<input class="input-small auto-width" type="text" placeholder="lorem ipsum" />
				<select class="input-small auto-width">
					<option>opção</option>
				</select>
			</div>

			<div class="col-12 spacer-bottom-10">
				<a class="btn">btn</a>
				<a class="btn btn-sucess">btn sucess</a>
				<button class="btn btn-info">btn info</button>
				<input class="btn btn-warning" type="button" value="btn warning" />
				<input class="btn btn-danger" type="submit" value="btn danger" />
				<input class="auto-width" type="text" placeholder="lorem ipsum" />
				<select class="auto-width">
					<option>opção</option>
				</select>
			</div>

			<div class="col-12 spacer-bottom-10">
				<a class="btn btn-large">btn</a>
				<a class="btn btn-large btn-sucess">btn sucess</a>
				<button class="btn btn-large btn-info">btn info</button>
				<input class="btn btn-large btn-warning" type="button" value="btn warning" />
				<input class="btn btn-large btn-danger" type="submit" value="btn danger" />
				<input class="input-large auto-width" type="text" placeholder="lorem ipsum" />
				<select class="input-large auto-width">
					<option>opção</option>
				</select>
			</div>

		</div>
    </section>
    <!--============================ /MAIN CONTENT ============================-->

    <!--============================ FOOTER ============================-->
    <footer class="bg-darker text-white">
        <div class="wrapper">
            <div class="row">
                <div class="col-12 pad-05 align-center">
                    <small>Spaceman Framework 1.9 - Desenvolvido por <a class="no-underline" href="" target="_blank">V.</a></small>
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