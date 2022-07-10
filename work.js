const chartEl = document.querySelector('#chart');



const isCurrent =(dayname)=>{
    const nowDate =new Date().getDay();
    const dayWeek=["sun",'mon','tue',"wed","thu","fri","sat"];
    // console.log(dayname)
     let getdat= dayWeek[nowDate];
 //let getdat ="wed"
    return ( getdat == dayname? true : false);
    

}






function generateChart (item){

    const    currentDat = isCurrent(item.day);
  
    
    
    let barColor , hoverColor ,barCol;
    if(currentDat == true){
        barColor = "background:#76b5bc;";
        hoverColor = "#abd7db";
        barCol="#76b5bc";
        // console.log("loooool",hoverColor)
    }
    
    else{
        barColor= "background:#ec775f;";
        hoverColor = "#ed9e8e";
        barCol="#ec775f";

    }
   
    
    
    let drama = ` 
    <div class="big-chart" >
        <button class="column " aria-label="788">
                            <div class="bar " style='${barColor}height:${item.amount *3 + 9}px'  onMouseOver="this.style.background='${hoverColor}'"
                            onMouseOut="this.style.background='${barCol}'"></div>
                            <p class="text">${item.day}</p>
    
        </button>
        <p class="black-box "   aria-hidden="true"><span>$</span>${item.amount}</p>
    </div>`;
   
    
    return drama;

}



async function fetchChartdata() {
    const chartFetch = await fetch(`data.json`);
    const chartData =  await chartFetch.json();
    // console.log(chartData)
   

   

//    let toam = chartData.map(i => i.amount)
//    console.log(toam)
//    let totalAmu = toam.reduce((partialSum, a) => partialSum + a, 0);
//    console.log(totalAmu)
    
   chartEl.innerHTML= chartData.map(i => generateChart(i)).join('');
   
    
}

setTimeout(fetchChartdata,2000)
