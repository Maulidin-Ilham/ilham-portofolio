export const user = async () => {
  const res = await fetch("https://api.github.com/users/Maulidin-Ilham");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const followers = async () => {
  const res = await fetch(
    "https://api.github.com/users/Maulidin-Ilham/followers"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const following = async () => {
  const res = await fetch(
    "https://api.github.com/users/Maulidin-Ilham/following"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const repos = async () => {
  const res = await fetch("https://api.github.com/users/Maulidin-Ilham/repos");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const userNew = () => {
  return <div>user</div>;
};
