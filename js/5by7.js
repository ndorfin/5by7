/* utils */
log = function(obj){
	if (window.console) {
		window.console.log(obj);
	}
};

/* Config */
char_start = 32;
char_end = 126;
space_character = 32;

var new_string = "";
var base_string = "";

/* Renderers */
render_character = function(character){
	frame = "";
	character_string = "";
	output_binary = 'c_' + character;
	if (character <= char_end && character >= char_start){
		frame = eval(output_binary);
	}else{
		frame = c_0;
	}
	character_string += "<span class='character'>";
	for (c=0; c<frame.length; c++){
		pixel = frame.charAt(c);
		character_string += render_pixel(pixel);
	}
	character_string += "</span>";
	return character_string;
}

render_pixel = function(pixel){
	output_char_pixel = "";
	if (pixel == "0"){
		output_char_pixel = "<i></i>";
	}else{
		output_char_pixel = "<b></b>";
	}
	return output_char_pixel;
}

/* init */
$(document).ready(function(){
	base_string = $('.5by7').text();
	string_in_words = [];
	string_in_words = base_string.split(" ");
	for (wi=0; wi<string_in_words.length; wi++){
		new_string += "<span class='word'>";
		word = string_in_words[wi];
		for (ci=0; ci<word.length; ci++){
			char_code = word.charCodeAt(ci);
			new_string += render_character(char_code);
		}
		if ((wi+2) <= string_in_words.length){
			space = render_character(32);
			new_string += space;
		}
		new_string += "</span>";
	}
	$('.5by7').html(new_string);
});