let obj = {
    fetchData : function(){
        fetch(
            "https://www.boredapi.com/api/activity"
            ).then((response)=>response.json())
            .then((data)=>this.displayData(data));
    },

    displayData : function(data){
        const { activity } = data;
        const { accessibility } = data;
        const{ type } = data;
        const { price } = data;
        const { key } = data;

        console.log(activity,accessibility,type,price,key);
        document.querySelector(".activity").innerText = activity;
        document.querySelector(".accessibility_val").innerText = accessibility;
        document.querySelector(".type_val").innerText = type;
        document.querySelector(".price_val").innerText = price;
        document.querySelector(".key").innerText = key;

    }
}
obj.addEventListener("onload",obj.fetchData());