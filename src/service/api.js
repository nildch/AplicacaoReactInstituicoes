export const fetchInstitutions = async () => {
  const response = await fetch("http://localhost:3000/institutions");
  const data = await response.json();
  return data;
};

export const addInstitution = async (name, address) => {
  await fetch("http://localhost:3000/institutions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, address }),
  });
};

export const updateInstitution = async (id, name, address) => {
  await fetch(`http://localhost:3000/institutions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, address }),
  });
};

export const deleteInstitution = async (id) => {
  await fetch(`http://localhost:3000/institutions/${id}`, {
    method: "DELETE",
  });
};
