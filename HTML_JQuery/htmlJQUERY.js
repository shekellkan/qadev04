var drawTable = function(size){
	table = $('<table  border="1" cellpadding="5" size="auto"></table>');	
	for(var i = 0; i<size; i++){
		var tr = $('<tr></tr>');
		table.append(tr);
		for(var j = 0; j<size ; j++){
			var td = $('<td></td>');
			tr.append(td);
			td.text(j);
		}
	}
	$('body').text('').append(table);
};

var attachListeners = function(){
	$('td').on('click', function(event){
		console.log('click in the cell', event.target);
		$(event.target).text('change text');
	});
};
/*
$('document').on('click', 'td', function(event){
	console.log('click in the cell!!', event.target);
	$(event.target).text('change text');
});

 $(document).on('click','td',function(event){
	console.log('click in the cell!!', event.target);        
});
*/