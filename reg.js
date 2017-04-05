// test whether the str provided is a valid email
function testEmail (email) {
	var test = /(\w+\.)?\w+\@\w+\.\w+/;
	return test.test(email)


}

console.log(testEmail("stroman.azariah@yahoo.com"));
console.log(testEmail("viola91@gmail.com"));
console.log(testEmail("eathel.west@example.org"));
console.log(testEmail("dwehner@harley.us"));
console.log(testEmail("malcolm.haley@hotmail.com"));
console.log(testEmail("ezzard90@hotmail.com"));
console.log(testEmail("legros.curley@gmail.com"));
console.log(testEmail("leatha75@mertz.net"));
console.log(testEmail("bonita43@yahoo.com"));
console.log(!testEmail(""));
console.log(!testEmail("legros.curley"));
console.log(!testEmail("mertz.net"));
console.log(!testEmail("bonita43@"));


// test whether the str provided is a valid phone
function testPhone (phone) {
	var test = /\(?(\d{3})?\)?([- $ .])?\d{3}([- $ .])?\d{4}/;
	return test.test(phone)


}

console.log(testPhone("919-555-1212"));
console.log(testPhone("(919) 555-1212"));
console.log(testPhone("9195551212"));
console.log(testPhone("919.555.1212"));
console.log(testPhone("919 555-1212"));
console.log(!testPhone(""));
console.log(!testPhone("555-121"));
console.log(!testPhone("1212"));
console.log(!testPhone("mobile"));


// test whether the number (as a string) sent to you is a binary number
function testBinary (number) {
	var test =/^[01]/
	return test.test(number)
}

console.log(testBinary("0"));
console.log(testBinary("1"));
console.log(testBinary("01"));
console.log(testBinary("10"));
console.log(testBinary("1110100010"));
console.log(!testBinary(""));
console.log(!testBinary("911"));


// test whether the number sent to you as a binary is an even number
function testBinaryEven (number) {
	var test=/10$/
	return test.test(number)
}

console.log(testBinaryEven("10"));
console.log(testBinaryEven("1110100010"));
console.log(!testBinaryEven("1011"));


// test whether the number sent to you is a valid hex string
function testHex (str) {
	var test=/\b[a-f0-9]+[a-f0-9]/
	return test.test(str)
}

console.log(testHex("CAFE"));
console.log(testHex("9F9"));
console.log(testHex("123"));
console.log(testHex("6720EB3A9D1"));
console.log(!testHex(""));
console.log(!testHex("COFFEE"));

// test whether the str sent to you is valid for currency
function testMoney (str) {

}

console.log(testMoney("$4"));
console.log(testMoney("$19"));
console.log(testMoney("$19.00"));
console.log(testMoney("$3.58"));
console.log(testMoney("$1000"));
console.log(testMoney("$1000.00"));
console.log(testMoney("$1,000"));
console.log(testMoney("$1,000.00"));
console.log(testMoney("$5,555,555"));
console.log(testMoney("$5,555,555.55"));
console.log(testMoney("$45,555,555.55"));
console.log(testMoney("$456,555,555.55"));
console.log(testMoney("$1234567.89"));
console.log(!testMoney(""));
console.log(!testMoney("$12,34"));
console.log(!testMoney("$1234.9"));
console.log(!testMoney("$1234.999"));
console.log(!testMoney("$"));
console.log(!testMoney("31"));
console.log(!testMoney("$$31"));

// test whether the str sent to you is a valid zip code
function testZip (str) {
	var test=/\d{5}(-)?(\d{4})?$/
	return test.test(str)
}

console.log(testZip("63936"));
console.log(testZip("50583"));
console.log(testZip("48418"));
console.log(testZip("06399"));
console.log(testZip("26433-3235"));
console.log(testZip("64100-6308"));
console.log(!testZip(""));
console.log(!testZip("7952"));
console.log(!testZip("115761"));
console.log(!testZip("60377-331"));
console.log(!testZip("8029-3924"));

// This challenge is to parse MarkDown links - so [text](http://example.com)
// would simply be replaced with the following HTML: <a href="http://example.com">text</a>.
// Be careful with images. ![alt text](image location) should be left alone, as it isn't a link.
function markDownLink (text) {

}

console.log(markDownLink('[Basic link](http://example.com)') === '<a href="http://example.com">Basic link</a>');
console.log(markDownLink('[Another](http://example.com/)') === '<a href="http://example.com/">Another</a>');
console.log(markDownLink('Link: [lynx.io](http://lynx.io/)') === 'Link: <a href="http://lynx.io/">lynx.io</a>');
console.log(markDownLink('l [l](http://TESTdomain.com) l') === 'l <a href="http://TESTdomain.com">l</a> l');
console.log(markDownLink('[Invalid](javascript:alert())') === '[Invalid](javascript:alert())');
console.log(markDownLink('![Image](http://example.com/cats.jpg)') === '![Image](http://example.com/cats.jpg)');
console.log(markDownLink('[Invalid](http://inval.id,com)')) === '[Invalid](http://inval.id,com)');


// Turn italic MarkDown (*this is italic*) into HTML italic: <em>this is italic</em>. It 
// should not, however, match bold text - text surrounded by multiple asterisks.
// This is a somewhat unrealistic challenge - in real life, you wouldn't have to
// make sure that it isn't bold, as you would have already parsed the bold text.
function markDownItalics (text) {
  
}

console.log(markDownItalics('This text is not italic.') === 'This text is not italic.');
console.log(markDownItalics('*This text is italic.*') === '<em>This text is italic.</em>');
console.log(markDownItalics('This text is *partially* italic') === 'This text is <em>partially</em> italic');
console.log(markDownItalics('This text has *two* *italic* bits') === 'This text has <em>two</em> <em>italic</em> bits');
console.log(markDownItalics('**bold text (not italic)**') === '**bold text (not italic)**');
console.log(markDownItalics('**bold text with *italic* **') === '**bold text with <em>italic</em> **');
console.log(markDownItalics('**part bold,** *part italic*') === '**part bold,** <em>part italic</em>');
console.log(markDownItalics('*italic* **bold** *italic* **bold**') === '<em>italic</em> **bold** <em>italic</em> **bold**');
console.log(markDownItalics('*invalid markdown (do not parse)**') === '*invalid markdown (do not parse)**');
console.log(markDownItalics('random *asterisk') === 'random *asterisk');

/*** Extraction ***/

// Return an array of phone numbers from a given string
function extractPhoneNumber (text) {

}

console.assert("Dear Mr. Davis, I got to know of your company through our mutual friend Fiona Williams and the training you offer to graduate students in Advertising. I am a graduate student of Mass Communications with specialization in Advertising.  I am currently pursuing the last year of my course. I would very much like to see firsthand the work environment in an advertising agency. If you would like a reference, my advisor can be reached at (454) 999-1212. You can contact me at (919) 123-4569 at your convenience." === ["(454) 999-1212", "(919) 123-4569"])

// Return an array of all emails found inside of given string
function extractEmails (text) {

}

console.assert(extractEmails("Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth@gmail.com tatsoi tomatillo azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea@sprouts.org fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber.earthnut@pea.net peanut soko zucchini.") === ["amaranth@gmail.com","pea@sprouts.org", "cucumber.earthnut@pea.net"]);