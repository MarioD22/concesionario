/*document.write(`
<div class="container">
<header class="row align-items-center">
					<div class="col-4">
						<img
							class="logoBalangione"
							src="../images/logoBalangione.jpg"
							alt="Balangione" />
					</div>
					<div class="col-8">
						<nav class="menu">
							<a class="btn btn-primary" href="../index.html" role="button"
								>Inicio</a
							>
							<a class="btn btn-primary" href="#" role="button">Repuestos</a>
							<a class="btn btn-primary" href="#" role="button">Pedidos</a>
							<a class="btn btn-primary" href="#" role="button">Contacto</a>
						</nav>
					</div>
	</header>
	</div>
`);*/
document.write(`
<div class="container"> <!-- inicio Contenedor del Header-->
						<header class="row align-items-center"><!--con la clase row se divide el header en 12 columnas-->
							<div class="col-4"> <!-- las primeras 4 columnas se usan para el logo-->
								<img
									class="logoBalangione"
									src="../images/logoBalangione.jpg"
									alt="Balangione" />
							</div>

							<div class="col-8"><!-- se toman 8 de las 12 columnas para el menu -->

								<nav class="menu desktop">			<!--inicio del menu con 2 clases menu y desktop-->						
										<ul class="main-links"> <!--inicio de lista tamaño escritorio-->
										        <!--List items-->
										  <li >
											<a class="btn btn-primary anim" href="../index.html">Inicio</a>											
										  </li>

										  <li class="btn btn-primary anim dropdown-li" >
											Repuestos
											<ul class="dropdown"><!--inicio del submenu con la clase dropdown del menu-->
													<li>
														<a class="btn btn-primary" href="../repuestos/repuestos.html" role="button" >Repuesto</a>
													</li>
													<li >
														<a class="btn btn-primary" href="https://partscatalog.deere.com/jdrc/">JDParts</a>
													</li>
													<li class="btn btn-primary l1">
														<a class="btn btn-primary" href="https://partscatalog.deere.com/jdrc/">Promos</a>
													</li>
											</ul> <!--fin clase dropdown del menu-->

										  </li>
										  <li >
											<a class="btn btn-primary anim" href="#" role="button">Pedidos</a>
											</li>
										  <li >
											<a class="btn btn-primary anim" href="../contacto/contacto.html" role="button">Contacto</a>
										</li>
										  
										</ul> <!--fin de la lista tamaño escritorio-->
									  
								</nav> <!--fin del menu con 2 clases menu y desktop-->




										
													<!-- Botón de menu tipo hamburguesa. Aparecerá solo en modo mobile. -->
													<div class="btn-menu mobile" id="btn-menu" onclick="Menu()">
														<!-- dentro ponemos 3 div, uno para cada línea -->
														<div class="linea"></div>
														<div class="linea"></div>
														<div class="linea"></div>
													</div>
											
													<!-- Lista de botones para el menu mobile -->
													<nav class="btn-list mobile" id="btn-list">
														<a href="../index.html">Inicio</a>
														<a href="../repuestos/repuestos.html">Repuesto</a>
														<a href="https://partscatalog.deere.com/jdrc/">JDParts</a>
														<a href="https://partscatalog.deere.com/jdrc/">Promos</a>
														<a href="#">Pedidos</a>
														<a href="../contacto/contacto.html">Contacto</a>
													</nav>

							</div> <!--fin de la clase col-8 -->
						</header>
			</div>
`);
