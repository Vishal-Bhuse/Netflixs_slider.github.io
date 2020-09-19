const centerdiv  = document.querySelector("#centediv");



    	fetch('https://jsonplaceholder.typicode.com/photos?_limit=27').then((apidata) => {
             return apidata.json();
    	}).then((jsondata) =>{
                // console.log(jsondata);

                jsondata.map((val) => {
                	key = val.id;
                	let img = document.createElement("img");
                	// img.src = val.url;
                	img.src = `https://picsum.photos/200/290?random=${val.id}`;
                	centerdiv.appendChild(img);

                	console.log(val.url);
                });
    	});