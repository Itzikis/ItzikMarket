<!doctype html>
<html lang="en">
    
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width = device-width, initial-scale=1">
    <title>
        Bus Excersize 
    </title>
    

    
    <style>
        jumbotron{
        background-color:#2E2D88;
        color:white;

        
    tab-content {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 10px;
    </style>
    

</head>
<body>
    <div class"container">
        <div class="page-header"> 
            <h1>Bootstrap Tutorial By Itzik LTD </h1>
        </div>
        
    </div>
    <div class="jumbotron">
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
        
                  
         </div>
    
    <script language="javascript" type="text/javascript">
    // This script should produce bus object and give them their ID numbers
        "use strict"
        var idNum = 0
        function Bus(){
            //constructor
            this.seats = 50 ;
            this.color="Blue" ;
            this.manufactor="Mercedes" ;
            this.manufactorYear= 2000;
            this.idNumGenerator()
            console.log("Bus ID is " + idNum);
            
        } 
        
        Bus.prototype.idNumGenerator = function(){
            // Need to make sure ID is 9 digits !!! 
            idNum = Math.floor((Math.random() * 1000000000));
            console.log(idNum);
        }
        
        var bus1 = new Bus ();
            bus1.seats = 200;
            bus1.color = "Pink";
        
    </script>
    
    

  
</body>
</html>
