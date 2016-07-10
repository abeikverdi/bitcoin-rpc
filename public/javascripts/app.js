$(document).ready(function(){
	$("#check").click(function(){
		$("#loader").removeClass('hidden')
		$("#check").prop('disabled', true)
		Materialize.toast('Searching...', 2000)
		$("#score").text("")
		var data = {}
		data.txid =  $('#txid').val();
	    $.ajax({
			type: 'POST',
			url: '/',
			data: JSON.stringify(data),
			contentType: 'application/json',
			success: function(result){
				$("#check").prop('disabled', false)
				$("#loader").addClass('hidden')
					$("#score").text(result)
				}
		});
	})
});