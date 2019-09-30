const formToObject = elements => [].reduce.call(elements, (data, element) => {
  if (element.value)
    data[element.name] = element.value;
  return data;
}, {});

const submitProfile = async () => {
  let form_object = formToObject($("#submitForm").serializeArray());
  const form = new FormData();
  let image = $("#imagen_id")[0].files[0];
  form.append("image", image);
  let settings = {
    method: "POST",
    headers: {
      "Authorization": IMGUR_CLIENT_ID
    },
    body: form
  };
  const response_of_imgur = await fetch(IMGUR_URL, settings);
  imgur_json = await response_of_imgur.json();
  form_object.imagen = imgur_json.data.link;
  const response = await fetch('http://' + API_URL + '/profile/new/', {
    method: 'POST',
    body: JSON.stringify(form_object),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json();
  
}