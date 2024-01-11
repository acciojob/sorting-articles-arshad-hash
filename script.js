//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 
               'Pierce the Veil', 'Norma Jean', 'The Bled', 
               'Say Anything', 'The Midway State',
               'We Came as Romans', 'Counterparts',
               'Oh, Sleeper', 'A Skylit Drive', 
               'Anywhere But Here', 'An Old Dog'];

// Remove "A," "An," and "The" and trim whitespace
const cleanedBands = bands.map(band => band.replace(/^(A|An|The)\s+/i, '').trim());
 console.log(cleanedBands);
// Sort the cleaned bands in ascending order
cleanedBands.sort((a, b) => a.localeCompare(b));
console.log(cleanedBands);

// Reattach "A," "An," and "The" to the sorted bands
const sortedBands = cleanedBands.map(cleanedBand => {
    const articleMatch = bands.find(band => band.includes(cleanedBand));
    return articleMatch ? articleMatch : cleanedBand;
});


let body=document.querySelector("body");


document.addEventListener("DOMContentLoaded",() =>{
	console.log('i am ready')
	let list = document.createElement("ul");
for (let i = 0; i < sortedBands.length; i++) {
	
	let li= document.createElement("li");
	li.innerText=sortedBands[i];
	list.append(li);
	
	
}body.append(list);
	
});

