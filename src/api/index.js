const apiUrl = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/";

export const registerUser = async (username, password) => {
  const response = await fetch(`${apiUrl}users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  return data;
};

export const userLogin = async (username, password) => {
  const response = await fetch(`${apiUrl}users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  return data;
};

export const fetchPosts = async () => {
  const response = await fetch(`${apiUrl}posts`);
  const data = response.json();
  return data;
};

export const createPost = async (postDetails, token) => {
  const response = await fetch(`${apiUrl}posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: postDetails.title,
        description: postDetails.description,
        location: postDetails.location,
        price: postDetails.price,
        willDeliver: postDetails.willDeliver,
      },
    }),
  });
  const data = await response.json();
  return data;
};

export const myData = async (token) => {
  if (token) {
    try {
      const response = await fetch(`${apiUrl}users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
};

export const updatePost = async (updateObj, token, postId) => {
  const response = await fetch(`${apiUrl}posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: updateObj,
    }),
  });
  const data = await response.json();
  return data;
};

export const deletePost = async (token, postId) => {
  const response = await fetch(`${apiUrl}posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
