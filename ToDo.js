console.log('checkbox');

(function main () {

//Click Add

$('#addTasksBtn').on('click', function(){

	console.log('hello');

	var addTask = $('input[name=addTask]').val();

	$('.list').append('<li>' + '<input type="checkbox" class="task">' + addTask + '</li>')

});


//Click hide tasks to do

	$('#hideTasksToDoBtn').click(function(){

		console.log('ok');

		$('input[type=checkbox]:not(:checked)').parent('li').hide();
		$('input[type=checkbox]:checked').parent('li').show();

	});


})();