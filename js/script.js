var buscar = angular.module("buscar",[]);
buscar.controller("busqueda", function($scope){

	$scope.producto = [{
		nom:"Computador De Escritorio",
		marca:"Dell",
		picture:"image/1.jpg",
		Details:"Procesador Intel Core, 1TB, 4GB RAM, CORE i7"
	
	},{
		nom:"Headset",
		marca:"Microsoft",
		picture:"image/2.jpg",
		Details:"Sonido envolvente 7.1,20 Hz a 20 kHz,USB"
	
	},{
		nom:"Control para PC",
		marca:"Logitech",
		picture:"image/3.jpg",
		Details:"Inalambrico,Joystick, Oferta"
	
	},{
		nom:"Bocinas",
		marca:"Dell",
		picture:"image/4.jpg",
		Details:"53 Hz - 50 kHz"
	
	},{
		nom:"Teclado",
		marca:"Dell",
		picture:"image/5.jpg",
		Details:"Español, USB, Oferta"
	
	},{
		nom:"Pantalla Led",
		marca:"Sony",
		picture:"image/6.jpg",
		Details:"Full HD, 24” "
	
	},{
		nom:"Laptop",
		marca:"HP",
		picture:"image/7.jpg",
		Details:"CORE i7, 4GB RAM"
	
	},{
		nom:"Laptop",
		marca:"HP",
		picture:"image/8.jpg",
		Details:"CORE i5, 6GB RAM"
	
	},{
		nom:"Mouse",
		marca:"MODECOM",
		picture:"image/9.jpg",
		Details:"Gamer"
	
	},{
		nom:"Auriculares",
		marca:"Beats",
		picture:"image/10.jpg",
		Details:"15 Hz a 18 kHz, Oferta"
	
	},{
		nom:"Cable VGA",
		marca:"Dell",
		picture:"image/11.jpg",
		Details:"Video via VGA"
	
	},{
		nom:"Cable VGA a HDMI",
		marca:"Dell",
		picture:"image/12.jpg",
		Details:"VGA a HDMI, Oferta"
	
	},{
		nom:"Impresora",
		marca:"Canon",
		picture:"image/13.jpg",
		Details:"MULTIFUNCIONAL, INALAMBRICA"
	
	},{
		nom:"Computador De Escritorio",
		marca:"AOC",
		picture:"image/14.jpg",
		Details:"Corei5, 6GB RAM"
	
	},{
		nom:"Computador De Escritorio",
		marca:"Dell",
		picture:"image/15.jpg",
		Details:"Corei3 ,4GB RAM, 512GB, Oferta"
	
	},{
		nom:"Fuente de poder",
		marca:"HP",
		picture:"image/16.jpg",
		Details:"Touch, 8GB RAM, 1TB"
	
	},{
		nom:"Accesorio",
		marca:"XTECH",
		picture:"image/17.jpg",
		Details:"600 WATT, fuente de poder"
	
	},{
		nom:"Disco duro",
		marca:"WD",
		picture:"image/18.jpg",
		Details:"Disco duro, 6TB"
	
	},{
		nom:"Microfono",
		marca:"Sovawn",
		picture:"image/19.jpg",
		Details:"Microfono, Profesional, USB, Oferta"
	
	},{
		nom:"USB",
		marca:"Kingston",
		picture:"image/20.jpg",
		Details:"USB, 8GB"
	
	},{
		nom:"Headset",
		marca:"Sony",
		picture:"image/21.jpeg",
		Details:"Sonido envolvente 7.1,20 Hz a 20 kHz,USB"
	}]
});