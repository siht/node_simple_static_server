const formToObject = elements => [].reduce.call(elements, (data, element) => {
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
      "Authorization": "Client-ID 341ced5503c09cb"
    },
    body: form
  };
  const response_of_imgur = await fetch("https://api.imgur.com/3/image", settings);
  imgur_json = await response_of_imgur.json();
  form_object.imagen = imgur_json.data.link;
  const response = await fetch('http://5fa97c7d.ngrok.io/profiles', {
    method: 'POST',
    body: JSON.stringify(form_object),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json();
  
}