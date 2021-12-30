import service from '@/utils/request'

export const GetAllInfoAndCount = data => {
  return service({
    url:'/shangpin/getAllInfoAndCount',
    method: 'post',
    data
  })
}