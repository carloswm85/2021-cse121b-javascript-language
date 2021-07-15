/**
 * This is an object literal:
 * 
 * Why and How We Use Object Literals?
 * 
 * - Several JavaScripts in some sites use object literals
 * for setup purposes.
 * - Object literals enable us to write code that supports lots
 * of features, yet still provide a relatively straightforward process
 * for implementers of our code.
 * - No need to invoke constructors directly or maintain the correct
 * order of arguments passed to functions.
 * - Object literals are also useful for unobtrusive event handling;
 * they can hold the data that would otherwise be passed in function
 * calls from HTML event handler attributes.
 */


const aCourse = {
	code: 'CSE121b',
	name: 'Javascript Language',
	sections: [{
		sectionNum: 12,
		roomNum: 'STC 353',
		enrolled: 26,
		days: 'TTh',
		instructor: 'Bro T',
		students: ['Jake', 'Tom']
		},
		{
			sectionNum: 23,
			roomNum: 'STC 347',
			enrolled: 25,
			days: 'TTh',
			instructor: 'Sis A',
			students: ['Sarah', 'Kayla']
		}
	],
	createSection: function (section) {
		// find highest current section number
		const highSectionNum = this.sections.reduce((highest, current) => Math.max(highest.sectionNum, current.sectionNum));
		const newSection = {
			sectionNum: highSectionNum + 1,
			roomNum: 'STC 341',
			enrolled: 0,
			days: 'TTh',
			instructor: 'Bro R',
			students: ['Empty class']
		};
		this.sections.push(newSection);
	}
}

aCourse.createSection();
aCourse.createSection();
// Why are sectionNum generated as NaN?
console.log(aCourse.sections);