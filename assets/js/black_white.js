function elementSupportsAttribute(element,attribute){
	var test = document.createElement(element);
	if (attribute in test){
		return true;
	}
	else{
		return false;
	}
}

$(document).ready(function(){

	$('.page-header .responsive-icon').click(function(){
		var ulPos = $('.page-header ul').position().left;
		if (ulPos < 0)
		{
			$('.page-header ul').animate({left:'50%'},'slow');
		}
		else
		{
			$('.page-header ul').animate({left:'-50%'},'slow');
		}
	});

	$('.page-footer .responsive-icon').click(function(){
		var ulPos = $('.page-footer ul').position().left;
		if (ulPos < 0)
		{
			$('.page-footer ul').animate({left:'50%'},'slow');
		}
		else
		{
			$('.page-footer ul').animate({left:'-50%'},'slow');
		}
	});

	$('.sub-list').hide();
	$('.sub-list-one').hide();

	$('.has-sub-list').click(function(){
		var $thisClosestSubList = $(this).next('.sub-list');
		$thisClosestSubList.slideToggle("slow");
		$(this).children('span').toggleClass('genericon-rightarrow genericon-downarrow');
	});

	$('.sub-list-has-sub-list').click(function() {
		var $thisChildren = $(this).next('.sub-list-one');
		$thisChildren.slideToggle("slow");
		$(this).children('span').toggleClass('genericon-rightarrow genericon-downarrow')
	})

	if (!elementSupportsAttribute('input','placeholder')){
		var inputPlaceholder = document.getElementsByClass('placeholder-backup');
		var nameInput = document.getElementByID('yourname');
		var emailInput = document.getElementByID('youremail');
		var subscribeInput = document.getElementsByClass('email-field');
		nameInput.text('Your Name');
		emailInput.text('Your E-Mail Address');
		subscribeInput.text('Your E-Mail Address');
		inputPlaceholder.css('color','#c0c0c0')
		inputPlaceholder.css('font-stye','italic')
		inputPlaceholder.click(function(){
			nameInput.text('');
		});
		inputPlaceholder.focusOut(function(){
			var value = inputPlaceholder.val();
			if (value.length==0)
			{
				inputPlaceholder.text('Your Name');
			}
		});
	}

	if (!elementSupportsAttribute('textarea','placeholder')){
		var messageArea = document.getElementsByClass('large-input');
		messageArea.text('Your Message');
		messageArea.css('color','#c0c0c0');
		messageArea.css('font-style','italic');
		inputPlaceholder.click(function(){
			messageArea.text('');
		});
	}

});