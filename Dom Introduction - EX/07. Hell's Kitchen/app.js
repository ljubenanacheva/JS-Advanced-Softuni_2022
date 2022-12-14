function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick () {
      let input=JSON.parse(document.getElementById('inputs').children[1].value);
      let avgSalary=0;
      let totalSalary=0;
      let currAvgSalary=0;
      let bestName='';

      let output={};

      for (let data of input){
         let [restaurantName,workersInput]=data.split(' - ');
         let workersData=workersInput.split(', ');

         for(let worker of workersData){
            let [name,salary]=worker.split(' ');

            if(!output.hasOwnProperty(restaurantName)){
               output[restaurantName]={};
            }
            if(output.hasOwnProperty(restaurantName)){
               output[restaurantName][name]=Number(salary);
            }
         }
      
      }
      let entries=Object.entries(output);
      for(let entry of entries){
         let key=entry[0];
         let values=Object.values(entry[1]);
         for(let salary of values){
            totalSalary+=salary;
         }
         avgSalary=totalSalary/values.length;
         if(avgSalary>currAvgSalary){
            currAvgSalary=avgSalary;
            bestName=key;
            totalSalary=0;

         }
      }
      let result=Object.entries(output[bestName]).sort((a,b)=>b[1]-a[1]);
      let print='';
      result.forEach(w=>print+=`Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#workers p').textContent=print;
      let bestRestaurantData=`Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
      document.querySelector('#bestRestaurant p').textContent=bestRestaurantData;
      }

      
}
