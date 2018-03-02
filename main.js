$(function() {
	console.log("yes")

	// event handlers
	$("#btn-click").click(function() {
		if ($('input').val() !== '') {
			var input = $("input").val()
			console.log(input)
			$('ol').append('<li><a href="">x</a> - ' + input + '</li>');
		}
		$('input').val('');
	});

	$(document).on('click', 'a', function (event) {
		event.preventDefault();
		$(this).parent().remove();
	})

});