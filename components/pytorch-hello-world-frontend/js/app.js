$(document).ready(function () {
  let trainingInProgress = false;
  let trainingTimer;
  let trainingStartTime;

  let apiUrl = "<<API_URL>>";

  let iconInProgress = "bi-arrow-repeat text-primary in-progress";
  let iconSuccess = "bi-check-circle-fill text-success";
  let iconError = "bi-x-circle-fill text-danger";

  $("#prediction-time-container").hide();
  $("#prediction-container").hide();
  $("#training-time-container").hide();

  function formatTime(time) {
    return (time / 1000).toFixed(1);
  }

  function updateTrainingCounter() {
    const elapsedTime = Date.now() - trainingStartTime;
    $("#training-time").text(formatTime(elapsedTime));
  }

  $("#classify-btn").click(function () {
    const file = $("#file-input")[0].files[0];

    if (!file) {
      alert("Please select an image file.");prediction-status
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const base64Image = event.target.result.split(",")[1];
      const startTime = Date.now();

      var model = $('#predict-model').val();

      $.ajax({
        url: apiUrl + "/predict",
        type: "POST",
        data: JSON.stringify({ image: base64Image, model: model }),
        contentType: "application/json",
        processData: false,
        success: function (data) {
          $("#prediction-status").addClass(iconSuccess).removeClass(iconError);
          $("#prediction").text(data.prediction);
          $("#prediction-container").show();
          $("#prediction-time").text(data.time);
          $("#prediction-time-container").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error:", textStatus, errorThrown);
          console.error(jqXHR.responseText);
          $("#prediction-time").text(formatTime(Date.now() - startTime));
          $("#prediction-time-container").show();
          $("#prediction-status").addClass(iconError).removeClass(iconSuccess);
        },
      });
    };
    reader.readAsDataURL(file);
  });

  $("#train-btn").click(function () {
    if (trainingInProgress) {
      alert("Training is already in progress.");
      return;
    }

    if (!confirm("Training can take several minutes to complete. Are you sure you want to proceed?")) {
      return;
    }

    trainingInProgress = true;
    trainingStartTime = Date.now();
    trainingTimer = setInterval(updateTrainingCounter, 100);

    $("#training-time-container").show();

    // Get the number of epochs from the input
    const epochs = parseInt($("#epochs-input").val()) || 5;
    var model = $('#train-model').val();

    $.ajax({
        url: apiUrl + "/start-training",
        type: "POST",
        data: JSON.stringify({ epochs: epochs, model: model }),
        contentType: "application/json",
        processData: false,
      })
      .done(function () {
        $("#training-time-container").show();
      })
      .fail(function () {
        trainingInProgress = false;
        clearInterval(trainingTimer);
        $("#training-status").addClass(iconError).removeClass(iconSuccess).removeClass(iconInProgress);
      })
      .always(function () {
        checkTrainingStatus();
      });
  });

  function checkTrainingStatus(forceCheck) {
    if (trainingInProgress || forceCheck) {
      $.get(apiUrl + "/check-training-status").done(function (data) {
        if (data.status == "in progress") {
          trainingInProgress = true;
          $("#training-status").addClass(iconInProgress).removeClass(iconSuccess).removeClass(iconError);
        } else if (data.status == "finished") {
            trainingInProgress = false;
            $("#training-status").addClass(iconSuccess).removeClass(iconError).removeClass(iconInProgress);
            clearInterval(trainingTimer);
        }
      });
    }
  }

  setInterval(checkTrainingStatus, 5000); // Check training status every 5 seconds

  checkTrainingStatus(true);
});
