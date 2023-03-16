fetch('https://restcountries.com/v2/all')
  .then((response) => response.json())
  .then((data) => {
    for(let i=0; i<data.length; i++)
   {
    let res={} 
     res['name']=data[i].name;
     res['capital']=data[i].capital;
     res['region']=data[i].region;
     res['flag']=data[i].flag;
     res['code']=data[i].alpha3Code;
     res['latlng']=data[i].latlng;
     obj.push(res);
   }
   display(obj);
   
  })
  .catch((error) => {
    console.error('Error', error);
  });
let obj=[];
let data = [];

  function display(obj)
  {
    for(let i=0; i<obj.length; i++)
  {  
  const country = obj[i];
  const name = document.createElement("h2");
  name.textContent = country.name; 

  const flag = document.createElement("img");
  flag.setAttribute("class","card-image")
  flag.src = country.flag;
  
  
  const capital = document.createElement("p");
  capital.textContent = country.capital;

  const region=document.createElement("p");
  region.textContent = country.region;
   
  const code=document.createElement("p");
  code.textContent = country.code;
  const latlng = country.latlng;
  
  const row=document.getElementById("row");
  const colDiv = document.createElement("div");
  colDiv.setAttribute("class","col-lg-4 col-sm-12");
  row.append(colDiv);

  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class","card");

  const cardHead = document.createElement("div");
  cardHead.setAttribute("class","card-header");
  cardHead.append(name);
  cardDiv.appendChild(cardHead);

  const imgDiv = document.createElement("div")
  imgDiv.setAttribute("class","imgDiv")
  imgDiv.appendChild(flag);
  cardDiv.appendChild(imgDiv);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class","card-body");

  const a1 = document.createElement("p");
  a1.setAttribute("class","card-text");

  const b1 = document.createTextNode("Capital:")
  const c1 = document.createTextNode(" ");
  a1.append(b1,c1,capital.innerText);
  cardBody.append(a1);

  const a2 = document.createElement("p");
  a2.setAttribute("class","card-text");

  const b2 = document.createTextNode("Region:")
  const c2 = document.createTextNode(" ")
  a2.append(b2,c2,region.innerText);
  cardBody.append(a2);

  const a3 = document.createElement("p");
  a3.setAttribute("class","card-text");

  const b3 = document.createTextNode("Country Code:")
  const c3 = document.createTextNode(" ")
  a3.append(b3,c3,code.innerText);
  cardBody.append(a3);

  var popdiv = document.createElement("div");
  popdiv.setAttribute("id","popupbox");

  popdiv.innerHTML = `<h2>Weather Information</h2>
  <p id="p1"></p>
  <button onclick="hidePopup()" >Close</button>`
  document.body.append(popdiv);
  
  const btncard=document.createElement("button");
  btncard.setAttribute("class","btn btn-primary");
  btncard.setAttribute("type","button");
  btncard.innerText="Click for Weather"; 
  btncard.onclick = function()
  {
    myFunction(latlng)
    showPopup();
  }
  cardBody.append(btncard);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
 }
}

function showPopup() {
  var popup = document.getElementById("popupbox");
  if (popup) {
    popup.style.display = "block";
  }
  else {
    console.error("Popup not found");
  }
}

function hidePopup() {
  var popup = document.getElementById("popupbox");
  if (popup) {
    popup.style.display = "none";
  }
  else {
    console.error("Popup not found");
  }
}

function myFunction(code1)
{
  let lat = code1[0];
  let lon = code1[1];
  console.log(lat,lon);
  getWeather(lat,lon);
}
function getWeather(lat,lon){
  const latitude = lat;
  const longitude =lon;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=de84ee2890e6f60e117aab1ff0f619b6`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const temperature = (data.main.temp);
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const result = document.getElementById('p1');
      result.innerHTML = `Temperature: ${temperature } &degF <br/> Humidity: ${humidity }&percnt; 
      <br/>Description: ${description }`;
    })
    .catch(error => console.log("Error",error));
}