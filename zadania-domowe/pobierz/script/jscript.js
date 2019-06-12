$('#pobierzDane').click(function(){
$("<div id='daneProgramisty'></div>").appendTo('section');
fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
.then(res=>res.json())
.then(res=>{
$('<p>').text('Imie:  '+res.imie).appendTo('#daneProgramisty');
$('<p>').text('Nazwisko:  '+res.nazwisko).appendTo('#daneProgramisty');
$('<p>').text('Zawod:  '+res.zawod).appendTo('#daneProgramisty');
$('<p>').text('Firma:  '+res.firma).appendTo('#daneProgramisty');    
}); 
});
