
// This Code is Used to View files appended to a FormDate Object

for (let pair of fd.entries()) {
	console.log(pair[0] + ", " + pair[1]);
}


Examples 

let fd = new FormData()   // your Have created a New Formdata

fd.append('username', 'emeka88')
fd.append('password', '12345@admin')
fd.append('sex', 'male')
fd.append('counrty', 'Nigeria')

// Now we want to  veiw the appended pairs of data in the console before sending it to our
// API endpoints or Database.

console.log(fd)         //This will not show you anything

for (key in fd) {
	console.log(key);   //This will not also show you anything
}


//  To view you Key pair Data in your Formdata Please Use This 
//  Recommended

for (let pair of fd.entries()) {
	console.log(pair[0] + ", " + pair[1]);
}       

//  Thank You.
