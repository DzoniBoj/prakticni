function promeni()
{
	const slika = document.querySelector("#slika");
	
	if (slika.src.includes("kako-nacrtati.png")) slika.src = "parabola-animacija.gif";
	else slika.src = "kako-nacrtati.png";
}
function izracunaj()
{
	const a = parseFloat(document.querySelector("#a").value);
	const b = parseFloat(document.querySelector("#b").value);
	const c = parseFloat(document.querySelector("#c").value);
	
	const d = b * b - 4 * a * c;
	if(d===0) {
		const x = ((-b) /(2 * a)).toFixed(2);
		document.querySelector("#Rezultat").textContent = "Jedinstveno resenje: " +x;
	}
	else if(d > 0)
	{
		const x1 = ((-b + Math.sqrt(d))/(2 * a)).toFixed(2);
		const x2 = ((-b - Math.sqrt(d))/(2 * a)).toFixed(2);
		document.querySelector("#Rezultat").textContent = "Realno resenje: x1 =" +x1 + " x2=" +x2;
	}
	else {
		document.querySelector("#Rezultat").textContent = "Nema realnih resenja";
	}
}
function uvecaj(slika)
{
	if(slika.classList.contains("prikazi")) slika.classList.remove("prikazi");
	else slika.classList.add("prikazi");
}
function rotiraj()
{
	const slika = document.querySelector("#rot");
	if(slika.src.includes("pobednik1.jpg")) slika.src = "pobednik2.jpg";
	else slika.src = "pobednik1.jpg";
}
function boja(b)
{
	const par = document.querySelector("#v");
	par.style.color = b;
}
let velicina = 16;
function tekst(oznaka){
	if(oznaka === "+")
	{
		velicina++;
		document.querySelector("#v").style.fontSize = velicina + "px";
	}
	else {
    velicina--;
    velicina = Math.max(0, velicina); // da ne bi dobili negativnu vrednost
    document.querySelector("#tekst").style.fontSize = velicina - 1 + "px";
  }
}
