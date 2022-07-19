const generateRandomNumber = (num) => {
   return Math.floor(Math.random() * num);
}
 const fortuneTeller ={
    continents: ['Africa', 'Asia', 'Europe', 'South America'],
    advice: ['keep an open mind', 'have fun', 'be present in the moment'],
    finds: ['love', 'your purpose', 'friendship', 'peace']
 }
 let fortune = [];
 for (let prop in fortuneTeller){
     index = generateRandomNumber(fortuneTeller[prop].length);
     //console.log(prop);
     //console.log(index)
     switch (prop){
        case 'continents':
            fortune.push(`Welcome to ${fortuneTeller[prop][index]}!`);
            break;
        case 'advice':
            fortune.push(`Remember to ${fortuneTeller[prop][index]},`);
            break;
        case 'finds':
            fortune.push(`You will find ${fortuneTeller[prop][index]}.`);
            break;
        default:
            fortune.push('There is not enough info currently');
            
     }
 }
 function formatWisdom(wisdom) {
    const formatted = fortune.join('\n')
    console.log(formatted)
   // console.log("Welcome to my page")
  }
  
  formatWisdom(fortune);