module.exports = function(rgbImage, alphaImage, canvas) {
	if (!canvas) { canvas = document.createElement("canvas"); }
	canvas.width = Math.max(alphaImage.width, rgbImage.width);
	canvas.height = Math.max(alphaImage.height, rgbImage.height);
	var ctx = canvas.getContext("2d");
	ctx.save();
	ctx.drawImage(rgbImage,0,0);
	ctx.globalCompositeOperation = "destination-in";
	ctx.drawImage(alphaImage,0,0);
	ctx.restore();
	return canvas;
};


