$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
      event.preventDefault();
      var name = $("#name").val();
      var age = parseInt($("#age").val());
      var eyeColor = $("#eyeColor").val();
      var heightInInches = parseInt($("#userIn").val()) + (parseInt($("#userFt").val()) *12);
      var gender = $("select#gender").val();

      $("#username").text(name + ", your best celebrity match is: ");

      // Triggers IF under 25 and MALE
      if(age < 25 && gender === "male"){
        $("#match").text("Jennifer Lawrence");
      }
      // Triggers IF you are 23 and FEMALE
      else if(age === 23 && gender === "female"){
        $("#match").text("Brad Pitt");
      }
      // Triggers IF you are FEMALE and your EYECOLOR is BLUE
      else if(gender === "female" && eyeColor === "blue") {
          // IF the above is TRUE and your AGE is BETWEEN 18 and 22
          if(age >= 18 && age < 23){
            $("#match").text("Tom Cruise");
          }
          // IF the above is TRUE and you are YOUNGER than 18 OR 23 and OLDER
          else {
            $("#match").text("Channing Tatum");
          }
      }
      // IF you are MALE and 25 and OLDER
      else if(gender === "male" && age >= 25) {
        // IF the above is TRUE and you are YOUNGER than 30
        if(age < 30){
          // EXAMPLE USAGE OF ".empty().append()". Note: seems to have same function as ".text()"??
          $("#match").empty().append("Selena Gomez");
        }
        // IF the above is TRUE and you OLDER than 29
        else {
          $("#match").text("Scarlett Johansson");
        }
      }
      // IF YOU DON'T MEET ANY OF THE ABOVE
      else {
        alert("You have no matches!!!!! WTF. Loser.");
      }

      $('.well').show();
  });
});
