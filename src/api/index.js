export const registerUser = async (name, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/register",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password
        },
      }),
    }
  );
  const data = await response.json();
  return data;
};
