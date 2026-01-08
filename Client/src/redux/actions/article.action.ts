import axios from "axios";

export const GET_ARTICLE = "GET_ARTICLE"
export const GET_ALL_ARTICLES = "GET_ALL_ARTICLES"
export const GET_ARTICLE_ERROR = "GET_ARTICLE_ERROR"
export const ADD_ARTICLE = "ADD_ARTICLE"
export const UPDATE_ARTICLE = "UPDATE_ARTICLE"
export const UPLOAD_ARTICLE_PICTURE = "UPLOAD_ARTICLE_PICTURE"
export const DELETE_ARTICLE = "DELETE_ARTICLE"

export const LIKE_ARTICLE = "LIKE_ARTICLE"
export const UNLIKE_ARTICLE = "UNLIKE_ARTICLE"
export const DISLIKE_ARTICLE = "DISLIKE_ARTICLE"
export const UNDISLIKE_ARTICLE = "UNDISLIKE_ARTICLE"

export const ADD_COMMENT= "ADD_COMMENT"
export const EDIT_COMMENT= "EDIT_COMMENT"
export const DELETE_COMMENT= " DELETE_COMMENT"

type articlesProps = {
    articleId: string,
    picture: string,
    name: string,
    productType: string,
    price: string
}

export const getAllArticles = (num:number, dispatch:any) => {
        return axios 
            .get(`${process.env.REACT_APP_API_URL}api/article`)
            .then((res:any)=> {
                dispatch ({type: GET_ARTICLE, payload: num})
                dispatch({type:GET_ALL_ARTICLES, payload: res.data})
            })
            .catch((err:any) => window.alert(err))
}

export const getArticle = (articleId: string, dispatch:any) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/article/:id`)
            .then(()=> {
                dispatch({type:GET_ARTICLE, payload:articleId})
            })
            .catch((err:any)=> window.alert(err))
}

export const addArticle = (data: any, dispatch:any) => {
        return axios 
            .post(`${process.env.REACT_APP_API_URL}api/article`, data)
            .then((res:any)=> {
                if (res.data.errors) {
                    dispatch({type: GET_ARTICLE_ERROR, payload: res.data.errors})
                } else {
                    dispatch ({type: GET_ARTICLE_ERROR, payload:""})
                }
            })
}

export const updateArticle = ({
    articleId,
    name,
    productType,
    price
} : articlesProps , dispatch:any
) => {
        return axios({
            method:"put",
            url:`${process.env.REACT_APP_API_URL}api/article/${articleId}`,
            data: { name, productType price},
        })
        .then(()=> {
            dispatch({
                type: UPDATE_ARTICLE,
                payload: {articleId, name, productType, price}
            })
        })
        .catch((err:any)=> window.alert(err))
}

export const uploadPicture = (data: any, articleId: string , dispatch:any) => {
        return axios 
            .post(`${process.env.REACT_APP_API_URL}api/article/upload-articlePic`, data)
            .then((res:any)=> {
                if (res.data.errors) {
                    dispatch({type: GET_ARTICLE_ERROR, payload: res.data.errors})
                } else {
                    dispatch ({ type: GET_ARTICLE_ERROR, payload: ""})
                    return axios
                    .get(`${process.env.REACT_APP_API_URL}api/article/${articleId}`)
                    .then((res:any)=> {
                        dispatch({ type: UPLOAD_ARTICLE_PICTURE, payload: res.data.picture})
                    })
                }
            })
            .catch((err:any) => console.log(err))
}

export const deleteArticle = ({
    articleId, picture, name, productType, price
} : articlesProps, dispatch:any) => {
        return axios ({
            method:"delete",
            url:`${process.env.REACT_APP_API_URL}api/article/${articleId}`,
            data: {picture, name, productType, price}
        })
        .then(()=> {
            dispatch({type: DELETE_ARTICLE, payload: {articleId}})
        })
}







