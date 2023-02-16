console.log("Server!!!");

async function getBoys() {
	const res = await fetch("http://localhost:8000/api/boys");
	const data = await res.json();
	console.log(data);
}

getBoys();
