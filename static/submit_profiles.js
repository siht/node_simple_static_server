const formToObject = elements => [].reduce.call(elements, (data, element) => {
  if (element.value)
    data[element.name] = element.value;
  return data;
}, {});

function showMessageModal(message){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var span = document.getElementsByClassName("close")[0];
  var contentMessage = document.getElementsByClassName("message")[0];
  contentMessage.innerHTML = message;
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

const submitProfile = async () => {
  let form_object = formToObject($("#submitForm").serializeArray()); // TODO: quit jquery
  const response = await fetch(API_URL + '/profile/new/', {
    method: 'POST',
    body: JSON.stringify(form_object),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  try{
    const newProfile = await response.json();
    const form = new FormData();
    let image = $("#imagen_id")[0].files[0]; // TODO: quit jquery
    form.append("image", image);
    let dataSettingsToUploadApi = {
      method: "POST",
      body: form
    };
    const responseImage = await fetch(
      API_URL + '/profile/' + newProfile._id + '/upload-image',
      dataSettingsToUploadApi
    );
  }catch(error){
    showMessageModal(error);
  }finally{
    document.getElementById("submitForm").reset();
    showMessageModal("se ha subido con éxito el perfil");
  }
  
}

var submitButton = document.getElementById("submitButton");

submitButton.onclick = async () => {
  await submitProfile();
}