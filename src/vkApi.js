import axios from 'axios';

const token = 'access_token=681563f72a35a133fcbbbf24d4c5316a8accdee8633184f2d0aa1fd29bdec692b480dca28930bc60f6c57';
const v = 'v=5.61';

const vkApi =  axios.create({
    baseURL: `https://api.vk.com/method/`,
    headers: { 'Access-Control-Allow-Origin': '*' }
});

export async function getGroupInfo(id) {
    try {
        const data = await vkApi.get(`groups.getById?group_id=${id}&${token}&${v}`);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


