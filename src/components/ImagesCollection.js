import React from 'react';

const ImagesCollection = ({ person }) => {
	switch(person){
		case "Luke Skywalker":
			return <img src="https://img.pngio.com/star-wars-a-new-hope-luke-skywalker-png-by-metropolis-hero1125-on-luke-skywalker-png-802_996.png" alt="img" height="200px"/>
		case "C-3PO":
			return <img src="https://www.model-space.com/media/catalog/product/cache/1/thumbnail/1280x/9df78eab33525d08d6e5fb8d27136e95/s/s/ss2171_1500.png" alt="img" height="200px"/> 
		case "R2-D2":
			return <img src="https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdb6.png" alt="img" height="200px"/> 
		case "Darth Vader":
			return <img src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/11/darth-vader-transparent-image.png?fit=608%2C514" alt="img" height="200px"/> 
		case "Leia Organa":
			return <img src="https://img.pngio.com/leia-organa-png-vector-clipart-psd-peoplepngcom-leia-organa-png-400_729.png" alt="img" height="200px"/> 
		case "Owen Lars":
			return <img src="https://i.pinimg.com/originals/b5/3a/5a/b53a5ae9a90265578ecec1a99b0134cc.png" alt="img" height="200px"/> 
		case "Beru Whitesun lars":
			return <img src="http://wookiee.ru/wp-content/uploads/2014/01/berulars_detail.png" alt="img" height="200px"/> 
		case "R5-D4":
			return <img src="https://vignette.wikia.nocookie.net/starwars/images/7/70/R5-D4-Droidography.png/revision/latest/scale-to-width-down/180?cb=20190823071450" alt="img" height="200px"/> 
		case "Biggs Darklighter":
			return <img src="https://vignette.wikia.nocookie.net/swmerchandise/images/0/06/Biggs_Darklighter_with_Blaster_Pistol_%2869758%29_P.gif/revision/latest?cb=20140701000435" alt="img" height="200px"/> 
		case "Obi-Wan Kenobi":
			return <img src="https://img.pngio.com/star-wars-the-clone-wars-obi-wan-kenobi-png-by-metropolis-hero1125-obi-wan-png-809_988.png" alt="img" height="200px"/> 
		default:
			return <img src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png" alt="" height="200px"/>	
	}
}

export default ImagesCollection;