import { githubApi } from "../../pages/Repositories/services/axios/github-api"

const getUSerDetails = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`)
 return response.data
    
  } catch(error) {
    console.error(error.message)
  }
  

}
export {getUSerDetails}