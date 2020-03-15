const default_state={
    currentUser: null
}
const UserReduser=(state=default_state,action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload

            }

        default:
            return state;
    }
}
export default UserReduser;