$(document).ready(function(){
	
	$('#price-range-submit').hide();

	$("#min_price,#max_price").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());

	  if (min_price_range > max_price_range) {
		$('#max_price').val(min_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });
	  
	});


	$("#min_price,#max_price").on("paste keyup", function () {                                        

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());
	  
	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100;
			
			$("#min_price").val(min_price_range);		
			$("#max_price").val(max_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$(function () {
	  $("#slider-range").slider({
		range: true,
		orientation: "horizontal",
		min: 0,
		max: 10000,
		values: [0, 10000],
		step: 100,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price").val(ui.values[0]);
		  $("#max_price").val(ui.values[1]);
		}
	  });

	  $("#min_price").val($("#slider-range").slider("values", 0));
	  $("#max_price").val($("#slider-range").slider("values", 1));

	});

	$("#slider-range,#price-range-submit").click(function () {

	  var min_price = $('#min_price').val();
	  var max_price = $('#max_price').val();

	  $("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");
	});

});



$(document).ready(function(){
	
	$('#price-range-submit').hide();

	$("#min_price-two,#max_price-two").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price-two").val());

	  var max_price_range = parseInt($("#max_price-two").val());

	  if (min_price_range > max_price_range) {
		$('#max_price-two').val(min_price_range);
	  }

	  $("#slider-range-one").slider({
		values: [min_price_range, max_price_range]
	  });
	  
	});


	$("#min_price-two,#max_price-two").on("paste keyup", function () {                                        

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price-two").val());

	  var max_price_range = parseInt($("#max_price-two").val());
	  
	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100;
			
			$("#min_price-two").val(min_price_range);		
			$("#max_price-two").val(max_price_range);
	  }

	  $("#slider-range-one").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$(function () {
	  $("#slider-range-one").slider({
		range: true,
		orientation: "horizontal",
		min: 0,
		max: 10000,
		values: [0, 10000],
		step: 100,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price-two").val(ui.values[0]);
		  $("#max_price-two").val(ui.values[1]);
		}
	  });

	  $("#min_price-two").val($("#slider-range-one").slider("values", 0));
	  $("#max_price-two").val($("#slider-range-one").slider("values", 1));

	});

	$("#slider-range-one,#price-range-submit").click(function () {

	  var min_price = $('#min_price-two').val();
	  var max_price = $('#max_price-two').val();

	  $("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");
	});

});



const mainHeader = document.querySelector(".main-header")
const sideMenu = document.querySelector(".side-menu")
const sideMenuItems = document.querySelectorAll(".side-menu-item")
const sideMenuCloseDiv = document.querySelector(".side-menu-close-div")

const HEADER_HEIGHT = 70
const TOP_DISTANCE_TO_HIDE_THE_HEADER = 330
const SIDE_MENU_WIDTH = 1000

const DEFAULT_TRANSITION_TIME = 350

// SHOW/HIDE MAIN HEADER ON SCROLL
const showMainHeader = () => mainHeader.style.top = "0"
const hideMainHeader = () => mainHeader.style.top = `-${HEADER_HEIGHT}px`
let previousScrollPosition = window.pageYOffset

const toggleMainHeader = window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset
    if (previousScrollPosition > currentScrollPosition || currentScrollPosition < TOP_DISTANCE_TO_HIDE_THE_HEADER) showMainHeader()
    else hideMainHeader()
    previousScrollPosition = currentScrollPosition
}

// TOGGLE SIDE MENU
let sideMenuState = 0
const openSideMenu = () => {
    sideMenu.style.left = "0"    
    setTimeout(() => sideMenuCloseDiv.style.background = "rgba(0, 0, 0, 0.6)" , DEFAULT_TRANSITION_TIME);
}

const closeSideMenu = () => {
    sideMenuCloseDiv.style.background = "rgba(0, 0, 0, 0)"
    setTimeout(() => sideMenu.style.left = `-${SIDE_MENU_WIDTH}px`, DEFAULT_TRANSITION_TIME);
    sideMenuState = 0
}

const toggleSideMenu = n => {
    sideMenuState += n
    switch (sideMenuState) {
        case 1:
            openSideMenu()
            break
        default:
            closeSideMenu()
    }
}

const closeSideMenuSelectingItem = (() => sideMenuItems.forEach((item) => item.addEventListener("click", closeSideMenu)))()
sideMenuCloseDiv.addEventListener("click", closeSideMenu)
