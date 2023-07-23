export const state = () => ({
    userData:{
        state: false
    }
})

export const mutations = {
    SET_USER(state, user){
        console.log('-------',user)
        state.userData= user
    }
}