$(document).ready(function(){
	var container = $(".container");
	$.getJSON("all.json",function(objects){
		$.each(objects,function(i,object){
			if(i <= 499){
				var image = $("<div class='image'></div>");
				
				
					var ctn = $("<div></div>");
					ctn.addClass("ctn");
					var ul = $("<ul></ul>");

				$.each(object,function(index,obj){
					var bg_image = $("<div class='bg-image'></div>");
					if(index == "picture"){
						bg_image.css({"background-image":"url(" + obj +")"});
						image.append(bg_image);
					}
					var li = $("<li></li>");
					if(index == "name"){
						li.text('Name: ' + obj);
						ul.append(li);
					}
					if(index == "age"){
						li.text('Age: ' + obj);
						ul.append(li);
					}
					if(index == "email"){
						li.text('Email: ' + obj);
						ul.append(li);
					}
					if(index == "gender"){
						li.text('Gender: ' + obj);
						ul.append(li);
					}
					if(index == "balance"){
						li.text('Balance: ' + obj);
						ul.append(li);
					}
					if(index == "eyeColor"){
						li.text('Eye Color: ' + obj);
						ul.append(li);
					}
					if(index == "company"){
						li.text('Company: ' + obj);
						ul.append(li);
					}
					if(index == "password"){
						li.text('Password: ' + obj);
						ul.append(li);
					}
					if(index == "phone"){
						li.text('Phone: ' + obj);
						ul.append(li);
					}
					if(index == "adress"){
						li.text('Adress: ' + obj);
						ul.append(li);
					}
					if(index == "registered"){
						li.text('Registration: ' + obj);
						ul.append(li);
					}
					if(index == "favouriteFruit"){
						li.text('Eye Color: ' + obj);
						ul.append(li);
					}
					if(index == "friends"){
						li.text('Friends are: ' + obj);
						ul.append(li);
					}
					if(index == "about"){
						li.text('About: <br>'  + obj);
						ul.append(li);
					}
					if(index == "greeting"){
						li.text('Greeting: ' + obj);
						ul.append(li);
					}
					
				});
				ctn.append(image);
				ctn.append(ul);
				$(".container").append(ctn);
				
			}
		});
		var ctns = $(".ctn");
		$.each(ctns,function(i,ctn){
			if(i == 0){
				$(this).show('fast');
			}else{
				$(this).hide('fast');
			}
		});
		var count = 0;
		$('.next').click(function(){
			count++;
			if(count > $(ctns).length) count = 0;
			$.each(ctns,function(i,ctn){
				if(i == count){
					$(this).show('fast');
				}else{
					$(this).hide('fast');
				}
			})
		});
		
		$('.prev').click(function(){
			count--;
			if(count < 0) count =  $(ctns).length - 1;
			$.each(ctns,function(i,ctn){
				if(i == count){
					$(this).show('fast');
				}else{
					$(this).hide('fast');
				}
			})
		});
	});

});
