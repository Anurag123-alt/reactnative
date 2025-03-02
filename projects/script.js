const people = [
     { name: "Elon Musk", age: 52, profession: "Entrepreneur", netWorth: "200B", country: "USA", company: "Tesla,SpaceX", industry: "Tech & Space" },
     { name: "Jeff Bezos", age: 60, profession: "Entrepreneur", netWorth: "180B", country: "USA", company: "Amazon", industry: "E-commerce" },
     { name: "Bill Gates", age: 68, profession: "Entrepreneur", netWorth: "120B", country: "USA", company: "Microsoft", industry: "Software" },
     { name: "Mark Zuckerberg", age: 39, profession: "Entrepreneur", netWorth: "110B", country: "USA", company: "Meta (Facebook)", industry: "Social Media" },
     { name: "Warren Buffett", age: 93, profession: "Investor", netWorth: "100B", country: "USA", company: "Berkshire Hathaway", industry: "Investment" },
     { name: "Larry Page", age: 50, profession: "Entrepreneur", netWorth: "105B", country: "USA", company: "Google", industry: "Search & Tech" },
     { name: "Sergey Brin", age: 50, profession: "Entrepreneur", netWorth: "102B", country: "USA", company: "Google", industry: "Search & Tech" },
     { name: "Mukesh Ambani", age: 66, profession: "Entrepreneur", netWorth: "95B", country: "India", company: "Reliance", industry: "Energy & Telecom" },
     { name: "Steve Ballmer", age: 67, profession: "Entrepreneur", netWorth: "90B", country: "USA", company: "Microsoft", industry: "Software" },
     { name: "Bernard Arnault", age: 74, profession: "Entrepreneur", netWorth: "190B", country: "France", company: "LVMH", industry: "Luxury Goods" },
     { name: "Gautam Adani", age: 61, profession: "Entrepreneur", netWorth: "85B", country: "India", company: "Adani Group", industry: "Infrastructure" },
     { name: "Zhong Shanshan", age: 69, profession: "Entrepreneur", netWorth: "75B", country: "China", company: "Nongfu Spring", industry: "Beverages" },
     { name: "Carlos Slim", age: 84, profession: "Entrepreneur", netWorth: "80B", country: "Mexico", company: "América Móvil", industry: "Telecom" },
     { name: "Amancio Ortega", age: 88, profession: "Entrepreneur", netWorth: "77B", country: "Spain", company: "Zara", industry: "Fashion" },
     { name: "Francoise Bettencourt", age: 70, profession: "Entrepreneur", netWorth: "70B", country: "France", company: "L'Oreal", industry: "Cosmetics" }
];




let input = document.getElementById('input')


let div = document.createElement('div')
div.className = "div"
document.body.append(div)

let info = [
     "Name",
     "Age",
     "Profession",
     "Networth",
     "Country",
     "Company",
     "Industry"
];

let titlep=document.createElement('div')
titlep.className="titlep"
div.append(input,titlep)

info.forEach((info)=>{
     let title=document.createElement('div')
title.className="title"
titlep.append(title)
     title.innerHTML+=info;

})

let map = people.map((obj) => {
     return {
          name: obj.name,
          age: obj.age,
          profession: obj.profession,
          netWorth: obj.netWorth,
          country: obj.country,
          company: obj.company,
          industry: obj.industry
     };

})



map.forEach((map) => {
     let box = document.createElement('div')
     box.className = "box"
     div.append(box)
     box.innerHTML += `
  <div class="tag-name">${map.name}</div>
  <div class="tag-age">${map.age}</div>
  <div class="tag-profession">${map.profession}</div>
  <div class="tag-netWorth">${map.netWorth}</div>
  <div class="tag-country">${map.country}</div>
  <div class="tag-company">${map.company}</div>
  <div class="tag-industry">${map.industry}</div>
`;






})



input.addEventListener('input', () => {
     let allBoxes = document.querySelectorAll(".box");
     let allNames = document.querySelectorAll(".tag-name");
     let allAge = document.querySelectorAll(".tag-age");
     let allProfession = document.querySelectorAll(".tag-profession");
     let allNetWorth = document.querySelectorAll(".tag-netWorth");
     let allCountry = document.querySelectorAll(".tag-country");
     let allCompany = document.querySelectorAll(".tag-company");
     let allIndustry = document.querySelectorAll(".tag-industry");

     allNames.forEach((text, index) => {
          let searchValue = input.value.toLowerCase();

          if (
               text.textContent.toLowerCase().includes(searchValue) ||
               allAge[index].textContent.toLowerCase().includes(searchValue) ||
               allProfession[index].textContent.toLowerCase().includes(searchValue) ||
               allNetWorth[index].textContent.toLowerCase().includes(searchValue) ||
               allCountry[index].textContent.toLowerCase().includes(searchValue) ||
               allCompany[index].textContent.toLowerCase().includes(searchValue) ||
               allIndustry[index].textContent.toLowerCase().includes(searchValue)
          ) {
               allBoxes[index].style.display = "flex";
               
          } else {
               allBoxes[index].style.display = "none";
          }
     });





})