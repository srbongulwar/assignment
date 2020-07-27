
    function myFunct() {
   
      var z = document.getElementById("first-name").value;
      if (z == "")
      {
        alert("First-Name must be filled out");
        return false;
      }
      var z = document.getElementById("last-name").value;
      if (z == "")
      {
        alert("Last-Name must be filled out");
        return false;
      }
      var zz = document.getElementById("mobileno").value;
      if (zz == "")
      {
        alert("Phone Number should be filled");
        return false;
      }
      y = parseInt(zz);
      if(y>10000000000 || y <1000000000 || isNaN(zz))
      {
        alert("Enter a valid phone number");
        return false;
      }
      var z = document.getElementById("email").value;
      if (z == "")
      {
        alert("EMAIL must be filled out");
        return false;
      }
      var n = z.includes("@");
      if(n==false)
      {
        alert("Enter a valid Email address")
        return false
      }
     var z = document.getElementById("street").value;
      if (z == "")
      {
        alert("Street must be filled out");
        return false;
      }
     var z = document.getElementById("city").value;
      if (z == "")
      {
        alert("city must be filled out");
        return false;
      }
     var z = document.getElementById("state").value;
      if (z == "")
      {
        alert("State must be filled out");
        return false;
      }
   
     
   
      var checkBox = document.getElementById("myCheck1");
      var checkBox1 = document.getElementById("myCheck2");
      if (checkBox.checked == false && checkBox1.checked == false )
      {
        alert("Please select the checkbox");
        return false;
     
      }
      if (checkBox.checked == true && checkBox1.checked == true )
      {
        alert("Please select One checkbox i.e Either Male or Female");
        return false;
     
      }
     var z = document.getElementById("age").value;
      if (z == "")
      {
        alert("Age must be filled out");
        return false;
      }
      zz = parseInt(z);
      if (isNaN(zz))
      {
        alert("Enter a valid Age");
        return false;
      }
    
  
  
  
      var checkBox = document.getElementById("myCheck");
      if (checkBox.checked == false)
      {
        alert("Please select the checkbox");
        return false;
      }
   
     
   
     
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = document.getElementById("first-name").value;
      cell2.innerHTML = document.getElementById("city").value;
      cell3.innerHTML = document.getElementById("age").value;
      cell4.innerHTML = document.getElementById("email").value;
     
   
      document.getElementById("name1").value = "";
      document.getElementById("email").value = "";
      document.getElementById("age").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("textarea").value = "";
   
      document.getElementById("myCheck").checked = false;
      document.getElementById("myCheck1").checked = false;
      document.getElementById("myCheck2").checked = false;
   
    }
   
  