import LocalizationApi from '../apis/localizationAPI.js'

async function findCommercesNearCustomer(cuil, maxDistance) {
    return await LocalizationApi.findCommercesNearCustomer(cuil, maxDistance)
}

export default { findCommercesNearCustomer }