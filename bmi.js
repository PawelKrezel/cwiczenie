function bmi()
{
	var waga = document.getElementById('waga').value;
	var wzrost = document.getElementById('wzrost').value;
	wzrost = wzrost/100;

	var bmi = waga/(wzrost*wzrost);
	bmi = Math.round(bmi, 2);
	document.getElementById('wynik').innerHTML = "twoje BMI wynosi : "+bmi;
}
function zapisz()
{
	document.getElementById('powitanie').innerHTML = "Hejka, "+document.getElementById('imie').value+"! ^.^";
}

var suma_ocen = 0;
var suma_wag = 0;
function srednia()
{
	var ocena = document.getElementById('ocena').value;
	var waga = document.getElementById('waga-oceny').value;

	if (ocena != "" && waga != "")
	{
	suma_ocen += ocena*waga;
	suma_wag += waga*1;

	var srednia = suma_ocen/suma_wag;

	document.getElementById('oceny-output').innerHTML += '<div class="ocena"><div class="ocena-gora" title="ocena">'+ocena+'<hr></div><div class="ocena-dol" title="waga oceny">'+waga+'</div></div>'
	document.getElementById('wynik-ocen').innerHTML = 'twoja średnia wynosi '+srednia;
	}
	else
	{
		alert("Wartości w polach \"ocena\" i \"waga\" nie mogą być puste!!!")
	}
}
