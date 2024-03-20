          
          const cityName = document.getElementById('cityName');
      const submitbtn = document.getElementById('submitbtn');
          const city_name=document.getElementById('city_name');
             const temp = document.getElementById('temp');
             const temp_status  =document.getElementById('temp_status');
         const getInfo = async(event)=>{
            event.preventDefault();
               let cityVal =cityName.value;
            
       if(cityVal===""){
              city_name.innerText ='plz write the name here before search';
       }
         else{
              try{
let url= 'https://api.openweathermap.org/data/2.5/weather?q=patna&units=metric&appid=d48a5ed669d330199b62e3f1985a3389';
                const response  = await fetch(url);
                    const data =await response.json();
                       const arrData =[data];
            city_name.innerText = '${arrData[0].name},${arrData[0].sys.country}';
                          temp.innerText =arrData[0].main.temp;
                          temp_status.innerText =arrData[0].weather[0].main;
              }
              catch{
                 city_name.innerText ='plz enter the city name';
              }
         }
         }

         submitbtn.addEventListener('click',getInfo);