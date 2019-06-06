var rozmiar = 16;
function minus() {
	if (rozmiar > 2) {rozmiar--;}
	var styl = "font-size: "+rozmiar.toString()+"px;";
	document.getElementById('body').setAttribute('style', styl);
}
function plus() {
	rozmiar++;
	var styl = "font-size: "+rozmiar.toString()+"px;";
	document.getElementById('body').setAttribute('style', styl);
}
var kolory = 2;
function zmien()
{
	kolory++;
	if (kolory%2!=0)
		{
			document.getElementById('style').setAttribute('href', 'jasny.css');
			document.getElementById('zmien').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
			
		}
	else {
		document.getElementById('style').setAttribute('href', 'ciemny.css');
		
		document.getElementById('zmien').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
	}
}
function nic()
{
	document.getElementById('style').setAttribute('href', 'style.css');
}
var licz = 1;
function font()
{
	var element = document.getElementById('font');
	if (licz+1==5){licz=0;}
	licz++;
	if (licz==1)
	{
		element.setAttribute('style', "font-family: 'Roboto Condensed', sans-serif;");
	}
	if (licz==2)
	{
		element.setAttribute('style', "font-family: 'Ranga', cursive;");
	}
	if (licz==3)
	{
		element.setAttribute('style', "font-family: 'Cinzel', serif;");
	}
	if (licz == 4)
	{
		element.setAttribute('style', "font-family: 'Pacifico', cursive;");
	}
	
}
function cyk()
{
	document.getElementById('rejestracja').setAttribute('style', 'visibility:hidden;');
}