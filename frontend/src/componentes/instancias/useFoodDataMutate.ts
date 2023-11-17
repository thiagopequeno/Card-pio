import axios, { AxiosResponse } from "axios";
import { FoodData } from "../../interface/FoodData";
import { useQuery } from '@tanstack/react-query';
import { useMutation ,useQueryClient} from '@tanstack/react-query';

const API_URL = "http://localhost:8080";

const postData = async (data:FoodData): Promise<any> => {
    const response = await axios.post(API_URL + '/food',data);
    return response.data;
}

export function useFoodDataMutate(){
  //  const queryClient = useQueryClient();
    const query = useMutation({
        mutationFn: postData,
        retry:2,
        // onSuccess: () => {
        //     queryClient.invalidateQueries(['food-data'])
        // }
       
    })
    return query;
}