const prompt = require("prompt-sync")();
const fs = require("fs");
const convertXMLtoJson = require('xml2js');






const primeNumber = (num)=>{
    ((num%2)==0 && (num%3)==0) ? console.log("Not Prime Number") : console.log("Prime Number");
}


const OddorEven = (num)=>{
    (num%2)==0 ? console.log("Even Number") : console.log("Odd Number");
}


const Sum = (num1,num2)=>{
    console.log(num1+num2);
}


const findNumberofRepeatedWords = (sentence)=>{
    let words = sentence.split(" ");// make an array jab space aye
    let wordMap = {}; //Map{key:Value}
    let i = 0
    for (i = 0; i < words.length; i++) {
      let currentWordCount = wordMap[words[i]]; // key
      let count = currentWordCount ? currentWordCount : 0; //s
      wordMap[words[i]] = count + 1;
    }
    console.log(wordMap);

}  
const xmltoJson = (xmlData)=>{
    convertXMLtoJson(xmlData, function (err, result) {
        console.log(JSON.stringify(result));
    })

}


console.log("\n\n1) Prime \n2) ODD or Even \n3) Sum \n4) Paragragh \n5) XML to Json ");

var choice = prompt("Choose: ");
console.log(choice);

switch(parseInt(choice)){
    case 1:
        let numVal = prompt("Enter Number: ");
        primeNumber(parseInt(numVal))
        break;
    case 2:
        let num = prompt("Enter Number: ");
        OddorEven(parseInt(num))
        break;      
    case 3:
        const num1 = prompt("Enter Number1: ");
        const num2 = prompt("Enter Number2: ");
        Sum(parseInt(num1),parseInt(num2))
        break;    
    case 4:
        const string = prompt("Enter string: ");
        findNumberofRepeatedWords(string)
        break;  
    case 5:
        var xmldata = '<?xml version=”1.0" encoding=”UTF-8"?>' +
        '<Student>' +
            '<PersonalInformation>' +
                '<FirstName>Sravan</FirstName>' +
                '<LastName>Kumar</LastName>' +
                '<Gender>Male</Gender>' +
            '</PersonalInformation>' +
            '<PersonalInformation>' +
                '<FirstName>Sudheer</FirstName>' +
                '<LastName>Bandlamudi</LastName>' +
                '<Gender>Male</Gender>' +
            '</PersonalInformation>' +
        '</Student>';
        // xmltoJson(xmldata);
  
        convertXMLtoJson.parseString(xmldata, function (err, results) {
  
            // parsing to json
            let data = JSON.stringify(results)
              
            // display the json data
            console.log("results",data);
            });

        break; 
    default:
        console.log("Error");
        break 
}
