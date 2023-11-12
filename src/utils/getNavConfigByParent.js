import navConfig from "@/layout/dashboard/NavConfig"

const getNavConfigByParent = (parent_1 = '', parent_2 = '') => {
    const navConfigFiltered = 
        navConfig.find((v) => v.id === parent_1)
                    ?.children.find((j) => j.id === parent_2)
    return navConfigFiltered
}
export default getNavConfigByParent