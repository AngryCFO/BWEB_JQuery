$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      user_name: $("#user_name").val(),
      user_second_name: $("#user_second_name").val(),
      user_last_name: $("#user_last_name").val(),
    };

    $.ajax({
      type: "POST",
      url: "dadata.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (result) {
      console.log(result);
      
      // Выводим value в консоль
      if (result && result.length > 0) {
        console.log("Value:", result[0].source);
      }
      
      for (let value of result) {
        $("#result").html(
          '<p>Фамилия: ' + value.surname + '</p>' +
          '<p>Имя: ' + value.name + '</p>' +
          '<p>Отчество: ' + value.patronymic + '</p>' +
          '<p>Полное имя: ' + value.result + '</p>' +
          '<p>В лице: ' + value.result_genitive + '</p>' +
          '<p>Кому: ' + value.result_dative + '</p>' +
          '<p>Согласовано: ' + value.result_ablative + '</p>'
        );
      }
    });

    event.preventDefault();
  });
});