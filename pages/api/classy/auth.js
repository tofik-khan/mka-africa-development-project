export default async function getAuth() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", process.env.CLASSY_CLIENT_ID);
  urlencoded.append("client_secret", process.env.CLASSY_SECRET_TOKEN);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  let authObject = {};

  await fetch("https://api.classy.org/oauth2/auth", requestOptions)
    .then(async (response) => await response.json())
    .then((result) => (authObject = result))
    .catch((error) => console.log("error", error));

  return authObject;
}
