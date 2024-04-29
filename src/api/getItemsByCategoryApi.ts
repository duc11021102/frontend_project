import axios, { AxiosError } from "axios";

type Props = {
  queryKey: [string, { type: number; page: number }];
};

export async function getItemsByCategoryApi({ queryKey }: Props) {
  const [_key, { type, page }] = queryKey;
  console.log(_key);
  try {
    const { data } = await axios.get(
      `/api/items_category?type=${type}&page=${page}`,
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.error.message;
      throw new AxiosError(errorMessage);
    }
  }
}

// export default getItemsByCategoryApi;
