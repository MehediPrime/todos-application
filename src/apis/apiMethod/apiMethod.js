import useAxios from "../../hooks/useAxios";
const axiosCustomInstance = useAxios();

export const getMethod = async ({ url }) => {
  const response = await axiosCustomInstance.get(url);
  return response.data;
};

export const postMethod = async ({ url, data }) => {
  const response = await axiosCustomInstance.post(url, data);
  return response.data;
};

export const putMethod = async ({ url, data }) => {
  const response = await axiosCustomInstance.put(url, data);
  return response.data;
};

export const deleteMethod = async ({ url }) => {
  const response = await axiosCustomInstance.delete(url);
  return response.data;
};
