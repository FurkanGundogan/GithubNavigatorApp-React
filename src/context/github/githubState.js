import React,{useReducer} from "react"
import GithubReducer from "./githubReducer"
import GithubContext from "./githubContext"
import axios from "axios"

const GithubState = (props) => {
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }


    const [state,dispatch]=useReducer(GithubReducer,initialState)

    const searchUsers = (keyword) => {
        setLoading()
        setTimeout(()=>{
            axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(response => {     
                
                dispatch({
                    type:'SEARCH_USERS',
                    payload:response.data.items,

                })
            });
        },2000);
        
    }

    const getUser = (username) => {
        setLoading()
        setTimeout(()=>{
            axios
            .get(`https://api.github.com/users/${username}`)
            .then(response => {
               dispatch({type:'GET_USER',payload:response.data})
               
            });
        },1000);
    }

    const getUserRepos = (username) => {
        setLoading()
        setTimeout(()=>{
            axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then(response => {
                dispatch({
                    type:'GET_REPOS',
                    payload:response.data
                })
            });
        },1000);
    }
    
    const setLoading = () => {
        dispatch({type:'SET_LOADING'})
    }

    const clearUsers = () => {
        dispatch({type:'CLEAR_USERS'})
    }


    return <GithubContext.Provider value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>

}

export default GithubState