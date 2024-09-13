const sub = document.querySelector(".submit");
const n1 = document.getElementById("name1");
const n2 = document.getElementById("name2");
const res = document.querySelector(".rel");
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
	n1.value = "";
	n2.value = "";
	res.innerText = "";
});

sub.addEventListener("click", () => {
	let rel = getRel(n1.value, n2.value);
	res.innerText = rel;
});

var sp = /[^a-zA-Z]/g;

function getRel(name1, name2) {
	let boy = name1.toLowerCase().replace(sp, '').split("");
	let girl = name2.toLowerCase().replace(sp, '').split("");
	let val = boy.length > girl.length ? charLen(boy, girl) : charLen(girl, boy);
	console.log(val)

	//flames logic
	let flames = ["Friends", "Lovers", "Affection", "Marriage", "Enemy", "Siblings"];
	
	let Index = 0;
	for (let i = flames.length; i > 1; i--) {
		Index = (Index + val - 1) % i;
		flames.splice(Index, 1);
	}
	console.log(flames);

	return flames[0];
}

//count
function charLen(lar, small) {

	for (let i = 0; i < lar.length; i++) {

		for (let j = 0; j < small.length; j++) {

			// console.log(i,j,lar[i],small[j]);
			if (lar[i] == small[j]) {
				lar.splice(i, 1);
				small.splice(j, 1);
				i = i - 1;
				j = j - 1;
			}

		}
	}
	let len = lar.concat(small);
	return len.length;
}



