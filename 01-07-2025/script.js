        // console.log("Hello World!");
        // function sayHello() {
        //     console.log("Hello from sayHello function");

        // }

        // sayHello();
        // console.log("This is a simple JavaScript program");

        console.log("one");
        console.log("two");
        setTimeout(()=>{
            console.log("Hello World");
        },5000);
        console.log("three");
        console.log("four");

        // A callback is a function that is passes as an argument to another function and is executed after the
        // completion of that function.

        // Callback Example

        function sum(a,b){
            console.log(a+b);
        }

        function calculator (a,b,callback){
            callback(a,b);
        }

        calculator(5,10,(a,b)=>{
            console.log(a+b);
        })

        // Nested for loops
        for(let i=0;i<5;i++){
            let str = "";
            for(let j=5;j<5;j++){
                str+=j;
            }
            console.log(i,str);
        }


        function getData(dataid){
            setTimeout(()=>{
                console.log("Fetching fata for id:");
            }, 5000);
            
        }

        getData(1);
        getData(2);
        getData(3);

        function getData(dataid,getnextdata){
            setTimeout(()=>{
                console.log("Fetching data for id:",dataid);
                if (getnextData){
                    getnextdata();
                }
            }, 5000);
        }


        getData(1);
        getData(2);

        function getData(dataid, getnextData){
            setTimeout(()=>{
                console.log("Fetching data for id:",dataid);
                if(getnextData){
                    getnextData();
                }
            },5000);
        }
        // Callback Hell " Nested callback stacked below one annother forming a pyramid structure
        // To overcome this we use promises:
        // Promises is an object that represents the eventual completion of an operation
        // or failure of an asynchronus operation and its resulting value.
        // It allows you to erite asynchronus code in a more manageable way, avoiding callback hell."
        getData(1,()=>{
            console.log("Getting data 2.....")
            getData(2,()=>{
                console.log("Getting data 3...")
                getData(3);
            });
        })


        // Promise syntax  :
        // const myPromise = newPromise((resolve,reject)=> {..})
        // resolve is called when the asynchronous operation is successful
        // reject is called when the asnchronous operation fails.


        const myPromise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const success = false;
                //Simulate success or failure
                if(success){
                    resolve("Data fetched successfully");
                }else{
                    reject("Error fetching data");
                }
            },2000);
        })

        myPromise
                .then((data) => {
                    console.log("Promise resolved with data:" , data);
                })

                .catch((error) => {
                    console.error("Promise rejected with error:",error);
                })


        let promise = new Promise((resolve,reject)=>{
            console.log("I am a promise");
            if(1<0){
                resolve(123);
            }  

            reject("Something went wrong.");

        })

        function getData(dataid){
            return new Promise((resolve,reject) =>{
                setTimeout(() =>{
                    console.log("Fetching data for id:",dataid);
                    resolve("success");
                },2000); // Using 2sec for quicker testing
            })
        }


        let result = getData(123);
        result;

        // Chaining multiple data fetches
        getData(101)
                    .then(result =>{
                        console.log("First fetch:",result);
                        return getData(102);
                    })
                    .then(result =>{
                        console.log("Second fetch:",result);
                        return getData(103);
                    })