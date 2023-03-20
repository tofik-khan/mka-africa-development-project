import getAuth from "./auth";

export default async function handler(req, res) {
  const auth = await getAuth();
  console.log(auth.access_token);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${auth.access_token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://api.classy.org/2.0/questions/1127839/answers", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((error) => console.log("error", error));
}
