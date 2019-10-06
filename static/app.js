const formToObject = elements => [].reduce.call(elements, (data, element) => {
  if (element.value)
    data[element.name] = element.value;
  return data;
}, {});

const submitProfile = async () => {
  let form_object = formToObject($("#submitForm").serializeArray());
  const response = await fetch('http://' + API_URL + '/profile/new/', {
    method: 'POST',
    body: JSON.stringify(form_object),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const newProfile = await response.json();
  const form = new FormData();
  let image = $("#imagen_id")[0].files[0];
  form.append("image", image);
  let dataSettingsToUploadApi = {
    method: "POST",
    body: form
  };
  const responseImage = await fetch(
    'http://' + API_URL + '/profile/' + newProfile._id + '/upload-image',
    dataSettingsToUploadApi
  );
}