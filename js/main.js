$(document).ready(function(){
		
	//click add new allergy button
	$(".btn-add-allery").click(function(){		
		$(".search_list_div").fadeIn();
	});
	$(".search_reset").click(function(){		
		$(".search_list_div").fadeOut();
	});
	
	//add allergy modal
	$(".list_btn").click(function(){
		$('#addAllergyModal').modal({
		  backdrop: 'static',
		  keyboard: false
		}); 
	});
	
	
});
  