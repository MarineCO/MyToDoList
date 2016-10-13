console.log('checkbox');

(function main () {

//Click Add

	$('#addTasksBtn').on('click', function(){

	console.log('hello');

	$('.list').append('<li> <input type="checkbox" class="task"> </li>')

	});



})();